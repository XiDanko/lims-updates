import{d as y,e as s,x as S,E as u,bV as f,s as g,o as p,C as k,w as l,k as m,b as e,h as C,v as V,n as E,c as B,t as M,i as v,f as N,a as D,_ as G,V as T,A as $,S as A}from"./main-c1f62c61.js";const O=["onSubmit"],P={class:"flex flex-wrap items-start"},U=e("span",{class:"w-full p-1 font-semibold"},"Details",-1),z={key:0,class:"w-full text-red-500 text-sm"},I=["disabled"],j=y({__name:"ExpenseGenerationModal",props:{type:null},emits:["close"],setup(_,{emit:b}){const x=_,a=s(!1),n=s(!1),i=s([]),r=s(""),t=s({});S(()=>{u.on(f.Show,o=>{n.value=!0,i.value=o})}),g(()=>u.off(f.Show));const h=async()=>{a.value=!0;try{await $.post(`/api/${x.type}s/generate-expense`,{ids:i.value,details:r.value}),A.fire(),d()}catch(o){t.value=o.response.data.errors??{}}a.value=!1},d=()=>{n.value=!1,b("close")};return(o,c)=>n.value?(p(),k(T,{key:0},{header:l(()=>[m("Generate Expense")]),body:l(()=>[e("form",{id:"form",onSubmit:N(h,["prevent","stop"])},[e("div",P,[U,C(e("textarea",{"onUpdate:modelValue":c[0]||(c[0]=w=>r.value=w),class:E(["flex-1 p-2 border border-gray-300 rounded focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("details")}])},null,2),[[V,r.value]]),t.value.hasOwnProperty("details")?(p(),B("p",z,M(t.value.details[0]),1)):v("",!0)])],40,O)]),footer:l(()=>[e("button",{class:"btn-blue mr-2",disabled:a.value,form:"form"},[D(G,{"is-loading":a.value},{default:l(()=>[m("Save")]),_:1},8,["is-loading"])],8,I),e("button",{onClick:d,class:"btn-gray"},"Cancel")]),_:1})):v("",!0)}});export{j as _};