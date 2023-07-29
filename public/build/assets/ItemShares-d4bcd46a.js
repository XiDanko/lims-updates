import{d as M,g as m,x as P,Q as $,o as s,c,a as f,i as o,R as S,k as h,j as w,W as B,b as e,v as H,a1 as N,T,r as V,V as z,w as C,m as F,F as A,a2 as U,t as b,a3 as q,a4 as Q,Z as j,a0 as D}from"./main-cee2eb24.js";import{M as E}from"./Master-e24133cb.js";import{_ as K}from"./Paginator.vue_vue_type_script_setup_true_lang-fc9e564e.js";import{u as R}from"./urlQueryManager-ab4c0999.js";import{s as W}from"./multiselect-97a39018.js";import{_ as Z}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d1bfbfa5.js";import{I}from"./itemType-8f96b3f7.js";import{A as G}from"./ActivityLogSidebar-55244b79.js";import"./_plugin-vue_export-helper-c27b6911.js";const J={class:"ml-auto flex items-center gap-2"},O=e("option",{value:"",selected:""},"Select type",-1),X=["value"],Y=["value"],ee=["value"],te=["onKeyup"],oe=M({__name:"ItemSharesFilter",emits:["change"],setup(L,{emit:x}){const d=new URLSearchParams(location.search),{hasPermissionTo:u}=T(),l=m(""),g=m(""),_=m(""),r=m(""),k=m([]);P(()=>{v(),n()});const v=()=>{l.value=d.get("branchId")??"",g.value=d.get("q")??"",r.value=d.get("partnerId")??"",_.value=d.get("type")??""},n=async()=>{if(!u("Partner.list"))return;const{data:a}=await $.get(`/api/partners/list?branchId=${l.value}`);k.value=a.data},y=a=>{r.value=a??"",p()},p=()=>{const a=`branchId=${l.value}&q=${g.value}&partnerId=${r.value}&type=${_.value}&page=1`;x("change",a)};return(a,t)=>(s(),c("div",J,[f(Z,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=i=>l.value=i),onChange:t[1]||(t[1]=i=>{p(),n()})},null,8,["modelValue"]),o(u)("Partner.list")?(s(),S(o(W),{key:0,"model-value":r.value,options:k.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select partner",onChange:y,class:"w-56 min-h-[38px] border border-gray-300 !rounded focus:border-blue-500"},null,8,["model-value","options"])):h("",!0),w(e("select",{"onUpdate:modelValue":t[2]||(t[2]=i=>_.value=i),onChange:p,class:"px-2 h-[38px] border border-gray-300 !rounded"},[O,e("option",{value:o(I).Test},"Test",8,X),e("option",{value:o(I).Package},"Package",8,Y),e("option",{value:o(I).Service},"Service",8,ee)],544),[[B,_.value]]),w(e("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>g.value=i),onKeyup:N(p,["enter"]),type:"text",placeholder:"Name, short form or code",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,te),[[H,g.value]])]))}}),se={class:"mb-5 flex items-center"},re=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"mr-1 h-4 w-4"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),ae=e("span",{class:"font-semibold"},"Create New Item Share",-1),ne={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},le={class:"w-full"},ie={class:"sticky top-0 z-10 text-left"},ce=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Partner",-1),de=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Item Type",-1),ue=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Item Name",-1),pe=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Amount",-1),he=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),me={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},_e={class:"transition even:bg-gray-100"},ve={class:"border border-gray-200 px-2 py-1"},ye={class:"border border-gray-200 px-2 py-1"},fe={class:"border border-gray-200 px-2 py-1"},ge={class:"border border-gray-200 px-2 py-1"},be={class:"border border-gray-200 px-2 py-1"},we={key:0,class:"border border-gray-200 px-2 py-1 text-center"},xe={class:"flex items-center justify-center gap-3"},ke=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ce=["onClick"],Ie=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),$e=[Ie],Se=["onClick"],Ve=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Ae=[Ve],Ue=M({__name:"ItemShares",setup(L){const x=m([]),d=m({}),{hasPermissionTo:u,hasAnyPermission:l}=T(),{urlQuery:g,updateUrlQuery:_}=R();P(()=>r(location.search));const r=async v=>{const n=await _(v),{data:y}=await $.get(`/api/item-shares?${n}`);x.value=y.data,d.value=y.meta},k=async v=>{const{isConfirmed:n}=await j.fire();n&&(await $.delete(`/api/item-shares/${v}`),D.fire(),await r(location.search))};return(v,n)=>{const y=V("router-view"),p=V("router-link"),a=z("tip");return s(),c(A,null,[f(y,{onClose:r}),f(E,null,{header:C(()=>[F("Item Shares")]),body:C(()=>[e("div",se,[o(u)("ItemShare.create")?(s(),S(p,{key:0,to:"item-shares/create",class:"inline-flex items-center btn-blue"},{default:C(()=>[re,ae]),_:1})):h("",!0),f(oe,{onChange:r})]),e("section",ne,[e("table",le,[e("thead",null,[e("tr",ie,[ce,de,ue,pe,he,o(l)("ItemShare.update","ItemShare.delete","ActivityLog.list")?(s(),c("th",me)):h("",!0)])]),e("tbody",null,[(s(!0),c(A,null,U(x.value,t=>(s(),c("tr",_e,[e("td",ve,b(t.partner.name),1),e("td",ye,b(t.itemType),1),e("td",fe,b(t.item.shortForm??t.item.name),1),e("td",ge,b(t.amount?.toLocaleString()),1),e("td",be,b(t.branch.name),1),o(l)("ItemShare.update","ItemShare.delete","ActivityLog.list")?(s(),c("td",we,[e("div",xe,[o(u)("ItemShare.update")?w((s(),S(p,{key:0,to:`/item-shares/${t.id}/edit`,class:"cursor-pointer text-orange-500"},{default:C(()=>[ke]),_:2},1032,["to"])),[[a,"Edit"]]):h("",!0),o(u)("ItemShare.delete")?w((s(),c("button",{key:1,onClick:i=>k(t.id),class:"cursor-pointer text-red-500"},$e,8,Ce)),[[a,"Delete"]]):h("",!0),o(u)("ActivityLog.list")?w((s(),c("button",{key:2,onClick:i=>o(q).emit(o(Q).Show,t.id),class:"cursor-pointer text-gray-600"},Ae,8,Se)),[[a,"View Activities"]]):h("",!0)])])):h("",!0)]))),256))])])])]),_:1}),f(K,{data:d.value,onChange:n[0]||(n[0]=t=>r(`page=${t}`)),class:"mt-3"},null,8,["data"]),f(G)],64)}}});export{Ue as default};
