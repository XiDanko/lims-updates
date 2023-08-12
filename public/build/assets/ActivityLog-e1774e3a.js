import{d as U,g as u,x as M,y as A,Q as I,A as B,o,c as r,i as f,R as Q,k as $,j as k,v as T,b as e,W as V,a as m,w as j,T as z,f as N,m as Y,F as y,a2 as C,t as h}from"./main-bf2af1c2.js";import{M as P}from"./Master-fd48b992.js";import{_ as q}from"./Paginator.vue_vue_type_script_setup_true_lang-ae9d2a51.js";import{u as E}from"./urlQueryManager-97734f58.js";import{s as H}from"./multiselect-4f06085e.js";import{d as W}from"./datepickerPresets-09eddff9.js";import{i as O}from"./index.es-d69483ac.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={class:"ml-auto flex items-center gap-2"},J=e("option",{value:""},"Select event",-1),K=e("option",{value:"created"},"Created",-1),X=e("option",{value:"updated"},"Updated",-1),Z=e("option",{value:"deleted"},"Deleted",-1),ee=[J,K,X,Z],te=U({__name:"ActivityLogFilter",emits:["change"],setup(L,{expose:i,emit:b}){const d=new URLSearchParams(location.search),{hasPermissionTo:g}=z(),v=u([]),n=u(""),a=u(""),t=u(""),s=u(""),l=u([null,null]);M(()=>{S(),D()});const x=A(()=>l.value[0]===null||l.value[1]===null?"":`${l.value[0]}~${l.value[1]}`),S=()=>{n.value=d.get("userId")??"",a.value=d.get("subjectType")??"",t.value=d.get("subjectId")??"",s.value=d.get("event")??"",d.get("dateRange")&&(l.value=d.get("dateRange").split("~"))},D=async()=>{if(!g("User.list"))return;const{data:_}=await I.get("/api/users/list");v.value=_.data},F=_=>{n.value=_??""},R=()=>{n.value="",a.value="",t.value="",s.value="",l.value=[null,null],w()},w=()=>{const _=`userId=${n.value}&subjectType=${a.value}&subjectId=${t.value}&event=${s.value}&dateRange=${x.value}&page=1`;b("change",_)};return B([n,a,t,s,l],()=>w()),i({userId:n,subjectType:a,subjectId:t,event:s,filter:w}),(_,c)=>(o(),r("div",G,[f(g)("User.list")?(o(),Q(f(H),{key:0,"model-value":n.value,options:v.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select user",onChange:F,class:"border border-gray-300 min-h-[38px] !rounded w-56"},null,8,["model-value","options"])):$("",!0),k(e("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>a.value=p),type:"text",placeholder:"Subject type",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,512),[[T,a.value]]),k(e("input",{"onUpdate:modelValue":c[1]||(c[1]=p=>t.value=p),type:"text",placeholder:"Subject id",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,512),[[T,t.value]]),k(e("select",{"onUpdate:modelValue":c[2]||(c[2]=p=>s.value=p),class:"px-2 h-[38px] border border-gray-300 !rounded"},ee,512),[[V,s.value]]),m(f(O),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:f(W),placeholder:"Select date range",value:l.value,"onUpdate:value":c[3]||(c[3]=p=>l.value=p),class:"!w-56","input-class":"w-full rounded border border-gray-300 p-1.5 focus:border-blue-500"},{"icon-calendar":j(()=>[]),_:1},8,["shortcuts","value"]),e("span",{class:"btn-gray",onClick:R},"Clear")]))}}),se={class:"mb-5 flex items-center"},oe={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},re={class:"w-full"},ae=e("thead",null,[e("tr",{class:"sticky top-0 z-10 text-left"},[e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"}),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"User"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Subject Type"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Subject ID"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Event"),e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Date")])],-1),le={class:"even:bg-gray-100"},ne=["onClick"],de={key:0},ue={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"mx-auto h-6 w-6"},ce=e("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"},null,-1),ie=[ce],pe={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"mx-auto h-6 w-6"},he=e("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"},null,-1),ve=[he],_e={class:"border border-gray-200 px-2 py-1"},be=["onClick"],ge={class:"border border-gray-200 px-2 py-1"},fe=["onClick"],ye={class:"border border-gray-200 px-2 py-1"},me=["onClick"],xe={class:"border border-gray-200 px-2 py-1"},we=["onClick"],ke={class:"border border-gray-200 px-2 py-1"},Ce={key:0,class:"bg-white"},$e={colspan:"100%",class:"border border-gray-200 p-2"},je={class:"w-full border-separate border-spacing-y-1.5"},Te={class:"whitespace-nowrap rounded-l bg-blue-500 px-1 text-white"},Ue={key:0,class:"w-full rounded-r border border-gray-200 px-1"},Me={class:"flex flex-wrap items-center gap-1"},Ie={class:"rounded bg-teal-500 px-1 text-xs font-bold text-white"},Le=["innerHTML"],ze=U({__name:"ActivityLog",setup(L){const i=u(null),b=u([]),d=u({}),{updateUrlQuery:g}=E();N(),M(()=>v(location.search));const v=async n=>{const a=await g(n),{data:t}=await I.get(`/api/activity-log?${a}`);b.value=t.data,d.value=t.meta};return(n,a)=>(o(),r(y,null,[m(P,null,{header:j(()=>[Y("Activity Log")]),body:j(()=>[e("div",se,[m(te,{ref_key:"logFilter",ref:i,onChange:v},null,512)]),e("section",oe,[e("table",re,[ae,(o(!0),r(y,null,C(b.value,t=>(o(),r("tbody",le,[e("tr",null,[e("td",{class:"w-12 cursor-pointer border border-gray-200 py-1",onClick:s=>t.expanded=!t.expanded},[t.data?(o(),r("div",de,[t.expanded?(o(),r("svg",pe,ve)):(o(),r("svg",ue,ie))])):$("",!0)],8,ne),e("td",_e,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.userId=t.causer.id},h(t.causer.name),9,be)]),e("td",ge,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.subjectType=t.subjectType},h(t.subjectType.startCase()),9,fe)]),e("td",ye,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.subjectId=t.subjectId},h(t.subjectId),9,me)]),e("td",xe,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.event=t.event},h(t.event.startCase()),9,we)]),e("td",ke,h(t.date),1)]),t.expanded?(o(),r("tr",Ce,[e("td",$e,[e("table",je,[(o(!0),r(y,null,C(t.data,(s,l)=>(o(),r("tr",null,[e("td",Te,h(l.startCase()),1),s instanceof Array?(o(),r("td",Ue,[e("div",Me,[(o(!0),r(y,null,C(s,x=>(o(),r("span",Ie,h(x),1))),256))])])):(o(),r("td",{key:1,class:"w-full break-all rounded-r border border-gray-200 px-1",innerHTML:s},null,8,Le))]))),256))])])])):$("",!0)]))),256))])])]),_:1}),m(q,{data:d.value,onChange:a[0]||(a[0]=t=>v(`page=${t}`)),class:"mt-3"},null,8,["data"])],64))}});export{ze as default};
