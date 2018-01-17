// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__25759__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25760__i = 0, G__25760__a = new Array(arguments.length -  0);
while (G__25760__i < G__25760__a.length) {G__25760__a[G__25760__i] = arguments[G__25760__i + 0]; ++G__25760__i;}
  args = new cljs.core.IndexedSeq(G__25760__a,0);
} 
return G__25759__delegate.call(this,args);};
G__25759.cljs$lang$maxFixedArity = 0;
G__25759.cljs$lang$applyTo = (function (arglist__25761){
var args = cljs.core.seq(arglist__25761);
return G__25759__delegate(args);
});
G__25759.cljs$core$IFn$_invoke$arity$variadic = G__25759__delegate;
return G__25759;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25762__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25763__i = 0, G__25763__a = new Array(arguments.length -  0);
while (G__25763__i < G__25763__a.length) {G__25763__a[G__25763__i] = arguments[G__25763__i + 0]; ++G__25763__i;}
  args = new cljs.core.IndexedSeq(G__25763__a,0);
} 
return G__25762__delegate.call(this,args);};
G__25762.cljs$lang$maxFixedArity = 0;
G__25762.cljs$lang$applyTo = (function (arglist__25764){
var args = cljs.core.seq(arglist__25764);
return G__25762__delegate(args);
});
G__25762.cljs$core$IFn$_invoke$arity$variadic = G__25762__delegate;
return G__25762;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1493837721704