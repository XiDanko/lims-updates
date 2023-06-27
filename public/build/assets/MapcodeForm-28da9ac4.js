import{d as A,f as j,e as z,u as L,g as d,x as Q,Q as u,o as n,R as W,w as y,m as F,t as i,i as l,b as r,c as p,a as c,n as v,k as m,j as G,v as H,h as J,_ as K,a5 as X,a0 as Y}from"./main-0c5e983d.js";import{s as _}from"./multiselect-f0516a60.js";import{b as O}from"./toggle-f29ee038.js";import{F as g}from"./formMode-f60a729f.js";const Z=["onSubmit"],ee={class:"grid grid-cols-2 gap-3"},ae={key:0,class:"col-span-2 flex flex-wrap items-start"},re=r("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),se={key:0,class:"ml-24 w-full text-sm text-red-500"},te={class:"col-span-2 flex flex-wrap items-start"},oe=r("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Machine",-1),le={key:0,class:"ml-24 w-full text-sm text-red-500"},de={class:"col-span-2 flex flex-wrap items-start"},ne=r("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Test",-1),ce={key:0,class:"ml-24 w-full text-sm text-red-500"},ue={class:"col-span-2 flex flex-wrap items-start"},ie=r("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Parameter",-1),pe={key:0,class:"ml-24 w-full text-sm text-red-500"},me={class:"col-span-2 flex flex-wrap items-center"},be=r("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Code",-1),ve={key:0,class:"ml-24 w-full text-sm text-red-500"},he={class:"flex flex-wrap items-start"},fe=r("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Send",-1),ye={class:"flex flex-wrap items-start"},_e=r("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Receive",-1),ge=["disabled"],Ce=A({__name:"MapcodeForm",emits:["close"],setup(we,{emit:M}){const b=j(),S=z(),h=L().user.branches,e=d({send:!0,receive:!0}),x=d([]),V=d([]),k=d([]),w=d(g.Create),f=d(!1),s=d({});Q(()=>{U(),h.length===1&&(e.value.branchId=h[0].id,I()),b.path.endsWith("/edit")&&(w.value=g.Edit,$(b.params.id))});const U=()=>{e.value.branchId=b.query.branchId,e.value.machineId=b.query.machineId,e.value.code=b.query.code},I=()=>{N(),T()},B=()=>{e.value.machineId=null,e.value.testId=null,e.value.parameterId=null},$=async o=>{const{data:a}=await u.get(`/api/mapcodes/${o}`);e.value=a.data,I(),C(a.data.testId)},N=async()=>{const{data:o}=await u.get(`/api/machines/list?branchId=${e.value.branchId}`);x.value=o.data},T=async()=>{const{data:o}=await u.get(`/api/tests/list?branchId=${e.value.branchId}`);V.value=o.data},C=async o=>{const{data:a}=await u.get(`/api/parameters/list?testId=${o}`);k.value=a.data},D=async()=>{f.value=!0;try{w.value===g.Create?await R():await q(),Y.fire()}catch(o){s.value=o.response.data.errors??{}}f.value=!1},R=async()=>{await u.post("/api/mapcodes",e.value),E()},q=async()=>{await u.patch(`/api/mapcodes/${e.value.id}`,e.value),P()},E=()=>{e.value={branchId:e.value.branchId,machineId:e.value.machineId,testId:e.value.testId,send:!0,receive:!0},s.value=[]},P=()=>{M("close"),S.back()};return(o,a)=>(n(),W(X,null,{header:y(()=>[F(i(w.value===l(g).Create?"Create New Mapcode":"Edit Mapcode"),1)]),body:y(()=>[r("form",{id:"form",onSubmit:J(D,["prevent","stop"])},[r("div",ee,[l(h).length>1?(n(),p("div",ae,[re,c(l(_),{modelValue:e.value.branchId,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value.branchId=t),options:l(h),onSelect:I,onChange:B,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":s.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),s.value.hasOwnProperty("branchId")?(n(),p("p",se,i(s.value.branchId[0]),1)):m("",!0)])):m("",!0),r("div",te,[oe,c(l(_),{modelValue:e.value.machineId,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.machineId=t),options:x.value,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":s.value.hasOwnProperty("machineId")}])},null,8,["modelValue","options","class"]),s.value.hasOwnProperty("machineId")?(n(),p("p",le,i(s.value.machineId[0]),1)):m("",!0)]),r("div",de,[ne,c(l(_),{modelValue:e.value.testId,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.testId=t),options:V.value,onSelect:C,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"shortForm","can-clear":!1,"can-deselect":!1,class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":s.value.hasOwnProperty("testId")}])},null,8,["modelValue","options","class"]),s.value.hasOwnProperty("testId")?(n(),p("p",ce,i(s.value.testId[0]),1)):m("",!0)]),r("div",ue,[ie,c(l(_),{modelValue:e.value.parameterId,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.parameterId=t),options:k.value,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"shortForm",class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":s.value.hasOwnProperty("parameterId")}])},null,8,["modelValue","options","class"]),s.value.hasOwnProperty("parameterId")?(n(),p("p",pe,i(s.value.parameterId[0]),1)):m("",!0)]),r("div",me,[be,G(r("input",{"onUpdate:modelValue":a[4]||(a[4]=t=>e.value.code=t),class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("code")}])},null,2),[[H,e.value.code]]),s.value.hasOwnProperty("code")?(n(),p("p",ve,i(s.value.code[0]),1)):m("",!0)]),r("div",he,[fe,c(l(O),{modelValue:e.value.send,"onUpdate:modelValue":a[5]||(a[5]=t=>e.value.send=t),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])]),r("div",ye,[_e,c(l(O),{modelValue:e.value.receive,"onUpdate:modelValue":a[6]||(a[6]=t=>e.value.receive=t),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])])])],40,Z)]),footer:y(()=>[r("button",{class:"mr-2 btn-blue",disabled:f.value,form:"form"},[c(K,{"is-loading":f.value},{default:y(()=>[F("Save")]),_:1},8,["is-loading"])],8,ge),r("button",{onClick:P,class:"btn-gray"},"Cancel")]),_:1}))}});export{Ce as default};
