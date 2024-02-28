import{d as $,e as w,x as A,o as t,c as s,a as h,b as e,h as x,v as B,a0 as H,Q as L,r as k,U as N,w as f,k as S,g as c,R as M,i as u,F as y,a1 as V,t as g,a2 as U,a3 as q,T as F}from"./main-BgbWFIXK.js";import{M as D}from"./Master-Bb3753-s.js";import{_ as Q}from"./BranchFilter.vue_vue_type_script_setup_true_lang-Cg0zFa3A.js";import{u as T}from"./urlQueryManager-CZwFgJ7t.js";import{_ as E}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{A as I}from"./ActivityLogSidebar-DZ3mPV78.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DeMhawmc.js";const P={class:"flex flex-wrap items-center gap-2 ms-auto"},j={class:"relative flex-1 min-w-[11rem]"},K=e("label",{class:"label"},"Name / Code",-1),R=$({__name:"MachinesFilter",emits:["change"],setup(z,{emit:_}){const m=_,v=new URLSearchParams(location.search),r=w(""),n=w("");A(()=>{l()});const l=()=>{r.value=v.get("branchId")??"",n.value=v.get("q")??""},p=()=>{const i=`branchId=${r.value}&q=${n.value}&page=1`;m("change",i)};return(i,o)=>(t(),s("div",P,[h(Q,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=d=>r.value=d),onChange:p},null,8,["modelValue"]),e("div",j,[x(e("input",{"onUpdate:modelValue":o[1]||(o[1]=d=>n.value=d),onKeyup:H(p,["enter"]),type:"text",class:"input-sm peer"},null,544),[[B,n.value]]),K])]))}}),G={class:"mb-5 flex items-start gap-1"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-4 w-4"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),O=e("span",{class:"whitespace-nowrap font-semibold"},"Create New Machine",-1),W={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},X={class:"w-full"},Y={class:"sticky top-0 z-10 text-left"},Z=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name",-1),ee=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Code",-1),te=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Departments",-1),se=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),oe=e("th",{class:"bg-gray-600 p-2 text-center font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Active",-1),ae={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},re={class:"transition even:bg-gray-100"},ne={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},ie={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},ce={class:"border border-gray-200 px-2 py-1"},le={class:"flex flex-wrap gap-1"},de={class:"inline-block rounded bg-teal-500 px-1 text-xs font-bold text-white"},he={class:"border border-gray-200 px-2 py-1"},pe={class:"border border-gray-200 px-2 py-1 text-center"},ue={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},_e=e("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),me=[_e],ve={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},fe=e("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),ge=[fe],we={key:0,class:"border border-gray-200 px-2 py-1 text-center"},ye={class:"flex justify-center gap-3"},xe=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),be=["onClick"],Ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),ke=[Ce],Ne=$({__name:"Machines",setup(z){const _=w([]),m=w({}),{updateUrlQuery:v}=T(),{hasPermissionTo:r,hasAnyPermission:n}=F();A(()=>l(location.search));const l=async p=>{const i=await v(p),{data:o}=await L.get(`/api/machines?${i}`);_.value=o.data,m.value=o.meta};return(p,i)=>{const o=k("router-view"),d=k("router-link"),b=N("tip");return t(),s(y,null,[h(o,{onClose:l}),h(D,null,{header:f(()=>[S("Machines")]),body:f(()=>[e("div",G,[c(r)("Machine.create")?(t(),M(d,{key:0,to:"/machines/create",class:"inline-flex items-center gap-1 btn-blue"},{default:f(()=>[J,O]),_:1})):u("",!0),h(R,{onChange:l})]),e("section",W,[e("table",X,[e("thead",null,[e("tr",Y,[Z,ee,te,se,oe,c(n)("Machine.update","ActivityLog.list")?(t(),s("th",ae)):u("",!0)])]),e("tbody",null,[(t(!0),s(y,null,V(_.value,a=>(t(),s("tr",re,[e("td",ne,g(a.name),1),e("td",ie,g(a.code),1),e("td",ce,[e("div",le,[(t(!0),s(y,null,V(a.departments,C=>(t(),s("span",de,g(C.name),1))),256))])]),e("td",he,g(a.branch.name),1),e("td",pe,[a.isActive?(t(),s("svg",ue,me)):(t(),s("svg",ve,ge))]),c(n)("Machine.update","ActivityLog.list")?(t(),s("td",we,[e("div",ye,[c(r)("Machine.update")?x((t(),M(d,{key:0,to:`/machines/${a.id}/edit`,class:"cursor-pointer text-orange-500"},{default:f(()=>[xe]),_:2},1032,["to"])),[[b,"Edit"]]):u("",!0),c(r)("ActivityLog.list")?x((t(),s("button",{key:1,onClick:C=>c(U).emit(c(q).Show,a.id),class:"cursor-pointer text-gray-600"},ke,8,be)),[[b,"View Activities"]]):u("",!0)])])):u("",!0)]))),256))])])])]),_:1}),h(E,{data:m.value,onChange:i[0]||(i[0]=a=>l(`page=${a}`)),class:"mt-3"},null,8,["data"]),h(I)],64)}}});export{Ne as default};
