import{M as y}from"./Master-77a73046.js";import{d as w,e as c,x as C,A as d,o as a,C as M,w as l,k as u,b as r,t as f,g,c as s,a as m,_ as h,i as o,M as U,H as V}from"./main-c1f62c61.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"flex items-center gap-2"},A={class:"font-semibold text-lg"},B=["disabled"],F={key:0,class:"my-5"},I={key:1,class:"flex items-center gap-2"},L=r("p",{class:"font-semibold text-lg text-green-500"},"Application is up to date.",-1),T=[L],z={key:2,class:"flex items-center gap-2"},D={class:"font-semibold text-lg text-red-500"},E=["disabled"],j=w({__name:"UpdateManager",setup(H){const{hasPermissionTo:p}=V(),_=c("v1.0.0"),t=c(null),n=c(!1),i=c(!1);C(()=>v());const v=async()=>{const{data:e}=await d.get("/api/update-manager/current-version");_.value=e},k=async()=>{n.value=!0;try{const{data:e}=await d.post("/api/update-manager/check-for-update");t.value=e||!1}catch{}n.value=!1},b=async()=>{const{isConfirmed:e}=await U.fire();if(e){i.value=!0;try{await d.post("/api/update-manager/update"),window.open("/settings/update-manager","_self")}catch{}i.value=!1}};return(e,x)=>(a(),M(y,null,{header:l(()=>[u("Update Manager")]),body:l(()=>[r("div",N,[r("p",A,"Application Version: "+f(_.value),1),g(p)("UpdateManager.checkForUpdate")?(a(),s("button",{key:0,class:"btn-blue p-1",onClick:k,disabled:n.value},[m(h,{"is-loading":n.value},{default:l(()=>[u("Check for update")]),_:1},8,["is-loading"])],8,B)):o("",!0)]),t.value!==null?(a(),s("hr",F)):o("",!0),t.value===!1?(a(),s("div",I,T)):o("",!0),t.value?(a(),s("div",z,[r("p",D,"New version is available: "+f(t.value),1),g(p)("UpdateManager.update")?(a(),s("button",{key:0,class:"btn-teal p-1 px-2",onClick:b,disabled:i.value},[m(h,{"is-loading":i.value},{default:l(()=>[u("Update")]),_:1},8,["is-loading"])],8,E)):o("",!0)])):o("",!0)]),_:1}))}});export{j as default};