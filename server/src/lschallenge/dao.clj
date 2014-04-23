(ns lschallenge.dao
  (:require [clojure.java.jdbc :as jdbc]))

(defn get-or-create-person
  [db p]
  (jdbc/with-db-transaction
   [t-con db]
   (if-let [p-db (first (jdbc/query t-con
                                    ["select * from person where name = ? limit 1" (:name p)]))]
     p-db
     (merge p (first (jdbc/insert! db :person p))))))

(defn get-or-create-item
  [db item]
  (jdbc/with-db-transaction
   [t-con db]
   (if-let [item-db (first (jdbc/query t-con
                                       ["select * from item where name = ? and price = ? limit 1" (:name item) (:price item)]))]
     item-db
     (merge item (first (jdbc/insert! db :item item))))))

(defn get-or-create-address [db address]
  (jdbc/with-db-transaction
   [t-con db]
   (if-let [address-db (first (jdbc/query t-con
                                       ["select * from address where address = ? limit 1" (:address address)]))]
     address-db
     (merge address (first (jdbc/insert! db :address address))))))

(defn create-purchase [db purchase]
  (merge purchase (first (jdbc/insert! db :purchase purchase))))

(defn import-record
  "Imports the given record into the database."
  [db record]
  (jdbc/with-db-transaction
   [t-con db]
   (let [person (get-or-create-person t-con {:name (:purchaser record)})
         merchant (get-or-create-person t-con {:name (:merchant record)})
         address (get-or-create-address t-con {:address (:address record)
                                               :person_id (:id merchant)})
         item (get-or-create-item t-con {:name (:item record)
                                         :price (:price record)})
         purchase (create-purchase t-con {:purchaser_id (:id person)
                                          :merchant_id (:id merchant)
                                          :item_id (:id item)
                                          :item_count (:count record)})]
     record)))
