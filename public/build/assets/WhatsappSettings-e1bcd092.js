import{d as U,a2 as P,e as g,u as C,x as O,Q as x,U as T,o as t,c as d,a as n,w as h,b as e,g as l,h as c,i as u,n as i,t as b,v as w,_ as I,k as A,f as R,F as W,W as B,X as z,Y as L,Z as N}from"./main-56f58ed8.js";import{M as D}from"./Master-fc459851.js";import{b as p}from"./toggle-876d3de4.js";import{s as E}from"./multiselect-167e14f5.js";import{A as F}from"./ActivityLogSidebar-f7c42a1d.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"flex items-center gap-3"},j=e("h1",null,"Whatsapp Settings",-1),H=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Q=[H],X=["onSubmit"],Y={class:"h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between"},Z={key:0,class:"flex flex-wrap items-center mb-3"},q=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),G={key:0,class:"ml-52 w-full text-red-500 text-sm"},J={class:"flex flex-wrap items-center mb-3"},K=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Enabled",-1),ee={class:"flex flex-wrap items-center mb-3"},se=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Base Url",-1),re={key:0,class:"w-full ml-52 text-red-500 text-sm"},ae={class:"flex flex-wrap items-center mb-3"},oe=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Access Token",-1),le={key:0,class:"w-full ml-52 text-red-500 text-sm"},te={class:"flex flex-wrap items-center mb-3"},de=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Send Invoice",-1),ne={class:"flex flex-wrap items-center mb-3"},ue=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Send Results",-1),ce={class:"flex flex-wrap items-center mb-3"},ie=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Send Welcome Message",-1),be={class:"flex flex-wrap items-center mb-3"},pe=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Send Results Message",-1),me={key:1,class:"flex flex-wrap items-center mb-3"},ve=e("span",{class:"block mb-1"},"Welcome Message",-1),fe={key:0,class:"w-full text-red-500 text-sm"},ge={key:2,class:"flex flex-wrap items-center"},we=e("span",{class:"block mb-1"},"Results Message",-1),_e={key:0,class:"w-full text-red-500 text-sm"},he={class:"border-t-2 border-gray-200 mt-3"},ye={class:"flex items-center mt-3"},xe=["disabled"],Oe=U({__name:"WhatsappSettings",setup(Ve){const V=P(),{hasPermissionTo:M}=L(),m=g(!1),s=g({}),_=C().user.branches,v=g(null),o=g({});O(()=>{v.value=_[0].id,y()});const y=async()=>{const{data:f}=await x.get(`/api/settings/whatsapp?branchId=${v.value}`);s.value=f.data},k=async()=>{m.value=!0;try{await x.patch("/api/settings/whatsapp",s.value),V.fetch(),N.fire(),o.value={}}catch(f){o.value=f.response.data.errors??{}}m.value=!1};return(f,r)=>{const S=T("tip");return t(),d(W,null,[n(D,null,{header:h(()=>[e("div",$,[j,l(M)("ActivityLog.list")?c((t(),d("button",{key:0,onClick:r[0]||(r[0]=a=>l(B).emit(l(z).Show,s.value.id)),class:"cursor-pointer"},Q)),[[S,"View Activities"]]):u("",!0)])]),body:h(()=>[e("form",{id:"form",onSubmit:R(k,["prevent"])},[e("div",Y,[e("div",null,[l(_).length>1?(t(),d("div",Z,[q,n(l(E),{modelValue:v.value,"onUpdate:modelValue":r[1]||(r[1]=a=>v.value=a),options:l(_),onSelect:y,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:i(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":o.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),o.value.hasOwnProperty("branchId")?(t(),d("p",G,b(o.value.branchId[0]),1)):u("",!0)])):u("",!0),e("div",J,[K,n(l(p),{modelValue:s.value.enabled,"onUpdate:modelValue":r[2]||(r[2]=a=>s.value.enabled=a),class:"p-2 flex-1 border border-gray-300 rounded-r focus:border-blue-500"},null,8,["modelValue"])]),e("div",ee,[se,c(e("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>s.value.baseUrl=a),class:i(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("baseUrl")}])},null,2),[[w,s.value.baseUrl]]),o.value.hasOwnProperty("baseUrl")?(t(),d("p",re,b(o.value.baseUrl[0]),1)):u("",!0)]),e("div",ae,[oe,c(e("input",{"onUpdate:modelValue":r[4]||(r[4]=a=>s.value.accessToken=a),class:i(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("accessToken")}])},null,2),[[w,s.value.accessToken]]),o.value.hasOwnProperty("accessToken")?(t(),d("p",le,b(o.value.accessToken[0]),1)):u("",!0)]),e("div",te,[de,n(l(p),{modelValue:s.value.sendInvoice,"onUpdate:modelValue":r[5]||(r[5]=a=>s.value.sendInvoice=a),class:"p-2 flex-1 border border-gray-300 rounded-r focus:border-blue-500"},null,8,["modelValue"])]),e("div",ne,[ue,n(l(p),{modelValue:s.value.sendResult,"onUpdate:modelValue":r[6]||(r[6]=a=>s.value.sendResult=a),class:"p-2 flex-1 border border-gray-300 rounded-r focus:border-blue-500"},null,8,["modelValue"])]),e("div",ce,[ie,n(l(p),{modelValue:s.value.sendWelcomeMessage,"onUpdate:modelValue":r[7]||(r[7]=a=>s.value.sendWelcomeMessage=a),class:"p-2 flex-1 border border-gray-300 rounded-r focus:border-blue-500"},null,8,["modelValue"])]),e("div",be,[pe,n(l(p),{modelValue:s.value.sendResultMessage,"onUpdate:modelValue":r[8]||(r[8]=a=>s.value.sendResultMessage=a),class:"p-2 flex-1 border border-gray-300 rounded-r focus:border-blue-500"},null,8,["modelValue"])]),s.value.sendWelcomeMessage?(t(),d("div",me,[ve,c(e("textarea",{"onUpdate:modelValue":r[9]||(r[9]=a=>s.value.welcomeMessage=a),rows:"5",class:i(["w-full p-2 border border-gray-300 rounded focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("welcomeMessage")}])},null,2),[[w,s.value.welcomeMessage]]),o.value.hasOwnProperty("welcomeMessage")?(t(),d("p",fe,b(o.value.welcomeMessage[0]),1)):u("",!0)])):u("",!0),s.value.sendResultMessage?(t(),d("div",ge,[we,c(e("textarea",{"onUpdate:modelValue":r[10]||(r[10]=a=>s.value.resultMessage=a),rows:"5",class:i(["w-full p-2 border border-gray-300 rounded focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("resultMessage")}])},null,2),[[w,s.value.resultMessage]]),o.value.hasOwnProperty("resultMessage")?(t(),d("p",_e,b(o.value.resultMessage[0]),1)):u("",!0)])):u("",!0)]),e("footer",he,[e("div",ye,[e("button",{class:"btn-blue mr-auto",disabled:m.value,form:"form"},[n(I,{"is-loading":m.value},{default:h(()=>[A("Save")]),_:1},8,["is-loading"])],8,xe)])])])],40,X)]),_:1}),n(F)],64)}}});export{Oe as default};
