import{d as R,f as z,g as V,x as M,Q as v,r as b,V as $,o as a,c as n,a as d,w as m,b as t,t as s,i as o,k as i,F as C,a2 as A,j as h,R as B,a3 as H,a4 as D,T as E,Z as I,a0 as O}from"./main-cee2eb24.js";import{M as P}from"./Master-e24133cb.js";import{T as x}from"./transactionStatus-76f595ca.js";import{A as N}from"./ActivityLogSidebar-55244b79.js";import{u as j}from"./urlQueryManager-ab4c0999.js";import{_ as Q}from"./Paginator.vue_vue_type_script_setup_true_lang-fc9e564e.js";import{_ as F}from"./RegisterTransactionsFilter.vue_vue_type_script_setup_true_lang-bf4c8a38.js";import{T as _}from"./transactionType-f4dd2750.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index.es-89960bab.js";import"./datepickerPresets-1f6bbcad.js";import"./BranchFilter.vue_vue_type_script_setup_true_lang-d1bfbfa5.js";import"./multiselect-97a39018.js";const U={class:"flex items-center gap-5 overflow-x-auto overflow-y-hidden"},q=t("h1",null,"Register Transactions",-1),Z={class:"w-full text-center text-lg"},G=t("tr",null,[t("th",{class:""},"Payment"),t("th",{class:""},"Discount"),t("th",{class:""},"Refund"),t("th",{class:"whitespace-nowrap"},"Transfer-in"),t("th",{class:"whitespace-nowrap"},"Transfer-out"),t("th",{class:"whitespace-nowrap"},"Top-up"),t("th",{class:""},"Expense"),t("th",{class:""},"Profit"),t("th",{class:""},"Cash")],-1),J={class:"mb-5 flex flex-wrap items-center gap-2"},K={class:"pr-1 h-[calc(100vh-17.7rem)] overflow-y-auto"},W={class:"w-full"},X={class:"sticky top-0 z-10 text-left"},Y=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Creator",-1),tt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Reference Register",-1),et=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Type",-1),st=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Amount",-1),ot=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Status",-1),rt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Notes",-1),at=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Date",-1),nt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),it={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},lt={class:"transition even:bg-gray-100"},ct={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},dt={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},ut={class:"border border-gray-200 px-2 py-1"},pt={class:"border border-gray-200 px-2 py-1"},ht={class:"border border-gray-200 px-2 py-1"},_t={class:"border border-gray-200 px-2 py-1"},gt={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},ft={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},yt={key:0,class:"border border-gray-200 px-2 py-1 text-center"},mt={class:"flex items-center justify-center gap-3"},wt=["onClick"],vt={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",class:"mx-auto h-5 w-5 cursor-pointer text-blue-500"},bt=t("path",{d:"M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z"},null,-1),Ct=[bt],xt={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-5 w-5 cursor-pointer text-blue-500"},Lt=t("path",{d:"M144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96H192L144.6 24.88zM332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128H320C323.8 130.5 328.1 133.3 332.1 136.4V136.4zM336.1 288.1C346.3 279.6 346.3 264.4 336.1 255C327.6 245.7 312.4 245.7 303 255L256 302.1L208.1 255C199.6 245.7 184.4 245.7 175 255C165.7 264.4 165.7 279.6 175 288.1L222.1 336L175 383C165.7 392.4 165.7 407.6 175 416.1C184.4 426.3 199.6 426.3 208.1 416.1L256 369.9L303 416.1C312.4 426.3 327.6 426.3 336.1 416.1C346.3 407.6 346.3 392.4 336.1 383L289.9 336L336.1 288.1z"},null,-1),Tt=[Lt],kt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),St=["onClick"],Rt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),zt=[Rt],Ft=R({__name:"RegisterTransactions",setup(Vt){const g=z().params.registerId,r=V({}),{updateUrlQuery:L}=j(),{hasPermissionTo:w,hasAnyPermission:f}=E();M(()=>c(location.search));const c=async u=>{const l=await L(u),{data:y}=await v.get(`/api/registers/${g}/transactions?${l}`);r.value=y},T=async u=>{const{isConfirmed:l}=await I.fire();l&&(await v.post(`/api/registers/${g}/transactions/${u}/toggle-status`),O.fire(),await c(location.search))};return(u,l)=>{const y=b("router-view"),k=b("router-link"),p=$("tip");return a(),n(C,null,[d(y,{onClose:c}),d(P,null,{header:m(()=>[t("div",U,[q,t("table",Z,[G,t("tr",null,[t("td",null,s(r.value.totalPayment?.toLocaleString()??0),1),t("td",null,s(r.value.totalDiscount?.toLocaleString()??0),1),t("td",null,s(r.value.totalRefund?.toLocaleString()??0),1),t("td",null,s(r.value.totalTransferIn?.toLocaleString()??0),1),t("td",null,s(r.value.totalTransferOut?.toLocaleString()??0),1),t("td",null,s(r.value.totalTopUp?.toLocaleString()??0),1),t("td",null,s(r.value.totalExpense?.toLocaleString()??0),1),t("td",null,s(r.value.profit?.toLocaleString()??0),1),t("td",null,s(r.value.cash?.toLocaleString()??0),1)])])])]),body:m(()=>[t("div",J,[d(F,{onChange:c})]),t("section",K,[t("table",W,[t("thead",null,[t("tr",X,[Y,tt,et,st,ot,rt,at,nt,o(f)("RegisterTransaction.update","RegisterTransaction.toggleStatus","ActivityLog.list")?(a(),n("th",it)):i("",!0)])]),t("tbody",null,[(a(!0),n(C,null,A(r.value.data,e=>(a(),n("tr",lt,[t("td",ct,s(e.creator?.name),1),t("td",dt,s(e.referenceRegister?.user?.name),1),t("td",ut,s(e.type.capitalize()),1),t("td",pt,s(e.amount?.toLocaleString()),1),t("td",ht,s(e.status.capitalize()),1),t("td",_t,s(e.notes),1),t("td",gt,s(e.date),1),t("td",ft,s(e.branch.name),1),o(f)("RegisterTransaction.update","RegisterTransaction.toggleStatus","ActivityLog.list")?(a(),n("td",yt,[t("div",mt,[o(w)("InvoiceTransaction.toggleStatus")&&![o(_).TransferOut,o(_).TransferOut].includes(e.type)?(a(),n("button",{key:0,onClick:S=>T(e.id)},[e.status===o(x).Canceled?h((a(),n("svg",vt,Ct)),[[p,"Receive"]]):i("",!0),e.status===o(x).Received?h((a(),n("svg",xt,Tt)),[[p,"Cancel"]]):i("",!0)],8,wt)):i("",!0),o(f)("InvoiceTransaction.update")&&![o(_).TransferOut,o(_).TransferOut].includes(e.type)?h((a(),B(k,{key:1,to:`/registers/${o(g)}/transactions/${e.id}/edit`,class:"cursor-pointer text-orange-500"},{default:m(()=>[kt]),_:2},1032,["to"])),[[p,"Edit"]]):i("",!0),o(w)("ActivityLog.list")?h((a(),n("button",{key:2,onClick:S=>o(H).emit(o(D).Show,e.id),class:"cursor-pointer text-gray-600"},zt,8,St)),[[p,"View Activities"]]):i("",!0)])])):i("",!0)]))),256))])])])]),_:1}),d(Q,{data:r.value.meta,onChange:l[0]||(l[0]=e=>c(`page=${e}`)),class:"mt-3"},null,8,["data"]),d(N)],64)}}});export{Ft as default};
