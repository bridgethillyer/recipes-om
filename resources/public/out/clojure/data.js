// Compiled by ClojureScript 0.0-2843 {}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
* Internal helper for diff.
*/
clojure.data.atom_diff = (function atom_diff(a,b){
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
* Convert an associative-by-numeric-index collection into
* an equivalent vector, with nil for any missing keys
*/
clojure.data.vectorize = (function vectorize(m){
if(cljs.core.seq.call(null,m)){
return cljs.core.reduce.call(null,(function (result,p__35358){
var vec__35359 = p__35358;
var k = cljs.core.nth.call(null,vec__35359,(0),null);
var v = cljs.core.nth.call(null,vec__35359,(1),null);
return cljs.core.assoc.call(null,result,k,v);
}),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,m)),null)),m);
} else {
return null;
}
});
/**
* Diff associative things a and b, comparing only the key k.
*/
clojure.data.diff_associative_key = (function diff_associative_key(a,b,k){
var va = cljs.core.get.call(null,a,k);
var vb = cljs.core.get.call(null,b,k);
var vec__35361 = clojure.data.diff.call(null,va,vb);
var a_STAR_ = cljs.core.nth.call(null,vec__35361,(0),null);
var b_STAR_ = cljs.core.nth.call(null,vec__35361,(1),null);
var ab = cljs.core.nth.call(null,vec__35361,(2),null);
var in_a = cljs.core.contains_QMARK_.call(null,a,k);
var in_b = cljs.core.contains_QMARK_.call(null,b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,a_STAR_], true, false):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,b_STAR_], true, false):null),((same)?new cljs.core.PersistentArrayMap.fromArray([k,ab], true, false):null)], null);
});
/**
* Diff associative things a and b, comparing only keys in ks (if supplied).
*/
clojure.data.diff_associative = (function() {
var diff_associative = null;
var diff_associative__2 = (function (a,b){
return diff_associative.call(null,a,b,clojure.set.union.call(null,cljs.core.keys.call(null,a),cljs.core.keys.call(null,b)));
});
var diff_associative__3 = (function (a,b,ks){
return cljs.core.reduce.call(null,(function (diff1,diff2){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.call(null,cljs.core.partial.call(null,clojure.data.diff_associative_key,a,b),ks));
});
diff_associative = function(a,b,ks){
switch(arguments.length){
case 2:
return diff_associative__2.call(this,a,b);
case 3:
return diff_associative__3.call(this,a,b,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
diff_associative.cljs$core$IFn$_invoke$arity$2 = diff_associative__2;
diff_associative.cljs$core$IFn$_invoke$arity$3 = diff_associative__3;
return diff_associative;
})()
;
clojure.data.diff_sequential = (function diff_sequential(a,b){
return cljs.core.vec.call(null,cljs.core.map.call(null,clojure.data.vectorize,clojure.data.diff_associative.call(null,((cljs.core.vector_QMARK_.call(null,a))?a:cljs.core.vec.call(null,a)),((cljs.core.vector_QMARK_.call(null,b))?b:cljs.core.vec.call(null,b)),cljs.core.range.call(null,(function (){var x__16526__auto__ = cljs.core.count.call(null,a);
var y__16527__auto__ = cljs.core.count.call(null,b);
return ((x__16526__auto__ > y__16527__auto__) ? x__16526__auto__ : y__16527__auto__);
})()))));
});
clojure.data.diff_set = (function diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty.call(null,clojure.set.difference.call(null,a,b)),cljs.core.not_empty.call(null,clojure.set.difference.call(null,b,a)),cljs.core.not_empty.call(null,clojure.set.intersection.call(null,a,b))], null);
});

clojure.data.EqualityPartition = (function (){var obj35363 = {};
return obj35363;
})();

clojure.data.equality_partition = (function equality_partition(x){
if((function (){var and__16197__auto__ = x;
if(and__16197__auto__){
return x.clojure$data$EqualityPartition$equality_partition$arity$1;
} else {
return and__16197__auto__;
}
})()){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__16853__auto__ = (((x == null))?null:x);
return (function (){var or__16209__auto__ = (clojure.data.equality_partition[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (clojure.data.equality_partition["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"EqualityPartition.equality-partition",x);
}
}
})().call(null,x);
}
});


clojure.data.Diff = (function (){var obj35365 = {};
return obj35365;
})();

clojure.data.diff_similar = (function diff_similar(a,b){
if((function (){var and__16197__auto__ = a;
if(and__16197__auto__){
return a.clojure$data$Diff$diff_similar$arity$2;
} else {
return and__16197__auto__;
}
})()){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__16853__auto__ = (((a == null))?null:a);
return (function (){var or__16209__auto__ = (clojure.data.diff_similar[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (clojure.data.diff_similar["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Diff.diff-similar",a);
}
}
})().call(null,a,b);
}
});

(clojure.data.EqualityPartition["_"] = true);

(clojure.data.equality_partition["_"] = (function (x){
if((function (){var G__35366 = x;
if(G__35366){
var bit__16890__auto__ = (G__35366.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__16890__auto__) || (G__35366.cljs$core$IMap$)){
return true;
} else {
if((!G__35366.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__35366);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__35366);
}
})()){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((function (){var G__35367 = x;
if(G__35367){
var bit__16890__auto__ = (G__35367.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__16890__auto__) || (G__35367.cljs$core$ISet$)){
return true;
} else {
if((!G__35367.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__35367);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__35367);
}
})()){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((function (){var G__35368 = x;
if(G__35368){
var bit__16890__auto__ = (G__35368.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__16890__auto__) || (G__35368.cljs$core$ISequential$)){
return true;
} else {
if((!G__35368.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__35368);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__35368);
}
})()){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
}));

(clojure.data.EqualityPartition["boolean"] = true);

(clojure.data.equality_partition["boolean"] = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

(clojure.data.EqualityPartition["function"] = true);

(clojure.data.equality_partition["function"] = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

(clojure.data.EqualityPartition["array"] = true);

(clojure.data.equality_partition["array"] = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
}));

(clojure.data.EqualityPartition["number"] = true);

(clojure.data.equality_partition["number"] = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

(clojure.data.EqualityPartition["string"] = true);

(clojure.data.equality_partition["string"] = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

(clojure.data.EqualityPartition["null"] = true);

(clojure.data.equality_partition["null"] = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));
(clojure.data.Diff["_"] = true);

(clojure.data.diff_similar["_"] = (function (a,b){
return (function (){var G__35369 = (((clojure.data.equality_partition.call(null,a) instanceof cljs.core.Keyword))?clojure.data.equality_partition.call(null,a).fqn:null);
switch (G__35369) {
case "map":
return clojure.data.diff_associative;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "set":
return clojure.data.diff_set;

break;
case "atom":
return clojure.data.atom_diff;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(clojure.data.equality_partition.call(null,a))].join('')));

}
})().call(null,a,b);
}));

(clojure.data.Diff["boolean"] = true);

(clojure.data.diff_similar["boolean"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

(clojure.data.Diff["function"] = true);

(clojure.data.diff_similar["function"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

(clojure.data.Diff["array"] = true);

(clojure.data.diff_similar["array"] = (function (a,b){
return clojure.data.diff_sequential.call(null,a,b);
}));

(clojure.data.Diff["number"] = true);

(clojure.data.diff_similar["number"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

(clojure.data.Diff["string"] = true);

(clojure.data.diff_similar["string"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

(clojure.data.Diff["null"] = true);

(clojure.data.diff_similar["null"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));
/**
* Recursively compares a and b, returning a tuple of
* [things-only-in-a things-only-in-b things-in-both].
* Comparison rules:
* 
* * For equal a and b, return [nil nil a].
* * Maps are subdiffed where keys match and values differ.
* * Sets are never subdiffed.
* * All sequential things are treated as associative collections
* by their indexes, with results returned as vectors.
* * Everything else (including strings!) is treated as
* an atom and compared for equality.
*/
clojure.data.diff = (function diff(a,b){
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.call(null,clojure.data.equality_partition.call(null,a),clojure.data.equality_partition.call(null,b))){
return clojure.data.diff_similar.call(null,a,b);
} else {
return clojure.data.atom_diff.call(null,a,b);
}
}
});

//# sourceMappingURL=data.js.map