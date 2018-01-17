// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27653 = [];
var len__25604__auto___27659 = arguments.length;
var i__25605__auto___27660 = (0);
while(true){
if((i__25605__auto___27660 < len__25604__auto___27659)){
args27653.push((arguments[i__25605__auto___27660]));

var G__27661 = (i__25605__auto___27660 + (1));
i__25605__auto___27660 = G__27661;
continue;
} else {
}
break;
}

var G__27655 = args27653.length;
switch (G__27655) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27653.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27656 = (function (f,blockable,meta27657){
this.f = f;
this.blockable = blockable;
this.meta27657 = meta27657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27658,meta27657__$1){
var self__ = this;
var _27658__$1 = this;
return (new cljs.core.async.t_cljs$core$async27656(self__.f,self__.blockable,meta27657__$1));
});

cljs.core.async.t_cljs$core$async27656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27658){
var self__ = this;
var _27658__$1 = this;
return self__.meta27657;
});

cljs.core.async.t_cljs$core$async27656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27657","meta27657",438565423,null)], null);
});

cljs.core.async.t_cljs$core$async27656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27656";

cljs.core.async.t_cljs$core$async27656.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27656");
});

cljs.core.async.__GT_t_cljs$core$async27656 = (function cljs$core$async$__GT_t_cljs$core$async27656(f__$1,blockable__$1,meta27657){
return (new cljs.core.async.t_cljs$core$async27656(f__$1,blockable__$1,meta27657));
});

}

return (new cljs.core.async.t_cljs$core$async27656(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27665 = [];
var len__25604__auto___27668 = arguments.length;
var i__25605__auto___27669 = (0);
while(true){
if((i__25605__auto___27669 < len__25604__auto___27668)){
args27665.push((arguments[i__25605__auto___27669]));

var G__27670 = (i__25605__auto___27669 + (1));
i__25605__auto___27669 = G__27670;
continue;
} else {
}
break;
}

var G__27667 = args27665.length;
switch (G__27667) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27665.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27672 = [];
var len__25604__auto___27675 = arguments.length;
var i__25605__auto___27676 = (0);
while(true){
if((i__25605__auto___27676 < len__25604__auto___27675)){
args27672.push((arguments[i__25605__auto___27676]));

var G__27677 = (i__25605__auto___27676 + (1));
i__25605__auto___27676 = G__27677;
continue;
} else {
}
break;
}

var G__27674 = args27672.length;
switch (G__27674) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27672.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27679 = [];
var len__25604__auto___27682 = arguments.length;
var i__25605__auto___27683 = (0);
while(true){
if((i__25605__auto___27683 < len__25604__auto___27682)){
args27679.push((arguments[i__25605__auto___27683]));

var G__27684 = (i__25605__auto___27683 + (1));
i__25605__auto___27683 = G__27684;
continue;
} else {
}
break;
}

var G__27681 = args27679.length;
switch (G__27681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27679.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27686);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27686,ret){
return (function (){
return fn1.call(null,val_27686);
});})(val_27686,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27687 = [];
var len__25604__auto___27690 = arguments.length;
var i__25605__auto___27691 = (0);
while(true){
if((i__25605__auto___27691 < len__25604__auto___27690)){
args27687.push((arguments[i__25605__auto___27691]));

var G__27692 = (i__25605__auto___27691 + (1));
i__25605__auto___27691 = G__27692;
continue;
} else {
}
break;
}

var G__27689 = args27687.length;
switch (G__27689) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27687.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25449__auto___27694 = n;
var x_27695 = (0);
while(true){
if((x_27695 < n__25449__auto___27694)){
(a[x_27695] = (0));

var G__27696 = (x_27695 + (1));
x_27695 = G__27696;
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

var G__27697 = (i + (1));
i = G__27697;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27701 = (function (alt_flag,flag,meta27702){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27702 = meta27702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27703,meta27702__$1){
var self__ = this;
var _27703__$1 = this;
return (new cljs.core.async.t_cljs$core$async27701(self__.alt_flag,self__.flag,meta27702__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27703){
var self__ = this;
var _27703__$1 = this;
return self__.meta27702;
});})(flag))
;

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27701.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27702","meta27702",1894376083,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27701";

cljs.core.async.t_cljs$core$async27701.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27701");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27701 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27701(alt_flag__$1,flag__$1,meta27702){
return (new cljs.core.async.t_cljs$core$async27701(alt_flag__$1,flag__$1,meta27702));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27701(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27707 = (function (alt_handler,flag,cb,meta27708){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27708 = meta27708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27709,meta27708__$1){
var self__ = this;
var _27709__$1 = this;
return (new cljs.core.async.t_cljs$core$async27707(self__.alt_handler,self__.flag,self__.cb,meta27708__$1));
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27709){
var self__ = this;
var _27709__$1 = this;
return self__.meta27708;
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27708","meta27708",1800936663,null)], null);
});

cljs.core.async.t_cljs$core$async27707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27707";

cljs.core.async.t_cljs$core$async27707.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27707");
});

cljs.core.async.__GT_t_cljs$core$async27707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27707(alt_handler__$1,flag__$1,cb__$1,meta27708){
return (new cljs.core.async.t_cljs$core$async27707(alt_handler__$1,flag__$1,cb__$1,meta27708));
});

}

return (new cljs.core.async.t_cljs$core$async27707(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__27710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27711_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24534__auto__ = wport;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27712 = (i + (1));
i = G__27712;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24534__auto__ = ret;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24522__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24522__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24522__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25611__auto__ = [];
var len__25604__auto___27718 = arguments.length;
var i__25605__auto___27719 = (0);
while(true){
if((i__25605__auto___27719 < len__25604__auto___27718)){
args__25611__auto__.push((arguments[i__25605__auto___27719]));

var G__27720 = (i__25605__auto___27719 + (1));
i__25605__auto___27719 = G__27720;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((1) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25612__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27715){
var map__27716 = p__27715;
var map__27716__$1 = ((((!((map__27716 == null)))?((((map__27716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27716):map__27716);
var opts = map__27716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27713){
var G__27714 = cljs.core.first.call(null,seq27713);
var seq27713__$1 = cljs.core.next.call(null,seq27713);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27714,seq27713__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27721 = [];
var len__25604__auto___27771 = arguments.length;
var i__25605__auto___27772 = (0);
while(true){
if((i__25605__auto___27772 < len__25604__auto___27771)){
args27721.push((arguments[i__25605__auto___27772]));

var G__27773 = (i__25605__auto___27772 + (1));
i__25605__auto___27772 = G__27773;
continue;
} else {
}
break;
}

var G__27723 = args27721.length;
switch (G__27723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27721.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27608__auto___27775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___27775){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___27775){
return (function (state_27747){
var state_val_27748 = (state_27747[(1)]);
if((state_val_27748 === (7))){
var inst_27743 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27749_27776 = state_27747__$1;
(statearr_27749_27776[(2)] = inst_27743);

(statearr_27749_27776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (1))){
var state_27747__$1 = state_27747;
var statearr_27750_27777 = state_27747__$1;
(statearr_27750_27777[(2)] = null);

(statearr_27750_27777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (4))){
var inst_27726 = (state_27747[(7)]);
var inst_27726__$1 = (state_27747[(2)]);
var inst_27727 = (inst_27726__$1 == null);
var state_27747__$1 = (function (){var statearr_27751 = state_27747;
(statearr_27751[(7)] = inst_27726__$1);

return statearr_27751;
})();
if(cljs.core.truth_(inst_27727)){
var statearr_27752_27778 = state_27747__$1;
(statearr_27752_27778[(1)] = (5));

} else {
var statearr_27753_27779 = state_27747__$1;
(statearr_27753_27779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (13))){
var state_27747__$1 = state_27747;
var statearr_27754_27780 = state_27747__$1;
(statearr_27754_27780[(2)] = null);

(statearr_27754_27780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (6))){
var inst_27726 = (state_27747[(7)]);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27747__$1,(11),to,inst_27726);
} else {
if((state_val_27748 === (3))){
var inst_27745 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27747__$1,inst_27745);
} else {
if((state_val_27748 === (12))){
var state_27747__$1 = state_27747;
var statearr_27755_27781 = state_27747__$1;
(statearr_27755_27781[(2)] = null);

(statearr_27755_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (2))){
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27747__$1,(4),from);
} else {
if((state_val_27748 === (11))){
var inst_27736 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27736)){
var statearr_27756_27782 = state_27747__$1;
(statearr_27756_27782[(1)] = (12));

} else {
var statearr_27757_27783 = state_27747__$1;
(statearr_27757_27783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (9))){
var state_27747__$1 = state_27747;
var statearr_27758_27784 = state_27747__$1;
(statearr_27758_27784[(2)] = null);

(statearr_27758_27784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (5))){
var state_27747__$1 = state_27747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27759_27785 = state_27747__$1;
(statearr_27759_27785[(1)] = (8));

} else {
var statearr_27760_27786 = state_27747__$1;
(statearr_27760_27786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (14))){
var inst_27741 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27761_27787 = state_27747__$1;
(statearr_27761_27787[(2)] = inst_27741);

(statearr_27761_27787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (10))){
var inst_27733 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27762_27788 = state_27747__$1;
(statearr_27762_27788[(2)] = inst_27733);

(statearr_27762_27788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (8))){
var inst_27730 = cljs.core.async.close_BANG_.call(null,to);
var state_27747__$1 = state_27747;
var statearr_27763_27789 = state_27747__$1;
(statearr_27763_27789[(2)] = inst_27730);

(statearr_27763_27789[(1)] = (10));


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
});})(c__27608__auto___27775))
;
return ((function (switch__27496__auto__,c__27608__auto___27775){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_27767 = [null,null,null,null,null,null,null,null];
(statearr_27767[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_27767[(1)] = (1));

return statearr_27767;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_27747){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_27747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e27768){if((e27768 instanceof Object)){
var ex__27500__auto__ = e27768;
var statearr_27769_27790 = state_27747;
(statearr_27769_27790[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27791 = state_27747;
state_27747 = G__27791;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_27747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_27747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___27775))
})();
var state__27610__auto__ = (function (){var statearr_27770 = f__27609__auto__.call(null);
(statearr_27770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___27775);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___27775))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27975){
var vec__27976 = p__27975;
var v = cljs.core.nth.call(null,vec__27976,(0),null);
var p = cljs.core.nth.call(null,vec__27976,(1),null);
var job = vec__27976;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27608__auto___28158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___28158,res,vec__27976,v,p,job,jobs,results){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___28158,res,vec__27976,v,p,job,jobs,results){
return (function (state_27981){
var state_val_27982 = (state_27981[(1)]);
if((state_val_27982 === (1))){
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27981__$1,(2),res,v);
} else {
if((state_val_27982 === (2))){
var inst_27978 = (state_27981[(2)]);
var inst_27979 = cljs.core.async.close_BANG_.call(null,res);
var state_27981__$1 = (function (){var statearr_27983 = state_27981;
(statearr_27983[(7)] = inst_27978);

return statearr_27983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27981__$1,inst_27979);
} else {
return null;
}
}
});})(c__27608__auto___28158,res,vec__27976,v,p,job,jobs,results))
;
return ((function (switch__27496__auto__,c__27608__auto___28158,res,vec__27976,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0 = (function (){
var statearr_27987 = [null,null,null,null,null,null,null,null];
(statearr_27987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__);

(statearr_27987[(1)] = (1));

return statearr_27987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1 = (function (state_27981){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_27981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e27988){if((e27988 instanceof Object)){
var ex__27500__auto__ = e27988;
var statearr_27989_28159 = state_27981;
(statearr_27989_28159[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28160 = state_27981;
state_27981 = G__28160;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = function(state_27981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1.call(this,state_27981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___28158,res,vec__27976,v,p,job,jobs,results))
})();
var state__27610__auto__ = (function (){var statearr_27990 = f__27609__auto__.call(null);
(statearr_27990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___28158);

return statearr_27990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___28158,res,vec__27976,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27991){
var vec__27992 = p__27991;
var v = cljs.core.nth.call(null,vec__27992,(0),null);
var p = cljs.core.nth.call(null,vec__27992,(1),null);
var job = vec__27992;
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
var n__25449__auto___28161 = n;
var __28162 = (0);
while(true){
if((__28162 < n__25449__auto___28161)){
var G__27993_28163 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27993_28163) {
case "compute":
var c__27608__auto___28165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28162,c__27608__auto___28165,G__27993_28163,n__25449__auto___28161,jobs,results,process,async){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (__28162,c__27608__auto___28165,G__27993_28163,n__25449__auto___28161,jobs,results,process,async){
return (function (state_28006){
var state_val_28007 = (state_28006[(1)]);
if((state_val_28007 === (1))){
var state_28006__$1 = state_28006;
var statearr_28008_28166 = state_28006__$1;
(statearr_28008_28166[(2)] = null);

(statearr_28008_28166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (2))){
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(4),jobs);
} else {
if((state_val_28007 === (3))){
var inst_28004 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28006__$1,inst_28004);
} else {
if((state_val_28007 === (4))){
var inst_27996 = (state_28006[(2)]);
var inst_27997 = process.call(null,inst_27996);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27997)){
var statearr_28009_28167 = state_28006__$1;
(statearr_28009_28167[(1)] = (5));

} else {
var statearr_28010_28168 = state_28006__$1;
(statearr_28010_28168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (5))){
var state_28006__$1 = state_28006;
var statearr_28011_28169 = state_28006__$1;
(statearr_28011_28169[(2)] = null);

(statearr_28011_28169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (6))){
var state_28006__$1 = state_28006;
var statearr_28012_28170 = state_28006__$1;
(statearr_28012_28170[(2)] = null);

(statearr_28012_28170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (7))){
var inst_28002 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28013_28171 = state_28006__$1;
(statearr_28013_28171[(2)] = inst_28002);

(statearr_28013_28171[(1)] = (3));


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
});})(__28162,c__27608__auto___28165,G__27993_28163,n__25449__auto___28161,jobs,results,process,async))
;
return ((function (__28162,switch__27496__auto__,c__27608__auto___28165,G__27993_28163,n__25449__auto___28161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0 = (function (){
var statearr_28017 = [null,null,null,null,null,null,null];
(statearr_28017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__);

(statearr_28017[(1)] = (1));

return statearr_28017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1 = (function (state_28006){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28018){if((e28018 instanceof Object)){
var ex__27500__auto__ = e28018;
var statearr_28019_28172 = state_28006;
(statearr_28019_28172[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28173 = state_28006;
state_28006 = G__28173;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = function(state_28006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1.call(this,state_28006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__;
})()
;})(__28162,switch__27496__auto__,c__27608__auto___28165,G__27993_28163,n__25449__auto___28161,jobs,results,process,async))
})();
var state__27610__auto__ = (function (){var statearr_28020 = f__27609__auto__.call(null);
(statearr_28020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___28165);

return statearr_28020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(__28162,c__27608__auto___28165,G__27993_28163,n__25449__auto___28161,jobs,results,process,async))
);


break;
case "async":
var c__27608__auto___28174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28162,c__27608__auto___28174,G__27993_28163,n__25449__auto___28161,jobs,results,process,async){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (__28162,c__27608__auto___28174,G__27993_28163,n__25449__auto___28161,jobs,results,process,async){
return (function (state_28033){
var state_val_28034 = (state_28033[(1)]);
if((state_val_28034 === (1))){
var state_28033__$1 = state_28033;
var statearr_28035_28175 = state_28033__$1;
(statearr_28035_28175[(2)] = null);

(statearr_28035_28175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (2))){
var state_28033__$1 = state_28033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28033__$1,(4),jobs);
} else {
if((state_val_28034 === (3))){
var inst_28031 = (state_28033[(2)]);
var state_28033__$1 = state_28033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28033__$1,inst_28031);
} else {
if((state_val_28034 === (4))){
var inst_28023 = (state_28033[(2)]);
var inst_28024 = async.call(null,inst_28023);
var state_28033__$1 = state_28033;
if(cljs.core.truth_(inst_28024)){
var statearr_28036_28176 = state_28033__$1;
(statearr_28036_28176[(1)] = (5));

} else {
var statearr_28037_28177 = state_28033__$1;
(statearr_28037_28177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (5))){
var state_28033__$1 = state_28033;
var statearr_28038_28178 = state_28033__$1;
(statearr_28038_28178[(2)] = null);

(statearr_28038_28178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (6))){
var state_28033__$1 = state_28033;
var statearr_28039_28179 = state_28033__$1;
(statearr_28039_28179[(2)] = null);

(statearr_28039_28179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28034 === (7))){
var inst_28029 = (state_28033[(2)]);
var state_28033__$1 = state_28033;
var statearr_28040_28180 = state_28033__$1;
(statearr_28040_28180[(2)] = inst_28029);

(statearr_28040_28180[(1)] = (3));


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
});})(__28162,c__27608__auto___28174,G__27993_28163,n__25449__auto___28161,jobs,results,process,async))
;
return ((function (__28162,switch__27496__auto__,c__27608__auto___28174,G__27993_28163,n__25449__auto___28161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0 = (function (){
var statearr_28044 = [null,null,null,null,null,null,null];
(statearr_28044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__);

(statearr_28044[(1)] = (1));

return statearr_28044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1 = (function (state_28033){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28045){if((e28045 instanceof Object)){
var ex__27500__auto__ = e28045;
var statearr_28046_28181 = state_28033;
(statearr_28046_28181[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28182 = state_28033;
state_28033 = G__28182;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = function(state_28033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1.call(this,state_28033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__;
})()
;})(__28162,switch__27496__auto__,c__27608__auto___28174,G__27993_28163,n__25449__auto___28161,jobs,results,process,async))
})();
var state__27610__auto__ = (function (){var statearr_28047 = f__27609__auto__.call(null);
(statearr_28047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___28174);

return statearr_28047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(__28162,c__27608__auto___28174,G__27993_28163,n__25449__auto___28161,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28183 = (__28162 + (1));
__28162 = G__28183;
continue;
} else {
}
break;
}

var c__27608__auto___28184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___28184,jobs,results,process,async){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___28184,jobs,results,process,async){
return (function (state_28069){
var state_val_28070 = (state_28069[(1)]);
if((state_val_28070 === (1))){
var state_28069__$1 = state_28069;
var statearr_28071_28185 = state_28069__$1;
(statearr_28071_28185[(2)] = null);

(statearr_28071_28185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (2))){
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28069__$1,(4),from);
} else {
if((state_val_28070 === (3))){
var inst_28067 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28069__$1,inst_28067);
} else {
if((state_val_28070 === (4))){
var inst_28050 = (state_28069[(7)]);
var inst_28050__$1 = (state_28069[(2)]);
var inst_28051 = (inst_28050__$1 == null);
var state_28069__$1 = (function (){var statearr_28072 = state_28069;
(statearr_28072[(7)] = inst_28050__$1);

return statearr_28072;
})();
if(cljs.core.truth_(inst_28051)){
var statearr_28073_28186 = state_28069__$1;
(statearr_28073_28186[(1)] = (5));

} else {
var statearr_28074_28187 = state_28069__$1;
(statearr_28074_28187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (5))){
var inst_28053 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28069__$1 = state_28069;
var statearr_28075_28188 = state_28069__$1;
(statearr_28075_28188[(2)] = inst_28053);

(statearr_28075_28188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (6))){
var inst_28055 = (state_28069[(8)]);
var inst_28050 = (state_28069[(7)]);
var inst_28055__$1 = cljs.core.async.chan.call(null,(1));
var inst_28056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28057 = [inst_28050,inst_28055__$1];
var inst_28058 = (new cljs.core.PersistentVector(null,2,(5),inst_28056,inst_28057,null));
var state_28069__$1 = (function (){var statearr_28076 = state_28069;
(statearr_28076[(8)] = inst_28055__$1);

return statearr_28076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28069__$1,(8),jobs,inst_28058);
} else {
if((state_val_28070 === (7))){
var inst_28065 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28077_28189 = state_28069__$1;
(statearr_28077_28189[(2)] = inst_28065);

(statearr_28077_28189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (8))){
var inst_28055 = (state_28069[(8)]);
var inst_28060 = (state_28069[(2)]);
var state_28069__$1 = (function (){var statearr_28078 = state_28069;
(statearr_28078[(9)] = inst_28060);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28069__$1,(9),results,inst_28055);
} else {
if((state_val_28070 === (9))){
var inst_28062 = (state_28069[(2)]);
var state_28069__$1 = (function (){var statearr_28079 = state_28069;
(statearr_28079[(10)] = inst_28062);

return statearr_28079;
})();
var statearr_28080_28190 = state_28069__$1;
(statearr_28080_28190[(2)] = null);

(statearr_28080_28190[(1)] = (2));


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
});})(c__27608__auto___28184,jobs,results,process,async))
;
return ((function (switch__27496__auto__,c__27608__auto___28184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0 = (function (){
var statearr_28084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__);

(statearr_28084[(1)] = (1));

return statearr_28084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1 = (function (state_28069){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28085){if((e28085 instanceof Object)){
var ex__27500__auto__ = e28085;
var statearr_28086_28191 = state_28069;
(statearr_28086_28191[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28192 = state_28069;
state_28069 = G__28192;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = function(state_28069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1.call(this,state_28069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___28184,jobs,results,process,async))
})();
var state__27610__auto__ = (function (){var statearr_28087 = f__27609__auto__.call(null);
(statearr_28087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___28184);

return statearr_28087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___28184,jobs,results,process,async))
);


var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__,jobs,results,process,async){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__,jobs,results,process,async){
return (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (7))){
var inst_28121 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28127_28193 = state_28125__$1;
(statearr_28127_28193[(2)] = inst_28121);

(statearr_28127_28193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (20))){
var state_28125__$1 = state_28125;
var statearr_28128_28194 = state_28125__$1;
(statearr_28128_28194[(2)] = null);

(statearr_28128_28194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (1))){
var state_28125__$1 = state_28125;
var statearr_28129_28195 = state_28125__$1;
(statearr_28129_28195[(2)] = null);

(statearr_28129_28195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (4))){
var inst_28090 = (state_28125[(7)]);
var inst_28090__$1 = (state_28125[(2)]);
var inst_28091 = (inst_28090__$1 == null);
var state_28125__$1 = (function (){var statearr_28130 = state_28125;
(statearr_28130[(7)] = inst_28090__$1);

return statearr_28130;
})();
if(cljs.core.truth_(inst_28091)){
var statearr_28131_28196 = state_28125__$1;
(statearr_28131_28196[(1)] = (5));

} else {
var statearr_28132_28197 = state_28125__$1;
(statearr_28132_28197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (15))){
var inst_28103 = (state_28125[(8)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28125__$1,(18),to,inst_28103);
} else {
if((state_val_28126 === (21))){
var inst_28116 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28133_28198 = state_28125__$1;
(statearr_28133_28198[(2)] = inst_28116);

(statearr_28133_28198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (13))){
var inst_28118 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28134 = state_28125;
(statearr_28134[(9)] = inst_28118);

return statearr_28134;
})();
var statearr_28135_28199 = state_28125__$1;
(statearr_28135_28199[(2)] = null);

(statearr_28135_28199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (6))){
var inst_28090 = (state_28125[(7)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(11),inst_28090);
} else {
if((state_val_28126 === (17))){
var inst_28111 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
if(cljs.core.truth_(inst_28111)){
var statearr_28136_28200 = state_28125__$1;
(statearr_28136_28200[(1)] = (19));

} else {
var statearr_28137_28201 = state_28125__$1;
(statearr_28137_28201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (3))){
var inst_28123 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28125__$1,inst_28123);
} else {
if((state_val_28126 === (12))){
var inst_28100 = (state_28125[(10)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(14),inst_28100);
} else {
if((state_val_28126 === (2))){
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(4),results);
} else {
if((state_val_28126 === (19))){
var state_28125__$1 = state_28125;
var statearr_28138_28202 = state_28125__$1;
(statearr_28138_28202[(2)] = null);

(statearr_28138_28202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (11))){
var inst_28100 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28139 = state_28125;
(statearr_28139[(10)] = inst_28100);

return statearr_28139;
})();
var statearr_28140_28203 = state_28125__$1;
(statearr_28140_28203[(2)] = null);

(statearr_28140_28203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (9))){
var state_28125__$1 = state_28125;
var statearr_28141_28204 = state_28125__$1;
(statearr_28141_28204[(2)] = null);

(statearr_28141_28204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (5))){
var state_28125__$1 = state_28125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28142_28205 = state_28125__$1;
(statearr_28142_28205[(1)] = (8));

} else {
var statearr_28143_28206 = state_28125__$1;
(statearr_28143_28206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (14))){
var inst_28103 = (state_28125[(8)]);
var inst_28105 = (state_28125[(11)]);
var inst_28103__$1 = (state_28125[(2)]);
var inst_28104 = (inst_28103__$1 == null);
var inst_28105__$1 = cljs.core.not.call(null,inst_28104);
var state_28125__$1 = (function (){var statearr_28144 = state_28125;
(statearr_28144[(8)] = inst_28103__$1);

(statearr_28144[(11)] = inst_28105__$1);

return statearr_28144;
})();
if(inst_28105__$1){
var statearr_28145_28207 = state_28125__$1;
(statearr_28145_28207[(1)] = (15));

} else {
var statearr_28146_28208 = state_28125__$1;
(statearr_28146_28208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (16))){
var inst_28105 = (state_28125[(11)]);
var state_28125__$1 = state_28125;
var statearr_28147_28209 = state_28125__$1;
(statearr_28147_28209[(2)] = inst_28105);

(statearr_28147_28209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (10))){
var inst_28097 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28148_28210 = state_28125__$1;
(statearr_28148_28210[(2)] = inst_28097);

(statearr_28148_28210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (18))){
var inst_28108 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28149_28211 = state_28125__$1;
(statearr_28149_28211[(2)] = inst_28108);

(statearr_28149_28211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (8))){
var inst_28094 = cljs.core.async.close_BANG_.call(null,to);
var state_28125__$1 = state_28125;
var statearr_28150_28212 = state_28125__$1;
(statearr_28150_28212[(2)] = inst_28094);

(statearr_28150_28212[(1)] = (10));


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
});})(c__27608__auto__,jobs,results,process,async))
;
return ((function (switch__27496__auto__,c__27608__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0 = (function (){
var statearr_28154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__);

(statearr_28154[(1)] = (1));

return statearr_28154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1 = (function (state_28125){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28155){if((e28155 instanceof Object)){
var ex__27500__auto__ = e28155;
var statearr_28156_28213 = state_28125;
(statearr_28156_28213[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28214 = state_28125;
state_28125 = G__28214;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__,jobs,results,process,async))
})();
var state__27610__auto__ = (function (){var statearr_28157 = f__27609__auto__.call(null);
(statearr_28157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_28157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__,jobs,results,process,async))
);

return c__27608__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28215 = [];
var len__25604__auto___28218 = arguments.length;
var i__25605__auto___28219 = (0);
while(true){
if((i__25605__auto___28219 < len__25604__auto___28218)){
args28215.push((arguments[i__25605__auto___28219]));

var G__28220 = (i__25605__auto___28219 + (1));
i__25605__auto___28219 = G__28220;
continue;
} else {
}
break;
}

var G__28217 = args28215.length;
switch (G__28217) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28215.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28222 = [];
var len__25604__auto___28225 = arguments.length;
var i__25605__auto___28226 = (0);
while(true){
if((i__25605__auto___28226 < len__25604__auto___28225)){
args28222.push((arguments[i__25605__auto___28226]));

var G__28227 = (i__25605__auto___28226 + (1));
i__25605__auto___28226 = G__28227;
continue;
} else {
}
break;
}

var G__28224 = args28222.length;
switch (G__28224) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28222.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28229 = [];
var len__25604__auto___28282 = arguments.length;
var i__25605__auto___28283 = (0);
while(true){
if((i__25605__auto___28283 < len__25604__auto___28282)){
args28229.push((arguments[i__25605__auto___28283]));

var G__28284 = (i__25605__auto___28283 + (1));
i__25605__auto___28283 = G__28284;
continue;
} else {
}
break;
}

var G__28231 = args28229.length;
switch (G__28231) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28229.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27608__auto___28286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___28286,tc,fc){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___28286,tc,fc){
return (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (7))){
var inst_28253 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28259_28287 = state_28257__$1;
(statearr_28259_28287[(2)] = inst_28253);

(statearr_28259_28287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (1))){
var state_28257__$1 = state_28257;
var statearr_28260_28288 = state_28257__$1;
(statearr_28260_28288[(2)] = null);

(statearr_28260_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (4))){
var inst_28234 = (state_28257[(7)]);
var inst_28234__$1 = (state_28257[(2)]);
var inst_28235 = (inst_28234__$1 == null);
var state_28257__$1 = (function (){var statearr_28261 = state_28257;
(statearr_28261[(7)] = inst_28234__$1);

return statearr_28261;
})();
if(cljs.core.truth_(inst_28235)){
var statearr_28262_28289 = state_28257__$1;
(statearr_28262_28289[(1)] = (5));

} else {
var statearr_28263_28290 = state_28257__$1;
(statearr_28263_28290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (13))){
var state_28257__$1 = state_28257;
var statearr_28264_28291 = state_28257__$1;
(statearr_28264_28291[(2)] = null);

(statearr_28264_28291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (6))){
var inst_28234 = (state_28257[(7)]);
var inst_28240 = p.call(null,inst_28234);
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28240)){
var statearr_28265_28292 = state_28257__$1;
(statearr_28265_28292[(1)] = (9));

} else {
var statearr_28266_28293 = state_28257__$1;
(statearr_28266_28293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (3))){
var inst_28255 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (12))){
var state_28257__$1 = state_28257;
var statearr_28267_28294 = state_28257__$1;
(statearr_28267_28294[(2)] = null);

(statearr_28267_28294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (2))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(4),ch);
} else {
if((state_val_28258 === (11))){
var inst_28234 = (state_28257[(7)]);
var inst_28244 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28257__$1,(8),inst_28244,inst_28234);
} else {
if((state_val_28258 === (9))){
var state_28257__$1 = state_28257;
var statearr_28268_28295 = state_28257__$1;
(statearr_28268_28295[(2)] = tc);

(statearr_28268_28295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (5))){
var inst_28237 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28238 = cljs.core.async.close_BANG_.call(null,fc);
var state_28257__$1 = (function (){var statearr_28269 = state_28257;
(statearr_28269[(8)] = inst_28237);

return statearr_28269;
})();
var statearr_28270_28296 = state_28257__$1;
(statearr_28270_28296[(2)] = inst_28238);

(statearr_28270_28296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (14))){
var inst_28251 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28271_28297 = state_28257__$1;
(statearr_28271_28297[(2)] = inst_28251);

(statearr_28271_28297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (10))){
var state_28257__$1 = state_28257;
var statearr_28272_28298 = state_28257__$1;
(statearr_28272_28298[(2)] = fc);

(statearr_28272_28298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28246 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28246)){
var statearr_28273_28299 = state_28257__$1;
(statearr_28273_28299[(1)] = (12));

} else {
var statearr_28274_28300 = state_28257__$1;
(statearr_28274_28300[(1)] = (13));

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
});})(c__27608__auto___28286,tc,fc))
;
return ((function (switch__27496__auto__,c__27608__auto___28286,tc,fc){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_28278 = [null,null,null,null,null,null,null,null,null];
(statearr_28278[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_28278[(1)] = (1));

return statearr_28278;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_28257){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object)){
var ex__27500__auto__ = e28279;
var statearr_28280_28301 = state_28257;
(statearr_28280_28301[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28302 = state_28257;
state_28257 = G__28302;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___28286,tc,fc))
})();
var state__27610__auto__ = (function (){var statearr_28281 = f__27609__auto__.call(null);
(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___28286);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___28286,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__){
return (function (state_28366){
var state_val_28367 = (state_28366[(1)]);
if((state_val_28367 === (7))){
var inst_28362 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
var statearr_28368_28389 = state_28366__$1;
(statearr_28368_28389[(2)] = inst_28362);

(statearr_28368_28389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28367 === (1))){
var inst_28346 = init;
var state_28366__$1 = (function (){var statearr_28369 = state_28366;
(statearr_28369[(7)] = inst_28346);

return statearr_28369;
})();
var statearr_28370_28390 = state_28366__$1;
(statearr_28370_28390[(2)] = null);

(statearr_28370_28390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28367 === (4))){
var inst_28349 = (state_28366[(8)]);
var inst_28349__$1 = (state_28366[(2)]);
var inst_28350 = (inst_28349__$1 == null);
var state_28366__$1 = (function (){var statearr_28371 = state_28366;
(statearr_28371[(8)] = inst_28349__$1);

return statearr_28371;
})();
if(cljs.core.truth_(inst_28350)){
var statearr_28372_28391 = state_28366__$1;
(statearr_28372_28391[(1)] = (5));

} else {
var statearr_28373_28392 = state_28366__$1;
(statearr_28373_28392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28367 === (6))){
var inst_28353 = (state_28366[(9)]);
var inst_28346 = (state_28366[(7)]);
var inst_28349 = (state_28366[(8)]);
var inst_28353__$1 = f.call(null,inst_28346,inst_28349);
var inst_28354 = cljs.core.reduced_QMARK_.call(null,inst_28353__$1);
var state_28366__$1 = (function (){var statearr_28374 = state_28366;
(statearr_28374[(9)] = inst_28353__$1);

return statearr_28374;
})();
if(inst_28354){
var statearr_28375_28393 = state_28366__$1;
(statearr_28375_28393[(1)] = (8));

} else {
var statearr_28376_28394 = state_28366__$1;
(statearr_28376_28394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28367 === (3))){
var inst_28364 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28366__$1,inst_28364);
} else {
if((state_val_28367 === (2))){
var state_28366__$1 = state_28366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28366__$1,(4),ch);
} else {
if((state_val_28367 === (9))){
var inst_28353 = (state_28366[(9)]);
var inst_28346 = inst_28353;
var state_28366__$1 = (function (){var statearr_28377 = state_28366;
(statearr_28377[(7)] = inst_28346);

return statearr_28377;
})();
var statearr_28378_28395 = state_28366__$1;
(statearr_28378_28395[(2)] = null);

(statearr_28378_28395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28367 === (5))){
var inst_28346 = (state_28366[(7)]);
var state_28366__$1 = state_28366;
var statearr_28379_28396 = state_28366__$1;
(statearr_28379_28396[(2)] = inst_28346);

(statearr_28379_28396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28367 === (10))){
var inst_28360 = (state_28366[(2)]);
var state_28366__$1 = state_28366;
var statearr_28380_28397 = state_28366__$1;
(statearr_28380_28397[(2)] = inst_28360);

(statearr_28380_28397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28367 === (8))){
var inst_28353 = (state_28366[(9)]);
var inst_28356 = cljs.core.deref.call(null,inst_28353);
var state_28366__$1 = state_28366;
var statearr_28381_28398 = state_28366__$1;
(statearr_28381_28398[(2)] = inst_28356);

(statearr_28381_28398[(1)] = (10));


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
});})(c__27608__auto__))
;
return ((function (switch__27496__auto__,c__27608__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27497__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27497__auto____0 = (function (){
var statearr_28385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28385[(0)] = cljs$core$async$reduce_$_state_machine__27497__auto__);

(statearr_28385[(1)] = (1));

return statearr_28385;
});
var cljs$core$async$reduce_$_state_machine__27497__auto____1 = (function (state_28366){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28386){if((e28386 instanceof Object)){
var ex__27500__auto__ = e28386;
var statearr_28387_28399 = state_28366;
(statearr_28387_28399[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28400 = state_28366;
state_28366 = G__28400;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27497__auto__ = function(state_28366){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27497__auto____1.call(this,state_28366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27497__auto____0;
cljs$core$async$reduce_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27497__auto____1;
return cljs$core$async$reduce_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__))
})();
var state__27610__auto__ = (function (){var statearr_28388 = f__27609__auto__.call(null);
(statearr_28388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_28388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__))
);

return c__27608__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28401 = [];
var len__25604__auto___28453 = arguments.length;
var i__25605__auto___28454 = (0);
while(true){
if((i__25605__auto___28454 < len__25604__auto___28453)){
args28401.push((arguments[i__25605__auto___28454]));

var G__28455 = (i__25605__auto___28454 + (1));
i__25605__auto___28454 = G__28455;
continue;
} else {
}
break;
}

var G__28403 = args28401.length;
switch (G__28403) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28401.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__){
return (function (state_28428){
var state_val_28429 = (state_28428[(1)]);
if((state_val_28429 === (7))){
var inst_28410 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28430_28457 = state_28428__$1;
(statearr_28430_28457[(2)] = inst_28410);

(statearr_28430_28457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (1))){
var inst_28404 = cljs.core.seq.call(null,coll);
var inst_28405 = inst_28404;
var state_28428__$1 = (function (){var statearr_28431 = state_28428;
(statearr_28431[(7)] = inst_28405);

return statearr_28431;
})();
var statearr_28432_28458 = state_28428__$1;
(statearr_28432_28458[(2)] = null);

(statearr_28432_28458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (4))){
var inst_28405 = (state_28428[(7)]);
var inst_28408 = cljs.core.first.call(null,inst_28405);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28428__$1,(7),ch,inst_28408);
} else {
if((state_val_28429 === (13))){
var inst_28422 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28433_28459 = state_28428__$1;
(statearr_28433_28459[(2)] = inst_28422);

(statearr_28433_28459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (6))){
var inst_28413 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28413)){
var statearr_28434_28460 = state_28428__$1;
(statearr_28434_28460[(1)] = (8));

} else {
var statearr_28435_28461 = state_28428__$1;
(statearr_28435_28461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (3))){
var inst_28426 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28428__$1,inst_28426);
} else {
if((state_val_28429 === (12))){
var state_28428__$1 = state_28428;
var statearr_28436_28462 = state_28428__$1;
(statearr_28436_28462[(2)] = null);

(statearr_28436_28462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (2))){
var inst_28405 = (state_28428[(7)]);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28405)){
var statearr_28437_28463 = state_28428__$1;
(statearr_28437_28463[(1)] = (4));

} else {
var statearr_28438_28464 = state_28428__$1;
(statearr_28438_28464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (11))){
var inst_28419 = cljs.core.async.close_BANG_.call(null,ch);
var state_28428__$1 = state_28428;
var statearr_28439_28465 = state_28428__$1;
(statearr_28439_28465[(2)] = inst_28419);

(statearr_28439_28465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (9))){
var state_28428__$1 = state_28428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28440_28466 = state_28428__$1;
(statearr_28440_28466[(1)] = (11));

} else {
var statearr_28441_28467 = state_28428__$1;
(statearr_28441_28467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (5))){
var inst_28405 = (state_28428[(7)]);
var state_28428__$1 = state_28428;
var statearr_28442_28468 = state_28428__$1;
(statearr_28442_28468[(2)] = inst_28405);

(statearr_28442_28468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (10))){
var inst_28424 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28443_28469 = state_28428__$1;
(statearr_28443_28469[(2)] = inst_28424);

(statearr_28443_28469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (8))){
var inst_28405 = (state_28428[(7)]);
var inst_28415 = cljs.core.next.call(null,inst_28405);
var inst_28405__$1 = inst_28415;
var state_28428__$1 = (function (){var statearr_28444 = state_28428;
(statearr_28444[(7)] = inst_28405__$1);

return statearr_28444;
})();
var statearr_28445_28470 = state_28428__$1;
(statearr_28445_28470[(2)] = null);

(statearr_28445_28470[(1)] = (2));


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
});})(c__27608__auto__))
;
return ((function (switch__27496__auto__,c__27608__auto__){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_28449 = [null,null,null,null,null,null,null,null];
(statearr_28449[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_28449[(1)] = (1));

return statearr_28449;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_28428){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28450){if((e28450 instanceof Object)){
var ex__27500__auto__ = e28450;
var statearr_28451_28471 = state_28428;
(statearr_28451_28471[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28472 = state_28428;
state_28428 = G__28472;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_28428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_28428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__))
})();
var state__27610__auto__ = (function (){var statearr_28452 = f__27609__auto__.call(null);
(statearr_28452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_28452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__))
);

return c__27608__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25197__auto__ = (((_ == null))?null:_);
var m__25198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,_);
} else {
var m__25198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m);
} else {
var m__25198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28694 = (function (mult,ch,cs,meta28695){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28695 = meta28695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28696,meta28695__$1){
var self__ = this;
var _28696__$1 = this;
return (new cljs.core.async.t_cljs$core$async28694(self__.mult,self__.ch,self__.cs,meta28695__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28696){
var self__ = this;
var _28696__$1 = this;
return self__.meta28695;
});})(cs))
;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28694.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28694.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28695","meta28695",796992758,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28694";

cljs.core.async.t_cljs$core$async28694.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async28694");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28694 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28694(mult__$1,ch__$1,cs__$1,meta28695){
return (new cljs.core.async.t_cljs$core$async28694(mult__$1,ch__$1,cs__$1,meta28695));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28694(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27608__auto___28915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___28915,cs,m,dchan,dctr,done){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___28915,cs,m,dchan,dctr,done){
return (function (state_28827){
var state_val_28828 = (state_28827[(1)]);
if((state_val_28828 === (7))){
var inst_28823 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28829_28916 = state_28827__$1;
(statearr_28829_28916[(2)] = inst_28823);

(statearr_28829_28916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (20))){
var inst_28728 = (state_28827[(7)]);
var inst_28738 = cljs.core.first.call(null,inst_28728);
var inst_28739 = cljs.core.nth.call(null,inst_28738,(0),null);
var inst_28740 = cljs.core.nth.call(null,inst_28738,(1),null);
var state_28827__$1 = (function (){var statearr_28830 = state_28827;
(statearr_28830[(8)] = inst_28739);

return statearr_28830;
})();
if(cljs.core.truth_(inst_28740)){
var statearr_28831_28917 = state_28827__$1;
(statearr_28831_28917[(1)] = (22));

} else {
var statearr_28832_28918 = state_28827__$1;
(statearr_28832_28918[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (27))){
var inst_28770 = (state_28827[(9)]);
var inst_28775 = (state_28827[(10)]);
var inst_28699 = (state_28827[(11)]);
var inst_28768 = (state_28827[(12)]);
var inst_28775__$1 = cljs.core._nth.call(null,inst_28768,inst_28770);
var inst_28776 = cljs.core.async.put_BANG_.call(null,inst_28775__$1,inst_28699,done);
var state_28827__$1 = (function (){var statearr_28833 = state_28827;
(statearr_28833[(10)] = inst_28775__$1);

return statearr_28833;
})();
if(cljs.core.truth_(inst_28776)){
var statearr_28834_28919 = state_28827__$1;
(statearr_28834_28919[(1)] = (30));

} else {
var statearr_28835_28920 = state_28827__$1;
(statearr_28835_28920[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (1))){
var state_28827__$1 = state_28827;
var statearr_28836_28921 = state_28827__$1;
(statearr_28836_28921[(2)] = null);

(statearr_28836_28921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (24))){
var inst_28728 = (state_28827[(7)]);
var inst_28745 = (state_28827[(2)]);
var inst_28746 = cljs.core.next.call(null,inst_28728);
var inst_28708 = inst_28746;
var inst_28709 = null;
var inst_28710 = (0);
var inst_28711 = (0);
var state_28827__$1 = (function (){var statearr_28837 = state_28827;
(statearr_28837[(13)] = inst_28709);

(statearr_28837[(14)] = inst_28711);

(statearr_28837[(15)] = inst_28708);

(statearr_28837[(16)] = inst_28710);

(statearr_28837[(17)] = inst_28745);

return statearr_28837;
})();
var statearr_28838_28922 = state_28827__$1;
(statearr_28838_28922[(2)] = null);

(statearr_28838_28922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (39))){
var state_28827__$1 = state_28827;
var statearr_28842_28923 = state_28827__$1;
(statearr_28842_28923[(2)] = null);

(statearr_28842_28923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (4))){
var inst_28699 = (state_28827[(11)]);
var inst_28699__$1 = (state_28827[(2)]);
var inst_28700 = (inst_28699__$1 == null);
var state_28827__$1 = (function (){var statearr_28843 = state_28827;
(statearr_28843[(11)] = inst_28699__$1);

return statearr_28843;
})();
if(cljs.core.truth_(inst_28700)){
var statearr_28844_28924 = state_28827__$1;
(statearr_28844_28924[(1)] = (5));

} else {
var statearr_28845_28925 = state_28827__$1;
(statearr_28845_28925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (15))){
var inst_28709 = (state_28827[(13)]);
var inst_28711 = (state_28827[(14)]);
var inst_28708 = (state_28827[(15)]);
var inst_28710 = (state_28827[(16)]);
var inst_28724 = (state_28827[(2)]);
var inst_28725 = (inst_28711 + (1));
var tmp28839 = inst_28709;
var tmp28840 = inst_28708;
var tmp28841 = inst_28710;
var inst_28708__$1 = tmp28840;
var inst_28709__$1 = tmp28839;
var inst_28710__$1 = tmp28841;
var inst_28711__$1 = inst_28725;
var state_28827__$1 = (function (){var statearr_28846 = state_28827;
(statearr_28846[(13)] = inst_28709__$1);

(statearr_28846[(18)] = inst_28724);

(statearr_28846[(14)] = inst_28711__$1);

(statearr_28846[(15)] = inst_28708__$1);

(statearr_28846[(16)] = inst_28710__$1);

return statearr_28846;
})();
var statearr_28847_28926 = state_28827__$1;
(statearr_28847_28926[(2)] = null);

(statearr_28847_28926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (21))){
var inst_28749 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28851_28927 = state_28827__$1;
(statearr_28851_28927[(2)] = inst_28749);

(statearr_28851_28927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (31))){
var inst_28775 = (state_28827[(10)]);
var inst_28779 = done.call(null,null);
var inst_28780 = cljs.core.async.untap_STAR_.call(null,m,inst_28775);
var state_28827__$1 = (function (){var statearr_28852 = state_28827;
(statearr_28852[(19)] = inst_28779);

return statearr_28852;
})();
var statearr_28853_28928 = state_28827__$1;
(statearr_28853_28928[(2)] = inst_28780);

(statearr_28853_28928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (32))){
var inst_28770 = (state_28827[(9)]);
var inst_28769 = (state_28827[(20)]);
var inst_28768 = (state_28827[(12)]);
var inst_28767 = (state_28827[(21)]);
var inst_28782 = (state_28827[(2)]);
var inst_28783 = (inst_28770 + (1));
var tmp28848 = inst_28769;
var tmp28849 = inst_28768;
var tmp28850 = inst_28767;
var inst_28767__$1 = tmp28850;
var inst_28768__$1 = tmp28849;
var inst_28769__$1 = tmp28848;
var inst_28770__$1 = inst_28783;
var state_28827__$1 = (function (){var statearr_28854 = state_28827;
(statearr_28854[(9)] = inst_28770__$1);

(statearr_28854[(20)] = inst_28769__$1);

(statearr_28854[(22)] = inst_28782);

(statearr_28854[(12)] = inst_28768__$1);

(statearr_28854[(21)] = inst_28767__$1);

return statearr_28854;
})();
var statearr_28855_28929 = state_28827__$1;
(statearr_28855_28929[(2)] = null);

(statearr_28855_28929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (40))){
var inst_28795 = (state_28827[(23)]);
var inst_28799 = done.call(null,null);
var inst_28800 = cljs.core.async.untap_STAR_.call(null,m,inst_28795);
var state_28827__$1 = (function (){var statearr_28856 = state_28827;
(statearr_28856[(24)] = inst_28799);

return statearr_28856;
})();
var statearr_28857_28930 = state_28827__$1;
(statearr_28857_28930[(2)] = inst_28800);

(statearr_28857_28930[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (33))){
var inst_28786 = (state_28827[(25)]);
var inst_28788 = cljs.core.chunked_seq_QMARK_.call(null,inst_28786);
var state_28827__$1 = state_28827;
if(inst_28788){
var statearr_28858_28931 = state_28827__$1;
(statearr_28858_28931[(1)] = (36));

} else {
var statearr_28859_28932 = state_28827__$1;
(statearr_28859_28932[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (13))){
var inst_28718 = (state_28827[(26)]);
var inst_28721 = cljs.core.async.close_BANG_.call(null,inst_28718);
var state_28827__$1 = state_28827;
var statearr_28860_28933 = state_28827__$1;
(statearr_28860_28933[(2)] = inst_28721);

(statearr_28860_28933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (22))){
var inst_28739 = (state_28827[(8)]);
var inst_28742 = cljs.core.async.close_BANG_.call(null,inst_28739);
var state_28827__$1 = state_28827;
var statearr_28861_28934 = state_28827__$1;
(statearr_28861_28934[(2)] = inst_28742);

(statearr_28861_28934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (36))){
var inst_28786 = (state_28827[(25)]);
var inst_28790 = cljs.core.chunk_first.call(null,inst_28786);
var inst_28791 = cljs.core.chunk_rest.call(null,inst_28786);
var inst_28792 = cljs.core.count.call(null,inst_28790);
var inst_28767 = inst_28791;
var inst_28768 = inst_28790;
var inst_28769 = inst_28792;
var inst_28770 = (0);
var state_28827__$1 = (function (){var statearr_28862 = state_28827;
(statearr_28862[(9)] = inst_28770);

(statearr_28862[(20)] = inst_28769);

(statearr_28862[(12)] = inst_28768);

(statearr_28862[(21)] = inst_28767);

return statearr_28862;
})();
var statearr_28863_28935 = state_28827__$1;
(statearr_28863_28935[(2)] = null);

(statearr_28863_28935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (41))){
var inst_28786 = (state_28827[(25)]);
var inst_28802 = (state_28827[(2)]);
var inst_28803 = cljs.core.next.call(null,inst_28786);
var inst_28767 = inst_28803;
var inst_28768 = null;
var inst_28769 = (0);
var inst_28770 = (0);
var state_28827__$1 = (function (){var statearr_28864 = state_28827;
(statearr_28864[(9)] = inst_28770);

(statearr_28864[(20)] = inst_28769);

(statearr_28864[(12)] = inst_28768);

(statearr_28864[(27)] = inst_28802);

(statearr_28864[(21)] = inst_28767);

return statearr_28864;
})();
var statearr_28865_28936 = state_28827__$1;
(statearr_28865_28936[(2)] = null);

(statearr_28865_28936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (43))){
var state_28827__$1 = state_28827;
var statearr_28866_28937 = state_28827__$1;
(statearr_28866_28937[(2)] = null);

(statearr_28866_28937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (29))){
var inst_28811 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28867_28938 = state_28827__$1;
(statearr_28867_28938[(2)] = inst_28811);

(statearr_28867_28938[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (44))){
var inst_28820 = (state_28827[(2)]);
var state_28827__$1 = (function (){var statearr_28868 = state_28827;
(statearr_28868[(28)] = inst_28820);

return statearr_28868;
})();
var statearr_28869_28939 = state_28827__$1;
(statearr_28869_28939[(2)] = null);

(statearr_28869_28939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (6))){
var inst_28759 = (state_28827[(29)]);
var inst_28758 = cljs.core.deref.call(null,cs);
var inst_28759__$1 = cljs.core.keys.call(null,inst_28758);
var inst_28760 = cljs.core.count.call(null,inst_28759__$1);
var inst_28761 = cljs.core.reset_BANG_.call(null,dctr,inst_28760);
var inst_28766 = cljs.core.seq.call(null,inst_28759__$1);
var inst_28767 = inst_28766;
var inst_28768 = null;
var inst_28769 = (0);
var inst_28770 = (0);
var state_28827__$1 = (function (){var statearr_28870 = state_28827;
(statearr_28870[(9)] = inst_28770);

(statearr_28870[(29)] = inst_28759__$1);

(statearr_28870[(20)] = inst_28769);

(statearr_28870[(12)] = inst_28768);

(statearr_28870[(30)] = inst_28761);

(statearr_28870[(21)] = inst_28767);

return statearr_28870;
})();
var statearr_28871_28940 = state_28827__$1;
(statearr_28871_28940[(2)] = null);

(statearr_28871_28940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (28))){
var inst_28786 = (state_28827[(25)]);
var inst_28767 = (state_28827[(21)]);
var inst_28786__$1 = cljs.core.seq.call(null,inst_28767);
var state_28827__$1 = (function (){var statearr_28872 = state_28827;
(statearr_28872[(25)] = inst_28786__$1);

return statearr_28872;
})();
if(inst_28786__$1){
var statearr_28873_28941 = state_28827__$1;
(statearr_28873_28941[(1)] = (33));

} else {
var statearr_28874_28942 = state_28827__$1;
(statearr_28874_28942[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (25))){
var inst_28770 = (state_28827[(9)]);
var inst_28769 = (state_28827[(20)]);
var inst_28772 = (inst_28770 < inst_28769);
var inst_28773 = inst_28772;
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28773)){
var statearr_28875_28943 = state_28827__$1;
(statearr_28875_28943[(1)] = (27));

} else {
var statearr_28876_28944 = state_28827__$1;
(statearr_28876_28944[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (34))){
var state_28827__$1 = state_28827;
var statearr_28877_28945 = state_28827__$1;
(statearr_28877_28945[(2)] = null);

(statearr_28877_28945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (17))){
var state_28827__$1 = state_28827;
var statearr_28878_28946 = state_28827__$1;
(statearr_28878_28946[(2)] = null);

(statearr_28878_28946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (3))){
var inst_28825 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28827__$1,inst_28825);
} else {
if((state_val_28828 === (12))){
var inst_28754 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28879_28947 = state_28827__$1;
(statearr_28879_28947[(2)] = inst_28754);

(statearr_28879_28947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (2))){
var state_28827__$1 = state_28827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28827__$1,(4),ch);
} else {
if((state_val_28828 === (23))){
var state_28827__$1 = state_28827;
var statearr_28880_28948 = state_28827__$1;
(statearr_28880_28948[(2)] = null);

(statearr_28880_28948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (35))){
var inst_28809 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28881_28949 = state_28827__$1;
(statearr_28881_28949[(2)] = inst_28809);

(statearr_28881_28949[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (19))){
var inst_28728 = (state_28827[(7)]);
var inst_28732 = cljs.core.chunk_first.call(null,inst_28728);
var inst_28733 = cljs.core.chunk_rest.call(null,inst_28728);
var inst_28734 = cljs.core.count.call(null,inst_28732);
var inst_28708 = inst_28733;
var inst_28709 = inst_28732;
var inst_28710 = inst_28734;
var inst_28711 = (0);
var state_28827__$1 = (function (){var statearr_28882 = state_28827;
(statearr_28882[(13)] = inst_28709);

(statearr_28882[(14)] = inst_28711);

(statearr_28882[(15)] = inst_28708);

(statearr_28882[(16)] = inst_28710);

return statearr_28882;
})();
var statearr_28883_28950 = state_28827__$1;
(statearr_28883_28950[(2)] = null);

(statearr_28883_28950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (11))){
var inst_28728 = (state_28827[(7)]);
var inst_28708 = (state_28827[(15)]);
var inst_28728__$1 = cljs.core.seq.call(null,inst_28708);
var state_28827__$1 = (function (){var statearr_28884 = state_28827;
(statearr_28884[(7)] = inst_28728__$1);

return statearr_28884;
})();
if(inst_28728__$1){
var statearr_28885_28951 = state_28827__$1;
(statearr_28885_28951[(1)] = (16));

} else {
var statearr_28886_28952 = state_28827__$1;
(statearr_28886_28952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (9))){
var inst_28756 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28887_28953 = state_28827__$1;
(statearr_28887_28953[(2)] = inst_28756);

(statearr_28887_28953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (5))){
var inst_28706 = cljs.core.deref.call(null,cs);
var inst_28707 = cljs.core.seq.call(null,inst_28706);
var inst_28708 = inst_28707;
var inst_28709 = null;
var inst_28710 = (0);
var inst_28711 = (0);
var state_28827__$1 = (function (){var statearr_28888 = state_28827;
(statearr_28888[(13)] = inst_28709);

(statearr_28888[(14)] = inst_28711);

(statearr_28888[(15)] = inst_28708);

(statearr_28888[(16)] = inst_28710);

return statearr_28888;
})();
var statearr_28889_28954 = state_28827__$1;
(statearr_28889_28954[(2)] = null);

(statearr_28889_28954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (14))){
var state_28827__$1 = state_28827;
var statearr_28890_28955 = state_28827__$1;
(statearr_28890_28955[(2)] = null);

(statearr_28890_28955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (45))){
var inst_28817 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28891_28956 = state_28827__$1;
(statearr_28891_28956[(2)] = inst_28817);

(statearr_28891_28956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (26))){
var inst_28759 = (state_28827[(29)]);
var inst_28813 = (state_28827[(2)]);
var inst_28814 = cljs.core.seq.call(null,inst_28759);
var state_28827__$1 = (function (){var statearr_28892 = state_28827;
(statearr_28892[(31)] = inst_28813);

return statearr_28892;
})();
if(inst_28814){
var statearr_28893_28957 = state_28827__$1;
(statearr_28893_28957[(1)] = (42));

} else {
var statearr_28894_28958 = state_28827__$1;
(statearr_28894_28958[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (16))){
var inst_28728 = (state_28827[(7)]);
var inst_28730 = cljs.core.chunked_seq_QMARK_.call(null,inst_28728);
var state_28827__$1 = state_28827;
if(inst_28730){
var statearr_28895_28959 = state_28827__$1;
(statearr_28895_28959[(1)] = (19));

} else {
var statearr_28896_28960 = state_28827__$1;
(statearr_28896_28960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (38))){
var inst_28806 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28897_28961 = state_28827__$1;
(statearr_28897_28961[(2)] = inst_28806);

(statearr_28897_28961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (30))){
var state_28827__$1 = state_28827;
var statearr_28898_28962 = state_28827__$1;
(statearr_28898_28962[(2)] = null);

(statearr_28898_28962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (10))){
var inst_28709 = (state_28827[(13)]);
var inst_28711 = (state_28827[(14)]);
var inst_28717 = cljs.core._nth.call(null,inst_28709,inst_28711);
var inst_28718 = cljs.core.nth.call(null,inst_28717,(0),null);
var inst_28719 = cljs.core.nth.call(null,inst_28717,(1),null);
var state_28827__$1 = (function (){var statearr_28899 = state_28827;
(statearr_28899[(26)] = inst_28718);

return statearr_28899;
})();
if(cljs.core.truth_(inst_28719)){
var statearr_28900_28963 = state_28827__$1;
(statearr_28900_28963[(1)] = (13));

} else {
var statearr_28901_28964 = state_28827__$1;
(statearr_28901_28964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (18))){
var inst_28752 = (state_28827[(2)]);
var state_28827__$1 = state_28827;
var statearr_28902_28965 = state_28827__$1;
(statearr_28902_28965[(2)] = inst_28752);

(statearr_28902_28965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (42))){
var state_28827__$1 = state_28827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28827__$1,(45),dchan);
} else {
if((state_val_28828 === (37))){
var inst_28699 = (state_28827[(11)]);
var inst_28786 = (state_28827[(25)]);
var inst_28795 = (state_28827[(23)]);
var inst_28795__$1 = cljs.core.first.call(null,inst_28786);
var inst_28796 = cljs.core.async.put_BANG_.call(null,inst_28795__$1,inst_28699,done);
var state_28827__$1 = (function (){var statearr_28903 = state_28827;
(statearr_28903[(23)] = inst_28795__$1);

return statearr_28903;
})();
if(cljs.core.truth_(inst_28796)){
var statearr_28904_28966 = state_28827__$1;
(statearr_28904_28966[(1)] = (39));

} else {
var statearr_28905_28967 = state_28827__$1;
(statearr_28905_28967[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28828 === (8))){
var inst_28711 = (state_28827[(14)]);
var inst_28710 = (state_28827[(16)]);
var inst_28713 = (inst_28711 < inst_28710);
var inst_28714 = inst_28713;
var state_28827__$1 = state_28827;
if(cljs.core.truth_(inst_28714)){
var statearr_28906_28968 = state_28827__$1;
(statearr_28906_28968[(1)] = (10));

} else {
var statearr_28907_28969 = state_28827__$1;
(statearr_28907_28969[(1)] = (11));

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
});})(c__27608__auto___28915,cs,m,dchan,dctr,done))
;
return ((function (switch__27496__auto__,c__27608__auto___28915,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27497__auto__ = null;
var cljs$core$async$mult_$_state_machine__27497__auto____0 = (function (){
var statearr_28911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28911[(0)] = cljs$core$async$mult_$_state_machine__27497__auto__);

(statearr_28911[(1)] = (1));

return statearr_28911;
});
var cljs$core$async$mult_$_state_machine__27497__auto____1 = (function (state_28827){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_28827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e28912){if((e28912 instanceof Object)){
var ex__27500__auto__ = e28912;
var statearr_28913_28970 = state_28827;
(statearr_28913_28970[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28971 = state_28827;
state_28827 = G__28971;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27497__auto__ = function(state_28827){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27497__auto____1.call(this,state_28827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27497__auto____0;
cljs$core$async$mult_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27497__auto____1;
return cljs$core$async$mult_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___28915,cs,m,dchan,dctr,done))
})();
var state__27610__auto__ = (function (){var statearr_28914 = f__27609__auto__.call(null);
(statearr_28914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___28915);

return statearr_28914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___28915,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28972 = [];
var len__25604__auto___28975 = arguments.length;
var i__25605__auto___28976 = (0);
while(true){
if((i__25605__auto___28976 < len__25604__auto___28975)){
args28972.push((arguments[i__25605__auto___28976]));

var G__28977 = (i__25605__auto___28976 + (1));
i__25605__auto___28976 = G__28977;
continue;
} else {
}
break;
}

var G__28974 = args28972.length;
switch (G__28974) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28972.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m);
} else {
var m__25198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,state_map);
} else {
var m__25198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,mode);
} else {
var m__25198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25611__auto__ = [];
var len__25604__auto___28989 = arguments.length;
var i__25605__auto___28990 = (0);
while(true){
if((i__25605__auto___28990 < len__25604__auto___28989)){
args__25611__auto__.push((arguments[i__25605__auto___28990]));

var G__28991 = (i__25605__auto___28990 + (1));
i__25605__auto___28990 = G__28991;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((3) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25612__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28983){
var map__28984 = p__28983;
var map__28984__$1 = ((((!((map__28984 == null)))?((((map__28984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984):map__28984);
var opts = map__28984__$1;
var statearr_28986_28992 = state;
(statearr_28986_28992[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28984,map__28984__$1,opts){
return (function (val){
var statearr_28987_28993 = state;
(statearr_28987_28993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28984,map__28984__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28988_28994 = state;
(statearr_28988_28994[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28979){
var G__28980 = cljs.core.first.call(null,seq28979);
var seq28979__$1 = cljs.core.next.call(null,seq28979);
var G__28981 = cljs.core.first.call(null,seq28979__$1);
var seq28979__$2 = cljs.core.next.call(null,seq28979__$1);
var G__28982 = cljs.core.first.call(null,seq28979__$2);
var seq28979__$3 = cljs.core.next.call(null,seq28979__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28980,G__28981,G__28982,seq28979__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t_cljs$core$async29158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29158 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29159){
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
this.meta29159 = meta29159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29160,meta29159__$1){
var self__ = this;
var _29160__$1 = this;
return (new cljs.core.async.t_cljs$core$async29158(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29159__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29160){
var self__ = this;
var _29160__$1 = this;
return self__.meta29159;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29159","meta29159",470421898,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29158";

cljs.core.async.t_cljs$core$async29158.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29158");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29158 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29159){
return (new cljs.core.async.t_cljs$core$async29158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29159));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29158(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27608__auto___29321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___29321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___29321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29258){
var state_val_29259 = (state_29258[(1)]);
if((state_val_29259 === (7))){
var inst_29176 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29260_29322 = state_29258__$1;
(statearr_29260_29322[(2)] = inst_29176);

(statearr_29260_29322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (20))){
var inst_29188 = (state_29258[(7)]);
var state_29258__$1 = state_29258;
var statearr_29261_29323 = state_29258__$1;
(statearr_29261_29323[(2)] = inst_29188);

(statearr_29261_29323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (27))){
var state_29258__$1 = state_29258;
var statearr_29262_29324 = state_29258__$1;
(statearr_29262_29324[(2)] = null);

(statearr_29262_29324[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (1))){
var inst_29164 = (state_29258[(8)]);
var inst_29164__$1 = calc_state.call(null);
var inst_29166 = (inst_29164__$1 == null);
var inst_29167 = cljs.core.not.call(null,inst_29166);
var state_29258__$1 = (function (){var statearr_29263 = state_29258;
(statearr_29263[(8)] = inst_29164__$1);

return statearr_29263;
})();
if(inst_29167){
var statearr_29264_29325 = state_29258__$1;
(statearr_29264_29325[(1)] = (2));

} else {
var statearr_29265_29326 = state_29258__$1;
(statearr_29265_29326[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (24))){
var inst_29218 = (state_29258[(9)]);
var inst_29211 = (state_29258[(10)]);
var inst_29232 = (state_29258[(11)]);
var inst_29232__$1 = inst_29211.call(null,inst_29218);
var state_29258__$1 = (function (){var statearr_29266 = state_29258;
(statearr_29266[(11)] = inst_29232__$1);

return statearr_29266;
})();
if(cljs.core.truth_(inst_29232__$1)){
var statearr_29267_29327 = state_29258__$1;
(statearr_29267_29327[(1)] = (29));

} else {
var statearr_29268_29328 = state_29258__$1;
(statearr_29268_29328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (4))){
var inst_29179 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29179)){
var statearr_29269_29329 = state_29258__$1;
(statearr_29269_29329[(1)] = (8));

} else {
var statearr_29270_29330 = state_29258__$1;
(statearr_29270_29330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (15))){
var inst_29205 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29205)){
var statearr_29271_29331 = state_29258__$1;
(statearr_29271_29331[(1)] = (19));

} else {
var statearr_29272_29332 = state_29258__$1;
(statearr_29272_29332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (21))){
var inst_29210 = (state_29258[(12)]);
var inst_29210__$1 = (state_29258[(2)]);
var inst_29211 = cljs.core.get.call(null,inst_29210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29212 = cljs.core.get.call(null,inst_29210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29213 = cljs.core.get.call(null,inst_29210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29258__$1 = (function (){var statearr_29273 = state_29258;
(statearr_29273[(13)] = inst_29212);

(statearr_29273[(10)] = inst_29211);

(statearr_29273[(12)] = inst_29210__$1);

return statearr_29273;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29258__$1,(22),inst_29213);
} else {
if((state_val_29259 === (31))){
var inst_29240 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29240)){
var statearr_29274_29333 = state_29258__$1;
(statearr_29274_29333[(1)] = (32));

} else {
var statearr_29275_29334 = state_29258__$1;
(statearr_29275_29334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (32))){
var inst_29217 = (state_29258[(14)]);
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29258__$1,(35),out,inst_29217);
} else {
if((state_val_29259 === (33))){
var inst_29210 = (state_29258[(12)]);
var inst_29188 = inst_29210;
var state_29258__$1 = (function (){var statearr_29276 = state_29258;
(statearr_29276[(7)] = inst_29188);

return statearr_29276;
})();
var statearr_29277_29335 = state_29258__$1;
(statearr_29277_29335[(2)] = null);

(statearr_29277_29335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (13))){
var inst_29188 = (state_29258[(7)]);
var inst_29195 = inst_29188.cljs$lang$protocol_mask$partition0$;
var inst_29196 = (inst_29195 & (64));
var inst_29197 = inst_29188.cljs$core$ISeq$;
var inst_29198 = (inst_29196) || (inst_29197);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29198)){
var statearr_29278_29336 = state_29258__$1;
(statearr_29278_29336[(1)] = (16));

} else {
var statearr_29279_29337 = state_29258__$1;
(statearr_29279_29337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (22))){
var inst_29218 = (state_29258[(9)]);
var inst_29217 = (state_29258[(14)]);
var inst_29216 = (state_29258[(2)]);
var inst_29217__$1 = cljs.core.nth.call(null,inst_29216,(0),null);
var inst_29218__$1 = cljs.core.nth.call(null,inst_29216,(1),null);
var inst_29219 = (inst_29217__$1 == null);
var inst_29220 = cljs.core._EQ_.call(null,inst_29218__$1,change);
var inst_29221 = (inst_29219) || (inst_29220);
var state_29258__$1 = (function (){var statearr_29280 = state_29258;
(statearr_29280[(9)] = inst_29218__$1);

(statearr_29280[(14)] = inst_29217__$1);

return statearr_29280;
})();
if(cljs.core.truth_(inst_29221)){
var statearr_29281_29338 = state_29258__$1;
(statearr_29281_29338[(1)] = (23));

} else {
var statearr_29282_29339 = state_29258__$1;
(statearr_29282_29339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (36))){
var inst_29210 = (state_29258[(12)]);
var inst_29188 = inst_29210;
var state_29258__$1 = (function (){var statearr_29283 = state_29258;
(statearr_29283[(7)] = inst_29188);

return statearr_29283;
})();
var statearr_29284_29340 = state_29258__$1;
(statearr_29284_29340[(2)] = null);

(statearr_29284_29340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (29))){
var inst_29232 = (state_29258[(11)]);
var state_29258__$1 = state_29258;
var statearr_29285_29341 = state_29258__$1;
(statearr_29285_29341[(2)] = inst_29232);

(statearr_29285_29341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (6))){
var state_29258__$1 = state_29258;
var statearr_29286_29342 = state_29258__$1;
(statearr_29286_29342[(2)] = false);

(statearr_29286_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (28))){
var inst_29228 = (state_29258[(2)]);
var inst_29229 = calc_state.call(null);
var inst_29188 = inst_29229;
var state_29258__$1 = (function (){var statearr_29287 = state_29258;
(statearr_29287[(7)] = inst_29188);

(statearr_29287[(15)] = inst_29228);

return statearr_29287;
})();
var statearr_29288_29343 = state_29258__$1;
(statearr_29288_29343[(2)] = null);

(statearr_29288_29343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (25))){
var inst_29254 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29289_29344 = state_29258__$1;
(statearr_29289_29344[(2)] = inst_29254);

(statearr_29289_29344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (34))){
var inst_29252 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29290_29345 = state_29258__$1;
(statearr_29290_29345[(2)] = inst_29252);

(statearr_29290_29345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (17))){
var state_29258__$1 = state_29258;
var statearr_29291_29346 = state_29258__$1;
(statearr_29291_29346[(2)] = false);

(statearr_29291_29346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (3))){
var state_29258__$1 = state_29258;
var statearr_29292_29347 = state_29258__$1;
(statearr_29292_29347[(2)] = false);

(statearr_29292_29347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (12))){
var inst_29256 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29258__$1,inst_29256);
} else {
if((state_val_29259 === (2))){
var inst_29164 = (state_29258[(8)]);
var inst_29169 = inst_29164.cljs$lang$protocol_mask$partition0$;
var inst_29170 = (inst_29169 & (64));
var inst_29171 = inst_29164.cljs$core$ISeq$;
var inst_29172 = (inst_29170) || (inst_29171);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29172)){
var statearr_29293_29348 = state_29258__$1;
(statearr_29293_29348[(1)] = (5));

} else {
var statearr_29294_29349 = state_29258__$1;
(statearr_29294_29349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (23))){
var inst_29217 = (state_29258[(14)]);
var inst_29223 = (inst_29217 == null);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29223)){
var statearr_29295_29350 = state_29258__$1;
(statearr_29295_29350[(1)] = (26));

} else {
var statearr_29296_29351 = state_29258__$1;
(statearr_29296_29351[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (35))){
var inst_29243 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29243)){
var statearr_29297_29352 = state_29258__$1;
(statearr_29297_29352[(1)] = (36));

} else {
var statearr_29298_29353 = state_29258__$1;
(statearr_29298_29353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (19))){
var inst_29188 = (state_29258[(7)]);
var inst_29207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29188);
var state_29258__$1 = state_29258;
var statearr_29299_29354 = state_29258__$1;
(statearr_29299_29354[(2)] = inst_29207);

(statearr_29299_29354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (11))){
var inst_29188 = (state_29258[(7)]);
var inst_29192 = (inst_29188 == null);
var inst_29193 = cljs.core.not.call(null,inst_29192);
var state_29258__$1 = state_29258;
if(inst_29193){
var statearr_29300_29355 = state_29258__$1;
(statearr_29300_29355[(1)] = (13));

} else {
var statearr_29301_29356 = state_29258__$1;
(statearr_29301_29356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (9))){
var inst_29164 = (state_29258[(8)]);
var state_29258__$1 = state_29258;
var statearr_29302_29357 = state_29258__$1;
(statearr_29302_29357[(2)] = inst_29164);

(statearr_29302_29357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (5))){
var state_29258__$1 = state_29258;
var statearr_29303_29358 = state_29258__$1;
(statearr_29303_29358[(2)] = true);

(statearr_29303_29358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (14))){
var state_29258__$1 = state_29258;
var statearr_29304_29359 = state_29258__$1;
(statearr_29304_29359[(2)] = false);

(statearr_29304_29359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (26))){
var inst_29218 = (state_29258[(9)]);
var inst_29225 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29218);
var state_29258__$1 = state_29258;
var statearr_29305_29360 = state_29258__$1;
(statearr_29305_29360[(2)] = inst_29225);

(statearr_29305_29360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (16))){
var state_29258__$1 = state_29258;
var statearr_29306_29361 = state_29258__$1;
(statearr_29306_29361[(2)] = true);

(statearr_29306_29361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (38))){
var inst_29248 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29307_29362 = state_29258__$1;
(statearr_29307_29362[(2)] = inst_29248);

(statearr_29307_29362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (30))){
var inst_29218 = (state_29258[(9)]);
var inst_29212 = (state_29258[(13)]);
var inst_29211 = (state_29258[(10)]);
var inst_29235 = cljs.core.empty_QMARK_.call(null,inst_29211);
var inst_29236 = inst_29212.call(null,inst_29218);
var inst_29237 = cljs.core.not.call(null,inst_29236);
var inst_29238 = (inst_29235) && (inst_29237);
var state_29258__$1 = state_29258;
var statearr_29308_29363 = state_29258__$1;
(statearr_29308_29363[(2)] = inst_29238);

(statearr_29308_29363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (10))){
var inst_29164 = (state_29258[(8)]);
var inst_29184 = (state_29258[(2)]);
var inst_29185 = cljs.core.get.call(null,inst_29184,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29186 = cljs.core.get.call(null,inst_29184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29187 = cljs.core.get.call(null,inst_29184,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29188 = inst_29164;
var state_29258__$1 = (function (){var statearr_29309 = state_29258;
(statearr_29309[(7)] = inst_29188);

(statearr_29309[(16)] = inst_29187);

(statearr_29309[(17)] = inst_29186);

(statearr_29309[(18)] = inst_29185);

return statearr_29309;
})();
var statearr_29310_29364 = state_29258__$1;
(statearr_29310_29364[(2)] = null);

(statearr_29310_29364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (18))){
var inst_29202 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29311_29365 = state_29258__$1;
(statearr_29311_29365[(2)] = inst_29202);

(statearr_29311_29365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (37))){
var state_29258__$1 = state_29258;
var statearr_29312_29366 = state_29258__$1;
(statearr_29312_29366[(2)] = null);

(statearr_29312_29366[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (8))){
var inst_29164 = (state_29258[(8)]);
var inst_29181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29164);
var state_29258__$1 = state_29258;
var statearr_29313_29367 = state_29258__$1;
(statearr_29313_29367[(2)] = inst_29181);

(statearr_29313_29367[(1)] = (10));


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
});})(c__27608__auto___29321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27496__auto__,c__27608__auto___29321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27497__auto__ = null;
var cljs$core$async$mix_$_state_machine__27497__auto____0 = (function (){
var statearr_29317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29317[(0)] = cljs$core$async$mix_$_state_machine__27497__auto__);

(statearr_29317[(1)] = (1));

return statearr_29317;
});
var cljs$core$async$mix_$_state_machine__27497__auto____1 = (function (state_29258){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_29258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e29318){if((e29318 instanceof Object)){
var ex__27500__auto__ = e29318;
var statearr_29319_29368 = state_29258;
(statearr_29319_29368[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29369 = state_29258;
state_29258 = G__29369;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27497__auto__ = function(state_29258){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27497__auto____1.call(this,state_29258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27497__auto____0;
cljs$core$async$mix_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27497__auto____1;
return cljs$core$async$mix_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___29321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27610__auto__ = (function (){var statearr_29320 = f__27609__auto__.call(null);
(statearr_29320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___29321);

return statearr_29320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___29321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29370 = [];
var len__25604__auto___29373 = arguments.length;
var i__25605__auto___29374 = (0);
while(true){
if((i__25605__auto___29374 < len__25604__auto___29373)){
args29370.push((arguments[i__25605__auto___29374]));

var G__29375 = (i__25605__auto___29374 + (1));
i__25605__auto___29374 = G__29375;
continue;
} else {
}
break;
}

var G__29372 = args29370.length;
switch (G__29372) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29370.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29378 = [];
var len__25604__auto___29503 = arguments.length;
var i__25605__auto___29504 = (0);
while(true){
if((i__25605__auto___29504 < len__25604__auto___29503)){
args29378.push((arguments[i__25605__auto___29504]));

var G__29505 = (i__25605__auto___29504 + (1));
i__25605__auto___29504 = G__29505;
continue;
} else {
}
break;
}

var G__29380 = args29378.length;
switch (G__29380) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29378.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24534__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24534__auto__,mults){
return (function (p1__29377_SHARP_){
if(cljs.core.truth_(p1__29377_SHARP_.call(null,topic))){
return p1__29377_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29377_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24534__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29381 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29382){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29382 = meta29382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29383,meta29382__$1){
var self__ = this;
var _29383__$1 = this;
return (new cljs.core.async.t_cljs$core$async29381(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29382__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29383){
var self__ = this;
var _29383__$1 = this;
return self__.meta29382;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29382","meta29382",-1935602491,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29381";

cljs.core.async.t_cljs$core$async29381.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29381");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29381 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29382){
return (new cljs.core.async.t_cljs$core$async29381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29382));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29381(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27608__auto___29507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___29507,mults,ensure_mult,p){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___29507,mults,ensure_mult,p){
return (function (state_29455){
var state_val_29456 = (state_29455[(1)]);
if((state_val_29456 === (7))){
var inst_29451 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29457_29508 = state_29455__$1;
(statearr_29457_29508[(2)] = inst_29451);

(statearr_29457_29508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (20))){
var state_29455__$1 = state_29455;
var statearr_29458_29509 = state_29455__$1;
(statearr_29458_29509[(2)] = null);

(statearr_29458_29509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (1))){
var state_29455__$1 = state_29455;
var statearr_29459_29510 = state_29455__$1;
(statearr_29459_29510[(2)] = null);

(statearr_29459_29510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (24))){
var inst_29434 = (state_29455[(7)]);
var inst_29443 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29434);
var state_29455__$1 = state_29455;
var statearr_29460_29511 = state_29455__$1;
(statearr_29460_29511[(2)] = inst_29443);

(statearr_29460_29511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (4))){
var inst_29386 = (state_29455[(8)]);
var inst_29386__$1 = (state_29455[(2)]);
var inst_29387 = (inst_29386__$1 == null);
var state_29455__$1 = (function (){var statearr_29461 = state_29455;
(statearr_29461[(8)] = inst_29386__$1);

return statearr_29461;
})();
if(cljs.core.truth_(inst_29387)){
var statearr_29462_29512 = state_29455__$1;
(statearr_29462_29512[(1)] = (5));

} else {
var statearr_29463_29513 = state_29455__$1;
(statearr_29463_29513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (15))){
var inst_29428 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29464_29514 = state_29455__$1;
(statearr_29464_29514[(2)] = inst_29428);

(statearr_29464_29514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (21))){
var inst_29448 = (state_29455[(2)]);
var state_29455__$1 = (function (){var statearr_29465 = state_29455;
(statearr_29465[(9)] = inst_29448);

return statearr_29465;
})();
var statearr_29466_29515 = state_29455__$1;
(statearr_29466_29515[(2)] = null);

(statearr_29466_29515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (13))){
var inst_29410 = (state_29455[(10)]);
var inst_29412 = cljs.core.chunked_seq_QMARK_.call(null,inst_29410);
var state_29455__$1 = state_29455;
if(inst_29412){
var statearr_29467_29516 = state_29455__$1;
(statearr_29467_29516[(1)] = (16));

} else {
var statearr_29468_29517 = state_29455__$1;
(statearr_29468_29517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (22))){
var inst_29440 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
if(cljs.core.truth_(inst_29440)){
var statearr_29469_29518 = state_29455__$1;
(statearr_29469_29518[(1)] = (23));

} else {
var statearr_29470_29519 = state_29455__$1;
(statearr_29470_29519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (6))){
var inst_29436 = (state_29455[(11)]);
var inst_29386 = (state_29455[(8)]);
var inst_29434 = (state_29455[(7)]);
var inst_29434__$1 = topic_fn.call(null,inst_29386);
var inst_29435 = cljs.core.deref.call(null,mults);
var inst_29436__$1 = cljs.core.get.call(null,inst_29435,inst_29434__$1);
var state_29455__$1 = (function (){var statearr_29471 = state_29455;
(statearr_29471[(11)] = inst_29436__$1);

(statearr_29471[(7)] = inst_29434__$1);

return statearr_29471;
})();
if(cljs.core.truth_(inst_29436__$1)){
var statearr_29472_29520 = state_29455__$1;
(statearr_29472_29520[(1)] = (19));

} else {
var statearr_29473_29521 = state_29455__$1;
(statearr_29473_29521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (25))){
var inst_29445 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29474_29522 = state_29455__$1;
(statearr_29474_29522[(2)] = inst_29445);

(statearr_29474_29522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (17))){
var inst_29410 = (state_29455[(10)]);
var inst_29419 = cljs.core.first.call(null,inst_29410);
var inst_29420 = cljs.core.async.muxch_STAR_.call(null,inst_29419);
var inst_29421 = cljs.core.async.close_BANG_.call(null,inst_29420);
var inst_29422 = cljs.core.next.call(null,inst_29410);
var inst_29396 = inst_29422;
var inst_29397 = null;
var inst_29398 = (0);
var inst_29399 = (0);
var state_29455__$1 = (function (){var statearr_29475 = state_29455;
(statearr_29475[(12)] = inst_29397);

(statearr_29475[(13)] = inst_29398);

(statearr_29475[(14)] = inst_29399);

(statearr_29475[(15)] = inst_29396);

(statearr_29475[(16)] = inst_29421);

return statearr_29475;
})();
var statearr_29476_29523 = state_29455__$1;
(statearr_29476_29523[(2)] = null);

(statearr_29476_29523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (3))){
var inst_29453 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29455__$1,inst_29453);
} else {
if((state_val_29456 === (12))){
var inst_29430 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29477_29524 = state_29455__$1;
(statearr_29477_29524[(2)] = inst_29430);

(statearr_29477_29524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (2))){
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(4),ch);
} else {
if((state_val_29456 === (23))){
var state_29455__$1 = state_29455;
var statearr_29478_29525 = state_29455__$1;
(statearr_29478_29525[(2)] = null);

(statearr_29478_29525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (19))){
var inst_29436 = (state_29455[(11)]);
var inst_29386 = (state_29455[(8)]);
var inst_29438 = cljs.core.async.muxch_STAR_.call(null,inst_29436);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29455__$1,(22),inst_29438,inst_29386);
} else {
if((state_val_29456 === (11))){
var inst_29410 = (state_29455[(10)]);
var inst_29396 = (state_29455[(15)]);
var inst_29410__$1 = cljs.core.seq.call(null,inst_29396);
var state_29455__$1 = (function (){var statearr_29479 = state_29455;
(statearr_29479[(10)] = inst_29410__$1);

return statearr_29479;
})();
if(inst_29410__$1){
var statearr_29480_29526 = state_29455__$1;
(statearr_29480_29526[(1)] = (13));

} else {
var statearr_29481_29527 = state_29455__$1;
(statearr_29481_29527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (9))){
var inst_29432 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29482_29528 = state_29455__$1;
(statearr_29482_29528[(2)] = inst_29432);

(statearr_29482_29528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (5))){
var inst_29393 = cljs.core.deref.call(null,mults);
var inst_29394 = cljs.core.vals.call(null,inst_29393);
var inst_29395 = cljs.core.seq.call(null,inst_29394);
var inst_29396 = inst_29395;
var inst_29397 = null;
var inst_29398 = (0);
var inst_29399 = (0);
var state_29455__$1 = (function (){var statearr_29483 = state_29455;
(statearr_29483[(12)] = inst_29397);

(statearr_29483[(13)] = inst_29398);

(statearr_29483[(14)] = inst_29399);

(statearr_29483[(15)] = inst_29396);

return statearr_29483;
})();
var statearr_29484_29529 = state_29455__$1;
(statearr_29484_29529[(2)] = null);

(statearr_29484_29529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (14))){
var state_29455__$1 = state_29455;
var statearr_29488_29530 = state_29455__$1;
(statearr_29488_29530[(2)] = null);

(statearr_29488_29530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (16))){
var inst_29410 = (state_29455[(10)]);
var inst_29414 = cljs.core.chunk_first.call(null,inst_29410);
var inst_29415 = cljs.core.chunk_rest.call(null,inst_29410);
var inst_29416 = cljs.core.count.call(null,inst_29414);
var inst_29396 = inst_29415;
var inst_29397 = inst_29414;
var inst_29398 = inst_29416;
var inst_29399 = (0);
var state_29455__$1 = (function (){var statearr_29489 = state_29455;
(statearr_29489[(12)] = inst_29397);

(statearr_29489[(13)] = inst_29398);

(statearr_29489[(14)] = inst_29399);

(statearr_29489[(15)] = inst_29396);

return statearr_29489;
})();
var statearr_29490_29531 = state_29455__$1;
(statearr_29490_29531[(2)] = null);

(statearr_29490_29531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (10))){
var inst_29397 = (state_29455[(12)]);
var inst_29398 = (state_29455[(13)]);
var inst_29399 = (state_29455[(14)]);
var inst_29396 = (state_29455[(15)]);
var inst_29404 = cljs.core._nth.call(null,inst_29397,inst_29399);
var inst_29405 = cljs.core.async.muxch_STAR_.call(null,inst_29404);
var inst_29406 = cljs.core.async.close_BANG_.call(null,inst_29405);
var inst_29407 = (inst_29399 + (1));
var tmp29485 = inst_29397;
var tmp29486 = inst_29398;
var tmp29487 = inst_29396;
var inst_29396__$1 = tmp29487;
var inst_29397__$1 = tmp29485;
var inst_29398__$1 = tmp29486;
var inst_29399__$1 = inst_29407;
var state_29455__$1 = (function (){var statearr_29491 = state_29455;
(statearr_29491[(12)] = inst_29397__$1);

(statearr_29491[(13)] = inst_29398__$1);

(statearr_29491[(14)] = inst_29399__$1);

(statearr_29491[(17)] = inst_29406);

(statearr_29491[(15)] = inst_29396__$1);

return statearr_29491;
})();
var statearr_29492_29532 = state_29455__$1;
(statearr_29492_29532[(2)] = null);

(statearr_29492_29532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (18))){
var inst_29425 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29493_29533 = state_29455__$1;
(statearr_29493_29533[(2)] = inst_29425);

(statearr_29493_29533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (8))){
var inst_29398 = (state_29455[(13)]);
var inst_29399 = (state_29455[(14)]);
var inst_29401 = (inst_29399 < inst_29398);
var inst_29402 = inst_29401;
var state_29455__$1 = state_29455;
if(cljs.core.truth_(inst_29402)){
var statearr_29494_29534 = state_29455__$1;
(statearr_29494_29534[(1)] = (10));

} else {
var statearr_29495_29535 = state_29455__$1;
(statearr_29495_29535[(1)] = (11));

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
});})(c__27608__auto___29507,mults,ensure_mult,p))
;
return ((function (switch__27496__auto__,c__27608__auto___29507,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_29499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29499[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_29499[(1)] = (1));

return statearr_29499;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_29455){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_29455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e29500){if((e29500 instanceof Object)){
var ex__27500__auto__ = e29500;
var statearr_29501_29536 = state_29455;
(statearr_29501_29536[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29537 = state_29455;
state_29455 = G__29537;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_29455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_29455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___29507,mults,ensure_mult,p))
})();
var state__27610__auto__ = (function (){var statearr_29502 = f__27609__auto__.call(null);
(statearr_29502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___29507);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___29507,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29538 = [];
var len__25604__auto___29541 = arguments.length;
var i__25605__auto___29542 = (0);
while(true){
if((i__25605__auto___29542 < len__25604__auto___29541)){
args29538.push((arguments[i__25605__auto___29542]));

var G__29543 = (i__25605__auto___29542 + (1));
i__25605__auto___29542 = G__29543;
continue;
} else {
}
break;
}

var G__29540 = args29538.length;
switch (G__29540) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29538.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29545 = [];
var len__25604__auto___29548 = arguments.length;
var i__25605__auto___29549 = (0);
while(true){
if((i__25605__auto___29549 < len__25604__auto___29548)){
args29545.push((arguments[i__25605__auto___29549]));

var G__29550 = (i__25605__auto___29549 + (1));
i__25605__auto___29549 = G__29550;
continue;
} else {
}
break;
}

var G__29547 = args29545.length;
switch (G__29547) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29545.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29552 = [];
var len__25604__auto___29623 = arguments.length;
var i__25605__auto___29624 = (0);
while(true){
if((i__25605__auto___29624 < len__25604__auto___29623)){
args29552.push((arguments[i__25605__auto___29624]));

var G__29625 = (i__25605__auto___29624 + (1));
i__25605__auto___29624 = G__29625;
continue;
} else {
}
break;
}

var G__29554 = args29552.length;
switch (G__29554) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29552.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__27608__auto___29627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___29627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___29627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29593){
var state_val_29594 = (state_29593[(1)]);
if((state_val_29594 === (7))){
var state_29593__$1 = state_29593;
var statearr_29595_29628 = state_29593__$1;
(statearr_29595_29628[(2)] = null);

(statearr_29595_29628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (1))){
var state_29593__$1 = state_29593;
var statearr_29596_29629 = state_29593__$1;
(statearr_29596_29629[(2)] = null);

(statearr_29596_29629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (4))){
var inst_29557 = (state_29593[(7)]);
var inst_29559 = (inst_29557 < cnt);
var state_29593__$1 = state_29593;
if(cljs.core.truth_(inst_29559)){
var statearr_29597_29630 = state_29593__$1;
(statearr_29597_29630[(1)] = (6));

} else {
var statearr_29598_29631 = state_29593__$1;
(statearr_29598_29631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (15))){
var inst_29589 = (state_29593[(2)]);
var state_29593__$1 = state_29593;
var statearr_29599_29632 = state_29593__$1;
(statearr_29599_29632[(2)] = inst_29589);

(statearr_29599_29632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (13))){
var inst_29582 = cljs.core.async.close_BANG_.call(null,out);
var state_29593__$1 = state_29593;
var statearr_29600_29633 = state_29593__$1;
(statearr_29600_29633[(2)] = inst_29582);

(statearr_29600_29633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (6))){
var state_29593__$1 = state_29593;
var statearr_29601_29634 = state_29593__$1;
(statearr_29601_29634[(2)] = null);

(statearr_29601_29634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (3))){
var inst_29591 = (state_29593[(2)]);
var state_29593__$1 = state_29593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29593__$1,inst_29591);
} else {
if((state_val_29594 === (12))){
var inst_29579 = (state_29593[(8)]);
var inst_29579__$1 = (state_29593[(2)]);
var inst_29580 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29579__$1);
var state_29593__$1 = (function (){var statearr_29602 = state_29593;
(statearr_29602[(8)] = inst_29579__$1);

return statearr_29602;
})();
if(cljs.core.truth_(inst_29580)){
var statearr_29603_29635 = state_29593__$1;
(statearr_29603_29635[(1)] = (13));

} else {
var statearr_29604_29636 = state_29593__$1;
(statearr_29604_29636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (2))){
var inst_29556 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29557 = (0);
var state_29593__$1 = (function (){var statearr_29605 = state_29593;
(statearr_29605[(7)] = inst_29557);

(statearr_29605[(9)] = inst_29556);

return statearr_29605;
})();
var statearr_29606_29637 = state_29593__$1;
(statearr_29606_29637[(2)] = null);

(statearr_29606_29637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (11))){
var inst_29557 = (state_29593[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29593,(10),Object,null,(9));
var inst_29566 = chs__$1.call(null,inst_29557);
var inst_29567 = done.call(null,inst_29557);
var inst_29568 = cljs.core.async.take_BANG_.call(null,inst_29566,inst_29567);
var state_29593__$1 = state_29593;
var statearr_29607_29638 = state_29593__$1;
(statearr_29607_29638[(2)] = inst_29568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (9))){
var inst_29557 = (state_29593[(7)]);
var inst_29570 = (state_29593[(2)]);
var inst_29571 = (inst_29557 + (1));
var inst_29557__$1 = inst_29571;
var state_29593__$1 = (function (){var statearr_29608 = state_29593;
(statearr_29608[(10)] = inst_29570);

(statearr_29608[(7)] = inst_29557__$1);

return statearr_29608;
})();
var statearr_29609_29639 = state_29593__$1;
(statearr_29609_29639[(2)] = null);

(statearr_29609_29639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (5))){
var inst_29577 = (state_29593[(2)]);
var state_29593__$1 = (function (){var statearr_29610 = state_29593;
(statearr_29610[(11)] = inst_29577);

return statearr_29610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29593__$1,(12),dchan);
} else {
if((state_val_29594 === (14))){
var inst_29579 = (state_29593[(8)]);
var inst_29584 = cljs.core.apply.call(null,f,inst_29579);
var state_29593__$1 = state_29593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29593__$1,(16),out,inst_29584);
} else {
if((state_val_29594 === (16))){
var inst_29586 = (state_29593[(2)]);
var state_29593__$1 = (function (){var statearr_29611 = state_29593;
(statearr_29611[(12)] = inst_29586);

return statearr_29611;
})();
var statearr_29612_29640 = state_29593__$1;
(statearr_29612_29640[(2)] = null);

(statearr_29612_29640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (10))){
var inst_29561 = (state_29593[(2)]);
var inst_29562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29593__$1 = (function (){var statearr_29613 = state_29593;
(statearr_29613[(13)] = inst_29561);

return statearr_29613;
})();
var statearr_29614_29641 = state_29593__$1;
(statearr_29614_29641[(2)] = inst_29562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29594 === (8))){
var inst_29575 = (state_29593[(2)]);
var state_29593__$1 = state_29593;
var statearr_29615_29642 = state_29593__$1;
(statearr_29615_29642[(2)] = inst_29575);

(statearr_29615_29642[(1)] = (5));


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
});})(c__27608__auto___29627,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27496__auto__,c__27608__auto___29627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_29619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29619[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_29619[(1)] = (1));

return statearr_29619;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_29593){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_29593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e29620){if((e29620 instanceof Object)){
var ex__27500__auto__ = e29620;
var statearr_29621_29643 = state_29593;
(statearr_29621_29643[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29593;
state_29593 = G__29644;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_29593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_29593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___29627,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27610__auto__ = (function (){var statearr_29622 = f__27609__auto__.call(null);
(statearr_29622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___29627);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___29627,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29646 = [];
var len__25604__auto___29702 = arguments.length;
var i__25605__auto___29703 = (0);
while(true){
if((i__25605__auto___29703 < len__25604__auto___29702)){
args29646.push((arguments[i__25605__auto___29703]));

var G__29704 = (i__25605__auto___29703 + (1));
i__25605__auto___29703 = G__29704;
continue;
} else {
}
break;
}

var G__29648 = args29646.length;
switch (G__29648) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29646.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27608__auto___29706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___29706,out){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___29706,out){
return (function (state_29678){
var state_val_29679 = (state_29678[(1)]);
if((state_val_29679 === (7))){
var inst_29657 = (state_29678[(7)]);
var inst_29658 = (state_29678[(8)]);
var inst_29657__$1 = (state_29678[(2)]);
var inst_29658__$1 = cljs.core.nth.call(null,inst_29657__$1,(0),null);
var inst_29659 = cljs.core.nth.call(null,inst_29657__$1,(1),null);
var inst_29660 = (inst_29658__$1 == null);
var state_29678__$1 = (function (){var statearr_29680 = state_29678;
(statearr_29680[(7)] = inst_29657__$1);

(statearr_29680[(8)] = inst_29658__$1);

(statearr_29680[(9)] = inst_29659);

return statearr_29680;
})();
if(cljs.core.truth_(inst_29660)){
var statearr_29681_29707 = state_29678__$1;
(statearr_29681_29707[(1)] = (8));

} else {
var statearr_29682_29708 = state_29678__$1;
(statearr_29682_29708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (1))){
var inst_29649 = cljs.core.vec.call(null,chs);
var inst_29650 = inst_29649;
var state_29678__$1 = (function (){var statearr_29683 = state_29678;
(statearr_29683[(10)] = inst_29650);

return statearr_29683;
})();
var statearr_29684_29709 = state_29678__$1;
(statearr_29684_29709[(2)] = null);

(statearr_29684_29709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (4))){
var inst_29650 = (state_29678[(10)]);
var state_29678__$1 = state_29678;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29678__$1,(7),inst_29650);
} else {
if((state_val_29679 === (6))){
var inst_29674 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
var statearr_29685_29710 = state_29678__$1;
(statearr_29685_29710[(2)] = inst_29674);

(statearr_29685_29710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (3))){
var inst_29676 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29678__$1,inst_29676);
} else {
if((state_val_29679 === (2))){
var inst_29650 = (state_29678[(10)]);
var inst_29652 = cljs.core.count.call(null,inst_29650);
var inst_29653 = (inst_29652 > (0));
var state_29678__$1 = state_29678;
if(cljs.core.truth_(inst_29653)){
var statearr_29687_29711 = state_29678__$1;
(statearr_29687_29711[(1)] = (4));

} else {
var statearr_29688_29712 = state_29678__$1;
(statearr_29688_29712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (11))){
var inst_29650 = (state_29678[(10)]);
var inst_29667 = (state_29678[(2)]);
var tmp29686 = inst_29650;
var inst_29650__$1 = tmp29686;
var state_29678__$1 = (function (){var statearr_29689 = state_29678;
(statearr_29689[(10)] = inst_29650__$1);

(statearr_29689[(11)] = inst_29667);

return statearr_29689;
})();
var statearr_29690_29713 = state_29678__$1;
(statearr_29690_29713[(2)] = null);

(statearr_29690_29713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (9))){
var inst_29658 = (state_29678[(8)]);
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29678__$1,(11),out,inst_29658);
} else {
if((state_val_29679 === (5))){
var inst_29672 = cljs.core.async.close_BANG_.call(null,out);
var state_29678__$1 = state_29678;
var statearr_29691_29714 = state_29678__$1;
(statearr_29691_29714[(2)] = inst_29672);

(statearr_29691_29714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (10))){
var inst_29670 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
var statearr_29692_29715 = state_29678__$1;
(statearr_29692_29715[(2)] = inst_29670);

(statearr_29692_29715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (8))){
var inst_29657 = (state_29678[(7)]);
var inst_29650 = (state_29678[(10)]);
var inst_29658 = (state_29678[(8)]);
var inst_29659 = (state_29678[(9)]);
var inst_29662 = (function (){var cs = inst_29650;
var vec__29655 = inst_29657;
var v = inst_29658;
var c = inst_29659;
return ((function (cs,vec__29655,v,c,inst_29657,inst_29650,inst_29658,inst_29659,state_val_29679,c__27608__auto___29706,out){
return (function (p1__29645_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29645_SHARP_);
});
;})(cs,vec__29655,v,c,inst_29657,inst_29650,inst_29658,inst_29659,state_val_29679,c__27608__auto___29706,out))
})();
var inst_29663 = cljs.core.filterv.call(null,inst_29662,inst_29650);
var inst_29650__$1 = inst_29663;
var state_29678__$1 = (function (){var statearr_29693 = state_29678;
(statearr_29693[(10)] = inst_29650__$1);

return statearr_29693;
})();
var statearr_29694_29716 = state_29678__$1;
(statearr_29694_29716[(2)] = null);

(statearr_29694_29716[(1)] = (2));


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
});})(c__27608__auto___29706,out))
;
return ((function (switch__27496__auto__,c__27608__auto___29706,out){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_29698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29698[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_29698[(1)] = (1));

return statearr_29698;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_29678){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_29678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e29699){if((e29699 instanceof Object)){
var ex__27500__auto__ = e29699;
var statearr_29700_29717 = state_29678;
(statearr_29700_29717[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29718 = state_29678;
state_29678 = G__29718;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_29678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_29678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___29706,out))
})();
var state__27610__auto__ = (function (){var statearr_29701 = f__27609__auto__.call(null);
(statearr_29701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___29706);

return statearr_29701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___29706,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29719 = [];
var len__25604__auto___29768 = arguments.length;
var i__25605__auto___29769 = (0);
while(true){
if((i__25605__auto___29769 < len__25604__auto___29768)){
args29719.push((arguments[i__25605__auto___29769]));

var G__29770 = (i__25605__auto___29769 + (1));
i__25605__auto___29769 = G__29770;
continue;
} else {
}
break;
}

var G__29721 = args29719.length;
switch (G__29721) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29719.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27608__auto___29772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___29772,out){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___29772,out){
return (function (state_29745){
var state_val_29746 = (state_29745[(1)]);
if((state_val_29746 === (7))){
var inst_29727 = (state_29745[(7)]);
var inst_29727__$1 = (state_29745[(2)]);
var inst_29728 = (inst_29727__$1 == null);
var inst_29729 = cljs.core.not.call(null,inst_29728);
var state_29745__$1 = (function (){var statearr_29747 = state_29745;
(statearr_29747[(7)] = inst_29727__$1);

return statearr_29747;
})();
if(inst_29729){
var statearr_29748_29773 = state_29745__$1;
(statearr_29748_29773[(1)] = (8));

} else {
var statearr_29749_29774 = state_29745__$1;
(statearr_29749_29774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (1))){
var inst_29722 = (0);
var state_29745__$1 = (function (){var statearr_29750 = state_29745;
(statearr_29750[(8)] = inst_29722);

return statearr_29750;
})();
var statearr_29751_29775 = state_29745__$1;
(statearr_29751_29775[(2)] = null);

(statearr_29751_29775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (4))){
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29745__$1,(7),ch);
} else {
if((state_val_29746 === (6))){
var inst_29740 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
var statearr_29752_29776 = state_29745__$1;
(statearr_29752_29776[(2)] = inst_29740);

(statearr_29752_29776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (3))){
var inst_29742 = (state_29745[(2)]);
var inst_29743 = cljs.core.async.close_BANG_.call(null,out);
var state_29745__$1 = (function (){var statearr_29753 = state_29745;
(statearr_29753[(9)] = inst_29742);

return statearr_29753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29745__$1,inst_29743);
} else {
if((state_val_29746 === (2))){
var inst_29722 = (state_29745[(8)]);
var inst_29724 = (inst_29722 < n);
var state_29745__$1 = state_29745;
if(cljs.core.truth_(inst_29724)){
var statearr_29754_29777 = state_29745__$1;
(statearr_29754_29777[(1)] = (4));

} else {
var statearr_29755_29778 = state_29745__$1;
(statearr_29755_29778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (11))){
var inst_29722 = (state_29745[(8)]);
var inst_29732 = (state_29745[(2)]);
var inst_29733 = (inst_29722 + (1));
var inst_29722__$1 = inst_29733;
var state_29745__$1 = (function (){var statearr_29756 = state_29745;
(statearr_29756[(8)] = inst_29722__$1);

(statearr_29756[(10)] = inst_29732);

return statearr_29756;
})();
var statearr_29757_29779 = state_29745__$1;
(statearr_29757_29779[(2)] = null);

(statearr_29757_29779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (9))){
var state_29745__$1 = state_29745;
var statearr_29758_29780 = state_29745__$1;
(statearr_29758_29780[(2)] = null);

(statearr_29758_29780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (5))){
var state_29745__$1 = state_29745;
var statearr_29759_29781 = state_29745__$1;
(statearr_29759_29781[(2)] = null);

(statearr_29759_29781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (10))){
var inst_29737 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
var statearr_29760_29782 = state_29745__$1;
(statearr_29760_29782[(2)] = inst_29737);

(statearr_29760_29782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (8))){
var inst_29727 = (state_29745[(7)]);
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29745__$1,(11),out,inst_29727);
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
});})(c__27608__auto___29772,out))
;
return ((function (switch__27496__auto__,c__27608__auto___29772,out){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_29764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29764[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_29764[(1)] = (1));

return statearr_29764;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_29745){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_29745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e29765){if((e29765 instanceof Object)){
var ex__27500__auto__ = e29765;
var statearr_29766_29783 = state_29745;
(statearr_29766_29783[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29784 = state_29745;
state_29745 = G__29784;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_29745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_29745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___29772,out))
})();
var state__27610__auto__ = (function (){var statearr_29767 = f__27609__auto__.call(null);
(statearr_29767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___29772);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___29772,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29792 = (function (map_LT_,f,ch,meta29793){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29793 = meta29793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29794,meta29793__$1){
var self__ = this;
var _29794__$1 = this;
return (new cljs.core.async.t_cljs$core$async29792(self__.map_LT_,self__.f,self__.ch,meta29793__$1));
});

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29794){
var self__ = this;
var _29794__$1 = this;
return self__.meta29793;
});

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29795 = (function (map_LT_,f,ch,meta29793,_,fn1,meta29796){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29793 = meta29793;
this._ = _;
this.fn1 = fn1;
this.meta29796 = meta29796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29797,meta29796__$1){
var self__ = this;
var _29797__$1 = this;
return (new cljs.core.async.t_cljs$core$async29795(self__.map_LT_,self__.f,self__.ch,self__.meta29793,self__._,self__.fn1,meta29796__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29797){
var self__ = this;
var _29797__$1 = this;
return self__.meta29796;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29785_SHARP_){
return f1.call(null,(((p1__29785_SHARP_ == null))?null:self__.f.call(null,p1__29785_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29795.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29793","meta29793",1357374531,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29792","cljs.core.async/t_cljs$core$async29792",-211074544,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29796","meta29796",230373800,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29795";

cljs.core.async.t_cljs$core$async29795.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29795");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29795 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29795(map_LT___$1,f__$1,ch__$1,meta29793__$1,___$2,fn1__$1,meta29796){
return (new cljs.core.async.t_cljs$core$async29795(map_LT___$1,f__$1,ch__$1,meta29793__$1,___$2,fn1__$1,meta29796));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29795(self__.map_LT_,self__.f,self__.ch,self__.meta29793,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24522__auto__ = ret;
if(cljs.core.truth_(and__24522__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24522__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29793","meta29793",1357374531,null)], null);
});

cljs.core.async.t_cljs$core$async29792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29792";

cljs.core.async.t_cljs$core$async29792.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29792");
});

cljs.core.async.__GT_t_cljs$core$async29792 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29792(map_LT___$1,f__$1,ch__$1,meta29793){
return (new cljs.core.async.t_cljs$core$async29792(map_LT___$1,f__$1,ch__$1,meta29793));
});

}

return (new cljs.core.async.t_cljs$core$async29792(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29801 = (function (map_GT_,f,ch,meta29802){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29802 = meta29802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29803,meta29802__$1){
var self__ = this;
var _29803__$1 = this;
return (new cljs.core.async.t_cljs$core$async29801(self__.map_GT_,self__.f,self__.ch,meta29802__$1));
});

cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29803){
var self__ = this;
var _29803__$1 = this;
return self__.meta29802;
});

cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29802","meta29802",782663313,null)], null);
});

cljs.core.async.t_cljs$core$async29801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29801";

cljs.core.async.t_cljs$core$async29801.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29801");
});

cljs.core.async.__GT_t_cljs$core$async29801 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29801(map_GT___$1,f__$1,ch__$1,meta29802){
return (new cljs.core.async.t_cljs$core$async29801(map_GT___$1,f__$1,ch__$1,meta29802));
});

}

return (new cljs.core.async.t_cljs$core$async29801(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29807 = (function (filter_GT_,p,ch,meta29808){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29808 = meta29808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29809,meta29808__$1){
var self__ = this;
var _29809__$1 = this;
return (new cljs.core.async.t_cljs$core$async29807(self__.filter_GT_,self__.p,self__.ch,meta29808__$1));
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29809){
var self__ = this;
var _29809__$1 = this;
return self__.meta29808;
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29808","meta29808",626126567,null)], null);
});

cljs.core.async.t_cljs$core$async29807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29807";

cljs.core.async.t_cljs$core$async29807.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29807");
});

cljs.core.async.__GT_t_cljs$core$async29807 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29807(filter_GT___$1,p__$1,ch__$1,meta29808){
return (new cljs.core.async.t_cljs$core$async29807(filter_GT___$1,p__$1,ch__$1,meta29808));
});

}

return (new cljs.core.async.t_cljs$core$async29807(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29810 = [];
var len__25604__auto___29854 = arguments.length;
var i__25605__auto___29855 = (0);
while(true){
if((i__25605__auto___29855 < len__25604__auto___29854)){
args29810.push((arguments[i__25605__auto___29855]));

var G__29856 = (i__25605__auto___29855 + (1));
i__25605__auto___29855 = G__29856;
continue;
} else {
}
break;
}

var G__29812 = args29810.length;
switch (G__29812) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29810.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27608__auto___29858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___29858,out){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___29858,out){
return (function (state_29833){
var state_val_29834 = (state_29833[(1)]);
if((state_val_29834 === (7))){
var inst_29829 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
var statearr_29835_29859 = state_29833__$1;
(statearr_29835_29859[(2)] = inst_29829);

(statearr_29835_29859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (1))){
var state_29833__$1 = state_29833;
var statearr_29836_29860 = state_29833__$1;
(statearr_29836_29860[(2)] = null);

(statearr_29836_29860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (4))){
var inst_29815 = (state_29833[(7)]);
var inst_29815__$1 = (state_29833[(2)]);
var inst_29816 = (inst_29815__$1 == null);
var state_29833__$1 = (function (){var statearr_29837 = state_29833;
(statearr_29837[(7)] = inst_29815__$1);

return statearr_29837;
})();
if(cljs.core.truth_(inst_29816)){
var statearr_29838_29861 = state_29833__$1;
(statearr_29838_29861[(1)] = (5));

} else {
var statearr_29839_29862 = state_29833__$1;
(statearr_29839_29862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (6))){
var inst_29815 = (state_29833[(7)]);
var inst_29820 = p.call(null,inst_29815);
var state_29833__$1 = state_29833;
if(cljs.core.truth_(inst_29820)){
var statearr_29840_29863 = state_29833__$1;
(statearr_29840_29863[(1)] = (8));

} else {
var statearr_29841_29864 = state_29833__$1;
(statearr_29841_29864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (3))){
var inst_29831 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29833__$1,inst_29831);
} else {
if((state_val_29834 === (2))){
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29833__$1,(4),ch);
} else {
if((state_val_29834 === (11))){
var inst_29823 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
var statearr_29842_29865 = state_29833__$1;
(statearr_29842_29865[(2)] = inst_29823);

(statearr_29842_29865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (9))){
var state_29833__$1 = state_29833;
var statearr_29843_29866 = state_29833__$1;
(statearr_29843_29866[(2)] = null);

(statearr_29843_29866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (5))){
var inst_29818 = cljs.core.async.close_BANG_.call(null,out);
var state_29833__$1 = state_29833;
var statearr_29844_29867 = state_29833__$1;
(statearr_29844_29867[(2)] = inst_29818);

(statearr_29844_29867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (10))){
var inst_29826 = (state_29833[(2)]);
var state_29833__$1 = (function (){var statearr_29845 = state_29833;
(statearr_29845[(8)] = inst_29826);

return statearr_29845;
})();
var statearr_29846_29868 = state_29833__$1;
(statearr_29846_29868[(2)] = null);

(statearr_29846_29868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (8))){
var inst_29815 = (state_29833[(7)]);
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29833__$1,(11),out,inst_29815);
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
});})(c__27608__auto___29858,out))
;
return ((function (switch__27496__auto__,c__27608__auto___29858,out){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_29850 = [null,null,null,null,null,null,null,null,null];
(statearr_29850[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_29850[(1)] = (1));

return statearr_29850;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_29833){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_29833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e29851){if((e29851 instanceof Object)){
var ex__27500__auto__ = e29851;
var statearr_29852_29869 = state_29833;
(statearr_29852_29869[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29870 = state_29833;
state_29833 = G__29870;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_29833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_29833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___29858,out))
})();
var state__27610__auto__ = (function (){var statearr_29853 = f__27609__auto__.call(null);
(statearr_29853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___29858);

return statearr_29853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___29858,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29871 = [];
var len__25604__auto___29874 = arguments.length;
var i__25605__auto___29875 = (0);
while(true){
if((i__25605__auto___29875 < len__25604__auto___29874)){
args29871.push((arguments[i__25605__auto___29875]));

var G__29876 = (i__25605__auto___29875 + (1));
i__25605__auto___29875 = G__29876;
continue;
} else {
}
break;
}

var G__29873 = args29871.length;
switch (G__29873) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29871.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__){
return (function (state_30043){
var state_val_30044 = (state_30043[(1)]);
if((state_val_30044 === (7))){
var inst_30039 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30045_30086 = state_30043__$1;
(statearr_30045_30086[(2)] = inst_30039);

(statearr_30045_30086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (20))){
var inst_30009 = (state_30043[(7)]);
var inst_30020 = (state_30043[(2)]);
var inst_30021 = cljs.core.next.call(null,inst_30009);
var inst_29995 = inst_30021;
var inst_29996 = null;
var inst_29997 = (0);
var inst_29998 = (0);
var state_30043__$1 = (function (){var statearr_30046 = state_30043;
(statearr_30046[(8)] = inst_30020);

(statearr_30046[(9)] = inst_29996);

(statearr_30046[(10)] = inst_29995);

(statearr_30046[(11)] = inst_29998);

(statearr_30046[(12)] = inst_29997);

return statearr_30046;
})();
var statearr_30047_30087 = state_30043__$1;
(statearr_30047_30087[(2)] = null);

(statearr_30047_30087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (1))){
var state_30043__$1 = state_30043;
var statearr_30048_30088 = state_30043__$1;
(statearr_30048_30088[(2)] = null);

(statearr_30048_30088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (4))){
var inst_29984 = (state_30043[(13)]);
var inst_29984__$1 = (state_30043[(2)]);
var inst_29985 = (inst_29984__$1 == null);
var state_30043__$1 = (function (){var statearr_30049 = state_30043;
(statearr_30049[(13)] = inst_29984__$1);

return statearr_30049;
})();
if(cljs.core.truth_(inst_29985)){
var statearr_30050_30089 = state_30043__$1;
(statearr_30050_30089[(1)] = (5));

} else {
var statearr_30051_30090 = state_30043__$1;
(statearr_30051_30090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (15))){
var state_30043__$1 = state_30043;
var statearr_30055_30091 = state_30043__$1;
(statearr_30055_30091[(2)] = null);

(statearr_30055_30091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (21))){
var state_30043__$1 = state_30043;
var statearr_30056_30092 = state_30043__$1;
(statearr_30056_30092[(2)] = null);

(statearr_30056_30092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (13))){
var inst_29996 = (state_30043[(9)]);
var inst_29995 = (state_30043[(10)]);
var inst_29998 = (state_30043[(11)]);
var inst_29997 = (state_30043[(12)]);
var inst_30005 = (state_30043[(2)]);
var inst_30006 = (inst_29998 + (1));
var tmp30052 = inst_29996;
var tmp30053 = inst_29995;
var tmp30054 = inst_29997;
var inst_29995__$1 = tmp30053;
var inst_29996__$1 = tmp30052;
var inst_29997__$1 = tmp30054;
var inst_29998__$1 = inst_30006;
var state_30043__$1 = (function (){var statearr_30057 = state_30043;
(statearr_30057[(9)] = inst_29996__$1);

(statearr_30057[(10)] = inst_29995__$1);

(statearr_30057[(14)] = inst_30005);

(statearr_30057[(11)] = inst_29998__$1);

(statearr_30057[(12)] = inst_29997__$1);

return statearr_30057;
})();
var statearr_30058_30093 = state_30043__$1;
(statearr_30058_30093[(2)] = null);

(statearr_30058_30093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (22))){
var state_30043__$1 = state_30043;
var statearr_30059_30094 = state_30043__$1;
(statearr_30059_30094[(2)] = null);

(statearr_30059_30094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (6))){
var inst_29984 = (state_30043[(13)]);
var inst_29993 = f.call(null,inst_29984);
var inst_29994 = cljs.core.seq.call(null,inst_29993);
var inst_29995 = inst_29994;
var inst_29996 = null;
var inst_29997 = (0);
var inst_29998 = (0);
var state_30043__$1 = (function (){var statearr_30060 = state_30043;
(statearr_30060[(9)] = inst_29996);

(statearr_30060[(10)] = inst_29995);

(statearr_30060[(11)] = inst_29998);

(statearr_30060[(12)] = inst_29997);

return statearr_30060;
})();
var statearr_30061_30095 = state_30043__$1;
(statearr_30061_30095[(2)] = null);

(statearr_30061_30095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (17))){
var inst_30009 = (state_30043[(7)]);
var inst_30013 = cljs.core.chunk_first.call(null,inst_30009);
var inst_30014 = cljs.core.chunk_rest.call(null,inst_30009);
var inst_30015 = cljs.core.count.call(null,inst_30013);
var inst_29995 = inst_30014;
var inst_29996 = inst_30013;
var inst_29997 = inst_30015;
var inst_29998 = (0);
var state_30043__$1 = (function (){var statearr_30062 = state_30043;
(statearr_30062[(9)] = inst_29996);

(statearr_30062[(10)] = inst_29995);

(statearr_30062[(11)] = inst_29998);

(statearr_30062[(12)] = inst_29997);

return statearr_30062;
})();
var statearr_30063_30096 = state_30043__$1;
(statearr_30063_30096[(2)] = null);

(statearr_30063_30096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (3))){
var inst_30041 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30043__$1,inst_30041);
} else {
if((state_val_30044 === (12))){
var inst_30029 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30064_30097 = state_30043__$1;
(statearr_30064_30097[(2)] = inst_30029);

(statearr_30064_30097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (2))){
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30043__$1,(4),in$);
} else {
if((state_val_30044 === (23))){
var inst_30037 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30065_30098 = state_30043__$1;
(statearr_30065_30098[(2)] = inst_30037);

(statearr_30065_30098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (19))){
var inst_30024 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30066_30099 = state_30043__$1;
(statearr_30066_30099[(2)] = inst_30024);

(statearr_30066_30099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (11))){
var inst_29995 = (state_30043[(10)]);
var inst_30009 = (state_30043[(7)]);
var inst_30009__$1 = cljs.core.seq.call(null,inst_29995);
var state_30043__$1 = (function (){var statearr_30067 = state_30043;
(statearr_30067[(7)] = inst_30009__$1);

return statearr_30067;
})();
if(inst_30009__$1){
var statearr_30068_30100 = state_30043__$1;
(statearr_30068_30100[(1)] = (14));

} else {
var statearr_30069_30101 = state_30043__$1;
(statearr_30069_30101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (9))){
var inst_30031 = (state_30043[(2)]);
var inst_30032 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30043__$1 = (function (){var statearr_30070 = state_30043;
(statearr_30070[(15)] = inst_30031);

return statearr_30070;
})();
if(cljs.core.truth_(inst_30032)){
var statearr_30071_30102 = state_30043__$1;
(statearr_30071_30102[(1)] = (21));

} else {
var statearr_30072_30103 = state_30043__$1;
(statearr_30072_30103[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (5))){
var inst_29987 = cljs.core.async.close_BANG_.call(null,out);
var state_30043__$1 = state_30043;
var statearr_30073_30104 = state_30043__$1;
(statearr_30073_30104[(2)] = inst_29987);

(statearr_30073_30104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (14))){
var inst_30009 = (state_30043[(7)]);
var inst_30011 = cljs.core.chunked_seq_QMARK_.call(null,inst_30009);
var state_30043__$1 = state_30043;
if(inst_30011){
var statearr_30074_30105 = state_30043__$1;
(statearr_30074_30105[(1)] = (17));

} else {
var statearr_30075_30106 = state_30043__$1;
(statearr_30075_30106[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (16))){
var inst_30027 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30076_30107 = state_30043__$1;
(statearr_30076_30107[(2)] = inst_30027);

(statearr_30076_30107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (10))){
var inst_29996 = (state_30043[(9)]);
var inst_29998 = (state_30043[(11)]);
var inst_30003 = cljs.core._nth.call(null,inst_29996,inst_29998);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30043__$1,(13),out,inst_30003);
} else {
if((state_val_30044 === (18))){
var inst_30009 = (state_30043[(7)]);
var inst_30018 = cljs.core.first.call(null,inst_30009);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30043__$1,(20),out,inst_30018);
} else {
if((state_val_30044 === (8))){
var inst_29998 = (state_30043[(11)]);
var inst_29997 = (state_30043[(12)]);
var inst_30000 = (inst_29998 < inst_29997);
var inst_30001 = inst_30000;
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30001)){
var statearr_30077_30108 = state_30043__$1;
(statearr_30077_30108[(1)] = (10));

} else {
var statearr_30078_30109 = state_30043__$1;
(statearr_30078_30109[(1)] = (11));

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
});})(c__27608__auto__))
;
return ((function (switch__27496__auto__,c__27608__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27497__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27497__auto____0 = (function (){
var statearr_30082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30082[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27497__auto__);

(statearr_30082[(1)] = (1));

return statearr_30082;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27497__auto____1 = (function (state_30043){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_30043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e30083){if((e30083 instanceof Object)){
var ex__27500__auto__ = e30083;
var statearr_30084_30110 = state_30043;
(statearr_30084_30110[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30111 = state_30043;
state_30043 = G__30111;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27497__auto__ = function(state_30043){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27497__auto____1.call(this,state_30043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27497__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27497__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__))
})();
var state__27610__auto__ = (function (){var statearr_30085 = f__27609__auto__.call(null);
(statearr_30085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_30085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__))
);

return c__27608__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30112 = [];
var len__25604__auto___30115 = arguments.length;
var i__25605__auto___30116 = (0);
while(true){
if((i__25605__auto___30116 < len__25604__auto___30115)){
args30112.push((arguments[i__25605__auto___30116]));

var G__30117 = (i__25605__auto___30116 + (1));
i__25605__auto___30116 = G__30117;
continue;
} else {
}
break;
}

var G__30114 = args30112.length;
switch (G__30114) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30112.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30119 = [];
var len__25604__auto___30122 = arguments.length;
var i__25605__auto___30123 = (0);
while(true){
if((i__25605__auto___30123 < len__25604__auto___30122)){
args30119.push((arguments[i__25605__auto___30123]));

var G__30124 = (i__25605__auto___30123 + (1));
i__25605__auto___30123 = G__30124;
continue;
} else {
}
break;
}

var G__30121 = args30119.length;
switch (G__30121) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30119.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30126 = [];
var len__25604__auto___30177 = arguments.length;
var i__25605__auto___30178 = (0);
while(true){
if((i__25605__auto___30178 < len__25604__auto___30177)){
args30126.push((arguments[i__25605__auto___30178]));

var G__30179 = (i__25605__auto___30178 + (1));
i__25605__auto___30178 = G__30179;
continue;
} else {
}
break;
}

var G__30128 = args30126.length;
switch (G__30128) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30126.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27608__auto___30181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___30181,out){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___30181,out){
return (function (state_30152){
var state_val_30153 = (state_30152[(1)]);
if((state_val_30153 === (7))){
var inst_30147 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30154_30182 = state_30152__$1;
(statearr_30154_30182[(2)] = inst_30147);

(statearr_30154_30182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (1))){
var inst_30129 = null;
var state_30152__$1 = (function (){var statearr_30155 = state_30152;
(statearr_30155[(7)] = inst_30129);

return statearr_30155;
})();
var statearr_30156_30183 = state_30152__$1;
(statearr_30156_30183[(2)] = null);

(statearr_30156_30183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (4))){
var inst_30132 = (state_30152[(8)]);
var inst_30132__$1 = (state_30152[(2)]);
var inst_30133 = (inst_30132__$1 == null);
var inst_30134 = cljs.core.not.call(null,inst_30133);
var state_30152__$1 = (function (){var statearr_30157 = state_30152;
(statearr_30157[(8)] = inst_30132__$1);

return statearr_30157;
})();
if(inst_30134){
var statearr_30158_30184 = state_30152__$1;
(statearr_30158_30184[(1)] = (5));

} else {
var statearr_30159_30185 = state_30152__$1;
(statearr_30159_30185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (6))){
var state_30152__$1 = state_30152;
var statearr_30160_30186 = state_30152__$1;
(statearr_30160_30186[(2)] = null);

(statearr_30160_30186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (3))){
var inst_30149 = (state_30152[(2)]);
var inst_30150 = cljs.core.async.close_BANG_.call(null,out);
var state_30152__$1 = (function (){var statearr_30161 = state_30152;
(statearr_30161[(9)] = inst_30149);

return statearr_30161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30152__$1,inst_30150);
} else {
if((state_val_30153 === (2))){
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30152__$1,(4),ch);
} else {
if((state_val_30153 === (11))){
var inst_30132 = (state_30152[(8)]);
var inst_30141 = (state_30152[(2)]);
var inst_30129 = inst_30132;
var state_30152__$1 = (function (){var statearr_30162 = state_30152;
(statearr_30162[(7)] = inst_30129);

(statearr_30162[(10)] = inst_30141);

return statearr_30162;
})();
var statearr_30163_30187 = state_30152__$1;
(statearr_30163_30187[(2)] = null);

(statearr_30163_30187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (9))){
var inst_30132 = (state_30152[(8)]);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30152__$1,(11),out,inst_30132);
} else {
if((state_val_30153 === (5))){
var inst_30129 = (state_30152[(7)]);
var inst_30132 = (state_30152[(8)]);
var inst_30136 = cljs.core._EQ_.call(null,inst_30132,inst_30129);
var state_30152__$1 = state_30152;
if(inst_30136){
var statearr_30165_30188 = state_30152__$1;
(statearr_30165_30188[(1)] = (8));

} else {
var statearr_30166_30189 = state_30152__$1;
(statearr_30166_30189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (10))){
var inst_30144 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30167_30190 = state_30152__$1;
(statearr_30167_30190[(2)] = inst_30144);

(statearr_30167_30190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (8))){
var inst_30129 = (state_30152[(7)]);
var tmp30164 = inst_30129;
var inst_30129__$1 = tmp30164;
var state_30152__$1 = (function (){var statearr_30168 = state_30152;
(statearr_30168[(7)] = inst_30129__$1);

return statearr_30168;
})();
var statearr_30169_30191 = state_30152__$1;
(statearr_30169_30191[(2)] = null);

(statearr_30169_30191[(1)] = (2));


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
});})(c__27608__auto___30181,out))
;
return ((function (switch__27496__auto__,c__27608__auto___30181,out){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_30173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30173[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_30173[(1)] = (1));

return statearr_30173;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_30152){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_30152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e30174){if((e30174 instanceof Object)){
var ex__27500__auto__ = e30174;
var statearr_30175_30192 = state_30152;
(statearr_30175_30192[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30193 = state_30152;
state_30152 = G__30193;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_30152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_30152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___30181,out))
})();
var state__27610__auto__ = (function (){var statearr_30176 = f__27609__auto__.call(null);
(statearr_30176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___30181);

return statearr_30176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___30181,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30194 = [];
var len__25604__auto___30264 = arguments.length;
var i__25605__auto___30265 = (0);
while(true){
if((i__25605__auto___30265 < len__25604__auto___30264)){
args30194.push((arguments[i__25605__auto___30265]));

var G__30266 = (i__25605__auto___30265 + (1));
i__25605__auto___30265 = G__30266;
continue;
} else {
}
break;
}

var G__30196 = args30194.length;
switch (G__30196) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30194.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27608__auto___30268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___30268,out){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___30268,out){
return (function (state_30234){
var state_val_30235 = (state_30234[(1)]);
if((state_val_30235 === (7))){
var inst_30230 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30236_30269 = state_30234__$1;
(statearr_30236_30269[(2)] = inst_30230);

(statearr_30236_30269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (1))){
var inst_30197 = (new Array(n));
var inst_30198 = inst_30197;
var inst_30199 = (0);
var state_30234__$1 = (function (){var statearr_30237 = state_30234;
(statearr_30237[(7)] = inst_30198);

(statearr_30237[(8)] = inst_30199);

return statearr_30237;
})();
var statearr_30238_30270 = state_30234__$1;
(statearr_30238_30270[(2)] = null);

(statearr_30238_30270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (4))){
var inst_30202 = (state_30234[(9)]);
var inst_30202__$1 = (state_30234[(2)]);
var inst_30203 = (inst_30202__$1 == null);
var inst_30204 = cljs.core.not.call(null,inst_30203);
var state_30234__$1 = (function (){var statearr_30239 = state_30234;
(statearr_30239[(9)] = inst_30202__$1);

return statearr_30239;
})();
if(inst_30204){
var statearr_30240_30271 = state_30234__$1;
(statearr_30240_30271[(1)] = (5));

} else {
var statearr_30241_30272 = state_30234__$1;
(statearr_30241_30272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (15))){
var inst_30224 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30242_30273 = state_30234__$1;
(statearr_30242_30273[(2)] = inst_30224);

(statearr_30242_30273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (13))){
var state_30234__$1 = state_30234;
var statearr_30243_30274 = state_30234__$1;
(statearr_30243_30274[(2)] = null);

(statearr_30243_30274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (6))){
var inst_30199 = (state_30234[(8)]);
var inst_30220 = (inst_30199 > (0));
var state_30234__$1 = state_30234;
if(cljs.core.truth_(inst_30220)){
var statearr_30244_30275 = state_30234__$1;
(statearr_30244_30275[(1)] = (12));

} else {
var statearr_30245_30276 = state_30234__$1;
(statearr_30245_30276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (3))){
var inst_30232 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30234__$1,inst_30232);
} else {
if((state_val_30235 === (12))){
var inst_30198 = (state_30234[(7)]);
var inst_30222 = cljs.core.vec.call(null,inst_30198);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30234__$1,(15),out,inst_30222);
} else {
if((state_val_30235 === (2))){
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30234__$1,(4),ch);
} else {
if((state_val_30235 === (11))){
var inst_30214 = (state_30234[(2)]);
var inst_30215 = (new Array(n));
var inst_30198 = inst_30215;
var inst_30199 = (0);
var state_30234__$1 = (function (){var statearr_30246 = state_30234;
(statearr_30246[(10)] = inst_30214);

(statearr_30246[(7)] = inst_30198);

(statearr_30246[(8)] = inst_30199);

return statearr_30246;
})();
var statearr_30247_30277 = state_30234__$1;
(statearr_30247_30277[(2)] = null);

(statearr_30247_30277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (9))){
var inst_30198 = (state_30234[(7)]);
var inst_30212 = cljs.core.vec.call(null,inst_30198);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30234__$1,(11),out,inst_30212);
} else {
if((state_val_30235 === (5))){
var inst_30202 = (state_30234[(9)]);
var inst_30198 = (state_30234[(7)]);
var inst_30199 = (state_30234[(8)]);
var inst_30207 = (state_30234[(11)]);
var inst_30206 = (inst_30198[inst_30199] = inst_30202);
var inst_30207__$1 = (inst_30199 + (1));
var inst_30208 = (inst_30207__$1 < n);
var state_30234__$1 = (function (){var statearr_30248 = state_30234;
(statearr_30248[(12)] = inst_30206);

(statearr_30248[(11)] = inst_30207__$1);

return statearr_30248;
})();
if(cljs.core.truth_(inst_30208)){
var statearr_30249_30278 = state_30234__$1;
(statearr_30249_30278[(1)] = (8));

} else {
var statearr_30250_30279 = state_30234__$1;
(statearr_30250_30279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (14))){
var inst_30227 = (state_30234[(2)]);
var inst_30228 = cljs.core.async.close_BANG_.call(null,out);
var state_30234__$1 = (function (){var statearr_30252 = state_30234;
(statearr_30252[(13)] = inst_30227);

return statearr_30252;
})();
var statearr_30253_30280 = state_30234__$1;
(statearr_30253_30280[(2)] = inst_30228);

(statearr_30253_30280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (10))){
var inst_30218 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30254_30281 = state_30234__$1;
(statearr_30254_30281[(2)] = inst_30218);

(statearr_30254_30281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (8))){
var inst_30198 = (state_30234[(7)]);
var inst_30207 = (state_30234[(11)]);
var tmp30251 = inst_30198;
var inst_30198__$1 = tmp30251;
var inst_30199 = inst_30207;
var state_30234__$1 = (function (){var statearr_30255 = state_30234;
(statearr_30255[(7)] = inst_30198__$1);

(statearr_30255[(8)] = inst_30199);

return statearr_30255;
})();
var statearr_30256_30282 = state_30234__$1;
(statearr_30256_30282[(2)] = null);

(statearr_30256_30282[(1)] = (2));


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
});})(c__27608__auto___30268,out))
;
return ((function (switch__27496__auto__,c__27608__auto___30268,out){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_30260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30260[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_30260[(1)] = (1));

return statearr_30260;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_30234){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_30234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e30261){if((e30261 instanceof Object)){
var ex__27500__auto__ = e30261;
var statearr_30262_30283 = state_30234;
(statearr_30262_30283[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30284 = state_30234;
state_30234 = G__30284;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_30234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_30234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___30268,out))
})();
var state__27610__auto__ = (function (){var statearr_30263 = f__27609__auto__.call(null);
(statearr_30263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___30268);

return statearr_30263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___30268,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30285 = [];
var len__25604__auto___30359 = arguments.length;
var i__25605__auto___30360 = (0);
while(true){
if((i__25605__auto___30360 < len__25604__auto___30359)){
args30285.push((arguments[i__25605__auto___30360]));

var G__30361 = (i__25605__auto___30360 + (1));
i__25605__auto___30360 = G__30361;
continue;
} else {
}
break;
}

var G__30287 = args30285.length;
switch (G__30287) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30285.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27608__auto___30363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___30363,out){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___30363,out){
return (function (state_30329){
var state_val_30330 = (state_30329[(1)]);
if((state_val_30330 === (7))){
var inst_30325 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30331_30364 = state_30329__$1;
(statearr_30331_30364[(2)] = inst_30325);

(statearr_30331_30364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (1))){
var inst_30288 = [];
var inst_30289 = inst_30288;
var inst_30290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30329__$1 = (function (){var statearr_30332 = state_30329;
(statearr_30332[(7)] = inst_30289);

(statearr_30332[(8)] = inst_30290);

return statearr_30332;
})();
var statearr_30333_30365 = state_30329__$1;
(statearr_30333_30365[(2)] = null);

(statearr_30333_30365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (4))){
var inst_30293 = (state_30329[(9)]);
var inst_30293__$1 = (state_30329[(2)]);
var inst_30294 = (inst_30293__$1 == null);
var inst_30295 = cljs.core.not.call(null,inst_30294);
var state_30329__$1 = (function (){var statearr_30334 = state_30329;
(statearr_30334[(9)] = inst_30293__$1);

return statearr_30334;
})();
if(inst_30295){
var statearr_30335_30366 = state_30329__$1;
(statearr_30335_30366[(1)] = (5));

} else {
var statearr_30336_30367 = state_30329__$1;
(statearr_30336_30367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (15))){
var inst_30319 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30337_30368 = state_30329__$1;
(statearr_30337_30368[(2)] = inst_30319);

(statearr_30337_30368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (13))){
var state_30329__$1 = state_30329;
var statearr_30338_30369 = state_30329__$1;
(statearr_30338_30369[(2)] = null);

(statearr_30338_30369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (6))){
var inst_30289 = (state_30329[(7)]);
var inst_30314 = inst_30289.length;
var inst_30315 = (inst_30314 > (0));
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30315)){
var statearr_30339_30370 = state_30329__$1;
(statearr_30339_30370[(1)] = (12));

} else {
var statearr_30340_30371 = state_30329__$1;
(statearr_30340_30371[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (3))){
var inst_30327 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30329__$1,inst_30327);
} else {
if((state_val_30330 === (12))){
var inst_30289 = (state_30329[(7)]);
var inst_30317 = cljs.core.vec.call(null,inst_30289);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30329__$1,(15),out,inst_30317);
} else {
if((state_val_30330 === (2))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30329__$1,(4),ch);
} else {
if((state_val_30330 === (11))){
var inst_30293 = (state_30329[(9)]);
var inst_30297 = (state_30329[(10)]);
var inst_30307 = (state_30329[(2)]);
var inst_30308 = [];
var inst_30309 = inst_30308.push(inst_30293);
var inst_30289 = inst_30308;
var inst_30290 = inst_30297;
var state_30329__$1 = (function (){var statearr_30341 = state_30329;
(statearr_30341[(11)] = inst_30309);

(statearr_30341[(12)] = inst_30307);

(statearr_30341[(7)] = inst_30289);

(statearr_30341[(8)] = inst_30290);

return statearr_30341;
})();
var statearr_30342_30372 = state_30329__$1;
(statearr_30342_30372[(2)] = null);

(statearr_30342_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (9))){
var inst_30289 = (state_30329[(7)]);
var inst_30305 = cljs.core.vec.call(null,inst_30289);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30329__$1,(11),out,inst_30305);
} else {
if((state_val_30330 === (5))){
var inst_30293 = (state_30329[(9)]);
var inst_30297 = (state_30329[(10)]);
var inst_30290 = (state_30329[(8)]);
var inst_30297__$1 = f.call(null,inst_30293);
var inst_30298 = cljs.core._EQ_.call(null,inst_30297__$1,inst_30290);
var inst_30299 = cljs.core.keyword_identical_QMARK_.call(null,inst_30290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30300 = (inst_30298) || (inst_30299);
var state_30329__$1 = (function (){var statearr_30343 = state_30329;
(statearr_30343[(10)] = inst_30297__$1);

return statearr_30343;
})();
if(cljs.core.truth_(inst_30300)){
var statearr_30344_30373 = state_30329__$1;
(statearr_30344_30373[(1)] = (8));

} else {
var statearr_30345_30374 = state_30329__$1;
(statearr_30345_30374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (14))){
var inst_30322 = (state_30329[(2)]);
var inst_30323 = cljs.core.async.close_BANG_.call(null,out);
var state_30329__$1 = (function (){var statearr_30347 = state_30329;
(statearr_30347[(13)] = inst_30322);

return statearr_30347;
})();
var statearr_30348_30375 = state_30329__$1;
(statearr_30348_30375[(2)] = inst_30323);

(statearr_30348_30375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (10))){
var inst_30312 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30349_30376 = state_30329__$1;
(statearr_30349_30376[(2)] = inst_30312);

(statearr_30349_30376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (8))){
var inst_30293 = (state_30329[(9)]);
var inst_30297 = (state_30329[(10)]);
var inst_30289 = (state_30329[(7)]);
var inst_30302 = inst_30289.push(inst_30293);
var tmp30346 = inst_30289;
var inst_30289__$1 = tmp30346;
var inst_30290 = inst_30297;
var state_30329__$1 = (function (){var statearr_30350 = state_30329;
(statearr_30350[(7)] = inst_30289__$1);

(statearr_30350[(8)] = inst_30290);

(statearr_30350[(14)] = inst_30302);

return statearr_30350;
})();
var statearr_30351_30377 = state_30329__$1;
(statearr_30351_30377[(2)] = null);

(statearr_30351_30377[(1)] = (2));


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
});})(c__27608__auto___30363,out))
;
return ((function (switch__27496__auto__,c__27608__auto___30363,out){
return (function() {
var cljs$core$async$state_machine__27497__auto__ = null;
var cljs$core$async$state_machine__27497__auto____0 = (function (){
var statearr_30355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30355[(0)] = cljs$core$async$state_machine__27497__auto__);

(statearr_30355[(1)] = (1));

return statearr_30355;
});
var cljs$core$async$state_machine__27497__auto____1 = (function (state_30329){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_30329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e30356){if((e30356 instanceof Object)){
var ex__27500__auto__ = e30356;
var statearr_30357_30378 = state_30329;
(statearr_30357_30378[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30379 = state_30329;
state_30329 = G__30379;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
cljs$core$async$state_machine__27497__auto__ = function(state_30329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27497__auto____1.call(this,state_30329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27497__auto____0;
cljs$core$async$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27497__auto____1;
return cljs$core$async$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___30363,out))
})();
var state__27610__auto__ = (function (){var statearr_30358 = f__27609__auto__.call(null);
(statearr_30358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___30363);

return statearr_30358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___30363,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1493837725688