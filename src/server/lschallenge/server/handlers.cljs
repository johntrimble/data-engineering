(ns lschallenge.server.handlers
  (:require [lschallenge.util :as util]))

(defn uuid [] (.v4 (js/require "node-uuid")))

;; TODO: Storing this sort of data in memory on the server causes problems.
;; For one, it makes clustering difficult (need to know which server the
;; relevant application state is stored on). Also, it doesn't seem like this
;; state should be stored at all, it should just be a stream of events back to
;; the client whilst the job is running. Alas...
(def import-jobs (atom {}))

(defn purge-stale-imports
  "Given a mapping of jobs IDs to job state atoms, returns the same mapping
  excluding jobs over an hour old, or if a threshold is specified, excluding
  those created before the threshold."
  ([import-jobs]
     (purge-stale-imports import-jobs
                          (- (.getTime (js/Date.)) (* 1 60 60 1000))))
  ([import-jobs threshold]
   (->> import-jobs
        (filter (fn [[id job-ref]]
                  (< threshold (-> job-ref deref :created))))
        (into {}))))

(defn file-upload [req res]
  ;; TODO: A websocket might be better here so that we can stream processing
  ;; events back to the client.
  (js/console.log (.-file (.-files req)))
  ;; 1. Purge stale jobs
  (swap! import-jobs purge-stale-imports)
  ;; 2. Store current state of import
  (let [id (uuid)]
    (swap! import-jobs conj id {:id id
                                :created (.getTime (js/Date.))
                                :errors []}))
  ;; 3. Kick off import
  ;; 4. Return response with URL to monitor job status
  (.send res 202))
