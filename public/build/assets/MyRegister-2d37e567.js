import{d as h,e as y,u as m,x as _,A as g,r as x,o as a,C as v,w as n,b as e,t as o,g as c,c as i,a as b,i as w,D as k,F as M,k as V}from"./main-c1f62c61.js";import{M as B}from"./Master-77a73046.js";import{u as N}from"./urlQueryManager-3fafa3c6.js";import{s as S}from"./multiselect-ffe70d49.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={class:"flex justify-between"},R=e("h1",null,"My Register",-1),A={key:0,class:"flex flex-wrap items-center mb-3"},D=e("span",{class:"w-28 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),I={class:"pr-1 h-[calc(100vh-8.6rem)] overflow-y-auto"},L={class:"w-full"},T=e("thead",null,[e("tr",{class:"sticky top-0 z-10 text-left"},[e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Invoice No."),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Amount"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Type"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Status"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Notes"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch")])],-1),z={class:"transition even:bg-gray-100"},F={class:"py-1 px-2 border border-gray-200"},$={class:"py-1 px-2 border border-gray-200"},j={class:"py-1 px-2 border border-gray-200"},E={class:"py-1 px-2 border border-gray-200"},Q={class:"py-1 px-2 border border-gray-200"},U={class:"py-1 px-2 border border-gray-200"},q={class:"py-1 px-2 border border-gray-200"},W=h({__name:"MyRegister",setup(G){N();const d=y({}),l=m().user.branches,s=y("");_(()=>{s.value=l[0].id,u(s.value)});const u=async p=>{const{data:r}=await g.get(`/api/my-register?branchId=${p}`);d.value=r.data};return(p,r)=>{const f=x("router-link");return a(),v(B,null,{header:n(()=>[e("div",C,[R,e("p",null,"Total: "+o(d.value.total?.toLocaleString()),1)])]),body:n(()=>[c(l).length>1?(a(),i("div",A,[D,b(c(S),{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=t=>s.value=t),options:c(l),onSelect:u,searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])])):w("",!0),e("section",I,[e("table",L,[T,e("tbody",null,[(a(!0),i(M,null,k(d.value.transactions,t=>(a(),i("tr",z,[e("td",F,[b(f,{class:"text-blue-500 underline",to:`/invoices?number=${t.invoice.number}`},{default:n(()=>[V(o(t.invoice.number),1)]),_:2},1032,["to"])]),e("td",$,o(t.amount.toLocaleString()),1),e("td",j,o(t.type),1),e("td",E,o(t.status.capitalize()),1),e("td",Q,o(t.notes),1),e("td",U,o(t.date),1),e("td",q,o(t.branch.name),1)]))),256))])])])]),_:1})}}});export{W as default};
