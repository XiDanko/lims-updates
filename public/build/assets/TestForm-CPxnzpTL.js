import{d as X,e as b,u as Y,ak as Z,x as ee,Q as p,U as ae,o as i,R as q,w,k as B,t as m,g as r,b as t,c as v,a as u,i as c,n as o,h,v as f,V as te,f as se,_ as le,a4 as ne,m as oe,l as re,$ as ue}from"./main-BgbWFIXK.js";import{b as y}from"./toggle-CP_W0i88.js";import{s as g}from"./multiselect-DeMhawmc.js";import{F as I}from"./formMode-Bz--3d4P.js";import{_ as de}from"./CurrencyInput.vue_vue_type_script_setup_true_lang-CacBtO8k.js";import{_ as ie}from"./BranchSelect.vue_vue_type_script_setup_true_lang-ChkyAztq.js";const pe={key:0,class:"relative col-span-2"},ce={class:"relative"},me={key:0,class:"text-sm text-red-500"},ve={class:"relative"},be={key:0,class:"text-sm text-red-500"},he={class:"relative"},ye={key:0,class:"text-sm text-red-500"},fe={class:"relative"},_e={key:0,class:"text-sm text-red-500"},Ie={class:"relative"},Ve={key:0,class:"text-sm text-red-500"},xe={class:"relative"},we={key:0,class:"text-sm text-red-500"},ge={class:"relative"},Pe={key:0,class:"text-sm text-red-500"},Ce={class:"relative"},Se={key:0,class:"text-sm text-red-500"},ke={class:"relative"},Oe={class:"flex"},Te=t("label",{class:"label"},"Turnaround Time",-1),Ue=t("option",{value:null},"Select",-1),Ne=t("option",{value:"minutes"},"Minutes",-1),Fe=t("option",{value:"hours"},"Hours",-1),$e=t("option",{value:"days"},"Days",-1),qe=[Ue,Ne,Fe,$e],Be={class:"relative"},Me=t("label",{class:"label"},"Cost",-1),De={class:"col-span-2 flex items-center justify-evenly gap-2"},je={class:"relative flex-1"},Ae=t("label",{class:"label"},"Fasting Affected",-1),Ee={class:"relative flex-1"},Re=t("label",{class:"label"},"Menses Affected",-1),ze={class:"relative flex-1"},He=t("label",{class:"label"},"Bypass",-1),Le={class:"relative flex-1"},Qe=t("label",{class:"label"},"Single Test",-1),We={class:"relative flex-1"},Ge=t("label",{class:"label"},"Printable",-1),Je={class:"relative flex-1"},Ke=t("label",{class:"label"},"Print Separately",-1),Xe={class:"relative col-span-2"},Ye=t("label",{class:"label"},"Notes",-1),Ze=["disabled"],ra=X({__name:"TestForm",emits:["close"],setup(ea,{emit:M}){const D=M,O=oe(),j=re(),e=b({isPrintable:!0}),P=b([]),C=Y().user.branches,T=b([]),S=b([]),U=b([]),V=b(I.Create),x=b(!1),l=b({}),d=Z({value:null,unit:null});ee(()=>{C.length===1&&(e.value.branchId=C[0].id,k()),O.path.endsWith("/edit")&&(V.value=I.Edit,Q(O.params.id))});const A=async()=>{const{data:n}=await p.get(`/api/suggestions/list?branchId=${e.value.branchId}&type=sampleContent`);S.value=n.data},E=async({content:n})=>{const{data:a}=await p.post("/api/suggestions",{branchId:e.value.branchId,type:"sampleContent",content:n});return S.value.push(a.data),a.data},N=async n=>{const{data:a}=await p.get(`/api/machines/list?departmentId=${n}`);U.value=a.data},R=async()=>{const{data:n}=await p.get(`/api/departments/list?branchId=${e.value.branchId}`);T.value=n.data},z=async()=>{const{data:n}=await p.get(`/api/sample-types/list?branchId=${e.value.branchId}`);P.value=n.data},H=async({name:n})=>{const{data:a}=await p.post("/api/sample-types",{branchId:e.value.branchId,name:n});return P.value.push(a.data),a.data},k=()=>{R(),z(),A()},L=()=>{e.value.departmentId=null,e.value.machineId=null,e.value.sampleContent=null,e.value.sampleTypeId=null,e.value.sequenceNumber=null},F=async()=>{const{data:n}=await p.post("/api/tests/generate-sequence",{branchId:e.value.branchId,departmentId:e.value.departmentId});e.value.sequenceNumber=n},Q=async n=>{const{data:a}=await p.get(`/api/tests/${n}`);if(e.value=a.data,k(),N(a.data.departmentId),e.value.turnaroundTime){const _=e.value.turnaroundTime.split(" ");d.value=_[0],d.unit=_[1]}},W=async()=>{x.value=!0,d.unit&&d.value&&(e.value.turnaroundTime=d.value+" "+d.unit);try{V.value===I.Create?await G():await J(),l.value={},ue.fire()}catch(n){l.value=n.response.data.errors??{}}x.value=!1},G=async()=>{await p.post("/api/tests",e.value),K(),await F()},J=async()=>{await p.patch(`/api/tests/${e.value.id}`,e.value),$()},K=()=>{e.value={branchId:e.value.branchId,departmentId:e.value.departmentId,machineId:e.value.machineId,isPrintable:!0},d.unit=null,d.value=null,l.value=[]},$=()=>{D("close"),j.back()};return(n,a)=>{const _=ae("maska");return i(),q(ne,{"modal-class":"!w-[60rem]"},{header:w(()=>[B(m(V.value===r(I).Create?"Create New Test":"Edit Test"),1)]),body:w(()=>[t("form",{id:"form",onSubmit:se(W,["prevent","stop"]),class:"grid grid-cols-2 gap-4"},[r(C).length>1?(i(),v("div",pe,[u(ie,{modelValue:e.value.branchId,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.branchId=s),error:l.value.branchId,onSelect:k,onChange:L},null,8,["modelValue","error"])])):c("",!0),t("div",ce,[u(r(g),{modelValue:e.value.departmentId,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.departmentId=s),options:T.value,onSelect:a[2]||(a[2]=s=>{F(),N(s)}),onChange:a[3]||(a[3]=s=>e.value.machineId=null),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("departmentId")}])},null,8,["modelValue","options","class"]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("departmentId")}])},"Department",2),l.value.hasOwnProperty("departmentId")?(i(),v("p",me,m(l.value.departmentId[0]),1)):c("",!0)]),t("div",ve,[u(r(g),{modelValue:e.value.machineId,"onUpdate:modelValue":a[4]||(a[4]=s=>e.value.machineId=s),options:U.value,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("machineId")}])},null,8,["modelValue","options","class"]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("machineId")}])},"Machine",2),l.value.hasOwnProperty("machineId")?(i(),v("p",be,m(l.value.machineId[0]),1)):c("",!0)]),t("div",he,[h(t("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>e.value.sequenceNumber=s),"data-maska":"###",class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("sequenceNumber")}])},null,2),[[f,e.value.sequenceNumber],[_]]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("sequenceNumber")}])},"Sequence Number",2),l.value.hasOwnProperty("sequenceNumber")?(i(),v("p",ye,m(l.value.sequenceNumber[0]),1)):c("",!0)]),t("div",fe,[h(t("input",{"onUpdate:modelValue":a[6]||(a[6]=s=>e.value.name=s),class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("name")}])},null,2),[[f,e.value.name]]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("name")}])},"Name",2),l.value.hasOwnProperty("name")?(i(),v("p",_e,m(l.value.name[0]),1)):c("",!0)]),t("div",Ie,[h(t("input",{"onUpdate:modelValue":a[7]||(a[7]=s=>e.value.code=s),class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("code")}])},null,2),[[f,e.value.code]]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("code")}])},"Code",2),l.value.hasOwnProperty("code")?(i(),v("p",Ve,m(l.value.code[0]),1)):c("",!0)]),t("div",xe,[h(t("input",{"onUpdate:modelValue":a[8]||(a[8]=s=>e.value.shortForm=s),class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("shortForm")}])},null,2),[[f,e.value.shortForm]]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("shortForm")}])},"Short Form",2),l.value.hasOwnProperty("shortForm")?(i(),v("p",we,m(l.value.shortForm[0]),1)):c("",!0)]),t("div",ge,[u(r(g),{modelValue:e.value.sampleContent,"onUpdate:modelValue":a[9]||(a[9]=s=>e.value.sampleContent=s),options:S.value,"value-prop":"content","track-by":"content",label:"content",searchable:!0,"create-option":!0,"on-create":E,class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("sampleContentId")}])},null,8,["modelValue","options","class"]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("sampleContentId")}])},"Sample Content",2),l.value.hasOwnProperty("sampleContentId")?(i(),v("p",Pe,m(l.value.sampleContentId[0]),1)):c("",!0)]),t("div",Ce,[u(r(g),{modelValue:e.value.sampleTypeId,"onUpdate:modelValue":a[10]||(a[10]=s=>e.value.sampleTypeId=s),options:P.value,"value-prop":"id","track-by":"name",label:"name",searchable:!0,"create-option":!0,"on-create":H,class:o(["input peer",{"border-red-500":l.value.hasOwnProperty("sampleTypeId")}])},null,8,["modelValue","options","class"]),t("label",{class:o(["label",{"text-red-500":l.value.hasOwnProperty("sampleTypeId")}])},"Sample Type",2),l.value.hasOwnProperty("sampleTypeId")?(i(),v("p",Se,m(l.value.sampleTypeId[0]),1)):c("",!0)]),t("div",ke,[t("div",Oe,[h(t("input",{"onUpdate:modelValue":a[11]||(a[11]=s=>d.value=s),"data-maska":"##",class:"input peer !rounded-e-none"},null,512),[[f,d.value],[_]]),Te,h(t("select",{"onUpdate:modelValue":a[12]||(a[12]=s=>d.unit=s),class:"input w-auto border-s-0 !rounded-s-none focus:!border-s-2"},qe,512),[[te,d.unit]])])]),t("div",Be,[u(de,{modelValue:e.value.cost,"onUpdate:modelValue":a[13]||(a[13]=s=>e.value.cost=s),class:"input peer"},null,8,["modelValue"]),Me]),t("div",De,[t("div",je,[u(r(y),{modelValue:e.value.affectedByFasting,"onUpdate:modelValue":a[14]||(a[14]=s=>e.value.affectedByFasting=s),class:"flex items-center justify-center input peer pt-1.5"},null,8,["modelValue"]),Ae]),t("div",Ee,[u(r(y),{modelValue:e.value.affectedByMenses,"onUpdate:modelValue":a[15]||(a[15]=s=>e.value.affectedByMenses=s),class:"flex items-center justify-center input peer pt-1.5"},null,8,["modelValue"]),Re]),t("div",ze,[u(r(y),{modelValue:e.value.bypass,"onUpdate:modelValue":a[16]||(a[16]=s=>e.value.bypass=s),class:"flex items-center justify-center input peer pt-1.5"},null,8,["modelValue"]),He]),t("div",Le,[u(r(y),{modelValue:e.value.isSingle,"onUpdate:modelValue":a[17]||(a[17]=s=>e.value.isSingle=s),class:"flex items-center justify-center input peer pt-1.5"},null,8,["modelValue"]),Qe]),t("div",We,[u(r(y),{modelValue:e.value.isPrintable,"onUpdate:modelValue":a[18]||(a[18]=s=>e.value.isPrintable=s),class:"flex items-center justify-center input peer pt-1.5"},null,8,["modelValue"]),Ge]),t("div",Je,[u(r(y),{modelValue:e.value.printSeparately,"onUpdate:modelValue":a[19]||(a[19]=s=>e.value.printSeparately=s),class:"flex items-center justify-center input peer pt-1.5"},null,8,["modelValue"]),Ke])]),t("div",Xe,[h(t("textarea",{"onUpdate:modelValue":a[20]||(a[20]=s=>e.value.notes=s),rows:"4",class:"py-2 input peer"},null,512),[[f,e.value.notes]]),Ye])],32)]),footer:w(()=>[t("button",{class:"me-2 btn-blue",disabled:x.value,form:"form"},[u(le,{"is-loading":x.value},{default:w(()=>[B("Save")]),_:1},8,["is-loading"])],8,Ze),t("button",{onClick:$,class:"btn-gray"},"Cancel"),V.value===r(I).Edit?(i(),q(r(y),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":a[21]||(a[21]=s=>e.value.isActive=s),class:"toggle:off:red ms-auto"},null,8,["modelValue"])):c("",!0)]),_:1})}}});export{ra as default};
