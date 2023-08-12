import{d as $,g as w,x as Q,o,c as r,a as p,j as f,W as q,b as t,i as s,v as L,a1 as T,u as N,Q as A,r as M,V as U,w as y,m as F,R as V,k as c,t as x,F as P,Z as j,a0 as D,a3 as E,a4 as K,T as R}from"./main-bf2af1c2.js";import{M as O}from"./Master-fd48b992.js";import{_ as W}from"./Paginator.vue_vue_type_script_setup_true_lang-ae9d2a51.js";import{u as Z}from"./urlQueryManager-97734f58.js";import{_ as G}from"./BranchFilter.vue_vue_type_script_setup_true_lang-7984eace.js";import{I}from"./itemType-8f96b3f7.js";import{A as J}from"./ActivityLogSidebar-27791482.js";import{d as X}from"./vuedraggable.umd-a6666648.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-4f06085e.js";import"./vue.runtime.esm-bundler-94ac917f.js";const Y={class:"ml-auto flex items-center gap-2"},tt=t("option",{value:"",selected:""},"Select type",-1),et=["value"],ot=["value"],st=["value"],at=["onKeyup"],rt=$({__name:"QuickAddItemsFilter",emits:["change"],setup(z,{emit:l}){const m=new URLSearchParams(location.search),a=w(""),u=w(""),_=w("");Q(()=>k());const k=()=>{a.value=m.get("branchId")??"",u.value=m.get("q")??"",_.value=m.get("type")??""},g=()=>{const i=`branchId=${a.value}&q=${u.value}&type=${_.value}&page=1`;l("change",i)};return(i,n)=>(o(),r("div",Y,[p(G,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=h=>a.value=h),onChange:g},null,8,["modelValue"]),f(t("select",{"onUpdate:modelValue":n[1]||(n[1]=h=>_.value=h),onChange:g,class:"px-2 h-[38px] border border-gray-300 !rounded"},[tt,t("option",{value:s(I).Test},"Test",8,et),t("option",{value:s(I).Package},"Package",8,ot),t("option",{value:s(I).Service},"Service",8,st)],544),[[q,_.value]]),f(t("input",{"onUpdate:modelValue":n[2]||(n[2]=h=>u.value=h),onKeyup:T(g,["enter"]),type:"text",placeholder:"Name, short form or code",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,at),[[L,u.value]])]))}}),nt={class:"mb-5 flex quickAddItems-center"},it=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),dt=t("span",{class:"font-semibold"},"Create New Item",-1),ct={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},lt={class:"w-full"},ut={class:"sticky top-0 z-10 text-left"},ht={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},pt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-4 w-4 rotate-90"},[t("path",{d:"M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"})],-1),mt=[pt],_t=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Order",-1),vt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Item Type",-1),gt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Item Name",-1),yt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),wt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Active",-1),ft={key:1,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},bt={class:"transition even:bg-gray-100"},xt={key:0,class:"border border-gray-200 p-2"},kt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mx-auto h-5 w-5 draggable-handle hover:cursor-move"},[t("path",{d:"M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"})],-1),Ct=[kt],At={class:"border border-gray-200 px-2 py-1"},It={class:"border border-gray-200 px-2 py-1"},Ht={class:"border border-gray-200 px-2 py-1"},Mt={class:"border border-gray-200 px-2 py-1"},Vt={class:"border border-gray-200 px-2 py-1 text-center"},$t={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},Qt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),zt=[Qt],St={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},Bt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),qt=[Bt],Lt={key:1,class:"border border-gray-200 px-2 py-1 text-center"},Tt={class:"flex items-center justify-center gap-3"},Nt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ut=["onClick"],Ft=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),Pt=[Ft],jt=["onClick"],Dt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Et=[Dt],Kt=t("tbody",null,null,-1),se=$({__name:"QuickAddItems",setup(z){const l=w([]),m=w({}),{hasPermissionTo:a,hasAnyPermission:u}=R(),{urlQuery:_,updateUrlQuery:k}=Z(),g=N().user.branches;Q(()=>i(location.search));const i=async v=>{const d=await k(v),{data:b}=await A.get(`/api/quick-add-items?${d}`);l.value=b.data,m.value=b.meta},n=()=>a("QuickAddItem.update")?g.length===1||_.get("branchId"):!1,h=async()=>{const{data:v}=await A.post("/api/quick-add-items/rearrange",l.value);l.value=v.data},S=async v=>{const{isConfirmed:d}=await j.fire();d&&(await A.delete(`/api/quick-add-items/${v}`),D.fire(),await i(location.search))};return(v,d)=>{const b=M("router-view"),H=M("router-link"),C=U("tip");return o(),r(P,null,[p(b,{onClose:i}),p(O,null,{header:y(()=>[F("Quick Add Items")]),body:y(()=>[t("div",nt,[s(a)("QuickAddItem.create")?(o(),V(H,{key:0,to:"quick-add-items/create",class:"inline-flex items-center btn-blue"},{default:y(()=>[it,dt]),_:1})):c("",!0),p(rt,{onChange:i})]),t("section",ct,[t("table",lt,[t("thead",null,[t("tr",ut,[n()?(o(),r("th",ht,mt)):c("",!0),_t,vt,gt,yt,wt,s(u)("QuickAddItem.update","QuickAddItem.update","ActivityLog.list")?(o(),r("th",ft)):c("",!0)])]),p(s(X),{tag:"tbody",modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=e=>l.value=e),"item-key":"id",handle:".draggable-handle","ghost-class":"!bg-gray-300",onChange:h},{item:y(({element:e})=>[t("tr",bt,[n()?(o(),r("td",xt,Ct)):c("",!0),t("td",At,x(e.order),1),t("td",It,x(e.itemType),1),t("td",Ht,x(e.item.shortForm??e.item.name),1),t("td",Mt,x(e.branch.name),1),t("td",Vt,[e.isActive?(o(),r("svg",$t,zt)):(o(),r("svg",St,qt))]),s(u)("QuickAddItem.update","QuickAddItem.update","ActivityLog.list")?(o(),r("td",Lt,[t("div",Tt,[s(a)("QuickAddItem.update")?f((o(),V(H,{key:0,to:`/quick-add-items/${e.id}/edit`,class:"cursor-pointer text-orange-500"},{default:y(()=>[Nt]),_:2},1032,["to"])),[[C,"Edit"]]):c("",!0),s(a)("QuickAddItem.delete")?f((o(),r("button",{key:1,onClick:B=>S(e.id),class:"cursor-pointer text-red-500"},Pt,8,Ut)),[[C,"Delete"]]):c("",!0),s(a)("ActivityLog.list")?f((o(),r("button",{key:2,onClick:B=>s(E).emit(s(K).Show,e.id),class:"cursor-pointer text-gray-600"},Et,8,jt)),[[C,"View Activities"]]):c("",!0)])])):c("",!0)])]),_:1},8,["modelValue"]),Kt])])]),_:1}),p(W,{data:m.value,onChange:d[1]||(d[1]=e=>i(`page=${e}`)),class:"mt-3"},null,8,["data"]),p(J)],64)}}});export{se as default};
