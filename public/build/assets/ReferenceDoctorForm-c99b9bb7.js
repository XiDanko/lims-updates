import{d as M,e as u,u as T,x as W,A as v,B as j,o as d,C as O,w as _,k as D,t as c,g as o,b as r,c as i,a as w,n as p,i as n,h as b,v as m,f as q,_ as G,V as H,m as J,l as K,S as Q}from"./main-c1f62c61.js";import{b as X}from"./toggle-b89396fa.js";import{s as V}from"./multiselect-ffe70d49.js";import{F as h}from"./formMode-f60a729f.js";const Y=["onSubmit"],Z={class:"grid grid-cols-2 gap-3"},ee={key:0,class:"flex flex-wrap items-center"},re=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Branch",-1),ae={key:0,class:"ml-36 w-full text-red-500 text-sm"},se={class:"flex flex-wrap items-start"},te=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Reference Center",-1),oe={class:"flex flex-wrap items-start"},le=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Name",-1),de={key:0,class:"w-full ml-36 text-red-500 text-sm"},ne={class:"flex flex-wrap items-start"},ue=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Phone Number",-1),ce={key:0,class:"w-full ml-36 text-red-500 text-sm"},ie={class:"flex flex-wrap items-start"},pe=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Email",-1),be={key:0,class:"w-full ml-36 text-red-500 text-sm"},me=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Address",-1),fe={class:"flex flex-wrap items-start"},ve=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Ratio",-1),he=r("span",{class:"w-16 p-2 border border-gray-300 border-l-0 rounded-r bg-gray-100 text-center"},"%",-1),ye={key:0,class:"w-full ml-36 text-red-500 text-sm"},ge={class:"flex flex-wrap items-start"},_e=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Price List",-1),we={class:"col-span-2 flex flex-wrap items-start"},xe=r("span",{class:"w-full p-1 font-semibold"},"Notes",-1),Ve=["disabled"],Oe=M({__name:"ReferenceDoctorForm",emits:["close"],setup(ke,{emit:U}){const k=J(),B=K(),e=u({}),y=u(h.Create),g=u(!1),t=u({}),I=u([]),C=u([]),f=T().user.branches;W(()=>{f.length===1&&(e.value.branchId=f[0].id,x()),k.path.endsWith("/edit")&&(y.value=h.Edit,L(k.params.id))});const R=async()=>{const{data:l}=await v.get(`/api/price-lists/list?branchId=${e.value.branchId}`);I.value=l.data},S=async()=>{const{data:l}=await v.get(`/api/reference-centers/list?branchId=${e.value.branchId}`);C.value=l.data},L=async l=>{const{data:a}=await v.get(`/api/reference-doctors/${l}`);e.value=a.data,x()},x=()=>{R(),S()},z=()=>{e.value.priceListId=null,e.value.referenceCenterId=null},A=async()=>{g.value=!0;try{y.value===h.Create?await $():await E(),Q.fire()}catch(l){t.value=l.response.data.errors??{}}g.value=!1},$=async()=>{await v.post("/api/reference-doctors",e.value),F()},E=async()=>{await v.patch(`/api/reference-doctors/${e.value.id}`,e.value),N()},F=()=>{e.value={branchId:e.value.branchId},t.value=[]},N=()=>{U("close"),B.back()};return(l,a)=>{const P=j("maska");return d(),O(H,{"modal-class":"!w-[60rem]"},{header:_(()=>[D(c(y.value===o(h).Create?"Create New Reference Doctor":"Edit Reference Doctor"),1)]),body:_(()=>[r("form",{id:"form",onSubmit:q(A,["prevent","stop"])},[r("div",Z,[o(f).length>1?(d(),i("div",ee,[re,w(o(V),{modelValue:e.value.branchId,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.branchId=s),options:o(f),onSelect:x,onChange:z,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:p(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":t.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),t.value.hasOwnProperty("branchId")?(d(),i("p",ae,c(t.value.branchId[0]),1)):n("",!0)])):n("",!0),r("div",se,[te,w(o(V),{modelValue:e.value.referenceCenterId,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.referenceCenterId=s),options:C.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),r("div",oe,[le,b(r("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>e.value.name=s),size:"1",class:p(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("name")}])},null,2),[[m,e.value.name]]),t.value.hasOwnProperty("name")?(d(),i("p",de,c(t.value.name[0]),1)):n("",!0)]),r("div",ne,[ue,b(r("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>e.value.phoneNumber=s),"data-maska":"+0","data-maska-tokens":"0:[0-9]:multiple",size:"1",class:p(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("phoneNumber")}])},null,2),[[m,e.value.phoneNumber],[P]]),t.value.hasOwnProperty("phoneNumber")?(d(),i("p",ce,c(t.value.phoneNumber[0]),1)):n("",!0)]),r("div",ie,[pe,b(r("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>e.value.email=s),size:"1",class:p(["flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("email")}])},null,2),[[m,e.value.email]]),t.value.hasOwnProperty("email")?(d(),i("p",be,c(t.value.email[0]),1)):n("",!0)]),r("div",{class:p(["flex flex-wrap items-start",{"col-span-2":o(f).length===1}])},[me,b(r("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>e.value.address=s),size:"1",class:"flex-1 p-2 border border-gray-300 rounded-r focus:border-blue-500"},null,512),[[m,e.value.address]])],2),r("div",fe,[ve,b(r("input",{"onUpdate:modelValue":a[6]||(a[6]=s=>e.value.ratio=s),size:"1","data-maska":"###",class:p(["flex-1 p-2 border border-gray-300 focus:border-blue-500",{"!border-red-500":t.value.hasOwnProperty("ratio")}])},null,2),[[m,e.value.ratio],[P]]),he,t.value.hasOwnProperty("ratio")?(d(),i("p",ye,c(t.value.ratio[0]),1)):n("",!0)]),r("div",ge,[_e,w(o(V),{modelValue:e.value.priceListId,"onUpdate:modelValue":a[7]||(a[7]=s=>e.value.priceListId=s),options:I.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),r("div",we,[xe,b(r("textarea",{"onUpdate:modelValue":a[8]||(a[8]=s=>e.value.notes=s),class:"flex-1 p-2 border border-gray-300 rounded focus:border-blue-500"},null,512),[[m,e.value.notes]])])])],40,Y)]),footer:_(()=>[r("button",{class:"btn-blue mr-2",disabled:g.value,form:"form"},[w(G,{"is-loading":g.value},{default:_(()=>[D("Save")]),_:1},8,["is-loading"])],8,Ve),r("button",{onClick:N,class:"btn-gray"},"Cancel"),y.value===o(h).Edit?(d(),O(o(X),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":a[9]||(a[9]=s=>e.value.isActive=s),class:"ml-auto toggle:off:red"},null,8,["modelValue"])):n("",!0)]),_:1})}}});export{Oe as default};
