(ns recipes-om.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [figwheel.client :as fw] 
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]
            [clojure.walk :refer [keywordize-keys]]
            [ajax.core :refer [GET]]))


(enable-console-print!)

(defonce app-state
  (atom
   {:recipes
    [{:name "Mochi" :url "http://www.japanesecooking101.com/sweet-mochi-recipe/"}
     {:name "Black Beans and Rice" :url "http://allrecipes.com/recipe/cuban-black-beans-i/"}
     {:name "Chicken a la King" :url "http://www.bettycrocker.com/recipes/chicken-a-la-king/2fd637ba-2c30-4db5-95d0-e57b4547251e"}
     {:name "Mexican Chocolate Tofu Pudding" :url "http://www.nytimes.com/2009/05/20/dining/201mrex.html"}]}))

(defn handler [response]
  ;;(.log js/console (str response))
  (swap! app-state assoc :recipes response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn display-recipe[{:keys [name url] :as recipe}]
  (dom/a #js {:href url} name))

;; TODO check that url starts with http
(defn parse-recipe[recipe-str]
  (let [[name url :as parts] (string/split recipe-str #"http")]
      {:name name :url (str "http" url)}))

(defn add-recipe [app owner]
  (let [new-recipe (parse-recipe
                    (str (.-value (om/get-node owner "name"))
                         (.-value (om/get-node owner "url"))))]
    (when new-recipe
      (om/transact! app :recipes #(conj % new-recipe)))))

(defn recipe-view [recipe owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/li nil
              (dom/span nil (display-recipe recipe))
              (dom/button #js {:onClick (fn [e] (put! delete @recipe) )}"Delete")))))

(defn recipes-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (chan)})
    om/IWillMount
    (will-mount [_]
      (GET "http://localhost:3000/recipes" {:handler handler
                                            :error-handler error-handler
                                            :response-format :json
                                            :keywords? true})
      (let [delete (om/get-state owner :delete)]
        (go (loop []
          (let [recipe (<! delete)]
            (om/transact! app :recipes
              (fn [xs] (vec (remove #(= recipe %) xs))))
            (recur))))))
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (dom/h2 nil "Recipe list")
        (apply dom/ul nil
          (om/build-all recipe-view (:recipes app)
            {:init-state state}))
        (dom/div nil
          (dom/input #js {:type "text" :placeholder "Name" :ref "name"})
          (dom/input #js {:type "text" :placeholder "Url" :ref "url"})
          (dom/button #js {:onClick #(add-recipe app owner)} "Add recipe"))))))


(om/root recipes-view app-state
         {:target (. js/document (getElementById "recipes"))})

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :jsload-callback
 (fn []
      (println "reloaded")))
  
