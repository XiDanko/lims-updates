import{d as M,e as x,x as z,o as t,c as o,a as _,b as e,h as m,v as V,a0 as A,Q as b,r as k,U as B,w as h,k as I,g as i,R as C,i as c,F as L,a1 as N,t as P,a2 as S,a3 as D,T as U,Y as F,$ as T}from"./main-BgbWFIXK.js";import{M as Q}from"./Master-Bb3753-s.js";import{_ as j}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{u as E}from"./urlQueryManager-CZwFgJ7t.js";import{_ as q}from"./BranchFilter.vue_vue_type_script_setup_true_lang-Cg0zFa3A.js";import{A as K}from"./ActivityLogSidebar-DZ3mPV78.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DeMhawmc.js";const R={class:"flex flex-wrap items-center gap-2 ms-auto"},Y={class:"relative flex-1 min-w-[10rem]"},G=e("label",{class:"label"},"Name",-1),J=M({__name:"PriceListsFilter",emits:["change"],setup($,{emit:p}){const v=p,w=new URLSearchParams(location.search),a=x(""),l=x("");z(()=>{d()});const d=()=>{a.value=w.get("branchId")??"",l.value=w.get("name")??""},f=()=>{const u=`branchId=${a.value}&name=${l.value}&page=1`;v("change",u)};return(u,s)=>(t(),o("div",R,[_(q,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=n=>a.value=n),onChange:f},null,8,["modelValue"]),e("div",Y,[m(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>l.value=n),onKeyup:A(f,["enter"]),type:"text",class:"input-sm peer"},null,544),[[V,l.value]]),G])]))}}),O={class:"mb-5 flex items-start gap-1"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-4 w-4"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),X=e("span",{class:"whitespace-nowrap font-semibold"},"Create New Price List",-1),Z={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},ee={class:"w-full"},te={class:"sticky top-0 z-10 text-left"},se=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Name",-1),oe=e("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),ae=e("th",{class:"bg-gray-600 p-2 text-center font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Active",-1),re={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},ie={class:"transition even:bg-gray-100"},ne={class:"border border-gray-200 px-2 py-1"},ce={class:"flex items-center"},le={key:0,class:"ml-2 rounded bg-teal-500 px-1 text-xs text-white py-0.5"},de={class:"border border-gray-200 px-2 py-1"},ue={class:"border border-gray-200 px-2 py-1 text-center"},_e={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},he=e("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),me=[he],pe={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},ve=e("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),we=[ve],fe={key:0,class:"border border-gray-200 px-2 py-1 text-center"},ge={class:"flex items-center justify-center gap-3"},xe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-5 w-5"},[e("path",{d:"M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z"})],-1),ye=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Ce=["onClick"],be=e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),ke=[be],Le=["onClick"],Pe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Me=[Pe],Se=M({__name:"PriceLists",setup($){const p=x([]),v=x({}),{updateUrlQuery:w}=E(),{hasPermissionTo:a,hasAnyPermission:l}=U();z(()=>d(location.search));const d=async u=>{const s=await w(u),{data:n}=await b.get(`/api/price-lists?${s}`);p.value=n.data,v.value=n.meta},f=async u=>{const{isConfirmed:s}=await F.fire();s&&(await b.delete(`/api/price-lists/${u}`),T.fire(),await d(location.search))};return(u,s)=>{const n=k("router-view"),y=k("router-link"),g=B("tip");return t(),o(L,null,[_(n,{onClose:d}),_(Q,null,{header:h(()=>[I("Price Lists")]),body:h(()=>[e("div",O,[i(a)("PriceList.create")?(t(),C(y,{key:0,to:"/price-lists/create",class:"inline-flex items-center gap-1 btn-blue"},{default:h(()=>[W,X]),_:1})):c("",!0),_(J,{onChange:d})]),e("section",Z,[e("table",ee,[e("thead",null,[e("tr",te,[se,oe,ae,i(l)("PriceListItem.view","PriceList.update","PriceList.delete","ActivityLog.list")?(t(),o("th",re)):c("",!0)])]),e("tbody",null,[(t(!0),o(L,null,N(p.value,r=>(t(),o("tr",ie,[e("td",ne,[e("div",ce,[e("span",null,P(r.name),1),r.isDefault?(t(),o("span",le,"Default")):c("",!0)])]),e("td",de,P(r.branch.name),1),e("td",ue,[r.isActive?(t(),o("svg",_e,me)):(t(),o("svg",pe,we))]),i(l)("PriceListItem.view","PriceList.update","PriceList.delete","ActivityLog.list")?(t(),o("td",fe,[e("div",ge,[i(a)("PriceListItem.view")?m((t(),C(y,{key:0,to:`/price-list-items?priceListId=${r.id}`,class:"cursor-pointer text-blue-500"},{default:h(()=>[xe]),_:2},1032,["to"])),[[g,"View Items"]]):c("",!0),i(a)("PriceList.update")?m((t(),C(y,{key:1,to:`/price-lists/${r.id}/edit`,class:"cursor-pointer text-orange-500"},{default:h(()=>[ye]),_:2},1032,["to"])),[[g,"Edit"]]):c("",!0),i(a)("PriceList.delete")?m((t(),o("button",{key:2,onClick:H=>f(r.id),class:"cursor-pointer text-red-500"},ke,8,Ce)),[[g,"Delete"]]):c("",!0),i(a)("ActivityLog.list")?m((t(),o("button",{key:3,onClick:H=>i(S).emit(i(D).Show,r.id),class:"cursor-pointer text-gray-600"},Me,8,Le)),[[g,"View Activities"]]):c("",!0)])])):c("",!0)]))),256))])])])]),_:1}),_(j,{data:v.value,onChange:s[0]||(s[0]=r=>d(`page=${r}`)),class:"mt-3"},null,8,["data"]),_(K)],64)}}});export{Se as default};
