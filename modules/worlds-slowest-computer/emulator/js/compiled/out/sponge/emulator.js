// Compiled by ClojureScript 1.8.51 {}
goog.provide('sponge.emulator');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require('cljs.reader');
sponge.emulator.get_cell = (function sponge$emulator$get_cell(ctx,x){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ctx),x);
});
sponge.emulator.intcast = (function sponge$emulator$intcast(v){
if(cljs.core._EQ_.call(null,v,true)){
return (1);
} else {
if(cljs.core._EQ_.call(null,v,false)){
return (0);
} else {
return v;

}
}
});
sponge.emulator.binop = (function sponge$emulator$binop(op){
return (function (ctx,a,b,s){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),s], null),sponge.emulator.intcast.call(null,op.call(null,sponge.emulator.get_cell.call(null,ctx,a),sponge.emulator.get_cell.call(null,ctx,b)))),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
});
});
sponge.emulator.ops = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"\u00F7","\u00F7",-1974998442),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"jump","jump",-971319427)],[(function (ctx,x,y){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sponge.emulator.get_cell.call(null,ctx,x),sponge.emulator.get_cell.call(null,ctx,y)], null)], null),"#"),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}),sponge.emulator.binop.call(null,cljs.core._STAR_),(function (ctx,a,b){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),a], null),sponge.emulator.get_cell.call(null,ctx,b)),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}),sponge.emulator.binop.call(null,cljs.core._GT_),sponge.emulator.binop.call(null,cljs.core._),sponge.emulator.binop.call(null,cljs.core._PLUS_),sponge.emulator.binop.call(null,cljs.core._SLASH_),(function (ctx,n,v){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),n], null),v),new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}),sponge.emulator.binop.call(null,cljs.core._LT_),(function (ctx,t,l){
if(cljs.core._EQ_.call(null,(1),sponge.emulator.get_cell.call(null,ctx,t))){
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"ip","ip",58378915),sponge.emulator.get_cell.call(null,ctx,l));
} else {
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
}
})]);
sponge.emulator.parse = (function sponge$emulator$parse(src){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"instr","instr",1938970239),src,new cljs.core.Keyword(null,"plot","plot",2086832225),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ip","ip",58378915),(0),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY], null);
});
sponge.emulator.parse_string = (function sponge$emulator$parse_string(s){
return sponge.emulator.parse.call(null,cljs.reader.read_string.call(null,s));
});
sponge.emulator.parse_syntax = (function sponge$emulator$parse_syntax(s){
return sponge.emulator.parse.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__32965_SHARP_){
var vec__32967 = cljs.reader.read_string.call(null,[cljs.core.str("["),cljs.core.str(p1__32965_SHARP_),cljs.core.str("]")].join(''));
var op = cljs.core.nth.call(null,vec__32967,(0),null);
var args = cljs.core.nthnext.call(null,vec__32967,(1));
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.keyword.call(null,op),args);
}),clojure.string.split.call(null,s,"\n"))));
});
sponge.emulator.step = (function sponge$emulator$step(ctx){
var temp__4657__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"instr","instr",1938970239)),ctx.call(null,new cljs.core.Keyword(null,"ip","ip",58378915)));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32969 = temp__4657__auto__;
var op = cljs.core.nth.call(null,vec__32969,(0),null);
var args = cljs.core.nthnext.call(null,vec__32969,(1));
if(cljs.core.truth_(sponge.emulator.ops.call(null,op))){
return cljs.core.apply.call(null,sponge.emulator.ops.call(null,op),ctx,args);
} else {
return null;
}
} else {
return null;
}
});
sponge.emulator.run = (function sponge$emulator$run(ctx){
return cljs.core.take.call(null,(200),cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,sponge.emulator.step,ctx)));
});
sponge.emulator.screen_text = (function sponge$emulator$screen_text(ctx){
if(cljs.core.truth_(ctx)){
var sb = (new goog.string.StringBuffer());
var seq__32982_32994 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__32983_32995 = null;
var count__32984_32996 = (0);
var i__32985_32997 = (0);
while(true){
if((i__32985_32997 < count__32984_32996)){
var y_32998 = cljs.core._nth.call(null,chunk__32983_32995,i__32985_32997);
var seq__32986_32999 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__32987_33000 = null;
var count__32988_33001 = (0);
var i__32989_33002 = (0);
while(true){
if((i__32989_33002 < count__32988_33001)){
var x_33003 = cljs.core._nth.call(null,chunk__32987_33000,i__32989_33002);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33003,y_32998], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__33004 = seq__32986_32999;
var G__33005 = chunk__32987_33000;
var G__33006 = count__32988_33001;
var G__33007 = (i__32989_33002 + (1));
seq__32986_32999 = G__33004;
chunk__32987_33000 = G__33005;
count__32988_33001 = G__33006;
i__32989_33002 = G__33007;
continue;
} else {
var temp__4657__auto___33008 = cljs.core.seq.call(null,seq__32986_32999);
if(temp__4657__auto___33008){
var seq__32986_33009__$1 = temp__4657__auto___33008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32986_33009__$1)){
var c__25345__auto___33010 = cljs.core.chunk_first.call(null,seq__32986_33009__$1);
var G__33011 = cljs.core.chunk_rest.call(null,seq__32986_33009__$1);
var G__33012 = c__25345__auto___33010;
var G__33013 = cljs.core.count.call(null,c__25345__auto___33010);
var G__33014 = (0);
seq__32986_32999 = G__33011;
chunk__32987_33000 = G__33012;
count__32988_33001 = G__33013;
i__32989_33002 = G__33014;
continue;
} else {
var x_33015 = cljs.core.first.call(null,seq__32986_33009__$1);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33015,y_32998], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__33016 = cljs.core.next.call(null,seq__32986_33009__$1);
var G__33017 = null;
var G__33018 = (0);
var G__33019 = (0);
seq__32986_32999 = G__33016;
chunk__32987_33000 = G__33017;
count__32988_33001 = G__33018;
i__32989_33002 = G__33019;
continue;
}
} else {
}
}
break;
}

sb.append("\n");

var G__33020 = seq__32982_32994;
var G__33021 = chunk__32983_32995;
var G__33022 = count__32984_32996;
var G__33023 = (i__32985_32997 + (1));
seq__32982_32994 = G__33020;
chunk__32983_32995 = G__33021;
count__32984_32996 = G__33022;
i__32985_32997 = G__33023;
continue;
} else {
var temp__4657__auto___33024 = cljs.core.seq.call(null,seq__32982_32994);
if(temp__4657__auto___33024){
var seq__32982_33025__$1 = temp__4657__auto___33024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32982_33025__$1)){
var c__25345__auto___33026 = cljs.core.chunk_first.call(null,seq__32982_33025__$1);
var G__33027 = cljs.core.chunk_rest.call(null,seq__32982_33025__$1);
var G__33028 = c__25345__auto___33026;
var G__33029 = cljs.core.count.call(null,c__25345__auto___33026);
var G__33030 = (0);
seq__32982_32994 = G__33027;
chunk__32983_32995 = G__33028;
count__32984_32996 = G__33029;
i__32985_32997 = G__33030;
continue;
} else {
var y_33031 = cljs.core.first.call(null,seq__32982_33025__$1);
var seq__32990_33032 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__32991_33033 = null;
var count__32992_33034 = (0);
var i__32993_33035 = (0);
while(true){
if((i__32993_33035 < count__32992_33034)){
var x_33036 = cljs.core._nth.call(null,chunk__32991_33033,i__32993_33035);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33036,y_33031], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__33037 = seq__32990_33032;
var G__33038 = chunk__32991_33033;
var G__33039 = count__32992_33034;
var G__33040 = (i__32993_33035 + (1));
seq__32990_33032 = G__33037;
chunk__32991_33033 = G__33038;
count__32992_33034 = G__33039;
i__32993_33035 = G__33040;
continue;
} else {
var temp__4657__auto___33041__$1 = cljs.core.seq.call(null,seq__32990_33032);
if(temp__4657__auto___33041__$1){
var seq__32990_33042__$1 = temp__4657__auto___33041__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32990_33042__$1)){
var c__25345__auto___33043 = cljs.core.chunk_first.call(null,seq__32990_33042__$1);
var G__33044 = cljs.core.chunk_rest.call(null,seq__32990_33042__$1);
var G__33045 = c__25345__auto___33043;
var G__33046 = cljs.core.count.call(null,c__25345__auto___33043);
var G__33047 = (0);
seq__32990_33032 = G__33044;
chunk__32991_33033 = G__33045;
count__32992_33034 = G__33046;
i__32993_33035 = G__33047;
continue;
} else {
var x_33048 = cljs.core.first.call(null,seq__32990_33042__$1);
sb.append((function (){var or__24534__auto__ = cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33048,y_33031], null));
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return " ";
}
})());

var G__33049 = cljs.core.next.call(null,seq__32990_33042__$1);
var G__33050 = null;
var G__33051 = (0);
var G__33052 = (0);
seq__32990_33032 = G__33049;
chunk__32991_33033 = G__33050;
count__32992_33034 = G__33051;
i__32993_33035 = G__33052;
continue;
}
} else {
}
}
break;
}

sb.append("\n");

var G__33053 = cljs.core.next.call(null,seq__32982_33025__$1);
var G__33054 = null;
var G__33055 = (0);
var G__33056 = (0);
seq__32982_32994 = G__33053;
chunk__32983_32995 = G__33054;
count__32984_32996 = G__33055;
i__32985_32997 = G__33056;
continue;
}
} else {
}
}
break;
}

return sb.toString();
} else {
return null;
}
});
sponge.emulator.print__STAR_ip = (function sponge$emulator$print__STAR_ip(ctx){
cljs.core.println.call(null,[cljs.core.str(ctx.call(null,new cljs.core.Keyword(null,"ip","ip",58378915))),cljs.core.str(" : "),cljs.core.str(cljs.core.get.call(null,ctx.call(null,new cljs.core.Keyword(null,"instr","instr",1938970239)),ctx.call(null,new cljs.core.Keyword(null,"ip","ip",58378915))))].join(''));

return ctx;
});
sponge.emulator.print_state = (function sponge$emulator$print_state(ctx){
cljs.core.println.call(null,ctx.call(null,new cljs.core.Keyword(null,"state","state",-1988618099)));

return ctx;
});
sponge.emulator.slurp = (function sponge$emulator$slurp(var_args){
var args__25611__auto__ = [];
var len__25604__auto___33058 = arguments.length;
var i__25605__auto___33059 = (0);
while(true){
if((i__25605__auto___33059 < len__25604__auto___33058)){
args__25611__auto__.push((arguments[i__25605__auto___33059]));

var G__33060 = (i__25605__auto___33059 + (1));
i__25605__auto___33059 = G__33060;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return args;
});

sponge.emulator.slurp.cljs$lang$maxFixedArity = (0);

sponge.emulator.slurp.cljs$lang$applyTo = (function (seq33057){
return sponge.emulator.slurp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33057));
});
sponge.emulator.template = (function sponge$emulator$template(named){
return document.querySelector([cljs.core.str("template[id='"),cljs.core.str(named),cljs.core.str("'")].join('')).innerHTML;
});
sponge.emulator.instr__GT_svg = (function sponge$emulator$instr__GT_svg(p__33061){
var vec__33063 = p__33061;
var op = cljs.core.nth.call(null,vec__33063,(0),null);
var args = cljs.core.nthnext.call(null,vec__33063,(1));
var argmap = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,"abcdefg",args));
var template = sponge.emulator.template.call(null,cljs.core.name.call(null,op));
return cljs.core.reduce_kv.call(null,((function (argmap,template,vec__33063,op,args){
return (function (svg,placeholder,actual){
return clojure.string.replace.call(null,svg,[cljs.core.str("$"),cljs.core.str(placeholder)].join(''),[cljs.core.str(actual)].join(''));
});})(argmap,template,vec__33063,op,args))
,template,argmap);
});
sponge.emulator.printable = (function sponge$emulator$printable(program){
return [cljs.core.str("<html><head></head><body>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map_indexed.call(null,(function (i,doc){
return clojure.string.replace.call(null,doc,"$n",[cljs.core.str(i)].join(''));
}),cljs.core.map.call(null,sponge.emulator.instr__GT_svg,new cljs.core.Keyword(null,"instr","instr",1938970239).cljs$core$IFn$_invoke$arity$1(program))))),cljs.core.str("</body></html>")].join('');
});

//# sourceMappingURL=emulator.js.map?rel=1516224635413