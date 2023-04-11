import{d as D,u as A,e as m,x as E,A as f,o as l,C as w,w as b,k as x,t as v,g as o,b as s,c as h,a as _,n as V,i as p,h as F,v as M,f as O,_ as U,V as $,m as T,l as R,S as z}from"./main-c1f62c61.js";import{b as k}from"./toggle-b89396fa.js";import{F as n}from"./formMode-f60a729f.js";import{s as W}from"./multiselect-ffe70d49.js";const j=["onSubmit"],q={key:0,class:"flex flex-wrap items-center mb-3"},G=s("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),H={key:0,class:"ml-24 w-full text-red-500 text-sm"},J={class:"flex flex-wrap items-center mb-3"},K=s("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Name",-1),Q={key:0,class:"w-full ml-24 text-red-500 text-sm"},X={class:"flex flex-wrap items-center"},Y=s("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Default",-1),Z=["disabled"],oe=D({__name:"PriceListForm",emits:["close"],setup(ee,{emit:C}){const y=T(),I=R(),d=A().user.branches,e=m({}),i=m(n.Create),u=m(!1),r=m({});E(()=>{d.length===1&&(e.value.branchId=d[0].id),y.path.endsWith("/edit")&&(i.value=n.Edit,P(y.params.id))});const P=async c=>{const{data:a}=await f.get(`/api/price-lists/${c}`);e.value=a.data},S=async()=>{u.value=!0;try{i.value===n.Create?await L():await N(),z.fire()}catch(c){r.value=c.response.data.errors??{}}u.value=!1},L=async()=>{await f.post("/api/price-lists",e.value),B()},N=async()=>{await f.patch(`/api/price-lists/${e.value.id}`,e.value),g()},B=()=>{e.value={branchId:e.value.branchId},r.value=[]},g=()=>{C("close"),I.back()};return(c,a)=>(l(),w($,null,{header:b(()=>[x(v(i.value===o(n).Create?"Create New Price List":"Edit Price List"),1)]),body:b(()=>[s("form",{id:"form",onSubmit:O(S,["prevent","stop"])},[o(d).length>1?(l(),h("div",q,[G,_(o(W),{modelValue:e.value.branchId,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value.branchId=t),options:o(d),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:V(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":r.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),r.value.hasOwnProperty("branchId")?(l(),h("p",H,v(r.value.branchId[0]),1)):p("",!0)])):p("",!0),s("div",J,[K,F(s("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.name=t),class:V(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("name")}])},null,2),[[M,e.value.name]]),r.value.hasOwnProperty("name")?(l(),h("p",Q,v(r.value.name[0]),1)):p("",!0)]),s("div",X,[Y,_(o(k),{modelValue:e.value.isDefault,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.isDefault=t),class:"flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500"},null,8,["modelValue"])])],40,j)]),footer:b(()=>[s("button",{class:"btn-blue mr-2",disabled:u.value,form:"form"},[_(U,{"is-loading":u.value},{default:b(()=>[x("Save")]),_:1},8,["is-loading"])],8,Z),s("button",{onClick:g,class:"btn-gray"},"Cancel"),i.value===o(n).Edit?(l(),w(o(k),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.isActive=t),class:"ml-auto toggle:off:red"},null,8,["modelValue"])):p("",!0)]),_:1}))}});export{oe as default};
