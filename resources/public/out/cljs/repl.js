// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34360_34364 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34361_34365 = null;
var count__34362_34366 = (0);
var i__34363_34367 = (0);
while(true){
if((i__34363_34367 < count__34362_34366)){
var f_34368 = cljs.core._nth.call(null,chunk__34361_34365,i__34363_34367);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34368);

var G__34369 = seq__34360_34364;
var G__34370 = chunk__34361_34365;
var G__34371 = count__34362_34366;
var G__34372 = (i__34363_34367 + (1));
seq__34360_34364 = G__34369;
chunk__34361_34365 = G__34370;
count__34362_34366 = G__34371;
i__34363_34367 = G__34372;
continue;
} else {
var temp__4126__auto___34373 = cljs.core.seq.call(null,seq__34360_34364);
if(temp__4126__auto___34373){
var seq__34360_34374__$1 = temp__4126__auto___34373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34360_34374__$1)){
var c__16996__auto___34375 = cljs.core.chunk_first.call(null,seq__34360_34374__$1);
var G__34376 = cljs.core.chunk_rest.call(null,seq__34360_34374__$1);
var G__34377 = c__16996__auto___34375;
var G__34378 = cljs.core.count.call(null,c__16996__auto___34375);
var G__34379 = (0);
seq__34360_34364 = G__34376;
chunk__34361_34365 = G__34377;
count__34362_34366 = G__34378;
i__34363_34367 = G__34379;
continue;
} else {
var f_34380 = cljs.core.first.call(null,seq__34360_34374__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_34380);

var G__34381 = cljs.core.next.call(null,seq__34360_34374__$1);
var G__34382 = null;
var G__34383 = (0);
var G__34384 = (0);
seq__34360_34364 = G__34381;
chunk__34361_34365 = G__34382;
count__34362_34366 = G__34383;
i__34363_34367 = G__34384;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map