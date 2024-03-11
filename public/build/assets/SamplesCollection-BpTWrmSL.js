import{d as z,e as g,x as O,y as D,o as i,c,b as e,a as v,h as M,v as q,a0 as H,V as W,g as o,w as k,F as N,s as G,Q as R,Y as U,$ as F,U as J,k as L,_ as I,i as C,a1 as T,ae as X,n as j,t as m,a2 as Z,a3 as ee,T as te}from"./main-DmoZ1fz4.js";import{M as se}from"./Master-ql31p3jM.js";import{_ as oe}from"./Paginator.vue_vue_type_script_setup_true_lang-B5QeFegy.js";import{u as ae}from"./urlQueryManager-DRfC3SWK.js";import{i as le}from"./index.es-CV7LqIVy.js";import{d as re}from"./datepickerPresets-DxjH1h4T.js";import{_ as ne}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-Bp73aGqL.js";import{_ as ie}from"./BranchFilter.vue_vue_type_script_setup_true_lang-DPeXwSCL.js";import{O as _}from"./orderStatus-Cdywi7Or.js";import{u as ce}from"./bulkSelection-Du3MNG3s.js";import{A as de}from"./ActivityLogSidebar-BgD4pgwD.js";import{_ as ue}from"./OrdersPrint.vue_vue_type_script_setup_true_lang-ByCw0eEn.js";import{P as pe}from"./printService-Dt_6MRJ2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DAhRltj6.js";import"./printTemplateType-BiK7zB0k.js";const he={class:"flex flex-wrap items-center gap-2 ms-auto"},fe={class:"relative flex-1 min-w-[10rem]"},me=e("label",{class:"label"},"Registration Number",-1),ve={class:"relative flex-1 min-w-[6rem]"},_e=e("option",{value:""},"All",-1),ge=["value"],ye=["value"],be=["value"],xe=e("label",{class:"label"},"Status",-1),we={class:"relative flex-1 min-w-[14rem]"},Ce=e("label",{class:"label"},"Date",-1),ke=z({__name:"SamplesCollectionFilter",emits:["change","scan"],setup(Q,{emit:y}){const $=y,x=new URLSearchParams(location.search),h=g(""),d=g(""),u=g(""),l=g([null,null]);O(()=>b());const P=D(()=>l.value[0]===null||l.value[1]===null?"":`${l.value[0]}~${l.value[1]}`),p=async r=>{d.value=r,h.value="",l.value=[null,null],u.value="",w("scan")},b=()=>{h.value=x.get("branchId")??"",d.value=x.get("visitNumber")??"",u.value=x.get("status")??"",x.get("dateRange")&&(l.value=x.get("dateRange").split("~"))},S=()=>{const r=d.value;A(),d.value=r,w()},w=(r="change")=>{let a=`branchId=${h.value}&visitNumber=${d.value}&status=${u.value}&dateRange=${P.value}&page=1`;$(r,a)},A=()=>{h.value="",d.value="",u.value="",l.value=[null,null]};return(r,a)=>(i(),c(N,null,[e("div",he,[v(ie,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=n=>h.value=n),onChange:w},null,8,["modelValue"]),e("div",fe,[M(e("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>d.value=n),onKeyup:H(S,["enter"]),type:"text",class:"input-sm peer"},null,544),[[q,d.value]]),me]),e("div",ve,[M(e("select",{"onUpdate:modelValue":a[2]||(a[2]=n=>u.value=n),onChange:a[3]||(a[3]=n=>w()),class:"input-sm peer"},[_e,e("option",{value:o(_).Pending},"Pending",8,ge),e("option",{value:o(_).Collected},"Collected",8,ye),e("option",{value:o(_).Rejected},"Rejected",8,be)],544),[[W,u.value]]),xe]),e("div",we,[v(o(le),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:o(re),value:l.value,"onUpdate:value":a[4]||(a[4]=n=>l.value=n),onChange:a[5]||(a[5]=n=>w()),class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":k(()=>[]),_:1},8,["shortcuts","value"]),Ce])]),v(ne,{onScan:p})],64))}}),$e={class:"mb-5 flex flex-wrap items-start gap-2"},Se={key:0,class:"flex items-start gap-2"},Ae=["disabled"],Ve=["disabled"],Be={class:"w-full"},Ne={class:"sticky top-0 z-10 text-left"},Pe={class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},Re={class:"flex items-center justify-center"},Le=["checked"],De=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"No.",-1),Me=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name",-1),Ue=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Tests",-1),Fe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Department",-1),Ie=e("th",{class:"whitespace-nowrap bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Sample Type",-1),Te=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Barcode",-1),je=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Status",-1),ze=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Notes",-1),Oe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Date",-1),Qe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),Ye={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},Ee={class:"flex items-center justify-center"},Ke=["checked","onChange"],qe={class:"border border-gray-200 px-2 py-1"},He={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},We={class:"border border-gray-200 px-2 py-1"},Ge={class:"flex flex-wrap items-center gap-1 max-w-[30rem]"},Je={class:"rounded bg-teal-500 px-1 text-xs text-white group-hover:bg-white group-hover:text-gray-600"},Xe={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},Ze={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},et={class:"border border-gray-200 px-2 py-1"},tt={class:"border border-gray-200 px-2 py-1"},st={class:"border border-gray-200 px-2 py-1"},ot={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},at={class:"border border-gray-200 px-2 py-1"},lt={key:0,class:"border border-gray-200 px-2 py-1 text-center"},rt={class:"flex justify-center gap-3"},nt=["onClick"],it=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),ct=[it],St=z({__name:"SamplesCollection",setup(Q){const y=g([]),$=g({}),{updateUrlQuery:x}=ae(),{hasPermissionTo:h,hasAnyPermission:d}=te(),u=g(!1),l=g(!1),P=setInterval(()=>r(location.search),15e3),p=ce(),b=D(()=>y.value.filter(t=>p.selectedRecordsIds.value.has(t.id))),S=g(null);O(()=>{r(location.search),document.addEventListener("keyup",A)}),G(()=>{document.removeEventListener("keyup",A),clearInterval(P)});const w=D(()=>b.value.length===0?"height: calc(100vh - 15.7rem)":"height: calc(100vh - 18.4rem)"),A=async t=>{t.keyCode===13&&b.value.length>0&&(await S.value.printBarcodes("departmentWise",pe.Direct),await n(!1))},r=async t=>{const f=await x(t),{data:V}=await R.get(`/api/samples-collection?${f}`);y.value=V.data,$.value=V.meta},a=async t=>{await r(t),p.toggleAll(y.value,!0)},n=async(t=!0)=>{if(t){const{isConfirmed:f}=await U.fire();if(!f)return}u.value=!0,await R.post("/api/samples/collect",{samples:b.value}),F.fire(),u.value=!1,await r(location.search),p.clear()},Y=async()=>{const{isConfirmed:t}=await U.fire();t&&(l.value=!0,await R.post("/api/samples/accept",{samples:b.value}),F.fire(),l.value=!1,await r(location.search),p.clear())},E=t=>{if(t===_.Pending)return"border-s-gray-300";if(t===_.Collected)return"border-s-yellow-400";if(t===_.Rejected)return"border-s-red-500"},K=t=>{if(t===_.Pending)return"hover:bg-gray-300 hover:text-black";if(t===_.Collected)return"hover:bg-yellow-400 hover:text-black";if(t===_.Rejected)return"hover:bg-red-500 hover:text-white"};return(t,f)=>{const V=J("tip");return i(),c(N,null,[v(se,null,{header:k(()=>[L("Samples Collection")]),body:k(()=>[e("div",$e,[v(ke,{onChange:r,onScan:a}),b.value.length>0?(i(),c("div",Se,[v(ue,{ref_key:"ordersPrint",ref:S,selectedOrders:b.value},null,8,["selectedOrders"]),o(h)("Sample.collect")?(i(),c("button",{key:0,onClick:n,class:"btn-teal",disabled:u.value},[v(I,{"is-loading":u.value},{default:k(()=>[L("Collect")]),_:1},8,["is-loading"])],8,Ae)):C("",!0),o(h)("Sample.accept")?(i(),c("button",{key:1,onClick:Y,class:"btn-teal",disabled:l.value},[v(I,{"is-loading":l.value},{default:k(()=>[L("Accept")]),_:1},8,["is-loading"])],8,Ve)):C("",!0),e("button",{onClick:f[0]||(f[0]=s=>o(p).clear()),class:"btn-gray"},"Clear")])):C("",!0)]),e("section",{class:"overflow-y-auto pe-1",style:X(w.value)},[e("table",Be,[e("thead",null,[e("tr",Ne,[e("th",Pe,[e("label",Re,[e("input",{type:"checkbox",checked:o(p).isAllSelected(y.value),onChange:f[1]||(f[1]=s=>o(p).toggleAll(y.value,s.target.checked)),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Le)])]),De,Me,Ue,Fe,Ie,Te,je,ze,Oe,Qe,o(d)("ActivityLog.list")?(i(),c("th",Ye)):C("",!0)])]),e("tbody",null,[(i(!0),c(N,null,T(y.value,s=>(i(),c("tr",{class:j(["transition group even:bg-gray-100",K(s.status)])},[e("td",{class:j(["border border-gray-200 px-2 py-1 border-s-[5px]",E(s.status)])},[e("label",Ee,[e("input",{type:"checkbox",checked:o(p).isSelected(s),onChange:B=>o(p).toggle(s,B.target.checked),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Ke)])],2),e("td",qe,m(s.visit.number),1),e("td",He,m(s.patient.name),1),e("td",We,[e("div",Ge,[(i(!0),c(N,null,T(s.tests,B=>(i(),c("span",Je,m(B.shortForm),1))),256))])]),e("td",Xe,m(s.test.department.name),1),e("td",Ze,m(s.test.sampleType.name),1),e("td",et,m(s.barcode),1),e("td",tt,m(s.status.capitalize()),1),e("td",st,m(s.notes),1),e("td",ot,m(s.date),1),e("td",at,m(s.branch.name),1),o(d)("ActivityLog.list")?(i(),c("td",lt,[e("div",rt,[o(h)("ActivityLog.list")?M((i(),c("button",{key:0,onClick:B=>o(Z).emit(o(ee).Show,s.id),class:"cursor-pointer text-gray-600 group-hover:text-white"},ct,8,nt)),[[V,"View Activities"]]):C("",!0)])])):C("",!0)],2))),256))])])],4)]),_:1}),v(oe,{data:$.value,onChange:f[2]||(f[2]=s=>r(`page=${s}`)),class:"mt-3"},null,8,["data"]),v(de)],64)}}});export{St as default};