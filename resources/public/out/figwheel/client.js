// Compiled by ClojureScript 0.0-2843 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33353__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33354__i = 0, G__33354__a = new Array(arguments.length -  0);
while (G__33354__i < G__33354__a.length) {G__33354__a[G__33354__i] = arguments[G__33354__i + 0]; ++G__33354__i;}
  args = new cljs.core.IndexedSeq(G__33354__a,0);
} 
return G__33353__delegate.call(this,args);};
G__33353.cljs$lang$maxFixedArity = 0;
G__33353.cljs$lang$applyTo = (function (arglist__33355){
var args = cljs.core.seq(arglist__33355);
return G__33353__delegate(args);
});
G__33353.cljs$core$IFn$_invoke$arity$variadic = G__33353__delegate;
return G__33353;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__33356){
var map__33358 = p__33356;
var map__33358__$1 = ((cljs.core.seq_QMARK_.call(null,map__33358))?cljs.core.apply.call(null,cljs.core.hash_map,map__33358):map__33358);
var class$ = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__16209__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__16197__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16197__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16197__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19313__auto___33487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___33487,ch){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___33487,ch){
return (function (state_33461){
var state_val_33462 = (state_33461[(1)]);
if((state_val_33462 === (7))){
var inst_33457 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33463_33488 = state_33461__$1;
(statearr_33463_33488[(2)] = inst_33457);

(statearr_33463_33488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (1))){
var state_33461__$1 = state_33461;
var statearr_33464_33489 = state_33461__$1;
(statearr_33464_33489[(2)] = null);

(statearr_33464_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (4))){
var inst_33425 = (state_33461[(7)]);
var inst_33425__$1 = (state_33461[(2)]);
var state_33461__$1 = (function (){var statearr_33465 = state_33461;
(statearr_33465[(7)] = inst_33425__$1);

return statearr_33465;
})();
if(cljs.core.truth_(inst_33425__$1)){
var statearr_33466_33490 = state_33461__$1;
(statearr_33466_33490[(1)] = (5));

} else {
var statearr_33467_33491 = state_33461__$1;
(statearr_33467_33491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (13))){
var state_33461__$1 = state_33461;
var statearr_33468_33492 = state_33461__$1;
(statearr_33468_33492[(2)] = null);

(statearr_33468_33492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (6))){
var state_33461__$1 = state_33461;
var statearr_33469_33493 = state_33461__$1;
(statearr_33469_33493[(2)] = null);

(statearr_33469_33493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (3))){
var inst_33459 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33461__$1,inst_33459);
} else {
if((state_val_33462 === (12))){
var inst_33432 = (state_33461[(8)]);
var inst_33445 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33432);
var inst_33446 = cljs.core.first.call(null,inst_33445);
var inst_33447 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33446);
var inst_33448 = console.warn("Figwheel: Not loading code with warnings - ",inst_33447);
var state_33461__$1 = state_33461;
var statearr_33470_33494 = state_33461__$1;
(statearr_33470_33494[(2)] = inst_33448);

(statearr_33470_33494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (2))){
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,(4),ch);
} else {
if((state_val_33462 === (11))){
var inst_33441 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33471_33495 = state_33461__$1;
(statearr_33471_33495[(2)] = inst_33441);

(statearr_33471_33495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (9))){
var inst_33431 = (state_33461[(9)]);
var inst_33443 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33431,opts);
var state_33461__$1 = state_33461;
if(inst_33443){
var statearr_33472_33496 = state_33461__$1;
(statearr_33472_33496[(1)] = (12));

} else {
var statearr_33473_33497 = state_33461__$1;
(statearr_33473_33497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (5))){
var inst_33425 = (state_33461[(7)]);
var inst_33431 = (state_33461[(9)]);
var inst_33427 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33428 = (new cljs.core.PersistentArrayMap(null,2,inst_33427,null));
var inst_33429 = (new cljs.core.PersistentHashSet(null,inst_33428,null));
var inst_33430 = figwheel.client.focus_msgs.call(null,inst_33429,inst_33425);
var inst_33431__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33430);
var inst_33432 = cljs.core.first.call(null,inst_33430);
var inst_33433 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33431__$1,opts);
var state_33461__$1 = (function (){var statearr_33474 = state_33461;
(statearr_33474[(8)] = inst_33432);

(statearr_33474[(9)] = inst_33431__$1);

return statearr_33474;
})();
if(cljs.core.truth_(inst_33433)){
var statearr_33475_33498 = state_33461__$1;
(statearr_33475_33498[(1)] = (8));

} else {
var statearr_33476_33499 = state_33461__$1;
(statearr_33476_33499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (14))){
var inst_33451 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33477_33500 = state_33461__$1;
(statearr_33477_33500[(2)] = inst_33451);

(statearr_33477_33500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (10))){
var inst_33453 = (state_33461[(2)]);
var state_33461__$1 = (function (){var statearr_33478 = state_33461;
(statearr_33478[(10)] = inst_33453);

return statearr_33478;
})();
var statearr_33479_33501 = state_33461__$1;
(statearr_33479_33501[(2)] = null);

(statearr_33479_33501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (8))){
var inst_33432 = (state_33461[(8)]);
var inst_33435 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33436 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33432);
var inst_33437 = cljs.core.async.timeout.call(null,(1000));
var inst_33438 = [inst_33436,inst_33437];
var inst_33439 = (new cljs.core.PersistentVector(null,2,(5),inst_33435,inst_33438,null));
var state_33461__$1 = state_33461;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33461__$1,(11),inst_33439);
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
});})(c__19313__auto___33487,ch))
;
return ((function (switch__19257__auto__,c__19313__auto___33487,ch){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_33483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33483[(0)] = state_machine__19258__auto__);

(statearr_33483[(1)] = (1));

return statearr_33483;
});
var state_machine__19258__auto____1 = (function (state_33461){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_33461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e33484){if((e33484 instanceof Object)){
var ex__19261__auto__ = e33484;
var statearr_33485_33502 = state_33461;
(statearr_33485_33502[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33503 = state_33461;
state_33461 = G__33503;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_33461){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_33461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___33487,ch))
})();
var state__19315__auto__ = (function (){var statearr_33486 = f__19314__auto__.call(null);
(statearr_33486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___33487);

return statearr_33486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___33487,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33504_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33504_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33513 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33506_SHARP_,p2__33505_SHARP_){
return [cljs.core.str(p2__33505_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33513){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33511 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33512 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33511,_STAR_print_newline_STAR_33512,base_path_33513){
return (function() { 
var G__33514__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33515__i = 0, G__33515__a = new Array(arguments.length -  0);
while (G__33515__i < G__33515__a.length) {G__33515__a[G__33515__i] = arguments[G__33515__i + 0]; ++G__33515__i;}
  args = new cljs.core.IndexedSeq(G__33515__a,0);
} 
return G__33514__delegate.call(this,args);};
G__33514.cljs$lang$maxFixedArity = 0;
G__33514.cljs$lang$applyTo = (function (arglist__33516){
var args = cljs.core.seq(arglist__33516);
return G__33514__delegate(args);
});
G__33514.cljs$core$IFn$_invoke$arity$variadic = G__33514__delegate;
return G__33514;
})()
;})(_STAR_print_fn_STAR_33511,_STAR_print_newline_STAR_33512,base_path_33513))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33512;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33511;
}}catch (e33510){if((e33510 instanceof Error)){
var e = e33510;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33513], null));
} else {
var e = e33510;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33513))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__33517){
var map__33522 = p__33517;
var map__33522__$1 = ((cljs.core.seq_QMARK_.call(null,map__33522))?cljs.core.apply.call(null,cljs.core.hash_map,map__33522):map__33522);
var opts = map__33522__$1;
var build_id = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33522,map__33522__$1,opts,build_id){
return (function (p__33523){
var vec__33524 = p__33523;
var map__33525 = cljs.core.nth.call(null,vec__33524,(0),null);
var map__33525__$1 = ((cljs.core.seq_QMARK_.call(null,map__33525))?cljs.core.apply.call(null,cljs.core.hash_map,map__33525):map__33525);
var msg = map__33525__$1;
var msg_name = cljs.core.get.call(null,map__33525__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33524,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33524,map__33525,map__33525__$1,msg,msg_name,_,map__33522,map__33522__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33524,map__33525,map__33525__$1,msg,msg_name,_,map__33522,map__33522__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33522,map__33522__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__33529){
var vec__33530 = p__33529;
var map__33531 = cljs.core.nth.call(null,vec__33530,(0),null);
var map__33531__$1 = ((cljs.core.seq_QMARK_.call(null,map__33531))?cljs.core.apply.call(null,cljs.core.hash_map,map__33531):map__33531);
var msg = map__33531__$1;
var msg_name = cljs.core.get.call(null,map__33531__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33530,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__33532){
var map__33540 = p__33532;
var map__33540__$1 = ((cljs.core.seq_QMARK_.call(null,map__33540))?cljs.core.apply.call(null,cljs.core.hash_map,map__33540):map__33540);
var on_compile_fail = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__33540,map__33540__$1,on_compile_fail,on_compile_warning){
return (function (p__33541){
var vec__33542 = p__33541;
var map__33543 = cljs.core.nth.call(null,vec__33542,(0),null);
var map__33543__$1 = ((cljs.core.seq_QMARK_.call(null,map__33543))?cljs.core.apply.call(null,cljs.core.hash_map,map__33543):map__33543);
var msg = map__33543__$1;
var msg_name = cljs.core.get.call(null,map__33543__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33542,(1));
var pred__33544 = cljs.core._EQ_;
var expr__33545 = msg_name;
if(cljs.core.truth_(pred__33544.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33545))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33544.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33545))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33540,map__33540__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__,msg_hist,msg_names,msg){
return (function (state_33742){
var state_val_33743 = (state_33742[(1)]);
if((state_val_33743 === (7))){
var inst_33678 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33744_33785 = state_33742__$1;
(statearr_33744_33785[(2)] = inst_33678);

(statearr_33744_33785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (20))){
var inst_33704 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33742__$1 = state_33742;
if(inst_33704){
var statearr_33745_33786 = state_33742__$1;
(statearr_33745_33786[(1)] = (22));

} else {
var statearr_33746_33787 = state_33742__$1;
(statearr_33746_33787[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (27))){
var inst_33716 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33717 = figwheel.client.heads_up.display_warning.call(null,inst_33716);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(30),inst_33717);
} else {
if((state_val_33743 === (1))){
var inst_33666 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33742__$1 = state_33742;
if(cljs.core.truth_(inst_33666)){
var statearr_33747_33788 = state_33742__$1;
(statearr_33747_33788[(1)] = (2));

} else {
var statearr_33748_33789 = state_33742__$1;
(statearr_33748_33789[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (24))){
var inst_33732 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33749_33790 = state_33742__$1;
(statearr_33749_33790[(2)] = inst_33732);

(statearr_33749_33790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (4))){
var inst_33740 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33742__$1,inst_33740);
} else {
if((state_val_33743 === (15))){
var inst_33693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33694 = figwheel.client.format_messages.call(null,inst_33693);
var inst_33695 = figwheel.client.heads_up.display_error.call(null,inst_33694);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(18),inst_33695);
} else {
if((state_val_33743 === (21))){
var inst_33734 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33750_33791 = state_33742__$1;
(statearr_33750_33791[(2)] = inst_33734);

(statearr_33750_33791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (31))){
var inst_33723 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(34),inst_33723);
} else {
if((state_val_33743 === (32))){
var state_33742__$1 = state_33742;
var statearr_33751_33792 = state_33742__$1;
(statearr_33751_33792[(2)] = null);

(statearr_33751_33792[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (33))){
var inst_33728 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33752_33793 = state_33742__$1;
(statearr_33752_33793[(2)] = inst_33728);

(statearr_33752_33793[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (13))){
var inst_33684 = (state_33742[(2)]);
var inst_33685 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33686 = figwheel.client.format_messages.call(null,inst_33685);
var inst_33687 = figwheel.client.heads_up.display_error.call(null,inst_33686);
var state_33742__$1 = (function (){var statearr_33753 = state_33742;
(statearr_33753[(7)] = inst_33684);

return statearr_33753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(14),inst_33687);
} else {
if((state_val_33743 === (22))){
var inst_33706 = figwheel.client.heads_up.clear.call(null);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(25),inst_33706);
} else {
if((state_val_33743 === (29))){
var inst_33730 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33754_33794 = state_33742__$1;
(statearr_33754_33794[(2)] = inst_33730);

(statearr_33754_33794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (6))){
var inst_33674 = figwheel.client.heads_up.clear.call(null);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(9),inst_33674);
} else {
if((state_val_33743 === (28))){
var inst_33721 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33742__$1 = state_33742;
if(inst_33721){
var statearr_33755_33795 = state_33742__$1;
(statearr_33755_33795[(1)] = (31));

} else {
var statearr_33756_33796 = state_33742__$1;
(statearr_33756_33796[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (25))){
var inst_33708 = (state_33742[(2)]);
var inst_33709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33710 = figwheel.client.heads_up.display_warning.call(null,inst_33709);
var state_33742__$1 = (function (){var statearr_33757 = state_33742;
(statearr_33757[(8)] = inst_33708);

return statearr_33757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(26),inst_33710);
} else {
if((state_val_33743 === (34))){
var inst_33725 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33758_33797 = state_33742__$1;
(statearr_33758_33797[(2)] = inst_33725);

(statearr_33758_33797[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (17))){
var inst_33736 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33759_33798 = state_33742__$1;
(statearr_33759_33798[(2)] = inst_33736);

(statearr_33759_33798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (3))){
var inst_33680 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33742__$1 = state_33742;
if(inst_33680){
var statearr_33760_33799 = state_33742__$1;
(statearr_33760_33799[(1)] = (10));

} else {
var statearr_33761_33800 = state_33742__$1;
(statearr_33761_33800[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (12))){
var inst_33738 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33762_33801 = state_33742__$1;
(statearr_33762_33801[(2)] = inst_33738);

(statearr_33762_33801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (2))){
var inst_33668 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33742__$1 = state_33742;
if(cljs.core.truth_(inst_33668)){
var statearr_33763_33802 = state_33742__$1;
(statearr_33763_33802[(1)] = (5));

} else {
var statearr_33764_33803 = state_33742__$1;
(statearr_33764_33803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (23))){
var inst_33714 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33742__$1 = state_33742;
if(inst_33714){
var statearr_33765_33804 = state_33742__$1;
(statearr_33765_33804[(1)] = (27));

} else {
var statearr_33766_33805 = state_33742__$1;
(statearr_33766_33805[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (19))){
var inst_33701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33702 = figwheel.client.heads_up.append_message.call(null,inst_33701);
var state_33742__$1 = state_33742;
var statearr_33767_33806 = state_33742__$1;
(statearr_33767_33806[(2)] = inst_33702);

(statearr_33767_33806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (11))){
var inst_33691 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33742__$1 = state_33742;
if(inst_33691){
var statearr_33768_33807 = state_33742__$1;
(statearr_33768_33807[(1)] = (15));

} else {
var statearr_33769_33808 = state_33742__$1;
(statearr_33769_33808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (9))){
var inst_33676 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33770_33809 = state_33742__$1;
(statearr_33770_33809[(2)] = inst_33676);

(statearr_33770_33809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (5))){
var inst_33670 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(8),inst_33670);
} else {
if((state_val_33743 === (14))){
var inst_33689 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33771_33810 = state_33742__$1;
(statearr_33771_33810[(2)] = inst_33689);

(statearr_33771_33810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (26))){
var inst_33712 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33772_33811 = state_33742__$1;
(statearr_33772_33811[(2)] = inst_33712);

(statearr_33772_33811[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (16))){
var inst_33699 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33742__$1 = state_33742;
if(inst_33699){
var statearr_33773_33812 = state_33742__$1;
(statearr_33773_33812[(1)] = (19));

} else {
var statearr_33774_33813 = state_33742__$1;
(statearr_33774_33813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (30))){
var inst_33719 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33775_33814 = state_33742__$1;
(statearr_33775_33814[(2)] = inst_33719);

(statearr_33775_33814[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (10))){
var inst_33682 = figwheel.client.heads_up.clear.call(null);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(13),inst_33682);
} else {
if((state_val_33743 === (18))){
var inst_33697 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33776_33815 = state_33742__$1;
(statearr_33776_33815[(2)] = inst_33697);

(statearr_33776_33815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (8))){
var inst_33672 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33777_33816 = state_33742__$1;
(statearr_33777_33816[(2)] = inst_33672);

(statearr_33777_33816[(1)] = (7));


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
});})(c__19313__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19257__auto__,c__19313__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_33781 = [null,null,null,null,null,null,null,null,null];
(statearr_33781[(0)] = state_machine__19258__auto__);

(statearr_33781[(1)] = (1));

return statearr_33781;
});
var state_machine__19258__auto____1 = (function (state_33742){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_33742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e33782){if((e33782 instanceof Object)){
var ex__19261__auto__ = e33782;
var statearr_33783_33817 = state_33742;
(statearr_33783_33817[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33818 = state_33742;
state_33742 = G__33818;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_33742){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_33742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__,msg_hist,msg_names,msg))
})();
var state__19315__auto__ = (function (){var statearr_33784 = f__19314__auto__.call(null);
(statearr_33784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_33784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__,msg_hist,msg_names,msg))
);

return c__19313__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19313__auto___33881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___33881,ch){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___33881,ch){
return (function (state_33864){
var state_val_33865 = (state_33864[(1)]);
if((state_val_33865 === (8))){
var inst_33856 = (state_33864[(2)]);
var state_33864__$1 = (function (){var statearr_33866 = state_33864;
(statearr_33866[(7)] = inst_33856);

return statearr_33866;
})();
var statearr_33867_33882 = state_33864__$1;
(statearr_33867_33882[(2)] = null);

(statearr_33867_33882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (7))){
var inst_33860 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33868_33883 = state_33864__$1;
(statearr_33868_33883[(2)] = inst_33860);

(statearr_33868_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (6))){
var state_33864__$1 = state_33864;
var statearr_33869_33884 = state_33864__$1;
(statearr_33869_33884[(2)] = null);

(statearr_33869_33884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (5))){
var inst_33852 = (state_33864[(8)]);
var inst_33854 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33852);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33864__$1,(8),inst_33854);
} else {
if((state_val_33865 === (4))){
var inst_33852 = (state_33864[(8)]);
var inst_33852__$1 = (state_33864[(2)]);
var state_33864__$1 = (function (){var statearr_33870 = state_33864;
(statearr_33870[(8)] = inst_33852__$1);

return statearr_33870;
})();
if(cljs.core.truth_(inst_33852__$1)){
var statearr_33871_33885 = state_33864__$1;
(statearr_33871_33885[(1)] = (5));

} else {
var statearr_33872_33886 = state_33864__$1;
(statearr_33872_33886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (3))){
var inst_33862 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33864__$1,inst_33862);
} else {
if((state_val_33865 === (2))){
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33864__$1,(4),ch);
} else {
if((state_val_33865 === (1))){
var state_33864__$1 = state_33864;
var statearr_33873_33887 = state_33864__$1;
(statearr_33873_33887[(2)] = null);

(statearr_33873_33887[(1)] = (2));


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
});})(c__19313__auto___33881,ch))
;
return ((function (switch__19257__auto__,c__19313__auto___33881,ch){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = state_machine__19258__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var state_machine__19258__auto____1 = (function (state_33864){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_33864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e33878){if((e33878 instanceof Object)){
var ex__19261__auto__ = e33878;
var statearr_33879_33888 = state_33864;
(statearr_33879_33888[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33889 = state_33864;
state_33864 = G__33889;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_33864){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_33864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___33881,ch))
})();
var state__19315__auto__ = (function (){var statearr_33880 = f__19314__auto__.call(null);
(statearr_33880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___33881);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___33881,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__){
return (function (state_33910){
var state_val_33911 = (state_33910[(1)]);
if((state_val_33911 === (2))){
var inst_33907 = (state_33910[(2)]);
var inst_33908 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33910__$1 = (function (){var statearr_33912 = state_33910;
(statearr_33912[(7)] = inst_33907);

return statearr_33912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33910__$1,inst_33908);
} else {
if((state_val_33911 === (1))){
var inst_33905 = cljs.core.async.timeout.call(null,(3000));
var state_33910__$1 = state_33910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33910__$1,(2),inst_33905);
} else {
return null;
}
}
});})(c__19313__auto__))
;
return ((function (switch__19257__auto__,c__19313__auto__){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_33916 = [null,null,null,null,null,null,null,null];
(statearr_33916[(0)] = state_machine__19258__auto__);

(statearr_33916[(1)] = (1));

return statearr_33916;
});
var state_machine__19258__auto____1 = (function (state_33910){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_33910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e33917){if((e33917 instanceof Object)){
var ex__19261__auto__ = e33917;
var statearr_33918_33920 = state_33910;
(statearr_33918_33920[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33921 = state_33910;
state_33910 = G__33921;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_33910){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_33910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__))
})();
var state__19315__auto__ = (function (){var statearr_33919 = f__19314__auto__.call(null);
(statearr_33919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_33919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__))
);

return c__19313__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16197__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16197__auto__)){
return ("CustomEvent" in window);
} else {
return and__16197__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj33925 = {"detail":url};
return obj33925;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__33926){
var map__33932 = p__33926;
var map__33932__$1 = ((cljs.core.seq_QMARK_.call(null,map__33932))?cljs.core.apply.call(null,cljs.core.hash_map,map__33932):map__33932);
var ed = map__33932__$1;
var exception_data = cljs.core.get.call(null,map__33932__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__33932__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33933_33937 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33934_33938 = null;
var count__33935_33939 = (0);
var i__33936_33940 = (0);
while(true){
if((i__33936_33940 < count__33935_33939)){
var msg_33941 = cljs.core._nth.call(null,chunk__33934_33938,i__33936_33940);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33941);

var G__33942 = seq__33933_33937;
var G__33943 = chunk__33934_33938;
var G__33944 = count__33935_33939;
var G__33945 = (i__33936_33940 + (1));
seq__33933_33937 = G__33942;
chunk__33934_33938 = G__33943;
count__33935_33939 = G__33944;
i__33936_33940 = G__33945;
continue;
} else {
var temp__4126__auto___33946 = cljs.core.seq.call(null,seq__33933_33937);
if(temp__4126__auto___33946){
var seq__33933_33947__$1 = temp__4126__auto___33946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33933_33947__$1)){
var c__16996__auto___33948 = cljs.core.chunk_first.call(null,seq__33933_33947__$1);
var G__33949 = cljs.core.chunk_rest.call(null,seq__33933_33947__$1);
var G__33950 = c__16996__auto___33948;
var G__33951 = cljs.core.count.call(null,c__16996__auto___33948);
var G__33952 = (0);
seq__33933_33937 = G__33949;
chunk__33934_33938 = G__33950;
count__33935_33939 = G__33951;
i__33936_33940 = G__33952;
continue;
} else {
var msg_33953 = cljs.core.first.call(null,seq__33933_33947__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33953);

var G__33954 = cljs.core.next.call(null,seq__33933_33947__$1);
var G__33955 = null;
var G__33956 = (0);
var G__33957 = (0);
seq__33933_33937 = G__33954;
chunk__33934_33938 = G__33955;
count__33935_33939 = G__33956;
i__33936_33940 = G__33957;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__33958){
var map__33960 = p__33958;
var map__33960__$1 = ((cljs.core.seq_QMARK_.call(null,map__33960))?cljs.core.apply.call(null,cljs.core.hash_map,map__33960):map__33960);
var w = map__33960__$1;
var message = cljs.core.get.call(null,map__33960__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16197__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16197__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16197__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__33967 = cljs.core.seq.call(null,plugins);
var chunk__33968 = null;
var count__33969 = (0);
var i__33970 = (0);
while(true){
if((i__33970 < count__33969)){
var vec__33971 = cljs.core._nth.call(null,chunk__33968,i__33970);
var k = cljs.core.nth.call(null,vec__33971,(0),null);
var plugin = cljs.core.nth.call(null,vec__33971,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33973 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33967,chunk__33968,count__33969,i__33970,pl_33973,vec__33971,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33973.call(null,msg_hist);
});})(seq__33967,chunk__33968,count__33969,i__33970,pl_33973,vec__33971,k,plugin))
);
} else {
}

var G__33974 = seq__33967;
var G__33975 = chunk__33968;
var G__33976 = count__33969;
var G__33977 = (i__33970 + (1));
seq__33967 = G__33974;
chunk__33968 = G__33975;
count__33969 = G__33976;
i__33970 = G__33977;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33967);
if(temp__4126__auto__){
var seq__33967__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33967__$1)){
var c__16996__auto__ = cljs.core.chunk_first.call(null,seq__33967__$1);
var G__33978 = cljs.core.chunk_rest.call(null,seq__33967__$1);
var G__33979 = c__16996__auto__;
var G__33980 = cljs.core.count.call(null,c__16996__auto__);
var G__33981 = (0);
seq__33967 = G__33978;
chunk__33968 = G__33979;
count__33969 = G__33980;
i__33970 = G__33981;
continue;
} else {
var vec__33972 = cljs.core.first.call(null,seq__33967__$1);
var k = cljs.core.nth.call(null,vec__33972,(0),null);
var plugin = cljs.core.nth.call(null,vec__33972,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33982 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33967,chunk__33968,count__33969,i__33970,pl_33982,vec__33972,k,plugin,seq__33967__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33982.call(null,msg_hist);
});})(seq__33967,chunk__33968,count__33969,i__33970,pl_33982,vec__33972,k,plugin,seq__33967__$1,temp__4126__auto__))
);
} else {
}

var G__33983 = cljs.core.next.call(null,seq__33967__$1);
var G__33984 = null;
var G__33985 = (0);
var G__33986 = (0);
seq__33967 = G__33983;
chunk__33968 = G__33984;
count__33969 = G__33985;
i__33970 = G__33986;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__33987){
var map__33989 = p__33987;
var map__33989__$1 = ((cljs.core.seq_QMARK_.call(null,map__33989))?cljs.core.apply.call(null,cljs.core.hash_map,map__33989):map__33989);
var opts = map__33989__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__33987 = null;
if (arguments.length > 0) {
var G__33990__i = 0, G__33990__a = new Array(arguments.length -  0);
while (G__33990__i < G__33990__a.length) {G__33990__a[G__33990__i] = arguments[G__33990__i + 0]; ++G__33990__i;}
  p__33987 = new cljs.core.IndexedSeq(G__33990__a,0);
} 
return watch_and_reload__delegate.call(this,p__33987);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__33991){
var p__33987 = cljs.core.seq(arglist__33991);
return watch_and_reload__delegate(p__33987);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map