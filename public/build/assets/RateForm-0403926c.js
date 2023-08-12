import{d as O,f as N,e as R,g as i,u as S,x as C,Q as g,o,R as B,w as m,m as x,b as s,i as b,c as l,a as p,n as f,t as v,k as n,j as $,v as U,h as A,_ as M,a5 as T,a0 as D}from"./main-bf2af1c2.js";import{_ as F}from"./CurrencyInput.vue_vue_type_script_setup_true_lang-1a047a22.js";import{s as w}from"./multiselect-4f06085e.js";const j=["onSubmit"],z={key:0,class:"mb-3 flex flex-wrap items-center"},E=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),L={key:0,class:"ml-24 w-full text-sm text-red-500"},Q={class:"mb-3 flex flex-wrap items-center"},q=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Register",-1),G={key:0,class:"ml-24 w-full text-sm text-red-500"},H={class:"mb-3 flex flex-wrap items-center"},J=s("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Amount",-1),K={key:0,class:"ml-24 w-full text-sm text-red-500"},W={class:"flex flex-wrap items-center"},X=s("span",{class:"w-full"},"Notes",-1),Y={key:0,class:"w-full text-sm text-red-500"},Z=["disabled"],te=O({__name:"RateForm",emits:["close"],setup(ee,{emit:I}){const V=N(),k=R(),a=i({}),h=i([]),d=S().user.branches,u=i(!1),e=i({});C(async()=>{d.length===1&&(a.value.branchId=d[0].id,_())});const _=async()=>{const{data:c}=await g.get(`/api/registers/list?branchId=${a.value.branchId}`);h.value=c.data},P=async()=>{u.value=!0;try{await g.post(`/api/rates/${V.params.partnerId}/pay`,a.value),y(),e.value={},D.fire()}catch(c){e.value=c.response.data.errors??{}}u.value=!1},y=()=>{I("close"),k.back()};return(c,r)=>(o(),B(T,null,{header:m(()=>[x("Add Rate Payment")]),body:m(()=>[s("form",{id:"form",onSubmit:A(P,["prevent","stop"])},[b(d).length>1?(o(),l("div",z,[E,p(b(w),{modelValue:a.value.branchId,"onUpdate:modelValue":r[0]||(r[0]=t=>a.value.branchId=t),options:b(d),onSelect:_,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:f(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":e.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),e.value.hasOwnProperty("branchId")?(o(),l("p",L,v(e.value.branchId[0]),1)):n("",!0)])):n("",!0),s("div",Q,[q,p(b(w),{modelValue:a.value.registerId,"onUpdate:modelValue":r[1]||(r[1]=t=>a.value.registerId=t),options:h.value,searchable:!0,"value-prop":"id","track-by":"userName",label:"userName","can-clear":!1,"can-deselect":!1,class:f(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":e.value.hasOwnProperty("registerId")}])},null,8,["modelValue","options","class"]),e.value.hasOwnProperty("registerId")?(o(),l("p",G,v(e.value.registerId[0]),1)):n("",!0)]),s("div",H,[J,p(F,{modelValue:a.value.amount,"onUpdate:modelValue":r[2]||(r[2]=t=>a.value.amount=t),class:f(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":e.value.hasOwnProperty("amount")}])},null,8,["modelValue","class"]),e.value.hasOwnProperty("amount")?(o(),l("p",K,v(e.value.amount[0]),1)):n("",!0)]),s("div",W,[X,$(s("textarea",{"onUpdate:modelValue":r[3]||(r[3]=t=>a.value.notes=t),rows:"4",class:f(["flex-1 rounded border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":e.value.hasOwnProperty("notes")}])},null,2),[[U,a.value.notes]]),e.value.hasOwnProperty("notes")?(o(),l("p",Y,v(e.value.notes[0]),1)):n("",!0)])],40,j)]),footer:m(()=>[s("button",{class:"mr-2 btn-blue",disabled:u.value,form:"form"},[p(M,{"is-loading":u.value},{default:m(()=>[x("Save")]),_:1},8,["is-loading"])],8,Z),s("button",{onClick:y,class:"btn-gray"},"Cancel")]),_:1}))}});export{te as default};
