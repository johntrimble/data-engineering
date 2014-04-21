(ns lschallenge.util)

(defn ->json [obj]
  (js/JSON.stringify (clj->js obj)))
