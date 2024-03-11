import{d as U,e as g,x as F,y as W,Q as q,o as r,c as f,b as t,a as y,h as R,v as M,a0 as A,g as v,i as j,w as T,F as N,T as Q,s as G,r as J,U as X,k as P,a1 as Y,t as l,n as O,R as V,Y as Z,a2 as ee,a5 as te,q as I}from"./main-DmoZ1fz4.js";import{M as se}from"./Master-ql31p3jM.js";import{_ as ae}from"./Paginator.vue_vue_type_script_setup_true_lang-B5QeFegy.js";import{u as oe}from"./urlQueryManager-DRfC3SWK.js";import{i as ne}from"./index.es-CV7LqIVy.js";import{d as le}from"./datepickerPresets-DxjH1h4T.js";import{s as L}from"./multiselect-DAhRltj6.js";import{_ as re}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-Bp73aGqL.js";import{_ as ie}from"./BranchFilter.vue_vue_type_script_setup_true_lang-DPeXwSCL.js";import{O as a}from"./orderStatus-Cdywi7Or.js";import{b as ue}from"./toggle-DyRQkDOQ.js";import{_ as de,R as ce}from"./ResultsReleaseModal.vue_vue_type_script_setup_true_lang-J-WMZ1g6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./printService-Dt_6MRJ2.js";import"./printTemplateType-BiK7zB0k.js";const pe={class:"flex flex-wrap items-center gap-2 ms-auto"},fe={class:"relative flex-1 min-w-[10rem]"},me=t("label",{class:"label"},"Registration Number",-1),he={class:"relative flex-1 min-w-[11rem]"},be=t("label",{class:"label"},"Name / Phone Number",-1),ge={key:0,class:"relative flex-1 min-w-[10rem]"},ve=t("label",{class:"label"},"Partner",-1),ye={class:"relative flex-1 min-w-[15rem]"},_e=t("label",{class:"label"},"Status",-1),xe={class:"relative flex-1 min-w-[5rem]"},we=t("span",{class:"label"},"Overdue",-1),$e={class:"relative flex-1 min-w-[14rem]"},Re=t("label",{class:"label"},"Date",-1),ke=U({__name:"ResultsFilter",emits:["change"],setup(H,{emit:S}){const z=S,d=new URLSearchParams(location.search),{hasPermissionTo:_}=Q(),x=g(""),c=g(""),m=g(""),$=g(""),k=g([]),D=g(!1),p=g([null,null]),B=g([]);F(()=>{C(),s()});const e=W(()=>p.value[0]===null||p.value[1]===null?"":`${p.value[0]}~${p.value[1]}`),s=async()=>{if(!_("Partner.list"))return;const{data:i}=await q.get(`/api/partners/list?branchId=${x.value}`);B.value=i.data},n=i=>{$.value=i??"",w()},h=i=>{k.value=i,w()},o=i=>{m.value=i,w()},C=()=>{x.value=d.get("branchId")??"",c.value=d.get("q")??"",m.value=d.get("visitNumber")??"",d.get("dateRange")&&(p.value=d.get("dateRange").split("~")),$.value=d.get("partnerId")??"",d.get("statuses")&&(k.value=d.get("statuses").split(",")),D.value=!!d.get("onlyOverdueOrders")},K=()=>{const i=m.value;E(),m.value=i,w()},w=()=>{let i=`branchId=${x.value}&visitNumber=${m.value}&q=${c.value}&partnerId=${$.value}&orderStatuses=${k.value}&onlyOverdueOrders=${D.value}&dateRange=${e.value}&page=1`;z("change",i)},E=()=>{x.value="",c.value="",m.value="",p.value=[null,null],$.value="",status.value=""};return(i,u)=>(r(),f(N,null,[t("div",pe,[y(ie,{modelValue:x.value,"onUpdate:modelValue":u[0]||(u[0]=b=>x.value=b),onChange:u[1]||(u[1]=b=>{w(),i.fetchOptions()})},null,8,["modelValue"]),t("div",fe,[R(t("input",{"onUpdate:modelValue":u[2]||(u[2]=b=>m.value=b),onKeyup:A(K,["enter"]),type:"text",class:"input-sm peer"},null,544),[[M,m.value]]),me]),t("div",he,[R(t("input",{"onUpdate:modelValue":u[3]||(u[3]=b=>c.value=b),onKeyup:A(w,["enter"]),type:"text",class:"input-sm peer"},null,544),[[M,c.value]]),be]),v(_)("Partner.list")?(r(),f("div",ge,[y(v(L),{"model-value":$.value,options:B.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,onChange:n,class:"input-sm peer"},null,8,["model-value","options"]),ve])):j("",!0),t("div",ye,[y(v(L),{"model-value":k.value,mode:"tags",options:v(a),"value-prop":"value","track-by":"value",label:"name",searchable:!0,onChange:h,class:"px-0 input-sm peer"},null,8,["model-value","options"]),_e]),t("div",xe,[y(v(ue),{modelValue:D.value,"onUpdate:modelValue":u[4]||(u[4]=b=>D.value=b),onChange:w,class:"input-sm peer pt-1.5"},null,8,["modelValue"]),we]),t("div",$e,[y(v(ne),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:v(le),value:p.value,"onUpdate:value":u[5]||(u[5]=b=>p.value=b),onChange:w,class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":T(()=>[]),_:1},8,["shortcuts","value"]),Re])]),y(re,{onScan:o})],64))}}),De={class:"mb-5 flex items-start gap-1"},Ce={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},Te={class:"w-full"},Pe=t("thead",null,[t("tr",{class:"sticky top-0 z-10 text-left"},[t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"No."),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Gender"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Age"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Phone Number"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Lab"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Tests"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Status"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Total Charges"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Paid Amount"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Due Balance"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Date"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch"),t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"})])],-1),Se={class:"transition even:bg-gray-100"},ze={class:"border border-gray-200 p-1"},Be={class:"whitespace-nowrap border border-gray-200 p-1"},Ne={class:"border border-gray-200 p-1"},Ve={class:"whitespace-nowrap border border-gray-200 p-1"},Ie={class:"border border-gray-200 p-1"},Me={class:"whitespace-nowrap border border-gray-200 p-1"},Ae={class:"border border-gray-200 p-1"},Ye={class:"flex flex-wrap items-center gap-1 max-w-[18rem]"},Oe={class:"border border-gray-200 p-1"},Le={class:"border border-gray-200 p-1"},Ue={key:1},Fe={class:"border border-gray-200 p-1"},qe={key:1},je={key:1},Qe={class:"whitespace-nowrap border border-gray-200 p-1"},He={class:"border border-gray-200 p-1"},Ke={class:"border border-gray-200 p-1 text-center"},Ee={class:"flex justify-center"},We=["onClick"],Ge=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1),Je=[Ge],ft=U({__name:"Results",setup(H){const S=g([]),z=g({}),{updateUrlQuery:d}=oe(),{hasPermissionTo:_}=Q(),x=setInterval(()=>c(location.search),15e3);F(()=>c(location.search)),G(()=>clearInterval(x));const c=async e=>{const s=await d(e),{data:n}=await q.get(`/api/results?${s}`);S.value=n.data,z.value=n.meta},m=e=>!(!_("Result.print")||e.orders.find(n=>![a.Authorized,a.Released,a.Canceled].includes(n.status)&&!n.test.bypass)||e.invoice.dueBalance>0&&!_("Result.printDue")),$=async e=>{if(e.invoice.dueBalance>0){const{isConfirmed:s}=await Z.fire({html:`Patient has due balance of ${e.invoice.dueBalance?.toLocaleString()}`});if(!s)return}ee.emit(te.Show,{visit:e,orders:e.orders,releaseType:ce.Print})},k=e=>{const s=e.orders.flatMap(n=>n.status);if(s.includes(a.Rejected))return"rejected";if(s.includes(a.Pending))return"pending";if(s.includes(a.Collected))return"collected";if(s.includes(a.Accepted))return"accepted";if(s.includes(a.InProgress))return"in-progress";if(s.includes(a.Received))return"received";if(s.includes(a.Tested))return"tested";if(s.includes(a.Authorized))return"authorized";if(s.includes(a.Released))return"released";if(s.includes(a.Canceled))return"canceled"},D=e=>{let s="";return e.status===a.Pending?s="bg-gray-300 text-black":e.status===a.Collected?s="bg-yellow-400 text-black":e.status===a.Accepted?s="bg-orange-500 text-white":e.status===a.InProgress?s="bg-cyan-500 text-white":e.status===a.Received?s="bg-blue-500 text-white":e.status===a.Tested?s="bg-purple-500 text-white":e.status===a.Authorized?s="bg-emerald-500 text-white":e.status===a.Released?s="bg-gray-800 text-white":(e.status===a.Rejected||e.status===a.Canceled)&&(s="bg-red-500 text-white"),p(e)>0&&(s+=" border-2 border-red-600"),s},p=e=>{if(!e.overdueDate)return 0;const s=I(e.overdueDate,"YYYY-MM-DD hh:mm a");let n=I();return[a.Authorized,a.Released].includes(e.status)&&e.authorizationDate&&(n=I(e.authorizationDate,"YYYY-MM-DD hh:mm a")),n.diff(s,"minutes")},B=e=>{let s=null;e.status===a.Pending?s=e.date:e.status===a.Collected?s=e.collectionDate:e.status===a.Accepted?s=e.accessionDate:e.status===a.InProgress?s=e.inProgressDate:e.status===a.Received?s=e.receiveDate:e.status===a.Tested?s=e.testingDate:e.status===a.Authorized?s=e.authorizationDate:e.status===a.Released?s=e.releaseDate:s=null;const n=p(e);let h=n+" minutes";n/60>1&&(h=(n/60).toFixed(1)+" hours");let o=`<p>${e.status.capitalize()}`;return s&&(o+=` (${s}) </p>`),e.test.turnaroundTime&&(o+=`<p>TAT: ${e.test.turnaroundTime}</p>`),n>0&&(o+=`<p>Overdue: ${h}</p>`),o};return(e,s)=>{const n=J("router-link"),h=X("tip");return r(),f(N,null,[y(se,null,{header:T(()=>[P("Results")]),body:T(()=>[t("div",De,[y(ke,{onChange:c})]),t("section",Ce,[t("table",Te,[Pe,t("tbody",null,[(r(!0),f(N,null,Y(S.value,o=>(r(),f("tr",Se,[t("td",ze,l(o.number),1),t("td",Be,l(o.patient.name),1),t("td",Ne,l(o.patient.gender.capitalize()),1),t("td",Ve,l(o.patient.age),1),t("td",Ie,l(o.patient.phoneNumber),1),t("td",Me,l(o.lab?.name??"local"),1),t("td",Ae,[t("div",Ye,[(r(!0),f(N,null,Y(o.orders,C=>R((r(),f("span",{class:O(["inline-block cursor-pointer rounded px-1 text-xs",D(C)])},[P(l(C.test.shortForm),1)],2)),[[h,B(C)]])),256))])]),t("td",Oe,l(k(o).capitalize()),1),t("td",Le,[v(_)("Invoice.index")?R((r(),V(n,{key:0,to:`/invoices?number=${o.invoice.number}`,class:"text-blue-500 underline"},{default:T(()=>[P(l(o.invoice.total?.toLocaleString()),1)]),_:2},1032,["to"])),[[h,"View Invoice"]]):(r(),f("span",Ue,l(o.invoice.total?.toLocaleString()),1))]),t("td",Fe,[v(_)("Transaction.index")?R((r(),V(n,{key:0,to:`/transactions?invoiceNumber=${o.invoice.number}`,class:"text-blue-500 underline"},{default:T(()=>[P(l(o.invoice.paidAmount?.toLocaleString()),1)]),_:2},1032,["to"])),[[h,"View Transactions"]]):(r(),f("span",qe,l(o.invoice.paidAmount?.toLocaleString()),1))]),t("td",{class:O(["border border-gray-200 p-1",{"font-semibold text-red-500":o.invoice.dueBalance>0}])},[v(_)("Invoice.pay")&&o.invoice.dueBalance>0?R((r(),V(n,{key:0,class:"underline",to:`/invoices/${o.invoice.id}/transactions/payment/create`},{default:T(()=>[P(l(o.invoice.dueBalance?.toLocaleString()),1)]),_:2},1032,["to"])),[[h,"Create Payment"]]):(r(),f("span",je,l(o.invoice.dueBalance?.toLocaleString()),1))],2),t("td",Qe,l(o.date),1),t("td",He,l(o.branch.name),1),t("td",Ke,[t("div",Ee,[m(o)?R((r(),f("svg",{key:0,class:"h-6 w-6 cursor-pointer text-blue-500",onClick:C=>$(o),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Je,8,We)),[[h,"Print"]]):j("",!0)])])]))),256))])])])]),_:1}),y(ae,{data:z.value,onChange:s[0]||(s[0]=o=>c(`page=${o}`)),class:"mt-3"},null,8,["data"]),y(de,{onClose:c})],64)}}});export{ft as default};