
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);

/*! fancyBox v2.0.4 fancyapps.com | fancyapps.com/fancybox/#license */
(function(u,q,e){var l=e(u),r=e(q),a=e.fancybox=function(){a.open.apply(this,arguments)},s=!1,t=null;e.extend(a,{version:"2.0.4",defaults:{padding:15,margin:20,width:800,height:600,minWidth:200,minHeight:200,maxWidth:9999,maxHeight:9999,autoSize:!0,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!e.browser.msie||6<e.browser.version||!q.documentElement.hasOwnProperty("ontouchstart"),scrolling:"auto",wrapCSS:"fancybox-default",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,
playSpeed:3E3,modal:!1,loop:!0,ajax:{},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+' scrolling="{scrolling}" src="{href}"></iframe>',swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",
nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,c){e.isArray(b)||(b=[b]);if(b.length)a.close(!0),
a.opts=e.extend(!0,{},a.defaults,c),a.group=b,a._start(a.opts.index||0)},cancel:function(){if(!(a.coming&&!1===a.trigger("onCancel"))&&(a.coming=null,a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload))a.imgPreload.onload=a.imgPreload.onabort=a.imgPreload.onerror=null},close:function(b){a.cancel();if(a.current&&!1!==a.trigger("beforeClose"))a.unbindEvents(),!a.isOpen||b&&!0===b[0]?(e(".fancybox-wrap").stop().trigger("onReset").remove(),a._afterZoomOut()):(a.isOpen=a.isOpened=
!1,e(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.closeMethod]())},play:function(b){var c=function(){clearTimeout(a.player.timer)},d=function(){c();if(a.current&&a.player.isActive)a.player.timer=setTimeout(a.next,a.current.playSpeed)},g=function(){c();e("body").unbind(".player");a.player.isActive=!1;a.trigger("onPlayEnd")};if(a.player.isActive||b&&!1===b[0])g();else if(a.current&&(a.current.loop||a.current.index<
a.group.length-1))a.player.isActive=!0,e("body").bind({"afterShow.player onUpdate.player":d,"onCancel.player beforeClose.player":g,"beforeLoad.player":c}),d(),a.trigger("onPlayStart")},next:function(){a.current&&a.jumpto(a.current.index+1)},prev:function(){a.current&&a.jumpto(a.current.index-1)},jumpto:function(b){a.current&&(b=parseInt(b,10),1<a.group.length&&a.current.loop&&(b>=a.group.length?b=0:0>b&&(b=a.group.length-1)),"undefined"!==typeof a.group[b]&&(a.cancel(),a._start(b)))},reposition:function(b){a.isOpen&&
a.wrap.css(a._getPosition(b))},update:function(){a.isOpen&&(s||(t=setInterval(function(){if(s&&(s=!1,clearTimeout(t),a.current)){if(a.current.autoSize)a.inner.height("auto"),a.current.height=a.inner.height();a._setDimension();a.current.canGrow&&a.inner.height("auto");a.reposition();a.trigger("onUpdate")}},100)),s=!0)},toggle:function(){if(a.isOpen)a.current.fitToView=!a.current.fitToView,a.update()},hideLoading:function(){e("#fancybox-loading").remove()},showLoading:function(){a.hideLoading();e('<div id="fancybox-loading"></div>').click(a.cancel).appendTo("body")},
getViewport:function(){return{x:l.scrollLeft(),y:l.scrollTop(),w:l.width(),h:l.height()}},unbindEvents:function(){a.wrap&&a.wrap.unbind(".fb");r.unbind(".fb");l.unbind(".fb")},bindEvents:function(){var b=a.current,c=b.keys;b&&(l.bind("resize.fb, orientationchange.fb",a.update),c&&r.bind("keydown.fb",function(b){var g;if(!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey&&0>e.inArray(b.target.tagName.toLowerCase(),["input","textarea","select","button"]))g=b.keyCode,-1<e.inArray(g,c.close)?(a.close(),b.preventDefault()):
-1<e.inArray(g,c.next)?(a.next(),b.preventDefault()):-1<e.inArray(g,c.prev)&&(a.prev(),b.preventDefault())}),e.fn.mousewheel&&b.mouseWheel&&1<a.group.length&&a.wrap.bind("mousewheel.fb",function(b,c){var f=e(b.target).get(0);if(0===f.clientHeight||f.scrollHeight===f.clientHeight)b.preventDefault(),a[0<c?"prev":"next"]()}))},trigger:function(b){var c,d=a[-1<e.inArray(b,["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(d){e.isFunction(d[b])&&(c=d[b].apply(d,Array.prototype.slice.call(arguments,
1)));if(!1===c)return!1;d.helpers&&e.each(d.helpers,function(c,f){if(f&&"undefined"!==typeof a.helpers[c]&&e.isFunction(a.helpers[c][b]))a.helpers[c][b](f,d)});e.event.trigger(b+".fb")}},isImage:function(a){return a&&a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},isSWF:function(a){return a&&a.match(/\.(swf)(.*)?$/i)},_start:function(b){var c={},d=a.group[b]||null,g,f,k;if("object"===typeof d&&(d.nodeType||d instanceof e))g=!0,e.metadata&&(c=e(d).metadata());c=e.extend(!0,{},a.opts,{index:b,element:d},
e.isPlainObject(d)?d:c);e.each(["href","title","content","type"],function(b,f){c[f]=a.opts[f]||g&&e(d).attr(f)||c[f]||null});if("number"===typeof c.margin)c.margin=[c.margin,c.margin,c.margin,c.margin];c.modal&&e.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});a.coming=c;if(!1===a.trigger("beforeLoad"))a.coming=null;else{f=c.type;b=c.href;if(!f)g&&(k=e(d).data("fancybox-type"),!k&&d.className&&(f=(k=d.className.match(/fancybox\.(\w+)/))?
k[1]:null)),!f&&b&&(a.isImage(b)?f="image":a.isSWF(b)?f="swf":b.match(/^#/)&&(f="inline")),f||(f=g?"inline":"html"),c.type=f;"inline"===f||"html"===f?(c.content=c.content||("inline"===f&&b?e(b):d),c.content.length||(f=null)):(c.href=b||d,c.href||(f=null));c.group=a.group;"image"===f?a._loadImage():"ajax"===f?a._loadAjax():f?a._afterLoad():a._error("type")}},_error:function(b){e.extend(a.coming,{type:"html",autoSize:!0,minHeight:"0",hasError:b,content:a.coming.tpl.error});a._afterLoad()},_loadImage:function(){a.imgPreload=
new Image;a.imgPreload.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width;a.coming.height=this.height;a._afterLoad()};a.imgPreload.onerror=function(){this.onload=this.onerror=null;a._error("image")};a.imgPreload.src=a.coming.href;a.imgPreload.complete||a.showLoading()},_loadAjax:function(){a.showLoading();a.ajaxLoad=e.ajax(e.extend({},a.coming.ajax,{url:a.coming.href,error:function(b,c){"abort"!==c?a._error("ajax",b):a.hideLoading()},success:function(b,c){if("success"===c)a.coming.content=
b,a._afterLoad()}}))},_preload:function(){var b=a.group,c=a.current.index,d=function(b){if(b&&a.isImage(b))(new Image).src=b};1<b.length&&(d(e(b[c+1]||b[0]).attr("href")),d(e(b[c-1]||b[b.length-1]).attr("href")))},_afterLoad:function(){a.hideLoading();!a.coming||!1===a.trigger("afterLoad",a.current)?a.coming=!1:(a.isOpened?(e(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.prevMethod]()):(e(".fancybox-wrap").stop().trigger("onReset").remove(),
a.trigger("afterClose")),a.unbindEvents(),a.isOpen=!1,a.current=a.coming,a.coming=!1,a.wrap=e(a.current.tpl.wrap).addClass("fancybox-tmp "+a.current.wrapCSS).appendTo("body"),a.outer=e(".fancybox-outer",a.wrap).css("padding",a.current.padding+"px"),a.inner=e(".fancybox-inner",a.wrap),a._setContent(),a.trigger("beforeShow"),a._setDimension(),a.wrap.hide().removeClass("fancybox-tmp"),a.bindEvents(),a._preload(),a.transitions[a.isOpened?a.current.nextMethod:a.current.openMethod]())},_setContent:function(){var b,
c,d=a.current,g=d.type;switch(g){case "inline":case "ajax":case "html":b=d.content;"inline"===g&&b instanceof e&&(b=b.show().detach(),b.parent().hasClass("fancybox-inner")&&b.parents(".fancybox-wrap").trigger("onReset").remove(),e(a.wrap).bind("onReset",function(){b.appendTo("body").hide()}));if(d.autoSize)c=e('<div class="fancybox-tmp"></div>').appendTo(e("body")).append(b),d.width=c.outerWidth(),d.height=c.outerHeight(!0),b=c.contents().detach(),c.remove();break;case "image":b=d.tpl.image.replace("{href}",
d.href);d.aspectRatio=!0;break;case "swf":b=d.tpl.swf.replace(/\{width\}/g,d.width).replace(/\{height\}/g,d.height).replace(/\{href\}/g,d.href);break;case "iframe":b=d.tpl.iframe.replace("{href}",d.href).replace("{scrolling}",d.scrolling).replace("{rnd}",(new Date).getTime())}if(-1<e.inArray(g,["image","swf","iframe"]))d.autoSize=!1,d.scrolling=!1;a.inner.append(b)},_setDimension:function(){var b=a.wrap,c=a.outer,d=a.inner,g=a.current,f=a.getViewport(),k=g.margin,i=2*g.padding,h=g.width+i,j=g.height+
i,l=g.width/g.height,o=g.maxWidth,m=g.maxHeight,n=g.minWidth,p=g.minHeight;f.w-=k[1]+k[3];f.h-=k[0]+k[2];-1<h.toString().indexOf("%")&&(h=f.w*parseFloat(h)/100);-1<j.toString().indexOf("%")&&(j=f.h*parseFloat(j)/100);g.fitToView&&(o=Math.min(f.w,o),m=Math.min(f.h,m));n=Math.min(h,n);p=Math.min(h,p);o=Math.max(n,o);m=Math.max(p,m);g.aspectRatio?(h>o&&(h=o,j=(h-i)/l+i),j>m&&(j=m,h=(j-i)*l+i),h<n&&(h=n,j=(h-i)/l+i),j<p&&(j=p,h=(j-i)*l+i)):(h=Math.max(n,Math.min(h,o)),j=Math.max(p,Math.min(j,m)));h=Math.round(h);
j=Math.round(j);e(b.add(c).add(d)).width("auto").height("auto");d.width(h-i).height(j-i);b.width(h);k=b.height();if(h>o||k>m)for(;(h>o||k>m)&&h>n&&k>p;)j-=10,g.aspectRatio?(h=Math.round((j-i)*l+i),h<n&&(h=n,j=(h-i)/l+i)):h-=10,d.width(h-i).height(j-i),b.width(h),k=b.height();g.dim={width:h,height:k};g.canGrow=g.autoSize&&j>p&&j<m;g.canShrink=!1;g.canExpand=!1;if(h-i<g.width||j-i<g.height)g.canExpand=!0;else if((h>f.w||k>f.h)&&h>n&&j>p)g.canShrink=!0;b=k-i;a.innerSpace=b-d.height();a.outerSpace=b-
c.height()},_getPosition:function(b){var c=a.current,d=a.getViewport(),e=c.margin,f=a.wrap.width()+e[1]+e[3],k=a.wrap.height()+e[0]+e[2],i={position:"absolute",top:e[0]+d.y,left:e[3]+d.x};if(c.fixed&&(!b||!1===b[0])&&k<=d.h&&f<=d.w)i={position:"fixed",top:e[0],left:e[3]};i.top=Math.ceil(Math.max(i.top,i.top+(d.h-k)*c.topRatio))+"px";i.left=Math.ceil(Math.max(i.left,i.left+0.5*(d.w-f)))+"px";return i},_afterZoomIn:function(){var b=a.current;a.isOpen=a.isOpened=!0;a.wrap.addClass("fancybox-opened").css("overflow",
"visible");a.update();a.inner.css("overflow","auto"===b.scrolling?"auto":"yes"===b.scrolling?"scroll":"hidden");if(b.closeClick||b.nextClick)a.inner.css("cursor","pointer").bind("click.fb",b.nextClick?a.next:a.close);b.closeBtn&&e(b.tpl.closeBtn).appendTo(a.wrap).bind("click.fb",a.close);b.arrows&&1<a.group.length&&((b.loop||0<b.index)&&e(b.tpl.prev).appendTo(a.wrap).bind("click.fb",a.prev),(b.loop||b.index<a.group.length-1)&&e(b.tpl.next).appendTo(a.wrap).bind("click.fb",a.next));a.trigger("afterShow");
if(a.opts.autoPlay&&!a.player.isActive)a.opts.autoPlay=!1,a.play()},_afterZoomOut:function(){a.trigger("afterClose");a.wrap.trigger("onReset").remove();e.extend(a,{group:{},opts:{},current:null,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}});a.transitions={getOrigPosition:function(){var b=a.current.element,c={},d=50,g=50,f;b&&b.nodeName&&e(b).is(":visible")?(f=e(b).find("img:first"),f.length?(c=f.offset(),d=f.outerWidth(),g=f.outerHeight()):c=e(b).offset()):(b=a.getViewport(),c.top=b.y+
0.5*(b.h-g),c.left=b.x+0.5*(b.w-d));return c={top:Math.ceil(c.top)+"px",left:Math.ceil(c.left)+"px",width:Math.ceil(d)+"px",height:Math.ceil(g)+"px"}},step:function(b,c){var d,e,f;if("width"===c.prop||"height"===c.prop)e=f=Math.ceil(b-2*a.current.padding),"height"===c.prop&&(d=(b-c.start)/(c.end-c.start),c.start>c.end&&(d=1-d),e-=a.innerSpace*d,f-=a.outerSpace*d),a.inner[c.prop](e),a.outer[c.prop](f)},zoomIn:function(){var b=a.wrap,c=a.current,d,g;d=c.dim;if("elastic"===c.openEffect){g=e.extend({},
d,a._getPosition(!0));delete g.position;d=this.getOrigPosition();if(c.openOpacity)d.opacity=0,g.opacity=1;b.css(d).show().animate(g,{duration:c.openSpeed,easing:c.openEasing,step:this.step,complete:a._afterZoomIn})}else b.css(e.extend({},d,a._getPosition())),"fade"===c.openEffect?b.fadeIn(c.openSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn())},zoomOut:function(){var b=a.wrap,c=a.current,d;if("elastic"===c.closeEffect){"fixed"===b.css("position")&&b.css(a._getPosition(!0));d=this.getOrigPosition();
if(c.closeOpacity)d.opacity=0;b.animate(d,{duration:c.closeSpeed,easing:c.closeEasing,step:this.step,complete:a._afterZoomOut})}else b.fadeOut("fade"===c.closeEffect?c.closeSpeed:0,a._afterZoomOut)},changeIn:function(){var b=a.wrap,c=a.current,d;"elastic"===c.nextEffect?(d=a._getPosition(!0),d.opacity=0,d.top=parseInt(d.top,10)-200+"px",b.css(d).show().animate({opacity:1,top:"+=200px"},{duration:c.nextSpeed,complete:a._afterZoomIn})):(b.css(a._getPosition()),"fade"===c.nextEffect?b.hide().fadeIn(c.nextSpeed,
a._afterZoomIn):(b.show(),a._afterZoomIn()))},changeOut:function(){var b=a.wrap,c=a.current,d=function(){e(this).trigger("onReset").remove()};b.removeClass("fancybox-opened");"elastic"===c.prevEffect?b.animate({opacity:0,top:"+=200px"},{duration:c.prevSpeed,complete:d}):b.fadeOut("fade"===c.prevEffect?c.prevSpeed:0,d)}};a.helpers.overlay={overlay:null,update:function(){var a,c;this.overlay.width(0).height(0);e.browser.msie?(a=Math.max(q.documentElement.scrollWidth,q.body.scrollWidth),c=Math.max(q.documentElement.offsetWidth,
q.body.offsetWidth),a=a<c?l.width():a):a=r.width();this.overlay.width(a).height(r.height())},beforeShow:function(b){if(!this.overlay)this.overlay=e('<div id="fancybox-overlay"></div>').css(b.css||{background:"black"}).appendTo("body"),this.update(),b.closeClick&&this.overlay.bind("click.fb",a.close),l.bind("resize.fb",e.proxy(this.update,this)),this.overlay.fadeTo(b.speedIn||"fast",b.opacity||1)},onUpdate:function(){this.update()},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||
"fast",function(){e(this).remove()});this.overlay=null}};a.helpers.title={beforeShow:function(b){var c;if(c=a.current.title)c=e('<div class="fancybox-title fancybox-title-'+b.type+'-wrap">'+c+"</div>").appendTo("body"),"float"===b.type&&(c.width(c.width()),c.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(parseInt(c.css("margin-bottom"),10))),c.appendTo("over"===b.type?a.inner:"outside"===b.type?a.wrap:a.outer)}};e.fn.fancybox=function(b){function c(b){var c=[],i,h=this.rel;
if(!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey)b.preventDefault(),b=e(this).data("fancybox-group"),"undefined"!==typeof b?i=b?"data-fancybox-group":!1:h&&""!==h&&"nofollow"!==h&&(b=h,i="rel"),i&&(c=g.length?e(g).filter("["+i+'="'+b+'"]'):e("["+i+'="'+b+'"]')),c.length?(d.index=c.index(this),a.open(c.get(),d)):a.open(this,d)}var d=b||{},g=this.selector||"";g?r.undelegate(g,"click.fb-start").delegate(g,"click.fb-start",c):e(this).unbind("click.fb-start").bind("click.fb-start",c);return this}})(window,
document,jQuery);