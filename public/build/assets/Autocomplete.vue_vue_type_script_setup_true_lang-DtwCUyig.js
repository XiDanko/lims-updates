import{d as _,e as n,x as B,s as I,y as $,o as u,c as r,b as E,ad as S,a0 as i,f as q,n as c,ae as H,F as K,a1 as M,i as z,t as A,Q as L}from"./main-DmoZ1fz4.js";const F=["value","onKeydown"],N=["onMouseover"],D={inheritAttrs:!1},U=_({...D,__name:"Autocomplete",props:{modelValue:{},endpoint:{},query:{},limit:{},label:{},maxHeight:{},parentClasses:{},listClasses:{}},emits:["update:modelValue","select"],setup(g,{emit:h}){const w=h,a=g,s=n([]),t=n(-1),d=n(0),m=n(null);B(()=>{const e=document.querySelector(".autocomplete input");d.value=e.offsetHeight,document.addEventListener("mousedown",p)}),I(()=>document.removeEventListener("mousedown",p));const p=e=>m.value=e.target,C=$(()=>({"max-height":(a.maxHeight??200)+"px",top:d.value+"px"})),b=async()=>{if(t.value=-1,a.modelValue===""){l();return}const{data:e}=await L.get(`${a.endpoint}&${a.query}=${a.modelValue}`);s.value=a.limit?e.data.splice(0,a.limit):e.data},V=()=>{m.value!==document.querySelector("li.selected")&&l()},k=()=>{t.value<s.value.length-1&&t.value++},x=()=>{t.value>0&&t.value--},v=()=>{if(s.value.length!==0){if(t.value===-1){l();return}w("select",s.value[t.value]),l()}},l=()=>{s.value=[]};return(e,y)=>(u(),r("div",{class:c(["relative autocomplete",e.parentClasses])},[E("input",S({type:"text",value:e.modelValue},e.$attrs,{class:{"!rounded-b-none":s.value.length!==0},onInput:y[0]||(y[0]=o=>e.$emit("update:modelValue",o.target.value)),onKeyup:[i(b,["space"]),i(k,["down"]),i(x,["up"])],onKeydown:i(q(v,["prevent"]),["enter"]),onBlur:V}),null,16,F),s.value.length!==0?(u(),r("ul",{key:0,class:c(["absolute inset-x-0 z-50 overflow-y-auto rounded-b bg-white shadow",e.listClasses]),style:H(C.value)},[(u(!0),r(K,null,M(s.value,(o,f)=>(u(),r("li",{key:o.id,onMouseover:P=>t.value=f,onClick:v,class:c(["cursor-pointer px-2 py-1",{"selected bg-gray-100":f===t.value}])},A(o[e.label]),43,N))),128))],6)):z("",!0)],2))}});export{U as _};