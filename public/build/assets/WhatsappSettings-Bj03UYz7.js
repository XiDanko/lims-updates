import{d as I,X as P,e as h,u as O,x as U,Q as V,U as C,o,c as n,a as r,w,b as e,g as i,h as c,i as d,v as g,n as u,t as b,_ as R,k as A,f as W,F as T,a2 as B,a3 as $,T as z,$ as D}from"./main-DmoZ1fz4.js";import{M as L}from"./Master-ql31p3jM.js";import{b as v}from"./toggle-DyRQkDOQ.js";import{A as N}from"./ActivityLogSidebar-BgD4pgwD.js";import{_ as E}from"./BranchSelect.vue_vue_type_script_setup_true_lang-D_pdW9WT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DAhRltj6.js";const F={class:"flex items-center gap-3"},j=e("h1",null,"Whatsapp Settings",-1),H=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),Q=[H],X={class:"h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between pt-2 pe-1"},q={class:"grid grid-cols-1 gap-4"},G={key:0,class:"relative"},J={class:"relative"},K=e("label",{class:"label"},"Enabled",-1),Y={class:"relative"},Z={key:0,class:"text-sm text-red-500"},ee={class:"relative"},se={key:0,class:"text-sm text-red-500"},te={class:"relative"},ae=e("label",{class:"label"},"Send Invoice",-1),le={class:"relative"},oe=e("label",{class:"label"},"Send Results",-1),ne={class:"relative"},re=e("label",{class:"label"},"Send Welcome Message",-1),ie={class:"relative"},de=e("label",{class:"label"},"Send Results Message",-1),ue={key:1,class:"relative"},ce={key:0,class:"text-sm text-red-500"},ve={key:2,class:"relative"},pe={key:0,class:"text-sm text-red-500"},me={class:"mt-3 border-t-2 border-gray-200"},_e={class:"mt-3 flex items-center"},he=["disabled"],Se=I({__name:"WhatsappSettings",setup(ge){const M=P(),{hasPermissionTo:x}=z(),p=h(!1),s=h({}),f=O().user.branches,m=h(null),l=h({});U(()=>{m.value=f[0].id,y()});const y=async()=>{const{data:_}=await V.get(`/api/settings/whatsapp?branchId=${m.value}`);s.value=_.data},S=async()=>{p.value=!0;try{await V.patch("/api/settings/whatsapp",s.value),M.fetch(),l.value={},D.fire()}catch(_){l.value=_.response.data.errors??{}}p.value=!1};return(_,t)=>{const k=C("tip");return o(),n(T,null,[r(L,null,{header:w(()=>[e("div",F,[j,i(x)("ActivityLog.list")?c((o(),n("button",{key:0,onClick:t[0]||(t[0]=a=>i(B).emit(i($).Show,s.value.id)),class:"cursor-pointer"},Q)),[[k,"View Activities"]]):d("",!0)])]),body:w(()=>[e("form",{id:"form",onSubmit:W(S,["prevent"])},[e("div",X,[e("div",q,[i(f).length>1?(o(),n("div",G,[r(E,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=a=>m.value=a),error:l.value.branchId,onSelect:y},null,8,["modelValue","error"])])):d("",!0),e("div",J,[r(i(v),{modelValue:s.value.enabled,"onUpdate:modelValue":t[2]||(t[2]=a=>s.value.enabled=a),class:"input peer pt-2.5"},null,8,["modelValue"]),K]),e("div",Y,[c(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>s.value.instanceId=a),class:u(["input peer",{"border-red-500":l.value.hasOwnProperty("instanceId")}])},null,2),[[g,s.value.instanceId]]),e("label",{class:u(["label",{"text-red-500":l.value.hasOwnProperty("instanceId")}])},"Instance ID",2),l.value.hasOwnProperty("instanceId")?(o(),n("p",Z,b(l.value.instanceId[0]),1)):d("",!0)]),e("div",ee,[c(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>s.value.token=a),class:u(["input peer",{"border-red-500":l.value.hasOwnProperty("token")}])},null,2),[[g,s.value.token]]),e("label",{class:u(["label",{"text-red-500":l.value.hasOwnProperty("token")}])},"Token",2),l.value.hasOwnProperty("token")?(o(),n("p",se,b(l.value.token[0]),1)):d("",!0)]),e("div",te,[r(i(v),{modelValue:s.value.sendInvoice,"onUpdate:modelValue":t[5]||(t[5]=a=>s.value.sendInvoice=a),class:"input peer pt-2.5"},null,8,["modelValue"]),ae]),e("div",le,[r(i(v),{modelValue:s.value.sendResult,"onUpdate:modelValue":t[6]||(t[6]=a=>s.value.sendResult=a),class:"input peer pt-2.5"},null,8,["modelValue"]),oe]),e("div",ne,[r(i(v),{modelValue:s.value.sendWelcomeMessage,"onUpdate:modelValue":t[7]||(t[7]=a=>s.value.sendWelcomeMessage=a),class:"input peer pt-2.5"},null,8,["modelValue"]),re]),e("div",ie,[r(i(v),{modelValue:s.value.sendResultMessage,"onUpdate:modelValue":t[8]||(t[8]=a=>s.value.sendResultMessage=a),class:"input peer pt-2.5"},null,8,["modelValue"]),de]),s.value.sendWelcomeMessage?(o(),n("div",ue,[c(e("textarea",{"onUpdate:modelValue":t[9]||(t[9]=a=>s.value.welcomeMessage=a),rows:"5",class:u(["py-2 input peer",{"border-red-500":l.value.hasOwnProperty("welcomeMessage")}])},null,2),[[g,s.value.welcomeMessage]]),e("label",{class:u(["label",{"text-red-500":l.value.hasOwnProperty("welcomeMessage")}])},"Welcome Message",2),l.value.hasOwnProperty("welcomeMessage")?(o(),n("p",ce,b(l.value.welcomeMessage[0]),1)):d("",!0)])):d("",!0),s.value.sendResultMessage?(o(),n("div",ve,[c(e("textarea",{"onUpdate:modelValue":t[10]||(t[10]=a=>s.value.resultMessage=a),rows:"5",class:u(["py-2 input peer",{"border-red-500":l.value.hasOwnProperty("resultMessage")}])},null,2),[[g,s.value.resultMessage]]),e("label",{class:u(["label",{"text-red-500":l.value.hasOwnProperty("resultMessage")}])},"Results Message",2),l.value.hasOwnProperty("resultMessage")?(o(),n("p",pe,b(l.value.resultMessage[0]),1)):d("",!0)])):d("",!0)]),e("footer",me,[e("div",_e,[e("button",{class:"me-auto btn-blue",disabled:p.value,form:"form"},[r(R,{"is-loading":p.value},{default:w(()=>[A("Save")]),_:1},8,["is-loading"])],8,he)])])])],32)]),_:1}),r(N)],64)}}});export{Se as default};