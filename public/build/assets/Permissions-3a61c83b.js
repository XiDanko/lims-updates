import{M as L}from"./Master-fd48b992.js";import{_ as B}from"./Paginator.vue_vue_type_script_setup_true_lang-ae9d2a51.js";import{d as V,g as y,x as $,o as t,c as o,j as f,v as H,b as e,a1 as S,Q as b,r as k,V as z,a as d,w,m as N,i as r,R as C,k as u,F as P,a2 as F,t as T,a3 as j,a4 as D,T as Q,Z as U,a0 as E}from"./main-bf2af1c2.js";import{u as K}from"./urlQueryManager-97734f58.js";import{A as q}from"./ActivityLogSidebar-27791482.js";import"./_plugin-vue_export-helper-c27b6911.js";const R={class:"ml-auto flex items-center gap-2"},Z=["onKeyup"],G=V({__name:"PermissionsFilter",emits:["change"],setup(A,{emit:m}){const _=new URLSearchParams(location.search),a=y("");$(()=>{l()});const l=()=>{a.value=_.get("name")??""},p=()=>{const s=`&name=${a.value}&page=1`;m("change",s)};return(s,h)=>(t(),o("div",R,[f(e("input",{"onUpdate:modelValue":h[0]||(h[0]=n=>a.value=n),onKeyup:S(p,["enter"]),type:"text",placeholder:"Permission name",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,Z),[[H,a.value]])]))}}),I={class:"mb-5 flex items-center"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),O=e("span",{class:"font-semibold"},"Create New Permission",-1),W={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},X={class:"w-full"},Y={class:"sticky top-0 z-10 text-left"},ee=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),te={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},se={class:"transition even:bg-gray-100"},oe={class:"border border-gray-200 px-2 py-1"},re={key:0,class:"gap-3 border border-gray-200 px-2 py-1 text-center"},ae={class:"flex justify-center gap-3"},ne=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),ie=["onClick"],ce=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),le=[ce],de=["onClick"],ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),me=[ue],ge=V({__name:"Permissions",setup(A){const m=y([]),_=y({}),{updateUrlQuery:a}=K(),{hasPermissionTo:l,hasAnyPermission:p}=Q();$(()=>s(location.search));const s=async n=>{const i=await a(n),{data:v}=await b.get(`/api/permissions?${i}`);m.value=v.data,_.value=v.meta},h=async n=>{const{isConfirmed:i}=await U.fire();i&&(await b.delete(`/api/permissions/${n}`),E.fire(),await s(location.search))};return(n,i)=>{const v=k("router-view"),x=k("router-link"),g=z("tip");return t(),o(P,null,[d(v,{onClose:s}),d(L,null,{header:w(()=>[N("Permissions")]),body:w(()=>[e("div",I,[r(l)("Permission.create")?(t(),C(x,{key:0,to:"/permissions/create",class:"inline-flex items-center btn-blue"},{default:w(()=>[J,O]),_:1})):u("",!0),d(G,{onChange:s})]),e("section",W,[e("table",X,[e("thead",null,[e("tr",Y,[ee,r(p)("Permission.update","Permission.delete","ActivityLog.list")?(t(),o("th",te)):u("",!0)])]),e("tbody",null,[(t(!0),o(P,null,F(m.value,c=>(t(),o("tr",se,[e("td",oe,T(c.name),1),r(p)("Permission.update","Permission.delete","ActivityLog.list")?(t(),o("td",re,[e("div",ae,[f((t(),C(x,{to:`/permissions/${c.id}/edit`,class:"cursor-pointer text-orange-500"},{default:w(()=>[ne]),_:2},1032,["to"])),[[g,"Edit"]]),r(l)("Permission.delete")?f((t(),o("button",{key:0,onClick:M=>h(c.id),class:"cursor-pointer text-red-500"},le,8,ie)),[[g,"Delete"]]):u("",!0),r(l)("ActivityLog.list")?f((t(),o("button",{key:1,onClick:M=>r(j).emit(r(D).Show,c.id),class:"cursor-pointer text-gray-600"},me,8,de)),[[g,"View Activities"]]):u("",!0)])])):u("",!0)]))),256))])])])]),_:1}),d(B,{data:_.value,onChange:i[0]||(i[0]=c=>s(`page=${c}`)),class:"mt-3"},null,8,["data"]),d(q)],64)}}});export{ge as default};