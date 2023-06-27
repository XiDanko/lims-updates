import{d as le,f as ie,e as de,Y as ce,g as f,x as ue,Q as p,y as be,o as d,R as L,S as he,w as m,b as s,t as a,i as e,c,a2 as W,F as M,n as g,j as ge,v as fe,k as h,a as A,m as H,_ as P,h as ye,T as _e,a0 as Y,p as o}from"./main-0c5e983d.js";import{M as pe}from"./Master-2413594e.js";import{a as me,u as ve}from"./resultEntryResolver-08f1a5dc.js";import{R as b}from"./rangeType-b75ca402.js";import{O as J}from"./orderStatus-e3a3f9a7.js";import{u as xe,P as we,p as Re}from"./websocketPrint-fe953d11.js";import{P as v}from"./PremaritalScreeningUploadStatus-600ff545.js";import{b as ke}from"./toggle-f29ee038.js";import"./_plugin-vue_export-helper-c27b6911.js";const Se={class:"ltr:pr-1 rtl:pl-1 h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between"},Me={class:"flex items-center justify-around"},He={class:"text-lg font-bold"},Ne={class:"text-lg font-bold"},Ce={class:"text-lg font-bold"},De=s("hr",{class:"mt-5 mb-3 border border-gray-200"},null,-1),Te={class:"mb-3 text-center text-xl font-bold underline"},Ae={class:"w-full"},Pe={class:"ltr:rounded-tl rtl:rounded-tr bg-gray-600 p-2 font-semibold text-white"},Ye={class:"bg-gray-600 p-2 font-semibold text-white"},Ie={class:"bg-gray-600 p-2 font-semibold text-white"},Fe={class:"bg-gray-600 p-2 font-semibold text-white"},Ue={class:"bg-gray-600 p-2 font-semibold text-white"},Oe={class:"bg-gray-600 p-2 font-semibold text-white"},je={class:"rtl:rounded-tl ltr:rounded-tr bg-gray-600 p-2 font-semibold text-white"},Ve={class:"bg-gray-200"},$e={colspan:"100%",class:"border border-gray-200 px-2 py-1 text-center text-lg font-semibold"},Be={class:"w-24 border border-gray-300 px-2 py-1 text-center"},ze={class:"w-72 border border-gray-300 px-2 py-1 text-center"},Ee={key:0},Le={key:1,dir:"ltr"},We={key:0,class:"text-emerald-500"},Je={key:1,class:"mx-2 last-of-type:hidden"},Qe={key:2,class:"text-orange-500"},qe={key:3,class:"mx-2 last-of-type:hidden"},Ge={key:4,class:"text-red-500"},Ke={class:"absolute h-full ltr:right-[20px] rtl:left-[20px]"},Xe={class:"px-2"},Ze={key:1,colspan:"3",class:"border border-gray-300 px-2 py-1 text-center"},es={class:"border border-gray-300 px-2 py-1 text-center"},ss={class:"absolute h-full ltr:right-[20px] rtl:left-[20px]"},ts={class:"px-2"},as={class:"w-72 border border-gray-300 px-2 py-1 text-center"},os={key:0},ns={key:1,dir:"ltr"},rs={key:0,class:"text-emerald-500"},ls={key:1,class:"mx-2 last-of-type:hidden"},is={key:2,class:"text-orange-500"},ds={key:3,class:"mx-2 last-of-type:hidden"},cs={key:4,class:"text-red-500"},us={class:"w-24 border border-gray-300 px-2 py-1 text-center"},bs={key:3,colspan:"3",class:"border border-gray-300 px-2 py-1 text-center"},hs=s("hr",{class:"mt-5 mb-3 border border-gray-200"},null,-1),gs={class:"mb-3 text-center text-xl font-bold underline"},fs={class:"select-none overflow-hidden rounded border border-gray-300"},ys={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},_s={class:"text-lg font-bold"},ps={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},ms={class:"text-lg font-bold"},vs={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},xs={class:"text-lg font-bold"},ws={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},Rs={class:"text-lg font-bold"},ks={class:"flex items-center justify-between px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},Ss={class:"text-lg font-bold"},Ms=s("hr",{class:"mt-5 mb-3 border border-gray-200"},null,-1),Hs={class:"mb-3 flex flex-wrap items-start"},Ns={class:"mb-1 w-full font-semibold"},Cs=["readonly"],Ds={key:0,class:"w-full text-sm text-red-500"},Ts={class:"inline-flex items-center"},As={class:"rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1.5"},Ps={key:1,class:"ltr:rounded-r rtl:rounded-l border border-gray-300 px-4 py-1.5"},Ys={class:"mt-3 border-t-2 border-gray-200"},Is={class:"mt-3 flex items-center"},Fs=["disabled"],Us={class:"rtl:mr-auto ltr:ml-auto flex items-center gap-2"},Os=["disabled"],js=["disabled"],Gs=le({__name:"PremaritalScreeningResult",setup(Vs){const I=ie(),Q=de(),{hasPermissionTo:N}=_e(),{getEntry:C,getResultColor:q}=me(),{getReferenceRange:G,getFormattedRanges:K,getResultAsToNormalRange:F,getReferenceRangeUnit:X}=ve(),Z=ce(),U=xe(),x=f(!1),w=f(!1),R=f(!1),n=f({}),O=f([]),D=f({}),T=f({}),ee=f([]),_=f({});ue(()=>se());const se=async()=>{const{data:l}=await p.get(`/api/premarital-screening/${I.params.id}/result`);n.value=l.premaritalScreening,O.value=l.premaritalScreeningTests,D.value=l.husbandOrders,T.value=l.wifeOrders,te()},te=async()=>{const{data:l}=await p.get(`/api/suggestions/list?branchId=${n.value.branchId}&type=premaritalScreeningResultConclusion`);ee.value=l.data},y=(l,i)=>l==="husband"?D.value.find(t=>t.testId===i):T.value.find(t=>t.testId===i),j=(l,i,t)=>{const r=y(l,i);return q(F(r,t,C(r,t).value))},V=(l,i,t)=>{const r=y(l,i);return F(r,t,C(r,t).value)?.capitalize()},$=(l,i,t)=>{const r=y(l,i);return C(r,t).value},B=(l,i,t)=>{const r=y(l,i);return G(r,t)},z=(l,i,t)=>{const r=y(l,i);return X(r,t)},u=(l,i,t,r)=>{const re=y(l,i);return K(re,t,r)},k=l=>l?.selectedResult&&[J.Authorized,J.Released].includes(l.status),S=()=>{const l=D.value.find(t=>!k(t)),i=T.value.find(t=>!k(t));return!(l||i)},E=async(l=!1)=>{w.value=!0;const{data:i}=await p.post(`/api/premarital-screening/${n.value.id}/print`);U.isConnected&&!l?U.submit({type:we.Results,url:"result.pdf",file_content:i}):Re({printable:i,type:"pdf",base64:!0}),Y.fire(),w.value=!1},ae=async()=>{R.value=!0,await p.post(`/api/premarital-screening/${n.value.id}/upload`),Y.fire(),R.value=!1,await Q.back()},oe=be(()=>!Z.data.premaritalScreeningPortal?.find(i=>i.branchId===n.value.branchId)?.enabled||n.value.uploadStatus===v.Succeeded?!1:N("PremaritalScreeningResult.upload")),ne=async()=>{if(!(!S()||n.value.uploadStatus===v.Succeeded)){x.value=!0;try{await p.patch(`/api/premarital-screening/${I.params.id}/result`,n.value),Y.fire(),_.value={}}catch(l){_.value=l.response.data.errors??{}}x.value=!1}};return(l,i)=>(d(),L(pe,null,he({header:m(()=>[H(a(e(o)("Premarital Screening Result")),1)]),_:2},[n.value.husbandInformation?{name:"body",fn:m(()=>[s("section",Se,[s("main",null,[s("section",Me,[s("span",He,a(e(o)("Husband: :name (:age Years)",{name:n.value.husbandInformation.name,age:n.value.husbandInformation.age})),1),s("span",Ne,a(e(o)("Relation Degree: :relationDegree",{relationDegree:n.value.relationDegree})),1),s("span",Ce,a(e(o)("Wife: :name (:age Years)",{name:n.value.wifeInformation.name,age:n.value.wifeInformation.age})),1)]),De,s("section",null,[s("h1",Te,a(e(o)("Tests Results")),1),s("table",Ae,[s("thead",null,[s("tr",null,[s("th",Pe,a(e(o)("Unit")),1),s("th",Ye,a(e(o)("Reference Range")),1),s("th",Ie,a(e(o)("Result")),1),s("th",Fe,a(e(o)("Test Name")),1),s("th",Ue,a(e(o)("Result")),1),s("th",Oe,a(e(o)("Reference Range")),1),s("th",je,a(e(o)("Unit")),1)])]),(d(!0),c(M,null,W(O.value,t=>(d(),c("tbody",null,[s("tr",Ve,[s("td",$e,a(t.name),1)]),(d(!0),c(M,null,W(t.parameters,r=>(d(),c("tr",null,[k(y("husband",t.id))?(d(),c(M,{key:0},[s("td",Be,a(z("husband",t.id,r)),1),s("td",ze,[B("husband",t.id,r)?(d(),c("div",Le,[u("husband",t.id,r,e(b).Normal)?(d(),c("span",We,a(u("husband",t.id,r,e(b).Normal)),1)):h("",!0),u("husband",t.id,r,e(b).Normal)?(d(),c("span",Je,"||")):h("",!0),u("husband",t.id,r,e(b).Abnormal)?(d(),c("span",Qe,a(u("husband",t.id,r,e(b).Abnormal)),1)):h("",!0),u("husband",t.id,r,e(b).Abnormal)?(d(),c("span",qe,"||")):h("",!0),u("husband",t.id,r,e(b).Critical)?(d(),c("span",Ge,a(u("husband",t.id,r,e(b).Critical)),1)):h("",!0)])):(d(),c("span",Ee,a(e(o)("undefined")),1))]),s("td",{class:g(["relative w-60 border border-gray-300",j("husband",t.id,r)])},[s("span",Ke,a(e(o)(V("husband",t.id,r))),1),s("p",Xe,a($("husband",t.id,r)),1)],2)],64)):(d(),c("td",Ze,a(e(o)("Waiting for result...")),1)),s("td",es,a(r.name),1),k(y("wife",t.id))?(d(),c(M,{key:2},[s("td",{class:g(["relative w-60 border border-gray-300",j("wife",t.id,r)])},[s("span",ss,a(e(o)(V("wife",t.id,r))),1),s("p",ts,a($("wife",t.id,r)),1)],2),s("td",as,[B("wife",t.id,r)?(d(),c("div",ns,[u("wife",t.id,r,e(b).Normal)?(d(),c("span",rs,a(u("wife",t.id,r,e(b).Normal)),1)):h("",!0),u("wife",t.id,r,e(b).Normal)?(d(),c("span",ls,"||")):h("",!0),u("wife",t.id,r,e(b).Abnormal)?(d(),c("span",is,a(u("wife",t.id,r,e(b).Abnormal)),1)):h("",!0),u("wife",t.id,r,e(b).Abnormal)?(d(),c("span",ds,"||")):h("",!0),u("wife",t.id,r,e(b).Critical)?(d(),c("span",cs,a(u("wife",t.id,r,e(b).Critical)),1)):h("",!0)])):(d(),c("span",os,a(e(o)("undefined")),1))]),s("td",us,a(z("wife",t.id,r)),1)],64)):(d(),c("td",bs,a(e(o)("Waiting for result...")),1))]))),256))]))),256))])]),hs,s("section",null,[s("h1",gs,a(e(o)("Medical History and Blood Diseases")),1),s("div",fs,[s("div",ys,[s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.husbandMedicalHistory.hasThalassemia}])},a(n.value.husbandMedicalHistory.hasThalassemia?e(o)("Yes"):e(o)("No")),3),s("span",_s,a(e(o)("Has Thalassemia")),1),s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.wifeMedicalHistory.hasThalassemia}])},a(n.value.wifeMedicalHistory.hasThalassemia?e(o)("Yes"):e(o)("No")),3)]),s("div",ps,[s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.husbandMedicalHistory.hasSickleCellAnemia}])},a(n.value.husbandMedicalHistory.hasSickleCellAnemia?e(o)("Yes"):e(o)("No")),3),s("span",ms,a(e(o)("Has Sickle Cell Anemia")),1),s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.wifeMedicalHistory.hasSickleCellAnemia}])},a(n.value.wifeMedicalHistory.hasSickleCellAnemia?e(o)("Yes"):e(o)("No")),3)]),s("div",vs,[s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.husbandMedicalHistory.hasHaemophilia}])},a(n.value.husbandMedicalHistory.hasHaemophilia?e(o)("Yes"):e(o)("No")),3),s("span",xs,a(e(o)("Has Haemophilia")),1),s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.wifeMedicalHistory.hasHaemophilia}])},a(n.value.wifeMedicalHistory.hasHaemophilia?e(o)("Yes"):e(o)("No")),3)]),s("div",ws,[s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.husbandMedicalHistory.hasMentalDisability}])},a(n.value.husbandMedicalHistory.hasMentalDisability?e(o)("Yes"):e(o)("No")),3),s("span",Rs,a(e(o)("Has Mental Disability")),1),s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.wifeMedicalHistory.hasMentalDisability}])},a(n.value.wifeMedicalHistory.hasMentalDisability?e(o)("Yes"):e(o)("No")),3)]),s("div",ks,[s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.husbandMedicalHistory.hasDiabetes}])},a(n.value.husbandMedicalHistory.hasDiabetes?e(o)("Yes"):e(o)("No")),3),s("span",Ss,a(e(o)("Has Diabetes")),1),s("span",{class:g(["font-bold text-green-600",{"!text-red-600":n.value.wifeMedicalHistory.hasDiabetes}])},a(n.value.wifeMedicalHistory.hasDiabetes?e(o)("Yes"):e(o)("No")),3)])])]),Ms,s("section",null,[s("div",Hs,[s("span",Ns,a(e(o)("Conclusion")),1),ge(s("textarea",{"onUpdate:modelValue":i[0]||(i[0]=t=>n.value.conclusion=t),readonly:n.value.uploadStatus===e(v).Succeeded,rows:"4",class:g(["flex-1 rounded border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":_.value.hasOwnProperty("conclusion")}])},null,10,Cs),[[fe,n.value.conclusion]]),_.value.hasOwnProperty("conclusion")?(d(),c("p",Ds,a(_.value.conclusion[0]),1)):h("",!0)]),s("div",Ts,[s("span",As,a(e(o)("Risky Marriage")),1),n.value.uploadStatus!==e(v).Succeeded?(d(),L(e(ke),{key:0,modelValue:n.value.isRiskyMarriage,"onUpdate:modelValue":i[1]||(i[1]=t=>n.value.isRiskyMarriage=t),class:"toggle:on:red ltr:rounded-r rtl:rounded-l border border-gray-300 p-1.5 focus:border-blue-500"},null,8,["modelValue"])):(d(),c("span",Ps,a(n.value.isRiskyMarriage?e(o)("Yes"):e(o)("No")),1))])])]),s("footer",Ys,[s("div",Is,[e(N)("PremaritalScreeningResult.update")?(d(),c("button",{key:0,onClick:ne,class:"ltr:mr-5 rtl:ml-5 btn-blue",disabled:!S()||x.value||n.value.uploadStatus===e(v).Succeeded},[A(P,{"is-loading":x.value},{default:m(()=>[H(a(e(o)("Save")),1)]),_:1},8,["is-loading"])],8,Fs)):h("",!0),s("div",Us,[e(N)("PremaritalScreeningResult.print")?(d(),c("button",{key:0,disabled:!S()||w.value,class:"btn-blue",onClick:i[2]||(i[2]=t=>E(!1)),onContextmenu:i[3]||(i[3]=ye(t=>E(!1),["prevent"]))},[A(P,{"is-loading":w.value},{default:m(()=>[H(a(e(o)("Print")),1)]),_:1},8,["is-loading"])],40,Os)):h("",!0),oe.value?(d(),c("button",{key:1,disabled:!S()||R.value,onClick:ae,class:"btn-teal"},[A(P,{"is-loading":R.value},{default:m(()=>[H(a(e(o)("Upload")),1)]),_:1},8,["is-loading"])],8,js)):h("",!0)])])])])]),key:"0"}:void 0]),1024))}});export{Gs as default};
