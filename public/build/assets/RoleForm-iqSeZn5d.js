import{aq as re,d as Y,x as Z,A as oe,o as D,c as z,b as B,g as H,e as S,a8 as G,Q as V,u as ae,R as Q,w as M,k as X,t as W,a as K,i as $,h as ie,v as le,n as q,f as de,_ as ce,a4 as ue,m as pe,l as fe,$ as he}from"./main-DNdNUUJ7.js";import{F as L}from"./formMode-Bz--3d4P.js";import{_ as be}from"./BranchSelect.vue_vue_type_script_setup_true_lang-BebEpNal.js";import"./multiselect-K4eUN8Nz.js";var ee={exports:{}},te={exports:{}};(function(T,O){(function(g,N){T.exports=N()})(window,function(){return function(g){var N={};function i(r){if(N[r])return N[r].exports;var o=N[r]={i:r,l:!1,exports:{}};return g[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=g,i.c=N,i.d=function(r,o,l){i.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:l})},i.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,o){if(1&o&&(r=i(r)),8&o||4&o&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&o&&typeof r!="string")for(var p in r)i.d(l,p,function(w){return r[w]}.bind(null,p));return l},i.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(o,"a",o),o},i.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},i.p="",i(i.s=0)}([function(g,N,i){Object.defineProperty(N,"__esModule",{value:!0}),N.default=d;var r,o=(r=i(1))&&r.__esModule?r:{default:r};function l(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var c=[],h=!0,b=!1,k=void 0;try{for(var C,x=n[Symbol.iterator]();!(h=(C=x.next()).done)&&(c.push(C.value),!s||c.length!==s);h=!0);}catch(m){b=!0,k=m}finally{try{h||x.return==null||x.return()}finally{if(b)throw k}}return c}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){var t={};return e.reduce(function(n,s){return t[s]||(t[s]=!0,n.push(s)),n},[])}function w(e,t){requestAnimationFrame(function(){t.enter(),requestAnimationFrame(function(){t.active(),setTimeout(function(){t.leave()},e)})})}function d(e,t){var n=this;this.treeNodes=[],this.nodesById={},this.leafNodesById={},this.liElementsById={},this.willUpdateNodesById={},this.container=e,this.options=Object.assign({selectMode:"checkbox",values:[],disables:[],beforeLoad:null,loaded:null,url:null,method:"GET",closeDepth:null},t),Object.defineProperties(this,{values:{get:function(){return this.getValues()},set:function(s){return this.setValues(p(s))}},disables:{get:function(){return this.getDisables()},set:function(s){return this.setDisables(p(s))}},selectedNodes:{get:function(){var s=[],c=this.nodesById;for(var h in c)if(c.hasOwnProperty(h)&&(c[h].status===1||c[h].status===2)){var b=Object.assign({},c[h]);delete b.parent,delete b.children,s.push(b)}return s}},disabledNodes:{get:function(){var s=[],c=this.nodesById;for(var h in c)if(c.hasOwnProperty(h)&&c[h].disabled){var b=Object.assign({},c[h]);delete b.parent,s.push(b)}return s}}}),this.options.url?this.load(function(s){n.init(s)}):this.init(this.options.data)}i(2),d.prototype.init=function(e){var t=d.parseTreeData(e),n=t.treeNodes,s=t.nodesById,c=t.leafNodesById,h=t.defaultValues,b=t.defaultDisables;this.treeNodes=n,this.nodesById=s,this.leafNodesById=c,this.render(this.treeNodes);var k=this.options,C=k.values,x=k.disables,m=k.loaded;C&&C.length&&(h=C),h.length&&this.setValues(h),x&&x.length&&(b=x),b.length&&this.setDisables(b),m&&m.call(this)},d.prototype.load=function(e){var t=this.options,n=t.url,s=t.method,c=t.beforeLoad;(0,o.default)({url:n,method:s,success:function(h){var b=h;c&&(b=c(h)),e(b)}})},d.prototype.render=function(e){var t=d.createRootEle();t.appendChild(this.buildTree(e,0)),this.bindEvent(t);var n=document.querySelector(this.container);(function(s){for(;s.firstChild;)s.removeChild(s.firstChild)})(n),n.appendChild(t)},d.prototype.buildTree=function(e,t){var n=this,s=d.createUlEle();return e&&e.length&&e.forEach(function(c){var h=d.createLiEle(c,t===n.options.closeDepth-1);n.liElementsById[c.id]=h;var b=null;c.children&&c.children.length&&(b=n.buildTree(c.children,t+1)),b&&h.appendChild(b),s.appendChild(h)}),s},d.prototype.bindEvent=function(e){var t=this;e.addEventListener("click",function(n){var s=n.target;s.nodeName==="SPAN"&&(s.classList.contains("treejs-checkbox")||s.classList.contains("treejs-label"))?t.onItemClick(s.parentNode.nodeId):s.nodeName==="LI"&&s.classList.contains("treejs-node")?t.onItemClick(s.nodeId):s.nodeName==="SPAN"&&s.classList.contains("treejs-switcher")&&t.onSwitcherClick(s)},!1)},d.prototype.onItemClick=function(e){var t=this.nodesById[e],n=this.options.onChange;t.disabled||(this.setValue(e),this.updateLiElements()),n&&n.call(this)},d.prototype.setValue=function(e){var t=this.nodesById[e];if(t){var n=t.status,s=n===1||n===2?0:2;t.status=s,this.markWillUpdateNode(t),this.walkUp(t,"status"),this.walkDown(t,"status")}},d.prototype.getValues=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&(this.leafNodesById[t].status!==1&&this.leafNodesById[t].status!==2||e.push(t));return e},d.prototype.setValues=function(e){var t=this;this.emptyNodesCheckStatus(),e.forEach(function(s){t.setValue(s)}),this.updateLiElements();var n=this.options.onChange;n&&n.call(this)},d.prototype.setDisable=function(e){var t=this.nodesById[e];t&&(t.disabled||(t.disabled=!0,this.markWillUpdateNode(t),this.walkUp(t,"disabled"),this.walkDown(t,"disabled")))},d.prototype.getDisables=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&this.leafNodesById[t].disabled&&e.push(t);return e},d.prototype.setDisables=function(e){var t=this;this.emptyNodesDisable(),e.forEach(function(n){t.setDisable(n)}),this.updateLiElements()},d.prototype.emptyNodesCheckStatus=function(){this.willUpdateNodesById=this.getSelectedNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled||(e.status=0)})},d.prototype.emptyNodesDisable=function(){this.willUpdateNodesById=this.getDisabledNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled=!1})},d.prototype.getSelectedNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),s=n[0],c=n[1];return c.status!==1&&c.status!==2||(e[s]=c),e},{})},d.prototype.getDisabledNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),s=n[0],c=n[1];return c.disabled&&(e[s]=c),e},{})},d.prototype.updateLiElements=function(){var e=this;Object.values(this.willUpdateNodesById).forEach(function(t){e.updateLiElement(t)}),this.willUpdateNodesById={}},d.prototype.markWillUpdateNode=function(e){this.willUpdateNodesById[e.id]=e},d.prototype.onSwitcherClick=function(e){var t=e.parentNode,n=t.lastChild,s=n.scrollHeight;t.classList.contains("treejs-node__close")?w(150,{enter:function(){n.style.height=0,n.style.opacity=0},active:function(){n.style.height="".concat(s,"px"),n.style.opacity=1},leave:function(){n.style.height="",n.style.opacity="",t.classList.remove("treejs-node__close")}}):w(150,{enter:function(){n.style.height="".concat(s,"px"),n.style.opacity=1},active:function(){n.style.height=0,n.style.opacity=0},leave:function(){n.style.height="",n.style.opacity="",t.classList.add("treejs-node__close")}})},d.prototype.walkUp=function(e,t){var n=e.parent;if(n){if(t==="status"){var s=null,c=n.children.reduce(function(b,k){return isNaN(k.status)?b:b+k.status},0);if(s=c?c===2*n.children.length?2:1:0,n.status===s)return;n.status=s}else{var h=n.children.reduce(function(b,k){return b&&k.disabled},!0);if(n.disabled===h)return;n.disabled=h}this.markWillUpdateNode(n),this.walkUp(n,t)}},d.prototype.walkDown=function(e,t){var n=this;e.children&&e.children.length&&e.children.forEach(function(s){t==="status"&&s.disabled||(s[t]=e[t],n.markWillUpdateNode(s),n.walkDown(s,t))})},d.prototype.updateLiElement=function(e){var t=this.liElementsById[e.id].classList;switch(e.status){case 0:t.remove("treejs-node__halfchecked","treejs-node__checked");break;case 1:t.remove("treejs-node__checked"),t.add("treejs-node__halfchecked");break;case 2:t.remove("treejs-node__halfchecked"),t.add("treejs-node__checked")}switch(e.disabled){case!0:t.contains("treejs-node__disabled")||t.add("treejs-node__disabled");break;case!1:t.contains("treejs-node__disabled")&&t.remove("treejs-node__disabled")}},d.parseTreeData=function(e){var t,n=(t=e,JSON.parse(JSON.stringify(t))),s={},c={},h=[],b=[];return function k(C,x){C.forEach(function(m){s[m.id]=m,m.checked&&h.push(m.id),m.disabled&&b.push(m.id),x&&(m.parent=x),m.children&&m.children.length?k(m.children,m):c[m.id]=m})}(n),{treeNodes:n,nodesById:s,leafNodesById:c,defaultValues:h,defaultDisables:b}},d.createRootEle=function(){var e=document.createElement("div");return e.classList.add("treejs"),e},d.createUlEle=function(){var e=document.createElement("ul");return e.classList.add("treejs-nodes"),e},d.createLiEle=function(e,t){var n=document.createElement("li");if(n.classList.add("treejs-node"),t&&n.classList.add("treejs-node__close"),e.children&&e.children.length){var s=document.createElement("span");s.classList.add("treejs-switcher"),n.appendChild(s)}else n.classList.add("treejs-placeholder");var c=document.createElement("span");c.classList.add("treejs-checkbox"),n.appendChild(c);var h=document.createElement("span");h.classList.add("treejs-label");var b=document.createTextNode(e.text);return h.appendChild(b),n.appendChild(h),n.nodeId=e.id,n}},function(g,N,i){Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(r){var o={method:"GET",url:"",async:!0,success:null,failed:null,"Content-Type":"application/json; charset=utf-8"},l=Object.assign(o,r),p=new XMLHttpRequest,w=Object.entries(l.data).reduce(function(e,t){var n,s,c=(s=2,function(k){if(Array.isArray(k))return k}(n=t)||function(k,C){var x=[],m=!0,A=!1,P=void 0;try{for(var u,a=k[Symbol.iterator]();!(m=(u=a.next()).done)&&(x.push(u.value),!C||x.length!==C);m=!0);}catch(f){A=!0,P=f}finally{try{m||a.return==null||a.return()}finally{if(A)throw P}}return x}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),h=c[0],b=c[1];return e.push("".concat(h,"=").concat(b)),e},[]).join("&");if(l.method.toUpperCase()==="POST")p.open(l.method,l.url,l.async),p.setRequestHeader("Content-Type",l["Content-Type"]),p.send(w);else if(l.method.toUpperCase()==="GET"){var d=l.url;w&&(d.indexOf("?"),d+="&".concat(w)),p.open(l.method,d,l.async),p.setRequestHeader("Content-Type",l["Content-Type"]),p.send(null)}p.onreadystatechange=function(){if(p.readyState===4&&p.status===200){var e=p.responseText;l["Content-Type"]===o["Content-Type"]&&(e=JSON.parse(e)),l.success&&l.success(e)}else l.failed&&l.failed(p.status)}}},function(g,N,i){var r=i(3);typeof r=="string"&&(r=[[g.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(5)(r,o),r.locals&&(g.exports=r.locals)},function(g,N,i){(g.exports=i(4)(!1)).push([g.i,`.treejs {
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
`,""])},function(g,N){g.exports=function(i){var r=[];return r.toString=function(){return this.map(function(o){var l=function(p,w){var d=p[1]||"",e=p[3];if(!e)return d;if(w&&typeof btoa=="function"){var t=(s=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),n=e.sources.map(function(c){return"/*# sourceURL="+e.sourceRoot+c+" */"});return[d].concat(n).concat([t]).join(`
`)}var s;return[d].join(`
`)}(o,i);return o[2]?"@media "+o[2]+"{"+l+"}":l}).join("")},r.i=function(o,l){typeof o=="string"&&(o=[[null,o,""]]);for(var p={},w=0;w<this.length;w++){var d=this[w][0];typeof d=="number"&&(p[d]=!0)}for(w=0;w<o.length;w++){var e=o[w];typeof e[0]=="number"&&p[e[0]]||(l&&!e[2]?e[2]=l:l&&(e[2]="("+e[2]+") and ("+l+")"),r.push(e))}},r}},function(g,N,i){var r,o,l={},p=(r=function(){return window&&document&&document.all&&!window.atob},function(){return typeof o>"u"&&(o=r.apply(this,arguments)),o}),w=function(u){var a={};return function(f){if(typeof f=="function")return f();if(typeof a[f]>"u"){var v=function(_){return document.querySelector(_)}.call(this,f);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}a[f]=v}return a[f]}}(),d=null,e=0,t=[],n=i(6);function s(u,a){for(var f=0;f<u.length;f++){var v=u[f],_=l[v.id];if(_){_.refs++;for(var j=0;j<_.parts.length;j++)_.parts[j](v.parts[j]);for(;j<v.parts.length;j++)_.parts.push(x(v.parts[j],a))}else{var I=[];for(j=0;j<v.parts.length;j++)I.push(x(v.parts[j],a));l[v.id]={id:v.id,refs:1,parts:I}}}}function c(u,a){for(var f=[],v={},_=0;_<u.length;_++){var j=u[_],I=a.base?j[0]+a.base:j[0],y={css:j[1],media:j[2],sourceMap:j[3]};v[I]?v[I].parts.push(y):f.push(v[I]={id:I,parts:[y]})}return f}function h(u,a){var f=w(u.insertInto);if(!f)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var v=t[t.length-1];if(u.insertAt==="top")v?v.nextSibling?f.insertBefore(a,v.nextSibling):f.appendChild(a):f.insertBefore(a,f.firstChild),t.push(a);else if(u.insertAt==="bottom")f.appendChild(a);else{if(typeof u.insertAt!="object"||!u.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var _=w(u.insertInto+" "+u.insertAt.before);f.insertBefore(a,_)}}function b(u){if(u.parentNode===null)return!1;u.parentNode.removeChild(u);var a=t.indexOf(u);a>=0&&t.splice(a,1)}function k(u){var a=document.createElement("style");return u.attrs.type===void 0&&(u.attrs.type="text/css"),C(a,u.attrs),h(u,a),a}function C(u,a){Object.keys(a).forEach(function(f){u.setAttribute(f,a[f])})}function x(u,a){var f,v,_,j;if(a.transform&&u.css){if(!(j=a.transform(u.css)))return function(){};u.css=j}if(a.singleton){var I=e++;f=d||(d=k(a)),v=P.bind(null,f,I,!1),_=P.bind(null,f,I,!0)}else u.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(f=function(y){var E=document.createElement("link");return y.attrs.type===void 0&&(y.attrs.type="text/css"),y.attrs.rel="stylesheet",C(E,y.attrs),h(y,E),E}(a),v=function(y,E,R){var U=R.css,F=R.sourceMap,ne=E.convertToAbsoluteUrls===void 0&&F;(E.convertToAbsoluteUrls||ne)&&(U=n(U)),F&&(U+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(F))))+" */");var se=new Blob([U],{type:"text/css"}),J=y.href;y.href=URL.createObjectURL(se),J&&URL.revokeObjectURL(J)}.bind(null,f,a),_=function(){b(f),f.href&&URL.revokeObjectURL(f.href)}):(f=k(a),v=function(y,E){var R=E.css,U=E.media;if(U&&y.setAttribute("media",U),y.styleSheet)y.styleSheet.cssText=R;else{for(;y.firstChild;)y.removeChild(y.firstChild);y.appendChild(document.createTextNode(R))}}.bind(null,f),_=function(){b(f)});return v(u),function(y){if(y){if(y.css===u.css&&y.media===u.media&&y.sourceMap===u.sourceMap)return;v(u=y)}else _()}}g.exports=function(u,a){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs=typeof a.attrs=="object"?a.attrs:{},a.singleton||typeof a.singleton=="boolean"||(a.singleton=p()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var f=c(u,a);return s(f,a),function(v){for(var _=[],j=0;j<f.length;j++){var I=f[j];(y=l[I.id]).refs--,_.push(y)}for(v&&s(c(v,a),a),j=0;j<_.length;j++){var y;if((y=_[j]).refs===0){for(var E=0;E<y.parts.length;E++)y.parts[E]();delete l[y.id]}}}};var m,A=(m=[],function(u,a){return m[u]=a,m.filter(Boolean).join(`
`)});function P(u,a,f,v){var _=f?"":v.css;if(u.styleSheet)u.styleSheet.cssText=A(a,_);else{var j=document.createTextNode(_),I=u.childNodes;I[a]&&u.removeChild(I[a]),I.length?u.insertBefore(j,I[a]):u.appendChild(j)}}},function(g,N){g.exports=function(i){var r=typeof window<"u"&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var o=r.protocol+"//"+r.host,l=o+r.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(p,w){var d,e=w.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e)?p:(d=e.indexOf("//")===0?e:e.indexOf("/")===0?o+e:l+e.replace(/^\.\//,""),"url("+JSON.stringify(d)+")")})}}]).default})})(te);var ve=te.exports;ee.exports=ve;var me=ee.exports;const ye=re(me),je={class:"mb-1 flex items-center gap-1 pt-2 ps-2"},ge=B("div",{id:"treeselect",class:"overflow-y-auto max-h-[13rem]"},null,-1),we=Y({__name:"Treeselect",props:{modelValue:{},options:{}},emits:["update:modelValue"],setup(T,{emit:O}){const g=T,N=O;let i=null;Z(()=>{r()});const r=()=>{i=new ye("#treeselect",{data:g.options,values:g.modelValue,closeDepth:1,onChange:function(){N("update:modelValue",this.values)}})},o=()=>{i.values=g.options.map(l=>l.id)};return oe(()=>g.modelValue,l=>{l===void 0&&(i.values=[])}),(l,p)=>(D(),z("div",null,[B("div",je,[B("span",{class:"p-1 text-xs btn-blue",onClick:o},"Check All"),B("span",{class:"p-1 text-xs btn-gray",onClick:p[0]||(p[0]=w=>H(i).values=[])},"Clear")]),ge]))}}),xe=()=>{const T=S([]),O=S([]),g=async()=>{const{data:r}=await V.get("/api/permissions/list");O.value=r},N=async()=>{await g();let r=O.value.map(o=>o.split(".")[0]);return r=[...new Set(r)],r.forEach(o=>{T.value.push(i(o))}),T.value},i=r=>{const o={id:r,text:G.startCase(r),children:[]};return O.value.filter(p=>p.startsWith(r+".")).forEach(p=>o.children.push({id:p,text:G.startCase(p.split(".")[1])})),o};return{getPermissionsTree:N}},_e={key:0,class:"relative"},ke={class:"relative"},Ne={key:0,class:"text-sm text-red-500"},Ce={class:"relative"},Ie={key:1,class:"text-sm text-red-500"},Ee=["disabled"],Ue=Y({__name:"RoleForm",emits:["close"],setup(T,{emit:O}){const g=pe(),N=fe(),i=S({}),{getPermissionsTree:r}=xe(),o=S(L.Create),l=S(!1),p=S({}),w=S(null),d=ae().user.branches,e=O;Z(async()=>{d.length===1&&(i.value.branchId=d[0].id),g.path.endsWith("/edit")&&(o.value=L.Edit),g.path.endsWith("/clone")&&(o.value=L.Clone),o.value!==L.Create&&await t(g.params.id),w.value=await r()});const t=async C=>{const{data:x}=await V.get(`/api/roles/${C}`);i.value=x.data},n=async()=>{l.value=!0;try{o.value===L.Create?await s():o.value===L.Clone?await c():o.value===L.Edit&&await h(),p.value={},he.fire()}catch(C){p.value=C.response.data.errors??{}}l.value=!1},s=async()=>{await V.post("/api/roles",i.value),b()},c=async()=>{await V.post("/api/roles",i.value),k()},h=async()=>{await V.patch(`/api/roles/${i.value.id}`,i.value),k()},b=()=>{i.value={},p.value=[]},k=()=>{e("close"),N.back()};return(C,x)=>(D(),Q(ue,null,{header:M(()=>[X(W(`${o.value.capitalize()} ${o.value===H(L).Create?"New":""} Role`),1)]),body:M(()=>[B("form",{id:"form",onSubmit:de(n,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[H(d).length>1?(D(),z("div",_e,[K(be,{modelValue:i.value.branchId,"onUpdate:modelValue":x[0]||(x[0]=m=>i.value.branchId=m),error:p.value.branchId},null,8,["modelValue","error"])])):$("",!0),B("div",ke,[ie(B("input",{"onUpdate:modelValue":x[1]||(x[1]=m=>i.value.displayName=m),class:q(["input peer",{"border-red-500":p.value.hasOwnProperty("displayName")}])},null,2),[[le,i.value.displayName]]),B("label",{class:q(["label",{"text-red-500":p.value.hasOwnProperty("displayName")}])},"Name",2),p.value.hasOwnProperty("displayName")?(D(),z("p",Ne,W(p.value.displayName[0]),1)):$("",!0)]),B("div",Ce,[w.value?(D(),Q(we,{key:0,options:w.value,modelValue:i.value.permissions,"onUpdate:modelValue":x[2]||(x[2]=m=>i.value.permissions=m),class:q(["rounded border-2 border-gray-300 pt-1",{"border-red-500":p.value.hasOwnProperty("permissions")}])},null,8,["options","modelValue","class"])):$("",!0),B("label",{class:q(["label",{"text-red-500":p.value.hasOwnProperty("permissions")}])},"Permissions",2),p.value.hasOwnProperty("permissions")?(D(),z("p",Ie,W(p.value.permissions[0]),1)):$("",!0)])],32)]),footer:M(()=>[B("button",{class:"me-2 btn-blue",disabled:l.value,form:"form"},[K(ce,{"is-loading":l.value},{default:M(()=>[X("Save")]),_:1},8,["is-loading"])],8,Ee),B("button",{onClick:k,class:"btn-gray"},"Cancel")]),_:1}))}});export{Ue as default};
