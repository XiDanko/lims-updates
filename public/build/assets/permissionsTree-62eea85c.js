import{ak as H,d as J,x as W,A as F,o as G,c as $,e as P,a8 as V,Q}from"./main-56f58ed8.js";var A={},X={get exports(){return A},set exports(C){A=C}},R={},K={get exports(){return R},set exports(C){R=C}};(function(C,O){(function(x,k){C.exports=k()})(window,function(){return function(x){var k={};function f(o){if(k[o])return k[o].exports;var i=k[o]={i:o,l:!1,exports:{}};return x[o].call(i.exports,i,i.exports,f),i.l=!0,i.exports}return f.m=x,f.c=k,f.d=function(o,i,u){f.o(o,i)||Object.defineProperty(o,i,{enumerable:!0,get:u})},f.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},f.t=function(o,i){if(1&i&&(o=f(o)),8&i||4&i&&typeof o=="object"&&o&&o.__esModule)return o;var u=Object.create(null);if(f.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:o}),2&i&&typeof o!="string")for(var y in o)f.d(u,y,function(w){return o[w]}.bind(null,y));return u},f.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return f.d(i,"a",i),i},f.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},f.p="",f(f.s=0)}([function(x,k,f){Object.defineProperty(k,"__esModule",{value:!0}),k.default=l;var o,i=(o=f(1))&&o.__esModule?o:{default:o};function u(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,r){var d=[],p=!0,h=!1,_=void 0;try{for(var E,N=n[Symbol.iterator]();!(p=(E=N.next()).done)&&(d.push(E.value),!r||d.length!==r);p=!0);}catch(j){h=!0,_=j}finally{try{p||N.return==null||N.return()}finally{if(h)throw _}}return d}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e){var t={};return e.reduce(function(n,r){return t[r]||(t[r]=!0,n.push(r)),n},[])}function w(e,t){requestAnimationFrame(function(){t.enter(),requestAnimationFrame(function(){t.active(),setTimeout(function(){t.leave()},e)})})}function l(e,t){var n=this;this.treeNodes=[],this.nodesById={},this.leafNodesById={},this.liElementsById={},this.willUpdateNodesById={},this.container=e,this.options=Object.assign({selectMode:"checkbox",values:[],disables:[],beforeLoad:null,loaded:null,url:null,method:"GET",closeDepth:null},t),Object.defineProperties(this,{values:{get:function(){return this.getValues()},set:function(r){return this.setValues(y(r))}},disables:{get:function(){return this.getDisables()},set:function(r){return this.setDisables(y(r))}},selectedNodes:{get:function(){var r=[],d=this.nodesById;for(var p in d)if(d.hasOwnProperty(p)&&(d[p].status===1||d[p].status===2)){var h=Object.assign({},d[p]);delete h.parent,delete h.children,r.push(h)}return r}},disabledNodes:{get:function(){var r=[],d=this.nodesById;for(var p in d)if(d.hasOwnProperty(p)&&d[p].disabled){var h=Object.assign({},d[p]);delete h.parent,r.push(h)}return r}}}),this.options.url?this.load(function(r){n.init(r)}):this.init(this.options.data)}f(2),l.prototype.init=function(e){var t=l.parseTreeData(e),n=t.treeNodes,r=t.nodesById,d=t.leafNodesById,p=t.defaultValues,h=t.defaultDisables;this.treeNodes=n,this.nodesById=r,this.leafNodesById=d,this.render(this.treeNodes);var _=this.options,E=_.values,N=_.disables,j=_.loaded;E&&E.length&&(p=E),p.length&&this.setValues(p),N&&N.length&&(h=N),h.length&&this.setDisables(h),j&&j.call(this)},l.prototype.load=function(e){var t=this.options,n=t.url,r=t.method,d=t.beforeLoad;(0,i.default)({url:n,method:r,success:function(p){var h=p;d&&(h=d(p)),e(h)}})},l.prototype.render=function(e){var t=l.createRootEle();t.appendChild(this.buildTree(e,0)),this.bindEvent(t);var n=document.querySelector(this.container);(function(r){for(;r.firstChild;)r.removeChild(r.firstChild)})(n),n.appendChild(t)},l.prototype.buildTree=function(e,t){var n=this,r=l.createUlEle();return e&&e.length&&e.forEach(function(d){var p=l.createLiEle(d,t===n.options.closeDepth-1);n.liElementsById[d.id]=p;var h=null;d.children&&d.children.length&&(h=n.buildTree(d.children,t+1)),h&&p.appendChild(h),r.appendChild(p)}),r},l.prototype.bindEvent=function(e){var t=this;e.addEventListener("click",function(n){var r=n.target;r.nodeName==="SPAN"&&(r.classList.contains("treejs-checkbox")||r.classList.contains("treejs-label"))?t.onItemClick(r.parentNode.nodeId):r.nodeName==="LI"&&r.classList.contains("treejs-node")?t.onItemClick(r.nodeId):r.nodeName==="SPAN"&&r.classList.contains("treejs-switcher")&&t.onSwitcherClick(r)},!1)},l.prototype.onItemClick=function(e){var t=this.nodesById[e],n=this.options.onChange;t.disabled||(this.setValue(e),this.updateLiElements()),n&&n.call(this)},l.prototype.setValue=function(e){var t=this.nodesById[e];if(t){var n=t.status,r=n===1||n===2?0:2;t.status=r,this.markWillUpdateNode(t),this.walkUp(t,"status"),this.walkDown(t,"status")}},l.prototype.getValues=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&(this.leafNodesById[t].status!==1&&this.leafNodesById[t].status!==2||e.push(t));return e},l.prototype.setValues=function(e){var t=this;this.emptyNodesCheckStatus(),e.forEach(function(r){t.setValue(r)}),this.updateLiElements();var n=this.options.onChange;n&&n.call(this)},l.prototype.setDisable=function(e){var t=this.nodesById[e];t&&(t.disabled||(t.disabled=!0,this.markWillUpdateNode(t),this.walkUp(t,"disabled"),this.walkDown(t,"disabled")))},l.prototype.getDisables=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&this.leafNodesById[t].disabled&&e.push(t);return e},l.prototype.setDisables=function(e){var t=this;this.emptyNodesDisable(),e.forEach(function(n){t.setDisable(n)}),this.updateLiElements()},l.prototype.emptyNodesCheckStatus=function(){this.willUpdateNodesById=this.getSelectedNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled||(e.status=0)})},l.prototype.emptyNodesDisable=function(){this.willUpdateNodesById=this.getDisabledNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled=!1})},l.prototype.getSelectedNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=u(t,2),r=n[0],d=n[1];return d.status!==1&&d.status!==2||(e[r]=d),e},{})},l.prototype.getDisabledNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=u(t,2),r=n[0],d=n[1];return d.disabled&&(e[r]=d),e},{})},l.prototype.updateLiElements=function(){var e=this;Object.values(this.willUpdateNodesById).forEach(function(t){e.updateLiElement(t)}),this.willUpdateNodesById={}},l.prototype.markWillUpdateNode=function(e){this.willUpdateNodesById[e.id]=e},l.prototype.onSwitcherClick=function(e){var t=e.parentNode,n=t.lastChild,r=n.scrollHeight;t.classList.contains("treejs-node__close")?w(150,{enter:function(){n.style.height=0,n.style.opacity=0},active:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},leave:function(){n.style.height="",n.style.opacity="",t.classList.remove("treejs-node__close")}}):w(150,{enter:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},active:function(){n.style.height=0,n.style.opacity=0},leave:function(){n.style.height="",n.style.opacity="",t.classList.add("treejs-node__close")}})},l.prototype.walkUp=function(e,t){var n=e.parent;if(n){if(t==="status"){var r=null,d=n.children.reduce(function(h,_){return isNaN(_.status)?h:h+_.status},0);if(r=d?d===2*n.children.length?2:1:0,n.status===r)return;n.status=r}else{var p=n.children.reduce(function(h,_){return h&&_.disabled},!0);if(n.disabled===p)return;n.disabled=p}this.markWillUpdateNode(n),this.walkUp(n,t)}},l.prototype.walkDown=function(e,t){var n=this;e.children&&e.children.length&&e.children.forEach(function(r){t==="status"&&r.disabled||(r[t]=e[t],n.markWillUpdateNode(r),n.walkDown(r,t))})},l.prototype.updateLiElement=function(e){var t=this.liElementsById[e.id].classList;switch(e.status){case 0:t.remove("treejs-node__halfchecked","treejs-node__checked");break;case 1:t.remove("treejs-node__checked"),t.add("treejs-node__halfchecked");break;case 2:t.remove("treejs-node__halfchecked"),t.add("treejs-node__checked")}switch(e.disabled){case!0:t.contains("treejs-node__disabled")||t.add("treejs-node__disabled");break;case!1:t.contains("treejs-node__disabled")&&t.remove("treejs-node__disabled")}},l.parseTreeData=function(e){var t,n=(t=e,JSON.parse(JSON.stringify(t))),r={},d={},p=[],h=[];return function _(E,N){E.forEach(function(j){r[j.id]=j,j.checked&&p.push(j.id),j.disabled&&h.push(j.id),N&&(j.parent=N),j.children&&j.children.length?_(j.children,j):d[j.id]=j})}(n),{treeNodes:n,nodesById:r,leafNodesById:d,defaultValues:p,defaultDisables:h}},l.createRootEle=function(){var e=document.createElement("div");return e.classList.add("treejs"),e},l.createUlEle=function(){var e=document.createElement("ul");return e.classList.add("treejs-nodes"),e},l.createLiEle=function(e,t){var n=document.createElement("li");if(n.classList.add("treejs-node"),t&&n.classList.add("treejs-node__close"),e.children&&e.children.length){var r=document.createElement("span");r.classList.add("treejs-switcher"),n.appendChild(r)}else n.classList.add("treejs-placeholder");var d=document.createElement("span");d.classList.add("treejs-checkbox"),n.appendChild(d);var p=document.createElement("span");p.classList.add("treejs-label");var h=document.createTextNode(e.text);return p.appendChild(h),n.appendChild(p),n.nodeId=e.id,n}},function(x,k,f){Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(o){var i={method:"GET",url:"",async:!0,success:null,failed:null,"Content-Type":"application/json; charset=utf-8"},u=Object.assign(i,o),y=new XMLHttpRequest,w=Object.entries(u.data).reduce(function(e,t){var n,r,d=(r=2,function(_){if(Array.isArray(_))return _}(n=t)||function(_,E){var N=[],j=!0,S=!1,U=void 0;try{for(var a,s=_[Symbol.iterator]();!(j=(a=s.next()).done)&&(N.push(a.value),!E||N.length!==E);j=!0);}catch(c){S=!0,U=c}finally{try{j||s.return==null||s.return()}finally{if(S)throw U}}return N}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),p=d[0],h=d[1];return e.push("".concat(p,"=").concat(h)),e},[]).join("&");if(u.method.toUpperCase()==="POST")y.open(u.method,u.url,u.async),y.setRequestHeader("Content-Type",u["Content-Type"]),y.send(w);else if(u.method.toUpperCase()==="GET"){var l=u.url;w&&(l.indexOf("?"),l+="&".concat(w)),y.open(u.method,l,u.async),y.setRequestHeader("Content-Type",u["Content-Type"]),y.send(null)}y.onreadystatechange=function(){if(y.readyState===4&&y.status===200){var e=y.responseText;u["Content-Type"]===i["Content-Type"]&&(e=JSON.parse(e)),u.success&&u.success(e)}else u.failed&&u.failed(y.status)}}},function(x,k,f){var o=f(3);typeof o=="string"&&(o=[[x.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};f(5)(o,i),o.locals&&(x.exports=o.locals)},function(x,k,f){(x.exports=f(4)(!1)).push([x.i,`.treejs {
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
`,""])},function(x,k){x.exports=function(f){var o=[];return o.toString=function(){return this.map(function(i){var u=function(y,w){var l=y[1]||"",e=y[3];if(!e)return l;if(w&&typeof btoa=="function"){var t=(r=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),n=e.sources.map(function(d){return"/*# sourceURL="+e.sourceRoot+d+" */"});return[l].concat(n).concat([t]).join(`
`)}var r;return[l].join(`
`)}(i,f);return i[2]?"@media "+i[2]+"{"+u+"}":u}).join("")},o.i=function(i,u){typeof i=="string"&&(i=[[null,i,""]]);for(var y={},w=0;w<this.length;w++){var l=this[w][0];typeof l=="number"&&(y[l]=!0)}for(w=0;w<i.length;w++){var e=i[w];typeof e[0]=="number"&&y[e[0]]||(u&&!e[2]?e[2]=u:u&&(e[2]="("+e[2]+") and ("+u+")"),o.push(e))}},o}},function(x,k,f){var o,i,u={},y=(o=function(){return window&&document&&document.all&&!window.atob},function(){return typeof i>"u"&&(i=o.apply(this,arguments)),i}),w=function(a){var s={};return function(c){if(typeof c=="function")return c();if(typeof s[c]>"u"){var b=function(g){return document.querySelector(g)}.call(this,c);if(window.HTMLIFrameElement&&b instanceof window.HTMLIFrameElement)try{b=b.contentDocument.head}catch{b=null}s[c]=b}return s[c]}}(),l=null,e=0,t=[],n=f(6);function r(a,s){for(var c=0;c<a.length;c++){var b=a[c],g=u[b.id];if(g){g.refs++;for(var m=0;m<g.parts.length;m++)g.parts[m](b.parts[m]);for(;m<b.parts.length;m++)g.parts.push(N(b.parts[m],s))}else{var I=[];for(m=0;m<b.parts.length;m++)I.push(N(b.parts[m],s));u[b.id]={id:b.id,refs:1,parts:I}}}}function d(a,s){for(var c=[],b={},g=0;g<a.length;g++){var m=a[g],I=s.base?m[0]+s.base:m[0],v={css:m[1],media:m[2],sourceMap:m[3]};b[I]?b[I].parts.push(v):c.push(b[I]={id:I,parts:[v]})}return c}function p(a,s){var c=w(a.insertInto);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var b=t[t.length-1];if(a.insertAt==="top")b?b.nextSibling?c.insertBefore(s,b.nextSibling):c.appendChild(s):c.insertBefore(s,c.firstChild),t.push(s);else if(a.insertAt==="bottom")c.appendChild(s);else{if(typeof a.insertAt!="object"||!a.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var g=w(a.insertInto+" "+a.insertAt.before);c.insertBefore(s,g)}}function h(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a);var s=t.indexOf(a);s>=0&&t.splice(s,1)}function _(a){var s=document.createElement("style");return a.attrs.type===void 0&&(a.attrs.type="text/css"),E(s,a.attrs),p(a,s),s}function E(a,s){Object.keys(s).forEach(function(c){a.setAttribute(c,s[c])})}function N(a,s){var c,b,g,m;if(s.transform&&a.css){if(!(m=s.transform(a.css)))return function(){};a.css=m}if(s.singleton){var I=e++;c=l||(l=_(s)),b=U.bind(null,c,I,!1),g=U.bind(null,c,I,!0)}else a.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(c=function(v){var B=document.createElement("link");return v.attrs.type===void 0&&(v.attrs.type="text/css"),v.attrs.rel="stylesheet",E(B,v.attrs),p(v,B),B}(s),b=function(v,B,T){var L=T.css,D=T.sourceMap,q=B.convertToAbsoluteUrls===void 0&&D;(B.convertToAbsoluteUrls||q)&&(L=n(L)),D&&(L+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(D))))+" */");var z=new Blob([L],{type:"text/css"}),M=v.href;v.href=URL.createObjectURL(z),M&&URL.revokeObjectURL(M)}.bind(null,c,s),g=function(){h(c),c.href&&URL.revokeObjectURL(c.href)}):(c=_(s),b=function(v,B){var T=B.css,L=B.media;if(L&&v.setAttribute("media",L),v.styleSheet)v.styleSheet.cssText=T;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(T))}}.bind(null,c),g=function(){h(c)});return b(a),function(v){if(v){if(v.css===a.css&&v.media===a.media&&v.sourceMap===a.sourceMap)return;b(a=v)}else g()}}x.exports=function(a,s){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs=typeof s.attrs=="object"?s.attrs:{},s.singleton||typeof s.singleton=="boolean"||(s.singleton=y()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var c=d(a,s);return r(c,s),function(b){for(var g=[],m=0;m<c.length;m++){var I=c[m];(v=u[I.id]).refs--,g.push(v)}for(b&&r(d(b,s),s),m=0;m<g.length;m++){var v;if((v=g[m]).refs===0){for(var B=0;B<v.parts.length;B++)v.parts[B]();delete u[v.id]}}}};var j,S=(j=[],function(a,s){return j[a]=s,j.filter(Boolean).join(`
`)});function U(a,s,c,b){var g=c?"":b.css;if(a.styleSheet)a.styleSheet.cssText=S(s,g);else{var m=document.createTextNode(g),I=a.childNodes;I[s]&&a.removeChild(I[s]),I.length?a.insertBefore(m,I[s]):a.appendChild(m)}}},function(x,k){x.exports=function(f){var o=typeof window<"u"&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!f||typeof f!="string")return f;var i=o.protocol+"//"+o.host,u=i+o.pathname.replace(/\/[^\/]*$/,"/");return f.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(y,w){var l,e=w.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e)?y:(l=e.indexOf("//")===0?e:e.indexOf("/")===0?i+e:u+e.replace(/^\.\//,""),"url("+JSON.stringify(l)+")")})}}]).default})})(K);(function(C){C.exports=R})(X);const Y=H(A),Z={id:"treeselect"},te=J({__name:"Treeselect",props:{modelValue:null,options:null},emits:["update:modelValue"],setup(C,{emit:O}){const x=C;let k=null;W(()=>{f()});const f=()=>{k=new Y("#treeselect",{data:x.options,values:x.modelValue,closeDepth:1,onChange:function(){O("update:modelValue",this.values)}})};return F(()=>x.modelValue,o=>{o===void 0&&(k.values=[])}),(o,i)=>(G(),$("div",Z))}}),ne=()=>{const C=P([]),O=P([]),x=async()=>{const{data:o}=await Q.get("/api/permissions/list");O.value=o},k=async()=>{await x();let o=O.value.map(i=>i.split(".")[0]);return o=[...new Set(o)],o.forEach(i=>{C.value.push(f(i))}),C.value},f=o=>{const i={id:o,text:V.startCase(o),children:[]};return O.value.filter(y=>y.startsWith(o+".")).forEach(y=>i.children.push({id:y,text:V.startCase(y.split(".")[1])})),i};return{getPermissionsTree:k}};export{te as _,ne as u};
