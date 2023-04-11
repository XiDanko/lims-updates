import{d as $}from"./vuedraggable.umd-b7efedf2.js";import{d as V,e as b,x as D,o as s,c as r,a as c,h as x,v as L,b as t,z as S,u as N,A as H,r as z,B as q,w as g,k as U,g as a,C as M,i as l,t as y,F,E,G as I,H as Q}from"./main-c1f62c61.js";import{M as K}from"./Master-77a73046.js";import{_ as P}from"./BranchFilter.vue_vue_type_script_setup_true_lang-16fdce62.js";import{_ as T}from"./Paginator.vue_vue_type_script_setup_true_lang-ba67665d.js";import{u as j}from"./urlQueryManager-3fafa3c6.js";import{A as R}from"./ActivityLogSidebar-b98cd311.js";import"./vue.runtime.esm-bundler-4d85e25d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-ffe70d49.js";const G={class:"flex gap-2 items-center ml-auto"},J=["onKeyup"],O=V({__name:"DepartmentsFilter",emits:["change"],setup(A,{emit:n}){const _=new URLSearchParams(location.search),d=b(""),i=b("");D(()=>{p()});const p=()=>{d.value=_.get("branchId")??"",i.value=_.get("q")??""},m=()=>{const f=`branchId=${d.value}&q=${i.value}&page=1`;n("change",f)};return(f,o)=>(s(),r("div",G,[c(P,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=u=>d.value=u),onChange:m},null,8,["modelValue"]),x(t("input",{"onUpdate:modelValue":o[1]||(o[1]=u=>i.value=u),onKeyup:S(m,["enter"]),type:"text",placeholder:"Name or code",class:"p-1.5 w-56 border border-gray-300 rounded focus:border-blue-500"},null,40,J),[[L,i.value]])]))}}),W={class:"flex items-center mb-5"},X=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-4 h-4 mr-1"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),Y=t("span",{class:"font-semibold"},"Create New Department",-1),Z={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},tt={class:"w-full"},et={class:"sticky top-0 z-10 text-left"},st={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},ot=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-4 h-4 rotate-90 mx-auto"},[t("path",{d:"M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"})],-1),rt=[ot],at=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Seq. No.",-1),nt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Code",-1),lt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Name",-1),ct=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Description",-1),dt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch",-1),it=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr text-center"},"Active",-1),pt={key:1,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},ut={class:"transition even:bg-gray-100"},ht={key:0,class:"p-2 border border-gray-200"},_t=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-5 h-5 mx-auto hover:cursor-move draggable-handle"},[t("path",{d:"M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"})],-1),mt=[_t],gt={class:"py-1 px-2 border border-gray-200"},yt={class:"py-1 px-2 border border-gray-200"},ft={class:"py-1 px-2 border border-gray-200"},vt={class:"py-1 px-2 border border-gray-200"},wt={class:"py-1 px-2 border border-gray-200"},bt={class:"py-1 px-2 border border-gray-200 text-center"},xt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-7 w-7 mx-auto text-emerald-500",viewBox:"0 0 16 16"},Ct=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),kt=[Ct],Ht={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"rotate-180 h-7 w-7 mx-auto text-red-500",viewBox:"0 0 16 16"},zt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Mt=[zt],Vt={key:1,class:"py-1 px-2 border border-gray-200 text-center"},Dt={class:"flex justify-center gap-3"},At=t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Bt=["onClick"],$t=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Lt=[$t],jt=V({__name:"Departments",setup(A){const n=b([]),_=b({}),{urlQuery:d,updateUrlQuery:i}=j(),{hasPermissionTo:p,hasAnyPermission:m}=Q(),f=N().user.branches;D(()=>o(location.search));const o=async v=>{const h=await i(v),{data:w}=await H.get(`/api/departments?${h}`);n.value=w.data,_.value=w.meta},u=()=>p("Department.update")?f.length===1||d.get("branchId"):!1,B=async()=>{const{data:v}=await H.post("/api/departments/rearrange",n.value);n.value=v.data};return(v,h)=>{const w=z("router-view"),C=z("router-link"),k=q("tip");return s(),r(F,null,[c(w,{onClose:o}),c(K,null,{header:g(()=>[U("Departments")]),body:g(()=>[t("div",W,[a(p)("Department.create")?(s(),M(C,{key:0,to:"/departments/create",class:"btn-blue inline-flex items-center"},{default:g(()=>[X,Y]),_:1})):l("",!0),c(O,{onChange:o})]),t("section",Z,[t("table",tt,[t("thead",null,[t("tr",et,[u()?(s(),r("th",st,rt)):l("",!0),at,nt,lt,ct,dt,it,a(m)("Department.update","ActivityLog.list")?(s(),r("th",pt)):l("",!0)])]),c(a($),{tag:"tbody",modelValue:n.value,"onUpdate:modelValue":h[0]||(h[0]=e=>n.value=e),"item-key":"id",handle:".draggable-handle","ghost-class":"!bg-gray-300",onChange:B},{item:g(({element:e})=>[t("tr",ut,[u()?(s(),r("td",ht,mt)):l("",!0),t("td",gt,y(e.sequenceNumber),1),t("td",yt,y(e.code),1),t("td",ft,y(e.name),1),t("td",vt,y(e.description),1),t("td",wt,y(e.branch.name),1),t("td",bt,[e.isActive?(s(),r("svg",xt,kt)):(s(),r("svg",Ht,Mt))]),a(m)("Department.update","ActivityLog.list")?(s(),r("td",Vt,[t("div",Dt,[a(p)("Department.update")?x((s(),M(C,{key:0,to:`/departments/${e.id}/edit`,class:"text-orange-500 cursor-pointer"},{default:g(()=>[At]),_:2},1032,["to"])),[[k,"Edit"]]):l("",!0),a(p)("ActivityLog.list")?x((s(),r("button",{key:1,onClick:St=>a(E).emit(a(I).Show,e.id),class:"text-gray-600 cursor-pointer"},Lt,8,Bt)),[[k,"View Activities"]]):l("",!0)])])):l("",!0)])]),_:1},8,["modelValue"])])])]),_:1}),c(T,{data:_.value,onChange:h[1]||(h[1]=e=>o(`page=${e}`)),class:"mt-3"},null,8,["data"]),c(R)],64)}}});export{jt as default};
