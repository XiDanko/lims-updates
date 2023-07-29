import{d as U,Y as C,g as p,u as P,x as O,Q as y,V as A,o,c as l,a as b,w as _,b as e,i as n,j as m,k as d,n as v,t as f,v as w,_ as B,m as I,h as M,F as j,a3 as T,a4 as z,T as L,a0 as N}from"./main-cee2eb24.js";import{M as D}from"./Master-e24133cb.js";import{s as F}from"./multiselect-97a39018.js";import{A as $}from"./ActivityLogSidebar-55244b79.js";import"./_plugin-vue_export-helper-c27b6911.js";const E={class:"flex items-center gap-3"},J=e("h1",null,"Jasperserver Settings",-1),H=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Q=[H],Y=["onSubmit"],q={class:"h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between"},G={key:0,class:"mb-3 flex flex-wrap items-center"},K=e("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),R={key:0,class:"ml-28 w-full text-sm text-red-500"},W={class:"mb-3 flex flex-wrap items-center"},X=e("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Base Url",-1),Z={key:0,class:"ml-28 w-full text-sm text-red-500"},ee={class:"mb-3 flex flex-wrap items-center"},se=e("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Username",-1),re={key:0,class:"ml-28 w-full text-sm text-red-500"},te={class:"mb-3 flex flex-wrap items-center"},ae=e("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Password",-1),oe={key:0,class:"ml-28 w-full text-sm text-red-500"},le={class:"mt-3 border-t-2 border-gray-200"},ne={class:"mt-3 flex items-center"},de=["disabled"],ve=U({__name:"JasperserverSettings",setup(ie){const x=C(),{hasPermissionTo:S}=L(),i=p(!1),t=p({}),h=P().user.branches,c=p(null),s=p({});O(()=>{c.value=h[0].id,g()});const g=async()=>{const{data:u}=await y.get(`/api/settings/jasperserver?branchId=${c.value}`);t.value=u.data},V=async()=>{i.value=!0;try{await y.patch("/api/settings/jasperserver",t.value),x.fetch(),N.fire()}catch(u){s.value=u.response.data.errors??{}}i.value=!1};return(u,r)=>{const k=A("tip");return o(),l(j,null,[b(D,null,{header:_(()=>[e("div",E,[J,n(S)("ActivityLog.list")?m((o(),l("button",{key:0,onClick:r[0]||(r[0]=a=>n(T).emit(n(z).Show,t.value.id)),class:"cursor-pointer"},Q)),[[k,"View Activities"]]):d("",!0)])]),body:_(()=>[e("form",{id:"form",onSubmit:M(V,["prevent"])},[e("div",q,[e("div",null,[n(h).length>1?(o(),l("div",G,[K,b(n(F),{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=a=>c.value=a),options:n(h),onSelect:g,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":s.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),s.value.hasOwnProperty("branchId")?(o(),l("p",R,f(s.value.branchId[0]),1)):d("",!0)])):d("",!0),e("div",W,[X,m(e("input",{"onUpdate:modelValue":r[2]||(r[2]=a=>t.value.baseUrl=a),class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("baseUrl")}])},null,2),[[w,t.value.baseUrl]]),s.value.hasOwnProperty("baseUrl")?(o(),l("p",Z,f(s.value.baseUrl[0]),1)):d("",!0)]),e("div",ee,[se,m(e("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>t.value.username=a),class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("username")}])},null,2),[[w,t.value.username]]),s.value.hasOwnProperty("username")?(o(),l("p",re,f(s.value.username[0]),1)):d("",!0)]),e("div",te,[ae,m(e("input",{"onUpdate:modelValue":r[4]||(r[4]=a=>t.value.password=a),type:"password",class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("password")}])},null,2),[[w,t.value.password]]),s.value.hasOwnProperty("password")?(o(),l("p",oe,f(s.value.password[0]),1)):d("",!0)])]),e("footer",le,[e("div",ne,[e("button",{class:"mr-auto btn-blue",disabled:i.value,form:"form"},[b(B,{"is-loading":i.value},{default:_(()=>[I("Save")]),_:1},8,["is-loading"])],8,de)])])])],40,Y)]),_:1}),b($)],64)}}});export{ve as default};
