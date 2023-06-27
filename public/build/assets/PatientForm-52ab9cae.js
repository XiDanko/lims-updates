import{d as T,f as E,e as G,g as y,u as R,x as $,Q as M,V as W,o as n,R as A,w as _,m as k,t as u,i as b,b as e,c as i,a as C,n as c,k as p,j as o,W as U,v as l,X as m,h as L,_ as j,a5 as Q,a0 as X}from"./main-0c5e983d.js";import{F as x}from"./formMode-f60a729f.js";import{G as v}from"./gender-fe0bd233.js";import{s as q}from"./multiselect-f0516a60.js";const H=["onSubmit"],J={class:"grid grid-cols-12 gap-3"},K={key:0,class:"col-span-12 flex flex-wrap items-center"},Z=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),ee={key:0,class:"w-full text-sm text-red-500"},ae={class:"col-span-4 flex flex-wrap items-start"},re=e("option",{value:"Mr."},"Mr.",-1),se=e("option",{value:"Ms."},"Ms.",-1),te=[re,se],oe={key:0,class:"w-full text-sm text-red-500"},le={key:1,class:"w-full text-sm text-red-500"},de={class:"col-span-3 flex flex-wrap items-start"},ne=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Gender",-1),ue=["value"],ie=["value"],pe={key:0,class:"w-full text-sm text-red-500"},be={class:"col-span-5 flex flex-wrap items-start"},ce=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Year",-1),me=e("span",{class:"border-y border-gray-300 bg-gray-100 p-2"},"Month",-1),ve=e("span",{class:"border-y border-gray-300 bg-gray-100 p-2"},"Day",-1),fe={key:0,class:"w-full text-sm text-red-500"},he={class:"col-span-4 flex flex-wrap items-start"},ge=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Number",-1),ye={key:0,class:"w-full text-sm text-red-500"},_e={class:"col-span-4 flex flex-wrap items-start"},xe=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Email",-1),we={class:"col-span-4 flex flex-wrap items-start"},Me=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Address",-1),Ne={class:"col-span-6 flex flex-wrap items-start"},Ve=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"National ID Number",-1),ke={class:"col-span-6 flex flex-wrap items-start"},Ce=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Passport Number",-1),Ue={class:"col-span-6 flex flex-wrap items-start"},Pe=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Travel Certificate Number",-1),Ie={class:"col-span-6 flex flex-wrap items-start"},ze=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Lab Card Number",-1),Oe={class:"col-span-12 flex items-center"},Se=e("span",{class:"rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Contact Method",-1),De={class:"flex flex-1 items-center rounded-r border border-gray-300 p-2"},Fe={class:"mr-5 flex items-center"},Ye=e("span",{class:"ml-1"},"None",-1),Be={class:"mr-5 flex items-center"},Te=e("span",{class:"ml-1"},"SMS",-1),Ee={class:"mr-5 flex items-center"},Ge=e("span",{class:"ml-1"},"Whatsapp",-1),Re={class:"mr-5 flex items-center"},$e=e("span",{class:"ml-1"},"Telegram",-1),We={class:"mr-5 flex items-center"},Ae=e("span",{class:"ml-1"},"Viber",-1),Le=["disabled"],Je=T({__name:"PatientForm",emits:["close"],setup(je,{emit:P}){const N=E(),I=G(),a=y({phoneNumber:"+964",contactMethod:"none"}),w=y(x.Create),f=y(!1),t=y({}),h=R().user.branches;$(()=>{h.length===1&&(a.value.branchId=h[0].id),N.path.endsWith("/edit")&&(w.value=x.Edit,S(N.params.id))});const z=d=>{d==="Mr."&&(a.value.gender=v.Male),["Mrs.","Ms.","Miss"].includes(d)&&(a.value.gender=v.Female)},O=d=>{d===v.Male?a.value.initials="Mr.":a.value.initials="Ms."},S=async d=>{const{data:r}=await M.get(`/api/patients/${d}`);a.value=r.data},D=async()=>{f.value=!0;try{w.value===x.Create?await F():await Y(),X.fire()}catch(d){t.value=d.response.data.errors??{}}f.value=!1},F=async()=>{await M.post("/api/patients",a.value),B()},Y=async()=>{await M.patch(`/api/patients/${a.value.id}`,a.value),V()},B=()=>{a.value={branchId:a.value.branchId,phoneNumber:"+964",contactMethod:"none"},t.value=[]},V=()=>{P("close"),I.back()};return(d,r)=>{const g=W("maska");return n(),A(Q,{"modal-class":"!w-[60rem]"},{header:_(()=>[k(u(w.value===b(x).Create?"Create New Patient":"Edit Patient"),1)]),body:_(()=>[e("form",{id:"form",onSubmit:L(D,["prevent","stop"])},[e("div",J,[b(h).length>1?(n(),i("div",K,[Z,C(b(q),{modelValue:a.value.branchId,"onUpdate:modelValue":r[0]||(r[0]=s=>a.value.branchId=s),options:b(h),searchable:!0,"value-prop":"id","track-by":"name",label:"name","can-clear":!1,"can-deselect":!1,class:c(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),t.value.hasOwnProperty("branchId")?(n(),i("p",ee,u(t.value.branchId[0]),1)):p("",!0)])):p("",!0),e("div",ae,[o(e("select",{"onUpdate:modelValue":r[1]||(r[1]=s=>a.value.initials=s),onChange:r[2]||(r[2]=s=>z(s.target.value)),class:c(["rounded-l border border-r-0 border-gray-300 bg-gray-100 px-2 h-[42px]",{"!border border-red-500":t.value.hasOwnProperty("initials")}])},te,34),[[U,a.value.initials]]),o(e("input",{"onUpdate:modelValue":r[3]||(r[3]=s=>a.value.name=s),size:"1",class:c(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("name")}])},null,2),[[l,a.value.name]]),t.value.hasOwnProperty("initials")?(n(),i("p",oe,u(t.value.initials[0]),1)):p("",!0),t.value.hasOwnProperty("name")?(n(),i("p",le,u(t.value.name[0]),1)):p("",!0)]),e("div",de,[ne,o(e("select",{"onUpdate:modelValue":r[4]||(r[4]=s=>a.value.gender=s),onChange:r[5]||(r[5]=s=>O(s.target.value)),class:c(["flex-1 rounded-r border border-gray-300 px-2 h-[42px]",{"!border border-red-500":t.value.hasOwnProperty("initials")}])},[e("option",{value:b(v).Male},"Male",8,ue),e("option",{value:b(v).Female},"Female",8,ie)],34),[[U,a.value.gender]]),t.value.hasOwnProperty("gender")?(n(),i("p",pe,u(t.value.gender[0]),1)):p("",!0)]),e("div",be,[ce,o(e("input",{"onUpdate:modelValue":r[6]||(r[6]=s=>a.value.birthdateYear=s),"data-maska":"####",size:"1",class:c(["flex-1 border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("birthdateYear")}])},null,2),[[l,a.value.birthdateYear],[g]]),me,o(e("input",{"onUpdate:modelValue":r[7]||(r[7]=s=>a.value.birthdateMonth=s),"data-maska":"##",size:"1",class:"flex-1 border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.birthdateMonth],[g]]),ve,o(e("input",{"onUpdate:modelValue":r[8]||(r[8]=s=>a.value.birthdateDay=s),"data-maska":"##",size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.birthdateDay],[g]]),t.value.hasOwnProperty("birthdateYear")?(n(),i("p",fe,u(t.value.birthdateYear[0]),1)):p("",!0)]),e("div",he,[ge,o(e("input",{"onUpdate:modelValue":r[9]||(r[9]=s=>a.value.phoneNumber=s),"data-maska":"+0","data-maska-tokens":"0:[0-9]:multiple",size:"1",class:c(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("phoneNumber")}])},null,2),[[l,a.value.phoneNumber],[g]]),t.value.hasOwnProperty("phoneNumber")?(n(),i("p",ye,u(t.value.phoneNumber[0]),1)):p("",!0)]),e("div",_e,[xe,o(e("input",{"onUpdate:modelValue":r[10]||(r[10]=s=>a.value.email=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.email]])]),e("div",we,[Me,o(e("input",{"onUpdate:modelValue":r[11]||(r[11]=s=>a.value.address=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.address]])]),e("div",Ne,[Ve,o(e("input",{"onUpdate:modelValue":r[12]||(r[12]=s=>a.value.nationalIdNumber=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.nationalIdNumber]])]),e("div",ke,[Ce,o(e("input",{"onUpdate:modelValue":r[13]||(r[13]=s=>a.value.passportNumber=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.passportNumber]])]),e("div",Ue,[Pe,o(e("input",{"onUpdate:modelValue":r[14]||(r[14]=s=>a.value.travelCertificateNumber=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.travelCertificateNumber]])]),e("div",Ie,[ze,o(e("input",{"onUpdate:modelValue":r[15]||(r[15]=s=>a.value.labCardNumber=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[l,a.value.labCardNumber]])]),e("div",Oe,[Se,e("div",De,[e("label",Fe,[o(e("input",{type:"radio",value:"none","onUpdate:modelValue":r[16]||(r[16]=s=>a.value.contactMethod=s)},null,512),[[m,a.value.contactMethod]]),Ye]),e("label",Be,[o(e("input",{type:"radio",value:"sms","onUpdate:modelValue":r[17]||(r[17]=s=>a.value.contactMethod=s)},null,512),[[m,a.value.contactMethod]]),Te]),e("label",Ee,[o(e("input",{type:"radio",value:"whatsapp","onUpdate:modelValue":r[18]||(r[18]=s=>a.value.contactMethod=s)},null,512),[[m,a.value.contactMethod]]),Ge]),e("label",Re,[o(e("input",{type:"radio",value:"telegram","onUpdate:modelValue":r[19]||(r[19]=s=>a.value.contactMethod=s)},null,512),[[m,a.value.contactMethod]]),$e]),e("label",We,[o(e("input",{type:"radio",value:"viber","onUpdate:modelValue":r[20]||(r[20]=s=>a.value.contactMethod=s)},null,512),[[m,a.value.contactMethod]]),Ae])])])])],40,H)]),footer:_(()=>[e("button",{class:"mr-2 btn-blue",disabled:f.value,form:"form"},[C(j,{"is-loading":f.value},{default:_(()=>[k("Save")]),_:1},8,["is-loading"])],8,Le),e("button",{onClick:V,class:"btn-gray"},"Cancel")]),_:1})}}});export{Je as default};
