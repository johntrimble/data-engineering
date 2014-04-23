(ns lschallenge.importjob
  (:require [clojure.data.csv :as csv]
            [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [lschallenge.dao :as dao]
            [clojure.tools.logging :as log]))

(def expected-header ["purchaser name"
                      "item description"
                      "item price"
                      "purchase count"
                      "merchant address"
                      "merchant name"])

(defn make-safe [f record-index]
  (fn [& args]
    (try
      (apply f args)
      (catch Exception ex
        #_(log/warn ex)
        (-> (nth args record-index)
            (assoc :error ex))))))

(defn make-skip-error [f]
  (fn [record]
    (if (:error record)
      record
      (f record))))

(defn format-record
  "Given a parsed record object, parse the number types appropriately."
  [record]
  (-> record
      ;; TODO: This is asking for trouble...
      (assoc :price (Math/round (* 100 (Double/parseDouble (:price record)))))
      (assoc :count (Integer/parseInt (:count record)))))

(def safe-format-record (make-safe format-record 0))

(defn read-import-data
  "Given a Reader instance or a string representing a CSV import, returns a
  seq of raw-records. Where a record has the form:
    {:purchaser \"Dr. Who\"
     :item \"Tardis\"
     :price 10000
     :count 1
     :address \"Gallifrey\"
     :merchant \"Timelords\"
     :line-num 1}"
  [input]
  (let [[orig-header & csv-data] (csv/read-csv input :separator \tab)
        header [:purchaser :item :price :count :address :merchant]]
    (when-not (= expected-header orig-header)
      (throw (IllegalArgumentException.
              (str "Header was invalid: " (str/join \tab orig-header)))))
    (->> csv-data
         (map (partial zipmap header))
         (map (fn [i record]
                (assoc record :line-num i))
              (iterate inc 1))
         (map safe-format-record))))

(def safe-import-record (make-safe dao/import-record 1))

(defn error->string [error]
  (if (instance? Exception error)
    (.getMessage error)
    (str error)))

(defn fix-record-error [record]
  (if (:error record)
    (assoc record :error (error->string (:error record)))
    record))

(defn generate-import-report
  "Given a seq of record import results, generates an import report with the
  following keys:
    :revenue - the revenue represented by the records successfully imported
    :import-count - the number of records successfully imported
    :error-count - the number of records that failed to import
    :errors - the first 100 records that failed to import"
  [records]
  (->> records
       (map fix-record-error)
       (reduce (fn [{:keys [revenue errors error-count import-count] :as result} record]
                 (if (:error record)
                   (let [result (assoc result :error-count (inc error-count))]
                     (if (< (count errors) 100)
                       ;; if we have less than 100 errors, include bad record
                       (assoc result :errors (conj errors record))
                       ;; it really hit the fan, error count is sufficient
                       result))
                   ;; okay, not an error
                   (-> result
                       (assoc :revenue (+ revenue (* (:count record 0) (:price record 0))))
                       (assoc :import-count (inc import-count)))))
               {:revenue 0 :errors [] :error-count 0 :import-count 0})))

(defn import-file
  "Imports the given file into the database and returns a report (see
  generate-import-report)."
  [db file]
  (with-open [input (io/reader file)]
    (doall (->> input
                read-import-data
                (map (make-skip-error (partial safe-import-record db)))
                generate-import-report))))
