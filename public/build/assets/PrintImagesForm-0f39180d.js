import{d as $,f as A,e as E,g as d,u as L,x as M,Q as b,o as m,R as w,w as f,m as I,t as V,i as o,b as a,c as C,a as g,n as T,k as h,h as O,_ as j,a5 as z,al as H,a0 as Q}from"./main-0c5e983d.js";import{b as k}from"./toggle-f29ee038.js";import{s as S}from"./multiselect-f0516a60.js";import{F as n}from"./formMode-f60a729f.js";const W=["onSubmit"],q={key:0,class:"mb-3 flex flex-wrap items-center"},G=a("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),J={key:0,class:"ml-28 w-full text-sm text-red-500"},K={class:"mb-3 flex flex-wrap items-center"},X=a("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Logo",-1),Y={class:"mb-3 flex flex-wrap items-center"},Z=a("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Header",-1),ee={class:"mb-3 flex flex-wrap items-center"},ae=a("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"footer",-1),re={class:"mb-3 flex flex-wrap items-center"},se=a("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"watermark",-1),te={class:"mb-3 flex flex-wrap items-start"},oe=a("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Departments",-1),le={class:"flex flex-wrap items-center"},de=a("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Default",-1),ne=["disabled"],me=$({__name:"PrintImagesForm",emits:["close"],setup(ie,{emit:D}){const y=A(),F=E(),s=d({}),i=L().user.branches,x=d([]),u=d(n.Create),c=d(!1),l=d([]);M(()=>{i.length===1&&(s.value.branchId=i[0].id,v()),y.path.endsWith("/edit")&&(u.value=n.Edit,P(y.params.id))});const P=async t=>{const{data:e}=await b.get(`/api/print-images/${t}`);s.value=e.data,v()},v=async()=>{const{data:t}=await b.get(`/api/departments/list?branchId=${s.value.branchId}`);x.value=t.data},p=(t,e)=>{if(!t.target.files[0])s.value[e]="";else{const r=new FileReader;r.readAsDataURL(t.target.files[0]),r.onload=()=>s.value[e]=r.result}},B=async()=>{c.value=!0;try{u.value===n.Create?await N():await R(),H().fetch(),Q.fire()}catch(t){l.value=t.response.data.errors??{}}c.value=!1},N=async()=>{await b.post("/api/print-images",s.value),U()},R=async()=>{await b.patch(`/api/print-images/${s.value.id}`,s.value),_()},U=()=>{s.value={branchId:s.value.branchId},l.value=[]},_=()=>{D("close"),F.back()};return(t,e)=>(m(),w(z,null,{header:f(()=>[I(V(u.value===o(n).Create?"Create New Print Images":"Edit Print Images"),1)]),body:f(()=>[a("form",{id:"form",onSubmit:O(B,["prevent","stop"])},[o(i).length>1?(m(),C("div",q,[G,g(o(S),{modelValue:s.value.branchId,"onUpdate:modelValue":e[0]||(e[0]=r=>s.value.branchId=r),onSelect:v,options:o(i),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:T(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":l.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),l.value.hasOwnProperty("branchId")?(m(),C("p",J,V(l.value.branchId[0]),1)):h("",!0)])):h("",!0),a("div",K,[X,a("input",{type:"file",accept:"image/*",onChange:e[1]||(e[1]=r=>p(r,"logo")),class:"flex-1 rounded-r border border-gray-300 px-2 h-[42px] py-1.5 focus:border-blue-500"},null,32)]),a("div",Y,[Z,a("input",{type:"file",accept:"image/*",onChange:e[2]||(e[2]=r=>p(r,"header")),class:"flex-1 rounded-r border border-gray-300 px-2 h-[42px] py-1.5 focus:border-blue-500"},null,32)]),a("div",ee,[ae,a("input",{type:"file",accept:"image/*",onChange:e[3]||(e[3]=r=>p(r,"footer")),class:"flex-1 rounded-r border border-gray-300 px-2 h-[42px] py-1.5 focus:border-blue-500"},null,32)]),a("div",re,[se,a("input",{type:"file",accept:"image/*",onChange:e[4]||(e[4]=r=>p(r,"watermark")),class:"flex-1 rounded-r border border-gray-300 px-2 h-[42px] py-1.5 focus:border-blue-500"},null,32)]),a("div",te,[oe,g(o(S),{modelValue:s.value.departments,"onUpdate:modelValue":e[5]||(e[5]=r=>s.value.departments=r),mode:"tags",options:x.value,searchable:!0,object:!0,"value-prop":"id",label:"name","track-by":"searchableForm",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),a("div",le,[de,g(o(k),{modelValue:s.value.isDefault,"onUpdate:modelValue":e[6]||(e[6]=r=>s.value.isDefault=r),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])])],40,W)]),footer:f(()=>[a("button",{class:"mr-2 btn-blue",disabled:c.value,form:"form"},[g(j,{"is-loading":c.value},{default:f(()=>[I("Save")]),_:1},8,["is-loading"])],8,ne),a("button",{onClick:_,class:"btn-gray"},"Cancel"),u.value===o(n).Edit?(m(),w(o(k),{key:0,modelValue:s.value.isActive,"onUpdate:modelValue":e[7]||(e[7]=r=>s.value.isActive=r),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):h("",!0)]),_:1}))}});export{me as default};
