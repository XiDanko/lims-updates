import{d as E,f as A,e as R,g as u,u as T,x as j,Q as h,o,R as k,w as f,m as C,t as c,i as l,b as t,c as i,a as g,n as y,k as d,j as I,v as M,h as q,_ as z,a5 as L,a0 as Q}from"./main-bf2af1c2.js";import{b as W}from"./toggle-1b27a25d.js";import{s as O}from"./multiselect-4f06085e.js";import{F as m}from"./formMode-f60a729f.js";const G=["onSubmit"],H={key:0,class:"mb-3 flex flex-wrap items-center"},J=t("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),K={key:0,class:"ml-28 w-full text-sm text-red-500"},X={class:"mb-3 flex flex-wrap items-center"},Y=t("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Code",-1),Z={key:0,class:"ml-28 w-full text-sm text-red-500"},ee={class:"mb-3 flex flex-wrap items-center"},ae=t("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),re={key:0,class:"ml-28 w-full text-sm text-red-500"},te={class:"flex flex-wrap items-start"},se=t("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Departments",-1),oe={key:0,class:"ml-28 w-full text-sm text-red-500"},le=["disabled"],me=E({__name:"MachineForm",emits:["close"],setup(ne,{emit:P}){const w=A(),F=R(),e=u({}),x=u([]),p=T().user.branches,b=u(m.Create),v=u(!1),a=u({});j(()=>{p.length===1&&(e.value.branchId=p[0].id,_()),w.path.endsWith("/edit")&&(b.value=m.Edit,N(w.params.id)),S()});const S=()=>{e.value.code=w.query.code??""},_=async()=>{const{data:n}=await h.get(`/api/departments/list?branchId=${e.value.branchId}`);x.value=n.data},N=async n=>{const{data:r}=await h.get(`/api/machines/${n}`);e.value=r.data,_()},U=async()=>{v.value=!0;try{b.value===m.Create?await $():await B(),a.value={},Q.fire()}catch(n){a.value=n.response.data.errors??{}}v.value=!1},$=async()=>{await h.post("/api/machines",e.value),D()},B=async()=>{await h.patch(`/api/machines/${e.value.id}`,e.value),V()},D=()=>{e.value={branchId:e.value.branchId},a.value=[]},V=()=>{P("close"),F.back()};return(n,r)=>(o(),k(L,null,{header:f(()=>[C(c(b.value===l(m).Create?"Create New Machine":"Edit Machine"),1)]),body:f(()=>[t("form",{id:"form",onSubmit:q(U,["prevent","stop"])},[l(p).length>1?(o(),i("div",H,[J,g(l(O),{modelValue:e.value.branchId,"onUpdate:modelValue":r[0]||(r[0]=s=>e.value.branchId=s),options:l(p),onSelect:_,onChange:r[1]||(r[1]=s=>e.value.departments=[]),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:y(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("branchId")?(o(),i("p",K,c(a.value.branchId[0]),1)):d("",!0)])):d("",!0),t("div",X,[Y,I(t("input",{"onUpdate:modelValue":r[2]||(r[2]=s=>e.value.code=s),class:y(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("code")}])},null,2),[[M,e.value.code]]),a.value.hasOwnProperty("code")?(o(),i("p",Z,c(a.value.code[0]),1)):d("",!0)]),t("div",ee,[ae,I(t("input",{"onUpdate:modelValue":r[3]||(r[3]=s=>e.value.name=s),class:y(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("name")}])},null,2),[[M,e.value.name]]),a.value.hasOwnProperty("name")?(o(),i("p",re,c(a.value.name[0]),1)):d("",!0)]),t("div",te,[se,g(l(O),{modelValue:e.value.departments,"onUpdate:modelValue":r[4]||(r[4]=s=>e.value.departments=s),mode:"tags",options:x.value,searchable:!0,object:!0,"value-prop":"id","track-by":"searchableForm",label:"name",class:y(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("departments")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("departments")?(o(),i("p",oe,c(a.value.departments[0]),1)):d("",!0)])],40,G)]),footer:f(()=>[t("button",{class:"mr-2 btn-blue",disabled:v.value,form:"form"},[g(z,{"is-loading":v.value},{default:f(()=>[C("Save")]),_:1},8,["is-loading"])],8,le),t("button",{onClick:V,class:"btn-gray"},"Cancel"),b.value===l(m).Edit?(o(),k(l(W),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":r[5]||(r[5]=s=>e.value.isActive=s),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):d("",!0)]),_:1}))}});export{me as default};
