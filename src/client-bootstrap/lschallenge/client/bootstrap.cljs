(ns lschallenge.client.bootstrap
  (:require [lschallenge.client.core :refer [insert-root-component! load-features!]]))

(enable-console-print!)

(insert-root-component! (.getElementById js/document "features"))
(load-features!)
