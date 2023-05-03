import{d as L,e as g,x as V,o as s,c as r,a as u,h as b,v as $,b as t,T as z,Q as B,r as x,U as M,w as f,k as U,g as d,R as C,i as h,F as k,V as H,t as l,W as N,X as S,Y as F}from"./main-56f58ed8.js";import{M as P}from"./Master-fc459851.js";import{_ as E}from"./Paginator.vue_vue_type_script_setup_true_lang-05da81b6.js";import{u as Q}from"./urlQueryManager-2477e94c.js";import{_ as T}from"./BranchFilter.vue_vue_type_script_setup_true_lang-3c8b7822.js";import{A as D}from"./ActivityLogSidebar-f7c42a1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-167e14f5.js";const I={class:"flex gap-2 items-center ml-auto"},K=["onKeyup"],R=L({__name:"LabsFilter",emits:["change"],setup(A,{emit:m}){const p=new URLSearchParams(location.search),c=g(""),a=g("");V(()=>{y()});const y=()=>{c.value=p.get("branchId")??"",a.value=p.get("name")??""},i=()=>{const _=`branchId=${c.value}&name=${a.value}&page=1`;m("change",_)};return(_,o)=>(s(),r("div",I,[u(T,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=n=>c.value=n),onChange:i},null,8,["modelValue"]),b(t("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n),onKeyup:z(i,["enter"]),type:"text",placeholder:"Lab name",class:"w-56 p-1.5 border border-gray-300 rounded focus:border-blue-500"},null,40,K),[[$,a.value]])]))}}),j={class:"flex items-center mb-5"},q=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-4 h-4 mr-1"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),W=t("span",{class:"font-semibold"},"Create New Lab",-1),X={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},Y={class:"w-full"},G={class:"sticky top-0 z-10 text-left"},J=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Name",-1),O=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Phone Number",-1),Z=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Email",-1),tt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Address",-1),et=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Ratio",-1),st=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Price List",-1),ot=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch",-1),rt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr text-center"},"Active",-1),at={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},nt={class:"transition even:bg-gray-100"},it={class:"py-1 px-2 border border-gray-200"},dt={class:"py-1 px-2 border border-gray-200"},lt={class:"py-1 px-2 border border-gray-200"},ct={class:"py-1 px-2 border border-gray-200"},ut={class:"py-1 px-2 border border-gray-200"},pt={class:"py-1 px-2 border border-gray-200"},_t={class:"py-1 px-2 border border-gray-200"},ht={class:"py-1 px-2 border border-gray-200 text-center"},mt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-7 w-7 mx-auto text-emerald-500",viewBox:"0 0 16 16"},yt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),ft=[yt],gt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"rotate-180 h-7 w-7 mx-auto text-red-500",viewBox:"0 0 16 16"},bt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),vt=[bt],wt={key:0,class:"py-1 px-2 border border-gray-200 text-center"},xt={class:"flex justify-center gap-3"},Ct=t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),kt=["onClick"],Lt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Vt=[Lt],Ft=L({__name:"Labs",setup(A){const m=g([]),p=g({}),{updateUrlQuery:c}=Q(),{hasPermissionTo:a,hasAnyPermission:y}=F();V(()=>i(location.search));const i=async _=>{const o=await c(_),{data:n}=await B.get(`/api/labs?${o}`);m.value=n.data,p.value=n.meta};return(_,o)=>{const n=x("router-view"),v=x("router-link"),w=M("tip");return s(),r(k,null,[u(n,{onClose:i}),u(P,null,{header:f(()=>[U("Labs")]),body:f(()=>[t("div",j,[d(a)("Lab.create")?(s(),C(v,{key:0,to:"/labs/create",class:"btn-blue inline-flex items-center"},{default:f(()=>[q,W]),_:1})):h("",!0),u(R,{onChange:i})]),t("section",X,[t("table",Y,[t("thead",null,[t("tr",G,[J,O,Z,tt,et,st,ot,rt,d(y)("Lab.update","ActivityLog.list")?(s(),r("th",at)):h("",!0)])]),t("tbody",null,[(s(!0),r(k,null,H(m.value,e=>(s(),r("tr",nt,[t("td",it,l(e.name),1),t("td",dt,l(e.phoneNumber||"Undefined"),1),t("td",lt,l(e.email||"Undefined"),1),t("td",ct,l(e.address||"Undefined"),1),t("td",ut,l(e.ratio)+"%",1),t("td",pt,l(e.priceList?.name??"Undefined"),1),t("td",_t,l(e.branch.name),1),t("td",ht,[e.isActive?(s(),r("svg",mt,ft)):(s(),r("svg",gt,vt))]),d(y)("Lab.update","ActivityLog.list")?(s(),r("td",wt,[t("div",xt,[d(a)("Lab.update")?b((s(),C(v,{key:0,to:`/labs/${e.id}/edit`,class:"text-orange-500 cursor-pointer"},{default:f(()=>[Ct]),_:2},1032,["to"])),[[w,"Edit"]]):h("",!0),d(a)("ActivityLog.list")?b((s(),r("button",{key:1,onClick:At=>d(N).emit(d(S).Show,e.id),class:"text-gray-600 cursor-pointer"},Vt,8,kt)),[[w,"View Activities"]]):h("",!0)])])):h("",!0)]))),256))])])])]),_:1}),u(E,{data:p.value,onChange:o[0]||(o[0]=e=>i(`page=${e}`)),class:"mt-3"},null,8,["data"]),u(D)],64)}}});export{Ft as default};
