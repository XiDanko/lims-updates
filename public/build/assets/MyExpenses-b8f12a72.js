import{d as x,e as d,x as w,A as v,r as _,o as n,c as i,a as l,w as c,b as t,t as s,g as C,C as k,i as M,F as f,D as A,H as B}from"./main-c1f62c61.js";import{M as E}from"./Master-77a73046.js";import{_ as N}from"./Paginator.vue_vue_type_script_setup_true_lang-ba67665d.js";import{u as P}from"./urlQueryManager-3fafa3c6.js";import{_ as D}from"./ExpensesFilter.vue_vue_type_script_setup_true_lang-0b891d3e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index.es-2fd2791b.js";import"./datepickerPresets-7a436e47.js";import"./BranchFilter.vue_vue_type_script_setup_true_lang-16fdce62.js";import"./multiselect-ffe70d49.js";import"./expenseType-dae18553.js";const H={class:"flex justify-between"},$=t("h1",null,"My Expenses",-1),z={class:"flex items-center mb-5 gap-5"},L=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"w-4 h-4 mr-1"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),S=t("span",{class:"font-semibold"},"Create New Expense",-1),T={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},V={class:"w-full"},F=t("thead",null,[t("tr",{class:"sticky top-0 z-10 text-left"},[t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Amount"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Type"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Details"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Paid"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Paid At"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch")])],-1),Q={class:"transition even:bg-gray-100"},j={class:"py-1 px-2 border border-gray-200"},q={class:"py-1 px-2 border border-gray-200"},U={class:"py-1 px-2 border border-gray-200"},Y={class:"py-1 px-2 border border-gray-200"},G={class:"py-1 px-2 border border-gray-200"},I={class:"py-1 px-2 border border-gray-200"},J={class:"py-1 px-2 border border-gray-200"},lt=x({__name:"MyExpenses",setup(K){const p=d([]),u=d({}),y=d(),{updateUrlQuery:h}=P(),{hasPermissionTo:b,hasAnyPermission:O}=B();w(()=>r(location.search));const r=async m=>{const a=await h(m),{data:o}=await v.get(`/api/my-expenses?${a}`);p.value=o.data,u.value=o.meta,y.value=o.total};return(m,a)=>{const o=_("router-view"),g=_("router-link");return n(),i(f,null,[l(o,{onClose:r}),l(E,null,{header:c(()=>[t("div",H,[$,t("p",null,"Total: "+s(y.value?.toLocaleString()),1)])]),body:c(()=>[t("div",z,[C(b)("Expense.create")?(n(),k(g,{key:0,to:"/my-expenses/create",class:"btn-blue inline-flex items-center"},{default:c(()=>[L,S]),_:1})):M("",!0),l(D,{onChange:r})]),t("section",T,[t("table",V,[F,t("tbody",null,[(n(!0),i(f,null,A(p.value,e=>(n(),i("tr",Q,[t("td",j,s(e.amount.toLocaleString()),1),t("td",q,s(e.type.startCase()),1),t("td",U,s(e.details),1),t("td",Y,s(e.isPaid?"Yes":"No"),1),t("td",G,s(e.paidAt),1),t("td",I,s(e.date),1),t("td",J,s(e.branch.name),1)]))),256))])])])]),_:1}),l(N,{data:u.value,onChange:a[0]||(a[0]=e=>r(`page=${e}`)),class:"mt-3"},null,8,["data"])],64)}}});export{lt as default};
