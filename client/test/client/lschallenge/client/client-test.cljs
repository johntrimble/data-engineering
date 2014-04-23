(ns lschallenge.client.client-tests
  (:require [speclj.core :refer-macros [describe
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

(describe "Test of a test"
          (it "should work"
              (should true)))
