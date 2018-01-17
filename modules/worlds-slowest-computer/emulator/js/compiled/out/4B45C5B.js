goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('sponge.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__35340__delegate = function (x){
if(cljs.core.truth_(sponge.core.reload)){
return cljs.core.apply.call(null,sponge.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sponge.core/reload' is missing");
}
};
var G__35340 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__35341__i = 0, G__35341__a = new Array(arguments.length -  0);
while (G__35341__i < G__35341__a.length) {G__35341__a[G__35341__i] = arguments[G__35341__i + 0]; ++G__35341__i;}
  x = new cljs.core.IndexedSeq(G__35341__a,0);
} 
return G__35340__delegate.call(this,x);};
G__35340.cljs$lang$maxFixedArity = 0;
G__35340.cljs$lang$applyTo = (function (arglist__35342){
var x = cljs.core.seq(arglist__35342);
return G__35340__delegate(x);
});
G__35340.cljs$core$IFn$_invoke$arity$variadic = G__35340__delegate;
return G__35340;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
