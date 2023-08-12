import{ak as P,am as w,g as S}from"./main-bf2af1c2.js";var C=(v=>(v.Invoices="invoices",v.Barcodes="barcodes",v.Results="results",v))(C||{}),M={exports:{}};(function(v,j){(function(a,n){v.exports=n()})(window,function(){return function(E){var a={};function n(o){if(a[o])return a[o].exports;var d=a[o]={i:o,l:!1,exports:{}};return E[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}return n.m=E,n.c=a,n.d=function(o,d,s){n.o(o,d)||Object.defineProperty(o,d,{enumerable:!0,get:s})},n.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,d){if(d&1&&(o=n(o)),d&8||d&4&&typeof o=="object"&&o&&o.__esModule)return o;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),d&2&&typeof o!="string")for(var p in o)n.d(s,p,function(i){return o[i]}.bind(null,p));return s},n.n=function(o){var d=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(d,"a",d),d},n.o=function(o,d){return Object.prototype.hasOwnProperty.call(o,d)},n.p="",n(n.s=0)}({"./src/index.js":function(E,a,n){n.r(a),n("./src/sass/index.scss");var o=n("./src/js/init.js"),d=o.default.init;typeof window<"u"&&(window.printJS=d),a.default=d},"./src/js/browser.js":function(E,a,n){n.r(a);var o={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!s.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};a.default=o},"./src/js/functions.js":function(E,a,n){n.r(a),n.d(a,"addWrapper",function(){return p}),n.d(a,"capitalizePrint",function(){return i}),n.d(a,"collectStyles",function(){return l}),n.d(a,"addHeader",function(){return e}),n.d(a,"cleanUp",function(){return u}),n.d(a,"isRawHTML",function(){return y});var o=n("./src/js/modal.js"),d=n("./src/js/browser.js");function s(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(c){return typeof c}:s=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},s(t)}function p(t,f){var c="font-family:"+f.font+" !important; font-size: "+f.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,f){for(var c=document.defaultView||window,h="",b=c.getComputedStyle(t,""),m=0;m<b.length;m++)(f.targetStyles.indexOf("*")!==-1||f.targetStyle.indexOf(b[m])!==-1||r(f.targetStyles,b[m]))&&b.getPropertyValue(b[m])&&(h+=b[m]+":"+b.getPropertyValue(b[m])+";");return h+="max-width: "+f.maxWidth+"px !important; font-size: "+f.font_size+" !important;",h}function r(t,f){for(var c=0;c<t.length;c++)if(s(f)==="object"&&f.indexOf(t[c])!==-1)return!0;return!1}function e(t,f){var c=document.createElement("div");if(y(f.header))c.innerHTML=f.header;else{var h=document.createElement("h1"),b=document.createTextNode(f.header);h.appendChild(b),h.setAttribute("style",f.headerStyle),c.appendChild(h)}t.insertBefore(c,t.childNodes[0])}function u(t){t.showModal&&o.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var f="mouseover";(d.default.isChrome()||d.default.isFirefox())&&(f="focus");var c=function h(){window.removeEventListener(f,h),t.onPrintDialogClose();var b=document.getElementById(t.frameId);b&&b.remove()};window.addEventListener(f,c)}function y(t){var f=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return f.test(t)}},"./src/js/html.js":function(E,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function s(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(e){return typeof e}:s=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(l)}a.default={print:function(r,e){var u=i(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=p(u,r),r.header&&Object(o.addHeader)(r.printableElement,r),d.default.send(r,e)}};function p(l,r){for(var e=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),y=0;y<u.length;y++)if(r.ignoreElements.indexOf(u[y].id)===-1){var t=p(u[y],r);e.appendChild(t)}switch(r.scanStyles&&l.nodeType===1&&e.setAttribute("style",Object(o.collectStyles)(l,r)),l.tagName){case"SELECT":e.value=l.value;break;case"CANVAS":e.getContext("2d").drawImage(l,0,0);break}return e}function i(l){return s(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(E,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js"),s=n("./src/js/browser.js");a.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(r){var e=document.createElement("img");if(e.setAttribute("style",i.imageStyle),e.src=r,s.default.isFirefox()){var u=e.src;e.src=u}var y=document.createElement("div");y.appendChild(e),i.printableElement.appendChild(y)}),i.header&&Object(o.addHeader)(i.printableElement,i),d.default.send(i,l)}}},"./src/js/init.js":function(E,a,n){n.r(a);var o=n("./src/js/browser.js"),d=n("./src/js/modal.js"),s=n("./src/js/pdf.js"),p=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),r=n("./src/js/json.js");function e(y){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(f){return typeof f}:e=function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},e(y)}var u=["pdf","html","image","json","raw-html"];a.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(O){throw O},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},f=arguments[0];if(f===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(f)){case"string":t.printable=encodeURI(f),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=f.printable,t.fallbackPrintable=typeof f.fallbackPrintable<"u"?f.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof f[c]<"u"?f[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(f))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||u.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&d.default.show(t),t.onLoadingStart&&t.onLoadingStart();var h=document.getElementById(t.frameId);h&&h.parentNode.removeChild(h);var b=document.createElement("iframe");switch(o.default.isFirefox()?b.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):b.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),b.setAttribute("id",t.frameId),t.type!=="pdf"&&(b.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(g){b.srcdoc+='<link rel="stylesheet" href="'+g+'">'})),b.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var m=window.open(t.fallbackPrintable,"_blank");m.focus(),t.onIncompatibleBrowser()}catch(g){t.onError(g)}finally{t.showModal&&d.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else s.default.print(t,b);break;case"image":l.default.print(t,b);break;case"html":p.default.print(t,b);break;case"raw-html":i.default.print(t,b);break;case"json":r.default.print(t,b);break}}}},"./src/js/json.js":function(E,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function s(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(r){return typeof r}:s=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s(i)}a.default={print:function(l,r){if(s(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(e){return{field:s(e)==="object"?e.field:e,displayName:s(e)==="object"?e.displayName:e,columnSize:s(e)==="object"&&e.columnSize?e.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(o.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=p(l),d.default.send(l,r)}};function p(i){var l=i.printable,r=i.properties,e='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var u=0;u<r.length;u++)e+='<th style="width:'+r[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[u].displayName)+"</th>";e+="</tr>",i.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var y=0;y<l.length;y++){e+="<tr>";for(var t=0;t<r.length;t++){var f=l[y],c=r[t].field.split(".");if(c.length>1)for(var h=0;h<c.length;h++)f=f[c[h]];else f=f[r[t].field];e+='<td style="width:'+r[t].columnSize+i.gridStyle+'">'+f+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(E,a,n){n.r(a);var o={show:function(s){var p="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",p),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),l.appendChild(r);var e=document.createElement("span");e.setAttribute("class","printSpinner"),l.appendChild(e);var u=document.createTextNode(s.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var s=document.getElementById("printJS-Modal");s&&s.parentNode.removeChild(s)}};a.default=o},"./src/js/pdf.js":function(E,a,n){n.r(a);var o=n("./src/js/print.js"),d=n("./src/js/functions.js");a.default={print:function(i,l){if(i.base64){var r=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});s(i,l,r);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(d.cleanUp)(i),i.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(d.cleanUp)(i),i.onError(e.statusText,e);return}s(i,l,e.response)}),e.open("GET",i.printable,!0),e.send()}};function s(p,i,l){var r=new window.Blob([l],{type:"application/pdf"});r=window.URL.createObjectURL(r),i.setAttribute("src",r),o.default.send(p,i)}},"./src/js/print.js":function(E,a,n){n.r(a);var o=n("./src/js/browser.js"),d=n("./src/js/functions.js"),s={send:function(e,u){document.getElementsByTagName("body")[0].appendChild(u);var y=document.getElementById(e.frameId);y.onload=function(){if(e.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return p(y,e)},1e3):p(y,e);return}var t=y.contentWindow||y.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var f=document.createElement("style");f.innerHTML=e.style,t.head.appendChild(f)}var c=t.getElementsByTagName("img");c.length>0?i(Array.from(c)).then(function(){return p(y,e)}):p(y,e)}}};function p(r,e){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(u){e.onError(u)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(d.cleanUp)(e)}}function i(r){var e=r.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(e)}function l(r){return new Promise(function(e){var u=function y(){!r||typeof r.naturalWidth>"u"||r.naturalWidth===0||!r.complete?setTimeout(y,500):e()};u()})}a.default=s},"./src/js/raw-html.js":function(E,a,n){n.r(a);var o=n("./src/js/print.js");a.default={print:function(s,p){s.printableElement=document.createElement("div"),s.printableElement.setAttribute("style","width:100%"),s.printableElement.innerHTML=s.printable,o.default.send(s,p)}}},"./src/sass/index.scss":function(E,a,n){},0:function(E,a,n){E.exports=n("./src/index.js")}}).default})})(M);var A=M.exports;const I=P(A),L=w("websocketPrint",()=>{const v=S(),j=S(!1),E=S(1),a=i=>{},n=()=>{j.value=!0,E.value=1},o=()=>{j.value=!1,E.value&&s()},d=()=>{v.value=new WebSocket("ws://127.0.0.1:12212/printer"),v.value.onopen=n,v.value.onclose=o,v.value.onmessage=a},s=()=>{E.value-=1,d()},p=i=>{Array.isArray(i)?i.forEach(function(l){v.value.send(JSON.stringify(l))}):v.value.send(JSON.stringify(i))};return d(),{isConnected:j,submit:p}});export{C as P,I as p,L as u};
