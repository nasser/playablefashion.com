// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24534__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24534__auto__){
return or__24534__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24534__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30441_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30441_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30446 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30447 = null;
var count__30448 = (0);
var i__30449 = (0);
while(true){
if((i__30449 < count__30448)){
var n = cljs.core._nth.call(null,chunk__30447,i__30449);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30450 = seq__30446;
var G__30451 = chunk__30447;
var G__30452 = count__30448;
var G__30453 = (i__30449 + (1));
seq__30446 = G__30450;
chunk__30447 = G__30451;
count__30448 = G__30452;
i__30449 = G__30453;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30446);
if(temp__4657__auto__){
var seq__30446__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30446__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__30446__$1);
var G__30454 = cljs.core.chunk_rest.call(null,seq__30446__$1);
var G__30455 = c__25345__auto__;
var G__30456 = cljs.core.count.call(null,c__25345__auto__);
var G__30457 = (0);
seq__30446 = G__30454;
chunk__30447 = G__30455;
count__30448 = G__30456;
i__30449 = G__30457;
continue;
} else {
var n = cljs.core.first.call(null,seq__30446__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30458 = cljs.core.next.call(null,seq__30446__$1);
var G__30459 = null;
var G__30460 = (0);
var G__30461 = (0);
seq__30446 = G__30458;
chunk__30447 = G__30459;
count__30448 = G__30460;
i__30449 = G__30461;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30500_30507 = cljs.core.seq.call(null,deps);
var chunk__30501_30508 = null;
var count__30502_30509 = (0);
var i__30503_30510 = (0);
while(true){
if((i__30503_30510 < count__30502_30509)){
var dep_30511 = cljs.core._nth.call(null,chunk__30501_30508,i__30503_30510);
topo_sort_helper_STAR_.call(null,dep_30511,(depth + (1)),state);

var G__30512 = seq__30500_30507;
var G__30513 = chunk__30501_30508;
var G__30514 = count__30502_30509;
var G__30515 = (i__30503_30510 + (1));
seq__30500_30507 = G__30512;
chunk__30501_30508 = G__30513;
count__30502_30509 = G__30514;
i__30503_30510 = G__30515;
continue;
} else {
var temp__4657__auto___30516 = cljs.core.seq.call(null,seq__30500_30507);
if(temp__4657__auto___30516){
var seq__30500_30517__$1 = temp__4657__auto___30516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30500_30517__$1)){
var c__25345__auto___30518 = cljs.core.chunk_first.call(null,seq__30500_30517__$1);
var G__30519 = cljs.core.chunk_rest.call(null,seq__30500_30517__$1);
var G__30520 = c__25345__auto___30518;
var G__30521 = cljs.core.count.call(null,c__25345__auto___30518);
var G__30522 = (0);
seq__30500_30507 = G__30519;
chunk__30501_30508 = G__30520;
count__30502_30509 = G__30521;
i__30503_30510 = G__30522;
continue;
} else {
var dep_30523 = cljs.core.first.call(null,seq__30500_30517__$1);
topo_sort_helper_STAR_.call(null,dep_30523,(depth + (1)),state);

var G__30524 = cljs.core.next.call(null,seq__30500_30517__$1);
var G__30525 = null;
var G__30526 = (0);
var G__30527 = (0);
seq__30500_30507 = G__30524;
chunk__30501_30508 = G__30525;
count__30502_30509 = G__30526;
i__30503_30510 = G__30527;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30504){
var vec__30506 = p__30504;
var x = cljs.core.nth.call(null,vec__30506,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30506,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30506,x,xs,get_deps__$1){
return (function (p1__30462_SHARP_){
return clojure.set.difference.call(null,p1__30462_SHARP_,x);
});})(vec__30506,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30540 = cljs.core.seq.call(null,provides);
var chunk__30541 = null;
var count__30542 = (0);
var i__30543 = (0);
while(true){
if((i__30543 < count__30542)){
var prov = cljs.core._nth.call(null,chunk__30541,i__30543);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30544_30552 = cljs.core.seq.call(null,requires);
var chunk__30545_30553 = null;
var count__30546_30554 = (0);
var i__30547_30555 = (0);
while(true){
if((i__30547_30555 < count__30546_30554)){
var req_30556 = cljs.core._nth.call(null,chunk__30545_30553,i__30547_30555);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30556,prov);

var G__30557 = seq__30544_30552;
var G__30558 = chunk__30545_30553;
var G__30559 = count__30546_30554;
var G__30560 = (i__30547_30555 + (1));
seq__30544_30552 = G__30557;
chunk__30545_30553 = G__30558;
count__30546_30554 = G__30559;
i__30547_30555 = G__30560;
continue;
} else {
var temp__4657__auto___30561 = cljs.core.seq.call(null,seq__30544_30552);
if(temp__4657__auto___30561){
var seq__30544_30562__$1 = temp__4657__auto___30561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30544_30562__$1)){
var c__25345__auto___30563 = cljs.core.chunk_first.call(null,seq__30544_30562__$1);
var G__30564 = cljs.core.chunk_rest.call(null,seq__30544_30562__$1);
var G__30565 = c__25345__auto___30563;
var G__30566 = cljs.core.count.call(null,c__25345__auto___30563);
var G__30567 = (0);
seq__30544_30552 = G__30564;
chunk__30545_30553 = G__30565;
count__30546_30554 = G__30566;
i__30547_30555 = G__30567;
continue;
} else {
var req_30568 = cljs.core.first.call(null,seq__30544_30562__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30568,prov);

var G__30569 = cljs.core.next.call(null,seq__30544_30562__$1);
var G__30570 = null;
var G__30571 = (0);
var G__30572 = (0);
seq__30544_30552 = G__30569;
chunk__30545_30553 = G__30570;
count__30546_30554 = G__30571;
i__30547_30555 = G__30572;
continue;
}
} else {
}
}
break;
}

var G__30573 = seq__30540;
var G__30574 = chunk__30541;
var G__30575 = count__30542;
var G__30576 = (i__30543 + (1));
seq__30540 = G__30573;
chunk__30541 = G__30574;
count__30542 = G__30575;
i__30543 = G__30576;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30540);
if(temp__4657__auto__){
var seq__30540__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30540__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__30540__$1);
var G__30577 = cljs.core.chunk_rest.call(null,seq__30540__$1);
var G__30578 = c__25345__auto__;
var G__30579 = cljs.core.count.call(null,c__25345__auto__);
var G__30580 = (0);
seq__30540 = G__30577;
chunk__30541 = G__30578;
count__30542 = G__30579;
i__30543 = G__30580;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30540__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30548_30581 = cljs.core.seq.call(null,requires);
var chunk__30549_30582 = null;
var count__30550_30583 = (0);
var i__30551_30584 = (0);
while(true){
if((i__30551_30584 < count__30550_30583)){
var req_30585 = cljs.core._nth.call(null,chunk__30549_30582,i__30551_30584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30585,prov);

var G__30586 = seq__30548_30581;
var G__30587 = chunk__30549_30582;
var G__30588 = count__30550_30583;
var G__30589 = (i__30551_30584 + (1));
seq__30548_30581 = G__30586;
chunk__30549_30582 = G__30587;
count__30550_30583 = G__30588;
i__30551_30584 = G__30589;
continue;
} else {
var temp__4657__auto___30590__$1 = cljs.core.seq.call(null,seq__30548_30581);
if(temp__4657__auto___30590__$1){
var seq__30548_30591__$1 = temp__4657__auto___30590__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30548_30591__$1)){
var c__25345__auto___30592 = cljs.core.chunk_first.call(null,seq__30548_30591__$1);
var G__30593 = cljs.core.chunk_rest.call(null,seq__30548_30591__$1);
var G__30594 = c__25345__auto___30592;
var G__30595 = cljs.core.count.call(null,c__25345__auto___30592);
var G__30596 = (0);
seq__30548_30581 = G__30593;
chunk__30549_30582 = G__30594;
count__30550_30583 = G__30595;
i__30551_30584 = G__30596;
continue;
} else {
var req_30597 = cljs.core.first.call(null,seq__30548_30591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30597,prov);

var G__30598 = cljs.core.next.call(null,seq__30548_30591__$1);
var G__30599 = null;
var G__30600 = (0);
var G__30601 = (0);
seq__30548_30581 = G__30598;
chunk__30549_30582 = G__30599;
count__30550_30583 = G__30600;
i__30551_30584 = G__30601;
continue;
}
} else {
}
}
break;
}

var G__30602 = cljs.core.next.call(null,seq__30540__$1);
var G__30603 = null;
var G__30604 = (0);
var G__30605 = (0);
seq__30540 = G__30602;
chunk__30541 = G__30603;
count__30542 = G__30604;
i__30543 = G__30605;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30610_30614 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30611_30615 = null;
var count__30612_30616 = (0);
var i__30613_30617 = (0);
while(true){
if((i__30613_30617 < count__30612_30616)){
var ns_30618 = cljs.core._nth.call(null,chunk__30611_30615,i__30613_30617);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30618);

var G__30619 = seq__30610_30614;
var G__30620 = chunk__30611_30615;
var G__30621 = count__30612_30616;
var G__30622 = (i__30613_30617 + (1));
seq__30610_30614 = G__30619;
chunk__30611_30615 = G__30620;
count__30612_30616 = G__30621;
i__30613_30617 = G__30622;
continue;
} else {
var temp__4657__auto___30623 = cljs.core.seq.call(null,seq__30610_30614);
if(temp__4657__auto___30623){
var seq__30610_30624__$1 = temp__4657__auto___30623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30610_30624__$1)){
var c__25345__auto___30625 = cljs.core.chunk_first.call(null,seq__30610_30624__$1);
var G__30626 = cljs.core.chunk_rest.call(null,seq__30610_30624__$1);
var G__30627 = c__25345__auto___30625;
var G__30628 = cljs.core.count.call(null,c__25345__auto___30625);
var G__30629 = (0);
seq__30610_30614 = G__30626;
chunk__30611_30615 = G__30627;
count__30612_30616 = G__30628;
i__30613_30617 = G__30629;
continue;
} else {
var ns_30630 = cljs.core.first.call(null,seq__30610_30624__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30630);

var G__30631 = cljs.core.next.call(null,seq__30610_30624__$1);
var G__30632 = null;
var G__30633 = (0);
var G__30634 = (0);
seq__30610_30614 = G__30631;
chunk__30611_30615 = G__30632;
count__30612_30616 = G__30633;
i__30613_30617 = G__30634;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24534__auto__ = goog.require__;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30635__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30636__i = 0, G__30636__a = new Array(arguments.length -  0);
while (G__30636__i < G__30636__a.length) {G__30636__a[G__30636__i] = arguments[G__30636__i + 0]; ++G__30636__i;}
  args = new cljs.core.IndexedSeq(G__30636__a,0);
} 
return G__30635__delegate.call(this,args);};
G__30635.cljs$lang$maxFixedArity = 0;
G__30635.cljs$lang$applyTo = (function (arglist__30637){
var args = cljs.core.seq(arglist__30637);
return G__30635__delegate(args);
});
G__30635.cljs$core$IFn$_invoke$arity$variadic = G__30635__delegate;
return G__30635;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30639 = cljs.core._EQ_;
var expr__30640 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30639.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30640))){
var path_parts = ((function (pred__30639,expr__30640){
return (function (p1__30638_SHARP_){
return clojure.string.split.call(null,p1__30638_SHARP_,/[\/\\]/);
});})(pred__30639,expr__30640))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30639,expr__30640){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30642){if((e30642 instanceof Error)){
var e = e30642;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30642;

}
}})());
});
;})(path_parts,sep,root,pred__30639,expr__30640))
} else {
if(cljs.core.truth_(pred__30639.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30640))){
return ((function (pred__30639,expr__30640){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30639,expr__30640){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30639,expr__30640))
);

return deferred.addErrback(((function (deferred,pred__30639,expr__30640){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30639,expr__30640))
);
});
;})(pred__30639,expr__30640))
} else {
return ((function (pred__30639,expr__30640){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30639,expr__30640))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30643,callback){
var map__30646 = p__30643;
var map__30646__$1 = ((((!((map__30646 == null)))?((((map__30646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30646):map__30646);
var file_msg = map__30646__$1;
var request_url = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30646,map__30646__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30646,map__30646__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__){
return (function (state_30670){
var state_val_30671 = (state_30670[(1)]);
if((state_val_30671 === (7))){
var inst_30666 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
var statearr_30672_30692 = state_30670__$1;
(statearr_30672_30692[(2)] = inst_30666);

(statearr_30672_30692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (1))){
var state_30670__$1 = state_30670;
var statearr_30673_30693 = state_30670__$1;
(statearr_30673_30693[(2)] = null);

(statearr_30673_30693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (4))){
var inst_30650 = (state_30670[(7)]);
var inst_30650__$1 = (state_30670[(2)]);
var state_30670__$1 = (function (){var statearr_30674 = state_30670;
(statearr_30674[(7)] = inst_30650__$1);

return statearr_30674;
})();
if(cljs.core.truth_(inst_30650__$1)){
var statearr_30675_30694 = state_30670__$1;
(statearr_30675_30694[(1)] = (5));

} else {
var statearr_30676_30695 = state_30670__$1;
(statearr_30676_30695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (6))){
var state_30670__$1 = state_30670;
var statearr_30677_30696 = state_30670__$1;
(statearr_30677_30696[(2)] = null);

(statearr_30677_30696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (3))){
var inst_30668 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30670__$1,inst_30668);
} else {
if((state_val_30671 === (2))){
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30670__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30671 === (11))){
var inst_30662 = (state_30670[(2)]);
var state_30670__$1 = (function (){var statearr_30678 = state_30670;
(statearr_30678[(8)] = inst_30662);

return statearr_30678;
})();
var statearr_30679_30697 = state_30670__$1;
(statearr_30679_30697[(2)] = null);

(statearr_30679_30697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (9))){
var inst_30654 = (state_30670[(9)]);
var inst_30656 = (state_30670[(10)]);
var inst_30658 = inst_30656.call(null,inst_30654);
var state_30670__$1 = state_30670;
var statearr_30680_30698 = state_30670__$1;
(statearr_30680_30698[(2)] = inst_30658);

(statearr_30680_30698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (5))){
var inst_30650 = (state_30670[(7)]);
var inst_30652 = figwheel.client.file_reloading.blocking_load.call(null,inst_30650);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30670__$1,(8),inst_30652);
} else {
if((state_val_30671 === (10))){
var inst_30654 = (state_30670[(9)]);
var inst_30660 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30654);
var state_30670__$1 = state_30670;
var statearr_30681_30699 = state_30670__$1;
(statearr_30681_30699[(2)] = inst_30660);

(statearr_30681_30699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (8))){
var inst_30650 = (state_30670[(7)]);
var inst_30656 = (state_30670[(10)]);
var inst_30654 = (state_30670[(2)]);
var inst_30655 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30656__$1 = cljs.core.get.call(null,inst_30655,inst_30650);
var state_30670__$1 = (function (){var statearr_30682 = state_30670;
(statearr_30682[(9)] = inst_30654);

(statearr_30682[(10)] = inst_30656__$1);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30656__$1)){
var statearr_30683_30700 = state_30670__$1;
(statearr_30683_30700[(1)] = (9));

} else {
var statearr_30684_30701 = state_30670__$1;
(statearr_30684_30701[(1)] = (10));

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
});})(c__27608__auto__))
;
return ((function (switch__27496__auto__,c__27608__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27497__auto__ = null;
var figwheel$client$file_reloading$state_machine__27497__auto____0 = (function (){
var statearr_30688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30688[(0)] = figwheel$client$file_reloading$state_machine__27497__auto__);

(statearr_30688[(1)] = (1));

return statearr_30688;
});
var figwheel$client$file_reloading$state_machine__27497__auto____1 = (function (state_30670){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_30670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e30689){if((e30689 instanceof Object)){
var ex__27500__auto__ = e30689;
var statearr_30690_30702 = state_30670;
(statearr_30690_30702[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30703 = state_30670;
state_30670 = G__30703;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27497__auto__ = function(state_30670){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27497__auto____1.call(this,state_30670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27497__auto____0;
figwheel$client$file_reloading$state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27497__auto____1;
return figwheel$client$file_reloading$state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__))
})();
var state__27610__auto__ = (function (){var statearr_30691 = f__27609__auto__.call(null);
(statearr_30691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_30691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__))
);

return c__27608__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30704,callback){
var map__30707 = p__30704;
var map__30707__$1 = ((((!((map__30707 == null)))?((((map__30707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30707):map__30707);
var file_msg = map__30707__$1;
var namespace = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30707,map__30707__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30707,map__30707__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30709){
var map__30712 = p__30709;
var map__30712__$1 = ((((!((map__30712 == null)))?((((map__30712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30712):map__30712);
var file_msg = map__30712__$1;
var namespace = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24522__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24522__auto__){
var or__24534__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
var or__24534__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24534__auto____$1)){
return or__24534__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24522__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30714,callback){
var map__30717 = p__30714;
var map__30717__$1 = ((((!((map__30717 == null)))?((((map__30717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30717):map__30717);
var file_msg = map__30717__$1;
var request_url = cljs.core.get.call(null,map__30717__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30717__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27608__auto___30805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto___30805,out){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto___30805,out){
return (function (state_30787){
var state_val_30788 = (state_30787[(1)]);
if((state_val_30788 === (1))){
var inst_30765 = cljs.core.nth.call(null,files,(0),null);
var inst_30766 = cljs.core.nthnext.call(null,files,(1));
var inst_30767 = files;
var state_30787__$1 = (function (){var statearr_30789 = state_30787;
(statearr_30789[(7)] = inst_30766);

(statearr_30789[(8)] = inst_30767);

(statearr_30789[(9)] = inst_30765);

return statearr_30789;
})();
var statearr_30790_30806 = state_30787__$1;
(statearr_30790_30806[(2)] = null);

(statearr_30790_30806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (2))){
var inst_30767 = (state_30787[(8)]);
var inst_30770 = (state_30787[(10)]);
var inst_30770__$1 = cljs.core.nth.call(null,inst_30767,(0),null);
var inst_30771 = cljs.core.nthnext.call(null,inst_30767,(1));
var inst_30772 = (inst_30770__$1 == null);
var inst_30773 = cljs.core.not.call(null,inst_30772);
var state_30787__$1 = (function (){var statearr_30791 = state_30787;
(statearr_30791[(11)] = inst_30771);

(statearr_30791[(10)] = inst_30770__$1);

return statearr_30791;
})();
if(inst_30773){
var statearr_30792_30807 = state_30787__$1;
(statearr_30792_30807[(1)] = (4));

} else {
var statearr_30793_30808 = state_30787__$1;
(statearr_30793_30808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (3))){
var inst_30785 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30787__$1,inst_30785);
} else {
if((state_val_30788 === (4))){
var inst_30770 = (state_30787[(10)]);
var inst_30775 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30770);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30787__$1,(7),inst_30775);
} else {
if((state_val_30788 === (5))){
var inst_30781 = cljs.core.async.close_BANG_.call(null,out);
var state_30787__$1 = state_30787;
var statearr_30794_30809 = state_30787__$1;
(statearr_30794_30809[(2)] = inst_30781);

(statearr_30794_30809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (6))){
var inst_30783 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30795_30810 = state_30787__$1;
(statearr_30795_30810[(2)] = inst_30783);

(statearr_30795_30810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (7))){
var inst_30771 = (state_30787[(11)]);
var inst_30777 = (state_30787[(2)]);
var inst_30778 = cljs.core.async.put_BANG_.call(null,out,inst_30777);
var inst_30767 = inst_30771;
var state_30787__$1 = (function (){var statearr_30796 = state_30787;
(statearr_30796[(12)] = inst_30778);

(statearr_30796[(8)] = inst_30767);

return statearr_30796;
})();
var statearr_30797_30811 = state_30787__$1;
(statearr_30797_30811[(2)] = null);

(statearr_30797_30811[(1)] = (2));


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
});})(c__27608__auto___30805,out))
;
return ((function (switch__27496__auto__,c__27608__auto___30805,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto____0 = (function (){
var statearr_30801 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30801[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto__);

(statearr_30801[(1)] = (1));

return statearr_30801;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto____1 = (function (state_30787){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_30787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e30802){if((e30802 instanceof Object)){
var ex__27500__auto__ = e30802;
var statearr_30803_30812 = state_30787;
(statearr_30803_30812[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30813 = state_30787;
state_30787 = G__30813;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto__ = function(state_30787){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto____1.call(this,state_30787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto___30805,out))
})();
var state__27610__auto__ = (function (){var statearr_30804 = f__27609__auto__.call(null);
(statearr_30804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto___30805);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto___30805,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30814,opts){
var map__30818 = p__30814;
var map__30818__$1 = ((((!((map__30818 == null)))?((((map__30818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30818):map__30818);
var eval_body__$1 = cljs.core.get.call(null,map__30818__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24522__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24522__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24522__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30820){var e = e30820;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30821_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30821_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30826){
var vec__30827 = p__30826;
var k = cljs.core.nth.call(null,vec__30827,(0),null);
var v = cljs.core.nth.call(null,vec__30827,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30828){
var vec__30829 = p__30828;
var k = cljs.core.nth.call(null,vec__30829,(0),null);
var v = cljs.core.nth.call(null,vec__30829,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30833,p__30834){
var map__31081 = p__30833;
var map__31081__$1 = ((((!((map__31081 == null)))?((((map__31081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31081):map__31081);
var opts = map__31081__$1;
var before_jsload = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31082 = p__30834;
var map__31082__$1 = ((((!((map__31082 == null)))?((((map__31082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31082):map__31082);
var msg = map__31082__$1;
var files = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27609__auto__ = (function (){var switch__27496__auto__ = ((function (c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31235){
var state_val_31236 = (state_31235[(1)]);
if((state_val_31236 === (7))){
var inst_31097 = (state_31235[(7)]);
var inst_31096 = (state_31235[(8)]);
var inst_31098 = (state_31235[(9)]);
var inst_31099 = (state_31235[(10)]);
var inst_31104 = cljs.core._nth.call(null,inst_31097,inst_31099);
var inst_31105 = figwheel.client.file_reloading.eval_body.call(null,inst_31104,opts);
var inst_31106 = (inst_31099 + (1));
var tmp31237 = inst_31097;
var tmp31238 = inst_31096;
var tmp31239 = inst_31098;
var inst_31096__$1 = tmp31238;
var inst_31097__$1 = tmp31237;
var inst_31098__$1 = tmp31239;
var inst_31099__$1 = inst_31106;
var state_31235__$1 = (function (){var statearr_31240 = state_31235;
(statearr_31240[(7)] = inst_31097__$1);

(statearr_31240[(8)] = inst_31096__$1);

(statearr_31240[(11)] = inst_31105);

(statearr_31240[(9)] = inst_31098__$1);

(statearr_31240[(10)] = inst_31099__$1);

return statearr_31240;
})();
var statearr_31241_31327 = state_31235__$1;
(statearr_31241_31327[(2)] = null);

(statearr_31241_31327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (20))){
var inst_31139 = (state_31235[(12)]);
var inst_31147 = figwheel.client.file_reloading.sort_files.call(null,inst_31139);
var state_31235__$1 = state_31235;
var statearr_31242_31328 = state_31235__$1;
(statearr_31242_31328[(2)] = inst_31147);

(statearr_31242_31328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (27))){
var state_31235__$1 = state_31235;
var statearr_31243_31329 = state_31235__$1;
(statearr_31243_31329[(2)] = null);

(statearr_31243_31329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (1))){
var inst_31088 = (state_31235[(13)]);
var inst_31085 = before_jsload.call(null,files);
var inst_31086 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31087 = (function (){return ((function (inst_31088,inst_31085,inst_31086,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30830_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30830_SHARP_);
});
;})(inst_31088,inst_31085,inst_31086,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31088__$1 = cljs.core.filter.call(null,inst_31087,files);
var inst_31089 = cljs.core.not_empty.call(null,inst_31088__$1);
var state_31235__$1 = (function (){var statearr_31244 = state_31235;
(statearr_31244[(14)] = inst_31086);

(statearr_31244[(13)] = inst_31088__$1);

(statearr_31244[(15)] = inst_31085);

return statearr_31244;
})();
if(cljs.core.truth_(inst_31089)){
var statearr_31245_31330 = state_31235__$1;
(statearr_31245_31330[(1)] = (2));

} else {
var statearr_31246_31331 = state_31235__$1;
(statearr_31246_31331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (24))){
var state_31235__$1 = state_31235;
var statearr_31247_31332 = state_31235__$1;
(statearr_31247_31332[(2)] = null);

(statearr_31247_31332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (39))){
var inst_31189 = (state_31235[(16)]);
var state_31235__$1 = state_31235;
var statearr_31248_31333 = state_31235__$1;
(statearr_31248_31333[(2)] = inst_31189);

(statearr_31248_31333[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (46))){
var inst_31230 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31249_31334 = state_31235__$1;
(statearr_31249_31334[(2)] = inst_31230);

(statearr_31249_31334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (4))){
var inst_31133 = (state_31235[(2)]);
var inst_31134 = cljs.core.List.EMPTY;
var inst_31135 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31134);
var inst_31136 = (function (){return ((function (inst_31133,inst_31134,inst_31135,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30831_SHARP_){
var and__24522__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30831_SHARP_);
if(cljs.core.truth_(and__24522__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30831_SHARP_));
} else {
return and__24522__auto__;
}
});
;})(inst_31133,inst_31134,inst_31135,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31137 = cljs.core.filter.call(null,inst_31136,files);
var inst_31138 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31139 = cljs.core.concat.call(null,inst_31137,inst_31138);
var state_31235__$1 = (function (){var statearr_31250 = state_31235;
(statearr_31250[(17)] = inst_31133);

(statearr_31250[(12)] = inst_31139);

(statearr_31250[(18)] = inst_31135);

return statearr_31250;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31251_31335 = state_31235__$1;
(statearr_31251_31335[(1)] = (16));

} else {
var statearr_31252_31336 = state_31235__$1;
(statearr_31252_31336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (15))){
var inst_31123 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31253_31337 = state_31235__$1;
(statearr_31253_31337[(2)] = inst_31123);

(statearr_31253_31337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (21))){
var inst_31149 = (state_31235[(19)]);
var inst_31149__$1 = (state_31235[(2)]);
var inst_31150 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31149__$1);
var state_31235__$1 = (function (){var statearr_31254 = state_31235;
(statearr_31254[(19)] = inst_31149__$1);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31235__$1,(22),inst_31150);
} else {
if((state_val_31236 === (31))){
var inst_31233 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31235__$1,inst_31233);
} else {
if((state_val_31236 === (32))){
var inst_31189 = (state_31235[(16)]);
var inst_31194 = inst_31189.cljs$lang$protocol_mask$partition0$;
var inst_31195 = (inst_31194 & (64));
var inst_31196 = inst_31189.cljs$core$ISeq$;
var inst_31197 = (inst_31195) || (inst_31196);
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31197)){
var statearr_31255_31338 = state_31235__$1;
(statearr_31255_31338[(1)] = (35));

} else {
var statearr_31256_31339 = state_31235__$1;
(statearr_31256_31339[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (40))){
var inst_31210 = (state_31235[(20)]);
var inst_31209 = (state_31235[(2)]);
var inst_31210__$1 = cljs.core.get.call(null,inst_31209,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31211 = cljs.core.get.call(null,inst_31209,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31212 = cljs.core.not_empty.call(null,inst_31210__$1);
var state_31235__$1 = (function (){var statearr_31257 = state_31235;
(statearr_31257[(21)] = inst_31211);

(statearr_31257[(20)] = inst_31210__$1);

return statearr_31257;
})();
if(cljs.core.truth_(inst_31212)){
var statearr_31258_31340 = state_31235__$1;
(statearr_31258_31340[(1)] = (41));

} else {
var statearr_31259_31341 = state_31235__$1;
(statearr_31259_31341[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (33))){
var state_31235__$1 = state_31235;
var statearr_31260_31342 = state_31235__$1;
(statearr_31260_31342[(2)] = false);

(statearr_31260_31342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (13))){
var inst_31109 = (state_31235[(22)]);
var inst_31113 = cljs.core.chunk_first.call(null,inst_31109);
var inst_31114 = cljs.core.chunk_rest.call(null,inst_31109);
var inst_31115 = cljs.core.count.call(null,inst_31113);
var inst_31096 = inst_31114;
var inst_31097 = inst_31113;
var inst_31098 = inst_31115;
var inst_31099 = (0);
var state_31235__$1 = (function (){var statearr_31261 = state_31235;
(statearr_31261[(7)] = inst_31097);

(statearr_31261[(8)] = inst_31096);

(statearr_31261[(9)] = inst_31098);

(statearr_31261[(10)] = inst_31099);

return statearr_31261;
})();
var statearr_31262_31343 = state_31235__$1;
(statearr_31262_31343[(2)] = null);

(statearr_31262_31343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (22))){
var inst_31157 = (state_31235[(23)]);
var inst_31153 = (state_31235[(24)]);
var inst_31152 = (state_31235[(25)]);
var inst_31149 = (state_31235[(19)]);
var inst_31152__$1 = (state_31235[(2)]);
var inst_31153__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31152__$1);
var inst_31154 = (function (){var all_files = inst_31149;
var res_SINGLEQUOTE_ = inst_31152__$1;
var res = inst_31153__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31157,inst_31153,inst_31152,inst_31149,inst_31152__$1,inst_31153__$1,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30832_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30832_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31157,inst_31153,inst_31152,inst_31149,inst_31152__$1,inst_31153__$1,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31155 = cljs.core.filter.call(null,inst_31154,inst_31152__$1);
var inst_31156 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31157__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31156);
var inst_31158 = cljs.core.not_empty.call(null,inst_31157__$1);
var state_31235__$1 = (function (){var statearr_31263 = state_31235;
(statearr_31263[(23)] = inst_31157__$1);

(statearr_31263[(24)] = inst_31153__$1);

(statearr_31263[(26)] = inst_31155);

(statearr_31263[(25)] = inst_31152__$1);

return statearr_31263;
})();
if(cljs.core.truth_(inst_31158)){
var statearr_31264_31344 = state_31235__$1;
(statearr_31264_31344[(1)] = (23));

} else {
var statearr_31265_31345 = state_31235__$1;
(statearr_31265_31345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (36))){
var state_31235__$1 = state_31235;
var statearr_31266_31346 = state_31235__$1;
(statearr_31266_31346[(2)] = false);

(statearr_31266_31346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (41))){
var inst_31210 = (state_31235[(20)]);
var inst_31214 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31215 = cljs.core.map.call(null,inst_31214,inst_31210);
var inst_31216 = cljs.core.pr_str.call(null,inst_31215);
var inst_31217 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31216)].join('');
var inst_31218 = figwheel.client.utils.log.call(null,inst_31217);
var state_31235__$1 = state_31235;
var statearr_31267_31347 = state_31235__$1;
(statearr_31267_31347[(2)] = inst_31218);

(statearr_31267_31347[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (43))){
var inst_31211 = (state_31235[(21)]);
var inst_31221 = (state_31235[(2)]);
var inst_31222 = cljs.core.not_empty.call(null,inst_31211);
var state_31235__$1 = (function (){var statearr_31268 = state_31235;
(statearr_31268[(27)] = inst_31221);

return statearr_31268;
})();
if(cljs.core.truth_(inst_31222)){
var statearr_31269_31348 = state_31235__$1;
(statearr_31269_31348[(1)] = (44));

} else {
var statearr_31270_31349 = state_31235__$1;
(statearr_31270_31349[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (29))){
var inst_31157 = (state_31235[(23)]);
var inst_31153 = (state_31235[(24)]);
var inst_31155 = (state_31235[(26)]);
var inst_31189 = (state_31235[(16)]);
var inst_31152 = (state_31235[(25)]);
var inst_31149 = (state_31235[(19)]);
var inst_31185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31188 = (function (){var all_files = inst_31149;
var res_SINGLEQUOTE_ = inst_31152;
var res = inst_31153;
var files_not_loaded = inst_31155;
var dependencies_that_loaded = inst_31157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31189,inst_31152,inst_31149,inst_31185,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31187){
var map__31271 = p__31187;
var map__31271__$1 = ((((!((map__31271 == null)))?((((map__31271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31271):map__31271);
var namespace = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31189,inst_31152,inst_31149,inst_31185,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31189__$1 = cljs.core.group_by.call(null,inst_31188,inst_31155);
var inst_31191 = (inst_31189__$1 == null);
var inst_31192 = cljs.core.not.call(null,inst_31191);
var state_31235__$1 = (function (){var statearr_31273 = state_31235;
(statearr_31273[(28)] = inst_31185);

(statearr_31273[(16)] = inst_31189__$1);

return statearr_31273;
})();
if(inst_31192){
var statearr_31274_31350 = state_31235__$1;
(statearr_31274_31350[(1)] = (32));

} else {
var statearr_31275_31351 = state_31235__$1;
(statearr_31275_31351[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (44))){
var inst_31211 = (state_31235[(21)]);
var inst_31224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31211);
var inst_31225 = cljs.core.pr_str.call(null,inst_31224);
var inst_31226 = [cljs.core.str("not required: "),cljs.core.str(inst_31225)].join('');
var inst_31227 = figwheel.client.utils.log.call(null,inst_31226);
var state_31235__$1 = state_31235;
var statearr_31276_31352 = state_31235__$1;
(statearr_31276_31352[(2)] = inst_31227);

(statearr_31276_31352[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (6))){
var inst_31130 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31277_31353 = state_31235__$1;
(statearr_31277_31353[(2)] = inst_31130);

(statearr_31277_31353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (28))){
var inst_31155 = (state_31235[(26)]);
var inst_31182 = (state_31235[(2)]);
var inst_31183 = cljs.core.not_empty.call(null,inst_31155);
var state_31235__$1 = (function (){var statearr_31278 = state_31235;
(statearr_31278[(29)] = inst_31182);

return statearr_31278;
})();
if(cljs.core.truth_(inst_31183)){
var statearr_31279_31354 = state_31235__$1;
(statearr_31279_31354[(1)] = (29));

} else {
var statearr_31280_31355 = state_31235__$1;
(statearr_31280_31355[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (25))){
var inst_31153 = (state_31235[(24)]);
var inst_31169 = (state_31235[(2)]);
var inst_31170 = cljs.core.not_empty.call(null,inst_31153);
var state_31235__$1 = (function (){var statearr_31281 = state_31235;
(statearr_31281[(30)] = inst_31169);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31170)){
var statearr_31282_31356 = state_31235__$1;
(statearr_31282_31356[(1)] = (26));

} else {
var statearr_31283_31357 = state_31235__$1;
(statearr_31283_31357[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (34))){
var inst_31204 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31204)){
var statearr_31284_31358 = state_31235__$1;
(statearr_31284_31358[(1)] = (38));

} else {
var statearr_31285_31359 = state_31235__$1;
(statearr_31285_31359[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (17))){
var state_31235__$1 = state_31235;
var statearr_31286_31360 = state_31235__$1;
(statearr_31286_31360[(2)] = recompile_dependents);

(statearr_31286_31360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (3))){
var state_31235__$1 = state_31235;
var statearr_31287_31361 = state_31235__$1;
(statearr_31287_31361[(2)] = null);

(statearr_31287_31361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (12))){
var inst_31126 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31288_31362 = state_31235__$1;
(statearr_31288_31362[(2)] = inst_31126);

(statearr_31288_31362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (2))){
var inst_31088 = (state_31235[(13)]);
var inst_31095 = cljs.core.seq.call(null,inst_31088);
var inst_31096 = inst_31095;
var inst_31097 = null;
var inst_31098 = (0);
var inst_31099 = (0);
var state_31235__$1 = (function (){var statearr_31289 = state_31235;
(statearr_31289[(7)] = inst_31097);

(statearr_31289[(8)] = inst_31096);

(statearr_31289[(9)] = inst_31098);

(statearr_31289[(10)] = inst_31099);

return statearr_31289;
})();
var statearr_31290_31363 = state_31235__$1;
(statearr_31290_31363[(2)] = null);

(statearr_31290_31363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (23))){
var inst_31157 = (state_31235[(23)]);
var inst_31153 = (state_31235[(24)]);
var inst_31155 = (state_31235[(26)]);
var inst_31152 = (state_31235[(25)]);
var inst_31149 = (state_31235[(19)]);
var inst_31160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31162 = (function (){var all_files = inst_31149;
var res_SINGLEQUOTE_ = inst_31152;
var res = inst_31153;
var files_not_loaded = inst_31155;
var dependencies_that_loaded = inst_31157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31152,inst_31149,inst_31160,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31161){
var map__31291 = p__31161;
var map__31291__$1 = ((((!((map__31291 == null)))?((((map__31291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31291):map__31291);
var request_url = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31152,inst_31149,inst_31160,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31163 = cljs.core.reverse.call(null,inst_31157);
var inst_31164 = cljs.core.map.call(null,inst_31162,inst_31163);
var inst_31165 = cljs.core.pr_str.call(null,inst_31164);
var inst_31166 = figwheel.client.utils.log.call(null,inst_31165);
var state_31235__$1 = (function (){var statearr_31293 = state_31235;
(statearr_31293[(31)] = inst_31160);

return statearr_31293;
})();
var statearr_31294_31364 = state_31235__$1;
(statearr_31294_31364[(2)] = inst_31166);

(statearr_31294_31364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (35))){
var state_31235__$1 = state_31235;
var statearr_31295_31365 = state_31235__$1;
(statearr_31295_31365[(2)] = true);

(statearr_31295_31365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (19))){
var inst_31139 = (state_31235[(12)]);
var inst_31145 = figwheel.client.file_reloading.expand_files.call(null,inst_31139);
var state_31235__$1 = state_31235;
var statearr_31296_31366 = state_31235__$1;
(statearr_31296_31366[(2)] = inst_31145);

(statearr_31296_31366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (11))){
var state_31235__$1 = state_31235;
var statearr_31297_31367 = state_31235__$1;
(statearr_31297_31367[(2)] = null);

(statearr_31297_31367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (9))){
var inst_31128 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31298_31368 = state_31235__$1;
(statearr_31298_31368[(2)] = inst_31128);

(statearr_31298_31368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (5))){
var inst_31098 = (state_31235[(9)]);
var inst_31099 = (state_31235[(10)]);
var inst_31101 = (inst_31099 < inst_31098);
var inst_31102 = inst_31101;
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31102)){
var statearr_31299_31369 = state_31235__$1;
(statearr_31299_31369[(1)] = (7));

} else {
var statearr_31300_31370 = state_31235__$1;
(statearr_31300_31370[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (14))){
var inst_31109 = (state_31235[(22)]);
var inst_31118 = cljs.core.first.call(null,inst_31109);
var inst_31119 = figwheel.client.file_reloading.eval_body.call(null,inst_31118,opts);
var inst_31120 = cljs.core.next.call(null,inst_31109);
var inst_31096 = inst_31120;
var inst_31097 = null;
var inst_31098 = (0);
var inst_31099 = (0);
var state_31235__$1 = (function (){var statearr_31301 = state_31235;
(statearr_31301[(7)] = inst_31097);

(statearr_31301[(32)] = inst_31119);

(statearr_31301[(8)] = inst_31096);

(statearr_31301[(9)] = inst_31098);

(statearr_31301[(10)] = inst_31099);

return statearr_31301;
})();
var statearr_31302_31371 = state_31235__$1;
(statearr_31302_31371[(2)] = null);

(statearr_31302_31371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (45))){
var state_31235__$1 = state_31235;
var statearr_31303_31372 = state_31235__$1;
(statearr_31303_31372[(2)] = null);

(statearr_31303_31372[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (26))){
var inst_31157 = (state_31235[(23)]);
var inst_31153 = (state_31235[(24)]);
var inst_31155 = (state_31235[(26)]);
var inst_31152 = (state_31235[(25)]);
var inst_31149 = (state_31235[(19)]);
var inst_31172 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31174 = (function (){var all_files = inst_31149;
var res_SINGLEQUOTE_ = inst_31152;
var res = inst_31153;
var files_not_loaded = inst_31155;
var dependencies_that_loaded = inst_31157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31152,inst_31149,inst_31172,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31173){
var map__31304 = p__31173;
var map__31304__$1 = ((((!((map__31304 == null)))?((((map__31304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31304):map__31304);
var namespace = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31152,inst_31149,inst_31172,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31175 = cljs.core.map.call(null,inst_31174,inst_31153);
var inst_31176 = cljs.core.pr_str.call(null,inst_31175);
var inst_31177 = figwheel.client.utils.log.call(null,inst_31176);
var inst_31178 = (function (){var all_files = inst_31149;
var res_SINGLEQUOTE_ = inst_31152;
var res = inst_31153;
var files_not_loaded = inst_31155;
var dependencies_that_loaded = inst_31157;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31152,inst_31149,inst_31172,inst_31174,inst_31175,inst_31176,inst_31177,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31157,inst_31153,inst_31155,inst_31152,inst_31149,inst_31172,inst_31174,inst_31175,inst_31176,inst_31177,state_val_31236,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31179 = setTimeout(inst_31178,(10));
var state_31235__$1 = (function (){var statearr_31306 = state_31235;
(statearr_31306[(33)] = inst_31172);

(statearr_31306[(34)] = inst_31177);

return statearr_31306;
})();
var statearr_31307_31373 = state_31235__$1;
(statearr_31307_31373[(2)] = inst_31179);

(statearr_31307_31373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (16))){
var state_31235__$1 = state_31235;
var statearr_31308_31374 = state_31235__$1;
(statearr_31308_31374[(2)] = reload_dependents);

(statearr_31308_31374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (38))){
var inst_31189 = (state_31235[(16)]);
var inst_31206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31189);
var state_31235__$1 = state_31235;
var statearr_31309_31375 = state_31235__$1;
(statearr_31309_31375[(2)] = inst_31206);

(statearr_31309_31375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (30))){
var state_31235__$1 = state_31235;
var statearr_31310_31376 = state_31235__$1;
(statearr_31310_31376[(2)] = null);

(statearr_31310_31376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (10))){
var inst_31109 = (state_31235[(22)]);
var inst_31111 = cljs.core.chunked_seq_QMARK_.call(null,inst_31109);
var state_31235__$1 = state_31235;
if(inst_31111){
var statearr_31311_31377 = state_31235__$1;
(statearr_31311_31377[(1)] = (13));

} else {
var statearr_31312_31378 = state_31235__$1;
(statearr_31312_31378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (18))){
var inst_31143 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31143)){
var statearr_31313_31379 = state_31235__$1;
(statearr_31313_31379[(1)] = (19));

} else {
var statearr_31314_31380 = state_31235__$1;
(statearr_31314_31380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (42))){
var state_31235__$1 = state_31235;
var statearr_31315_31381 = state_31235__$1;
(statearr_31315_31381[(2)] = null);

(statearr_31315_31381[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (37))){
var inst_31201 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31316_31382 = state_31235__$1;
(statearr_31316_31382[(2)] = inst_31201);

(statearr_31316_31382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (8))){
var inst_31096 = (state_31235[(8)]);
var inst_31109 = (state_31235[(22)]);
var inst_31109__$1 = cljs.core.seq.call(null,inst_31096);
var state_31235__$1 = (function (){var statearr_31317 = state_31235;
(statearr_31317[(22)] = inst_31109__$1);

return statearr_31317;
})();
if(inst_31109__$1){
var statearr_31318_31383 = state_31235__$1;
(statearr_31318_31383[(1)] = (10));

} else {
var statearr_31319_31384 = state_31235__$1;
(statearr_31319_31384[(1)] = (11));

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
}
});})(c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27496__auto__,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto____0 = (function (){
var statearr_31323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31323[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto__);

(statearr_31323[(1)] = (1));

return statearr_31323;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto____1 = (function (state_31235){
while(true){
var ret_value__27498__auto__ = (function (){try{while(true){
var result__27499__auto__ = switch__27496__auto__.call(null,state_31235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27499__auto__;
}
break;
}
}catch (e31324){if((e31324 instanceof Object)){
var ex__27500__auto__ = e31324;
var statearr_31325_31385 = state_31235;
(statearr_31325_31385[(5)] = ex__27500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31386 = state_31235;
state_31235 = G__31386;
continue;
} else {
return ret_value__27498__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto__ = function(state_31235){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto____1.call(this,state_31235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27497__auto__;
})()
;})(switch__27496__auto__,c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27610__auto__ = (function (){var statearr_31326 = f__27609__auto__.call(null);
(statearr_31326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27608__auto__);

return statearr_31326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27610__auto__);
});})(c__27608__auto__,map__31081,map__31081__$1,opts,before_jsload,on_jsload,reload_dependents,map__31082,map__31082__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27608__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31389,link){
var map__31392 = p__31389;
var map__31392__$1 = ((((!((map__31392 == null)))?((((map__31392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31392):map__31392);
var file = cljs.core.get.call(null,map__31392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31392,map__31392__$1,file){
return (function (p1__31387_SHARP_,p2__31388_SHARP_){
if(cljs.core._EQ_.call(null,p1__31387_SHARP_,p2__31388_SHARP_)){
return p1__31387_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31392,map__31392__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31398){
var map__31399 = p__31398;
var map__31399__$1 = ((((!((map__31399 == null)))?((((map__31399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31399):map__31399);
var match_length = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31394_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31394_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31401 = [];
var len__25604__auto___31404 = arguments.length;
var i__25605__auto___31405 = (0);
while(true){
if((i__25605__auto___31405 < len__25604__auto___31404)){
args31401.push((arguments[i__25605__auto___31405]));

var G__31406 = (i__25605__auto___31405 + (1));
i__25605__auto___31405 = G__31406;
continue;
} else {
}
break;
}

var G__31403 = args31401.length;
switch (G__31403) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31401.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31408_SHARP_,p2__31409_SHARP_){
return cljs.core.assoc.call(null,p1__31408_SHARP_,cljs.core.get.call(null,p2__31409_SHARP_,key),p2__31409_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31410){
var map__31413 = p__31410;
var map__31413__$1 = ((((!((map__31413 == null)))?((((map__31413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31413):map__31413);
var f_data = map__31413__$1;
var file = cljs.core.get.call(null,map__31413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31415,p__31416){
var map__31425 = p__31415;
var map__31425__$1 = ((((!((map__31425 == null)))?((((map__31425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31425):map__31425);
var opts = map__31425__$1;
var on_cssload = cljs.core.get.call(null,map__31425__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31426 = p__31416;
var map__31426__$1 = ((((!((map__31426 == null)))?((((map__31426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31426):map__31426);
var files_msg = map__31426__$1;
var files = cljs.core.get.call(null,map__31426__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31429_31433 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31430_31434 = null;
var count__31431_31435 = (0);
var i__31432_31436 = (0);
while(true){
if((i__31432_31436 < count__31431_31435)){
var f_31437 = cljs.core._nth.call(null,chunk__31430_31434,i__31432_31436);
figwheel.client.file_reloading.reload_css_file.call(null,f_31437);

var G__31438 = seq__31429_31433;
var G__31439 = chunk__31430_31434;
var G__31440 = count__31431_31435;
var G__31441 = (i__31432_31436 + (1));
seq__31429_31433 = G__31438;
chunk__31430_31434 = G__31439;
count__31431_31435 = G__31440;
i__31432_31436 = G__31441;
continue;
} else {
var temp__4657__auto___31442 = cljs.core.seq.call(null,seq__31429_31433);
if(temp__4657__auto___31442){
var seq__31429_31443__$1 = temp__4657__auto___31442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31429_31443__$1)){
var c__25345__auto___31444 = cljs.core.chunk_first.call(null,seq__31429_31443__$1);
var G__31445 = cljs.core.chunk_rest.call(null,seq__31429_31443__$1);
var G__31446 = c__25345__auto___31444;
var G__31447 = cljs.core.count.call(null,c__25345__auto___31444);
var G__31448 = (0);
seq__31429_31433 = G__31445;
chunk__31430_31434 = G__31446;
count__31431_31435 = G__31447;
i__31432_31436 = G__31448;
continue;
} else {
var f_31449 = cljs.core.first.call(null,seq__31429_31443__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31449);

var G__31450 = cljs.core.next.call(null,seq__31429_31443__$1);
var G__31451 = null;
var G__31452 = (0);
var G__31453 = (0);
seq__31429_31433 = G__31450;
chunk__31430_31434 = G__31451;
count__31431_31435 = G__31452;
i__31432_31436 = G__31453;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31425,map__31425__$1,opts,on_cssload,map__31426,map__31426__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31425,map__31425__$1,opts,on_cssload,map__31426,map__31426__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1493837726387