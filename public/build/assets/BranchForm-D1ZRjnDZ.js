import{d as A,e as i,x as E,Q as v,U as M,o as u,R as y,w as d,k as w,t as p,g as h,b as t,h as x,v as g,n as m,c as k,i as f,f as D,a as F,_ as R,a4 as T,m as z,l as I,u as L,$ as Q}from"./main-BgbWFIXK.js";import{b as W}from"./toggle-CP_W0i88.js";import{F as r}from"./formMode-Bz--3d4P.js";const j={class:"relative"},q={key:0,class:"text-sm text-red-500"},G={class:"relative"},H={key:0,class:"text-sm text-red-500"},J=["disabled"],ee=A({__name:"BranchForm",emits:["close"],setup(K,{emit:C}){const V=C,b=z(),B=I(),e=i({}),l=i(r.Create),n=i(!1),a=i({});E(()=>{b.path.endsWith("/edit")&&(l.value=r.Edit,N(b.params.id))});const N=async c=>{const{data:s}=await v.get(`/api/branches/${c}`);e.value=s.data},O=async()=>{n.value=!0;try{l.value===r.Create?await P():await S(),a.value={},Q.fire()}catch(c){a.value=c.response.data.errors??{}}n.value=!1},P=async()=>{await v.post("/api/branches",e.value),U()},S=async()=>{await v.patch(`/api/branches/${e.value.id}`,e.value),_()},U=()=>{e.value={},a.value=[]},_=()=>{L().fetchAuthUser(),V("close"),B.back()};return(c,s)=>{const $=M("maska");return u(),y(T,null,{header:d(()=>[w(p(l.value===h(r).Create?"Create New Branch":"Edit Branch"),1)]),body:d(()=>[t("form",{id:"form",onSubmit:D(O,["prevent","stop"]),class:"grid grid-cols-1 gap-4"},[t("div",j,[x(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.value.name=o),class:m(["input peer",{"border-red-500":a.value.hasOwnProperty("name")}])},null,2),[[g,e.value.name]]),t("span",{class:m(["label",{"text-red-500":a.value.hasOwnProperty("name")}])},"Name",2),a.value.hasOwnProperty("name")?(u(),k("p",q,p(a.value.name[0]),1)):f("",!0)]),t("div",G,[x(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.code=o),"data-maska":"##",class:m(["input peer",{"border-red-500":a.value.hasOwnProperty("code")}])},null,2),[[g,e.value.code],[$]]),t("span",{class:m(["label",{"text-red-500":a.value.hasOwnProperty("code")}])},"Code",2),a.value.hasOwnProperty("code")?(u(),k("p",H,p(a.value.code[0]),1)):f("",!0)])],32)]),footer:d(()=>[t("button",{class:"me-2 btn-blue",disabled:n.value,form:"form"},[F(R,{"is-loading":n.value},{default:d(()=>[w("Save")]),_:1},8,["is-loading"])],8,J),t("button",{onClick:_,class:"btn-gray"},"Cancel"),l.value===h(r).Edit?(u(),y(h(W),{key:0,modelValue:e.value.isActive,"onUpdate:modelValue":s[2]||(s[2]=o=>e.value.isActive=o),class:"toggle:off:red ms-auto"},null,8,["modelValue"])):f("",!0)]),_:1})}}});export{ee as default};
