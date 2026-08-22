import{At as e,Dn as t,G as n,I as r,K as i,Mn as a,O as o,On as s,Tn as c,Tt as l,U as u,W as d,X as f,Y as p,Z as m,Zt as h,a as g,bt as _,ct as v,i as y,k as b,tn as x,ut as S,vt as C,xn as w,xt as T,z as E}from"./main-DxMLlFL-.js";import{t as D}from"./formMode-DtfbdPtD.js";var O=s(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.Tree=r():n.Tree=r()})(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,`__esModule`,{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&typeof e==`object`&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,`default`,{enumerable:!0,value:e}),2&t&&typeof e!=`string`)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=0)}([function(e,t,n){Object.defineProperty(t,`__esModule`,{value:!0}),t.default=c;var r,i=(r=n(1))&&r.__esModule?r:{default:r};function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||s.return==null||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance`)}()}function o(e){var t={};return e.reduce(function(e,n){return t[n]||(t[n]=!0,e.push(n)),e},[])}function s(e,t){requestAnimationFrame(function(){t.enter(),requestAnimationFrame(function(){t.active(),setTimeout(function(){t.leave()},e)})})}function c(e,t){var n=this;this.treeNodes=[],this.nodesById={},this.leafNodesById={},this.liElementsById={},this.willUpdateNodesById={},this.container=e,this.options=Object.assign({selectMode:`checkbox`,values:[],disables:[],beforeLoad:null,loaded:null,url:null,method:`GET`,closeDepth:null},t),Object.defineProperties(this,{values:{get:function(){return this.getValues()},set:function(e){return this.setValues(o(e))}},disables:{get:function(){return this.getDisables()},set:function(e){return this.setDisables(o(e))}},selectedNodes:{get:function(){var e=[],t=this.nodesById;for(var n in t)if(t.hasOwnProperty(n)&&(t[n].status===1||t[n].status===2)){var r=Object.assign({},t[n]);delete r.parent,delete r.children,e.push(r)}return e}},disabledNodes:{get:function(){var e=[],t=this.nodesById;for(var n in t)if(t.hasOwnProperty(n)&&t[n].disabled){var r=Object.assign({},t[n]);delete r.parent,e.push(r)}return e}}}),this.options.url?this.load(function(e){n.init(e)}):this.init(this.options.data)}n(2),c.prototype.init=function(e){var t=c.parseTreeData(e),n=t.treeNodes,r=t.nodesById,i=t.leafNodesById,a=t.defaultValues,o=t.defaultDisables;this.treeNodes=n,this.nodesById=r,this.leafNodesById=i,this.render(this.treeNodes);var s=this.options,l=s.values,u=s.disables,d=s.loaded;l&&l.length&&(a=l),a.length&&this.setValues(a),u&&u.length&&(o=u),o.length&&this.setDisables(o),d&&d.call(this)},c.prototype.load=function(e){var t=this.options,n=t.url,r=t.method,a=t.beforeLoad;(0,i.default)({url:n,method:r,success:function(t){var n=t;a&&(n=a(t)),e(n)}})},c.prototype.render=function(e){var t=c.createRootEle();t.appendChild(this.buildTree(e,0)),this.bindEvent(t);var n=document.querySelector(this.container);(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)})(n),n.appendChild(t)},c.prototype.buildTree=function(e,t){var n=this,r=c.createUlEle();return e&&e.length&&e.forEach(function(e){var i=c.createLiEle(e,t===n.options.closeDepth-1);n.liElementsById[e.id]=i;var a=null;e.children&&e.children.length&&(a=n.buildTree(e.children,t+1)),a&&i.appendChild(a),r.appendChild(i)}),r},c.prototype.bindEvent=function(e){var t=this;e.addEventListener(`click`,function(e){var n=e.target;n.nodeName===`SPAN`&&(n.classList.contains(`treejs-checkbox`)||n.classList.contains(`treejs-label`))?t.onItemClick(n.parentNode.nodeId):n.nodeName===`LI`&&n.classList.contains(`treejs-node`)?t.onItemClick(n.nodeId):n.nodeName===`SPAN`&&n.classList.contains(`treejs-switcher`)&&t.onSwitcherClick(n)},!1)},c.prototype.onItemClick=function(e){var t=this.nodesById[e],n=this.options.onChange;t.disabled||(this.setValue(e),this.updateLiElements()),n&&n.call(this)},c.prototype.setValue=function(e){var t=this.nodesById[e];if(t){var n=t.status;t.status=n===1||n===2?0:2,this.markWillUpdateNode(t),this.walkUp(t,`status`),this.walkDown(t,`status`)}},c.prototype.getValues=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&(this.leafNodesById[t].status!==1&&this.leafNodesById[t].status!==2||e.push(t));return e},c.prototype.setValues=function(e){var t=this;this.emptyNodesCheckStatus(),e.forEach(function(e){t.setValue(e)}),this.updateLiElements();var n=this.options.onChange;n&&n.call(this)},c.prototype.setDisable=function(e){var t=this.nodesById[e];t&&(t.disabled||(t.disabled=!0,this.markWillUpdateNode(t),this.walkUp(t,`disabled`),this.walkDown(t,`disabled`)))},c.prototype.getDisables=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&this.leafNodesById[t].disabled&&e.push(t);return e},c.prototype.setDisables=function(e){var t=this;this.emptyNodesDisable(),e.forEach(function(e){t.setDisable(e)}),this.updateLiElements()},c.prototype.emptyNodesCheckStatus=function(){this.willUpdateNodesById=this.getSelectedNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled||(e.status=0)})},c.prototype.emptyNodesDisable=function(){this.willUpdateNodesById=this.getDisabledNodesById(),Object.values(this.willUpdateNodesById).forEach(function(e){e.disabled=!1})},c.prototype.getSelectedNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=a(t,2),r=n[0],i=n[1];return i.status!==1&&i.status!==2||(e[r]=i),e},{})},c.prototype.getDisabledNodesById=function(){return Object.entries(this.nodesById).reduce(function(e,t){var n=a(t,2),r=n[0],i=n[1];return i.disabled&&(e[r]=i),e},{})},c.prototype.updateLiElements=function(){var e=this;Object.values(this.willUpdateNodesById).forEach(function(t){e.updateLiElement(t)}),this.willUpdateNodesById={}},c.prototype.markWillUpdateNode=function(e){this.willUpdateNodesById[e.id]=e},c.prototype.onSwitcherClick=function(e){var t=e.parentNode,n=t.lastChild,r=n.scrollHeight;t.classList.contains(`treejs-node__close`)?s(150,{enter:function(){n.style.height=0,n.style.opacity=0},active:function(){n.style.height=`${r}px`,n.style.opacity=1},leave:function(){n.style.height=``,n.style.opacity=``,t.classList.remove(`treejs-node__close`)}}):s(150,{enter:function(){n.style.height=`${r}px`,n.style.opacity=1},active:function(){n.style.height=0,n.style.opacity=0},leave:function(){n.style.height=``,n.style.opacity=``,t.classList.add(`treejs-node__close`)}})},c.prototype.walkUp=function(e,t){var n=e.parent;if(n){if(t===`status`){var r=null,i=n.children.reduce(function(e,t){return isNaN(t.status)?e:e+t.status},0);if(r=i?i===2*n.children.length?2:1:0,n.status===r)return;n.status=r}else{var a=n.children.reduce(function(e,t){return e&&t.disabled},!0);if(n.disabled===a)return;n.disabled=a}this.markWillUpdateNode(n),this.walkUp(n,t)}},c.prototype.walkDown=function(e,t){var n=this;e.children&&e.children.length&&e.children.forEach(function(r){t===`status`&&r.disabled||(r[t]=e[t],n.markWillUpdateNode(r),n.walkDown(r,t))})},c.prototype.updateLiElement=function(e){var t=this.liElementsById[e.id].classList;switch(e.status){case 0:t.remove(`treejs-node__halfchecked`,`treejs-node__checked`);break;case 1:t.remove(`treejs-node__checked`),t.add(`treejs-node__halfchecked`);break;case 2:t.remove(`treejs-node__halfchecked`),t.add(`treejs-node__checked`)}switch(e.disabled){case!0:t.contains(`treejs-node__disabled`)||t.add(`treejs-node__disabled`);break;case!1:t.contains(`treejs-node__disabled`)&&t.remove(`treejs-node__disabled`)}},c.parseTreeData=function(e){var t,n=(t=e,JSON.parse(JSON.stringify(t))),r={},i={},a=[],o=[];return function e(t,n){t.forEach(function(t){r[t.id]=t,t.checked&&a.push(t.id),t.disabled&&o.push(t.id),n&&(t.parent=n),t.children&&t.children.length?e(t.children,t):i[t.id]=t})}(n),{treeNodes:n,nodesById:r,leafNodesById:i,defaultValues:a,defaultDisables:o}},c.createRootEle=function(){var e=document.createElement(`div`);return e.classList.add(`treejs`),e},c.createUlEle=function(){var e=document.createElement(`ul`);return e.classList.add(`treejs-nodes`),e},c.createLiEle=function(e,t){var n=document.createElement(`li`);if(n.classList.add(`treejs-node`),t&&n.classList.add(`treejs-node__close`),e.children&&e.children.length){var r=document.createElement(`span`);r.classList.add(`treejs-switcher`),n.appendChild(r)}else n.classList.add(`treejs-placeholder`);var i=document.createElement(`span`);i.classList.add(`treejs-checkbox`),n.appendChild(i);var a=document.createElement(`span`);a.classList.add(`treejs-label`);var o=document.createTextNode(e.text);return a.appendChild(o),n.appendChild(a),n.nodeId=e.id,n}},function(e,t,n){Object.defineProperty(t,`__esModule`,{value:!0}),t.default=function(e){var t={method:`GET`,url:``,async:!0,success:null,failed:null,"Content-Type":`application/json; charset=utf-8`},n=Object.assign(t,e),r=new XMLHttpRequest,i=Object.entries(n.data).reduce(function(e,t){var n,r,i=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||s.return==null||s.return()}finally{if(i)throw a}}return n}(n,r)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance`)}()),a=i[0],o=i[1];return e.push(`${a}=${o}`),e},[]).join(`&`);if(n.method.toUpperCase()===`POST`)r.open(n.method,n.url,n.async),r.setRequestHeader(`Content-Type`,n[`Content-Type`]),r.send(i);else if(n.method.toUpperCase()===`GET`){var a=n.url;i&&(a.indexOf(`?`),a+=`&${i}`),r.open(n.method,a,n.async),r.setRequestHeader(`Content-Type`,n[`Content-Type`]),r.send(null)}r.onreadystatechange=function(){if(r.readyState===4&&r.status===200){var e=r.responseText;n[`Content-Type`]===t[`Content-Type`]&&(e=JSON.parse(e)),n.success&&n.success(e)}else n.failed&&n.failed(r.status)}}},function(e,t,n){var r=n(3);typeof r==`string`&&(r=[[e.i,r,``]]),n(5)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,`.treejs {
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
`,``])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||``,r=e[3];if(!r)return n;if(t&&typeof btoa==`function`){var i=(o=r,`/*# sourceMappingURL=data:application/json;charset=utf-8;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+` */`),a=r.sources.map(function(e){return`/*# sourceURL=`+r.sourceRoot+e+` */`});return[n].concat(a,[i]).join(`
`)}var o;return[n].join(`
`)}(t,e);return t[2]?`@media `+t[2]+`{`+n+`}`:n}).join(``)},t.i=function(e,n){typeof e==`string`&&(e=[[null,e,``]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];typeof a==`number`&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];typeof o[0]==`number`&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]=`(`+o[2]+`) and (`+n+`)`),t.push(o))}},t}},function(e,t,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return i===void 0&&(i=r.apply(this,arguments)),i}),s=function(e){var t={};return function(e){if(typeof e==`function`)return e();if(t[e]===void 0){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}t[e]=n}return t[e]}}(),c=null,l=0,u=[],d=n(6);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(v(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(v(r.parts[o],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function m(e,t){var n=s(e.insertInto);if(!n)throw Error(`Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.`);var r=u[u.length-1];if(e.insertAt===`top`)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if(e.insertAt===`bottom`)n.appendChild(t);else{if(typeof e.insertAt!=`object`||!e.insertAt.before)throw Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var i=s(e.insertInto+` `+e.insertAt.before);n.insertBefore(t,i)}}function h(e){if(e.parentNode===null)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement(`style`);return e.attrs.type===void 0&&(e.attrs.type=`text/css`),_(t,e.attrs),m(e,t),t}function _(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var o=l++;n=c||=g(t),r=x.bind(null,n,o,!1),i=x.bind(null,n,o,!0)}else e.sourceMap&&typeof URL==`function`&&typeof URL.createObjectURL==`function`&&typeof URL.revokeObjectURL==`function`&&typeof Blob==`function`&&typeof btoa==`function`?(n=function(e){var t=document.createElement(`link`);return e.attrs.type===void 0&&(e.attrs.type=`text/css`),e.attrs.rel=`stylesheet`,_(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,a=t.convertToAbsoluteUrls===void 0&&i;(t.convertToAbsoluteUrls||a)&&(r=d(r)),i&&(r+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+` */`);var o=new Blob([r],{type:`text/css`}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute(`media`,r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if(typeof DEBUG<`u`&&DEBUG&&typeof document!=`object`)throw Error(`The style-loader cannot be used in a non-browser environment`);(t||={}).attrs=typeof t.attrs==`object`?t.attrs:{},t.singleton||typeof t.singleton==`boolean`||(t.singleton=o()),t.insertInto||=`head`,t.insertAt||=`bottom`;var n=p(e,t);return f(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}for(e&&f(p(e,t),t),i=0;i<r.length;i++){var s;if((s=r[i]).refs===0){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join(`
`)});function x(e,t,n,r){var i=n?``:r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t=typeof window<`u`&&window.location;if(!t)throw Error(`fixUrls requires window.location`);if(!e||typeof e!=`string`)return e;var n=t.protocol+`//`+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,`/`);return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=a.indexOf(`//`)===0?a:a.indexOf(`/`)===0?n+a:r+a.replace(/^\.\//,``),`url(`+JSON.stringify(i)+`)`)})}}]).default})})),k=a(s(((e,t)=>{t.exports=O()}))(),1),A={class:`mb-1 flex items-center gap-1 ps-2 pt-2`},j=m({__name:`Treeselect`,props:{modelValue:{},options:{}},emits:[`update:modelValue`],setup(t,{emit:n}){let r=t,a=n,o=null;v(()=>{s()});let s=()=>{o=new k.default(`#treeselect`,{data:r.options,values:r.modelValue,closeDepth:1,onChange:function(){a(`update:modelValue`,this.values)}})},c=()=>{o.values=r.options.map(e=>e.id)};return C(()=>r.modelValue,e=>{e===void 0&&(o.values=[])}),(t,n)=>(S(),i(`div`,null,[u(`div`,A,[u(`span`,{class:`btn-blue p-1 text-xs`,onClick:c},`Check All`),u(`span`,{class:`btn-gray p-1 text-xs`,onClick:n[0]||=t=>e(o).values=[]},`Clear`)]),n[1]||=u(`div`,{id:`treeselect`,class:`max-h-[13rem] overflow-y-auto`},null,-1)]))}}),M=a(t(),1),N=()=>{let e=l([]),t=l([]),n=async()=>{let{data:e}=await c.get(`/api/permissions/list`);t.value=e},r=async()=>{await n();let r=t.value.map(e=>e.split(`.`)[0]);return r=[...new Set(r)],r.forEach(t=>{e.value.push(i(t))}),e.value},i=e=>{let n={id:e,text:M.default.startCase(e),children:[]};return t.value.filter(t=>t.startsWith(e+`.`)).forEach(e=>n.children.push({id:e,text:M.default.startCase(e.split(`.`)[1])})),n};return{getPermissionsTree:r}},P={class:`relative`},F={key:0,class:`text-sm text-red-500`},I={class:`relative`},L={key:1,class:`text-sm text-red-500`},R=[`disabled`],z=m({__name:`RoleForm`,emits:[`close`],setup(t,{emit:a}){let s=o(),m=b(),C=l({}),{getPermissionsTree:O}=N(),k=l(D.Create),A=l(!1),M=l({}),z=l(null),B=a;v(async()=>{s.path.endsWith(`/edit`)&&(k.value=D.Edit),s.path.endsWith(`/clone`)&&(k.value=D.Clone),k.value!==D.Create&&await V(s.params.id),z.value=await O()});let V=async e=>{let{data:t}=await c.get(`/api/roles/${e}`);C.value=t.data},H=async()=>{A.value=!0;try{k.value===D.Create?await U():k.value===D.Clone?await W():k.value===D.Edit&&await G(),M.value={},w.fire()}catch(e){M.value=e.response.data.errors??{}}A.value=!1},U=async()=>{await c.post(`/api/roles`,C.value),K()},W=async()=>{await c.post(`/api/roles`,C.value),q()},G=async()=>{await c.patch(`/api/roles/${C.value.id}`,C.value),q()},K=()=>{C.value={},M.value=[]},q=()=>{B(`close`),m.back()};return(t,a)=>(S(),d(y,null,{header:_(()=>[p(x(`${k.value.capitalize()} ${k.value===e(D).Create?`New`:``} Role`),1)]),body:_(()=>[u(`form`,{id:`form`,onSubmit:E(H,[`prevent`,`stop`]),class:`grid grid-cols-1 gap-4`},[u(`div`,P,[T(u(`input`,{"onUpdate:modelValue":a[0]||=e=>C.value.name=e,class:h([`peer input`,{"border-red-500":M.value.hasOwnProperty(`name`)}])},null,2),[[r,C.value.name]]),u(`label`,{class:h([`label`,{"text-red-500":M.value.hasOwnProperty(`name`)}])},`Name`,2),M.value.hasOwnProperty(`name`)?(S(),i(`p`,F,x(M.value.name[0]),1)):n(``,!0)]),u(`div`,I,[z.value?(S(),d(j,{key:0,options:z.value,modelValue:C.value.permissions,"onUpdate:modelValue":a[1]||=e=>C.value.permissions=e,class:h([`rounded-sm border-2 border-gray-300 pt-1`,{"border-red-500":M.value.hasOwnProperty(`permissions`)}])},null,8,[`options`,`modelValue`,`class`])):n(``,!0),u(`label`,{class:h([`label`,{"text-red-500":M.value.hasOwnProperty(`permissions`)}])},`Permissions`,2),M.value.hasOwnProperty(`permissions`)?(S(),i(`p`,L,x(M.value.permissions[0]),1)):n(``,!0)])],32)]),footer:_(()=>[u(`button`,{class:`me-2 btn-blue`,disabled:A.value,form:`form`},[f(g,{"is-loading":A.value},{default:_(()=>[...a[2]||=[p(`Save`,-1)]]),_:1},8,[`is-loading`])],8,R),u(`button`,{onClick:q,class:`btn-gray`},`Cancel`)]),_:1}))}});export{z as default};