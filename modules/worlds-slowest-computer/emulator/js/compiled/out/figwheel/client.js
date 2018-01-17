// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args32972 = [];
var len__25604__auto___32975 = arguments.length;
var i__25605__auto___32976 = (0);
while(true){
if((i__25605__auto___32976 < len__25604__auto___32975)){
args32972.push((arguments[i__25605__auto___32976]));

var G__32977 = (i__25605__auto___32976 + (1));
i__25605__auto___32976 = G__32977;
continue;
} else {
}
break;
}

var G__32974 = args32972.length;
switch (G__32974) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32972.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25611__auto__ = [];
var len__25604__auto___32980 = arguments.length;
var i__25605__auto___32981 = (0);
while(true){
if((i__25605__auto___32981 < len__25604__auto___32980)){
args__25611__auto__.push((arguments[i__25605__auto___32981]));

var G__32982 = (i__25605__auto___32981 + (1));
i__25605__auto___32981 = G__32982;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32979){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32979));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25611__auto__ = [];
var len__25604__auto___32984 = arguments.length;
var i__25605__auto___32985 = (0);
while(true){
if((i__25605__auto___32985 < len__25604__auto___32984)){
args__25611__auto__.push((arguments[i__25605__auto___32985]));

var G__32986 = (i__25605__auto___32985 + (1));
i__25605__auto___32985 = G__32986;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32983){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32983));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32987 = cljs.core._EQ_;
var expr__32988 = (function (){var or__24534__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32991){if((e32991 instanceof Error)){
var e = e32991;
return false;
} else {
throw e32991;

}
}})();
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32987.call(null,"true",expr__32988))){
return true;
} else {
if(cljs.core.truth_(pred__32987.call(null,"false",expr__32988))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32988)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32993){if((e32993 instanceof Error)){
var e = e32993;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32993;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32994){
var map__32997 = p__32994;
var map__32997__$1 = ((((!((map__32997 == null)))?((((map__32997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32997):map__32997);
var message = cljs.core.get.call(null,map__32997__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32997__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24534__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24522__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24522__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24522__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27608__auto___33159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___33159,ch){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___33159,ch){
return (function (state_33128){
var state_val_33129 = (state_33128[(1)]);
if((state_val_33129 === (7))){
var inst_33124 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33130_33160 = state_33128__$1;
(statearr_33130_33160[(2)] = inst_33124);

(statearr_33130_33160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (1))){
var state_33128__$1 = state_33128;
var statearr_33131_33161 = state_33128__$1;
(statearr_33131_33161[(2)] = null);

(statearr_33131_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (4))){
var inst_33081 = (state_33128[(7)]);
var inst_33081__$1 = (state_33128[(2)]);
var state_33128__$1 = (function (){var statearr_33132 = state_33128;
(statearr_33132[(7)] = inst_33081__$1);

return statearr_33132;
})();
if(cljs.core.truth_(inst_33081__$1)){
var statearr_33133_33162 = state_33128__$1;
(statearr_33133_33162[(1)] = (5));

} else {
var statearr_33134_33163 = state_33128__$1;
(statearr_33134_33163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (15))){
var inst_33088 = (state_33128[(8)]);
var inst_33103 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33088);
var inst_33104 = cljs.core.first.call(null,inst_33103);
var inst_33105 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33104);
var inst_33106 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_33105)].join('');
var inst_33107 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33106);
var state_33128__$1 = state_33128;
var statearr_33135_33164 = state_33128__$1;
(statearr_33135_33164[(2)] = inst_33107);

(statearr_33135_33164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (13))){
var inst_33112 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33136_33165 = state_33128__$1;
(statearr_33136_33165[(2)] = inst_33112);

(statearr_33136_33165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (6))){
var state_33128__$1 = state_33128;
var statearr_33137_33166 = state_33128__$1;
(statearr_33137_33166[(2)] = null);

(statearr_33137_33166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (17))){
var inst_33110 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33138_33167 = state_33128__$1;
(statearr_33138_33167[(2)] = inst_33110);

(statearr_33138_33167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (3))){
var inst_33126 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33128__$1,inst_33126);
} else {
if((state_val_33129 === (12))){
var inst_33087 = (state_33128[(9)]);
var inst_33101 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33087,opts);
var state_33128__$1 = state_33128;
if(cljs.core.truth_(inst_33101)){
var statearr_33139_33168 = state_33128__$1;
(statearr_33139_33168[(1)] = (15));

} else {
var statearr_33140_33169 = state_33128__$1;
(statearr_33140_33169[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (2))){
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33128__$1,(4),ch);
} else {
if((state_val_33129 === (11))){
var inst_33088 = (state_33128[(8)]);
var inst_33093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33094 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33088);
var inst_33095 = cljs.core.async.timeout.call(null,(1000));
var inst_33096 = [inst_33094,inst_33095];
var inst_33097 = (new cljs.core.PersistentVector(null,2,(5),inst_33093,inst_33096,null));
var state_33128__$1 = state_33128;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33128__$1,(14),inst_33097);
} else {
if((state_val_33129 === (9))){
var inst_33088 = (state_33128[(8)]);
var inst_33114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33115 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33088);
var inst_33116 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33115);
var inst_33117 = [cljs.core.str("Not loading: "),cljs.core.str(inst_33116)].join('');
var inst_33118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33117);
var state_33128__$1 = (function (){var statearr_33141 = state_33128;
(statearr_33141[(10)] = inst_33114);

return statearr_33141;
})();
var statearr_33142_33170 = state_33128__$1;
(statearr_33142_33170[(2)] = inst_33118);

(statearr_33142_33170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (5))){
var inst_33081 = (state_33128[(7)]);
var inst_33083 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33084 = (new cljs.core.PersistentArrayMap(null,2,inst_33083,null));
var inst_33085 = (new cljs.core.PersistentHashSet(null,inst_33084,null));
var inst_33086 = figwheel.client.focus_msgs.call(null,inst_33085,inst_33081);
var inst_33087 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33086);
var inst_33088 = cljs.core.first.call(null,inst_33086);
var inst_33089 = figwheel.client.autoload_QMARK_.call(null);
var state_33128__$1 = (function (){var statearr_33143 = state_33128;
(statearr_33143[(8)] = inst_33088);

(statearr_33143[(9)] = inst_33087);

return statearr_33143;
})();
if(cljs.core.truth_(inst_33089)){
var statearr_33144_33171 = state_33128__$1;
(statearr_33144_33171[(1)] = (8));

} else {
var statearr_33145_33172 = state_33128__$1;
(statearr_33145_33172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (14))){
var inst_33099 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33146_33173 = state_33128__$1;
(statearr_33146_33173[(2)] = inst_33099);

(statearr_33146_33173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (16))){
var state_33128__$1 = state_33128;
var statearr_33147_33174 = state_33128__$1;
(statearr_33147_33174[(2)] = null);

(statearr_33147_33174[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (10))){
var inst_33120 = (state_33128[(2)]);
var state_33128__$1 = (function (){var statearr_33148 = state_33128;
(statearr_33148[(11)] = inst_33120);

return statearr_33148;
})();
var statearr_33149_33175 = state_33128__$1;
(statearr_33149_33175[(2)] = null);

(statearr_33149_33175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (8))){
var inst_33087 = (state_33128[(9)]);
var inst_33091 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33087,opts);
var state_33128__$1 = state_33128;
if(cljs.core.truth_(inst_33091)){
var statearr_33150_33176 = state_33128__$1;
(statearr_33150_33176[(1)] = (11));

} else {
var statearr_33151_33177 = state_33128__$1;
(statearr_33151_33177[(1)] = (12));

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
});})(c__27608__auto___33159,ch))
;
return ((function (switch__27496__auto__,c__27608__auto___33159,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27497__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27497__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27497__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27497__auto____1 = (function (state_33128){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_33128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e33156){if((e33156 instanceof Object)){
var ex__27500__auto__ = e33156;
var statearr_33157_33178 = state_33128;
(statearr_33157_33178[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33179 = state_33128;
state_33128 = G__33179;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27497__auto__ = function(state_33128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27497__auto____1.call(this,state_33128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27497__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27497__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___33159,ch))
})();
var state__27610__auto__ = (function (){var statearr_33158 = f__27609__auto__.call(null);
(statearr_33158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___33159);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___33159,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33180_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33180_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33183 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33183){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e33182){if((e33182 instanceof Error)){
var e = e33182;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33183], null));
} else {
var e = e33182;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_33183))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33184){
var map__33191 = p__33184;
var map__33191__$1 = ((((!((map__33191 == null)))?((((map__33191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33191):map__33191);
var opts = map__33191__$1;
var build_id = cljs.core.get.call(null,map__33191__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33191,map__33191__$1,opts,build_id){
return (function (p__33193){
var vec__33194 = p__33193;
var map__33195 = cljs.core.nth.call(null,vec__33194,(0),null);
var map__33195__$1 = ((((!((map__33195 == null)))?((((map__33195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33195):map__33195);
var msg = map__33195__$1;
var msg_name = cljs.core.get.call(null,map__33195__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33194,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33194,map__33195,map__33195__$1,msg,msg_name,_,map__33191,map__33191__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33194,map__33195,map__33195__$1,msg,msg_name,_,map__33191,map__33191__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33191,map__33191__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33201){
var vec__33202 = p__33201;
var map__33203 = cljs.core.nth.call(null,vec__33202,(0),null);
var map__33203__$1 = ((((!((map__33203 == null)))?((((map__33203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33203):map__33203);
var msg = map__33203__$1;
var msg_name = cljs.core.get.call(null,map__33203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33202,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33205){
var map__33215 = p__33205;
var map__33215__$1 = ((((!((map__33215 == null)))?((((map__33215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33215):map__33215);
var on_compile_warning = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33215,map__33215__$1,on_compile_warning,on_compile_fail){
return (function (p__33217){
var vec__33218 = p__33217;
var map__33219 = cljs.core.nth.call(null,vec__33218,(0),null);
var map__33219__$1 = ((((!((map__33219 == null)))?((((map__33219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33219):map__33219);
var msg = map__33219__$1;
var msg_name = cljs.core.get.call(null,map__33219__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33218,(1));
var pred__33221 = cljs.core._EQ_;
var expr__33222 = msg_name;
if(cljs.core.truth_(pred__33221.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33222))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33221.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33222))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33215,map__33215__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__,msg_hist,msg_names,msg){
return (function (state_33450){
var state_val_33451 = (state_33450[(1)]);
if((state_val_33451 === (7))){
var inst_33370 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33370)){
var statearr_33452_33502 = state_33450__$1;
(statearr_33452_33502[(1)] = (8));

} else {
var statearr_33453_33503 = state_33450__$1;
(statearr_33453_33503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (20))){
var inst_33444 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33454_33504 = state_33450__$1;
(statearr_33454_33504[(2)] = inst_33444);

(statearr_33454_33504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (27))){
var inst_33440 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33455_33505 = state_33450__$1;
(statearr_33455_33505[(2)] = inst_33440);

(statearr_33455_33505[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (1))){
var inst_33363 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33363)){
var statearr_33456_33506 = state_33450__$1;
(statearr_33456_33506[(1)] = (2));

} else {
var statearr_33457_33507 = state_33450__$1;
(statearr_33457_33507[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (24))){
var inst_33442 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33458_33508 = state_33450__$1;
(statearr_33458_33508[(2)] = inst_33442);

(statearr_33458_33508[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (4))){
var inst_33448 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33450__$1,inst_33448);
} else {
if((state_val_33451 === (15))){
var inst_33446 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33459_33509 = state_33450__$1;
(statearr_33459_33509[(2)] = inst_33446);

(statearr_33459_33509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (21))){
var inst_33399 = (state_33450[(2)]);
var inst_33400 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33401 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33400);
var state_33450__$1 = (function (){var statearr_33460 = state_33450;
(statearr_33460[(7)] = inst_33399);

return statearr_33460;
})();
var statearr_33461_33510 = state_33450__$1;
(statearr_33461_33510[(2)] = inst_33401);

(statearr_33461_33510[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (31))){
var inst_33429 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33429)){
var statearr_33462_33511 = state_33450__$1;
(statearr_33462_33511[(1)] = (34));

} else {
var statearr_33463_33512 = state_33450__$1;
(statearr_33463_33512[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (32))){
var inst_33438 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33464_33513 = state_33450__$1;
(statearr_33464_33513[(2)] = inst_33438);

(statearr_33464_33513[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (33))){
var inst_33425 = (state_33450[(2)]);
var inst_33426 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33427 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33426);
var state_33450__$1 = (function (){var statearr_33465 = state_33450;
(statearr_33465[(8)] = inst_33425);

return statearr_33465;
})();
var statearr_33466_33514 = state_33450__$1;
(statearr_33466_33514[(2)] = inst_33427);

(statearr_33466_33514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (13))){
var inst_33384 = figwheel.client.heads_up.clear.call(null);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(16),inst_33384);
} else {
if((state_val_33451 === (22))){
var inst_33405 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33406 = figwheel.client.heads_up.append_warning_message.call(null,inst_33405);
var state_33450__$1 = state_33450;
var statearr_33467_33515 = state_33450__$1;
(statearr_33467_33515[(2)] = inst_33406);

(statearr_33467_33515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (36))){
var inst_33436 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33468_33516 = state_33450__$1;
(statearr_33468_33516[(2)] = inst_33436);

(statearr_33468_33516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (29))){
var inst_33416 = (state_33450[(2)]);
var inst_33417 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33418 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33417);
var state_33450__$1 = (function (){var statearr_33469 = state_33450;
(statearr_33469[(9)] = inst_33416);

return statearr_33469;
})();
var statearr_33470_33517 = state_33450__$1;
(statearr_33470_33517[(2)] = inst_33418);

(statearr_33470_33517[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (6))){
var inst_33365 = (state_33450[(10)]);
var state_33450__$1 = state_33450;
var statearr_33471_33518 = state_33450__$1;
(statearr_33471_33518[(2)] = inst_33365);

(statearr_33471_33518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (28))){
var inst_33412 = (state_33450[(2)]);
var inst_33413 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33414 = figwheel.client.heads_up.display_warning.call(null,inst_33413);
var state_33450__$1 = (function (){var statearr_33472 = state_33450;
(statearr_33472[(11)] = inst_33412);

return statearr_33472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(29),inst_33414);
} else {
if((state_val_33451 === (25))){
var inst_33410 = figwheel.client.heads_up.clear.call(null);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(28),inst_33410);
} else {
if((state_val_33451 === (34))){
var inst_33431 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(37),inst_33431);
} else {
if((state_val_33451 === (17))){
var inst_33390 = (state_33450[(2)]);
var inst_33391 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33392 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33391);
var state_33450__$1 = (function (){var statearr_33473 = state_33450;
(statearr_33473[(12)] = inst_33390);

return statearr_33473;
})();
var statearr_33474_33519 = state_33450__$1;
(statearr_33474_33519[(2)] = inst_33392);

(statearr_33474_33519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (3))){
var inst_33382 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33382)){
var statearr_33475_33520 = state_33450__$1;
(statearr_33475_33520[(1)] = (13));

} else {
var statearr_33476_33521 = state_33450__$1;
(statearr_33476_33521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (12))){
var inst_33378 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33477_33522 = state_33450__$1;
(statearr_33477_33522[(2)] = inst_33378);

(statearr_33477_33522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (2))){
var inst_33365 = (state_33450[(10)]);
var inst_33365__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33450__$1 = (function (){var statearr_33478 = state_33450;
(statearr_33478[(10)] = inst_33365__$1);

return statearr_33478;
})();
if(cljs.core.truth_(inst_33365__$1)){
var statearr_33479_33523 = state_33450__$1;
(statearr_33479_33523[(1)] = (5));

} else {
var statearr_33480_33524 = state_33450__$1;
(statearr_33480_33524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (23))){
var inst_33408 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33408)){
var statearr_33481_33525 = state_33450__$1;
(statearr_33481_33525[(1)] = (25));

} else {
var statearr_33482_33526 = state_33450__$1;
(statearr_33482_33526[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (35))){
var state_33450__$1 = state_33450;
var statearr_33483_33527 = state_33450__$1;
(statearr_33483_33527[(2)] = null);

(statearr_33483_33527[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (19))){
var inst_33403 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33403)){
var statearr_33484_33528 = state_33450__$1;
(statearr_33484_33528[(1)] = (22));

} else {
var statearr_33485_33529 = state_33450__$1;
(statearr_33485_33529[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (11))){
var inst_33374 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33486_33530 = state_33450__$1;
(statearr_33486_33530[(2)] = inst_33374);

(statearr_33486_33530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (9))){
var inst_33376 = figwheel.client.heads_up.clear.call(null);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(12),inst_33376);
} else {
if((state_val_33451 === (5))){
var inst_33367 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33450__$1 = state_33450;
var statearr_33487_33531 = state_33450__$1;
(statearr_33487_33531[(2)] = inst_33367);

(statearr_33487_33531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (14))){
var inst_33394 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33394)){
var statearr_33488_33532 = state_33450__$1;
(statearr_33488_33532[(1)] = (18));

} else {
var statearr_33489_33533 = state_33450__$1;
(statearr_33489_33533[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (26))){
var inst_33420 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33420)){
var statearr_33490_33534 = state_33450__$1;
(statearr_33490_33534[(1)] = (30));

} else {
var statearr_33491_33535 = state_33450__$1;
(statearr_33491_33535[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (16))){
var inst_33386 = (state_33450[(2)]);
var inst_33387 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33388 = figwheel.client.heads_up.display_exception.call(null,inst_33387);
var state_33450__$1 = (function (){var statearr_33492 = state_33450;
(statearr_33492[(13)] = inst_33386);

return statearr_33492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(17),inst_33388);
} else {
if((state_val_33451 === (30))){
var inst_33422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33423 = figwheel.client.heads_up.display_warning.call(null,inst_33422);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(33),inst_33423);
} else {
if((state_val_33451 === (10))){
var inst_33380 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33493_33536 = state_33450__$1;
(statearr_33493_33536[(2)] = inst_33380);

(statearr_33493_33536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (18))){
var inst_33396 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33397 = figwheel.client.heads_up.display_exception.call(null,inst_33396);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(21),inst_33397);
} else {
if((state_val_33451 === (37))){
var inst_33433 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33494_33537 = state_33450__$1;
(statearr_33494_33537[(2)] = inst_33433);

(statearr_33494_33537[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (8))){
var inst_33372 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33450__$1,(11),inst_33372);
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
});})(c__27608__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27496__auto__,c__27608__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto____0 = (function (){
var statearr_33498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33498[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto__);

(statearr_33498[(1)] = (1));

return statearr_33498;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto____1 = (function (state_33450){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_33450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e33499){if((e33499 instanceof Object)){
var ex__27500__auto__ = e33499;
var statearr_33500_33538 = state_33450;
(statearr_33500_33538[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33539 = state_33450;
state_33450 = G__33539;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto__ = function(state_33450){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto____1.call(this,state_33450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__,msg_hist,msg_names,msg))
})();
var state__27610__auto__ = (function (){var statearr_33501 = f__27609__auto__.call(null);
(statearr_33501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_33501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__,msg_hist,msg_names,msg))
);

return c__27608__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27608__auto___33602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___33602,ch){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___33602,ch){
return (function (state_33585){
var state_val_33586 = (state_33585[(1)]);
if((state_val_33586 === (1))){
var state_33585__$1 = state_33585;
var statearr_33587_33603 = state_33585__$1;
(statearr_33587_33603[(2)] = null);

(statearr_33587_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (2))){
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33585__$1,(4),ch);
} else {
if((state_val_33586 === (3))){
var inst_33583 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33585__$1,inst_33583);
} else {
if((state_val_33586 === (4))){
var inst_33573 = (state_33585[(7)]);
var inst_33573__$1 = (state_33585[(2)]);
var state_33585__$1 = (function (){var statearr_33588 = state_33585;
(statearr_33588[(7)] = inst_33573__$1);

return statearr_33588;
})();
if(cljs.core.truth_(inst_33573__$1)){
var statearr_33589_33604 = state_33585__$1;
(statearr_33589_33604[(1)] = (5));

} else {
var statearr_33590_33605 = state_33585__$1;
(statearr_33590_33605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (5))){
var inst_33573 = (state_33585[(7)]);
var inst_33575 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33573);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33585__$1,(8),inst_33575);
} else {
if((state_val_33586 === (6))){
var state_33585__$1 = state_33585;
var statearr_33591_33606 = state_33585__$1;
(statearr_33591_33606[(2)] = null);

(statearr_33591_33606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (7))){
var inst_33581 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33592_33607 = state_33585__$1;
(statearr_33592_33607[(2)] = inst_33581);

(statearr_33592_33607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (8))){
var inst_33577 = (state_33585[(2)]);
var state_33585__$1 = (function (){var statearr_33593 = state_33585;
(statearr_33593[(8)] = inst_33577);

return statearr_33593;
})();
var statearr_33594_33608 = state_33585__$1;
(statearr_33594_33608[(2)] = null);

(statearr_33594_33608[(1)] = (2));


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
});})(c__27608__auto___33602,ch))
;
return ((function (switch__27496__auto__,c__27608__auto___33602,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27497__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27497__auto____0 = (function (){
var statearr_33598 = [null,null,null,null,null,null,null,null,null];
(statearr_33598[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27497__auto__);

(statearr_33598[(1)] = (1));

return statearr_33598;
});
var figwheel$client$heads_up_plugin_$_state_machine__27497__auto____1 = (function (state_33585){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_33585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e33599){if((e33599 instanceof Object)){
var ex__27500__auto__ = e33599;
var statearr_33600_33609 = state_33585;
(statearr_33600_33609[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33610 = state_33585;
state_33585 = G__33610;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27497__auto__ = function(state_33585){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27497__auto____1.call(this,state_33585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27497__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27497__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___33602,ch))
})();
var state__27610__auto__ = (function (){var statearr_33601 = f__27609__auto__.call(null);
(statearr_33601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___33602);

return statearr_33601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___33602,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__){
return (function (state_33631){
var state_val_33632 = (state_33631[(1)]);
if((state_val_33632 === (1))){
var inst_33626 = cljs.core.async.timeout.call(null,(3000));
var state_33631__$1 = state_33631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33631__$1,(2),inst_33626);
} else {
if((state_val_33632 === (2))){
var inst_33628 = (state_33631[(2)]);
var inst_33629 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33631__$1 = (function (){var statearr_33633 = state_33631;
(statearr_33633[(7)] = inst_33628);

return statearr_33633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33631__$1,inst_33629);
} else {
return null;
}
}
});})(c__27608__auto__))
;
return ((function (switch__27496__auto__,c__27608__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27497__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27497__auto____0 = (function (){
var statearr_33637 = [null,null,null,null,null,null,null,null];
(statearr_33637[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27497__auto__);

(statearr_33637[(1)] = (1));

return statearr_33637;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27497__auto____1 = (function (state_33631){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_33631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e33638){if((e33638 instanceof Object)){
var ex__27500__auto__ = e33638;
var statearr_33639_33641 = state_33631;
(statearr_33639_33641[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33642 = state_33631;
state_33631 = G__33642;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27497__auto__ = function(state_33631){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27497__auto____1.call(this,state_33631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27497__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27497__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__))
})();
var state__27610__auto__ = (function (){var statearr_33640 = f__27609__auto__.call(null);
(statearr_33640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_33640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__))
);

return c__27608__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33665){
var state_val_33666 = (state_33665[(1)]);
if((state_val_33666 === (1))){
var inst_33659 = cljs.core.async.timeout.call(null,(2000));
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33665__$1,(2),inst_33659);
} else {
if((state_val_33666 === (2))){
var inst_33661 = (state_33665[(2)]);
var inst_33662 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_33663 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33662);
var state_33665__$1 = (function (){var statearr_33667 = state_33665;
(statearr_33667[(7)] = inst_33661);

return statearr_33667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33665__$1,inst_33663);
} else {
return null;
}
}
});})(c__27608__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27496__auto__,c__27608__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto____0 = (function (){
var statearr_33671 = [null,null,null,null,null,null,null,null];
(statearr_33671[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto__);

(statearr_33671[(1)] = (1));

return statearr_33671;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto____1 = (function (state_33665){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_33665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e33672){if((e33672 instanceof Object)){
var ex__27500__auto__ = e33672;
var statearr_33673_33675 = state_33665;
(statearr_33673_33675[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33676 = state_33665;
state_33665 = G__33676;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto__ = function(state_33665){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto____1.call(this,state_33665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27610__auto__ = (function (){var statearr_33674 = f__27609__auto__.call(null);
(statearr_33674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__,figwheel_version,temp__4657__auto__))
);

return c__27608__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33677){
var map__33681 = p__33677;
var map__33681__$1 = ((((!((map__33681 == null)))?((((map__33681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33681):map__33681);
var file = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33683 = "";
var G__33683__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__33683),cljs.core.str("file "),cljs.core.str(file)].join(''):G__33683);
var G__33683__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__33683__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__33683__$1);
if(cljs.core.truth_((function (){var and__24522__auto__ = line;
if(cljs.core.truth_(and__24522__auto__)){
return column;
} else {
return and__24522__auto__;
}
})())){
return [cljs.core.str(G__33683__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__33683__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33684){
var map__33691 = p__33684;
var map__33691__$1 = ((((!((map__33691 == null)))?((((map__33691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33691):map__33691);
var ed = map__33691__$1;
var formatted_exception = cljs.core.get.call(null,map__33691__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33691__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33691__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33693_33697 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33694_33698 = null;
var count__33695_33699 = (0);
var i__33696_33700 = (0);
while(true){
if((i__33696_33700 < count__33695_33699)){
var msg_33701 = cljs.core._nth.call(null,chunk__33694_33698,i__33696_33700);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33701);

var G__33702 = seq__33693_33697;
var G__33703 = chunk__33694_33698;
var G__33704 = count__33695_33699;
var G__33705 = (i__33696_33700 + (1));
seq__33693_33697 = G__33702;
chunk__33694_33698 = G__33703;
count__33695_33699 = G__33704;
i__33696_33700 = G__33705;
continue;
} else {
var temp__4657__auto___33706 = cljs.core.seq.call(null,seq__33693_33697);
if(temp__4657__auto___33706){
var seq__33693_33707__$1 = temp__4657__auto___33706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33693_33707__$1)){
var c__25345__auto___33708 = cljs.core.chunk_first.call(null,seq__33693_33707__$1);
var G__33709 = cljs.core.chunk_rest.call(null,seq__33693_33707__$1);
var G__33710 = c__25345__auto___33708;
var G__33711 = cljs.core.count.call(null,c__25345__auto___33708);
var G__33712 = (0);
seq__33693_33697 = G__33709;
chunk__33694_33698 = G__33710;
count__33695_33699 = G__33711;
i__33696_33700 = G__33712;
continue;
} else {
var msg_33713 = cljs.core.first.call(null,seq__33693_33707__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33713);

var G__33714 = cljs.core.next.call(null,seq__33693_33707__$1);
var G__33715 = null;
var G__33716 = (0);
var G__33717 = (0);
seq__33693_33697 = G__33714;
chunk__33694_33698 = G__33715;
count__33695_33699 = G__33716;
i__33696_33700 = G__33717;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33718){
var map__33721 = p__33718;
var map__33721__$1 = ((((!((map__33721 == null)))?((((map__33721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721):map__33721);
var w = map__33721__$1;
var message = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24522__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24522__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24522__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33729 = cljs.core.seq.call(null,plugins);
var chunk__33730 = null;
var count__33731 = (0);
var i__33732 = (0);
while(true){
if((i__33732 < count__33731)){
var vec__33733 = cljs.core._nth.call(null,chunk__33730,i__33732);
var k = cljs.core.nth.call(null,vec__33733,(0),null);
var plugin = cljs.core.nth.call(null,vec__33733,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33735 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33729,chunk__33730,count__33731,i__33732,pl_33735,vec__33733,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33735.call(null,msg_hist);
});})(seq__33729,chunk__33730,count__33731,i__33732,pl_33735,vec__33733,k,plugin))
);
} else {
}

var G__33736 = seq__33729;
var G__33737 = chunk__33730;
var G__33738 = count__33731;
var G__33739 = (i__33732 + (1));
seq__33729 = G__33736;
chunk__33730 = G__33737;
count__33731 = G__33738;
i__33732 = G__33739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33729);
if(temp__4657__auto__){
var seq__33729__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33729__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__33729__$1);
var G__33740 = cljs.core.chunk_rest.call(null,seq__33729__$1);
var G__33741 = c__25345__auto__;
var G__33742 = cljs.core.count.call(null,c__25345__auto__);
var G__33743 = (0);
seq__33729 = G__33740;
chunk__33730 = G__33741;
count__33731 = G__33742;
i__33732 = G__33743;
continue;
} else {
var vec__33734 = cljs.core.first.call(null,seq__33729__$1);
var k = cljs.core.nth.call(null,vec__33734,(0),null);
var plugin = cljs.core.nth.call(null,vec__33734,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33744 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33729,chunk__33730,count__33731,i__33732,pl_33744,vec__33734,k,plugin,seq__33729__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33744.call(null,msg_hist);
});})(seq__33729,chunk__33730,count__33731,i__33732,pl_33744,vec__33734,k,plugin,seq__33729__$1,temp__4657__auto__))
);
} else {
}

var G__33745 = cljs.core.next.call(null,seq__33729__$1);
var G__33746 = null;
var G__33747 = (0);
var G__33748 = (0);
seq__33729 = G__33745;
chunk__33730 = G__33746;
count__33731 = G__33747;
i__33732 = G__33748;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args33749 = [];
var len__25604__auto___33756 = arguments.length;
var i__25605__auto___33757 = (0);
while(true){
if((i__25605__auto___33757 < len__25604__auto___33756)){
args33749.push((arguments[i__25605__auto___33757]));

var G__33758 = (i__25605__auto___33757 + (1));
i__25605__auto___33757 = G__33758;
continue;
} else {
}
break;
}

var G__33751 = args33749.length;
switch (G__33751) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33749.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33752_33760 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33753_33761 = null;
var count__33754_33762 = (0);
var i__33755_33763 = (0);
while(true){
if((i__33755_33763 < count__33754_33762)){
var msg_33764 = cljs.core._nth.call(null,chunk__33753_33761,i__33755_33763);
figwheel.client.socket.handle_incoming_message.call(null,msg_33764);

var G__33765 = seq__33752_33760;
var G__33766 = chunk__33753_33761;
var G__33767 = count__33754_33762;
var G__33768 = (i__33755_33763 + (1));
seq__33752_33760 = G__33765;
chunk__33753_33761 = G__33766;
count__33754_33762 = G__33767;
i__33755_33763 = G__33768;
continue;
} else {
var temp__4657__auto___33769 = cljs.core.seq.call(null,seq__33752_33760);
if(temp__4657__auto___33769){
var seq__33752_33770__$1 = temp__4657__auto___33769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33752_33770__$1)){
var c__25345__auto___33771 = cljs.core.chunk_first.call(null,seq__33752_33770__$1);
var G__33772 = cljs.core.chunk_rest.call(null,seq__33752_33770__$1);
var G__33773 = c__25345__auto___33771;
var G__33774 = cljs.core.count.call(null,c__25345__auto___33771);
var G__33775 = (0);
seq__33752_33760 = G__33772;
chunk__33753_33761 = G__33773;
count__33754_33762 = G__33774;
i__33755_33763 = G__33775;
continue;
} else {
var msg_33776 = cljs.core.first.call(null,seq__33752_33770__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33776);

var G__33777 = cljs.core.next.call(null,seq__33752_33770__$1);
var G__33778 = null;
var G__33779 = (0);
var G__33780 = (0);
seq__33752_33760 = G__33777;
chunk__33753_33761 = G__33778;
count__33754_33762 = G__33779;
i__33755_33763 = G__33780;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25611__auto__ = [];
var len__25604__auto___33785 = arguments.length;
var i__25605__auto___33786 = (0);
while(true){
if((i__25605__auto___33786 < len__25604__auto___33785)){
args__25611__auto__.push((arguments[i__25605__auto___33786]));

var G__33787 = (i__25605__auto___33786 + (1));
i__25605__auto___33786 = G__33787;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33782){
var map__33783 = p__33782;
var map__33783__$1 = ((((!((map__33783 == null)))?((((map__33783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33783):map__33783);
var opts = map__33783__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33781){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33781));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33789){if((e33789 instanceof Error)){
var e = e33789;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33789;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33793){
var map__33794 = p__33793;
var map__33794__$1 = ((((!((map__33794 == null)))?((((map__33794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33794):map__33794);
var msg_name = cljs.core.get.call(null,map__33794__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1493837729342