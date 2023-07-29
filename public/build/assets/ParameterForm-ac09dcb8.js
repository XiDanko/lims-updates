import{d as M,g as y,x as q,Q as h,A as Y,o as d,c as u,b as t,a as w,i as a,f as J,e as K,u as X,Y as Z,V as ee,R as L,w as T,m as E,t as c,n as m,k as i,j as g,v as x,W as F,F as te,a2 as re,h as oe,_ as le,a5 as se,a0 as ae}from"./main-cee2eb24.js";import{b as ne}from"./toggle-afba85dd.js";import{s as P}from"./multiselect-97a39018.js";import{_ as de}from"./Tinymce.vue_vue_type_script_setup_true_lang-9b681c5c.js";import{F as $}from"./formMode-f60a729f.js";import{R as p}from"./resultType-be0237ab.js";const ue={class:"flex"},ie={class:"mx-auto mt-3 grid w-52 select-none grid-cols-4 gap-1"},pe=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"mx-auto h-6 w-6 mt-0.5"},[t("path",{d:"M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"})],-1),ve=[pe],be=M({__name:"FormulaGenerator",props:{modelValue:{},branchId:{}},emits:["update:modelValue"],setup(N,{emit:C}){const k=N,R=y([]),e=y([]),b=y("");q(()=>{k.modelValue&&(b.value=k.modelValue),_()});const _=async()=>{const{data:f}=await h.get(`/api/parameters/list?branchId=${k.branchId}`);R.value=f.data},r=f=>{b.value+=f,C("update:modelValue",b.value)},I=()=>{b.value="",e.value=[],C("update:modelValue",b.value)},V=()=>{b.value=b.value.slice(0,-1),C("update:modelValue",b.value)};return Y(()=>k.branchId,()=>{I(),_()}),(f,o)=>(d(),u("div",null,[t("div",ue,[w(a(P),{options:R.value,modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),mode:"multiple",onSelect:o[1]||(o[1]=n=>r(`{${n}}`)),searchable:!0,"value-prop":"shortForm","track-by":"searchableForm",label:"shortForm",class:"w-52 m-0 border border-gray-300 !rounded"},null,8,["options","modelValue"])]),t("div",ie,[t("div",{class:"cursor-pointer rounded bg-gray-600 py-1 text-center text-lg font-bold text-white transition hover:bg-gray-700",onClick:o[2]||(o[2]=n=>r("("))},"("),t("div",{class:"cursor-pointer rounded bg-gray-600 py-1 text-center text-lg font-bold text-white transition hover:bg-gray-700",onClick:o[3]||(o[3]=n=>r(")"))},")"),t("div",{class:"cursor-pointer rounded bg-gray-600 py-1 text-center text-lg font-bold text-white transition hover:bg-gray-700",onClick:o[4]||(o[4]=n=>r("%"))},"%"),t("div",{class:"cursor-pointer rounded bg-red-500 py-1 text-center text-lg font-bold text-white transition hover:bg-red-600",onClick:V},ve),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[5]||(o[5]=n=>r("7"))},"7"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[6]||(o[6]=n=>r("8"))},"8"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[7]||(o[7]=n=>r("9"))},"9"),t("div",{class:"cursor-pointer rounded bg-gray-600 py-1 text-center text-lg font-bold text-white transition hover:bg-gray-700",onClick:o[8]||(o[8]=n=>r("+"))},"+"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[9]||(o[9]=n=>r("4"))},"4"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[10]||(o[10]=n=>r("5"))},"5"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[11]||(o[11]=n=>r("6"))},"6"),t("div",{class:"cursor-pointer rounded bg-gray-600 py-1 text-center text-lg font-bold text-white transition hover:bg-gray-700",onClick:o[12]||(o[12]=n=>r("-"))},"-"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[13]||(o[13]=n=>r("1"))},"1"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[14]||(o[14]=n=>r("2"))},"2"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[15]||(o[15]=n=>r("3"))},"3"),t("div",{class:"cursor-pointer rounded bg-gray-600 py-1 text-center text-lg font-bold text-white transition hover:bg-gray-700",onClick:o[16]||(o[16]=n=>r("*"))},"*"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[17]||(o[17]=n=>r("0"))},"0"),t("div",{class:"cursor-pointer rounded bg-blue-500 py-1 text-center text-lg font-bold text-white transition hover:bg-blue-600",onClick:o[18]||(o[18]=n=>r("."))},"."),t("div",{class:"cursor-pointer rounded bg-red-500 py-1 text-center text-lg font-bold text-white transition hover:bg-red-600",onClick:I},"AC"),t("div",{class:"cursor-pointer rounded bg-gray-600 py-1 text-center text-lg font-bold text-white transition hover:bg-gray-700",onClick:o[19]||(o[19]=n=>r("/"))},"/")])]))}}),ce=["onSubmit"],me={class:"grid grid-cols-2 gap-3"},ge={key:0,class:"flex flex-wrap items-start"},ye=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),fe={key:0,class:"ml-40 w-full text-sm text-red-500"},xe={class:"flex flex-wrap items-start"},he=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Test",-1),we={key:0,class:"ml-40 w-full text-sm text-red-500"},ke={class:"flex flex-wrap items-start"},_e=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Seq. No.",-1),Ve={key:0,class:"ml-40 w-full text-sm text-red-500"},Ce={class:"flex flex-wrap items-start"},Ie=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Code",-1),$e={key:0,class:"ml-40 w-full text-sm text-red-500"},Pe={class:"flex flex-wrap items-start"},Re=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),Te={key:0,class:"ml-40 w-full text-sm text-red-500"},Fe={class:"flex flex-wrap items-start"},Ne=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Short Form",-1),Oe={key:0,class:"ml-40 w-full text-sm text-red-500"},Se={class:"flex flex-wrap items-start"},Ue=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Heading",-1),Le=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Result Type",-1),Ee=["value"],Me=["value"],qe=["value"],ze=["value"],Be=["value"],He=["value"],Ae=["value"],De={key:0,class:"ml-40 w-full text-sm text-red-500"},We={key:1,class:"col-span-2 flex flex-wrap items-start"},je=t("span",{class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Results List",-1),Ge={key:0,class:"ml-40 w-full text-sm text-red-500"},Qe={class:"col-span-2 flex flex-wrap items-start"},Ye={key:0,class:"w-40 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},Je=t("option",{value:""},null,-1),Ke=t("option",{value:"negative"},"Negative",-1),Xe=t("option",{value:"positive"},"Positive",-1),Ze=[Je,Ke,Xe],et=t("option",{value:""},null,-1),tt=["value"],rt=["readonly"],ot={key:6},lt={key:8,class:"ml-40 w-full text-sm text-red-500"},st={key:2,class:"col-span-2"},at={class:"flex flex-wrap items-start justify-center"},nt=["disabled"],ct=M({__name:"ParameterForm",emits:["close"],setup(N,{emit:C}){const k=J(),R=K(),e=y({}),b=y($.Create),_=y(!1),r=y({}),I=y([]),V=X().user.branches,f=y([]),o=y({});q(()=>{V.length===1&&(e.value.branchId=V[0].id,n()),k.path.endsWith("/edit")&&(b.value=$.Edit,D(k.params.id))});const n=()=>{A(),B(),o.value=Z().data.general?.find(v=>v.branchId===e.value.branchId)},z=()=>{e.value.testId=null,e.value.heading=null,e.value.sequenceNumber=null},B=async()=>{const{data:v}=await h.get(`/api/suggestions/list?branchId=${e.value.branchId}&type=parameterHeading`);f.value=v.data},H=async({content:v})=>{const{data:l}=await h.post("/api/suggestions",{branchId:e.value.branchId,type:"parameterHeading",content:v});return f.value.push(l.data),l.data},A=async()=>{const{data:v}=await h.get(`/api/tests/list?branchId=${e.value.branchId}`);I.value=v.data},O=async()=>{const{data:v}=await h.post("/api/parameters/generate-sequence",{testId:e.value.testId});e.value.sequenceNumber=v},D=async v=>{const{data:l}=await h.get(`/api/parameters/${v}`);e.value=l.data,n()},W=async()=>{_.value=!0;try{b.value===$.Create?await j():await G(),ae.fire()}catch(v){r.value=v.response.data.errors??{}}_.value=!1},j=async()=>{await h.post("/api/parameters",e.value),Q(),await O()},G=async()=>{await h.patch(`/api/parameters/${e.value.id}`,e.value),S()},Q=()=>{e.value={branchId:e.value.branchId,testId:e.value.testId,heading:e.value.heading},r.value=[]},S=()=>{C("close"),R.back()};return(v,l)=>{const U=ee("maska");return d(),L(se,{"modal-class":"!w-[56rem]"},{header:T(()=>[E(c(b.value===a($).Create?"Create New Parameter":"Edit Parameter"),1)]),body:T(()=>[t("form",{id:"form",onSubmit:oe(W,["prevent","stop"])},[t("div",me,[a(V).length>1?(d(),u("div",ge,[ye,w(a(P),{modelValue:e.value.branchId,"onUpdate:modelValue":l[0]||(l[0]=s=>e.value.branchId=s),options:a(V),onSelect:n,onChange:z,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:m(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":r.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),r.value.hasOwnProperty("branchId")?(d(),u("p",fe,c(r.value.branchId[0]),1)):i("",!0)])):i("",!0),t("div",xe,[he,w(a(P),{modelValue:e.value.testId,"onUpdate:modelValue":l[1]||(l[1]=s=>e.value.testId=s),options:I.value,onSelect:O,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"shortForm",class:m(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":r.value.hasOwnProperty("testId")}])},null,8,["modelValue","options","class"]),r.value.hasOwnProperty("testId")?(d(),u("p",we,c(r.value.testId[0]),1)):i("",!0)]),t("div",ke,[_e,g(t("input",{"onUpdate:modelValue":l[2]||(l[2]=s=>e.value.sequenceNumber=s),"data-maska":"###",size:"1",class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("sequenceNumber")}])},null,2),[[x,e.value.sequenceNumber],[U]]),r.value.hasOwnProperty("sequenceNumber")?(d(),u("p",Ve,c(r.value.sequenceNumber[0]),1)):i("",!0)]),t("div",Ce,[Ie,g(t("input",{"onUpdate:modelValue":l[3]||(l[3]=s=>e.value.code=s),size:"1",class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("code")}])},null,2),[[x,e.value.code]]),r.value.hasOwnProperty("code")?(d(),u("p",$e,c(r.value.code[0]),1)):i("",!0)]),t("div",Pe,[Re,g(t("input",{"onUpdate:modelValue":l[4]||(l[4]=s=>e.value.name=s),size:"1",class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("name")}])},null,2),[[x,e.value.name]]),r.value.hasOwnProperty("name")?(d(),u("p",Te,c(r.value.name[0]),1)):i("",!0)]),t("div",Fe,[Ne,g(t("input",{"onUpdate:modelValue":l[5]||(l[5]=s=>e.value.shortForm=s),size:"1",class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("shortForm")}])},null,2),[[x,e.value.shortForm]]),r.value.hasOwnProperty("shortForm")?(d(),u("p",Oe,c(r.value.shortForm[0]),1)):i("",!0)]),t("div",Se,[Ue,w(a(P),{modelValue:e.value.heading,"onUpdate:modelValue":l[6]||(l[6]=s=>e.value.heading=s),options:f.value,"value-prop":"content","track-by":"content",label:"content",searchable:!0,"create-option":!0,"on-create":H,class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),t("div",{class:m(["flex flex-wrap items-start",{"col-span-2 ":a(V).length===1}])},[Le,g(t("select",{"onUpdate:modelValue":l[7]||(l[7]=s=>e.value.resultType=s),onChange:l[8]||(l[8]=s=>e.value.defaultResult=null),class:m(["flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("resultType")}])},[t("option",{value:a(p).NegativePositive},"N/P",8,Ee),t("option",{value:a(p).Numeric},"Numeric",8,Me),t("option",{value:a(p).Text},"Text",8,qe),t("option",{value:a(p).Multiline},"Multiline",8,ze),t("option",{value:a(p).List},"List",8,Be),t("option",{value:a(p).Formula},"Formula",8,He),t("option",{value:a(p).Editor},"Editor",8,Ae)],34),[[F,e.value.resultType]]),r.value.hasOwnProperty("resultType")?(d(),u("p",De,c(r.value.resultType[0]),1)):i("",!0)],2),e.value.resultType===a(p).List?(d(),u("div",We,[je,w(a(P),{class:m(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":r.value.hasOwnProperty("resultsList")}]),placeholder:"Type then press enter to create",modelValue:e.value.resultsList,"onUpdate:modelValue":l[9]||(l[9]=s=>e.value.resultsList=s),options:e.value.resultsList,mode:"tags","create-option":!0,searchable:!0,"close-on-select":!1},null,8,["class","modelValue","options"]),r.value.hasOwnProperty("resultsList")?(d(),u("p",Ge,c(r.value.resultsList[0]),1)):i("",!0)])):i("",!0),t("div",Qe,[e.value.resultType!==a(p).Editor?(d(),u("span",Ye,"Default Result")):i("",!0),e.value.resultType===a(p).NegativePositive?g((d(),u("select",{key:1,"onUpdate:modelValue":l[10]||(l[10]=s=>e.value.defaultResult=s),class:"flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500"},Ze,512)),[[F,e.value.defaultResult]]):i("",!0),e.value.resultType===a(p).List?g((d(),u("select",{key:2,"onUpdate:modelValue":l[11]||(l[11]=s=>e.value.defaultResult=s),class:"flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500"},[et,(d(!0),u(te,null,re(e.value.resultsList,s=>(d(),u("option",{value:s},c(s),9,tt))),256))],512)),[[F,e.value.defaultResult]]):i("",!0),[a(p).Text,a(p).Formula].includes(e.value.resultType)?g((d(),u("input",{key:3,"onUpdate:modelValue":l[12]||(l[12]=s=>e.value.defaultResult=s),readonly:e.value.resultType===a(p).Formula,size:"1",class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("defaultResult")}])},null,10,rt)),[[x,e.value.defaultResult]]):i("",!0),e.value.resultType===a(p).Multiline?g((d(),u("textarea",{key:4,"onUpdate:modelValue":l[13]||(l[13]=s=>e.value.defaultResult=s),rows:"3",class:m(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":r.value.hasOwnProperty("defaultResult")}])},null,2)),[[x,e.value.defaultResult]]):i("",!0),e.value.resultType===a(p).Numeric?g((d(),u("input",{key:5,"onUpdate:modelValue":l[14]||(l[14]=s=>e.value.defaultResult=s),"data-maska":"0.0","data-maska-tokens":"0:[0-9]:multiple",size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512)),[[x,e.value.defaultResult],[U]]):i("",!0),e.value.resultType===a(p).Editor?(d(),u("div",ot,[w(de,{modelValue:e.value.defaultResult,"onUpdate:modelValue":l[15]||(l[15]=s=>e.value.defaultResult=s),"limit-width":o.value?.resultEditorMaxWidth,"limit-height":o.value?.resultEditorMaxHeight},null,8,["modelValue","limit-width","limit-height"])])):i("",!0),e.value.resultType?i("",!0):g((d(),u("input",{key:7,"onUpdate:modelValue":l[16]||(l[16]=s=>e.value.defaultResult=s),size:"1",disabled:"",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512)),[[x,e.value.defaultResult]]),r.value.hasOwnProperty("defaultResult")?(d(),u("p",lt,c(r.value.defaultResult[0]),1)):i("",!0)]),e.value.resultType===a(p).Formula?(d(),u("div",st,[t("div",at,[w(be,{modelValue:e.value.defaultResult,"onUpdate:modelValue":l[17]||(l[17]=s=>e.value.defaultResult=s),branchId:e.value.branchId},null,8,["modelValue","branchId"])])])):i("",!0)])],40,ce)]),footer:T(()=>[t("button",{class:"mr-2 btn-blue",disabled:_.value,form:"form"},[w(le,{"is-loading":_.value},{default:T(()=>[E("Save")]),_:1},8,["is-loading"])],8,nt),t("button",{onClick:S,class:"btn-gray"},"Cancel"),b.value===a($).Edit?(d(),L(a(ne),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":l[18]||(l[18]=s=>e.value.isActive=s),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):i("",!0)]),_:1})}}});export{ct as default};
