import{d as E,e as u,u as L,x as Q,Q as p,o as l,R as D,w as x,k as N,t as i,g as n,b as r,c,a as m,n as b,i as d,h as U,v as C,f as W,_ as Z,a9 as q,m as G,l as H,Z as J}from"./main-56f58ed8.js";import{s as V}from"./multiselect-167e14f5.js";import{b as K}from"./toggle-876d3de4.js";import{u as X,_ as Y}from"./permissionsTree-62eea85c.js";import{F as v}from"./formMode-f60a729f.js";const ee=["onSubmit"],ae={key:0,class:"flex flex-wrap items-start mb-3"},se=r("span",{class:"w-28 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branches",-1),re={key:0,class:"w-full ml-28 text-red-500 text-sm"},oe={class:"flex flex-wrap items-center mb-3"},te=r("span",{class:"w-28 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Name",-1),le={key:0,class:"w-full ml-28 text-red-500 text-sm"},ne={class:"flex flex-wrap items-center mb-3"},de=r("span",{class:"w-28 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Username",-1),ue={key:0,class:"w-full ml-28 text-red-500 text-sm"},ie={class:"flex flex-wrap items-center mb-3"},ce=r("span",{class:"w-28 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Password",-1),pe={key:0,class:"w-full ml-28 text-red-500 text-sm"},me={class:"flex flex-wrap items-start mb-3"},be=r("span",{class:"w-28 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Roles",-1),ve={key:0,class:"ml-28 w-full text-red-500 text-sm"},fe={class:"flex flex-wrap items-start mb-3"},ye=r("span",{class:"w-28 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Signature",-1),he={class:"flex flex-wrap items-start mb-3"},we=r("span",{class:"w-48 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"View Departments",-1),ge={class:"flex flex-wrap items-start mb-3"},_e=r("span",{class:"w-48 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Authorize Departments",-1),xe=r("p",{class:"mb-1 pr-2"},"Special Permissions",-1),Ve=["disabled"],Se=E({__name:"UserForm",emits:["close"],setup(ke,{emit:R}){const O=G(),$=H(),e=u({}),k=u([]),f=L().user.branches,y=u([]),{getPermissionsTree:j}=X(),h=u(v.Create),w=u(!1),o=u([]),P=u(null);Q(async()=>{f.length===1&&(e.value={branches:[f[0]]},g(),_()),O.path.endsWith("/edit")&&(h.value=v.Edit,await z(O.params.id)),P.value=await j()});const z=async t=>{const{data:a}=await p.get(`/api/users/${t}`);e.value=a.data,g(),_()},g=async()=>{const t=e.value.branches.flatMap(s=>s.id),{data:a}=await p.get(`/api/roles/list?branchId=${t.join(",")}`);k.value=a.data},_=async()=>{const t=e.value.branches.flatMap(s=>s.id),{data:a}=await p.get(`/api/departments/list?branchId=${t.join(",")}`);y.value=a.data},S=async()=>{k.value=[],y.value=[],e.value.roles=[],e.value.viewableDepartments=[],e.value.authorizableDepartments=[],_(),g()},A=t=>{const a=t.target.files[0],s=new FileReader;s.readAsDataURL(a),s.onload=()=>e.value.signature=s.result},I=async()=>{w.value=!0;try{h.value===v.Create?await M():await T(),J.fire()}catch(t){o.value=t.response.data.errors??{}}w.value=!1},M=async()=>{await p.post("/api/users",e.value),B()},T=async()=>{await p.patch(`/api/users/${e.value.id}`,e.value),F()},B=()=>{e.value={branches:e.value.branches},o.value=[]},F=()=>{R("close"),$.back()};return(t,a)=>(l(),D(q,null,{header:x(()=>[N(i(h.value===n(v).Create?"Create New User":"Edit User"),1)]),body:x(()=>[r("form",{id:"form",onSubmit:W(I,["prevent","stop"])},[n(f).length>1?(l(),c("div",ae,[se,m(n(V),{modelValue:e.value.branches,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.branches=s),mode:"tags",options:n(f),searchable:!0,object:!0,"value-prop":"id","track-by":"searchableForm",label:"name",onSelect:a[1]||(a[1]=s=>{g(),_()}),onDeselect:S,onClear:S,class:b(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":o.value.hasOwnProperty("name")}])},null,8,["modelValue","options","class"]),o.value.hasOwnProperty("branches")?(l(),c("p",re,i(o.value.branches[0]),1)):d("",!0)])):d("",!0),r("div",oe,[te,U(r("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>e.value.name=s),class:b(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("name")}])},null,2),[[C,e.value.name]]),o.value.hasOwnProperty("name")?(l(),c("p",le,i(o.value.name[0]),1)):d("",!0)]),r("div",ne,[de,U(r("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>e.value.username=s),class:b(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("username")}])},null,2),[[C,e.value.username]]),o.value.hasOwnProperty("username")?(l(),c("p",ue,i(o.value.username[0]),1)):d("",!0)]),r("div",ie,[ce,U(r("input",{type:"password","onUpdate:modelValue":a[4]||(a[4]=s=>e.value.password=s),class:b(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("password")}])},null,2),[[C,e.value.password]]),o.value.hasOwnProperty("password")?(l(),c("p",pe,i(o.value.password[0]),1)):d("",!0)]),r("div",me,[be,m(n(V),{modelValue:e.value.roles,"onUpdate:modelValue":a[5]||(a[5]=s=>e.value.roles=s),mode:"tags",options:k.value,searchable:!0,object:!0,"value-prop":"name",label:"displayName","track-by":"displayName",class:b(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":o.value.hasOwnProperty("roles")}])},null,8,["modelValue","options","class"]),o.value.hasOwnProperty("roles")?(l(),c("p",ve,i(o.value.roles[0]),1)):d("",!0)]),r("div",fe,[ye,r("input",{type:"file",onChange:A,accept:"image/*",size:"1",class:"flex-1 px-2 py-1 h-[42px] border border-gray-300 focus:border-blue-500"},null,32)]),r("div",he,[we,m(n(V),{modelValue:e.value.viewableDepartments,"onUpdate:modelValue":a[6]||(a[6]=s=>e.value.viewableDepartments=s),mode:"tags",options:y.value,searchable:!0,object:!0,"value-prop":"id","track-by":"searchableForm",label:"name",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),r("div",ge,[_e,m(n(V),{modelValue:e.value.authorizableDepartments,"onUpdate:modelValue":a[7]||(a[7]=s=>e.value.authorizableDepartments=s),mode:"tags",options:y.value,searchable:!0,object:!0,"value-prop":"id","track-by":"searchableForm",label:"name",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),r("div",null,[xe,P.value?(l(),D(Y,{key:0,options:P.value,modelValue:e.value.directPermissions,"onUpdate:modelValue":a[8]||(a[8]=s=>e.value.directPermissions=s),class:"max-h-[200px] overflow-y-auto border border-gray-300 py-2 rounded"},null,8,["options","modelValue"])):d("",!0)])],40,ee)]),footer:x(()=>[r("button",{class:"btn-blue mr-2",disabled:w.value,form:"form"},[m(Z,{"is-loading":w.value},{default:x(()=>[N("Save")]),_:1},8,["is-loading"])],8,Ve),r("button",{onClick:F,class:"btn-gray"},"Cancel"),h.value===n(v).Edit?(l(),D(n(K),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":a[9]||(a[9]=s=>e.value.isActive=s),class:"ml-auto toggle:off:red"},null,8,["modelValue"])):d("",!0)]),_:1}))}});export{Se as default};
