import{d as P,g as b,x as z,Q as M,o as s,c as d,a as f,i as e,R as T,w as C,b as t,t as i,k as c,j as H,W as S,v as A,a1 as B,T as F,f as L,u as I,r as V,V as R,m as q,F as U,a3 as E,a4 as Q}from"./main-5548143a.js";import{M as j}from"./Master-c8d301f4.js";import{_ as D}from"./Paginator.vue_vue_type_script_setup_true_lang-d513ffa5.js";import{u as K}from"./urlQueryManager-a6ec7c9d.js";import{s as W}from"./multiselect-30de6652.js";import{_ as G}from"./BranchFilter.vue_vue_type_script_setup_true_lang-9c1eb286.js";import{R as y}from"./resultType-be0237ab.js";import{A as J}from"./ActivityLogSidebar-c5c8518d.js";import{d as O}from"./vuedraggable.umd-a0038931.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./vue.runtime.esm-bundler-6c33dc5c.js";const X={class:"ml-auto flex items-center gap-2"},Y={class:"truncate"},Z=t("option",{value:""},"Result type",-1),tt=["value"],et=["value"],ot=["value"],st=["value"],rt=["value"],at=["value"],nt=["value"],lt=["onKeyup"],dt=P({__name:"ParametersFilter",emits:["change"],setup(N,{emit:u}){const p=new URLSearchParams(location.search),{hasPermissionTo:h}=F(),_=b(""),m=b(""),g=b(""),w=b(""),v=b([]);z(()=>{k(),$()});const k=()=>{_.value=p.get("q")??"",m.value=p.get("resultType")??"",w.value=p.get("testId")??"",g.value=p.get("branchId")??""},$=async()=>{if(!h("Test.list"))return;const{data:a}=await M.get(`/api/tests/list?branchId=${g.value}`);v.value=a.data},x=a=>{w.value=a??"",r()},r=()=>{const a=`branchId=${g.value}&testId=${w.value}&resultType=${m.value}&q=${_.value}&page=1`;u("change",a)};return(a,n)=>(s(),d("div",X,[f(G,{modelValue:g.value,"onUpdate:modelValue":n[0]||(n[0]=l=>g.value=l),onChange:n[1]||(n[1]=l=>{r(),$()})},null,8,["modelValue"]),e(h)("Test.list")?(s(),T(e(W),{key:0,"model-value":w.value,options:v.value,"value-prop":"id","track-by":"searchableForm",label:"shortForm",searchable:!0,placeholder:"Select test",onChange:x,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},{option:C(({option:l})=>[t("span",Y,i(l.shortForm),1)]),_:1},8,["model-value","options"])):c("",!0),H(t("select",{"onUpdate:modelValue":n[2]||(n[2]=l=>m.value=l),onChange:r,class:"px-2 h-[38px] border border-gray-300 !rounded"},[Z,t("option",{value:e(y).NegativePositive},"N/P",8,tt),t("option",{value:e(y).Numeric},"Numeric",8,et),t("option",{value:e(y).Text},"Text",8,ot),t("option",{value:e(y).Multiline},"Multiline",8,st),t("option",{value:e(y).List},"List",8,rt),t("option",{value:e(y).Formula},"Formula",8,at),t("option",{value:e(y).Editor},"Editor",8,nt)],544),[[S,m.value]]),H(t("input",{"onUpdate:modelValue":n[3]||(n[3]=l=>_.value=l),onKeyup:B(r,["enter"]),type:"text",placeholder:"Name, short form or code",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,lt),[[A,_.value]])]))}}),it={class:"mb-5 flex items-center"},ct=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),ut=t("span",{class:"font-semibold"},"Create New Parameter",-1),pt={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},ht={class:"w-full"},_t={class:"sticky top-0 z-10 text-left"},mt={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},gt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-4 w-4 rotate-90"},[t("path",{d:"M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"})],-1),vt=[gt],yt=t("th",{class:"whitespace-nowrap first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Seq. No.",-1),ft=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Code",-1),bt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),wt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Short Form",-1),xt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Heading",-1),Ct=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Result Type",-1),kt=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Test",-1),$t=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),Ht=t("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 text-center font-semibold text-white"},"Active",-1),Mt={key:1,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},Tt={class:"transition even:bg-gray-100"},Vt={key:0,class:"border border-gray-200 p-2"},Pt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mx-auto h-5 w-5 draggable-handle hover:cursor-move"},[t("path",{d:"M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"})],-1),zt=[Pt],Ft={class:"border border-gray-200 px-2 py-1"},Nt={class:"border border-gray-200 px-2 py-1"},St={class:"border border-gray-200 px-2 py-1"},At={class:"border border-gray-200 px-2 py-1"},Bt={class:"border border-gray-200 px-2 py-1"},Lt={class:"border border-gray-200 px-2 py-1"},It={class:"border border-gray-200 px-2 py-1"},Rt={class:"border border-gray-200 px-2 py-1"},qt={class:"border border-gray-200 px-2 py-1 text-center"},Ut={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},Et=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Qt=[Et],jt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},Dt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Kt=[Dt],Wt={key:1,class:"border border-gray-200 px-2 py-1 text-center"},Gt={class:"flex items-center justify-center gap-3"},Jt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ot=["onClick"],Xt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Yt=[Xt],ue=P({__name:"Parameters",setup(N){const u=b([]),p=b({}),{hasPermissionTo:h,hasAnyPermission:_}=F(),{urlQuery:m,updateUrlQuery:g}=K();L();const w=I().user.branches;z(()=>v(location.search));const v=async x=>{const r=await g(x),{data:a}=await M.get(`/api/parameters?${r}`);u.value=a.data,p.value=a.meta},k=()=>!h("Parameter.update")||!m.get("testId")?!1:w.length===1||m.get("branchId"),$=async()=>{const{data:x}=await M.post("/api/parameters/rearrange",u.value);u.value=x.data};return(x,r)=>{const a=V("router-view"),n=V("router-link"),l=R("tip");return s(),d(U,null,[f(a,{onClose:v}),f(j,null,{header:C(()=>[q("Parameters")]),body:C(()=>[t("div",it,[e(h)("Parameter.create")?(s(),T(n,{key:0,to:"/parameters/create",class:"inline-flex items-center btn-blue"},{default:C(()=>[ct,ut]),_:1})):c("",!0),f(dt,{onChange:v})]),t("section",pt,[t("table",ht,[t("thead",null,[t("tr",_t,[k()?(s(),d("th",mt,vt)):c("",!0),yt,ft,bt,wt,xt,Ct,kt,$t,Ht,e(_)("Parameter.update","ActivityLog.list")?(s(),d("th",Mt)):c("",!0)])]),f(e(O),{tag:"tbody",modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=o=>u.value=o),"item-key":"id",handle:".draggable-handle","ghost-class":"!bg-gray-300",onChange:$},{item:C(({element:o})=>[t("tr",Tt,[k()?(s(),d("td",Vt,zt)):c("",!0),t("td",Ft,i(o.sequenceNumber),1),t("td",Nt,i(o.code),1),t("td",St,i(o.name),1),t("td",At,i(o.shortForm),1),t("td",Bt,i(o.heading),1),t("td",Lt,i(o.resultType),1),t("td",It,i(o.test.shortForm),1),t("td",Rt,i(o.branch.name),1),t("td",qt,[o.isActive?(s(),d("svg",Ut,Qt)):(s(),d("svg",jt,Kt))]),e(_)("Parameter.update","ActivityLog.list")?(s(),d("td",Wt,[t("div",Gt,[e(h)("Parameter.update")?H((s(),T(n,{key:0,to:`/parameters/${o.id}/edit`,class:"cursor-pointer text-orange-500"},{default:C(()=>[Jt]),_:2},1032,["to"])),[[l,"Edit"]]):c("",!0),e(h)("ActivityLog.list")?H((s(),d("button",{key:1,onClick:Zt=>e(E).emit(e(Q).Show,o.id),class:"cursor-pointer text-gray-600"},Yt,8,Ot)),[[l,"View Activities"]]):c("",!0)])])):c("",!0)])]),_:1},8,["modelValue"])])])]),_:1}),f(D,{data:p.value,onChange:r[1]||(r[1]=o=>v(`page=${o}`)),class:"mt-3"},null,8,["data"]),f(J)],64)}}});export{ue as default};