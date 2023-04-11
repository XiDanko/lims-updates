import{a4 as v,d as p,x as y,s as g}from"./main-c1f62c61.js";var f={},C={get exports(){return f},set exports(c){f=c}};(function(c,d){(function(r,e){c.exports=e()})(v,function(){var r={attachTo:function(e,t){if(e.scannerDetectionData!==void 0)throw new Error("onScan.js is already initialized for DOM element "+e);var n={onScan:function(a,s){},onScanError:function(a){},onKeyProcess:function(a,s){},onKeyDetect:function(a,s){},onPaste:function(a,s){},keyCodeMapper:function(a){return r.decodeKeyEvent(a)},onScanButtonLongPress:function(){},scanButtonKeyCode:!1,scanButtonLongPressTime:500,timeBeforeScanTest:100,avgTimeByChar:30,minLength:6,suffixKeyCodes:[9,13],prefixKeyCodes:[],ignoreIfFocusOn:!1,stopPropagation:!1,preventDefault:!1,captureEvents:!1,reactToKeydown:!0,reactToPaste:!1,singleScanQty:1};return t=this._mergeOptions(n,t),e.scannerDetectionData={options:t,vars:{firstCharTime:0,lastCharTime:0,accumulatedString:"",testTimer:!1,longPressTimeStart:0,longPressed:!1}},t.reactToPaste===!0&&e.addEventListener("paste",this._handlePaste,t.captureEvents),t.scanButtonKeyCode!==!1&&e.addEventListener("keyup",this._handleKeyUp,t.captureEvents),(t.reactToKeydown===!0||t.scanButtonKeyCode!==!1)&&e.addEventListener("keydown",this._handleKeyDown,t.captureEvents),this},detachFrom:function(e){e.scannerDetectionData.options.reactToPaste&&e.removeEventListener("paste",this._handlePaste),e.scannerDetectionData.options.scanButtonKeyCode!==!1&&e.removeEventListener("keyup",this._handleKeyUp),e.removeEventListener("keydown",this._handleKeyDown),e.scannerDetectionData=void 0},getOptions:function(e){return e.scannerDetectionData.options},setOptions:function(e,t){switch(e.scannerDetectionData.options.reactToPaste){case!0:t.reactToPaste===!1&&e.removeEventListener("paste",this._handlePaste);break;case!1:t.reactToPaste===!0&&e.addEventListener("paste",this._handlePaste);break}switch(e.scannerDetectionData.options.scanButtonKeyCode){case!1:t.scanButtonKeyCode!==!1&&e.addEventListener("keyup",this._handleKeyUp);break;default:t.scanButtonKeyCode===!1&&e.removeEventListener("keyup",this._handleKeyUp);break}return e.scannerDetectionData.options=this._mergeOptions(e.scannerDetectionData.options,t),this._reinitialize(e),this},decodeKeyEvent:function(e){var t=this._getNormalizedKeyNum(e);switch(!0){case(t>=48&&t<=90):case(t>=106&&t<=111):if(e.key!==void 0&&e.key!=="")return e.key;var n=String.fromCharCode(t);switch(e.shiftKey){case!1:n=n.toLowerCase();break;case!0:n=n.toUpperCase();break}return n;case(t>=96&&t<=105):return 0+(t-96)}return""},simulate:function(e,t){return this._reinitialize(e),Array.isArray(t)?t.forEach(function(n){var a={};(typeof n=="object"||typeof n=="function")&&n!==null?a=n:a.keyCode=parseInt(n);var s=new KeyboardEvent("keydown",a);document.dispatchEvent(s)}):this._validateScanCode(e,t),this},_reinitialize:function(e){var t=e.scannerDetectionData.vars;t.firstCharTime=0,t.lastCharTime=0,t.accumulatedString=""},_isFocusOnIgnoredElement:function(e){var t=e.scannerDetectionData.options.ignoreIfFocusOn;if(!t)return!1;var n=document.activeElement;if(Array.isArray(t)){for(var a=0;a<t.length;a++)if(n.matches(t[a])===!0)return!0}else if(n.matches(t))return!0;return!1},_validateScanCode:function(e,t){var n=e.scannerDetectionData,a=n.options,s=n.options.singleScanQty,o=n.vars.firstCharTime,l=n.vars.lastCharTime,i={},u;switch(!0){case t.length<a.minLength:i={message:"Receieved code is shorter then minimal length"};break;case l-o>t.length*a.avgTimeByChar:i={message:"Receieved code was not entered in time"};break;default:return a.onScan.call(e,t,s),u=new CustomEvent("scan",{detail:{scanCode:t,qty:s}}),e.dispatchEvent(u),r._reinitialize(e),!0}return i.scanCode=t,i.scanDuration=l-o,i.avgTimeByChar=a.avgTimeByChar,i.minLength=a.minLength,a.onScanError.call(e,i),u=new CustomEvent("scanError",{detail:i}),e.dispatchEvent(u),r._reinitialize(e),!1},_mergeOptions:function(e,t){var n={},a;for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n},_getNormalizedKeyNum:function(e){return e.which||e.keyCode},_handleKeyDown:function(e){var t=r._getNormalizedKeyNum(e),n=this.scannerDetectionData.options,a=this.scannerDetectionData.vars,s=!1;if(n.onKeyDetect.call(this,t,e)!==!1&&!r._isFocusOnIgnoredElement(this)){if(n.scanButtonKeyCode!==!1&&t==n.scanButtonKeyCode){a.longPressed||(a.longPressTimer=setTimeout(n.onScanButtonLongPress,n.scanButtonLongPressTime,this),a.longPressed=!0);return}switch(!0){case(a.firstCharTime&&n.suffixKeyCodes.indexOf(t)!==-1):e.preventDefault(),e.stopImmediatePropagation(),s=!0;break;case(!a.firstCharTime&&n.prefixKeyCodes.indexOf(t)!==-1):e.preventDefault(),e.stopImmediatePropagation(),s=!1;break;default:var o=n.keyCodeMapper.call(this,e);if(o===null)return;a.accumulatedString+=o,n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopImmediatePropagation(),s=!1;break}a.firstCharTime||(a.firstCharTime=Date.now()),a.lastCharTime=Date.now(),a.testTimer&&clearTimeout(a.testTimer),s?(r._validateScanCode(this,a.accumulatedString),a.testTimer=!1):a.testTimer=setTimeout(r._validateScanCode,n.timeBeforeScanTest,this,a.accumulatedString),n.onKeyProcess.call(this,o,e)}},_handlePaste:function(e){var t=this.scannerDetectionData.options,n=this.scannerDetectionData.vars,a=(event.clipboardData||window.clipboardData).getData("text");r._isFocusOnIgnoredElement(this)||(e.preventDefault(),t.stopPropagation&&e.stopImmediatePropagation(),t.onPaste.call(this,a,event),n.firstCharTime=0,n.lastCharTime=0,r._validateScanCode(this,a))},_handleKeyUp:function(e){if(!r._isFocusOnIgnoredElement(this)){var t=r._getNormalizedKeyNum(e);t==this.scannerDetectionData.options.scanButtonKeyCode&&(clearTimeout(this.scannerDetectionData.vars.longPressTimer),this.scannerDetectionData.vars.longPressed=!1)}},isScanInProgressFor:function(e){return e.scannerDetectionData.vars.firstCharTime>0},isAttachedTo:function(e){return e.scannerDetectionData!==void 0}};return r})})(C);const h=f,T=p({__name:"BarcodeScanner",emits:["scan"],setup(c,{emit:d}){y(()=>{h.attachTo(document),document.addEventListener("scan",r)}),g(()=>{document.removeEventListener("scan",r),h.detachFrom(document)});const r=e=>{d("scan",e.detail.scanCode)};return(e,t)=>null}});export{T as _};
