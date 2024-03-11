import{d as z,e as d,x as E,Q as g,o as i,c,a as m,w as _,F as b,k,t as n,g as r,b as o,n as S,i as w,a1 as M,f as V,_ as j,a4 as Q,m as q,l as G,p as u,h as H,ai as J,T as K,$ as X}from"./main-DmoZ1fz4.js";import{s as Y}from"./multiselect-DAhRltj6.js";import{_ as Z}from"./WebcamModal.vue_vue_type_script_setup_true_lang-ClrA9-pq.js";import{A as x}from"./attachmentType-BPw9qDR8.js";import{b as T}from"./toggle-DyRQkDOQ.js";const ee={class:"relative"},te={key:0,class:"text-sm text-red-500"},ae={class:"relative"},se={class:"label"},re={class:"flex select-none justify-around"},oe={class:"text-center"},ne=["onClick","onContextmenu"],le=["src","alt"],ie={key:0},ce={class:"text-center text-sm text-red-500"},ue=["disabled"],_e=z({__name:"PremaritalReferralForm",emits:["close"],setup(de,{emit:$}){const N=$,y=d(null),C=d(null),A=q(),I=G(),a=d({attachments:[]}),h=d([]),{hasPermissionTo:U}=K(),v=d(!1),l=d({});E(()=>{F(A.params.id)});const F=async t=>{const{data:e}=await g.get(`/api/premarital/referrals/${t}`);a.value=e.data,W()},W=async()=>{const{data:t}=await g.get(`/api/suggestions/list?branchId=${a.value.branchId}&type=referralProcedure`);h.value=t.data},D=async({content:t})=>{const{data:e}=await g.post("/api/suggestions",{branchId:a.value.branchId,type:"referralProcedure",content:t});return h.value.push(e.data),e.data},f=t=>a.value.attachments.find(e=>e.type===t),R=(t,e)=>{f(t)?f(t).path=e:a.value.attachments.push({type:t,path:e})},O=t=>{C.value=t,y.value.open()},B=t=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.onchange=()=>{const s=e.files[0],p=new FileReader;p.readAsDataURL(s),p.onload=()=>R(t,p.result),e.remove()},e.click()},L=async()=>{v.value=!0;try{await g.patch(`/api/premarital/referrals/${a.value.id}`,a.value),l.value={},X.fire(),P()}catch(t){l.value=t.response.data.errors??{}}v.value=!1},P=()=>{N("close"),I.back()};return(t,e)=>(i(),c(b,null,[m(Q,null,{header:_(()=>[a.value.personalInformation?(i(),c(b,{key:0},[k(n(r(u)("Test Referral (:testName) For (:patientName)",{testName:a.value.order.test.name,patientName:a.value.personalInformation.name})),1)],64)):(i(),c(b,{key:1},[k(n(r(u)("Referral")),1)],64))]),body:_(()=>[o("form",{id:"form",onSubmit:V(L,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[o("div",ee,[m(r(Y),{modelValue:a.value.procedures,"onUpdate:modelValue":e[0]||(e[0]=s=>a.value.procedures=s),mode:"tags",options:h.value,"value-prop":"content","track-by":"content",label:"content",searchable:!0,"create-option":r(U)("Suggestion.create"),"on-create":D,class:S(["px-0 input peer",{"border-red-500":l.value.hasOwnProperty("procedures")}])},null,8,["modelValue","options","create-option","class"]),o("label",{class:S(["label",{"text-red-500":l.value.hasOwnProperty("procedures")}])},n(r(u)("Procedures")),3),l.value.hasOwnProperty("procedures")?(i(),c("p",te,n(l.value.procedures[0]),1)):w("",!0)]),o("div",ae,[m(r(T),{modelValue:a.value.signedWrittenUndertaking,"onUpdate:modelValue":e[1]||(e[1]=s=>a.value.signedWrittenUndertaking=s),class:"input peer pt-2.5"},null,8,["modelValue"]),o("label",se,n(r(u)("Signed a written undertaking")),1)]),o("div",re,[(i(!0),c(b,null,M([r(x).ReferralResult,r(x).WrittenUndertaking],s=>H((i(),c("div",oe,[o("span",{class:"mb-1 inline-block cursor-pointer rounded border border-transparent px-1 font-semibold transition hover:border-blue-500 hover:text-blue-500",onClick:p=>O(s),onContextmenu:V(p=>B(s),["prevent"])},n(r(u)(s.startCase())),41,ne),f(s)?(i(),c("img",{key:0,src:f(s).path,alt:s,class:"w-56 rounded-lg shadow-md"},null,8,le)):w("",!0)],512)),[[J,a.value.signedWrittenUndertaking||s===r(x).ReferralResult]])),256))]),l.value.hasOwnProperty("attachments")?(i(),c("div",ie,[o("p",ce,n(l.value.attachments[0]),1)])):w("",!0)],32)]),footer:_(()=>[o("button",{class:"me-2 btn-blue",disabled:v.value,form:"form"},[m(j,{"is-loading":v.value},{default:_(()=>[k(n(r(u)("Save")),1)]),_:1},8,["is-loading"])],8,ue),o("button",{onClick:P,class:"btn-gray"},n(r(u)("Cancel")),1)]),_:1}),m(Z,{ref_key:"webcam",ref:y,onCapture:e[2]||(e[2]=s=>R(C.value,s))},null,512)],64))}});export{_e as default};