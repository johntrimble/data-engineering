(ns lschallenge.handlerspec
  (:require [speclj.core :refer :all]
            [lschallenge.handler :as handler]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [speclj.run.standard]
            [lschallenge.ds :as ds]))

(def csv-string "purchaser name	item description	item price	purchase count	merchant address	merchant name
Snake Plissken	$10 off $20 of food	10.4	2	987 Fake St	Bob's Pizza
Amy Pond	$30 of awesome for $10	10.0	5	456 Unreal Rd	Tom's Awesome Shop
Bob Bobber	$30 of awesome for $10	bad value	5	456 Unreal Rd	Tom's Awesome Shop
Marty McFly	$20 Sneakers for $5	5.0	1	123 Fake St	Sneaker Store Emporium
Snake Plissken	$20 Sneakers for $5	5.0	4	123 Fake St	Sneaker Store Emporium")

(describe "read-import-data"
          (with records (handler/read-import-data csv-string))

          (it "produces a seq of records"
                (should (seq? @records)))

          (it "converts price to an integer representing the number of pennies"
              (should== 1040 (-> @records first :price))
              (should (->> @records
                           (filter (comp not :error))
                           (map :price)
                           (filter identity)
                           (every? (partial instance? Long)))))

          (it "adds a line number to each record"
              (should= (range 1 (inc (count @records)))
                       (map :line-num @records)))

          (it "does not fail because of individual bad records"
              (should= 1 (->> @records
                              (filter :error)
                              (map :price)
                              (filter (partial = "bad value"))
                              (count))))

          (it "throws an IllegalArgumentException if the header is wrong"
              (should-throw IllegalArgumentException
                            (handler/read-import-data "purchaser name	bad column name	item price	purchase count	merchant address	merchant name\nSnake Plissken	$10 off $20 of food	10.4	2	987 Fake St	Bob's Pizza"))))

(describe "generate-import-report"
          (with report
            (handler/generate-import-report [{:purchaser "Bob Bobber"
                                              :item "Self Sealing Stem Bolts"
                                              :price 1000
                                              :count 2
                                              :address "444 Nowhere Dr"
                                              :merchant "Billy's"}
                                             {:purchaser "Phil Harmonic"
                                              :item "Orchestra"
                                              :price 1001
                                              :count 3
                                              :address "444 Noplace Dr"
                                              :merchant "Somebody"
                                              :error true}
                                             {:purchaser "Bill Billard"
                                              :item "Billiards"
                                              :price 1337
                                              :count 5
                                              :address "555 Other Dr"
                                              :merchant "Billy's Billards"}]))

          (it "provides a count of records successfully imported"
              (should= 2 (:import-count @report)))

          (it "provides a count of failed record imports"
              (should= 1 (:error-count @report)))

          (it "provides a collection of records in error"
              (should= 1 (count (:errors @report)))
              (should= "Phil Harmonic" (-> @report
                                           :errors
                                           first
                                           :purchaser)))

          (it "indicates the amount of revenue imported"
              (should= 8685 (:revenue @report))))


(describe "import-file"
          (before-all (ds/drop-data ds/db)
                      (let [temp-file (java.io.File/createTempFile "temp-lschallenge" "csv")]
                        (try
                          (with-open [output (io/writer temp-file)]
                            (.write output csv-string))
                          (handler/import-file ds/db temp-file)
                          (finally (io/delete-file temp-file true)))))

          (with data (ds/dump-db ds/db))

          (it "imports all valid purchases in CSV"
              (should= 4 (count (:purchase @data))))

          (it "treates persons with the same name as the same person"
              (should= 6 (count (:person @data))))

          (it "treates items of the same name and price as the same item"
              (should= 3 (count (:item @data))))

          (it "treates addresses with the same string value as the same address"
              (should= 3 (count (:address @data))))

          (it "associates merchants with their address"
              (let [id (:id
                        (handler/get-or-create-person
                         ds/db
                         {:name "Sneaker Store Emporium"}))
                    address (-> (group-by :person_id (-> @data
                                                         :address
                                                         vals))
                                (get id)
                                (first)
                                :address)]
                (should= "123 Fake St" address)))

          (after-all (ds/drop-data ds/db)))

(run-specs)
