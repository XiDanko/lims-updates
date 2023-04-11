import{d as I,e as u,x as M,y as R,A as T,I as B,o,c as r,g as f,C as V,i as $,h as k,v as U,b as e,J as z,a as m,w as j,H as N,k as Q,F as y,D as C,m as Y,t as h}from"./main-c1f62c61.js";import{M as H}from"./Master-77a73046.js";import{_ as P}from"./Paginator.vue_vue_type_script_setup_true_lang-ba67665d.js";import{u as q}from"./urlQueryManager-3fafa3c6.js";import{s as E}from"./multiselect-ffe70d49.js";import{d as J}from"./datepickerPresets-7a436e47.js";import{i as O}from"./index.es-2fd2791b.js";import"./_plugin-vue_export-helper-c27b6911.js";const W={class:"flex gap-2 items-center ml-auto"},G=e("option",{value:""},"Select event",-1),K=e("option",{value:"created"},"Created",-1),X=e("option",{value:"updated"},"Updated",-1),Z=e("option",{value:"deleted"},"Deleted",-1),ee=[G,K,X,Z],te=I({__name:"ActivityLogFilter",emits:["change"],setup(L,{expose:i,emit:b}){const d=new URLSearchParams(location.search),{hasPermissionTo:g}=N(),v=u([]),n=u(""),a=u(""),t=u(""),s=u(""),l=u([null,null]);M(()=>{S(),D()});const x=R(()=>l.value[0]===null||l.value[1]===null?"":`${l.value[0]}~${l.value[1]}`),S=()=>{n.value=d.get("userId")??"",a.value=d.get("subjectType")??"",t.value=d.get("subjectId")??"",s.value=d.get("event")??"",d.get("dateRange")&&(l.value=d.get("dateRange").split("~"))},D=async()=>{if(!g("User.list"))return;const{data:_}=await T.get("/api/users/list");v.value=_.data},F=_=>{n.value=_??""},A=()=>{n.value="",a.value="",t.value="",s.value="",l.value=[null,null],w()},w=()=>{const _=`userId=${n.value}&subjectType=${a.value}&subjectId=${t.value}&event=${s.value}&dateRange=${x.value}&page=1`;b("change",_)};return B([n,a,t,s,l],()=>w()),i({userId:n,subjectType:a,subjectId:t,event:s,filter:w}),(_,c)=>(o(),r("div",W,[f(g)("User.list")?(o(),V(f(E),{key:0,"model-value":n.value,options:v.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,placeholder:"Select user",onChange:F,class:"border border-gray-300 min-h-[38px] !rounded w-56"},null,8,["model-value","options"])):$("",!0),k(e("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>a.value=p),type:"text",placeholder:"Subject type",class:"p-1.5 w-56 border border-gray-300 rounded focus:border-blue-500"},null,512),[[U,a.value]]),k(e("input",{"onUpdate:modelValue":c[1]||(c[1]=p=>t.value=p),type:"text",placeholder:"Subject id",class:"p-1.5 w-56 border border-gray-300 rounded focus:border-blue-500"},null,512),[[U,t.value]]),k(e("select",{"onUpdate:modelValue":c[2]||(c[2]=p=>s.value=p),class:"px-2 h-[38px] border border-gray-300 !rounded"},ee,512),[[z,s.value]]),m(f(O),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:f(J),placeholder:"Select date range",value:l.value,"onUpdate:value":c[3]||(c[3]=p=>l.value=p),class:"!w-56","input-class":"w-full p-1.5 border border-gray-300 rounded focus:border-blue-500"},{"icon-calendar":j(()=>[]),_:1},8,["shortcuts","value"]),e("span",{class:"btn-gray",onClick:A},"Clear")]))}}),se={class:"flex items-center mb-5"},oe={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},re={class:"w-full"},ae=e("thead",null,[e("tr",{class:"sticky top-0 z-10 text-left"},[e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"}),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"User"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Subject Type"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Subject ID"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Event"),e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date")])],-1),le={class:"even:bg-gray-100"},ne=["onClick"],de={key:0},ue={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-6 h-6 mx-auto"},ce=e("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"},null,-1),ie=[ce],pe={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-6 h-6 mx-auto"},he=e("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"},null,-1),ve=[he],_e={class:"py-1 px-2 border border-gray-200"},be=["onClick"],ge={class:"py-1 px-2 border border-gray-200"},fe=["onClick"],ye={class:"py-1 px-2 border border-gray-200"},me=["onClick"],xe={class:"py-1 px-2 border border-gray-200"},we=["onClick"],ke={class:"py-1 px-2 border border-gray-200"},Ce={key:0,class:"bg-white"},$e={colspan:"100%",class:"border border-gray-200 p-2"},je={class:"w-full border-separate border-spacing-y-1.5"},Ue={class:"px-1 whitespace-nowrap bg-blue-500 text-white rounded-l"},Ie={key:0,class:"px-1 border border-gray-200 w-full rounded-r"},Me={class:"flex flex-wrap items-center gap-1"},Te={class:"px-1 bg-teal-500 text-xs text-white font-bold rounded"},Le=["innerHTML"],Ne=I({__name:"ActivityLog",setup(L){const i=u(null),b=u([]),d=u({}),{updateUrlQuery:g}=q();Y(),M(()=>v(location.search));const v=async n=>{const a=await g(n),{data:t}=await T.get(`/api/activity-log?${a}`);b.value=t.data,d.value=t.meta};return(n,a)=>(o(),r(y,null,[m(H,null,{header:j(()=>[Q("Activity Log")]),body:j(()=>[e("div",se,[m(te,{ref_key:"logFilter",ref:i,onChange:v},null,512)]),e("section",oe,[e("table",re,[ae,(o(!0),r(y,null,C(b.value,t=>(o(),r("tbody",le,[e("tr",null,[e("td",{class:"py-1 w-12 border border-gray-200 cursor-pointer",onClick:s=>t.expanded=!t.expanded},[t.data?(o(),r("div",de,[t.expanded?(o(),r("svg",pe,ve)):(o(),r("svg",ue,ie))])):$("",!0)],8,ne),e("td",_e,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.userId=t.causer.id},h(t.causer.name),9,be)]),e("td",ge,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.subjectType=t.subjectType},h(t.subjectType.startCase()),9,fe)]),e("td",ye,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.subjectId=t.subjectId},h(t.subjectId),9,me)]),e("td",xe,[e("span",{class:"cursor-pointer hover:text-blue-500 hover:underline",onClick:s=>i.value.event=t.event},h(t.event.startCase()),9,we)]),e("td",ke,h(t.date),1)]),t.expanded?(o(),r("tr",Ce,[e("td",$e,[e("table",je,[(o(!0),r(y,null,C(t.data,(s,l)=>(o(),r("tr",null,[e("td",Ue,h(l.startCase()),1),s instanceof Array?(o(),r("td",Ie,[e("div",Me,[(o(!0),r(y,null,C(s,x=>(o(),r("span",Te,h(x),1))),256))])])):(o(),r("td",{key:1,class:"px-1 border border-gray-200 break-all w-full rounded-r",innerHTML:s},null,8,Le))]))),256))])])])):$("",!0)]))),256))])])]),_:1}),m(P,{data:d.value,onChange:a[0]||(a[0]=t=>v(`page=${t}`)),class:"mt-3"},null,8,["data"])],64))}});export{Ne as default};
