import{d as L,g as y,x as N,Q as F,o as s,c as a,a as C,i as o,R as $,k as n,w,b as e,t as c,T as P,r as B,V as D,m as E,F as S,a2 as Q,j as A,a3 as q,a4 as G,Z as O,a0 as Y}from"./main-bf2af1c2.js";import{M as Z}from"./Master-fd48b992.js";import{s as T}from"./multiselect-4f06085e.js";import{_ as J}from"./BranchFilter.vue_vue_type_script_setup_true_lang-7984eace.js";import{_ as K}from"./Paginator.vue_vue_type_script_setup_true_lang-ae9d2a51.js";import{u as W}from"./urlQueryManager-97734f58.js";import{R as v}from"./rangeType-b75ca402.js";import{A as X}from"./ActivityLogSidebar-27791482.js";import"./_plugin-vue_export-helper-c27b6911.js";const ee={class:"ml-auto flex items-center gap-2"},te={class:"truncate"},se={class:"truncate"},oe=L({__name:"ReferenceRangesFilter",emits:["change"],setup(z,{emit:M}){const g=new URLSearchParams(location.search),{hasPermissionTo:f}=P(),l=y(""),b=y(""),p=y(""),x=y(""),d=y([]),m=y([]),h=y([]);N(()=>{_(),u()});const _=()=>{l.value=g.get("branchId")??"",b.value=g.get("machineId")??"",p.value=g.get("testId")??"",x.value=g.get("parameterId")??""},u=()=>{t(),V(),r()},r=async()=>{if(!f("Machine.list"))return;const{data:i}=await F.get(`/api/machines/list?branchId=${l.value}`);d.value=i.data},t=async()=>{if(!f("Test.list"))return;const{data:i}=await F.get(`/api/tests/list?branchId=${l.value}`);m.value=i.data},V=async()=>{if(!f("Parameter.list"))return;const{data:i}=await F.get(`/api/parameters/list?branchId=${l.value}`);h.value=i.data},H=i=>{b.value=i??"",I()},U=i=>{p.value=i??"",I()},j=i=>{x.value=i??"",I()},I=()=>{const i=`branchId=${l.value}&machineId=${b.value}&testId=${p.value}&parameterId=${x.value}&page=1`;M("change",i)};return(i,R)=>(s(),a("div",ee,[C(J,{modelValue:l.value,"onUpdate:modelValue":R[0]||(R[0]=k=>l.value=k),onChange:R[1]||(R[1]=k=>{I(),u()})},null,8,["modelValue"]),o(f)("Machine.list")?(s(),$(o(T),{key:0,"model-value":b.value,options:d.value,"value-prop":"id","track-by":"searchableForm",label:"name",searchable:!0,placeholder:"Select machine",onChange:H,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):n("",!0),o(f)("Test.list")?(s(),$(o(T),{key:1,"model-value":p.value,options:m.value,"value-prop":"id","track-by":"searchableForm",searchable:!0,label:"shortForm",placeholder:"Select test",onChange:U,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},{option:w(({option:k})=>[e("span",te,c(k.shortForm),1)]),_:1},8,["model-value","options"])):n("",!0),o(f)("Parameter.list")?(s(),$(o(T),{key:2,"model-value":x.value,options:h.value,"value-prop":"id","track-by":"searchableForm",label:"shortForm",searchable:!0,placeholder:"Select parameter",onChange:j,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},{option:w(({option:k})=>[e("span",se,c(k.shortForm),1)]),_:1},8,["model-value","options"])):n("",!0)]))}}),ae={class:"mb-5 flex items-center"},re=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),ne=e("span",{class:"font-semibold"},"Create New Reference Range",-1),ie={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},le={class:"w-full"},ce={class:"sticky top-0 z-10 text-left"},de=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Test",-1),he=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Parameter",-1),ue=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Machine",-1),pe=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Gender",-1),me=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Age",-1),_e=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Fasting",-1),ye=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Menses",-1),fe=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Ranges",-1),ve=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),ge={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},be={class:"transition even:bg-gray-100"},we={class:"border border-gray-200 px-2 py-1"},xe={class:"border border-gray-200 px-2 py-1"},ke={class:"border border-gray-200 px-2 py-1"},Ce={class:"border border-gray-200 px-2 py-1"},$e={class:"border border-gray-200 px-2 py-1"},Fe={class:"border border-gray-200 px-2 py-1"},Me={key:0},Ie={key:1},Re={class:"border border-gray-200 px-2 py-1"},Ae={key:0},Ve={key:1},Te={class:"border border-gray-200 px-2 py-1"},Be={key:0,class:"text-emerald-500"},Se={key:1,class:"mx-2 last-of-type:hidden"},Le={key:2,class:"text-orange-500"},Ne={key:3,class:"mx-2 last-of-type:hidden"},Pe={key:4,class:"text-red-500"},ze={class:"border border-gray-200 px-2 py-1"},He={key:0,class:"border border-gray-200 px-2 py-1 text-center"},Ue={class:"flex items-center justify-center gap-3"},je=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),De=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ee=["onClick"],Qe=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),qe=[Qe],Ge=["onClick"],Oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Ye=[Oe],at=L({__name:"ReferenceRanges",setup(z){const M=y([]),g=y({}),{updateUrlQuery:f}=W(),{hasPermissionTo:l,hasAnyPermission:b}=P();N(()=>p(location.search));const p=async m=>{const h=await f(m),{data:_}=await F.get(`/api/reference-ranges?${h}`);M.value=_.data,g.value=_.meta},x=async m=>{const{isConfirmed:h}=await O.fire();h&&(await F.delete(`/api/reference-ranges/${m}`),Y.fire(),await p(location.search))},d=(m,h)=>{const _=m.ranges.filter(r=>r.type===h);if(_.length===0)return null;let u="";return _.forEach((r,t)=>{t>0&&(u+=" , "),r.operator==="<>"?u+=`${r.value} ${r.interpretation}`:u+=`${r.operator} ${r.value} ${r.interpretation}`}),u};return(m,h)=>{const _=B("router-view"),u=B("router-link"),r=D("tip");return s(),a(S,null,[C(_,{onClose:p}),C(Z,null,{header:w(()=>[E("Reference Ranges")]),body:w(()=>[e("div",ae,[o(l)("ReferenceRange.create")?(s(),$(u,{key:0,to:"/reference-ranges/create",class:"inline-flex items-center btn-blue"},{default:w(()=>[re,ne]),_:1})):n("",!0),C(oe,{onChange:p})]),e("section",ie,[e("table",le,[e("thead",null,[e("tr",ce,[de,he,ue,pe,me,_e,ye,fe,ve,o(b)("ReferenceRange.create","ReferenceRange.update","ReferenceRange.delete","ActivityLog.list")?(s(),a("th",ge)):n("",!0)])]),e("tbody",null,[(s(!0),a(S,null,Q(M.value,t=>(s(),a("tr",be,[e("td",we,c(t.test.shortForm),1),e("td",xe,c(t.parameter.shortForm),1),e("td",ke,c(t.machine.name),1),e("td",Ce,c(t.gender.capitalize()),1),e("td",$e,c(`${t.ageFrom} - ${t.ageTo}`),1),e("td",Fe,[t.isFasting!==null?(s(),a("span",Me,c(t.isFasting?"Yes":"No"),1)):(s(),a("span",Ie,"Undefined"))]),e("td",Re,[t.mensesFrom?(s(),a("span",Ae,c(`${t.mensesFrom} - ${t.mensesTo} days ${t.mensesDuration} menses`),1)):(s(),a("span",Ve,"Undefined"))]),e("td",Te,[d(t,o(v).Normal)?(s(),a("span",Be,c(d(t,o(v).Normal)),1)):n("",!0),d(t,o(v).Normal)?(s(),a("span",Se,"||")):n("",!0),d(t,o(v).Abnormal)?(s(),a("span",Le,c(d(t,o(v).Abnormal)),1)):n("",!0),d(t,o(v).Abnormal)?(s(),a("span",Ne,"||")):n("",!0),d(t,o(v).Critical)?(s(),a("span",Pe,c(d(t,o(v).Critical)),1)):n("",!0)]),e("td",ze,c(t.branch.name),1),o(b)("ReferenceRange.create","ReferenceRange.update","ReferenceRange.delete","ActivityLog.list")?(s(),a("td",He,[e("div",Ue,[o(l)("ReferenceRange.create")?A((s(),$(u,{key:0,to:`/reference-ranges/${t.id}/clone`,class:"cursor-pointer text-blue-500"},{default:w(()=>[je]),_:2},1032,["to"])),[[r,"Clone"]]):n("",!0),o(l)("ReferenceRange.update")?A((s(),$(u,{key:1,to:`/reference-ranges/${t.id}/edit`,class:"cursor-pointer text-orange-500"},{default:w(()=>[De]),_:2},1032,["to"])),[[r,"Edit"]]):n("",!0),o(l)("ReferenceRange.delete")?A((s(),a("button",{key:2,onClick:V=>x(t.id),class:"cursor-pointer text-red-500"},qe,8,Ee)),[[r,"Delete"]]):n("",!0),o(l)("ActivityLog.list")?A((s(),a("button",{key:3,onClick:V=>o(q).emit(o(G).Show,t.id),class:"cursor-pointer text-gray-600"},Ye,8,Ge)),[[r,"View Activities"]]):n("",!0)])])):n("",!0)]))),256))])])])]),_:1}),C(K,{data:g.value,onChange:h[0]||(h[0]=t=>p(`page=${t}`)),class:"mt-3"},null,8,["data"]),C(X)],64)}}});export{at as default};
