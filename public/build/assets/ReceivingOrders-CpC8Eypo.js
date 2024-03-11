import{d as S,e as _,x as B,y as N,o as c,c as h,a as v,b as e,h as x,v as P,a0 as T,w as b,g as r,Q as L,r as z,U,k as A,R,i as w,F as V,a1 as H,t as f,n as F,a2 as Q,a3 as Y,T as j,$ as E}from"./main-DmoZ1fz4.js";import{M as q}from"./Master-ql31p3jM.js";import{_ as K}from"./Paginator.vue_vue_type_script_setup_true_lang-B5QeFegy.js";import{u as W}from"./urlQueryManager-DRfC3SWK.js";import{i as G}from"./index.es-CV7LqIVy.js";import{d as J}from"./datepickerPresets-DxjH1h4T.js";import{_ as X}from"./BranchFilter.vue_vue_type_script_setup_true_lang-DPeXwSCL.js";import{_ as Z}from"./InventoryFilter.vue_vue_type_script_setup_true_lang-C3Z1Rv8e.js";import{A as O}from"./ActivityLogSidebar-BgD4pgwD.js";import{u as ee,a as te}from"./printService-Dt_6MRJ2.js";import{P as I}from"./printTemplateType-BiK7zB0k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DAhRltj6.js";const se={class:"flex flex-wrap items-center gap-2 ms-auto"},oe={class:"relative flex-1 min-w-[10rem]"},ae=e("label",{class:"label"},"Number",-1),re={class:"relative flex-1 min-w-[14rem]"},ne=e("label",{class:"label"},"Date",-1),le=S({__name:"ReceivingOrdersFilter",emits:["change"],setup(D,{emit:C}){const k=C,d=new URLSearchParams(location.search),u=_(""),n=_(""),p=_(""),s=_([null,null]);B(()=>{g()});const $=N(()=>s.value[0]===null||s.value[1]===null?"":`${s.value[0]}~${s.value[1]}`),g=()=>{u.value=d.get("branchId")??"",n.value=d.get("inventoryId")??"",p.value=d.get("number")??"",d.get("dateRange")&&(s.value=d.get("dateRange").split("~"))},y=()=>{const i=`branchId=${u.value}&inventoryId=${n.value}&number=${p.value}&dateRange=${$.value}&page=1`;k("change",i)},l=()=>{const i=p.value;m(),p.value=i,y()},m=()=>{u.value="",n.value="",p.value="",s.value=[null,null]};return(i,o)=>(c(),h("div",se,[v(X,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=a=>u.value=a),onChange:y},null,8,["modelValue"]),v(Z,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),branchId:u.value,onChange:y},null,8,["modelValue","branchId"]),e("div",oe,[x(e("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>p.value=a),onKeyup:T(l,["enter"]),type:"text",class:"input-sm peer"},null,544),[[P,p.value]]),ae]),e("div",re,[v(r(G),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:r(J),value:s.value,"onUpdate:value":o[3]||(o[3]=a=>s.value=a),onChange:y,class:"w-full peer","input-class":"input-sm pt-0.5"},{"icon-calendar":b(()=>[]),_:1},8,["shortcuts","value"]),ne])]))}}),ie={class:"mb-5 flex items-start gap-1"},ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-4 w-4"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),de=e("span",{class:"whitespace-nowrap font-semibold"},"Create New Receiving Order",-1),ue={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},pe={class:"w-full"},me=e("thead",null,[e("tr",{class:"sticky top-0 z-10 text-left"},[e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"No."),e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Creator"),e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Supplier"),e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Items"),e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Date"),e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Inventory"),e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch"),e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"})])],-1),he={class:"transition even:bg-gray-100"},ve={class:"border border-gray-200 px-2 py-1"},fe={class:"border border-gray-200 px-2 py-1"},_e={class:"border border-gray-200 px-2 py-1"},ge={class:"border border-gray-200 px-2 py-1"},ye={class:"flex flex-wrap gap-1"},be={class:"inline-block rounded bg-teal-500 px-1 text-xs font-bold text-white group-hover:bg-white group-hover:text-gray-600"},we={class:"border border-gray-200 px-2 py-1"},xe={class:"border border-gray-200 px-2 py-1"},Ce={class:"border border-gray-200 px-2 py-1"},ke={class:"border border-gray-200 px-2 py-1 text-center"},$e={class:"flex items-center justify-center gap-3"},Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z"})],-1),Re=["onClick"],Ve=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),ze=[Ve],He=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ie=["onClick"],Se=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Be=[Se],Ke=S({__name:"ReceivingOrders",setup(D){const{getDefaultTemplate:C}=ee(),k=_([]),d=_({}),{updateUrlQuery:u}=W(),{hasPermissionTo:n,hasAnyPermission:p}=j(),s=_([]),$=te();B(()=>g(location.search));const g=async l=>{const m=await u(l),{data:i}=await L.get(`/api/receiving-orders?${m}`);k.value=i.data,d.value=i.meta},y=async(l,m)=>{if(s.value[l.id]===!0)return;s.value[l.id]=!0;const i=C(I.ReceivingOrder,l.branchId).printer;await $.receivingOrder(l.id,{printMode:m,printer:i,fileName:`receiving-order-${l.number}`}),E.fire(),s.value[l.id]=!1};return(l,m)=>{const i=z("router-view"),o=z("router-link"),a=U("tip");return c(),h(V,null,[v(i,{onClose:g}),v(q,null,{header:b(()=>[A("Receiving Orders")]),body:b(()=>[e("div",ie,[r(n)("ReceivingOrder.create")?(c(),R(o,{key:0,to:"/receiving-orders/create",class:"inline-flex items-center gap-1 btn-blue"},{default:b(()=>[ce,de]),_:1})):w("",!0),v(le,{onChange:g})]),e("section",ue,[e("table",pe,[me,e("tbody",null,[(c(!0),h(V,null,H(k.value,t=>(c(),h("tr",he,[e("td",ve,f(t.number),1),e("td",fe,f(t.supplier.name),1),e("td",_e,f(t.creator.name),1),e("td",ge,[e("div",ye,[(c(!0),h(V,null,H(t.receivingOrderItems,M=>(c(),h("span",be,f(M.product.name),1))),256))])]),e("td",we,f(t.date),1),e("td",xe,f(t.inventory.name),1),e("td",Ce,f(t.branch.name),1),e("td",ke,[e("div",$e,[r(n)("Stock.view")?x((c(),R(o,{key:0,to:`/stock/details?receivingOrderId=${t.id}`,class:"cursor-pointer text-blue-500 group-hover:text-white"},{default:b(()=>[Me]),_:2},1032,["to"])),[[a,"View Stock Details"]]):w("",!0),r(n)("ReceivingOrder.print")&&r(C)(r(I).ReceivingOrder,t.branchId)?x((c(),h("button",{key:1,class:F(["text-blue-500 group-hover:text-white",{"cursor-not-allowed opacity-50":s.value[t.id]}]),onClick:M=>y(t,r($).detectPrintMode(M))},ze,10,Re)),[[a,"Print"]]):w("",!0),r(n)("ReceivingOrder.update")?x((c(),R(o,{key:2,to:`/receiving-orders/${t.id}/edit`,class:"cursor-pointer text-orange-500"},{default:b(()=>[He]),_:2},1032,["to"])),[[a,"Edit"]]):w("",!0),r(n)("ActivityLog.list")?x((c(),h("button",{key:3,onClick:M=>r(Q).emit(r(Y).Show,t.id),class:"cursor-pointer text-gray-600"},Be,8,Ie)),[[a,"View Activities"]]):w("",!0)])])]))),256))])])])]),_:1}),v(K,{data:d.value,onChange:m[0]||(m[0]=t=>g(`page=${t}`)),class:"mt-3"},null,8,["data"]),v(O)],64)}}});export{Ke as default};