import{d as E,f as F,e as M,u as $,g as b,x as A,Q as h,o as t,R as V,w as p,m as k,t as v,i as l,b as a,c as f,a as C,n as _,k as d,j as y,v as w,h as R,_ as T,a5 as D,a0 as j}from"./main-cee2eb24.js";import{b as z}from"./toggle-afba85dd.js";import{s as L}from"./multiselect-97a39018.js";import{F as n}from"./formMode-f60a729f.js";const Q=["onSubmit"],W={key:0,class:"mb-3 flex flex-wrap items-center"},q=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),G={key:0,class:"ml-24 w-full text-sm text-red-500"},H={class:"mb-3 flex flex-wrap items-center"},J=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Code",-1),K={key:0,class:"ml-24 w-full text-sm text-red-500"},X={class:"mb-3 flex flex-wrap items-center"},Y=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),Z={key:0,class:"ml-24 w-full text-sm text-red-500"},ee={class:"flex flex-wrap items-center"},ae=a("span",{class:"w-full"},"Notes",-1),se=["disabled"],ne=E({__name:"ServiceForm",emits:["close"],setup(re,{emit:S}){const x=F(),I=M(),u=$().user.branches,e=b({}),c=b(n.Create),i=b(!1),r=b({});A(()=>{u.length===1&&(e.value.branchId=u[0].id),x.path.endsWith("/edit")&&(c.value=n.Edit,N(x.params.id))});const N=async m=>{const{data:s}=await h.get(`/api/services/${m}`);e.value=s.data},O=async()=>{i.value=!0;try{c.value===n.Create?await P():await B(),j.fire()}catch(m){r.value=m.response.data.errors??{}}i.value=!1},P=async()=>{await h.post("/api/services",e.value),U()},B=async()=>{await h.patch(`/api/services/${e.value.id}`,e.value),g()},U=()=>{e.value={branchId:e.value.branchId},r.value=[]},g=()=>{S("close"),I.back()};return(m,s)=>(t(),V(D,null,{header:p(()=>[k(v(c.value===l(n).Create?"Create New Service":"Edit Service"),1)]),body:p(()=>[a("form",{id:"form",onSubmit:R(O,["prevent","stop"])},[l(u).length>1?(t(),f("div",W,[q,C(l(L),{modelValue:e.value.branchId,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value.branchId=o),options:l(u),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:_(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":r.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),r.value.hasOwnProperty("branchId")?(t(),f("p",G,v(r.value.branchId[0]),1)):d("",!0)])):d("",!0),a("div",H,[J,y(a("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.code=o),class:_(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("code")}])},null,2),[[w,e.value.code]]),r.value.hasOwnProperty("code")?(t(),f("p",K,v(r.value.code[0]),1)):d("",!0)]),a("div",X,[Y,y(a("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.value.name=o),class:_(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("name")}])},null,2),[[w,e.value.name]]),r.value.hasOwnProperty("name")?(t(),f("p",Z,v(r.value.name[0]),1)):d("",!0)]),a("div",ee,[ae,y(a("textarea",{"onUpdate:modelValue":s[3]||(s[3]=o=>e.value.notes=o),rows:"4",class:"flex-1 rounded border border-gray-300 p-2 focus:border-blue-500"},null,512),[[w,e.value.notes]])])],40,Q)]),footer:p(()=>[a("button",{class:"mr-2 btn-blue",disabled:i.value,form:"form"},[C(T,{"is-loading":i.value},{default:p(()=>[k("Save")]),_:1},8,["is-loading"])],8,se),a("button",{onClick:g,class:"btn-gray"},"Cancel"),c.value===l(n).Edit?(t(),V(l(z),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":s[4]||(s[4]=o=>e.value.isActive=o),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):d("",!0)]),_:1}))}});export{ne as default};
