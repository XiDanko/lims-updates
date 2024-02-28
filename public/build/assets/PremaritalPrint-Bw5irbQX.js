import{d as Y,e as c,x as j,y as D,o as f,c as y,a as _,b as e,h as k,v as S,a0 as M,t as s,g as t,V as q,w as C,p as a,af as R,Q as A,r as E,k as z,F as V,_ as K,i as B,a1 as O,ae as G,l as J,Y as L,$ as Q,n as T,f as X,T as Z}from"./main-BgbWFIXK.js";import{M as ee}from"./Master-Bb3753-s.js";import{_ as te}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{u as se}from"./urlQueryManager-CZwFgJ7t.js";import{i as ae}from"./index.es-Bi00NAuK.js";import{d as oe}from"./datepickerPresets-DMjR3aNY.js";import{_ as le}from"./BranchFilter.vue_vue_type_script_setup_true_lang-Cg0zFa3A.js";import{u as ne}from"./bulkSelection-Cwo4h9hd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DeMhawmc.js";const re={class:"flex flex-wrap items-center justify-end gap-2"},ie={class:"relative flex-1 min-w-[11rem]"},ue={class:"label"},de={class:"relative flex-1 min-w-[11rem]"},ce={class:"label"},me={class:"relative flex-1 min-w-[11rem]"},pe={class:"label"},he={class:"relative flex-1 min-w-[11rem]"},ve={class:"label"},be={class:"relative"},_e={value:""},ge=["value"],fe=["value"],ye={class:"label"},we={class:"relative flex-1 min-w-[14rem]"},xe={class:"label"},$e=Y({__name:"PremaritalPrintFilter",emits:["change"],setup(H,{emit:U}){const $=U,p=new URLSearchParams(location.search),m=c(""),g=c(""),w=c(""),u=c(""),h=c(""),v=c(""),d=c([null,null]);j(()=>x());const I=D(()=>d.value[0]===null||d.value[1]===null?"":`${d.value[0]}~${d.value[1]}`),x=()=>{m.value=p.get("branchId")??"",g.value=p.get("visitNumber")??"",w.value=p.get("status")??"",u.value=p.get("husbandName")??"",h.value=p.get("wifeName")??"",v.value=p.get("phoneNumber")??"",p.get("dateRange")&&(d.value=p.get("dateRange").split("~"))},b=()=>{let N=`branchId=${m.value}&visitNumber=${g.value}&husbandName=${u.value}&wifeName=${h.value}&phoneNumber=${v.value}&status=${w.value}&dateRange=${I.value}&page=1`;$("change",N)};return(N,l)=>(f(),y("div",re,[_(le,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=r=>m.value=r),onChange:b},null,8,["modelValue"]),e("div",ie,[k(e("input",{"onUpdate:modelValue":l[1]||(l[1]=r=>g.value=r),onKeyup:M(b,["enter"]),type:"text",class:"input-sm peer"},null,544),[[S,g.value]]),e("label",ue,s(t(a)("Registration Number")),1)]),e("div",de,[k(e("input",{"onUpdate:modelValue":l[2]||(l[2]=r=>u.value=r),onKeyup:M(b,["enter"]),type:"text",class:"input-sm peer"},null,544),[[S,u.value]]),e("label",ce,s(t(a)("Husband Name")),1)]),e("div",me,[k(e("input",{"onUpdate:modelValue":l[3]||(l[3]=r=>h.value=r),onKeyup:M(b,["enter"]),type:"text",class:"input-sm peer"},null,544),[[S,h.value]]),e("label",pe,s(t(a)("Wife Name")),1)]),e("div",he,[k(e("input",{"onUpdate:modelValue":l[4]||(l[4]=r=>v.value=r),onKeyup:M(b,["enter"]),type:"text",class:"input-sm peer"},null,544),[[S,v.value]]),e("label",ve,s(t(a)("Phone Number")),1)]),e("div",be,[k(e("select",{"onUpdate:modelValue":l[5]||(l[5]=r=>w.value=r),onChange:b,class:"input-sm peer"},[e("option",_e,s(t(a)("All")),1),e("option",{value:t(R).Authorized},s(t(a)("Authorized")),9,ge),e("option",{value:t(R).Printed},s(t(a)("Printed")),9,fe)],544),[[q,w.value]]),e("label",ye,s(t(a)("Status")),1)]),e("div",we,[_(t(ae),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:t(oe),value:d.value,"onUpdate:value":l[6]||(l[6]=r=>d.value=r),onChange:b,class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":C(()=>[]),_:1},8,["shortcuts","value"]),e("label",xe,s(t(a)("Date")),1)])]))}}),ke={class:"mb-5 flex flex-wrap items-start gap-2"},Ce=["disabled"],Ne=["disabled"],Pe={class:"w-full"},Se={class:"sticky top-0 z-10 ltr:text-left rtl:text-right"},Me={class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss"},Re={class:"flex items-center justify-center"},Ue=["checked"],Ie={class:"bg-gray-600 p-2 font-semibold text-white"},Ae={class:"bg-gray-600 p-2 font-semibold text-white"},ze={class:"bg-gray-600 p-2 font-semibold text-white"},Ve={class:"bg-gray-600 p-2 font-semibold text-white"},Be={class:"bg-gray-600 p-2 font-semibold text-white"},De={class:"bg-gray-600 p-2 font-semibold text-white"},Fe={class:"bg-gray-600 p-2 font-semibold text-white rounded-se"},Ke=["onClick"],Le={class:"flex items-center justify-center"},Qe=["checked","onChange"],Te={class:"border border-gray-200 p-1"},Ye={class:"border border-gray-200 p-1"},je={class:"border border-gray-200 p-1"},He={class:"border border-gray-200 p-1"},We={class:"border border-gray-200 p-1"},qe={class:"border border-gray-200 p-1"},Ee={class:"border border-gray-200 p-1"},lt=Y({__name:"PremaritalPrint",setup(H){const{updateUrlQuery:U}=se(),{hasPermissionTo:$,hasAnyPermission:p}=Z(),m=c([]),g=c({}),w=J(),u=ne(),h=D(()=>m.value.filter(i=>u.selectedRecordsIds.value.has(i.id))),v=c(!1),d=c(!1);j(()=>x(location.search));const I=D(()=>h.value.length===0?"height: calc(100vh - 15.7rem)":"height: calc(100vh - 18.4rem)"),x=async i=>{const n=await U(i),{data:P}=await A.get(`/api/premarital/print?${n}`);m.value=P.data,g.value=P.meta},b=i=>i===R.Authorized?"border-s-gray-300":"border-s-emerald-500",N=i=>i===R.Authorized?"hover:bg-gray-300 hover:text-black":"hover:bg-emerald-500 hover:text-white",l=i=>{$("PremaritalResult.print")&&w.push(`/premarital/print/${i}`)},r=async()=>{const{isConfirmed:i}=await L.fire();if(i){v.value=!0;try{await A.post("/api/premarital/results/send",{premaritalVisitsIds:h.value.flatMap(n=>n.id)}),Q.fire(),u.clear()}catch{}v.value=!1}},W=async()=>{const{isConfirmed:i}=await L.fire();if(i){d.value=!0;try{await A.post("/api/premarital/results/upload",{premaritalVisitsIds:h.value.flatMap(n=>n.id)}),Q.fire(),u.clear()}catch{}d.value=!1}};return(i,n)=>{const P=E("router-view");return f(),y(V,null,[_(P,{onClose:x}),_(ee,null,{header:C(()=>[z(s(t(a)("Premarital Print")),1)]),body:C(()=>[e("div",ke,[_($e,{onChange:x}),h.value.length>0?(f(),y(V,{key:0},[t($)("PremaritalResult.send")?(f(),y("button",{key:0,onClick:r,class:"btn-teal",disabled:v.value},[_(K,{"is-loading":v.value},{default:C(()=>[z(s(t(a)("Send")),1)]),_:1},8,["is-loading"])],8,Ce)):B("",!0),t($)("PremaritalResult.upload")?(f(),y("button",{key:1,onClick:W,class:"btn-blue",disabled:d.value},[_(K,{"is-loading":d.value},{default:C(()=>[z(s(t(a)("Upload")),1)]),_:1},8,["is-loading"])],8,Ne)):B("",!0),e("button",{onClick:n[0]||(n[0]=o=>t(u).clear()),class:"btn-gray"},s(t(a)("Clear")),1)],64)):B("",!0)]),e("section",{class:"overflow-y-auto pe-1",style:G(I.value)},[e("table",Pe,[e("thead",null,[e("tr",Se,[e("th",Me,[e("label",Re,[e("input",{type:"checkbox",checked:t(u).isAllSelected(m.value),onChange:n[1]||(n[1]=o=>t(u).toggleAll(m.value,o.target.checked)),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Ue)])]),e("th",Ie,s(t(a)("No.")),1),e("th",Ae,s(t(a)("Husband Name")),1),e("th",ze,s(t(a)("Wife Name")),1),e("th",Ve,s(t(a)("Message Status")),1),e("th",Be,s(t(a)("Upload Status")),1),e("th",De,s(t(a)("Date")),1),e("th",Fe,s(t(a)("Branch")),1)])]),e("tbody",null,[(f(!0),y(V,null,O(m.value,o=>(f(),y("tr",{class:T(["cursor-pointer transition group even:bg-gray-100",N(o.status)]),onClick:F=>l(o.id)},[e("td",{class:T(["border border-gray-200 p-1 border-s-[5px]",b(o.status)]),onClick:n[2]||(n[2]=X(()=>{},["stop"]))},[e("label",Le,[e("input",{type:"checkbox",checked:t(u).isSelected(o),onChange:F=>t(u).toggle(o,F.target.checked),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Qe)])],2),e("td",Te,s(o.number),1),e("td",Ye,s(o.husbandInformation.name),1),e("td",je,s(o.wifeInformation.name),1),e("td",He,s(t(a)(o.messageStatus?.startCase())),1),e("td",We,s(t(a)(o.uploadStatus?.startCase())),1),e("td",qe,s(o.date),1),e("td",Ee,s(o.branch.name),1)],10,Ke))),256))])])],4)]),_:1}),_(te,{data:g.value,onChange:n[3]||(n[3]=o=>x(`page=${o}`)),class:"mt-3"},null,8,["data"])],64)}}});export{lt as default};
