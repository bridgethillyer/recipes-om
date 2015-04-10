// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t30141 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30141 = (function (f,fn_handler,meta30142){
this.f = f;
this.fn_handler = fn_handler;
this.meta30142 = meta30142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30141.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30143){
var self__ = this;
var _30143__$1 = this;
return self__.meta30142;
});

cljs.core.async.t30141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30143,meta30142__$1){
var self__ = this;
var _30143__$1 = this;
return (new cljs.core.async.t30141(self__.f,self__.fn_handler,meta30142__$1));
});

cljs.core.async.t30141.cljs$lang$type = true;

cljs.core.async.t30141.cljs$lang$ctorStr = "cljs.core.async/t30141";

cljs.core.async.t30141.cljs$lang$ctorPrWriter = (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t30141");
});

cljs.core.async.__GT_t30141 = (function __GT_t30141(f__$1,fn_handler__$1,meta30142){
return (new cljs.core.async.t30141(f__$1,fn_handler__$1,meta30142));
});

}

return (new cljs.core.async.t30141(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__30145 = buff;
if(G__30145){
var bit__16890__auto__ = null;
if(cljs.core.truth_((function (){var or__16209__auto__ = bit__16890__auto__;
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
return G__30145.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30145.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30145);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30145);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30146 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30146);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30146,ret){
return (function (){
return fn1.call(null,val_30146);
});})(val_30146,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__17096__auto___30147 = n;
var x_30148 = (0);
while(true){
if((x_30148 < n__17096__auto___30147)){
(a[x_30148] = (0));

var G__30149 = (x_30148 + (1));
x_30148 = G__30149;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30150 = (i + (1));
i = G__30150;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30154 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30154 = (function (flag,alt_flag,meta30155){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30155 = meta30155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30154.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30156){
var self__ = this;
var _30156__$1 = this;
return self__.meta30155;
});})(flag))
;

cljs.core.async.t30154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30156,meta30155__$1){
var self__ = this;
var _30156__$1 = this;
return (new cljs.core.async.t30154(self__.flag,self__.alt_flag,meta30155__$1));
});})(flag))
;

cljs.core.async.t30154.cljs$lang$type = true;

cljs.core.async.t30154.cljs$lang$ctorStr = "cljs.core.async/t30154";

cljs.core.async.t30154.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t30154");
});})(flag))
;

cljs.core.async.__GT_t30154 = ((function (flag){
return (function __GT_t30154(flag__$1,alt_flag__$1,meta30155){
return (new cljs.core.async.t30154(flag__$1,alt_flag__$1,meta30155));
});})(flag))
;

}

return (new cljs.core.async.t30154(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30160 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30160 = (function (cb,flag,alt_handler,meta30161){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30161 = meta30161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30160.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30162){
var self__ = this;
var _30162__$1 = this;
return self__.meta30161;
});

cljs.core.async.t30160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30162,meta30161__$1){
var self__ = this;
var _30162__$1 = this;
return (new cljs.core.async.t30160(self__.cb,self__.flag,self__.alt_handler,meta30161__$1));
});

cljs.core.async.t30160.cljs$lang$type = true;

cljs.core.async.t30160.cljs$lang$ctorStr = "cljs.core.async/t30160";

cljs.core.async.t30160.cljs$lang$ctorPrWriter = (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t30160");
});

cljs.core.async.__GT_t30160 = (function __GT_t30160(cb__$1,flag__$1,alt_handler__$1,meta30161){
return (new cljs.core.async.t30160(cb__$1,flag__$1,alt_handler__$1,meta30161));
});

}

return (new cljs.core.async.t30160(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30163_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30163_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30164_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30164_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16209__auto__ = wport;
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30165 = (i + (1));
i = G__30165;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16209__auto__ = ret;
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16197__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16197__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16197__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__30166){
var map__30168 = p__30166;
var map__30168__$1 = ((cljs.core.seq_QMARK_.call(null,map__30168))?cljs.core.apply.call(null,cljs.core.hash_map,map__30168):map__30168);
var opts = map__30168__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30166 = null;
if (arguments.length > 1) {
var G__30169__i = 0, G__30169__a = new Array(arguments.length -  1);
while (G__30169__i < G__30169__a.length) {G__30169__a[G__30169__i] = arguments[G__30169__i + 1]; ++G__30169__i;}
  p__30166 = new cljs.core.IndexedSeq(G__30169__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30166);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30170){
var ports = cljs.core.first(arglist__30170);
var p__30166 = cljs.core.rest(arglist__30170);
return alts_BANG___delegate(ports,p__30166);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__19313__auto___30265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___30265){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___30265){
return (function (state_30241){
var state_val_30242 = (state_30241[(1)]);
if((state_val_30242 === (7))){
var inst_30237 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30243_30266 = state_30241__$1;
(statearr_30243_30266[(2)] = inst_30237);

(statearr_30243_30266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (1))){
var state_30241__$1 = state_30241;
var statearr_30244_30267 = state_30241__$1;
(statearr_30244_30267[(2)] = null);

(statearr_30244_30267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (4))){
var inst_30220 = (state_30241[(7)]);
var inst_30220__$1 = (state_30241[(2)]);
var inst_30221 = (inst_30220__$1 == null);
var state_30241__$1 = (function (){var statearr_30245 = state_30241;
(statearr_30245[(7)] = inst_30220__$1);

return statearr_30245;
})();
if(cljs.core.truth_(inst_30221)){
var statearr_30246_30268 = state_30241__$1;
(statearr_30246_30268[(1)] = (5));

} else {
var statearr_30247_30269 = state_30241__$1;
(statearr_30247_30269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (13))){
var state_30241__$1 = state_30241;
var statearr_30248_30270 = state_30241__$1;
(statearr_30248_30270[(2)] = null);

(statearr_30248_30270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (6))){
var inst_30220 = (state_30241[(7)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30241__$1,(11),to,inst_30220);
} else {
if((state_val_30242 === (3))){
var inst_30239 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30241__$1,inst_30239);
} else {
if((state_val_30242 === (12))){
var state_30241__$1 = state_30241;
var statearr_30249_30271 = state_30241__$1;
(statearr_30249_30271[(2)] = null);

(statearr_30249_30271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (2))){
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30241__$1,(4),from);
} else {
if((state_val_30242 === (11))){
var inst_30230 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
if(cljs.core.truth_(inst_30230)){
var statearr_30250_30272 = state_30241__$1;
(statearr_30250_30272[(1)] = (12));

} else {
var statearr_30251_30273 = state_30241__$1;
(statearr_30251_30273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (9))){
var state_30241__$1 = state_30241;
var statearr_30252_30274 = state_30241__$1;
(statearr_30252_30274[(2)] = null);

(statearr_30252_30274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (5))){
var state_30241__$1 = state_30241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30253_30275 = state_30241__$1;
(statearr_30253_30275[(1)] = (8));

} else {
var statearr_30254_30276 = state_30241__$1;
(statearr_30254_30276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (14))){
var inst_30235 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30255_30277 = state_30241__$1;
(statearr_30255_30277[(2)] = inst_30235);

(statearr_30255_30277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (10))){
var inst_30227 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30256_30278 = state_30241__$1;
(statearr_30256_30278[(2)] = inst_30227);

(statearr_30256_30278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (8))){
var inst_30224 = cljs.core.async.close_BANG_.call(null,to);
var state_30241__$1 = state_30241;
var statearr_30257_30279 = state_30241__$1;
(statearr_30257_30279[(2)] = inst_30224);

(statearr_30257_30279[(1)] = (10));


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
});})(c__19313__auto___30265))
;
return ((function (switch__19257__auto__,c__19313__auto___30265){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30261 = [null,null,null,null,null,null,null,null];
(statearr_30261[(0)] = state_machine__19258__auto__);

(statearr_30261[(1)] = (1));

return statearr_30261;
});
var state_machine__19258__auto____1 = (function (state_30241){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30262){if((e30262 instanceof Object)){
var ex__19261__auto__ = e30262;
var statearr_30263_30280 = state_30241;
(statearr_30263_30280[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30281 = state_30241;
state_30241 = G__30281;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30241){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___30265))
})();
var state__19315__auto__ = (function (){var statearr_30264 = f__19314__auto__.call(null);
(statearr_30264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___30265);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___30265))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30465){
var vec__30466 = p__30465;
var v = cljs.core.nth.call(null,vec__30466,(0),null);
var p = cljs.core.nth.call(null,vec__30466,(1),null);
var job = vec__30466;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19313__auto___30648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___30648,res,vec__30466,v,p,job,jobs,results){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___30648,res,vec__30466,v,p,job,jobs,results){
return (function (state_30471){
var state_val_30472 = (state_30471[(1)]);
if((state_val_30472 === (2))){
var inst_30468 = (state_30471[(2)]);
var inst_30469 = cljs.core.async.close_BANG_.call(null,res);
var state_30471__$1 = (function (){var statearr_30473 = state_30471;
(statearr_30473[(7)] = inst_30468);

return statearr_30473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30471__$1,inst_30469);
} else {
if((state_val_30472 === (1))){
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30471__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19313__auto___30648,res,vec__30466,v,p,job,jobs,results))
;
return ((function (switch__19257__auto__,c__19313__auto___30648,res,vec__30466,v,p,job,jobs,results){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30477 = [null,null,null,null,null,null,null,null];
(statearr_30477[(0)] = state_machine__19258__auto__);

(statearr_30477[(1)] = (1));

return statearr_30477;
});
var state_machine__19258__auto____1 = (function (state_30471){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30478){if((e30478 instanceof Object)){
var ex__19261__auto__ = e30478;
var statearr_30479_30649 = state_30471;
(statearr_30479_30649[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30650 = state_30471;
state_30471 = G__30650;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30471){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___30648,res,vec__30466,v,p,job,jobs,results))
})();
var state__19315__auto__ = (function (){var statearr_30480 = f__19314__auto__.call(null);
(statearr_30480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___30648);

return statearr_30480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___30648,res,vec__30466,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30481){
var vec__30482 = p__30481;
var v = cljs.core.nth.call(null,vec__30482,(0),null);
var p = cljs.core.nth.call(null,vec__30482,(1),null);
var job = vec__30482;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17096__auto___30651 = n;
var __30652 = (0);
while(true){
if((__30652 < n__17096__auto___30651)){
var G__30483_30653 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30483_30653) {
case "async":
var c__19313__auto___30655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30652,c__19313__auto___30655,G__30483_30653,n__17096__auto___30651,jobs,results,process,async){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (__30652,c__19313__auto___30655,G__30483_30653,n__17096__auto___30651,jobs,results,process,async){
return (function (state_30496){
var state_val_30497 = (state_30496[(1)]);
if((state_val_30497 === (7))){
var inst_30492 = (state_30496[(2)]);
var state_30496__$1 = state_30496;
var statearr_30498_30656 = state_30496__$1;
(statearr_30498_30656[(2)] = inst_30492);

(statearr_30498_30656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30497 === (6))){
var state_30496__$1 = state_30496;
var statearr_30499_30657 = state_30496__$1;
(statearr_30499_30657[(2)] = null);

(statearr_30499_30657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30497 === (5))){
var state_30496__$1 = state_30496;
var statearr_30500_30658 = state_30496__$1;
(statearr_30500_30658[(2)] = null);

(statearr_30500_30658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30497 === (4))){
var inst_30486 = (state_30496[(2)]);
var inst_30487 = async.call(null,inst_30486);
var state_30496__$1 = state_30496;
if(cljs.core.truth_(inst_30487)){
var statearr_30501_30659 = state_30496__$1;
(statearr_30501_30659[(1)] = (5));

} else {
var statearr_30502_30660 = state_30496__$1;
(statearr_30502_30660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30497 === (3))){
var inst_30494 = (state_30496[(2)]);
var state_30496__$1 = state_30496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30496__$1,inst_30494);
} else {
if((state_val_30497 === (2))){
var state_30496__$1 = state_30496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30496__$1,(4),jobs);
} else {
if((state_val_30497 === (1))){
var state_30496__$1 = state_30496;
var statearr_30503_30661 = state_30496__$1;
(statearr_30503_30661[(2)] = null);

(statearr_30503_30661[(1)] = (2));


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
});})(__30652,c__19313__auto___30655,G__30483_30653,n__17096__auto___30651,jobs,results,process,async))
;
return ((function (__30652,switch__19257__auto__,c__19313__auto___30655,G__30483_30653,n__17096__auto___30651,jobs,results,process,async){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30507 = [null,null,null,null,null,null,null];
(statearr_30507[(0)] = state_machine__19258__auto__);

(statearr_30507[(1)] = (1));

return statearr_30507;
});
var state_machine__19258__auto____1 = (function (state_30496){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30508){if((e30508 instanceof Object)){
var ex__19261__auto__ = e30508;
var statearr_30509_30662 = state_30496;
(statearr_30509_30662[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30663 = state_30496;
state_30496 = G__30663;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30496){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(__30652,switch__19257__auto__,c__19313__auto___30655,G__30483_30653,n__17096__auto___30651,jobs,results,process,async))
})();
var state__19315__auto__ = (function (){var statearr_30510 = f__19314__auto__.call(null);
(statearr_30510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___30655);

return statearr_30510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(__30652,c__19313__auto___30655,G__30483_30653,n__17096__auto___30651,jobs,results,process,async))
);


break;
case "compute":
var c__19313__auto___30664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30652,c__19313__auto___30664,G__30483_30653,n__17096__auto___30651,jobs,results,process,async){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (__30652,c__19313__auto___30664,G__30483_30653,n__17096__auto___30651,jobs,results,process,async){
return (function (state_30523){
var state_val_30524 = (state_30523[(1)]);
if((state_val_30524 === (7))){
var inst_30519 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30525_30665 = state_30523__$1;
(statearr_30525_30665[(2)] = inst_30519);

(statearr_30525_30665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (6))){
var state_30523__$1 = state_30523;
var statearr_30526_30666 = state_30523__$1;
(statearr_30526_30666[(2)] = null);

(statearr_30526_30666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (5))){
var state_30523__$1 = state_30523;
var statearr_30527_30667 = state_30523__$1;
(statearr_30527_30667[(2)] = null);

(statearr_30527_30667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (4))){
var inst_30513 = (state_30523[(2)]);
var inst_30514 = process.call(null,inst_30513);
var state_30523__$1 = state_30523;
if(cljs.core.truth_(inst_30514)){
var statearr_30528_30668 = state_30523__$1;
(statearr_30528_30668[(1)] = (5));

} else {
var statearr_30529_30669 = state_30523__$1;
(statearr_30529_30669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (3))){
var inst_30521 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30523__$1,inst_30521);
} else {
if((state_val_30524 === (2))){
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30523__$1,(4),jobs);
} else {
if((state_val_30524 === (1))){
var state_30523__$1 = state_30523;
var statearr_30530_30670 = state_30523__$1;
(statearr_30530_30670[(2)] = null);

(statearr_30530_30670[(1)] = (2));


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
});})(__30652,c__19313__auto___30664,G__30483_30653,n__17096__auto___30651,jobs,results,process,async))
;
return ((function (__30652,switch__19257__auto__,c__19313__auto___30664,G__30483_30653,n__17096__auto___30651,jobs,results,process,async){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30534 = [null,null,null,null,null,null,null];
(statearr_30534[(0)] = state_machine__19258__auto__);

(statearr_30534[(1)] = (1));

return statearr_30534;
});
var state_machine__19258__auto____1 = (function (state_30523){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30535){if((e30535 instanceof Object)){
var ex__19261__auto__ = e30535;
var statearr_30536_30671 = state_30523;
(statearr_30536_30671[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30672 = state_30523;
state_30523 = G__30672;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30523){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(__30652,switch__19257__auto__,c__19313__auto___30664,G__30483_30653,n__17096__auto___30651,jobs,results,process,async))
})();
var state__19315__auto__ = (function (){var statearr_30537 = f__19314__auto__.call(null);
(statearr_30537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___30664);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(__30652,c__19313__auto___30664,G__30483_30653,n__17096__auto___30651,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30673 = (__30652 + (1));
__30652 = G__30673;
continue;
} else {
}
break;
}

var c__19313__auto___30674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___30674,jobs,results,process,async){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___30674,jobs,results,process,async){
return (function (state_30559){
var state_val_30560 = (state_30559[(1)]);
if((state_val_30560 === (9))){
var inst_30552 = (state_30559[(2)]);
var state_30559__$1 = (function (){var statearr_30561 = state_30559;
(statearr_30561[(7)] = inst_30552);

return statearr_30561;
})();
var statearr_30562_30675 = state_30559__$1;
(statearr_30562_30675[(2)] = null);

(statearr_30562_30675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (8))){
var inst_30545 = (state_30559[(8)]);
var inst_30550 = (state_30559[(2)]);
var state_30559__$1 = (function (){var statearr_30563 = state_30559;
(statearr_30563[(9)] = inst_30550);

return statearr_30563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30559__$1,(9),results,inst_30545);
} else {
if((state_val_30560 === (7))){
var inst_30555 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30564_30676 = state_30559__$1;
(statearr_30564_30676[(2)] = inst_30555);

(statearr_30564_30676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (6))){
var inst_30545 = (state_30559[(8)]);
var inst_30540 = (state_30559[(10)]);
var inst_30545__$1 = cljs.core.async.chan.call(null,(1));
var inst_30546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30547 = [inst_30540,inst_30545__$1];
var inst_30548 = (new cljs.core.PersistentVector(null,2,(5),inst_30546,inst_30547,null));
var state_30559__$1 = (function (){var statearr_30565 = state_30559;
(statearr_30565[(8)] = inst_30545__$1);

return statearr_30565;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30559__$1,(8),jobs,inst_30548);
} else {
if((state_val_30560 === (5))){
var inst_30543 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30559__$1 = state_30559;
var statearr_30566_30677 = state_30559__$1;
(statearr_30566_30677[(2)] = inst_30543);

(statearr_30566_30677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (4))){
var inst_30540 = (state_30559[(10)]);
var inst_30540__$1 = (state_30559[(2)]);
var inst_30541 = (inst_30540__$1 == null);
var state_30559__$1 = (function (){var statearr_30567 = state_30559;
(statearr_30567[(10)] = inst_30540__$1);

return statearr_30567;
})();
if(cljs.core.truth_(inst_30541)){
var statearr_30568_30678 = state_30559__$1;
(statearr_30568_30678[(1)] = (5));

} else {
var statearr_30569_30679 = state_30559__$1;
(statearr_30569_30679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (3))){
var inst_30557 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30559__$1,inst_30557);
} else {
if((state_val_30560 === (2))){
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30559__$1,(4),from);
} else {
if((state_val_30560 === (1))){
var state_30559__$1 = state_30559;
var statearr_30570_30680 = state_30559__$1;
(statearr_30570_30680[(2)] = null);

(statearr_30570_30680[(1)] = (2));


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
});})(c__19313__auto___30674,jobs,results,process,async))
;
return ((function (switch__19257__auto__,c__19313__auto___30674,jobs,results,process,async){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30574[(0)] = state_machine__19258__auto__);

(statearr_30574[(1)] = (1));

return statearr_30574;
});
var state_machine__19258__auto____1 = (function (state_30559){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30575){if((e30575 instanceof Object)){
var ex__19261__auto__ = e30575;
var statearr_30576_30681 = state_30559;
(statearr_30576_30681[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30682 = state_30559;
state_30559 = G__30682;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30559){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___30674,jobs,results,process,async))
})();
var state__19315__auto__ = (function (){var statearr_30577 = f__19314__auto__.call(null);
(statearr_30577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___30674);

return statearr_30577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___30674,jobs,results,process,async))
);


var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__,jobs,results,process,async){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__,jobs,results,process,async){
return (function (state_30615){
var state_val_30616 = (state_30615[(1)]);
if((state_val_30616 === (7))){
var inst_30611 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30617_30683 = state_30615__$1;
(statearr_30617_30683[(2)] = inst_30611);

(statearr_30617_30683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (20))){
var state_30615__$1 = state_30615;
var statearr_30618_30684 = state_30615__$1;
(statearr_30618_30684[(2)] = null);

(statearr_30618_30684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (1))){
var state_30615__$1 = state_30615;
var statearr_30619_30685 = state_30615__$1;
(statearr_30619_30685[(2)] = null);

(statearr_30619_30685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (4))){
var inst_30580 = (state_30615[(7)]);
var inst_30580__$1 = (state_30615[(2)]);
var inst_30581 = (inst_30580__$1 == null);
var state_30615__$1 = (function (){var statearr_30620 = state_30615;
(statearr_30620[(7)] = inst_30580__$1);

return statearr_30620;
})();
if(cljs.core.truth_(inst_30581)){
var statearr_30621_30686 = state_30615__$1;
(statearr_30621_30686[(1)] = (5));

} else {
var statearr_30622_30687 = state_30615__$1;
(statearr_30622_30687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (15))){
var inst_30593 = (state_30615[(8)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30615__$1,(18),to,inst_30593);
} else {
if((state_val_30616 === (21))){
var inst_30606 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30623_30688 = state_30615__$1;
(statearr_30623_30688[(2)] = inst_30606);

(statearr_30623_30688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (13))){
var inst_30608 = (state_30615[(2)]);
var state_30615__$1 = (function (){var statearr_30624 = state_30615;
(statearr_30624[(9)] = inst_30608);

return statearr_30624;
})();
var statearr_30625_30689 = state_30615__$1;
(statearr_30625_30689[(2)] = null);

(statearr_30625_30689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (6))){
var inst_30580 = (state_30615[(7)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30615__$1,(11),inst_30580);
} else {
if((state_val_30616 === (17))){
var inst_30601 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
if(cljs.core.truth_(inst_30601)){
var statearr_30626_30690 = state_30615__$1;
(statearr_30626_30690[(1)] = (19));

} else {
var statearr_30627_30691 = state_30615__$1;
(statearr_30627_30691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (3))){
var inst_30613 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30615__$1,inst_30613);
} else {
if((state_val_30616 === (12))){
var inst_30590 = (state_30615[(10)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30615__$1,(14),inst_30590);
} else {
if((state_val_30616 === (2))){
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30615__$1,(4),results);
} else {
if((state_val_30616 === (19))){
var state_30615__$1 = state_30615;
var statearr_30628_30692 = state_30615__$1;
(statearr_30628_30692[(2)] = null);

(statearr_30628_30692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (11))){
var inst_30590 = (state_30615[(2)]);
var state_30615__$1 = (function (){var statearr_30629 = state_30615;
(statearr_30629[(10)] = inst_30590);

return statearr_30629;
})();
var statearr_30630_30693 = state_30615__$1;
(statearr_30630_30693[(2)] = null);

(statearr_30630_30693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (9))){
var state_30615__$1 = state_30615;
var statearr_30631_30694 = state_30615__$1;
(statearr_30631_30694[(2)] = null);

(statearr_30631_30694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (5))){
var state_30615__$1 = state_30615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30632_30695 = state_30615__$1;
(statearr_30632_30695[(1)] = (8));

} else {
var statearr_30633_30696 = state_30615__$1;
(statearr_30633_30696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (14))){
var inst_30593 = (state_30615[(8)]);
var inst_30595 = (state_30615[(11)]);
var inst_30593__$1 = (state_30615[(2)]);
var inst_30594 = (inst_30593__$1 == null);
var inst_30595__$1 = cljs.core.not.call(null,inst_30594);
var state_30615__$1 = (function (){var statearr_30634 = state_30615;
(statearr_30634[(8)] = inst_30593__$1);

(statearr_30634[(11)] = inst_30595__$1);

return statearr_30634;
})();
if(inst_30595__$1){
var statearr_30635_30697 = state_30615__$1;
(statearr_30635_30697[(1)] = (15));

} else {
var statearr_30636_30698 = state_30615__$1;
(statearr_30636_30698[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (16))){
var inst_30595 = (state_30615[(11)]);
var state_30615__$1 = state_30615;
var statearr_30637_30699 = state_30615__$1;
(statearr_30637_30699[(2)] = inst_30595);

(statearr_30637_30699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (10))){
var inst_30587 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30638_30700 = state_30615__$1;
(statearr_30638_30700[(2)] = inst_30587);

(statearr_30638_30700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (18))){
var inst_30598 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30639_30701 = state_30615__$1;
(statearr_30639_30701[(2)] = inst_30598);

(statearr_30639_30701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (8))){
var inst_30584 = cljs.core.async.close_BANG_.call(null,to);
var state_30615__$1 = state_30615;
var statearr_30640_30702 = state_30615__$1;
(statearr_30640_30702[(2)] = inst_30584);

(statearr_30640_30702[(1)] = (10));


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
});})(c__19313__auto__,jobs,results,process,async))
;
return ((function (switch__19257__auto__,c__19313__auto__,jobs,results,process,async){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30644 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30644[(0)] = state_machine__19258__auto__);

(statearr_30644[(1)] = (1));

return statearr_30644;
});
var state_machine__19258__auto____1 = (function (state_30615){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30645){if((e30645 instanceof Object)){
var ex__19261__auto__ = e30645;
var statearr_30646_30703 = state_30615;
(statearr_30646_30703[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30704 = state_30615;
state_30615 = G__30704;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30615){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__,jobs,results,process,async))
})();
var state__19315__auto__ = (function (){var statearr_30647 = f__19314__auto__.call(null);
(statearr_30647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_30647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__,jobs,results,process,async))
);

return c__19313__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19313__auto___30805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___30805,tc,fc){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___30805,tc,fc){
return (function (state_30780){
var state_val_30781 = (state_30780[(1)]);
if((state_val_30781 === (7))){
var inst_30776 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
var statearr_30782_30806 = state_30780__$1;
(statearr_30782_30806[(2)] = inst_30776);

(statearr_30782_30806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (1))){
var state_30780__$1 = state_30780;
var statearr_30783_30807 = state_30780__$1;
(statearr_30783_30807[(2)] = null);

(statearr_30783_30807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (4))){
var inst_30757 = (state_30780[(7)]);
var inst_30757__$1 = (state_30780[(2)]);
var inst_30758 = (inst_30757__$1 == null);
var state_30780__$1 = (function (){var statearr_30784 = state_30780;
(statearr_30784[(7)] = inst_30757__$1);

return statearr_30784;
})();
if(cljs.core.truth_(inst_30758)){
var statearr_30785_30808 = state_30780__$1;
(statearr_30785_30808[(1)] = (5));

} else {
var statearr_30786_30809 = state_30780__$1;
(statearr_30786_30809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (13))){
var state_30780__$1 = state_30780;
var statearr_30787_30810 = state_30780__$1;
(statearr_30787_30810[(2)] = null);

(statearr_30787_30810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (6))){
var inst_30757 = (state_30780[(7)]);
var inst_30763 = p.call(null,inst_30757);
var state_30780__$1 = state_30780;
if(cljs.core.truth_(inst_30763)){
var statearr_30788_30811 = state_30780__$1;
(statearr_30788_30811[(1)] = (9));

} else {
var statearr_30789_30812 = state_30780__$1;
(statearr_30789_30812[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (3))){
var inst_30778 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30780__$1,inst_30778);
} else {
if((state_val_30781 === (12))){
var state_30780__$1 = state_30780;
var statearr_30790_30813 = state_30780__$1;
(statearr_30790_30813[(2)] = null);

(statearr_30790_30813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (2))){
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30780__$1,(4),ch);
} else {
if((state_val_30781 === (11))){
var inst_30757 = (state_30780[(7)]);
var inst_30767 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30780__$1,(8),inst_30767,inst_30757);
} else {
if((state_val_30781 === (9))){
var state_30780__$1 = state_30780;
var statearr_30791_30814 = state_30780__$1;
(statearr_30791_30814[(2)] = tc);

(statearr_30791_30814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (5))){
var inst_30760 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30761 = cljs.core.async.close_BANG_.call(null,fc);
var state_30780__$1 = (function (){var statearr_30792 = state_30780;
(statearr_30792[(8)] = inst_30760);

return statearr_30792;
})();
var statearr_30793_30815 = state_30780__$1;
(statearr_30793_30815[(2)] = inst_30761);

(statearr_30793_30815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (14))){
var inst_30774 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
var statearr_30794_30816 = state_30780__$1;
(statearr_30794_30816[(2)] = inst_30774);

(statearr_30794_30816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (10))){
var state_30780__$1 = state_30780;
var statearr_30795_30817 = state_30780__$1;
(statearr_30795_30817[(2)] = fc);

(statearr_30795_30817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (8))){
var inst_30769 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
if(cljs.core.truth_(inst_30769)){
var statearr_30796_30818 = state_30780__$1;
(statearr_30796_30818[(1)] = (12));

} else {
var statearr_30797_30819 = state_30780__$1;
(statearr_30797_30819[(1)] = (13));

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
});})(c__19313__auto___30805,tc,fc))
;
return ((function (switch__19257__auto__,c__19313__auto___30805,tc,fc){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30801 = [null,null,null,null,null,null,null,null,null];
(statearr_30801[(0)] = state_machine__19258__auto__);

(statearr_30801[(1)] = (1));

return statearr_30801;
});
var state_machine__19258__auto____1 = (function (state_30780){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30802){if((e30802 instanceof Object)){
var ex__19261__auto__ = e30802;
var statearr_30803_30820 = state_30780;
(statearr_30803_30820[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30821 = state_30780;
state_30780 = G__30821;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30780){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___30805,tc,fc))
})();
var state__19315__auto__ = (function (){var statearr_30804 = f__19314__auto__.call(null);
(statearr_30804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___30805);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___30805,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__){
return (function (state_30868){
var state_val_30869 = (state_30868[(1)]);
if((state_val_30869 === (7))){
var inst_30864 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30870_30886 = state_30868__$1;
(statearr_30870_30886[(2)] = inst_30864);

(statearr_30870_30886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (6))){
var inst_30857 = (state_30868[(7)]);
var inst_30854 = (state_30868[(8)]);
var inst_30861 = f.call(null,inst_30854,inst_30857);
var inst_30854__$1 = inst_30861;
var state_30868__$1 = (function (){var statearr_30871 = state_30868;
(statearr_30871[(8)] = inst_30854__$1);

return statearr_30871;
})();
var statearr_30872_30887 = state_30868__$1;
(statearr_30872_30887[(2)] = null);

(statearr_30872_30887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (5))){
var inst_30854 = (state_30868[(8)]);
var state_30868__$1 = state_30868;
var statearr_30873_30888 = state_30868__$1;
(statearr_30873_30888[(2)] = inst_30854);

(statearr_30873_30888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (4))){
var inst_30857 = (state_30868[(7)]);
var inst_30857__$1 = (state_30868[(2)]);
var inst_30858 = (inst_30857__$1 == null);
var state_30868__$1 = (function (){var statearr_30874 = state_30868;
(statearr_30874[(7)] = inst_30857__$1);

return statearr_30874;
})();
if(cljs.core.truth_(inst_30858)){
var statearr_30875_30889 = state_30868__$1;
(statearr_30875_30889[(1)] = (5));

} else {
var statearr_30876_30890 = state_30868__$1;
(statearr_30876_30890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (3))){
var inst_30866 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30868__$1,inst_30866);
} else {
if((state_val_30869 === (2))){
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30868__$1,(4),ch);
} else {
if((state_val_30869 === (1))){
var inst_30854 = init;
var state_30868__$1 = (function (){var statearr_30877 = state_30868;
(statearr_30877[(8)] = inst_30854);

return statearr_30877;
})();
var statearr_30878_30891 = state_30868__$1;
(statearr_30878_30891[(2)] = null);

(statearr_30878_30891[(1)] = (2));


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
});})(c__19313__auto__))
;
return ((function (switch__19257__auto__,c__19313__auto__){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30882 = [null,null,null,null,null,null,null,null,null];
(statearr_30882[(0)] = state_machine__19258__auto__);

(statearr_30882[(1)] = (1));

return statearr_30882;
});
var state_machine__19258__auto____1 = (function (state_30868){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30883){if((e30883 instanceof Object)){
var ex__19261__auto__ = e30883;
var statearr_30884_30892 = state_30868;
(statearr_30884_30892[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30893 = state_30868;
state_30868 = G__30893;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30868){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__))
})();
var state__19315__auto__ = (function (){var statearr_30885 = f__19314__auto__.call(null);
(statearr_30885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_30885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__))
);

return c__19313__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__){
return (function (state_30967){
var state_val_30968 = (state_30967[(1)]);
if((state_val_30968 === (7))){
var inst_30949 = (state_30967[(2)]);
var state_30967__$1 = state_30967;
var statearr_30969_30992 = state_30967__$1;
(statearr_30969_30992[(2)] = inst_30949);

(statearr_30969_30992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (1))){
var inst_30943 = cljs.core.seq.call(null,coll);
var inst_30944 = inst_30943;
var state_30967__$1 = (function (){var statearr_30970 = state_30967;
(statearr_30970[(7)] = inst_30944);

return statearr_30970;
})();
var statearr_30971_30993 = state_30967__$1;
(statearr_30971_30993[(2)] = null);

(statearr_30971_30993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (4))){
var inst_30944 = (state_30967[(7)]);
var inst_30947 = cljs.core.first.call(null,inst_30944);
var state_30967__$1 = state_30967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30967__$1,(7),ch,inst_30947);
} else {
if((state_val_30968 === (13))){
var inst_30961 = (state_30967[(2)]);
var state_30967__$1 = state_30967;
var statearr_30972_30994 = state_30967__$1;
(statearr_30972_30994[(2)] = inst_30961);

(statearr_30972_30994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (6))){
var inst_30952 = (state_30967[(2)]);
var state_30967__$1 = state_30967;
if(cljs.core.truth_(inst_30952)){
var statearr_30973_30995 = state_30967__$1;
(statearr_30973_30995[(1)] = (8));

} else {
var statearr_30974_30996 = state_30967__$1;
(statearr_30974_30996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (3))){
var inst_30965 = (state_30967[(2)]);
var state_30967__$1 = state_30967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30967__$1,inst_30965);
} else {
if((state_val_30968 === (12))){
var state_30967__$1 = state_30967;
var statearr_30975_30997 = state_30967__$1;
(statearr_30975_30997[(2)] = null);

(statearr_30975_30997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (2))){
var inst_30944 = (state_30967[(7)]);
var state_30967__$1 = state_30967;
if(cljs.core.truth_(inst_30944)){
var statearr_30976_30998 = state_30967__$1;
(statearr_30976_30998[(1)] = (4));

} else {
var statearr_30977_30999 = state_30967__$1;
(statearr_30977_30999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (11))){
var inst_30958 = cljs.core.async.close_BANG_.call(null,ch);
var state_30967__$1 = state_30967;
var statearr_30978_31000 = state_30967__$1;
(statearr_30978_31000[(2)] = inst_30958);

(statearr_30978_31000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (9))){
var state_30967__$1 = state_30967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30979_31001 = state_30967__$1;
(statearr_30979_31001[(1)] = (11));

} else {
var statearr_30980_31002 = state_30967__$1;
(statearr_30980_31002[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (5))){
var inst_30944 = (state_30967[(7)]);
var state_30967__$1 = state_30967;
var statearr_30981_31003 = state_30967__$1;
(statearr_30981_31003[(2)] = inst_30944);

(statearr_30981_31003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (10))){
var inst_30963 = (state_30967[(2)]);
var state_30967__$1 = state_30967;
var statearr_30982_31004 = state_30967__$1;
(statearr_30982_31004[(2)] = inst_30963);

(statearr_30982_31004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30968 === (8))){
var inst_30944 = (state_30967[(7)]);
var inst_30954 = cljs.core.next.call(null,inst_30944);
var inst_30944__$1 = inst_30954;
var state_30967__$1 = (function (){var statearr_30983 = state_30967;
(statearr_30983[(7)] = inst_30944__$1);

return statearr_30983;
})();
var statearr_30984_31005 = state_30967__$1;
(statearr_30984_31005[(2)] = null);

(statearr_30984_31005[(1)] = (2));


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
});})(c__19313__auto__))
;
return ((function (switch__19257__auto__,c__19313__auto__){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_30988 = [null,null,null,null,null,null,null,null];
(statearr_30988[(0)] = state_machine__19258__auto__);

(statearr_30988[(1)] = (1));

return statearr_30988;
});
var state_machine__19258__auto____1 = (function (state_30967){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_30967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e30989){if((e30989 instanceof Object)){
var ex__19261__auto__ = e30989;
var statearr_30990_31006 = state_30967;
(statearr_30990_31006[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31007 = state_30967;
state_30967 = G__31007;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_30967){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_30967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__))
})();
var state__19315__auto__ = (function (){var statearr_30991 = f__19314__auto__.call(null);
(statearr_30991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_30991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__))
);

return c__19313__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31009 = {};
return obj31009;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__16197__auto__ = _;
if(and__16197__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16197__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16853__auto__ = (((_ == null))?null:_);
return (function (){var or__16209__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31011 = {};
return obj31011;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t31233 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31233 = (function (cs,ch,mult,meta31234){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31234 = meta31234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31233.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31233.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31233.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31233.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31233.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31235){
var self__ = this;
var _31235__$1 = this;
return self__.meta31234;
});})(cs))
;

cljs.core.async.t31233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31235,meta31234__$1){
var self__ = this;
var _31235__$1 = this;
return (new cljs.core.async.t31233(self__.cs,self__.ch,self__.mult,meta31234__$1));
});})(cs))
;

cljs.core.async.t31233.cljs$lang$type = true;

cljs.core.async.t31233.cljs$lang$ctorStr = "cljs.core.async/t31233";

cljs.core.async.t31233.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t31233");
});})(cs))
;

cljs.core.async.__GT_t31233 = ((function (cs){
return (function __GT_t31233(cs__$1,ch__$1,mult__$1,meta31234){
return (new cljs.core.async.t31233(cs__$1,ch__$1,mult__$1,meta31234));
});})(cs))
;

}

return (new cljs.core.async.t31233(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19313__auto___31454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___31454,cs,m,dchan,dctr,done){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___31454,cs,m,dchan,dctr,done){
return (function (state_31366){
var state_val_31367 = (state_31366[(1)]);
if((state_val_31367 === (7))){
var inst_31362 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31368_31455 = state_31366__$1;
(statearr_31368_31455[(2)] = inst_31362);

(statearr_31368_31455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (20))){
var inst_31267 = (state_31366[(7)]);
var inst_31277 = cljs.core.first.call(null,inst_31267);
var inst_31278 = cljs.core.nth.call(null,inst_31277,(0),null);
var inst_31279 = cljs.core.nth.call(null,inst_31277,(1),null);
var state_31366__$1 = (function (){var statearr_31369 = state_31366;
(statearr_31369[(8)] = inst_31278);

return statearr_31369;
})();
if(cljs.core.truth_(inst_31279)){
var statearr_31370_31456 = state_31366__$1;
(statearr_31370_31456[(1)] = (22));

} else {
var statearr_31371_31457 = state_31366__$1;
(statearr_31371_31457[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (27))){
var inst_31309 = (state_31366[(9)]);
var inst_31238 = (state_31366[(10)]);
var inst_31307 = (state_31366[(11)]);
var inst_31314 = (state_31366[(12)]);
var inst_31314__$1 = cljs.core._nth.call(null,inst_31307,inst_31309);
var inst_31315 = cljs.core.async.put_BANG_.call(null,inst_31314__$1,inst_31238,done);
var state_31366__$1 = (function (){var statearr_31372 = state_31366;
(statearr_31372[(12)] = inst_31314__$1);

return statearr_31372;
})();
if(cljs.core.truth_(inst_31315)){
var statearr_31373_31458 = state_31366__$1;
(statearr_31373_31458[(1)] = (30));

} else {
var statearr_31374_31459 = state_31366__$1;
(statearr_31374_31459[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (1))){
var state_31366__$1 = state_31366;
var statearr_31375_31460 = state_31366__$1;
(statearr_31375_31460[(2)] = null);

(statearr_31375_31460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (24))){
var inst_31267 = (state_31366[(7)]);
var inst_31284 = (state_31366[(2)]);
var inst_31285 = cljs.core.next.call(null,inst_31267);
var inst_31247 = inst_31285;
var inst_31248 = null;
var inst_31249 = (0);
var inst_31250 = (0);
var state_31366__$1 = (function (){var statearr_31376 = state_31366;
(statearr_31376[(13)] = inst_31247);

(statearr_31376[(14)] = inst_31249);

(statearr_31376[(15)] = inst_31248);

(statearr_31376[(16)] = inst_31284);

(statearr_31376[(17)] = inst_31250);

return statearr_31376;
})();
var statearr_31377_31461 = state_31366__$1;
(statearr_31377_31461[(2)] = null);

(statearr_31377_31461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (39))){
var state_31366__$1 = state_31366;
var statearr_31381_31462 = state_31366__$1;
(statearr_31381_31462[(2)] = null);

(statearr_31381_31462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (4))){
var inst_31238 = (state_31366[(10)]);
var inst_31238__$1 = (state_31366[(2)]);
var inst_31239 = (inst_31238__$1 == null);
var state_31366__$1 = (function (){var statearr_31382 = state_31366;
(statearr_31382[(10)] = inst_31238__$1);

return statearr_31382;
})();
if(cljs.core.truth_(inst_31239)){
var statearr_31383_31463 = state_31366__$1;
(statearr_31383_31463[(1)] = (5));

} else {
var statearr_31384_31464 = state_31366__$1;
(statearr_31384_31464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (15))){
var inst_31247 = (state_31366[(13)]);
var inst_31249 = (state_31366[(14)]);
var inst_31248 = (state_31366[(15)]);
var inst_31250 = (state_31366[(17)]);
var inst_31263 = (state_31366[(2)]);
var inst_31264 = (inst_31250 + (1));
var tmp31378 = inst_31247;
var tmp31379 = inst_31249;
var tmp31380 = inst_31248;
var inst_31247__$1 = tmp31378;
var inst_31248__$1 = tmp31380;
var inst_31249__$1 = tmp31379;
var inst_31250__$1 = inst_31264;
var state_31366__$1 = (function (){var statearr_31385 = state_31366;
(statearr_31385[(18)] = inst_31263);

(statearr_31385[(13)] = inst_31247__$1);

(statearr_31385[(14)] = inst_31249__$1);

(statearr_31385[(15)] = inst_31248__$1);

(statearr_31385[(17)] = inst_31250__$1);

return statearr_31385;
})();
var statearr_31386_31465 = state_31366__$1;
(statearr_31386_31465[(2)] = null);

(statearr_31386_31465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (21))){
var inst_31288 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31390_31466 = state_31366__$1;
(statearr_31390_31466[(2)] = inst_31288);

(statearr_31390_31466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (31))){
var inst_31314 = (state_31366[(12)]);
var inst_31318 = done.call(null,null);
var inst_31319 = cljs.core.async.untap_STAR_.call(null,m,inst_31314);
var state_31366__$1 = (function (){var statearr_31391 = state_31366;
(statearr_31391[(19)] = inst_31318);

return statearr_31391;
})();
var statearr_31392_31467 = state_31366__$1;
(statearr_31392_31467[(2)] = inst_31319);

(statearr_31392_31467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (32))){
var inst_31308 = (state_31366[(20)]);
var inst_31306 = (state_31366[(21)]);
var inst_31309 = (state_31366[(9)]);
var inst_31307 = (state_31366[(11)]);
var inst_31321 = (state_31366[(2)]);
var inst_31322 = (inst_31309 + (1));
var tmp31387 = inst_31308;
var tmp31388 = inst_31306;
var tmp31389 = inst_31307;
var inst_31306__$1 = tmp31388;
var inst_31307__$1 = tmp31389;
var inst_31308__$1 = tmp31387;
var inst_31309__$1 = inst_31322;
var state_31366__$1 = (function (){var statearr_31393 = state_31366;
(statearr_31393[(20)] = inst_31308__$1);

(statearr_31393[(21)] = inst_31306__$1);

(statearr_31393[(9)] = inst_31309__$1);

(statearr_31393[(22)] = inst_31321);

(statearr_31393[(11)] = inst_31307__$1);

return statearr_31393;
})();
var statearr_31394_31468 = state_31366__$1;
(statearr_31394_31468[(2)] = null);

(statearr_31394_31468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (40))){
var inst_31334 = (state_31366[(23)]);
var inst_31338 = done.call(null,null);
var inst_31339 = cljs.core.async.untap_STAR_.call(null,m,inst_31334);
var state_31366__$1 = (function (){var statearr_31395 = state_31366;
(statearr_31395[(24)] = inst_31338);

return statearr_31395;
})();
var statearr_31396_31469 = state_31366__$1;
(statearr_31396_31469[(2)] = inst_31339);

(statearr_31396_31469[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (33))){
var inst_31325 = (state_31366[(25)]);
var inst_31327 = cljs.core.chunked_seq_QMARK_.call(null,inst_31325);
var state_31366__$1 = state_31366;
if(inst_31327){
var statearr_31397_31470 = state_31366__$1;
(statearr_31397_31470[(1)] = (36));

} else {
var statearr_31398_31471 = state_31366__$1;
(statearr_31398_31471[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (13))){
var inst_31257 = (state_31366[(26)]);
var inst_31260 = cljs.core.async.close_BANG_.call(null,inst_31257);
var state_31366__$1 = state_31366;
var statearr_31399_31472 = state_31366__$1;
(statearr_31399_31472[(2)] = inst_31260);

(statearr_31399_31472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (22))){
var inst_31278 = (state_31366[(8)]);
var inst_31281 = cljs.core.async.close_BANG_.call(null,inst_31278);
var state_31366__$1 = state_31366;
var statearr_31400_31473 = state_31366__$1;
(statearr_31400_31473[(2)] = inst_31281);

(statearr_31400_31473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (36))){
var inst_31325 = (state_31366[(25)]);
var inst_31329 = cljs.core.chunk_first.call(null,inst_31325);
var inst_31330 = cljs.core.chunk_rest.call(null,inst_31325);
var inst_31331 = cljs.core.count.call(null,inst_31329);
var inst_31306 = inst_31330;
var inst_31307 = inst_31329;
var inst_31308 = inst_31331;
var inst_31309 = (0);
var state_31366__$1 = (function (){var statearr_31401 = state_31366;
(statearr_31401[(20)] = inst_31308);

(statearr_31401[(21)] = inst_31306);

(statearr_31401[(9)] = inst_31309);

(statearr_31401[(11)] = inst_31307);

return statearr_31401;
})();
var statearr_31402_31474 = state_31366__$1;
(statearr_31402_31474[(2)] = null);

(statearr_31402_31474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (41))){
var inst_31325 = (state_31366[(25)]);
var inst_31341 = (state_31366[(2)]);
var inst_31342 = cljs.core.next.call(null,inst_31325);
var inst_31306 = inst_31342;
var inst_31307 = null;
var inst_31308 = (0);
var inst_31309 = (0);
var state_31366__$1 = (function (){var statearr_31403 = state_31366;
(statearr_31403[(20)] = inst_31308);

(statearr_31403[(21)] = inst_31306);

(statearr_31403[(9)] = inst_31309);

(statearr_31403[(27)] = inst_31341);

(statearr_31403[(11)] = inst_31307);

return statearr_31403;
})();
var statearr_31404_31475 = state_31366__$1;
(statearr_31404_31475[(2)] = null);

(statearr_31404_31475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (43))){
var state_31366__$1 = state_31366;
var statearr_31405_31476 = state_31366__$1;
(statearr_31405_31476[(2)] = null);

(statearr_31405_31476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (29))){
var inst_31350 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31406_31477 = state_31366__$1;
(statearr_31406_31477[(2)] = inst_31350);

(statearr_31406_31477[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (44))){
var inst_31359 = (state_31366[(2)]);
var state_31366__$1 = (function (){var statearr_31407 = state_31366;
(statearr_31407[(28)] = inst_31359);

return statearr_31407;
})();
var statearr_31408_31478 = state_31366__$1;
(statearr_31408_31478[(2)] = null);

(statearr_31408_31478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (6))){
var inst_31298 = (state_31366[(29)]);
var inst_31297 = cljs.core.deref.call(null,cs);
var inst_31298__$1 = cljs.core.keys.call(null,inst_31297);
var inst_31299 = cljs.core.count.call(null,inst_31298__$1);
var inst_31300 = cljs.core.reset_BANG_.call(null,dctr,inst_31299);
var inst_31305 = cljs.core.seq.call(null,inst_31298__$1);
var inst_31306 = inst_31305;
var inst_31307 = null;
var inst_31308 = (0);
var inst_31309 = (0);
var state_31366__$1 = (function (){var statearr_31409 = state_31366;
(statearr_31409[(20)] = inst_31308);

(statearr_31409[(21)] = inst_31306);

(statearr_31409[(9)] = inst_31309);

(statearr_31409[(11)] = inst_31307);

(statearr_31409[(30)] = inst_31300);

(statearr_31409[(29)] = inst_31298__$1);

return statearr_31409;
})();
var statearr_31410_31479 = state_31366__$1;
(statearr_31410_31479[(2)] = null);

(statearr_31410_31479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (28))){
var inst_31306 = (state_31366[(21)]);
var inst_31325 = (state_31366[(25)]);
var inst_31325__$1 = cljs.core.seq.call(null,inst_31306);
var state_31366__$1 = (function (){var statearr_31411 = state_31366;
(statearr_31411[(25)] = inst_31325__$1);

return statearr_31411;
})();
if(inst_31325__$1){
var statearr_31412_31480 = state_31366__$1;
(statearr_31412_31480[(1)] = (33));

} else {
var statearr_31413_31481 = state_31366__$1;
(statearr_31413_31481[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (25))){
var inst_31308 = (state_31366[(20)]);
var inst_31309 = (state_31366[(9)]);
var inst_31311 = (inst_31309 < inst_31308);
var inst_31312 = inst_31311;
var state_31366__$1 = state_31366;
if(cljs.core.truth_(inst_31312)){
var statearr_31414_31482 = state_31366__$1;
(statearr_31414_31482[(1)] = (27));

} else {
var statearr_31415_31483 = state_31366__$1;
(statearr_31415_31483[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (34))){
var state_31366__$1 = state_31366;
var statearr_31416_31484 = state_31366__$1;
(statearr_31416_31484[(2)] = null);

(statearr_31416_31484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (17))){
var state_31366__$1 = state_31366;
var statearr_31417_31485 = state_31366__$1;
(statearr_31417_31485[(2)] = null);

(statearr_31417_31485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (3))){
var inst_31364 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31366__$1,inst_31364);
} else {
if((state_val_31367 === (12))){
var inst_31293 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31418_31486 = state_31366__$1;
(statearr_31418_31486[(2)] = inst_31293);

(statearr_31418_31486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (2))){
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31366__$1,(4),ch);
} else {
if((state_val_31367 === (23))){
var state_31366__$1 = state_31366;
var statearr_31419_31487 = state_31366__$1;
(statearr_31419_31487[(2)] = null);

(statearr_31419_31487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (35))){
var inst_31348 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31420_31488 = state_31366__$1;
(statearr_31420_31488[(2)] = inst_31348);

(statearr_31420_31488[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (19))){
var inst_31267 = (state_31366[(7)]);
var inst_31271 = cljs.core.chunk_first.call(null,inst_31267);
var inst_31272 = cljs.core.chunk_rest.call(null,inst_31267);
var inst_31273 = cljs.core.count.call(null,inst_31271);
var inst_31247 = inst_31272;
var inst_31248 = inst_31271;
var inst_31249 = inst_31273;
var inst_31250 = (0);
var state_31366__$1 = (function (){var statearr_31421 = state_31366;
(statearr_31421[(13)] = inst_31247);

(statearr_31421[(14)] = inst_31249);

(statearr_31421[(15)] = inst_31248);

(statearr_31421[(17)] = inst_31250);

return statearr_31421;
})();
var statearr_31422_31489 = state_31366__$1;
(statearr_31422_31489[(2)] = null);

(statearr_31422_31489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (11))){
var inst_31267 = (state_31366[(7)]);
var inst_31247 = (state_31366[(13)]);
var inst_31267__$1 = cljs.core.seq.call(null,inst_31247);
var state_31366__$1 = (function (){var statearr_31423 = state_31366;
(statearr_31423[(7)] = inst_31267__$1);

return statearr_31423;
})();
if(inst_31267__$1){
var statearr_31424_31490 = state_31366__$1;
(statearr_31424_31490[(1)] = (16));

} else {
var statearr_31425_31491 = state_31366__$1;
(statearr_31425_31491[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (9))){
var inst_31295 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31426_31492 = state_31366__$1;
(statearr_31426_31492[(2)] = inst_31295);

(statearr_31426_31492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (5))){
var inst_31245 = cljs.core.deref.call(null,cs);
var inst_31246 = cljs.core.seq.call(null,inst_31245);
var inst_31247 = inst_31246;
var inst_31248 = null;
var inst_31249 = (0);
var inst_31250 = (0);
var state_31366__$1 = (function (){var statearr_31427 = state_31366;
(statearr_31427[(13)] = inst_31247);

(statearr_31427[(14)] = inst_31249);

(statearr_31427[(15)] = inst_31248);

(statearr_31427[(17)] = inst_31250);

return statearr_31427;
})();
var statearr_31428_31493 = state_31366__$1;
(statearr_31428_31493[(2)] = null);

(statearr_31428_31493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (14))){
var state_31366__$1 = state_31366;
var statearr_31429_31494 = state_31366__$1;
(statearr_31429_31494[(2)] = null);

(statearr_31429_31494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (45))){
var inst_31356 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31430_31495 = state_31366__$1;
(statearr_31430_31495[(2)] = inst_31356);

(statearr_31430_31495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (26))){
var inst_31298 = (state_31366[(29)]);
var inst_31352 = (state_31366[(2)]);
var inst_31353 = cljs.core.seq.call(null,inst_31298);
var state_31366__$1 = (function (){var statearr_31431 = state_31366;
(statearr_31431[(31)] = inst_31352);

return statearr_31431;
})();
if(inst_31353){
var statearr_31432_31496 = state_31366__$1;
(statearr_31432_31496[(1)] = (42));

} else {
var statearr_31433_31497 = state_31366__$1;
(statearr_31433_31497[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (16))){
var inst_31267 = (state_31366[(7)]);
var inst_31269 = cljs.core.chunked_seq_QMARK_.call(null,inst_31267);
var state_31366__$1 = state_31366;
if(inst_31269){
var statearr_31434_31498 = state_31366__$1;
(statearr_31434_31498[(1)] = (19));

} else {
var statearr_31435_31499 = state_31366__$1;
(statearr_31435_31499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (38))){
var inst_31345 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31436_31500 = state_31366__$1;
(statearr_31436_31500[(2)] = inst_31345);

(statearr_31436_31500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (30))){
var state_31366__$1 = state_31366;
var statearr_31437_31501 = state_31366__$1;
(statearr_31437_31501[(2)] = null);

(statearr_31437_31501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (10))){
var inst_31248 = (state_31366[(15)]);
var inst_31250 = (state_31366[(17)]);
var inst_31256 = cljs.core._nth.call(null,inst_31248,inst_31250);
var inst_31257 = cljs.core.nth.call(null,inst_31256,(0),null);
var inst_31258 = cljs.core.nth.call(null,inst_31256,(1),null);
var state_31366__$1 = (function (){var statearr_31438 = state_31366;
(statearr_31438[(26)] = inst_31257);

return statearr_31438;
})();
if(cljs.core.truth_(inst_31258)){
var statearr_31439_31502 = state_31366__$1;
(statearr_31439_31502[(1)] = (13));

} else {
var statearr_31440_31503 = state_31366__$1;
(statearr_31440_31503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (18))){
var inst_31291 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31441_31504 = state_31366__$1;
(statearr_31441_31504[(2)] = inst_31291);

(statearr_31441_31504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (42))){
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31366__$1,(45),dchan);
} else {
if((state_val_31367 === (37))){
var inst_31334 = (state_31366[(23)]);
var inst_31325 = (state_31366[(25)]);
var inst_31238 = (state_31366[(10)]);
var inst_31334__$1 = cljs.core.first.call(null,inst_31325);
var inst_31335 = cljs.core.async.put_BANG_.call(null,inst_31334__$1,inst_31238,done);
var state_31366__$1 = (function (){var statearr_31442 = state_31366;
(statearr_31442[(23)] = inst_31334__$1);

return statearr_31442;
})();
if(cljs.core.truth_(inst_31335)){
var statearr_31443_31505 = state_31366__$1;
(statearr_31443_31505[(1)] = (39));

} else {
var statearr_31444_31506 = state_31366__$1;
(statearr_31444_31506[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (8))){
var inst_31249 = (state_31366[(14)]);
var inst_31250 = (state_31366[(17)]);
var inst_31252 = (inst_31250 < inst_31249);
var inst_31253 = inst_31252;
var state_31366__$1 = state_31366;
if(cljs.core.truth_(inst_31253)){
var statearr_31445_31507 = state_31366__$1;
(statearr_31445_31507[(1)] = (10));

} else {
var statearr_31446_31508 = state_31366__$1;
(statearr_31446_31508[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19313__auto___31454,cs,m,dchan,dctr,done))
;
return ((function (switch__19257__auto__,c__19313__auto___31454,cs,m,dchan,dctr,done){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_31450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31450[(0)] = state_machine__19258__auto__);

(statearr_31450[(1)] = (1));

return statearr_31450;
});
var state_machine__19258__auto____1 = (function (state_31366){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_31366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e31451){if((e31451 instanceof Object)){
var ex__19261__auto__ = e31451;
var statearr_31452_31509 = state_31366;
(statearr_31452_31509[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31510 = state_31366;
state_31366 = G__31510;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___31454,cs,m,dchan,dctr,done))
})();
var state__19315__auto__ = (function (){var statearr_31453 = f__19314__auto__.call(null);
(statearr_31453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___31454);

return statearr_31453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___31454,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj31512 = {};
return obj31512;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__16197__auto__ = m;
if(and__16197__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16197__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16853__auto__ = (((m == null))?null:m);
return (function (){var or__16209__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31513){
var map__31518 = p__31513;
var map__31518__$1 = ((cljs.core.seq_QMARK_.call(null,map__31518))?cljs.core.apply.call(null,cljs.core.hash_map,map__31518):map__31518);
var opts = map__31518__$1;
var statearr_31519_31522 = state;
(statearr_31519_31522[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31518,map__31518__$1,opts){
return (function (val){
var statearr_31520_31523 = state;
(statearr_31520_31523[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31518,map__31518__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31521_31524 = state;
(statearr_31521_31524[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31513 = null;
if (arguments.length > 3) {
var G__31525__i = 0, G__31525__a = new Array(arguments.length -  3);
while (G__31525__i < G__31525__a.length) {G__31525__a[G__31525__i] = arguments[G__31525__i + 3]; ++G__31525__i;}
  p__31513 = new cljs.core.IndexedSeq(G__31525__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31513);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31526){
var state = cljs.core.first(arglist__31526);
arglist__31526 = cljs.core.next(arglist__31526);
var cont_block = cljs.core.first(arglist__31526);
arglist__31526 = cljs.core.next(arglist__31526);
var ports = cljs.core.first(arglist__31526);
var p__31513 = cljs.core.rest(arglist__31526);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31513);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31646 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31646 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31647){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31647 = meta31647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31646.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31646.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31648){
var self__ = this;
var _31648__$1 = this;
return self__.meta31647;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31648,meta31647__$1){
var self__ = this;
var _31648__$1 = this;
return (new cljs.core.async.t31646(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31647__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31646.cljs$lang$type = true;

cljs.core.async.t31646.cljs$lang$ctorStr = "cljs.core.async/t31646";

cljs.core.async.t31646.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t31646");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31646 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31646(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31647){
return (new cljs.core.async.t31646(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31647));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31646(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19313__auto___31765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___31765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___31765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31718){
var state_val_31719 = (state_31718[(1)]);
if((state_val_31719 === (7))){
var inst_31662 = (state_31718[(7)]);
var inst_31667 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31662);
var state_31718__$1 = state_31718;
var statearr_31720_31766 = state_31718__$1;
(statearr_31720_31766[(2)] = inst_31667);

(statearr_31720_31766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (20))){
var inst_31677 = (state_31718[(8)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31718__$1,(23),out,inst_31677);
} else {
if((state_val_31719 === (1))){
var inst_31652 = (state_31718[(9)]);
var inst_31652__$1 = calc_state.call(null);
var inst_31653 = cljs.core.seq_QMARK_.call(null,inst_31652__$1);
var state_31718__$1 = (function (){var statearr_31721 = state_31718;
(statearr_31721[(9)] = inst_31652__$1);

return statearr_31721;
})();
if(inst_31653){
var statearr_31722_31767 = state_31718__$1;
(statearr_31722_31767[(1)] = (2));

} else {
var statearr_31723_31768 = state_31718__$1;
(statearr_31723_31768[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (24))){
var inst_31670 = (state_31718[(10)]);
var inst_31662 = inst_31670;
var state_31718__$1 = (function (){var statearr_31724 = state_31718;
(statearr_31724[(7)] = inst_31662);

return statearr_31724;
})();
var statearr_31725_31769 = state_31718__$1;
(statearr_31725_31769[(2)] = null);

(statearr_31725_31769[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (4))){
var inst_31652 = (state_31718[(9)]);
var inst_31658 = (state_31718[(2)]);
var inst_31659 = cljs.core.get.call(null,inst_31658,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31660 = cljs.core.get.call(null,inst_31658,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31661 = cljs.core.get.call(null,inst_31658,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31662 = inst_31652;
var state_31718__$1 = (function (){var statearr_31726 = state_31718;
(statearr_31726[(11)] = inst_31659);

(statearr_31726[(12)] = inst_31661);

(statearr_31726[(7)] = inst_31662);

(statearr_31726[(13)] = inst_31660);

return statearr_31726;
})();
var statearr_31727_31770 = state_31718__$1;
(statearr_31727_31770[(2)] = null);

(statearr_31727_31770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (15))){
var state_31718__$1 = state_31718;
var statearr_31728_31771 = state_31718__$1;
(statearr_31728_31771[(2)] = null);

(statearr_31728_31771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (21))){
var inst_31670 = (state_31718[(10)]);
var inst_31662 = inst_31670;
var state_31718__$1 = (function (){var statearr_31729 = state_31718;
(statearr_31729[(7)] = inst_31662);

return statearr_31729;
})();
var statearr_31730_31772 = state_31718__$1;
(statearr_31730_31772[(2)] = null);

(statearr_31730_31772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (13))){
var inst_31714 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31731_31773 = state_31718__$1;
(statearr_31731_31773[(2)] = inst_31714);

(statearr_31731_31773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (22))){
var inst_31712 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31732_31774 = state_31718__$1;
(statearr_31732_31774[(2)] = inst_31712);

(statearr_31732_31774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (6))){
var inst_31716 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31718__$1,inst_31716);
} else {
if((state_val_31719 === (25))){
var state_31718__$1 = state_31718;
var statearr_31733_31775 = state_31718__$1;
(statearr_31733_31775[(2)] = null);

(statearr_31733_31775[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (17))){
var inst_31692 = (state_31718[(14)]);
var state_31718__$1 = state_31718;
var statearr_31734_31776 = state_31718__$1;
(statearr_31734_31776[(2)] = inst_31692);

(statearr_31734_31776[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (3))){
var inst_31652 = (state_31718[(9)]);
var state_31718__$1 = state_31718;
var statearr_31735_31777 = state_31718__$1;
(statearr_31735_31777[(2)] = inst_31652);

(statearr_31735_31777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (12))){
var inst_31678 = (state_31718[(15)]);
var inst_31692 = (state_31718[(14)]);
var inst_31673 = (state_31718[(16)]);
var inst_31692__$1 = inst_31673.call(null,inst_31678);
var state_31718__$1 = (function (){var statearr_31736 = state_31718;
(statearr_31736[(14)] = inst_31692__$1);

return statearr_31736;
})();
if(cljs.core.truth_(inst_31692__$1)){
var statearr_31737_31778 = state_31718__$1;
(statearr_31737_31778[(1)] = (17));

} else {
var statearr_31738_31779 = state_31718__$1;
(statearr_31738_31779[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (2))){
var inst_31652 = (state_31718[(9)]);
var inst_31655 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31652);
var state_31718__$1 = state_31718;
var statearr_31739_31780 = state_31718__$1;
(statearr_31739_31780[(2)] = inst_31655);

(statearr_31739_31780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (23))){
var inst_31703 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31703)){
var statearr_31740_31781 = state_31718__$1;
(statearr_31740_31781[(1)] = (24));

} else {
var statearr_31741_31782 = state_31718__$1;
(statearr_31741_31782[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (19))){
var inst_31700 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31700)){
var statearr_31742_31783 = state_31718__$1;
(statearr_31742_31783[(1)] = (20));

} else {
var statearr_31743_31784 = state_31718__$1;
(statearr_31743_31784[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (11))){
var inst_31677 = (state_31718[(8)]);
var inst_31683 = (inst_31677 == null);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31683)){
var statearr_31744_31785 = state_31718__$1;
(statearr_31744_31785[(1)] = (14));

} else {
var statearr_31745_31786 = state_31718__$1;
(statearr_31745_31786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (9))){
var inst_31670 = (state_31718[(10)]);
var inst_31670__$1 = (state_31718[(2)]);
var inst_31671 = cljs.core.get.call(null,inst_31670__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31672 = cljs.core.get.call(null,inst_31670__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31673 = cljs.core.get.call(null,inst_31670__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31718__$1 = (function (){var statearr_31746 = state_31718;
(statearr_31746[(17)] = inst_31672);

(statearr_31746[(10)] = inst_31670__$1);

(statearr_31746[(16)] = inst_31673);

return statearr_31746;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31718__$1,(10),inst_31671);
} else {
if((state_val_31719 === (5))){
var inst_31662 = (state_31718[(7)]);
var inst_31665 = cljs.core.seq_QMARK_.call(null,inst_31662);
var state_31718__$1 = state_31718;
if(inst_31665){
var statearr_31747_31787 = state_31718__$1;
(statearr_31747_31787[(1)] = (7));

} else {
var statearr_31748_31788 = state_31718__$1;
(statearr_31748_31788[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (14))){
var inst_31678 = (state_31718[(15)]);
var inst_31685 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31678);
var state_31718__$1 = state_31718;
var statearr_31749_31789 = state_31718__$1;
(statearr_31749_31789[(2)] = inst_31685);

(statearr_31749_31789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (26))){
var inst_31708 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31750_31790 = state_31718__$1;
(statearr_31750_31790[(2)] = inst_31708);

(statearr_31750_31790[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (16))){
var inst_31688 = (state_31718[(2)]);
var inst_31689 = calc_state.call(null);
var inst_31662 = inst_31689;
var state_31718__$1 = (function (){var statearr_31751 = state_31718;
(statearr_31751[(7)] = inst_31662);

(statearr_31751[(18)] = inst_31688);

return statearr_31751;
})();
var statearr_31752_31791 = state_31718__$1;
(statearr_31752_31791[(2)] = null);

(statearr_31752_31791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (10))){
var inst_31678 = (state_31718[(15)]);
var inst_31677 = (state_31718[(8)]);
var inst_31676 = (state_31718[(2)]);
var inst_31677__$1 = cljs.core.nth.call(null,inst_31676,(0),null);
var inst_31678__$1 = cljs.core.nth.call(null,inst_31676,(1),null);
var inst_31679 = (inst_31677__$1 == null);
var inst_31680 = cljs.core._EQ_.call(null,inst_31678__$1,change);
var inst_31681 = (inst_31679) || (inst_31680);
var state_31718__$1 = (function (){var statearr_31753 = state_31718;
(statearr_31753[(15)] = inst_31678__$1);

(statearr_31753[(8)] = inst_31677__$1);

return statearr_31753;
})();
if(cljs.core.truth_(inst_31681)){
var statearr_31754_31792 = state_31718__$1;
(statearr_31754_31792[(1)] = (11));

} else {
var statearr_31755_31793 = state_31718__$1;
(statearr_31755_31793[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (18))){
var inst_31672 = (state_31718[(17)]);
var inst_31678 = (state_31718[(15)]);
var inst_31673 = (state_31718[(16)]);
var inst_31695 = cljs.core.empty_QMARK_.call(null,inst_31673);
var inst_31696 = inst_31672.call(null,inst_31678);
var inst_31697 = cljs.core.not.call(null,inst_31696);
var inst_31698 = (inst_31695) && (inst_31697);
var state_31718__$1 = state_31718;
var statearr_31756_31794 = state_31718__$1;
(statearr_31756_31794[(2)] = inst_31698);

(statearr_31756_31794[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (8))){
var inst_31662 = (state_31718[(7)]);
var state_31718__$1 = state_31718;
var statearr_31757_31795 = state_31718__$1;
(statearr_31757_31795[(2)] = inst_31662);

(statearr_31757_31795[(1)] = (9));


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
});})(c__19313__auto___31765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19257__auto__,c__19313__auto___31765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_31761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31761[(0)] = state_machine__19258__auto__);

(statearr_31761[(1)] = (1));

return statearr_31761;
});
var state_machine__19258__auto____1 = (function (state_31718){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_31718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e31762){if((e31762 instanceof Object)){
var ex__19261__auto__ = e31762;
var statearr_31763_31796 = state_31718;
(statearr_31763_31796[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31797 = state_31718;
state_31718 = G__31797;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_31718){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_31718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___31765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19315__auto__ = (function (){var statearr_31764 = f__19314__auto__.call(null);
(statearr_31764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___31765);

return statearr_31764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___31765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj31799 = {};
return obj31799;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16197__auto__ = p;
if(and__16197__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16197__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16853__auto__ = (((p == null))?null:p);
return (function (){var or__16209__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__16197__auto__ = p;
if(and__16197__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16197__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16853__auto__ = (((p == null))?null:p);
return (function (){var or__16209__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__16197__auto__ = p;
if(and__16197__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16197__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16853__auto__ = (((p == null))?null:p);
return (function (){var or__16209__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16197__auto__ = p;
if(and__16197__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16197__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16853__auto__ = (((p == null))?null:p);
return (function (){var or__16209__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16853__auto__)]);
if(or__16209__auto__){
return or__16209__auto__;
} else {
var or__16209__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16209__auto____$1){
return or__16209__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16209__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16209__auto__)){
return or__16209__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16209__auto__,mults){
return (function (p1__31800_SHARP_){
if(cljs.core.truth_(p1__31800_SHARP_.call(null,topic))){
return p1__31800_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31800_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16209__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31923 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31923 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31924){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31924 = meta31924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31923.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31923.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31923.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31923.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31923.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31923.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31925){
var self__ = this;
var _31925__$1 = this;
return self__.meta31924;
});})(mults,ensure_mult))
;

cljs.core.async.t31923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31925,meta31924__$1){
var self__ = this;
var _31925__$1 = this;
return (new cljs.core.async.t31923(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31924__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31923.cljs$lang$type = true;

cljs.core.async.t31923.cljs$lang$ctorStr = "cljs.core.async/t31923";

cljs.core.async.t31923.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t31923");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31923 = ((function (mults,ensure_mult){
return (function __GT_t31923(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31924){
return (new cljs.core.async.t31923(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31924));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31923(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19313__auto___32045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___32045,mults,ensure_mult,p){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___32045,mults,ensure_mult,p){
return (function (state_31997){
var state_val_31998 = (state_31997[(1)]);
if((state_val_31998 === (7))){
var inst_31993 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
var statearr_31999_32046 = state_31997__$1;
(statearr_31999_32046[(2)] = inst_31993);

(statearr_31999_32046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (20))){
var state_31997__$1 = state_31997;
var statearr_32000_32047 = state_31997__$1;
(statearr_32000_32047[(2)] = null);

(statearr_32000_32047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (1))){
var state_31997__$1 = state_31997;
var statearr_32001_32048 = state_31997__$1;
(statearr_32001_32048[(2)] = null);

(statearr_32001_32048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (24))){
var inst_31976 = (state_31997[(7)]);
var inst_31985 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31976);
var state_31997__$1 = state_31997;
var statearr_32002_32049 = state_31997__$1;
(statearr_32002_32049[(2)] = inst_31985);

(statearr_32002_32049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (4))){
var inst_31928 = (state_31997[(8)]);
var inst_31928__$1 = (state_31997[(2)]);
var inst_31929 = (inst_31928__$1 == null);
var state_31997__$1 = (function (){var statearr_32003 = state_31997;
(statearr_32003[(8)] = inst_31928__$1);

return statearr_32003;
})();
if(cljs.core.truth_(inst_31929)){
var statearr_32004_32050 = state_31997__$1;
(statearr_32004_32050[(1)] = (5));

} else {
var statearr_32005_32051 = state_31997__$1;
(statearr_32005_32051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (15))){
var inst_31970 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
var statearr_32006_32052 = state_31997__$1;
(statearr_32006_32052[(2)] = inst_31970);

(statearr_32006_32052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (21))){
var inst_31990 = (state_31997[(2)]);
var state_31997__$1 = (function (){var statearr_32007 = state_31997;
(statearr_32007[(9)] = inst_31990);

return statearr_32007;
})();
var statearr_32008_32053 = state_31997__$1;
(statearr_32008_32053[(2)] = null);

(statearr_32008_32053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (13))){
var inst_31952 = (state_31997[(10)]);
var inst_31954 = cljs.core.chunked_seq_QMARK_.call(null,inst_31952);
var state_31997__$1 = state_31997;
if(inst_31954){
var statearr_32009_32054 = state_31997__$1;
(statearr_32009_32054[(1)] = (16));

} else {
var statearr_32010_32055 = state_31997__$1;
(statearr_32010_32055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (22))){
var inst_31982 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
if(cljs.core.truth_(inst_31982)){
var statearr_32011_32056 = state_31997__$1;
(statearr_32011_32056[(1)] = (23));

} else {
var statearr_32012_32057 = state_31997__$1;
(statearr_32012_32057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (6))){
var inst_31976 = (state_31997[(7)]);
var inst_31928 = (state_31997[(8)]);
var inst_31978 = (state_31997[(11)]);
var inst_31976__$1 = topic_fn.call(null,inst_31928);
var inst_31977 = cljs.core.deref.call(null,mults);
var inst_31978__$1 = cljs.core.get.call(null,inst_31977,inst_31976__$1);
var state_31997__$1 = (function (){var statearr_32013 = state_31997;
(statearr_32013[(7)] = inst_31976__$1);

(statearr_32013[(11)] = inst_31978__$1);

return statearr_32013;
})();
if(cljs.core.truth_(inst_31978__$1)){
var statearr_32014_32058 = state_31997__$1;
(statearr_32014_32058[(1)] = (19));

} else {
var statearr_32015_32059 = state_31997__$1;
(statearr_32015_32059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (25))){
var inst_31987 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
var statearr_32016_32060 = state_31997__$1;
(statearr_32016_32060[(2)] = inst_31987);

(statearr_32016_32060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (17))){
var inst_31952 = (state_31997[(10)]);
var inst_31961 = cljs.core.first.call(null,inst_31952);
var inst_31962 = cljs.core.async.muxch_STAR_.call(null,inst_31961);
var inst_31963 = cljs.core.async.close_BANG_.call(null,inst_31962);
var inst_31964 = cljs.core.next.call(null,inst_31952);
var inst_31938 = inst_31964;
var inst_31939 = null;
var inst_31940 = (0);
var inst_31941 = (0);
var state_31997__$1 = (function (){var statearr_32017 = state_31997;
(statearr_32017[(12)] = inst_31963);

(statearr_32017[(13)] = inst_31940);

(statearr_32017[(14)] = inst_31939);

(statearr_32017[(15)] = inst_31938);

(statearr_32017[(16)] = inst_31941);

return statearr_32017;
})();
var statearr_32018_32061 = state_31997__$1;
(statearr_32018_32061[(2)] = null);

(statearr_32018_32061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (3))){
var inst_31995 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31997__$1,inst_31995);
} else {
if((state_val_31998 === (12))){
var inst_31972 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
var statearr_32019_32062 = state_31997__$1;
(statearr_32019_32062[(2)] = inst_31972);

(statearr_32019_32062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (2))){
var state_31997__$1 = state_31997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31997__$1,(4),ch);
} else {
if((state_val_31998 === (23))){
var state_31997__$1 = state_31997;
var statearr_32020_32063 = state_31997__$1;
(statearr_32020_32063[(2)] = null);

(statearr_32020_32063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (19))){
var inst_31928 = (state_31997[(8)]);
var inst_31978 = (state_31997[(11)]);
var inst_31980 = cljs.core.async.muxch_STAR_.call(null,inst_31978);
var state_31997__$1 = state_31997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31997__$1,(22),inst_31980,inst_31928);
} else {
if((state_val_31998 === (11))){
var inst_31938 = (state_31997[(15)]);
var inst_31952 = (state_31997[(10)]);
var inst_31952__$1 = cljs.core.seq.call(null,inst_31938);
var state_31997__$1 = (function (){var statearr_32021 = state_31997;
(statearr_32021[(10)] = inst_31952__$1);

return statearr_32021;
})();
if(inst_31952__$1){
var statearr_32022_32064 = state_31997__$1;
(statearr_32022_32064[(1)] = (13));

} else {
var statearr_32023_32065 = state_31997__$1;
(statearr_32023_32065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (9))){
var inst_31974 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
var statearr_32024_32066 = state_31997__$1;
(statearr_32024_32066[(2)] = inst_31974);

(statearr_32024_32066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (5))){
var inst_31935 = cljs.core.deref.call(null,mults);
var inst_31936 = cljs.core.vals.call(null,inst_31935);
var inst_31937 = cljs.core.seq.call(null,inst_31936);
var inst_31938 = inst_31937;
var inst_31939 = null;
var inst_31940 = (0);
var inst_31941 = (0);
var state_31997__$1 = (function (){var statearr_32025 = state_31997;
(statearr_32025[(13)] = inst_31940);

(statearr_32025[(14)] = inst_31939);

(statearr_32025[(15)] = inst_31938);

(statearr_32025[(16)] = inst_31941);

return statearr_32025;
})();
var statearr_32026_32067 = state_31997__$1;
(statearr_32026_32067[(2)] = null);

(statearr_32026_32067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (14))){
var state_31997__$1 = state_31997;
var statearr_32030_32068 = state_31997__$1;
(statearr_32030_32068[(2)] = null);

(statearr_32030_32068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (16))){
var inst_31952 = (state_31997[(10)]);
var inst_31956 = cljs.core.chunk_first.call(null,inst_31952);
var inst_31957 = cljs.core.chunk_rest.call(null,inst_31952);
var inst_31958 = cljs.core.count.call(null,inst_31956);
var inst_31938 = inst_31957;
var inst_31939 = inst_31956;
var inst_31940 = inst_31958;
var inst_31941 = (0);
var state_31997__$1 = (function (){var statearr_32031 = state_31997;
(statearr_32031[(13)] = inst_31940);

(statearr_32031[(14)] = inst_31939);

(statearr_32031[(15)] = inst_31938);

(statearr_32031[(16)] = inst_31941);

return statearr_32031;
})();
var statearr_32032_32069 = state_31997__$1;
(statearr_32032_32069[(2)] = null);

(statearr_32032_32069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (10))){
var inst_31940 = (state_31997[(13)]);
var inst_31939 = (state_31997[(14)]);
var inst_31938 = (state_31997[(15)]);
var inst_31941 = (state_31997[(16)]);
var inst_31946 = cljs.core._nth.call(null,inst_31939,inst_31941);
var inst_31947 = cljs.core.async.muxch_STAR_.call(null,inst_31946);
var inst_31948 = cljs.core.async.close_BANG_.call(null,inst_31947);
var inst_31949 = (inst_31941 + (1));
var tmp32027 = inst_31940;
var tmp32028 = inst_31939;
var tmp32029 = inst_31938;
var inst_31938__$1 = tmp32029;
var inst_31939__$1 = tmp32028;
var inst_31940__$1 = tmp32027;
var inst_31941__$1 = inst_31949;
var state_31997__$1 = (function (){var statearr_32033 = state_31997;
(statearr_32033[(13)] = inst_31940__$1);

(statearr_32033[(14)] = inst_31939__$1);

(statearr_32033[(15)] = inst_31938__$1);

(statearr_32033[(17)] = inst_31948);

(statearr_32033[(16)] = inst_31941__$1);

return statearr_32033;
})();
var statearr_32034_32070 = state_31997__$1;
(statearr_32034_32070[(2)] = null);

(statearr_32034_32070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (18))){
var inst_31967 = (state_31997[(2)]);
var state_31997__$1 = state_31997;
var statearr_32035_32071 = state_31997__$1;
(statearr_32035_32071[(2)] = inst_31967);

(statearr_32035_32071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31998 === (8))){
var inst_31940 = (state_31997[(13)]);
var inst_31941 = (state_31997[(16)]);
var inst_31943 = (inst_31941 < inst_31940);
var inst_31944 = inst_31943;
var state_31997__$1 = state_31997;
if(cljs.core.truth_(inst_31944)){
var statearr_32036_32072 = state_31997__$1;
(statearr_32036_32072[(1)] = (10));

} else {
var statearr_32037_32073 = state_31997__$1;
(statearr_32037_32073[(1)] = (11));

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
});})(c__19313__auto___32045,mults,ensure_mult,p))
;
return ((function (switch__19257__auto__,c__19313__auto___32045,mults,ensure_mult,p){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_32041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32041[(0)] = state_machine__19258__auto__);

(statearr_32041[(1)] = (1));

return statearr_32041;
});
var state_machine__19258__auto____1 = (function (state_31997){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_31997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e32042){if((e32042 instanceof Object)){
var ex__19261__auto__ = e32042;
var statearr_32043_32074 = state_31997;
(statearr_32043_32074[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32075 = state_31997;
state_31997 = G__32075;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_31997){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_31997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___32045,mults,ensure_mult,p))
})();
var state__19315__auto__ = (function (){var statearr_32044 = f__19314__auto__.call(null);
(statearr_32044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___32045);

return statearr_32044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___32045,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19313__auto___32212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___32212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___32212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32182){
var state_val_32183 = (state_32182[(1)]);
if((state_val_32183 === (7))){
var state_32182__$1 = state_32182;
var statearr_32184_32213 = state_32182__$1;
(statearr_32184_32213[(2)] = null);

(statearr_32184_32213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (1))){
var state_32182__$1 = state_32182;
var statearr_32185_32214 = state_32182__$1;
(statearr_32185_32214[(2)] = null);

(statearr_32185_32214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (4))){
var inst_32146 = (state_32182[(7)]);
var inst_32148 = (inst_32146 < cnt);
var state_32182__$1 = state_32182;
if(cljs.core.truth_(inst_32148)){
var statearr_32186_32215 = state_32182__$1;
(statearr_32186_32215[(1)] = (6));

} else {
var statearr_32187_32216 = state_32182__$1;
(statearr_32187_32216[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (15))){
var inst_32178 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32188_32217 = state_32182__$1;
(statearr_32188_32217[(2)] = inst_32178);

(statearr_32188_32217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (13))){
var inst_32171 = cljs.core.async.close_BANG_.call(null,out);
var state_32182__$1 = state_32182;
var statearr_32189_32218 = state_32182__$1;
(statearr_32189_32218[(2)] = inst_32171);

(statearr_32189_32218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (6))){
var state_32182__$1 = state_32182;
var statearr_32190_32219 = state_32182__$1;
(statearr_32190_32219[(2)] = null);

(statearr_32190_32219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (3))){
var inst_32180 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32182__$1,inst_32180);
} else {
if((state_val_32183 === (12))){
var inst_32168 = (state_32182[(8)]);
var inst_32168__$1 = (state_32182[(2)]);
var inst_32169 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32168__$1);
var state_32182__$1 = (function (){var statearr_32191 = state_32182;
(statearr_32191[(8)] = inst_32168__$1);

return statearr_32191;
})();
if(cljs.core.truth_(inst_32169)){
var statearr_32192_32220 = state_32182__$1;
(statearr_32192_32220[(1)] = (13));

} else {
var statearr_32193_32221 = state_32182__$1;
(statearr_32193_32221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (2))){
var inst_32145 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32146 = (0);
var state_32182__$1 = (function (){var statearr_32194 = state_32182;
(statearr_32194[(7)] = inst_32146);

(statearr_32194[(9)] = inst_32145);

return statearr_32194;
})();
var statearr_32195_32222 = state_32182__$1;
(statearr_32195_32222[(2)] = null);

(statearr_32195_32222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (11))){
var inst_32146 = (state_32182[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32182,(10),Object,null,(9));
var inst_32155 = chs__$1.call(null,inst_32146);
var inst_32156 = done.call(null,inst_32146);
var inst_32157 = cljs.core.async.take_BANG_.call(null,inst_32155,inst_32156);
var state_32182__$1 = state_32182;
var statearr_32196_32223 = state_32182__$1;
(statearr_32196_32223[(2)] = inst_32157);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (9))){
var inst_32146 = (state_32182[(7)]);
var inst_32159 = (state_32182[(2)]);
var inst_32160 = (inst_32146 + (1));
var inst_32146__$1 = inst_32160;
var state_32182__$1 = (function (){var statearr_32197 = state_32182;
(statearr_32197[(7)] = inst_32146__$1);

(statearr_32197[(10)] = inst_32159);

return statearr_32197;
})();
var statearr_32198_32224 = state_32182__$1;
(statearr_32198_32224[(2)] = null);

(statearr_32198_32224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (5))){
var inst_32166 = (state_32182[(2)]);
var state_32182__$1 = (function (){var statearr_32199 = state_32182;
(statearr_32199[(11)] = inst_32166);

return statearr_32199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32182__$1,(12),dchan);
} else {
if((state_val_32183 === (14))){
var inst_32168 = (state_32182[(8)]);
var inst_32173 = cljs.core.apply.call(null,f,inst_32168);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32182__$1,(16),out,inst_32173);
} else {
if((state_val_32183 === (16))){
var inst_32175 = (state_32182[(2)]);
var state_32182__$1 = (function (){var statearr_32200 = state_32182;
(statearr_32200[(12)] = inst_32175);

return statearr_32200;
})();
var statearr_32201_32225 = state_32182__$1;
(statearr_32201_32225[(2)] = null);

(statearr_32201_32225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (10))){
var inst_32150 = (state_32182[(2)]);
var inst_32151 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32182__$1 = (function (){var statearr_32202 = state_32182;
(statearr_32202[(13)] = inst_32150);

return statearr_32202;
})();
var statearr_32203_32226 = state_32182__$1;
(statearr_32203_32226[(2)] = inst_32151);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (8))){
var inst_32164 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32204_32227 = state_32182__$1;
(statearr_32204_32227[(2)] = inst_32164);

(statearr_32204_32227[(1)] = (5));


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
});})(c__19313__auto___32212,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19257__auto__,c__19313__auto___32212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_32208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32208[(0)] = state_machine__19258__auto__);

(statearr_32208[(1)] = (1));

return statearr_32208;
});
var state_machine__19258__auto____1 = (function (state_32182){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_32182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e32209){if((e32209 instanceof Object)){
var ex__19261__auto__ = e32209;
var statearr_32210_32228 = state_32182;
(statearr_32210_32228[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32229 = state_32182;
state_32182 = G__32229;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_32182){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_32182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___32212,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19315__auto__ = (function (){var statearr_32211 = f__19314__auto__.call(null);
(statearr_32211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___32212);

return statearr_32211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___32212,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19313__auto___32337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___32337,out){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___32337,out){
return (function (state_32313){
var state_val_32314 = (state_32313[(1)]);
if((state_val_32314 === (7))){
var inst_32292 = (state_32313[(7)]);
var inst_32293 = (state_32313[(8)]);
var inst_32292__$1 = (state_32313[(2)]);
var inst_32293__$1 = cljs.core.nth.call(null,inst_32292__$1,(0),null);
var inst_32294 = cljs.core.nth.call(null,inst_32292__$1,(1),null);
var inst_32295 = (inst_32293__$1 == null);
var state_32313__$1 = (function (){var statearr_32315 = state_32313;
(statearr_32315[(9)] = inst_32294);

(statearr_32315[(7)] = inst_32292__$1);

(statearr_32315[(8)] = inst_32293__$1);

return statearr_32315;
})();
if(cljs.core.truth_(inst_32295)){
var statearr_32316_32338 = state_32313__$1;
(statearr_32316_32338[(1)] = (8));

} else {
var statearr_32317_32339 = state_32313__$1;
(statearr_32317_32339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (1))){
var inst_32284 = cljs.core.vec.call(null,chs);
var inst_32285 = inst_32284;
var state_32313__$1 = (function (){var statearr_32318 = state_32313;
(statearr_32318[(10)] = inst_32285);

return statearr_32318;
})();
var statearr_32319_32340 = state_32313__$1;
(statearr_32319_32340[(2)] = null);

(statearr_32319_32340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (4))){
var inst_32285 = (state_32313[(10)]);
var state_32313__$1 = state_32313;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32313__$1,(7),inst_32285);
} else {
if((state_val_32314 === (6))){
var inst_32309 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
var statearr_32320_32341 = state_32313__$1;
(statearr_32320_32341[(2)] = inst_32309);

(statearr_32320_32341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (3))){
var inst_32311 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32313__$1,inst_32311);
} else {
if((state_val_32314 === (2))){
var inst_32285 = (state_32313[(10)]);
var inst_32287 = cljs.core.count.call(null,inst_32285);
var inst_32288 = (inst_32287 > (0));
var state_32313__$1 = state_32313;
if(cljs.core.truth_(inst_32288)){
var statearr_32322_32342 = state_32313__$1;
(statearr_32322_32342[(1)] = (4));

} else {
var statearr_32323_32343 = state_32313__$1;
(statearr_32323_32343[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (11))){
var inst_32285 = (state_32313[(10)]);
var inst_32302 = (state_32313[(2)]);
var tmp32321 = inst_32285;
var inst_32285__$1 = tmp32321;
var state_32313__$1 = (function (){var statearr_32324 = state_32313;
(statearr_32324[(10)] = inst_32285__$1);

(statearr_32324[(11)] = inst_32302);

return statearr_32324;
})();
var statearr_32325_32344 = state_32313__$1;
(statearr_32325_32344[(2)] = null);

(statearr_32325_32344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (9))){
var inst_32293 = (state_32313[(8)]);
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32313__$1,(11),out,inst_32293);
} else {
if((state_val_32314 === (5))){
var inst_32307 = cljs.core.async.close_BANG_.call(null,out);
var state_32313__$1 = state_32313;
var statearr_32326_32345 = state_32313__$1;
(statearr_32326_32345[(2)] = inst_32307);

(statearr_32326_32345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (10))){
var inst_32305 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
var statearr_32327_32346 = state_32313__$1;
(statearr_32327_32346[(2)] = inst_32305);

(statearr_32327_32346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (8))){
var inst_32294 = (state_32313[(9)]);
var inst_32285 = (state_32313[(10)]);
var inst_32292 = (state_32313[(7)]);
var inst_32293 = (state_32313[(8)]);
var inst_32297 = (function (){var c = inst_32294;
var v = inst_32293;
var vec__32290 = inst_32292;
var cs = inst_32285;
return ((function (c,v,vec__32290,cs,inst_32294,inst_32285,inst_32292,inst_32293,state_val_32314,c__19313__auto___32337,out){
return (function (p1__32230_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32230_SHARP_);
});
;})(c,v,vec__32290,cs,inst_32294,inst_32285,inst_32292,inst_32293,state_val_32314,c__19313__auto___32337,out))
})();
var inst_32298 = cljs.core.filterv.call(null,inst_32297,inst_32285);
var inst_32285__$1 = inst_32298;
var state_32313__$1 = (function (){var statearr_32328 = state_32313;
(statearr_32328[(10)] = inst_32285__$1);

return statearr_32328;
})();
var statearr_32329_32347 = state_32313__$1;
(statearr_32329_32347[(2)] = null);

(statearr_32329_32347[(1)] = (2));


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
});})(c__19313__auto___32337,out))
;
return ((function (switch__19257__auto__,c__19313__auto___32337,out){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_32333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32333[(0)] = state_machine__19258__auto__);

(statearr_32333[(1)] = (1));

return statearr_32333;
});
var state_machine__19258__auto____1 = (function (state_32313){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_32313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e32334){if((e32334 instanceof Object)){
var ex__19261__auto__ = e32334;
var statearr_32335_32348 = state_32313;
(statearr_32335_32348[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32349 = state_32313;
state_32313 = G__32349;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_32313){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_32313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___32337,out))
})();
var state__19315__auto__ = (function (){var statearr_32336 = f__19314__auto__.call(null);
(statearr_32336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___32337);

return statearr_32336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___32337,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19313__auto___32442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___32442,out){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___32442,out){
return (function (state_32419){
var state_val_32420 = (state_32419[(1)]);
if((state_val_32420 === (7))){
var inst_32401 = (state_32419[(7)]);
var inst_32401__$1 = (state_32419[(2)]);
var inst_32402 = (inst_32401__$1 == null);
var inst_32403 = cljs.core.not.call(null,inst_32402);
var state_32419__$1 = (function (){var statearr_32421 = state_32419;
(statearr_32421[(7)] = inst_32401__$1);

return statearr_32421;
})();
if(inst_32403){
var statearr_32422_32443 = state_32419__$1;
(statearr_32422_32443[(1)] = (8));

} else {
var statearr_32423_32444 = state_32419__$1;
(statearr_32423_32444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (1))){
var inst_32396 = (0);
var state_32419__$1 = (function (){var statearr_32424 = state_32419;
(statearr_32424[(8)] = inst_32396);

return statearr_32424;
})();
var statearr_32425_32445 = state_32419__$1;
(statearr_32425_32445[(2)] = null);

(statearr_32425_32445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (4))){
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32419__$1,(7),ch);
} else {
if((state_val_32420 === (6))){
var inst_32414 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32426_32446 = state_32419__$1;
(statearr_32426_32446[(2)] = inst_32414);

(statearr_32426_32446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (3))){
var inst_32416 = (state_32419[(2)]);
var inst_32417 = cljs.core.async.close_BANG_.call(null,out);
var state_32419__$1 = (function (){var statearr_32427 = state_32419;
(statearr_32427[(9)] = inst_32416);

return statearr_32427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32419__$1,inst_32417);
} else {
if((state_val_32420 === (2))){
var inst_32396 = (state_32419[(8)]);
var inst_32398 = (inst_32396 < n);
var state_32419__$1 = state_32419;
if(cljs.core.truth_(inst_32398)){
var statearr_32428_32447 = state_32419__$1;
(statearr_32428_32447[(1)] = (4));

} else {
var statearr_32429_32448 = state_32419__$1;
(statearr_32429_32448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (11))){
var inst_32396 = (state_32419[(8)]);
var inst_32406 = (state_32419[(2)]);
var inst_32407 = (inst_32396 + (1));
var inst_32396__$1 = inst_32407;
var state_32419__$1 = (function (){var statearr_32430 = state_32419;
(statearr_32430[(10)] = inst_32406);

(statearr_32430[(8)] = inst_32396__$1);

return statearr_32430;
})();
var statearr_32431_32449 = state_32419__$1;
(statearr_32431_32449[(2)] = null);

(statearr_32431_32449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (9))){
var state_32419__$1 = state_32419;
var statearr_32432_32450 = state_32419__$1;
(statearr_32432_32450[(2)] = null);

(statearr_32432_32450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (5))){
var state_32419__$1 = state_32419;
var statearr_32433_32451 = state_32419__$1;
(statearr_32433_32451[(2)] = null);

(statearr_32433_32451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (10))){
var inst_32411 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32434_32452 = state_32419__$1;
(statearr_32434_32452[(2)] = inst_32411);

(statearr_32434_32452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (8))){
var inst_32401 = (state_32419[(7)]);
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32419__$1,(11),out,inst_32401);
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
});})(c__19313__auto___32442,out))
;
return ((function (switch__19257__auto__,c__19313__auto___32442,out){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_32438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32438[(0)] = state_machine__19258__auto__);

(statearr_32438[(1)] = (1));

return statearr_32438;
});
var state_machine__19258__auto____1 = (function (state_32419){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_32419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e32439){if((e32439 instanceof Object)){
var ex__19261__auto__ = e32439;
var statearr_32440_32453 = state_32419;
(statearr_32440_32453[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32454 = state_32419;
state_32419 = G__32454;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_32419){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_32419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___32442,out))
})();
var state__19315__auto__ = (function (){var statearr_32441 = f__19314__auto__.call(null);
(statearr_32441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___32442);

return statearr_32441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___32442,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t32462 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32462 = (function (ch,f,map_LT_,meta32463){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32463 = meta32463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32465 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32465 = (function (fn1,_,meta32463,map_LT_,f,ch,meta32466){
this.fn1 = fn1;
this._ = _;
this.meta32463 = meta32463;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32466 = meta32466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32465.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32455_SHARP_){
return f1.call(null,(((p1__32455_SHARP_ == null))?null:self__.f.call(null,p1__32455_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32467){
var self__ = this;
var _32467__$1 = this;
return self__.meta32466;
});})(___$1))
;

cljs.core.async.t32465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32467,meta32466__$1){
var self__ = this;
var _32467__$1 = this;
return (new cljs.core.async.t32465(self__.fn1,self__._,self__.meta32463,self__.map_LT_,self__.f,self__.ch,meta32466__$1));
});})(___$1))
;

cljs.core.async.t32465.cljs$lang$type = true;

cljs.core.async.t32465.cljs$lang$ctorStr = "cljs.core.async/t32465";

cljs.core.async.t32465.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t32465");
});})(___$1))
;

cljs.core.async.__GT_t32465 = ((function (___$1){
return (function __GT_t32465(fn1__$1,___$2,meta32463__$1,map_LT___$1,f__$1,ch__$1,meta32466){
return (new cljs.core.async.t32465(fn1__$1,___$2,meta32463__$1,map_LT___$1,f__$1,ch__$1,meta32466));
});})(___$1))
;

}

return (new cljs.core.async.t32465(fn1,___$1,self__.meta32463,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16197__auto__ = ret;
if(cljs.core.truth_(and__16197__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16197__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32462.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32462.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32464){
var self__ = this;
var _32464__$1 = this;
return self__.meta32463;
});

cljs.core.async.t32462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32464,meta32463__$1){
var self__ = this;
var _32464__$1 = this;
return (new cljs.core.async.t32462(self__.ch,self__.f,self__.map_LT_,meta32463__$1));
});

cljs.core.async.t32462.cljs$lang$type = true;

cljs.core.async.t32462.cljs$lang$ctorStr = "cljs.core.async/t32462";

cljs.core.async.t32462.cljs$lang$ctorPrWriter = (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t32462");
});

cljs.core.async.__GT_t32462 = (function __GT_t32462(ch__$1,f__$1,map_LT___$1,meta32463){
return (new cljs.core.async.t32462(ch__$1,f__$1,map_LT___$1,meta32463));
});

}

return (new cljs.core.async.t32462(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32471 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32471 = (function (ch,f,map_GT_,meta32472){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32472 = meta32472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32471.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32473){
var self__ = this;
var _32473__$1 = this;
return self__.meta32472;
});

cljs.core.async.t32471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32473,meta32472__$1){
var self__ = this;
var _32473__$1 = this;
return (new cljs.core.async.t32471(self__.ch,self__.f,self__.map_GT_,meta32472__$1));
});

cljs.core.async.t32471.cljs$lang$type = true;

cljs.core.async.t32471.cljs$lang$ctorStr = "cljs.core.async/t32471";

cljs.core.async.t32471.cljs$lang$ctorPrWriter = (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t32471");
});

cljs.core.async.__GT_t32471 = (function __GT_t32471(ch__$1,f__$1,map_GT___$1,meta32472){
return (new cljs.core.async.t32471(ch__$1,f__$1,map_GT___$1,meta32472));
});

}

return (new cljs.core.async.t32471(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32477 = (function (ch,p,filter_GT_,meta32478){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32478 = meta32478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32477.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32477.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32477.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32479){
var self__ = this;
var _32479__$1 = this;
return self__.meta32478;
});

cljs.core.async.t32477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32479,meta32478__$1){
var self__ = this;
var _32479__$1 = this;
return (new cljs.core.async.t32477(self__.ch,self__.p,self__.filter_GT_,meta32478__$1));
});

cljs.core.async.t32477.cljs$lang$type = true;

cljs.core.async.t32477.cljs$lang$ctorStr = "cljs.core.async/t32477";

cljs.core.async.t32477.cljs$lang$ctorPrWriter = (function (this__16796__auto__,writer__16797__auto__,opt__16798__auto__){
return cljs.core._write.call(null,writer__16797__auto__,"cljs.core.async/t32477");
});

cljs.core.async.__GT_t32477 = (function __GT_t32477(ch__$1,p__$1,filter_GT___$1,meta32478){
return (new cljs.core.async.t32477(ch__$1,p__$1,filter_GT___$1,meta32478));
});

}

return (new cljs.core.async.t32477(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19313__auto___32562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___32562,out){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___32562,out){
return (function (state_32541){
var state_val_32542 = (state_32541[(1)]);
if((state_val_32542 === (7))){
var inst_32537 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32543_32563 = state_32541__$1;
(statearr_32543_32563[(2)] = inst_32537);

(statearr_32543_32563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (1))){
var state_32541__$1 = state_32541;
var statearr_32544_32564 = state_32541__$1;
(statearr_32544_32564[(2)] = null);

(statearr_32544_32564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (4))){
var inst_32523 = (state_32541[(7)]);
var inst_32523__$1 = (state_32541[(2)]);
var inst_32524 = (inst_32523__$1 == null);
var state_32541__$1 = (function (){var statearr_32545 = state_32541;
(statearr_32545[(7)] = inst_32523__$1);

return statearr_32545;
})();
if(cljs.core.truth_(inst_32524)){
var statearr_32546_32565 = state_32541__$1;
(statearr_32546_32565[(1)] = (5));

} else {
var statearr_32547_32566 = state_32541__$1;
(statearr_32547_32566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (6))){
var inst_32523 = (state_32541[(7)]);
var inst_32528 = p.call(null,inst_32523);
var state_32541__$1 = state_32541;
if(cljs.core.truth_(inst_32528)){
var statearr_32548_32567 = state_32541__$1;
(statearr_32548_32567[(1)] = (8));

} else {
var statearr_32549_32568 = state_32541__$1;
(statearr_32549_32568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (3))){
var inst_32539 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32541__$1,inst_32539);
} else {
if((state_val_32542 === (2))){
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32541__$1,(4),ch);
} else {
if((state_val_32542 === (11))){
var inst_32531 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32550_32569 = state_32541__$1;
(statearr_32550_32569[(2)] = inst_32531);

(statearr_32550_32569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (9))){
var state_32541__$1 = state_32541;
var statearr_32551_32570 = state_32541__$1;
(statearr_32551_32570[(2)] = null);

(statearr_32551_32570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (5))){
var inst_32526 = cljs.core.async.close_BANG_.call(null,out);
var state_32541__$1 = state_32541;
var statearr_32552_32571 = state_32541__$1;
(statearr_32552_32571[(2)] = inst_32526);

(statearr_32552_32571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (10))){
var inst_32534 = (state_32541[(2)]);
var state_32541__$1 = (function (){var statearr_32553 = state_32541;
(statearr_32553[(8)] = inst_32534);

return statearr_32553;
})();
var statearr_32554_32572 = state_32541__$1;
(statearr_32554_32572[(2)] = null);

(statearr_32554_32572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (8))){
var inst_32523 = (state_32541[(7)]);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32541__$1,(11),out,inst_32523);
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
});})(c__19313__auto___32562,out))
;
return ((function (switch__19257__auto__,c__19313__auto___32562,out){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_32558 = [null,null,null,null,null,null,null,null,null];
(statearr_32558[(0)] = state_machine__19258__auto__);

(statearr_32558[(1)] = (1));

return statearr_32558;
});
var state_machine__19258__auto____1 = (function (state_32541){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_32541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e32559){if((e32559 instanceof Object)){
var ex__19261__auto__ = e32559;
var statearr_32560_32573 = state_32541;
(statearr_32560_32573[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32574 = state_32541;
state_32541 = G__32574;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_32541){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_32541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___32562,out))
})();
var state__19315__auto__ = (function (){var statearr_32561 = f__19314__auto__.call(null);
(statearr_32561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___32562);

return statearr_32561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___32562,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__){
return (function (state_32740){
var state_val_32741 = (state_32740[(1)]);
if((state_val_32741 === (7))){
var inst_32736 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32742_32783 = state_32740__$1;
(statearr_32742_32783[(2)] = inst_32736);

(statearr_32742_32783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (20))){
var inst_32706 = (state_32740[(7)]);
var inst_32717 = (state_32740[(2)]);
var inst_32718 = cljs.core.next.call(null,inst_32706);
var inst_32692 = inst_32718;
var inst_32693 = null;
var inst_32694 = (0);
var inst_32695 = (0);
var state_32740__$1 = (function (){var statearr_32743 = state_32740;
(statearr_32743[(8)] = inst_32693);

(statearr_32743[(9)] = inst_32694);

(statearr_32743[(10)] = inst_32692);

(statearr_32743[(11)] = inst_32695);

(statearr_32743[(12)] = inst_32717);

return statearr_32743;
})();
var statearr_32744_32784 = state_32740__$1;
(statearr_32744_32784[(2)] = null);

(statearr_32744_32784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (1))){
var state_32740__$1 = state_32740;
var statearr_32745_32785 = state_32740__$1;
(statearr_32745_32785[(2)] = null);

(statearr_32745_32785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (4))){
var inst_32681 = (state_32740[(13)]);
var inst_32681__$1 = (state_32740[(2)]);
var inst_32682 = (inst_32681__$1 == null);
var state_32740__$1 = (function (){var statearr_32746 = state_32740;
(statearr_32746[(13)] = inst_32681__$1);

return statearr_32746;
})();
if(cljs.core.truth_(inst_32682)){
var statearr_32747_32786 = state_32740__$1;
(statearr_32747_32786[(1)] = (5));

} else {
var statearr_32748_32787 = state_32740__$1;
(statearr_32748_32787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (15))){
var state_32740__$1 = state_32740;
var statearr_32752_32788 = state_32740__$1;
(statearr_32752_32788[(2)] = null);

(statearr_32752_32788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (21))){
var state_32740__$1 = state_32740;
var statearr_32753_32789 = state_32740__$1;
(statearr_32753_32789[(2)] = null);

(statearr_32753_32789[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (13))){
var inst_32693 = (state_32740[(8)]);
var inst_32694 = (state_32740[(9)]);
var inst_32692 = (state_32740[(10)]);
var inst_32695 = (state_32740[(11)]);
var inst_32702 = (state_32740[(2)]);
var inst_32703 = (inst_32695 + (1));
var tmp32749 = inst_32693;
var tmp32750 = inst_32694;
var tmp32751 = inst_32692;
var inst_32692__$1 = tmp32751;
var inst_32693__$1 = tmp32749;
var inst_32694__$1 = tmp32750;
var inst_32695__$1 = inst_32703;
var state_32740__$1 = (function (){var statearr_32754 = state_32740;
(statearr_32754[(14)] = inst_32702);

(statearr_32754[(8)] = inst_32693__$1);

(statearr_32754[(9)] = inst_32694__$1);

(statearr_32754[(10)] = inst_32692__$1);

(statearr_32754[(11)] = inst_32695__$1);

return statearr_32754;
})();
var statearr_32755_32790 = state_32740__$1;
(statearr_32755_32790[(2)] = null);

(statearr_32755_32790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (22))){
var state_32740__$1 = state_32740;
var statearr_32756_32791 = state_32740__$1;
(statearr_32756_32791[(2)] = null);

(statearr_32756_32791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (6))){
var inst_32681 = (state_32740[(13)]);
var inst_32690 = f.call(null,inst_32681);
var inst_32691 = cljs.core.seq.call(null,inst_32690);
var inst_32692 = inst_32691;
var inst_32693 = null;
var inst_32694 = (0);
var inst_32695 = (0);
var state_32740__$1 = (function (){var statearr_32757 = state_32740;
(statearr_32757[(8)] = inst_32693);

(statearr_32757[(9)] = inst_32694);

(statearr_32757[(10)] = inst_32692);

(statearr_32757[(11)] = inst_32695);

return statearr_32757;
})();
var statearr_32758_32792 = state_32740__$1;
(statearr_32758_32792[(2)] = null);

(statearr_32758_32792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (17))){
var inst_32706 = (state_32740[(7)]);
var inst_32710 = cljs.core.chunk_first.call(null,inst_32706);
var inst_32711 = cljs.core.chunk_rest.call(null,inst_32706);
var inst_32712 = cljs.core.count.call(null,inst_32710);
var inst_32692 = inst_32711;
var inst_32693 = inst_32710;
var inst_32694 = inst_32712;
var inst_32695 = (0);
var state_32740__$1 = (function (){var statearr_32759 = state_32740;
(statearr_32759[(8)] = inst_32693);

(statearr_32759[(9)] = inst_32694);

(statearr_32759[(10)] = inst_32692);

(statearr_32759[(11)] = inst_32695);

return statearr_32759;
})();
var statearr_32760_32793 = state_32740__$1;
(statearr_32760_32793[(2)] = null);

(statearr_32760_32793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (3))){
var inst_32738 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32740__$1,inst_32738);
} else {
if((state_val_32741 === (12))){
var inst_32726 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32761_32794 = state_32740__$1;
(statearr_32761_32794[(2)] = inst_32726);

(statearr_32761_32794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (2))){
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32740__$1,(4),in$);
} else {
if((state_val_32741 === (23))){
var inst_32734 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32762_32795 = state_32740__$1;
(statearr_32762_32795[(2)] = inst_32734);

(statearr_32762_32795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (19))){
var inst_32721 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32763_32796 = state_32740__$1;
(statearr_32763_32796[(2)] = inst_32721);

(statearr_32763_32796[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (11))){
var inst_32692 = (state_32740[(10)]);
var inst_32706 = (state_32740[(7)]);
var inst_32706__$1 = cljs.core.seq.call(null,inst_32692);
var state_32740__$1 = (function (){var statearr_32764 = state_32740;
(statearr_32764[(7)] = inst_32706__$1);

return statearr_32764;
})();
if(inst_32706__$1){
var statearr_32765_32797 = state_32740__$1;
(statearr_32765_32797[(1)] = (14));

} else {
var statearr_32766_32798 = state_32740__$1;
(statearr_32766_32798[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (9))){
var inst_32728 = (state_32740[(2)]);
var inst_32729 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32740__$1 = (function (){var statearr_32767 = state_32740;
(statearr_32767[(15)] = inst_32728);

return statearr_32767;
})();
if(cljs.core.truth_(inst_32729)){
var statearr_32768_32799 = state_32740__$1;
(statearr_32768_32799[(1)] = (21));

} else {
var statearr_32769_32800 = state_32740__$1;
(statearr_32769_32800[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (5))){
var inst_32684 = cljs.core.async.close_BANG_.call(null,out);
var state_32740__$1 = state_32740;
var statearr_32770_32801 = state_32740__$1;
(statearr_32770_32801[(2)] = inst_32684);

(statearr_32770_32801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (14))){
var inst_32706 = (state_32740[(7)]);
var inst_32708 = cljs.core.chunked_seq_QMARK_.call(null,inst_32706);
var state_32740__$1 = state_32740;
if(inst_32708){
var statearr_32771_32802 = state_32740__$1;
(statearr_32771_32802[(1)] = (17));

} else {
var statearr_32772_32803 = state_32740__$1;
(statearr_32772_32803[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (16))){
var inst_32724 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32773_32804 = state_32740__$1;
(statearr_32773_32804[(2)] = inst_32724);

(statearr_32773_32804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (10))){
var inst_32693 = (state_32740[(8)]);
var inst_32695 = (state_32740[(11)]);
var inst_32700 = cljs.core._nth.call(null,inst_32693,inst_32695);
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32740__$1,(13),out,inst_32700);
} else {
if((state_val_32741 === (18))){
var inst_32706 = (state_32740[(7)]);
var inst_32715 = cljs.core.first.call(null,inst_32706);
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32740__$1,(20),out,inst_32715);
} else {
if((state_val_32741 === (8))){
var inst_32694 = (state_32740[(9)]);
var inst_32695 = (state_32740[(11)]);
var inst_32697 = (inst_32695 < inst_32694);
var inst_32698 = inst_32697;
var state_32740__$1 = state_32740;
if(cljs.core.truth_(inst_32698)){
var statearr_32774_32805 = state_32740__$1;
(statearr_32774_32805[(1)] = (10));

} else {
var statearr_32775_32806 = state_32740__$1;
(statearr_32775_32806[(1)] = (11));

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
});})(c__19313__auto__))
;
return ((function (switch__19257__auto__,c__19313__auto__){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_32779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32779[(0)] = state_machine__19258__auto__);

(statearr_32779[(1)] = (1));

return statearr_32779;
});
var state_machine__19258__auto____1 = (function (state_32740){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_32740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e32780){if((e32780 instanceof Object)){
var ex__19261__auto__ = e32780;
var statearr_32781_32807 = state_32740;
(statearr_32781_32807[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32808 = state_32740;
state_32740 = G__32808;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_32740){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_32740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__))
})();
var state__19315__auto__ = (function (){var statearr_32782 = f__19314__auto__.call(null);
(statearr_32782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_32782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__))
);

return c__19313__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19313__auto___32905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___32905,out){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___32905,out){
return (function (state_32880){
var state_val_32881 = (state_32880[(1)]);
if((state_val_32881 === (7))){
var inst_32875 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32882_32906 = state_32880__$1;
(statearr_32882_32906[(2)] = inst_32875);

(statearr_32882_32906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (1))){
var inst_32857 = null;
var state_32880__$1 = (function (){var statearr_32883 = state_32880;
(statearr_32883[(7)] = inst_32857);

return statearr_32883;
})();
var statearr_32884_32907 = state_32880__$1;
(statearr_32884_32907[(2)] = null);

(statearr_32884_32907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (4))){
var inst_32860 = (state_32880[(8)]);
var inst_32860__$1 = (state_32880[(2)]);
var inst_32861 = (inst_32860__$1 == null);
var inst_32862 = cljs.core.not.call(null,inst_32861);
var state_32880__$1 = (function (){var statearr_32885 = state_32880;
(statearr_32885[(8)] = inst_32860__$1);

return statearr_32885;
})();
if(inst_32862){
var statearr_32886_32908 = state_32880__$1;
(statearr_32886_32908[(1)] = (5));

} else {
var statearr_32887_32909 = state_32880__$1;
(statearr_32887_32909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (6))){
var state_32880__$1 = state_32880;
var statearr_32888_32910 = state_32880__$1;
(statearr_32888_32910[(2)] = null);

(statearr_32888_32910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (3))){
var inst_32877 = (state_32880[(2)]);
var inst_32878 = cljs.core.async.close_BANG_.call(null,out);
var state_32880__$1 = (function (){var statearr_32889 = state_32880;
(statearr_32889[(9)] = inst_32877);

return statearr_32889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32880__$1,inst_32878);
} else {
if((state_val_32881 === (2))){
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32880__$1,(4),ch);
} else {
if((state_val_32881 === (11))){
var inst_32860 = (state_32880[(8)]);
var inst_32869 = (state_32880[(2)]);
var inst_32857 = inst_32860;
var state_32880__$1 = (function (){var statearr_32890 = state_32880;
(statearr_32890[(7)] = inst_32857);

(statearr_32890[(10)] = inst_32869);

return statearr_32890;
})();
var statearr_32891_32911 = state_32880__$1;
(statearr_32891_32911[(2)] = null);

(statearr_32891_32911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (9))){
var inst_32860 = (state_32880[(8)]);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32880__$1,(11),out,inst_32860);
} else {
if((state_val_32881 === (5))){
var inst_32857 = (state_32880[(7)]);
var inst_32860 = (state_32880[(8)]);
var inst_32864 = cljs.core._EQ_.call(null,inst_32860,inst_32857);
var state_32880__$1 = state_32880;
if(inst_32864){
var statearr_32893_32912 = state_32880__$1;
(statearr_32893_32912[(1)] = (8));

} else {
var statearr_32894_32913 = state_32880__$1;
(statearr_32894_32913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (10))){
var inst_32872 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32895_32914 = state_32880__$1;
(statearr_32895_32914[(2)] = inst_32872);

(statearr_32895_32914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (8))){
var inst_32857 = (state_32880[(7)]);
var tmp32892 = inst_32857;
var inst_32857__$1 = tmp32892;
var state_32880__$1 = (function (){var statearr_32896 = state_32880;
(statearr_32896[(7)] = inst_32857__$1);

return statearr_32896;
})();
var statearr_32897_32915 = state_32880__$1;
(statearr_32897_32915[(2)] = null);

(statearr_32897_32915[(1)] = (2));


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
});})(c__19313__auto___32905,out))
;
return ((function (switch__19257__auto__,c__19313__auto___32905,out){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = state_machine__19258__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var state_machine__19258__auto____1 = (function (state_32880){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_32880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e32902){if((e32902 instanceof Object)){
var ex__19261__auto__ = e32902;
var statearr_32903_32916 = state_32880;
(statearr_32903_32916[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32917 = state_32880;
state_32880 = G__32917;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_32880){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_32880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___32905,out))
})();
var state__19315__auto__ = (function (){var statearr_32904 = f__19314__auto__.call(null);
(statearr_32904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___32905);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___32905,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19313__auto___33052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___33052,out){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___33052,out){
return (function (state_33022){
var state_val_33023 = (state_33022[(1)]);
if((state_val_33023 === (7))){
var inst_33018 = (state_33022[(2)]);
var state_33022__$1 = state_33022;
var statearr_33024_33053 = state_33022__$1;
(statearr_33024_33053[(2)] = inst_33018);

(statearr_33024_33053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (1))){
var inst_32985 = (new Array(n));
var inst_32986 = inst_32985;
var inst_32987 = (0);
var state_33022__$1 = (function (){var statearr_33025 = state_33022;
(statearr_33025[(7)] = inst_32986);

(statearr_33025[(8)] = inst_32987);

return statearr_33025;
})();
var statearr_33026_33054 = state_33022__$1;
(statearr_33026_33054[(2)] = null);

(statearr_33026_33054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (4))){
var inst_32990 = (state_33022[(9)]);
var inst_32990__$1 = (state_33022[(2)]);
var inst_32991 = (inst_32990__$1 == null);
var inst_32992 = cljs.core.not.call(null,inst_32991);
var state_33022__$1 = (function (){var statearr_33027 = state_33022;
(statearr_33027[(9)] = inst_32990__$1);

return statearr_33027;
})();
if(inst_32992){
var statearr_33028_33055 = state_33022__$1;
(statearr_33028_33055[(1)] = (5));

} else {
var statearr_33029_33056 = state_33022__$1;
(statearr_33029_33056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (15))){
var inst_33012 = (state_33022[(2)]);
var state_33022__$1 = state_33022;
var statearr_33030_33057 = state_33022__$1;
(statearr_33030_33057[(2)] = inst_33012);

(statearr_33030_33057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (13))){
var state_33022__$1 = state_33022;
var statearr_33031_33058 = state_33022__$1;
(statearr_33031_33058[(2)] = null);

(statearr_33031_33058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (6))){
var inst_32987 = (state_33022[(8)]);
var inst_33008 = (inst_32987 > (0));
var state_33022__$1 = state_33022;
if(cljs.core.truth_(inst_33008)){
var statearr_33032_33059 = state_33022__$1;
(statearr_33032_33059[(1)] = (12));

} else {
var statearr_33033_33060 = state_33022__$1;
(statearr_33033_33060[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (3))){
var inst_33020 = (state_33022[(2)]);
var state_33022__$1 = state_33022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33022__$1,inst_33020);
} else {
if((state_val_33023 === (12))){
var inst_32986 = (state_33022[(7)]);
var inst_33010 = cljs.core.vec.call(null,inst_32986);
var state_33022__$1 = state_33022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33022__$1,(15),out,inst_33010);
} else {
if((state_val_33023 === (2))){
var state_33022__$1 = state_33022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33022__$1,(4),ch);
} else {
if((state_val_33023 === (11))){
var inst_33002 = (state_33022[(2)]);
var inst_33003 = (new Array(n));
var inst_32986 = inst_33003;
var inst_32987 = (0);
var state_33022__$1 = (function (){var statearr_33034 = state_33022;
(statearr_33034[(7)] = inst_32986);

(statearr_33034[(8)] = inst_32987);

(statearr_33034[(10)] = inst_33002);

return statearr_33034;
})();
var statearr_33035_33061 = state_33022__$1;
(statearr_33035_33061[(2)] = null);

(statearr_33035_33061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (9))){
var inst_32986 = (state_33022[(7)]);
var inst_33000 = cljs.core.vec.call(null,inst_32986);
var state_33022__$1 = state_33022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33022__$1,(11),out,inst_33000);
} else {
if((state_val_33023 === (5))){
var inst_32986 = (state_33022[(7)]);
var inst_32995 = (state_33022[(11)]);
var inst_32987 = (state_33022[(8)]);
var inst_32990 = (state_33022[(9)]);
var inst_32994 = (inst_32986[inst_32987] = inst_32990);
var inst_32995__$1 = (inst_32987 + (1));
var inst_32996 = (inst_32995__$1 < n);
var state_33022__$1 = (function (){var statearr_33036 = state_33022;
(statearr_33036[(11)] = inst_32995__$1);

(statearr_33036[(12)] = inst_32994);

return statearr_33036;
})();
if(cljs.core.truth_(inst_32996)){
var statearr_33037_33062 = state_33022__$1;
(statearr_33037_33062[(1)] = (8));

} else {
var statearr_33038_33063 = state_33022__$1;
(statearr_33038_33063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (14))){
var inst_33015 = (state_33022[(2)]);
var inst_33016 = cljs.core.async.close_BANG_.call(null,out);
var state_33022__$1 = (function (){var statearr_33040 = state_33022;
(statearr_33040[(13)] = inst_33015);

return statearr_33040;
})();
var statearr_33041_33064 = state_33022__$1;
(statearr_33041_33064[(2)] = inst_33016);

(statearr_33041_33064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (10))){
var inst_33006 = (state_33022[(2)]);
var state_33022__$1 = state_33022;
var statearr_33042_33065 = state_33022__$1;
(statearr_33042_33065[(2)] = inst_33006);

(statearr_33042_33065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (8))){
var inst_32986 = (state_33022[(7)]);
var inst_32995 = (state_33022[(11)]);
var tmp33039 = inst_32986;
var inst_32986__$1 = tmp33039;
var inst_32987 = inst_32995;
var state_33022__$1 = (function (){var statearr_33043 = state_33022;
(statearr_33043[(7)] = inst_32986__$1);

(statearr_33043[(8)] = inst_32987);

return statearr_33043;
})();
var statearr_33044_33066 = state_33022__$1;
(statearr_33044_33066[(2)] = null);

(statearr_33044_33066[(1)] = (2));


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
});})(c__19313__auto___33052,out))
;
return ((function (switch__19257__auto__,c__19313__auto___33052,out){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_33048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33048[(0)] = state_machine__19258__auto__);

(statearr_33048[(1)] = (1));

return statearr_33048;
});
var state_machine__19258__auto____1 = (function (state_33022){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_33022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e33049){if((e33049 instanceof Object)){
var ex__19261__auto__ = e33049;
var statearr_33050_33067 = state_33022;
(statearr_33050_33067[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33068 = state_33022;
state_33022 = G__33068;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_33022){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_33022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___33052,out))
})();
var state__19315__auto__ = (function (){var statearr_33051 = f__19314__auto__.call(null);
(statearr_33051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___33052);

return statearr_33051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___33052,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19313__auto___33211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto___33211,out){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto___33211,out){
return (function (state_33181){
var state_val_33182 = (state_33181[(1)]);
if((state_val_33182 === (7))){
var inst_33177 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
var statearr_33183_33212 = state_33181__$1;
(statearr_33183_33212[(2)] = inst_33177);

(statearr_33183_33212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (1))){
var inst_33140 = [];
var inst_33141 = inst_33140;
var inst_33142 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33181__$1 = (function (){var statearr_33184 = state_33181;
(statearr_33184[(7)] = inst_33141);

(statearr_33184[(8)] = inst_33142);

return statearr_33184;
})();
var statearr_33185_33213 = state_33181__$1;
(statearr_33185_33213[(2)] = null);

(statearr_33185_33213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (4))){
var inst_33145 = (state_33181[(9)]);
var inst_33145__$1 = (state_33181[(2)]);
var inst_33146 = (inst_33145__$1 == null);
var inst_33147 = cljs.core.not.call(null,inst_33146);
var state_33181__$1 = (function (){var statearr_33186 = state_33181;
(statearr_33186[(9)] = inst_33145__$1);

return statearr_33186;
})();
if(inst_33147){
var statearr_33187_33214 = state_33181__$1;
(statearr_33187_33214[(1)] = (5));

} else {
var statearr_33188_33215 = state_33181__$1;
(statearr_33188_33215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (15))){
var inst_33171 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
var statearr_33189_33216 = state_33181__$1;
(statearr_33189_33216[(2)] = inst_33171);

(statearr_33189_33216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (13))){
var state_33181__$1 = state_33181;
var statearr_33190_33217 = state_33181__$1;
(statearr_33190_33217[(2)] = null);

(statearr_33190_33217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (6))){
var inst_33141 = (state_33181[(7)]);
var inst_33166 = inst_33141.length;
var inst_33167 = (inst_33166 > (0));
var state_33181__$1 = state_33181;
if(cljs.core.truth_(inst_33167)){
var statearr_33191_33218 = state_33181__$1;
(statearr_33191_33218[(1)] = (12));

} else {
var statearr_33192_33219 = state_33181__$1;
(statearr_33192_33219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (3))){
var inst_33179 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33181__$1,inst_33179);
} else {
if((state_val_33182 === (12))){
var inst_33141 = (state_33181[(7)]);
var inst_33169 = cljs.core.vec.call(null,inst_33141);
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33181__$1,(15),out,inst_33169);
} else {
if((state_val_33182 === (2))){
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33181__$1,(4),ch);
} else {
if((state_val_33182 === (11))){
var inst_33149 = (state_33181[(10)]);
var inst_33145 = (state_33181[(9)]);
var inst_33159 = (state_33181[(2)]);
var inst_33160 = [];
var inst_33161 = inst_33160.push(inst_33145);
var inst_33141 = inst_33160;
var inst_33142 = inst_33149;
var state_33181__$1 = (function (){var statearr_33193 = state_33181;
(statearr_33193[(7)] = inst_33141);

(statearr_33193[(8)] = inst_33142);

(statearr_33193[(11)] = inst_33159);

(statearr_33193[(12)] = inst_33161);

return statearr_33193;
})();
var statearr_33194_33220 = state_33181__$1;
(statearr_33194_33220[(2)] = null);

(statearr_33194_33220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (9))){
var inst_33141 = (state_33181[(7)]);
var inst_33157 = cljs.core.vec.call(null,inst_33141);
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33181__$1,(11),out,inst_33157);
} else {
if((state_val_33182 === (5))){
var inst_33149 = (state_33181[(10)]);
var inst_33145 = (state_33181[(9)]);
var inst_33142 = (state_33181[(8)]);
var inst_33149__$1 = f.call(null,inst_33145);
var inst_33150 = cljs.core._EQ_.call(null,inst_33149__$1,inst_33142);
var inst_33151 = cljs.core.keyword_identical_QMARK_.call(null,inst_33142,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33152 = (inst_33150) || (inst_33151);
var state_33181__$1 = (function (){var statearr_33195 = state_33181;
(statearr_33195[(10)] = inst_33149__$1);

return statearr_33195;
})();
if(cljs.core.truth_(inst_33152)){
var statearr_33196_33221 = state_33181__$1;
(statearr_33196_33221[(1)] = (8));

} else {
var statearr_33197_33222 = state_33181__$1;
(statearr_33197_33222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (14))){
var inst_33174 = (state_33181[(2)]);
var inst_33175 = cljs.core.async.close_BANG_.call(null,out);
var state_33181__$1 = (function (){var statearr_33199 = state_33181;
(statearr_33199[(13)] = inst_33174);

return statearr_33199;
})();
var statearr_33200_33223 = state_33181__$1;
(statearr_33200_33223[(2)] = inst_33175);

(statearr_33200_33223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (10))){
var inst_33164 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
var statearr_33201_33224 = state_33181__$1;
(statearr_33201_33224[(2)] = inst_33164);

(statearr_33201_33224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (8))){
var inst_33141 = (state_33181[(7)]);
var inst_33149 = (state_33181[(10)]);
var inst_33145 = (state_33181[(9)]);
var inst_33154 = inst_33141.push(inst_33145);
var tmp33198 = inst_33141;
var inst_33141__$1 = tmp33198;
var inst_33142 = inst_33149;
var state_33181__$1 = (function (){var statearr_33202 = state_33181;
(statearr_33202[(7)] = inst_33141__$1);

(statearr_33202[(14)] = inst_33154);

(statearr_33202[(8)] = inst_33142);

return statearr_33202;
})();
var statearr_33203_33225 = state_33181__$1;
(statearr_33203_33225[(2)] = null);

(statearr_33203_33225[(1)] = (2));


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
});})(c__19313__auto___33211,out))
;
return ((function (switch__19257__auto__,c__19313__auto___33211,out){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_33207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33207[(0)] = state_machine__19258__auto__);

(statearr_33207[(1)] = (1));

return statearr_33207;
});
var state_machine__19258__auto____1 = (function (state_33181){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_33181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e33208){if((e33208 instanceof Object)){
var ex__19261__auto__ = e33208;
var statearr_33209_33226 = state_33181;
(statearr_33209_33226[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33227 = state_33181;
state_33181 = G__33227;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_33181){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_33181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto___33211,out))
})();
var state__19315__auto__ = (function (){var statearr_33210 = f__19314__auto__.call(null);
(statearr_33210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto___33211);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto___33211,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map