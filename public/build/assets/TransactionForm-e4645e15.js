import{d as $,e as l,y as B,a8 as f,x as M,Q as d,o as b,R as S,w as u,k as y,t as _,g as E,b as s,a as h,n as F,c as z,i as D,h as I,v as R,f as O,_ as P,a9 as U,m as A,l as L,Z as Q}from"./main-6e47ceb6.js";import{_ as W}from"./CurrencyInput.vue_vue_type_script_setup_true_lang-1a19a39b.js";import{F as r}from"./formMode-f60a729f.js";import{T as Z}from"./transactionType-ff7c4360.js";const j=["onSubmit"],q={class:"flex flex-wrap items-center mb-3"},G=s("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Amount",-1),H={key:0,class:"w-full ml-24 text-red-500 text-sm"},J={class:"flex flex-wrap items-center mb-3"},K=s("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Notes",-1),X=["disabled"],oe=$({__name:"TransactionForm",emits:["close"],setup(Y,{emit:w}){const o=A(),g=L(),e=l({}),m=l({}),n=l(r.Create),i=l(!1),c=l([]),x=B(()=>{let t;return n.value===r.Create?t="Create New "+f.capitalize(o.params.type):n.value===r.Edit&&(t="Edit "+f.capitalize(e.value.type)),t});M(async()=>{e.value.type=o.params.type,o.path.endsWith("/edit")&&(n.value=r.Edit,C(o.params.id)),n.value===r.Create&&(await T(o.params.id),o.params.type!==Z.Discount&&(e.value.amount=Math.abs(m.value.dueBalance)))});const C=async t=>{const{data:a}=await d.get(`/api/transactions/${t}`);e.value=a.data,m.value=a.data.invoice},T=async t=>{const{data:a}=await d.get(`/api/invoices/${t}`);m.value=a.data,e.value.invoiceId=a.data.id},V=async()=>{i.value=!0;try{n.value===r.Create?await k():await N(),Q.fire()}catch(t){c.value=t.response.data.errors??{}}i.value=!1},k=async()=>{await d.post("/api/transactions",e.value),p()},N=async()=>{await d.patch(`/api/transactions/${e.value.id}`,e.value),p()},p=()=>{w("close"),g.back()};return(t,a)=>(b(),S(U,null,{header:u(()=>[y(_(E(x)),1)]),body:u(()=>[s("form",{id:"form",onSubmit:O(V,["prevent","stop"])},[s("div",q,[G,h(W,{modelValue:e.value.amount,"onUpdate:modelValue":a[0]||(a[0]=v=>e.value.amount=v),class:F(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":c.value.hasOwnProperty("amount")}])},null,8,["modelValue","class"]),c.value.hasOwnProperty("amount")?(b(),z("p",H,_(c.value.amount[0]),1)):D("",!0)]),s("div",J,[K,I(s("input",{"onUpdate:modelValue":a[1]||(a[1]=v=>e.value.notes=v),class:"flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500"},null,512),[[R,e.value.notes]])])],40,j)]),footer:u(()=>[s("button",{class:"btn-blue mr-2",disabled:i.value,form:"form"},[h(P,{"is-loading":i.value},{default:u(()=>[y("Save")]),_:1},8,["is-loading"])],8,X),s("button",{onClick:p,class:"btn-gray"},"Cancel")]),_:1}))}});export{oe as default};