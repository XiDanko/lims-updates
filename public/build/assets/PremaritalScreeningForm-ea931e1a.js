import{d as Y,g as D,x as F,o as f,c as v,j as I,ag as B,b as e,i as t,k as x,h as z,F as W,p as s,y as L,V as A,t as d,n as V,v as N,a as w,Q as U,T as Q,Y as X,f as ee,e as te,u as ae,U as re,R as se,w as T,m as O,_ as le,Z as oe,a0 as j}from"./main-cee2eb24.js";import{M as ne}from"./Master-e24133cb.js";import{F as E}from"./formMode-f60a729f.js";import{s as P}from"./multiselect-97a39018.js";import{b as k}from"./toggle-afba85dd.js";import{_ as de}from"./VisitPrintToggles.vue_vue_type_script_setup_true_lang-d4a19b28.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./printTemplateManager-b9018cee.js";import"./websocketPrint-f541b6bb.js";class ie{constructor(n,i="user",l=null,a=null){this._webcamElement=n,this._webcamElement.width=this._webcamElement.width||640,this._webcamElement.height=this._webcamElement.height||360,this._facingMode=i,this._webcamList=[],this._streamList=[],this._selectedDeviceId="",this._canvasElement=l,this._snapSoundElement=a}get facingMode(){return this._facingMode}set facingMode(n){this._facingMode=n}get webcamList(){return this._webcamList}get webcamCount(){return this._webcamList.length}get selectedDeviceId(){return this._selectedDeviceId}getVideoInputs(n){return this._webcamList=[],n.forEach(i=>{i.kind==="videoinput"&&this._webcamList.push(i)}),this._webcamList.length==1&&(this._facingMode="user"),this._webcamList}getMediaConstraints(){var n={};this._selectedDeviceId==""?n.facingMode=this._facingMode:n.deviceId={exact:this._selectedDeviceId},n.width={exact:this._webcamElement.width},n.height={exact:this._webcamElement.height};var i={video:n,audio:!1};return i}selectCamera(){for(let n of this._webcamList)if(this._facingMode=="user"&&n.label.toLowerCase().includes("front")||this._facingMode=="enviroment"&&n.label.toLowerCase().includes("back")){this._selectedDeviceId=n.deviceId;break}}flip(){this._facingMode=this._facingMode=="user"?"enviroment":"user",this._webcamElement.style.transform="",this.selectCamera()}async start(n=!0){return new Promise((i,l)=>{this.stop(),navigator.mediaDevices.getUserMedia(this.getMediaConstraints()).then(a=>{this._streamList.push(a),this.info().then(y=>{this.selectCamera(),n?this.stream().then(o=>{i(this._facingMode)}).catch(o=>{l(o)}):i(this._selectedDeviceId)}).catch(y=>{l(y)})}).catch(a=>{l(a)})})}async info(){return new Promise((n,i)=>{navigator.mediaDevices.enumerateDevices().then(l=>{this.getVideoInputs(l),n(this._webcamList)}).catch(l=>{i(l)})})}async stream(){return new Promise((n,i)=>{navigator.mediaDevices.getUserMedia(this.getMediaConstraints()).then(l=>{this._streamList.push(l),this._webcamElement.srcObject=l,this._facingMode=="user"&&(this._webcamElement.style.transform="scale(-1,1)"),this._webcamElement.play(),n(this._facingMode)}).catch(l=>{console.log(l),i(l)})})}stop(){this._streamList.forEach(n=>{n.getTracks().forEach(i=>{i.stop()})})}snap(){if(this._canvasElement!=null){this._snapSoundElement!=null&&this._snapSoundElement.play(),this._canvasElement.height=this._webcamElement.scrollHeight,this._canvasElement.width=this._webcamElement.scrollWidth;let n=this._canvasElement.getContext("2d");return this._facingMode=="user"&&(n.translate(this._canvasElement.width,0),n.scale(-1,1)),n.clearRect(0,0,this._canvasElement.width,this._canvasElement.height),n.drawImage(this._webcamElement,0,0,this._canvasElement.width,this._canvasElement.height),this._canvasElement.toDataURL("image/png")}else throw"canvas element is missing"}}const ue={class:"fixed inset-0 flex flex-col items-center justify-center bg-black/80 z-[100]"},ce=["id"],be=["src"],he={class:"mt-12 flex items-center justify-center gap-5"},me=["onClick","title"],ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-10 w-10 text-gray-900"},[e("path",{d:"M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z"}),e("path",{"fill-rule":"evenodd",d:"M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule":"evenodd"})],-1),pe=[ge],fe=["onClick","title"],ve=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-10 w-10 text-gray-900"},[e("path",{"fill-rule":"evenodd",d:"M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z","clip-rule":"evenodd"})],-1),_e=[ve],we=["onClick","title"],ye=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-10 w-10 text-gray-900"},[e("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1),xe=[ye],Ve=["id"],Me=Y({__name:"WebcamModal",emits:["capture"],setup(H,{expose:n,emit:i}){let l=null;const a=D(null),y=D(!1),o=(Math.random()*1e3).toFixed();F(()=>{const _=document.getElementById("webcam-"+o),h=document.getElementById("canvas-"+o);l=new ie(_,"user",h)});const u=()=>{l.start(),y.value=!0},r=()=>{a.value=l.snap(),i("capture",a.value),l.stop()},b=()=>{a.value=null,l.start()},M=()=>{l.stop(),a.value=null,y.value=!1};return n({open:u}),(_,h)=>(f(),v(W,null,[I(e("div",ue,[I(e("video",{id:"webcam-"+t(o),width:"640",height:"480",class:"rounded-lg"},null,8,ce),[[B,a.value===null]]),a.value?(f(),v("img",{key:0,src:a.value,alt:"",width:"640",height:"480",class:"rounded-lg"},null,8,be)):x("",!0),e("div",he,[a.value===null?(f(),v("button",{key:0,class:"flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 shadow",onClick:z(r,["prevent"]),title:t(s)("Capture")},pe,8,me)):(f(),v("button",{key:1,class:"flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 shadow",onClick:z(b,["prevent"]),title:t(s)("Retry")},_e,8,fe)),e("button",{class:"flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 shadow",onClick:z(M,["prevent"]),title:t(s)("Close")},xe,8,we)])],512),[[B,y.value]]),e("canvas",{id:"canvas-"+t(o),class:"hidden"},null,8,Ve)],64))}}),$e={class:"grid grid-cols-1 gap-2"},ke=["src"],Ie={class:"flex flex-wrap items-start"},De={class:"w-14 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},Ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},[e("path",{d:"M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z"}),e("path",{"fill-rule":"evenodd",d:"M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule":"evenodd"})],-1),Ee=[Ce],Ue={key:0,class:"ltr:rounded-r rtl:rounded-l border rtl:border-r-0 ltr:border-l-0 border-gray-300 bg-green-500 p-1"},Ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6 text-white"},[e("path",{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z","clip-rule":"evenodd"})],-1),He=[Ne],Se={key:1,class:"rtl:mr-14 ltr:ml-14 w-full text-sm text-red-500"},ze={class:"flex flex-wrap items-start"},Le={class:"w-14 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},Pe={key:0,class:"rtl:mr-14 ltr:ml-14 w-full text-sm text-red-500"},Ye={class:"flex items-start"},Te={class:"flex flex-1 flex-wrap items-center"},Ae={class:"w-14 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},Be={key:0,class:"rtl:mr-14 ltr:ml-14 w-full text-sm text-red-500"},Oe={class:"flex flex-1 flex-wrap items-center"},je={class:"border-y border-gray-300 bg-gray-100 p-1"},Re={key:0,class:"rtl:mr-14 ltr:ml-14 w-full text-sm text-red-500"},Fe={class:"flex flex-1 flex-wrap items-center"},We={class:"border-y border-gray-300 bg-gray-100 p-1"},Qe={key:0,class:"rtl:mr-14 ltr:ml-14 w-full text-sm text-red-500"},Ze={class:"flex flex-wrap items-start"},qe={class:"w-36 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},Ge={key:0,class:"rtl:mr-36 ltr:ml-36 w-full text-sm text-red-500"},Je={class:"flex flex-wrap items-start"},Ke={class:"w-36 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},Xe={key:0,class:"rtl:mr-36 ltr:ml-36 w-full text-sm text-red-500"},et={class:"flex flex-wrap items-start"},tt={class:"w-36 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},at={key:0,class:"rtl:mr-36 ltr:ml-36 w-full text-sm text-red-500"},R=Y({__name:"PersonalInformation",props:{modelValue:{},suggestions:{},branchId:{},errors:{},for:{}},emits:["update:modelValue","update:suggestions"],setup(H,{emit:n}){const i=H,{hasPermissionTo:l}=Q(),a=L({get:()=>i.modelValue,set:_=>n("update:modelValue",_)}),y=L({get:()=>i.suggestions,set:_=>n("update:suggestions",_)}),o=D(null),u=async(_,h)=>{if(!l("Suggestion.create"))return;const{data:$}=await U.post("/api/suggestions",{branchId:i.branchId,type:_,content:h});return y.value.unshift($.data),$.data},r=_=>i.errors.hasOwnProperty(`${i.for}Information.${_}`),b=_=>i.errors[`${i.for}Information.${_}`][0],M=_=>{const h=_.target.files[0],$=new FileReader;$.readAsDataURL(h),$.onload=()=>a.value.photo=$.result};return(_,h)=>{const $=A("tip"),S=A("maska");return f(),v(W,null,[e("div",$e,[a.value.photoPath?(f(),v("img",{key:0,class:"h-24 rounded",src:`/storage/${a.value.photoPath}`,alt:""},null,8,ke)):x("",!0),e("div",Ie,[e("span",De,d(t(s)("Photo")),1),e("input",{type:"file",onChange:M,accept:"image/*",size:"1",class:V(["flex-1 border border-gray-300 p-1 text-[12px] focus:border-blue-500",{"!border-red-500":r("photo")}])},null,34),I((f(),v("button",{class:V(["ltr:rounded-r rtl:rounded-l border rtl:border-r-0 ltr:border-l-0 border-gray-300 bg-gray-100 p-1",{"!rounded-none":a.value.photo}]),onClick:h[0]||(h[0]=z(m=>o.value.open(),["prevent"]))},Ee,2)),[[$,t(s)("Open Camera")]]),a.value.photo?(f(),v("span",Ue,He)):x("",!0),r("photo")?(f(),v("p",Se,d(b("photo")),1)):x("",!0)]),e("div",ze,[e("span",Le,d(t(s)("Name")),1),I(e("input",{"onUpdate:modelValue":h[1]||(h[1]=m=>a.value.name=m),size:"1",class:V(["flex-1 ltr:rounded-r rtl:rounded-l border border-gray-300 p-1 focus:border-blue-500",{"!border-red-500":r("name")}])},null,2),[[N,a.value.name]]),r("name")?(f(),v("p",Pe,d(b("name")),1)):x("",!0)]),e("div",Ye,[e("div",Te,[e("span",Ae,d(t(s)("Year")),1),I(e("input",{"onUpdate:modelValue":h[2]||(h[2]=m=>a.value.birthdateYear=m),"data-maska":"####",size:"1",class:V(["flex-1 border border-gray-300 p-1 focus:border-blue-500",{"!border-red-500":r("birthdateYear")}])},null,2),[[N,a.value.birthdateYear],[S]]),r("birthdateYear")?(f(),v("p",Be,d(b("birthdateYear")),1)):x("",!0)]),e("div",Oe,[e("span",je,d(t(s)("Month")),1),I(e("input",{"onUpdate:modelValue":h[3]||(h[3]=m=>a.value.birthdateMonth=m),"data-maska":"##",size:"1",class:V(["flex-1 border border-gray-300 p-1 focus:border-blue-500",{"!border-red-500":r("birthdateMonth")}])},null,2),[[N,a.value.birthdateMonth],[S]]),r("birthdateMonth")?(f(),v("p",Re,d(b("birthdateMonth")),1)):x("",!0)]),e("div",Fe,[e("span",We,d(t(s)("Day")),1),I(e("input",{"onUpdate:modelValue":h[4]||(h[4]=m=>a.value.birthdateDay=m),"data-maska":"##",size:"1",class:V(["flex-1 ltr:rounded-r rtl:rounded-l border border-gray-300 p-1 focus:border-blue-500",{"!border-red-500":r("birthdateDay")}])},null,2),[[N,a.value.birthdateDay],[S]]),r("birthdateDay")?(f(),v("p",Qe,d(b("birthdateDay")),1)):x("",!0)])]),e("div",Ze,[e("span",qe,d(t(s)("Education Degree")),1),w(t(P),{modelValue:a.value.educationDegree,"onUpdate:modelValue":h[5]||(h[5]=m=>a.value.educationDegree=m),options:y.value.filter(m=>m.type==="educationDegree"),"value-prop":"content","track-by":"content",label:"content",searchable:!0,"create-option":t(l)("Suggestion.create"),"on-create":m=>u("educationDegree",m.content),class:V(["min-h-[34px] flex-1 border border-gray-300 ltr:!rounded-r rtl:!rounded-l",{"!border-red-500":r("educationDegree")}])},null,8,["modelValue","options","create-option","on-create","class"]),r("educationDegree")?(f(),v("p",Ge,d(b("educationDegree")),1)):x("",!0)]),e("div",Je,[e("span",Ke,d(t(s)("Occupation")),1),w(t(P),{modelValue:a.value.occupation,"onUpdate:modelValue":h[6]||(h[6]=m=>a.value.occupation=m),options:y.value.filter(m=>m.type==="occupation"),"value-prop":"content","track-by":"content",label:"content",searchable:!0,"create-option":t(l)("Suggestion.create"),"on-create":m=>u("occupation",m.content),class:V(["min-h-[34px] flex-1 border border-gray-300 ltr:!rounded-r rtl:!rounded-l",{"!border-red-500":r("occupation")}])},null,8,["modelValue","options","create-option","on-create","class"]),r("occupation")?(f(),v("p",Xe,d(b("occupation")),1)):x("",!0)]),e("div",et,[e("span",tt,d(t(s)("Address")),1),I(e("input",{"onUpdate:modelValue":h[7]||(h[7]=m=>a.value.address=m),size:"1",class:V(["flex-1 ltr:rounded-r rtl:rounded-l border border-gray-300 p-1 focus:border-blue-500",{"!border-red-500":r("address")}])},null,2),[[N,a.value.address]]),r("address")?(f(),v("p",at,d(b("address")),1)):x("",!0)])]),w(Me,{ref_key:"webcam",ref:o,onCapture:h[8]||(h[8]=m=>a.value.photo=m)},null,512)],64)}}}),rt={class:"select-none overflow-hidden rounded border border-gray-300"},st={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},lt={class:"text-lg font-bold"},ot={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},nt={class:"text-lg font-bold"},dt={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},it={class:"text-lg font-bold"},ut={class:"flex items-center justify-between border-b border-gray-300 px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},ct={class:"text-lg font-bold"},bt={class:"flex items-center justify-between px-5 py-2 odd:bg-gray-100 hover:bg-gray-200 hover:text-gray-800"},ht={class:"text-lg font-bold"},mt=Y({__name:"MedicalHistory",props:{husband:{},wife:{}},emits:["update:husbandMedicalHistory","update:wifeMedicalHistory"],setup(H,{emit:n}){const i=H,l=L({get:()=>i.husband,set:y=>n("update:husbandMedicalHistory",y)}),a=L({get:()=>i.wife,set:y=>n("update:wifeMedicalHistory",y)});return(y,o)=>(f(),v("div",rt,[e("div",st,[w(t(k),{modelValue:l.value.hasThalassemia,"onUpdate:modelValue":o[0]||(o[0]=u=>l.value.hasThalassemia=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"]),e("span",lt,d(t(s)("Has Thalassemia")),1),w(t(k),{modelValue:a.value.hasThalassemia,"onUpdate:modelValue":o[1]||(o[1]=u=>a.value.hasThalassemia=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"])]),e("div",ot,[w(t(k),{modelValue:l.value.hasSickleCellAnemia,"onUpdate:modelValue":o[2]||(o[2]=u=>l.value.hasSickleCellAnemia=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"]),e("span",nt,d(t(s)("Has Sickle Cell Anemia")),1),w(t(k),{modelValue:a.value.hasSickleCellAnemia,"onUpdate:modelValue":o[3]||(o[3]=u=>a.value.hasSickleCellAnemia=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"])]),e("div",dt,[w(t(k),{modelValue:l.value.hasHaemophilia,"onUpdate:modelValue":o[4]||(o[4]=u=>l.value.hasHaemophilia=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"]),e("span",it,d(t(s)("Has Haemophilia")),1),w(t(k),{modelValue:a.value.hasHaemophilia,"onUpdate:modelValue":o[5]||(o[5]=u=>a.value.hasHaemophilia=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"])]),e("div",ut,[w(t(k),{modelValue:l.value.hasMentalDisability,"onUpdate:modelValue":o[6]||(o[6]=u=>l.value.hasMentalDisability=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"]),e("span",ct,d(t(s)("Has Mental Disability")),1),w(t(k),{modelValue:a.value.hasMentalDisability,"onUpdate:modelValue":o[7]||(o[7]=u=>a.value.hasMentalDisability=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"])]),e("div",bt,[w(t(k),{modelValue:l.value.hasDiabetes,"onUpdate:modelValue":o[8]||(o[8]=u=>l.value.hasDiabetes=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"]),e("span",ht,d(t(s)("Has Diabetes")),1),w(t(k),{modelValue:a.value.hasDiabetes,"onUpdate:modelValue":o[9]||(o[9]=u=>a.value.hasDiabetes=u),"on-label":t(s)("Yes"),"off-label":t(s)("No"),class:"toggle:on:red toggle:off:green"},null,8,["modelValue","on-label","off-label"])])]))}}),gt={class:"h-[calc(100vh-8.6rem)] overflow-y-auto flex flex-col justify-between"},pt={class:"grid grid-cols-2 gap-2"},ft={key:0,class:"col-span-2 mb-2 flex flex-wrap items-center"},vt={class:"w-20 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},_t={key:0,class:"ltr:mr-20 ltr:ml-20 w-full text-sm text-red-500"},wt={class:"text-lg font-bold underline"},yt={class:"rtl:border-r-2 ltr:border-l-2 border-gray-200 rtl:pr-2 ltr:pl-2"},xt={class:"text-lg font-bold underline"},Vt={class:"col-span-2 grid grid-cols-3 gap-2"},Mt={class:"flex flex-wrap items-start"},$t={class:"w-36 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},kt={key:0,class:"rtl:mr-36 ltr:ml-36 w-full text-sm text-red-500"},It={class:"flex flex-wrap items-start"},Dt={class:"w-36 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},Ct={key:0,class:"rtl:mr-36 ltr:ml-36 w-full text-sm text-red-500"},Et={class:"flex flex-wrap items-start"},Ut={class:"w-36 rtl:rounded-r ltr:rounded-l border ltr:border-r-0 rtl:border-l-0 border-gray-300 bg-gray-100 p-1"},Nt={key:0,class:"rtl:mr-36 ltr:ml-36 w-full text-sm text-red-500"},Ht=e("hr",{class:"mt-5 mb-3 border border-gray-200"},null,-1),St={class:"col-span-3 mb-3 text-center text-xl font-bold underline"},zt={class:"mt-3 border-t-2 border-gray-200"},Lt={class:"mt-3 flex items-center"},Pt=["disabled"],Qt=Y({__name:"PremaritalScreeningForm",setup(H){const n=X(),i=ee(),l=te(),{hasPermissionTo:a}=Q(),y=D(null),o=D(E.Create),u=ae().user.branches,r=D({husbandInformation:{},wifeInformation:{},husbandMedicalHistory:{},wifeMedicalHistory:{},phoneNumber:"+964"}),b=D({}),M=D([]),_=D(!1);F(()=>{u.length===1&&(r.value.branchId=u[0].id),i.path.endsWith("/edit")&&(o.value=E.Edit,h(i.params.id))});const h=async g=>{const{data:c}=await U.get(`/api/premarital-screening/${g}`);r.value=c.data},$=async()=>{const{data:g}=await U.get(`/api/suggestions/list?branchId=${r.value.branchId}&type=educationDegree,occupation,relationDegree`);M.value=g.data},S=async(g,c)=>{if(!a("Suggestion.create"))return;const{data:C}=await U.post("/api/suggestions",{branchId:r.value.branchId,type:g,content:c});return M.value.unshift(C.data),C.data},m=async()=>{if(o.value==="edit"){const{isConfirmed:g}=await oe.fire();if(!g)return}_.value=!0;try{const g=o.value===E.Create?await G():await J();y.value.print(g.husbandVisit),y.value.print(g.wifeVisit),Z(g.husbandVisit)&&q(g.husbandVisit),o.value===E.Edit&&await l.back()}catch(g){b.value=g.response.data.errors??{}}_.value=!1},Z=g=>{const c=n.data.whatsapp?.find(C=>C.branchId===g.branchId);return a("Invoice.send")&&o.value===E.Create&&c?.enabled&&(c?.sendInvoice||c?.sendWelcomeMessage)&&g.patient.contactMethod==="whatsapp"},q=async g=>{await U.post(`/api/visits/${g.id}/send-welcome-message`)},G=async()=>{const{data:g}=await U.post("/api/premarital-screening",r.value);return j.fire(),K(),g.data},J=async()=>{const{data:g}=await U.patch(`/api/premarital-screening/${r.value.id}`,r.value);return j.fire(),g.data},K=()=>{r.value={branchId:r.value.branchId,husbandInformation:{},wifeInformation:{},husbandMedicalHistory:{},wifeMedicalHistory:{},phoneNumber:"+964"},b.value={}};return re(()=>{r.value.branchId&&$()}),(g,c)=>{const C=A("maska");return f(),se(ne,null,{header:T(()=>[O(d(o.value===t(E).Create?t(s)("New Premarital Screening Visit"):t(s)("Edit Premarital Screening Visit")),1)]),body:T(()=>[e("div",gt,[e("div",null,[e("div",pt,[o.value===t(E).Create&&t(u).length>1?(f(),v("div",ft,[e("span",vt,d(t(s)("Branch")),1),w(t(P),{modelValue:r.value.branchId,"onUpdate:modelValue":c[0]||(c[0]=p=>r.value.branchId=p),options:t(u),searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-deselect":!1,"can-clear":!1,class:V(["min-h-[34px] flex-1 border border-gray-300 ltr:!rounded-r rtl:!rounded-l",{"!border-red-500":b.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),b.value.hasOwnProperty("branchId")?(f(),v("p",_t,d(b.value.branchId[0]),1)):x("",!0)])):x("",!0),e("div",null,[e("h1",wt,d(t(s)("Husband Information")),1),w(R,{for:"husband",modelValue:r.value.husbandInformation,"onUpdate:modelValue":c[1]||(c[1]=p=>r.value.husbandInformation=p),suggestions:M.value,"onUpdate:suggestions":c[2]||(c[2]=p=>M.value=p),branchId:r.value.branchId,errors:b.value},null,8,["modelValue","suggestions","branchId","errors"])]),e("div",yt,[e("h1",xt,d(t(s)("Wife Information")),1),w(R,{for:"wife",modelValue:r.value.wifeInformation,"onUpdate:modelValue":c[3]||(c[3]=p=>r.value.wifeInformation=p),suggestions:M.value,"onUpdate:suggestions":c[4]||(c[4]=p=>M.value=p),branchId:r.value.branchId,errors:b.value},null,8,["modelValue","suggestions","branchId","errors"])]),e("div",Vt,[e("div",Mt,[e("span",$t,d(t(s)("Phone Number")),1),I(e("input",{"onUpdate:modelValue":c[5]||(c[5]=p=>r.value.phoneNumber=p),"data-maska":"+0","data-maska-tokens":"0:[0-9]:multiple",size:"1",dir:"ltr",class:V(["flex-1 ltr:rounded-r rtl:rounded-l border border-gray-300 p-1 focus:border-blue-500",{"!border-red-500":b.value.hasOwnProperty("phoneNumber")}])},null,2),[[N,r.value.phoneNumber],[C]]),b.value.hasOwnProperty("phoneNumber")?(f(),v("p",kt,d(b.value.phoneNumber[0]),1)):x("",!0)]),e("div",It,[e("span",Dt,d(t(s)("Relation Degree")),1),w(t(P),{modelValue:r.value.relationDegree,"onUpdate:modelValue":c[6]||(c[6]=p=>r.value.relationDegree=p),options:M.value.filter(p=>p.type==="relationDegree"),"value-prop":"content","track-by":"content",label:"content",searchable:!0,"create-option":t(a)("Suggestion.create"),"on-create":p=>S("relationDegree",p.content),class:V(["min-h-[34px] flex-1 border border-gray-300 ltr:!rounded-r rtl:!rounded-l",{"!border-red-500":b.value.hasOwnProperty("relationDegree")}])},null,8,["modelValue","options","create-option","on-create","class"]),b.value.hasOwnProperty("relationDegree")?(f(),v("p",Ct,d(b.value.relationDegree[0]),1)):x("",!0)]),e("div",Et,[e("span",Ut,d(t(s)("Receipt No.")),1),I(e("input",{"onUpdate:modelValue":c[7]||(c[7]=p=>r.value.receiptNumber=p),"data-maska":"0","data-maska-tokens":"0:[0-9]:multiple",size:"1",class:V(["flex-1 ltr:rounded-r rtl:rounded-l border border-gray-300 p-1 focus:border-blue-500",{"!border-red-500":b.value.hasOwnProperty("receiptNumber")}])},null,2),[[N,r.value.receiptNumber],[C]]),b.value.hasOwnProperty("receiptNumber")?(f(),v("p",Nt,d(b.value.receiptNumber[0]),1)):x("",!0)])])]),Ht,e("div",null,[e("h1",St,d(t(s)("Medical History and Blood Diseases")),1),w(mt,{husband:r.value.husbandMedicalHistory,"onUpdate:husband":c[8]||(c[8]=p=>r.value.husbandMedicalHistory=p),wife:r.value.wifeMedicalHistory,"onUpdate:wife":c[9]||(c[9]=p=>r.value.wifeMedicalHistory=p)},null,8,["husband","wife"])])]),e("footer",zt,[e("div",Lt,[e("button",{class:"ltr:mr-auto rtl:ml-auto btn-blue",disabled:_.value,onClick:m},[w(le,{"is-loading":_.value},{default:T(()=>[O(d(t(s)("Save")),1)]),_:1},8,["is-loading"])],8,Pt),w(de,{"branch-id":r.value.branchId,ref_key:"printToggles",ref:y},null,8,["branch-id"])])])])]),_:1})}}});export{Qt as default};
