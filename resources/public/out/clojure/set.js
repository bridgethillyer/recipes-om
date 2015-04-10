// Compiled by ClojureScript 0.0-2843 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__35058_SHARP_){
return (max === p1__35058_SHARP_);
});})(max))
,coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__35059__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__35059 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__35060__i = 0, G__35060__a = new Array(arguments.length -  2);
while (G__35060__i < G__35060__a.length) {G__35060__a[G__35060__i] = arguments[G__35060__i + 2]; ++G__35060__i;}
  sets = new cljs.core.IndexedSeq(G__35060__a,0);
} 
return G__35059__delegate.call(this,s1,s2,sets);};
G__35059.cljs$lang$maxFixedArity = 2;
G__35059.cljs$lang$applyTo = (function (arglist__35061){
var s1 = cljs.core.first(arglist__35061);
arglist__35061 = cljs.core.next(arglist__35061);
var s2 = cljs.core.first(arglist__35061);
var sets = cljs.core.rest(arglist__35061);
return G__35059__delegate(s1,s2,sets);
});
G__35059.cljs$core$IFn$_invoke$arity$variadic = G__35059__delegate;
return G__35059;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
var G__35062 = null;
if (arguments.length > 2) {
var G__35063__i = 0, G__35063__a = new Array(arguments.length -  2);
while (G__35063__i < G__35063__a.length) {G__35063__a[G__35063__i] = arguments[G__35063__i + 2]; ++G__35063__i;}
G__35062 = new cljs.core.IndexedSeq(G__35063__a,0);
}
return union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__35062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$core$IFn$_invoke$arity$0 = union__0;
union.cljs$core$IFn$_invoke$arity$1 = union__1;
union.cljs$core$IFn$_invoke$arity$2 = union__2;
union.cljs$core$IFn$_invoke$arity$variadic = union__3.cljs$core$IFn$_invoke$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__35065 = s2;
var G__35066 = s1;
s1 = G__35065;
s2 = G__35066;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__35067__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__35064_SHARP_){
return (- cljs.core.count.call(null,p1__35064_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__35067 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__35068__i = 0, G__35068__a = new Array(arguments.length -  2);
while (G__35068__i < G__35068__a.length) {G__35068__a[G__35068__i] = arguments[G__35068__i + 2]; ++G__35068__i;}
  sets = new cljs.core.IndexedSeq(G__35068__a,0);
} 
return G__35067__delegate.call(this,s1,s2,sets);};
G__35067.cljs$lang$maxFixedArity = 2;
G__35067.cljs$lang$applyTo = (function (arglist__35069){
var s1 = cljs.core.first(arglist__35069);
arglist__35069 = cljs.core.next(arglist__35069);
var s2 = cljs.core.first(arglist__35069);
var sets = cljs.core.rest(arglist__35069);
return G__35067__delegate(s1,s2,sets);
});
G__35067.cljs$core$IFn$_invoke$arity$variadic = G__35067__delegate;
return G__35067;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
var G__35070 = null;
if (arguments.length > 2) {
var G__35071__i = 0, G__35071__a = new Array(arguments.length -  2);
while (G__35071__i < G__35071__a.length) {G__35071__a[G__35071__i] = arguments[G__35071__i + 2]; ++G__35071__i;}
G__35070 = new cljs.core.IndexedSeq(G__35071__a,0);
}
return intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__35070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$core$IFn$_invoke$arity$1 = intersection__1;
intersection.cljs$core$IFn$_invoke$arity$2 = intersection__2;
intersection.cljs$core$IFn$_invoke$arity$variadic = intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__35072__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__35072 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__35073__i = 0, G__35073__a = new Array(arguments.length -  2);
while (G__35073__i < G__35073__a.length) {G__35073__a[G__35073__i] = arguments[G__35073__i + 2]; ++G__35073__i;}
  sets = new cljs.core.IndexedSeq(G__35073__a,0);
} 
return G__35072__delegate.call(this,s1,s2,sets);};
G__35072.cljs$lang$maxFixedArity = 2;
G__35072.cljs$lang$applyTo = (function (arglist__35074){
var s1 = cljs.core.first(arglist__35074);
arglist__35074 = cljs.core.next(arglist__35074);
var s2 = cljs.core.first(arglist__35074);
var sets = cljs.core.rest(arglist__35074);
return G__35072__delegate(s1,s2,sets);
});
G__35072.cljs$core$IFn$_invoke$arity$variadic = G__35072__delegate;
return G__35072;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
var G__35075 = null;
if (arguments.length > 2) {
var G__35076__i = 0, G__35076__a = new Array(arguments.length -  2);
while (G__35076__i < G__35076__a.length) {G__35076__a[G__35076__i] = arguments[G__35076__i + 2]; ++G__35076__i;}
G__35075 = new cljs.core.IndexedSeq(G__35076__a,0);
}
return difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__35075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$core$IFn$_invoke$arity$1 = difference__1;
difference.cljs$core$IFn$_invoke$arity$2 = difference__2;
difference.cljs$core$IFn$_invoke$arity$variadic = difference__3.cljs$core$IFn$_invoke$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__35077_SHARP_){
return cljs.core.select_keys.call(null,p1__35077_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__35080){
var vec__35081 = p__35080;
var old = cljs.core.nth.call(null,vec__35081,(0),null);
var new$ = cljs.core.nth.call(null,vec__35081,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__35082_SHARP_){
return clojure.set.rename_keys.call(null,p1__35082_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__35085){
var vec__35086 = p__35085;
var k = cljs.core.nth.call(null,vec__35086,(0),null);
var v = cljs.core.nth.call(null,vec__35086,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__35093 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__35093,(0),null);
var s = cljs.core.nth.call(null,vec__35093,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__35093,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__35093,r,s,idx){
return (function (p1__35087_SHARP_,p2__35088_SHARP_){
return cljs.core.conj.call(null,p1__35087_SHARP_,cljs.core.merge.call(null,p2__35088_SHARP_,x));
});})(found,ks,vec__35093,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__35093,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__35094 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__35094,(0),null);
var s = cljs.core.nth.call(null,vec__35094,(1),null);
var k = cljs.core.nth.call(null,vec__35094,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__35094,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__35094,r,s,k,idx){
return (function (p1__35089_SHARP_,p2__35090_SHARP_){
return cljs.core.conj.call(null,p1__35089_SHARP_,cljs.core.merge.call(null,p2__35090_SHARP_,x));
});})(found,vec__35094,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__35094,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$2 = join__2;
join.cljs$core$IFn$_invoke$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__35095_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__35095_SHARP_);
}),set1));
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__35096_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__35096_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map