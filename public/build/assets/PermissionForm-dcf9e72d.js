import{d as k,f as N,e as P,g as n,x as S,Q as d,o as p,R as V,w as i,m as f,t as v,i as B,b as s,j as M,v as $,n as E,c as F,k as R,h as T,a as D,_ as O,a5 as j,a0 as z}from"./main-bf2af1c2.js";import{F as l}from"./formMode-f60a729f.js";const I=["onSubmit"],L={class:"flex flex-wrap items-center"},Q=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),U={key:0,class:"ml-24 w-full text-sm text-red-500"},W=["disabled"],H=k({__name:"PermissionForm",emits:["close"],setup(q,{emit:_}){const u=N(),b=P(),e=n({}),c=n(l.Create),t=n(!1),a=n({});S(()=>{u.path.endsWith("/edit")&&(c.value=l.Edit,h(u.params.id))});const h=async o=>{const{data:r}=await d.get(`/api/permissions/${o}`);e.value=r.data},w=async()=>{t.value=!0;try{c.value===l.Create?await y():await x(),a.value={},z.fire()}catch(o){a.value=o.response.data.errors??{}}t.value=!1},y=async()=>{await d.post("/api/permissions",e.value),g()},x=async()=>{await d.patch(`/api/permissions/${e.value.id}`,e.value),m()},g=()=>{e.value={},a.value=[]},m=()=>{_("close"),b.back()};return(o,r)=>(p(),V(j,null,{header:i(()=>[f(v(c.value===B(l).Create?"Create New Permission":"Edit Permission"),1)]),body:i(()=>[s("form",{id:"form",onSubmit:T(w,["prevent","stop"])},[s("div",L,[Q,M(s("input",{"onUpdate:modelValue":r[0]||(r[0]=C=>e.value.name=C),class:E(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("name")}])},null,2),[[$,e.value.name]]),a.value.hasOwnProperty("name")?(p(),F("p",U,v(a.value.name[0]),1)):R("",!0)])],40,I)]),footer:i(()=>[s("button",{class:"mr-2 btn-blue",disabled:t.value,form:"form"},[D(O,{"is-loading":t.value},{default:i(()=>[f("Save")]),_:1},8,["is-loading"])],8,W),s("button",{onClick:m,class:"btn-gray"},"Cancel")]),_:1}))}});export{H as default};
