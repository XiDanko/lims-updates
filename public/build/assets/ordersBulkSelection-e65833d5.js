import{g as a}from"./main-bf2af1c2.js";const u=()=>{const l=a(new Set),t=(e,s)=>{s?l.value.add(e.id):l.value.delete(e.id)};return{selectedOrdersIds:l,toggle:t,toggleAll:(e,s)=>{e.forEach(c=>t(c,s))},clear:()=>l.value.clear(),isSelected:e=>l.value.has(e.id),isAllSelected:e=>e.every(s=>l.value.has(s.id))}};export{u};
