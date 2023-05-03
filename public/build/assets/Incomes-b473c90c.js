import{d as V,e as m,x as L,y as I,o as i,c as u,a as p,h as b,v as U,b as t,T as B,a0 as D,w as v,g as d,Q as k,r as $,U as R,t as l,i as y,F as S,V as z,k as T,R as F,W as N,X as Q,Y,a3 as H,Z as P}from"./main-56f58ed8.js";import{M as j}from"./Master-fc459851.js";import{_ as E}from"./Paginator.vue_vue_type_script_setup_true_lang-05da81b6.js";import{u as K}from"./urlQueryManager-2477e94c.js";import{i as q}from"./index.es-a712216d.js";import{d as W}from"./datepickerPresets-79d17906.js";import{_ as O}from"./BranchFilter.vue_vue_type_script_setup_true_lang-3c8b7822.js";import{A as X}from"./ActivityLogSidebar-f7c42a1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-167e14f5.js";const Z={class:"flex gap-2 items-center ml-auto"},G=["onKeyup"],J=t("option",{value:"",selected:""},"Select status",-1),tt=t("option",{value:"settled"},"Settled",-1),et=t("option",{value:"due"},"Due",-1),st=[J,tt,et],ot=V({__name:"IncomesFilter",emits:["change"],setup(M,{emit:w}){const c=new URLSearchParams(location.search),h=m(""),f=m(""),o=m([null,null]),_=m("");L(()=>x());const g=I(()=>o.value[0]===null||o.value[1]===null?"":`${o.value[0]}~${o.value[1]}`),x=()=>{h.value=c.get("branchId")??"",f.value=c.get("registerUsername")??"",c.get("dateRange")&&(o.value=c.get("dateRange").split("~")),_.value=c.get("status")??""},r=()=>{let n=`branchId=${h.value}&registerUsername=${f.value}&status=${_.value}&dateRange=${g.value}&page=1`;w("change",n)};return(n,s)=>(i(),u("div",Z,[p(O,{modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=a=>h.value=a),onChange:r},null,8,["modelValue"]),b(t("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>f.value=a),onKeyup:B(r,["enter"]),type:"text",placeholder:"Register user name",class:"w-56 p-1.5 border border-gray-300 rounded focus:border-blue-500"},null,40,G),[[U,f.value]]),b(t("select",{"onUpdate:modelValue":s[2]||(s[2]=a=>_.value=a),onChange:r,class:"px-2 h-[38px] border border-gray-300 !rounded"},st,544),[[D,_.value]]),p(d(q),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:d(W),placeholder:"Select date range",value:o.value,"onUpdate:value":s[3]||(s[3]=a=>o.value=a),onChange:r,class:"!w-56","input-class":"w-full p-1.5 border border-gray-300 rounded focus:border-blue-500"},{"icon-calendar":v(()=>[]),_:1},8,["shortcuts","value"])]))}}),at={class:"flex justify-between"},rt=t("h1",null,"Incomes",-1),nt={class:"flex items-center mb-5"},lt={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},it={class:"w-full"},dt={class:"sticky top-0 z-10 text-left"},ct=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Register",-1),ut=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Amount",-1),pt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr whitespace-nowrap"},"Transactions Count",-1),ht=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Total",-1),_t=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr whitespace-nowrap"},"Due Balance",-1),gt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Notes",-1),mt=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date",-1),ft=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch",-1),yt={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},vt={class:"transition even:bg-gray-100"},bt={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},wt={class:"py-1 px-2 border border-gray-200"},xt={class:"py-1 px-2 border border-gray-200"},Ct={class:"py-1 px-2 border border-gray-200"},kt={class:"py-1 px-2 border border-gray-200"},$t={class:"py-1 px-2 border border-gray-200"},St={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},Vt={class:"py-1 px-2 border border-gray-200"},Lt={key:0,class:"py-1 px-2 border border-gray-200 text-center"},Mt={class:"flex justify-center gap-3"},At=["onClick"],It=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",fill:"currentColor",class:"w-5 h-5 mx-auto"},[t("path",{d:"M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32s-14.33 32-32 32S160 113.7 160 96S174.3 64 192 64zM282.9 262.8l-88 112c-4.047 5.156-10.02 8.438-16.53 9.062C177.6 383.1 176.8 384 176 384c-5.703 0-11.25-2.031-15.62-5.781l-56-48c-10.06-8.625-11.22-23.78-2.594-33.84c8.609-10.06 23.77-11.22 33.84-2.594l36.98 31.69l72.52-92.28c8.188-10.44 23.3-12.22 33.7-4.062C289.3 237.3 291.1 252.4 282.9 262.8z"})],-1),Ut=[It],Bt=t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Dt=["onClick"],Rt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),zt=[Rt],qt=V({__name:"Incomes",setup(M){const w=m([]),c=m(""),h=m({}),{updateUrlQuery:f}=K(),{hasPermissionTo:o,hasAnyPermission:_}=Y();L(()=>g(location.search));const g=async r=>{const n=await f(r),{data:s}=await k.get(`/api/incomes?${n}`);w.value=s.data,h.value=s.meta,c.value=s.totalAmount},x=async r=>{const{isConfirmed:n}=await H.fire();n&&(await k.post(`/api/incomes/${r}/settle`),P.fire(),await g(location.search))};return(r,n)=>{const s=$("router-view"),a=$("router-link"),C=R("tip");return i(),u(S,null,[p(s,{onClose:g}),p(j,null,{header:v(()=>[t("div",at,[rt,t("p",null,"Total: "+l(c.value.toLocaleString()),1)])]),body:v(()=>[t("div",nt,[p(ot,{onChange:g})]),t("section",lt,[t("table",it,[t("thead",null,[t("tr",dt,[ct,ut,pt,ht,_t,gt,mt,ft,d(_)("Income.update","ActivityLog.list")?(i(),u("th",yt)):y("",!0)])]),t("tbody",null,[(i(!0),u(S,null,z(w.value,e=>(i(),u("tr",vt,[t("td",bt,l(e.register.user.name),1),t("td",wt,l(e.amount.toLocaleString()),1),t("td",xt,[p(a,{class:"text-blue-500 underline",to:`/transactions?income=${e.id}`},{default:v(()=>[T(l(e.transactions.length),1)]),_:2},1032,["to"])]),t("td",Ct,l(e.total.toLocaleString()),1),t("td",kt,l(e.dueBalance.toLocaleString()),1),t("td",$t,l(e.notes),1),t("td",St,l(e.date),1),t("td",Vt,l(e.branch.name),1),d(_)("Income.update","ActivityLog.list")?(i(),u("td",Lt,[t("div",Mt,[d(o)("Income.update")&&e.status==="due"?b((i(),u("button",{key:0,class:"text-blue-500 cursor-pointer",onClick:A=>x(e.id)},Ut,8,At)),[[C,"Settle"]]):y("",!0),d(o)("Income.update")?b((i(),F(a,{key:1,to:`/incomes/${e.id}/edit`,class:"text-orange-500 cursor-pointer"},{default:v(()=>[Bt]),_:2},1032,["to"])),[[C,"Edit"]]):y("",!0),d(o)("ActivityLog.list")?b((i(),u("button",{key:2,onClick:A=>d(N).emit(d(Q).Show,e.id),class:"text-gray-600 cursor-pointer"},zt,8,Dt)),[[C,"View Activities"]]):y("",!0)])])):y("",!0)]))),256))])])])]),_:1}),p(E,{data:h.value,onChange:n[0]||(n[0]=e=>g(`page=${e}`)),class:"mt-3"},null,8,["data"]),p(X)],64)}}});export{qt as default};
