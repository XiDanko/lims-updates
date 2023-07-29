import{d as O,f as $,e as F,g as l,u as M,x as D,Q as y,o as r,R as x,w as c,m as g,t as m,i as p,b as s,c as b,a as k,n as N,k as n,j as E,v as U,h as j,_ as z,a5 as A,a0 as L}from"./main-cee2eb24.js";import{u as Q,_ as W}from"./permissionsTree-e8284085.js";import{s as q}from"./multiselect-97a39018.js";import{F as v}from"./formMode-f60a729f.js";const G=["onSubmit"],H={key:0,class:"mb-3 flex flex-wrap items-center"},J=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),K={key:0,class:"ml-24 w-full text-sm text-red-500"},X={class:"mb-3 flex flex-wrap items-center"},Y=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),Z={key:0,class:"ml-24 w-full text-sm text-red-500"},ee=s("p",{class:"mb-1 pr-2"},"Permissions",-1),ae={key:0,class:"mb-1 text-sm text-red-500"},se=["disabled"],de=O({__name:"RoleForm",emits:["close"],setup(oe,{emit:V}){const _=$(),C=F(),e=l({}),{getPermissionsTree:P}=Q(),f=l(v.Create),d=l(!1),a=l({}),h=l(null),i=M().user.branches;D(async()=>{i.length===1&&(e.value.branchId=i[0].id),_.path.endsWith("/edit")&&(f.value=v.Edit,await I(_.params.id)),h.value=await P()});const I=async u=>{const{data:o}=await y.get(`/api/roles/${u}`);e.value=o.data},R=async()=>{d.value=!0;try{f.value===v.Create?await S():await T(),L.fire()}catch(u){a.value=u.response.data.errors??{}}d.value=!1},S=async()=>{await y.post("/api/roles",e.value),B()},T=async()=>{await y.patch(`/api/roles/${e.value.id}`,e.value),w()},B=()=>{e.value={},a.value=[]},w=()=>{V("close"),C.back()};return(u,o)=>(r(),x(A,null,{header:c(()=>[g(m(f.value===p(v).Create?"Create New Role":"Edit Role"),1)]),body:c(()=>[s("form",{id:"form",onSubmit:j(R,["prevent","stop"])},[p(i).length>1?(r(),b("div",H,[J,k(p(q),{modelValue:e.value.branchId,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value.branchId=t),options:p(i),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:N(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("branchId")?(r(),b("p",K,m(a.value.branchId[0]),1)):n("",!0)])):n("",!0),s("div",X,[Y,E(s("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>e.value.displayName=t),class:N(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("displayName")}])},null,2),[[U,e.value.displayName]]),a.value.hasOwnProperty("displayName")?(r(),b("p",Z,m(a.value.displayName[0]),1)):n("",!0)]),s("div",null,[ee,a.value.hasOwnProperty("permissions")?(r(),b("p",ae,m(a.value.permissions[0]),1)):n("",!0),h.value?(r(),x(W,{key:1,options:h.value,modelValue:e.value.permissions,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value.permissions=t),class:"overflow-y-auto rounded border border-gray-300 py-2 max-h-[250px]"},null,8,["options","modelValue"])):n("",!0)])],40,G)]),footer:c(()=>[s("button",{class:"mr-2 btn-blue",disabled:d.value,form:"form"},[k(z,{"is-loading":d.value},{default:c(()=>[g("Save")]),_:1},8,["is-loading"])],8,se),s("button",{onClick:w,class:"btn-gray"},"Cancel")]),_:1}))}});export{de as default};
