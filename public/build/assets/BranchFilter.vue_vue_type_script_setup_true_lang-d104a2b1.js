import{s as u}from"./multiselect-27b4da8b.js";import{d as p,u as d,e as h,y as m,$ as i,g as a,o as b,R as g,i as _,p as f}from"./main-6e47ceb6.js";const y=p({__name:"BranchFilter",props:{modelValue:null},emits:["update:modelValue","change"],setup(s,{emit:r}){const l=s,n=d().user.branches,e=h([]),t=m(()=>e.value.join(",")),c=o=>{e.value=o,r("update:modelValue",t.value),r("change",o)};return i(()=>{e.value=l.modelValue.split(",")}),(o,v)=>a(n).length>1?(b(),g(a(u),{key:0,mode:"tags","model-value":e.value,options:a(n),"value-prop":"id","track-by":"searchableForm",label:"name",searchable:!0,placeholder:a(f)("Select branches"),onChange:c,class:"w-56 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options","placeholder"])):_("",!0)}});export{y as _};