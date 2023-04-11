import{d as A,u as E,e as b,x as F,A as h,o as t,C as V,w as p,k,t as v,g as l,b as a,c as f,a as C,n as _,i as d,h as y,v as w,f as M,_ as $,V as T,m as D,l as R,S as z}from"./main-c1f62c61.js";import{b as L}from"./toggle-b89396fa.js";import{s as W}from"./multiselect-ffe70d49.js";import{F as n}from"./formMode-f60a729f.js";const j=["onSubmit"],q={key:0,class:"flex flex-wrap items-center mb-3"},G=a("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),H={key:0,class:"ml-24 w-full text-red-500 text-sm"},J={class:"flex flex-wrap items-center mb-3"},K=a("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Code",-1),Q={key:0,class:"w-full ml-24 text-red-500 text-sm"},X={class:"flex flex-wrap items-center mb-3"},Y=a("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Name",-1),Z={key:0,class:"w-full ml-24 text-red-500 text-sm"},ee={class:"flex flex-wrap items-center"},ae=a("span",{class:"w-full"},"Notes",-1),se=["disabled"],ne=A({__name:"ServiceForm",emits:["close"],setup(re,{emit:S}){const x=D(),I=R(),u=E().user.branches,e=b({}),c=b(n.Create),i=b(!1),r=b({});F(()=>{u.length===1&&(e.value.branchId=u[0].id),x.path.endsWith("/edit")&&(c.value=n.Edit,N(x.params.id))});const N=async m=>{const{data:s}=await h.get(`/api/services/${m}`);e.value=s.data},O=async()=>{i.value=!0;try{c.value===n.Create?await P():await B(),z.fire()}catch(m){r.value=m.response.data.errors??{}}i.value=!1},P=async()=>{await h.post("/api/services",e.value),U()},B=async()=>{await h.patch(`/api/services/${e.value.id}`,e.value),g()},U=()=>{e.value={branchId:e.value.branchId},r.value=[]},g=()=>{S("close"),I.back()};return(m,s)=>(t(),V(T,null,{header:p(()=>[k(v(c.value===l(n).Create?"Create New Service":"Edit Service"),1)]),body:p(()=>[a("form",{id:"form",onSubmit:M(O,["prevent","stop"])},[l(u).length>1?(t(),f("div",q,[G,C(l(W),{modelValue:e.value.branchId,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value.branchId=o),options:l(u),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:_(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":r.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),r.value.hasOwnProperty("branchId")?(t(),f("p",H,v(r.value.branchId[0]),1)):d("",!0)])):d("",!0),a("div",J,[K,y(a("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.code=o),class:_(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("code")}])},null,2),[[w,e.value.code]]),r.value.hasOwnProperty("code")?(t(),f("p",Q,v(r.value.code[0]),1)):d("",!0)]),a("div",X,[Y,y(a("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.value.name=o),class:_(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("name")}])},null,2),[[w,e.value.name]]),r.value.hasOwnProperty("name")?(t(),f("p",Z,v(r.value.name[0]),1)):d("",!0)]),a("div",ee,[ae,y(a("textarea",{"onUpdate:modelValue":s[3]||(s[3]=o=>e.value.notes=o),rows:"4",class:"flex-1 p-2 border border-gray-300 rounded focus:border-blue-500"},null,512),[[w,e.value.notes]])])],40,j)]),footer:p(()=>[a("button",{class:"btn-blue mr-2",disabled:i.value,form:"form"},[C($,{"is-loading":i.value},{default:p(()=>[k("Save")]),_:1},8,["is-loading"])],8,se),a("button",{onClick:g,class:"btn-gray"},"Cancel"),c.value===l(n).Edit?(t(),V(l(L),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":s[4]||(s[4]=o=>e.value.isActive=o),class:"ml-auto toggle:off:red"},null,8,["modelValue"])):d("",!0)]),_:1}))}});export{ne as default};