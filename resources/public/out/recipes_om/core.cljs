(ns recipes-om.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [figwheel.client :as fw] 
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))


(enable-console-print!)

(defonce app-state
  (atom
   {:recipes
    [{:title "Mochi" :url "http://www.japanesecooking101.com/sweet-mochi-recipe/"}
     {:title "Black Beans and Rice" :url "http://allrecipes.com/recipe/cuban-black-beans-i/"}
     {:title "Chicken a la King" :url "http://www.bettycrocker.com/recipes/chicken-a-la-king/2fd637ba-2c30-4db5-95d0-e57b4547251e"}
     {:title "Mexican Chocolate Tofu Pudding" :url "http://www.nytimes.com/2009/05/20/dining/201mrex.html"}]}))

(defn display-recipe[{:keys [title url] :as recipe}]
  (dom/a #js {:href url} title ))

;; TODO check that url starts with http
(defn parse-recipe[recipe-str]
  (let [[title url :as parts] (string/split recipe-str #"http")]
      {:title title :url (str "http" url)}))

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
  
