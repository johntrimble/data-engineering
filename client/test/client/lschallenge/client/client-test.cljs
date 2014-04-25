(ns lschallenge.client.client-tests
  (:require [lschallenge.client.core :as lschallenge]
            [speclj.core :refer-macros [describe
                                        it
                                        should==
                                        should=
                                        should-not==
                                        should-not=
                                        should-not
                                        should
                                        should-not-contain
                                        should-contain]]))

(enable-console-print!)


(describe "format-number"
          (it "should handle values less than 100"
              (should= "99" (lschallenge/format-number "99")))
          (it "should group numbers with commas"
              (should= "123,456,789" (lschallenge/format-number "123456789")))
          (it "should handle incomplete groups"
              (should= "1,234" (lschallenge/format-number "1234"))
              (should= "12,345" (lschallenge/format-number "12345"))))

(describe "format-price"
          (it "should properly handle 0 pennies"
              (should= "$0.00" (lschallenge/format-price 0)))
          (it "should properly handles less than 10 pennies"
              (should= "$0.01" (lschallenge/format-price 1))
              (should= "$0.09" (lschallenge/format-price 9)))
          (it "should properly handle less than 100"
              (should= "$0.10" (lschallenge/format-price 10))
              (should= "$0.42" (lschallenge/format-price 42))
              (should= "$0.99" (lschallenge/format-price 99)))
          (it "should properly group sequences of numbers with commas"
              (should= "$1,000.55" (lschallenge/format-price 100055))
              (should= "$987,654.78" (lschallenge/format-price 98765478)))
          (it "should handle big numbers"
              (should= "$8,322,588.08" (lschallenge/format-price 832258808))))

