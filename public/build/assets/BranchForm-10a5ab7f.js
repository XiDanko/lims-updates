import{d as P,e as c,x as $,A as m,B as A,o as u,C as h,w as i,k as y,t as p,g as v,b as a,h as w,v as g,n as x,c as k,i as b,f as D,a as F,_ as T,V as U,m as R,l as z,S as I}from"./main-c1f62c61.js";import{b as L}from"./toggle-b89396fa.js";import{F as r}from"./formMode-f60a729f.js";const W=["onSubmit"],j={class:"flex flex-wrap items-center mb-3"},q=a("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Code",-1),G={key:0,class:"w-full ml-24 text-red-500 text-sm"},H={class:"flex flex-wrap items-center"},J=a("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Name",-1),K={key:0,class:"w-full ml-24 text-red-500 text-sm"},Q=["disabled"],ae=P({__name:"BranchForm",emits:["close"],setup(X,{emit:C}){const f=R(),V=z(),e=c({}),l=c(r.Create),n=c(!1),s=c([]);$(()=>{f.path.endsWith("/edit")&&(l.value=r.Edit,B(f.params.id))});const B=async d=>{const{data:t}=await m.get(`/api/branches/${d}`);e.value=t.data},N=async()=>{n.value=!0;try{l.value===r.Create?await S():await E(),I.fire()}catch(d){s.value=d.response.data.errors??{}}n.value=!1},S=async()=>{await m.post("/api/branches",e.value),M()},E=async()=>{await m.patch(`/api/branches/${e.value.id}`,e.value),_()},M=()=>{e.value={},s.value=[]},_=()=>{C("close"),V.back()};return(d,t)=>{const O=A("maska");return u(),h(U,null,{header:i(()=>[y(p(l.value===v(r).Create?"Create New Branch":"Edit Branch"),1)]),body:i(()=>[a("form",{id:"form",onSubmit:D(N,["prevent","stop"])},[a("div",j,[q,w(a("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.code=o),"data-maska":"##",class:x(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("code")}])},null,2),[[g,e.value.code],[O]]),s.value.hasOwnProperty("code")?(u(),k("p",G,p(s.value.code[0]),1)):b("",!0)]),a("div",H,[J,w(a("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.name=o),class:x(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":s.value.hasOwnProperty("name")}])},null,2),[[g,e.value.name]]),s.value.hasOwnProperty("name")?(u(),k("p",K,p(s.value.name[0]),1)):b("",!0)])],40,W)]),footer:i(()=>[a("button",{class:"btn-blue mr-2",disabled:n.value,form:"form"},[F(T,{"is-loading":n.value},{default:i(()=>[y("Save")]),_:1},8,["is-loading"])],8,Q),a("button",{onClick:_,class:"btn-gray"},"Cancel"),l.value===v(r).Edit?(u(),h(v(L),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.isActive=o),class:"ml-auto toggle:off:red"},null,8,["modelValue"])):b("",!0)]),_:1})}}});export{ae as default};
