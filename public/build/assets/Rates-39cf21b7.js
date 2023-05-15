import{d as V,e as u,x as P,Q as R,y as U,o as l,c,a as m,g as a,R as D,i as g,h as k,a0 as A,b as e,w,U as H,r as B,V as j,t as b,j as S,F as M,W as L,X as N,c8 as T,k as I,a3 as F,Z as Q}from"./main-6e47ceb6.js";import{M as Y}from"./Master-c2e1e299.js";import{_ as q}from"./Paginator.vue_vue_type_script_setup_true_lang-161ff6db.js";import{u as G}from"./urlQueryManager-757a21bf.js";import{i as W}from"./index.es-2384e375.js";import{d as O}from"./datepickerPresets-82697600.js";import{_ as X}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d104a2b1.js";import{s as Z}from"./multiselect-27b4da8b.js";import{E as J}from"./expenseType-dae18553.js";import{_ as K}from"./ExpenseGenerationModal.vue_vue_type_script_setup_true_lang-1876a90b.js";import"./_plugin-vue_export-helper-c27b6911.js";const ee={class:"flex gap-2 items-center ml-auto"},te=e("option",{value:"",selected:""},"Select status",-1),se=e("option",{value:!0},"Has Expense",-1),oe=e("option",{value:!1},"Doesn't Have Expense",-1),ae=[te,se,oe],ne=V({__name:"RatesFilter",emits:["change"],setup(z,{emit:p}){const h=new URLSearchParams(location.search),{hasPermissionTo:C,hasAnyPermission:x}=H(),_=u(""),r=u([null,null]),v=u(""),y=u(""),f=u([]);P(()=>{s(),$()});const $=async()=>{if(!C("Partner.list"))return;const{data:i}=await R.get(`/api/partners/list?branchId=${_.value}`);f.value.push(...i.data)},E=U(()=>r.value[0]===null||r.value[1]===null?"":`${r.value[0]}~${r.value[1]}`),s=()=>{_.value=h.get("branchId")??"",v.value=h.get("hasExpense")??"",y.value=h.get("partnerId")??"",h.get("dateRange")&&(r.value=h.get("dateRange").split("~"))},o=i=>{y.value=i??"",n()},n=()=>{let i=`branchId=${_.value}&partnerId=${y.value}&hasExpense=${v.value}&dateRange=${E.value}&page=1`;p("change",i)};return(i,t)=>(l(),c("div",ee,[m(X,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=d=>_.value=d),onChange:n},null,8,["modelValue"]),a(C)("Partner.list")?(l(),D(a(Z),{key:0,"model-value":y.value,options:f.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select partner",onChange:o,class:"w-48 min-h-[38px] border border-gray-300 !rounded"},null,8,["model-value","options"])):g("",!0),k(e("select",{"onUpdate:modelValue":t[1]||(t[1]=d=>v.value=d),onChange:n,class:"px-2 h-[38px] border border-gray-300 !rounded"},ae,544),[[A,v.value]]),m(a(W),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:a(O),placeholder:"Select date range",value:r.value,"onUpdate:value":t[2]||(t[2]=d=>r.value=d),onChange:n,class:"!w-56","input-class":"w-full p-1.5 border border-gray-300 rounded focus:border-blue-500"},{"icon-calendar":w(()=>[]),_:1},8,["shortcuts","value"])]))}}),re={class:"flex justify-between"},le=e("h1",null,"Rates",-1),de={class:"flex items-center mb-5 gap-5"},ie={key:0,class:"flex gap-2 items-start"},ce={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},ue={class:"w-full"},pe={class:"sticky top-0 z-10 text-left"},he={class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},fe={class:"flex items-center justify-center"},me=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Reg. No.",-1),_e=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Invoice No.",-1),ve=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Partner",-1),ye=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Amount",-1),be=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date",-1),ge=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch",-1),xe={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},we={class:"transition even:bg-gray-100"},Ce={class:"py-1 px-2 border border-gray-200"},ke={class:"flex items-center justify-center"},$e=["onUpdate:modelValue"],Ee={class:"py-1 px-2 border border-gray-200"},Re={class:"py-1 px-2 border border-gray-200"},Se={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},Me={class:"py-1 px-2 border border-gray-200"},Ie={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},Ve={class:"py-1 px-2 border border-gray-200"},Pe={key:0,class:"py-1 px-2 border border-gray-200 text-center"},Ue={class:"flex justify-center gap-3"},De=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5 mx-auto"},[e("path",{d:"M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z"})],-1),He=["onClick"],ze=e("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),Ae=[ze],Oe=V({__name:"Rates",setup(z){const p=u([]),h=u({}),C=u(),x=u(!1),{updateUrlQuery:_}=G(),{hasPermissionTo:r,hasAnyPermission:v}=H();P(()=>f(location.search));const y=U(()=>p.value.filter(s=>s.isSelected).map(s=>s.id)),f=async s=>{const o=await _(s),{data:n}=await R.get(`/api/rates?${o}`);p.value=n.data,h.value=n.meta,C.value=n.total,x.value=!1},$=()=>{x.value?p.value.forEach(s=>s.isSelected=!0):p.value.forEach(s=>s.isSelected=!1)},E=async s=>{const{isConfirmed:o}=await F.fire();o&&(await R.delete(`/api/rates/${s}`),Q.fire(),await f(location.search))};return(s,o)=>{const n=B("router-link"),i=j("tip");return l(),c(M,null,[m(Y,null,{header:w(()=>[e("div",re,[le,e("p",null,"Total: "+b(C.value?.toLocaleString()),1)])]),body:w(()=>[e("div",de,[a(y).length>0?(l(),c("div",ie,[a(r)("Rate.generateExpense")?(l(),c("button",{key:0,onClick:o[0]||(o[0]=t=>a(N).emit(a(T).Show,a(y))),class:"btn-teal"},"Generate Expense")):g("",!0),e("button",{onClick:o[1]||(o[1]=t=>{p.value.forEach(d=>d.isSelected=!1),x.value=!1}),class:"btn-gray"},"Clear")])):g("",!0),m(ne,{onChange:f})]),e("section",ce,[e("table",ue,[e("thead",null,[e("tr",pe,[e("th",he,[e("label",fe,[k(e("input",{type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=t=>x.value=t),onChange:$,class:"w-4 h-4 rounded checked:accent-blue-500"},null,544),[[S,x.value]])])]),me,_e,ve,ye,be,ge,a(v)("Expense.view","Rate.delete")?(l(),c("th",xe)):g("",!0)])]),e("tbody",null,[(l(!0),c(M,null,L(p.value,t=>(l(),c("tr",we,[e("td",Ce,[e("label",ke,[k(e("input",{type:"checkbox","onUpdate:modelValue":d=>t.isSelected=d,class:"w-4 h-4 rounded checked:accent-blue-500"},null,8,$e),[[S,t.isSelected]])])]),e("td",Ee,[m(n,{class:"text-blue-500 underline",to:`/visits?branchId=${t.branchId}&number=${t.visit.number}`},{default:w(()=>[I(b(t.visit.number),1)]),_:2},1032,["to"])]),e("td",Re,[m(n,{class:"text-blue-500 underline",to:`/invoices?branchId=${t.branchId}&number=${t.invoice.number}`},{default:w(()=>[I(b(t.invoice.number),1)]),_:2},1032,["to"])]),e("td",Se,b(t.partner.name),1),e("td",Me,b(t.amount.toLocaleString()),1),e("td",Ie,b(t.date),1),e("td",Ve,b(t.branch.name),1),a(v)("Expense.view","Rate.delete")?(l(),c("td",Pe,[e("div",Ue,[a(r)("Expense.view")&&t.expenseId?k((l(),D(n,{key:0,to:`/expenses?id=${t.expenseId}`,class:"text-blue-500 cursor-pointer"},{default:w(()=>[De]),_:2},1032,["to"])),[[i,"View Expense"]]):g("",!0),a(r)("Rate.delete")?k((l(),c("button",{key:1,onClick:d=>E(t.id),class:"text-red-500 cursor-pointer"},Ae,8,He)),[[i,"Delete"]]):g("",!0)])])):g("",!0)]))),256))])])])]),_:1}),m(q,{data:h.value,onChange:o[3]||(o[3]=t=>f(`page=${t}`)),class:"mt-3"},null,8,["data"]),m(K,{type:a(J).Rate,onClose:f},null,8,["type"])],64)}}});export{Oe as default};