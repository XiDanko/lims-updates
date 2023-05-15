import{d as D,e as b,x as U,y as Y,Q as F,o as l,c as g,b as e,a as k,h as _,v as N,T as z,g as s,R as V,i as j,a0 as H,w as P,F as I,U as q,s as E,r as W,V as G,k as S,W as A,t as n,n as L,a3 as X,X as J,ac as Z}from"./main-6e47ceb6.js";import{M as ee}from"./Master-c2e1e299.js";import{_ as te}from"./Paginator.vue_vue_type_script_setup_true_lang-161ff6db.js";import{u as oe}from"./urlQueryManager-757a21bf.js";import{i as re}from"./index.es-2384e375.js";import{d as ae}from"./datepickerPresets-82697600.js";import{s as se}from"./multiselect-27b4da8b.js";import{_ as ne}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-d25da639.js";import{_ as le}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d104a2b1.js";import{O as t}from"./orderStatus-e3a3f9a7.js";import{P as M}from"./partnerType-65f9f978.js";import{_ as de,R as ie}from"./ResultsReleaseModal.vue_vue_type_script_setup_true_lang-51ee8690.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./websocketPrint-f72594c6.js";import"./printTemplateManager-6e5fdf5a.js";const ce={class:"flex flex-wrap gap-2 items-center ml-auto"},ue=["onKeyup"],pe=["onKeyup"],fe=e("option",{value:""},"Select status",-1),he=["value"],me=["value"],ge=["value"],be=["value"],ye=["value"],_e=["value"],ve=["value"],we=["value"],xe=["value"],$e=["value"],Re=D({__name:"ResultsFilter",emits:["change"],setup(K,{emit:T}){const p=new URLSearchParams(location.search),{hasPermissionTo:B}=q(),v=ae,y=b(""),c=b(""),f=b(""),w=b(""),x=b(""),h=b([null,null]),r=b([]);U(()=>{C(),d()});const a=Y(()=>h.value[0]===null||h.value[1]===null?"":`${h.value[0]}~${h.value[1]}`),d=async()=>{if(!B("Partner.list"))return;const{data:u}=await F.get(`/api/partners/list?branchId=${y.value}&type=${M.Lab},${M.Doctor}`);r.value=u.data},$=u=>{w.value=u??"",R()},o=u=>{f.value=u,R()},C=()=>{y.value=p.get("branchId")??"",c.value=p.get("q")??"",f.value=p.get("visitNumber")??"",p.get("dateRange")&&(h.value=p.get("dateRange").split("~")),w.value=p.get("partnerId")??"",x.value=p.get("orderStatus")??""},Q=()=>{const u=f.value;O(),f.value=u,R()},R=()=>{let u=`branchId=${y.value}&visitNumber=${f.value}&q=${c.value}&partnerId=${w.value}&orderStatus=${x.value}&dateRange=${a.value}&page=1`;T("change",u)},O=()=>{y.value="",c.value="",f.value="",h.value=[null,null],w.value="",x.value=""};return(u,i)=>(l(),g(I,null,[e("div",ce,[k(le,{modelValue:y.value,"onUpdate:modelValue":i[0]||(i[0]=m=>y.value=m),onChange:i[1]||(i[1]=m=>{R(),u.fetchOptions()})},null,8,["modelValue"]),_(e("input",{"onUpdate:modelValue":i[2]||(i[2]=m=>f.value=m),onKeyup:z(Q,["enter"]),type:"text",placeholder:"Registration number",class:"w-56 p-1.5 border border-gray-300 rounded focus:border-blue-500"},null,40,ue),[[N,f.value]]),_(e("input",{"onUpdate:modelValue":i[3]||(i[3]=m=>c.value=m),onKeyup:z(R,["enter"]),type:"text",placeholder:"Name or phone number",class:"w-56 p-1.5 border border-gray-300 rounded focus:border-blue-500"},null,40,pe),[[N,c.value]]),s(B)("Partner.list")?(l(),V(s(se),{key:0,"model-value":w.value,options:r.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select partner",onChange:$,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):j("",!0),_(e("select",{"onUpdate:modelValue":i[4]||(i[4]=m=>x.value=m),onChange:R,class:"px-2 h-[38px] border border-gray-300 !rounded"},[fe,e("option",{value:s(t).Pending},"Pending",8,he),e("option",{value:s(t).Pending},"Collected",8,me),e("option",{value:s(t).Accepted},"Accepted",8,ge),e("option",{value:s(t).InProgress},"In Progress",8,be),e("option",{value:s(t).Received},"Received",8,ye),e("option",{value:s(t).Tested},"Tested",8,_e),e("option",{value:s(t).Authorized},"Authorized",8,ve),e("option",{value:s(t).Released},"Released",8,we),e("option",{value:s(t).Rejected},"Rejected",8,xe),e("option",{value:s(t).Canceled},"Canceled",8,$e)],544),[[H,x.value]]),k(s(re),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:s(v),placeholder:"Select date range",value:h.value,"onUpdate:value":i[5]||(i[5]=m=>h.value=m),onChange:R,class:"!w-56 mr-2","input-class":"w-full p-1.5 border border-gray-300 rounded focus:border-blue-500"},{"icon-calendar":P(()=>[]),_:1},8,["shortcuts","value"])]),k(ne,{onScan:o})],64))}}),ke={class:"flex items-center mb-5"},Ce={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},Pe={class:"w-full"},Se=e("thead",null,[e("tr",{class:"sticky top-0 z-10 text-left"},[e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"No."),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Name"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Gender"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Age"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Phone Number"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Lab"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Tests"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Status"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Total Charges"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Paid Amount"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Due Balance"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"})])],-1),Te={class:"transition even:bg-gray-100"},Be={class:"p-1 border border-gray-200"},Ve={class:"p-1 border border-gray-200 whitespace-nowrap"},Ie={class:"p-1 border border-gray-200"},Ne={class:"p-1 border border-gray-200 whitespace-nowrap"},ze={class:"p-1 border border-gray-200"},Ae={class:"p-1 border border-gray-200 whitespace-nowrap"},Le={class:"p-1 border border-gray-200"},Me={class:"flex flex-wrap items-center max-w-[18rem] gap-1"},De={class:"p-1 border border-gray-200"},Ue={class:"p-1 border border-gray-200"},Fe={key:1},je={class:"p-1 border border-gray-200"},qe={key:1},Ke={key:1},Qe={class:"p-1 border border-gray-200 whitespace-nowrap"},Oe={class:"p-1 border border-gray-200"},Ye={class:"p-1 border border-gray-200 text-center"},He={class:"flex justify-center"},Ee=["onClick"],We=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1),Ge=[We],pt=D({__name:"Results",setup(K){const T=b([]),p=b({}),{updateUrlQuery:B}=oe(),{hasPermissionTo:v}=q(),y=setInterval(()=>c(location.search),15e3);U(()=>c(location.search)),E(()=>clearInterval(y));const c=async r=>{const a=await B(r),{data:d}=await F.get(`/api/results?${a}`);T.value=d.data,p.value=d.meta},f=r=>!(!v("Result.print")||r.orders.find(d=>![t.Authorized,t.Released,t.Canceled].includes(d.status)&&!d.test.bypass)||r.invoice.dueBalance>0&&!v("Result.printDue")),w=async r=>{if(r.invoice.dueBalance>0){const{isConfirmed:a}=await X.fire({html:`Patient has due balance of ${r.invoice.dueBalance.toLocaleString()}`});if(!a)return}J.emit(Z.Show,{visit:r,orders:r.orders,releaseType:ie.Print})},x=r=>{const a=r.orders.flatMap(d=>d.status);if(a.includes(t.Rejected))return"rejected";if(a.includes(t.Pending))return"pending";if(a.includes(t.Collected))return"collected";if(a.includes(t.Accepted))return"accepted";if(a.includes(t.InProgress))return"in-progress";if(a.includes(t.Received))return"received";if(a.includes(t.Tested))return"tested";if(a.includes(t.Authorized))return"authorized";if(a.includes(t.Released))return"released";if(a.includes(t.Canceled))return"canceled"},h=r=>{if(r===t.Pending)return"bg-gray-300 text-black";if(r===t.Collected)return"bg-yellow-400 text-black";if(r===t.Accepted)return"bg-orange-500 text-white";if(r===t.InProgress)return"bg-cyan-500 text-white";if(r===t.Received)return"bg-blue-500 text-white";if(r===t.Tested)return"bg-purple-500 text-white";if(r===t.Authorized)return"bg-emerald-500 text-white";if(r===t.Released)return"bg-gray-800 text-white";if(r===t.Rejected)return"bg-red-500 text-white";if(r===t.Canceled)return"bg-red-500 text-white"};return(r,a)=>{const d=W("router-link"),$=G("tip");return l(),g(I,null,[k(ee,null,{header:P(()=>[S("Results")]),body:P(()=>[e("div",ke,[k(Re,{onChange:c})]),e("section",Ce,[e("table",Pe,[Se,e("tbody",null,[(l(!0),g(I,null,A(T.value,o=>(l(),g("tr",Te,[e("td",Be,n(o.number),1),e("td",Ve,n(o.patient.name),1),e("td",Ie,n(o.patient.gender.capitalize()),1),e("td",Ne,n(o.patient.age),1),e("td",ze,n(o.patient.phoneNumber),1),e("td",Ae,n(o.lab?.name??"local"),1),e("td",Le,[e("div",Me,[(l(!0),g(I,null,A(o.orders,C=>_((l(),g("span",{class:L(["inline-block rounded px-1 text-xs cursor-pointer",h(C.status)])},[S(n(C.test.shortForm),1)],2)),[[$,C.status.capitalize()]])),256))])]),e("td",De,n(x(o).capitalize()),1),e("td",Ue,[s(v)("Invoice.index")?_((l(),V(d,{key:0,to:`/invoices?number=${o.invoice.number}`,class:"text-blue-500 underline"},{default:P(()=>[S(n(o.invoice.total.toLocaleString()),1)]),_:2},1032,["to"])),[[$,"View Invoice"]]):(l(),g("span",Fe,n(o.invoice.total.toLocaleString()),1))]),e("td",je,[s(v)("Transaction.index")?_((l(),V(d,{key:0,to:`/transactions?invoiceNumber=${o.invoice.number}`,class:"text-blue-500 underline"},{default:P(()=>[S(n(o.invoice.paidAmount.toLocaleString()),1)]),_:2},1032,["to"])),[[$,"View Transactions"]]):(l(),g("span",qe,n(o.invoice.paidAmount.toLocaleString()),1))]),e("td",{class:L(["p-1 border border-gray-200",{"font-semibold text-red-500":o.invoice.dueBalance>0}])},[s(v)("Transaction.create")&&o.invoice.dueBalance>0?_((l(),V(d,{key:0,class:"underline",to:`/invoices/${o.invoice.id}/transactions/payment/create`},{default:P(()=>[S(n(o.invoice.dueBalance.toLocaleString()),1)]),_:2},1032,["to"])),[[$,"Create Payment"]]):(l(),g("span",Ke,n(o.invoice.dueBalance.toLocaleString()),1))],2),e("td",Qe,n(o.date),1),e("td",Oe,n(o.branch.name),1),e("td",Ye,[e("div",He,[f(o)?_((l(),g("svg",{key:0,class:"w-6 h-6 text-blue-500 cursor-pointer",onClick:C=>w(o),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Ge,8,Ee)),[[$,"Print"]]):j("",!0)])])]))),256))])])])]),_:1}),k(te,{data:p.value,onChange:a[0]||(a[0]=o=>c(`page=${o}`)),class:"mt-3"},null,8,["data"]),k(de,{onClose:c})],64)}}});export{pt as default};