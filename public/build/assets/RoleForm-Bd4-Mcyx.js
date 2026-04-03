import{ad as oe,d as ee,x as te,A as ae,o as P,c as J,a as B,f as ne,Q as A,k as S,a4 as Q,R as X,w as V,a9 as ie,m as le,b as de,p as K,j as ce,g as ue,v as pe,n as $,t as z,h as F,e as fe,a1 as he,l as be}from"./main-x6HGDEWf.js";import{F as T}from"./formMode-BtNNyqw_.js";var W={exports:{}},H={exports:{}},Y;function ve(){return Y||(Y=1,(function(L,O){(function(j,k){L.exports=k()})(window,function(){return(function(j){var k={};function i(s){if(k[s])return k[s].exports;var o=k[s]={i:s,l:!1,exports:{}};return j[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=j,i.c=k,i.d=function(s,o,l){i.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,o){if(1&o&&(s=i(s)),8&o||4&o&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),2&o&&typeof s!="string")for(var p in s)i.d(l,p,function(g){return s[g]}.bind(null,p));return l},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=0)})([function(j,k,i){Object.defineProperty(k,"__esModule",{value:!0}),k.default=c;var s,o=(s=i(1))&&s.__esModule?s:{default:s};function l(e,t){return(function(n){if(Array.isArray(n))return n})(e)||(function(n,r){var d=[],h=!0,b=!1,w=void 0;try{for(var N,C=n[Symbol.iterator]();!(h=(N=C.next()).done)&&(d.push(N.value),!r||d.length!==r);h=!0);}catch(x){b=!0,w=x}finally{try{h||C.return==null||C.return()}finally{if(b)throw w}}return d})(e,t)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}function p(e){var t={};return e.reduce(function(n,r){return t[r]||(t[r]=!0,n.push(r)),n},[])}function g(e,t){requestAnimationFrame(function(){t.enter(),requestAnimationFrame(function(){t.active(),setTimeout(function(){t.leave()},e)})})}function c(e,t){var n=this;this.treeNodes=[],this.nodesById={},this.leafNodesById={},this.liElementsById={},this.willUpdateNodesById={},this.container=e,this.options=Object.assign({selectMode:"checkbox",values:[],disables:[],beforeLoad:null,loaded:null,url:null,method:"GET",closeDepth:null},t),Object.defineProperties(this,{values:{get:function(){return this.getValues()},set:function(r){return this.setValues(p(r))}},disables:{get:function(){return this.getDisables()},set:function(r){return this.setDisables(p(r))}},selectedNodes:{get:function(){var r=[],d=this.nodesById;for(var h in d)if(d.hasOwnProperty(h)&&(d[h].status===1||d[h].status===2)){var b=Object.assign({},d[h]);delete b.parent,delete b.children,r.push(b)}return r}},disabledNodes:{get:function(){var r=[],d=this.nodesById;for(var h in d)if(d.hasOwnProperty(h)&&d[h].disabled){var b=Object.assign({},d[h]);delete b.parent,r.push(b)}return r}}}),this.options.url?this.load(function(r){n.init(r)}):this.init(this.options.data)}i(2),c.prototype.init=function(e){var t=c.parseTreeData(e),n=t.treeNodes,r=t.nodesById,d=t.leafNodesById,h=t.defaultValues,b=t.defaultDisables;this.treeNodes=n,this.nodesById=r,this.leafNodesById=d,this.render(this.treeNodes);var w=this.options,N=w.values,C=w.disables,x=w.loaded;N&&N.length&&(h=N),h.length&&this.setValues(h),C&&C.length&&(b=C),b.length&&this.setDisables(b),x&&x.call(this)},c.prototype.load=function(e){var t=this.options,n=t.url,r=t.method,d=t.beforeLoad;(0,o.default)({url:n,method:r,success:function(h){var b=h;d&&(b=d(h)),e(b)}})},c.prototype.render=function(e){var t=c.createRootEle();t.appendChild(this.buildTree(e,0)),this.bindEvent(t);var n=document.querySelector(this.container);(function(r){for(;r.firstChild;)r.removeChild(r.firstChild)})(n),n.appendChild(t)},c.prototype.buildTree=function(e,t){var n=this,r=c.createUlEle();return e&&e.length&&e.forEach(function(d){var h=c.createLiEle(d,t===n.options.closeDepth-1);n.liElementsById[d.id]=h;var b=null;d.children&&d.children.length&&(b=n.buildTree(d.children,t+1)),b&&h.appendChild(b),r.appendChild(h)}),r},c.prototype.bindEvent=function(e){var t=this;e.addEventListener("click",function(n){var r=n.target;r.nodeName==="SPAN"&&(r.classList.contains("treejs-checkbox")||r.classList.contains("treejs-label"))?t.onItemClick(r.parentNode.nodeId):r.nodeName==="LI"&&r.classList.contains("treejs-node")?t.onItemClick(r.nodeId):r.nodeName==="SPAN"&&r.classList.contains("treejs-switcher")&&t.onSwitcherClick(r)},!1)},c.prototype.onItemClick=function(e){var t=this.nodesById[e],n=this.options.onChange;t.disabled||(this.setValue(e),this.updateLiElements()),n&&n.call(this)},c.prototype.setValue=function(e){var t=this.nodesById[e];if(t){var n=t.status,r=n===1||n===2?0:2;t.status=r,this.markWillUpdateNode(t),this.walkUp(t,"status"),this.walkDown(t,"status")}},c.prototype.getValues=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&(this.leafNodesById[t].status!==1&&this.leafNodesById[t].status!==2||e.push(t));return e},c.prototype.setValues=function(e){var t=this;this.emptyNodesCheckStatus(),e.forEach(function(r){t.setValue(r)}),this.updateLiElements();var n=this.options.onChange;n&&n.call(this)},c.prototype.setDisable=function(e){var t=this.nodesById[e];t&&(t.disabled||(t.disabled=!0,this.markWillUpdateNode(t),this.walkUp(t,"disabled"),this.walkDown(t,"disabled")))},c.prototype.getDisables=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&this.leafNodesById[t].disabled&&e.push(t);return e},c.prototype.setDisables=function(e){var t=this;this.emptyNodesDisable(),e.forEach(function(n){t.setDisable(n)}),this.updateLiElements()},c.prototype.emptyNodesCheckStatus=function(){this.willUpdateNodesById=this.getSelectedNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled||(e.status=0)})},c.prototype.emptyNodesDisable=function(){this.willUpdateNodesById=this.getDisabledNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled=!1})},c.prototype.getSelectedNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),r=n[0],d=n[1];return d.status!==1&&d.status!==2||(e[r]=d),e},{})},c.prototype.getDisabledNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),r=n[0],d=n[1];return d.disabled&&(e[r]=d),e},{})},c.prototype.updateLiElements=function(){var e=this;Object.values(this.willUpdateNodesById).forEach(function(t){e.updateLiElement(t)}),this.willUpdateNodesById={}},c.prototype.markWillUpdateNode=function(e){this.willUpdateNodesById[e.id]=e},c.prototype.onSwitcherClick=function(e){var t=e.parentNode,n=t.lastChild,r=n.scrollHeight;t.classList.contains("treejs-node__close")?g(150,{enter:function(){n.style.height=0,n.style.opacity=0},active:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},leave:function(){n.style.height="",n.style.opacity="",t.classList.remove("treejs-node__close")}}):g(150,{enter:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},active:function(){n.style.height=0,n.style.opacity=0},leave:function(){n.style.height="",n.style.opacity="",t.classList.add("treejs-node__close")}})},c.prototype.walkUp=function(e,t){var n=e.parent;if(n){if(t==="status"){var r=null,d=n.children.reduce(function(b,w){return isNaN(w.status)?b:b+w.status},0);if(r=d?d===2*n.children.length?2:1:0,n.status===r)return;n.status=r}else{var h=n.children.reduce(function(b,w){return b&&w.disabled},!0);if(n.disabled===h)return;n.disabled=h}this.markWillUpdateNode(n),this.walkUp(n,t)}},c.prototype.walkDown=function(e,t){var n=this;e.children&&e.children.length&&e.children.forEach(function(r){t==="status"&&r.disabled||(r[t]=e[t],n.markWillUpdateNode(r),n.walkDown(r,t))})},c.prototype.updateLiElement=function(e){var t=this.liElementsById[e.id].classList;switch(e.status){case 0:t.remove("treejs-node__halfchecked","treejs-node__checked");break;case 1:t.remove("treejs-node__checked"),t.add("treejs-node__halfchecked");break;case 2:t.remove("treejs-node__halfchecked"),t.add("treejs-node__checked")}switch(e.disabled){case!0:t.contains("treejs-node__disabled")||t.add("treejs-node__disabled");break;case!1:t.contains("treejs-node__disabled")&&t.remove("treejs-node__disabled")}},c.parseTreeData=function(e){var t,n=(t=e,JSON.parse(JSON.stringify(t))),r={},d={},h=[],b=[];return(function w(N,C){N.forEach(function(x){r[x.id]=x,x.checked&&h.push(x.id),x.disabled&&b.push(x.id),C&&(x.parent=C),x.children&&x.children.length?w(x.children,x):d[x.id]=x})})(n),{treeNodes:n,nodesById:r,leafNodesById:d,defaultValues:h,defaultDisables:b}},c.createRootEle=function(){var e=document.createElement("div");return e.classList.add("treejs"),e},c.createUlEle=function(){var e=document.createElement("ul");return e.classList.add("treejs-nodes"),e},c.createLiEle=function(e,t){var n=document.createElement("li");if(n.classList.add("treejs-node"),t&&n.classList.add("treejs-node__close"),e.children&&e.children.length){var r=document.createElement("span");r.classList.add("treejs-switcher"),n.appendChild(r)}else n.classList.add("treejs-placeholder");var d=document.createElement("span");d.classList.add("treejs-checkbox"),n.appendChild(d);var h=document.createElement("span");h.classList.add("treejs-label");var b=document.createTextNode(e.text);return h.appendChild(b),n.appendChild(h),n.nodeId=e.id,n}},function(j,k,i){Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(s){var o={method:"GET",url:"",async:!0,success:null,failed:null,"Content-Type":"application/json; charset=utf-8"},l=Object.assign(o,s),p=new XMLHttpRequest,g=Object.entries(l.data).reduce(function(e,t){var n,r,d=(r=2,(function(w){if(Array.isArray(w))return w})(n=t)||(function(w,N){var C=[],x=!0,M=!1,R=void 0;try{for(var u,a=w[Symbol.iterator]();!(x=(u=a.next()).done)&&(C.push(u.value),!N||C.length!==N);x=!0);}catch(f){M=!0,R=f}finally{try{x||a.return==null||a.return()}finally{if(M)throw R}}return C})(n,r)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()),h=d[0],b=d[1];return e.push("".concat(h,"=").concat(b)),e},[]).join("&");if(l.method.toUpperCase()==="POST")p.open(l.method,l.url,l.async),p.setRequestHeader("Content-Type",l["Content-Type"]),p.send(g);else if(l.method.toUpperCase()==="GET"){var c=l.url;g&&(c.indexOf("?"),c+="&".concat(g)),p.open(l.method,c,l.async),p.setRequestHeader("Content-Type",l["Content-Type"]),p.send(null)}p.onreadystatechange=function(){if(p.readyState===4&&p.status===200){var e=p.responseText;l["Content-Type"]===o["Content-Type"]&&(e=JSON.parse(e)),l.success&&l.success(e)}else l.failed&&l.failed(p.status)}}},function(j,k,i){var s=i(3);typeof s=="string"&&(s=[[j.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(5)(s,o),s.locals&&(j.exports=s.locals)},function(j,k,i){(j.exports=i(4)(!1)).push([j.i,`.treejs {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 14px;
}
.treejs *:after,
.treejs *:before {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.treejs > .treejs-node {
  padding-left: 0;
}
.treejs .treejs-nodes {
  list-style: none;
  padding-left: 20px;
  overflow: hidden;
  -webkit-transition: height 150ms ease-out, opacity 150ms ease-out;
  -o-transition: height 150ms ease-out, opacity 150ms ease-out;
  transition: height 150ms ease-out, opacity 150ms ease-out;
}
.treejs .treejs-node {
  cursor: pointer;
  overflow: hidden;
}
.treejs .treejs-node.treejs-placeholder {
  padding-left: 20px;
}
.treejs .treejs-switcher {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  -webkit-transition: -webkit-transform 150ms ease-out;
  transition: -webkit-transform 150ms ease-out;
  -o-transition: transform 150ms ease-out;
  transition: transform 150ms ease-out;
  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;
}
.treejs .treejs-switcher:before {
  position: absolute;
  top: 8px;
  left: 6px;
  display: block;
  content: ' ';
  border: 4px solid transparent;
  border-top: 4px solid rgba(0, 0, 0, 0.4);
  -webkit-transition: border-color 150ms;
  -o-transition: border-color 150ms;
  transition: border-color 150ms;
}
.treejs .treejs-switcher:hover:before {
  border-top: 4px solid rgba(0, 0, 0, 0.65);
}
.treejs .treejs-node__close > .treejs-switcher {
  -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.treejs .treejs-node__close > .treejs-nodes {
  height: 0;
}
.treejs .treejs-checkbox {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
}
.treejs .treejs-checkbox:before {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: absolute;
  top: 2px;
  content: ' ';
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.treejs .treejs-checkbox:hover:before {
  -webkit-box-shadow: 0 0 2px 1px #1890ff;
          box-shadow: 0 0 2px 1px #1890ff;
}
.treejs .treejs-node__checked > .treejs-checkbox:before {
  background-color: #1890ff;
  border-color: #1890ff;
}
.treejs .treejs-node__checked > .treejs-checkbox:after {
  position: absolute;
  content: ' ';
  display: block;
  top: 4px;
  left: 5px;
  width: 5px;
  height: 9px;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
}
.treejs .treejs-node__halfchecked > .treejs-checkbox:before {
  background-color: #1890ff;
  border-color: #1890ff;
}
.treejs .treejs-node__halfchecked > .treejs-checkbox:after {
  position: absolute;
  content: ' ';
  display: block;
  top: 9px;
  left: 3px;
  width: 10px;
  height: 2px;
  background-color: #fff;
}
.treejs .treejs-node__disabled {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.25);
}
.treejs .treejs-node__disabled .treejs-checkbox {
  cursor: not-allowed;
}
.treejs .treejs-node__disabled .treejs-checkbox:before {
  cursor: not-allowed;
  border-color: #d9d9d9 !important;
  background-color: #f5f5f5 !important;
}
.treejs .treejs-node__disabled .treejs-checkbox:hover:before {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.treejs .treejs-node__disabled .treejs-node__checked > .treejs-checkbox:after {
  border-color: #d9d9d9;
}
.treejs .treejs-node__disabled .treejs-node__halfchecked > .treejs-checkbox:after {
  background-color: #d9d9d9;
}
.treejs .treejs-node__disabled.treejs-node__checked > .treejs-checkbox:after {
  border-color: #d9d9d9;
}
.treejs .treejs-node__disabled.treejs-node__halfchecked > .treejs-checkbox:after {
  background-color: #d9d9d9;
}
.treejs .treejs-label {
  vertical-align: middle;
}
`,""])},function(j,k){j.exports=function(i){var s=[];return s.toString=function(){return this.map(function(o){var l=(function(p,g){var c=p[1]||"",e=p[3];if(!e)return c;if(g&&typeof btoa=="function"){var t=(r=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),n=e.sources.map(function(d){return"/*# sourceURL="+e.sourceRoot+d+" */"});return[c].concat(n).concat([t]).join(`
`)}var r;return[c].join(`
`)})(o,i);return o[2]?"@media "+o[2]+"{"+l+"}":l}).join("")},s.i=function(o,l){typeof o=="string"&&(o=[[null,o,""]]);for(var p={},g=0;g<this.length;g++){var c=this[g][0];typeof c=="number"&&(p[c]=!0)}for(g=0;g<o.length;g++){var e=o[g];typeof e[0]=="number"&&p[e[0]]||(l&&!e[2]?e[2]=l:l&&(e[2]="("+e[2]+") and ("+l+")"),s.push(e))}},s}},function(j,k,i){var s,o,l={},p=(s=function(){return window&&document&&document.all&&!window.atob},function(){return typeof o>"u"&&(o=s.apply(this,arguments)),o}),g=(function(u){var a={};return function(f){if(typeof f=="function")return f();if(typeof a[f]>"u"){var v=function(_){return document.querySelector(_)}.call(this,f);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}a[f]=v}return a[f]}})(),c=null,e=0,t=[],n=i(6);function r(u,a){for(var f=0;f<u.length;f++){var v=u[f],_=l[v.id];if(_){_.refs++;for(var y=0;y<_.parts.length;y++)_.parts[y](v.parts[y]);for(;y<v.parts.length;y++)_.parts.push(C(v.parts[y],a))}else{var I=[];for(y=0;y<v.parts.length;y++)I.push(C(v.parts[y],a));l[v.id]={id:v.id,refs:1,parts:I}}}}function d(u,a){for(var f=[],v={},_=0;_<u.length;_++){var y=u[_],I=a.base?y[0]+a.base:y[0],m={css:y[1],media:y[2],sourceMap:y[3]};v[I]?v[I].parts.push(m):f.push(v[I]={id:I,parts:[m]})}return f}function h(u,a){var f=g(u.insertInto);if(!f)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var v=t[t.length-1];if(u.insertAt==="top")v?v.nextSibling?f.insertBefore(a,v.nextSibling):f.appendChild(a):f.insertBefore(a,f.firstChild),t.push(a);else if(u.insertAt==="bottom")f.appendChild(a);else{if(typeof u.insertAt!="object"||!u.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var _=g(u.insertInto+" "+u.insertAt.before);f.insertBefore(a,_)}}function b(u){if(u.parentNode===null)return!1;u.parentNode.removeChild(u);var a=t.indexOf(u);a>=0&&t.splice(a,1)}function w(u){var a=document.createElement("style");return u.attrs.type===void 0&&(u.attrs.type="text/css"),N(a,u.attrs),h(u,a),a}function N(u,a){Object.keys(a).forEach(function(f){u.setAttribute(f,a[f])})}function C(u,a){var f,v,_,y;if(a.transform&&u.css){if(!(y=a.transform(u.css)))return function(){};u.css=y}if(a.singleton){var I=e++;f=c||(c=w(a)),v=R.bind(null,f,I,!1),_=R.bind(null,f,I,!0)}else u.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(f=(function(m){var E=document.createElement("link");return m.attrs.type===void 0&&(m.attrs.type="text/css"),m.attrs.rel="stylesheet",N(E,m.attrs),h(m,E),E})(a),v=function(m,E,D){var U=D.css,q=D.sourceMap,re=E.convertToAbsoluteUrls===void 0&&q;(E.convertToAbsoluteUrls||re)&&(U=n(U)),q&&(U+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(q))))+" */");var se=new Blob([U],{type:"text/css"}),G=m.href;m.href=URL.createObjectURL(se),G&&URL.revokeObjectURL(G)}.bind(null,f,a),_=function(){b(f),f.href&&URL.revokeObjectURL(f.href)}):(f=w(a),v=function(m,E){var D=E.css,U=E.media;if(U&&m.setAttribute("media",U),m.styleSheet)m.styleSheet.cssText=D;else{for(;m.firstChild;)m.removeChild(m.firstChild);m.appendChild(document.createTextNode(D))}}.bind(null,f),_=function(){b(f)});return v(u),function(m){if(m){if(m.css===u.css&&m.media===u.media&&m.sourceMap===u.sourceMap)return;v(u=m)}else _()}}j.exports=function(u,a){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs=typeof a.attrs=="object"?a.attrs:{},a.singleton||typeof a.singleton=="boolean"||(a.singleton=p()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var f=d(u,a);return r(f,a),function(v){for(var _=[],y=0;y<f.length;y++){var I=f[y];(m=l[I.id]).refs--,_.push(m)}for(v&&r(d(v,a),a),y=0;y<_.length;y++){var m;if((m=_[y]).refs===0){for(var E=0;E<m.parts.length;E++)m.parts[E]();delete l[m.id]}}}};var x,M=(x=[],function(u,a){return x[u]=a,x.filter(Boolean).join(`
`)});function R(u,a,f,v){var _=f?"":v.css;if(u.styleSheet)u.styleSheet.cssText=M(a,_);else{var y=document.createTextNode(_),I=u.childNodes;I[a]&&u.removeChild(I[a]),I.length?u.insertBefore(y,I[a]):u.appendChild(y)}}},function(j,k){j.exports=function(i){var s=typeof window<"u"&&window.location;if(!s)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var o=s.protocol+"//"+s.host,l=o+s.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(p,g){var c,e=g.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e)?p:(c=e.indexOf("//")===0?e:e.indexOf("/")===0?o+e:l+e.replace(/^\.\//,""),"url("+JSON.stringify(c)+")")})}}]).default})})(H)),H.exports}var Z;function me(){return Z||(Z=1,W.exports=ve()),W.exports}var ye=me();const je=oe(ye),ge={class:"mb-1 flex items-center gap-1 ps-2 pt-2"},we=ee({__name:"Treeselect",props:{modelValue:{},options:{}},emits:["update:modelValue"],setup(L,{emit:O}){const j=L,k=O;let i=null;te(()=>{s()});const s=()=>{i=new je("#treeselect",{data:j.options,values:j.modelValue,closeDepth:1,onChange:function(){k("update:modelValue",this.values)}})},o=()=>{i.values=j.options.map(l=>l.id)};return ae(()=>j.modelValue,l=>{l===void 0&&(i.values=[])}),(l,p)=>(P(),J("div",null,[B("div",ge,[B("span",{class:"btn-blue p-1 text-xs",onClick:o},"Check All"),B("span",{class:"btn-gray p-1 text-xs",onClick:p[0]||(p[0]=g=>ne(i).values=[])},"Clear")]),p[1]||(p[1]=B("div",{id:"treeselect",class:"max-h-[13rem] overflow-y-auto"},null,-1))]))}}),xe=()=>{const L=S([]),O=S([]),j=async()=>{const{data:s}=await A.get("/api/permissions/list");O.value=s},k=async()=>{await j();let s=O.value.map(o=>o.split(".")[0]);return s=[...new Set(s)],s.forEach(o=>{L.value.push(i(o))}),L.value},i=s=>{const o={id:s,text:Q.startCase(s),children:[]};return O.value.filter(p=>p.startsWith(s+".")).forEach(p=>o.children.push({id:p,text:Q.startCase(p.split(".")[1])})),o};return{getPermissionsTree:k}},_e={class:"relative"},ke={key:0,class:"text-sm text-red-500"},Ne={class:"relative"},Ce={key:1,class:"text-sm text-red-500"},Ie=["disabled"],Oe=ee({__name:"RoleForm",emits:["close"],setup(L,{emit:O}){const j=le(),k=be(),i=S({}),{getPermissionsTree:s}=xe(),o=S(T.Create),l=S(!1),p=S({}),g=S(null),c=O;te(async()=>{j.path.endsWith("/edit")&&(o.value=T.Edit),j.path.endsWith("/clone")&&(o.value=T.Clone),o.value!==T.Create&&await e(j.params.id),g.value=await s()});const e=async w=>{const{data:N}=await A.get(`/api/roles/${w}`);i.value=N.data},t=async()=>{l.value=!0;try{o.value===T.Create?await n():o.value===T.Clone?await r():o.value===T.Edit&&await d(),p.value={},he.fire()}catch(w){p.value=w.response.data.errors??{}}l.value=!1},n=async()=>{await A.post("/api/roles",i.value),h()},r=async()=>{await A.post("/api/roles",i.value),b()},d=async()=>{await A.patch(`/api/roles/${i.value.id}`,i.value),b()},h=()=>{i.value={},p.value=[]},b=()=>{c("close"),k.back()};return(w,N)=>(P(),X(ie,null,{header:V(()=>[K(z(`${o.value.capitalize()} ${o.value===ne(T).Create?"New":""} Role`),1)]),body:V(()=>[B("form",{id:"form",onSubmit:fe(t,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[B("div",_e,[ue(B("input",{"onUpdate:modelValue":N[0]||(N[0]=C=>i.value.name=C),class:$(["peer input",{"border-red-500":p.value.hasOwnProperty("name")}])},null,2),[[pe,i.value.name]]),B("label",{class:$(["label",{"text-red-500":p.value.hasOwnProperty("name")}])},"Name",2),p.value.hasOwnProperty("name")?(P(),J("p",ke,z(p.value.name[0]),1)):F("",!0)]),B("div",Ne,[g.value?(P(),X(we,{key:0,options:g.value,modelValue:i.value.permissions,"onUpdate:modelValue":N[1]||(N[1]=C=>i.value.permissions=C),class:$(["rounded-sm border-2 border-gray-300 pt-1",{"border-red-500":p.value.hasOwnProperty("permissions")}])},null,8,["options","modelValue","class"])):F("",!0),B("label",{class:$(["label",{"text-red-500":p.value.hasOwnProperty("permissions")}])},"Permissions",2),p.value.hasOwnProperty("permissions")?(P(),J("p",Ce,z(p.value.permissions[0]),1)):F("",!0)])],32)]),footer:V(()=>[B("button",{class:"me-2 btn-blue",disabled:l.value,form:"form"},[de(ce,{"is-loading":l.value},{default:V(()=>[...N[2]||(N[2]=[K("Save",-1)])]),_:1},8,["is-loading"])],8,Ie),B("button",{onClick:b,class:"btn-gray"},"Cancel")]),_:1}))}});export{Oe as default};
