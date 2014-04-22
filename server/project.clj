(defproject lschallenge "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [compojure "1.1.6"]
                 [org.clojure/java.jdbc "0.3.3"]
                 [org.clojure/data.json "0.2.4"]
                 [org.clojure/data.csv "0.1.2"]
                 [org.hsqldb/hsqldb "2.2.4"]
                 [com.jolbox/bonecp "0.8.0.RELEASE"]
                 [ring/ring-jetty-adapter "1.1.0"]
                 [ch.qos.logback/logback-classic "1.1.2"]
                 [org.clojure/tools.logging "0.2.6"]
                 [ring/ring-json "0.3.1"]]
  :plugins [[lein-ring "0.8.10"]
            [speclj "3.0.2"]]
  :test-paths ["spec"]
  :aot  [lschallenge.handler]
  :main lschallenge.handler
  :ring {:handler lschallenge.handler/app
         :port 4000}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]
                        [speclj "3.0.2"]]}})
