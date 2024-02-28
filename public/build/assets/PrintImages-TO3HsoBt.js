import{d as M,e as b,x as B,o as e,c as s,a as _,Q as C,r as z,U as I,w as f,k as $,b as t,g as i,R as A,i as a,F as x,a1 as P,h,t as V,a2 as L,a3 as j,T as D,Y as S,$ as F}from"./main-BgbWFIXK.js";import{M as N}from"./Master-Bb3753-s.js";import{_ as T}from"./Paginator.vue_vue_type_script_setup_true_lang-CkZcUYNX.js";import{u as U}from"./urlQueryManager-CZwFgJ7t.js";import{_ as Q}from"./BranchFilter.vue_vue_type_script_setup_true_lang-Cg0zFa3A.js";import{A as E}from"./ActivityLogSidebar-DZ3mPV78.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./multiselect-DeMhawmc.js";const q={class:"flex flex-wrap items-center gap-2 ms-auto"},R=M({__name:"PrintImagesFilter",emits:["change"],setup(H,{emit:p}){const u=p,v=new URLSearchParams(location.search),r=b("");B(()=>{g()});const g=()=>{r.value=v.get("branchId")??""},l=()=>{const m=`branchId=${r.value}&page=1`;u("change",m)};return(m,c)=>(e(),s("div",q,[_(Q,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=n=>r.value=n),onChange:l},null,8,["modelValue"])]))}}),W={class:"mb-5 flex items-start gap-1"},Y=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"h-4 w-4"},[t("path",{d:"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"})],-1),G=t("span",{class:"whitespace-nowrap font-semibold"},"Create New Print Template",-1),J={class:"pe-1 h-[calc(100vh-15.7rem)] overflow-y-auto"},K={class:"w-full"},O={class:"sticky top-0 z-10"},X=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Logo",-1),Z=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Header",-1),tt=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Footer",-1),et=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Watermark",-1),st=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Departments",-1),ot=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Default",-1),at=t("th",{class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Branch",-1),rt=t("th",{class:"bg-gray-600 p-2 text-center font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},"Active",-1),nt={key:0,class:"bg-gray-600 p-2 font-semibold text-white first-of-type:rounded-ss last-of-type:rounded-se"},it={class:"transition even:bg-gray-100"},lt={class:"border border-gray-200 px-2 py-1"},ct={class:"flex justify-center"},dt=["href"],ht=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},[t("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})],-1),_t=[ht],pt={class:"border border-gray-200 px-2 py-1"},ut={class:"flex justify-center"},gt=["href"],mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},[t("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})],-1),wt=[mt],ft={class:"border border-gray-200 px-2 py-1"},vt={class:"flex justify-center"},yt=["href"],xt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},[t("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})],-1),bt=[xt],kt={class:"border border-gray-200 px-2 py-1"},Ct={class:"flex justify-center"},zt=["href"],At=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},[t("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})],-1),Pt=[At],Vt={class:"border border-gray-200 px-2 py-1 text-center"},Mt={class:"flex flex-wrap gap-1"},Bt={class:"inline-block rounded bg-teal-500 px-1 text-xs font-bold text-white"},Ht={class:"border border-gray-200 px-2 py-1 text-center"},It={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},$t=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Lt=[$t],jt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-gray-300",viewBox:"0 0 16 16"},Dt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),St=[Dt],Ft={class:"border border-gray-200 px-2 py-1 text-center"},Nt={class:"border border-gray-200 px-2 py-1 text-center"},Tt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 text-emerald-500",viewBox:"0 0 16 16"},Ut=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Qt=[Ut],Et={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"mx-auto h-7 w-7 rotate-180 text-red-500",viewBox:"0 0 16 16"},qt=t("path",{d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},null,-1),Rt=[qt],Wt={key:0,class:"border border-gray-200 px-2 py-1 text-center"},Yt={class:"flex items-center justify-center gap-3"},Gt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),Jt=["onClick"],Kt=t("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),Ot=[Kt],Xt=["onClick"],Zt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-5 w-5"},[t("path",{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"})],-1),te=[Zt],ce=M({__name:"PrintImages",setup(H){const p=b([]),u=b({}),{updateUrlQuery:v}=U(),{hasPermissionTo:r,hasAnyPermission:g}=D();B(()=>l(location.search));const l=async c=>{const n=await v(c),{data:w}=await C.get(`/api/print-images?${n}`);p.value=w.data,u.value=w.meta},m=async c=>{const{isConfirmed:n}=await S.fire();n&&(await C.delete(`/api/print-images/${c}`),F.fire(),await l(location.search))};return(c,n)=>{const w=z("router-view"),k=z("router-link"),d=I("tip");return e(),s(x,null,[_(w,{onClose:l}),_(N,null,{header:f(()=>[$("Print Images")]),body:f(()=>[t("div",W,[i(r)("PrintImages.create")?(e(),A(k,{key:0,to:"/print-images/create",class:"inline-flex items-center gap-1 btn-blue"},{default:f(()=>[Y,G]),_:1})):a("",!0),_(R,{onChange:l})]),t("section",J,[t("table",K,[t("thead",null,[t("tr",O,[X,Z,tt,et,st,ot,at,rt,i(g)("PrintImages.update","PrintImages.delete","ActivityLog.list")?(e(),s("th",nt)):a("",!0)])]),t("tbody",null,[(e(!0),s(x,null,P(p.value,o=>(e(),s("tr",it,[t("td",lt,[t("div",ct,[o.logoPath?h((e(),s("a",{key:0,href:`/storage/${o.logoPath}`,target:"_blank",class:""},_t,8,dt)),[[d,"View"]]):a("",!0)])]),t("td",pt,[t("div",ut,[o.headerPath?h((e(),s("a",{key:0,href:`/storage/${o.headerPath}`,target:"_blank",class:""},wt,8,gt)),[[d,"View"]]):a("",!0)])]),t("td",ft,[t("div",vt,[o.footerPath?h((e(),s("a",{key:0,href:`/storage/${o.footerPath}`,target:"_blank",class:""},bt,8,yt)),[[d,"View"]]):a("",!0)])]),t("td",kt,[t("div",Ct,[o.watermarkPath?h((e(),s("a",{key:0,href:`/storage/${o.watermarkPath}`,target:"_blank",class:""},Pt,8,zt)),[[d,"View"]]):a("",!0)])]),t("td",Vt,[t("div",Mt,[(e(!0),s(x,null,P(o.departments,y=>(e(),s("span",Bt,V(y.name),1))),256))])]),t("td",Ht,[o.isDefault?(e(),s("svg",It,Lt)):(e(),s("svg",jt,St))]),t("td",Ft,V(o.branch.name),1),t("td",Nt,[o.isActive?(e(),s("svg",Tt,Qt)):(e(),s("svg",Et,Rt))]),i(g)("PrintImages.update","PrintImages.delete","ActivityLog.list")?(e(),s("td",Wt,[t("div",Yt,[i(r)("PrintImages.update")?h((e(),A(k,{key:0,to:`/print-images/${o.id}/edit`,class:"cursor-pointer text-orange-500"},{default:f(()=>[Gt]),_:2},1032,["to"])),[[d,"Edit"]]):a("",!0),i(r)("PrintImages.delete")?h((e(),s("button",{key:1,onClick:y=>m(o.id),class:"cursor-pointer text-red-500"},Ot,8,Jt)),[[d,"Delete"]]):a("",!0),i(r)("ActivityLog.list")?h((e(),s("button",{key:2,onClick:y=>i(L).emit(i(j).Show,o.id),class:"cursor-pointer text-gray-600"},te,8,Xt)),[[d,"View Activities"]]):a("",!0)])])):a("",!0)]))),256))])])])]),_:1}),_(T,{data:u.value,onChange:n[0]||(n[0]=o=>l(`page=${o}`)),class:"mt-3"},null,8,["data"]),_(E)],64)}}});export{ce as default};
