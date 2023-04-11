import{d as S,e as v,x as A,o as e,c as o,a as d,h as f,v as z,b as t,z as B,A as $,r as b,B as M,w as y,k as H,g as i,C,i as _,F as k,D as L,t as g,E as T,G as N,H as q}from"./main-c1f62c61.js";import{M as F}from"./Master-77a73046.js";import{_ as U}from"./Paginator.vue_vue_type_script_setup_true_lang-ba67665d.js";import{u as D}from"./urlQueryManager-3fafa3c6.js";import{_ as E}from"./BranchFilter.vue_vue_type_script_setup_true_lang-16fdce62.js";import{A as I}from"./ActivityLogSidebar-b98cd311.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-ffe70d49.js";const K={class:"flex gap-2 items-center ml-auto"},P=["onKeyup"],Q=S({__name:"SampleTypesFilter",emits:["change"],setup(V,{emit:h}){const p=new URLSearchParams(location.search),c=v(""),a=v("");A(()=>{m()});const m=()=>{c.value=p.get("branchId")??"",a.value=p.get("q")??""},l=()=>{const u=`branchId=${c.value}&q=${a.value}&page=1`;h("change",u)};return(u,s)=>(e(),o("div",K,[d(E,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=r=>c.value=r),onChange:l},null,8,["modelValue"]),f(t("input",{"onUpdate:modelValue":s[1]||(s[1]=r=>a.value=r),onKeyup:B(l,["enter"]),type:"text",placeholder:"Name or code",class:"p-1.5 w-56 border border-gray-300 rounded focus:border-blue-500"},null,40,P),[[z,a.value]])]))}}),j={class:"flex items-center mb-5"},G=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-4 h-4 mr-1"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),R=t("span",{class:"font-semibold"},"Create New Sample Type",-1),J={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},O={class:"w-full"},W={class:"sticky top-0 z-10 text-left"},X=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Code",-1),Y=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Name",-1),Z=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch",-1),tt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr text-center"},"Active",-1),et={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},st={class:"transition even:bg-gray-100"},ot={class:"py-1 px-2 border border-gray-200"},at={class:"py-1 px-2 border border-gray-200"},rt={class:"py-1 px-2 border border-gray-200"},nt={class:"py-1 px-2 border border-gray-200 text-center"},lt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-7 w-7 mx-auto text-emerald-500",viewBox:"0 0 16 16"},it=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),ct=[it],dt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"rotate-180 h-7 w-7 mx-auto text-red-500",viewBox:"0 0 16 16"},pt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),ut=[pt],_t={key:0,class:"py-1 px-2 border border-gray-200 text-center"},ht={class:"flex justify-center gap-3"},mt=t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),yt=["onClick"],vt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),gt=[vt],zt=S({__name:"SampleTypes",setup(V){const h=v([]),p=v({}),{updateUrlQuery:c}=D(),{hasPermissionTo:a,hasAnyPermission:m}=q();A(()=>l(location.search));const l=async u=>{const s=await c(u),{data:r}=await $.get(`/api/sample-types?${s}`);h.value=r.data,p.value=r.meta};return(u,s)=>{const r=b("router-view"),w=b("router-link"),x=M("tip");return e(),o(k,null,[d(r,{onClose:l}),d(F,null,{header:y(()=>[H("Sample Types")]),body:y(()=>[t("div",j,[i(a)("SampleType.create")?(e(),C(w,{key:0,to:"/sample-types/create",class:"btn-blue inline-flex items-center"},{default:y(()=>[G,R]),_:1})):_("",!0),d(Q,{onChange:l})]),t("section",J,[t("table",O,[t("thead",null,[t("tr",W,[X,Y,Z,tt,i(m)("SampleType.update","ActivityLog.list")?(e(),o("th",et)):_("",!0)])]),t("tbody",null,[(e(!0),o(k,null,L(h.value,n=>(e(),o("tr",st,[t("td",ot,g(n.code),1),t("td",at,g(n.name),1),t("td",rt,g(n.branch.name),1),t("td",nt,[n.isActive?(e(),o("svg",lt,ct)):(e(),o("svg",dt,ut))]),i(m)("SampleType.update","ActivityLog.list")?(e(),o("td",_t,[t("div",ht,[i(a)("SampleType.update")?f((e(),C(w,{key:0,to:`/sample-types/${n.id}/edit`,class:"text-orange-500 cursor-pointer"},{default:y(()=>[mt]),_:2},1032,["to"])),[[x,"Edit"]]):_("",!0),i(a)("ActivityLog.list")?f((e(),o("button",{key:1,onClick:ft=>i(T).emit(i(N).Show,n.id),class:"text-gray-600 cursor-pointer"},gt,8,yt)),[[x,"View Activities"]]):_("",!0)])])):_("",!0)]))),256))])])])]),_:1}),d(U,{data:p.value,onChange:s[0]||(s[0]=n=>l(`page=${n}`)),class:"mt-3"},null,8,["data"]),d(I)],64)}}});export{zt as default};
