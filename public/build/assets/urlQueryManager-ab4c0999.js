import{e as s,f as n}from"./main-cee2eb24.js";const p=()=>{const r=s(),a=n(),e=new URLSearchParams(window.location.search);return{urlQuery:e,updateUrlQuery:async t=>(new URLSearchParams(t).forEach((u,o)=>{e.set(o,u)}),await r.replace(`${a.path}?${e}`),e)}};export{p as u};
