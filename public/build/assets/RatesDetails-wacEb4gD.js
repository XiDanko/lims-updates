import{d as D,e as _,x as I,y as N,o,c as r,b as e,a as b,w as h,g as i,Q as k,r as S,U as T,t as s,i as w,F as R,a1 as V,m as A,R as $,k as C,h as B,T as F,Y as P,$ as Q}from"./main-DmoZ1fz4.js";import{M as U}from"./Master-ql31p3jM.js";import{_ as Y}from"./Paginator.vue_vue_type_script_setup_true_lang-B5QeFegy.js";import{u as j}from"./urlQueryManager-DRfC3SWK.js";import{i as q}from"./index.es-CV7LqIVy.js";import{d as z}from"./datepickerPresets-DxjH1h4T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={class:"flex flex-wrap items-center gap-2 ms-auto"},H={class:"relative flex-1 min-w-[14rem]"},O=e("label",{class:"label"},"Date",-1),W=D({__name:"RatesDetailsFilter",emits:["change"],setup(M,{emit:f}){const m=f,c=new URLSearchParams(location.search),a=_([null,null]);I(()=>{v()});const g=N(()=>a.value[0]===null||a.value[1]===null?"":`${a.value[0]}~${a.value[1]}`),v=()=>{c.get("dateRange")&&(a.value=c.get("dateRange").split("~"))},u=()=>{let p=`dateRange=${g.value}&page=1`;m("change",p)};return(p,n)=>(o(),r("div",E,[e("div",H,[b(i(q),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:i(z),value:a.value,"onUpdate:value":n[0]||(n[0]=x=>a.value=x),onChange:u,class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":h(()=>[]),_:1},8,["shortcuts","value"]),O])]))}}),G={class:"flex justify-between"},J=e("h1",null,"Rates Details",-1),K={class:"mb-5 flex items-center gap-5"},X={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},Z={class:"w-full"},ee={class:"sticky top-0 z-10 text-left"},te=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Reg. No.",-1),se=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Invoice No.",-1),oe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Item",-1),ae=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Patient",-1),re=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Total",-1),ne=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Ratio",-1),ie=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Amount",-1),le=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Date",-1),de={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},ce={class:"transition even:bg-gray-100"},ue={class:"border border-gray-200 px-2 py-1"},pe={key:1},_e={class:"border border-gray-200 px-2 py-1"},he={key:1},fe={class:"border border-gray-200 px-2 py-1"},me={class:"border border-gray-200 px-2 py-1"},ye={class:"border border-gray-200 px-2 py-1"},be={class:"border border-gray-200 px-2 py-1"},ge={class:"border border-gray-200 px-2 py-1"},ve={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},xe={key:0,class:"border border-gray-200 px-2 py-1 text-center"},we={class:"flex justify-center gap-3"},ke=["onClick"],Re=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),$e=[Re],Ve=D({__name:"RatesDetails",setup(M){const f=_([]),m=_({}),c=_(),a=_(!1),g=A(),{updateUrlQuery:v}=j(),{hasPermissionTo:u,hasAnyPermission:p}=F();I(()=>n(location.search));const n=async y=>{const l=await v(y),{data:d}=await k.get(`/api/rates/${g.params.partnerId}/details?${l}`);f.value=d.data,m.value=d.meta,c.value=d.total,a.value=!1},x=async y=>{const{isConfirmed:l}=await P.fire();l&&(await k.delete(`/api/rates/${y}`),Q.fire(),await n(location.search))};return(y,l)=>{const d=S("router-link"),L=T("tip");return o(),r(R,null,[b(U,null,{header:h(()=>[e("div",G,[J,e("p",null,"Total: "+s(c.value?.toLocaleString()??0),1)])]),body:h(()=>[e("div",K,[b(W,{onChange:n})]),e("section",X,[e("table",Z,[e("thead",null,[e("tr",ee,[te,se,oe,ae,re,ne,ie,le,i(p)("Rate.delete")?(o(),r("th",de)):w("",!0)])]),e("tbody",null,[(o(!0),r(R,null,V(f.value,t=>(o(),r("tr",ce,[e("td",ue,[i(u)("Visit.view")?(o(),$(d,{key:0,class:"text-blue-500 underline",to:`/visits?branchId=${t.branchId}&visitNumber=${t.visit.number}`},{default:h(()=>[C(s(t.visit.number),1)]),_:2},1032,["to"])):(o(),r("p",pe,s(t.visit.number),1))]),e("td",_e,[i(u)("Invoice.view")?(o(),$(d,{key:0,class:"text-blue-500 underline",to:`/invoices?branchId=${t.branchId}&number=${t.invoice.number}`},{default:h(()=>[C(s(t.invoice.number),1)]),_:2},1032,["to"])):(o(),r("p",he,s(t.invoice.number),1))]),e("td",fe,s(t.item?.label),1),e("td",me,s(t.visit.patient.name),1),e("td",ye,s(t.total?.toLocaleString()),1),e("td",be,s(t.ratio?t.ratio+"%":""),1),e("td",ge,s(t.amount?.toLocaleString()),1),e("td",ve,s(t.date),1),i(p)("Rate.delete")?(o(),r("td",xe,[e("div",we,[i(u)("Rate.delete")?B((o(),r("button",{key:0,onClick:Ce=>x(t.id),class:"cursor-pointer text-red-500"},$e,8,ke)),[[L,"Delete"]]):w("",!0)])])):w("",!0)]))),256))])])])]),_:1}),b(Y,{data:m.value,onChange:l[0]||(l[0]=t=>n(`page=${t}`)),class:"mt-3"},null,8,["data"])],64)}}});export{Ve as default};