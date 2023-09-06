import{d as P,f as $,e as D,g as c,x as F,Q as m,V as R,o as u,R as h,w as i,m as y,t as v,i as p,b as s,j as w,v as g,n as x,c as k,k as b,h as T,a as U,_ as A,a5 as j,a0 as z}from"./main-5548143a.js";import{b as I}from"./toggle-af3738b3.js";import{F as r}from"./formMode-f60a729f.js";const L=["onSubmit"],Q={class:"mb-3 flex flex-wrap items-center"},W=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Code",-1),q={key:0,class:"ml-24 w-full text-sm text-red-500"},G={class:"flex flex-wrap items-center"},H=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),J={key:0,class:"ml-24 w-full text-sm text-red-500"},K=["disabled"],ae=P({__name:"BranchForm",emits:["close"],setup(X,{emit:C}){const f=$(),V=D(),e=c({}),l=c(r.Create),n=c(!1),a=c({});F(()=>{f.path.endsWith("/edit")&&(l.value=r.Edit,B(f.params.id))});const B=async d=>{const{data:t}=await m.get(`/api/branches/${d}`);e.value=t.data},N=async()=>{n.value=!0;try{l.value===r.Create?await S():await E(),a.value={},z.fire()}catch(d){a.value=d.response.data.errors??{}}n.value=!1},S=async()=>{await m.post("/api/branches",e.value),M()},E=async()=>{await m.patch(`/api/branches/${e.value.id}`,e.value),_()},M=()=>{e.value={},a.value=[]},_=()=>{C("close"),V.back()};return(d,t)=>{const O=R("maska");return u(),h(j,null,{header:i(()=>[y(v(l.value===p(r).Create?"Create New Branch":"Edit Branch"),1)]),body:i(()=>[s("form",{id:"form",onSubmit:T(N,["prevent","stop"])},[s("div",Q,[W,w(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.code=o),"data-maska":"##",class:x(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("code")}])},null,2),[[g,e.value.code],[O]]),a.value.hasOwnProperty("code")?(u(),k("p",q,v(a.value.code[0]),1)):b("",!0)]),s("div",G,[H,w(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.name=o),class:x(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("name")}])},null,2),[[g,e.value.name]]),a.value.hasOwnProperty("name")?(u(),k("p",J,v(a.value.name[0]),1)):b("",!0)])],40,L)]),footer:i(()=>[s("button",{class:"mr-2 btn-blue",disabled:n.value,form:"form"},[U(A,{"is-loading":n.value},{default:i(()=>[y("Save")]),_:1},8,["is-loading"])],8,K),s("button",{onClick:_,class:"btn-gray"},"Cancel"),l.value===p(r).Edit?(u(),h(p(I),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.isActive=o),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):b("",!0)]),_:1})}}});export{ae as default};