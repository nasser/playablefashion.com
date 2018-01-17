// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31470_31484 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31471_31485 = null;
var count__31472_31486 = (0);
var i__31473_31487 = (0);
while(true){
if((i__31473_31487 < count__31472_31486)){
var f_31488 = cljs.core._nth.call(null,chunk__31471_31485,i__31473_31487);
cljs.core.println.call(null,"  ",f_31488);

var G__31489 = seq__31470_31484;
var G__31490 = chunk__31471_31485;
var G__31491 = count__31472_31486;
var G__31492 = (i__31473_31487 + (1));
seq__31470_31484 = G__31489;
chunk__31471_31485 = G__31490;
count__31472_31486 = G__31491;
i__31473_31487 = G__31492;
continue;
} else {
var temp__4657__auto___31493 = cljs.core.seq.call(null,seq__31470_31484);
if(temp__4657__auto___31493){
var seq__31470_31494__$1 = temp__4657__auto___31493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31470_31494__$1)){
var c__25345__auto___31495 = cljs.core.chunk_first.call(null,seq__31470_31494__$1);
var G__31496 = cljs.core.chunk_rest.call(null,seq__31470_31494__$1);
var G__31497 = c__25345__auto___31495;
var G__31498 = cljs.core.count.call(null,c__25345__auto___31495);
var G__31499 = (0);
seq__31470_31484 = G__31496;
chunk__31471_31485 = G__31497;
count__31472_31486 = G__31498;
i__31473_31487 = G__31499;
continue;
} else {
var f_31500 = cljs.core.first.call(null,seq__31470_31494__$1);
cljs.core.println.call(null,"  ",f_31500);

var G__31501 = cljs.core.next.call(null,seq__31470_31494__$1);
var G__31502 = null;
var G__31503 = (0);
var G__31504 = (0);
seq__31470_31484 = G__31501;
chunk__31471_31485 = G__31502;
count__31472_31486 = G__31503;
i__31473_31487 = G__31504;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31505 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24534__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31505);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31505)))?cljs.core.second.call(null,arglists_31505):arglists_31505));
}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31474 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31475 = null;
var count__31476 = (0);
var i__31477 = (0);
while(true){
if((i__31477 < count__31476)){
var vec__31478 = cljs.core._nth.call(null,chunk__31475,i__31477);
var name = cljs.core.nth.call(null,vec__31478,(0),null);
var map__31479 = cljs.core.nth.call(null,vec__31478,(1),null);
var map__31479__$1 = ((((!((map__31479 == null)))?((((map__31479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31479):map__31479);
var doc = cljs.core.get.call(null,map__31479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31506 = seq__31474;
var G__31507 = chunk__31475;
var G__31508 = count__31476;
var G__31509 = (i__31477 + (1));
seq__31474 = G__31506;
chunk__31475 = G__31507;
count__31476 = G__31508;
i__31477 = G__31509;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31474);
if(temp__4657__auto__){
var seq__31474__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31474__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__31474__$1);
var G__31510 = cljs.core.chunk_rest.call(null,seq__31474__$1);
var G__31511 = c__25345__auto__;
var G__31512 = cljs.core.count.call(null,c__25345__auto__);
var G__31513 = (0);
seq__31474 = G__31510;
chunk__31475 = G__31511;
count__31476 = G__31512;
i__31477 = G__31513;
continue;
} else {
var vec__31481 = cljs.core.first.call(null,seq__31474__$1);
var name = cljs.core.nth.call(null,vec__31481,(0),null);
var map__31482 = cljs.core.nth.call(null,vec__31481,(1),null);
var map__31482__$1 = ((((!((map__31482 == null)))?((((map__31482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31482):map__31482);
var doc = cljs.core.get.call(null,map__31482__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31482__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31514 = cljs.core.next.call(null,seq__31474__$1);
var G__31515 = null;
var G__31516 = (0);
var G__31517 = (0);
seq__31474 = G__31514;
chunk__31475 = G__31515;
count__31476 = G__31516;
i__31477 = G__31517;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1493837726465