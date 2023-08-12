import{d as T,g as U,x as H,o as t,c as s,a as m,j as w,v as L,b as e,a1 as N,Q as A,r as V,V as D,w as C,m as S,i as a,R as $,k as l,F as h,a2 as g,t as p,a3 as F,a4 as j,T as I,Z as M,a0 as Q}from"./main-bf2af1c2.js";import{M as E}from"./Master-fd48b992.js";import{_ as K}from"./Paginator.vue_vue_type_script_setup_true_lang-ae9d2a51.js";import{u as P}from"./urlQueryManager-97734f58.js";import{_ as R}from"./BranchFilter.vue_vue_type_script_setup_true_lang-7984eace.js";import{A as q}from"./ActivityLogSidebar-27791482.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-4f06085e.js";const G={class:"ml-auto flex items-center gap-2"},Z=["onKeyup"],J=T({__name:"UsersFilter",emits:["change"],setup(B,{emit:y}){const f=new URLSearchParams(location.search),u=U(""),r=U("");H(()=>{x()});const x=()=>{u.value=f.get("name")??"",r.value=f.get("branchId")??""},c=()=>{const b=`name=${u.value}&branchId=${r.value}&page=1`;y("change",b)};return(b,_)=>(t(),s("div",G,[m(R,{modelValue:r.value,"onUpdate:modelValue":_[0]||(_[0]=n=>r.value=n),onChange:c},null,8,["modelValue"]),w(e("input",{"onUpdate:modelValue":_[1]||(_[1]=n=>u.value=n),onKeyup:N(c,["enter"]),type:"text",placeholder:"Name",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,Z),[[L,u.value]])]))}}),O={class:"mb-5 flex items-center"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),X=e("span",{class:"font-semibold"},"Create New User",-1),Y={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},ee={class:"w-full"},te={class:"sticky top-0 z-10 text-left"},se=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),oe=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Username",-1),re={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},ae=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"View Departments",-1),ne=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Authorize Departments",-1),ie=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Roles",-1),le=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branches",-1),ce=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 text-center font-semibold text-white"},"Active",-1),de={key:1,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},pe={class:"transition even:bg-gray-100"},ue={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},_e={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},he={key:0,class:"break-all border border-gray-200 px-2 py-1"},me={class:"border border-gray-200 px-2 py-1"},fe={class:"flex flex-wrap gap-1"},ge={class:"inline-block rounded bg-teal-500 px-1 text-xs font-bold text-white"},we={class:"border border-gray-200 px-2 py-1"},ye={class:"flex flex-wrap gap-1"},xe={class:"inline-block rounded bg-teal-500 px-1 text-xs font-bold text-white"},be={class:"border border-gray-200 px-2 py-1"},ve={class:"flex flex-wrap gap-1"},ke={class:"inline-block rounded bg-teal-500 px-1 text-xs font-bold text-white"},Ce={class:"border border-gray-200 px-2 py-1"},Ue={class:"flex flex-wrap gap-1"},Ae={class:"rounded bg-teal-500 px-1 text-xs font-bold text-white"},ze={class:"border border-gray-200 px-2 py-1 text-center"},Ve={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},$e=e("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Me=[$e],Te={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},He=e("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Be=[He],Le={key:1,class:"border border-gray-200 px-2 py-1 text-center"},Ne={class:"flex justify-center gap-3"},De=["onClick"],Se=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"})],-1),Fe=[Se],je=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ie=["onClick"],Qe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-[1.3rem] h-[1.3rem]"},[e("path",{d:"M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"})],-1),Ee=[Qe],Ke=["onClick"],Pe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Re=[Pe],et=T({__name:"Users",setup(B){const y=U([]),f=U({}),{updateUrlQuery:u}=P(),{hasPermissionTo:r,hasAnyPermission:x}=I();H(()=>c(location.search));const c=async n=>{const d=await u(n),{data:v}=await A.get(`/api/users?${d}`);y.value=v.data,f.value=v.meta},b=async n=>{const{isConfirmed:d}=await M.fire({html:""});d&&(await A.post(`/api/users/${n}/impersonate`),window.open("/","_self"))},_=async n=>{const{isConfirmed:d}=await M.fire({html:"All previous tokens will be revoked."});d&&(await A.post(`/api/users/${n}/generate-token`),Q.fire(),c(location.search))};return(n,d)=>{const v=V("router-view"),z=V("router-link"),k=D("tip");return t(),s(h,null,[m(v,{onClose:c}),m(E,null,{header:C(()=>[S("Users")]),body:C(()=>[e("div",O,[a(r)("User.create")?(t(),$(z,{key:0,to:"/users/create",class:"inline-flex items-center btn-blue"},{default:C(()=>[W,X]),_:1})):l("",!0),m(J,{onChange:c})]),e("section",Y,[e("table",ee,[e("thead",null,[e("tr",te,[se,oe,a(r)("User.generateTokens")?(t(),s("th",re,"Access Token")):l("",!0),ae,ne,ie,le,ce,a(x)("User.update","User.generateTokens","ActivityLog.list")?(t(),s("th",de)):l("",!0)])]),e("tbody",null,[(t(!0),s(h,null,g(y.value,o=>(t(),s("tr",pe,[e("td",ue,p(o.name),1),e("td",_e,p(o.username),1),a(r)("User.generateTokens")?(t(),s("td",he,p(o.accessToken),1)):l("",!0),e("td",me,[e("div",fe,[(t(!0),s(h,null,g(o.viewableDepartments,i=>(t(),s("span",ge,p(i.name),1))),256))])]),e("td",we,[e("div",ye,[(t(!0),s(h,null,g(o.authorizableDepartments,i=>(t(),s("span",xe,p(i.name),1))),256))])]),e("td",be,[e("div",ve,[(t(!0),s(h,null,g(o.roles,i=>(t(),s("span",ke,p(i.displayName),1))),256))])]),e("td",Ce,[e("div",Ue,[(t(!0),s(h,null,g(o.branches,i=>(t(),s("span",Ae,p(i.name),1))),256))])]),e("td",ze,[o.isActive?(t(),s("svg",Ve,Me)):(t(),s("svg",Te,Be))]),a(x)("User.update","User.generateTokens","ActivityLog.list")?(t(),s("td",Le,[e("div",Ne,[a(r)("User.generateTokens")?w((t(),s("button",{key:0,onClick:i=>_(o.id),class:"cursor-pointer text-blue-500"},Fe,8,De)),[[k,"Generate Token"]]):l("",!0),a(r)("User.update")?w((t(),$(z,{key:1,to:`/users/${o.id}/edit`,class:"cursor-pointer text-orange-500"},{default:C(()=>[je]),_:2},1032,["to"])),[[k,"Edit"]]):l("",!0),a(r)("User.impersonate")?w((t(),s("button",{key:2,onClick:i=>b(o.id),class:"cursor-pointer text-gray-600"},Ee,8,Ie)),[[k,"Impersonate"]]):l("",!0),a(r)("ActivityLog.list")?w((t(),s("button",{key:3,onClick:i=>a(F).emit(a(j).Show,o.id),class:"cursor-pointer text-gray-600"},Re,8,Ke)),[[k,"View Activities"]]):l("",!0)])])):l("",!0)]))),256))])])])]),_:1}),m(K,{data:f.value,onChange:d[0]||(d[0]=o=>c(`page=${o}`)),class:"mt-3"},null,8,["data"]),m(q)],64)}}});export{et as default};
