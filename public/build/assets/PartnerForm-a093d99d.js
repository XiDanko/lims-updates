import{d as W,f as j,e as H,g as m,u as Q,x as q,Q as f,V as G,o as l,R as D,w as x,m as L,t as i,i as t,b as r,c as n,a as c,n as p,k as d,j as b,W as J,v,h as K,_ as X,a5 as Y,a0 as Z}from"./main-0c5e983d.js";import{b as w}from"./toggle-f29ee038.js";import{s as I}from"./multiselect-f0516a60.js";import{F as y}from"./formMode-f60a729f.js";import{P as k}from"./partnerType-65f9f978.js";const ee=["onSubmit"],re={class:"grid grid-cols-2 gap-3"},ae={key:0,class:"col-span-2 flex flex-wrap items-center"},se=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Branch",-1),oe={key:0,class:"ml-36 w-full text-sm text-red-500"},te={class:"flex flex-wrap items-start"},le=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Type",-1),de=["value"],ne=["value"],ue=["value"],ie={key:0,class:"ml-28 w-full text-sm text-red-500"},ce={class:"flex flex-wrap items-start"},pe=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Name",-1),be={key:0,class:"ml-36 w-full text-sm text-red-500"},me={class:"flex flex-wrap items-start"},ve=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Phone Number",-1),fe={key:0,class:"ml-36 w-full text-sm text-red-500"},ye={class:"flex flex-wrap items-start"},ge=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Email",-1),he={key:0,class:"ml-36 w-full text-sm text-red-500"},_e={class:"flex flex-wrap items-start"},xe=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Address",-1),we={class:"flex flex-wrap items-start"},Ve=r("span",{class:"w-36 p-2 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Ratio",-1),Ie=r("span",{class:"w-10 p-2 border border-gray-300 border-l-0 rounded-r bg-gray-100 text-center"},"%",-1),ke={key:0,class:"w-full ml-36 text-red-500 text-sm"},Pe={key:1,class:"flex flex-wrap items-start"},Ce=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Include Discount",-1),Ue={key:2,class:"flex flex-wrap items-start"},Oe=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Include Charges",-1),Ne={class:"flex flex-wrap items-start"},De=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Price List",-1),Le={class:"flex flex-wrap items-start"},Se=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"User",-1),ze={key:0,class:"ml-36 w-full text-sm text-red-500"},Be={class:"flex flex-wrap items-start"},Ee=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Has Register",-1),Re={class:"flex flex-wrap items-start"},$e=r("span",{class:"w-36 rounded-l border border-r-0 border-gray-300 bg-gray-100 p-2"},"Notes",-1),Ae=["disabled"],Qe=W({__name:"PartnerForm",emits:["close"],setup(Me,{emit:S}){const P=j(),z=H(),e=m({}),g=m(y.Create),h=m(!1),o=m({}),C=m([]),U=m([]),_=Q().user.branches;q(()=>{_.length===1&&(e.value.branchId=_[0].id,V()),P.path.endsWith("/edit")&&(g.value=y.Edit,R(P.params.id))});const B=async()=>{const{data:u}=await f.get(`/api/price-lists/list?branchId=${e.value.branchId}`);C.value=u.data},E=async()=>{const{data:u}=await f.get(`/api/users/list?branchId=${e.value.branchId}&isPartner=true`);U.value=u.data},R=async u=>{const{data:a}=await f.get(`/api/partners/${u}`);e.value=a.data,V()},V=()=>{B(),E()},$=()=>{e.value.priceListId=null,e.value.userId=null},A=async()=>{h.value=!0;try{g.value===y.Create?await M():await T(),Z.fire()}catch(u){o.value=u.response.data.errors??{}}h.value=!1},M=async()=>{await f.post("/api/partners",e.value),F()},T=async()=>{await f.patch(`/api/partners/${e.value.id}`,e.value),O()},F=()=>{e.value={branchId:e.value.branchId},o.value=[]},O=()=>{S("close"),z.back()};return(u,a)=>{const N=G("maska");return l(),D(Y,{"modal-class":"!w-[60rem]"},{header:x(()=>[L(i(g.value===t(y).Create?"Create New Partner":"Edit Partner"),1)]),body:x(()=>[r("form",{id:"form",onSubmit:K(A,["prevent","stop"])},[r("div",re,[t(_).length>1?(l(),n("div",ae,[se,c(t(I),{modelValue:e.value.branchId,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.branchId=s),options:t(_),onSelect:V,onChange:$,searchable:!0,"value-prop":"id","track-by":"searchableForm",label:"name","can-clear":!1,"can-deselect":!1,class:p(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":o.value.hasOwnProperty("branchId")}])},null,8,["modelValue","options","class"]),o.value.hasOwnProperty("branchId")?(l(),n("p",oe,i(o.value.branchId[0]),1)):d("",!0)])):d("",!0),r("div",te,[le,b(r("select",{"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.type=s),class:p(["flex-1 rounded-r border border-gray-300 px-2 py-1 h-[42px] focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("type")}])},[r("option",{value:t(k).Center},"Center",8,de),r("option",{value:t(k).Lab},"Lab",8,ne),r("option",{value:t(k).Doctor},"Doctor",8,ue)],2),[[J,e.value.type]]),o.value.hasOwnProperty("type")?(l(),n("p",ie,i(o.value.type[0]),1)):d("",!0)]),r("div",ce,[pe,b(r("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>e.value.name=s),size:"1",class:p(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("name")}])},null,2),[[v,e.value.name]]),o.value.hasOwnProperty("name")?(l(),n("p",be,i(o.value.name[0]),1)):d("",!0)]),r("div",me,[ve,b(r("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>e.value.phoneNumber=s),"data-maska":"+0","data-maska-tokens":"0:[0-9]:multiple",size:"1",class:p(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("phoneNumber")}])},null,2),[[v,e.value.phoneNumber],[N]]),o.value.hasOwnProperty("phoneNumber")?(l(),n("p",fe,i(o.value.phoneNumber[0]),1)):d("",!0)]),r("div",ye,[ge,b(r("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>e.value.email=s),size:"1",class:p(["flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("email")}])},null,2),[[v,e.value.email]]),o.value.hasOwnProperty("email")?(l(),n("p",he,i(o.value.email[0]),1)):d("",!0)]),r("div",_e,[xe,b(r("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>e.value.address=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[v,e.value.address]])]),r("div",we,[Ve,b(r("input",{"onUpdate:modelValue":a[6]||(a[6]=s=>e.value.ratio=s),size:"1","data-maska":"###",class:p(["flex-1 p-2 border border-gray-300 focus:border-blue-500",{"!border-red-500":o.value.hasOwnProperty("ratio")}])},null,2),[[v,e.value.ratio],[N]]),Ie,o.value.hasOwnProperty("ratio")?(l(),n("p",ke,i(o.value.ratio[0]),1)):d("",!0)]),e.value.ratio?(l(),n("div",Pe,[Ce,c(t(w),{modelValue:e.value.isDiscountIncluded,"onUpdate:modelValue":a[7]||(a[7]=s=>e.value.isDiscountIncluded=s),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])])):d("",!0),e.value.ratio?(l(),n("div",Ue,[Oe,c(t(w),{modelValue:e.value.isExtraChargesIncluded,"onUpdate:modelValue":a[8]||(a[8]=s=>e.value.isExtraChargesIncluded=s),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])])):d("",!0),r("div",Ne,[De,c(t(I),{modelValue:e.value.priceListId,"onUpdate:modelValue":a[9]||(a[9]=s=>e.value.priceListId=s),options:C.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name",class:"flex-1 border border-gray-300 !rounded-r"},null,8,["modelValue","options"])]),r("div",Le,[Se,c(t(I),{modelValue:e.value.userId,"onUpdate:modelValue":a[10]||(a[10]=s=>e.value.userId=s),options:U.value,searchable:!0,"value-prop":"id","track-by":"name",label:"name",class:p(["flex-1 border border-gray-300 !rounded-r",{"!border-red-500":o.value.hasOwnProperty("userId")}])},null,8,["modelValue","options","class"]),o.value.hasOwnProperty("userId")?(l(),n("p",ze,i(o.value.userId[0]),1)):d("",!0)]),r("div",Be,[Ee,c(t(w),{modelValue:e.value.hasRegister,"onUpdate:modelValue":a[11]||(a[11]=s=>e.value.hasRegister=s),class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,8,["modelValue"])]),r("div",Re,[$e,b(r("input",{"onUpdate:modelValue":a[12]||(a[12]=s=>e.value.notes=s),size:"1",class:"flex-1 rounded-r border border-gray-300 p-2 focus:border-blue-500"},null,512),[[v,e.value.notes]])])])],40,ee)]),footer:x(()=>[r("button",{class:"mr-2 btn-blue",disabled:h.value,form:"form"},[c(X,{"is-loading":h.value},{default:x(()=>[L("Save")]),_:1},8,["is-loading"])],8,Ae),r("button",{onClick:O,class:"btn-gray"},"Cancel"),g.value===t(y).Edit?(l(),D(t(w),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":a[13]||(a[13]=s=>e.value.isActive=s),class:"toggle:off:red ml-auto"},null,8,["modelValue"])):d("",!0)]),_:1})}}});export{Qe as default};
