// Compiled by ClojureScript 0.0-2843 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34123_34131 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34124_34132 = null;
var count__34125_34133 = (0);
var i__34126_34134 = (0);
while(true){
if((i__34126_34134 < count__34125_34133)){
var k_34135 = cljs.core._nth.call(null,chunk__34124_34132,i__34126_34134);
e.setAttribute(cljs.core.name.call(null,k_34135),cljs.core.get.call(null,attrs,k_34135));

var G__34136 = seq__34123_34131;
var G__34137 = chunk__34124_34132;
var G__34138 = count__34125_34133;
var G__34139 = (i__34126_34134 + (1));
seq__34123_34131 = G__34136;
chunk__34124_34132 = G__34137;
count__34125_34133 = G__34138;
i__34126_34134 = G__34139;
continue;
} else {
var temp__4126__auto___34140 = cljs.core.seq.call(null,seq__34123_34131);
if(temp__4126__auto___34140){
var seq__34123_34141__$1 = temp__4126__auto___34140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34123_34141__$1)){
var c__16996__auto___34142 = cljs.core.chunk_first.call(null,seq__34123_34141__$1);
var G__34143 = cljs.core.chunk_rest.call(null,seq__34123_34141__$1);
var G__34144 = c__16996__auto___34142;
var G__34145 = cljs.core.count.call(null,c__16996__auto___34142);
var G__34146 = (0);
seq__34123_34131 = G__34143;
chunk__34124_34132 = G__34144;
count__34125_34133 = G__34145;
i__34126_34134 = G__34146;
continue;
} else {
var k_34147 = cljs.core.first.call(null,seq__34123_34141__$1);
e.setAttribute(cljs.core.name.call(null,k_34147),cljs.core.get.call(null,attrs,k_34147));

var G__34148 = cljs.core.next.call(null,seq__34123_34141__$1);
var G__34149 = null;
var G__34150 = (0);
var G__34151 = (0);
seq__34123_34131 = G__34148;
chunk__34124_34132 = G__34149;
count__34125_34133 = G__34150;
i__34126_34134 = G__34151;
continue;
}
} else {
}
}
break;
}

var seq__34127_34152 = cljs.core.seq.call(null,children);
var chunk__34128_34153 = null;
var count__34129_34154 = (0);
var i__34130_34155 = (0);
while(true){
if((i__34130_34155 < count__34129_34154)){
var ch_34156 = cljs.core._nth.call(null,chunk__34128_34153,i__34130_34155);
e.appendChild(ch_34156);

var G__34157 = seq__34127_34152;
var G__34158 = chunk__34128_34153;
var G__34159 = count__34129_34154;
var G__34160 = (i__34130_34155 + (1));
seq__34127_34152 = G__34157;
chunk__34128_34153 = G__34158;
count__34129_34154 = G__34159;
i__34130_34155 = G__34160;
continue;
} else {
var temp__4126__auto___34161 = cljs.core.seq.call(null,seq__34127_34152);
if(temp__4126__auto___34161){
var seq__34127_34162__$1 = temp__4126__auto___34161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34127_34162__$1)){
var c__16996__auto___34163 = cljs.core.chunk_first.call(null,seq__34127_34162__$1);
var G__34164 = cljs.core.chunk_rest.call(null,seq__34127_34162__$1);
var G__34165 = c__16996__auto___34163;
var G__34166 = cljs.core.count.call(null,c__16996__auto___34163);
var G__34167 = (0);
seq__34127_34152 = G__34164;
chunk__34128_34153 = G__34165;
count__34129_34154 = G__34166;
i__34130_34155 = G__34167;
continue;
} else {
var ch_34168 = cljs.core.first.call(null,seq__34127_34162__$1);
e.appendChild(ch_34168);

var G__34169 = cljs.core.next.call(null,seq__34127_34162__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__34127_34152 = G__34169;
chunk__34128_34153 = G__34170;
count__34129_34154 = G__34171;
i__34130_34155 = G__34172;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__34173__i = 0, G__34173__a = new Array(arguments.length -  2);
while (G__34173__i < G__34173__a.length) {G__34173__a[G__34173__i] = arguments[G__34173__i + 2]; ++G__34173__i;}
  children = new cljs.core.IndexedSeq(G__34173__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__34174){
var t = cljs.core.first(arglist__34174);
arglist__34174 = cljs.core.next(arglist__34174);
var attrs = cljs.core.first(arglist__34174);
var children = cljs.core.rest(arglist__34174);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17109__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17110__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17106__auto__,prefer_table__17107__auto__,method_cache__17108__auto__,cached_hierarchy__17109__auto__,hierarchy__17110__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17106__auto__,prefer_table__17107__auto__,method_cache__17108__auto__,cached_hierarchy__17109__auto__,hierarchy__17110__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17110__auto__,method_table__17106__auto__,prefer_table__17107__auto__,method_cache__17108__auto__,cached_hierarchy__17109__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34175 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34175.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34175.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34175.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34175);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__34176,st_map){
var map__34180 = p__34176;
var map__34180__$1 = ((cljs.core.seq_QMARK_.call(null,map__34180))?cljs.core.apply.call(null,cljs.core.hash_map,map__34180):map__34180);
var container_el = cljs.core.get.call(null,map__34180__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34180,map__34180__$1,container_el){
return (function (p__34181){
var vec__34182 = p__34181;
var k = cljs.core.nth.call(null,vec__34182,(0),null);
var v = cljs.core.nth.call(null,vec__34182,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34180,map__34180__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__34183,dom_str){
var map__34185 = p__34183;
var map__34185__$1 = ((cljs.core.seq_QMARK_.call(null,map__34185))?cljs.core.apply.call(null,cljs.core.hash_map,map__34185):map__34185);
var c = map__34185__$1;
var content_area_el = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__34186){
var map__34188 = p__34186;
var map__34188__$1 = ((cljs.core.seq_QMARK_.call(null,map__34188))?cljs.core.apply.call(null,cljs.core.hash_map,map__34188):map__34188);
var content_area_el = cljs.core.get.call(null,map__34188__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__){
return (function (state_34230){
var state_val_34231 = (state_34230[(1)]);
if((state_val_34231 === (2))){
var inst_34215 = (state_34230[(7)]);
var inst_34224 = (state_34230[(2)]);
var inst_34225 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34226 = ["auto"];
var inst_34227 = cljs.core.PersistentHashMap.fromArrays(inst_34225,inst_34226);
var inst_34228 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34215,inst_34227);
var state_34230__$1 = (function (){var statearr_34232 = state_34230;
(statearr_34232[(8)] = inst_34224);

return statearr_34232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34230__$1,inst_34228);
} else {
if((state_val_34231 === (1))){
var inst_34215 = (state_34230[(7)]);
var inst_34215__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34216 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34217 = ["10px","10px","100%","68px","1.0"];
var inst_34218 = cljs.core.PersistentHashMap.fromArrays(inst_34216,inst_34217);
var inst_34219 = cljs.core.merge.call(null,inst_34218,style);
var inst_34220 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34215__$1,inst_34219);
var inst_34221 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34215__$1,msg);
var inst_34222 = cljs.core.async.timeout.call(null,(300));
var state_34230__$1 = (function (){var statearr_34233 = state_34230;
(statearr_34233[(9)] = inst_34221);

(statearr_34233[(10)] = inst_34220);

(statearr_34233[(7)] = inst_34215__$1);

return statearr_34233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34230__$1,(2),inst_34222);
} else {
return null;
}
}
});})(c__19313__auto__))
;
return ((function (switch__19257__auto__,c__19313__auto__){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_34237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34237[(0)] = state_machine__19258__auto__);

(statearr_34237[(1)] = (1));

return statearr_34237;
});
var state_machine__19258__auto____1 = (function (state_34230){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_34230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e34238){if((e34238 instanceof Object)){
var ex__19261__auto__ = e34238;
var statearr_34239_34241 = state_34230;
(statearr_34239_34241[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34242 = state_34230;
state_34230 = G__34242;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_34230){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_34230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__))
})();
var state__19315__auto__ = (function (){var statearr_34240 = f__19314__auto__.call(null);
(statearr_34240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_34240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__))
);

return c__19313__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__34244 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__34244,(0),null);
var ln = cljs.core.nth.call(null,vec__34244,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__34247 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__34247,(0),null);
var file_line = cljs.core.nth.call(null,vec__34247,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34247,file_name,file_line){
return (function (p1__34245_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34245_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34247,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__34249 = figwheel.client.heads_up.ensure_container.call(null);
var map__34249__$1 = ((cljs.core.seq_QMARK_.call(null,map__34249))?cljs.core.apply.call(null,cljs.core.hash_map,map__34249):map__34249);
var content_area_el = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__){
return (function (state_34296){
var state_val_34297 = (state_34296[(1)]);
if((state_val_34297 === (3))){
var inst_34279 = (state_34296[(7)]);
var inst_34293 = (state_34296[(2)]);
var inst_34294 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34279,"");
var state_34296__$1 = (function (){var statearr_34298 = state_34296;
(statearr_34298[(8)] = inst_34293);

return statearr_34298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34296__$1,inst_34294);
} else {
if((state_val_34297 === (2))){
var inst_34279 = (state_34296[(7)]);
var inst_34286 = (state_34296[(2)]);
var inst_34287 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34288 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34289 = cljs.core.PersistentHashMap.fromArrays(inst_34287,inst_34288);
var inst_34290 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34279,inst_34289);
var inst_34291 = cljs.core.async.timeout.call(null,(200));
var state_34296__$1 = (function (){var statearr_34299 = state_34296;
(statearr_34299[(9)] = inst_34286);

(statearr_34299[(10)] = inst_34290);

return statearr_34299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34296__$1,(3),inst_34291);
} else {
if((state_val_34297 === (1))){
var inst_34279 = (state_34296[(7)]);
var inst_34279__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34280 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34281 = ["0.0"];
var inst_34282 = cljs.core.PersistentHashMap.fromArrays(inst_34280,inst_34281);
var inst_34283 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34279__$1,inst_34282);
var inst_34284 = cljs.core.async.timeout.call(null,(300));
var state_34296__$1 = (function (){var statearr_34300 = state_34296;
(statearr_34300[(11)] = inst_34283);

(statearr_34300[(7)] = inst_34279__$1);

return statearr_34300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34296__$1,(2),inst_34284);
} else {
return null;
}
}
}
});})(c__19313__auto__))
;
return ((function (switch__19257__auto__,c__19313__auto__){
return (function() {
var state_machine__19258__auto__ = null;
var state_machine__19258__auto____0 = (function (){
var statearr_34304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34304[(0)] = state_machine__19258__auto__);

(statearr_34304[(1)] = (1));

return statearr_34304;
});
var state_machine__19258__auto____1 = (function (state_34296){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_34296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e34305){if((e34305 instanceof Object)){
var ex__19261__auto__ = e34305;
var statearr_34306_34308 = state_34296;
(statearr_34306_34308[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34309 = state_34296;
state_34296 = G__34309;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_34296){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_34296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__))
})();
var state__19315__auto__ = (function (){var statearr_34307 = f__19314__auto__.call(null);
(statearr_34307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_34307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__))
);

return c__19313__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__19313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19313__auto__){
return (function (){
var f__19314__auto__ = (function (){var switch__19257__auto__ = ((function (c__19313__auto__){
return (function (state_34341){
var state_val_34342 = (state_34341[(1)]);
if((state_val_34342 === (4))){
var inst_34339 = (state_34341[(2)]);
var state_34341__$1 = state_34341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34341__$1,inst_34339);
} else {
if((state_val_34342 === (3))){
var inst_34336 = (state_34341[(2)]);
var inst_34337 = figwheel.client.heads_up.clear.call(null);
var state_34341__$1 = (function (){var statearr_34343 = state_34341;
(statearr_34343[(7)] = inst_34336);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34341__$1,(4),inst_34337);
} else {
if((state_val_34342 === (2))){
var inst_34333 = (state_34341[(2)]);
var inst_34334 = cljs.core.async.timeout.call(null,(400));
var state_34341__$1 = (function (){var statearr_34344 = state_34341;
(statearr_34344[(8)] = inst_34333);

return statearr_34344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34341__$1,(3),inst_34334);
} else {
if((state_val_34342 === (1))){
var inst_34331 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34341__$1 = state_34341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34341__$1,(2),inst_34331);
} else {
return null;
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
var statearr_34348 = [null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = state_machine__19258__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var state_machine__19258__auto____1 = (function (state_34341){
while(true){
var ret_value__19259__auto__ = (function (){try{while(true){
var result__19260__auto__ = switch__19257__auto__.call(null,state_34341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19260__auto__;
}
break;
}
}catch (e34349){if((e34349 instanceof Object)){
var ex__19261__auto__ = e34349;
var statearr_34350_34352 = state_34341;
(statearr_34350_34352[(5)] = ex__19261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34353 = state_34341;
state_34341 = G__34353;
continue;
} else {
return ret_value__19259__auto__;
}
break;
}
});
state_machine__19258__auto__ = function(state_34341){
switch(arguments.length){
case 0:
return state_machine__19258__auto____0.call(this);
case 1:
return state_machine__19258__auto____1.call(this,state_34341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__19258__auto____0;
state_machine__19258__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__19258__auto____1;
return state_machine__19258__auto__;
})()
;})(switch__19257__auto__,c__19313__auto__))
})();
var state__19315__auto__ = (function (){var statearr_34351 = f__19314__auto__.call(null);
(statearr_34351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19313__auto__);

return statearr_34351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19315__auto__);
});})(c__19313__auto__))
);

return c__19313__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map