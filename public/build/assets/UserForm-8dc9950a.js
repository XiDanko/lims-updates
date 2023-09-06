import{d as L,f as Q,e as W,g as u,u as q,x as G,Q as b,o as d,R as U,w as _,m as N,t as i,i as l,b as s,c,a as p,n as m,k as n,j as D,v as C,h as H,_ as J,a5 as K,a0 as X}from"./main-5548143a.js";import{s as V}from"./multiselect-30de6652.js";import{b as R}from"./toggle-af3738b3.js";import{u as Y,_ as Z}from"./permissionsTree-a6d8c8f4.js";import{F as v}from"./formMode-f60a729f.js";const ee=["onSubmit"],ae={key:0,class:"mb-3 flex flex-wrap items-start"},re=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branches",-1),se={key:0,class:"ml-28 w-full text-sm text-red-500"},oe={class:"mb-3 flex flex-wrap items-center"},te=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),le={key:0,class:"ml-28 w-full text-sm text-red-500"},de={class:"mb-3 flex flex-wrap items-center"},ne=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Username",-1),ue={key:0,class:"ml-28 w-full text-sm text-red-500"},ie={class:"mb-3 flex flex-wrap items-center"},ce=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Password",-1),pe={key:0,class:"ml-28 w-full text-sm text-red-500"},be={class:"mb-3 flex flex-wrap items-start"},me=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Roles",-1),ve={key:0,class:"ml-28 w-full text-sm text-red-500"},fe={class:"mb-3 flex flex-wrap items-start"},ye=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Partner",-1),he={class:"mb-3 flex flex-wrap items-start"},ge=s("span",{class:"w-28 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Signature",-1),we={class:"mb-3 flex flex-wrap items-start"},xe=s("span",{class:"w-48 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"View Departments",-1),_e={class:"mb-3 flex flex-wrap items-start"},Ve=s("span",{class:"w-48 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Authorize Departments",-1),Pe=s("p",{class:"mb-1 pr-2"},"Special Permissions",-1),ke=["disabled"],Ne=L({__name:"UserForm",emits:["close"],setup(Ue,{emit:$}){const O=Q(),j=W(),e=u({}),P=u([]),f=q().user.branches,y=u([]),{getPermissionsTree:z}=Y(),h=u(v.Create),g=u(!1),o=u({}),k=u(null);G(async()=>{f.length===1&&(e.value={branches:[f[0]]},w(),x()),O.path.endsWith("/edit")&&(h.value=v.Edit,await A(O.params.id)),k.value=await z()});const A=async t=>{const{data:a}=await b.get(`/api/users/${t}`);e.value=a.data,w(),x()},w=async()=>{const t=e.value.branches.flatMap(r=>r.id),{data:a}=await b.get(`/api/roles/list?branchId=${t.join(",")}`);P.value=a.data},x=async()=>{const t=e.value.branches.flatMap(r=>r.id),{data:a}=await b.get(`/api/departments/list?branchId=${t.join(",")}`);y.value=a.data},S=async()=>{P.value=[],y.value=[],e.value.roles=[],e.value.viewableDepartments=[],e.value.authorizableDepartments=[],x(),w()},I=t=>{const a=t.target.files[0],r=new FileReader;r.readAsDataURL(a),r.onload=()=>e.value.signature=r.result},M=async()=>{g.value=!0;try{h.value===v.Create?await T():await B(),o.value={},X.fire()}catch(t){o.value=t.response.data.errors??{}}g.value=!1},T=async()=>{await b.post("/api/users",e.value),E()},B=async()=>{await b.patch(`/api/users/${e.value.id}`,e.value),F()},E=()=>{e.value={branches:e.value.branches},o.value=[]},F=()=>{$("close"),j.back()};return(t,a)=>(d(),U(K,null,{header:_(()=>[N(i(h.value===l(v).Create?"Create New User":"Edit User"),1)]),body:_(()=>[s("form",{id:"form",onSubmit:H(M,["prevent","stop"])},[l(f).length>1?(d(),c("div",ae,[re,p(l(V),{modelValue:e.value.branches,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value.branches=r),mode:"tags",options:l(f),searchable:!0,object:!0,"value-prop":"id","track-by":"searchableForm",label:"name",onSelect:a[1]||(a[1]=r=>{w(),x()}),onDeselect:S,onClear:S,class:m(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":o.value.hasOwnProperty("name")}])},null,8,["modelValue","options","class"]),o.value.hasOwnProperty("branches")?(d(),c("p",se,i(o.value.branches[0]),1)):n("",!0)])):n("",!0),s("div",oe,[te,D(s("input",{"onUpdate:modelValue":a[2]||(a[2]=r=>e.value.name=r),class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("name")}])},null,2),[[C,e.value.name]]),o.value.hasOwnProperty("name")?(d(),c("p",le,i(o.value.name[0]),1)):n("",!0)]),s("div",de,[ne,D(s("input",{"onUpdate:modelValue":a[3]||(a[3]=r=>e.value.username=r),class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("username")}])},null,2),[[C,e.value.username]]),o.value.hasOwnProperty("username")?(d(),c("p",ue,i(o.value.username[0]),1)):n("",!0)]),s("div",ie,[ce,D(s("input",{type:"password","onUpdate:modelValue":a[4]||(a[4]=r=>e.value.password=r),class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("password")}])},null,2),[[C,e.value.password]]),o.value.hasOwnProperty("password")?(d(),c("p",pe,i(o.value.password[0]),1)):n("",!0)]),s("div",be,[me,p(l(V),{modelValue:e.value.roles,"onUpdate:modelValue":a[5]||(a[5]=r=>e.value.roles=r),mode:"tags",options:P.value,searchable:!0,object:!0,"value-prop":"name",label:"displayName","track-by":"displayName",class:m(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":o.value.hasOwnProperty("roles")}])},null,8,["modelValue","options","class"]),o.value.hasOwnProperty("roles")?(d(),c("p",ve,i(o.value.roles[0]),1)):n("",!0)]),s("div",fe,[ye,p(l(R),{modelValue:e.value.isPartner,"onUpdate:modelValue":a[6]||(a[6]=r=>e.value.isPartner=r),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])]),s("div",he,[ge,s("input",{type:"file",onChange:I,accept:"image/*",size:"1",class:"flex-1 border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500"},null,32)]),s("div",we,[xe,p(l(V),{modelValue:e.value.viewableDepartments,"onUpdate:modelValue":a[7]||(a[7]=r=>e.value.viewableDepartments=r),mode:"tags",options:y.value,searchable:!0,object:!0,"value-prop":"id","track-by":"searchableForm",label:"name",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),s("div",_e,[Ve,p(l(V),{modelValue:e.value.authorizableDepartments,"onUpdate:modelValue":a[8]||(a[8]=r=>e.value.authorizableDepartments=r),mode:"tags",options:y.value,searchable:!0,object:!0,"value-prop":"id","track-by":"searchableForm",label:"name",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),s("div",null,[Pe,k.value?(d(),U(Z,{key:0,options:k.value,modelValue:e.value.directPermissions,"onUpdate:modelValue":a[9]||(a[9]=r=>e.value.directPermissions=r),class:"overflow-y-auto rounded border border-gray-300 py-2 max-h-[200px]"},null,8,["options","modelValue"])):n("",!0)])],40,ee)]),footer:_(()=>[s("button",{class:"mr-2 btn-blue",disabled:g.value,form:"form"},[p(J,{"is-loading":g.value},{default:_(()=>[N("Save")]),_:1},8,["is-loading"])],8,ke),s("button",{onClick:F,class:"btn-gray"},"Cancel"),h.value===l(v).Edit?(d(),U(l(R),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":a[10]||(a[10]=r=>e.value.isActive=r),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):n("",!0)]),_:1}))}});export{Ne as default};