import{d as V,g,x as P,o,c as l,a as d,j as v,v as A,b as t,a1 as N,Q as B,r as x,V as L,w as f,m as M,i,R as C,k as h,F as k,a2 as z,t as m,a3 as H,a4 as S,T as q}from"./main-cee2eb24.js";import{M as F}from"./Master-e24133cb.js";import{_ as U}from"./Paginator.vue_vue_type_script_setup_true_lang-fc9e564e.js";import{u as Q}from"./urlQueryManager-ab4c0999.js";import{_ as T}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d1bfbfa5.js";import{A as j}from"./ActivityLogSidebar-55244b79.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-97a39018.js";const D={class:"ml-auto flex items-center gap-2"},E=["onKeyup"],I=V({__name:"PatientsFilter",emits:["change"],setup($,{emit:y}){const u=new URLSearchParams(location.search),c=g(""),a=g("");P(()=>{p()});const p=()=>{c.value=u.get("branchId")??"",a.value=u.get("q")??""},n=()=>{const _=`q=${a.value}&branchId=${c.value}&page=1`;y("change",_)};return(_,e)=>(o(),l("div",D,[d(T,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=r=>c.value=r),onChange:n},null,8,["modelValue"]),v(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>a.value=r),onKeyup:N(n,["enter"]),type:"text",placeholder:"Name or phone number",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,E),[[A,a.value]])]))}}),K={class:"mb-5 flex items-center"},R=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),G=t("span",{class:"font-semibold"},"Create New Patient",-1),J={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},O={class:"w-full"},W={class:"sticky top-0 z-10 text-left"},X=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),Y=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Number",-1),Z=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Gender",-1),tt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Age",-1),et=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),st={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},ot={class:"transition even:bg-gray-100"},rt={class:"border border-gray-200 px-2 py-1"},at={class:"border border-gray-200 px-2 py-1"},nt={class:"border border-gray-200 px-2 py-1"},it={class:"border border-gray-200 px-2 py-1"},lt={class:"border border-gray-200 px-2 py-1"},ct={key:0,class:"border border-gray-200 px-2 py-1 text-center"},dt={class:"flex justify-center gap-3"},ut=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),pt=["onClick"],_t=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),ht=[_t],kt=V({__name:"Patients",setup($){const y=g([]),u=g({}),{updateUrlQuery:c}=Q(),{hasPermissionTo:a,hasAnyPermission:p}=q();P(()=>n(location.search));const n=async _=>{const e=await c(_),{data:r}=await B.get(`/api/patients?${e}`);y.value=r.data,u.value=r.meta};return(_,e)=>{const r=x("router-view"),b=x("router-link"),w=L("tip");return o(),l(k,null,[d(r,{onClose:n}),d(F,null,{header:f(()=>[M("Patients")]),body:f(()=>[t("div",K,[i(a)("Patient.create")?(o(),C(b,{key:0,to:"/patients/create",class:"inline-flex items-center btn-blue"},{default:f(()=>[R,G]),_:1})):h("",!0),d(I,{onChange:n})]),t("section",J,[t("table",O,[t("thead",null,[t("tr",W,[X,Y,Z,tt,et,i(p)("Patient.update","ActivityLog.list")?(o(),l("th",st)):h("",!0)])]),t("tbody",null,[(o(!0),l(k,null,z(y.value,s=>(o(),l("tr",ot,[t("td",rt,m(s.name),1),t("td",at,m(s.phoneNumber),1),t("td",nt,m(s.gender.capitalize()),1),t("td",it,m(s.age),1),t("td",lt,m(s.branch.name),1),i(p)("Patient.update","ActivityLog.list")?(o(),l("td",ct,[t("div",dt,[i(p)("Patient.update")?v((o(),C(b,{key:0,to:`/patients/${s.id}/edit`,class:"cursor-pointer text-orange-500"},{default:f(()=>[ut]),_:2},1032,["to"])),[[w,"Edit"]]):h("",!0),i(a)("ActivityLog.list")?v((o(),l("button",{key:1,onClick:mt=>i(H).emit(i(S).Show,s.id),class:"cursor-pointer text-gray-600"},ht,8,pt)),[[w,"View Activities"]]):h("",!0)])])):h("",!0)]))),256))])])])]),_:1}),d(U,{data:u.value,onChange:e[0]||(e[0]=s=>n(`page=${s}`)),class:"mt-3"},null,8,["data"]),d(j)],64)}}});export{kt as default};
