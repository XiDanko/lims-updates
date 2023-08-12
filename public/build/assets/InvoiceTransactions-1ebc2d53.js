import{d as S,f as T,g as z,x as A,Q as f,r as m,V,o,c as a,a as h,w as g,b as t,t as s,i as r,k as n,F as w,a2 as I,j as d,R as B,a3 as M,a4 as H,T as D,Z as $,a0 as N}from"./main-bf2af1c2.js";import{M as R}from"./Master-fd48b992.js";import{T as x}from"./transactionStatus-76f595ca.js";import{A as j}from"./ActivityLogSidebar-27791482.js";import"./_plugin-vue_export-helper-c27b6911.js";const E={class:"flex items-center justify-between"},P=t("h1",null,"Invoice Transactions",-1),F={class:"text-xl"},Q={class:"text-xl"},Z={class:"text-xl"},q={class:"text-xl"},G={class:"text-xl"},J={class:"pr-1 h-[calc(100vh-8.6rem)] overflow-y-auto"},K={class:"w-full"},O={class:"sticky top-0 z-10 text-left"},U=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Creator",-1),W=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Register",-1),X=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Type",-1),Y=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Amount",-1),tt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Status",-1),et=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Notes",-1),st=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Date",-1),ot={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},rt={class:"transition even:bg-gray-100"},at={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},it={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},nt={class:"border border-gray-200 px-2 py-1"},ct={class:"border border-gray-200 px-2 py-1"},lt={class:"border border-gray-200 px-2 py-1"},dt={class:"border border-gray-200 px-2 py-1"},ut={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},pt={key:0,class:"border border-gray-200 px-2 py-1 text-center"},_t={class:"flex items-center justify-center gap-3"},ht=["onClick"],gt={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",class:"mx-auto h-5 w-5 cursor-pointer text-blue-500"},yt=t("path",{d:"M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z"},null,-1),vt=[yt],ft={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-5 w-5 cursor-pointer text-blue-500"},mt=t("path",{d:"M144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96H192L144.6 24.88zM332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128H320C323.8 130.5 328.1 133.3 332.1 136.4V136.4zM336.1 288.1C346.3 279.6 346.3 264.4 336.1 255C327.6 245.7 312.4 245.7 303 255L256 302.1L208.1 255C199.6 245.7 184.4 245.7 175 255C165.7 264.4 165.7 279.6 175 288.1L222.1 336L175 383C165.7 392.4 165.7 407.6 175 416.1C184.4 426.3 199.6 426.3 208.1 416.1L256 369.9L303 416.1C312.4 426.3 327.6 426.3 336.1 416.1C346.3 407.6 346.3 392.4 336.1 383L289.9 336L336.1 288.1z"},null,-1),wt=[mt],xt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ct=["onClick"],bt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Lt=[bt],It=S({__name:"InvoiceTransactions",setup(kt){const u=T().params.invoiceId,i=z([]),{hasPermissionTo:y,hasAnyPermission:p}=D();A(()=>_());const _=async()=>{const{data:c}=await f.get(`/api/invoices/${u}/transactions`);i.value=c.data},C=async c=>{const{isConfirmed:v}=await $.fire();v&&(await f.post(`/api/invoices/${u}/transactions/${c}/toggle-status`),N.fire(),await _())};return(c,v)=>{const b=m("router-view"),L=m("router-link"),l=V("tip");return o(),a(w,null,[h(b,{onClose:_}),h(R,null,{header:g(()=>[t("div",E,[P,t("p",F,"Number: "+s(i.value.number),1),t("p",Q,"Total: "+s(i.value.total?.toLocaleString()),1),t("p",Z,"Discount: "+s(i.value.totalDiscount?.toLocaleString()),1),t("p",q,"Paid Amount: "+s(i.value.paidAmount?.toLocaleString()),1),t("p",G,"Due Balance: "+s(i.value.dueBalance?.toLocaleString()),1)])]),body:g(()=>[t("section",J,[t("table",K,[t("thead",null,[t("tr",O,[U,W,X,Y,tt,et,st,r(p)("InvoiceTransaction.update","InvoiceTransaction.toggleStatus","ActivityLog.list")?(o(),a("th",ot)):n("",!0)])]),t("tbody",null,[(o(!0),a(w,null,I(i.value.transactions,e=>(o(),a("tr",rt,[t("td",at,s(e.creator?.name),1),t("td",it,s(e.register.user.name),1),t("td",nt,s(e.type.capitalize()),1),t("td",ct,s(e.amount?.toLocaleString()),1),t("td",lt,s(e.status.capitalize()),1),t("td",dt,s(e.notes),1),t("td",ut,s(e.date),1),r(p)("InvoiceTransaction.update","InvoiceTransaction.toggleStatus","ActivityLog.list")?(o(),a("td",pt,[t("div",_t,[r(y)("InvoiceTransaction.toggleStatus")?(o(),a("button",{key:0,onClick:k=>C(e.id)},[e.status===r(x).Canceled?d((o(),a("svg",gt,vt)),[[l,"Receive"]]):n("",!0),e.status===r(x).Received?d((o(),a("svg",ft,wt)),[[l,"Cancel"]]):n("",!0)],8,ht)):n("",!0),r(p)("InvoiceTransaction.update")?d((o(),B(L,{key:1,to:`/invoices/${r(u)}/transactions/${e.id}/edit`,class:"cursor-pointer text-orange-500"},{default:g(()=>[xt]),_:2},1032,["to"])),[[l,"Edit"]]):n("",!0),r(y)("ActivityLog.list")?d((o(),a("button",{key:2,onClick:k=>r(M).emit(r(H).Show,e.id),class:"cursor-pointer text-gray-600"},Lt,8,Ct)),[[l,"View Activities"]]):n("",!0)])])):n("",!0)]))),256))])])])]),_:1}),h(j)],64)}}});export{It as default};
