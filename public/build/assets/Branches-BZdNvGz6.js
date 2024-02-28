import{d as B,e as w,x as A,o as e,c as s,b as t,h as g,v as M,a0 as $,Q as V,r as x,U as H,a as h,w as m,k as L,g as n,R as b,i as _,F as C,a1 as N,t as k,a2 as S,a3 as q,T as F}from"./main-BgbWFIXK.js";import{M as U}from"./Master-Bb3753-s.js";import{u as Q}from"./urlQueryManager-CZwFgJ7t.js";import{_ as T}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{A as D}from"./ActivityLogSidebar-DZ3mPV78.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={class:"flex flex-wrap items-center gap-2 ms-auto"},P={class:"relative"},j=t("label",{class:"label"},"Name / Code",-1),K=B({__name:"BranchesFilter",emits:["change"],setup(z,{emit:v}){const l=v,u=new URLSearchParams(location.search),o=w("");A(()=>{p()});const p=()=>{o.value=u.get("q")??""},c=()=>{const d=`q=${o.value}&page=1`;l("change",d)};return(d,a)=>(e(),s("div",E,[t("div",P,[g(t("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),onKeyup:$(c,["enter"]),type:"text",class:"input-sm peer"},null,544),[[M,o.value]]),j])]))}}),R={class:"mb-5 flex items-start gap-1"},G=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),I=t("span",{class:"whitespace-nowrap font-semibold"},"Create New Branch",-1),J={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},O={class:"w-full"},W={class:"sticky top-0 z-10 text-left"},X=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name",-1),Y=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Code",-1),Z=t("th",{class:"bg-gray-600 p-2 text-center font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Active",-1),tt={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},et={class:"transition even:bg-gray-100"},st={class:"border border-gray-200 px-2 py-1"},ot={class:"border border-gray-200 px-2 py-1"},at={class:"border border-gray-200 px-2 py-1 text-center"},rt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},nt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),ct=[nt],it={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},lt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),dt=[lt],ht={key:0,class:"border border-gray-200 px-2 py-1 text-center"},_t={class:"flex justify-center gap-3"},ut=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),pt=["onClick"],mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),vt=[mt],kt=B({__name:"Branches",setup(z){const{updateUrlQuery:v}=Q(),{hasPermissionTo:l,hasAnyPermission:u}=F(),o=w([]),p=w({});A(()=>c(location.search));const c=async d=>{const a=await v(d),{data:i}=await V.get(`/api/branches?${a}`);o.value=i.data,p.value=i.meta};return(d,a)=>{const i=x("router-view"),y=x("router-link"),f=H("tip");return e(),s(C,null,[h(i,{onClose:c}),h(U,null,{header:m(()=>[L("Branches")]),body:m(()=>[t("div",R,[n(l)("Branch.create")?(e(),b(y,{key:0,to:"/branches/create",class:"inline-flex items-center gap-1 btn-blue"},{default:m(()=>[G,I]),_:1})):_("",!0),h(K,{onChange:c})]),t("section",J,[t("table",O,[t("thead",null,[t("tr",W,[X,Y,Z,n(u)("Branch.update","ActivityLog.list")?(e(),s("th",tt)):_("",!0)])]),t("tbody",null,[(e(!0),s(C,null,N(o.value,r=>(e(),s("tr",et,[t("td",st,k(r.name),1),t("td",ot,k(r.code),1),t("td",at,[r.isActive?(e(),s("svg",rt,ct)):(e(),s("svg",it,dt))]),n(u)("Branch.update","ActivityLog.list")?(e(),s("td",ht,[t("div",_t,[n(l)("Branch.update")?g((e(),b(y,{key:0,to:`/branches/${r.id}/edit`,class:"cursor-pointer text-orange-500"},{default:m(()=>[ut]),_:2},1032,["to"])),[[f,"Edit"]]):_("",!0),n(l)("ActivityLog.list")?g((e(),s("button",{key:1,onClick:wt=>n(S).emit(n(q).Show,r.id),class:"cursor-pointer text-gray-600"},vt,8,pt)),[[f,"View Activities"]]):_("",!0)])])):_("",!0)]))),256))])])])]),_:1}),h(T,{data:p.value,onChange:a[0]||(a[0]=r=>c(`page=${r}`)),class:"mt-3"},null,8,["data"]),h(D)],64)}}});export{kt as default};
