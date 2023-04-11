import{d as G,e as c,y as H,x as K,E as D,Y as R,U as k,s as Q,o,C as X,w as h,k as U,t as n,b as s,h as w,J as Z,n as B,c as r,D as C,g as ee,F as P,i as y,f as S,a as te,_ as se,V as ae,j as z,S as le,A}from"./main-c1f62c61.js";import{u as oe,P as ne,p as re}from"./websocketPrint-85d5f8b4.js";import{u as ce}from"./printTemplateManager-4195074d.js";import{O as N}from"./orderStatus-e3a3f9a7.js";var $=(v=>(v.Print="print",v.Send="send",v))($||{});const ie=["onSubmit"],de={class:"flex flex-wrap items-center mb-3"},ue=s("span",{class:"w-20 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Template",-1),pe=["value"],me={key:0,class:"ml-20 w-full text-red-500 text-sm"},ve=["onClick"],be=["onClick"],fe=s("hr",{class:"mt-2"},null,-1),_e={class:"max-h-[30rem] py-1 overflow-auto"},he={class:"select-none"},ye={class:"flex items-center text-xl font-bold"},Se=["onUpdate:modelValue","onChange"],xe={class:"ml-1"},ge={class:"border-l-2 border-gray-200 pl-5"},ke=["onUpdate:modelValue","disabled"],we={class:"ml-1"},Ce={key:0,class:"inline-block ml-2"},Pe={key:0,class:"mt-3 p-2 rounded bg-red-50 text-red-500 border-l-4 border-red-500"},Ie=["disabled"],Oe=G({__name:"ResultsReleaseModal",emits:["close"],setup(v,{emit:F}){const b=c(!1),x=c(!1),f=c(),i=c({}),d=c([]),_=c([]),I=H(()=>d.value.filter(e=>e.isSelected)),{resultsTemplates:J,defaultResultTemplate:L}=ce(),p=c(null),u=c({}),V=oe();K(()=>{D.on(R.Show,({visit:e,orders:t,releaseType:l})=>{x.value=!0,f.value=l,i.value=k.cloneDeep(e),d.value=k.cloneDeep(t),_.value=k.uniqBy(d.value.flatMap(a=>a.test.department),"id"),p.value=L(i.value.branchId)?.id,T(),E()})}),Q(()=>D.off(R.Show));const m=e=>[N.Authorized,N.Released].includes(e.status)&&e.test.isPrintable,g=e=>d.value.filter(t=>t.test.department.id===e.id),j=e=>{e.isSelected?g(e).filter(t=>m(t)).forEach(t=>t.isSelected=!0):g(e).forEach(t=>t.isSelected=!1)},E=()=>{_.value.forEach(e=>e.isSelected=!0),d.value.filter(e=>m(e)).forEach(e=>e.isSelected=!0)},T=()=>{_.value.forEach(e=>e.isSelected=!1),d.value.forEach(e=>e.isSelected=!1)},M=async(e=!1)=>{b.value=!0;try{f.value===$.Print?await q(e):await W(),le.fire(),O()}catch(t){u.value=t.response.data.errors??{}}b.value=!1},q=async e=>{const{data:t}=await A.post("/api/results/print",{visitId:i.value.id,orders:I.value,templateId:p.value});V.isConnected&&!e?V.submit({type:ne.Results,url:"results.pdf",file_content:t}):re({printable:t,type:"pdf",base64:!0})},W=async()=>{await A.post("/api/results/send",{visitId:i.value.id,orders:I.value,templateId:p.value})},O=()=>{x.value=!1,u.value={},F("close")};return(e,t)=>x.value?(o(),X(ae,{key:0},{header:h(()=>[U(n(f.value.capitalize())+" Results of "+n(i.value.patient.name),1)]),body:h(()=>[s("form",{id:"form",onSubmit:S(M,["prevent","stop"])},[s("div",de,[ue,w(s("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>p.value=l),class:B(["flex-1 px-2 py-1 h-[42px] border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":u.value.hasOwnProperty("templateId")}])},[(o(!0),r(P,null,C(ee(J)(i.value.branchId),l=>(o(),r("option",{value:l.id},n(l.name),9,pe))),256))],2),[[Z,p.value]]),u.value.hasOwnProperty("templateId")?(o(),r("p",me,n(u.value.templateId[0]),1)):y("",!0)]),s("div",null,[s("button",{class:"btn-blue text-sm mr-2",onClick:S(E,["prevent"])},"Select All",8,ve),s("button",{class:"btn-gray text-sm",onClick:S(T,["prevent"])},"Clear",8,be)]),fe,s("div",_e,[(o(!0),r(P,null,C(_.value,l=>(o(),r("div",he,[s("label",ye,[w(s("input",{type:"checkbox","onUpdate:modelValue":a=>l.isSelected=a,onChange:a=>j(l),class:"w-4 h-4 rounded checked:accent-blue-500"},null,40,Se),[[z,l.isSelected]]),s("span",xe,n(l.name),1)]),s("div",ge,[(o(!0),r(P,null,C(g(l),a=>(o(),r("label",{class:B(["flex items-center",{"text-gray-400":!m(a)}])},[w(s("input",{type:"checkbox","onUpdate:modelValue":Y=>a.isSelected=Y,disabled:!m(a),class:"w-4 h-4 rounded checked:accent-blue-500"},null,8,ke),[[z,a.isSelected]]),s("span",we,n(a.test.shortForm),1),m(a)?y("",!0):(o(),r("span",Ce," ("+n(a.status.capitalize())+" "+n(a.test.bypass?"-bypass":"")+" "+n(a.test.isPrintable?"":"-disabled")+") ",1))],2))),256))])]))),256))]),u.value.hasOwnProperty("orders")?(o(),r("p",Pe,"Select at least one order to continue.")):y("",!0)],40,ie)]),footer:h(()=>[s("button",{class:"btn-blue mr-2",disabled:b.value,form:"form",onContextmenu:t[1]||(t[1]=S(l=>M(!0),["prevent"]))},[te(se,{"is-loading":b.value},{default:h(()=>[U(n(f.value.capitalize()),1)]),_:1},8,["is-loading"])],40,Ie),s("button",{onClick:O,class:"btn-gray"},"Cancel")]),_:1})):y("",!0)}});export{$ as R,Oe as _};