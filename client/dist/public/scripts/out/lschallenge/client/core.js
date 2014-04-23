// Compiled by ClojureScript 0.0-2173
goog.provide('lschallenge.client.core');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
lschallenge.client.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$34], null)], null));
lschallenge.client.core.send_file = (function send_file(file,csv_upload){var xhr = (new XMLHttpRequest());var fd = (new FormData());om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$35,file.name,cljs.core.constant$keyword$33,cljs.core.constant$keyword$38,cljs.core.constant$keyword$36,0.0,cljs.core.constant$keyword$37,file.size], null)], 0));
}));
fd.append("file",file);
var G__5522_5524 = xhr.upload;G__5522_5524.addEventListener("progress",(function (p1__5519_SHARP_){if(cljs.core.truth_(p1__5519_SHARP_.lengthComputable))
{return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){console.log("Loaded: ",p1__5519_SHARP_.loaded);
console.log("Size: ",cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(oldstate));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(oldstate),cljs.core.constant$keyword$38)) && ((p1__5519_SHARP_.loaded >= cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(oldstate))))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$39,cljs.core.constant$keyword$36,p1__5519_SHARP_.loaded], null)], 0));
} else
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,p1__5519_SHARP_.loaded], null)], 0));
}
}));
} else
{return null;
}
}),false);
G__5522_5524.addEventListener("error",(function (){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(oldstate),cljs.core.constant$keyword$33,cljs.core.constant$keyword$40], null)], 0));
}));
}),false);
G__5522_5524.addEventListener("abort",(function (){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (oldstate){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([oldstate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$41], null)], 0));
}));
}),false);
var G__5523 = xhr;G__5523.open("POST","/api/upload",true);
G__5523.addEventListener("readystatechange",(function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(4,(xhr["readyState"])))
{var status_5525 = (xhr["status"]);if(((status_5525 < 300)) && ((status_5525 >= 200)))
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
G__5523.send(fd);
return G__5523;
});
lschallenge.client.core.reset_file_upload = (function reset_file_upload(csv_upload){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(csv_upload,(function (_){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,cljs.core.constant$keyword$34], null);
}));
});
lschallenge.client.core.upload_view = (function (){var method_table__4301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$42,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("upload-view",(function (csv_upload,_){return cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(csv_upload);
}),cljs.core.constant$keyword$7,hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$38,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5526 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5526 = (function (owner,csv_upload,meta5527){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5527 = meta5527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5526.cljs$lang$type = true;
lschallenge.client.core.t5526.cljs$lang$ctorStr = "lschallenge.client.core/t5526";
lschallenge.client.core.t5526.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5526");
});
lschallenge.client.core.t5526.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5526.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map__5529 = self__.csv_upload;var map__5529__$1 = ((cljs.core.seq_QMARK_(map__5529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5529):map__5529);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5529__$1,cljs.core.constant$keyword$37);var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5529__$1,cljs.core.constant$keyword$36);var percent = (cljs.core.truth_((function (){var and__3431__auto__ = loaded;if(cljs.core.truth_(and__3431__auto__))
{return size;
} else
{return and__3431__auto__;
}
})())?(loaded / size):0.0);var percent_str = [cljs.core.str(((100 * percent) | 0))].join('');return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Uploading file "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(".")].join('')),React.DOM.div({"className": "progress"},React.DOM.div({"style": {"width": [cljs.core.str(percent_str),cljs.core.str("%")].join('')}, "aria-value-max": "100", "aria-value-min": "0", "aria-valuenow": percent_str, "role": "progressbar", "className": "progress-bar"},[cljs.core.str(percent_str),cljs.core.str("%")].join(''))));
});
lschallenge.client.core.t5526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5528){var self__ = this;
var _5528__$1 = this;return self__.meta5527;
});
lschallenge.client.core.t5526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5528,meta5527__$1){var self__ = this;
var _5528__$1 = this;return (new lschallenge.client.core.t5526(self__.owner,self__.csv_upload,meta5527__$1));
});
lschallenge.client.core.__GT_t5526 = (function __GT_t5526(owner__$1,csv_upload__$1,meta5527){return (new lschallenge.client.core.t5526(owner__$1,csv_upload__$1,meta5527));
});
}
return (new lschallenge.client.core.t5526(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$39,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5530 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5530 = (function (owner,csv_upload,meta5531){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5531 = meta5531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5530.cljs$lang$type = true;
lschallenge.client.core.t5530.cljs$lang$ctorStr = "lschallenge.client.core/t5530";
lschallenge.client.core.t5530.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5530");
});
lschallenge.client.core.t5530.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5530.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Done uploading "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(". Waiting for import job to complete...")].join('')),React.DOM.div({"className": "progress progress-striped active"},React.DOM.div({"style": {"width": "100%"}, "aria-value-max": "100", "aria-value-min": "0", "aria-valuenow": "100", "role": "progressbar", "className": "progress-bar"})));
});
lschallenge.client.core.t5530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5532){var self__ = this;
var _5532__$1 = this;return self__.meta5531;
});
lschallenge.client.core.t5530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5532,meta5531__$1){var self__ = this;
var _5532__$1 = this;return (new lschallenge.client.core.t5530(self__.owner,self__.csv_upload,meta5531__$1));
});
lschallenge.client.core.__GT_t5530 = (function __GT_t5530(owner__$1,csv_upload__$1,meta5531){return (new lschallenge.client.core.t5530(owner__$1,csv_upload__$1,meta5531));
});
}
return (new lschallenge.client.core.t5530(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$40,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5533 !== 'undefined')
{} else
{
/**
* @constructor
*/
lschallenge.client.core.t5533 = (function (owner,csv_upload,meta5534){
this.owner = owner;
this.csv_upload = csv_upload;
this.meta5534 = meta5534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lschallenge.client.core.t5533.cljs$lang$type = true;
lschallenge.client.core.t5533.cljs$lang$ctorStr = "lschallenge.client.core/t5533";
lschallenge.client.core.t5533.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"lschallenge.client.core/t5533");
});
lschallenge.client.core.t5533.prototype.om$core$IRender$ = true;
lschallenge.client.core.t5533.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Could not upload "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(".")].join('')),React.DOM.p(null,React.DOM.a({"onClick": (function (){return lschallenge.client.core.reset_file_upload(self__.csv_upload);
})},"Try another file?")));
});
lschallenge.client.core.t5533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5535){var self__ = this;
var _5535__$1 = this;return self__.meta5534;
});
lschallenge.client.core.t5533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5535,meta5534__$1){var self__ = this;
var _5535__$1 = this;return (new lschallenge.client.core.t5533(self__.owner,self__.csv_upload,meta5534__$1));
});
lschallenge.client.core.__GT_t5533 = (function __GT_t5533(owner__$1,csv_upload__$1,meta5534){return (new lschallenge.client.core.t5533(owner__$1,csv_upload__$1,meta5534));
});
}
return (new lschallenge.client.core.t5533(owner,csv_upload,null));
}));
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$41,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5536 !== 'undefined')
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
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Upload of "),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(" was canceled.")].join('')),React.DOM.p(null,React.DOM.a({"onClick": (function (){return lschallenge.client.core.reset_file_upload(self__.csv_upload);
})},"Try another file?")));
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
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$10,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5539 !== 'undefined')
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
var this$__$1 = this;return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Import complete! "),cljs.core.str(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(" records were imported. "),cljs.core.str(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(self__.csv_upload)),cljs.core.str(" records failed to import. "),cljs.core.str(goog.string.format("$%.2f",(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(self__.csv_upload) / 100))),cljs.core.str(" of revenue imported.")].join('')),React.DOM.p(null,React.DOM.a({"onClick": (function (){return lschallenge.client.core.reset_file_upload(self__.csv_upload);
})},"Upload another file?")));
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
lschallenge.client.core.upload_view.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (csv_upload,owner){if(typeof lschallenge.client.core.t5542 !== 'undefined')
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
var this$__$1 = this;return React.DOM.span({"className": [cljs.core.str("file-input btn btn-primary btn-file")].join('')},"Select File",(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){var file = (e.target.files[0]);return lschallenge.client.core.send_file(file,self__.csv_upload);
}), "type": "file"}) : om.dom.input.call(null,{"onChange": (function (e){var file = (e.target.files[0]);return lschallenge.client.core.send_file(file,self__.csv_upload);
}), "type": "file"})));
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
lschallenge.client.core.app_view = (function app_view(app,owner){return React.DOM.div({"className": "container"},React.DOM.div({"className": "upload"},React.DOM.h1(null,"CSV Import"),om.core.build.cljs$core$IFn$_invoke$arity$2(lschallenge.client.core.upload_view,cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(app))));
});
lschallenge.client.core.insert_root_component_BANG_ = (function insert_root_component_BANG_(target){return om.core.root(lschallenge.client.core.app_view,lschallenge.client.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$30,target], null));
});
