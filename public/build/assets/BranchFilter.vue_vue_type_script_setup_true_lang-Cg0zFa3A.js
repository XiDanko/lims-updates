import{s as h}from"./multiselect-DeMhawmc.js";import{d,u as _,e as b,y as f,ah as g,g as a,o as n,c as r,a as v,t as y,i as c,p as B}from"./main-BgbWFIXK.js";const V={key:0,class:"relative flex-1 min-w-[10rem]"},k={key:0,class:"label"},C=d({__name:"BranchFilter",props:{modelValue:String,showLabel:{type:Boolean,default:!0}},emits:["update:modelValue","change"],setup(u,{emit:m}){const s=u,o=m,l=_().user.branches,e=b([]),p=f(()=>e.value.join(",")),i=t=>{e.value=t,o("update:modelValue",p.value),o("change",t)};return g(()=>{e.value=s.modelValue.split(",")}),(t,w)=>a(l).length>1?(n(),r("div",V,[v(a(h),{mode:"tags","model-value":e.value,options:a(l),"value-prop":"id","track-by":"searchableForm",label:"name",searchable:!0,onChange:i,class:"px-0 input-sm peer"},null,8,["model-value","options"]),s.showLabel?(n(),r("label",k,y(a(B)("Branches")),1)):c("",!0)])):c("",!0)}});export{C as _};
