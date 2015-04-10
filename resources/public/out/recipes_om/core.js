// Compiled by ClojureScript 0.0-2843 {}
goog.provide('recipes_om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.data');
goog.require('figwheel.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof recipes_om.core.app_state !== 'undefined'){
} else {
recipes_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Mochi",new cljs.core.Keyword(null,"url","url",276297046),"http://www.japanesecooking101.com/sweet-mochi-recipe/"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Black Beans and Rice",new cljs.core.Keyword(null,"url","url",276297046),"http://allrecipes.com/recipe/cuban-black-beans-i/"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Chicken a la King",new cljs.core.Keyword(null,"url","url",276297046),"http://www.bettycrocker.com/recipes/chicken-a-la-king/2fd637ba-2c30-4db5-95d0-e57b4547251e"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Mexican Chocolate Tofu Pudding",new cljs.core.Keyword(null,"url","url",276297046),"http://www.nytimes.com/2009/05/20/dining/201mrex.html"], null)], null)], null));
}
recipes_om.core.display_recipe = (function display_recipe(p__24343){
var map__24345 = p__24343;
var map__24345__$1 = ((cljs.core.seq_QMARK_.call(null,map__24345))?cljs.core.apply.call(null,cljs.core.hash_map,map__24345):map__24345);
var recipe = map__24345__$1;
var url = cljs.core.get.call(null,map__24345__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__24345__$1,new cljs.core.Keyword(null,"title","title",636505583));
return React.DOM.a({"href": url},title);
});
recipes_om.core.parse_recipe = (function parse_recipe(recipe_str){
var vec__24347 = clojure.string.split.call(null,recipe_str,/http/);
var title = cljs.core.nth.call(null,vec__24347,(0),null);
var url = cljs.core.nth.call(null,vec__24347,(1),null);
var parts = vec__24347;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("http"),cljs.core.str(url)].join('')], null);
});
recipes_om.core.add_recipe = (function add_recipe(app,owner){
var new_recipe = recipes_om.core.parse_recipe.call(null,[cljs.core.str(om.core.get_node.call(null,owner,"name").value),cljs.core.str(om.core.get_node.call(null,owner,"url").value)].join(''));
if(cljs.core.truth_(new_recipe)){
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"recipes","recipes",-325236209),((function (new_recipe){
return (function (p1__24348_SHARP_){
return cljs.core.conj.call(null,p1__24348_SHARP_,new_recipe);
});})(new_recipe))
);
} else {
return null;
}
});
recipes_om.core.recipe_view = (function recipe_view(recipe,owner){
if(typeof recipes_om.core.t24354 !== 'undefined'){
} else {

/**
* @constructor
*/
recipes_om.core.t24354 = (function (owner,recipe,recipe_view,meta24355){
this.owner = owner;
this.recipe = recipe;
this.recipe_view = recipe_view;
this.meta24355 = meta24355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
recipes_om.core.t24354.prototype.om$core$IRenderState$ = true;

recipes_om.core.t24354.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__24357){
var self__ = this;
var map__24358 = p__24357;
var map__24358__$1 = ((cljs.core.seq_QMARK_.call(null,map__24358))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358):map__24358);
var delete$ = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var this$__$1 = this;
return React.DOM.li(null,React.DOM.span(null,recipes_om.core.display_recipe.call(null,self__.recipe)),React.DOM.button({"onClick": ((function (this$__$1,map__24358,map__24358__$1,delete$){
return (function (e){
return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.recipe));
});})(this$__$1,map__24358,map__24358__$1,delete$))
},"Delete"));
});

recipes_om.core.t24354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24356){
var self__ = this;
var _24356__$1 = this;
return self__.meta24355;
});

recipes_om.core.t24354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24356,meta24355__$1){
var self__ = this;
var _24356__$1 = this;
return (new recipes_om.core.t24354(self__.owner,self__.recipe,self__.recipe_view,meta24355__$1));
});

recipes_om.core.t24354.cljs$lang$type = true;

recipes_om.core.t24354.cljs$lang$ctorStr = "recipes-om.core/t24354";

recipes_om.core.t24354.cljs$lang$ctorPrWriter = (function (this__16795__auto__,writer__16796__auto__,opt__16797__auto__){
return cljs.core._write.call(null,writer__16796__auto__,"recipes-om.core/t24354");
});

recipes_om.core.__GT_t24354 = (function __GT_t24354(owner__$1,recipe__$1,recipe_view__$1,meta24355){
return (new recipes_om.core.t24354(owner__$1,recipe__$1,recipe_view__$1,meta24355));
});

}

return (new recipes_om.core.t24354(owner,recipe,recipe_view,cljs.core.PersistentArrayMap.EMPTY));
});
recipes_om.core.recipes_view = (function recipes_view(app,owner){
if(typeof recipes_om.core.t24384 !== 'undefined'){
} else {

/**
* @constructor
*/
recipes_om.core.t24384 = (function (owner,app,recipes_view,meta24385){
this.owner = owner;
this.app = app;
this.recipes_view = recipes_view;
this.meta24385 = meta24385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
recipes_om.core.t24384.prototype.om$core$IRenderState$ = true;

recipes_om.core.t24384.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"Recipe list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,recipes_om.core.recipe_view,new cljs.core.Keyword(null,"recipes","recipes",-325236209).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null))),React.DOM.div(null,om.dom.input.call(null,{"ref": "name", "placeholder": "Name", "type": "text"}),om.dom.input.call(null,{"ref": "url", "placeholder": "Url", "type": "text"}),React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return recipes_om.core.add_recipe.call(null,self__.app,self__.owner);
});})(this$__$1))
},"Add recipe")));
});

recipes_om.core.t24384.prototype.om$core$IWillMount$ = true;

recipes_om.core.t24384.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var c__19312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19312__auto__,delete$,___$1){
return (function (){
var f__19313__auto__ = (function (){var switch__19256__auto__ = ((function (c__19312__auto__,delete$,___$1){
return (function (state_24396){
var state_val_24397 = (state_24396[(1)]);
if((state_val_24397 === (4))){
var inst_24389 = (state_24396[(2)]);
var inst_24390 = (function (){var recipe = inst_24389;
return ((function (recipe,inst_24389,state_val_24397,c__19312__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (recipe,inst_24389,state_val_24397,c__19312__auto__,delete$,___$1){
return (function (p1__24359_SHARP_){
return cljs.core._EQ_.call(null,recipe,p1__24359_SHARP_);
});})(recipe,inst_24389,state_val_24397,c__19312__auto__,delete$,___$1))
,xs));
});
;})(recipe,inst_24389,state_val_24397,c__19312__auto__,delete$,___$1))
})();
var inst_24391 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"recipes","recipes",-325236209),inst_24390);
var state_24396__$1 = (function (){var statearr_24398 = state_24396;
(statearr_24398[(7)] = inst_24391);

return statearr_24398;
})();
var statearr_24399_24408 = state_24396__$1;
(statearr_24399_24408[(2)] = null);

(statearr_24399_24408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (3))){
var inst_24394 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24396__$1,inst_24394);
} else {
if((state_val_24397 === (2))){
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24396__$1,(4),delete$);
} else {
if((state_val_24397 === (1))){
var state_24396__$1 = state_24396;
var statearr_24400_24409 = state_24396__$1;
(statearr_24400_24409[(2)] = null);

(statearr_24400_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19312__auto__,delete$,___$1))
;
return ((function (switch__19256__auto__,c__19312__auto__,delete$,___$1){
return (function() {
var state_machine__19257__auto__ = null;
var state_machine__19257__auto____0 = (function (){
var statearr_24404 = [null,null,null,null,null,null,null,null];
(statearr_24404[(0)] = state_machine__19257__auto__);

(statearr_24404[(1)] = (1));

return statearr_24404;
});
var state_machine__19257__auto____1 = (function (state_24396){
while(true){
var ret_value__19258__auto__ = (function (){try{while(true){
var result__19259__auto__ = switch__19256__auto__.call(null,state_24396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19259__auto__;
}
break;
}
}catch (e24405){if((e24405 instanceof Object)){
var ex__19260__auto__ = e24405;
var statearr_24406_24410 = state_24396;
(statearr_24406_24410[(5)] = ex__19260__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24411 = state_24396;
state_24396 = G__24411;
continue;
} else {
return ret_value__19258__auto__;
}
break;
}
});
state_machine__19257__auto__ = function(state_24396){
switch(arguments.length){
case 0:
return state_machine__19257__auto____0.call(this);
case 1:
return state_machine__19257__auto____1.call(this,state_24396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19257__auto____0;
state_machine__19257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19257__auto____1;
return state_machine__19257__auto__;
})()
;})(switch__19256__auto__,c__19312__auto__,delete$,___$1))
})();
var state__19314__auto__ = (function (){var statearr_24407 = f__19313__auto__.call(null);
(statearr_24407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19312__auto__);

return statearr_24407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19314__auto__);
});})(c__19312__auto__,delete$,___$1))
);

return c__19312__auto__;
});

recipes_om.core.t24384.prototype.om$core$IInitState$ = true;

recipes_om.core.t24384.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null)], null);
});

recipes_om.core.t24384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24386){
var self__ = this;
var _24386__$1 = this;
return self__.meta24385;
});

recipes_om.core.t24384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24386,meta24385__$1){
var self__ = this;
var _24386__$1 = this;
return (new recipes_om.core.t24384(self__.owner,self__.app,self__.recipes_view,meta24385__$1));
});

recipes_om.core.t24384.cljs$lang$type = true;

recipes_om.core.t24384.cljs$lang$ctorStr = "recipes-om.core/t24384";

recipes_om.core.t24384.cljs$lang$ctorPrWriter = (function (this__16795__auto__,writer__16796__auto__,opt__16797__auto__){
return cljs.core._write.call(null,writer__16796__auto__,"recipes-om.core/t24384");
});

recipes_om.core.__GT_t24384 = (function __GT_t24384(owner__$1,app__$1,recipes_view__$1,meta24385){
return (new recipes_om.core.t24384(owner__$1,app__$1,recipes_view__$1,meta24385));
});

}

return (new recipes_om.core.t24384(owner,app,recipes_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,recipes_om.core.recipes_view,recipes_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("recipes")], null));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return cljs.core.println.call(null,"reloaded");
}));

//# sourceMappingURL=core.js.map