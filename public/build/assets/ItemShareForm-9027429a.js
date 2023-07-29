import{d as A,f as E,e as M,u as R,g as c,x as z,Q as m,o as i,R as D,w as p,m as S,t as u,i as l,b as r,c as b,a as v,n as g,k as h,h as L,_ as Q,a5 as W,a0 as q}from"./main-cee2eb24.js";import{s as x}from"./multiselect-97a39018.js";import{_ as G}from"./CurrencyInput.vue_vue_type_script_setup_true_lang-8eeeffea.js";import{F as n}from"./formMode-f60a729f.js";const H=["onSubmit"],J={class:"grid grid-cols-1 gap-3"},K={key:0,class:"flex flex-wrap"},X=r("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),Y={key:0,class:"ml-28 w-full text-sm text-red-500"},Z={class:"flex flex-wrap"},ee=r("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Partner",-1),ae={key:0,class:"ml-28 w-full text-sm text-red-500"},te={class:"flex flex-wrap"},re=r("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Item",-1),se={class:"flex w-full items-center justify-between"},oe={class:"rounded bg-teal-500 px-2 text-sm text-white"},le={key:0,class:"ml-28 w-full text-sm text-red-500"},ne={class:"flex flex-wrap"},de=r("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Amount",-1),ue={key:0,class:"ml-28 w-full text-sm text-red-500"},ce=["disabled"],he=A({__name:"ItemShareForm",emits:["close"],setup(ie,{emit:P}){const V=E(),O=M(),f=R().user.branches,C=c([]),w=c([]),e=c({}),d=c(n.Create),y=c(!1),a=c({});z(()=>{f.length===1&&(e.value.branchId=f[0].id,I(),_()),V.path.endsWith("/edit")&&(d.value=n.Edit,$(V.params.id))});const I=async()=>{const{data:o}=await m.get(`/api/partners/list?branchId=${e.value.branchId}`);C.value=o.data},_=async()=>{const{data:o}=await m.get(`/api/items/list?branchId=${e.value.branchId}`);w.value=o.data},$=async o=>{const{data:t}=await m.get(`/api/item-shares/${o}`);e.value=t.data,I(),_()},B=()=>{e.value.partnerId=null,e.value.itemId=null},F=o=>{d.value!==n.Create&&(e.value.itemType=w.value.find(t=>t.id===o).type)},N=async()=>{y.value=!0;try{d.value===n.Create?await T():await U(),q.fire()}catch(o){a.value=o.response.data.errors??{}}y.value=!1},T=async()=>{await m.post("/api/item-shares",e.value),j()},U=async()=>{await m.patch(`/api/item-shares/${e.value.id}`,e.value),k()},j=()=>{e.value={branchId:e.value.branchId,partnerId:e.value.partnerId,amount:0},_(),a.value=[]},k=()=>{P("close"),O.back()};return(o,t)=>(i(),D(W,null,{header:p(()=>[S(u(d.value===l(n).Create?"Create New Item Share":"Edit Item Share"),1)]),body:p(()=>[r("form",{id:"form",onSubmit:L(N,["prevent","stop"])},[r("div",J,[l(f).length>1?(i(),b("div",K,[X,v(l(x),{modelValue:e.value.branchId,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value.branchId=s),options:l(f),onSelect:t[1]||(t[1]=s=>{I(),_()}),onChange:B,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:g(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("branchId")?(i(),b("p",Y,u(a.value.branchId[0]),1)):h("",!0)])):h("",!0),r("div",Z,[ee,v(l(x),{modelValue:e.value.partnerId,"onUpdate:modelValue":t[2]||(t[2]=s=>e.value.partnerId=s),mode:d.value===l(n).Create?"tags":"single",options:C.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:g(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("partnerId")}])},null,8,["modelValue","mode","options","class"]),a.value.hasOwnProperty("partnerId")?(i(),b("p",ae,u(a.value.partnerId[0]),1)):h("",!0)]),r("div",te,[re,v(l(x),{modelValue:e.value.itemId,"onUpdate:modelValue":t[3]||(t[3]=s=>e.value.itemId=s),mode:d.value===l(n).Create?"tags":"single",options:w.value,searchable:!0,object:d.value===l(n).Create,onSelect:F,"value-prop":"id","track-by":"searchableForm",label:"label",class:g(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("itemId")}])},{option:p(({option:s})=>[r("div",se,[r("span",null,u(s.label),1),r("span",oe,u(s.type),1)])]),_:1},8,["modelValue","mode","options","object","class"]),a.value.hasOwnProperty("itemId")?(i(),b("p",le,u(a.value.itemId[0]),1)):h("",!0)]),r("div",ne,[de,v(G,{modelValue:e.value.amount,"onUpdate:modelValue":t[4]||(t[4]=s=>e.value.amount=s),size:"1",class:g(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("amount")}])},null,8,["modelValue","class"]),a.value.hasOwnProperty("amount")?(i(),b("p",ue,u(a.value.amount[0]),1)):h("",!0)])])],40,H)]),footer:p(()=>[r("button",{class:"mr-2 btn-blue",disabled:y.value,form:"form"},[v(Q,{"is-loading":y.value},{default:p(()=>[S("Save")]),_:1},8,["is-loading"])],8,ce),r("button",{onClick:k,class:"btn-gray"},"Cancel")]),_:1}))}});export{he as default};
