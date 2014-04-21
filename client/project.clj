(defproject lschallenge-client "0.0.0-SNAPSHOT"
  :description "lschallenge client"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [om "0.4.2"]
                 [speclj "3.0.1"]]

  :plugins [[lein-cljsbuild "1.0.1"]
            [lein-pprint "1.1.1"]]

  :profiles {:production
             {:cljsbuild
              {:builds
               {:client {:compiler {:optimizations :advanced
                                    :pretty-print false
                                    :externs ["app/bower_components/react/react.js"]
                                    :closure-warnings {:externs-validation :off
                                                       :non-standard-jsdoc :off}}}
                :client-test {:compiler {:optimizations :advanced
                                         :pretty-print false
                                         :externs ["app/bower_components/react/react.js"]
                                         :closure-warnings {:externs-validation :off
                                                            :non-standard-jsdoc :off}}}}}}}

  :cljsbuild {:builds {:client
                       {:source-paths ["src/common" "src/client" "src/client-bootstrap"]
                        :compiler {:output-to "target/public/scripts/main.js"
                                   :output-dir "target/public/scripts/out"
                                   :source-map "target/public/scripts/main.js.map"
                                   :language-in :ecmascript5
                                   :optimizations :whitespace}}
                       :client-test
                       {:source-paths ["src/common" "src/client" "test/client"]
                        :compiler {:output-to "target/test/client/main.js"
                                   :output-dir "target/test/client/out"
                                   :source-map "target/test/client/main.js.map"
                                   :language-in :ecmascript5
                                   :optimizations :whitespace}}}})
