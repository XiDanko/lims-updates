import{d as _,e as v,y as h,g as e,o as a,c as l,b as t,n as p,t as d,i as k,F as w,D as C,k as b,h as P,N as j}from"./main-c1f62c61.js";const N={key:0,class:"bg-white rounded shadow flex justify-center md:justify-between items-center md:px-4 select-none"},S={class:"text-trueGray-500"},B={key:0,class:"inline-block text-center font-bold p-1 mx-1 md:mx-2 md:p-2 cursor-pointer border-t-2 border-transparent"},D=["onClick"],V={key:1,class:"inline-block text-center text-trueGray-300 font-bold p-1 mx-1 md:mx-2 md:p-2 border-t-2 border-transparent"},$={class:"hidden md:block"},F={key:1,class:"bg-gray-200 rounded shadow flex justify-center md:justify-between items-center md:px-4 select-none h-[2.7rem]"},A=_({__name:"Paginator",props:{data:null},emits:["change"],setup(c,{emit:y}){const f=c,i=v(1),r=h(()=>f.data?.current_page),n=h(()=>f.data?.last_page),u=v(2),g=o=>{if(o===1||o===n.value)return!1;if(r.value+u.value>=o&&r.value-u.value<=o)return!0},x=o=>{y("change",o)};return(o,m)=>e(n)>1?(a(),l("div",N,[t("div",S,[t("span",{class:p(["inline-block text-center font-bold p-1 mx-1 md:mx-2 md:p-2 cursor-pointer border-t-2 border-transparent hover:text-gray-800",{"text-blue-500 !border-blue-500":e(r)===i.value}]),onClick:m[0]||(m[0]=s=>x(i.value))},d(i.value),3),i.value+(u.value+1)<e(r)?(a(),l("span",B,"... ")):k("",!0),(a(!0),l(w,null,C(e(n),s=>P((a(),l("span",{class:p(["inline-block text-center font-bold p-1 mx-1 md:mx-2 md:p-2 cursor-pointer border-t-2 border-transparent hover:text-gray-800",{"text-blue-500 !border-blue-500":e(r)===s}]),onClick:G=>x(s)},d(s),11,D)),[[j,g(s)]])),256)),e(n)-(u.value+1)>e(r)?(a(),l("span",V,"... ")):k("",!0),t("span",{class:p(["inline-block text-center font-bold p-1 mx-1 md:mx-2 md:p-2 cursor-pointer border-t-2 border-transparent hover:text-gray-800",{"text-blue-500 !border-blue-500":e(r)===e(n)}]),onClick:m[1]||(m[1]=s=>x(e(n)))},d(e(n)),3)]),t("div",$,[t("span",null,[b("Showing "),t("b",null,d(c.data.from),1),b(" to "),t("b",null,d(c.data.to),1),b(" of "),t("b",null,d(c.data.total),1),b(" results")])])])):(a(),l("div",F))}});export{A as _};
