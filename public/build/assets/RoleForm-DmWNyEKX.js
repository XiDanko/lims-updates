import{a9 as ae,d as ne,x as re,A as ie,c as z,o as R,a as B,i as G,g as S,Q as V,a1 as X,u as le,f as de,R as K,w as M,a6 as ce,e as ue,b as Y,p as pe,m as Z,h as fe,k as $,j as he,n as q,v as be,t as W,a0 as ve}from"./main-DhkAUsdX.js";import{F as T}from"./formMode-Bz--3d4P.js";import{_ as me}from"./BranchSelect.vue_vue_type_script_setup_true_lang-Bq9HUZV_.js";import"./multiselect-BOr53ySm.js";var H={exports:{}},J={exports:{}},ee;function ye(){return ee||(ee=1,function(L,O){(function(g,N){L.exports=N()})(window,function(){return function(g){var N={};function i(s){if(N[s])return N[s].exports;var o=N[s]={i:s,l:!1,exports:{}};return g[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=g,i.c=N,i.d=function(s,o,l){i.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,o){if(1&o&&(s=i(s)),8&o||4&o&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),2&o&&typeof s!="string")for(var u in s)i.d(l,u,function(w){return s[w]}.bind(null,u));return l},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=0)}([function(g,N,i){Object.defineProperty(N,"__esModule",{value:!0}),N.default=d;var s,o=(s=i(1))&&s.__esModule?s:{default:s};function l(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,r){var c=[],h=!0,b=!1,k=void 0;try{for(var C,x=n[Symbol.iterator]();!(h=(C=x.next()).done)&&(c.push(C.value),!r||c.length!==r);h=!0);}catch(m){b=!0,k=m}finally{try{h||x.return==null||x.return()}finally{if(b)throw k}}return c}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e){var t={};return e.reduce(function(n,r){return t[r]||(t[r]=!0,n.push(r)),n},[])}function w(e,t){requestAnimationFrame(function(){t.enter(),requestAnimationFrame(function(){t.active(),setTimeout(function(){t.leave()},e)})})}function d(e,t){var n=this;this.treeNodes=[],this.nodesById={},this.leafNodesById={},this.liElementsById={},this.willUpdateNodesById={},this.container=e,this.options=Object.assign({selectMode:"checkbox",values:[],disables:[],beforeLoad:null,loaded:null,url:null,method:"GET",closeDepth:null},t),Object.defineProperties(this,{values:{get:function(){return this.getValues()},set:function(r){return this.setValues(u(r))}},disables:{get:function(){return this.getDisables()},set:function(r){return this.setDisables(u(r))}},selectedNodes:{get:function(){var r=[],c=this.nodesById;for(var h in c)if(c.hasOwnProperty(h)&&(c[h].status===1||c[h].status===2)){var b=Object.assign({},c[h]);delete b.parent,delete b.children,r.push(b)}return r}},disabledNodes:{get:function(){var r=[],c=this.nodesById;for(var h in c)if(c.hasOwnProperty(h)&&c[h].disabled){var b=Object.assign({},c[h]);delete b.parent,r.push(b)}return r}}}),this.options.url?this.load(function(r){n.init(r)}):this.init(this.options.data)}i(2),d.prototype.init=function(e){var t=d.parseTreeData(e),n=t.treeNodes,r=t.nodesById,c=t.leafNodesById,h=t.defaultValues,b=t.defaultDisables;this.treeNodes=n,this.nodesById=r,this.leafNodesById=c,this.render(this.treeNodes);var k=this.options,C=k.values,x=k.disables,m=k.loaded;C&&C.length&&(h=C),h.length&&this.setValues(h),x&&x.length&&(b=x),b.length&&this.setDisables(b),m&&m.call(this)},d.prototype.load=function(e){var t=this.options,n=t.url,r=t.method,c=t.beforeLoad;(0,o.default)({url:n,method:r,success:function(h){var b=h;c&&(b=c(h)),e(b)}})},d.prototype.render=function(e){var t=d.createRootEle();t.appendChild(this.buildTree(e,0)),this.bindEvent(t);var n=document.querySelector(this.container);(function(r){for(;r.firstChild;)r.removeChild(r.firstChild)})(n),n.appendChild(t)},d.prototype.buildTree=function(e,t){var n=this,r=d.createUlEle();return e&&e.length&&e.forEach(function(c){var h=d.createLiEle(c,t===n.options.closeDepth-1);n.liElementsById[c.id]=h;var b=null;c.children&&c.children.length&&(b=n.buildTree(c.children,t+1)),b&&h.appendChild(b),r.appendChild(h)}),r},d.prototype.bindEvent=function(e){var t=this;e.addEventListener("click",function(n){var r=n.target;r.nodeName==="SPAN"&&(r.classList.contains("treejs-checkbox")||r.classList.contains("treejs-label"))?t.onItemClick(r.parentNode.nodeId):r.nodeName==="LI"&&r.classList.contains("treejs-node")?t.onItemClick(r.nodeId):r.nodeName==="SPAN"&&r.classList.contains("treejs-switcher")&&t.onSwitcherClick(r)},!1)},d.prototype.onItemClick=function(e){var t=this.nodesById[e],n=this.options.onChange;t.disabled||(this.setValue(e),this.updateLiElements()),n&&n.call(this)},d.prototype.setValue=function(e){var t=this.nodesById[e];if(t){var n=t.status,r=n===1||n===2?0:2;t.status=r,this.markWillUpdateNode(t),this.walkUp(t,"status"),this.walkDown(t,"status")}},d.prototype.getValues=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&(this.leafNodesById[t].status!==1&&this.leafNodesById[t].status!==2||e.push(t));return e},d.prototype.setValues=function(e){var t=this;this.emptyNodesCheckStatus(),e.forEach(function(r){t.setValue(r)}),this.updateLiElements();var n=this.options.onChange;n&&n.call(this)},d.prototype.setDisable=function(e){var t=this.nodesById[e];t&&(t.disabled||(t.disabled=!0,this.markWillUpdateNode(t),this.walkUp(t,"disabled"),this.walkDown(t,"disabled")))},d.prototype.getDisables=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&this.leafNodesById[t].disabled&&e.push(t);return e},d.prototype.setDisables=function(e){var t=this;this.emptyNodesDisable(),e.forEach(function(n){t.setDisable(n)}),this.updateLiElements()},d.prototype.emptyNodesCheckStatus=function(){this.willUpdateNodesById=this.getSelectedNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled||(e.status=0)})},d.prototype.emptyNodesDisable=function(){this.willUpdateNodesById=this.getDisabledNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled=!1})},d.prototype.getSelectedNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),r=n[0],c=n[1];return c.status!==1&&c.status!==2||(e[r]=c),e},{})},d.prototype.getDisabledNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),r=n[0],c=n[1];return c.disabled&&(e[r]=c),e},{})},d.prototype.updateLiElements=function(){var e=this;Object.values(this.willUpdateNodesById).forEach(function(t){e.updateLiElement(t)}),this.willUpdateNodesById={}},d.prototype.markWillUpdateNode=function(e){this.willUpdateNodesById[e.id]=e},d.prototype.onSwitcherClick=function(e){var t=e.parentNode,n=t.lastChild,r=n.scrollHeight;t.classList.contains("treejs-node__close")?w(150,{enter:function(){n.style.height=0,n.style.opacity=0},active:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},leave:function(){n.style.height="",n.style.opacity="",t.classList.remove("treejs-node__close")}}):w(150,{enter:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},active:function(){n.style.height=0,n.style.opacity=0},leave:function(){n.style.height="",n.style.opacity="",t.classList.add("treejs-node__close")}})},d.prototype.walkUp=function(e,t){var n=e.parent;if(n){if(t==="status"){var r=null,c=n.children.reduce(function(b,k){return isNaN(k.status)?b:b+k.status},0);if(r=c?c===2*n.children.length?2:1:0,n.status===r)return;n.status=r}else{var h=n.children.reduce(function(b,k){return b&&k.disabled},!0);if(n.disabled===h)return;n.disabled=h}this.markWillUpdateNode(n),this.walkUp(n,t)}},d.prototype.walkDown=function(e,t){var n=this;e.children&&e.children.length&&e.children.forEach(function(r){t==="status"&&r.disabled||(r[t]=e[t],n.markWillUpdateNode(r),n.walkDown(r,t))})},d.prototype.updateLiElement=function(e){var t=this.liElementsById[e.id].classList;switch(e.status){case 0:t.remove("treejs-node__halfchecked","treejs-node__checked");break;case 1:t.remove("treejs-node__checked"),t.add("treejs-node__halfchecked");break;case 2:t.remove("treejs-node__halfchecked"),t.add("treejs-node__checked")}switch(e.disabled){case!0:t.contains("treejs-node__disabled")||t.add("treejs-node__disabled");break;case!1:t.contains("treejs-node__disabled")&&t.remove("treejs-node__disabled")}},d.parseTreeData=function(e){var t,n=(t=e,JSON.parse(JSON.stringify(t))),r={},c={},h=[],b=[];return function k(C,x){C.forEach(function(m){r[m.id]=m,m.checked&&h.push(m.id),m.disabled&&b.push(m.id),x&&(m.parent=x),m.children&&m.children.length?k(m.children,m):c[m.id]=m})}(n),{treeNodes:n,nodesById:r,leafNodesById:c,defaultValues:h,defaultDisables:b}},d.createRootEle=function(){var e=document.createElement("div");return e.classList.add("treejs"),e},d.createUlEle=function(){var e=document.createElement("ul");return e.classList.add("treejs-nodes"),e},d.createLiEle=function(e,t){var n=document.createElement("li");if(n.classList.add("treejs-node"),t&&n.classList.add("treejs-node__close"),e.children&&e.children.length){var r=document.createElement("span");r.classList.add("treejs-switcher"),n.appendChild(r)}else n.classList.add("treejs-placeholder");var c=document.createElement("span");c.classList.add("treejs-checkbox"),n.appendChild(c);var h=document.createElement("span");h.classList.add("treejs-label");var b=document.createTextNode(e.text);return h.appendChild(b),n.appendChild(h),n.nodeId=e.id,n}},function(g,N,i){Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(s){var o={method:"GET",url:"",async:!0,success:null,failed:null,"Content-Type":"application/json; charset=utf-8"},l=Object.assign(o,s),u=new XMLHttpRequest,w=Object.entries(l.data).reduce(function(e,t){var n,r,c=(r=2,function(k){if(Array.isArray(k))return k}(n=t)||function(k,C){var x=[],m=!0,A=!1,D=void 0;try{for(var p,a=k[Symbol.iterator]();!(m=(p=a.next()).done)&&(x.push(p.value),!C||x.length!==C);m=!0);}catch(f){A=!0,D=f}finally{try{m||a.return==null||a.return()}finally{if(A)throw D}}return x}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),h=c[0],b=c[1];return e.push("".concat(h,"=").concat(b)),e},[]).join("&");if(l.method.toUpperCase()==="POST")u.open(l.method,l.url,l.async),u.setRequestHeader("Content-Type",l["Content-Type"]),u.send(w);else if(l.method.toUpperCase()==="GET"){var d=l.url;w&&(d.indexOf("?"),d+="&".concat(w)),u.open(l.method,d,l.async),u.setRequestHeader("Content-Type",l["Content-Type"]),u.send(null)}u.onreadystatechange=function(){if(u.readyState===4&&u.status===200){var e=u.responseText;l["Content-Type"]===o["Content-Type"]&&(e=JSON.parse(e)),l.success&&l.success(e)}else l.failed&&l.failed(u.status)}}},function(g,N,i){var s=i(3);typeof s=="string"&&(s=[[g.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(5)(s,o),s.locals&&(g.exports=s.locals)},function(g,N,i){(g.exports=i(4)(!1)).push([g.i,`.treejs {
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
`,""])},function(g,N){g.exports=function(i){var s=[];return s.toString=function(){return this.map(function(o){var l=function(u,w){var d=u[1]||"",e=u[3];if(!e)return d;if(w&&typeof btoa=="function"){var t=(r=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),n=e.sources.map(function(c){return"/*# sourceURL="+e.sourceRoot+c+" */"});return[d].concat(n).concat([t]).join(`
`)}var r;return[d].join(`
`)}(o,i);return o[2]?"@media "+o[2]+"{"+l+"}":l}).join("")},s.i=function(o,l){typeof o=="string"&&(o=[[null,o,""]]);for(var u={},w=0;w<this.length;w++){var d=this[w][0];typeof d=="number"&&(u[d]=!0)}for(w=0;w<o.length;w++){var e=o[w];typeof e[0]=="number"&&u[e[0]]||(l&&!e[2]?e[2]=l:l&&(e[2]="("+e[2]+") and ("+l+")"),s.push(e))}},s}},function(g,N,i){var s,o,l={},u=(s=function(){return window&&document&&document.all&&!window.atob},function(){return typeof o>"u"&&(o=s.apply(this,arguments)),o}),w=function(p){var a={};return function(f){if(typeof f=="function")return f();if(typeof a[f]>"u"){var v=function(_){return document.querySelector(_)}.call(this,f);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}a[f]=v}return a[f]}}(),d=null,e=0,t=[],n=i(6);function r(p,a){for(var f=0;f<p.length;f++){var v=p[f],_=l[v.id];if(_){_.refs++;for(var j=0;j<_.parts.length;j++)_.parts[j](v.parts[j]);for(;j<v.parts.length;j++)_.parts.push(x(v.parts[j],a))}else{var I=[];for(j=0;j<v.parts.length;j++)I.push(x(v.parts[j],a));l[v.id]={id:v.id,refs:1,parts:I}}}}function c(p,a){for(var f=[],v={},_=0;_<p.length;_++){var j=p[_],I=a.base?j[0]+a.base:j[0],y={css:j[1],media:j[2],sourceMap:j[3]};v[I]?v[I].parts.push(y):f.push(v[I]={id:I,parts:[y]})}return f}function h(p,a){var f=w(p.insertInto);if(!f)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var v=t[t.length-1];if(p.insertAt==="top")v?v.nextSibling?f.insertBefore(a,v.nextSibling):f.appendChild(a):f.insertBefore(a,f.firstChild),t.push(a);else if(p.insertAt==="bottom")f.appendChild(a);else{if(typeof p.insertAt!="object"||!p.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var _=w(p.insertInto+" "+p.insertAt.before);f.insertBefore(a,_)}}function b(p){if(p.parentNode===null)return!1;p.parentNode.removeChild(p);var a=t.indexOf(p);a>=0&&t.splice(a,1)}function k(p){var a=document.createElement("style");return p.attrs.type===void 0&&(p.attrs.type="text/css"),C(a,p.attrs),h(p,a),a}function C(p,a){Object.keys(a).forEach(function(f){p.setAttribute(f,a[f])})}function x(p,a){var f,v,_,j;if(a.transform&&p.css){if(!(j=a.transform(p.css)))return function(){};p.css=j}if(a.singleton){var I=e++;f=d||(d=k(a)),v=D.bind(null,f,I,!1),_=D.bind(null,f,I,!0)}else p.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(f=function(y){var E=document.createElement("link");return y.attrs.type===void 0&&(y.attrs.type="text/css"),y.attrs.rel="stylesheet",C(E,y.attrs),h(y,E),E}(a),v=function(y,E,P){var U=P.css,F=P.sourceMap,se=E.convertToAbsoluteUrls===void 0&&F;(E.convertToAbsoluteUrls||se)&&(U=n(U)),F&&(U+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(F))))+" */");var oe=new Blob([U],{type:"text/css"}),Q=y.href;y.href=URL.createObjectURL(oe),Q&&URL.revokeObjectURL(Q)}.bind(null,f,a),_=function(){b(f),f.href&&URL.revokeObjectURL(f.href)}):(f=k(a),v=function(y,E){var P=E.css,U=E.media;if(U&&y.setAttribute("media",U),y.styleSheet)y.styleSheet.cssText=P;else{for(;y.firstChild;)y.removeChild(y.firstChild);y.appendChild(document.createTextNode(P))}}.bind(null,f),_=function(){b(f)});return v(p),function(y){if(y){if(y.css===p.css&&y.media===p.media&&y.sourceMap===p.sourceMap)return;v(p=y)}else _()}}g.exports=function(p,a){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs=typeof a.attrs=="object"?a.attrs:{},a.singleton||typeof a.singleton=="boolean"||(a.singleton=u()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var f=c(p,a);return r(f,a),function(v){for(var _=[],j=0;j<f.length;j++){var I=f[j];(y=l[I.id]).refs--,_.push(y)}for(v&&r(c(v,a),a),j=0;j<_.length;j++){var y;if((y=_[j]).refs===0){for(var E=0;E<y.parts.length;E++)y.parts[E]();delete l[y.id]}}}};var m,A=(m=[],function(p,a){return m[p]=a,m.filter(Boolean).join(`
`)});function D(p,a,f,v){var _=f?"":v.css;if(p.styleSheet)p.styleSheet.cssText=A(a,_);else{var j=document.createTextNode(_),I=p.childNodes;I[a]&&p.removeChild(I[a]),I.length?p.insertBefore(j,I[a]):p.appendChild(j)}}},function(g,N){g.exports=function(i){var s=typeof window<"u"&&window.location;if(!s)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var o=s.protocol+"//"+s.host,l=o+s.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(u,w){var d,e=w.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e)?u:(d=e.indexOf("//")===0?e:e.indexOf("/")===0?o+e:l+e.replace(/^\.\//,""),"url("+JSON.stringify(d)+")")})}}]).default})}(J)),J.exports}var te;function je(){return te||(te=1,H.exports=ye()),H.exports}var ge=je();const we=ae(ge),xe={class:"mb-1 flex items-center gap-1 pt-2 ps-2"},_e=ne({__name:"Treeselect",props:{modelValue:{},options:{}},emits:["update:modelValue"],setup(L,{emit:O}){const g=L,N=O;let i=null;re(()=>{s()});const s=()=>{i=new we("#treeselect",{data:g.options,values:g.modelValue,closeDepth:1,onChange:function(){N("update:modelValue",this.values)}})},o=()=>{i.values=g.options.map(l=>l.id)};return ie(()=>g.modelValue,l=>{l===void 0&&(i.values=[])}),(l,u)=>(R(),z("div",null,[B("div",xe,[B("span",{class:"p-1 text-xs btn-blue",onClick:o},"Check All"),B("span",{class:"p-1 text-xs btn-gray",onClick:u[0]||(u[0]=w=>G(i).values=[])},"Clear")]),u[1]||(u[1]=B("div",{id:"treeselect",class:"overflow-y-auto max-h-[13rem]"},null,-1))]))}}),ke=()=>{const L=S([]),O=S([]),g=async()=>{const{data:s}=await V.get("/api/permissions/list");O.value=s},N=async()=>{await g();let s=O.value.map(o=>o.split(".")[0]);return s=[...new Set(s)],s.forEach(o=>{L.value.push(i(o))}),L.value},i=s=>{const o={id:s,text:X.startCase(s),children:[]};return O.value.filter(u=>u.startsWith(s+".")).forEach(u=>o.children.push({id:u,text:X.startCase(u.split(".")[1])})),o};return{getPermissionsTree:N}},Ne={key:0,class:"relative"},Ce={class:"relative"},Ie={key:0,class:"text-sm text-red-500"},Ee={class:"relative"},Be={key:1,class:"text-sm text-red-500"},Oe=["disabled"],Re=ne({__name:"RoleForm",emits:["close"],setup(L,{emit:O}){const g=de(),N=ue(),i=S({}),{getPermissionsTree:s}=ke(),o=S(T.Create),l=S(!1),u=S({}),w=S(null),d=le().user.branches,e=O;re(async()=>{d.length===1&&(i.value.branchId=d[0].id),g.path.endsWith("/edit")&&(o.value=T.Edit),g.path.endsWith("/clone")&&(o.value=T.Clone),o.value!==T.Create&&await t(g.params.id),w.value=await s()});const t=async C=>{const{data:x}=await V.get(`/api/roles/${C}`);i.value=x.data},n=async()=>{l.value=!0;try{o.value===T.Create?await r():o.value===T.Clone?await c():o.value===T.Edit&&await h(),u.value={},ve.fire()}catch(C){u.value=C.response.data.errors??{}}l.value=!1},r=async()=>{await V.post("/api/roles",i.value),b()},c=async()=>{await V.post("/api/roles",i.value),k()},h=async()=>{await V.patch(`/api/roles/${i.value.id}`,i.value),k()},b=()=>{i.value={},u.value=[]},k=()=>{e("close"),N.back()};return(C,x)=>(R(),K(ce,null,{header:M(()=>[Z(W(`${o.value.capitalize()} ${o.value===G(T).Create?"New":""} Role`),1)]),body:M(()=>[B("form",{id:"form",onSubmit:fe(n,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[G(d).length>1?(R(),z("div",Ne,[Y(me,{class:"!input",modelValue:i.value.branchId,"onUpdate:modelValue":x[0]||(x[0]=m=>i.value.branchId=m),error:u.value.branchId},null,8,["modelValue","error"])])):$("",!0),B("div",Ce,[he(B("input",{"onUpdate:modelValue":x[1]||(x[1]=m=>i.value.displayName=m),class:q(["input peer",{"border-red-500":u.value.hasOwnProperty("displayName")}])},null,2),[[be,i.value.displayName]]),B("label",{class:q(["label",{"text-red-500":u.value.hasOwnProperty("displayName")}])},"Name",2),u.value.hasOwnProperty("displayName")?(R(),z("p",Ie,W(u.value.displayName[0]),1)):$("",!0)]),B("div",Ee,[w.value?(R(),K(_e,{key:0,options:w.value,modelValue:i.value.permissions,"onUpdate:modelValue":x[2]||(x[2]=m=>i.value.permissions=m),class:q(["rounded-sm border-2 border-gray-300 pt-1",{"border-red-500":u.value.hasOwnProperty("permissions")}])},null,8,["options","modelValue","class"])):$("",!0),B("label",{class:q(["label",{"text-red-500":u.value.hasOwnProperty("permissions")}])},"Permissions",2),u.value.hasOwnProperty("permissions")?(R(),z("p",Be,W(u.value.permissions[0]),1)):$("",!0)])],32)]),footer:M(()=>[B("button",{class:"me-2 btn-blue",disabled:l.value,form:"form"},[Y(pe,{"is-loading":l.value},{default:M(()=>x[3]||(x[3]=[Z("Save")])),_:1,__:[3]},8,["is-loading"])],8,Oe),B("button",{onClick:k,class:"btn-gray"},"Cancel")]),_:1}))}});export{Re as default};
