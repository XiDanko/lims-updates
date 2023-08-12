import{d as X,g as w,x as Z,a3 as G,cg as Y,s as ve,o as l,R as me,w as V,b as e,a as y,a5 as ee,k as d,f as be,e as he,u as fe,y as z,Q as F,V as _e,c as n,m as q,t as c,i as o,n as v,j as m,W as C,v as P,F as J,a2 as ge,h as ye,_ as we,a0 as xe}from"./main-bf2af1c2.js";import{b as K}from"./toggle-1b27a25d.js";import{s as M}from"./multiselect-4f06085e.js";import{F as h}from"./formMode-f60a729f.js";import{G as A}from"./gender-fe0bd233.js";import{R as E}from"./rangeType-b75ca402.js";import{_ as Ve}from"./Tinymce.vue_vue_type_script_setup_true_lang-9c4e487f.js";var f=(p=>(p.Days="days",p.Months="months",p.Yeas="years",p))(f||{}),R=(p=>(p.Before="before",p.After="after",p.During="during",p))(R||{}),$=(p=>(p.GT=">",p.LT="<",p.EQ="=",p.Range="<>",p))($||{});const ke=e("h1",null,"Range Notes",-1),Ie={id:"form"},Fe=X({__name:"ReferenceRangeNotesModal",setup(p){const O=w(!1),k=w({});Z(()=>{G.on(Y.Show,async({range:s})=>{k.value=s,O.value=!0})}),ve(()=>G.off(Y.Show));const N=()=>{O.value=!1};return(s,I)=>O.value?(l(),me(ee,{key:0,"modal-class":"!w-[56rem]"},{header:V(()=>[ke]),body:V(()=>[e("form",Ie,[y(Ve,{modelValue:k.value.notes,"onUpdate:modelValue":I[0]||(I[0]=U=>k.value.notes=U),class:"h-[400px]"},null,8,["modelValue"])])]),footer:V(()=>[e("button",{onClick:N,class:"btn-gray"},"Close")]),_:1})):d("",!0)}}),Pe=["onSubmit"],Ce={class:"mb-3 grid grid-cols-4 gap-3"},Oe={key:0,class:"flex flex-wrap items-start"},Te=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),$e={key:0,class:"ml-24 w-full text-sm text-red-500"},Ue={class:"flex flex-wrap items-start"},De=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Test",-1),Me={class:"truncate"},Re={key:0,class:"ml-24 w-full text-sm text-red-500"},Ne={class:"flex flex-wrap items-start"},Be=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Parameter",-1),Se={class:"truncate"},ze={key:0,class:"ml-24 w-full text-sm text-red-500"},Ae={class:"flex flex-wrap items-start"},Ee=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Machine",-1),Ge={key:0,class:"ml-24 w-full text-sm text-red-500"},Ye={class:"flex flex-wrap items-start"},Le=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Gender",-1),He=["value"],Qe=["value"],We={key:0,value:"both"},je={key:0,class:"ml-24 w-full text-sm text-red-500"},qe={class:"flex flex-wrap items-start"},Je=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Age From",-1),Ke=["value"],Xe=["value"],Ze=["value"],es={key:0,class:"ml-24 w-full text-sm text-red-500"},ss={class:"flex flex-wrap items-start"},as=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Age To",-1),rs=["value"],ts=["value"],os=["value"],ls={key:0,class:"ml-24 w-full text-sm text-red-500"},ns={key:1,class:"flex flex-wrap items-start"},ds=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Fasting",-1),us={class:"flex flex-wrap items-start"},is=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Unit",-1),cs={key:0,class:"ml-24 w-full text-sm text-red-500"},ps={key:0,class:"mb-3 grid grid-cols-3 gap-3"},vs={class:"flex flex-wrap items-start"},ms=e("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Menses Duration",-1),bs=["value"],hs=["value"],fs=["value"],_s={key:0,class:"ml-36 w-full text-sm text-red-500"},gs={class:"flex flex-wrap items-start"},ys=e("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Menses From",-1),ws=e("span",{class:"rounded-r border border-l-0 border-gray-300 bg-gray-100 p-2"},"Days",-1),xs={key:0,class:"ml-36 w-full text-sm text-red-500"},Vs={class:"flex flex-wrap items-start"},ks=e("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Menses To",-1),Is=e("span",{class:"rounded-r border border-l-0 border-gray-300 bg-gray-100 p-2"},"Days",-1),Fs={key:0,class:"ml-36 w-full text-sm text-red-500"},Ps=e("hr",null,null,-1),Cs=e("h2",{class:"mt-2 mb-3 text-center text-2xl font-bold"},"Ranges",-1),Os={class:"mb-3 grid grid-cols-12 gap-3"},Ts={class:"col-span-2 flex flex-wrap items-start"},$s=e("span",{class:"w-20 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Operator",-1),Us=["onUpdate:modelValue"],Ds=["value"],Ms=["value"],Rs=["value"],Ns=["value"],Bs={key:0,class:"ml-20 w-full text-sm text-red-500"},Ss={class:"col-span-2 flex flex-wrap items-start"},zs=e("span",{class:"w-24 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Value",-1),As=["onUpdate:modelValue"],Es={key:0,class:"ml-24 w-full text-sm text-red-500"},Gs={class:"col-span-2 flex flex-wrap items-start"},Ys=e("span",{class:"w-20 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Type",-1),Ls=["onUpdate:modelValue"],Hs=["value"],Qs=["value"],Ws=["value"],js={key:0,class:"ml-20 w-full text-sm text-red-500"},qs={class:"col-span-2 flex flex-wrap items-start"},Js=e("span",{class:"w-20 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"INTPN",-1),Ks=["onUpdate:modelValue"],Xs={key:0,class:"ml-20 w-full text-sm text-red-500"},Zs={class:"col-span-3 flex flex-wrap items-start"},ea=e("span",{class:"w-20 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Notes",-1),sa={class:"flex flex-1 items-center rounded-r border border-gray-300 p-2 focus:border-blue-500"},aa=["onClick"],ra={class:"mt-2"},ta={class:"flex items-center"},oa=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),la=[oa],na=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-5 w-5"},[e("path",{d:"M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"})],-1),da=[na],ua=["disabled"],fa=X({__name:"ReferenceRangeForm",emits:["close"],setup(p,{emit:O}){const k=be(),N=he(),s=w({ranges:[{isNotesVisible:!0}]}),I=fe().user.branches,U=w([]),T=w([]),L=w([]),u=w({from:{unit:f.Days},to:{unit:f.Days}}),_=w(h.Create),D=w(!1),a=w({});Z(()=>{I.length===1&&(s.value.branchId=I[0].id,B()),k.path.endsWith("/edit")&&(_.value=h.Edit),k.path.endsWith("/clone")&&(_.value=h.Clone),_.value!==h.Create&&ae(k.params.id)});const se=z(()=>{if(_.value===h.Create)return"Create New Reference Range";if(_.value===h.Clone)return"Clone Reference Range";if(_.value===h.Edit)return"Update Reference Range"}),ae=async i=>{const{data:t}=await F.get(`/api/reference-ranges/${i}`);s.value=t.data,B(),Q(t.data.testId),H(t.data.test.departmentId);const x=s.value.ageFrom.split(" "),r=s.value.ageTo.split(" ");u.value.from.value=x[0],u.value.from.unit=x[1],u.value.to.value=r[0],u.value.to.unit=r[1]},H=async i=>{const{data:t}=await F.get(`/api/machines/list?departmentId=${i}`);L.value=t.data},B=async()=>{const{data:i}=await F.get(`/api/tests/list?branchId=${s.value.branchId}`);T.value=i.data},Q=async i=>{const{data:t}=await F.get(`/api/parameters/list?testId=${i}`);U.value=t.data},re=i=>{const t=T.value.find(x=>x.id===i).departmentId;Q(i),H(t)},W=()=>{s.value.parameterId=null,s.value.machineId=null},te=()=>{s.value.testId=null,W()},oe=z(()=>{const i=T.value.find(t=>t.id===s.value.testId);return i?i.affectedByMenses&&s.value.gender===A.Female:!1}),le=z(()=>{const i=T.value.find(t=>t.id===s.value.testId);return i?i.affectedByFasting:!1}),ne=()=>{u.value.from.value&&(s.value.ageFrom=`${u.value.from.value} ${u.value.from.unit}`),u.value.to.value&&(s.value.ageTo=`${u.value.to.value} ${u.value.to.unit}`)},de=async()=>{D.value=!0,ne();try{_.value===h.Create?await ue():_.value===h.Clone?await ie():_.value===h.Edit&&await ce(),a.value={},xe.fire()}catch(i){a.value=i.response.data.errors??{}}D.value=!1},ue=async()=>{await F.post("/api/reference-ranges",s.value),pe()},ie=async()=>{await F.post("/api/reference-ranges",s.value),S()},ce=async()=>{await F.patch(`/api/reference-ranges/${s.value.id}`,s.value),S()},j=()=>{s.value.mensesDuration=null,s.value.mensesFrom=null,s.value.mensesTo=null},pe=()=>{s.value={branchId:s.value.branchId,testId:s.value.testId,parameterId:s.value.parameterId,machineId:s.value.machineId,unit:s.value.unit,ranges:s.value.ranges},u.value={from:{unit:f.Days},to:{unit:f.Days}},a.value=[]},S=()=>{O("close"),N.back()};return(i,t)=>{const x=_e("maska");return l(),n(J,null,[y(ee,{"modal-class":"!w-[90rem]"},{header:V(()=>[q(c(se.value),1)]),body:V(()=>[e("form",{id:"form",onSubmit:ye(de,["prevent","stop"])},[e("div",Ce,[o(I).length>1?(l(),n("div",Oe,[Te,y(o(M),{modelValue:s.value.branchId,"onUpdate:modelValue":t[0]||(t[0]=r=>s.value.branchId=r),options:o(I),onSelect:B,onChange:te,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("branchId")?(l(),n("p",$e,c(a.value.branchId[0]),1)):d("",!0)])):d("",!0),e("div",Ue,[De,y(o(M),{modelValue:s.value.testId,"onUpdate:modelValue":t[1]||(t[1]=r=>s.value.testId=r),onSelect:re,onChange:W,options:T.value,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"shortForm",class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("testId")}])},{option:V(({option:r})=>[e("span",Me,c(r.shortForm),1)]),_:1},8,["modelValue","options","class"]),a.value.hasOwnProperty("testId")?(l(),n("p",Re,c(a.value.testId[0]),1)):d("",!0)]),e("div",Ne,[Be,y(o(M),{modelValue:s.value.parameterId,"onUpdate:modelValue":t[2]||(t[2]=r=>s.value.parameterId=r),options:U.value,onChange:j,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"shortForm",class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("parameterId")}])},{option:V(({option:r})=>[e("span",Se,c(r.shortForm),1)]),_:1},8,["modelValue","options","class"]),a.value.hasOwnProperty("parameterId")?(l(),n("p",ze,c(a.value.parameterId[0]),1)):d("",!0)]),e("div",Ae,[Ee,y(o(M),{modelValue:s.value.machineId,"onUpdate:modelValue":t[3]||(t[3]=r=>s.value.machineId=r),options:L.value,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name",class:v(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":a.value.hasOwnProperty("machineId")}])},null,8,["modelValue","options","class"]),a.value.hasOwnProperty("machineId")?(l(),n("p",Ge,c(a.value.machineId[0]),1)):d("",!0)]),e("div",Ye,[Le,m(e("select",{"onUpdate:modelValue":t[4]||(t[4]=r=>s.value.gender=r),onChange:j,class:v(["flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("gender")}])},[e("option",{value:o(A).Male},"Male",8,He),e("option",{value:o(A).Female},"Female",8,Qe),_.value===o(h).Create?(l(),n("option",We,"Both")):d("",!0)],34),[[C,s.value.gender]]),a.value.hasOwnProperty("gender")?(l(),n("p",je,c(a.value.gender[0]),1)):d("",!0)]),e("div",qe,[Je,m(e("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>u.value.from.value=r),size:"1","data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",class:v(["flex-1 border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("ageFrom")}])},null,2),[[P,u.value.from.value],[x]]),m(e("select",{"onUpdate:modelValue":t[6]||(t[6]=r=>u.value.from.unit=r),class:"rounded-r border border-l-0 border-gray-300 px-2 py-1 h-[42px]"},[e("option",{value:o(f).Days},"Days",8,Ke),e("option",{value:o(f).Months},"Months",8,Xe),e("option",{value:o(f).Yeas},"Years",8,Ze)],512),[[C,u.value.from.unit]]),a.value.hasOwnProperty("ageFrom")?(l(),n("p",es,c(a.value.ageFrom[0]),1)):d("",!0)]),e("div",ss,[as,m(e("input",{"onUpdate:modelValue":t[7]||(t[7]=r=>u.value.to.value=r),size:"1","data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",class:v(["flex-1 border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("ageTo")}])},null,2),[[P,u.value.to.value],[x]]),m(e("select",{"onUpdate:modelValue":t[8]||(t[8]=r=>u.value.to.unit=r),class:"rounded-r border border-l-0 border-gray-300 px-2 py-1 h-[42px]"},[e("option",{value:o(f).Days},"Days",8,rs),e("option",{value:o(f).Months},"Months",8,ts),e("option",{value:o(f).Yeas},"Years",8,os)],512),[[C,u.value.to.unit]]),a.value.hasOwnProperty("ageFrom")?(l(),n("p",ls,c(a.value.ageTo[0]),1)):d("",!0)]),le.value?(l(),n("div",ns,[ds,y(o(K),{modelValue:s.value.isFasting,"onUpdate:modelValue":t[9]||(t[9]=r=>s.value.isFasting=r),"on-label":"Yes","off-label":"No",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])])):d("",!0),e("div",us,[is,m(e("input",{"onUpdate:modelValue":t[10]||(t[10]=r=>s.value.unit=r),size:"1",class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("unit")}])},null,2),[[P,s.value.unit]]),a.value.hasOwnProperty("unit")?(l(),n("p",cs,c(a.value.unit[0]),1)):d("",!0)])]),oe.value?(l(),n("div",ps,[e("div",vs,[ms,m(e("select",{"onUpdate:modelValue":t[11]||(t[11]=r=>s.value.mensesDuration=r),class:v(["flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("mensesDuration")}])},[e("option",{value:o(R).Before},"Before",8,bs),e("option",{value:o(R).During},"During",8,hs),e("option",{value:o(R).After},"After",8,fs)],2),[[C,s.value.mensesDuration]]),a.value.hasOwnProperty("mensesDuration")?(l(),n("p",_s,c(a.value.mensesDuration[0]),1)):d("",!0)]),e("div",gs,[ys,m(e("input",{"onUpdate:modelValue":t[12]||(t[12]=r=>s.value.mensesFrom=r),size:"1","data-maska":"##",class:v(["flex-1 border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("mensesFrom")}])},null,2),[[P,s.value.mensesFrom],[x]]),ws,a.value.hasOwnProperty("mensesFrom")?(l(),n("p",xs,c(a.value.mensesFrom[0]),1)):d("",!0)]),e("div",Vs,[ks,m(e("input",{"onUpdate:modelValue":t[13]||(t[13]=r=>s.value.mensesTo=r),size:"1","data-maska":"##",class:v(["flex-1 border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty("mensesTo")}])},null,2),[[P,s.value.mensesTo],[x]]),Is,a.value.hasOwnProperty("mensesTo")?(l(),n("p",Fs,c(a.value.mensesTo[0]),1)):d("",!0)])])):d("",!0),Ps,Cs,(l(!0),n(J,null,ge(s.value.ranges,(r,b)=>(l(),n("div",Os,[e("div",Ts,[$s,m(e("select",{"onUpdate:modelValue":g=>r.operator=g,class:v(["flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty(`ranges.${b}.operator`)}])},[e("option",{value:o($).GT},"Greater Than",8,Ds),e("option",{value:o($).LT},"Less Than",8,Ms),e("option",{value:o($).EQ},"Equal",8,Rs),e("option",{value:o($).Range},"Between",8,Ns)],10,Us),[[C,r.operator]]),a.value.hasOwnProperty(`ranges.${b}.operator`)?(l(),n("p",Bs,c(a.value[`ranges.${b}.operator`][0]),1)):d("",!0)]),e("div",Ss,[zs,m(e("input",{"onUpdate:modelValue":g=>r.value=g,size:"1",class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty(`ranges.${b}.value`)}])},null,10,As),[[P,r.value]]),a.value.hasOwnProperty(`ranges.${b}.value`)?(l(),n("p",Es,c(a.value[`ranges.${b}.value`][0]),1)):d("",!0)]),e("div",Gs,[Ys,m(e("select",{"onUpdate:modelValue":g=>r.type=g,class:v(["flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty(`ranges.${b}.type`)}])},[e("option",{value:o(E).Normal},"Normal",8,Hs),e("option",{value:o(E).Abnormal},"Abnormal",8,Qs),e("option",{value:o(E).Critical},"Critical",8,Ws)],10,Ls),[[C,r.type]]),a.value.hasOwnProperty(`ranges.${b}.type`)?(l(),n("p",js,c(a.value[`ranges.${b}.type`][0]),1)):d("",!0)]),e("div",qs,[Js,m(e("input",{"onUpdate:modelValue":g=>r.interpretation=g,size:"1",class:v(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":a.value.hasOwnProperty(`ranges.${b}.interpretation`)}])},null,10,Ks),[[P,r.interpretation]]),a.value.hasOwnProperty(`ranges.${b}.interpretation`)?(l(),n("p",Xs,c(a.value[`ranges.${b}.interpretation`][0]),1)):d("",!0)]),e("div",Zs,[ea,e("div",sa,[e("span",{onClick:g=>o(G).emit(o(Y).Show,{range:r}),class:"cursor-pointer rounded bg-teal-500 p-1 text-xs text-white transition hover:bg-teal-600"},"Open Editor",8,aa)])]),e("div",ra,[y(o(K),{modelValue:r.isNotesVisible,"onUpdate:modelValue":g=>r.isNotesVisible=g,class:"toggle:w-4","on-label":"Visible","off-label":"Hidden"},null,8,["modelValue","onUpdate:modelValue"])])]))),256)),e("div",ta,[e("span",{class:"mr-2 rounded bg-emerald-500 p-1 text-white transition hover:bg-emerald-600 hover:shadow",onClick:t[14]||(t[14]=r=>s.value.ranges.push({isNotesVisible:!0}))},la),e("span",{class:"rounded bg-red-500 p-1 text-white transition hover:bg-red-600 hover:shadow",onClick:t[15]||(t[15]=r=>s.value.ranges.pop())},da)])],40,Pe)]),footer:V(()=>[e("button",{class:"mr-2 btn-blue",disabled:D.value,form:"form"},[y(we,{"is-loading":D.value},{default:V(()=>[q("Save")]),_:1},8,["is-loading"])],8,ua),e("button",{onClick:S,class:"btn-gray"},"Cancel")]),_:1}),y(Fe)],64)}}});export{fa as default};