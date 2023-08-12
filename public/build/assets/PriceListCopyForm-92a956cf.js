import{d as C,f as S,e as D,u as B,g as v,x as U,Q as P,V as N,o,R as z,w as f,m as w,b as a,i as d,c as l,a as y,n as c,t as i,k as n,j as k,v as I,h as M,_ as R,a5 as T,a0 as $}from"./main-bf2af1c2.js";import{s as h}from"./multiselect-4f06085e.js";const A=["onSubmit"],j={key:0,class:"col-span-2 mb-3 flex flex-wrap"},E=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),F={key:0,class:"ml-24 w-full text-sm text-red-500"},Q={class:"col-span-2 mb-3 flex flex-wrap"},q=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Source",-1),G={key:0,class:"ml-24 w-full text-sm text-red-500"},H={class:"col-span-2 mb-3 flex flex-wrap"},J=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Destination",-1),K={key:0,class:"ml-24 w-full text-sm text-red-500"},W={class:"mb-3 flex flex-wrap"},X=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Price",-1),Y=a("span",{class:"rounded-r border border-l-0 border-gray-300 bg-gray-100 px-4 py-2"},"%",-1),Z={key:0,class:"ml-24 w-full text-sm text-red-500"},ee={class:"flex flex-wrap"},ae=a("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Discount",-1),re=a("span",{class:"rounded-r border border-l-0 border-gray-300 bg-gray-100 px-4 py-2"},"%",-1),se={key:0,class:"ml-24 w-full text-sm text-red-500"},te=["disabled"],de=C({__name:"PriceListCopyForm",setup(oe){S();const V=D(),u=B().user.branches,p=v(!1),e=v({}),b=v([]),r=v({});U(()=>{u.length===1&&(r.value.branchId=u[0].id,g())});const g=async()=>{const{data:m}=await P.get(`/api/price-lists/list?branchId=${r.value.branchId}`);b.value=m.data},L=()=>{b.value=[],r.value={branchId:r.value.branchId}},O=async()=>{p.value=!0;try{await P.post("/api/tools/copy-price-list",r.value),e.value={},$.fire(),_()}catch(m){e.value=m.response.data.errors??{}}p.value=!1},_=()=>{V.back()};return(m,s)=>{const x=N("maska");return o(),z(T,null,{header:f(()=>[w("Copy Price List")]),body:f(()=>[a("form",{id:"form",onSubmit:M(O,["prevent","stop"])},[d(u).length>1?(o(),l("div",j,[E,y(d(h),{modelValue:r.value.branchId,"onUpdate:modelValue":s[0]||(s[0]=t=>r.value.branchId=t),options:d(u),onSelect:g,onChange:L,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-deselect":!1,"can-clear":!1,class:c(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":e.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),e.value.hasOwnProperty("branchId")?(o(),l("p",F,i(e.value.branchId[0]),1)):n("",!0)])):n("",!0),a("div",Q,[q,y(d(h),{modelValue:r.value.sourcePriceListId,"onUpdate:modelValue":s[1]||(s[1]=t=>r.value.sourcePriceListId=t),options:b.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:c(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":e.value.hasOwnProperty("sourcePriceListId")}])},null,8,["modelValue","options","class"]),e.value.hasOwnProperty("sourcePriceListId")?(o(),l("p",G,i(e.value.sourcePriceListId[0]),1)):n("",!0)]),a("div",H,[J,y(d(h),{modelValue:r.value.destinationPriceListId,"onUpdate:modelValue":s[2]||(s[2]=t=>r.value.destinationPriceListId=t),options:b.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:c(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":e.value.hasOwnProperty("destinationPriceListId")}])},null,8,["modelValue","options","class"]),e.value.hasOwnProperty("destinationPriceListId")?(o(),l("p",K,i(e.value.destinationPriceListId[0]),1)):n("",!0)]),a("div",W,[X,k(a("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>r.value.pricePercentage=t),size:"1","data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",class:c(["flex-1 border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":e.value.hasOwnProperty("pricePercentage")}])},null,2),[[I,r.value.pricePercentage],[x]]),Y,e.value.hasOwnProperty("pricePercentage")?(o(),l("p",Z,i(e.value.pricePercentage[0]),1)):n("",!0)]),a("div",ee,[ae,k(a("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>r.value.discountPercentage=t),size:"1","data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",class:c(["flex-1 border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":e.value.hasOwnProperty("discountPercentage")}])},null,2),[[I,r.value.discountPercentage],[x]]),re,e.value.hasOwnProperty("discountPercentage")?(o(),l("p",se,i(e.value.discountPercentage[0]),1)):n("",!0)])],40,A)]),footer:f(()=>[a("button",{class:"mr-2 btn-blue",disabled:p.value,form:"form"},[y(R,{"is-loading":p.value},{default:f(()=>[w("Save")]),_:1},8,["is-loading"])],8,te),a("button",{onClick:_,class:"btn-gray"},"Cancel")]),_:1})}}});export{de as default};
