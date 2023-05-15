import{d as q,e as T,x as se,X as B,an as K,s as re,Q as P,o as l,c as d,b as t,n as U,F,W as Q,i as g,t as w,ao as Y,a8 as oe,V as ae,R as pe,w as X,k as ne,g as e,f as fe,a9 as be,h as V,U as le,a3 as N,Z,y as j,A as te,$ as me,a as M,v as J,ap as he,a4 as H}from"./main-6e47ceb6.js";import{s as ye}from"./multiselect-27b4da8b.js";import{_ as A}from"./CurrencyInput.vue_vue_type_script_setup_true_lang-1a19a39b.js";import{b as ge}from"./toggle-b1a111c5.js";import{I as S}from"./itemType-8f96b3f7.js";import{O as L}from"./orderStatus-e3a3f9a7.js";import{F as E}from"./formMode-f60a729f.js";import{I as W}from"./invoiceStatus-af715b0d.js";const ve=()=>{const f=(a,n)=>b(n)+v(a,n)-I(a,n),b=a=>a.filter(n=>n.status!=="canceled").reduce((n,i)=>n+i.price,0),I=(a,n)=>n.filter(i=>i.status!=="canceled").reduce((i,m)=>i+m.discount,0)+a.discount,v=(a,n)=>n.filter(i=>i.status!=="canceled").reduce((i,m)=>i+m.extraCharges,0)+a.extraCharges;return{total:f,subtotal:b,totalDiscount:I,totalExtraCharges:v,totalPayments:a=>a.reduce((n,i)=>n+i.amount,0)}},_e={key:0,class:"fixed inset-0 bg-black/80 flex items-center justify-center select-none z-[100]"},xe={class:"w-[90rem] bg-white rounded overflow-hidden"},we={class:"bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-t flex items-center overflow-x-auto"},Ce=["onClick"],ke={class:"p-3 flex flex-wrap max-h-[calc(100vh-15rem)] overflow-y-auto"},$e=["onClick"],Se=q({__name:"QuickAddModal",props:{branchId:null},emits:["select"],setup(f,{emit:b}){const I=f,v=T(!1),c=T([]),a=T([]),n=T(""),i=T([]),m=T([]);se(()=>{B.on(K.Show,async()=>{v.value=!0,await _(),await z(),k("all")})}),re(()=>B.off(K.Show));const _=async()=>{const{data:h}=await P.get(`/api/departments/list?branchId=${I.branchId}`);c.value=h.data},z=async()=>{const{data:h}=await P.get(`/api/quick-add-items/list?branchId=${I.branchId}`);a.value=h.data},k=(h,$=null)=>{h==="all"?(n.value="all",i.value=a.value):h==="tests"?(n.value=$.name,i.value=a.value.filter(u=>u.item.departmentId===$.id)):h==="packages"?(n.value="packages",i.value=a.value.filter(u=>u.itemType===S.Package)):h==="services"&&(n.value="services",i.value=a.value.filter(u=>u.itemType===S.Service))},y=h=>{if(h.isSelected=!h.isSelected,h.isSelected)m.value.push(h);else{const $=m.value.findIndex(u=>u.id===h.id&&u.type===h.type);m.value.splice($,1)}},R=()=>{b("select",m.value),O()},O=()=>{m.value=[],v.value=!1};return(h,$)=>v.value?(l(),d("div",_e,[t("div",xe,[t("header",we,[t("span",{class:U(["transition p-5 font-semibold text-lg border-b-4 border-transparent cursor-pointer hover:border-gray-600",{"!border-red-500":n.value==="all"}]),onClick:$[0]||($[0]=u=>k("all"))},"All",2),(l(!0),d(F,null,Q(c.value,u=>(l(),d("span",{class:U(["transition p-5 font-semibold text-lg border-b-4 border-transparent cursor-pointer hover:border-gray-600 whitespace-nowrap",{"!border-red-500":n.value===u.name}]),onClick:G=>k("tests",u)},w(u.name.capitalize()),11,Ce))),256)),t("span",{class:U(["transition p-5 font-semibold text-lg border-b-4 border-transparent cursor-pointer hover:border-gray-600",{"!border-red-500":n.value==="packages"}]),onClick:$[1]||($[1]=u=>k("packages"))},"Packages",2),t("span",{class:U(["transition p-5 font-semibold text-lg border-b-4 border-transparent cursor-pointer hover:border-gray-600",{"!border-red-500":n.value==="services"}]),onClick:$[2]||($[2]=u=>k("services"))},"Services",2)]),t("main",ke,[(l(!0),d(F,null,Q(i.value,u=>(l(),d("span",{onClick:G=>y(u),class:U(["transition px-2 py-1 rounded bg-blue-500 text-white ml-2 my-1 cursor-pointer hover:bg-blue-600",{"bg-teal-500 hover:bg-teal-600":u.isSelected}])},w(u.item.shortForm??u.item.name),11,$e))),256))]),t("footer",{class:"flex items-center px-5 py-3 rounded-b bg-gray-100 border-t border-gray-300"},[t("button",{class:"btn-blue mr-2",onClick:R},"Save"),t("button",{class:"btn-gray",onClick:O},"Cancel")])])])):g("",!0)}});var D=(f=>(f.Ordered="ordered",f.Canceled="canceled",f))(D||{});const Ie=["onSubmit"],Ve={class:"w-full"},Le={class:"border border-transparent"},Te={class:"sticky top-0 z-10 text-left"},Pe=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Test Name",-1),Me=t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Status",-1),ze={key:0,class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},Oe={class:"py-1 px-2 border border-gray-200"},Ee={class:"py-1 px-2 border border-gray-200"},Ue={key:0,class:"py-1 px-2 border border-gray-200"},De=["onClick"],Fe=t("path",{d:"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z"},null,-1),Be=[Fe],Ae=["onClick"],Ne=t("path",{d:"M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"},null,-1),Qe=[Ne],Re=["onClick"],je=t("path",{d:"M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"},null,-1),He=[je],We=t("button",{class:"btn-blue mr-2",form:"ModalForm"},"Save",-1),Xe=q({__name:"InvoicePackageModal",emits:["save","close"],setup(f,{emit:b}){const I=T(!1),v=T({}),{hasPermissionTo:c}=le();se(()=>{B.on(Y.Show,_=>{v.value=oe.cloneDeep(_),I.value=!0})}),re(()=>B.off(Y.Show));const a=async _=>{if(_.id){const{isConfirmed:z}=await N.fire();if(!z)return;await P.post("/api/orders/cancel",{orders:[_]}),Z.fire()}_.status=L.Canceled},n=async _=>{if(_.id){const{isConfirmed:z}=await N.fire();if(!z)return;const{data:k}=await P.post(`/api/orders/${_.id}/reorder`);_.status=k.data.status,Z.fire()}else _.status=L.Pending},i=async()=>{b("save",v.value),m()},m=()=>{I.value=!1,b("close")};return(_,z)=>{const k=ae("tip");return I.value?(l(),pe(be,{key:0},{header:X(()=>[ne(w(v.value.name)+" - Package Orders",1)]),body:X(()=>[t("form",{id:"ModalForm",onSubmit:fe(i,["prevent","stop"]),class:"pr-1 max-h-96 overflow-y-auto"},[t("table",Ve,[t("thead",Le,[t("tr",Te,[Pe,Me,v.value.status===e(D).Ordered?(l(),d("th",ze)):g("",!0)])]),t("tbody",null,[(l(!0),d(F,null,Q(v.value.orders,(y,R)=>(l(),d("tr",{class:U(["transition even:bg-gray-100",{"!bg-red-500 !text-white":y.status===e(L).Canceled}])},[t("td",Oe,w(y.test.shortForm),1),t("td",Ee,w(y.status),1),v.value.status===e(D).Ordered?(l(),d("td",Ue,[![e(L).Released,e(L).Canceled].includes(y.status)&&e(c)("Order.cancel")?V((l(),d("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"w-5 h-5 text-red-500 cursor-pointer mx-auto",onClick:O=>a(y)},Be,8,De)),[[k,"Cancel"]]):g("",!0),!y.id&&y.status===e(L).Canceled?V((l(),d("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5 -scale-x-100 text-white cursor-pointer mx-auto",onClick:O=>n(y)},Qe,8,Ae)),[[k,"Reorder"]]):g("",!0),y.id&&y.status===e(L).Canceled&&e(c)("Order.reorder")?V((l(),d("svg",{key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5 -scale-x-100 text-white cursor-pointer mx-auto",onClick:O=>n(y)},He,8,Re)),[[k,"Reorder"]]):g("",!0)])):g("",!0)],2))),256))])])],40,Ie)]),footer:X(()=>[We,t("button",{onClick:m,class:"btn-gray"},"Cancel")]),_:1})):g("",!0)}}}),Ze={key:0,class:"flex items-center mt-2"},Ge={class:"w-full flex items-center justify-between"},Je={class:"bg-teal-500 text-white rounded text-sm px-2"},Ke={key:1,class:"flex flex-wrap items-center mt-3 mb-2 select-none"},Ye=["onClick"],qe={key:2,class:"p-2 rounded bg-red-50 text-red-500 border-l-4 border-red-500"},et={key:3},tt={class:"pr-1 max-h-[calc(100vh-34rem)] overflow-y-auto"},st={class:"w-full"},rt=t("thead",{class:"border border-transparent"},[t("tr",{class:"sticky top-0 z-10 text-left"},[t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Item"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Price"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Discount"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Extra Charges"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"},"Notes"),t("th",{class:"p-2 bg-gray-600 text-white font-semibold first-of-type:rounded-tl last-of-type:rounded-tr"})])],-1),ot={class:"py-1 px-2 border border-gray-200 truncate max-w-[20rem]"},at=["onClick"],nt={key:1},lt={class:"py-1 px-2 border border-gray-200"},dt={class:"w-32 py-1 px-2 border border-gray-200"},it={class:"w-32 py-1 px-2 border border-gray-200"},ct={class:"py-1 px-2 border border-gray-200"},ut=["onUpdate:modelValue"],pt={class:"py-1 px-2 border border-gray-200"},ft=["onClick"],bt=t("path",{d:"M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z"},null,-1),mt=[bt],ht=["onClick"],yt=t("path",{d:"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z"},null,-1),gt=[yt],vt=["onClick"],_t=t("path",{d:"M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"},null,-1),xt=[_t],wt={class:"grid grid-cols-3 gap-2 mt-5"},Ct={class:"flex flex-wrap items-start"},kt=t("span",{class:"w-20 p-1 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Discount",-1),$t={class:"flex flex-wrap items-start"},St=t("span",{class:"w-28 p-1 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Extra Charges",-1),It={class:"flex flex-wrap items-start"},Vt=t("span",{class:"p-1 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Notes",-1),Lt={key:0,class:"flex flex-wrap items-start"},Tt=t("span",{class:"w-20 p-1 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Closed",-1),Pt={key:1,class:"flex flex-wrap items-start"},Mt=t("span",{class:"w-28 p-1 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Paid Amount",-1),zt={key:2,class:"flex flex-wrap items-start"},Ot=t("span",{class:"p-1 border border-gray-300 border-r-0 rounded-l bg-gray-100"},"Notes",-1),Et=t("hr",{class:"border border-gray-200 border-dashed mt-5 mb-3"},null,-1),Ut={class:"flex justify-between"},Ht=q({__name:"Invoice",props:{branchId:null,priceList:null,invoice:null,invoiceItems:null,payment:null,errors:null,mode:null},setup(f){const b=f,I=T([]),v=T(null),c=j(()=>b.invoice),a=j(()=>b.invoiceItems),n=j(()=>b.payment),i=ve(),{hasPermissionTo:m}=le(),_=j(()=>I.value.filter(o=>!k(o))),z=async()=>{const{data:o}=await P.get(`/api/tests/list?branchId=${b.branchId}`),{data:r}=await P.get(`/api/packages/list?branchId=${b.branchId}`),{data:p}=await P.get(`/api/services/list?branchId=${b.branchId}`);o.data.forEach(s=>s.type=S.Test),r.data.forEach(s=>s.type=S.Package),p.data.forEach(s=>s.type=S.Service),I.value=[...o.data,...r.data,...p.data].sort((s,x)=>x.clickCount-s.clickCount)},k=o=>!!a.value.find(r=>r.itemId===o.id&&r.itemType===o.type&&r.status===D.Ordered),y=async o=>{o.notes&&he.fire({html:`<pre class="font-sans">${o.notes}</pre>`});const r=oe.cloneDeep(o);if(v.value.clear(),!await h(r))return;const s=b.priceList.priceListItems.find(x=>x.itemId===r.id&&x.itemType===r.type);s?a.value.push({itemId:r.id,itemType:r.type,name:r.shortForm??r.name,price:s.price,discount:s.discount,extraCharges:0,notes:"",status:"ordered",orders:O(r)}):H.fire({icon:"error",title:"Price has not been defined for selected item."}),ie(r)},R=o=>{const r=a.value.findIndex(p=>p.itemType===S.Package&&p.itemId===o.itemId);a.value.splice(r,1,o)},O=o=>{if(o.type===S.Service)return[];if(o.type===S.Test)return[{testId:o.id,status:L.Pending,test:o}];if(o.type===S.Package){const r=[];return o.tests.forEach(p=>r.push({testId:p.id,status:L.Pending,test:p})),r}},h=async o=>{if(k(o)){H.fire({icon:"error",title:`${o.name} already added.`});return}const r=O(o),s=a.value.flatMap(x=>x.orders).filter(x=>r.some(C=>x.testId===C.testId&&x.status!==L.Canceled));if(s.length===0)return!0;if(o.type===S.Test)return H.fire({icon:"error",title:"Test already exists within a package."}),!1;{const{isConfirmed:x}=await N.fire({title:"Duplicate tests detected!",html:`
          <p>${s.flatMap(C=>C.test.shortForm).join(", ")}</p>
          <strong>If you proceed those tests will be execluded from package.</strong>
        `});return x?(o.tests=o.tests.filter(C=>s.every(ue=>C.id!==ue.testId)),!0):!1}},$=o=>a.value.splice(o,1),u=async(o,r)=>{const{isConfirmed:p}=await N.fire();if(!p)return;const{data:s}=await P.post(`/api/invoice-items/${o.id}/cancel`);a.value.splice(r,1,s.data),Z.fire()},G=async(o,r)=>{const{isConfirmed:p}=await N.fire();if(!p)return;const{data:s}=await P.post(`/api/invoice-items/${o.id}/reorder`);a.value.splice(r,1,s.data),Z.fire()},de=o=>o.forEach(r=>{r.item.type=r.itemType,y(r.item)}),ie=async o=>{await P.post(`/api/${o.type}s/${o.id}/click`)},ce=()=>{a.value.forEach(o=>{const r=b.priceList.priceListItems.find(p=>p.itemId===o.itemId&&p.itemType===o.itemType);r?(o.price=r.price,o.discount=o.discount>0?o.discount:r.discount):(H.fire({icon:"error",title:"Price has not been defined for some selected items."}),o.price=null,o.discount=0)})},ee=()=>{b.mode!==E.Edit&&(c.value.status===W.Closed?n.value.amount=i.total(c.value,a.value):n.value.amount=0)};return te(()=>b.priceList.id,()=>{ce()}),te(()=>[a.value,c.value],()=>{setTimeout(ee,10)},{deep:!0}),me(()=>z()),(o,r)=>{const p=ae("tip");return l(),d(F,null,[t("div",null,[f.mode===e(E).Create||f.mode===e(E).Edit&&e(m)("Invoice.addItems")?(l(),d("div",Ze,[M(e(ye),{options:e(_),searchable:!0,placeholder:"Select item to add","value-prop":"name","track-by":"searchableForm",label:"name",object:!0,class:"flex-1 !rounded-l border border-gray-300 min-h-[34px]",ref_key:"multiselectInstance",ref:v,onSelect:y},{option:X(({option:s})=>[t("div",Ge,[t("span",null,w(s.type===e(S).Test?s.shortForm:s.name),1),t("span",Je,w(s.type),1)])]),_:1},8,["options"]),t("span",{class:"cursor-pointer transition p-1 px-4 border border-gray-300 border-l-0 rounded-r hover:text-white hover:bg-blue-500 hover:border-transparent",onClick:r[0]||(r[0]=s=>e(B).emit(e(K).Show))},"Quick Add")])):g("",!0),f.mode===e(E).Create||f.mode===e(E).Edit&&e(m)("Invoice.addItems")?(l(),d("div",Ke,[(l(!0),d(F,null,Q(e(_).slice(0,20),s=>(l(),d("span",{onClick:x=>y(s),class:"transition p-1 mb-1 mr-1 text-xs text-white rounded bg-blue-500 cursor-pointer hover:bg-blue-600"},w(s.type===e(S).Test?s.shortForm:s.name),9,Ye))),256))])):g("",!0),f.errors.hasOwnProperty("invoiceItems")&&e(a).length===0?(l(),d("p",qe,"Select at least one item to continue.")):g("",!0),e(a).length>0?(l(),d("div",et,[t("div",tt,[t("table",st,[rt,t("tbody",null,[(l(!0),d(F,null,Q(e(a),(s,x)=>(l(),d("tr",{class:U(["even:bg-gray-100",{"!bg-red-500 !text-white":s.status===e(D).Canceled}])},[t("td",ot,[s.itemType===e(S).Package&&s.orders.length>0?V((l(),d("span",{key:0,class:"underline cursor-pointer",onClick:C=>e(B).emit(e(Y).Show,s)},[ne(w(s.name),1)],8,at)),[[p,"Open Package"]]):(l(),d("span",nt,w(s.name),1))]),t("td",lt,w(s.price!==null?s.price.toLocaleString():"Undefined"),1),t("td",dt,[M(A,{disabled:!e(m)("Invoice.discount")||s.hasOwnProperty("id"),modelValue:s.discount,"onUpdate:modelValue":C=>s.discount=C,min:0,max:s.price,class:"w-full bg-transparent"},null,8,["disabled","modelValue","onUpdate:modelValue","max"])]),t("td",it,[M(A,{modelValue:s.extraCharges,"onUpdate:modelValue":C=>s.extraCharges=C,min:0,class:"w-full bg-transparent"},null,8,["modelValue","onUpdate:modelValue"])]),t("td",ct,[V(t("input",{type:"text","onUpdate:modelValue":C=>s.notes=C,class:"w-full bg-transparent"},null,8,ut),[[J,s.notes]])]),t("td",pt,[s.id?g("",!0):V((l(),d("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",class:"h-5 w-5 text-red-500 cursor-pointer",onClick:C=>$(x)},mt,8,ft)),[[p,"Remove"]]),s.id&&s.status===e(D).Ordered&&e(m)("Invoice.cancelItems")?V((l(),d("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5 text-red-500 cursor-pointer",onClick:C=>u(s,x)},gt,8,ht)),[[p,"Cancel"]]):g("",!0),s.status===e(D).Canceled&&e(m)("Invoice.reorderItems")?V((l(),d("svg",{key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5 -scale-x-100 text-white cursor-pointer",onClick:C=>G(s,x)},xt,8,vt)),[[p,"Reorder"]]):g("",!0)])],2))),256))])])]),t("div",wt,[t("div",Ct,[kt,M(A,{modelValue:e(c).discount,"onUpdate:modelValue":r[1]||(r[1]=s=>e(c).discount=s),size:"1",disabled:!e(m)("Invoice.discount")||f.mode===e(E).Edit,min:0,max:e(i).subtotal(e(a)),class:"flex-1 p-1 rounded-r border border-gray-300 focus:border-blue-500"},null,8,["modelValue","disabled","max"])]),t("div",$t,[St,M(A,{modelValue:e(c).extraCharges,"onUpdate:modelValue":r[2]||(r[2]=s=>e(c).extraCharges=s),size:"1",min:0,class:"flex-1 p-1 rounded-r border border-gray-300 focus:border-blue-500"},null,8,["modelValue"])]),t("div",It,[Vt,V(t("input",{type:"text","onUpdate:modelValue":r[3]||(r[3]=s=>e(c).notes=s),size:"1",class:"flex-1 p-1 rounded-r border border-gray-300 focus:border-blue-500"},null,512),[[J,e(c).notes]])]),f.mode===e(E).Create?(l(),d("div",Lt,[Tt,M(e(ge),{modelValue:e(c).status,"onUpdate:modelValue":r[4]||(r[4]=s=>e(c).status=s),"false-value":e(W).Open,"true-value":e(W).Closed,onChange:ee,class:"flex-1 p-1 rounded-r border border-gray-300 focus:border-blue-500"},null,8,["modelValue","false-value","true-value"])])):g("",!0),f.mode===e(E).Create?(l(),d("div",Pt,[Mt,M(A,{modelValue:e(n).amount,"onUpdate:modelValue":r[5]||(r[5]=s=>e(n).amount=s),size:"1",min:0,max:e(i).total(e(c),e(a)),disabled:e(c).status===e(W).Closed,class:"flex-1 p-1 rounded-r border border-gray-300 focus:border-blue-500"},null,8,["modelValue","max","disabled"])])):g("",!0),f.mode==="create"?(l(),d("div",zt,[Ot,V(t("input",{type:"text","onUpdate:modelValue":r[6]||(r[6]=s=>e(n).notes=s),size:"1",class:"flex-1 p-1 rounded-r border border-gray-300 focus:border-blue-500"},null,512),[[J,e(n).notes]])])):g("",!0)]),Et,t("div",Ut,[t("span",null,"Total: "+w(e(i).total(e(c),e(a)).toLocaleString()),1),t("span",null,"Subtotal: "+w(e(i).subtotal(e(a)).toLocaleString()),1),t("span",null,"Total Discount: "+w(e(i).totalDiscount(e(c),e(a)).toLocaleString()),1),t("span",null,"Paid Amount: "+w(e(n).amount.toLocaleString()),1),t("span",null,"Due Balance: "+w((e(i).total(e(c),e(a))-e(n).amount).toLocaleString()),1)])])):g("",!0)]),M(Se,{branchId:b.branchId,onSelect:de},null,8,["branchId"]),M(Xe,{onSave:R})],64)}}});export{Ht as _,ve as u};