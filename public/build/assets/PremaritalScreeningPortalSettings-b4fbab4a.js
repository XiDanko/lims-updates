import{d as P,Y as T,g as m,u as C,x as U,Q as y,V as A,o as l,c as n,a as d,w as v,b as e,i as o,j as f,k as i,n as h,t as _,v as w,_ as B,m as I,h as M,F as O,a3 as z,a4 as L,T as N,a0 as D}from"./main-bf2af1c2.js";import{M as E}from"./Master-fd48b992.js";import{b as F}from"./toggle-1b27a25d.js";import{s as $}from"./multiselect-4f06085e.js";import{A as j}from"./ActivityLogSidebar-27791482.js";import"./_plugin-vue_export-helper-c27b6911.js";const H={class:"flex items-center gap-3"},Q=e("h1",null,"Premarital Portal Settings",-1),Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),q=[Y],G=["onSubmit"],J={class:"h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between"},K={key:0,class:"mb-3 flex flex-wrap items-center"},R=e("span",{class:"w-52 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),W={key:0,class:"ml-52 w-full text-sm text-red-500"},X={class:"mb-3 flex flex-wrap items-center"},Z=e("span",{class:"w-52 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Enabled",-1),ee={class:"mb-3 flex flex-wrap items-center"},se=e("span",{class:"w-52 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Base Url",-1),re={key:0,class:"ml-52 w-full text-sm text-red-500"},te={class:"mb-3 flex flex-wrap items-center"},ae=e("span",{class:"w-52 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Access Token",-1),oe={key:0,class:"ml-52 w-full text-sm text-red-500"},le={class:"mt-3 border-t-2 border-gray-200"},ne={class:"mt-3 flex items-center"},de=["disabled"],fe=P({__name:"PremaritalScreeningPortalSettings",setup(ie){const x=T(),{hasPermissionTo:S}=N(),c=m(!1),t=m({}),p=C().user.branches,u=m(null),s=m({});U(()=>{u.value=p[0].id,g()});const g=async()=>{const{data:b}=await y.get(`/api/settings/premarital-screening-portal?branchId=${u.value}`);t.value=b.data},V=async()=>{c.value=!0;try{await y.patch("/api/settings/premarital-screening-portal",t.value),x.fetch(),s.value={},D.fire()}catch(b){s.value=b.response.data.errors??{}}c.value=!1};return(b,r)=>{const k=A("tip");return l(),n(O,null,[d(E,null,{header:v(()=>[e("div",H,[Q,o(S)("ActivityLog.list")?f((l(),n("button",{key:0,onClick:r[0]||(r[0]=a=>o(z).emit(o(L).Show,t.value.id)),class:"cursor-pointer"},q)),[[k,"View Activities"]]):i("",!0)])]),body:v(()=>[e("form",{id:"form",onSubmit:M(V,["prevent"])},[e("div",J,[e("div",null,[o(p).length>1?(l(),n("div",K,[R,d(o($),{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=a=>u.value=a),options:o(p),onSelect:g,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:h(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":s.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),s.value.hasOwnProperty("branchId")?(l(),n("p",W,_(s.value.branchId[0]),1)):i("",!0)])):i("",!0),e("div",X,[Z,d(o(F),{modelValue:t.value.enabled,"onUpdate:modelValue":r[2]||(r[2]=a=>t.value.enabled=a),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])]),e("div",ee,[se,f(e("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>t.value.baseUrl=a),class:h(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("baseUrl")}])},null,2),[[w,t.value.baseUrl]]),s.value.hasOwnProperty("baseUrl")?(l(),n("p",re,_(s.value.baseUrl[0]),1)):i("",!0)]),e("div",te,[ae,f(e("input",{"onUpdate:modelValue":r[4]||(r[4]=a=>t.value.accessToken=a),class:h(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("accessToken")}])},null,2),[[w,t.value.accessToken]]),s.value.hasOwnProperty("accessToken")?(l(),n("p",oe,_(s.value.accessToken[0]),1)):i("",!0)])]),e("footer",le,[e("div",ne,[e("button",{class:"mr-auto btn-blue",disabled:c.value,form:"form"},[d(B,{"is-loading":c.value},{default:v(()=>[I("Save")]),_:1},8,["is-loading"])],8,de)])])])],40,G)]),_:1}),d(j)],64)}}});export{fe as default};
