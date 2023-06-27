import{d as V,g as f,x as R,o as e,c as o,a as c,Q as $,r as w,V as B,w as h,m as L,b as t,i,R as b,k as v,F as x,a2 as M,t as C,j as k,a3 as N,a4 as z,T as H}from"./main-0c5e983d.js";import{M as S}from"./Master-2413594e.js";import{_ as F}from"./Paginator.vue_vue_type_script_setup_true_lang-8b2657b0.js";import{u as Q}from"./urlQueryManager-bb9ba2ef.js";import{_ as U}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d78112e2.js";import{A as j}from"./ActivityLogSidebar-5a366e2e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-f0516a60.js";const D={class:"ml-auto flex items-center gap-2"},E=V({__name:"RolesFilter",emits:["change"],setup(A,{emit:d}){const u=new URLSearchParams(location.search),a=f("");R(()=>{_()});const _=()=>{a.value=u.get("branchId")??""},m=()=>{const s=`branchId=${a.value}&page=1`;d("change",s)};return(s,l)=>(e(),o("div",D,[c(U,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),onChange:m},null,8,["modelValue"])]))}}),I={class:"mb-5 flex items-center"},P=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),T=t("span",{class:"font-semibold"},"Create New Role",-1),q={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},G={class:"w-full"},J={class:"sticky top-0 z-10 text-left"},K=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),O=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),W={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},X={class:"transition even:bg-gray-100"},Y={class:"border border-gray-200 px-2 py-1"},Z={class:"border border-gray-200 px-2 py-1"},tt={key:0,class:"border border-gray-200 px-2 py-1 text-center"},et={class:"flex justify-center gap-3"},st=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),ot=["onClick"],at=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),rt=[at],ht=V({__name:"Roles",setup(A){const d=f([]),u=f({}),{updateUrlQuery:a}=Q(),{hasPermissionTo:_,hasAnyPermission:m}=H();R(()=>s(location.search));const s=async l=>{const r=await a(l),{data:p}=await $.get(`/api/roles?${r}`);d.value=p.data,u.value=p.meta};return(l,r)=>{const p=w("router-view"),g=w("router-link"),y=B("tip");return e(),o(x,null,[c(p,{onClose:s}),c(S,null,{header:h(()=>[L("Roles")]),body:h(()=>[t("div",I,[i(_)("Role.create")?(e(),b(g,{key:0,to:"/roles/create",class:"inline-flex items-center btn-blue"},{default:h(()=>[P,T]),_:1})):v("",!0),c(E,{onChange:s})]),t("section",q,[t("table",G,[t("thead",null,[t("tr",J,[K,O,i(m)("Role.update","ActivityLog.list")?(e(),o("th",W)):v("",!0)])]),t("tbody",null,[(e(!0),o(x,null,M(d.value,n=>(e(),o("tr",X,[t("td",Y,C(n.displayName),1),t("td",Z,C(n.branch.name),1),i(m)("Role.update","ActivityLog.list")?(e(),o("td",tt,[t("div",et,[k((e(),b(g,{to:`/roles/${n.id}/edit`,class:"cursor-pointer text-orange-500"},{default:h(()=>[st]),_:2},1032,["to"])),[[y,"Edit"]]),i(_)("ActivityLog.list")?k((e(),o("button",{key:0,onClick:nt=>i(N).emit(i(z).Show,n.id),class:"cursor-pointer text-gray-600"},rt,8,ot)),[[y,"View Activities"]]):v("",!0)])])):v("",!0)]))),256))])])])]),_:1}),c(F,{data:u.value,onChange:r[0]||(r[0]=n=>s(`page=${n}`)),class:"mt-3"},null,8,["data"]),c(j)],64)}}});export{ht as default};