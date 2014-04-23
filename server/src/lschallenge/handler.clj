(ns lschallenge.handler
  (:use compojure.core)
  (:require [lschallenge.ds :as ds]
            [lschallenge.importjob :as job]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :as resp]
            [ring.middleware.json :as middleware]
            [clojure.pprint :as pprint]
            [clojure.tools.logging :as log])
  (:import [java.util Properties]
           [com.jolbox.bonecp BoneCPDataSource])
  (:gen-class))

(def api-routes (middleware/wrap-json-response
                 (routes
                  (POST "/api/upload"
                        [file]
                        (let [report (job/import-file ds/db (:tempfile file))]
                          {:body report})))))

(defroutes app-routes
  api-routes
  (GET "/" [] (resp/redirect "/index.html"))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))

(defn -main [& args]
  (jetty/run-jetty app {:port 4000}))
