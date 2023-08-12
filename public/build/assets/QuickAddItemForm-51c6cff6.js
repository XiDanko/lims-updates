import{d as E,f as M,e as U,u as Q,g as m,x as R,Q as p,V as j,o as d,R as V,w as b,m as C,t as n,i as l,b as s,c as _,a as g,n as I,k as v,j as z,v as H,h as L,_ as W,a5 as G,a0 as J}from"./main-bf2af1c2.js";import{s as O}from"./multiselect-4f06085e.js";import{F as u}from"./formMode-f60a729f.js";import{b as K}from"./toggle-1b27a25d.js";const X=["onSubmit"],Y={key:0,class:"mb-3 flex flex-wrap items-start"},Z=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),ee={key:0,class:"ml-24 w-full text-sm text-red-500"},ae={class:"mb-3 flex flex-wrap items-start"},te=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Item",-1),se={class:"flex w-full items-center justify-between"},re={class:"rounded bg-teal-500 px-2 text-sm text-white"},oe={key:0,class:"ml-24 w-full text-sm text-red-500"},le={class:"flex flex-wrap items-center"},de=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Order",-1),ne={key:0,class:"ml-24 w-full text-sm text-red-500"},ue=["disabled"],ve=E({__name:"QuickAddItemForm",emits:["close"],setup(ie,{emit:S}){const x=M(),A=U(),i=Q().user.branches,e=m({}),f=m([]),c=m(u.Create),h=m(!1),t=m({});R(()=>{i.length===1&&(e.value.branchId=i[0].id,y()),x.path.endsWith("/edit")&&(c.value=u.Edit,B(x.params.id)),c.value===u.Create&&i.length===1&&w()});const y=async()=>{const{data:o}=await p.get(`/api/items/list?branchId=${e.value.branchId}&doesntHaveQuickAdd=true`);f.value=o.data},B=async o=>{const{data:a}=await p.get(`/api/quick-add-items/${o}`);e.value=a.data,y()},w=async()=>{const{data:o}=await p.post("/api/quick-add-items/generate-order",{branchId:e.value.branchId});e.value.order=o},P=()=>{e.value.itemId=null,e.value.itemType=null,f.value=[]},T=o=>{e.value.itemType=f.value.find(a=>a.id===o).type},$=async()=>{h.value=!0;try{c.value===u.Create?await q():await F(),t.value={},J.fire()}catch(o){t.value=o.response.data.errors??{}}h.value=!1},q=async()=>{await p.post("/api/quick-add-items",e.value),N()},F=async()=>{await p.patch(`/api/quick-add-items/${e.value.id}`,e.value),k()},N=()=>{e.value={branchId:e.value.branchId},y(),w(),t.value=[]},k=()=>{S("close"),A.back()};return(o,a)=>{const D=j("maska");return d(),V(G,null,{header:b(()=>[C(n(c.value===l(u).Create?"Create New Item":"Edit Item"),1)]),body:b(()=>[s("form",{id:"form",onSubmit:L($,["prevent","stop"])},[l(i).length>1?(d(),_("div",Y,[Z,g(l(O),{modelValue:e.value.branchId,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value.branchId=r),options:l(i),onSelect:a[1]||(a[1]=r=>{w(),y()}),onChange:P,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:I(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),t.value.hasOwnProperty("branchId")?(d(),_("p",ee,n(t.value.branchId[0]),1)):v("",!0)])):v("",!0),s("div",ae,[te,g(l(O),{modelValue:e.value.itemId,"onUpdate:modelValue":a[2]||(a[2]=r=>e.value.itemId=r),options:f.value,onSelect:T,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"label",class:I(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("itemId")}])},{option:b(({option:r})=>[s("div",se,[s("span",null,n(r.label),1),s("span",re,n(r.type),1)])]),_:1},8,["modelValue","options","class"]),t.value.hasOwnProperty("itemId")?(d(),_("p",oe,n(t.value.itemId[0]),1)):v("",!0)]),s("div",le,[de,z(s("input",{"onUpdate:modelValue":a[3]||(a[3]=r=>e.value.order=r),"data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",class:I(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("order")}])},null,2),[[H,e.value.order],[D]]),t.value.hasOwnProperty("order")?(d(),_("p",ne,n(t.value.order[0]),1)):v("",!0)])],40,X)]),footer:b(()=>[s("button",{class:"mr-2 btn-blue",disabled:h.value,form:"form"},[g(W,{"is-loading":h.value},{default:b(()=>[C("Save")]),_:1},8,["is-loading"])],8,ue),s("button",{onClick:k,class:"btn-gray"},"Cancel"),c.value===l(u).Edit?(d(),V(l(K),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":a[4]||(a[4]=r=>e.value.isActive=r),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):v("",!0)]),_:1})}}});export{ve as default};
