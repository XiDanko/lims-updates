import{d as $,g as y,x as B,Q as T,o as s,c as a,a as m,i as n,R as C,k as c,j as k,v as A,b as t,a1 as L,T as S,u as F,y as N,r as V,V as D,w as g,m as P,t as _,F as q,a3 as U,a4 as Q}from"./main-0c5e983d.js";import{M as j}from"./Master-2413594e.js";import{s as E}from"./multiselect-f0516a60.js";import{_ as K}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d78112e2.js";import{u as R}from"./urlQueryManager-bb9ba2ef.js";import{_ as G}from"./Paginator.vue_vue_type_script_setup_true_lang-8b2657b0.js";import{A as J}from"./ActivityLogSidebar-5a366e2e.js";import{d as O}from"./vuedraggable.umd-2f5d9893.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./vue.runtime.esm-bundler-2ec9cef1.js";const W={class:"ml-auto flex items-center gap-2"},X=["onKeyup"],Y=$({__name:"TestsFilter",emits:["change"],setup(I,{emit:p}){const w=new URLSearchParams(location.search),{hasPermissionTo:v}=S(),l=y(""),u=y(""),d=y(""),f=y([]);B(()=>{z(),h()});const z=()=>{l.value=w.get("q")??"",d.value=w.get("departmentId")??"",u.value=w.get("branchId")??""},h=async()=>{if(!v("Department.list"))return;const{data:r}=await T.get(`/api/departments/list?branchId=${u.value}`);f.value=r.data},x=r=>{d.value=r??"",b()},b=()=>{const r=`?branchId=${u.value}&departmentId=${d.value}&q=${l.value}&page=1`;p("change",r)};return(r,o)=>(s(),a("div",W,[m(K,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=i=>u.value=i),onChange:o[1]||(o[1]=i=>{b(),h()})},null,8,["modelValue"]),n(v)("Department.list")?(s(),C(n(E),{key:0,"model-value":d.value,options:f.value,"value-prop":"id","track-by":"searchableForm",label:"name",searchable:!0,placeholder:"Select department",onChange:x,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):c("",!0),k(t("input",{"onUpdate:modelValue":o[2]||(o[2]=i=>l.value=i),onKeyup:L(b,["enter"]),type:"text",placeholder:"Name, short form or code",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,X),[[A,l.value]])]))}}),Z={class:"mb-5 flex items-center"},tt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),et=t("span",{class:"font-semibold"},"Create New Test",-1),st={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},ot={class:"w-full"},rt={class:"sticky top-0 z-10 text-left"},at={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},nt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-4 w-4 rotate-90"},[t("path",{d:"M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"})],-1),dt=[nt],lt=t("th",{class:"whitespace-nowrap first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Seq. No.",-1),it=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Code",-1),ct=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),pt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Short Form",-1),ut=t("th",{class:"whitespace-nowrap first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Sample Type",-1),ht=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Department",-1),_t=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 text-center font-semibold text-white"},"Single",-1),mt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),gt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 text-center font-semibold text-white"},"Active",-1),yt={key:1,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},wt={class:"transition even:bg-gray-100"},vt={key:0,class:"border border-gray-200 p-2"},ft=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mx-auto h-5 w-5 draggable-handle hover:cursor-move"},[t("path",{d:"M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"})],-1),bt=[ft],xt={class:"border border-gray-200 px-2 py-1"},Ct={class:"border border-gray-200 px-2 py-1"},kt={class:"border border-gray-200 px-2 py-1"},zt={class:"border border-gray-200 px-2 py-1"},Ht={class:"border border-gray-200 px-2 py-1"},Mt={class:"border border-gray-200 px-2 py-1"},Tt={class:"border border-gray-200 px-2 py-1 text-center"},Vt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},$t=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Bt=[$t],St={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-gray-300",viewBox:"0 0 16 16"},It=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),At=[It],Lt={class:"border border-gray-200 px-2 py-1"},Ft={class:"border border-gray-200 px-2 py-1 text-center"},Nt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},Dt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Pt=[Dt],qt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},Ut=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Qt=[Ut],jt={key:1,class:"border border-gray-200 px-2 py-1 text-center"},Et={class:"flex items-center justify-center gap-3"},Kt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-5 w-5"},[t("path",{d:"M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z"})],-1),Rt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Gt=["onClick"],Jt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Ot=[Jt],de=$({__name:"Tests",setup(I){const p=y([]),w=F().user.branches,v=y({}),{urlQuery:l,updateUrlQuery:u}=R(),{hasPermissionTo:d,hasAnyPermission:f}=S();B(()=>h(location.search));const z=N(()=>l.get("departmentId")?`/tests/create?departmentId=${l.get("departmentId")}`:"/tests/create"),h=async r=>{const o=await u(r),{data:i}=await T.get(`/api/tests?${o}`);p.value=i.data,v.value=i.meta},x=()=>!d("Test.update")||!l.get("departmentId")?!1:w.length===1||l.get("branchId"),b=async()=>{const{data:r}=await T.post("/api/tests/rearrange",p.value);p.value=r.data};return(r,o)=>{const i=V("router-view"),H=V("router-link"),M=D("tip");return s(),a(q,null,[m(i,{onClose:h}),m(j,null,{header:g(()=>[P("Tests")]),body:g(()=>[t("div",Z,[n(d)("Test.create")?(s(),C(H,{key:0,to:z.value,class:"inline-flex items-center btn-blue"},{default:g(()=>[tt,et]),_:1},8,["to"])):c("",!0),m(Y,{onChange:h})]),t("section",st,[t("table",ot,[t("thead",null,[t("tr",rt,[x()?(s(),a("th",at,dt)):c("",!0),lt,it,ct,pt,ut,ht,_t,mt,gt,n(f)("Parameter.view","Test.update","ActivityLog.list")?(s(),a("th",yt)):c("",!0)])]),m(n(O),{tag:"tbody",modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value=e),"item-key":"id",handle:".draggable-handle","ghost-class":"!bg-gray-300",onChange:b},{item:g(({element:e})=>[t("tr",wt,[x()?(s(),a("td",vt,bt)):c("",!0),t("td",xt,_(e.sequenceNumber),1),t("td",Ct,_(e.code),1),t("td",kt,_(e.name),1),t("td",zt,_(e.shortForm),1),t("td",Ht,_(e.sampleType.name),1),t("td",Mt,_(e.department.name),1),t("td",Tt,[e.isSingle?(s(),a("svg",Vt,Bt)):(s(),a("svg",St,At))]),t("td",Lt,_(e.branch.name),1),t("td",Ft,[e.isActive?(s(),a("svg",Nt,Pt)):(s(),a("svg",qt,Qt))]),n(f)("Parameter.view","Test.update","ActivityLog.list")?(s(),a("td",jt,[t("div",Et,[n(d)("Parameter.view")?k((s(),C(H,{key:0,to:`/parameters?testId=${e.id}`,class:"cursor-pointer text-blue-500"},{default:g(()=>[Kt]),_:2},1032,["to"])),[[M,"View Parameters"]]):c("",!0),n(d)("Test.update")?k((s(),C(H,{key:1,to:`/tests/${e.id}/edit`,class:"cursor-pointer text-orange-500"},{default:g(()=>[Rt]),_:2},1032,["to"])),[[M,"Edit"]]):c("",!0),n(d)("ActivityLog.list")?k((s(),a("button",{key:2,onClick:Wt=>n(U).emit(n(Q).Show,e.id),class:"cursor-pointer text-gray-600"},Ot,8,Gt)),[[M,"View Activities"]]):c("",!0)])])):c("",!0)])]),_:1},8,["modelValue"])])])]),_:1}),m(G,{data:v.value,onChange:o[1]||(o[1]=e=>h(`page=${e}`)),class:"mt-3"},null,8,["data"]),m(J)],64)}}});export{de as default};
