import{d as B,e as u,u as M,x as D,Q as b,U as E,o as l,R as k,w as i,k as g,t as f,g as h,b as t,c as y,a as V,i as c,h as x,v as C,n as m,f as F,_ as R,a4 as z,m as X,l as L,$ as Q}from"./main-BgbWFIXK.js";import{b as W}from"./toggle-CP_W0i88.js";import{F as p}from"./formMode-Bz--3d4P.js";import{_ as Z}from"./BranchSelect.vue_vue_type_script_setup_true_lang-ChkyAztq.js";import"./multiselect-DeMhawmc.js";const j={key:0,class:"relative"},q={class:"relative"},G={key:0,class:"text-sm text-red-500"},H={class:"relative"},J={key:0,class:"text-sm text-red-500"},K=["disabled"],le=B({__name:"SampleTypeForm",emits:["close"],setup(Y,{emit:S}){const T=S,_=X(),I=L(),e=u({}),v=M().user.branches,r=u(p.Create),n=u(!1),a=u({});D(()=>{v.length===1&&(e.value.branchId=v[0].id),_.path.endsWith("/edit")&&(r.value=p.Edit,N(_.params.id))});const N=async d=>{const{data:s}=await b.get(`/api/sample-types/${d}`);e.value=s.data},O=async()=>{n.value=!0;try{r.value===p.Create?await P():await $(),a.value={},Q.fire()}catch(d){a.value=d.response.data.errors??{}}n.value=!1},P=async()=>{await b.post("/api/sample-types",e.value),U()},$=async()=>{await b.patch(`/api/sample-types/${e.value.id}`,e.value),w()},U=()=>{e.value={branchId:e.value.branchId},a.value=[]},w=()=>{T("close"),I.back()};return(d,s)=>{const A=E("maska");return l(),k(z,null,{header:i(()=>[g(f(r.value===h(p).Create?"Create New Sample Type":"Edit Sample Type"),1)]),body:i(()=>[t("form",{id:"form",onSubmit:F(O,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[h(v).length>1?(l(),y("div",j,[V(Z,{modelValue:e.value.branchId,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value.branchId=o),error:a.value.branchId},null,8,["modelValue","error"])])):c("",!0),t("div",q,[x(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.name=o),class:m(["input peer",{"border-red-500":a.value.hasOwnProperty("name")}])},null,2),[[C,e.value.name]]),t("label",{class:m(["label",{"border-red-500":a.value.hasOwnProperty("name")}])},"Name",2),a.value.hasOwnProperty("name")?(l(),y("p",G,f(a.value.name[0]),1)):c("",!0)]),t("div",H,[x(t("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.value.code=o),"data-maska":"X","data-maska-tokens":"X:[0-9a-zA-Z]",class:m(["input peer",{"border-red-500":a.value.hasOwnProperty("code")}])},null,2),[[C,e.value.code],[A]]),t("label",{class:m(["label",{"border-red-500":a.value.hasOwnProperty("code")}])},"Code",2),a.value.hasOwnProperty("code")?(l(),y("p",J,f(a.value.code[0]),1)):c("",!0)])],32)]),footer:i(()=>[t("button",{class:"me-2 btn-blue",disabled:n.value,form:"form"},[V(R,{"is-loading":n.value},{default:i(()=>[g("Save")]),_:1},8,["is-loading"])],8,K),t("button",{onClick:w,class:"btn-gray"},"Cancel"),r.value==="edit"?(l(),k(h(W),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":s[3]||(s[3]=o=>e.value.isActive=o),class:"toggle:off:red ms-auto"},null,8,["modelValue"])):c("",!0)]),_:1})}}});export{le as default};
