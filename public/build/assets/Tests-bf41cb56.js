import{d as A}from"./vuedraggable.umd-a48025b6.js";import{d as $,e as y,x as B,Q as T,o as s,c as n,a as m,g as r,R as C,i as c,h as k,v as L,b as t,T as F,U as S,u as N,y as D,r as V,V as P,w as g,k as q,t as _,F as U,X as Q,Y as E}from"./main-6e47ceb6.js";import{M as K}from"./Master-c2e1e299.js";import{s as R}from"./multiselect-27b4da8b.js";import{_ as j}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d104a2b1.js";import{u as X}from"./urlQueryManager-757a21bf.js";import{_ as Y}from"./Paginator.vue_vue_type_script_setup_true_lang-161ff6db.js";import{A as G}from"./ActivityLogSidebar-44a5ec42.js";import"./vue.runtime.esm-bundler-1316509e.js";import"./_plugin-vue_export-helper-c27b6911.js";const J={class:"flex gap-2 items-center ml-auto"},O=["onKeyup"],W=$({__name:"TestsFilter",emits:["change"],setup(I,{emit:p}){const w=new URLSearchParams(location.search),{hasPermissionTo:f}=S(),l=y(""),u=y(""),d=y(""),v=y([]);B(()=>{z(),h()});const z=()=>{l.value=w.get("q")??"",d.value=w.get("departmentId")??"",u.value=w.get("branchId")??""},h=async()=>{if(!f("Department.list"))return;const{data:a}=await T.get(`/api/departments/list?branchId=${u.value}`);v.value=a.data},x=a=>{d.value=a??"",b()},b=()=>{const a=`?branchId=${u.value}&departmentId=${d.value}&q=${l.value}&page=1`;p("change",a)};return(a,o)=>(s(),n("div",J,[m(j,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=i=>u.value=i),onChange:o[1]||(o[1]=i=>{b(),h()})},null,8,["modelValue"]),r(f)("Department.list")?(s(),C(r(R),{key:0,"model-value":d.value,options:v.value,"value-prop":"id","track-by":"searchableForm",label:"name",searchable:!0,placeholder:"Select department",onChange:x,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):c("",!0),k(t("input",{"onUpdate:modelValue":o[2]||(o[2]=i=>l.value=i),onKeyup:F(b,["enter"]),type:"text",placeholder:"Name, short form or code",class:"p-1.5 w-56 border border-gray-300 rounded focus:border-blue-500"},null,40,O),[[L,l.value]])]))}}),Z={class:"flex items-center mb-5"},tt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-4 h-4 mr-1"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),et=t("span",{class:"font-semibold"},"Create New Test",-1),st={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},ot={class:"w-full"},rt={class:"sticky top-0 z-10 text-left"},at={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},nt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-4 h-4 rotate-90 mx-auto"},[t("path",{d:"M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"})],-1),dt=[nt],lt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr whitespace-nowrap"},"Seq. No.",-1),it=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Code",-1),ct=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Name",-1),pt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Short Form",-1),ut=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr whitespace-nowrap"},"Sample Type",-1),ht=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Department",-1),_t=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr text-center"},"Single",-1),mt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch",-1),gt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr text-center"},"Active",-1),yt={key:1,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},wt={class:"transition even:bg-gray-100"},ft={key:0,class:"p-2 border border-gray-200"},vt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-5 h-5 mx-auto hover:cursor-move draggable-handle"},[t("path",{d:"M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"})],-1),bt=[vt],xt={class:"py-1 px-2 border border-gray-200"},Ct={class:"py-1 px-2 border border-gray-200"},kt={class:"py-1 px-2 border border-gray-200"},zt={class:"py-1 px-2 border border-gray-200"},Ht={class:"py-1 px-2 border border-gray-200"},Mt={class:"py-1 px-2 border border-gray-200"},Tt={class:"py-1 px-2 border border-gray-200 text-center"},Vt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-7 w-7 mx-auto text-emerald-500",viewBox:"0 0 16 16"},$t=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Bt=[$t],St={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"rotate-180 h-7 w-7 mx-auto text-gray-300",viewBox:"0 0 16 16"},It=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),At=[It],Lt={class:"py-1 px-2 border border-gray-200"},Ft={class:"py-1 px-2 border border-gray-200 text-center"},Nt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-7 w-7 mx-auto text-emerald-500",viewBox:"0 0 16 16"},Dt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Pt=[Dt],qt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"rotate-180 h-7 w-7 mx-auto text-red-500",viewBox:"0 0 16 16"},Ut=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Qt=[Ut],Et={key:1,class:"py-1 px-2 border border-gray-200 text-center"},Kt={class:"flex justify-center items-center gap-3"},Rt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5 mx-auto"},[t("path",{d:"M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z"})],-1),jt=t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Xt=["onClick"],Yt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Gt=[Yt],de=$({__name:"Tests",setup(I){const p=y([]),w=N().user.branches,f=y({}),{urlQuery:l,updateUrlQuery:u}=X(),{hasPermissionTo:d,hasAnyPermission:v}=S();B(()=>h(location.search));const z=D(()=>l.get("departmentId")?`/tests/create?departmentId=${l.get("departmentId")}`:"/tests/create"),h=async a=>{const o=await u(a),{data:i}=await T.get(`/api/tests?${o}`);p.value=i.data,f.value=i.meta},x=()=>!d("Test.update")||!l.get("departmentId")?!1:w.length===1||l.get("branchId"),b=async()=>{const{data:a}=await T.post("/api/tests/rearrange",p.value);p.value=a.data};return(a,o)=>{const i=V("router-view"),H=V("router-link"),M=P("tip");return s(),n(U,null,[m(i,{onClose:h}),m(K,null,{header:g(()=>[q("Tests")]),body:g(()=>[t("div",Z,[r(d)("Test.create")?(s(),C(H,{key:0,to:r(z),class:"btn-blue inline-flex items-center"},{default:g(()=>[tt,et]),_:1},8,["to"])):c("",!0),m(W,{onChange:h})]),t("section",st,[t("table",ot,[t("thead",null,[t("tr",rt,[x()?(s(),n("th",at,dt)):c("",!0),lt,it,ct,pt,ut,ht,_t,mt,gt,r(v)("Parameter.view","Test.update","ActivityLog.list")?(s(),n("th",yt)):c("",!0)])]),m(r(A),{tag:"tbody",modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value=e),"item-key":"id",handle:".draggable-handle","ghost-class":"!bg-gray-300",onChange:b},{item:g(({element:e})=>[t("tr",wt,[x()?(s(),n("td",ft,bt)):c("",!0),t("td",xt,_(e.sequenceNumber),1),t("td",Ct,_(e.code),1),t("td",kt,_(e.name),1),t("td",zt,_(e.shortForm),1),t("td",Ht,_(e.sampleType.name),1),t("td",Mt,_(e.department.name),1),t("td",Tt,[e.isSingle?(s(),n("svg",Vt,Bt)):(s(),n("svg",St,At))]),t("td",Lt,_(e.branch.name),1),t("td",Ft,[e.isActive?(s(),n("svg",Nt,Pt)):(s(),n("svg",qt,Qt))]),r(v)("Parameter.view","Test.update","ActivityLog.list")?(s(),n("td",Et,[t("div",Kt,[r(d)("Parameter.view")?k((s(),C(H,{key:0,to:`/parameters?testId=${e.id}`,class:"text-blue-500 cursor-pointer"},{default:g(()=>[Rt]),_:2},1032,["to"])),[[M,"View Parameters"]]):c("",!0),r(d)("Test.update")?k((s(),C(H,{key:1,to:`/tests/${e.id}/edit`,class:"text-orange-500 cursor-pointer"},{default:g(()=>[jt]),_:2},1032,["to"])),[[M,"Edit"]]):c("",!0),r(d)("ActivityLog.list")?k((s(),n("button",{key:2,onClick:Jt=>r(Q).emit(r(E).Show,e.id),class:"text-gray-600 cursor-pointer"},Gt,8,Xt)),[[M,"View Activities"]]):c("",!0)])])):c("",!0)])]),_:1},8,["modelValue"])])])]),_:1}),m(Y,{data:f.value,onChange:o[1]||(o[1]=e=>h(`page=${e}`)),class:"mt-3"},null,8,["data"]),m(G)],64)}}});export{de as default};