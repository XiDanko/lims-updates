import{d as K,g as x,x as Y,y as q,o as i,c as d,b as e,a as v,j as R,v as T,a1 as U,W as Z,i as r,w as $,F as j,s as G,Q as M,V as X,m as N,h as F,_ as L,k as h,a2 as W,Z as ee,a0 as P,ac as te,ad as se,n as z,t as _,a3 as oe,a4 as ae,T as re}from"./main-0c5e983d.js";import{M as le}from"./Master-2413594e.js";import{_ as ne}from"./Paginator.vue_vue_type_script_setup_true_lang-8b2657b0.js";import{u as ie}from"./urlQueryManager-bb9ba2ef.js";import{i as de}from"./index.es-30919fd7.js";import{d as ce}from"./datepickerPresets-887d9912.js";import{_ as ue}from"./BarcodeScanner.vue_vue_type_script_setup_true_lang-1398da4a.js";import{_ as pe}from"./BranchFilter.vue_vue_type_script_setup_true_lang-d78112e2.js";import{O as A}from"./orderStatus-e3a3f9a7.js";import{u as fe,P as O,p as Q}from"./websocketPrint-fe953d11.js";import{u as be}from"./ordersBulkSelection-8141a972.js";import{A as ve}from"./ActivityLogSidebar-5a366e2e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./multiselect-f0516a60.js";const ye={class:"ml-auto flex items-center gap-2"},me=["onKeyup"],ge=e("option",{value:""},"Select status",-1),he=["value"],_e=["value"],xe=K({__name:"SamplesAccessionFilter",emits:["change","scan"],setup(E,{emit:w}){const m=new URLSearchParams(location.search),k=x(""),c=x(""),p=x(""),l=x(""),u=x([null,null]);Y(()=>f());const B=q(()=>u.value[0]===null||u.value[1]===null?"":`${u.value[0]}~${u.value[1]}`),D=async y=>{V(),p.value=y,C("scan")},f=()=>{k.value=m.get("branchId")??"",p.value=m.get("barcode")??"",c.value=m.get("visitNumber")??"",l.value=m.get("status")??"",m.get("dateRange")&&(u.value=m.get("dateRange").split("~"))},S=()=>{const y=c.value;V(),c.value=y,C()},g=()=>{const y=p.value;V(),p.value=y,C()},C=(y="change")=>{let o=`branchId=${k.value}&barcode=${p.value}&visitNumber=${c.value}&status=${l.value}&dateRange=${B.value}&page=1`;w(y,o)},V=()=>{k.value="",c.value="",p.value="",l.value="",u.value=[null,null]};return(y,o)=>(i(),d(j,null,[e("div",ye,[v(pe,{modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=n=>k.value=n),onChange:C},null,8,["modelValue"]),R(e("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>c.value=n),onKeyup:U(S,["enter"]),type:"text",placeholder:"Registration number",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,40,me),[[T,c.value]]),R(e("input",{"onUpdate:modelValue":o[2]||(o[2]=n=>p.value=n),onKeyup:o[3]||(o[3]=U(n=>g(),["enter"])),type:"text",placeholder:"Barcode",class:"w-56 rounded border border-gray-300 p-1.5 focus:border-blue-500"},null,544),[[T,p.value]]),R(e("select",{"onUpdate:modelValue":o[4]||(o[4]=n=>l.value=n),onChange:o[5]||(o[5]=n=>C()),class:"px-2 h-[38px] border border-gray-300 !rounded"},[ge,e("option",{value:r(A).Collected},"Collected",8,he),e("option",{value:r(A).Accepted},"Rejected",8,_e)],544),[[Z,l.value]]),v(r(de),{range:"",lang:{formatLocale:{firstDayOfWeek:6}},type:"date","value-type":"format",format:"YYYY-MM-DD",shortcuts:r(ce),placeholder:"Select date range",value:u.value,"onUpdate:value":o[6]||(o[6]=n=>u.value=n),onChange:o[7]||(o[7]=n=>C()),class:"!w-56","input-class":"w-full rounded border border-gray-300 p-1.5 focus:border-blue-500"},{"icon-calendar":$(()=>[]),_:1},8,["shortcuts","value"])]),v(ue,{onScan:D})],64))}}),we={class:"mb-5 flex flex-wrap items-center gap-2"},Ce={key:0,class:"flex items-start gap-2"},ke=["disabled"],Se=["disabled"],$e=["disabled"],Be=["disabled"],Ae={class:"pr-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},Ve={class:"w-full"},Me={class:"sticky top-0 z-10 text-left"},Ne={class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},Ie={class:"flex items-center justify-center"},Le=["checked"],Re=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Name",-1),je=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Tests",-1),De=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Department",-1),Fe=e("th",{class:"whitespace-nowrap first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Sample Type",-1),Te=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Barcode",-1),Ue=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Status",-1),We=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Notes",-1),Pe=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Date",-1),ze=e("th",{class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},"Branch",-1),Oe={key:0,class:"first-of-type:rounded-tl last-of-type:rounded-tr bg-gray-600 p-2 font-semibold text-white"},Qe={class:"flex items-center justify-center"},Ke=["checked","onChange"],Ye={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},qe={class:"border border-gray-200 px-2 py-1"},Ee={class:"flex flex-wrap items-center gap-1 max-w-[30rem]"},He={class:"rounded bg-teal-500 px-1 text-xs text-white group-hover:bg-white group-hover:text-gray-600"},Je={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},Ze={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},Ge={class:"border border-gray-200 px-2 py-1"},Xe={class:"border border-gray-200 px-2 py-1"},et={class:"border border-gray-200 px-2 py-1"},tt={class:"whitespace-nowrap border border-gray-200 px-2 py-1"},st={class:"border border-gray-200 px-2 py-1"},ot={key:0,class:"border border-gray-200 px-2 py-1 text-center"},at={class:"flex justify-center gap-3"},rt=["onClick"],lt=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),nt=[lt],wt=K({__name:"SamplesAccession",setup(E){const w=x([]),m=x({}),{updateUrlQuery:k}=ie(),{hasPermissionTo:c,hasAnyPermission:p}=re(),l=x(!1),u=x(!1),B=fe(),D=setInterval(()=>g(location.search),15e3),f=be(),S=q(()=>w.value.filter(a=>f.selectedOrdersIds.value.has(a.id)));Y(()=>g(location.search)),G(()=>clearInterval(D));const g=async a=>{const t=await k(a),{data:b}=await M.get(`/api/samples-accession?${t}`);w.value=b.data,m.value=b.meta},C=async a=>{await g(a),f.toggleAll(w.value,!0)},V=async()=>{const{isConfirmed:a}=await ee.fire();a&&(u.value=!0,await M.post("/api/samples/accept",{samples:S.value}),P.fire(),u.value=!1,g(location.search),f.clear())},y=async()=>{const{isConfirmed:a}=await te.fire({title:"Notes",input:"textarea",preConfirm:async t=>{try{await M.post("/api/samples/reject",{samples:S.value,notes:t}),P.fire()}catch(b){se.showValidationMessage(b.response.data.message)}}});a&&(g(location.search),f.clear())},o=async(a,t=!1)=>{l.value=!0;const{data:b}=await M.post("/api/samples/print",{type:a,orders:S.value});B.isConnected&&!t?B.submit({type:O.Barcodes,url:"barcode.pdf",file_content:b}):Q({printable:b,type:"pdf",base64:!0}),l.value=!1},n=async(a=!1)=>{l.value=!0;const{data:t}=await M.post("/api/visits/print-barcode",{visitId:S.value.flatMap(b=>b.visitId)});B.isConnected&&!a?B.submit({type:O.Barcodes,url:"barcode.pdf",file_content:t}):Q({printable:t,type:"pdf",base64:!0}),l.value=!1},H=a=>{if(a===A.Collected)return"border-l-yellow-400";if(a===A.Accepted)return"border-l-orange-500"},J=a=>{if(a===A.Collected)return"hover:bg-yellow-400 hover:text-black";if(a===A.Accepted)return"hover:bg-orange-500 hover:text-white"};return(a,t)=>{const b=X("tip");return i(),d(j,null,[v(le,null,{header:$(()=>[N("Samples Accession")]),body:$(()=>[e("div",we,[S.value.length>0?(i(),d("div",Ce,[r(c)("Visit.printBarcode")?(i(),d("button",{key:0,onClick:t[0]||(t[0]=s=>n(!1)),onContextmenu:t[1]||(t[1]=F(s=>n(!0),["prevent"])),class:"btn-blue",disabled:l.value},[v(L,{"is-loading":l.value},{default:$(()=>[N("Visit Barcode")]),_:1},8,["is-loading"])],40,ke)):h("",!0),r(c)("Sample.print")?(i(),d("button",{key:1,onClick:t[2]||(t[2]=s=>o("sampleWise")),onContextmenu:t[3]||(t[3]=F(s=>o("sampleWise",!0),["prevent"])),class:"btn-blue",disabled:l.value},[v(L,{"is-loading":l.value},{default:$(()=>[N("Barcodes S.W.")]),_:1},8,["is-loading"])],40,Se)):h("",!0),r(c)("Sample.print")?(i(),d("button",{key:2,onClick:t[4]||(t[4]=s=>o("departmentWise")),onContextmenu:t[5]||(t[5]=F(s=>o("departmentWise",!0),["prevent"])),class:"btn-blue",disabled:l.value},[v(L,{"is-loading":l.value},{default:$(()=>[N("Barcodes D.W.")]),_:1},8,["is-loading"])],40,$e)):h("",!0),r(c)("Sample.accept")?(i(),d("button",{key:3,onClick:V,class:"btn-teal",disabled:u.value},[v(L,{"is-loading":u.value},{default:$(()=>[N("Accept")]),_:1},8,["is-loading"])],8,Be)):h("",!0),r(c)("Sample.reject")?(i(),d("button",{key:4,onClick:y,class:"btn-red"},"Reject")):h("",!0),e("button",{onClick:t[6]||(t[6]=s=>r(f).clear()),class:"btn-gray"},"Clear")])):h("",!0),v(xe,{onChange:g,onScan:C})]),e("section",Ae,[e("table",Ve,[e("thead",null,[e("tr",Me,[e("th",Ne,[e("label",Ie,[e("input",{type:"checkbox",checked:r(f).isAllSelected(w.value),onChange:t[7]||(t[7]=s=>r(f).toggleAll(w.value,s.target.checked)),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Le)])]),Re,je,De,Fe,Te,Ue,We,Pe,ze,r(p)("ActivityLog.list")?(i(),d("th",Oe)):h("",!0)])]),e("tbody",null,[(i(!0),d(j,null,W(w.value,s=>(i(),d("tr",{class:z(["transition group even:bg-gray-100",J(s.status)])},[e("td",{class:z(["border border-gray-200 px-2 py-1 border-l-[5px]",H(s.status)])},[e("label",Qe,[e("input",{type:"checkbox",checked:r(f).isSelected(s),onChange:I=>r(f).toggle(s,I.target.checked),class:"h-4 w-4 rounded checked:accent-blue-500"},null,40,Ke)])],2),e("td",Ye,_(s.patient.name),1),e("td",qe,[e("div",Ee,[(i(!0),d(j,null,W(s.tests,I=>(i(),d("span",He,_(I.shortForm),1))),256))])]),e("td",Je,_(s.test.department.name),1),e("td",Ze,_(s.test.sampleType.name),1),e("td",Ge,_(s.barcode),1),e("td",Xe,_(s.status.capitalize()),1),e("td",et,_(s.notes),1),e("td",tt,_(s.date),1),e("td",st,_(s.branch.name),1),r(p)("ActivityLog.list")?(i(),d("td",ot,[e("div",at,[r(c)("ActivityLog.list")?R((i(),d("button",{key:0,onClick:I=>r(oe).emit(r(ae).Show,s.id),class:"cursor-pointer text-gray-600 group-hover:text-white"},nt,8,rt)),[[b,"View Activities"]]):h("",!0)])])):h("",!0)],2))),256))])])])]),_:1}),v(ne,{data:m.value,onChange:t[8]||(t[8]=s=>g(`page=${s}`)),class:"mt-3"},null,8,["data"]),v(ve)],64)}}});export{wt as default};
