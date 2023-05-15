import{e as x,aB as P,y as I,A as _,aD as C,d as A,o as L,c as G,ah as w,g as T}from"./main-6e47ceb6.js";/**
 * Vue Currency Input 3.0.4
 * (c) 2018-2023 Matthias Stiller
 * @license MIT
 */var y;(function(s){s.symbol="symbol",s.narrowSymbol="narrowSymbol",s.code="code",s.name="name",s.hidden="hidden"})(y||(y={}));var p;(function(s){s.precision="precision",s.thousands="thousands",s.millions="millions",s.billions="billions"})(p||(p={}));const D=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),N=s=>s.replace(/^0+(0$|[^0])/,"$1"),E=(s,i)=>(s.match(new RegExp(D(i),"g"))||[]).length,k=(s,i)=>s.substring(0,s.indexOf(i)),R=[",",".","٫"],M="(0|[1-9]\\d*)";class z{constructor(i){var t,e,n,m,a,l;const{currency:c,currencyDisplay:g,locale:r,precision:o,accountingSign:h,useGrouping:f}=i;this.locale=r,this.options={currency:c,useGrouping:f,style:"currency",currencySign:h?"accounting":void 0,currencyDisplay:g!==y.hidden?g:void 0};const d=new Intl.NumberFormat(r,this.options),v=d.formatToParts(123456);this.currency=(t=v.find(({type:u})=>u==="currency"))===null||t===void 0?void 0:t.value,this.digits=[0,1,2,3,4,5,6,7,8,9].map(u=>u.toLocaleString(r)),this.decimalSymbol=(e=v.find(({type:u})=>u==="decimal"))===null||e===void 0?void 0:e.value,this.groupingSymbol=(n=v.find(({type:u})=>u==="group"))===null||n===void 0?void 0:n.value,this.minusSign=(m=d.formatToParts(-1).find(({type:u})=>u==="minusSign"))===null||m===void 0?void 0:m.value,this.decimalSymbol===void 0?this.minimumFractionDigits=this.maximumFractionDigits=0:typeof o=="number"?this.minimumFractionDigits=this.maximumFractionDigits=o:(this.minimumFractionDigits=(a=o?.min)!==null&&a!==void 0?a:d.resolvedOptions().minimumFractionDigits,this.maximumFractionDigits=(l=o?.max)!==null&&l!==void 0?l:d.resolvedOptions().maximumFractionDigits);const b=u=>k(u,this.digits[1]),S=u=>u.substring(u.lastIndexOf(this.decimalSymbol?this.digits[0]:this.digits[1])+1);this.prefix=b(d.format(1)),this.suffix=S(d.format(1)),this.negativePrefix=b(d.format(-1)),this.negativeSuffix=S(d.format(-1))}parse(i){if(i){const t=this.isNegative(i);i=this.normalizeDigits(i),i=this.stripCurrency(i,t),i=this.stripSignLiterals(i);const e=this.decimalSymbol?`(?:${D(this.decimalSymbol)}(\\d*))?`:"",n=this.stripGroupingSeparator(i).match(new RegExp(`^${M}${e}$`));if(n&&this.isValidIntegerFormat(this.decimalSymbol?i.split(this.decimalSymbol)[0]:i,Number(n[1])))return+`${t?"-":""}${this.onlyDigits(n[1])}.${this.onlyDigits(n[2]||"")}`}return null}isValidIntegerFormat(i,t){const e={...this.options,minimumFractionDigits:0};return[this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale,{...e,useGrouping:!0})),!1),this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale,{...e,useGrouping:!1})),!1)].includes(i)}format(i,t={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return i!=null?i.toLocaleString(this.locale,{...this.options,...t}):""}toFraction(i){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(i.substr(1)).substr(0,this.maximumFractionDigits)}`}isFractionIncomplete(i){return!!this.normalizeDigits(this.stripGroupingSeparator(i)).match(new RegExp(`^${M}${D(this.decimalSymbol)}$`))}isNegative(i){return i.startsWith(this.negativePrefix)||this.minusSign===void 0&&(i.startsWith("(")||i.startsWith("-"))||this.minusSign!==void 0&&i.replace("-",this.minusSign).startsWith(this.minusSign)}insertCurrency(i,t){return`${t?this.negativePrefix:this.prefix}${i}${t?this.negativeSuffix:this.suffix}`}stripGroupingSeparator(i){return this.groupingSymbol!==void 0?i.replace(new RegExp(D(this.groupingSymbol),"g"),""):i}stripSignLiterals(i){return this.minusSign!==void 0?i.replace("-",this.minusSign).replace(this.minusSign,""):i.replace(/[-()]/g,"")}stripCurrency(i,t){return i.replace(t?this.negativePrefix:this.prefix,"").replace(t?this.negativeSuffix:this.suffix,"")}normalizeDecimalSeparator(i,t){return R.forEach(e=>{i=i.substr(0,t)+i.substr(t).replace(e,this.decimalSymbol)}),i}normalizeDigits(i){return this.digits[0]!=="0"&&this.digits.forEach((t,e)=>{i=i.replace(new RegExp(t,"g"),String(e))}),i}onlyDigits(i){return this.normalizeDigits(i).replace(/\D+/g,"")}onlyLocaleDigits(i){return i.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class ${constructor(i){this.currencyFormat=i}}class W extends ${conformToMask(i,t=""){const e=this.currencyFormat.isNegative(i),n=d=>d===""&&e&&!(this.currencyFormat.minusSign===void 0?t===this.currencyFormat.negativePrefix+this.currencyFormat.negativeSuffix:t===this.currencyFormat.negativePrefix),m=d=>{if(n(d))return"";if(this.currencyFormat.maximumFractionDigits>0){if(this.currencyFormat.isFractionIncomplete(d))return d;if(d.startsWith(this.currencyFormat.decimalSymbol))return this.currencyFormat.toFraction(d)}return null};let a=i;a=this.currencyFormat.stripCurrency(a,e),a=this.currencyFormat.stripSignLiterals(a);const l=m(a);if(l!=null)return this.currencyFormat.insertCurrency(l,e);const[c,...g]=a.split(this.currencyFormat.decimalSymbol),r=N(this.currencyFormat.onlyDigits(c)),o=this.currencyFormat.onlyDigits(g.join("")).substr(0,this.currencyFormat.maximumFractionDigits),h=g.length>0&&o.length===0,f=r===""&&e&&(this.currencyFormat.minusSign===void 0?t===i.slice(0,-2)+this.currencyFormat.negativeSuffix:t===i.slice(0,-1));return h||f||n(r)?t:r.match(/\d+/)?{numberValue:+`${e?"-":""}${r}.${o}`,fractionDigits:o}:""}}class X extends ${conformToMask(i,t=""){if(i===""||this.currencyFormat.parse(t)===0&&this.currencyFormat.stripCurrency(t,!0).slice(0,-1)===this.currencyFormat.stripCurrency(i,!0))return"";const e=this.currencyFormat.isNegative(i),n=this.currencyFormat.stripSignLiterals(i)===""?-0:+`${e?"-":""}${N(this.currencyFormat.onlyDigits(i))}`/Math.pow(10,this.currencyFormat.maximumFractionDigits);return{numberValue:n,fractionDigits:n.toFixed(this.currencyFormat.maximumFractionDigits).slice(-this.currencyFormat.maximumFractionDigits)}}}const j={locale:void 0,currency:void 0,currencyDisplay:void 0,hideGroupingSeparatorOnFocus:!0,hideCurrencySymbolOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0,precision:void 0,autoDecimalDigits:!1,valueRange:void 0,useGrouping:void 0,valueScaling:void 0};class B{constructor(i){this.el=i.el,this.onInput=i.onInput,this.onChange=i.onChange,this.addEventListener(),this.init(i.options)}setOptions(i){this.init(i),this.format(this.currencyFormat.format(this.validateValueRange(this.numberValue))),this.onChange(this.getValue())}getValue(){return{number:this.valueScaling&&this.numberValue!=null?this.toInteger(this.numberValue,this.valueScaling):this.numberValue,formatted:this.formattedValue}}setValue(i){const t=this.valueScaling!==void 0&&i!=null?this.toFloat(i,this.valueScaling):i;t!==this.numberValue&&(this.format(this.currencyFormat.format(this.validateValueRange(t))),this.onChange(this.getValue()))}init(i){this.options={...j,...i},this.options.autoDecimalDigits&&(this.options.hideNegligibleDecimalDigitsOnFocus=!1),this.el.getAttribute("inputmode")||this.el.setAttribute("inputmode",this.options.autoDecimalDigits?"numeric":"decimal"),this.currencyFormat=new z(this.options),this.numberMask=this.options.autoDecimalDigits?new X(this.currencyFormat):new W(this.currencyFormat);const t={[p.precision]:this.currencyFormat.maximumFractionDigits,[p.thousands]:3,[p.millions]:6,[p.billions]:9};this.valueScaling=this.options.valueScaling?t[this.options.valueScaling]:void 0,this.valueScalingFractionDigits=this.valueScaling!==void 0&&this.options.valueScaling!==p.precision?this.valueScaling+this.currencyFormat.maximumFractionDigits:this.currencyFormat.maximumFractionDigits,this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var i,t;let e=this.toFloat(-Number.MAX_SAFE_INTEGER);return((i=this.options.valueRange)===null||i===void 0?void 0:i.min)!==void 0&&(e=Math.max((t=this.options.valueRange)===null||t===void 0?void 0:t.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),e}getMaxValue(){var i,t;let e=this.toFloat(Number.MAX_SAFE_INTEGER);return((i=this.options.valueRange)===null||i===void 0?void 0:i.max)!==void 0&&(e=Math.min((t=this.options.valueRange)===null||t===void 0?void 0:t.max,this.toFloat(Number.MAX_SAFE_INTEGER))),e}toFloat(i,t){return i/Math.pow(10,t??this.valueScalingFractionDigits)}toInteger(i,t){return Number(i.toFixed(t??this.valueScalingFractionDigits).split(".").join(""))}validateValueRange(i){return i!=null?Math.min(Math.max(i,this.minValue),this.maxValue):i}format(i,t=!1){if(i!=null){this.decimalSymbolInsertedAt!==void 0&&(i=this.currencyFormat.normalizeDecimalSeparator(i,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const e=this.numberMask.conformToMask(i,this.formattedValue);let n;if(typeof e=="object"){const{numberValue:m,fractionDigits:a}=e;let{maximumFractionDigits:l,minimumFractionDigits:c}=this.currencyFormat;this.focus?c=t?a.replace(/0+$/,"").length:Math.min(l,a.length):Number.isInteger(m)&&!this.options.autoDecimalDigits&&(this.options.precision===void 0||c===0)&&(c=l=0),n=this.toInteger(Math.abs(m))>Number.MAX_SAFE_INTEGER?this.formattedValue:this.currencyFormat.format(m,{useGrouping:this.options.useGrouping!==!1&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:c,maximumFractionDigits:l})}else n=e;this.maxValue<=0&&!this.currencyFormat.isNegative(n)&&this.currencyFormat.parse(n)!==0&&(n=n.replace(this.currencyFormat.prefix,this.currencyFormat.negativePrefix)),this.minValue>=0&&(n=n.replace(this.currencyFormat.negativePrefix,this.currencyFormat.prefix)),(this.options.currencyDisplay===y.hidden||this.focus&&this.options.hideCurrencySymbolOnFocus)&&(n=n.replace(this.currencyFormat.negativePrefix,this.currencyFormat.minusSign!==void 0?this.currencyFormat.minusSign:"(").replace(this.currencyFormat.negativeSuffix,this.currencyFormat.minusSign!==void 0?"":")").replace(this.currencyFormat.prefix,"").replace(this.currencyFormat.suffix,"")),this.el.value=n,this.numberValue=this.currencyFormat.parse(n)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,this.onInput(this.getValue())}addEventListener(){this.el.addEventListener("input",i=>{const{value:t,selectionStart:e}=this.el,n=i;if(e&&n.data&&R.includes(n.data)&&(this.decimalSymbolInsertedAt=e-1),this.format(t),this.focus&&e!=null){const m=()=>{const{prefix:a,suffix:l,decimalSymbol:c,maximumFractionDigits:g,groupingSymbol:r}=this.currencyFormat;let o=t.length-e;const h=this.formattedValue.length;if(this.currencyFormat.minusSign===void 0&&(t.startsWith("(")||t.startsWith("-"))&&!t.endsWith(")"))return h-this.currencyFormat.negativeSuffix.length>1?this.formattedValue.substring(e).length:1;if(this.formattedValue.substr(e,1)===r&&E(this.formattedValue,r)===E(t,r)+1)return h-o-1;if(h<o)return e;if(c!==void 0&&t.indexOf(c)!==-1){const f=t.indexOf(c)+1;if(Math.abs(h-t.length)>1&&e<=f)return this.formattedValue.indexOf(c)+1;!this.options.autoDecimalDigits&&e>f&&this.currencyFormat.onlyDigits(t.substr(f)).length-1===g&&(o-=1)}return this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===y.hidden?h-o:Math.max(h-Math.max(o,l.length),a.length)};this.setCaretPosition(m())}}),this.el.addEventListener("focus",()=>{this.focus=!0,this.numberValueOnFocus=this.numberValue,setTimeout(()=>{const{value:i,selectionStart:t,selectionEnd:e}=this.el;if(this.format(i,this.options.hideNegligibleDecimalDigitsOnFocus),t!=null&&e!=null&&Math.abs(t-e)>0)this.setCaretPosition(0,this.el.value.length);else if(t!=null){const n=this.getCaretPositionOnFocus(i,t);this.setCaretPosition(n)}})}),this.el.addEventListener("blur",()=>{this.focus=!1,this.format(this.currencyFormat.format(this.validateValueRange(this.numberValue))),this.numberValueOnFocus!==this.numberValue&&this.onChange(this.getValue())})}getCaretPositionOnFocus(i,t){if(this.numberValue==null)return t;const{prefix:e,negativePrefix:n,suffix:m,negativeSuffix:a,groupingSymbol:l,currency:c}=this.currencyFormat,g=this.numberValue<0,r=g?n:e,o=r.length;if(this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===y.hidden){if(g){if(t<=1)return 1;if(i.endsWith(")")&&t>i.indexOf(")"))return this.formattedValue.length-1}}else{const f=g?a.length:m.length;if(t>=i.length-f)return this.formattedValue.length-f;if(t<o)return o}let h=t;return this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==y.hidden&&t>=o&&c!==void 0&&r.includes(c)&&(h-=o,g&&(h+=1)),this.options.hideGroupingSeparatorOnFocus&&l!==void 0&&(h-=E(i.substring(0,t),l)),h}setCaretPosition(i,t=i){this.el.setSelectionRange(i,t)}}const q=s=>s?.matches("input")?s:s?.querySelector("input");function Q(s,i){var t,e,n,m;let a;const l=x(null),c=x(null),g=x(null),r=P(),o=r?.emit||((e=(t=r?.proxy)===null||t===void 0?void 0:t.$emit)===null||e===void 0?void 0:e.bind(r?.proxy)),h=r?.props||((n=r?.proxy)===null||n===void 0?void 0:n.$props),f=C.startsWith("3"),d=f&&((m=r?.attrs.modelModifiers)===null||m===void 0?void 0:m.lazy),v=I(()=>h?.[f?"modelValue":"value"]),b=f?"update:modelValue":"input",S=d?"update:modelValue":"change";return _(l,u=>{var V;if(u){const O=q((V=u?.$el)!==null&&V!==void 0?V:u);O?(a=new B({el:O,options:s,onInput:F=>{!d&&i!==!1&&v.value!==F.number&&o?.(b,F.number),g.value=F.number,c.value=F.formatted},onChange:F=>{o?.(S,F.number)}}),a.setValue(v.value)):console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.')}else a=null}),{inputRef:l,numberValue:g,formattedValue:c,setValue:u=>a?.setValue(u),setOptions:u=>a?.setOptions(u)}}const U=["value"],H=A({__name:"CurrencyInput",props:{modelValue:null,min:null,max:null},setup(s){const i=s,t=x({locale:void 0,currency:"IQD",currencyDisplay:"hidden",precision:0,hideCurrencySymbolOnFocus:!0,hideGroupingSeparatorOnFocus:!1,hideNegligibleDecimalDigitsOnFocus:!0,autoDecimalDigits:!1,exportValueAsInteger:!1,autoSign:!1,useGrouping:!0,valueRange:{min:I(()=>i.min),max:I(()=>i.max)}}),{formattedValue:e,inputRef:n,setValue:m,setOptions:a}=Q(t.value);return _(()=>i.modelValue,l=>m(l??i.min)),_(()=>[i.min,i.max],()=>a(t.value)),(l,c)=>(L(),G("input",w({ref_key:"inputRef",ref:n,value:T(e)},l.$attrs),null,16,U))}});export{H as _};