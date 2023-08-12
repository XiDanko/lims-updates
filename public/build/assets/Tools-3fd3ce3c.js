import{d as v,Z as n,Q as c,a0 as l,r as d,o,c as s,a as p,w as a,m as h,b as r,F as i,a2 as w,T as b,t as m,R as x,k as C}from"./main-bf2af1c2.js";import{M as k}from"./Master-fd48b992.js";import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"pr-1 h-[calc(100vh-8.6rem)] overflow-y-auto"},T={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},D={key:0,class:"rounded-2xl border-x-8 border-x-indigo-500 bg-gray-100 p-4 shadow"},A={class:"mb-3 text-xl font-semibold"},B={class:"h-20 overflow-y-auto"},I={class:"mt-3"},L=["onClick"],S=v({__name:"Tools",setup(N){const{hasPermissionTo:e}=b(),u=[{title:"Copy Price List",description:"Copies undefined prices from one price list to another with applied price and discount percentages.",route:"/tools/copy-price-list",hasPermission:e("Tools.copyPriceList")},{title:"Regenerate ID",description:"Regenerates primary id for branches, master definitions, price lists, users, roles and settings.",onActivate:()=>_(),hasPermission:e("Tools.regenerateId")},{title:"Copy Branch Data",description:"Copies master definitions, price lists, roles and settings from one branch to another.",route:"/tools/copy-branch-data",hasPermission:e("Tools.copyBranchData")},{title:"Clear Patients Data",description:"Deletes all patients and related data like visits, invoices, orders, results, etc...",onActivate:()=>f(),hasPermission:e("Tools.regenerateId")}],_=async()=>{e("Tools.regenerateId")&&n.fire({showLoaderOnConfirm:!0,preConfirm:async()=>{await c.post("/api/tools/regenerate-id"),l.fire()}})},f=async()=>{e("Tools.clearPatientsData")&&n.fire({showLoaderOnConfirm:!0,preConfirm:async()=>{await c.post("/api/tools/clear-patients-data"),l.fire()}})};return(V,O)=>{const g=d("router-view"),y=d("router-link");return o(),s(i,null,[p(g),p(k,null,{header:a(()=>[h("Tools")]),body:a(()=>[r("section",P,[r("div",T,[(o(),s(i,null,w(u,t=>(o(),s(i,null,[t.hasPermission?(o(),s("div",D,[r("header",A,m(t.title),1),r("main",B,m(t.description),1),r("footer",I,[t.hasOwnProperty("route")?(o(),x(y,{key:0,to:t.route,class:"rounded px-2 font-semibold text-blue-500 transition hover:bg-white hover:shadow"},{default:a(()=>[h("Activate")]),_:2},1032,["to"])):(o(),s("span",{key:1,onClick:t.onActivate,class:"cursor-pointer rounded px-2 font-semibold text-blue-500 transition hover:bg-white hover:shadow"},"Activate",8,L))])])):C("",!0)],64))),64))])])]),_:1})],64)}}});export{S as default};
