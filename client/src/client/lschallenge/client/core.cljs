(ns lschallenge.client.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.net.XhrIo :as XhrIo]))

(def app-state (atom {:whoami {:name "Bob Bobber"}
                      :oauth-providers [{:type :googleplus}
                                        {:type :github}]
                      :csv-upload {:url ""
                                   :import-progress-url ""
                                   :status :upload}}))

(def login-view-data {:googleplus {:btn-class "btn-google-plus"
                                   :icon-class "fa-google-plus"
                                   :text "Sign in with Google Plus"}
                      :github {:btn-class "btn-github"
                               :icon-class "fa-github"
                               :text "Sign in with GitHub"}})

(defn login-provider-view [provider owner]
  (reify
    om/IRender
    (render [this]
            (let [{:keys [btn-class icon-class text]} (login-view-data (:type provider))]
              (dom/a #js {:className (str "btn btn-block btn-social " btn-class)}
                     (dom/i #js {:className (str "fa " icon-class)})
                     text)))))

(defn logins-view [providers owner]
  (reify
    om/IRender
    (render
     [this]
     (dom/div #js {:className "login"}
              (dom/h1 nil "Please Login")
              (apply dom/div nil
                     (om/build-all login-provider-view providers))))))

(defn send-file [file csv-upload]
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
                            (om/transact! csv-upload :loaded
                                          (fn [_] (.-loaded %))))
                         false)
      (.addEventListener "load"
                         #(om/transact! csv-upload
                                        (fn [oldstate]
                                          (merge oldstate {:loaded (:size oldstate)
                                                           :status :done})))
                         false)
      (.addEventListener "error"
                         #(om/transact! csv-upload
                                        (fn [oldstate]
                                          (merge oldstate {:loaded (:size oldstate)
                                                           :status :error})))
                         false)
      (.addEventListener "abort" #(om/transact! csv-upload
                                                (fn [oldstate]
                                                  (merge oldstate {:loaded (:size oldstate)
                                                                   :status :abort})))
                         false))
    (doto xhr
      (.open "POST" "/api/upload", true)
      (.send fd))))

(defn upload-view [csv-upload owner]
  (reify
    om/IRender
    (render
     [this]

     ;; TODO: multimethod?
     (case (:status csv-upload)
       :uploading
       (let [{:keys [loaded size]} csv-upload
             percent (if (and loaded size)
                          (/ loaded size)
                          0.0)
             percent-str (str (int (* 100 percent)))]
         (dom/div #js {:className "upload"}
                  (dom/h1 nil "CSV Import")
                  (dom/div #js {:className "progress"}
                           (dom/div #js {:className "progress-bar"
                                         :role "progressbar"
                                         :aria-valuenow percent-str
                                         :aria-value-min "0"
                                         :aria-value-max "100"
                                         :style #js {:width (str percent-str "%")}}
                                    (str percent-str "%")))))

       :done
       (dom/div #js {:className "upload"}
                (dom/h1 nil "CSV Import")
                (dom/p nil (str "Done uploading " (:file-name csv-upload) ".")))


       :error
       (dom/div #js {:className "upload"}
                (dom/h1 nil "CSV Import")
                (dom/p nil (str "Could not upload " (:file-name csv-upload) ".")))

       :abort
              (dom/div #js {:className "upload"}
                (dom/h1 nil "CSV Import")
                (dom/p nil (str "Upload of " (:file-name csv-upload) " was canceled.")))

       ;; default
       (dom/div #js {:className "upload"}
                (dom/h1 nil "CSV Import")
                (dom/span #js {:className (str "file-input btn btn-primary btn-file")}
                          "Select File"
                          (dom/input #js {:type "file"
                                          :onChange (fn [e]
                                                      (let [file (aget (.-files (.-target e)) 0)]
                                                        (send-file file csv-upload)))})))))))


(defn app-view [app owner]
  (dom/div #js {:className "container"}
           (if-not (:whoami app)
             (om/build logins-view (:oauth-providers app))
             (om/build upload-view (:csv-upload app)))))


(defn insert-root-component! [target]
  (om/root app-view
           app-state
           {:target target}))
