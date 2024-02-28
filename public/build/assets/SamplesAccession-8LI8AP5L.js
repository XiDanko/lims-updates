import{d as O,e as _,x as Q,y as D,o as n,c as i,b as e,a as m,h as A,v as F,a0 as L,V as P,g as l,w as V,F as B,s as K,Q as U,U as q,k as j,_ as E,i as w,a1 as I,ae as H,Y as W,$ as T,ab as G,ac as J,n as z,t as h,a2 as X,a3 as Z,T as ee}from"./main-BgbWFIXK.js";import{M as te}from"./Master-Bb3753-s.js";import{_ as se}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{u as ae}from"./urlQueryManager-CZwFgJ7t.js";import{i as oe}from"./index.es-Bi00NAuK.js";import{d as le}from"./datepickerPresets-DMjR3aNY.js";import{_ as re}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-CkaAe0dl.js";import{_ as ne}from"./BranchFilter.vue_vue_type_script_setup_true_lang-Cg0zFa3A.js";import{O as C}from"./orderStatus-Cdywi7Or.js";import{u as ie}from"./bulkSelection-Cwo4h9hd.js";import{A as ce}from"./ActivityLogSidebar-DZ3mPV78.js";import{_ as de}from"./OrdersPrint.vue_vue_type_script_setup_true_lang-CzL5APqz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DeMhawmc.js";import"./printService-BW6jBw-w.js";const ue={class:"flex flex-wrap items-center gap-2 ms-auto"},pe={class:"relative flex-1 min-w-[10rem]"},he=e("label",{class:"label"},"Registration Number",-1),me={class:"relative flex-1 min-w-[10rem]"},fe=e("label",{class:"label"},"Barcode",-1),ve={class:"relative flex-1 min-w-[6rem]"},ye=e("option",{value:""},"All",-1),_e=["value"],ge=["value"],be=e("label",{class:"label"},"Status",-1),xe={class:"relative flex-1 min-w-[14rem]"},we=e("label",{class:"label"},"Date",-1),Ce=O({__name:"SamplesAccessionFilter",emits:["change","scan"],setup(Y,{emit:f}){const k=f,v=new URLSearchParams(location.search),u=_(""),c=_(""),r=_(""),g=_(""),o=_([null,null]);Q(()=>p());const b=D(()=>o.value[0]===null||o.value[1]===null?"":`${o.value[0]}~${o.value[1]}`),N=async d=>{$(),r.value=d,y("scan")},p=()=>{u.value=v.get("branchId")??"",r.value=v.get("barcode")??"",c.value=v.get("visitNumber")??"",g.value=v.get("status")??"",v.get("dateRange")&&(o.value=v.get("dateRange").split("~"))},M=()=>{const d=c.value;$(),c.value=d,y()},R=()=>{const d=r.value;$(),r.value=d,y()},y=(d="change")=>{let t=`branchId=${u.value}&barcode=${r.value}&visitNumber=${c.value}&status=${g.value}&dateRange=${b.value}&page=1`;k(d,t)},$=()=>{u.value="",c.value="",r.value="",g.value="",o.value=[null,null]};return(d,t)=>(n(),i(B,null,[e("div",ue,[m(ne,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=s=>u.value=s),onChange:y},null,8,["modelValue"]),e("div",pe,[A(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>c.value=s),onKeyup:L(M,["enter"]),type:"text",class:"input-sm peer"},null,544),[[F,c.value]]),he]),e("div",me,[A(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>r.value=s),onKeyup:L(R,["enter"]),type:"text",class:"input-sm peer"},null,544),[[F,r.value]]),fe]),e("div",ve,[A(e("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>g.value=s),onChange:t[4]||(t[4]=s=>y()),class:"input-sm peer"},[ye,e("option",{value:l(C).Collected},"Collected",8,_e),e("option",{value:l(C).Accepted},"Rejected",8,ge)],544),[[P,g.value]]),be]),e("div",xe,[m(l(oe),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:l(le),value:o.value,"onUpdate:value":t[5]||(t[5]=s=>o.value=s),onChange:t[6]||(t[6]=s=>y()),class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":V(()=>[]),_:1},8,["shortcuts","value"]),we])]),m(re,{onScan:N})],64))}}),$e={class:"mb-5 flex flex-wrap items-start gap-2"},ke={key:0,class:"flex items-start gap-2"},Se=["disabled"],Ae={class:"w-full"},Ve={class:"sticky top-0 z-10 text-left"},Be={class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},Ne={class:"flex items-center justify-center"},Me=["checked"],Re=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name",-1),Ue=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Tests",-1),De=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Department",-1),Fe=e("th",{class:"whitespace-nowrap bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Sample Type",-1),Le=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Barcode",-1),je=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Status",-1),Ie=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Notes",-1),Te=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Date",-1),ze=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),Oe={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},Qe={class:"flex items-center justify-center"},Ye=["checked","onChange"],Pe={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},Ke={class:"border border-gray-200 px-2 py-1"},qe={class:"flex flex-wrap items-center gap-1 max-w-[30rem]"},Ee={class:"rounded bg-teal-500 px-1 text-xs text-white group-hover:bg-white group-hover:text-gray-600"},He={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},We={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},Ge={class:"border border-gray-200 px-2 py-1"},Je={class:"border border-gray-200 px-2 py-1"},Xe={class:"border border-gray-200 px-2 py-1"},Ze={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},et={class:"border border-gray-200 px-2 py-1"},tt={key:0,class:"border border-gray-200 px-2 py-1 text-center"},st={class:"flex justify-center gap-3"},at=["onClick"],ot=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),lt=[ot],xt=O({__name:"SamplesAccession",setup(Y){const f=_([]),k=_({}),{updateUrlQuery:v}=ae(),{hasPermissionTo:u,hasAnyPermission:c}=ee(),r=_(!1),g=setInterval(()=>p(location.search),15e3),o=ie(),b=D(()=>f.value.filter(t=>o.selectedRecordsIds.value.has(t.id)));Q(()=>p(location.search)),K(()=>clearInterval(g));const N=D(()=>b.value.length===0?"height: calc(100vh - 15.7rem)":"height: calc(100vh - 18.4rem)"),p=async t=>{const s=await v(t),{data:x}=await U.get(`/api/samples-accession?${s}`);f.value=x.data,k.value=x.meta},M=async t=>{await p(t),o.toggleAll(f.value,!0)},R=async()=>{const{isConfirmed:t}=await W.fire();t&&(r.value=!0,await U.post("/api/samples/accept",{samples:b.value}),T.fire(),r.value=!1,p(location.search),o.clear())},y=async()=>{const{isConfirmed:t}=await G.fire({title:"Notes",input:"textarea",preConfirm:async s=>{try{await U.post("/api/samples/reject",{samples:b.value,notes:s}),T.fire()}catch(x){J.showValidationMessage(x.response.data.message)}}});t&&(p(location.search),o.clear())},$=t=>{if(t===C.Collected)return"border-s-yellow-400";if(t===C.Accepted)return"border-s-orange-500"},d=t=>{if(t===C.Collected)return"hover:bg-yellow-400 hover:text-black";if(t===C.Accepted)return"hover:bg-orange-500 hover:text-white"};return(t,s)=>{const x=q("tip");return n(),i(B,null,[m(te,null,{header:V(()=>[j("Samples Accession")]),body:V(()=>[e("div",$e,[m(Ce,{onChange:p,onScan:M}),b.value.length>0?(n(),i("div",ke,[m(de,{selectedOrders:b.value},null,8,["selectedOrders"]),l(u)("Sample.accept")?(n(),i("button",{key:0,onClick:R,class:"btn-teal",disabled:r.value},[m(E,{"is-loading":r.value},{default:V(()=>[j("Accept")]),_:1},8,["is-loading"])],8,Se)):w("",!0),l(u)("Sample.reject")?(n(),i("button",{key:1,onClick:y,class:"btn-red"},"Reject")):w("",!0),e("button",{onClick:s[0]||(s[0]=a=>l(o).clear()),class:"btn-gray"},"Clear")])):w("",!0)]),e("section",{class:"overflow-y-auto pe-1",style:H(N.value)},[e("table",Ae,[e("thead",null,[e("tr",Ve,[e("th",Be,[e("label",Ne,[e("input",{type:"checkbox",checked:l(o).isAllSelected(f.value),onChange:s[1]||(s[1]=a=>l(o).toggleAll(f.value,a.target.checked)),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Me)])]),Re,Ue,De,Fe,Le,je,Ie,Te,ze,l(c)("ActivityLog.list")?(n(),i("th",Oe)):w("",!0)])]),e("tbody",null,[(n(!0),i(B,null,I(f.value,a=>(n(),i("tr",{class:z(["transition group even:bg-gray-100",d(a.status)])},[e("td",{class:z(["border border-gray-200 px-2 py-1 border-s-[5px]",$(a.status)])},[e("label",Qe,[e("input",{type:"checkbox",checked:l(o).isSelected(a),onChange:S=>l(o).toggle(a,S.target.checked),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Ye)])],2),e("td",Pe,h(a.patient.name),1),e("td",Ke,[e("div",qe,[(n(!0),i(B,null,I(a.tests,S=>(n(),i("span",Ee,h(S.shortForm),1))),256))])]),e("td",He,h(a.test.department.name),1),e("td",We,h(a.test.sampleType.name),1),e("td",Ge,h(a.barcode),1),e("td",Je,h(a.status.capitalize()),1),e("td",Xe,h(a.notes),1),e("td",Ze,h(a.date),1),e("td",et,h(a.branch.name),1),l(c)("ActivityLog.list")?(n(),i("td",tt,[e("div",st,[l(u)("ActivityLog.list")?A((n(),i("button",{key:0,onClick:S=>l(X).emit(l(Z).Show,a.id),class:"cursor-pointer text-gray-600 group-hover:text-white"},lt,8,at)),[[x,"View Activities"]]):w("",!0)])])):w("",!0)],2))),256))])])],4)]),_:1}),m(se,{data:k.value,onChange:s[2]||(s[2]=a=>p(`page=${a}`)),class:"mt-3"},null,8,["data"]),m(ce)],64)}}});export{xt as default};
