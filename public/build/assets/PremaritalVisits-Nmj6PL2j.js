import{d as K,e as f,x as Q,y as Z,o as n,c as v,a as M,b as t,h as S,v as z,a0 as A,t as a,g as e,V as q,F as L,a1 as X,w as D,ad as ee,p as o,af as V,a2 as H,ag as R,s as te,R as j,k as E,n as O,i as m,f as r,_ as se,a4 as ae,Q as F,$ as T,X as oe,r as ne,U as ie,ae as le,a3 as re,T as ce,Y as de}from"./main-BgbWFIXK.js";import{M as ue}from"./Master-Bb3753-s.js";import{_ as ve}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{u as he}from"./urlQueryManager-CZwFgJ7t.js";import{u as pe}from"./printTemplateManager-qiRkbBE7.js";import{i as me}from"./index.es-Bi00NAuK.js";import{d as _e}from"./datepickerPresets-DMjR3aNY.js";import{_ as be}from"./BranchFilter.vue_vue_type_script_setup_true_lang-Cg0zFa3A.js";import{A as fe}from"./ActivityLogSidebar-DZ3mPV78.js";import{u as we,P as u}from"./printService-BW6jBw-w.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./printTemplateType-BiK7zB0k.js";import"./multiselect-DeMhawmc.js";const ge={class:"relative flex-1 min-w-[11rem]"},ye={class:"label"},xe={class:"relative flex-1 min-w-[11rem]"},$e={class:"label"},Ce={class:"relative flex-1 min-w-[11rem]"},ke={class:"label"},Se={class:"relative flex-1 min-w-[11rem]"},Pe={class:"label"},De={class:"relative"},Me={value:""},Ie=["value"],Ve={class:"label"},Ne={class:"relative flex-1 min-w-[14rem]"},Be={class:"label"},We=K({__name:"PremaritalVisitsFilter",emits:["change"],setup(Y,{emit:N}){const B=N,w=new URLSearchParams(location.search),$=f(""),P=f(""),l=f(""),_=f(""),C=f(""),k=f(""),g=f([null,null]);Q(()=>W());const p=Z(()=>g.value[0]===null||g.value[1]===null?"":`${g.value[0]}~${g.value[1]}`),W=()=>{P.value=w.get("visitNumber")??"",$.value=w.get("branchId")??"",l.value=w.get("status")??"",_.value=w.get("husbandName")??"",C.value=w.get("wifeName")??"",k.value=w.get("phoneNumber")??"",w.get("dateRange")&&(g.value=w.get("dateRange").split("~"))},x=()=>{let b=`branchId=${$.value}&visitNumber=${P.value}&husbandName=${_.value}&wifeName=${C.value}&phoneNumber=${k.value}&status=${l.value}&dateRange=${p.value}&page=1`;B("change",b)};return(b,c)=>(n(),v("div",ee({class:"flex flex-wrap items-center justify-end gap-2 ms-auto"},b.$attrs),[M(be,{modelValue:$.value,"onUpdate:modelValue":c[0]||(c[0]=h=>$.value=h),onChange:x},null,8,["modelValue"]),t("div",ge,[S(t("input",{"onUpdate:modelValue":c[1]||(c[1]=h=>P.value=h),onKeyup:A(x,["enter"]),type:"text",class:"input-sm peer"},null,544),[[z,P.value]]),t("label",ye,a(e(o)("Registration Number")),1)]),t("div",xe,[S(t("input",{"onUpdate:modelValue":c[2]||(c[2]=h=>_.value=h),onKeyup:A(x,["enter"]),type:"text",class:"input-sm peer"},null,544),[[z,_.value]]),t("label",$e,a(e(o)("Husband Name")),1)]),t("div",Ce,[S(t("input",{"onUpdate:modelValue":c[3]||(c[3]=h=>C.value=h),onKeyup:A(x,["enter"]),type:"text",class:"input-sm peer"},null,544),[[z,C.value]]),t("label",ke,a(e(o)("Wife Name")),1)]),t("div",Se,[S(t("input",{"onUpdate:modelValue":c[4]||(c[4]=h=>k.value=h),onKeyup:A(x,["enter"]),type:"text",class:"input-sm peer"},null,544),[[z,k.value]]),t("label",Pe,a(e(o)("Phone Number")),1)]),t("div",De,[S(t("select",{"onUpdate:modelValue":c[5]||(c[5]=h=>l.value=h),onChange:x,class:"input-sm peer"},[t("option",Me,a(e(o)("All")),1),(n(!0),v(L,null,X(e(V),h=>(n(),v("option",{value:h},a(e(o)(h.startCase())),9,Ie))),256))],544),[[q,l.value]]),t("label",Ve,a(e(o)("Status")),1)]),t("div",Ne,[M(e(me),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:e(_e),value:g.value,"onUpdate:value":c[6]||(c[6]=h=>g.value=h),onChange:x,class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":D(()=>[]),_:1},8,["shortcuts","value"]),t("label",Be,a(e(o)("Date")),1)])],16))}}),Le={class:"grid grid-cols-1 gap-4"},Ue={class:"relative"},ze={value:""},Ae=["value"],Te=["value"],He=["value"],Re={key:0,class:"text-sm text-red-500"},je=["disabled"],Ee=K({__name:"PremaritalStatusModal",emits:["close"],setup(Y,{emit:N}){const B=N,w=f(!1),$=f(!1),P=f([]),l=f(""),_=f({});Q(()=>{H.on(R.Show,g=>{$.value=!0,P.value=g})}),te(()=>H.off(R.Show));const C=async()=>{w.value=!0;try{await F.patch(`/api/premarital/visits/${P.value}/status`,{status:l.value}),_.value={},T.fire(),k()}catch(g){_.value=g.response.data.errors??{}}w.value=!1},k=()=>{$.value=!1,l.value="",_.value={},B("close")};return(g,p)=>$.value?(n(),j(ae,{key:0},{header:D(()=>[E(a(e(o)("Change Visit Status")),1)]),body:D(()=>[t("form",{id:"form",onSubmit:r(C,["prevent","stop"])},[t("div",Le,[t("div",Ue,[S(t("select",{"onUpdate:modelValue":p[0]||(p[0]=W=>l.value=W),class:O(["input peer",{"border-red-500":_.value.hasOwnProperty("status")}])},[t("option",ze,a(e(o)("Select status")),1),t("option",{value:e(V).Registered},a(e(o)("Registered")),9,Ae),t("option",{value:e(V).Consulted},a(e(o)("Consulted")),9,Te),t("option",{value:e(V).Tested},a(e(o)("Tested")),9,He)],2),[[q,l.value]]),t("label",{class:O(["label",{"text-red-500":_.value.hasOwnProperty("status")}])},a(e(o)("Status")),3),_.value.hasOwnProperty("status")?(n(),v("p",Re,a(_.value.status[0]),1)):m("",!0)])])],32)]),footer:D(()=>[t("button",{class:"me-2 btn-blue",disabled:w.value,form:"form"},[M(se,{"is-loading":w.value},{default:D(()=>[E(a(e(o)("Save")),1)]),_:1},8,["is-loading"])],8,je),t("button",{onClick:k,class:"btn-gray"},a(e(o)("Cancel")),1)]),_:1})):m("",!0)}}),Fe={class:"mb-5 flex items-start gap-1"},Ke=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),Qe={class:"whitespace-nowrap font-semibold"},Ye={class:"w-full"},Oe={class:"sticky top-0 z-10 ltr:text-left rtl:text-right"},qe={class:"bg-gray-600 p-2 font-semibold text-white rounded-ss"},Xe={class:"bg-gray-600 p-2 font-semibold text-white"},Ge={class:"bg-gray-600 p-2 font-semibold text-white"},Je={class:"bg-gray-600 p-2 font-semibold text-white"},Ze={class:"bg-gray-600 p-2 text-center font-semibold text-white"},et={class:"bg-gray-600 p-2 text-center font-semibold text-white"},tt={class:"bg-gray-600 p-2 font-semibold text-white"},st={class:"bg-gray-600 p-2 font-semibold text-white"},at={key:1,class:"bg-gray-600 p-2 font-semibold text-white rounded-se"},ot={class:"transition even:bg-gray-100"},nt={class:"border border-gray-200 p-1"},it={class:"border border-gray-200 p-1"},lt={class:"border border-gray-200 p-1"},rt={class:"border border-gray-200 p-1"},ct={class:"border border-gray-200 p-1"},dt={class:"flex flex-wrap items-center justify-center gap-1"},ut=["disabled","onClick"],vt=["disabled","onClick"],ht=["disabled","onClick"],pt=["disabled","onClick"],mt={class:"border border-gray-200 p-1"},_t={class:"flex flex-wrap items-center justify-center gap-1"},bt=["disabled","onClick"],ft=["disabled","onClick"],wt=["disabled","onClick"],gt={class:"border border-gray-200 p-1"},yt={class:"border border-gray-200 p-1"},xt={key:1,class:"border border-gray-200 px-2 py-1 text-center"},$t={class:"flex justify-center gap-2"},Ct=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),kt=["onClick"],St=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"})],-1),Pt=[St],Dt=["onClick"],Mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5 cursor-pointer text-red-500"},[t("path",{d:"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z"})],-1),It=[Mt],Vt=["onClick"],Nt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Bt=[Nt],Yt=K({__name:"PremaritalVisits",setup(Y){const{hasDefaultDepWiseBarcodeTemplate:N,hasDefaultSampleWiseBarcodeTemplate:B,hasDefaultInvoiceTemplate:w,hasDefaultVisitBarcodeTemplate:$}=pe(),{updateUrlQuery:P}=he(),{hasPermissionTo:l,hasAnyPermission:_}=ce();oe();const C=we(),k=f([]),g=f({}),p=f([]),W=f(0);Q(()=>{W.value=document.getElementById("filter").offsetHeight,x(location.search)});const x=async d=>{const y=await P(d),{data:I}=await F.get(`/api/premarital/visits?${y}`);k.value=I.data,g.value=I.meta},b=async(d,y,I)=>{p.value[`${d.id}-${y}`]=!0,await C.sampleBarcodes(d.id,y,I,`${d.patient.name}-sample-barcode`),T.fire(),p.value[`${d.id}-${y}`]=!1},c=async(d,y)=>{p.value[d.id]=!0,await C.visitBarcode(d.id,y,`${d.patient.name}-visit-barcode`),T.fire(),p.value[d.id]=!1},h=async(d,y)=>{p.value[d.invoice.id]=!0,await C.invoice(d.invoice.id,y,`${d.patient.name}-invoice`),T.fire(),p.value[d.invoice.id]=!1},G=d=>l("PremaritalVisit.cancel")?![V.Authorized,V.Printed,V.Canceled].includes(d.status):!1,J=async d=>{const{isConfirmed:y}=await de.fire();y&&(await F.post(`/api/premarital/visits/${d.id}/cancel`),x(location.search))};return(d,y)=>{const I=ne("router-link"),U=ie("tip");return n(),v(L,null,[M(ue,null,{header:D(()=>[E(a(e(o)("Premarital Visits")),1)]),body:D(()=>[t("div",Fe,[e(l)("PremaritalVisit.create")?(n(),j(I,{key:0,to:"/premarital/visits/create",class:"inline-flex items-center gap-1 btn-blue"},{default:D(()=>[Ke,t("span",Qe,a(e(o)("Create New Visit")),1)]),_:1})):m("",!0),M(We,{id:"filter",onChange:x})]),t("section",{class:"overflow-y-auto pe-1",style:le(`height: calc(100vh - 13.3rem - ${W.value}px)`)},[t("table",Ye,[t("thead",null,[t("tr",Oe,[t("th",qe,a(e(o)("No.")),1),t("th",Xe,a(e(o)("Husband Name")),1),t("th",Ge,a(e(o)("Wife Name")),1),t("th",Je,a(e(o)("Status")),1),e(_)("Invoice.print","Sample.print","Visit.printBarcode")?(n(),v(L,{key:0},[t("th",Ze,a(e(o)("Husband Print")),1),t("th",et,a(e(o)("Wife Print")),1)],64)):m("",!0),t("th",tt,a(e(o)("Date")),1),t("th",st,a(e(o)("Branch")),1),e(_)("PremaritalVisit.update","PremaritalVisit.updateStatus","PremaritalVisit.cancel","ActivityLog.list")?(n(),v("th",at)):m("",!0)])]),t("tbody",null,[(n(!0),v(L,null,X(k.value,s=>(n(),v("tr",ot,[t("td",nt,a(s.number),1),t("td",it,a(s.husbandInformation.name),1),t("td",lt,a(s.wifeInformation.name),1),t("td",rt,a(e(o)(s.status.startCase())),1),e(_)("Invoice.print","Sample.print")?(n(),v(L,{key:0},[t("td",ct,[t("div",dt,[e(l)("Visit.printBarcode")&&e($)(s.branchId)?(n(),v("button",{key:0,class:"px-1 py-0 text-sm btn-blue hover:shadow-none",disabled:p.value[s.husbandVisitId],onClick:[r(i=>c(s.husbandVisit,e(u).Direct),["exact"]),r(i=>c(s.husbandVisit,e(u).Modal),["ctrl"]),r(i=>c(s.husbandVisit,e(u).Download),["shift"])]},a(e(o)("Visit barcode")),9,ut)):m("",!0),e(l)("Sample.print")&&e(N)(s.branchId)?(n(),v("button",{key:1,class:"px-1 py-0 text-sm btn-blue hover:shadow-none",disabled:p.value[`${s.husbandVisitId}-departmentWise`],onClick:[r(i=>b(s.husbandVisit,"departmentWise",e(u).Direct),["exact"]),r(i=>b(s.husbandVisit,"departmentWise",e(u).Modal),["ctrl"]),r(i=>b(s.husbandVisit,"departmentWise",e(u).Download),["shift"])]},a(e(o)("Dep. wise")),9,vt)):m("",!0),e(l)("Sample.print")&&e(B)(s.branchId)?(n(),v("button",{key:2,class:"px-1 py-0 text-sm btn-blue hover:shadow-none",disabled:p.value[`${s.husbandVisitId}-sampleWise`],onClick:[r(i=>b(s.husbandVisit,"sampleWise",e(u).Direct),["exact"]),r(i=>b(s.husbandVisit,"sampleWise",e(u).Modal),["ctrl"]),r(i=>b(s.husbandVisit,"sampleWise",e(u).Download),["shift"])]},a(e(o)("Sample wise")),9,ht)):m("",!0),e(l)("Invoice.print")&&e(w)(s.branchId)?(n(),v("button",{key:3,class:"px-1 py-0 text-sm btn-blue hover:shadow-none",disabled:p.value[s.husbandVisit.invoice.id],onClick:[r(i=>h(s.husbandVisit,e(u).Direct),["exact"]),r(i=>h(s.husbandVisit,e(u).Modal),["ctrl"]),r(i=>h(s.husbandVisit,e(u).Download),["shift"])]},a(e(o)("Invoice")),9,pt)):m("",!0)])]),t("td",mt,[t("div",_t,[e(l)("Visit.printBarcode")&&e($)(s.branchId)?(n(),v("button",{key:0,class:"px-1 py-0 text-sm btn-blue hover:shadow-none",disabled:p.value[s.husbandVisitId],onClick:[r(i=>c(s.wifeVisit,e(u).Direct),["exact"]),r(i=>c(s.wifeVisit,e(u).Modal),["ctrl"]),r(i=>c(s.wifeVisit,e(u).Download),["shift"])]},a(e(o)("Visit barcode")),9,bt)):m("",!0),e(l)("Sample.print")&&e(N)(s.branchId)?(n(),v("button",{key:1,class:"px-1 py-0 text-sm btn-blue hover:shadow-none",disabled:p.value[`${s.wifeVisitId}-departmentWise`],onClick:[r(i=>b(s.wifeVisit,"departmentWise",e(u).Direct),["exact"]),r(i=>b(s.wifeVisit,"departmentWise",e(u).Modal),["ctrl"]),r(i=>b(s.wifeVisit,"departmentWise",e(u).Download),["shift"])]},a(e(o)("Dep. wise")),9,ft)):m("",!0),e(l)("Sample.print")&&e(B)(s.branchId)?(n(),v("button",{key:2,class:"px-1 py-0 text-sm btn-blue hover:shadow-none",disabled:p.value[`${s.wifeVisitId}-sampleWise`],onClick:[r(i=>b(s.wifeVisit,"sampleWise",e(u).Direct),["exact"]),r(i=>b(s.wifeVisit,"sampleWise",e(u).Modal),["ctrl"]),r(i=>b(s.wifeVisit,"sampleWise",e(u).Download),["shift"])]},a(e(o)("Sample wise")),9,wt)):m("",!0)])])],64)):m("",!0),t("td",gt,a(s.date),1),t("td",yt,a(s.branch.name),1),e(_)("PremaritalVisit.update","PremaritalVisit.updateStatus","PremaritalVisit.cancel","ActivityLog.list")?(n(),v("td",xt,[t("div",$t,[e(l)("PremaritalVisit.update")?S((n(),j(I,{key:0,to:`/premarital/visits/${s.id}/edit`,class:"cursor-pointer text-orange-500"},{default:D(()=>[Ct]),_:2},1032,["to"])),[[U,e(o)("Edit")]]):m("",!0),e(l)("PremaritalVisit.updateStatus")?S((n(),v("button",{key:1,onClick:i=>e(H).emit(e(R).Show,s.id),class:"cursor-pointer text-blue-500"},Pt,8,kt)),[[U,e(o)("Change Status")]]):m("",!0),G(s)?S((n(),v("button",{key:2,onClick:i=>J(s),class:"cursor-pointer text-gray-600"},It,8,Dt)),[[U,e(o)("Cancel")]]):m("",!0),e(l)("ActivityLog.list")?S((n(),v("button",{key:3,onClick:i=>e(H).emit(e(re).Show,s.id),class:"cursor-pointer text-gray-600"},Bt,8,Vt)),[[U,e(o)("View Activities")]]):m("",!0)])])):m("",!0)]))),256))])])],4)]),_:1}),M(ve,{data:g.value,onChange:y[0]||(y[0]=s=>x(`page=${s}`)),class:"mt-3"},null,8,["data"]),M(Ee,{onClose:x}),M(fe)],64)}}});export{Yt as default};
