// Compiled by ClojureScript 0.0-2173
goog.provide('lschallenge.client.core');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
lschallenge.client.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$34], null)], null));
/**
* Given a file and a csv-upload ref, uploads the file to the server and
* updates the csv-upload appropriately.
*/
lschallenge.client.core.send_file = (function send_file(file,csv_upload){var xhr = (new XMLHttpRequest());var fd = (new FormData());om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$35,file.name,cljs.core.constant$keyword$33,cljs.core.constant$keyword$38,cljs.core.constant$keyword$36,0.0,cljs.core.constant$keyword$37,file.size], null)], 0));
}));
fd.append("file",file);
var G__5528_5530 = xhr.upload;G__5528_5530.addEventListener("progress",(function (p1__5525_SHARP_){if(cljs.core.truth_(p1__5525_SHARP_.lengthComputable))
{return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(oldstate),cljs.core.constant$keyword$38)) && ((p1__5525_SHARP_.loaded >= cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(oldstate))))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$39,cljs.core.constant$keyword$36,p1__5525_SHARP_.loaded], null)], 0));
} else
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,p1__5525_SHARP_.loaded], null)], 0));
}
}));
} else
{return null;
}
}),false);
G__5528_5530.addEventListener("error",(function (){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(oldstate),cljs.core.constant$keyword$33,cljs.core.constant$keyword$40], null)], 0));
}));
}),false);
G__5528_5530.addEventListener("abort",(function (){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$41], null)], 0));
}));
}),false);
var G__5529 = xhr;G__5529.open("POST","/api/upload",true);
G__5529.addEventListener("readystatechange",(function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(4,(xhr["readyState"])))
{var status_5531 = (xhr["status"]);if(((status_5531 < 300)) && ((status_5531 >= 200)))
{om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse((xhr["responseText"])),cljs.core.array_seq([cljs.core.constant$keyword$12,true], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$10], null)], 0));
}));
} else
{om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$40], null)], 0));
}));
}
} else
{}
return false;
}));
G__5529.send(fd);
return G__5529;
});
/**
* Resets csv-upload to the initial state.
*/
lschallenge.client.core.reset_file_upload = (function reset_file_upload(csv_upload){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (_){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$34], null);
}));
});
/**
* Given an integer or a string representing an integer, returns a nicely
* formatted version of the integer.
*/
lschallenge.client.core.format_number = (function format_number(n){var n_str = ((typeof n === 'string')?n:[cljs.core.str(n)].join(''));return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.identity),cljs.core.partition.cljs$core$IFn$_invoke$arity$4(3,3,null,cljs.core.reverse(n_str)))))));
});
/**
* Given an integer or string representing an amount of pennies, creates a
* formatted string representing the dollar amount.
*/
lschallenge.client.core.format_price = (function format_price(pennies){var pennies_str = ((typeof pennies === 'string')?pennies:[cljs.core.str(pennies)].join(''));var change_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(cljs.core.take(2,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(pennies_str),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0")))));var dollars_str = lschallenge.client.core.format_number(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(cljs.core.drop(2,cljs.core.reverse(pennies_str)))));var dollars_str__$1 = (cljs.core.truth_(clojure.string.blank_QMARK_(dollars_str))?"0":dollars_str);return [cljs.core.str("$"),cljs.core.str(dollars_str__$1),cljs.core.str("."),cljs.core.str(change_str)].join('');
});
lschallenge.client.core.upload_view = (function (){var method_table__4301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$42,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("upload-view",(function (csv_upload,_){return cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(csv_upload);
}),cljs.core.constant$keyword$7,hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$38,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5532 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5532 = (function (owner,csv_upload,meta5533){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5533 = meta5533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5532.cljs$lang$type = true;
lschallenge.client.core.t5532.cljs$lang$ctorStr = "lschallenge.client.core/t5532";
lschallenge.client.core.t5532.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5532");
});
lschallenge.client.core.t5532.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5532.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map__5535 = self__.csv_upload;var map__5535__$1 = ((cljs.core.seq_QMARK_(map__5535))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5535):map__5535);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5535__$1,cljs.core.constant$keyword$37);var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5535__$1,cljs.core.constant$keyword$36);var percent = (cljs.core.truth_((function (){var and__3431__auto__ = loaded;if(cljs.core.truth_(and__3431__auto__))
{return size;
} else
{return and__3431__auto__;
}
})())?(loaded / size):0.0);var percent_str = [cljs.core.str(((100 * percent) | 0))].join('');return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Uploading file "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(".")].join('')),React.DOM.div({"className": "progress"},React.DOM.div({"style": {"width": [cljs.core.str(percent_str),cljs.core.str("%")].join('')}, "aria-value-max": "100", "aria-value-min": "0", "aria-valuenow": percent_str, "role": "progressbar", "className": "progress-bar"},[cljs.core.str(percent_str),cljs.core.str("%")].join(''))));
});
lschallenge.client.core.t5532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5534){var self__ = this;
var _5534__$1 = this;return self__.meta5533;
});
lschallenge.client.core.t5532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5534,meta5533__$1){var self__ = this;
var _5534__$1 = this;return (new lschallenge.client.core.t5532(self__.owner,self__.csv_upload,meta5533__$1));
});
lschallenge.client.core.__GT_t5532 = (function __GT_t5532(owner__$1,csv_upload__$1,meta5533){return (new lschallenge.client.core.t5532(owner__$1,csv_upload__$1,meta5533));
});
}
return (new lschallenge.client.core.t5532(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$39,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5536 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5536 = (function (owner,csv_upload,meta5537){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5537 = meta5537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5536.cljs$lang$type = true;
lschallenge.client.core.t5536.cljs$lang$ctorStr = "lschallenge.client.core/t5536";
lschallenge.client.core.t5536.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5536");
});
lschallenge.client.core.t5536.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5536.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Done uploading "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(". Waiting for import job to complete...")].join('')),React.DOM.div({"className": "progress progress-striped active"},React.DOM.div({"style": {"width": "100%"}, "aria-value-max": "100", "aria-value-min": "0", "aria-valuenow": "100", "role": "progressbar", "className": "progress-bar"})));
});
lschallenge.client.core.t5536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5538){var self__ = this;
var _5538__$1 = this;return self__.meta5537;
});
lschallenge.client.core.t5536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5538,meta5537__$1){var self__ = this;
var _5538__$1 = this;return (new lschallenge.client.core.t5536(self__.owner,self__.csv_upload,meta5537__$1));
});
lschallenge.client.core.__GT_t5536 = (function __GT_t5536(owner__$1,csv_upload__$1,meta5537){return (new lschallenge.client.core.t5536(owner__$1,csv_upload__$1,meta5537));
});
}
return (new lschallenge.client.core.t5536(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$40,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5539 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5539 = (function (owner,csv_upload,meta5540){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5540 = meta5540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5539.cljs$lang$type = true;
lschallenge.client.core.t5539.cljs$lang$ctorStr = "lschallenge.client.core/t5539";
lschallenge.client.core.t5539.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5539");
});
lschallenge.client.core.t5539.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5539.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Could not upload "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(".")].join('')),React.DOM.p(null,React.DOM.a({"onClick": (function (){return lschallenge.client.core.reset_file_upload(self__.csv_upload);
})},"Try another file?")));
});
lschallenge.client.core.t5539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5541){var self__ = this;
var _5541__$1 = this;return self__.meta5540;
});
lschallenge.client.core.t5539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5541,meta5540__$1){var self__ = this;
var _5541__$1 = this;return (new lschallenge.client.core.t5539(self__.owner,self__.csv_upload,meta5540__$1));
});
lschallenge.client.core.__GT_t5539 = (function __GT_t5539(owner__$1,csv_upload__$1,meta5540){return (new lschallenge.client.core.t5539(owner__$1,csv_upload__$1,meta5540));
});
}
return (new lschallenge.client.core.t5539(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$41,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5542 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5542 = (function (owner,csv_upload,meta5543){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5543 = meta5543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5542.cljs$lang$type = true;
lschallenge.client.core.t5542.cljs$lang$ctorStr = "lschallenge.client.core/t5542";
lschallenge.client.core.t5542.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5542");
});
lschallenge.client.core.t5542.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5542.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Upload of "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(" was canceled.")].join('')),React.DOM.p(null,React.DOM.a({"onClick": (function (){return lschallenge.client.core.reset_file_upload(self__.csv_upload);
})},"Try another file?")));
});
lschallenge.client.core.t5542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5544){var self__ = this;
var _5544__$1 = this;return self__.meta5543;
});
lschallenge.client.core.t5542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5544,meta5543__$1){var self__ = this;
var _5544__$1 = this;return (new lschallenge.client.core.t5542(self__.owner,self__.csv_upload,meta5543__$1));
});
lschallenge.client.core.__GT_t5542 = (function __GT_t5542(owner__$1,csv_upload__$1,meta5543){return (new lschallenge.client.core.t5542(owner__$1,csv_upload__$1,meta5543));
});
}
return (new lschallenge.client.core.t5542(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$10,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5545 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5545 = (function (owner,csv_upload,meta5546){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5546 = meta5546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5545.cljs$lang$type = true;
lschallenge.client.core.t5545.cljs$lang$ctorStr = "lschallenge.client.core/t5545";
lschallenge.client.core.t5545.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5545");
});
lschallenge.client.core.t5545.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5545.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Import complete! "),cljs.core.str(lschallenge.client.core.format_number(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(self__.csv_upload))),cljs.core.str(" records were imported. "),cljs.core.str(lschallenge.client.core.format_number(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(self__.csv_upload))),cljs.core.str(" records failed to import. "),cljs.core.str(lschallenge.client.core.format_price(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(self__.csv_upload))),cljs.core.str(" of revenue imported.")].join('')),React.DOM.p(null,React.DOM.a({"onClick": (function (){return lschallenge.client.core.reset_file_upload(self__.csv_upload);
})},"Upload another file?")));
});
lschallenge.client.core.t5545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5547){var self__ = this;
var _5547__$1 = this;return self__.meta5546;
});
lschallenge.client.core.t5545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5547,meta5546__$1){var self__ = this;
var _5547__$1 = this;return (new lschallenge.client.core.t5545(self__.owner,self__.csv_upload,meta5546__$1));
});
lschallenge.client.core.__GT_t5545 = (function __GT_t5545(owner__$1,csv_upload__$1,meta5546){return (new lschallenge.client.core.t5545(owner__$1,csv_upload__$1,meta5546));
});
}
return (new lschallenge.client.core.t5545(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5548 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5548 = (function (owner,csv_upload,meta5549){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5549 = meta5549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5548.cljs$lang$type = true;
lschallenge.client.core.t5548.cljs$lang$ctorStr = "lschallenge.client.core/t5548";
lschallenge.client.core.t5548.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5548");
});
lschallenge.client.core.t5548.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5548.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.span({"className": [cljs.core.str("file-input btn btn-primary btn-file")].join('')},"Select File",(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){var file = (e.target.files[0]);return lschallenge.client.core.send_file(file,self__.csv_upload);
}), "type": "file"}) : om.dom.input.call(null,{"onChange": (function (e){var file = (e.target.files[0]);return lschallenge.client.core.send_file(file,self__.csv_upload);
}), "type": "file"})));
});
lschallenge.client.core.t5548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5550){var self__ = this;
var _5550__$1 = this;return self__.meta5549;
});
lschallenge.client.core.t5548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5550,meta5549__$1){var self__ = this;
var _5550__$1 = this;return (new lschallenge.client.core.t5548(self__.owner,self__.csv_upload,meta5549__$1));
});
lschallenge.client.core.__GT_t5548 = (function __GT_t5548(owner__$1,csv_upload__$1,meta5549){return (new lschallenge.client.core.t5548(owner__$1,csv_upload__$1,meta5549));
});
}
return (new lschallenge.client.core.t5548(owner,csv_upload,null));
}));
lschallenge.client.core.app_view = (function app_view(app,owner){return React.DOM.div({"className": "container"},React.DOM.div({"className": "upload"},React.DOM.h1(null,"CSV Import"),om.core.build.cljs$core$IFn$_invoke$arity$2(lschallenge.client.core.upload_view,cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(app))));
});
lschallenge.client.core.insert_root_component_BANG_ = (function insert_root_component_BANG_(target){return om.core.root(lschallenge.client.core.app_view,lschallenge.client.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$30,target], null));
});
