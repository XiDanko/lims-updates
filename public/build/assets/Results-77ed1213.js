import{d as L,g as b,x as D,y as O,Q as U,o as l,c as g,b as e,a as k,j as v,v as N,a1 as z,i as s,R as I,k as j,W as Y,w as P,F as V,T as F,s as H,r as E,V as W,m as S,a2 as A,t as n,n as M,Z as G,a3 as Z,a6 as J}from"./main-0c5e983d.js";import{M as X}from"./Master-2413594e.js";import{_ as ee}from"./Paginator.vue_vue_type_script_setup_true_lang-8b2657b0.js";import{u as te}from"./urlQueryManager-bb9ba2ef.js";import{i as oe}from"./index.es-30919fd7.js";import{d as re}from"./datepickerPresets-887d9912.js";import{s as ae}from"./multiselect-f0516a60.js";import{_ as se}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-1398da4a.js";import{_ as ne}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d78112e2.js";import{O as t}from"./orderStatus-e3a3f9a7.js";import{_ as le,R as de}from"./ResultsReleaseModal.vue_vue_type_script_setup_true_lang-ab0001cb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./websocketPrint-fe953d11.js";import"./printTemplateManager-5302f870.js";import"./toggle-f29ee038.js";const ie={class:"ml-auto flex flex-wrap items-center gap-2"},ce=["onKeyup"],ue=["onKeyup"],pe=e("option",{value:""},"Select status",-1),fe=["value"],he=["value"],me=["value"],ge=["value"],be=["value"],ye=["value"],ve=["value"],_e=["value"],we=["value"],xe=["value"],$e=L({__name:"ResultsFilter",emits:["change"],setup(q,{emit:B}){const p=new URLSearchParams(location.search),{hasPermissionTo:T}=F(),_=re,y=b(""),c=b(""),f=b(""),w=b(""),x=b(""),h=b([null,null]),r=b([]);D(()=>{C(),d()});const a=O(()=>h.value[0]===null||h.value[1]===null?"":`${h.value[0]}~${h.value[1]}`),d=async()=>{if(!T("Partner.list"))return;const{data:u}=await U.get(`/api/partners/list?branchId=${y.value}`);r.value=u.data},$=u=>{w.value=u??"",R()},o=u=>{f.value=u,R()},C=()=>{y.value=p.get("branchId")??"",c.value=p.get("q")??"",f.value=p.get("visitNumber")??"",p.get("dateRange")&&(h.value=p.get("dateRange").split("~")),w.value=p.get("partnerId")??"",x.value=p.get("orderStatus")??""},K=()=>{const u=f.value;Q(),f.value=u,R()},R=()=>{let u=`branchId=${y.value}&visitNumber=${f.value}&q=${c.value}&partnerId=${w.value}&orderStatus=${x.value}&dateRange=${a.value}&page=1`;B("change",u)},Q=()=>{y.value="",c.value="",f.value="",h.value=[null,null],w.value="",x.value=""};return(u,i)=>(l(),g(V,null,[e("div",ie,[k(ne,{modelValue:y.value,"onUpdate:modelValue":i[0]||(i[0]=m=>y.value=m),onChange:i[1]||(i[1]=m=>{R(),u.fetchOptions()})},null,8,["modelValue"]),v(e("input",{"onUpdate:modelValue":i[2]||(i[2]=m=>f.value=m),onKeyup:z(K,["enter"]),type:"text",placeholder:"Registration number",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,ce),[[N,f.value]]),v(e("input",{"onUpdate:modelValue":i[3]||(i[3]=m=>c.value=m),onKeyup:z(R,["enter"]),type:"text",placeholder:"Name or phone number",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,ue),[[N,c.value]]),s(T)("Partner.list")?(l(),I(s(ae),{key:0,"model-value":w.value,options:r.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select partner",onChange:$,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):j("",!0),v(e("select",{"onUpdate:modelValue":i[4]||(i[4]=m=>x.value=m),onChange:R,class:"px-2 h-[38px] border border-gray-300 !rounded"},[pe,e("option",{value:s(t).Pending},"Pending",8,fe),e("option",{value:s(t).Pending},"Collected",8,he),e("option",{value:s(t).Accepted},"Accepted",8,me),e("option",{value:s(t).InProgress},"In Progress",8,ge),e("option",{value:s(t).Received},"Received",8,be),e("option",{value:s(t).Tested},"Tested",8,ye),e("option",{value:s(t).Authorized},"Authorized",8,ve),e("option",{value:s(t).Released},"Released",8,_e),e("option",{value:s(t).Rejected},"Rejected",8,we),e("option",{value:s(t).Canceled},"Canceled",8,xe)],544),[[Y,x.value]]),k(s(oe),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:s(_),placeholder:"Select date range",value:h.value,"onUpdate:value":i[5]||(i[5]=m=>h.value=m),onChange:R,class:"!w-56 mr-2","input-class":"w-full rounded border border-gray-300 p-1.5 focus:border-blue-500"},{"icon-calendar":P(()=>[]),_:1},8,["shortcuts","value"])]),k(se,{onScan:o})],64))}}),Re={class:"mb-5 flex items-center"},ke={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},Ce={class:"w-full"},Pe=e("thead",null,[e("tr",{class:"sticky top-0 z-10 text-left"},[e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"No."),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Gender"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Age"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Phone Number"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Lab"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Tests"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Status"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Total Charges"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Paid Amount"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Due Balance"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Date"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"})])],-1),Se={class:"transition even:bg-gray-100"},Be={class:"border border-gray-200 p-1"},Te={class:"whitespace-nowrap border border-gray-200 p-1"},Ie={class:"border border-gray-200 p-1"},Ve={class:"whitespace-nowrap border border-gray-200 p-1"},Ne={class:"border border-gray-200 p-1"},ze={class:"whitespace-nowrap border border-gray-200 p-1"},Ae={class:"border border-gray-200 p-1"},Me={class:"flex flex-wrap items-center gap-1 max-w-[18rem]"},Le={class:"border border-gray-200 p-1"},De={class:"border border-gray-200 p-1"},Ue={key:1},je={class:"border border-gray-200 p-1"},Fe={key:1},qe={key:1},Ke={class:"whitespace-nowrap border border-gray-200 p-1"},Qe={class:"border border-gray-200 p-1"},Oe={class:"border border-gray-200 p-1 text-center"},Ye={class:"flex justify-center"},He=["onClick"],Ee=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1),We=[Ee],ut=L({__name:"Results",setup(q){const B=b([]),p=b({}),{updateUrlQuery:T}=te(),{hasPermissionTo:_}=F(),y=setInterval(()=>c(location.search),15e3);D(()=>c(location.search)),H(()=>clearInterval(y));const c=async r=>{const a=await T(r),{data:d}=await U.get(`/api/results?${a}`);B.value=d.data,p.value=d.meta},f=r=>!(!_("Result.print")||r.orders.find(d=>![t.Authorized,t.Released,t.Canceled].includes(d.status)&&!d.test.bypass)||r.invoice.dueBalance>0&&!_("Result.printDue")),w=async r=>{if(r.invoice.dueBalance>0){const{isConfirmed:a}=await G.fire({html:`Patient has due balance of ${r.invoice.dueBalance?.toLocaleString()}`});if(!a)return}Z.emit(J.Show,{visit:r,orders:r.orders,releaseType:de.Print})},x=r=>{const a=r.orders.flatMap(d=>d.status);if(a.includes(t.Rejected))return"rejected";if(a.includes(t.Pending))return"pending";if(a.includes(t.Collected))return"collected";if(a.includes(t.Accepted))return"accepted";if(a.includes(t.InProgress))return"in-progress";if(a.includes(t.Received))return"received";if(a.includes(t.Tested))return"tested";if(a.includes(t.Authorized))return"authorized";if(a.includes(t.Released))return"released";if(a.includes(t.Canceled))return"canceled"},h=r=>{if(r===t.Pending)return"bg-gray-300 text-black";if(r===t.Collected)return"bg-yellow-400 text-black";if(r===t.Accepted)return"bg-orange-500 text-white";if(r===t.InProgress)return"bg-cyan-500 text-white";if(r===t.Received)return"bg-blue-500 text-white";if(r===t.Tested)return"bg-purple-500 text-white";if(r===t.Authorized)return"bg-emerald-500 text-white";if(r===t.Released)return"bg-gray-800 text-white";if(r===t.Rejected)return"bg-red-500 text-white";if(r===t.Canceled)return"bg-red-500 text-white"};return(r,a)=>{const d=E("router-link"),$=W("tip");return l(),g(V,null,[k(X,null,{header:P(()=>[S("Results")]),body:P(()=>[e("div",Re,[k($e,{onChange:c})]),e("section",ke,[e("table",Ce,[Pe,e("tbody",null,[(l(!0),g(V,null,A(B.value,o=>(l(),g("tr",Se,[e("td",Be,n(o.number),1),e("td",Te,n(o.patient.name),1),e("td",Ie,n(o.patient.gender.capitalize()),1),e("td",Ve,n(o.patient.age),1),e("td",Ne,n(o.patient.phoneNumber),1),e("td",ze,n(o.lab?.name??"local"),1),e("td",Ae,[e("div",Me,[(l(!0),g(V,null,A(o.orders,C=>v((l(),g("span",{class:M(["inline-block cursor-pointer rounded px-1 text-xs",h(C.status)])},[S(n(C.test.shortForm),1)],2)),[[$,C.status.capitalize()]])),256))])]),e("td",Le,n(x(o).capitalize()),1),e("td",De,[s(_)("Invoice.index")?v((l(),I(d,{key:0,to:`/invoices?number=${o.invoice.number}`,class:"text-blue-500 underline"},{default:P(()=>[S(n(o.invoice.total?.toLocaleString()),1)]),_:2},1032,["to"])),[[$,"View Invoice"]]):(l(),g("span",Ue,n(o.invoice.total?.toLocaleString()),1))]),e("td",je,[s(_)("Transaction.index")?v((l(),I(d,{key:0,to:`/transactions?invoiceNumber=${o.invoice.number}`,class:"text-blue-500 underline"},{default:P(()=>[S(n(o.invoice.paidAmount?.toLocaleString()),1)]),_:2},1032,["to"])),[[$,"View Transactions"]]):(l(),g("span",Fe,n(o.invoice.paidAmount?.toLocaleString()),1))]),e("td",{class:M(["border border-gray-200 p-1",{"font-semibold text-red-500":o.invoice.dueBalance>0}])},[s(_)("Invoice.pay")&&o.invoice.dueBalance>0?v((l(),I(d,{key:0,class:"underline",to:`/invoices/${o.invoice.id}/transactions/payment/create`},{default:P(()=>[S(n(o.invoice.dueBalance?.toLocaleString()),1)]),_:2},1032,["to"])),[[$,"Create Payment"]]):(l(),g("span",qe,n(o.invoice.dueBalance?.toLocaleString()),1))],2),e("td",Ke,n(o.date),1),e("td",Qe,n(o.branch.name),1),e("td",Oe,[e("div",Ye,[f(o)?v((l(),g("svg",{key:0,class:"h-6 w-6 cursor-pointer text-blue-500",onClick:C=>w(o),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},We,8,He)),[[$,"Print"]]):j("",!0)])])]))),256))])])])]),_:1}),k(ee,{data:p.value,onChange:a[0]||(a[0]=o=>c(`page=${o}`)),class:"mt-3"},null,8,["data"]),k(le,{onClose:c})],64)}}});export{ut as default};
