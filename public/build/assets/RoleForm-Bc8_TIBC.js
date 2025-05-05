import{a9 as re,d as Y,x as Z,A as oe,o as D,c as z,a as B,g as H,e as S,a1 as G,Q as V,u as ae,R as Q,w as M,k as X,t as W,b as K,i as $,h as ie,v as le,n as q,f as de,_ as ce,a6 as ue,m as fe,l as pe,a0 as he}from"./main-rf36NjhN.js";import{F as L}from"./formMode-Bz--3d4P.js";import{_ as be}from"./BranchSelect.vue_vue_type_script_setup_true_lang-84lGquNI.js";import"./multiselect-TdqO_bnB.js";var ee={exports:{}},te={exports:{}};(function(U,O){(function(g,N){U.exports=N()})(window,function(){return function(g){var N={};function i(r){if(N[r])return N[r].exports;var o=N[r]={i:r,l:!1,exports:{}};return g[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=g,i.c=N,i.d=function(r,o,l){i.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:l})},i.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,o){if(1&o&&(r=i(r)),8&o||4&o&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&o&&typeof r!="string")for(var u in r)i.d(l,u,function(x){return r[x]}.bind(null,u));return l},i.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(o,"a",o),o},i.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},i.p="",i(i.s=0)}([function(g,N,i){Object.defineProperty(N,"__esModule",{value:!0}),N.default=d;var r,o=(r=i(1))&&r.__esModule?r:{default:r};function l(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var c=[],h=!0,b=!1,k=void 0;try{for(var C,w=n[Symbol.iterator]();!(h=(C=w.next()).done)&&(c.push(C.value),!s||c.length!==s);h=!0);}catch(v){b=!0,k=v}finally{try{h||w.return==null||w.return()}finally{if(b)throw k}}return c}(e,t)}function u(e){var t={};return e.reduce(function(n,s){return t[s]||(t[s]=!0,n.push(s)),n},[])}function x(e,t){requestAnimationFrame(function(){t.enter(),requestAnimationFrame(function(){t.active(),setTimeout(function(){t.leave()},e)})})}function d(e,t){var n=this;this.treeNodes=[],this.nodesById={},this.leafNodesById={},this.liElementsById={},this.willUpdateNodesById={},this.container=e,this.options=Object.assign({selectMode:"checkbox",values:[],disables:[],beforeLoad:null,loaded:null,url:null,method:"GET",closeDepth:null},t),Object.defineProperties(this,{values:{get:function(){return this.getValues()},set:function(s){return this.setValues(u(s))}},disables:{get:function(){return this.getDisables()},set:function(s){return this.setDisables(u(s))}},selectedNodes:{get:function(){var s=[],c=this.nodesById;for(var h in c)if(c.hasOwnProperty(h)&&(c[h].status===1||c[h].status===2)){var b=Object.assign({},c[h]);delete b.parent,delete b.children,s.push(b)}return s}},disabledNodes:{get:function(){var s=[],c=this.nodesById;for(var h in c)if(c.hasOwnProperty(h)&&c[h].disabled){var b=Object.assign({},c[h]);delete b.parent,s.push(b)}return s}}}),this.options.url?this.load(function(s){n.init(s)}):this.init(this.options.data)}i(2),d.prototype.init=function(e){var t=d.parseTreeData(e),n=t.treeNodes,s=t.nodesById,c=t.leafNodesById,h=t.defaultValues,b=t.defaultDisables;this.treeNodes=n,this.nodesById=s,this.leafNodesById=c,this.render(this.treeNodes);var k=this.options,C=k.values,w=k.disables,v=k.loaded;C&&C.length&&(h=C),h.length&&this.setValues(h),w&&w.length&&(b=w),b.length&&this.setDisables(b),v&&v.call(this)},d.prototype.load=function(e){var t=this.options,n=t.url,s=t.method,c=t.beforeLoad;(0,o.default)({url:n,method:s,success:function(h){var b=h;c&&(b=c(h)),e(b)}})},d.prototype.render=function(e){var t=d.createRootEle();t.appendChild(this.buildTree(e,0)),this.bindEvent(t);var n=document.querySelector(this.container);(function(s){for(;s.firstChild;)s.removeChild(s.firstChild)})(n),n.appendChild(t)},d.prototype.buildTree=function(e,t){var n=this,s=d.createUlEle();return e&&e.length&&e.forEach(function(c){var h=d.createLiEle(c,t===n.options.closeDepth-1);n.liElementsById[c.id]=h;var b=null;c.children&&c.children.length&&(b=n.buildTree(c.children,t+1)),b&&h.appendChild(b),s.appendChild(h)}),s},d.prototype.bindEvent=function(e){var t=this;e.addEventListener("click",function(n){var s=n.target;s.nodeName==="SPAN"&&(s.classList.contains("treejs-checkbox")||s.classList.contains("treejs-label"))?t.onItemClick(s.parentNode.nodeId):s.nodeName==="LI"&&s.classList.contains("treejs-node")?t.onItemClick(s.nodeId):s.nodeName==="SPAN"&&s.classList.contains("treejs-switcher")&&t.onSwitcherClick(s)},!1)},d.prototype.onItemClick=function(e){var t=this.nodesById[e],n=this.options.onChange;t.disabled||(this.setValue(e),this.updateLiElements()),n&&n.call(this)},d.prototype.setValue=function(e){var t=this.nodesById[e];if(t){var n=t.status,s=n===1||n===2?0:2;t.status=s,this.markWillUpdateNode(t),this.walkUp(t,"status"),this.walkDown(t,"status")}},d.prototype.getValues=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&(this.leafNodesById[t].status!==1&&this.leafNodesById[t].status!==2||e.push(t));return e},d.prototype.setValues=function(e){var t=this;this.emptyNodesCheckStatus(),e.forEach(function(s){t.setValue(s)}),this.updateLiElements();var n=this.options.onChange;n&&n.call(this)},d.prototype.setDisable=function(e){var t=this.nodesById[e];t&&(t.disabled||(t.disabled=!0,this.markWillUpdateNode(t),this.walkUp(t,"disabled"),this.walkDown(t,"disabled")))},d.prototype.getDisables=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&this.leafNodesById[t].disabled&&e.push(t);return e},d.prototype.setDisables=function(e){var t=this;this.emptyNodesDisable(),e.forEach(function(n){t.setDisable(n)}),this.updateLiElements()},d.prototype.emptyNodesCheckStatus=function(){this.willUpdateNodesById=this.getSelectedNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled||(e.status=0)})},d.prototype.emptyNodesDisable=function(){this.willUpdateNodesById=this.getDisabledNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled=!1})},d.prototype.getSelectedNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),s=n[0],c=n[1];return c.status!==1&&c.status!==2||(e[s]=c),e},{})},d.prototype.getDisabledNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=l(t,2),s=n[0],c=n[1];return c.disabled&&(e[s]=c),e},{})},d.prototype.updateLiElements=function(){var e=this;Object.values(this.willUpdateNodesById).forEach(function(t){e.updateLiElement(t)}),this.willUpdateNodesById={}},d.prototype.markWillUpdateNode=function(e){this.willUpdateNodesById[e.id]=e},d.prototype.onSwitcherClick=function(e){var t=e.parentNode,n=t.lastChild,s=n.scrollHeight;t.classList.contains("treejs-node__close")?x(150,{enter:function(){n.style.height=0,n.style.opacity=0},active:function(){n.style.height="".concat(s,"px"),n.style.opacity=1},leave:function(){n.style.height="",n.style.opacity="",t.classList.remove("treejs-node__close")}}):x(150,{enter:function(){n.style.height="".concat(s,"px"),n.style.opacity=1},active:function(){n.style.height=0,n.style.opacity=0},leave:function(){n.style.height="",n.style.opacity="",t.classList.add("treejs-node__close")}})},d.prototype.walkUp=function(e,t){var n=e.parent;if(n){if(t==="status"){var s=null,c=n.children.reduce(function(b,k){return isNaN(k.status)?b:b+k.status},0);if(s=c?c===2*n.children.length?2:1:0,n.status===s)return;n.status=s}else{var h=n.children.reduce(function(b,k){return b&&k.disabled},!0);if(n.disabled===h)return;n.disabled=h}this.markWillUpdateNode(n),this.walkUp(n,t)}},d.prototype.walkDown=function(e,t){var n=this;e.children&&e.children.length&&e.children.forEach(function(s){t==="status"&&s.disabled||(s[t]=e[t],n.markWillUpdateNode(s),n.walkDown(s,t))})},d.prototype.updateLiElement=function(e){var t=this.liElementsById[e.id].classList;switch(e.status){case 0:t.remove("treejs-node__halfchecked","treejs-node__checked");break;case 1:t.remove("treejs-node__checked"),t.add("treejs-node__halfchecked");break;case 2:t.remove("treejs-node__halfchecked"),t.add("treejs-node__checked")}switch(e.disabled){case!0:t.contains("treejs-node__disabled")||t.add("treejs-node__disabled");break;case!1:t.contains("treejs-node__disabled")&&t.remove("treejs-node__disabled")}},d.parseTreeData=function(e){var t,n=(t=e,JSON.parse(JSON.stringify(t))),s={},c={},h=[],b=[];return function k(C,w){C.forEach(function(v){s[v.id]=v,v.checked&&h.push(v.id),v.disabled&&b.push(v.id),w&&(v.parent=w),v.children&&v.children.length?k(v.children,v):c[v.id]=v})}(n),{treeNodes:n,nodesById:s,leafNodesById:c,defaultValues:h,defaultDisables:b}},d.createRootEle=function(){var e=document.createElement("div");return e.classList.add("treejs"),e},d.createUlEle=function(){var e=document.createElement("ul");return e.classList.add("treejs-nodes"),e},d.createLiEle=function(e,t){var n=document.createElement("li");if(n.classList.add("treejs-node"),t&&n.classList.add("treejs-node__close"),e.children&&e.children.length){var s=document.createElement("span");s.classList.add("treejs-switcher"),n.appendChild(s)}else n.classList.add("treejs-placeholder");var c=document.createElement("span");c.classList.add("treejs-checkbox"),n.appendChild(c);var h=document.createElement("span");h.classList.add("treejs-label");var b=document.createTextNode(e.text);return h.appendChild(b),n.appendChild(h),n.nodeId=e.id,n}},function(g,N,i){Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(r){var o={method:"GET",url:"",async:!0,success:null,failed:null,"Content-Type":"application/json; charset=utf-8"},l=Object.assign(o,r),u=new XMLHttpRequest,x=Object.entries(l.data).reduce(function(e,t){var n,s,c=(s=2,function(k){if(Array.isArray(k))return k}(n=t)||function(k,C){var w=[],v=!0,A=!1,P=void 0;try{for(var f,a=k[Symbol.iterator]();!(v=(f=a.next()).done)&&(w.push(f.value),!C||w.length!==C);v=!0);}catch(p){A=!0,P=p}finally{try{v||a.return==null||a.return()}finally{if(A)throw P}}return w}(n,s)),h=c[0],b=c[1];return e.push("".concat(h,"=").concat(b)),e},[]).join("&");if(l.method.toUpperCase()==="POST")u.open(l.method,l.url,l.async),u.setRequestHeader("Content-Type",l["Content-Type"]),u.send(x);else if(l.method.toUpperCase()==="GET"){var d=l.url;x&&(d.indexOf("?"),d+="&".concat(x)),u.open(l.method,d,l.async),u.setRequestHeader("Content-Type",l["Content-Type"]),u.send(null)}u.onreadystatechange=function(){if(u.readyState===4&&u.status===200){var e=u.responseText;l["Content-Type"]===o["Content-Type"]&&(e=JSON.parse(e)),l.success&&l.success(e)}else l.failed&&l.failed(u.status)}}},function(g,N,i){var r=i(3);typeof r=="string"&&(r=[[g.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(5)(r,o),r.locals&&(g.exports=r.locals)},function(g,N,i){(g.exports=i(4)(!1)).push([g.i,`.treejs {
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
`,""])},function(g,N){g.exports=function(i){var r=[];return r.toString=function(){return this.map(function(o){var l=function(u,x){var d=u[1]||"",e=u[3];if(!e)return d;if(x&&typeof btoa=="function"){var t=(s=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),n=e.sources.map(function(c){return"/*# sourceURL="+e.sourceRoot+c+" */"});return[d].concat(n).concat([t]).join(`
`)}var s;return[d].join(`
`)}(o,i);return o[2]?"@media "+o[2]+"{"+l+"}":l}).join("")},r.i=function(o,l){typeof o=="string"&&(o=[[null,o,""]]);for(var u={},x=0;x<this.length;x++){var d=this[x][0];typeof d=="number"&&(u[d]=!0)}for(x=0;x<o.length;x++){var e=o[x];typeof e[0]=="number"&&u[e[0]]||(l&&!e[2]?e[2]=l:l&&(e[2]="("+e[2]+") and ("+l+")"),r.push(e))}},r}},function(g,N,i){var r,o,l={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return typeof o>"u"&&(o=r.apply(this,arguments)),o}),x=function(f){var a={};return function(p){if(typeof p=="function")return p();if(typeof a[p]>"u"){var m=function(_){return document.querySelector(_)}.call(this,p);if(window.HTMLIFrameElement&&m instanceof window.HTMLIFrameElement)try{m=m.contentDocument.head}catch{m=null}a[p]=m}return a[p]}}(),d=null,e=0,t=[],n=i(6);function s(f,a){for(var p=0;p<f.length;p++){var m=f[p],_=l[m.id];if(_){_.refs++;for(var j=0;j<_.parts.length;j++)_.parts[j](m.parts[j]);for(;j<m.parts.length;j++)_.parts.push(w(m.parts[j],a))}else{var I=[];for(j=0;j<m.parts.length;j++)I.push(w(m.parts[j],a));l[m.id]={id:m.id,refs:1,parts:I}}}}function c(f,a){for(var p=[],m={},_=0;_<f.length;_++){var j=f[_],I=a.base?j[0]+a.base:j[0],y={css:j[1],media:j[2],sourceMap:j[3]};m[I]?m[I].parts.push(y):p.push(m[I]={id:I,parts:[y]})}return p}function h(f,a){var p=x(f.insertInto);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var m=t[t.length-1];if(f.insertAt==="top")m?m.nextSibling?p.insertBefore(a,m.nextSibling):p.appendChild(a):p.insertBefore(a,p.firstChild),t.push(a);else if(f.insertAt==="bottom")p.appendChild(a);else{if(typeof f.insertAt!="object"||!f.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var _=x(f.insertInto+" "+f.insertAt.before);p.insertBefore(a,_)}}function b(f){if(f.parentNode===null)return!1;f.parentNode.removeChild(f);var a=t.indexOf(f);a>=0&&t.splice(a,1)}function k(f){var a=document.createElement("style");return f.attrs.type===void 0&&(f.attrs.type="text/css"),C(a,f.attrs),h(f,a),a}function C(f,a){Object.keys(a).forEach(function(p){f.setAttribute(p,a[p])})}function w(f,a){var p,m,_,j;if(a.transform&&f.css){if(!(j=a.transform(f.css)))return function(){};f.css=j}if(a.singleton){var I=e++;p=d||(d=k(a)),m=P.bind(null,p,I,!1),_=P.bind(null,p,I,!0)}else f.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(p=function(y){var E=document.createElement("link");return y.attrs.type===void 0&&(y.attrs.type="text/css"),y.attrs.rel="stylesheet",C(E,y.attrs),h(y,E),E}(a),m=function(y,E,R){var T=R.css,F=R.sourceMap,ne=E.convertToAbsoluteUrls===void 0&&F;(E.convertToAbsoluteUrls||ne)&&(T=n(T)),F&&(T+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(F))))+" */");var se=new Blob([T],{type:"text/css"}),J=y.href;y.href=URL.createObjectURL(se),J&&URL.revokeObjectURL(J)}.bind(null,p,a),_=function(){b(p),p.href&&URL.revokeObjectURL(p.href)}):(p=k(a),m=function(y,E){var R=E.css,T=E.media;if(T&&y.setAttribute("media",T),y.styleSheet)y.styleSheet.cssText=R;else{for(;y.firstChild;)y.removeChild(y.firstChild);y.appendChild(document.createTextNode(R))}}.bind(null,p),_=function(){b(p)});return m(f),function(y){if(y){if(y.css===f.css&&y.media===f.media&&y.sourceMap===f.sourceMap)return;m(f=y)}else _()}}g.exports=function(f,a){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs=typeof a.attrs=="object"?a.attrs:{},a.singleton||typeof a.singleton=="boolean"||(a.singleton=u()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var p=c(f,a);return s(p,a),function(m){for(var _=[],j=0;j<p.length;j++){var I=p[j];(y=l[I.id]).refs--,_.push(y)}for(m&&s(c(m,a),a),j=0;j<_.length;j++){var y;if((y=_[j]).refs===0){for(var E=0;E<y.parts.length;E++)y.parts[E]();delete l[y.id]}}}};var v,A=(v=[],function(f,a){return v[f]=a,v.filter(Boolean).join(`
`)});function P(f,a,p,m){var _=p?"":m.css;if(f.styleSheet)f.styleSheet.cssText=A(a,_);else{var j=document.createTextNode(_),I=f.childNodes;I[a]&&f.removeChild(I[a]),I.length?f.insertBefore(j,I[a]):f.appendChild(j)}}},function(g,N){g.exports=function(i){var r=typeof window<"u"&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var o=r.protocol+"//"+r.host,l=o+r.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(u,x){var d,e=x.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e)?u:(d=e.indexOf("//")===0?e:e.indexOf("/")===0?o+e:l+e.replace(/^\.\//,""),"url("+JSON.stringify(d)+")")})}}]).default})})(te);var me=te.exports;ee.exports=me;var ve=ee.exports;const ye=re(ve),je={class:"mb-1 flex items-center gap-1 pt-2 ps-2"},ge=Y({__name:"Treeselect",props:{modelValue:{},options:{}},emits:["update:modelValue"],setup(U,{emit:O}){const g=U,N=O;let i=null;Z(()=>{r()});const r=()=>{i=new ye("#treeselect",{data:g.options,values:g.modelValue,closeDepth:1,onChange:function(){N("update:modelValue",this.values)}})},o=()=>{i.values=g.options.map(l=>l.id)};return oe(()=>g.modelValue,l=>{l===void 0&&(i.values=[])}),(l,u)=>(D(),z("div",null,[B("div",je,[B("span",{class:"p-1 text-xs btn-blue",onClick:o},"Check All"),B("span",{class:"p-1 text-xs btn-gray",onClick:u[0]||(u[0]=x=>H(i).values=[])},"Clear")]),u[1]||(u[1]=B("div",{id:"treeselect",class:"overflow-y-auto max-h-[13rem]"},null,-1))]))}}),xe=()=>{const U=S([]),O=S([]),g=async()=>{const{data:r}=await V.get("/api/permissions/list");O.value=r},N=async()=>{await g();let r=O.value.map(o=>o.split(".")[0]);return r=[...new Set(r)],r.forEach(o=>{U.value.push(i(o))}),U.value},i=r=>{const o={id:r,text:G.startCase(r),children:[]};return O.value.filter(u=>u.startsWith(r+".")).forEach(u=>o.children.push({id:u,text:G.startCase(u.split(".")[1])})),o};return{getPermissionsTree:N}},we={key:0,class:"relative"},_e={class:"relative"},ke={key:0,class:"text-sm text-red-500"},Ne={class:"relative"},Ce={key:1,class:"text-sm text-red-500"},Ie=["disabled"],Ue=Y({__name:"RoleForm",emits:["close"],setup(U,{emit:O}){const g=fe(),N=pe(),i=S({}),{getPermissionsTree:r}=xe(),o=S(L.Create),l=S(!1),u=S({}),x=S(null),d=ae().user.branches,e=O;Z(async()=>{d.length===1&&(i.value.branchId=d[0].id),g.path.endsWith("/edit")&&(o.value=L.Edit),g.path.endsWith("/clone")&&(o.value=L.Clone),o.value!==L.Create&&await t(g.params.id),x.value=await r()});const t=async C=>{const{data:w}=await V.get(`/api/roles/${C}`);i.value=w.data},n=async()=>{l.value=!0;try{o.value===L.Create?await s():o.value===L.Clone?await c():o.value===L.Edit&&await h(),u.value={},he.fire()}catch(C){u.value=C.response.data.errors??{}}l.value=!1},s=async()=>{await V.post("/api/roles",i.value),b()},c=async()=>{await V.post("/api/roles",i.value),k()},h=async()=>{await V.patch(`/api/roles/${i.value.id}`,i.value),k()},b=()=>{i.value={},u.value=[]},k=()=>{e("close"),N.back()};return(C,w)=>(D(),Q(ue,null,{header:M(()=>[X(W(`${o.value.capitalize()} ${o.value===H(L).Create?"New":""} Role`),1)]),body:M(()=>[B("form",{id:"form",onSubmit:de(n,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[H(d).length>1?(D(),z("div",we,[K(be,{modelValue:i.value.branchId,"onUpdate:modelValue":w[0]||(w[0]=v=>i.value.branchId=v),error:u.value.branchId},null,8,["modelValue","error"])])):$("",!0),B("div",_e,[ie(B("input",{"onUpdate:modelValue":w[1]||(w[1]=v=>i.value.displayName=v),class:q(["input peer",{"border-red-500":u.value.hasOwnProperty("displayName")}])},null,2),[[le,i.value.displayName]]),B("label",{class:q(["label",{"text-red-500":u.value.hasOwnProperty("displayName")}])},"Name",2),u.value.hasOwnProperty("displayName")?(D(),z("p",ke,W(u.value.displayName[0]),1)):$("",!0)]),B("div",Ne,[x.value?(D(),Q(ge,{key:0,options:x.value,modelValue:i.value.permissions,"onUpdate:modelValue":w[2]||(w[2]=v=>i.value.permissions=v),class:q(["rounded border-2 border-gray-300 pt-1",{"border-red-500":u.value.hasOwnProperty("permissions")}])},null,8,["options","modelValue","class"])):$("",!0),B("label",{class:q(["label",{"text-red-500":u.value.hasOwnProperty("permissions")}])},"Permissions",2),u.value.hasOwnProperty("permissions")?(D(),z("p",Ce,W(u.value.permissions[0]),1)):$("",!0)])],32)]),footer:M(()=>[B("button",{class:"me-2 btn-blue",disabled:l.value,form:"form"},[K(ce,{"is-loading":l.value},{default:M(()=>w[3]||(w[3]=[X("Save")])),_:1},8,["is-loading"])],8,Ie),B("button",{onClick:k,class:"btn-gray"},"Cancel")]),_:1}))}});export{Ue as default};
