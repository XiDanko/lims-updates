import{l as s,m as n}from"./main-DmoZ1fz4.js";const l=()=>{const r=s(),a=n(),e=new URLSearchParams(window.location.search);return{urlQuery:e,updateUrlQuery:async t=>(new URLSearchParams(t).forEach((u,o)=>{e.set(o,u)}),await r.replace(`${a.path}?${e}`),e)}};export{l as u};