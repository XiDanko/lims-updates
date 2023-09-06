import{d as P,Y as O,g as h,u as C,x as E,Q as w,V as R,o,c as l,a as c,w as _,b as e,i as d,j as i,k as n,n as p,t as u,v as f,X as x,_ as I,m as U,h as A,F as B,a3 as M,a4 as z,T as L,a0 as N}from"./main-5548143a.js";import{M as D}from"./Master-c8d301f4.js";import{s as F}from"./multiselect-30de6652.js";import{A as H}from"./ActivityLogSidebar-c5c8518d.js";import{b as $}from"./toggle-af3738b3.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"flex items-center gap-3"},Q=e("h1",null,"His Integration Settings",-1),X=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Y=[X],q=["onSubmit"],G={class:"h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between"},J={key:0,class:"mb-3 flex flex-wrap items-center"},K=e("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),W={key:0,class:"ml-40 w-full text-sm text-red-500"},Z={class:"mb-3 flex flex-wrap items-center"},ee=e("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Send Results",-1),se={key:1,class:"mb-3 flex flex-wrap items-center"},te=e("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Results Endpoint",-1),re={key:0,class:"ml-40 w-full text-sm text-red-500"},ae={key:2,class:"mb-3 flex flex-wrap items-center"},oe=e("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Authentication Type",-1),le={class:"flex flex-1 items-center rounded-r border border-gray-300 p-2"},ne={class:"mr-5 flex items-center"},de=e("span",{class:"ml-1"},"Basic",-1),ie={class:"mr-5 flex items-center"},ue=e("span",{class:"ml-1"},"Bearer",-1),ce={key:0,class:"ml-40 w-full text-sm text-red-500"},pe={key:3,class:"mb-3 flex flex-wrap items-center"},be=e("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Username",-1),me={key:0,class:"ml-40 w-full text-sm text-red-500"},ve={key:4,class:"mb-3 flex flex-wrap items-center"},he=e("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Password",-1),fe={key:0,class:"ml-40 w-full text-sm text-red-500"},ye={key:5,class:"mb-3 flex flex-wrap items-center"},_e=e("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Token",-1),ge={key:0,class:"ml-40 w-full text-sm text-red-500"},we={class:"mt-3 border-t-2 border-gray-200"},xe={class:"mt-3 flex items-center"},ke=["disabled"],Re=P({__name:"HisIntegrationSettings",setup(Ve){const k=O(),{hasPermissionTo:V}=L(),b=h(!1),s=h({}),y=C().user.branches,m=h(null),t=h({});E(()=>{m.value=y[0].id,g()});const g=async()=>{const{data:v}=await w.get(`/api/settings/his-integration?branchId=${m.value}`);s.value=v.data},S=async()=>{b.value=!0;try{await w.patch("/api/settings/his-integration",s.value),k.fetch(),t.value={},N.fire()}catch(v){t.value=v.response.data.errors??{}}b.value=!1};return(v,r)=>{const T=R("tip");return o(),l(B,null,[c(D,null,{header:_(()=>[e("div",j,[Q,d(V)("ActivityLog.list")?i((o(),l("button",{key:0,onClick:r[0]||(r[0]=a=>d(M).emit(d(z).Show,s.value.id)),class:"cursor-pointer"},Y)),[[T,"View Activities"]]):n("",!0)])]),body:_(()=>[e("form",{id:"form",onSubmit:A(S,["prevent"])},[e("div",G,[e("div",null,[d(y).length>1?(o(),l("div",J,[K,c(d(F),{modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=a=>m.value=a),options:d(y),onSelect:g,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:p(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),t.value.hasOwnProperty("branchId")?(o(),l("p",W,u(t.value.branchId[0]),1)):n("",!0)])):n("",!0),e("div",Z,[ee,c(d($),{modelValue:s.value.sendResults,"onUpdate:modelValue":r[2]||(r[2]=a=>s.value.sendResults=a),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])]),s.value.sendResults?(o(),l("div",se,[te,i(e("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>s.value.resultsEndpoint=a),class:p(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("resultsEndpoint")}])},null,2),[[f,s.value.resultsEndpoint]]),t.value.hasOwnProperty("resultsEndpoint")?(o(),l("p",re,u(t.value.resultsEndpoint[0]),1)):n("",!0)])):n("",!0),s.value.sendResults?(o(),l("div",ae,[oe,e("div",le,[e("label",ne,[i(e("input",{type:"radio",value:"basic","onUpdate:modelValue":r[4]||(r[4]=a=>s.value.authenticationType=a)},null,512),[[x,s.value.authenticationType]]),de]),e("label",ie,[i(e("input",{type:"radio",value:"bearer","onUpdate:modelValue":r[5]||(r[5]=a=>s.value.authenticationType=a)},null,512),[[x,s.value.authenticationType]]),ue])]),t.value.hasOwnProperty("resultsEndpoint")?(o(),l("p",ce,u(t.value.resultsEndpoint[0]),1)):n("",!0)])):n("",!0),s.value.sendResults&&s.value.authenticationType==="basic"?(o(),l("div",pe,[be,i(e("input",{"onUpdate:modelValue":r[6]||(r[6]=a=>s.value.username=a),class:p(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("username")}])},null,2),[[f,s.value.username]]),t.value.hasOwnProperty("username")?(o(),l("p",me,u(t.value.username[0]),1)):n("",!0)])):n("",!0),s.value.sendResults&&s.value.authenticationType==="basic"?(o(),l("div",ve,[he,i(e("input",{"onUpdate:modelValue":r[7]||(r[7]=a=>s.value.password=a),type:"password",class:p(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("password")}])},null,2),[[f,s.value.password]]),t.value.hasOwnProperty("password")?(o(),l("p",fe,u(t.value.password[0]),1)):n("",!0)])):n("",!0),s.value.sendResults&&s.value.authenticationType==="bearer"?(o(),l("div",ye,[_e,i(e("input",{"onUpdate:modelValue":r[8]||(r[8]=a=>s.value.token=a),class:p(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("token")}])},null,2),[[f,s.value.token]]),t.value.hasOwnProperty("token")?(o(),l("p",ge,u(t.value.token[0]),1)):n("",!0)])):n("",!0)]),e("footer",we,[e("div",xe,[e("button",{class:"mr-auto btn-blue",disabled:b.value,form:"form"},[c(I,{"is-loading":b.value},{default:_(()=>[U("Save")]),_:1},8,["is-loading"])],8,ke)])])])],40,q)]),_:1}),c(H)],64)}}});export{Re as default};