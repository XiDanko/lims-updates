import{d as _,g as v,y as x,o as a,c as s,b as t,n as b,t as l,k as f,F as g,a2 as w,m as i,j as C,ag as j}from"./main-0c5e983d.js";const P={key:0,class:"flex select-none items-center justify-center rounded bg-white shadow md:justify-between md:px-4"},S={class:"text-trueGray-500"},B={key:0,class:"mx-1 inline-block cursor-pointer border-t-2 border-transparent p-1 text-center font-bold md:mx-2 md:p-2"},N=["onClick"],V={key:1,class:"mx-1 inline-block border-t-2 border-transparent p-1 text-center font-bold text-trueGray-300 md:mx-2 md:p-2"},$={class:"hidden md:block"},D={key:1,class:"flex select-none items-center justify-center rounded bg-gray-200 shadow h-[2.7rem] md:justify-between md:px-4"},z=_({__name:"Paginator",props:{data:{}},emits:["change"],setup(h,{emit:k}){const p=h,d=v(1),r=x(()=>p.data?.current_page),n=x(()=>p.data?.last_page),u=v(2),y=e=>{if(e===1||e===n.value)return!1;if(r.value+u.value>=e&&r.value-u.value<=e)return!0},m=e=>{k("change",e)};return(e,c)=>n.value>1?(a(),s("div",P,[t("div",S,[t("span",{class:b(["mx-1 inline-block cursor-pointer border-t-2 border-transparent p-1 text-center font-bold hover:text-gray-800 md:mx-2 md:p-2",{"text-blue-500 !border-blue-500":r.value===d.value}]),onClick:c[0]||(c[0]=o=>m(d.value))},l(d.value),3),d.value+(u.value+1)<r.value?(a(),s("span",B,"... ")):f("",!0),(a(!0),s(g,null,w(n.value,o=>C((a(),s("span",{class:b(["mx-1 inline-block cursor-pointer border-t-2 border-transparent p-1 text-center font-bold hover:text-gray-800 md:mx-2 md:p-2",{"text-blue-500 !border-blue-500":r.value===o}]),onClick:F=>m(o)},l(o),11,N)),[[j,y(o)]])),256)),n.value-(u.value+1)>r.value?(a(),s("span",V,"... ")):f("",!0),t("span",{class:b(["mx-1 inline-block cursor-pointer border-t-2 border-transparent p-1 text-center font-bold hover:text-gray-800 md:mx-2 md:p-2",{"text-blue-500 !border-blue-500":r.value===n.value}]),onClick:c[1]||(c[1]=o=>m(n.value))},l(n.value),3)]),t("div",$,[t("span",null,[i("Showing "),t("b",null,l(e.data.from),1),i(" to "),t("b",null,l(e.data.to),1),i(" of "),t("b",null,l(e.data.total),1),i(" results")])])])):(a(),s("div",D))}});export{z as _};