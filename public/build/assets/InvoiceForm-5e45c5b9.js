import{d as A,u as U,e as o,x as j,Q as u,o as i,R as $,w as h,k as S,t as _,g as l,b as c,c as I,a as g,n as V,i as v,f as z,_ as Q,a9 as W,m as Z,l as q,a4 as G,Z as P}from"./main-56f58ed8.js";import{s as B}from"./multiselect-167e14f5.js";import{_ as H,u as J}from"./Invoice.vue_vue_type_script_setup_true_lang-85f6e80c.js";import{F as m}from"./formMode-f60a729f.js";import{I as E}from"./invoiceStatus-af715b0d.js";import"./CurrencyInput.vue_vue_type_script_setup_true_lang-5457422b.js";import"./toggle-876d3de4.js";import"./itemType-8f96b3f7.js";import"./orderStatus-e3a3f9a7.js";const K=["onSubmit"],X={key:0,class:"mb-4"},Y={key:0,class:"flex flex-wrap items-center mb-3"},ee=c("span",{class:"w-20 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),ae={key:0,class:"ml-20 w-full text-red-500 text-sm"},te={class:"flex flex-wrap items-center"},se=c("span",{class:"w-20 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Patient",-1),oe={key:0,class:"ml-20 w-full text-red-500 text-sm"},re=["disabled"],fe=A({__name:"InvoiceForm",emits:["close"],setup(ne,{emit:N}){const w=Z(),D=q(),p=U().user.branches,O=J(),e=o({discount:0,extraCharges:0,status:E.Closed}),r=o([]),b=o({amount:0,notes:""}),x=o({}),d=o(m.Create),f=o(!1),t=o({});j(()=>{p.length===1&&(e.value.branchId=p[0].id,y()),w.path.endsWith("/edit")&&(d.value=m.Edit,L(w.params.id))});const F=async s=>{if(!e.value.branchId)return;const{data:a}=await u.get(`/api/patients/list?branchId=${e.value.branchId}&name=${s}&limit=15`);return a.data},L=async s=>{const{data:a}=await u.get(`/api/invoices/${s}`);e.value=a.data,r.value=a.data.items,b.value.amount=a.data.paidAmount,y()},y=async()=>{const{data:s}=await u.get(`/api/get-eligible-price-list?branchId=${e.value.branchId}&labId=${e.value.visit?.labId??""}&referenceCenterId=${e.value.visit?.referenceCenterId??""}&referenceDoctorId=${e.value.visit?.referenceDoctorId??""}`);x.value=s.data},M=async()=>{f.value=!0;try{O.total(e.value,r.value)<0?G.fire({icon:"error",title:"Invoice can't have negative total."}):d.value===m.Create?await R():await T()}catch(s){t.value=s.response.data.errors??{}}f.value=!1},R=async()=>{await u.post("/api/invoices",{invoice:e.value,invoiceItems:r.value,payment:b.value}),P.fire(),C()},T=async()=>{await u.patch(`/api/invoices/${e.value.id}`,{invoice:e.value,invoiceItems:r.value}),P.fire(),k()},C=()=>{e.value={branchId:e.value.branchId,discount:0,extraCharges:0,status:E.Closed},r.value=[],b.value={amount:0,notes:""},t.value={}},k=()=>{N("close"),D.back()};return(s,a)=>(i(),$(W,{"modal-class":"!w-[60rem]"},{header:h(()=>[S(_(d.value===l(m).Create?"Create New Invoice":"Edit Invoice"),1)]),body:h(()=>[c("form",{id:"form",onSubmit:z(M,["prevent","stop"])},[d.value!==l(m).Edit?(i(),I("div",X,[l(p).length>1?(i(),I("div",Y,[ee,g(l(B),{modelValue:e.value.branchId,"onUpdate:modelValue":a[0]||(a[0]=n=>e.value.branchId=n),options:l(p),searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-deselect":!1,"can-clear":!1,onSelect:y,onChange:C,class:V(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),t.value.hasOwnProperty("branchId")?(i(),I("p",ae,_(t.value.branchId[0]),1)):v("",!0)])):v("",!0),c("div",te,[se,g(l(B),{modelValue:e.value.patient,"onUpdate:modelValue":a[1]||(a[1]=n=>e.value.patient=n),options:F,"filter-results":!1,"resolve-on-load":!1,"min-chars":1,delay:500,object:!0,"value-prop":"id","track-by":"name",label:"name",searchable:!0,canClear:!1,onSelect:a[2]||(a[2]=n=>e.value.patientId=n.id),onDeselect:a[3]||(a[3]=n=>e.value.patientId=null),class:V(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("invoice.patientId")}])},null,8,["modelValue","class"]),t.value.hasOwnProperty("invoice.patientId")?(i(),I("p",oe,_(t.value["invoice.patientId"][0]),1)):v("",!0)])])):v("",!0),e.value.branchId?(i(),$(H,{key:1,"branch-id":e.value.branchId,"price-list":x.value,invoice:e.value,"invoice-items":r.value,payment:b.value,errors:t.value,mode:d.value},null,8,["branch-id","price-list","invoice","invoice-items","payment","errors","mode"])):v("",!0)],40,K)]),footer:h(()=>[c("button",{class:"btn-blue mr-2",disabled:f.value,form:"form"},[g(Q,{"is-loading":f.value},{default:h(()=>[S("Save")]),_:1},8,["is-loading"])],8,re),c("button",{onClick:k,class:"btn-gray"},"Cancel")]),_:1}))}});export{fe as default};
