import{d as Y,e as m,x as E,y as K,o as d,c,b as e,a as u,h as D,v as Z,T as G,a0 as ee,g as r,w as k,F as R,s as te,Q as L,a3 as U,Z as F,U as se,k as V,f as M,_ as P,i as h,V as j,n as z,t as f,W as oe,X as ae,Y as re}from"./main-56f58ed8.js";import{M as le}from"./Master-fc459851.js";import{_ as ne}from"./Paginator.vue_vue_type_script_setup_true_lang-05da81b6.js";import{u as ie}from"./urlQueryManager-2477e94c.js";import{i as de}from"./index.es-a712216d.js";import{d as ce}from"./datepickerPresets-79d17906.js";import{_ as ue}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-0d0cb304.js";import{_ as pe}from"./BranchFilter.vue_vue_type_script_setup_true_lang-3c8b7822.js";import{O as g}from"./orderStatus-e3a3f9a7.js";import{u as fe,P as O,p as Q}from"./websocketPrint-54028e1f.js";import{u as be}from"./ordersBulkSelection-75fcbb45.js";import{A as ve}from"./ActivityLogSidebar-f7c42a1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-167e14f5.js";const ye={class:"flex gap-2 items-center ml-auto"},he=["onKeyup"],ge=e("option",{value:""},"Select status",-1),me=["value"],_e=["value"],xe=["value"],we=Y({__name:"SamplesCollectionFilter",emits:["change","scan"],setup(q,{emit:_}){const x=new URLSearchParams(location.search),w=m(""),n=m(""),b=m(""),l=m([null,null]);E(()=>B());const S=K(()=>l.value[0]===null||l.value[1]===null?"":`${l.value[0]}~${l.value[1]}`),$=async v=>{n.value=v,w.value="",l.value=[null,null],b.value="",i("scan")},B=()=>{w.value=x.get("branchId")??"",n.value=x.get("visitNumber")??"",b.value=x.get("status")??"",x.get("dateRange")&&(l.value=x.get("dateRange").split("~"))},I=()=>{const v=n.value;C(),n.value=v,i()},i=(v="change")=>{let a=`branchId=${w.value}&visitNumber=${n.value}&status=${b.value}&dateRange=${S.value}&page=1`;_(v,a)},C=()=>{w.value="",n.value="",b.value="",l.value=[null,null]};return(v,a)=>(d(),c(R,null,[e("div",ye,[u(pe,{modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=p=>w.value=p),onChange:i},null,8,["modelValue"]),D(e("input",{"onUpdate:modelValue":a[1]||(a[1]=p=>n.value=p),onKeyup:G(I,["enter"]),type:"text",placeholder:"Registration number",class:"w-56 p-1.5 border border-gray-300 rounded focus:border-blue-500"},null,40,he),[[Z,n.value]]),D(e("select",{"onUpdate:modelValue":a[2]||(a[2]=p=>b.value=p),onChange:a[3]||(a[3]=p=>i()),class:"px-2 h-[38px] border border-gray-300 !rounded"},[ge,e("option",{value:r(g).Pending},"Pending",8,me),e("option",{value:r(g).Collected},"Collected",8,_e),e("option",{value:r(g).Rejected},"Rejected",8,xe)],544),[[ee,b.value]]),u(r(de),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:r(ce),placeholder:"Select date range",value:l.value,"onUpdate:value":a[4]||(a[4]=p=>l.value=p),onChange:a[5]||(a[5]=p=>i()),class:"!w-56","input-class":"w-full p-1.5 border border-gray-300 rounded focus:border-blue-500"},{"icon-calendar":k(()=>[]),_:1},8,["shortcuts","value"])]),u(ue,{onScan:$})],64))}}),Ce={class:"flex flex-wrap items-center gap-2 mb-5"},ke={key:0,class:"flex items-start gap-2"},Se=["disabled"],$e=["disabled"],Be=["disabled"],Ve=["disabled"],Ae=["disabled"],Le={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},Pe={class:"w-full"},Ne={class:"sticky top-0 z-10 text-left"},Re={class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},Ie={class:"flex items-center justify-center"},Me=["checked"],De=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"No.",-1),We=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Name",-1),Te=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Tests",-1),Ue=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Department",-1),Fe=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr whitespace-nowrap"},"Sample Type",-1),je=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Barcode",-1),ze=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Status",-1),Oe=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Notes",-1),Qe=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Date",-1),Ye=e("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Branch",-1),Ee={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},Ke={class:"flex items-center justify-center"},qe=["checked","onChange"],He={class:"py-1 px-2 border border-gray-200"},Je={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},Xe={class:"py-1 px-2 border border-gray-200"},Ze={class:"flex flex-wrap items-center gap-1 max-w-[30rem]"},Ge={class:"rounded px-1 text-xs bg-teal-500 text-white group-hover:bg-white group-hover:text-gray-600"},et={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},tt={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},st={class:"py-1 px-2 border border-gray-200"},ot={class:"py-1 px-2 border border-gray-200"},at={class:"py-1 px-2 border border-gray-200"},rt={class:"py-1 px-2 border border-gray-200 whitespace-nowrap"},lt={class:"py-1 px-2 border border-gray-200"},nt={key:0,class:"py-1 px-2 border border-gray-200 text-center"},it={class:"flex justify-center gap-3"},dt=["onClick"],ct=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),ut=[ct],$t=Y({__name:"SamplesCollection",setup(q){const _=m([]),x=m({}),{updateUrlQuery:w}=ie(),{hasPermissionTo:n,hasAnyPermission:b}=re(),l=m(!1),S=m(!1),$=m(!1),B=fe(),I=setInterval(()=>a(location.search),15e3),i=be(),C=K(()=>_.value.filter(o=>i.selectedOrdersIds.value.has(o.id)));E(()=>{a(location.search),document.addEventListener("keyup",v)}),te(()=>{document.removeEventListener("keyup",v),clearInterval(I)});const v=async o=>{o.keyCode===13&&C.value.length>0&&(await A("departmentWise"),await W(!1))},a=async o=>{const t=await w(o),{data:y}=await L.get(`/api/samples-collection?${t}`);_.value=y.data,x.value=y.meta},p=async o=>{await a(o),i.toggleAll(_.value,!0)},W=async(o=!0)=>{if(o){const{isConfirmed:t}=await U.fire();if(!t)return}S.value=!0,await L.post("/api/samples/collect",{samples:C.value}),F.fire(),S.value=!1,await a(location.search),i.clear()},H=async()=>{const{isConfirmed:o}=await U.fire();o&&($.value=!0,await L.post("/api/samples/accept",{samples:C.value}),F.fire(),$.value=!1,await a(location.search),i.clear())},A=async(o,t=!1)=>{l.value=!0;const{data:y}=await L.post("/api/samples/print",{type:o,orders:C.value});B.isConnected&&!t?B.submit({type:O.Barcodes,url:"barcode.pdf",file_content:y}):Q({printable:y,type:"pdf",base64:!0}),l.value=!1},T=async(o=!1)=>{l.value=!0;const{data:t}=await L.post("/api/visits/print-barcode",{visitId:C.value.flatMap(y=>y.visitId)});B.isConnected&&!o?B.submit({type:O.Barcodes,url:"barcode.pdf",file_content:t}):Q({printable:t,type:"pdf",base64:!0}),l.value=!1},J=o=>{if(o===g.Pending)return"border-l-gray-300";if(o===g.Collected)return"border-l-yellow-400";if(o===g.Rejected)return"border-l-red-500"},X=o=>{if(o===g.Pending)return"hover:bg-gray-300 hover:text-black";if(o===g.Collected)return"hover:bg-yellow-400 hover:text-black";if(o===g.Rejected)return"hover:bg-red-500 hover:text-white"};return(o,t)=>{const y=se("tip");return d(),c(R,null,[u(le,null,{header:k(()=>[V("Samples Collection")]),body:k(()=>[e("div",Ce,[r(C).length>0?(d(),c("div",ke,[r(n)("Visit.printBarcode")?(d(),c("button",{key:0,onClick:t[0]||(t[0]=s=>T(!1)),onContextmenu:t[1]||(t[1]=M(s=>T(!0),["prevent"])),class:"btn-blue",disabled:l.value},[u(P,{"is-loading":l.value},{default:k(()=>[V("Visit Barcode")]),_:1},8,["is-loading"])],40,Se)):h("",!0),r(n)("Sample.print")?(d(),c("button",{key:1,onClick:t[2]||(t[2]=s=>A("sampleWise")),onContextmenu:t[3]||(t[3]=M(s=>A("sampleWise",!0),["prevent"])),class:"btn-blue",disabled:l.value},[u(P,{"is-loading":l.value},{default:k(()=>[V("Barcodes S.W.")]),_:1},8,["is-loading"])],40,$e)):h("",!0),r(n)("Sample.print")?(d(),c("button",{key:2,onClick:t[4]||(t[4]=s=>A("departmentWise")),onContextmenu:t[5]||(t[5]=M(s=>A("departmentWise",!0),["prevent"])),class:"btn-blue",disabled:l.value},[u(P,{"is-loading":l.value},{default:k(()=>[V("Barcodes D.W.")]),_:1},8,["is-loading"])],40,Be)):h("",!0),r(n)("Sample.collect")?(d(),c("button",{key:3,onClick:W,class:"btn-teal",disabled:S.value},[u(P,{"is-loading":S.value},{default:k(()=>[V("Collect")]),_:1},8,["is-loading"])],8,Ve)):h("",!0),r(n)("Sample.accept")?(d(),c("button",{key:4,onClick:H,class:"btn-teal",disabled:$.value},[u(P,{"is-loading":$.value},{default:k(()=>[V("Accept")]),_:1},8,["is-loading"])],8,Ae)):h("",!0),e("button",{onClick:t[6]||(t[6]=s=>r(i).clear()),class:"btn-gray"},"Clear")])):h("",!0),u(we,{onChange:a,onScan:p})]),e("section",Le,[e("table",Pe,[e("thead",null,[e("tr",Ne,[e("th",Re,[e("label",Ie,[e("input",{type:"checkbox",checked:r(i).isAllSelected(_.value),onChange:t[7]||(t[7]=s=>r(i).toggleAll(_.value,s.target.checked)),class:"w-4 h-4 rounded checked:accent-blue-500"},null,40,Me)])]),De,We,Te,Ue,Fe,je,ze,Oe,Qe,Ye,r(b)("ActivityLog.list")?(d(),c("th",Ee)):h("",!0)])]),e("tbody",null,[(d(!0),c(R,null,j(_.value,s=>(d(),c("tr",{class:z(["transition even:bg-gray-100 group",X(s.status)])},[e("td",{class:z(["py-1 px-2 border border-l-[5px] border-gray-200",J(s.status)])},[e("label",Ke,[e("input",{type:"checkbox",checked:r(i).isSelected(s),onChange:N=>r(i).toggle(s,N.target.checked),class:"w-4 h-4 rounded checked:accent-blue-500"},null,40,qe)])],2),e("td",He,f(s.visit.number),1),e("td",Je,f(s.patient.name),1),e("td",Xe,[e("div",Ze,[(d(!0),c(R,null,j(s.tests,N=>(d(),c("span",Ge,f(N.shortForm),1))),256))])]),e("td",et,f(s.test.department.name),1),e("td",tt,f(s.test.sampleType.name),1),e("td",st,f(s.barcode),1),e("td",ot,f(s.status.capitalize()),1),e("td",at,f(s.notes),1),e("td",rt,f(s.date),1),e("td",lt,f(s.branch.name),1),r(b)("ActivityLog.list")?(d(),c("td",nt,[e("div",it,[r(n)("ActivityLog.list")?D((d(),c("button",{key:0,onClick:N=>r(oe).emit(r(ae).Show,s.id),class:"text-gray-600 group-hover:text-white cursor-pointer"},ut,8,dt)),[[y,"View Activities"]]):h("",!0)])])):h("",!0)],2))),256))])])])]),_:1}),u(ne,{data:x.value,onChange:t[8]||(t[8]=s=>a(`page=${s}`)),class:"mt-3"},null,8,["data"]),u(ve)],64)}}});export{$t as default};
