import{d as C,u as D,e as m,x as S,Q as x,U as B,o,R as U,w as h,k as I,b as a,g as i,c as n,a as P,n as r,t as d,i as c,h as k,v as w,f as N,_ as $,a4 as M,m as R,l as T,$ as A}from"./main-DmoZ1fz4.js";import{s as y}from"./multiselect-DAhRltj6.js";const z={key:0,class:"relative"},E={key:0,class:"text-sm text-red-500"},F={class:"relative"},Q={key:0,class:"text-sm text-red-500"},j={class:"relative"},q={key:0,class:"text-sm text-red-500"},G={class:"relative"},H={class:"flex"},J=a("span",{class:"border-2 border-gray-300 bg-gray-100 px-4 py-2 rounded-e border-s-0"},"%",-1),K={key:0,class:"text-sm text-red-500"},W={class:"relative"},X={class:"flex"},Y=a("span",{class:"border-2 border-gray-300 bg-gray-100 px-4 py-2 rounded-e border-s-0"},"%",-1),Z={key:0,class:"text-sm text-red-500"},ee=["disabled"],re=C({__name:"PriceListCopyForm",setup(ae){R();const L=T(),u=D().user.branches,p=m(!1),e=m({}),v=m([]),s=m({});S(()=>{u.length===1&&(s.value.branchId=u[0].id,_())});const _=async()=>{const{data:b}=await x.get(`/api/price-lists/list?branchId=${s.value.branchId}`);v.value=b.data},O=()=>{v.value=[],s.value={branchId:s.value.branchId}},V=async()=>{p.value=!0;try{await x.post("/api/tools/copy-price-list",s.value),e.value={},A.fire(),f()}catch(b){e.value=b.response.data.errors??{}}p.value=!1},f=()=>{L.back()};return(b,t)=>{const g=B("maska");return o(),U(M,null,{header:h(()=>[I("Copy Price List")]),body:h(()=>[a("form",{id:"form",onSubmit:N(V,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[i(u).length>1?(o(),n("div",z,[P(i(y),{modelValue:s.value.branchId,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value.branchId=l),options:i(u),onSelect:_,onChange:O,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-deselect":!1,"can-clear":!1,class:r(["input peer",{"border-red-500":e.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),a("label",{class:r(["label",{"text-red-500":e.value.hasOwnProperty("branchId")}])},"Branch",2),e.value.hasOwnProperty("branchId")?(o(),n("p",E,d(e.value.branchId[0]),1)):c("",!0)])):c("",!0),a("div",F,[P(i(y),{modelValue:s.value.sourcePriceListId,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.sourcePriceListId=l),options:v.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:r(["input peer",{"border-red-500":e.value.hasOwnProperty("sourcePriceListId")}])},null,8,["modelValue","options","class"]),a("label",{class:r(["label",{"text-red-500":e.value.hasOwnProperty("sourcePriceListId")}])},"Source",2),e.value.hasOwnProperty("sourcePriceListId")?(o(),n("p",Q,d(e.value.sourcePriceListId[0]),1)):c("",!0)]),a("div",j,[P(i(y),{modelValue:s.value.destinationPriceListId,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.destinationPriceListId=l),options:v.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:r(["input peer",{"border-red-500":e.value.hasOwnProperty("destinationPriceListId")}])},null,8,["modelValue","options","class"]),a("label",{class:r(["label",{"text-red-500":e.value.hasOwnProperty("destinationPriceListId")}])},"Destination",2),e.value.hasOwnProperty("destinationPriceListId")?(o(),n("p",q,d(e.value.destinationPriceListId[0]),1)):c("",!0)]),a("div",G,[a("div",H,[k(a("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>s.value.pricePercentage=l),"data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",class:r(["input peer !rounded-e-none",{"border-red-500":e.value.hasOwnProperty("pricePercentage")}])},null,2),[[w,s.value.pricePercentage],[g]]),a("label",{class:r(["label",{"text-red-500":e.value.hasOwnProperty("pricePercentage")}])},"Price",2),J]),e.value.hasOwnProperty("pricePercentage")?(o(),n("p",K,d(e.value.pricePercentage[0]),1)):c("",!0)]),a("div",W,[a("div",X,[k(a("input",{"onUpdate:modelValue":t[4]||(t[4]=l=>s.value.discountPercentage=l),"data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",class:r(["input peer !rounded-e-none",{"border-red-500":e.value.hasOwnProperty("discountPercentage")}])},null,2),[[w,s.value.discountPercentage],[g]]),a("label",{class:r(["label",{"text-red-500":e.value.hasOwnProperty("discountPercentage")}])},"Discount",2),Y]),e.value.hasOwnProperty("discountPercentage")?(o(),n("p",Z,d(e.value.discountPercentage[0]),1)):c("",!0)])],32)]),footer:h(()=>[a("button",{class:"me-2 btn-blue",disabled:p.value,form:"form"},[P($,{"is-loading":p.value},{default:h(()=>[I("Save")]),_:1},8,["is-loading"])],8,ee),a("button",{onClick:f,class:"btn-gray"},"Cancel")]),_:1})}}});export{re as default};