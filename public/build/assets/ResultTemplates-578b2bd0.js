import{d as T,g as f,x as V,Q as k,o as s,c as a,a as h,i as r,R as C,w as v,b as t,t as x,k as m,T as A,r as R,V as z,m as F,F as $,a2 as H,j as b,a3 as L,a4 as P,Z as S,a0 as I}from"./main-0c5e983d.js";import{M as N}from"./Master-2413594e.js";import{_ as j}from"./Paginator.vue_vue_type_script_setup_true_lang-8b2657b0.js";import{u as D}from"./urlQueryManager-bb9ba2ef.js";import{_ as Q}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d78112e2.js";import{s as U}from"./multiselect-f0516a60.js";import{A as E}from"./ActivityLogSidebar-5a366e2e.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"ml-auto flex items-center gap-2"},Z={class:"truncate"},G=T({__name:"ResultTemplatesFilter",emits:["change"],setup(B,{emit:g}){const _=new URLSearchParams(location.search),{hasPermissionTo:w}=A(),d=f([]),l=f(""),o=f("");V(()=>{p(),y()});const y=async()=>{if(!w("Parameter.list"))return;const{data:n}=await k.get(`/api/parameters/list?branchId=${l.value}`);d.value=n.data},p=()=>{l.value=_.get("branchId")??"",o.value=_.get("parameterId")??""},i=n=>{o.value=n??"",u()},u=()=>{const n=`branchId=${l.value}&parameterId=${o.value}&page=1`;g("change",n)};return(n,c)=>(s(),a("div",q,[h(Q,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),onChange:c[1]||(c[1]=e=>{u(),y()})},null,8,["modelValue"]),r(w)("Parameter.list")?(s(),C(r(U),{key:0,"model-value":o.value,options:d.value,"value-prop":"id","track-by":"searchableForm",label:"shortForm",searchable:!0,placeholder:"Select parameter",onChange:i,class:"border border-gray-300 !rounded w-56 min-h-[38px]"},{option:v(({option:e})=>[t("span",Z,x(e.shortForm),1)]),_:1},8,["model-value","options"])):m("",!0)]))}}),J={class:"mb-5 flex items-center"},K=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),O=t("span",{class:"font-semibold"},"Create New Result Template",-1),W={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},X={class:"w-full"},Y={class:"sticky top-0 z-10 text-left"},tt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),et=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Parameter",-1),st=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),ot=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 text-center font-semibold text-white"},"Active",-1),at={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},rt={class:"transition even:bg-gray-100"},nt={class:"border border-gray-200 px-2 py-1"},lt={class:"border border-gray-200 px-2 py-1"},it={class:"border border-gray-200 px-2 py-1"},ct={class:"border border-gray-200 px-2 py-1 text-center"},dt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},ut=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),mt=[ut],pt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},ht=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),_t=[ht],vt={key:0,class:"border border-gray-200 px-2 py-1 text-center"},ft={class:"flex items-center justify-center gap-3"},gt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),wt=["onClick"],yt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),xt=[yt],bt=["onClick"],kt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Ct=[kt],Ft=T({__name:"ResultTemplates",setup(B){const g=f([]),_=f({}),{updateUrlQuery:w}=D(),{hasPermissionTo:d,hasAnyPermission:l}=A();V(()=>o(location.search));const o=async p=>{const i=await w(p),{data:u}=await k.get(`/api/result-templates?${i}`);g.value=u.data,_.value=u.meta},y=async p=>{const{isConfirmed:i}=await S.fire();i&&(await k.delete(`/api/result-templates/${p}`),I.fire(),await o(location.search))};return(p,i)=>{const u=R("router-view"),n=R("router-link"),c=z("tip");return s(),a($,null,[h(u,{onClose:o}),h(N,null,{header:v(()=>[F("Result Templates")]),body:v(()=>[t("div",J,[r(d)("ResultTemplate.create")?(s(),C(n,{key:0,to:"/result-templates/create",class:"inline-flex items-center btn-blue"},{default:v(()=>[K,O]),_:1})):m("",!0),h(G,{onChange:o})]),t("section",W,[t("table",X,[t("thead",null,[t("tr",Y,[tt,et,st,ot,r(l)("ResultTemplate.update","ResultTemplate.delete","ActivityLog.list")?(s(),a("th",at)):m("",!0)])]),t("tbody",null,[(s(!0),a($,null,H(g.value,e=>(s(),a("tr",rt,[t("td",nt,x(e.name),1),t("td",lt,x(e.parameter.shortForm),1),t("td",it,x(e.branch.name),1),t("td",ct,[e.isActive?(s(),a("svg",dt,mt)):(s(),a("svg",pt,_t))]),r(l)("ResultTemplate.update","ResultTemplate.delete","ActivityLog.list")?(s(),a("td",vt,[t("div",ft,[r(d)("ResultTemplate.update")?b((s(),C(n,{key:0,to:`/result-templates/${e.id}/edit`,class:"cursor-pointer text-orange-500"},{default:v(()=>[gt]),_:2},1032,["to"])),[[c,"Edit"]]):m("",!0),r(d)("ResultTemplate.delete")?b((s(),a("button",{key:1,onClick:M=>y(e.id),class:"cursor-pointer text-red-500"},xt,8,wt)),[[c,"Delete"]]):m("",!0),r(d)("ActivityLog.list")?b((s(),a("button",{key:2,onClick:M=>r(L).emit(r(P).Show,e.id),class:"cursor-pointer text-gray-600"},Ct,8,bt)),[[c,"View Activities"]]):m("",!0)])])):m("",!0)]))),256))])])])]),_:1}),h(j,{data:_.value,onChange:i[0]||(i[0]=e=>o(`page=${e}`)),class:"mt-3"},null,8,["data"]),h(E)],64)}}});export{Ft as default};
