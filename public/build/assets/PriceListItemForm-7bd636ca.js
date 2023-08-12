import{d as D,f as E,e as M,u as R,g as n,x as A,Q as m,o as d,R as j,w as b,m as k,t as o,i,b as s,c,a as u,n as v,k as p,h as H,_ as Q,a5 as W,a0 as q}from"./main-bf2af1c2.js";import{s as x}from"./multiselect-4f06085e.js";import{_ as C}from"./CurrencyInput.vue_vue_type_script_setup_true_lang-1a047a22.js";import{F as _}from"./formMode-f60a729f.js";const G=["onSubmit"],J={class:"grid grid-cols-1 gap-3"},K={key:0,class:"flex flex-wrap"},X=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),Y={key:0,class:"ml-28 w-full text-sm text-red-500"},Z={class:"flex flex-wrap"},ee=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Price List",-1),ae={key:0,class:"ml-28 w-full text-sm text-red-500"},se={class:"flex flex-wrap"},te=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Item",-1),re={class:"flex w-full items-center justify-between"},le={class:"rounded bg-teal-500 px-2 text-sm text-white"},oe={key:0,class:"ml-28 w-full text-sm text-red-500"},de={class:"flex flex-wrap"},ne=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Price",-1),ie={key:0,class:"ml-28 w-full text-sm text-red-500"},ce={class:"flex flex-wrap"},ue=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Discount",-1),pe={key:0,class:"ml-28 w-full text-sm text-red-500"},me=["disabled"],_e=D({__name:"PriceListItemForm",emits:["close"],setup(be,{emit:O}){const V=E(),S=M(),f=R().user.branches,e=n({discount:0}),h=n([]),w=n(_.Create),y=n(!1),a=n({}),L=n([]);A(()=>{f.length===1&&(e.value.branchId=f[0].id,g()),V.path.endsWith("/edit")&&(w.value=_.Edit,$(V.params.id))});const g=async()=>{const{data:l}=await m.get(`/api/price-lists/list?branchId=${e.value.branchId}`);L.value=l.data},I=async()=>{const{data:l}=await m.get(`/api/items/list?branchId=${e.value.branchId}&doesntHavePrice=${e.value.priceListId}`);h.value=l.data},$=async l=>{const{data:t}=await m.get(`/api/price-list-items/${l}`);e.value=t.data,g(),I()},B=()=>{e.value.priceListId=null,e.value.itemId=null,h.value=[]},T=l=>{e.value.itemType=h.value.find(t=>t.id===l).type},F=async()=>{y.value=!0;try{w.value===_.Create?await N():await U(),a.value={},q.fire()}catch(l){a.value=l.response.data.errors??{}}y.value=!1},N=async()=>{await m.post("/api/price-list-items",e.value),z()},U=async()=>{await m.patch(`/api/price-list-items/${e.value.id}`,e.value),P()},z=()=>{e.value={branchId:e.value.branchId,priceListId:e.value.priceListId,itemType:e.value.itemType,discount:0},I(),a.value=[]},P=()=>{O("close"),S.back()};return(l,t)=>(d(),j(W,null,{header:b(()=>[k(o(w.value===i(_).Create?"Create New Item":"Edit Item"),1)]),body:b(()=>[s("form",{id:"form",onSubmit:H(F,["prevent","stop"])},[s("div",J,[i(f).length>1?(d(),c("div",K,[X,u(i(x),{modelValue:e.value.branchId,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.branchId=r),options:i(f),onSelect:g,onChange:B,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("branchId")?(d(),c("p",Y,o(a.value.branchId[0]),1)):p("",!0)])):p("",!0),s("div",Z,[ee,u(i(x),{modelValue:e.value.priceListId,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.priceListId=r),onSelect:I,options:L.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("priceListId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("priceListId")?(d(),c("p",ae,o(a.value.priceListId[0]),1)):p("",!0)]),s("div",se,[te,u(i(x),{modelValue:e.value.itemId,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.itemId=r),options:h.value,onSelect:T,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"label",class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("itemId")}])},{option:b(({option:r})=>[s("div",re,[s("span",null,o(r.label),1),s("span",le,o(r.type),1)])]),_:1},8,["modelValue","options","class"]),a.value.hasOwnProperty("itemId")?(d(),c("p",oe,o(a.value.itemId[0]),1)):p("",!0)]),s("div",de,[ne,u(C,{modelValue:e.value.price,"onUpdate:modelValue":t[3]||(t[3]=r=>e.value.price=r),size:"1",class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("price")}])},null,8,["modelValue","class"]),a.value.hasOwnProperty("price")?(d(),c("p",ie,o(a.value.price[0]),1)):p("",!0)]),s("div",ce,[ue,u(C,{modelValue:e.value.discount,"onUpdate:modelValue":t[4]||(t[4]=r=>e.value.discount=r),size:"1",class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("discount")}])},null,8,["modelValue","class"]),a.value.hasOwnProperty("discount")?(d(),c("p",pe,o(a.value.discount[0]),1)):p("",!0)])])],40,G)]),footer:b(()=>[s("button",{class:"mr-2 btn-blue",disabled:y.value,form:"form"},[u(Q,{"is-loading":y.value},{default:b(()=>[k("Save")]),_:1},8,["is-loading"])],8,me),s("button",{onClick:P,class:"btn-gray"},"Cancel")]),_:1}))}});export{_e as default};
