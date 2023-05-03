import{d as E,a2 as V,e as b,u as k,x as C,Q as y,U as N,o,c as l,a as h,w as g,b as e,g as n,h as p,i as d,n as m,t as v,v as _,_ as O,k as A,f as H,F as W,W as B,X as I,Y as U,Z as z}from"./main-56f58ed8.js";import{M as L}from"./Master-fc459851.js";import{s as T}from"./multiselect-167e14f5.js";import{A as D}from"./ActivityLogSidebar-f7c42a1d.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={class:"flex items-center gap-3"},$=e("h1",null,"General Settings",-1),G=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),R=[G],j=["onSubmit"],Q={class:"h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between"},X={key:0,class:"flex flex-wrap items-center mb-3"},Y=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),Z={key:0,class:"ml-52 w-full text-red-500 text-sm"},q={class:"flex flex-wrap items-center mb-3"},J=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Patient Phone Number",-1),K={key:0,class:"w-full ml-52 text-red-500 text-sm"},ee={class:"flex flex-wrap items-center mb-3"},te=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Result Editor Max Width",-1),re={key:0,class:"w-full ml-52 text-red-500 text-sm"},se={class:"flex flex-wrap items-center mb-3"},ae=e("span",{class:"w-52 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Result Editor Max Height",-1),oe={key:0,class:"w-full ml-52 text-red-500 text-sm"},le={class:"border-t-2 border-gray-200 mt-3"},ne={class:"flex items-center mt-3"},de=["disabled"],me=E({__name:"GeneralSettings",setup(ie){const w=V(),{hasPermissionTo:M}=U(),i=b(!1),s=b({}),f=k().user.branches,u=b(null),t=b({});C(()=>{u.value=f[0].id,x()});const x=async()=>{const{data:c}=await y.get(`/api/settings/general?branchId=${u.value}`);s.value=c.data},S=async()=>{i.value=!0;try{await y.patch("/api/settings/general",s.value),w.fetch(),z.fire()}catch(c){t.value=c.response.data.errors??{}}i.value=!1};return(c,r)=>{const P=N("tip");return o(),l(W,null,[h(L,null,{header:g(()=>[e("div",F,[$,n(M)("ActivityLog.list")?p((o(),l("button",{key:0,onClick:r[0]||(r[0]=a=>n(B).emit(n(I).Show,s.value.id)),class:"cursor-pointer"},R)),[[P,"View Activities"]]):d("",!0)])]),body:g(()=>[e("form",{id:"form",onSubmit:H(S,["prevent"])},[e("div",Q,[e("div",null,[n(f).length>1?(o(),l("div",X,[Y,h(n(T),{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=a=>u.value=a),options:n(f),onSelect:x,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:m(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),t.value.hasOwnProperty("branchId")?(o(),l("p",Z,v(t.value.branchId[0]),1)):d("",!0)])):d("",!0),e("div",q,[J,p(e("input",{"onUpdate:modelValue":r[2]||(r[2]=a=>s.value.patientPhoneNumber=a),class:m(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("patientPhoneNumber")}])},null,2),[[_,s.value.patientPhoneNumber]]),t.value.hasOwnProperty("patientPhoneNumber")?(o(),l("p",K,v(t.value.patientPhoneNumber[0]),1)):d("",!0)]),e("div",ee,[te,p(e("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>s.value.resultEditorMaxWidth=a),class:m(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("resultEditorMaxWidth")}])},null,2),[[_,s.value.resultEditorMaxWidth]]),t.value.hasOwnProperty("resultEditorMaxWidth")?(o(),l("p",re,v(t.value.resultEditorMaxWidth[0]),1)):d("",!0)]),e("div",se,[ae,p(e("input",{"onUpdate:modelValue":r[4]||(r[4]=a=>s.value.resultEditorMaxHeight=a),class:m(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("resultEditorMaxHeight")}])},null,2),[[_,s.value.resultEditorMaxHeight]]),t.value.hasOwnProperty("resultEditorMaxHeight")?(o(),l("p",oe,v(t.value.resultEditorMaxHeight[0]),1)):d("",!0)])]),e("footer",le,[e("div",ne,[e("button",{class:"btn-blue mr-auto",disabled:i.value,form:"form"},[h(O,{"is-loading":i.value},{default:g(()=>[A("Save")]),_:1},8,["is-loading"])],8,de)])])])],40,j)]),_:1}),h(D)],64)}}});export{me as default};
