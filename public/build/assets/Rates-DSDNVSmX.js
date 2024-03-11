import{d as k,e as u,x as T,y as S,o,c as i,a as f,b as e,h as L,v as D,a0 as U,w as h,g as r,Q as B,r as R,U as N,k as x,i as w,F as C,a1 as P,t as l,R as $,T as Q}from"./main-DmoZ1fz4.js";import{M as A}from"./Master-ql31p3jM.js";import{_ as F}from"./Paginator.vue_vue_type_script_setup_true_lang-B5QeFegy.js";import{u as z}from"./urlQueryManager-DRfC3SWK.js";import{i as I}from"./index.es-CV7LqIVy.js";import{d as Y}from"./datepickerPresets-DxjH1h4T.js";import{_ as q}from"./BranchFilter.vue_vue_type_script_setup_true_lang-DPeXwSCL.js";import{T as E}from"./transactionType-BTQWP0LV.js";import{T as K}from"./transactionStatus-CCjb01bm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DAhRltj6.js";const j={class:"flex flex-wrap items-center gap-2 ms-auto"},H={class:"relative flex-1 min-w-[10rem]"},O=e("label",{class:"label"},"Name",-1),W={class:"relative flex-1 min-w-[14rem]"},G=e("label",{class:"label"},"Date",-1),J=k({__name:"RatesFilter",emits:["change"],setup(V,{emit:g}){const v=g,p=new URLSearchParams(location.search),_=u(""),c=u(""),s=u([null,null]);T(()=>{m()});const b=S(()=>s.value[0]===null||s.value[1]===null?"":`${s.value[0]}~${s.value[1]}`),m=()=>{_.value=p.get("branchId")??"",c.value=p.get("name")??"",p.get("dateRange")&&(s.value=p.get("dateRange").split("~"))},y=()=>{let d=`branchId=${_.value}&name=${c.value}&dateRange=${b.value}&page=1`;v("change",d)};return(d,a)=>(o(),i("div",j,[f(q,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=n=>_.value=n),onChange:y},null,8,["modelValue"]),e("div",H,[L(e("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>c.value=n),onKeyup:U(y,["enter"]),type:"text",class:"input-sm peer"},null,544),[[D,c.value]]),O]),e("div",W,[f(r(I),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:r(Y),value:s.value,"onUpdate:value":a[2]||(a[2]=n=>s.value=n),onChange:y,class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":h(()=>[]),_:1},8,["shortcuts","value"]),G])]))}}),X={class:"mb-5 flex items-center gap-5"},Z={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},ee={class:"w-full"},te={class:"sticky top-0 z-10 text-left"},se=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name",-1),ae=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Type",-1),oe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Total",-1),re=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Paid",-1),ne=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Remaining",-1),le=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),ie={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},ce={class:"transition even:bg-gray-100"},de={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},ue={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},pe={class:"border border-gray-200 px-2 py-1"},_e={key:1},me={class:"border border-gray-200 px-2 py-1"},ye={key:1},he={class:"border border-gray-200 px-2 py-1"},fe={class:"border border-gray-200 px-2 py-1"},ge={key:0,class:"border border-gray-200 px-2 py-1 text-center"},ve={class:"flex justify-center gap-3"},be=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",class:"mx-auto h-5 w-5 cursor-pointer text-blue-500"},[e("path",{d:"M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z"})],-1),De=k({__name:"Rates",setup(V){const g=u([]),v=u({});u();const p=u(!1),{updateUrlQuery:_,urlQuery:c}=z(),{hasPermissionTo:s,hasAnyPermission:b}=Q();T(()=>m(location.search));const m=async y=>{const d=await _(y),{data:a}=await B.get(`/api/rates?${d}`);g.value=a.data,v.value=a.meta,p.value=!1};return(y,d)=>{const a=R("router-view"),n=R("router-link"),M=N("tip");return o(),i(C,null,[f(a,{onClose:m}),f(A,null,{header:h(()=>[x("Rates")]),body:h(()=>[e("div",X,[f(J,{onChange:m})]),e("section",Z,[e("table",ee,[e("thead",null,[e("tr",te,[se,ae,oe,re,ne,le,r(b)("Rate.pay")?(o(),i("th",ie)):w("",!0)])]),e("tbody",null,[(o(!0),i(C,null,P(g.value,t=>(o(),i("tr",ce,[e("td",de,l(t.name),1),e("td",ue,l(t.type),1),e("td",pe,[r(s)("Rate.viewDetails")?(o(),$(n,{key:0,to:`/rates/${t.id}/details?dateRange=${r(c).get("dateRange")??""}`,class:"cursor-pointer text-blue-500 underline"},{default:h(()=>[x(l(t.total?.toLocaleString()??0),1)]),_:2},1032,["to"])):(o(),i("p",_e,l(t.total?.toLocaleString()??0),1))]),e("td",me,[r(s)("Transaction.view")?(o(),$(n,{key:0,class:"cursor-pointer text-blue-500 underline",to:`/transactions?partnerId=${t.id}&type=${r(E).Expense}&status=${r(K).Received}&dateRange=${r(c).get("dateRange")??""}`},{default:h(()=>[x(l(t.paidAmount?.toLocaleString()??0),1)]),_:2},1032,["to"])):(o(),i("p",ye,l(t.total?.toLocaleString()??0),1))]),e("td",he,l((t.total-t.paidAmount).toLocaleString()??0),1),e("td",fe,l(t.branch.name),1),r(b)("Rate.pay")?(o(),i("td",ge,[e("div",ve,[r(s)("Rate.pay")?L((o(),$(n,{key:0,to:`/rates/${t.id}/pay`,class:"cursor-pointer text-blue-500"},{default:h(()=>[be]),_:2},1032,["to"])),[[M,"Pay"]]):w("",!0)])])):w("",!0)]))),256))])])])]),_:1}),f(F,{data:v.value,onChange:d[0]||(d[0]=t=>m(`page=${t}`)),class:"mt-3"},null,8,["data"])],64)}}});export{De as default};