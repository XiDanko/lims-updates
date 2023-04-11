import{d as F,e as f,x as j,y as W,A as z,o as l,c as m,b as e,a as k,h as _,v as L,z as N,g as s,C as I,i as A,J as X,w as P,F as T,H as q,s as Z,r as ee,B as te,k as B,D as V,t as n,n as M,M as oe,E as re,Y as ae}from"./main-c1f62c61.js";import{M as se}from"./Master-77a73046.js";import{_ as ne}from"./Paginator.vue_vue_type_script_setup_true_lang-ba67665d.js";import{u as le}from"./urlQueryManager-3fafa3c6.js";import{i as de}from"./index.es-2fd2791b.js";import{d as ce}from"./datepickerPresets-7a436e47.js";import{s as U}from"./multiselect-ffe70d49.js";import{_ as ie}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-03633394.js";import{_ as ue}from"./BranchFilter.vue_vue_type_script_setup_true_lang-16fdce62.js";import{O as t}from"./orderStatus-e3a3f9a7.js";import{_ as pe,R as fe}from"./ResultsReleaseModal.vue_vue_type_script_setup_true_lang-24898842.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./websocketPrint-85d5f8b4.js";import"./printTemplateManager-4195074d.js";const he={class:"flex flex-wrap gap-2 items-center ml-auto"},be=["onKeyup"],me=["onKeyup"],ge=e("option",{value:""},"Select status",-1),ve=["value"],ye=["value"],_e=["value"],we=["value"],xe=["value"],$e=["value"],Re=["value"],ke=["value"],Ce=["value"],Se=["value"],Pe=F({__name:"ResultsFilter",emits:["change"],setup(K,{emit:D}){const u=new URLSearchParams(location.search),{hasPermissionTo:C}=q(),w=ce,g=f(""),p=f(""),h=f(""),x=f(""),$=f(""),R=f(""),o=f([null,null]),a=f([]),d=f([]);j(()=>{E(),v()});const v=()=>{Y(),S()},r=W(()=>o.value[0]===null||o.value[1]===null?"":`${o.value[0]}~${o.value[1]}`),S=async()=>{if(!C("ReferenceDoctor.list"))return;const{data:c}=await z.get(`/api/reference-doctors/list?branchId=${g.value}`);a.value=c.data},Y=async()=>{if(!C("Lab.list"))return;const{data:c}=await z.get(`/api/labs/list?branchId=${g.value}`);d.value=c.data},H=c=>{x.value=c??"",y()},O=c=>{$.value=c??"",y()},Q=c=>{h.value=c,y()},E=()=>{g.value=u.get("branchId")??"",p.value=u.get("q")??"",h.value=u.get("visitNumber")??"",u.get("dateRange")&&(o.value=u.get("dateRange").split("~")),x.value=u.get("labId")??"",$.value=u.get("referenceDoctorId")??"",R.value=u.get("orderStatus")??""},G=()=>{const c=h.value;J(),h.value=c,y()},y=()=>{let c=`branchId=${g.value}&visitNumber=${h.value}&q=${p.value}&referenceDoctorId=${$.value}&labId=${x.value}&orderStatus=${R.value}&dateRange=${r.value}&page=1`;D("change",c)},J=()=>{g.value="",p.value="",h.value="",o.value=[null,null],x.value="",$.value="",R.value=""};return(c,i)=>(l(),m(T,null,[e("div",he,[k(ue,{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=b=>g.value=b),onChange:i[1]||(i[1]=b=>{y(),v()})},null,8,["modelValue"]),_(e("input",{"onUpdate:modelValue":i[2]||(i[2]=b=>h.value=b),onKeyup:N(G,["enter"]),type:"text",placeholder:"Registration number",class:"w-56 p-1.5 border border-gray-300 rounded focus:border-blue-500"},null,40,be),[[L,h.value]]),_(e("input",{"onUpdate:modelValue":i[3]||(i[3]=b=>p.value=b),onKeyup:N(y,["enter"]),type:"text",placeholder:"Name or phone number",class:"w-56 p-1.5 border border-gray-300 rounded focus:border-blue-500"},null,40,me),[[L,p.value]]),s(C)("ReferenceDoctor.list")?(l(),I(s(U),{key:0,"model-value":$.value,options:a.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select reference doctor",onChange:O,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):A("",!0),s(C)("Lab.list")?(l(),I(s(U),{key:1,"model-value":x.value,options:d.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select lab",onChange:H,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):A("",!0),_(e("select",{"onUpdate:modelValue":i[4]||(i[4]=b=>R.value=b),onChange:y,class:"px-2 h-[38px] border border-gray-300 !rounded"},[ge,e("option",{value:s(t).Pending},"Pending",8,ve),e("option",{value:s(t).Pending},"Collected",8,ye),e("option",{value:s(t).Accepted},"Accepted",8,_e),e("option",{value:s(t).InProgress},"In Progress",8,we),e("option",{value:s(t).Received},"Received",8,xe),e("option",{value:s(t).Tested},"Tested",8,$e),e("option",{value:s(t).Authorized},"Authorized",8,Re),e("option",{value:s(t).Released},"Released",8,ke),e("option",{value:s(t).Rejected},"Rejected",8,Ce),e("option",{value:s(t).Canceled},"Canceled",8,Se)],544),[[X,R.value]]),k(s(de),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:s(w),placeholder:"Select date range",value:o.value,"onUpdate:value":i[5]||(i[5]=b=>o.value=b),onChange:y,class:"!w-56 mr-2","input-class":"w-full p-1.5 border border-gray-300 rounded focus:border-blue-500"},{"icon-calendar":P(()=>[]),_:1},8,["shortcuts","value"])]),k(ie,{onScan:Q})],64))}}),Be={class:"flex items-center mb-5"},Ie={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},De={class:"w-full"},Te=e("thead",null,[e("tr",{class:"sticky top-0 z-10 text-left"},[e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"No."),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Name"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Gender"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Age"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Phone Number"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Lab"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Tests"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Status"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Total Charges"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Paid Amount"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Due Balance"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"})])],-1),ze={class:"transition even:bg-gray-100"},Ae={class:"p-1 border border-gray-200"},Le={class:"p-1 border border-gray-200 whitespace-nowrap"},Ne={class:"p-1 border border-gray-200"},Ve={class:"p-1 border border-gray-200 whitespace-nowrap"},Me={class:"p-1 border border-gray-200"},Ue={class:"p-1 border border-gray-200 whitespace-nowrap"},Fe={class:"p-1 border border-gray-200"},je={class:"flex flex-wrap items-center max-w-[18rem] gap-1"},qe={class:"p-1 border border-gray-200"},Ke={class:"p-1 border border-gray-200"},Ye={key:1},He={class:"p-1 border border-gray-200"},Oe={key:1},Qe={key:1},Ee={class:"p-1 border border-gray-200 whitespace-nowrap"},Ge={class:"p-1 border border-gray-200"},Je={class:"p-1 border border-gray-200 text-center"},We={class:"flex justify-center"},Xe=["onClick"],Ze=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1),et=[Ze],bt=F({__name:"Results",setup(K){const D=f([]),u=f({}),{updateUrlQuery:C}=le(),{hasPermissionTo:w}=q(),g=setInterval(()=>p(location.search),15e3);j(()=>p(location.search)),Z(()=>clearInterval(g));const p=async o=>{const a=await C(o),{data:d}=await z.get(`/api/results?${a}`);D.value=d.data,u.value=d.meta},h=o=>!(!w("Result.print")||o.orders.find(d=>![t.Authorized,t.Released,t.Canceled].includes(d.status)&&!d.test.bypass)||o.invoice.dueBalance>0&&!w("Result.printDue")),x=async o=>{if(o.invoice.dueBalance>0){const{isConfirmed:a}=await oe.fire({html:`Patient has due balance of ${o.invoice.dueBalance.toLocaleString()}`});if(!a)return}re.emit(ae.Show,{visit:o,orders:o.orders,releaseType:fe.Print})},$=o=>{const a=o.orders.flatMap(d=>d.status);if(a.includes(t.Rejected))return"rejected";if(a.includes(t.Pending))return"pending";if(a.includes(t.Collected))return"collected";if(a.includes(t.Accepted))return"accepted";if(a.includes(t.InProgress))return"in-progress";if(a.includes(t.Received))return"received";if(a.includes(t.Tested))return"tested";if(a.includes(t.Authorized))return"authorized";if(a.includes(t.Released))return"released";if(a.includes(t.Canceled))return"canceled"},R=o=>{if(o===t.Pending)return"bg-gray-300 text-black";if(o===t.Collected)return"bg-yellow-400 text-black";if(o===t.Accepted)return"bg-orange-500 text-white";if(o===t.InProgress)return"bg-cyan-500 text-white";if(o===t.Received)return"bg-blue-500 text-white";if(o===t.Tested)return"bg-purple-500 text-white";if(o===t.Authorized)return"bg-emerald-500 text-white";if(o===t.Released)return"bg-gray-800 text-white";if(o===t.Rejected)return"bg-red-500 text-white";if(o===t.Canceled)return"bg-red-500 text-white"};return(o,a)=>{const d=ee("router-link"),v=te("tip");return l(),m(T,null,[k(se,null,{header:P(()=>[B("Results")]),body:P(()=>[e("div",Be,[k(Pe,{onChange:p})]),e("section",Ie,[e("table",De,[Te,e("tbody",null,[(l(!0),m(T,null,V(D.value,r=>(l(),m("tr",ze,[e("td",Ae,n(r.number),1),e("td",Le,n(r.patient.name),1),e("td",Ne,n(r.patient.gender.capitalize()),1),e("td",Ve,n(r.patient.age),1),e("td",Me,n(r.patient.phoneNumber),1),e("td",Ue,n(r.lab?.name??"local"),1),e("td",Fe,[e("div",je,[(l(!0),m(T,null,V(r.orders,S=>_((l(),m("span",{class:M(["inline-block rounded px-1 text-xs cursor-pointer",R(S.status)])},[B(n(S.test.shortForm),1)],2)),[[v,S.status.capitalize()]])),256))])]),e("td",qe,n($(r).capitalize()),1),e("td",Ke,[s(w)("Invoice.index")?_((l(),I(d,{key:0,to:`/invoices?number=${r.invoice.number}`,class:"text-blue-500 underline"},{default:P(()=>[B(n(r.invoice.total.toLocaleString()),1)]),_:2},1032,["to"])),[[v,"View Invoice"]]):(l(),m("span",Ye,n(r.invoice.total.toLocaleString()),1))]),e("td",He,[s(w)("Transaction.index")?_((l(),I(d,{key:0,to:`/transactions?invoiceNumber=${r.invoice.number}`,class:"text-blue-500 underline"},{default:P(()=>[B(n(r.invoice.paidAmount.toLocaleString()),1)]),_:2},1032,["to"])),[[v,"View Transactions"]]):(l(),m("span",Oe,n(r.invoice.paidAmount.toLocaleString()),1))]),e("td",{class:M(["p-1 border border-gray-200",{"font-semibold text-red-500":r.invoice.dueBalance>0}])},[s(w)("Transaction.create")&&r.invoice.dueBalance>0?_((l(),I(d,{key:0,class:"underline",to:`/invoices/${r.invoice.id}/transactions/payment/create`},{default:P(()=>[B(n(r.invoice.dueBalance.toLocaleString()),1)]),_:2},1032,["to"])),[[v,"Create Payment"]]):(l(),m("span",Qe,n(r.invoice.dueBalance.toLocaleString()),1))],2),e("td",Ee,n(r.date),1),e("td",Ge,n(r.branch.name),1),e("td",Je,[e("div",We,[h(r)?_((l(),m("svg",{key:0,class:"w-6 h-6 text-blue-500 cursor-pointer",onClick:S=>x(r),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},et,8,Xe)),[[v,"Print"]]):A("",!0)])])]))),256))])])])]),_:1}),k(ne,{data:u.value,onChange:a[0]||(a[0]=r=>p(`page=${r}`)),class:"mt-3"},null,8,["data"]),k(pe,{onClose:p})],64)}}});export{bt as default};