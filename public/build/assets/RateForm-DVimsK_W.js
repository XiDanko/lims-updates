import{d as O,e as d,u as N,x as R,Q as y,o as l,R as $,w as i,k as g,b as s,g as x,c,a as m,i as p,n as o,t as b,h as C,v as S,f as B,_ as U,a4 as A,m as M,l as T,$ as D}from"./main-DmoZ1fz4.js";import{_ as z}from"./CurrencyInput.vue_vue_type_script_setup_true_lang-DHwtVm0K.js";import{s as E}from"./multiselect-DAhRltj6.js";import{_ as F}from"./BranchSelect.vue_vue_type_script_setup_true_lang-D_pdW9WT.js";const L={class:"grid grid-cols-1 gap-4"},Q={key:0,class:"relative"},j={class:"relative"},q={key:0,class:"text-sm text-red-500"},G={class:"relative"},H={key:0,class:"text-sm text-red-500"},J={class:"relative"},K={key:0,class:"text-sm text-red-500"},W=["disabled"],se=O({__name:"RateForm",emits:["close"],setup(X,{emit:w}){const I=w,V=M(),k=T(),a=d({}),_=d([]),v=N().user.branches,n=d(!1),e=d({});R(async()=>{v.length===1&&(a.value.branchId=v[0].id,h())});const h=async()=>{const{data:u}=await y.get(`/api/registers/list?branchId=${a.value.branchId}`);_.value=u.data},P=async()=>{n.value=!0;try{await y.post(`/api/rates/${V.params.partnerId}/pay`,a.value),f(),e.value={},D.fire()}catch(u){e.value=u.response.data.errors??{}}n.value=!1},f=()=>{I("close"),k.back()};return(u,t)=>(l(),$(A,null,{header:i(()=>[g("Add Rate Payment")]),body:i(()=>[s("form",{id:"form",onSubmit:B(P,["prevent","stop"])},[s("div",L,[x(v).length>1?(l(),c("div",Q,[m(F,{modelValue:a.value.branchId,"onUpdate:modelValue":t[0]||(t[0]=r=>a.value.branchId=r),error:e.value.branchId,onSelect:h},null,8,["modelValue","error"])])):p("",!0),s("div",j,[m(x(E),{modelValue:a.value.registerId,"onUpdate:modelValue":t[1]||(t[1]=r=>a.value.registerId=r),options:_.value,searchable:!0,"value-prop":"id","track-by":"userName",label:"userName","can-clear":!1,"can-deselect":!1,class:o(["input peer",{"border-red-500":e.value.hasOwnProperty("registerId")}])},null,8,["modelValue","options","class"]),s("label",{class:o(["label",{"text-red-500":e.value.hasOwnProperty("registerId")}])},"Register",2),e.value.hasOwnProperty("registerId")?(l(),c("p",q,b(e.value.registerId[0]),1)):p("",!0)]),s("div",G,[m(z,{modelValue:a.value.amount,"onUpdate:modelValue":t[2]||(t[2]=r=>a.value.amount=r),class:o(["input peer",{"border-red-500":e.value.hasOwnProperty("amount")}])},null,8,["modelValue","class"]),s("label",{class:o(["label",{"text-red-500":e.value.hasOwnProperty("amount")}])},"Amount",2),e.value.hasOwnProperty("amount")?(l(),c("p",H,b(e.value.amount[0]),1)):p("",!0)]),s("div",J,[C(s("textarea",{"onUpdate:modelValue":t[3]||(t[3]=r=>a.value.notes=r),rows:"4",class:o(["py-2 input peer",{"border-red-500":e.value.hasOwnProperty("notes")}])},null,2),[[S,a.value.notes]]),s("label",{class:o(["label",{"text-red-500":e.value.hasOwnProperty("notes")}])},"Notes",2),e.value.hasOwnProperty("notes")?(l(),c("p",K,b(e.value.notes[0]),1)):p("",!0)])])],32)]),footer:i(()=>[s("button",{class:"me-2 btn-blue",disabled:n.value,form:"form"},[m(U,{"is-loading":n.value},{default:i(()=>[g("Save")]),_:1},8,["is-loading"])],8,W),s("button",{onClick:f,class:"btn-gray"},"Cancel")]),_:1}))}});export{se as default};