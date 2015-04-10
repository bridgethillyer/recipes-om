// Compiled by ClojureScript 0.0-2843 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34399_SHARP_,p2__34400_SHARP_){
var and__16197__auto__ = p1__34399_SHARP_;
if(cljs.core.truth_(and__16197__auto__)){
return p2__34400_SHARP_;
} else {
return and__16197__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__16209__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16209__auto__){
return or__16209__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34402_SHARP_,p2__34401_SHARP_){
return [cljs.core.str(p2__34401_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16209__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16209__auto__){
return or__16209__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16209__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17109__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17110__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17110__auto__,method_table__17106__auto__,prefer_table__17107__auto__,method_cache__17108__auto__,cached_hierarchy__17109__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34403){
var map__34404 = p__34403;
var map__34404__$1 = ((cljs.core.seq_QMARK_.call(null,map__34404))?cljs.core.apply.call(null,cljs.core.hash_map,map__34404):map__34404);
var file = cljs.core.get.call(null,map__34404__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34405){
var map__34406 = p__34405;
var map__34406__$1 = ((cljs.core.seq_QMARK_.call(null,map__34406))?cljs.core.apply.call(null,cljs.core.hash_map,map__34406):map__34406);
var namespace = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17109__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17110__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17110__auto__,method_table__17106__auto__,prefer_table__17107__auto__,method_cache__17108__auto__,cached_hierarchy__17109__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34407){if((e34407 instanceof Error)){
var e = e34407;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34407;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__34408,callback){
var map__34410 = p__34408;
var map__34410__$1 = ((cljs.core.seq_QMARK_.call(null,map__34410))?cljs.core.apply.call(null,cljs.core.hash_map,map__34410):map__34410);
var file_msg = map__34410__$1;
var request_url = cljs.core.get.call(null,map__34410__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34410,map__34410__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34410,map__34410__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__34411){
var map__34413 = p__34411;
var map__34413__$1 = ((cljs.core.seq_QMARK_.call(null,map__34413))?cljs.core.apply.call(null,cljs.core.hash_map,map__34413):map__34413);
var file_msg = map__34413__$1;
var meta_data = cljs.core.get.call(null,map__34413__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__34413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16209__auto__ = meta_data;
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16197__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16197__auto__){
var or__16209__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16209__auto____$1)){
return or__16209__auto____$1;
} else {
var and__16197__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16197__auto____$1){
var or__16209__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16209__auto____$2){
return or__16209__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16197__auto____$1;
}
}
}
} else {
return and__16197__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__34414,callback){
var map__34416 = p__34414;
var map__34416__$1 = ((cljs.core.seq_QMARK_.call(null,map__34416))?cljs.core.apply.call(null,cljs.core.hash_map,map__34416):map__34416);
var file_msg = map__34416__$1;
var namespace = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19313__auto___34503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___34503,out){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___34503,out){
return (function (state_34485){
var state_val_34486 = (state_34485[(1)]);
if((state_val_34486 === (7))){
var inst_34469 = (state_34485[(7)]);
var inst_34475 = (state_34485[(2)]);
var inst_34476 = cljs.core.async.put_BANG_.call(null,out,inst_34475);
var inst_34465 = inst_34469;
var state_34485__$1 = (function (){var statearr_34487 = state_34485;
(statearr_34487[(8)] = inst_34476);

(statearr_34487[(9)] = inst_34465);

return statearr_34487;
})();
var statearr_34488_34504 = state_34485__$1;
(statearr_34488_34504[(2)] = null);

(statearr_34488_34504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (6))){
var inst_34481 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34489_34505 = state_34485__$1;
(statearr_34489_34505[(2)] = inst_34481);

(statearr_34489_34505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (5))){
var inst_34479 = cljs.core.async.close_BANG_.call(null,out);
var state_34485__$1 = state_34485;
var statearr_34490_34506 = state_34485__$1;
(statearr_34490_34506[(2)] = inst_34479);

(statearr_34490_34506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (4))){
var inst_34468 = (state_34485[(10)]);
var inst_34473 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34468);
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34485__$1,(7),inst_34473);
} else {
if((state_val_34486 === (3))){
var inst_34483 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34485__$1,inst_34483);
} else {
if((state_val_34486 === (2))){
var inst_34468 = (state_34485[(10)]);
var inst_34465 = (state_34485[(9)]);
var inst_34468__$1 = cljs.core.nth.call(null,inst_34465,(0),null);
var inst_34469 = cljs.core.nthnext.call(null,inst_34465,(1));
var inst_34470 = (inst_34468__$1 == null);
var inst_34471 = cljs.core.not.call(null,inst_34470);
var state_34485__$1 = (function (){var statearr_34491 = state_34485;
(statearr_34491[(10)] = inst_34468__$1);

(statearr_34491[(7)] = inst_34469);

return statearr_34491;
})();
if(inst_34471){
var statearr_34492_34507 = state_34485__$1;
(statearr_34492_34507[(1)] = (4));

} else {
var statearr_34493_34508 = state_34485__$1;
(statearr_34493_34508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (1))){
var inst_34463 = cljs.core.nth.call(null,files,(0),null);
var inst_34464 = cljs.core.nthnext.call(null,files,(1));
var inst_34465 = files;
var state_34485__$1 = (function (){var statearr_34494 = state_34485;
(statearr_34494[(11)] = inst_34464);

(statearr_34494[(12)] = inst_34463);

(statearr_34494[(9)] = inst_34465);

return statearr_34494;
})();
var statearr_34495_34509 = state_34485__$1;
(statearr_34495_34509[(2)] = null);

(statearr_34495_34509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19313__auto___34503,out))
;
return ((function (switch__19257__auto__,c__19313__auto___34503,out){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34499[(0)] = state_machine__19258__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var state_machine__19258__auto____1 = (function (state_34485){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_34485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__19261__auto__ = e34500;
var statearr_34501_34510 = state_34485;
(statearr_34501_34510[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34511 = state_34485;
state_34485 = G__34511;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_34485){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_34485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___34503,out))
})();
var state__19315__auto__ = (function (){var statearr_34502 = f__19314__auto__.call(null);
(statearr_34502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___34503);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___34503,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__34512,p__34513){
var map__34516 = p__34512;
var map__34516__$1 = ((cljs.core.seq_QMARK_.call(null,map__34516))?cljs.core.apply.call(null,cljs.core.hash_map,map__34516):map__34516);
var opts = map__34516__$1;
var url_rewriter = cljs.core.get.call(null,map__34516__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34517 = p__34513;
var map__34517__$1 = ((cljs.core.seq_QMARK_.call(null,map__34517))?cljs.core.apply.call(null,cljs.core.hash_map,map__34517):map__34517);
var file_msg = map__34517__$1;
var file = cljs.core.get.call(null,map__34517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__34518){
var map__34521 = p__34518;
var map__34521__$1 = ((cljs.core.seq_QMARK_.call(null,map__34521))?cljs.core.apply.call(null,cljs.core.hash_map,map__34521):map__34521);
var file = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16197__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16197__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16197__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34522){var e = e34522;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__34527,p__34528){
var map__34729 = p__34527;
var map__34729__$1 = ((cljs.core.seq_QMARK_.call(null,map__34729))?cljs.core.apply.call(null,cljs.core.hash_map,map__34729):map__34729);
var opts = map__34729__$1;
var load_unchanged_files = cljs.core.get.call(null,map__34729__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__34729__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__34729__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__34730 = p__34528;
var map__34730__$1 = ((cljs.core.seq_QMARK_.call(null,map__34730))?cljs.core.apply.call(null,cljs.core.hash_map,map__34730):map__34730);
var msg = map__34730__$1;
var files = cljs.core.get.call(null,map__34730__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (state_34854){
var state_val_34855 = (state_34854[(1)]);
if((state_val_34855 === (7))){
var inst_34741 = (state_34854[(7)]);
var inst_34742 = (state_34854[(8)]);
var inst_34743 = (state_34854[(9)]);
var inst_34744 = (state_34854[(10)]);
var inst_34749 = cljs.core._nth.call(null,inst_34742,inst_34744);
var inst_34750 = figwheel.client.file_reloading.eval_body.call(null,inst_34749);
var inst_34751 = (inst_34744 + (1));
var tmp34856 = inst_34741;
var tmp34857 = inst_34742;
var tmp34858 = inst_34743;
var inst_34741__$1 = tmp34856;
var inst_34742__$1 = tmp34857;
var inst_34743__$1 = tmp34858;
var inst_34744__$1 = inst_34751;
var state_34854__$1 = (function (){var statearr_34859 = state_34854;
(statearr_34859[(11)] = inst_34750);

(statearr_34859[(7)] = inst_34741__$1);

(statearr_34859[(8)] = inst_34742__$1);

(statearr_34859[(9)] = inst_34743__$1);

(statearr_34859[(10)] = inst_34744__$1);

return statearr_34859;
})();
var statearr_34860_34929 = state_34854__$1;
(statearr_34860_34929[(2)] = null);

(statearr_34860_34929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (20))){
var inst_34787 = (state_34854[(12)]);
var inst_34793 = (state_34854[(13)]);
var inst_34790 = (state_34854[(14)]);
var inst_34791 = (state_34854[(15)]);
var inst_34786 = (state_34854[(16)]);
var inst_34796 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34798 = (function (){var files_not_loaded = inst_34793;
var res = inst_34791;
var res_SINGLEQUOTE_ = inst_34790;
var files_SINGLEQUOTE_ = inst_34787;
var all_files = inst_34786;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34793,inst_34790,inst_34791,inst_34786,inst_34796,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (p__34797){
var map__34861 = p__34797;
var map__34861__$1 = ((cljs.core.seq_QMARK_.call(null,map__34861))?cljs.core.apply.call(null,cljs.core.hash_map,map__34861):map__34861);
var file = cljs.core.get.call(null,map__34861__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__34861__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34793,inst_34790,inst_34791,inst_34786,inst_34796,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var inst_34799 = cljs.core.map.call(null,inst_34798,inst_34791);
var inst_34800 = cljs.core.pr_str.call(null,inst_34799);
var inst_34801 = figwheel.client.utils.log.call(null,inst_34800);
var inst_34802 = (function (){var files_not_loaded = inst_34793;
var res = inst_34791;
var res_SINGLEQUOTE_ = inst_34790;
var files_SINGLEQUOTE_ = inst_34787;
var all_files = inst_34786;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34793,inst_34790,inst_34791,inst_34786,inst_34796,inst_34798,inst_34799,inst_34800,inst_34801,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34793,inst_34790,inst_34791,inst_34786,inst_34796,inst_34798,inst_34799,inst_34800,inst_34801,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var inst_34803 = setTimeout(inst_34802,(10));
var state_34854__$1 = (function (){var statearr_34862 = state_34854;
(statearr_34862[(17)] = inst_34796);

(statearr_34862[(18)] = inst_34801);

return statearr_34862;
})();
var statearr_34863_34930 = state_34854__$1;
(statearr_34863_34930[(2)] = inst_34803);

(statearr_34863_34930[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (27))){
var inst_34813 = (state_34854[(19)]);
var state_34854__$1 = state_34854;
var statearr_34864_34931 = state_34854__$1;
(statearr_34864_34931[(2)] = inst_34813);

(statearr_34864_34931[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (1))){
var inst_34733 = (state_34854[(20)]);
var inst_34731 = before_jsload.call(null,files);
var inst_34732 = (function (){return ((function (inst_34733,inst_34731,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (p1__34523_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34523_SHARP_);
});
;})(inst_34733,inst_34731,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var inst_34733__$1 = cljs.core.filter.call(null,inst_34732,files);
var inst_34734 = cljs.core.not_empty.call(null,inst_34733__$1);
var state_34854__$1 = (function (){var statearr_34865 = state_34854;
(statearr_34865[(21)] = inst_34731);

(statearr_34865[(20)] = inst_34733__$1);

return statearr_34865;
})();
if(cljs.core.truth_(inst_34734)){
var statearr_34866_34932 = state_34854__$1;
(statearr_34866_34932[(1)] = (2));

} else {
var statearr_34867_34933 = state_34854__$1;
(statearr_34867_34933[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (24))){
var state_34854__$1 = state_34854;
var statearr_34868_34934 = state_34854__$1;
(statearr_34868_34934[(2)] = null);

(statearr_34868_34934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (4))){
var inst_34778 = (state_34854[(2)]);
var inst_34779 = (function (){return ((function (inst_34778,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (p1__34524_SHARP_){
var and__16197__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34524_SHARP_);
if(cljs.core.truth_(and__16197__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34524_SHARP_));
} else {
return and__16197__auto__;
}
});
;})(inst_34778,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var inst_34780 = cljs.core.filter.call(null,inst_34779,files);
var state_34854__$1 = (function (){var statearr_34869 = state_34854;
(statearr_34869[(22)] = inst_34780);

(statearr_34869[(23)] = inst_34778);

return statearr_34869;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_34870_34935 = state_34854__$1;
(statearr_34870_34935[(1)] = (16));

} else {
var statearr_34871_34936 = state_34854__$1;
(statearr_34871_34936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (15))){
var inst_34768 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34872_34937 = state_34854__$1;
(statearr_34872_34937[(2)] = inst_34768);

(statearr_34872_34937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (21))){
var state_34854__$1 = state_34854;
var statearr_34873_34938 = state_34854__$1;
(statearr_34873_34938[(2)] = null);

(statearr_34873_34938[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (31))){
var inst_34821 = (state_34854[(24)]);
var inst_34831 = (state_34854[(2)]);
var inst_34832 = cljs.core.not_empty.call(null,inst_34821);
var state_34854__$1 = (function (){var statearr_34874 = state_34854;
(statearr_34874[(25)] = inst_34831);

return statearr_34874;
})();
if(cljs.core.truth_(inst_34832)){
var statearr_34875_34939 = state_34854__$1;
(statearr_34875_34939[(1)] = (32));

} else {
var statearr_34876_34940 = state_34854__$1;
(statearr_34876_34940[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (32))){
var inst_34821 = (state_34854[(24)]);
var inst_34834 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34821);
var inst_34835 = cljs.core.pr_str.call(null,inst_34834);
var inst_34836 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_34835)].join('');
var inst_34837 = figwheel.client.utils.log.call(null,inst_34836);
var state_34854__$1 = state_34854;
var statearr_34877_34941 = state_34854__$1;
(statearr_34877_34941[(2)] = inst_34837);

(statearr_34877_34941[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (33))){
var state_34854__$1 = state_34854;
var statearr_34878_34942 = state_34854__$1;
(statearr_34878_34942[(2)] = null);

(statearr_34878_34942[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (13))){
var inst_34754 = (state_34854[(26)]);
var inst_34758 = cljs.core.chunk_first.call(null,inst_34754);
var inst_34759 = cljs.core.chunk_rest.call(null,inst_34754);
var inst_34760 = cljs.core.count.call(null,inst_34758);
var inst_34741 = inst_34759;
var inst_34742 = inst_34758;
var inst_34743 = inst_34760;
var inst_34744 = (0);
var state_34854__$1 = (function (){var statearr_34879 = state_34854;
(statearr_34879[(7)] = inst_34741);

(statearr_34879[(8)] = inst_34742);

(statearr_34879[(9)] = inst_34743);

(statearr_34879[(10)] = inst_34744);

return statearr_34879;
})();
var statearr_34880_34943 = state_34854__$1;
(statearr_34880_34943[(2)] = null);

(statearr_34880_34943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (22))){
var inst_34793 = (state_34854[(13)]);
var inst_34806 = (state_34854[(2)]);
var inst_34807 = cljs.core.not_empty.call(null,inst_34793);
var state_34854__$1 = (function (){var statearr_34881 = state_34854;
(statearr_34881[(27)] = inst_34806);

return statearr_34881;
})();
if(cljs.core.truth_(inst_34807)){
var statearr_34882_34944 = state_34854__$1;
(statearr_34882_34944[(1)] = (23));

} else {
var statearr_34883_34945 = state_34854__$1;
(statearr_34883_34945[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (36))){
var state_34854__$1 = state_34854;
var statearr_34884_34946 = state_34854__$1;
(statearr_34884_34946[(2)] = null);

(statearr_34884_34946[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (29))){
var inst_34822 = (state_34854[(28)]);
var inst_34825 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34822);
var inst_34826 = cljs.core.pr_str.call(null,inst_34825);
var inst_34827 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34826)].join('');
var inst_34828 = figwheel.client.utils.log.call(null,inst_34827);
var state_34854__$1 = state_34854;
var statearr_34885_34947 = state_34854__$1;
(statearr_34885_34947[(2)] = inst_34828);

(statearr_34885_34947[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (6))){
var inst_34775 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34886_34948 = state_34854__$1;
(statearr_34886_34948[(2)] = inst_34775);

(statearr_34886_34948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (28))){
var inst_34822 = (state_34854[(28)]);
var inst_34819 = (state_34854[(2)]);
var inst_34820 = cljs.core.get.call(null,inst_34819,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34821 = cljs.core.get.call(null,inst_34819,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_34822__$1 = cljs.core.get.call(null,inst_34819,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34823 = cljs.core.not_empty.call(null,inst_34822__$1);
var state_34854__$1 = (function (){var statearr_34887 = state_34854;
(statearr_34887[(28)] = inst_34822__$1);

(statearr_34887[(24)] = inst_34821);

(statearr_34887[(29)] = inst_34820);

return statearr_34887;
})();
if(cljs.core.truth_(inst_34823)){
var statearr_34888_34949 = state_34854__$1;
(statearr_34888_34949[(1)] = (29));

} else {
var statearr_34889_34950 = state_34854__$1;
(statearr_34889_34950[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (25))){
var inst_34852 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34854__$1,inst_34852);
} else {
if((state_val_34855 === (34))){
var inst_34820 = (state_34854[(29)]);
var inst_34840 = (state_34854[(2)]);
var inst_34841 = cljs.core.not_empty.call(null,inst_34820);
var state_34854__$1 = (function (){var statearr_34890 = state_34854;
(statearr_34890[(30)] = inst_34840);

return statearr_34890;
})();
if(cljs.core.truth_(inst_34841)){
var statearr_34891_34951 = state_34854__$1;
(statearr_34891_34951[(1)] = (35));

} else {
var statearr_34892_34952 = state_34854__$1;
(statearr_34892_34952[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (17))){
var inst_34780 = (state_34854[(22)]);
var state_34854__$1 = state_34854;
var statearr_34893_34953 = state_34854__$1;
(statearr_34893_34953[(2)] = inst_34780);

(statearr_34893_34953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (3))){
var state_34854__$1 = state_34854;
var statearr_34894_34954 = state_34854__$1;
(statearr_34894_34954[(2)] = null);

(statearr_34894_34954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (12))){
var inst_34771 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34895_34955 = state_34854__$1;
(statearr_34895_34955[(2)] = inst_34771);

(statearr_34895_34955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (2))){
var inst_34733 = (state_34854[(20)]);
var inst_34740 = cljs.core.seq.call(null,inst_34733);
var inst_34741 = inst_34740;
var inst_34742 = null;
var inst_34743 = (0);
var inst_34744 = (0);
var state_34854__$1 = (function (){var statearr_34896 = state_34854;
(statearr_34896[(7)] = inst_34741);

(statearr_34896[(8)] = inst_34742);

(statearr_34896[(9)] = inst_34743);

(statearr_34896[(10)] = inst_34744);

return statearr_34896;
})();
var statearr_34897_34956 = state_34854__$1;
(statearr_34897_34956[(2)] = null);

(statearr_34897_34956[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (23))){
var inst_34787 = (state_34854[(12)]);
var inst_34793 = (state_34854[(13)]);
var inst_34790 = (state_34854[(14)]);
var inst_34813 = (state_34854[(19)]);
var inst_34791 = (state_34854[(15)]);
var inst_34786 = (state_34854[(16)]);
var inst_34809 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34812 = (function (){var files_not_loaded = inst_34793;
var res = inst_34791;
var res_SINGLEQUOTE_ = inst_34790;
var files_SINGLEQUOTE_ = inst_34787;
var all_files = inst_34786;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34793,inst_34790,inst_34813,inst_34791,inst_34786,inst_34809,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (p__34811){
var map__34898 = p__34811;
var map__34898__$1 = ((cljs.core.seq_QMARK_.call(null,map__34898))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var meta_data = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34793,inst_34790,inst_34813,inst_34791,inst_34786,inst_34809,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var inst_34813__$1 = cljs.core.group_by.call(null,inst_34812,inst_34793);
var inst_34814 = cljs.core.seq_QMARK_.call(null,inst_34813__$1);
var state_34854__$1 = (function (){var statearr_34899 = state_34854;
(statearr_34899[(19)] = inst_34813__$1);

(statearr_34899[(31)] = inst_34809);

return statearr_34899;
})();
if(inst_34814){
var statearr_34900_34957 = state_34854__$1;
(statearr_34900_34957[(1)] = (26));

} else {
var statearr_34901_34958 = state_34854__$1;
(statearr_34901_34958[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (35))){
var inst_34820 = (state_34854[(29)]);
var inst_34843 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34820);
var inst_34844 = cljs.core.pr_str.call(null,inst_34843);
var inst_34845 = [cljs.core.str("not required: "),cljs.core.str(inst_34844)].join('');
var inst_34846 = figwheel.client.utils.log.call(null,inst_34845);
var state_34854__$1 = state_34854;
var statearr_34902_34959 = state_34854__$1;
(statearr_34902_34959[(2)] = inst_34846);

(statearr_34902_34959[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (19))){
var inst_34787 = (state_34854[(12)]);
var inst_34790 = (state_34854[(14)]);
var inst_34791 = (state_34854[(15)]);
var inst_34786 = (state_34854[(16)]);
var inst_34790__$1 = (state_34854[(2)]);
var inst_34791__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34790__$1);
var inst_34792 = (function (){var res = inst_34791__$1;
var res_SINGLEQUOTE_ = inst_34790__$1;
var files_SINGLEQUOTE_ = inst_34787;
var all_files = inst_34786;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34790,inst_34791,inst_34786,inst_34790__$1,inst_34791__$1,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (p1__34526_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34526_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34787,inst_34790,inst_34791,inst_34786,inst_34790__$1,inst_34791__$1,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var inst_34793 = cljs.core.filter.call(null,inst_34792,inst_34790__$1);
var inst_34794 = cljs.core.not_empty.call(null,inst_34791__$1);
var state_34854__$1 = (function (){var statearr_34903 = state_34854;
(statearr_34903[(13)] = inst_34793);

(statearr_34903[(14)] = inst_34790__$1);

(statearr_34903[(15)] = inst_34791__$1);

return statearr_34903;
})();
if(cljs.core.truth_(inst_34794)){
var statearr_34904_34960 = state_34854__$1;
(statearr_34904_34960[(1)] = (20));

} else {
var statearr_34905_34961 = state_34854__$1;
(statearr_34905_34961[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (11))){
var state_34854__$1 = state_34854;
var statearr_34906_34962 = state_34854__$1;
(statearr_34906_34962[(2)] = null);

(statearr_34906_34962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (9))){
var inst_34773 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34907_34963 = state_34854__$1;
(statearr_34907_34963[(2)] = inst_34773);

(statearr_34907_34963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (5))){
var inst_34743 = (state_34854[(9)]);
var inst_34744 = (state_34854[(10)]);
var inst_34746 = (inst_34744 < inst_34743);
var inst_34747 = inst_34746;
var state_34854__$1 = state_34854;
if(cljs.core.truth_(inst_34747)){
var statearr_34908_34964 = state_34854__$1;
(statearr_34908_34964[(1)] = (7));

} else {
var statearr_34909_34965 = state_34854__$1;
(statearr_34909_34965[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (14))){
var inst_34754 = (state_34854[(26)]);
var inst_34763 = cljs.core.first.call(null,inst_34754);
var inst_34764 = figwheel.client.file_reloading.eval_body.call(null,inst_34763);
var inst_34765 = cljs.core.next.call(null,inst_34754);
var inst_34741 = inst_34765;
var inst_34742 = null;
var inst_34743 = (0);
var inst_34744 = (0);
var state_34854__$1 = (function (){var statearr_34910 = state_34854;
(statearr_34910[(7)] = inst_34741);

(statearr_34910[(8)] = inst_34742);

(statearr_34910[(9)] = inst_34743);

(statearr_34910[(32)] = inst_34764);

(statearr_34910[(10)] = inst_34744);

return statearr_34910;
})();
var statearr_34911_34966 = state_34854__$1;
(statearr_34911_34966[(2)] = null);

(statearr_34911_34966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (26))){
var inst_34813 = (state_34854[(19)]);
var inst_34816 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34813);
var state_34854__$1 = state_34854;
var statearr_34912_34967 = state_34854__$1;
(statearr_34912_34967[(2)] = inst_34816);

(statearr_34912_34967[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (16))){
var inst_34780 = (state_34854[(22)]);
var inst_34782 = (function (){var all_files = inst_34780;
return ((function (all_files,inst_34780,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function (p1__34525_SHARP_){
return cljs.core.update_in.call(null,p1__34525_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34780,state_val_34855,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var inst_34783 = cljs.core.map.call(null,inst_34782,inst_34780);
var state_34854__$1 = state_34854;
var statearr_34913_34968 = state_34854__$1;
(statearr_34913_34968[(2)] = inst_34783);

(statearr_34913_34968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (30))){
var state_34854__$1 = state_34854;
var statearr_34914_34969 = state_34854__$1;
(statearr_34914_34969[(2)] = null);

(statearr_34914_34969[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (10))){
var inst_34754 = (state_34854[(26)]);
var inst_34756 = cljs.core.chunked_seq_QMARK_.call(null,inst_34754);
var state_34854__$1 = state_34854;
if(inst_34756){
var statearr_34915_34970 = state_34854__$1;
(statearr_34915_34970[(1)] = (13));

} else {
var statearr_34916_34971 = state_34854__$1;
(statearr_34916_34971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (18))){
var inst_34787 = (state_34854[(12)]);
var inst_34786 = (state_34854[(16)]);
var inst_34786__$1 = (state_34854[(2)]);
var inst_34787__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34786__$1);
var inst_34788 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34787__$1);
var state_34854__$1 = (function (){var statearr_34917 = state_34854;
(statearr_34917[(12)] = inst_34787__$1);

(statearr_34917[(16)] = inst_34786__$1);

return statearr_34917;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34854__$1,(19),inst_34788);
} else {
if((state_val_34855 === (37))){
var inst_34849 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34918_34972 = state_34854__$1;
(statearr_34918_34972[(2)] = inst_34849);

(statearr_34918_34972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (8))){
var inst_34741 = (state_34854[(7)]);
var inst_34754 = (state_34854[(26)]);
var inst_34754__$1 = cljs.core.seq.call(null,inst_34741);
var state_34854__$1 = (function (){var statearr_34919 = state_34854;
(statearr_34919[(26)] = inst_34754__$1);

return statearr_34919;
})();
if(inst_34754__$1){
var statearr_34920_34973 = state_34854__$1;
(statearr_34920_34973[(1)] = (10));

} else {
var statearr_34921_34974 = state_34854__$1;
(statearr_34921_34974[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
;
return ((function (switch__19257__auto__,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_34925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34925[(0)] = state_machine__19258__auto__);

(statearr_34925[(1)] = (1));

return statearr_34925;
});
var state_machine__19258__auto____1 = (function (state_34854){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_34854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e34926){if((e34926 instanceof Object)){
var ex__19261__auto__ = e34926;
var statearr_34927_34975 = state_34854;
(statearr_34927_34975[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34976 = state_34854;
state_34854 = G__34976;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_34854){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_34854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
})();
var state__19315__auto__ = (function (){var statearr_34928 = f__19314__auto__.call(null);
(statearr_34928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_34928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__,map__34729,map__34729__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34730,map__34730__$1,msg,files))
);

return c__19313__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__34979,link){
var map__34981 = p__34979;
var map__34981__$1 = ((cljs.core.seq_QMARK_.call(null,map__34981))?cljs.core.apply.call(null,cljs.core.hash_map,map__34981):map__34981);
var file = cljs.core.get.call(null,map__34981__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__34981,map__34981__$1,file){
return (function (p1__34977_SHARP_,p2__34978_SHARP_){
if(cljs.core._EQ_.call(null,p1__34977_SHARP_,p2__34978_SHARP_)){
return p1__34977_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__34981,map__34981__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34985){
var map__34986 = p__34985;
var map__34986__$1 = ((cljs.core.seq_QMARK_.call(null,map__34986))?cljs.core.apply.call(null,cljs.core.hash_map,map__34986):map__34986);
var current_url_length = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34982_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34982_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__34987){
var map__34989 = p__34987;
var map__34989__$1 = ((cljs.core.seq_QMARK_.call(null,map__34989))?cljs.core.apply.call(null,cljs.core.hash_map,map__34989):map__34989);
var f_data = map__34989__$1;
var request_url = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16209__auto__ = request_url;
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__34990,files_msg){
var map__35012 = p__34990;
var map__35012__$1 = ((cljs.core.seq_QMARK_.call(null,map__35012))?cljs.core.apply.call(null,cljs.core.hash_map,map__35012):map__35012);
var opts = map__35012__$1;
var on_cssload = cljs.core.get.call(null,map__35012__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35013_35033 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35014_35034 = null;
var count__35015_35035 = (0);
var i__35016_35036 = (0);
while(true){
if((i__35016_35036 < count__35015_35035)){
var f_35037 = cljs.core._nth.call(null,chunk__35014_35034,i__35016_35036);
figwheel.client.file_reloading.reload_css_file.call(null,f_35037);

var G__35038 = seq__35013_35033;
var G__35039 = chunk__35014_35034;
var G__35040 = count__35015_35035;
var G__35041 = (i__35016_35036 + (1));
seq__35013_35033 = G__35038;
chunk__35014_35034 = G__35039;
count__35015_35035 = G__35040;
i__35016_35036 = G__35041;
continue;
} else {
var temp__4126__auto___35042 = cljs.core.seq.call(null,seq__35013_35033);
if(temp__4126__auto___35042){
var seq__35013_35043__$1 = temp__4126__auto___35042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35013_35043__$1)){
var c__16996__auto___35044 = cljs.core.chunk_first.call(null,seq__35013_35043__$1);
var G__35045 = cljs.core.chunk_rest.call(null,seq__35013_35043__$1);
var G__35046 = c__16996__auto___35044;
var G__35047 = cljs.core.count.call(null,c__16996__auto___35044);
var G__35048 = (0);
seq__35013_35033 = G__35045;
chunk__35014_35034 = G__35046;
count__35015_35035 = G__35047;
i__35016_35036 = G__35048;
continue;
} else {
var f_35049 = cljs.core.first.call(null,seq__35013_35043__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35049);

var G__35050 = cljs.core.next.call(null,seq__35013_35043__$1);
var G__35051 = null;
var G__35052 = (0);
var G__35053 = (0);
seq__35013_35033 = G__35050;
chunk__35014_35034 = G__35051;
count__35015_35035 = G__35052;
i__35016_35036 = G__35053;
continue;
}
} else {
}
}
break;
}

var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__,map__35012,map__35012__$1,opts,on_cssload){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__,map__35012,map__35012__$1,opts,on_cssload){
return (function (state_35023){
var state_val_35024 = (state_35023[(1)]);
if((state_val_35024 === (2))){
var inst_35019 = (state_35023[(2)]);
var inst_35020 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35021 = on_cssload.call(null,inst_35020);
var state_35023__$1 = (function (){var statearr_35025 = state_35023;
(statearr_35025[(7)] = inst_35019);

return statearr_35025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35023__$1,inst_35021);
} else {
if((state_val_35024 === (1))){
var inst_35017 = cljs.core.async.timeout.call(null,(100));
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35023__$1,(2),inst_35017);
} else {
return null;
}
}
});})(c__19313__auto__,map__35012,map__35012__$1,opts,on_cssload))
;
return ((function (switch__19257__auto__,c__19313__auto__,map__35012,map__35012__$1,opts,on_cssload){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_35029 = [null,null,null,null,null,null,null,null];
(statearr_35029[(0)] = state_machine__19258__auto__);

(statearr_35029[(1)] = (1));

return statearr_35029;
});
var state_machine__19258__auto____1 = (function (state_35023){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_35023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e35030){if((e35030 instanceof Object)){
var ex__19261__auto__ = e35030;
var statearr_35031_35054 = state_35023;
(statearr_35031_35054[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35055 = state_35023;
state_35023 = G__35055;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_35023){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_35023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__,map__35012,map__35012__$1,opts,on_cssload))
})();
var state__19315__auto__ = (function (){var statearr_35032 = f__19314__auto__.call(null);
(statearr_35032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_35032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__,map__35012,map__35012__$1,opts,on_cssload))
);

return c__19313__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map