import{d as D,e as x,x as A,o as s,c as a,a as d,b as t,h as C,v as $,a0 as L,u as S,Q as z,r as M,U as N,w as _,k as q,g as r,R as V,i as l,t as m,F as U,a2 as F,a3 as Q,T as I}from"./main-BgbWFIXK.js";import{M as T}from"./Master-Bb3753-s.js";import{_ as E}from"./BranchFilter.vue_vue_type_script_setup_true_lang-Cg0zFa3A.js";import{_ as P}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{u as R}from"./urlQueryManager-CZwFgJ7t.js";import{A as j}from"./ActivityLogSidebar-DZ3mPV78.js";import{d as K}from"./vuedraggable.umd-DoPE7h08.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DeMhawmc.js";import"./vue.runtime.esm-bundler-DOsm6OJ3.js";const G={class:"flex flex-wrap items-center gap-2 ms-auto"},J={class:"relative flex-1 min-w-[11rem]"},O=t("label",{class:"label"},"Name / Code",-1),W=D({__name:"DepartmentsFilter",emits:["change"],setup(B,{emit:n}){const g=n,y=new URLSearchParams(location.search),p=x(""),o=x("");A(()=>{v()});const v=()=>{p.value=y.get("branchId")??"",o.value=y.get("q")??""},f=()=>{const i=`branchId=${p.value}&q=${o.value}&page=1`;g("change",i)};return(i,c)=>(s(),a("div",G,[d(E,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=h=>p.value=h),onChange:f},null,8,["modelValue"]),t("div",J,[C(t("input",{"onUpdate:modelValue":c[1]||(c[1]=h=>o.value=h),onKeyup:L(f,["enter"]),type:"text",class:"input-sm peer"},null,544),[[$,o.value]]),O])]))}}),X={class:"mb-5 flex items-start gap-1"},Y=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),Z=t("span",{class:"whitespace-nowrap font-semibold"},"Create New Department",-1),tt={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},et={class:"w-full"},st={class:"sticky top-0 z-10 text-left"},ot={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},at=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-4 w-4 rotate-90"},[t("path",{d:"M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"})],-1),rt=[at],nt=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Seq. No.",-1),it=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name",-1),ct=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Code",-1),lt=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Description",-1),dt=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),pt=t("th",{class:"bg-gray-600 p-2 text-center font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Active",-1),ut={key:1,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},ht={class:"transition even:bg-gray-100"},_t={key:0,class:"border border-gray-200 p-2"},mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mx-auto h-5 w-5 draggable-handle hover:cursor-move"},[t("path",{d:"M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"})],-1),gt=[mt],yt={class:"border border-gray-200 px-2 py-1"},vt={class:"border border-gray-200 px-2 py-1"},ft={class:"border border-gray-200 px-2 py-1"},wt={class:"border border-gray-200 px-2 py-1"},bt={class:"border border-gray-200 px-2 py-1"},xt={class:"border border-gray-200 px-2 py-1 text-center"},Ct={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},kt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Ht=[kt],zt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},Mt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Vt=[Mt],Dt={key:1,class:"border border-gray-200 px-2 py-1 text-center"},At={class:"flex justify-center gap-3"},Bt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),$t=["onClick"],Lt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),St=[Lt],Kt=D({__name:"Departments",setup(B){const n=x([]),g=x({}),{urlQuery:y,updateUrlQuery:p}=R(),{hasPermissionTo:o,hasAnyPermission:v}=I(),f=S().user.branches;A(()=>i(location.search));const i=async w=>{const u=await p(w),{data:b}=await z.get(`/api/departments?${u}`);n.value=b.data,g.value=b.meta},c=()=>o("Department.update")?f.length===1||y.get("branchId"):!1,h=async()=>{const{data:w}=await z.post("/api/departments/rearrange",n.value);n.value=w.data};return(w,u)=>{const b=M("router-view"),k=M("router-link"),H=N("tip");return s(),a(U,null,[d(b,{onClose:i}),d(T,null,{header:_(()=>[q("Departments")]),body:_(()=>[t("div",X,[r(o)("Department.create")?(s(),V(k,{key:0,to:"/departments/create",class:"inline-flex items-center gap-1 btn-blue"},{default:_(()=>[Y,Z]),_:1})):l("",!0),d(W,{onChange:i})]),t("section",tt,[t("table",et,[t("thead",null,[t("tr",st,[c()?(s(),a("th",ot,rt)):l("",!0),nt,it,ct,lt,dt,pt,r(v)("Department.update","ActivityLog.list")?(s(),a("th",ut)):l("",!0)])]),d(r(K),{tag:"tbody",modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=e=>n.value=e),"item-key":"id",handle:".draggable-handle","ghost-class":"!bg-gray-300",onChange:h},{item:_(({element:e})=>[t("tr",ht,[c()?(s(),a("td",_t,gt)):l("",!0),t("td",yt,m(e.sequenceNumber),1),t("td",vt,m(e.name),1),t("td",ft,m(e.code),1),t("td",wt,m(e.description),1),t("td",bt,m(e.branch.name),1),t("td",xt,[e.isActive?(s(),a("svg",Ct,Ht)):(s(),a("svg",zt,Vt))]),r(v)("Department.update","ActivityLog.list")?(s(),a("td",Dt,[t("div",At,[r(o)("Department.update")?C((s(),V(k,{key:0,to:`/departments/${e.id}/edit`,class:"cursor-pointer text-orange-500"},{default:_(()=>[Bt]),_:2},1032,["to"])),[[H,"Edit"]]):l("",!0),r(o)("ActivityLog.list")?C((s(),a("button",{key:1,onClick:Nt=>r(F).emit(r(Q).Show,e.id),class:"cursor-pointer text-gray-600"},St,8,$t)),[[H,"View Activities"]]):l("",!0)])])):l("",!0)])]),_:1},8,["modelValue"])])])]),_:1}),d(P,{data:g.value,onChange:u[1]||(u[1]=e=>i(`page=${e}`)),class:"mt-3"},null,8,["data"]),d(j)],64)}}});export{Kt as default};
