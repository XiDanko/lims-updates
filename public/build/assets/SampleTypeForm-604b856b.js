import{d as A,e as m,u as F,x as M,Q as y,U as $,o,R as g,w as p,k as x,t as b,g as l,b as r,c as v,a as k,n as h,i as d,h as V,v as C,f as D,_ as E,a9 as R,m as z,l as X,Z}from"./main-56f58ed8.js";import{b as L}from"./toggle-876d3de4.js";import{s as Q}from"./multiselect-167e14f5.js";import{F as f}from"./formMode-f60a729f.js";const W=["onSubmit"],j={key:0,class:"flex flex-wrap items-center mb-3"},q=r("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),G={key:0,class:"ml-24 w-full text-red-500 text-sm"},H={class:"flex flex-wrap items-center mb-3"},J=r("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Code",-1),K={key:0,class:"w-full ml-24 text-red-500 text-sm"},Y={class:"flex flex-wrap items-center"},ee=r("span",{class:"w-24 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Name",-1),ae={key:0,class:"w-full ml-24 text-red-500 text-sm"},se=["disabled"],ne=A({__name:"SampleTypeForm",emits:["close"],setup(re,{emit:S}){const _=z(),I=X(),e=m({}),n=F().user.branches,u=m(f.Create),c=m(!1),a=m({});M(()=>{n.length===1&&(e.value.branchId=n[0].id),_.path.endsWith("/edit")&&(u.value=f.Edit,T(_.params.id))});const T=async i=>{const{data:s}=await y.get(`/api/sample-types/${i}`);e.value=s.data},N=async()=>{c.value=!0;try{u.value===f.Create?await O():await P(),Z.fire()}catch(i){a.value=i.response.data.errors??{}}c.value=!1},O=async()=>{await y.post("/api/sample-types",e.value),B()},P=async()=>{await y.patch(`/api/sample-types/${e.value.id}`,e.value),w()},B=()=>{e.value={branchId:e.value.branchId},a.value=[]},w=()=>{S("close"),I.back()};return(i,s)=>{const U=$("maska");return o(),g(R,null,{header:p(()=>[x(b(u.value===l(f).Create?"Create New Sample Type":"Edit Sample Type"),1)]),body:p(()=>[r("form",{id:"form",onSubmit:D(N,["prevent","stop"])},[l(n).length>1?(o(),v("div",j,[q,k(l(Q),{modelValue:e.value.branchId,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value.branchId=t),options:l(n),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:h(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("branchId")?(o(),v("p",G,b(a.value.branchId[0]),1)):d("",!0)])):d("",!0),r("div",H,[J,V(r("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>e.value.code=t),"data-maska":"X","data-maska-tokens":"X:[0-9a-zA-Z]",class:h(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("code")}])},null,2),[[C,e.value.code],[U]]),a.value.hasOwnProperty("code")?(o(),v("p",K,b(a.value.code[0]),1)):d("",!0)]),r("div",Y,[ee,V(r("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>e.value.name=t),class:h(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("name")}])},null,2),[[C,e.value.name]]),a.value.hasOwnProperty("name")?(o(),v("p",ae,b(a.value.name[0]),1)):d("",!0)])],40,W)]),footer:p(()=>[r("button",{class:"btn-blue mr-2",disabled:c.value,form:"form"},[k(E,{"is-loading":c.value},{default:p(()=>[x("Save")]),_:1},8,["is-loading"])],8,se),r("button",{onClick:w,class:"btn-gray"},"Cancel"),u.value==="edit"?(o(),g(l(L),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":s[3]||(s[3]=t=>e.value.isActive=t),class:"ml-auto toggle:off:red"},null,8,["modelValue"])):d("",!0)]),_:1})}}});export{ne as default};
