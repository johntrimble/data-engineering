(ns lschallenge.client.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [clojure.string :as str]
            [goog.string.format]))

(def app-state (atom {:csv-upload {:status :upload}}))

;; WARNING: The following function is horrifying
(defn send-file
  "Given a file and a csv-upload ref, uploads the file to the server and
  updates the csv-upload appropriately."
  [file csv-upload]
  (let [xhr (js/XMLHttpRequest.)
        fd (js/FormData.)]
    (om/transact! csv-upload (fn [oldstate]
                              (merge oldstate {:file-name (.-name file)
                                               :status :uploading
                                               :loaded 0.0
                                               :size (.-size file)})))
    (.append fd "file" file)

    ;; TODO: core.async goes here
    (doto (.-upload xhr)
      (.addEventListener "progress"
                         #(if (.-lengthComputable %)
                            (om/transact! csv-upload
                                          (fn [oldstate]
                                            (if (and (= (:status oldstate) :uploading)
                                                     (>= (.-loaded %) (:size oldstate)))
                                              (merge oldstate {:status :upload-finished
                                                               :loaded (.-loaded %)})
                                              (merge oldstate {:loaded (.-loaded %)})))))
                         false)
      (.addEventListener "error"
                         #(om/transact! csv-upload
                                        (fn [oldstate]
                                          (merge oldstate {:loaded (:size oldstate)
                                                           :status :error})))
                         false)
      (.addEventListener "abort" #(om/transact! csv-upload
                                                (fn [oldstate]
                                                  (merge oldstate {:status :abort})))
                         false))
    (doto xhr
      (.open "POST" "/api/upload", true)
      (.addEventListener "readystatechange"
                         (fn [e]
                           (when (= 4 (aget xhr "readyState"))
                             (let [status (aget xhr "status")]
                               (if (and (< status 300) (>= status 200))
                                 ;; proccessing successful!
                                 (om/transact! csv-upload
                                               (fn [oldstate]
                                                 (merge oldstate
                                                        (js->clj (js/JSON.parse (aget xhr "responseText"))
                                                                 :keywordize-keys true)
                                                        {:status :done})))
                                 ;; not so successful
                                 (om/transact! csv-upload
                                               (fn [oldstate]
                                                 (merge oldstate {:status :error}))))))
                           false))
      (.send fd))))

(defn reset-file-upload
  "Resets csv-upload to the initial state."
  [csv-upload]
  (om/transact! csv-upload (fn [_] {:status :upload})))


;; as far as I can tell, goog.string.format is insufficient to replace the
;; following two functions.

(defn format-number
  "Given an integer or a string representing an integer, returns a nicely
  formatted version of the integer."
  [n]
  (let [n-str (if (string? n) n (str n))]
    (->> n-str
         reverse
         (partition 3 3 nil)
         (map (partial filter identity))
         (map (partial apply str))
         (str/join ",")
         reverse
         (apply str))))

(defn format-price
  "Given an integer or string representing an amount of pennies, creates a
  formatted string representing the dollar amount."
  [pennies]
  (let [pennies-str (if (string? pennies)
                      pennies
                      (str pennies))
        change-str (apply str (reverse (take 2 (concat (reverse pennies-str) (repeat \0)))))
        dollars-str (->> pennies-str
                         reverse
                         (drop 2)
                         reverse
                         (apply str)
                         format-number)
        dollars-str (if (str/blank? dollars-str)
                      "0"
                      dollars-str)]
    (str "$" dollars-str "." change-str)))

(defmulti upload-view (fn [csv-upload _] (:status csv-upload)))

(defmethod upload-view :uploading
  [csv-upload owner]
  (reify
    om/IRender
    (render [this]
            (let [{:keys [loaded size]} csv-upload
                  percent (if (and loaded size)
                            (/ loaded size)
                            0.0)
                  percent-str (str (int (* 100 percent)))]
              (dom/div nil
                       (dom/p nil (str "Uploading file " (:file-name csv-upload) "."))
                       (dom/div #js {:className "progress"}
                                (dom/div #js {:className "progress-bar"
                                              :role "progressbar"
                                              :aria-valuenow percent-str
                                              :aria-value-min "0"
                                              :aria-value-max "100"
                                              :style #js {:width (str percent-str "%")}}
                                         (str percent-str "%"))))))))

(defmethod upload-view :upload-finished
  [csv-upload owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                     (dom/p nil (str "Done uploading " (:file-name csv-upload) ". Waiting for import job to complete..."))
                     (dom/div #js {:className "progress progress-striped active"}
                              (dom/div #js {:className "progress-bar"
                                            :role "progressbar"
                                            :aria-valuenow "100"
                                            :aria-value-min "0"
                                            :aria-value-max "100"
                                            :style #js {:width "100%"}}))))))

(defmethod upload-view :error
  [csv-upload owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                     (dom/p nil (str "Could not upload " (:file-name csv-upload) "."))
                     (dom/p nil
                            (dom/a #js {:onClick #(reset-file-upload csv-upload)}
                                   "Try another file?"))))))

(defmethod upload-view :abort
  [csv-upload owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                     (dom/p nil (str "Upload of " (:file-name csv-upload) " was canceled."))
                     (dom/p nil
                            (dom/a #js {:onClick #(reset-file-upload csv-upload)}
                                   "Try another file?"))))))

(defmethod upload-view :done
  [csv-upload owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                     (dom/p nil
                            (str "Import complete! "
                                 (format-number (:import-count csv-upload)) " records were imported. "
                                 (format-number (:error-count csv-upload)) " records failed to import. "
                                 (format-price (:revenue csv-upload)) " of revenue imported."))
                     (dom/p nil
                            (dom/a #js {:onClick #(reset-file-upload csv-upload)}
                                   "Upload another file?"))))))

(defmethod upload-view :default
  [csv-upload owner]
  (reify
    om/IRender
    (render [this]
            (dom/span #js {:className (str "file-input btn btn-primary btn-file")}
                      "Select File"
                      (dom/input #js {:type "file"
                                      :onChange (fn [e]
                                                  (let [file (aget (.-files (.-target e)) 0)]
                                                    (send-file file csv-upload)))})))))

(defn app-view [app owner]
  (dom/div #js {:className "container"}
           (dom/div #js {:className "upload"}
                    (dom/h1 nil "CSV Import")
                    (om/build upload-view (:csv-upload app)))))

(defn insert-root-component! [target]
  (om/root app-view
           app-state
           {:target target}))
