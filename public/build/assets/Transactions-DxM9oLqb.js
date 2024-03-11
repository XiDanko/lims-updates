import{d as N,e as h,x as D,y as E,Q as A,o as c,c as v,a as m,g as o,i as x,b as e,h as $,v as Q,a0 as Y,V as k,w as T,T as U,r as L,U as O,t as s,F as I,a1 as q,R as K,k as j,a2 as H,a3 as W}from"./main-DmoZ1fz4.js";import{M as G}from"./Master-ql31p3jM.js";import{_ as J}from"./Paginator.vue_vue_type_script_setup_true_lang-B5QeFegy.js";import{u as X}from"./urlQueryManager-DRfC3SWK.js";import{i as Z}from"./index.es-CV7LqIVy.js";import{d as ee}from"./datepickerPresets-DxjH1h4T.js";import{_ as te}from"./BranchFilter.vue_vue_type_script_setup_true_lang-DPeXwSCL.js";import{T as g}from"./transactionType-BTQWP0LV.js";import{T as V}from"./transactionStatus-CCjb01bm.js";import{s as se}from"./multiselect-DAhRltj6.js";import{A as oe}from"./ActivityLogSidebar-BgD4pgwD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ae={class:"flex flex-wrap items-center gap-2 ms-auto"},le={key:0,class:"relative flex-1 min-w-[10rem]"},ne=e("label",{class:"label"},"Register",-1),re={class:"relative flex-1 min-w-[10rem]"},ie=e("label",{class:"label"},"Invoice Number",-1),ce={class:"relative flex-1 min-w-[10rem]"},de=e("option",{value:"",selected:""},"All",-1),ue=["value"],pe=["value"],ve=["value"],_e=["value"],he=["value"],me=["value"],fe=["value"],ye=e("label",{class:"label"},"Type",-1),ge={class:"relative flex-1 min-w-[10rem]"},be=e("option",{value:"",selected:""},"All",-1),we=["value"],xe=["value"],$e=e("label",{class:"label"},"Status",-1),Te={class:"relative flex-1 min-w-[14rem]"},Ce=e("label",{class:"label"},"Date",-1),Re=N({__name:"TransactionsFilter",emits:["change"],setup(P,{emit:a}){const C=a,d=new URLSearchParams(location.search),{hasPermissionTo:w}=U(),f=h([]),u=h(""),p=h(""),n=h(""),r=h([null,null]),y=h(""),t=h("");D(()=>{M(),S()});const R=E(()=>r.value[0]===null||r.value[1]===null?"":`${r.value[0]}~${r.value[1]}`),M=()=>{u.value=d.get("branchId")??"",n.value=d.get("invoiceNumber")??"",d.get("dateRange")&&(r.value=d.get("dateRange").split("~")),y.value=d.get("status")??"",t.value=d.get("type")??""},S=async()=>{if(!w("Register.list"))return;const{data:_}=await A.get(`/api/registers/list?branchId=${u.value}`);f.value=_.data},B=_=>{p.value=_??"",b()},F=()=>{const _=n.value;z(),n.value=_,b()},b=()=>{let _=`branchId=${u.value}&registerId=${p.value}&invoiceNumber=${n.value}&type=${t.value}&status=${y.value}&dateRange=${R.value}&page=1`;C("change",_)},z=()=>{u.value="",p.value="",n.value="",r.value=[null,null],y.value="",t.value=""};return(_,l)=>(c(),v("div",ae,[m(te,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=i=>u.value=i),onChange:l[1]||(l[1]=i=>{b(),S()})},null,8,["modelValue"]),o(w)("Register.list")?(c(),v("div",le,[m(o(se),{"model-value":p.value,options:f.value,"value-prop":"id","track-by":"userName",label:"userName",searchable:!0,onChange:B,class:"input-sm peer"},null,8,["model-value","options"]),ne])):x("",!0),e("div",re,[$(e("input",{"onUpdate:modelValue":l[2]||(l[2]=i=>n.value=i),onKeyup:Y(F,["enter"]),type:"text",class:"input-sm peer"},null,544),[[Q,n.value]]),ie]),e("div",ce,[$(e("select",{"onUpdate:modelValue":l[3]||(l[3]=i=>t.value=i),onChange:b,class:"input-sm peer"},[de,e("option",{value:o(g).Payment},"Payment",8,ue),e("option",{value:o(g).Discount},"Discount",8,pe),e("option",{value:o(g).Refund},"Refund",8,ve),e("option",{value:o(g).TransferIn},"Transfer-in",8,_e),e("option",{value:o(g).TransferOut},"Transfer-out",8,he),e("option",{value:o(g).TopUp},"Top-up",8,me),e("option",{value:o(g).Expense},"Expense",8,fe)],544),[[k,t.value]]),ye]),e("div",ge,[$(e("select",{"onUpdate:modelValue":l[4]||(l[4]=i=>y.value=i),onChange:b,class:"input-sm peer"},[be,e("option",{value:o(V).Received},"Received",8,we),e("option",{value:o(V).Canceled},"Canceled",8,xe)],544),[[k,y.value]]),$e]),e("div",Te,[m(o(Z),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:o(ee),value:r.value,"onUpdate:value":l[5]||(l[5]=i=>r.value=i),onChange:b,class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":T(()=>[]),_:1},8,["shortcuts","value"]),Ce])]))}}),Se={class:"flex items-center gap-5 overflow-x-auto overflow-y-hidden"},ke=e("h1",null,"Transactions",-1),Le={class:"w-full text-center text-lg"},Ie=e("tr",null,[e("th",{class:""},"Payment"),e("th",{class:""},"Discount"),e("th",{class:""},"Refund"),e("th",{class:"whitespace-nowrap"},"Transfer-in"),e("th",{class:"whitespace-nowrap"},"Transfer-out"),e("th",{class:"whitespace-nowrap"},"Top-up"),e("th",{class:""},"Expense"),e("th",{class:""},"Profit"),e("th",{class:""},"Cash")],-1),Ve={class:"mb-5 flex items-start gap-1"},Ne={class:"pe-1 h-[calc(100vh-17.4rem)] overflow-y-auto"},De={class:"w-full"},Ae={class:"sticky top-0 z-10 text-left"},Ue=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Creator",-1),Pe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Register",-1),Me=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Reference Register",-1),Be=e("th",{class:"whitespace-nowrap bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Invoice No.",-1),Fe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Type",-1),ze=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Amount",-1),Ee=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Status",-1),Qe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Notes",-1),Ye=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Date",-1),Oe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),qe={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},Ke={class:"transition even:bg-gray-100"},je={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},He={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},We={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},Ge={class:"border border-gray-200 px-2 py-1"},Je={key:1},Xe={class:"border border-gray-200 px-2 py-1"},Ze={class:"border border-gray-200 px-2 py-1"},et={class:"border border-gray-200 px-2 py-1"},tt={class:"border border-gray-200 px-2 py-1"},st={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},ot={class:"border border-gray-200 px-2 py-1"},at={key:0,class:"border border-gray-200 px-2 py-1 text-center"},lt={class:"flex items-center justify-center gap-3"},nt=["onClick"],rt=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),it=[rt],wt=N({__name:"Transactions",setup(P){const a=h({}),{updateUrlQuery:C}=X(),{hasPermissionTo:d,hasAnyPermission:w}=U();D(()=>f(location.search));const f=async u=>{const p=await C(u),{data:n}=await A.get(`/api/transactions?${p}`);a.value=n};return(u,p)=>{const n=L("router-view"),r=L("router-link"),y=O("tip");return c(),v(I,null,[m(n,{onClose:f}),m(G,null,{header:T(()=>[e("div",Se,[ke,e("table",Le,[Ie,e("tr",null,[e("td",null,s(a.value.totalPayment?.toLocaleString()??0),1),e("td",null,s(a.value.totalDiscount?.toLocaleString()??0),1),e("td",null,s(a.value.totalRefund?.toLocaleString()??0),1),e("td",null,s(a.value.totalTransferIn?.toLocaleString()??0),1),e("td",null,s(a.value.totalTransferOut?.toLocaleString()??0),1),e("td",null,s(a.value.totalTopUp?.toLocaleString()??0),1),e("td",null,s(a.value.totalExpense?.toLocaleString()??0),1),e("td",null,s(a.value.profit?.toLocaleString()??0),1),e("td",null,s(a.value.cash?.toLocaleString()??0),1)])])])]),body:T(()=>[e("div",Ve,[m(Re,{onChange:f})]),e("section",Ne,[e("table",De,[e("thead",null,[e("tr",Ae,[Ue,Pe,Me,Be,Fe,ze,Ee,Qe,Ye,Oe,o(w)("ActivityLog.list")?(c(),v("th",qe)):x("",!0)])]),e("tbody",null,[(c(!0),v(I,null,q(a.value.data,t=>(c(),v("tr",Ke,[e("td",je,s(t.creator?.name),1),e("td",He,s(t.register.user.name),1),e("td",We,s(t.referenceRegister?.user?.name),1),e("td",Ge,[t.invoice&&o(d)("Invoice.view")?(c(),K(r,{key:0,class:"text-blue-500 underline",to:`/invoices?branchId=${t.branchId}&number=${t.invoice.number}`},{default:T(()=>[j(s(t.invoice.number),1)]),_:2},1032,["to"])):t.invoice?(c(),v("p",Je,s(t.invoice.number),1)):x("",!0)]),e("td",Xe,s(t.type.capitalize()),1),e("td",Ze,s(t.amount?.toLocaleString()),1),e("td",et,s(t.status.capitalize()),1),e("td",tt,s(t.notes),1),e("td",st,s(t.date),1),e("td",ot,s(t.branch.name),1),o(w)("ActivityLog.list")?(c(),v("td",at,[e("div",lt,[o(d)("ActivityLog.list")?$((c(),v("button",{key:0,onClick:R=>o(H).emit(o(W).Show,t.id),class:"cursor-pointer text-gray-600"},it,8,nt)),[[y,"View Activities"]]):x("",!0)])])):x("",!0)]))),256))])])])]),_:1}),m(J,{data:a.value.meta,onChange:p[0]||(p[0]=t=>f(`page=${t}`)),class:"mt-3"},null,8,["data"]),m(oe)],64)}}});export{wt as default};