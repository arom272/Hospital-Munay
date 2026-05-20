const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdf-vendor-D1D5NA3e.js","assets/react-vendor-BZp2bWF9.js"])))=>i.map(i=>d[i]);
import{r as w,b as kn,N as Cn,u as Fn,O as ps,d as dt,e as Sn,L as Ea,R as he,f as An,h as Oe,B as Dn}from"./react-vendor-BZp2bWF9.js";import{c as Tn,L as En,U as va,C as ia,H as Ma,D as us,X as Ne,a as Mn,z as Y,M as Pn,S as pt,E as On,b as ut,d as Ge,e as ya,A as Jt,f as In,g as _a,T as Ni,h as vt,i as ki,j as yt,P as ra,k as ja,l as fa,m as mt,n as ms,o as zn,p as xs,F as Je,q as hs,r as Kt,s as Ms,t as Ps,u as qa,v as _n,w as qt,x as Os,y as Ci,B as Fi,G as Ln,I as $n,J as Rn,R as Bn,K as qn,N as Hn,O as Vn,Q as Is,V as Yn,W as Un}from"./ui-vendor-C1ftNjD3.js";import{_ as Zt,E as jt,a as gs}from"./pdf-vendor-D1D5NA3e.js";import{i as Wn,g as Gn,a as Qn,b as Xn,o as Jn,c as Kn,d as Ue,s as Zn,e as er,f as ar,q as wt,h as Nt,j as Qe,k as Ha,u as Va,l as Ya,m as Ua,n as We,r as tr,p as sr,t as ir}from"./firebase-vendor-DqfHxRJm.js";import{F as Si,i as Ai,a as Di,b as Ti,c as Ei}from"./calendar-vendor-2lW9V1yc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();var Mi={exports:{}},kt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=w,rr=Symbol.for("react.element"),lr=Symbol.for("react.fragment"),or=Object.prototype.hasOwnProperty,cr=nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dr={key:!0,ref:!0,__self:!0,__source:!0};function Pi(e,t,s){var i,n={},r=null,l=null;s!==void 0&&(r=""+s),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)or.call(t,i)&&!dr.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:rr,type:e,key:r,ref:l,props:n,_owner:cr.current}}kt.Fragment=lr;kt.jsx=Pi;kt.jsxs=Pi;Mi.exports=kt;var a=Mi.exports,es={},zs=kn;es.createRoot=zs.createRoot,es.hydrateRoot=zs.hydrateRoot;function pr(e={}){const{immediate:t=!1,onNeedRefresh:s,onOfflineReady:i,onRegistered:n,onRegisteredSW:r,onRegisterError:l}=e;let c,d;const h=async(m=!0)=>{await d};async function j(){if("serviceWorker"in navigator){if(c=await Zt(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/sw.js",{scope:"/",type:"classic"})).catch(m=>{l==null||l(m)}),!c)return;c.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),c.addEventListener("installed",m=>{m.isUpdate||i==null||i()}),c.register({immediate:t}).then(m=>{r?r("/sw.js",m):n==null||n(m)}).catch(m=>{l==null||l(m)})}}return d=j(),h}const ur={apiKey:"AIzaSyBWwGg-1xq9tXpNiHHIlAbrHre4KfiSRBU",authDomain:"hospital-munay.firebaseapp.com",projectId:"hospital-munay",storageBucket:"hospital-munay.firebasestorage.app",messagingSenderId:"219046537621",appId:"1:219046537621:web:b43f713778f76a39b82e9c"},fs=Wn(ur),mr=Gn(fs),ue=Qn(fs),et=Xn(fs),Oi=w.createContext(null);function xr({children:e}){const[t,s]=w.useState(null),[i,n]=w.useState(null),[r,l]=w.useState(!0);w.useEffect(()=>Jn(et,async x=>{if(x){s(x);try{const y=await Kn(Ue(ue,"users",x.uid));n(y.exists()?y.data().role:"viewer")}catch{n("viewer")}}else s(null),n(null);l(!1)}),[]);const c=(f,x)=>ar(et,f,x),d=()=>er(et),h=f=>Zn(et,f),j=i==="admin",m=i==="secretaria",v=i==="viewer",g=j||m;return a.jsx(Oi.Provider,{value:{user:t,role:i,isAdmin:j,isSecretary:m,isViewer:v,canEdit:g,loading:r,login:c,logout:d,resetPassword:h},children:e})}const Ee=()=>{const e=w.useContext(Oi);if(!e)throw new Error("useAuth must be used inside AuthProvider");return e},ye=Tn(e=>({patients:[],setPatients:t=>e({patients:t}),surgeries:[],setSurgeries:t=>e({surgeries:t}),therapies:[],setTherapies:t=>e({therapies:t}),therapists:[],setTherapists:t=>e({therapists:t}),sidebarOpen:!1,toggleSidebar:()=>e(t=>({sidebarOpen:!t.sidebarOpen})),closeSidebar:()=>e({sidebarOpen:!1}),searchQuery:"",setSearchQuery:t=>e({searchQuery:t})})),hr="/assets/LOGO-xe2ktJXh.jpg",gr=[{to:"/dashboard",icon:En,label:"Dashboard",adminOnly:!1},{to:"/pacientes",icon:va,label:"Pacientes",adminOnly:!1},{to:"/cirugias",icon:ia,label:"Cirugías",adminOnly:!1},{to:"/terapias",icon:Ma,label:"Terapias",adminOnly:!1},{to:"/finanzas",icon:us,label:"Finanzas",adminOnly:!0}];function fr(){const{sidebarOpen:e,closeSidebar:t}=ye(),{logout:s,user:i,isAdmin:n,isSecretary:r}=Ee(),l=gr.filter(d=>!d.adminOnly||n),c=async()=>{await s(),Y.success("Sesión cerrada")};return a.jsxs("aside",{className:`
      fixed inset-y-0 left-0 z-30 w-64 flex flex-col
      transform transition-transform duration-200 ease-in-out
      lg:static lg:translate-x-0
      ${e?"translate-x-0":"-translate-x-full"}
    `,style:{backgroundColor:"#1A365D"},children:[a.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/10",children:[a.jsx("div",{className:"bg-white rounded-xl px-3 py-1.5 flex items-center",children:a.jsx("img",{src:hr,alt:"Hospital Munay",className:"h-12 w-auto object-contain"})}),a.jsx("button",{onClick:t,className:"lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition text-white",children:a.jsx(Ne,{className:"w-5 h-5"})})]}),a.jsx("nav",{className:"flex-1 px-3 py-4 space-y-0.5 overflow-y-auto",children:l.map(({to:d,icon:h,label:j,adminOnly:m})=>a.jsxs(Cn,{to:d,onClick:t,className:({isActive:v})=>`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${v?"text-hm-primary font-bold shadow-sm":"text-white/75 hover:text-white hover:bg-white/10"}`,style:({isActive:v})=>v?{backgroundColor:"#09D6D4",color:"#1A365D"}:{},children:[a.jsx(h,{className:"w-5 h-5 shrink-0"}),a.jsx("span",{className:"flex-1",children:j}),m&&a.jsx("span",{className:"text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-medium",children:"Admin"})]},d))}),a.jsxs("div",{className:"px-4 py-4 border-t border-white/10",children:[a.jsx("p",{className:"text-xs text-white/60 truncate mb-0.5",children:i==null?void 0:i.email}),a.jsx("p",{className:"text-xs text-white/40 mb-3",children:n?"Administrador":r?"Secretaria":"Visualizador"}),a.jsxs("button",{onClick:c,className:`flex items-center gap-2 w-full text-sm text-white/70 hover:text-white
                     hover:bg-white/10 rounded-xl px-3 py-2 transition`,children:[a.jsx(Mn,{className:"w-4 h-4"}),"Cerrar sesión"]})]})]})}const br={"/dashboard":"Dashboard","/pacientes":"Pacientes","/cirugias":"Cirugías","/terapias":"Terapias","/finanzas":"Finanzas"};function vr(){const{toggleSidebar:e}=ye(),{pathname:t}=Fn(),s=br[t]??"Hospital Munay";return a.jsxs("header",{className:"bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-4 no-print shadow-sm",children:[a.jsx("button",{onClick:e,className:"lg:hidden p-2 rounded-lg text-hm-primary hover:bg-hm-secondary-100 transition","aria-label":"Abrir menú",children:a.jsx(Pn,{className:"w-5 h-5"})}),a.jsx("h1",{className:"text-lg font-bold text-hm-primary flex-1",children:s})]})}function yr(){const{sidebarOpen:e,closeSidebar:t}=ye();return a.jsxs("div",{className:"flex h-screen overflow-hidden bg-gray-50",children:[e&&a.jsx("div",{className:"fixed inset-0 z-20 bg-black/40 lg:hidden",onClick:t}),a.jsx(fr,{}),a.jsxs("div",{className:"flex flex-col flex-1 overflow-hidden",children:[a.jsx(vr,{}),a.jsx("main",{className:"flex-1 overflow-y-auto p-4 md:p-6",children:a.jsx(ps,{})})]})]})}function jr(){const{user:e,loading:t}=Ee();return t?null:e?a.jsx(ps,{}):a.jsx(dt,{to:"/login",replace:!0})}function wr(){const{isAdmin:e,loading:t}=Ee();return t?null:e?a.jsx(ps,{}):a.jsx(dt,{to:"/dashboard",replace:!0})}function Nr(){const{login:e}=Ee(),t=Sn(),[s,i]=w.useState(""),[n,r]=w.useState(""),[l,c]=w.useState(!1),[d,h]=w.useState(!1),[j,m]=w.useState(""),v=async g=>{if(g.preventDefault(),!s||!n){m("Completa todos los campos.");return}h(!0),m("");try{await e(s.trim(),n),Y.success("Bienvenido a Munay"),t("/dashboard",{replace:!0})}catch(f){m({"auth/invalid-credential":"Correo o contraseña incorrectos.","auth/user-not-found":"Usuario no encontrado.","auth/wrong-password":"Contraseña incorrecta.","auth/too-many-requests":"Demasiados intentos. Intenta más tarde."}[f.code]??"Error al iniciar sesión. Intenta de nuevo.")}finally{h(!1)}};return a.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{background:"linear-gradient(135deg, #1A365D 0%, #0d2040 100%)"},children:a.jsxs("div",{className:"w-full max-w-sm",children:[a.jsxs("div",{className:"flex flex-col items-center mb-8 text-white",children:[a.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center mb-4",style:{backgroundColor:"rgba(9,214,212,0.2)",border:"1px solid rgba(9,214,212,0.4)"},children:a.jsx(pt,{className:"w-9 h-9 text-white"})}),a.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Munay"}),a.jsx("p",{className:"text-sm mt-1",style:{color:"#72A0C1"},children:"Gestión Quirúrgica Hospitalaria"})]}),a.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-6 text-center",children:"Iniciar sesión"}),a.jsxs("form",{onSubmit:v,className:"space-y-4",children:[j&&a.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg",children:j}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Correo electrónico"}),a.jsx("input",{type:"email",value:s,onChange:g=>i(g.target.value),placeholder:"usuario@hospital.com",className:"input",autoComplete:"username",disabled:d})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Contraseña"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:l?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"••••••••",className:"input pr-10",autoComplete:"current-password",disabled:d}),a.jsx("button",{type:"button",onClick:()=>c(!l),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:l?a.jsx(On,{className:"w-4 h-4"}):a.jsx(ut,{className:"w-4 h-4"})})]})]}),a.jsx("button",{type:"submit",disabled:d,className:"btn-primary btn w-full justify-center py-2.5 mt-2",children:d?a.jsx(Ge,{className:"w-4 h-4 animate-spin"}):"Ingresar"})]})]}),a.jsxs("p",{className:"text-center text-xs mt-6",style:{color:"#72A0C1"},children:["Munay © ",new Date().getFullYear()," — Sistema Hospitalario"]})]})})}const _s={mny:{label:"MNY",longLabel:"Hospital Munay",bg:"#1e40af",lightBg:"#dbeafe",textColor:"#1d4ed8",border:"#93c5fd"},jwi:{label:"JWI",longLabel:"JIWAQUI",bg:"#ea580c",lightBg:"#ffedd5",textColor:"#c2410c",border:"#fdba74"},ext:{label:"EXT",longLabel:"Externo",bg:"#16a34a",lightBg:"#dcfce7",textColor:"#15803d",border:"#86efac"},flap:{label:"MNY",longLabel:"Hospital Munay",bg:"#1e40af",lightBg:"#dbeafe",textColor:"#1d4ed8",border:"#93c5fd"},external:{label:"EXT",longLabel:"Externo",bg:"#16a34a",lightBg:"#dcfce7",textColor:"#15803d",border:"#86efac"}};function oe(e){return _s[e]??_s.ext}const Ls={mny:{backgroundColor:"#1e40af",borderColor:"#1d4ed8",textColor:"#fff"},jwi:{backgroundColor:"#ea580c",borderColor:"#c2410c",textColor:"#fff"},ext:{backgroundColor:"#16a34a",borderColor:"#15803d",textColor:"#fff"},flap:{backgroundColor:"#1e40af",borderColor:"#1d4ed8",textColor:"#fff"},external:{backgroundColor:"#16a34a",borderColor:"#15803d",textColor:"#fff"}};function te(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Ke(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function kr(e,t){const s=te(e);return isNaN(t)?Ke(e,NaN):(t&&s.setDate(s.getDate()+t),s)}const Ii=6048e5,Cr=864e5,zi=6e4,_i=36e5;let Fr={};function Ct(){return Fr}function la(e,t){var c,d,h,j;const s=Ct(),i=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??s.weekStartsOn??((j=(h=s.locale)==null?void 0:h.options)==null?void 0:j.weekStartsOn)??0,n=te(e),r=n.getDay(),l=(r<i?7:0)+r-i;return n.setDate(n.getDate()-l),n.setHours(0,0,0,0),n}function xt(e){return la(e,{weekStartsOn:1})}function Li(e){const t=te(e),s=t.getFullYear(),i=Ke(e,0);i.setFullYear(s+1,0,4),i.setHours(0,0,0,0);const n=xt(i),r=Ke(e,0);r.setFullYear(s,0,4),r.setHours(0,0,0,0);const l=xt(r);return t.getTime()>=n.getTime()?s+1:t.getTime()>=l.getTime()?s:s-1}function $s(e){const t=te(e);return t.setHours(0,0,0,0),t}function Rs(e){const t=te(e),s=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return s.setUTCFullYear(t.getFullYear()),+e-+s}function $i(e,t){const s=$s(e),i=$s(t),n=+s-Rs(s),r=+i-Rs(i);return Math.round((n-r)/Cr)}function Sr(e){const t=Li(e),s=Ke(e,0);return s.setFullYear(t,0,4),s.setHours(0,0,0,0),xt(s)}function Pa(e,t){const s=te(e),i=te(t),n=s.getTime()-i.getTime();return n<0?-1:n>0?1:n}function Ar(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Fe(e){if(!Ar(e)&&typeof e!="number")return!1;const t=te(e);return!isNaN(Number(t))}function Dr(e,t){const s=te(e),i=te(t),n=s.getFullYear()-i.getFullYear(),r=s.getMonth()-i.getMonth();return n*12+r}function Tr(e,t){const s=te(e),i=te(t);return s.getFullYear()-i.getFullYear()}function Ze(e,t){const s=te(e),i=te(t),n=Bs(s,i),r=Math.abs($i(s,i));s.setDate(s.getDate()-n*r);const l=+(Bs(s,i)===-n),c=n*(r-l);return c===0?0:c}function Bs(e,t){const s=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return s<0?-1:s>0?1:s}function Er(e){const t=te(e);return t.setHours(23,59,59,999),t}function Mr(e){const t=te(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Pr(e){const t=te(e);return+Er(t)==+Mr(t)}function ea(e,t){const s=te(e),i=te(t),n=Pa(s,i),r=Math.abs(Dr(s,i));let l;if(r<1)l=0;else{s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-n*r);let c=Pa(s,i)===-n;Pr(te(e))&&r===1&&Pa(e,i)===1&&(c=!1),l=n*(r-Number(c))}return l===0?0:l}function _e(e,t){const s=te(e),i=te(t),n=Pa(s,i),r=Math.abs(Tr(s,i));s.setFullYear(1584),i.setFullYear(1584);const l=Pa(s,i)===-n,c=n*(r-+l);return c===0?0:c}function Or(e){const t=te(e),s=Ke(e,0);return s.setFullYear(t.getFullYear(),0,1),s.setHours(0,0,0,0),s}const Ir={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},zr=(e,t,s)=>{let i;const n=Ir[e];return typeof n=="string"?i=n:t===1?i=n.one:i=n.other.replace("{{count}}",t.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"in "+i:i+" ago":i};function ba(e){return(t={})=>{const s=t.width?String(t.width):e.defaultWidth;return e.formats[s]||e.formats[e.defaultWidth]}}const _r={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Lr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$r={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Rr={date:ba({formats:_r,defaultWidth:"full"}),time:ba({formats:Lr,defaultWidth:"full"}),dateTime:ba({formats:$r,defaultWidth:"full"})},Br={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qr=(e,t,s,i)=>Br[e];function He(e){return(t,s)=>{const i=s!=null&&s.context?String(s.context):"standalone";let n;if(i==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,c=s!=null&&s.width?String(s.width):l;n=e.formattingValues[c]||e.formattingValues[l]}else{const l=e.defaultWidth,c=s!=null&&s.width?String(s.width):e.defaultWidth;n=e.values[c]||e.values[l]}const r=e.argumentCallback?e.argumentCallback(t):t;return n[r]}}const Hr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Vr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Yr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ur={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Wr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Gr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Qr=(e,t)=>{const s=Number(e),i=s%100;if(i>20||i<10)switch(i%10){case 1:return s+"st";case 2:return s+"nd";case 3:return s+"rd"}return s+"th"},Xr={ordinalNumber:Qr,era:He({values:Hr,defaultWidth:"wide"}),quarter:He({values:Vr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:He({values:Yr,defaultWidth:"wide"}),day:He({values:Ur,defaultWidth:"wide"}),dayPeriod:He({values:Wr,defaultWidth:"wide",formattingValues:Gr,defaultFormattingWidth:"wide"})};function Ve(e){return(t,s={})=>{const i=s.width,n=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],r=t.match(n);if(!r)return null;const l=r[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?Kr(c,m=>m.test(l)):Jr(c,m=>m.test(l));let h;h=e.valueCallback?e.valueCallback(d):d,h=s.valueCallback?s.valueCallback(h):h;const j=t.slice(l.length);return{value:h,rest:j}}}function Jr(e,t){for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t(e[s]))return s}function Kr(e,t){for(let s=0;s<e.length;s++)if(t(e[s]))return s}function Ri(e){return(t,s={})=>{const i=t.match(e.matchPattern);if(!i)return null;const n=i[0],r=t.match(e.parsePattern);if(!r)return null;let l=e.valueCallback?e.valueCallback(r[0]):r[0];l=s.valueCallback?s.valueCallback(l):l;const c=t.slice(n.length);return{value:l,rest:c}}}const Zr=/^(\d+)(th|st|nd|rd)?/i,el=/\d+/i,al={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},tl={any:[/^b/i,/^(a|c)/i]},sl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},il={any:[/1/i,/2/i,/3/i,/4/i]},nl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},rl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ll={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ol={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},cl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},dl={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pl={ordinalNumber:Ri({matchPattern:Zr,parsePattern:el,valueCallback:e=>parseInt(e,10)}),era:Ve({matchPatterns:al,defaultMatchWidth:"wide",parsePatterns:tl,defaultParseWidth:"any"}),quarter:Ve({matchPatterns:sl,defaultMatchWidth:"wide",parsePatterns:il,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ve({matchPatterns:nl,defaultMatchWidth:"wide",parsePatterns:rl,defaultParseWidth:"any"}),day:Ve({matchPatterns:ll,defaultMatchWidth:"wide",parsePatterns:ol,defaultParseWidth:"any"}),dayPeriod:Ve({matchPatterns:cl,defaultMatchWidth:"any",parsePatterns:dl,defaultParseWidth:"any"})},ul={code:"en-US",formatDistance:zr,formatLong:Rr,formatRelative:qr,localize:Xr,match:pl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ml(e){const t=te(e);return $i(t,Or(t))+1}function xl(e){const t=te(e),s=+xt(t)-+Sr(t);return Math.round(s/Ii)+1}function Bi(e,t){var j,m,v,g;const s=te(e),i=s.getFullYear(),n=Ct(),r=(t==null?void 0:t.firstWeekContainsDate)??((m=(j=t==null?void 0:t.locale)==null?void 0:j.options)==null?void 0:m.firstWeekContainsDate)??n.firstWeekContainsDate??((g=(v=n.locale)==null?void 0:v.options)==null?void 0:g.firstWeekContainsDate)??1,l=Ke(e,0);l.setFullYear(i+1,0,r),l.setHours(0,0,0,0);const c=la(l,t),d=Ke(e,0);d.setFullYear(i,0,r),d.setHours(0,0,0,0);const h=la(d,t);return s.getTime()>=c.getTime()?i+1:s.getTime()>=h.getTime()?i:i-1}function hl(e,t){var c,d,h,j;const s=Ct(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((j=(h=s.locale)==null?void 0:h.options)==null?void 0:j.firstWeekContainsDate)??1,n=Bi(e,t),r=Ke(e,0);return r.setFullYear(n,0,i),r.setHours(0,0,0,0),la(r,t)}function gl(e,t){const s=te(e),i=+la(s,t)-+hl(s,t);return Math.round(i/Ii)+1}function ee(e,t){const s=e<0?"-":"",i=Math.abs(e).toString().padStart(t,"0");return s+i}const Xe={y(e,t){const s=e.getFullYear(),i=s>0?s:1-s;return ee(t==="yy"?i%100:i,t.length)},M(e,t){const s=e.getMonth();return t==="M"?String(s+1):ee(s+1,2)},d(e,t){return ee(e.getDate(),t.length)},a(e,t){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return s.toUpperCase();case"aaa":return s;case"aaaaa":return s[0];case"aaaa":default:return s==="am"?"a.m.":"p.m."}},h(e,t){return ee(e.getHours()%12||12,t.length)},H(e,t){return ee(e.getHours(),t.length)},m(e,t){return ee(e.getMinutes(),t.length)},s(e,t){return ee(e.getSeconds(),t.length)},S(e,t){const s=t.length,i=e.getMilliseconds(),n=Math.trunc(i*Math.pow(10,s-3));return ee(n,t.length)}},da={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},qs={G:function(e,t,s){const i=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return s.era(i,{width:"abbreviated"});case"GGGGG":return s.era(i,{width:"narrow"});case"GGGG":default:return s.era(i,{width:"wide"})}},y:function(e,t,s){if(t==="yo"){const i=e.getFullYear(),n=i>0?i:1-i;return s.ordinalNumber(n,{unit:"year"})}return Xe.y(e,t)},Y:function(e,t,s,i){const n=Bi(e,i),r=n>0?n:1-n;if(t==="YY"){const l=r%100;return ee(l,2)}return t==="Yo"?s.ordinalNumber(r,{unit:"year"}):ee(r,t.length)},R:function(e,t){const s=Li(e);return ee(s,t.length)},u:function(e,t){const s=e.getFullYear();return ee(s,t.length)},Q:function(e,t,s){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return ee(i,2);case"Qo":return s.ordinalNumber(i,{unit:"quarter"});case"QQQ":return s.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return s.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,s){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return ee(i,2);case"qo":return s.ordinalNumber(i,{unit:"quarter"});case"qqq":return s.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return s.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,s){const i=e.getMonth();switch(t){case"M":case"MM":return Xe.M(e,t);case"Mo":return s.ordinalNumber(i+1,{unit:"month"});case"MMM":return s.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return s.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,s){const i=e.getMonth();switch(t){case"L":return String(i+1);case"LL":return ee(i+1,2);case"Lo":return s.ordinalNumber(i+1,{unit:"month"});case"LLL":return s.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return s.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,s,i){const n=gl(e,i);return t==="wo"?s.ordinalNumber(n,{unit:"week"}):ee(n,t.length)},I:function(e,t,s){const i=xl(e);return t==="Io"?s.ordinalNumber(i,{unit:"week"}):ee(i,t.length)},d:function(e,t,s){return t==="do"?s.ordinalNumber(e.getDate(),{unit:"date"}):Xe.d(e,t)},D:function(e,t,s){const i=ml(e);return t==="Do"?s.ordinalNumber(i,{unit:"dayOfYear"}):ee(i,t.length)},E:function(e,t,s){const i=e.getDay();switch(t){case"E":case"EE":case"EEE":return s.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return s.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(i,{width:"short",context:"formatting"});case"EEEE":default:return s.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,s,i){const n=e.getDay(),r=(n-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(r);case"ee":return ee(r,2);case"eo":return s.ordinalNumber(r,{unit:"day"});case"eee":return s.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return s.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(n,{width:"short",context:"formatting"});case"eeee":default:return s.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,s,i){const n=e.getDay(),r=(n-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(r);case"cc":return ee(r,t.length);case"co":return s.ordinalNumber(r,{unit:"day"});case"ccc":return s.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return s.day(n,{width:"narrow",context:"standalone"});case"cccccc":return s.day(n,{width:"short",context:"standalone"});case"cccc":default:return s.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,s){const i=e.getDay(),n=i===0?7:i;switch(t){case"i":return String(n);case"ii":return ee(n,t.length);case"io":return s.ordinalNumber(n,{unit:"day"});case"iii":return s.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return s.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return s.day(i,{width:"short",context:"formatting"});case"iiii":default:return s.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,s){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return s.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return s.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return s.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,s){const i=e.getHours();let n;switch(i===12?n=da.noon:i===0?n=da.midnight:n=i/12>=1?"pm":"am",t){case"b":case"bb":return s.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return s.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return s.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,s){const i=e.getHours();let n;switch(i>=17?n=da.evening:i>=12?n=da.afternoon:i>=4?n=da.morning:n=da.night,t){case"B":case"BB":case"BBB":return s.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return s.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,s){if(t==="ho"){let i=e.getHours()%12;return i===0&&(i=12),s.ordinalNumber(i,{unit:"hour"})}return Xe.h(e,t)},H:function(e,t,s){return t==="Ho"?s.ordinalNumber(e.getHours(),{unit:"hour"}):Xe.H(e,t)},K:function(e,t,s){const i=e.getHours()%12;return t==="Ko"?s.ordinalNumber(i,{unit:"hour"}):ee(i,t.length)},k:function(e,t,s){let i=e.getHours();return i===0&&(i=24),t==="ko"?s.ordinalNumber(i,{unit:"hour"}):ee(i,t.length)},m:function(e,t,s){return t==="mo"?s.ordinalNumber(e.getMinutes(),{unit:"minute"}):Xe.m(e,t)},s:function(e,t,s){return t==="so"?s.ordinalNumber(e.getSeconds(),{unit:"second"}):Xe.s(e,t)},S:function(e,t){return Xe.S(e,t)},X:function(e,t,s){const i=e.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return Vs(i);case"XXXX":case"XX":return ta(i);case"XXXXX":case"XXX":default:return ta(i,":")}},x:function(e,t,s){const i=e.getTimezoneOffset();switch(t){case"x":return Vs(i);case"xxxx":case"xx":return ta(i);case"xxxxx":case"xxx":default:return ta(i,":")}},O:function(e,t,s){const i=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Hs(i,":");case"OOOO":default:return"GMT"+ta(i,":")}},z:function(e,t,s){const i=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Hs(i,":");case"zzzz":default:return"GMT"+ta(i,":")}},t:function(e,t,s){const i=Math.trunc(e.getTime()/1e3);return ee(i,t.length)},T:function(e,t,s){const i=e.getTime();return ee(i,t.length)}};function Hs(e,t=""){const s=e>0?"-":"+",i=Math.abs(e),n=Math.trunc(i/60),r=i%60;return r===0?s+String(n):s+String(n)+t+ee(r,2)}function Vs(e,t){return e%60===0?(e>0?"-":"+")+ee(Math.abs(e)/60,2):ta(e,t)}function ta(e,t=""){const s=e>0?"-":"+",i=Math.abs(e),n=ee(Math.trunc(i/60),2),r=ee(i%60,2);return s+n+t+r}const Ys=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},qi=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},fl=(e,t)=>{const s=e.match(/(P+)(p+)?/)||[],i=s[1],n=s[2];if(!n)return Ys(e,t);let r;switch(i){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"});break}return r.replace("{{date}}",Ys(i,t)).replace("{{time}}",qi(n,t))},bl={p:qi,P:fl},vl=/^D+$/,yl=/^Y+$/,jl=["D","DD","YY","YYYY"];function wl(e){return vl.test(e)}function Nl(e){return yl.test(e)}function kl(e,t,s){const i=Cl(e,t,s);if(console.warn(i),jl.includes(e))throw new RangeError(i)}function Cl(e,t,s){const i=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${i} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Fl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Sl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Al=/^'([^]*?)'?$/,Dl=/''/g,Tl=/[a-zA-Z]/;function X(e,t,s){var j,m,v,g,f,x,y,S;const i=Ct(),n=(s==null?void 0:s.locale)??i.locale??ul,r=(s==null?void 0:s.firstWeekContainsDate)??((m=(j=s==null?void 0:s.locale)==null?void 0:j.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((g=(v=i.locale)==null?void 0:v.options)==null?void 0:g.firstWeekContainsDate)??1,l=(s==null?void 0:s.weekStartsOn)??((x=(f=s==null?void 0:s.locale)==null?void 0:f.options)==null?void 0:x.weekStartsOn)??i.weekStartsOn??((S=(y=i.locale)==null?void 0:y.options)==null?void 0:S.weekStartsOn)??0,c=te(e);if(!Fe(c))throw new RangeError("Invalid time value");let d=t.match(Sl).map(u=>{const N=u[0];if(N==="p"||N==="P"){const F=bl[N];return F(u,n.formatLong)}return u}).join("").match(Fl).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const N=u[0];if(N==="'")return{isToken:!1,value:El(u)};if(qs[N])return{isToken:!0,value:u};if(N.match(Tl))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return{isToken:!1,value:u}});n.localize.preprocessor&&(d=n.localize.preprocessor(c,d));const h={firstWeekContainsDate:r,weekStartsOn:l,locale:n};return d.map(u=>{if(!u.isToken)return u.value;const N=u.value;(!(s!=null&&s.useAdditionalWeekYearTokens)&&Nl(N)||!(s!=null&&s.useAdditionalDayOfYearTokens)&&wl(N))&&kl(N,t,String(e));const F=qs[N[0]];return F(c,N,n.localize,h)}).join("")}function El(e){const t=e.match(Al);return t?t[1].replace(Dl,"'"):e}function Se(e,t){const i=Il(e);let n;if(i.date){const d=zl(i.date,2);n=_l(d.restDateString,d.year)}if(!n||isNaN(n.getTime()))return new Date(NaN);const r=n.getTime();let l=0,c;if(i.time&&(l=Ll(i.time),isNaN(l)))return new Date(NaN);if(i.timezone){if(c=$l(i.timezone),isNaN(c))return new Date(NaN)}else{const d=new Date(r+l),h=new Date(0);return h.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),h.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),h}return new Date(r+l+c)}const at={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ml=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Pl=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Ol=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Il(e){const t={},s=e.split(at.dateTimeDelimiter);let i;if(s.length>2)return t;if(/:/.test(s[0])?i=s[0]:(t.date=s[0],i=s[1],at.timeZoneDelimiter.test(t.date)&&(t.date=e.split(at.timeZoneDelimiter)[0],i=e.substr(t.date.length,e.length))),i){const n=at.timezone.exec(i);n?(t.time=i.replace(n[1],""),t.timezone=n[1]):t.time=i}return t}function zl(e,t){const s=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),i=e.match(s);if(!i)return{year:NaN,restDateString:""};const n=i[1]?parseInt(i[1]):null,r=i[2]?parseInt(i[2]):null;return{year:r===null?n:r*100,restDateString:e.slice((i[1]||i[2]).length)}}function _l(e,t){if(t===null)return new Date(NaN);const s=e.match(Ml);if(!s)return new Date(NaN);const i=!!s[4],n=Sa(s[1]),r=Sa(s[2])-1,l=Sa(s[3]),c=Sa(s[4]),d=Sa(s[5])-1;if(i)return Vl(t,c,d)?Rl(t,c,d):new Date(NaN);{const h=new Date(0);return!ql(t,r,l)||!Hl(t,n)?new Date(NaN):(h.setUTCFullYear(t,r,Math.max(n,l)),h)}}function Sa(e){return e?parseInt(e):1}function Ll(e){const t=e.match(Pl);if(!t)return NaN;const s=Ht(t[1]),i=Ht(t[2]),n=Ht(t[3]);return Yl(s,i,n)?s*_i+i*zi+n*1e3:NaN}function Ht(e){return e&&parseFloat(e.replace(",","."))||0}function $l(e){if(e==="Z")return 0;const t=e.match(Ol);if(!t)return 0;const s=t[1]==="+"?-1:1,i=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return Ul(i,n)?s*(i*_i+n*zi):NaN}function Rl(e,t,s){const i=new Date(0);i.setUTCFullYear(e,0,4);const n=i.getUTCDay()||7,r=(t-1)*7+s+1-n;return i.setUTCDate(i.getUTCDate()+r),i}const Bl=[31,null,31,30,31,30,31,31,30,31,30,31];function Hi(e){return e%400===0||e%4===0&&e%100!==0}function ql(e,t,s){return t>=0&&t<=11&&s>=1&&s<=(Bl[t]||(Hi(e)?29:28))}function Hl(e,t){return t>=1&&t<=(Hi(e)?366:365)}function Vl(e,t,s){return t>=1&&t<=53&&s>=0&&s<=6}function Yl(e,t,s){return e===24?t===0&&s===0:s>=0&&s<60&&t>=0&&t<60&&e>=0&&e<25}function Ul(e,t){return t>=0&&t<=59}const Wl={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},Gl=(e,t,s)=>{let i;const n=Wl[e];return typeof n=="string"?i=n:t===1?i=n.one:i=n.other.replace("{{count}}",t.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"en "+i:"hace "+i:i},Ql={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},Xl={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Jl={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kl={date:ba({formats:Ql,defaultWidth:"full"}),time:ba({formats:Xl,defaultWidth:"full"}),dateTime:ba({formats:Jl,defaultWidth:"full"})},Zl={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},eo={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},ao=(e,t,s,i)=>t.getHours()!==1?eo[e]:Zl[e],to={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},so={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},io={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},no={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},ro={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},lo={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},oo=(e,t)=>Number(e)+"º",co={ordinalNumber:oo,era:He({values:to,defaultWidth:"wide"}),quarter:He({values:so,defaultWidth:"wide",argumentCallback:e=>Number(e)-1}),month:He({values:io,defaultWidth:"wide"}),day:He({values:no,defaultWidth:"wide"}),dayPeriod:He({values:ro,defaultWidth:"wide",formattingValues:lo,defaultFormattingWidth:"wide"})},po=/^(\d+)(º)?/i,uo=/\d+/i,mo={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},xo={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},ho={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},go={any:[/1/i,/2/i,/3/i,/4/i]},fo={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},bo={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},vo={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},yo={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},jo={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},wo={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},No={ordinalNumber:Ri({matchPattern:po,parsePattern:uo,valueCallback:function(e){return parseInt(e,10)}}),era:Ve({matchPatterns:mo,defaultMatchWidth:"wide",parsePatterns:xo,defaultParseWidth:"any"}),quarter:Ve({matchPatterns:ho,defaultMatchWidth:"wide",parsePatterns:go,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ve({matchPatterns:fo,defaultMatchWidth:"wide",parsePatterns:bo,defaultParseWidth:"any"}),day:Ve({matchPatterns:vo,defaultMatchWidth:"wide",parsePatterns:yo,defaultParseWidth:"any"}),dayPeriod:Ve({matchPatterns:jo,defaultMatchWidth:"any",parsePatterns:wo,defaultParseWidth:"any"})},ke={code:"es",formatDistance:Gl,formatLong:Kl,formatRelative:ao,localize:co,match:No,options:{weekStartsOn:1,firstWeekContainsDate:1}},Ft="patients",St=e=>{const t=wt(Qe(ue,Ft),Nt("createdAt","desc"));return Ha(t,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))))},Vi=e=>Ya(Qe(ue,Ft),{...e,createdAt:We()}),ko=(e,t)=>Va(Ue(ue,Ft,e),{...t,updatedAt:We()}),Co=e=>Ua(Ue(ue,Ft,e)),bs="surgeries",At=e=>{const t=wt(Qe(ue,bs),Nt("date","asc"));return Ha(t,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))))},Fo=e=>Ya(Qe(ue,bs),{...e,createdAt:We()}),tt=(e,t)=>Va(Ue(ue,bs,e),{...t,updatedAt:We()}),Wa="therapies",Dt=e=>{const t=wt(Qe(ue,Wa),Nt("date","asc"));return Ha(t,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))))},So=e=>Ya(Qe(ue,Wa),{...e,createdAt:We()}),Us=(e,t)=>Va(Ue(ue,Wa,e),{...t,updatedAt:We()}),Ws=e=>Ua(Ue(ue,Wa,e)),Ao=e=>Promise.all(e.map(t=>Ua(Ue(ue,Wa,t)))),Do={mny:"bg-blue-100   text-blue-800   ring-blue-200",jwi:"bg-orange-100 text-orange-800 ring-orange-200",ext:"bg-green-100  text-green-800  ring-green-200",flap:"bg-blue-100   text-blue-800   ring-blue-200",external:"bg-green-100  text-green-800  ring-green-200",activo:"bg-emerald-100 text-emerald-800 ring-emerald-200",inactivo:"bg-gray-100   text-gray-600   ring-gray-200",programado:"bg-slate-100  text-slate-700  ring-slate-200",confirmado:"bg-blue-100   text-blue-700   ring-blue-200",asistio:"bg-green-100  text-green-700  ring-green-200",no_asistio:"bg-red-100    text-red-700    ring-red-200",reprogramado:"bg-amber-100  text-amber-700  ring-amber-200",cancelado:"bg-rose-100   text-rose-700   ring-rose-200",llego_tarde:"bg-orange-100 text-orange-700 ring-orange-200",en_espera:"bg-violet-100 text-violet-700 ring-violet-200",completada:"bg-cyan-100   text-cyan-700   ring-cyan-200",parcial:"bg-teal-100   text-teal-700   ring-teal-200",derivado:"bg-purple-100 text-purple-700 ring-purple-200",suspendido:"bg-amber-200  text-amber-800  ring-amber-300",realizado:"bg-emerald-100 text-emerald-700 ring-emerald-200"},To={mny:"MNY",jwi:"JWI",ext:"EXT",flap:"MNY",external:"EXT",activo:"Activo",inactivo:"Inactivo",programado:"Programado",confirmado:"Confirmado",asistio:"Asistió",no_asistio:"No asistió",reprogramado:"Reprogramado",cancelado:"Cancelado",llego_tarde:"Llegó tarde",en_espera:"En espera",completada:"Completada",parcial:"Parcial",derivado:"Derivado",suspendido:"Suspendido",realizado:"Realizado"};function Ye({variant:e,label:t,className:s=""}){const i=Do[e]??"bg-gray-100 text-gray-700 ring-gray-200",n=t??To[e]??e;return a.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ring-1 ring-inset ${i} ${s}`,children:n})}const wa=[{key:"Cirugía Pediátrica",color:"#dc2626",light:"#fee2e2"},{key:"Electroterapia",color:"#d97706",light:"#fef3c7"},{key:"Fonoaudiología",color:"#7c3aed",light:"#ede9fe"},{key:"Psicología",color:"#db2777",light:"#fce7f3"},{key:"Kinesiología",color:"#0891b2",light:"#cffafe"},{key:"Nutrición",color:"#ea580c",light:"#ffedd5"},{key:"Psicomotricidad",color:"#16a34a",light:"#dcfce7"},{key:"Psicopedagogía",color:"#0f766e",light:"#ccfbf1"},{key:"Odontopediatría",color:"#0d9488",light:"#ccfbf1"},{key:"Ortodoncia",color:"#6d28d9",light:"#ede9fe"},{key:"Ortopedia",color:"#7c2d12",light:"#ffedd5"},{key:"Enfermería",color:"#be185d",light:"#fce7f3"},{key:"Pediatría",color:"#1d4ed8",light:"#dbeafe"},{key:"Terapia Ocupacional",color:"#15803d",light:"#dcfce7"},{key:"Otro",color:"#64748b",light:"#f1f5f9"}],Eo=Object.fromEntries(wa.map(e=>[e.key,e])),La={programado:{label:"Programado",short:"PROG",icon:"○",tw:"bg-slate-100 text-slate-700 border-slate-300",hex:"#64748b"},confirmado:{label:"Confirmado",short:"CONF",icon:"●",tw:"bg-blue-100 text-blue-700 border-blue-300",hex:"#2563eb"},asistio:{label:"Asistió",short:"ASIS",icon:"✓",tw:"bg-green-100 text-green-700 border-green-300",hex:"#16a34a"},no_asistio:{label:"No asistió",short:"AUS",icon:"✗",tw:"bg-red-100 text-red-700 border-red-300",hex:"#dc2626"},reprogramado:{label:"Reprogramado",short:"REPR",icon:"↻",tw:"bg-amber-100 text-amber-700 border-amber-300",hex:"#d97706"},cancelado:{label:"Cancelado",short:"CANC",icon:"⊘",tw:"bg-rose-100 text-rose-700 border-rose-300",hex:"#e11d48"},llego_tarde:{label:"Llegó tarde",short:"TARD",icon:"⌛",tw:"bg-orange-100 text-orange-700 border-orange-300",hex:"#ea580c"},en_espera:{label:"En espera",short:"ESP",icon:"⏳",tw:"bg-violet-100 text-violet-700 border-violet-300",hex:"#7c3aed"},completada:{label:"Completada",short:"COMP",icon:"✔",tw:"bg-cyan-100 text-cyan-700 border-cyan-300",hex:"#0891b2"},parcial:{label:"Parcial",short:"PARC",icon:"◑",tw:"bg-teal-100 text-teal-700 border-teal-300",hex:"#0d9488"},derivado:{label:"Derivado",short:"DER",icon:"→",tw:"bg-purple-100 text-purple-700 border-purple-300",hex:"#9333ea"},suspendido:{label:"Suspendido",short:"SUSP",icon:"⏸",tw:"bg-amber-200 text-amber-800 border-amber-400",hex:"#b45309"},realizado:{label:"Realizado",short:"REAL",icon:"✔",tw:"bg-emerald-100 text-emerald-700 border-emerald-300",hex:"#059669"}},vs=["programado","confirmado","asistio","no_asistio","llego_tarde","en_espera","completada","parcial","reprogramado","cancelado","derivado","suspendido"],Yi=wa.map(e=>e.key),$a=["asistio","completada","llego_tarde","parcial","realizado"],xa=["no_asistio"],Gs=["reprogramado","cancelado","derivado","suspendido"],as=["programado","confirmado","en_espera"],Qs=[];for(let e=7;e<20;e++)Qs.push(`${String(e).padStart(2,"0")}:00`),Qs.push(`${String(e).padStart(2,"0")}:30`);function Te(e){return Eo[e]??{color:"#64748b",light:"#f1f5f9"}}function na(e){return La[e]??La.programado}function ha(e){if(!e)return"";const t=new Date(e),s=new Date;let i=s.getFullYear()-t.getFullYear(),n=s.getMonth()-t.getMonth();return n<0&&(i--,n+=12),i>=2?`${i}a`:i===1?`1a ${n}m`:`${n}m`}function Oa(e){const t=new Date(e+"T12:00"),s=t.getDay(),i=s===0?-6:1-s,n=new Date(t);n.setDate(t.getDate()+i);const r=[];for(let l=0;l<7;l++){const c=new Date(n);c.setDate(n.getDate()+l),r.push(c.toISOString().slice(0,10))}return r}function Xs(e,t){const s=new Date(e+"T12:00");return s.setDate(s.getDate()+t),s.toISOString().slice(0,10)}const ga=new Date().toISOString().slice(0,10),ts={1:{mañana:["Fonoaudiología","Kinesiología","Electroterapia","Psicología","Psicomotricidad"],tarde:["Cirugía Pediátrica","Psicomotricidad","Kinesiología","Psicopedagogía","Ortopedia","Psicología"]},2:{mañana:["Psicomotricidad","Psicopedagogía","Fonoaudiología","Kinesiología","Psicología","Pediatría","Odontopediatría"],tarde:["Psicomotricidad","Fonoaudiología","Electroterapia","Ortopedia","Ortodoncia","Kinesiología"]},3:{mañana:["Psicomotricidad","Psicología","Kinesiología","Electroterapia","Psicopedagogía","Fonoaudiología"],tarde:["Fonoaudiología","Psicomotricidad","Kinesiología","Psicopedagogía","Odontopediatría"]},4:{mañana:["Fonoaudiología"],tarde:["Fonoaudiología","Psicomotricidad","Psicopedagogía","Ortopedia","Ortodoncia","Kinesiología"]},5:{mañana:["Psicopedagogía","Psicomotricidad","Fonoaudiología","Kinesiología","Electroterapia","Psicología"],tarde:["Ortopedia","Ortodoncia","Psicopedagogía","Fonoaudiología","Odontopediatría"]},6:{mañana:[],tarde:[]},0:{mañana:[],tarde:[]}},Js=Object.fromEntries(wa.map(e=>[e.key,e]));function Mo(){const{patients:e,setPatients:t,surgeries:s,setSurgeries:i,therapies:n,setTherapies:r}=ye(),l=X(new Date,"yyyy-MM-dd");w.useEffect(()=>{const x=St(t),y=At(i),S=Dt(r);return()=>{x(),y(),S()}},[]);const c=s.filter(x=>x.date===l&&x.status!=="cancelado"),d=e.length,h=e.filter(x=>oe(x.patientType).label==="MNY").length;s.filter(x=>x.status==="programado").length,s.filter(x=>x.status==="realizado").length;const j=s.filter(x=>x.date>=l&&x.status!=="cancelado").slice(0,5),m=w.useMemo(()=>n.filter(x=>x.date===l),[n,l]),v=w.useMemo(()=>{const x=m.filter(N=>$a.includes(N.status)).length,y=m.filter(N=>xa.includes(N.status)).length,S=m.filter(N=>as.includes(N.status)).length,u=m.length?Math.round(x/m.length*100):0;return{total:m.length,atendidos:x,ausentes:y,pendientes:S,pct:u}},[m]),g=w.useMemo(()=>{const x={};for(const y of m)x[y.therapyType]||(x[y.therapyType]=[]),x[y.therapyType].push(y);return Object.entries(x).sort((y,S)=>S[1].length-y[1].length)},[m]),f=w.useMemo(()=>{const x=new Set,y=[],S=[...n].filter(u=>u.date>l).sort((u,N)=>u.date.localeCompare(N.date)||(u.startTime??"").localeCompare(N.startTime??""));for(const u of S){const N=`${u.patientId}__${u.date}`;if(x.has(N)||(x.add(N),y.push(u)),y.length>=5)break}return y},[n,l]);return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[a.jsx(st,{icon:va,label:"Total Pacientes",value:d,sub:`${h} Munay`,color:"teal",to:"/pacientes"}),a.jsx(st,{icon:ia,label:"Cirugías Hoy",value:c.length,sub:"quirófano único",color:"blue",to:"/cirugias"}),a.jsx(st,{icon:Ma,label:"Terapias Hoy",value:v.total,sub:`${v.pendientes} pendientes`,color:"purple",to:"/terapias"}),a.jsx(st,{icon:ya,label:"Asistencia Hoy",value:`${v.pct}%`,sub:`${v.atendidos} atendidos`,color:"green",to:"/terapias"})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[a.jsx(Vt,{icon:Jt,label:"Programadas",value:v.total,color:"slate"}),a.jsx(Vt,{icon:In,label:"Atendidos",value:v.atendidos,color:"green"}),a.jsx(Vt,{icon:_a,label:"Ausencias",value:v.ausentes,color:"red"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"section-title flex items-center gap-2",children:[a.jsx(Ma,{className:"w-5 h-5 text-purple-600"}),"Terapias de Hoy"]}),a.jsx(Ea,{to:"/terapias",className:"text-sm text-hm-primary hover:underline",children:"Ver módulo"})]}),g.length===0?a.jsx(it,{message:"No hay terapias registradas para hoy."}):a.jsx("ul",{className:"space-y-2",children:g.map(([x,y])=>{const S=Js[x]??{color:"#64748b",light:"#f1f5f9"},u=y.filter(F=>$a.includes(F.status)).length,N=y.filter(F=>xa.includes(F.status)).length;return a.jsxs("li",{className:"flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100",style:{background:S.light},children:[a.jsx("div",{className:"w-2 h-8 rounded-full shrink-0",style:{background:S.color}}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-sm font-bold truncate",style:{color:S.color},children:x}),a.jsxs("p",{className:"text-[11px] text-gray-500 mt-0.5",children:[y.length," ",y.length===1?"paciente":"pacientes",u>0&&` · ${u} atendido${u>1?"s":""}`,N>0&&` · ${N} ausente${N>1?"s":""}`]})]}),a.jsxs("div",{className:"flex -space-x-1",children:[y.slice(0,4).map(F=>a.jsx("div",{title:F.patientName,className:"w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shrink-0",style:{background:S.color},children:(F.patientName??"?")[0].toUpperCase()},F.id)),y.length>4&&a.jsxs("div",{className:"w-6 h-6 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-[9px] font-bold text-white",children:["+",y.length-4]})]})]},x)})})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"section-title flex items-center gap-2",children:[a.jsx(ia,{className:"w-5 h-5 text-hm-primary"}),"Cirugías de Hoy"]}),a.jsx("span",{className:"text-sm text-gray-500 capitalize",children:X(new Date,"EEEE d 'de' MMMM",{locale:ke})})]}),c.length===0?a.jsx(it,{message:"No hay cirugías programadas para hoy."}):a.jsx("ul",{className:"space-y-2",children:c.sort((x,y)=>x.startTime.localeCompare(y.startTime)).map(x=>a.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[a.jsx("div",{className:"w-2 h-10 rounded-full shrink-0",style:{backgroundColor:oe(x.patientType).bg}}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:x.patientName}),a.jsxs("p",{className:"text-xs text-gray-500",children:[x.startTime," · ",x.surgeryType]})]}),a.jsx(Ye,{variant:x.status})]},x.id))})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"section-title flex items-center gap-2",children:[a.jsx(Jt,{className:"w-5 h-5 text-hm-primary"}),"Próximas Terapias"]}),a.jsx(Ea,{to:"/terapias",className:"text-sm text-hm-primary hover:underline",children:"Ver módulo"})]}),f.length===0?a.jsx(it,{message:"No hay terapias próximas registradas."}):a.jsx("ul",{className:"space-y-2",children:f.map(x=>{const y=Js[x.therapyType]??{color:"#64748b"};return a.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[a.jsx("div",{className:"w-2 h-10 rounded-full shrink-0",style:{background:y.color}}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:x.patientName}),a.jsxs("p",{className:"text-xs text-gray-500",children:[X(new Date(x.date+"T12:00"),"EEE d MMM",{locale:ke}),x.startTime?` · ${x.startTime}`:""," · ",a.jsx("span",{style:{color:y.color},children:x.therapyType})]})]})]},x.id)})})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"section-title flex items-center gap-2",children:[a.jsx(Ni,{className:"w-5 h-5 text-hm-primary"}),"Próximas Cirugías"]}),a.jsx(Ea,{to:"/cirugias",className:"text-sm text-hm-primary hover:underline",children:"Ver todas"})]}),j.length===0?a.jsx(it,{message:"No hay cirugías próximas registradas."}):a.jsx("ul",{className:"space-y-2",children:j.map(x=>a.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[a.jsx("div",{className:`w-2 h-10 rounded-full shrink-0 ${x.patientType==="flap"?"bg-green-500":"bg-blue-500"}`}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:x.patientName}),a.jsxs("p",{className:"text-xs text-gray-500",children:[X(new Date(x.date+"T12:00"),"EEE d MMM",{locale:ke})," · ",x.startTime," · ",x.surgeryType]})]}),a.jsx(Ye,{variant:x.status})]},x.id))})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsx(Yt,{to:"/pacientes",icon:va,label:"Registrar Paciente",color:"navy"}),a.jsx(Yt,{to:"/cirugias",icon:ia,label:"Nueva Cirugía",color:"blue"}),a.jsx(Yt,{to:"/terapias",icon:Ma,label:"Agendar Terapia",color:"purple"})]})]})}function st({icon:e,label:t,value:s,sub:i,color:n,to:r}){const l={teal:"bg-teal-50   text-teal-700",blue:"bg-blue-50   text-blue-700",yellow:"bg-yellow-50 text-yellow-700",green:"bg-green-50  text-green-700",purple:"bg-purple-50 text-purple-700"};return a.jsxs(Ea,{to:r,className:"card hover:shadow-md transition-shadow",children:[a.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${l[n]}`,children:a.jsx(e,{className:"w-5 h-5"})}),a.jsx("p",{className:"text-2xl font-bold text-gray-800",children:s}),a.jsx("p",{className:"text-sm font-medium text-gray-600 mt-0.5",children:t}),a.jsx("p",{className:"text-xs text-gray-400 mt-0.5",children:i})]})}function Vt({icon:e,label:t,value:s,color:i}){const n={slate:"bg-slate-50  text-slate-600  border-slate-200",green:"bg-green-50  text-green-600  border-green-200",red:"bg-red-50    text-red-600    border-red-200"};return a.jsxs("div",{className:`flex items-center gap-3 px-4 py-3 rounded-xl border ${n[i]}`,children:[a.jsx(e,{className:"w-5 h-5 shrink-0"}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xl font-bold leading-none",children:s}),a.jsx("p",{className:"text-[10px] uppercase tracking-wide mt-0.5 opacity-70",children:t})]})]})}function Yt({to:e,icon:t,label:s,color:i}){const n={navy:"bg-hm-primary hover:bg-hm-primary-800",blue:"bg-blue-600   hover:bg-blue-700",purple:"bg-purple-600 hover:bg-purple-700"};return a.jsxs(Ea,{to:e,className:`flex items-center gap-3 px-5 py-4 rounded-xl text-white font-medium text-sm transition ${n[i]}`,children:[a.jsx(t,{className:"w-5 h-5"}),s]})}function it({message:e}){return a.jsxs("div",{className:"flex flex-col items-center justify-center py-8 text-gray-400",children:[a.jsx(vt,{className:"w-8 h-8 mb-2 opacity-40"}),a.jsx("p",{className:"text-sm",children:e})]})}function Na({open:e,onClose:t,title:s,children:i,size:n="md"}){if(w.useEffect(()=>{if(!e)return;const l=c=>{c.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e,t]),!e)return null;const r={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl","2xl":"max-w-5xl"}[n]??"max-w-lg";return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:l=>{l.target===l.currentTarget&&t()},children:a.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${r} flex flex-col max-h-[90vh]`,children:[a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100",children:[a.jsx("h2",{className:"text-base font-semibold text-gray-800",children:s}),a.jsx("button",{onClick:t,className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:a.jsx(Ne,{className:"w-4 h-4"})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto px-5 py-4",children:i})]})})}function Ra({open:e,title:t,message:s,onConfirm:i,onCancel:n,confirmLabel:r="Eliminar",danger:l=!0}){return e?a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",children:a.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-sm p-6",children:[a.jsxs("div",{className:"flex gap-4",children:[a.jsx("div",{className:`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${l?"bg-red-100":"bg-yellow-100"}`,children:a.jsx(ki,{className:`w-5 h-5 ${l?"text-red-600":"text-yellow-600"}`})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-gray-800",children:t}),a.jsx("p",{className:"text-sm text-gray-500 mt-1",children:s})]})]}),a.jsxs("div",{className:"flex gap-3 mt-6 justify-end",children:[a.jsx("button",{onClick:n,className:"btn-secondary btn",children:"Cancelar"}),a.jsx("button",{onClick:i,className:l?"btn-danger btn":"btn-primary btn",children:r})]})]})}):null}function Ui({value:e,onChange:t,placeholder:s="Buscar..."}){return a.jsxs("div",{className:"relative",children:[a.jsx(yt,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),a.jsx("input",{type:"text",value:e,onChange:i=>t(i.target.value),placeholder:s,className:"input pl-9 pr-9"}),e&&a.jsx("button",{onClick:()=>t(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600",children:a.jsx(Ne,{className:"w-4 h-4"})})]})}var Ga=e=>e.type==="checkbox",sa=e=>e instanceof Date,be=e=>e==null;const Wi=e=>typeof e=="object";var le=e=>!be(e)&&!Array.isArray(e)&&Wi(e)&&!sa(e),Po=e=>le(e)&&e.target?Ga(e.target)?e.target.checked:e.target.value:e,Oo=(e,t)=>t.split(".").some((s,i,n)=>!isNaN(Number(s))&&e.has(n.slice(0,i).join("."))),Io=e=>{const t=e.constructor&&e.constructor.prototype;return le(t)&&t.hasOwnProperty("isPrototypeOf")},ys=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function de(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(ys&&(e instanceof Blob||t))return e;const s=Array.isArray(e);if(!s&&!(le(e)&&Io(e)))return e;const i=s?[]:Object.create(Object.getPrototypeOf(e));for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=de(e[n]));return i}var Tt=e=>/^\w*$/.test(e),ne=e=>e===void 0,js=e=>Array.isArray(e)?e.filter(Boolean):[],ws=e=>js(e.replace(/["|']|\]/g,"").split(/\.|\[/)),_=(e,t,s)=>{if(!t||!le(e))return s;const n=(Tt(t)?[t]:ws(t)).reduce((r,l)=>be(r)?void 0:r[l],e);return ne(n)||n===e?ne(e[t])?s:e[t]:n},Be=e=>typeof e=="boolean",Ae=e=>typeof e=="function",ie=(e,t,s)=>{let i=-1;const n=Tt(t)?[t]:ws(t),r=n.length,l=r-1;for(;++i<r;){const c=n[i];let d=s;if(i!==l){const h=e[c];d=le(h)||Array.isArray(h)?h:isNaN(+n[i+1])?{}:[]}if(c==="__proto__"||c==="constructor"||c==="prototype")return;e[c]=d,e=e[c]}};const pa={BLUR:"blur",FOCUS_OUT:"focusout",SUBMIT:"submit",TRIGGER:"trigger",VALID:"valid"},ze={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ie={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ut="form",Gi="root",zo=he.createContext(null);zo.displayName="HookFormControlContext";var _o=(e,t,s,i=!0)=>{const n={};for(const r in e)Object.defineProperty(n,r,{get:()=>{const l=r;return t._proxyFormState[l]!==ze.all&&(t._proxyFormState[l]=!i||ze.all),e[l]}});return n};const Lo=typeof window<"u"?he.useLayoutEffect:he.useEffect;var ge=e=>typeof e=="string",$o=(e,t,s,i,n)=>ge(e)?(i&&t.watch.add(e),_(s,e,n)):Array.isArray(e)?e.map(r=>(i&&t.watch.add(r),_(s,r))):(i&&(t.watchAll=!0),s),ss=e=>be(e)||!Wi(e);function qe(e,t,s=new WeakSet){if(e===t)return!0;if(ss(e)||ss(t))return Object.is(e,t);if(sa(e)&&sa(t))return Object.is(e.getTime(),t.getTime());const i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;if(s.has(e)||s.has(t))return!0;s.add(e),s.add(t);for(const r of i){const l=e[r];if(!(r in t))return!1;if(r!=="ref"){const c=t[r];if(sa(l)&&sa(c)||(le(l)||Array.isArray(l))&&(le(c)||Array.isArray(c))?!qe(l,c,s):!Object.is(l,c))return!1}}return!0}const Ro=he.createContext(null);Ro.displayName="HookFormContext";var Bo=(e,t,s,i,n)=>t?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[i]:n||!0}}:{},Ia=e=>Array.isArray(e)?e:[e],Ks=()=>{let e=[];return{get observers(){return e},next:n=>{for(const r of e)r.next&&r.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(r=>r!==n)}}),unsubscribe:()=>{e=[]}}};function Qi(e,t){const s={};for(const i in e)if(e.hasOwnProperty(i)){const n=e[i],r=t[i];if(n&&le(n)&&r){const l=Qi(n,r);le(l)&&(s[i]=l)}else e[i]&&(s[i]=r)}return s}var xe=e=>le(e)&&!Object.keys(e).length,Ns=e=>e.type==="file",ht=e=>{if(!ys)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xi=e=>e.type==="select-multiple",ks=e=>e.type==="radio",qo=e=>ks(e)||Ga(e),Wt=e=>ht(e)&&e.isConnected;function Ho(e,t){const s=t.slice(0,-1).length;let i=0;for(;i<s;){if(be(e)){e=void 0;break}e=e[t[i]],i++}return e}function Vo(e){for(const t in e)if(e.hasOwnProperty(t)&&!ne(e[t]))return!1;return!0}function pe(e,t){if(ge(t)&&Object.prototype.hasOwnProperty.call(e,t))return delete e[t],e;const s=Array.isArray(t)?t:Tt(t)?[t]:ws(t),i=s.length===1?e:Ho(e,s),n=s.length-1,r=s[n];return i&&delete i[r],n!==0&&(le(i)&&xe(i)||Array.isArray(i)&&Vo(i))&&pe(e,s.slice(0,-1)),e}var Yo=e=>{for(const t in e)if(Ae(e[t]))return!0;return!1};function Ji(e){return Array.isArray(e)||le(e)&&!Yo(e)}function is(e,t={}){for(const s in e){const i=e[s];Ji(i)?(t[s]=Array.isArray(i)?[]:{},is(i,t[s])):ne(i)||(t[s]=!0)}return t}function ns(e){if(e!==!1){if(e===!0)return!0;if(Array.isArray(e)){const t=e.map(s=>ns(s));return t.some(s=>s!==void 0)?t:void 0}if(le(e)){const t={};for(const s in e){const i=ns(e[s]);ne(i)||(t[s]=i)}return Object.keys(t).length?t:void 0}}}function Da(e,t,s){s||(s=is(t));for(const i in e){const n=e[i];if(Ji(n))ne(t)||ss(s[i])?s[i]=is(n,Array.isArray(n)?[]:{}):Da(n,be(t)?{}:t[i],s[i]);else{const r=t[i];s[i]=!qe(n,r)}}return ns(s)||{}}const Zs={value:!1,isValid:!1},ei={value:!0,isValid:!0};var Ki=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ne(e[0].attributes.value)?ne(e[0].value)||e[0].value===""?ei:{value:e[0].value,isValid:!0}:ei:Zs}return Zs},Zi=(e,{valueAsNumber:t,valueAsDate:s,setValueAs:i})=>ne(e)?e:t?e===""?NaN:e&&+e:s&&ge(e)?new Date(e):i?i(e):e;const ai={isValid:!1,value:null};var en=e=>Array.isArray(e)?e.reduce((t,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:t,ai):ai;function ti(e){const t=e.ref;return Ns(t)?t.files:ks(t)?en(e.refs).value:Xi(t)?[...t.selectedOptions].map(({value:s})=>s):Ga(t)?Ki(e.refs).value:Zi(ne(t.value)?e.ref.value:t.value,e)}var Uo=(e,t,s,i)=>{const n={};for(const r of e){const l=_(t,r);l&&ie(n,r,l._f)}return{criteriaMode:s,names:[...e],fields:n,shouldUseNativeValidation:i}},gt=e=>e instanceof RegExp,Aa=e=>ne(e)?e:gt(e)?e.source:le(e)?gt(e.value)?e.value.source:e.value:e,si=e=>({isOnSubmit:!e||e===ze.onSubmit,isOnBlur:e===ze.onBlur,isOnChange:e===ze.onChange,isOnAll:e===ze.all,isOnTouch:e===ze.onTouched});const ii="AsyncFunction";var Wo=e=>!!e&&!!e.validate&&!!(Ae(e.validate)&&e.validate.constructor.name===ii||le(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===ii)),Go=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ni=(e,t,s)=>!s&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const za=(e,t,s,i)=>{for(const n of s||Object.keys(e)){const r=_(e,n);if(r){const{_f:l,...c}=r;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],n)&&!i)return!0;if(l.ref&&t(l.ref,l.name)&&!i)return!0;if(za(c,t))break}else if(le(c)&&za(c,t))break}}};function ri(e,t,s){const i=_(e,s);if(i||Tt(s))return{error:i,name:s};const n=s.split(".");for(;n.length;){const r=n.join("."),l=_(t,r),c=_(e,r);if(l&&!Array.isArray(l)&&s!==r)return{name:s};if(c&&c.type)return{name:r,error:c};if(c&&c.root&&c.root.type)return{name:`${r}.root`,error:c.root};n.pop()}return{name:s}}var Qo=(e,t,s,i)=>{s(e);const{name:n,...r}=e;return xe(r)||i&&Object.keys(r).length>=Object.keys(t).length||Object.keys(r).find(l=>t[l]===(!i||ze.all))},Xo=(e,t,s)=>!e||!t||e===t||Ia(e).some(i=>i&&(s?i===t:i.startsWith(t)||t.startsWith(i))),Jo=(e,t,s,i,n)=>n.isOnAll?!1:!s&&n.isOnTouch?!(t||e):(s?i.isOnBlur:n.isOnBlur)?!e:(s?i.isOnChange:n.isOnChange)?e:!0,Ko=(e,t)=>!js(_(e,t)).length&&pe(e,t),Zo=(e,t,s)=>{const i=Ia(_(e,s));return ie(i,Gi,t[s]),ie(e,s,i),e};function li(e,t,s="validate"){if(ge(e)||Array.isArray(e)&&e.every(ge)||Be(e)&&!e)return{type:s,message:ge(e)?e:"",ref:t}}var ua=e=>le(e)&&!gt(e)?e:{value:e,message:""},oi=async(e,t,s,i,n,r)=>{const{ref:l,refs:c,required:d,maxLength:h,minLength:j,min:m,max:v,pattern:g,validate:f,name:x,valueAsNumber:y,mount:S}=e._f,u=_(s,x);if(!S||t.has(x))return{};const N=c?c[0]:l,F=k=>{n&&N.reportValidity&&(N.setCustomValidity(Be(k)?"":k||""),N.reportValidity())},E={},$=ks(l),Q=Ga(l),q=$||Q,L=(y||Ns(l))&&ne(l.value)&&ne(u)||ht(l)&&l.value===""||u===""||Array.isArray(u)&&!u.length||y&&typeof u=="number"&&isNaN(u),K=Bo.bind(null,x,i,E),A=(k,R,H,J=Ie.maxLength,U=Ie.minLength)=>{const W=k?R:H;E[x]={type:k?J:U,message:W,ref:l,...K(k?J:U,W)}};if(r?!Array.isArray(u)||!u.length:d&&(!q&&(L||be(u))||Be(u)&&!u||Q&&!Ki(c).isValid||$&&!en(c).isValid)){const{value:k,message:R}=ge(d)?{value:!!d,message:d}:ua(d);if(k&&(E[x]={type:Ie.required,message:R,ref:N,...K(Ie.required,R)},!i))return F(R),E}if(!L&&(!be(m)||!be(v))){let k,R;const H=ua(v),J=ua(m);if(!be(u)&&!isNaN(u)){const U=l.valueAsNumber||u&&+u;be(H.value)||(k=U>H.value),be(J.value)||(R=U<J.value)}else{const U=l.valueAsDate||new Date(u),W=C=>new Date(new Date().toDateString()+" "+C),re=l.type=="time",Z=l.type=="week";ge(H.value)&&u&&(k=re?W(u)>W(H.value):Z?u>H.value:U>new Date(H.value)),ge(J.value)&&u&&(R=re?W(u)<W(J.value):Z?u<J.value:U<new Date(J.value))}if((k||R)&&(A(!!k,H.message,J.message,Ie.max,Ie.min),!i))return F(E[x].message),E}if((h||j)&&!L&&(ge(u)||r&&Array.isArray(u))){const k=ua(h),R=ua(j),H=!be(k.value)&&u.length>+k.value,J=!be(R.value)&&u.length<+R.value;if((H||J)&&(A(H,k.message,R.message),!i))return F(E[x].message),E}if(g&&!L&&ge(u)){const{value:k,message:R}=ua(g);if(gt(k)&&!u.match(k)&&(E[x]={type:Ie.pattern,message:R,ref:l,...K(Ie.pattern,R)},!i))return F(R),E}if(f){if(Ae(f)){const k=await f(u,s),R=li(k,N);if(R&&(E[x]={...R,...K(Ie.validate,R.message)},!i))return F(R.message),E}else if(le(f)){let k={};for(const R in f){if(!xe(k)&&!i)break;const H=li(await f[R](u,s),N,R);H&&(k={...H,...K(R,H.message)},F(H.message),i&&(E[x]=k))}if(!xe(k)&&(E[x]={ref:N,...k},!i))return E}}return F(!0),E};const ec={mode:ze.onSubmit,reValidateMode:ze.onChange,shouldFocusError:!0},an={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}};function ac(e={}){let t={...ec,...e},s={...de(an),isLoading:Ae(t.defaultValues),errors:t.errors||{},disabled:t.disabled||!1},i={},n=le(t.defaultValues)||le(t.values)?de(t.defaultValues||t.values)||{}:{},r=t.shouldUnregister?{}:de(n),l={action:!1,mount:!1,watch:!1,keepIsValid:!1},c={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},d,h=0;const j={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={...j};let v={...m};const g={array:Ks(),state:Ks()},f=t.criteriaMode===ze.all,x=o=>p=>{clearTimeout(h),h=setTimeout(o,p)},y=async o=>{if(!l.keepIsValid&&!t.disabled&&(m.isValid||v.isValid||o)){let p;t.resolver?(p=xe((await L()).errors),S()):p=await k({fields:i,onlyCheckValid:!0,eventType:pa.VALID}),p!==s.isValid&&g.state.next({isValid:p})}},S=(o,p)=>{!t.disabled&&(m.isValidating||m.validatingFields||v.isValidating||v.validatingFields)&&((o||Array.from(c.mount)).forEach(b=>{b&&(p?ie(s.validatingFields,b,p):pe(s.validatingFields,b))}),g.state.next({validatingFields:s.validatingFields,isValidating:!xe(s.validatingFields)}))},u=()=>{s.dirtyFields=Da(n,r)},N=(o,p=[],b,D,M=!0,P=!0)=>{if(D&&b&&!t.disabled){if(l.action=!0,P&&Array.isArray(_(i,o))){const O=b(_(i,o),D.argA,D.argB);M&&ie(i,o,O)}if(P&&Array.isArray(_(s.errors,o))){const O=b(_(s.errors,o),D.argA,D.argB);M&&ie(s.errors,o,O),Ko(s.errors,o)}if((m.touchedFields||v.touchedFields)&&P&&Array.isArray(_(s.touchedFields,o))){const O=b(_(s.touchedFields,o),D.argA,D.argB);M&&ie(s.touchedFields,o,O)}(m.dirtyFields||v.dirtyFields)&&u(),g.state.next({name:o,isDirty:H(o,p),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else ie(r,o,p)},F=(o,p)=>{ie(s.errors,o,p),g.state.next({errors:s.errors})},E=o=>{s.errors=o,g.state.next({errors:s.errors,isValid:!1})},$=(o,p,b,D)=>{const M=_(i,o);if(M){const P=ne(_(r,o)),O=_(r,o,ne(b)?_(n,o):b);ne(O)||D&&D.defaultChecked||p?ie(r,o,p?O:ti(M._f)):W(o,O),l.mount&&!l.action&&(y(),P&&s.isDirty&&(m.isDirty||v.isDirty)&&(H()||(s.isDirty=!1,g.state.next({...s}))))}},Q=(o,p,b,D,M)=>{let P=!1,O=!1;const z={name:o};if(!t.disabled){if(!b||D){(m.isDirty||v.isDirty)&&(O=s.isDirty,s.isDirty=z.isDirty=H(),P=O!==z.isDirty);const G=qe(_(n,o),p);O=!!_(s.dirtyFields,o),G?pe(s.dirtyFields,o):ie(s.dirtyFields,o,!0),z.dirtyFields=s.dirtyFields,P=P||(m.dirtyFields||v.dirtyFields)&&O!==!G}if(b){const G=_(s.touchedFields,o);G||(ie(s.touchedFields,o,b),z.touchedFields=s.touchedFields,P=P||(m.touchedFields||v.touchedFields)&&G!==b)}P&&M&&g.state.next(z)}return P?z:{}},q=(o,p,b,D)=>{const M=_(s.errors,o),P=(m.isValid||v.isValid)&&Be(p)&&s.isValid!==p;if(t.delayError&&b?(d=x(()=>F(o,b)),d(t.delayError)):(clearTimeout(h),d=null,b?ie(s.errors,o,b):pe(s.errors,o)),(b?!qe(M,b):M)||!xe(D)||P){const O={...D,...P&&Be(p)?{isValid:p}:{},errors:s.errors,name:o};s={...s,...O},g.state.next(O)}},L=async o=>(S(o,!0),await t.resolver(r,t.context,Uo(o||c.mount,i,t.criteriaMode,t.shouldUseNativeValidation))),K=async o=>{const{errors:p}=await L(o);if(S(o),o)for(const b of o){const D=_(p,b);D?ie(s.errors,b,D):pe(s.errors,b)}else s.errors=p;return p},A=async({name:o,eventType:p})=>{if(e.validate){const b=await e.validate({formValues:r,formState:s,name:o,eventType:p});if(le(b))for(const D in b)b[D]&&je(`${Ut}.${D}`,{message:ge(b.message)?b.message:"",type:Ie.validate});else ge(b)||!b?je(Ut,{message:b||"",type:Ie.validate}):$e(Ut);return b}return!0},k=async({fields:o,onlyCheckValid:p,name:b,eventType:D,context:M={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(M.runRootValidation=!0,!await A({name:b,eventType:D})&&(M.valid=!1,p)))return M.valid;for(const P in o){const O=o[P];if(O){const{_f:z,...G}=O;if(z){const fe=c.array.has(z.name),Re=O._f&&Wo(O._f);Re&&m.validatingFields&&S([z.name],!0);const we=await oi(O,c.disabled,r,f,t.shouldUseNativeValidation&&!p,fe);if(Re&&m.validatingFields&&S([z.name]),we[z.name]&&(M.valid=!1,p)||(!p&&(_(we,z.name)?fe?Zo(s.errors,we,z.name):ie(s.errors,z.name,we[z.name]):pe(s.errors,z.name)),e.shouldUseNativeValidation&&we[z.name]))break}!xe(G)&&await k({context:M,onlyCheckValid:p,fields:G,name:P,eventType:D})}}return M.valid},R=()=>{for(const o of c.unMount){const p=_(i,o);p&&(p._f.refs?p._f.refs.every(b=>!Wt(b)):!Wt(p._f.ref))&&oa(o)}c.unMount=new Set},H=(o,p)=>!t.disabled&&(o&&p&&ie(r,o,p),!qe(ae(),n)),J=(o,p,b)=>$o(o,c,{...l.mount?r:ne(p)?n:ge(o)?{[o]:p}:p},b,p),U=o=>js(_(l.mount?r:n,o,t.shouldUnregister?_(n,o,[]):[])),W=(o,p,b={})=>{const D=_(i,o);let M=p;if(D){const P=D._f;P&&(!P.disabled&&ie(r,o,Zi(p,P)),M=ht(P.ref)&&be(p)?"":p,Xi(P.ref)?[...P.ref.options].forEach(O=>O.selected=M.includes(O.value)):P.refs?Ga(P.ref)?P.refs.forEach(O=>{(!O.defaultChecked||!O.disabled)&&(Array.isArray(M)?O.checked=!!M.find(z=>z===O.value):O.checked=M===O.value||!!M)}):P.refs.forEach(O=>O.checked=O.value===M):Ns(P.ref)?P.ref.value="":(P.ref.value=M,P.ref.type||g.state.next({name:o,values:de(r)})))}(b.shouldDirty||b.shouldTouch)&&Q(o,M,b.shouldTouch,b.shouldDirty,!0),b.shouldValidate&&V(o)},re=(o,p,b)=>{for(const D in p){if(!p.hasOwnProperty(D))return;const M=p[D],P=o+"."+D,O=_(i,P);(c.array.has(o)||le(M)||O&&!O._f)&&!sa(M)?re(P,M,b):W(P,M,b)}},Z=(o,p,b={})=>{const D=_(i,o),M=c.array.has(o),P=de(p),O=_(r,o),z=qe(O,P);if(ie(r,o,P),M)g.array.next({name:o,values:de(r)}),(m.isDirty||m.dirtyFields||v.isDirty||v.dirtyFields)&&b.shouldDirty&&(u(),g.state.next({name:o,dirtyFields:s.dirtyFields,isDirty:H(o,P)}));else{const G=Array.isArray(P)&&!P.length||xe(P);!D||D._f||be(P)||G?W(o,P,b):re(o,P,b)}if(!z){const G=ni(o,c);g.state.next({...G&&s,name:l.mount||G?o:void 0,values:de(r)})}},C=o=>{const p=Ae(o)?o(r):o;qe(r,p)||(r={...r,...p},g.state.next({...s,values:r}))},T=async o=>{l.mount=!0;const p=o.target;let b=p.name,D=!0;const M=_(i,b),P=G=>{D=Number.isNaN(G)||sa(G)&&isNaN(G.getTime())||qe(G,_(r,b,G))},O=si(t.mode),z=si(t.reValidateMode);if(M){let G,fe;const Re=p.type?ti(M._f):Po(o),we=o.type===pa.BLUR||o.type===pa.FOCUS_OUT,jn=!Go(M._f)&&!e.validate&&!t.resolver&&!_(s.errors,b)&&!M._f.deps||Jo(we,_(s.touchedFields,b),s.isSubmitted,z,O),Rt=ni(b,c,we);ie(r,b,Re),we?(!p||!p.readOnly)&&(M._f.onBlur&&M._f.onBlur(o),d&&d(0)):M._f.onChange&&M._f.onChange(o);const Bt=Q(b,Re,we),wn=!xe(Bt)||Rt;if(!we&&g.state.next({name:b,type:o.type,values:de(r)}),jn)return(m.isValid||v.isValid)&&(t.mode==="onBlur"?we&&y():we||y()),wn&&g.state.next({name:b,...Rt?{}:Bt});if(!t.resolver&&e.validate&&await A({name:b,eventType:o.type}),!we&&Rt&&g.state.next({...s}),t.resolver){const{errors:Ts}=await L([b]);if(S([b]),P(Re),D){const Nn=ri(s.errors,i,b),Es=ri(Ts,i,Nn.name||b);G=Es.error,b=Es.name,fe=xe(Ts)}}else S([b],!0),G=(await oi(M,c.disabled,r,f,t.shouldUseNativeValidation))[b],S([b]),P(Re),D&&(G?fe=!1:(m.isValid||v.isValid)&&(fe=await k({fields:i,onlyCheckValid:!0,name:b,eventType:o.type})));D&&(M._f.deps&&(!Array.isArray(M._f.deps)||M._f.deps.length>0)&&V(M._f.deps),q(b,fe,G,Bt))}},I=(o,p)=>{if(_(s.errors,p)&&o.focus)return o.focus(),1},V=async(o,p={})=>{let b,D;const M=Ia(o);if(t.resolver){const P=await K(ne(o)?o:M);b=xe(P),D=o?!M.some(O=>_(P,O)):b}else o?(D=(await Promise.all(M.map(async P=>{const O=_(i,P);return await k({fields:O&&O._f?{[P]:O}:O,eventType:pa.TRIGGER})}))).every(Boolean),!(!D&&!s.isValid)&&y()):D=b=await k({fields:i,name:o,eventType:pa.TRIGGER});return g.state.next({...!ge(o)||(m.isValid||v.isValid)&&b!==s.isValid?{}:{name:o},...t.resolver||!o?{isValid:b}:{},errors:s.errors}),p.shouldFocus&&!D&&za(i,I,o?M:c.mount),D},ae=(o,p)=>{let b={...l.mount?r:n};return p&&(b=Qi(p.dirtyFields?s.dirtyFields:s.touchedFields,b)),ne(o)?b:ge(o)?_(b,o):o.map(D=>_(b,D))},ce=(o,p)=>({invalid:!!_((p||s).errors,o),isDirty:!!_((p||s).dirtyFields,o),error:_((p||s).errors,o),isValidating:!!_(s.validatingFields,o),isTouched:!!_((p||s).touchedFields,o)}),$e=o=>{const p=o?Ia(o):void 0;p==null||p.forEach(b=>pe(s.errors,b)),p?p.forEach(b=>{g.state.next({name:b,errors:s.errors})}):g.state.next({errors:{}})},je=(o,p,b)=>{const D=(_(i,o,{_f:{}})._f||{}).ref,M=_(s.errors,o)||{},{ref:P,message:O,type:z,...G}=M;ie(s.errors,o,{...G,...p,ref:D}),g.state.next({name:o,errors:s.errors,isValid:!1}),b&&b.shouldFocus&&D&&D.focus&&D.focus()},Me=(o,p)=>Ae(o)?g.state.subscribe({next:b=>"values"in b&&o(b.values||J(void 0,p),b)}):J(o,p,!0),Pe=o=>g.state.subscribe({next:p=>{if(Xo(o.name,p.name,o.exact)&&Qo(p,o.formState||m,$t,o.reRenderRoot)){const b={...r};o.callback({values:b,...s,...p,defaultValues:n})}}}).unsubscribe,zt=o=>(l.mount=!0,v={...v,...o.formState},Pe({...o,formState:{...j,...o.formState}})),oa=(o,p={})=>{for(const b of o?Ia(o):c.mount)c.mount.delete(b),c.array.delete(b),p.keepValue||(pe(i,b),pe(r,b)),!p.keepError&&pe(s.errors,b),!p.keepDirty&&pe(s.dirtyFields,b),!p.keepTouched&&pe(s.touchedFields,b),!p.keepIsValidating&&pe(s.validatingFields,b),!t.shouldUnregister&&!p.keepDefaultValue&&pe(n,b);g.state.next({values:de(r)}),g.state.next({...s,...p.keepDirty?{isDirty:H()}:{}}),!p.keepIsValid&&y()},ka=({disabled:o,name:p})=>{if(Be(o)&&l.mount||o||c.disabled.has(p)){const M=c.disabled.has(p)!==!!o;o?c.disabled.add(p):c.disabled.delete(p),M&&l.mount&&!l.action&&y()}},Ca=(o,p={})=>{let b=_(i,o);const D=Be(p.disabled)||Be(t.disabled),M=!c.registerName.has(o)&&b&&b._f&&!b._f.mount;return ie(i,o,{...b||{},_f:{...b&&b._f?b._f:{ref:{name:o}},name:o,mount:!0,...p}}),c.mount.add(o),b&&!M?ka({disabled:Be(p.disabled)?p.disabled:t.disabled,name:o}):$(o,!0,p.value),{...D?{disabled:p.disabled||t.disabled}:{},...t.progressive?{required:!!p.required,min:Aa(p.min),max:Aa(p.max),minLength:Aa(p.minLength),maxLength:Aa(p.maxLength),pattern:Aa(p.pattern)}:{},name:o,onChange:T,onBlur:T,ref:P=>{if(P){c.registerName.add(o),Ca(o,p),c.registerName.delete(o),b=_(i,o);const O=ne(P.value)&&P.querySelectorAll&&P.querySelectorAll("input,select,textarea")[0]||P,z=qo(O),G=b._f.refs||[];if(z?G.find(fe=>fe===O):O===b._f.ref)return;ie(i,o,{_f:{...b._f,...z?{refs:[...G.filter(Wt),O,...Array.isArray(_(n,o))?[{}]:[]],ref:{type:O.type,name:o}}:{ref:O}}}),$(o,!1,void 0,O)}else b=_(i,o,{}),b._f&&(b._f.mount=!1),(t.shouldUnregister||p.shouldUnregister)&&!(Oo(c.array,o)&&l.action)&&c.unMount.add(o)}}},Fa=()=>t.shouldFocusError&&za(i,I,c.mount),_t=o=>{Be(o)&&(g.state.next({disabled:o}),za(i,(p,b)=>{const D=_(i,b);D&&(p.disabled=D._f.disabled||o,Array.isArray(D._f.refs)&&D._f.refs.forEach(M=>{M.disabled=D._f.disabled||o}))},0,!1))},Xa=(o,p)=>async b=>{let D;b&&(b.preventDefault&&b.preventDefault(),b.persist&&b.persist());let M=de(r);if(g.state.next({isSubmitting:!0}),t.resolver){const{errors:P,values:O}=await L();S(),s.errors=P,M=de(O)}else await k({fields:i,eventType:pa.SUBMIT});if(c.disabled.size)for(const P of c.disabled)pe(M,P);if(pe(s.errors,Gi),xe(s.errors)){g.state.next({errors:{}});try{await o(M,b)}catch(P){D=P}}else p&&await p({...s.errors},b),Fa(),setTimeout(Fa);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:xe(s.errors)&&!D,submitCount:s.submitCount+1,errors:s.errors}),D)throw D},Lt=(o,p={})=>{_(i,o)&&(ne(p.defaultValue)?Z(o,de(_(n,o))):(Z(o,p.defaultValue),ie(n,o,de(p.defaultValue))),p.keepTouched||pe(s.touchedFields,o),p.keepDirty||(pe(s.dirtyFields,o),s.isDirty=p.defaultValue?H(o,de(_(n,o))):H()),p.keepError||(pe(s.errors,o),m.isValid&&y()),g.state.next({...s}))},Ja=(o,p={})=>{const b=o?de(o):n,D=de(b),M=xe(o),P=M?n:D;if(p.keepDefaultValues||(n=b),!p.keepValues){if(p.keepDirtyValues){const O=new Set([...c.mount,...Object.keys(Da(n,r))]);for(const z of Array.from(O)){const G=_(s.dirtyFields,z),fe=_(r,z),Re=_(P,z);G&&!ne(fe)?ie(P,z,fe):!G&&!ne(Re)&&Z(z,Re)}}else{if(ys&&ne(o))for(const O of c.mount){const z=_(i,O);if(z&&z._f){const G=Array.isArray(z._f.refs)?z._f.refs[0]:z._f.ref;if(ht(G)){const fe=G.closest("form");if(fe){fe.reset();break}}}}if(p.keepFieldsRef)for(const O of c.mount)Z(O,_(P,O));else i={}}r=t.shouldUnregister?p.keepDefaultValues?de(n):{}:de(P),g.array.next({values:{...P}}),g.state.next({values:{...P}})}c={mount:p.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!m.isValid||!!p.keepIsValid||!!p.keepDirtyValues||!t.shouldUnregister&&!xe(P),l.watch=!!t.shouldUnregister,l.keepIsValid=!!p.keepIsValid,l.action=!1,p.keepErrors||(s.errors={}),g.state.next({submitCount:p.keepSubmitCount?s.submitCount:0,isDirty:M?!1:p.keepDirty?s.isDirty:!!(p.keepDefaultValues&&!qe(o,n)),isSubmitted:p.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:M?{}:p.keepDirtyValues?p.keepDefaultValues&&r?Da(n,r):s.dirtyFields:p.keepDefaultValues&&o?Da(n,o):p.keepDirty?s.dirtyFields:{},touchedFields:p.keepTouched?s.touchedFields:{},errors:p.keepErrors?s.errors:{},isSubmitSuccessful:p.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},ca=(o,p)=>Ja(Ae(o)?o(r):o,{...t.resetOptions,...p}),Ka=(o,p={})=>{const b=_(i,o),D=b&&b._f;if(D){const M=D.refs?D.refs[0]:D.ref;M.focus&&setTimeout(()=>{M.focus(),p.shouldSelect&&Ae(M.select)&&M.select()})}},$t=o=>{s={...s,...o}},Za={control:{register:Ca,unregister:oa,getFieldState:ce,handleSubmit:Xa,setError:je,_subscribe:Pe,_runSchema:L,_updateIsValidating:S,_focusError:Fa,_getWatch:J,_getDirty:H,_setValid:y,_setFieldArray:N,_setDisabledField:ka,_setErrors:E,_getFieldArray:U,_reset:Ja,_resetDefaultValues:()=>Ae(t.defaultValues)&&t.defaultValues().then(o=>{ca(o,t.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:R,_disableForm:_t,_subjects:g,_proxyFormState:m,get _fields(){return i},get _formValues(){return r},get _state(){return l},set _state(o){l=o},get _defaultValues(){return n},get _names(){return c},set _names(o){c=o},get _formState(){return s},get _options(){return t},set _options(o){t={...t,...o}}},subscribe:zt,trigger:V,register:Ca,handleSubmit:Xa,watch:Me,setValue:Z,setValues:C,getValues:ae,reset:ca,resetField:Lt,clearErrors:$e,unregister:oa,setError:je,setFocus:Ka,getFieldState:ce};return{...Za,formControl:Za}}function Et(e={}){const t=he.useRef(void 0),s=he.useRef(void 0),[i,n]=he.useState(()=>({...de(an),isLoading:Ae(e.defaultValues),errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Ae(e.defaultValues)?void 0:e.defaultValues}));if(!t.current)if(e.formControl)t.current={...e.formControl,formState:i},e.defaultValues&&!Ae(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:l,...c}=ac(e);t.current={...c,formState:i}}const r=t.current.control;return r._options=e,Lo(()=>{const l=r._subscribe({formState:r._proxyFormState,callback:()=>n({...r._formState}),reRenderRoot:!0});return n(c=>({...c,isReady:!0})),r._formState.isReady=!0,l},[r]),he.useEffect(()=>r._disableForm(e.disabled),[r,e.disabled]),he.useEffect(()=>{e.mode&&(r._options.mode=e.mode),e.reValidateMode&&(r._options.reValidateMode=e.reValidateMode)},[r,e.mode,e.reValidateMode]),he.useEffect(()=>{e.errors&&(r._setErrors(e.errors),r._focusError())},[r,e.errors]),he.useEffect(()=>{e.shouldUnregister&&r._subjects.state.next({values:r._getWatch()})},[r,e.shouldUnregister]),he.useEffect(()=>{if(r._proxyFormState.isDirty){const l=r._getDirty();l!==i.isDirty&&r._subjects.state.next({isDirty:l})}},[r,i.isDirty]),he.useEffect(()=>{var l;e.values&&!qe(e.values,s.current)?(r._reset(e.values,{keepFieldsRef:!0,...r._options.resetOptions}),!((l=r._options.resetOptions)===null||l===void 0)&&l.keepIsValid||r._setValid(),s.current=e.values,n(c=>({...c}))):r._resetDefaultValues()},[r,e.values]),he.useEffect(()=>{r._state.mount||(r._setValid(),r._state.mount=!0),r._state.watch&&(r._state.watch=!1,r._subjects.state.next({...r._formState})),r._removeUnmounted()}),t.current.formState=he.useMemo(()=>_o(i,r),[r,i]),t.current}const ot=["FLAP Izquierdo","FLAP Derecho","FLAP Bilateral","FLA Izquierdo","FLA Derecho","FLA Bilateral","Fisura Palatina"];function ci(e){return e?ot.includes(e)?e:"__otro__":""}function tc(e){if(!e)return null;const t=Se(e);if(!Fe(t))return null;const s=new Date,i=_e(s,t),n=new Date(t.getFullYear()+i,t.getMonth(),t.getDate()),r=ea(s,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Ze(s,l);return{years:i,months:r,days:c}}function sc({years:e,months:t,days:s}){const i=[];return e>0&&i.push(`${e} ${e===1?"año":"años"}`),t>0&&i.push(`${t} ${t===1?"mes":"meses"}`),(s>0||i.length===0)&&i.push(`${s} ${s===1?"día":"días"}`),i.join(", ")}function tn({initial:e,onSubmit:t,onCancel:s,busy:i}){const{register:n,handleSubmit:r,reset:l,watch:c,formState:{errors:d}}=Et({defaultValues:e??{patientCode:"",fullName:"",birthDate:"",diagnosis:"",idNumber:"",sex:"",address:"",guardian:"",guardianIdNumber:"",guardianPhone:"",allergies:"",clinicalHistory:"",patientType:"mny"}});w.useEffect(()=>{e&&(l(e),f(ci(e.diagnosis)),y(e.diagnosis&&!ot.includes(e.diagnosis)?e.diagnosis:""))},[e]);const h=c("birthDate"),j=c("patientType"),m=tc(h),v=oe(j),[g,f]=w.useState(ci(e==null?void 0:e.diagnosis)),[x,y]=w.useState(e!=null&&e.diagnosis&&!ot.includes(e.diagnosis)?e.diagnosis:""),[S,u]=w.useState(!1),N=F=>{const E=g==="__otro__"?x.trim():g;if(!E){u(!0);return}u(!1),t({...F,diagnosis:E})};return a.jsxs("form",{onSubmit:r(N),className:"space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"sm:col-span-2 form-group mb-0",children:[a.jsx("label",{className:"label",children:"Nombre completo *"}),a.jsx("input",{className:`input ${d.fullName?"input-error":""}`,placeholder:"Nombre y apellidos",...n("fullName",{required:"Requerido"})}),d.fullName&&a.jsx("p",{className:"error-msg",children:d.fullName.message})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Tipo de paciente *"}),a.jsxs("select",{className:"input",...n("patientType",{required:!0}),children:[a.jsx("option",{value:"mny",children:"MNY — Hospital Munay"}),a.jsx("option",{value:"jwi",children:"JWI — Fundación JIWAQUI"}),a.jsx("option",{value:"ext",children:"EXT — Externo"})]})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Código de paciente"}),a.jsxs("div",{className:"flex",children:[a.jsxs("span",{className:"inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 text-sm font-bold select-none",style:{backgroundColor:v.lightBg,color:v.bg},children:[v.label," -"]}),a.jsx("input",{className:"input rounded-l-none flex-1",placeholder:"ej: 001",...n("patientCode")})]}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Número correlativo para buscar al paciente por código."})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Fecha de nacimiento"}),a.jsx("input",{type:"date",className:"input",...n("birthDate")}),m!==null&&a.jsxs("p",{className:"text-xs font-medium mt-1",style:{color:"#09D6D4"},children:["Edad: ",a.jsx("span",{className:"font-bold",children:sc(m)})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Sexo"}),a.jsxs("select",{className:"input",...n("sex"),children:[a.jsx("option",{value:"",children:"— Seleccionar —"}),a.jsx("option",{value:"masculino",children:"Masculino"}),a.jsx("option",{value:"femenino",children:"Femenino"})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"CI del paciente"}),a.jsx("input",{className:"input",placeholder:"Ej: 12345678",...n("idNumber")})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Diagnóstico *"}),a.jsxs("select",{className:`input ${S?"input-error":""}`,value:g,onChange:F=>{f(F.target.value),u(!1),F.target.value!=="__otro__"&&y("")},children:[a.jsx("option",{value:"",children:"— Seleccionar diagnóstico —"}),ot.map(F=>a.jsx("option",{value:F,children:F},F)),a.jsx("option",{value:"__otro__",children:"Otro (especificar)"})]}),g==="__otro__"&&a.jsx("input",{className:`input mt-2 ${S?"input-error":""}`,placeholder:"Especificar diagnóstico...",value:x,onChange:F=>{y(F.target.value),u(!1)}}),S&&a.jsx("p",{className:"error-msg",children:"Selecciona o especifica el diagnóstico"})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Dirección"}),a.jsx("input",{className:"input",placeholder:"Calle, ciudad, región",...n("address")})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"sm:col-span-1 form-group mb-0",children:[a.jsx("label",{className:"label",children:"Responsable / Tutor"}),a.jsx("input",{className:"input",placeholder:"Nombre del responsable",...n("guardian")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"CI del responsable"}),a.jsx("input",{className:"input",placeholder:"Ej: 12345678",...n("guardianIdNumber")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Teléfono del responsable"}),a.jsx("input",{className:"input",placeholder:"+591 7XXXXXXX",...n("guardianPhone")})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Alergias / Medicamentos"}),a.jsx("textarea",{rows:2,className:"input resize-none",placeholder:"Alergias conocidas, medicamentos actuales...",...n("allergies")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Historial clínico"}),a.jsx("textarea",{rows:3,className:"input resize-none",placeholder:"Antecedentes, cirugías previas, observaciones...",...n("clinicalHistory")})]}),a.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[a.jsx("button",{type:"button",onClick:s,className:"btn-secondary btn",children:"Cancelar"}),a.jsx("button",{type:"submit",disabled:i,className:"btn-primary btn",children:i?a.jsx(Ge,{className:"w-4 h-4 animate-spin"}):e!=null&&e.id?"Guardar cambios":"Registrar paciente"})]})]})}const sn={historia_clinica:{label:"Historia Clínica",specialty:"Medicina",icon:"📋",color:"#2563eb",light:"#dbeafe"},epicrisis:{label:"Epicrisis",specialty:"Cirugía",icon:"📄",color:"#7c3aed",light:"#ede9fe"},ficha_social:{label:"Ficha Social",specialty:"Trabajo Social",icon:"👥",color:"#0891b2",light:"#cffafe"},historia_quirurgica:{label:"Historia Quirúrgica",specialty:"Cirugía",icon:"🔬",color:"#dc2626",light:"#fee2e2"},evolucion:{label:"Evolución",specialty:"Medicina",icon:"📝",color:"#16a34a",light:"#dcfce7"},consentimiento:{label:"Consentimiento",specialty:"Medicina",icon:"✍️",color:"#d97706",light:"#fef3c7"}},ic=Object.entries(sn).map(([e,t])=>({value:e,...t})),Ba={draft:{label:"Borrador",tw:"bg-slate-100 text-slate-700 border-slate-300",color:"#64748b"},in_progress:{label:"En progreso",tw:"bg-amber-100 text-amber-700 border-amber-300",color:"#d97706"},completed:{label:"Completado",tw:"bg-green-100 text-green-700 border-green-300",color:"#16a34a"},signed:{label:"Firmado",tw:"bg-blue-100 text-blue-700 border-blue-300",color:"#2563eb"},archived:{label:"Archivado",tw:"bg-gray-100 text-gray-500 border-gray-200",color:"#6b7280"}},nn=Object.entries(Ba).map(([e,t])=>({value:e,label:t.label})),nc=10*1024*1024,rc=new Set(["application/pdf","image/jpeg","image/png","image/webp"]),rn={"application/pdf":"pdf","image/jpeg":"jpg","image/png":"png","image/webp":"webp"},lc={documents:"documents",images:"images",reports:"reports",signatures:"signatures",consents:"consents"};function oc(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-zA-Z0-9._-]/g,"_").replace(/_{2,}/g,"_").toLowerCase()}function cc(e,t,s){const i=lc[t],n=oc(s.name.replace(/\.[^/.]+$/,"")),r=rn[s.type]??"bin",l=Date.now();return`patients/${e}/${i}/${n}_${l}.${r}`}function dc(e){if(!e)throw new Error("No se proporcionó archivo.");if(e.size>nc)throw new Error(`El archivo excede el límite de 10 MB (${(e.size/1024/1024).toFixed(1)} MB).`);if(!rc.has(e.type))throw new Error(`Tipo de archivo no permitido: ${e.type}. Se aceptan PDF, JPG, PNG y WEBP.`)}async function pc(e,t,s){if(!e)throw new Error("patientId es requerido.");dc(s);const i=cc(e,t,s),n=tr(mr,i);try{const r=await sr(n,s,{contentType:s.type,customMetadata:{patientId:e,category:t,originalName:s.name}});return{url:await ir(r.ref),path:i,name:s.name,size:s.size,type:s.type}}catch(r){throw console.error("[uploadService] uploadFile failed:",r),new Error("Error al subir el archivo. Intente nuevamente.")}}function uc(e,t,s){return{type:rn[e.type]??"bin",name:t,originalName:e.name,url:e.url,storagePath:e.path,size:e.size,mimeType:e.type,category:s,uploadedAt:new Date().toISOString()}}const Ta=Symbol("remove");function mc(e){return!e||typeof e!="object"?!1:typeof e._methodName=="string"||e._delegate&&typeof e._delegate._methodName=="string"}function rs(e){if(e===void 0)return Ta;if(e===null)return null;switch(typeof e){case"boolean":return e;case"string":return e;case"number":return Number.isFinite(e)?e:null;case"function":return Ta}if(e instanceof Date||mc(e))return e;if(Array.isArray(e)){const t=[];for(const s of e)if(Array.isArray(s))t.push(JSON.stringify(s));else{const i=rs(s);t.push(i===Ta?null:i)}return t}if(typeof e=="object"){const t={};for(const[s,i]of Object.entries(e)){const n=rs(i);n!==Ta&&(t[s]=n)}return t}return null}function ln(e){if(e==null)return{};if(typeof e!="object"||Array.isArray(e))throw new TypeError("sanitizeFirestoreData: expected a plain object");const t={};for(const[s,i]of Object.entries(e)){const n=rs(i);n!==Ta&&(t[s]=n)}return t}const on=e=>Qe(ue,"patients",e,"documents"),cn=(e,t)=>Ue(ue,"patients",e,"documents",t),Cs=(e,t)=>{const s=ln({patientId:e,documentType:t.documentType??"historia_clinica",specialty:t.specialty??"medicina",status:t.status??"draft",version:1,metadata:{printable:!0,signed:!1,locked:!1,...t.metadata},clinicalData:t.clinicalData??{},attachments:t.attachments??[],createdBy:t.createdBy??{uid:"",name:""},updatedBy:t.updatedBy??{uid:"",name:""}});return Ya(on(e),{...s,createdAt:We(),updatedAt:We()})},ls=(e,t,s)=>{const i=ln(s);return Va(cn(e,t),{...i,updatedAt:We()})},xc=(e,t)=>Ua(cn(e,t)),hc=(e,t)=>{const s=wt(on(e),Nt("createdAt","desc"));return Ha(s,i=>t(i.docs.map(n=>({id:n.id,...n.data()}))))};async function ft({patientId:e,documentType:t,specialty:s,clinicalData:i,user:n}){if(e)try{const r=n?{uid:n.uid,name:n.displayName??n.email??"Sistema"}:{uid:"",name:"Sistema"};await Cs(e,{documentType:t,specialty:s,status:"completed",clinicalData:i,createdBy:r,updatedBy:r,metadata:{printable:!0,signed:!1,locked:!1}})}catch{}}function dn(e){const[t,s]=w.useState([]),[i,n]=w.useState(!0);return w.useEffect(()=>{if(!e){s([]),n(!1);return}return n(!0),hc(e,l=>{s(l),n(!1)})},[e]),{documents:t,loading:i}}const ma={IDLE:"idle",SAVING:"saving",SAVED:"saved",ERROR:"error"};function gc({data:e,onSave:t,interval:s=15e3,enabled:i=!0}){const[n,r]=w.useState(ma.IDLE),[l,c]=w.useState(null),d=w.useRef(!1),h=w.useRef(e);w.useEffect(()=>{h.current=e},[e]);const j=w.useCallback(async()=>{if(!d.current){d.current=!0,r(ma.SAVING);try{await t(h.current),c(new Date),r(ma.SAVED),setTimeout(()=>r(ma.IDLE),3e3)}catch{r(ma.ERROR)}finally{d.current=!1}}},[t]);return w.useEffect(()=>{if(!i)return;const m=setInterval(j,s);return()=>clearInterval(m)},[j,s,i]),{status:n,lastSaved:l,saveNow:j}}function bt(e){return sn[e]??{label:e,specialty:"—",icon:"📁",color:"#64748b",light:"#f1f5f9"}}function di(e){if(!e)return"—";const t=e.toDate?e.toDate():new Date(e);return t.toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"})+" "+t.toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"})}function fc(e){return e?(e.toDate?e.toDate():new Date(e)).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"}):"—"}function os(e){return{uid:(e==null?void 0:e.uid)??"",name:(e==null?void 0:e.displayName)??(e==null?void 0:e.email)??"Sistema"}}function pn(e){return e.replace(/([A-Z])/g," $1").replace(/_/g," ").replace(/^\s?/,"").replace(/^./,t=>t.toUpperCase())}function cs({status:e,size:t="sm"}){const s=Ba[e]??Ba.draft,i=t==="xs"?"text-[9px] px-1.5 py-px":t==="lg"?"text-xs px-3 py-1":"text-[10px] px-2 py-0.5";return a.jsx("span",{className:`inline-flex items-center font-semibold rounded-full border ${i} ${s.tw}`,children:s.label})}function bc(){return a.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-gray-400",children:[a.jsx("div",{className:"text-4xl mb-3",children:"📁"}),a.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Sin documentos clínicos"}),a.jsx("p",{className:"text-xs mt-1",children:"Crea el primer documento usando el botón de arriba."})]})}function vc({documents:e=[],loading:t=!1,patientId:s,onView:i,onEdit:n,onNew:r}){const{canEdit:l,isAdmin:c}=Ee(),[d,h]=w.useState(null),j=async()=>{if(d)try{await xc(s,d.id),Y.success("Documento eliminado")}catch(m){Y.error(m.message)}finally{h(null)}};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:["Documentos clínicos · ",e.length]}),l&&a.jsxs("button",{onClick:r,className:"btn btn-primary btn-sm gap-1",children:[a.jsx(ra,{className:"w-3.5 h-3.5"}),"Nuevo documento"]})]}),t?a.jsx("div",{className:"flex justify-center py-8",children:a.jsx(Ge,{className:"w-6 h-6 animate-spin text-gray-300"})}):e.length===0?a.jsx(bc,{}):a.jsx("div",{className:"rounded-xl border border-gray-100 overflow-hidden",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:a.jsx("tr",{children:["Fecha","Tipo","Especialidad","Profesional","Estado",""].map(m=>a.jsx("th",{className:"text-left px-4 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wide",children:m},m))})}),a.jsx("tbody",{className:"divide-y divide-gray-50",children:e.map(m=>{var g;const v=bt(m.documentType);return a.jsxs("tr",{className:"hover:bg-gray-50 transition-colors group",children:[a.jsx("td",{className:"px-4 py-3 text-xs text-gray-500 whitespace-nowrap",children:fc(m.createdAt)}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-base",children:v.icon}),a.jsx("span",{className:"text-sm font-semibold text-gray-800",children:v.label})]})}),a.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:v.specialty}),a.jsx("td",{className:"px-4 py-3 text-xs text-gray-600 max-w-[140px] truncate",children:((g=m.createdBy)==null?void 0:g.name)||"—"}),a.jsx("td",{className:"px-4 py-3",children:a.jsx(cs,{status:m.status})}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity",children:[a.jsx("button",{onClick:()=>i(m),title:"Ver",className:"p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",children:a.jsx(ut,{className:"w-3.5 h-3.5"})}),l&&a.jsx("button",{onClick:()=>n(m),title:"Editar",className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors",children:a.jsx(ja,{className:"w-3.5 h-3.5"})}),a.jsx("button",{onClick:()=>i(m),title:"Imprimir",className:"p-1.5 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors",children:a.jsx(fa,{className:"w-3.5 h-3.5"})}),c&&a.jsx("button",{onClick:()=>h(m),title:"Eliminar",className:"p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors",children:a.jsx(mt,{className:"w-3.5 h-3.5"})})]})})]},m.id)})})]})}),a.jsx(Ra,{open:!!d,title:"Eliminar documento",message:`¿Eliminar "${bt(d==null?void 0:d.documentType).label}"? Esta acción no se puede deshacer.`,onConfirm:j,onCancel:()=>h(null)})]})}function ds(e){return e==null||e===""?a.jsx("span",{className:"text-gray-300 italic",children:"—"}):typeof e=="boolean"?e?"Sí":"No":typeof e=="object"&&!Array.isArray(e)?a.jsx("div",{className:"pl-3 border-l-2 border-gray-100 space-y-1 mt-1",children:Object.entries(e).map(([t,s])=>a.jsxs("div",{className:"flex gap-2",children:[a.jsx("span",{className:"text-[10px] font-semibold text-gray-400 shrink-0 w-28 pt-px",children:pn(t)}),a.jsx("span",{className:"text-xs text-gray-700",children:ds(s)})]},t))}):Array.isArray(e)?a.jsx("ul",{className:"list-disc pl-4 space-y-0.5",children:e.map((t,s)=>a.jsx("li",{className:"text-xs text-gray-700",children:ds(t)},s))}):a.jsx("span",{className:"text-xs text-gray-800 whitespace-pre-wrap",children:String(e)})}function yc({data:e}){return!e||Object.keys(e).length===0?a.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin datos clínicos registrados."}):a.jsx("div",{className:"space-y-3",children:Object.entries(e).map(([t,s])=>a.jsxs("div",{className:"grid grid-cols-[140px_1fr] gap-3 text-sm py-2 border-b border-gray-50 last:border-0",children:[a.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wide pt-0.5",children:pn(t)}),a.jsx("div",{children:ds(s)})]},t))})}function jc({document:e,patientId:t,onUpdated:s}){const{canEdit:i,user:n}=Ee(),[r,l]=w.useState(!1),c=async d=>{try{await ls(t,e.id,{status:d,updatedBy:os(n)}),Y.success("Estado actualizado"),l(!1),s==null||s()}catch(h){Y.error(h.message)}};return i?a.jsxs("div",{className:"relative",children:[a.jsxs("button",{onClick:()=>l(d=>!d),className:"flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 transition-colors hover:bg-gray-50",children:[a.jsx(cs,{status:e.status,size:"xs"}),a.jsx(ms,{className:`w-3 h-3 text-gray-400 transition-transform ${r?"rotate-180":""}`})]}),r&&a.jsx("div",{className:"absolute top-full mt-1 right-0 z-20 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden min-w-[160px]",children:nn.map(d=>a.jsx("button",{onClick:()=>c(d.value),className:`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 transition-colors
                ${e.status===d.value?"font-bold text-blue-600":"text-gray-700"}`,children:d.label},d.value))})]}):a.jsx(cs,{status:e.status,size:"lg"})}function wc({document:e,patientId:t,onClose:s,onEdit:i}){var l,c,d,h,j;if(!e)return null;const n=bt(e.documentType),r=(l=e.metadata)==null?void 0:l.locked;return a.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",onClick:s,children:[a.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-sm"}),a.jsxs("div",{className:"relative z-10 flex flex-col bg-white shadow-2xl w-full max-w-xl h-full",onClick:m=>m.stopPropagation(),children:[a.jsxs("div",{className:"px-6 pt-5 pb-4 border-b border-gray-100 shrink-0",style:{borderTop:`3px solid ${n.color}`},children:[a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-2xl",children:n.icon}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-extrabold text-gray-900 leading-tight",children:n.label}),a.jsx("p",{className:"text-xs text-gray-400",children:n.specialty})]})]}),a.jsx("button",{onClick:s,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition",children:a.jsx(Ne,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-3",children:[a.jsx(jc,{document:e,patientId:t}),!r&&i&&a.jsxs("button",{onClick:()=>i(e),className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium",children:[a.jsx(ja,{className:"w-3 h-3"}),"Editar"]}),r&&a.jsx("span",{className:"text-[10px] text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-medium",children:"🔒 Documento bloqueado"})]})]}),a.jsx("div",{className:"px-6 py-3 bg-gray-50 border-b border-gray-100 shrink-0",children:a.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] text-gray-500",children:[a.jsxs("span",{children:["Creado: ",a.jsx("strong",{className:"text-gray-700",children:di(e.createdAt)})]}),a.jsxs("span",{children:["Por: ",a.jsx("strong",{className:"text-gray-700",children:((c=e.createdBy)==null?void 0:c.name)||"—"})]}),a.jsxs("span",{children:["Actualizado: ",a.jsx("strong",{className:"text-gray-700",children:di(e.updatedAt)})]}),a.jsxs("span",{children:["Por: ",a.jsx("strong",{className:"text-gray-700",children:((d=e.updatedBy)==null?void 0:d.name)||"—"})]})]})}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4",children:"Datos clínicos"}),a.jsx(yc,{data:e.clinicalData})]}),a.jsx("div",{className:"px-6 py-4 border-t border-gray-100 bg-gray-50 shrink-0",children:a.jsxs("div",{className:"flex items-center justify-between text-[10px] text-gray-400",children:[a.jsxs("span",{children:["v",e.version??1," · ID: ",(h=e.id)==null?void 0:h.slice(0,8),"…"]}),((j=e.metadata)==null?void 0:j.printable)&&a.jsx("span",{className:"text-green-600 font-medium",children:"✓ Imprimible"})]})})]})]})}function B({label:e,children:t,hint:s}){return a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:e}),t,s&&a.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:s})]})}function De({register:e,name:t,placeholder:s}){return a.jsx("input",{className:"input",placeholder:s,...e(t)})}function se({register:e,name:t,rows:s=3,placeholder:i}){return a.jsx("textarea",{rows:s,className:"input resize-none",placeholder:i,...e(t)})}function Fs({register:e,prefix:t}){const s=[{key:"peso",label:"Peso (kg)",placeholder:"ej: 12.5"},{key:"talla",label:"Talla (cm)",placeholder:"ej: 90"},{key:"temp",label:"Temp (°C)",placeholder:"ej: 36.5"},{key:"fc",label:"FC (lpm)",placeholder:"ej: 90"},{key:"fr",label:"FR (rpm)",placeholder:"ej: 20"},{key:"spo2",label:"SpO₂ (%)",placeholder:"ej: 98"}];return a.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-6 gap-3",children:s.map(i=>a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:i.label}),a.jsx("input",{className:"input",placeholder:i.placeholder,...e(`${t}.${i.key}`)})]},i.key))})}function ve({children:e}){return a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-1 pb-0.5 border-b border-gray-100",children:e})}function Nc({register:e}){return a.jsxs(a.Fragment,{children:[a.jsx(ve,{children:"Motivo de consulta"}),a.jsx(B,{label:"Motivo de consulta *",children:a.jsx(se,{register:e,name:"clinicalData.motivoConsulta",rows:2,placeholder:"Describa el motivo principal de la consulta..."})}),a.jsx(B,{label:"Enfermedad actual",children:a.jsx(se,{register:e,name:"clinicalData.enfermedadActual",rows:3,placeholder:"Inicio, evolución, síntomas asociados..."})}),a.jsx(ve,{children:"Antecedentes"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Antecedentes personales",children:a.jsx(se,{register:e,name:"clinicalData.antecedentesPersonales",rows:3,placeholder:"Patologías previas, hospitalizaciones, cirugías..."})}),a.jsx(B,{label:"Antecedentes familiares",children:a.jsx(se,{register:e,name:"clinicalData.antecedentesFamiliares",rows:3,placeholder:"Enfermedades hereditarias, patologías en familia..."})})]}),a.jsx(ve,{children:"Examen físico"}),a.jsx(Fs,{register:e,prefix:"clinicalData.signosVitales"}),a.jsx(B,{label:"Examen físico general",children:a.jsx(se,{register:e,name:"clinicalData.examenFisico",rows:3,placeholder:"Hallazgos del examen físico..."})}),a.jsx(ve,{children:"Diagnóstico y plan"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Diagnóstico clínico",children:a.jsx(se,{register:e,name:"clinicalData.diagnostico",rows:2,placeholder:"Diagnóstico presuntivo o definitivo..."})}),a.jsx(B,{label:"Plan de tratamiento",children:a.jsx(se,{register:e,name:"clinicalData.planTratamiento",rows:2,placeholder:"Indicaciones, tratamiento propuesto..."})})]}),a.jsx(B,{label:"Observaciones",children:a.jsx(se,{register:e,name:"clinicalData.observaciones",rows:2,placeholder:"Notas adicionales..."})})]})}function kc({register:e}){return a.jsxs(a.Fragment,{children:[a.jsx(ve,{children:"Datos de internación"}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[a.jsx(B,{label:"Fecha ingreso",children:a.jsx("input",{type:"date",className:"input",...e("clinicalData.fechaIngreso")})}),a.jsx(B,{label:"Hora ingreso",children:a.jsx("input",{type:"time",className:"input",...e("clinicalData.horaIngreso")})}),a.jsx(B,{label:"Fecha egreso",children:a.jsx("input",{type:"date",className:"input",...e("clinicalData.fechaEgreso")})}),a.jsx(B,{label:"Hora egreso",children:a.jsx("input",{type:"time",className:"input",...e("clinicalData.horaEgreso")})})]}),a.jsx(ve,{children:"Diagnósticos"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Diagnóstico pre-quirúrgico",children:a.jsx(se,{register:e,name:"clinicalData.diagnosticoPreQx",rows:2,placeholder:"CIE-10, diagnóstico de ingreso..."})}),a.jsx(B,{label:"Diagnóstico post-quirúrgico",children:a.jsx(se,{register:e,name:"clinicalData.diagnosticoPostQx",rows:2,placeholder:"CIE-10, diagnóstico de egreso..."})})]}),a.jsx(ve,{children:"Procedimiento quirúrgico"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsx(B,{label:"Procedimiento realizado",children:a.jsx(De,{register:e,name:"clinicalData.procedimiento",placeholder:"Nombre del procedimiento"})}),a.jsx(B,{label:"Tipo de anestesia",children:a.jsxs("select",{className:"input",...e("clinicalData.anestesia"),children:[a.jsx("option",{value:"",children:"Seleccionar..."}),a.jsx("option",{value:"general",children:"General"}),a.jsx("option",{value:"local",children:"Local"}),a.jsx("option",{value:"regional",children:"Regional"}),a.jsx("option",{value:"sedacion",children:"Sedación"})]})}),a.jsx(B,{label:"Duración (min)",children:a.jsx(De,{register:e,name:"clinicalData.duracionMin",placeholder:"ej: 120"})})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsx(B,{label:"Sangrado (ml)",children:a.jsx(De,{register:e,name:"clinicalData.sangradoMl",placeholder:"ej: 50"})}),a.jsx(B,{label:"Cirujano",children:a.jsx(De,{register:e,name:"clinicalData.cirujano",placeholder:"Nombre del cirujano"})})]}),a.jsx(ve,{children:"Indicaciones de alta"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Dieta",children:a.jsx(se,{register:e,name:"clinicalData.indicaciones.dieta",rows:2,placeholder:"Indicaciones dietarias..."})}),a.jsx(B,{label:"Cuidado de herida",children:a.jsx(se,{register:e,name:"clinicalData.indicaciones.cuidadoHerida",rows:2,placeholder:"Cuidados locales, curaciones..."})}),a.jsx(B,{label:"Precauciones generales",children:a.jsx(se,{register:e,name:"clinicalData.indicaciones.precauciones",rows:2,placeholder:"Restricciones, cuidados especiales..."})}),a.jsx(B,{label:"Actividad / reposo",children:a.jsx(se,{register:e,name:"clinicalData.indicaciones.actividad",rows:2,placeholder:"Limitaciones físicas, reposo..."})})]}),a.jsx(B,{label:"Signos de alarma",children:a.jsx(se,{register:e,name:"clinicalData.signosAlarma",rows:2,placeholder:"Fiebre >38°C, sangrado excesivo, dificultad respiratoria..."})}),a.jsx(ve,{children:"Próxima cita"}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsx(B,{label:"Fecha",children:a.jsx("input",{type:"date",className:"input",...e("clinicalData.proximaCita.fecha")})}),a.jsx(B,{label:"Hora",children:a.jsx("input",{type:"time",className:"input",...e("clinicalData.proximaCita.hora")})})]}),a.jsx(B,{label:"Observaciones de egreso",children:a.jsx(se,{register:e,name:"clinicalData.observaciones",rows:2,placeholder:"Notas adicionales del alta..."})})]})}function Cc({register:e}){return a.jsxs(a.Fragment,{children:[a.jsx(ve,{children:"Composición familiar"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Tipo de familia",children:a.jsxs("select",{className:"input",...e("clinicalData.tipoFamilia"),children:[a.jsx("option",{value:"",children:"Seleccionar..."}),a.jsx("option",{value:"nuclear",children:"Nuclear"}),a.jsx("option",{value:"monoparental",children:"Monoparental"}),a.jsx("option",{value:"extensa",children:"Extensa"}),a.jsx("option",{value:"reconstituida",children:"Reconstituida"}),a.jsx("option",{value:"unipersonal",children:"Unipersonal"})]})}),a.jsx(B,{label:"N° integrantes",children:a.jsx(De,{register:e,name:"clinicalData.nIntegrantes",placeholder:"ej: 4"})})]}),a.jsx(B,{label:"Descripción familiar",children:a.jsx(se,{register:e,name:"clinicalData.composicionFamiliar",rows:3,placeholder:"Integrantes, edades, relación con el paciente..."})}),a.jsx(ve,{children:"Situación socioeconómica"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Ocupación padre / tutor",children:a.jsx(De,{register:e,name:"clinicalData.ocupacionPadre",placeholder:"Ocupación o trabajo"})}),a.jsx(B,{label:"Ocupación madre / tutora",children:a.jsx(De,{register:e,name:"clinicalData.ocupacionMadre",placeholder:"Ocupación o trabajo"})}),a.jsx(B,{label:"Nivel educativo",children:a.jsxs("select",{className:"input",...e("clinicalData.nivelEducativo"),children:[a.jsx("option",{value:"",children:"Seleccionar..."}),a.jsx("option",{value:"ninguno",children:"Ninguno"}),a.jsx("option",{value:"primaria",children:"Primaria"}),a.jsx("option",{value:"secundaria",children:"Secundaria"}),a.jsx("option",{value:"tecnico",children:"Técnico/Universitario"})]})}),a.jsx(B,{label:"Condición económica",children:a.jsxs("select",{className:"input",...e("clinicalData.condicionEconomica"),children:[a.jsx("option",{value:"",children:"Seleccionar..."}),a.jsx("option",{value:"muy_baja",children:"Muy baja"}),a.jsx("option",{value:"baja",children:"Baja"}),a.jsx("option",{value:"media",children:"Media"}),a.jsx("option",{value:"media_alta",children:"Media alta"})]})})]}),a.jsx(ve,{children:"Vivienda y red de apoyo"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Tipo de vivienda",children:a.jsxs("select",{className:"input",...e("clinicalData.tipoVivienda"),children:[a.jsx("option",{value:"",children:"Seleccionar..."}),a.jsx("option",{value:"propia",children:"Propia"}),a.jsx("option",{value:"alquilada",children:"Alquilada"}),a.jsx("option",{value:"prestada",children:"Prestada"}),a.jsx("option",{value:"otro",children:"Otro"})]})}),a.jsx(B,{label:"Red de apoyo",children:a.jsx(De,{register:e,name:"clinicalData.redApoyo",placeholder:"Familiares, vecinos, organizaciones..."})})]}),a.jsx(B,{label:"Observaciones sociales",children:a.jsx(se,{register:e,name:"clinicalData.observaciones",rows:3,placeholder:"Observaciones del trabajador/a social..."})})]})}function Fc({register:e}){return a.jsxs(a.Fragment,{children:[a.jsx(ve,{children:"Motivo de consulta"}),a.jsx(B,{label:"Motivo quirúrgico *",children:a.jsx(se,{register:e,name:"clinicalData.motivoConsulta",rows:2,placeholder:"Indicación quirúrgica, motivo de la intervención..."})}),a.jsx(B,{label:"Antecedentes quirúrgicos",children:a.jsx(se,{register:e,name:"clinicalData.antecedentesQx",rows:2,placeholder:"Cirugías previas, complicaciones..."})}),a.jsx(ve,{children:"Examen preoperatorio"}),a.jsx(Fs,{register:e,prefix:"clinicalData.signosVitales"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsx(B,{label:"Peso (kg)",children:a.jsx(De,{register:e,name:"clinicalData.peso",placeholder:"ej: 14.5"})}),a.jsx(B,{label:"Talla (cm)",children:a.jsx(De,{register:e,name:"clinicalData.talla",placeholder:"ej: 95"})}),a.jsx(B,{label:"Ayuno (horas)",children:a.jsx(De,{register:e,name:"clinicalData.ayunoHoras",placeholder:"ej: 8"})})]}),a.jsx(B,{label:"Examen físico preoperatorio",children:a.jsx(se,{register:e,name:"clinicalData.examenFisicoPreQx",rows:3,placeholder:"Hallazgos relevantes para la cirugía..."})}),a.jsx(ve,{children:"Plan quirúrgico"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsx(B,{label:"Procedimiento planificado",children:a.jsx(De,{register:e,name:"clinicalData.procedimientoPlanificado",placeholder:"Tipo de cirugía a realizar"})}),a.jsx(B,{label:"Tipo de anestesia planificada",children:a.jsxs("select",{className:"input",...e("clinicalData.tipoAnestesia"),children:[a.jsx("option",{value:"",children:"Seleccionar..."}),a.jsx("option",{value:"general",children:"General"}),a.jsx("option",{value:"local",children:"Local"}),a.jsx("option",{value:"regional",children:"Regional"}),a.jsx("option",{value:"sedacion",children:"Sedación"})]})})]}),a.jsx(B,{label:"Diagnóstico preoperatorio",children:a.jsx(se,{register:e,name:"clinicalData.diagnosticoPreQx",rows:2,placeholder:"Diagnóstico que indica la cirugía..."})}),a.jsx(B,{label:"Observaciones",children:a.jsx(se,{register:e,name:"clinicalData.observaciones",rows:2,placeholder:"Notas adicionales del cirujano..."})})]})}function Sc({register:e}){return a.jsxs(a.Fragment,{children:[a.jsx(B,{label:"Fecha de evolución",children:a.jsx("input",{type:"date",className:"input",...e("clinicalData.fecha")})}),a.jsx(B,{label:"Subjetivo (S)",children:a.jsx(se,{register:e,name:"clinicalData.subjetivo",rows:2,placeholder:"Lo que refiere el paciente/familia..."})}),a.jsx(B,{label:"Objetivo (O)",children:a.jsx(se,{register:e,name:"clinicalData.objetivo",rows:2,placeholder:"Signos vitales, examen físico..."})}),a.jsx(Fs,{register:e,prefix:"clinicalData.signosVitales"}),a.jsx(B,{label:"Análisis (A)",children:a.jsx(se,{register:e,name:"clinicalData.analisis",rows:2,placeholder:"Evaluación clínica, diagnóstico diferencial..."})}),a.jsx(B,{label:"Plan (P)",children:a.jsx(se,{register:e,name:"clinicalData.plan",rows:2,placeholder:"Indicaciones, cambios de tratamiento..."})})]})}function Ac({documentType:e,register:t}){switch(e){case"historia_clinica":return a.jsx(Nc,{register:t});case"epicrisis":return a.jsx(kc,{register:t});case"ficha_social":return a.jsx(Cc,{register:t});case"historia_quirurgica":return a.jsx(Fc,{register:t});case"evolucion":return a.jsx(Sc,{register:t});default:return a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Contenido clínico"}),a.jsx("textarea",{rows:6,className:"input resize-none",placeholder:"Ingrese el contenido del documento...",...t("clinicalData.contenido")})]})}}function Dc({status:e,lastSaved:t}){if(e===ma.IDLE&&!t)return null;const s={saving:{text:"Guardando…",cls:"text-amber-600"},saved:{text:"Guardado",cls:"text-green-600"},error:{text:"Error al guardar",cls:"text-red-500"},idle:{text:t?`Guardado ${t.toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"})}`:"",cls:"text-gray-400"}},{text:i,cls:n}=s[e]??s.idle;return i?a.jsxs("span",{className:`flex items-center gap-1 text-[10px] ${n}`,children:[a.jsx(xs,{className:"w-3 h-3"}),i]}):null}function Tc({open:e,onClose:t,patientId:s,document:i}){const{user:n}=Ee(),r=!!(i!=null&&i.id),{register:l,handleSubmit:c,watch:d,reset:h,getValues:j,formState:{errors:m}}=Et({defaultValues:i??{documentType:"historia_clinica",status:"draft",clinicalData:{}}});w.useEffect(()=>{h(i??{documentType:"historia_clinica",status:"draft",clinicalData:{}})},[i,h]);const[v,g]=w.useState(!1),[f,x]=w.useState((i==null?void 0:i.id)??null),y=d("documentType"),{status:S,lastSaved:u}=gc({data:null,onSave:async()=>{if(!f)return;const E=j();await ls(s,f,{clinicalData:E.clinicalData??{},status:E.status,updatedBy:os(n)})},interval:15e3,enabled:r||!!f}),N=async E=>{g(!0);try{const $=os(n);if(r||f){const Q=f??i.id;await ls(s,Q,{...E,status:E.status,updatedBy:$}),Y.success("Documento actualizado")}else{const Q=await Cs(s,{...E,createdBy:$,updatedBy:$});x(Q.id),Y.success("Documento creado")}t()}catch($){Y.error($.message)}finally{g(!1)}},F=r?"Editar documento clínico":"Nuevo documento clínico";return a.jsx(Na,{open:e,onClose:t,title:F,size:"xl",children:a.jsxs("form",{onSubmit:c(N),className:"space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Tipo de documento *"}),a.jsx("select",{className:`input ${m.documentType?"input-error":""}`,...l("documentType",{required:!0}),disabled:r,children:ic.map(E=>a.jsxs("option",{value:E.value,children:[E.icon," ",E.label]},E.value))})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Estado"}),a.jsx("select",{className:"input",...l("status"),children:nn.map(E=>a.jsx("option",{value:E.value,children:E.label},E.value))})]})]}),a.jsx("div",{className:"border-t border-gray-100"}),a.jsx("div",{className:"space-y-4",children:a.jsx(Ac,{documentType:y,register:l})}),a.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-gray-100",children:[a.jsx(Dc,{status:S,lastSaved:u}),a.jsxs("div",{className:"flex gap-2 ml-auto",children:[a.jsx("button",{type:"button",onClick:t,className:"btn btn-secondary",children:"Cancelar"}),a.jsxs("button",{type:"submit",disabled:v,className:"btn btn-primary gap-1.5",children:[v?a.jsx(Ge,{className:"w-4 h-4 animate-spin"}):a.jsx(zn,{className:"w-4 h-4"}),r?"Guardar cambios":"Crear documento"]})]})]})]})})}function Ec(e){var i,n,r,l;const t=bt(e.documentType),s=(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate():new Date;return{id:`doc_${e.id}`,date:s,dateIso:s.toISOString().slice(0,10),type:"document",icon:t.icon,title:t.label,subtitle:t.specialty,by:((n=e.createdBy)==null?void 0:n.name)??"",statusTw:((r=Ba[e.status])==null?void 0:r.tw)??"",statusLabel:((l=Ba[e.status])==null?void 0:l.label)??"",color:t.color}}function Mc(e){const t={programado:"#64748b",confirmado:"#2563eb",realizado:"#16a34a",cancelado:"#dc2626"};return{id:`surg_${e.id}`,date:new Date(e.date+"T"+(e.startTime??"08:00")),dateIso:e.date,type:"surgery",icon:"🔬",title:e.surgeryType,subtitle:"Cirugía · "+(e.startTime??""),by:e.surgeon??"",statusTw:"",statusLabel:e.status,color:t[e.status]??"#64748b"}}function Pc(e){const t={Fonoaudiología:"#7c3aed",Kinesiología:"#0891b2",Psicología:"#db2777",Psicomotricidad:"#16a34a",Psicopedagogía:"#0f766e",default:"#64748b"};return{id:`ther_${e.id}`,date:new Date(e.date+"T"+(e.startTime??"08:00")),dateIso:e.date,type:"therapy",icon:"🩺",title:e.therapyType,subtitle:e.startTime?`${e.startTime}${e.therapist?" · "+e.therapist:""}`:e.therapist??"",by:e.therapist??"",statusTw:"",statusLabel:e.status,color:t[e.therapyType]??t.default}}function Oc({dateIso:e}){const t=new Date(e+"T12:00");return a.jsxs("div",{className:"flex items-center gap-3 my-3 first:mt-0",children:[a.jsxs("div",{className:"shrink-0 text-center bg-gray-900 text-white rounded-xl px-3 py-1.5 min-w-[56px]",children:[a.jsx("p",{className:"text-[10px] uppercase tracking-wide opacity-70 leading-none",children:X(t,"MMM",{locale:ke})}),a.jsx("p",{className:"text-lg font-bold leading-none mt-0.5",children:X(t,"d")})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-bold text-gray-700 capitalize",children:X(t,"EEEE",{locale:ke})}),a.jsx("p",{className:"text-[10px] text-gray-400",children:X(t,"yyyy")})]})]})}function Ic({event:e}){return a.jsxs("div",{className:"flex gap-3 ml-2 pb-3 last:pb-0",children:[a.jsxs("div",{className:"flex flex-col items-center shrink-0",children:[a.jsx("div",{className:"w-7 h-7 rounded-xl flex items-center justify-center text-sm shadow-sm border border-white",style:{background:e.color+"22",borderColor:e.color+"44"},children:e.icon}),a.jsx("div",{className:"w-px flex-1 mt-1",style:{background:e.color+"33"}})]}),a.jsx("div",{className:"flex-1 min-w-0 pb-3",children:a.jsx("div",{className:"bg-white rounded-xl border border-gray-100 px-3 py-2.5 shadow-sm hover:border-gray-200 transition-colors",children:a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("p",{className:"text-sm font-bold text-gray-800 leading-tight truncate",style:{color:e.color},children:e.title}),e.subtitle&&a.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5 truncate",children:e.subtitle}),e.by&&a.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:e.by})]}),e.statusLabel&&a.jsx("span",{className:`text-[9px] font-bold px-1.5 py-px rounded-full border shrink-0 ${e.statusTw||"bg-gray-100 text-gray-500 border-gray-200"}`,children:e.statusLabel})]})})})]})}function zc({documents:e=[],surgeries:t=[],therapies:s=[],loading:i=!1}){const n=w.useMemo(()=>[...e.map(Ec),...t.map(Mc),...s.map(Pc)].sort((c,d)=>d.date-c.date),[e,t,s]),r=w.useMemo(()=>{const l={};for(const c of n)l[c.dateIso]||(l[c.dateIso]=[]),l[c.dateIso].push(c);return Object.entries(l).sort(([c],[d])=>d.localeCompare(c))},[n]);return i?a.jsx("div",{className:"flex justify-center py-12 text-gray-300",children:a.jsx("div",{className:"animate-pulse text-4xl",children:"⏳"})}):r.length===0?a.jsxs("div",{className:"flex flex-col items-center justify-center py-14 text-gray-400",children:[a.jsx("div",{className:"text-4xl mb-3",children:"🗓"}),a.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Sin eventos registrados"}),a.jsx("p",{className:"text-xs mt-1 text-gray-400",children:"Las cirugías, terapias y documentos aparecerán aquí."})]}):a.jsx("div",{className:"space-y-0",children:r.map(([l,c])=>a.jsxs("div",{children:[a.jsx(Oc,{dateIso:l}),a.jsx("div",{children:c.map(d=>a.jsx(Ic,{event:d},d.id))})]},l))})}function _c(e){if(!e)return null;const t=Se(e);if(!Fe(t))return null;const s=new Date,i=_e(s,t),n=new Date(t.getFullYear()+i,t.getMonth(),t.getDate()),r=ea(s,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Ze(s,l);return{years:i,months:r,days:c}}function Lc(e){if(!e)return"-";const t=[];return e.years>0&&t.push(`${e.years}a`),e.months>0&&t.push(`${e.months}m`),(e.days>0||t.length===0)&&t.push(`${e.days}d`),t.join(" ")}const $c=[{id:"datos",label:"Datos",Icon:Je},{id:"documentos",label:"Documentos",Icon:Je},{id:"timeline",label:"Timeline",Icon:xs}];function Rc({patient:e,surgeries:t,therapies:s}){const i=t.filter(r=>r.patientId===e.id).sort((r,l)=>l.date.localeCompare(r.date)),n=s.filter(r=>r.patientId===e.id).sort((r,l)=>l.date.localeCompare(r.date));return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[["Diagnóstico",e.diagnosis],["Tipo",oe(e.patientType).longLabel],["Fecha de nac.",e.birthDate?X(Se(e.birthDate),"dd/MM/yyyy"):"-"],["Edad",Lc(_c(e.birthDate))],["CI paciente",e.idNumber||"-"],["Sexo",e.sex==="masculino"?"Masculino":e.sex==="femenino"?"Femenino":"-"],["Responsable",e.guardian||"-"],["CI responsable",e.guardianIdNumber||"-"],["Tel. responsable",e.guardianPhone||"-"],["Dirección",e.address||"-"]].map(([r,l])=>a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium",children:r}),a.jsx("p",{className:"text-gray-800 font-medium",children:l})]},r))}),e.allergies&&a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium mb-1",children:"Alergias / Medicamentos"}),a.jsx("p",{className:"text-sm text-gray-700 bg-amber-50 rounded-lg p-3",children:e.allergies})]}),e.clinicalHistory&&a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium mb-1",children:"Historial clínico"}),a.jsx("p",{className:"text-sm text-gray-700 bg-gray-50 rounded-lg p-3",children:e.clinicalHistory})]}),a.jsxs("section",{children:[a.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3",children:[a.jsx(ia,{className:"w-4 h-4 text-teal-600"}),"Cirugías (",i.length,")"]}),i.length===0?a.jsx("p",{className:"text-sm text-gray-400",children:"Sin cirugías registradas."}):a.jsx("ul",{className:"space-y-2",children:i.map(r=>a.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-medium text-gray-800",children:r.surgeryType}),a.jsxs("p",{className:"text-xs text-gray-500",children:[X(new Date(r.date+"T12:00"),"d MMM yyyy",{locale:ke})," · ",r.startTime," · ",r.surgeon||"—"]})]}),a.jsx(Ye,{variant:r.status})]},r.id))})]}),a.jsxs("section",{children:[a.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3",children:[a.jsx(Ma,{className:"w-4 h-4 text-purple-600"}),"Terapias (",n.length,")"]}),n.length===0?a.jsx("p",{className:"text-sm text-gray-400",children:"Sin terapias registradas."}):a.jsx("ul",{className:"space-y-2",children:n.map(r=>a.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-medium text-gray-800",children:r.therapyType}),a.jsxs("p",{className:"text-xs text-gray-500",children:[X(new Date(r.date+"T12:00"),"d MMM yyyy",{locale:ke})," · ",r.startTime," · ",r.therapist||"—"]})]}),a.jsx(Ye,{variant:r.status??"programado"})]},r.id))})]})]})}function Bc({patient:e}){const{documents:t,loading:s}=dn(e.id),[i,n]=w.useState(null),[r,l]=w.useState(null),[c,d]=w.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsx(vc,{documents:t,loading:s,patientId:e.id,onView:n,onEdit:h=>{l(h),d(!0)},onNew:()=>{l(null),d(!0)}}),i&&a.jsx(wc,{document:i,patientId:e.id,onClose:()=>n(null),onEdit:h=>{n(null),l(h),d(!0)}}),a.jsx(Tc,{open:c,onClose:()=>{d(!1),l(null)},patientId:e.id,document:r})]})}function qc({patient:e}){const{documents:t,loading:s}=dn(e.id),{surgeries:i,therapies:n}=ye(),r=i.filter(c=>c.patientId===e.id),l=n.filter(c=>c.patientId===e.id);return a.jsx(zc,{documents:t,surgeries:r,therapies:l,loading:s})}function Hc({patient:e}){const{surgeries:t,therapies:s}=ye(),[i,n]=w.useState("datos");return a.jsxs("div",{className:"space-y-0",children:[a.jsx("div",{className:"flex gap-0 -mx-1 mb-4 border-b border-gray-100",children:$c.map(({id:r,label:l,Icon:c})=>a.jsxs("button",{onClick:()=>n(r),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors
              ${i===r?"border-blue-600 text-blue-700":"border-transparent text-gray-400 hover:text-gray-700"}`,children:[a.jsx(c,{className:"w-3.5 h-3.5"}),l]},r))}),i==="datos"&&a.jsx(Rc,{patient:e,surgeries:t,therapies:s}),i==="documentos"&&a.jsx(Bc,{patient:e}),i==="timeline"&&a.jsx(qc,{patient:e})]})}function Vc(e){if(!e)return"";const t=Se(e);return Fe(t)?_e(new Date,t):""}function un(e,t){const s=i=>{const n=String(i??"").replace(/"/g,'""');return/[,"\n]/.test(n)?`"${n}"`:n};return[e.map(s).join(","),...t.map(i=>i.map(s).join(","))].join(`
`)}function mn(e,t){const s=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(s);Object.assign(document.createElement("a"),{href:i,download:t}).click(),URL.revokeObjectURL(i)}function Yc(e){const t=["Nombre","Fecha Nac.","Edad","Diagnóstico","Teléfono","Dirección","Responsable","Tel. Responsable","Tipo"],s=e.map(i=>[i.fullName,i.birthDate,Vc(i.birthDate),i.diagnosis,i.phone,i.address,i.guardian,i.guardianPhone,i.patientType==="flap"?"FLAP":"Externo"]);mn(un(t,s),"pacientes.csv")}function Uc(e){const t=["Fecha","Hora","Paciente","Tipo","Cirujano","Anestesiólogo","Instrumentadora","Ayuno","Estado","Cotización","Pagado","Pago Completo","Ayuda Social"],s=e.map(i=>[i.date,i.startTime,i.patientName,i.surgeryType,i.surgeon,i.anesthesiologist,i.scrubNurse,i.fastingTime,i.status,i.quotation,i.amountPaid,i.paymentComplete?"Sí":"No",i.socialAid?"Sí":"No"]);mn(un(t,s),"cirugias.csv")}const Mt=[15,118,110];function Wc(e){if(!e)return"";const t=Se(e);return Fe(t)?`${_e(new Date,t)} años`:""}function Ss(e,t,s,i=!1){const n=i?297:210;e.setFillColor(...Mt),e.rect(0,0,n,22,"F"),e.setTextColor(255,255,255),e.setFontSize(16),e.setFont("helvetica","bold"),e.text("MUNAY - Gestión Quirúrgica",14,10),e.setFontSize(9),e.setFont("helvetica","normal"),e.text(t,14,17),s&&e.text(s,n/2,17,{align:"center"}),e.text(`Generado: ${X(new Date,"dd/MM/yyyy HH:mm",{locale:ke})}`,n-14,17,{align:"right"}),e.setTextColor(0,0,0)}function Gc(e,t){const s=new jt,i=X(new Date(t+"T12:00:00"),"EEEE d 'de' MMMM yyyy",{locale:ke});Ss(s,"Programación Diaria",i);const n=e.filter(r=>r.date===t&&r.status!=="cancelado").sort((r,l)=>r.startTime.localeCompare(l.startTime)).map(r=>[r.startTime,r.patientName??"",r.surgeryType??"",r.surgeon??"",r.anesthesiologist??"",r.fastingTime??"—",xn(r.status)]);gs(s,{startY:28,head:[["Hora","Paciente","Tipo de cirugía","Cirujano","Anestesiólogo","Ayuno","Estado"]],body:n,headStyles:{fillColor:Mt,fontSize:8},bodyStyles:{fontSize:8},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:14,right:14}}),s.save(`programacion-${t}.pdf`)}function Qc(e,t){const s=new jt({orientation:"landscape"});Ss(s,"Programación Semanal",`Semana del ${t[0]} al ${t[6]}`,!0);const i=e.filter(n=>t.includes(n.date)&&n.status!=="cancelado").sort((n,r)=>n.date.localeCompare(r.date)||n.startTime.localeCompare(r.startTime)).map(n=>[X(new Date(n.date+"T12:00"),"EEE dd/MM",{locale:ke}),n.startTime,n.patientName??"",n.surgeryType??"",n.surgeon??"",n.anesthesiologist??"",n.fastingTime??"—",xn(n.status)]);gs(s,{startY:28,head:[["Día","Hora","Paciente","Tipo","Cirujano","Anestesiólogo","Ayuno","Estado"]],body:i,headStyles:{fillColor:Mt,fontSize:7},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),s.save("programacion-semana.pdf")}function Xc(e){const t=new jt;Ss(t,"Listado de Pacientes","");const s=e.map(i=>[i.fullName??"",i.birthDate??"",Wc(i.birthDate),i.diagnosis??"",i.phone??"",i.guardian??"",i.guardianPhone??"",i.patientType==="flap"?"FLAP":"Externo"]);gs(t,{startY:28,head:[["Nombre","Fecha Nac.","Edad","Diagnóstico","Teléfono","Responsable","Tel. Resp.","Tipo"]],body:s,headStyles:{fillColor:Mt,fontSize:8},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),t.save("pacientes.pdf")}function xn(e){return{programado:"Programado",confirmado:"Confirmado",realizado:"Realizado",cancelado:"Cancelado"}[e]??e}const Le="/assets/LOGO%202-DdZTdNO6.jpg";async function Jc(e){try{const s=await(await fetch(e)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(s)})}catch{return null}}function Kc(e){if(!e)return null;const t=Se(e);if(!Fe(t))return null;const s=new Date,i=_e(s,t),n=new Date(t.getFullYear()+i,t.getMonth(),t.getDate()),r=ea(s,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Ze(s,l);return{years:i,months:r,days:c}}async function pi(e){const t=await Jc(Le),s=oe(e==null?void 0:e.patientType),i=e!=null&&e.patientCode?`${s.label}-${e.patientCode}`:"",n=(e==null?void 0:e.fullName)||"",r=(e==null?void 0:e.birthDate)||"",l=Kc(e==null?void 0:e.birthDate),c=l?(()=>{const u=[];return l.years>0&&u.push(`${l.years} año${l.years!==1?"s":""}`),l.months>0&&u.push(`${l.months} mes${l.months!==1?"es":""}`),u.length===0&&u.push(`${l.days} días`),u.join(" ")})():"",d=(e==null?void 0:e.sex)==="masculino"?"MASCULINO":(e==null?void 0:e.sex)==="femenino"?"FEMENINO":"",h=(e==null?void 0:e.diagnosis)||"",j=(e==null?void 0:e.address)||"",m=(e==null?void 0:e.guardian)||"",v=(e==null?void 0:e.guardianPhone)||"",g=new Date().toISOString().slice(0,10),f=JSON.stringify({nroHC:i,nombrePaciente:n,fechaNacimiento:r,edad:c,sexo:d,diagnostico:h,domicilio:j,nombreMadre:m,celMadre:v,fechaEvaluacion:g}),x=JSON.stringify(t||""),y=`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Ficha Social — ${n}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
:root{
  --teal:#4FC3C2;--teal-dark:#1F3A5F;--teal-soft:#e7f6f5;
  --amber:#f4b73c;--cream:#fffaf0;--ink:#1c2a2a;--ink-soft:#4a5a5a;
  --line:#dde6e6;--bg:#f0f4f8;
  --green:#2e9968;--green-soft:#e3f6ec;
  --yellow:#d49100;--yellow-soft:#fdf3d8;
  --red:#c0392b;--red-soft:#fbe5e2;
  --r:12px;--rs:8px;
  --sh:0 4px 16px rgba(20,60,60,.06)
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--ink);-webkit-font-smoothing:antialiased}
.app{max-width:1100px;margin:0 auto;padding-bottom:48px}
.hdr{background:#1F3A5F;padding:12px 28px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;position:relative;overflow:hidden}
.hdr::after{content:'';position:absolute;right:-40px;top:-40px;width:180px;height:180px;background:var(--amber);border-radius:50%;opacity:.12}
.riesgo-hdr{display:flex;flex-direction:column;gap:1px;align-items:flex-end;padding:10px 16px;border-radius:10px;min-width:120px;z-index:1}
.riesgo-hdr .rl{font-size:10px;opacity:.85;text-transform:uppercase;letter-spacing:1px;color:#fff}
.riesgo-hdr .rv{font-size:20px;font-weight:800;color:#fff}
.riesgo-hdr .rs{font-size:11px;opacity:.9;color:#fff}
.rh-verde{background:rgba(46,153,104,.80)}
.rh-amarillo{background:rgba(212,145,0,.85)}
.rh-rojo{background:rgba(192,57,43,.85)}
.print-bar{display:flex;gap:10px;justify-content:flex-end;padding:8px 16px;background:#e8e8e8}
.print-bar button{background:#1F3A5F;color:#fff;border:none;padding:7px 16px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit}
.print-bar button.clr{background:#666}
.print-bar button.compact{background:#2a8c87}
.tabs{display:flex;gap:4px;padding:8px 16px;background:#fff;box-shadow:var(--sh);overflow-x:auto;position:sticky;top:0;z-index:10}
.tab{flex:1;border:none;background:transparent;padding:9px 12px;border-radius:8px;font-size:12.5px;font-weight:600;color:var(--ink-soft);cursor:pointer;white-space:nowrap;transition:all .15s;font-family:inherit}
.tab:hover{background:var(--teal-soft);color:var(--teal-dark)}
.tab.active{background:var(--teal-dark);color:#fff;box-shadow:0 2px 8px rgba(31,58,95,.3)}
.panel{background:#fff;border-radius:var(--r);padding:24px;margin:14px 16px;box-shadow:var(--sh)}
.panel.off{display:none}
.panel h2{font-size:17px;color:var(--teal-dark);padding:0 0 10px 12px;margin-bottom:16px;border-bottom:2px solid var(--teal-soft);border-left:4px solid var(--teal)}
.panel h3{font-size:12px;color:var(--ink);text-transform:uppercase;letter-spacing:.6px;font-weight:700;border-bottom:1px solid var(--line);padding-bottom:4px;margin:20px 0 10px}
.panel h4{font-size:13px;color:var(--ink);font-weight:600;margin-bottom:8px}
.panel h5{font-size:12px;color:var(--ink-soft);margin:10px 0 6px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px 16px}
@media(max-width:720px){.grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.grid{grid-template-columns:1fr}}
.field{display:flex;flex-direction:column;gap:4px}
.field.full{grid-column:1 / -1}
.lbl{font-size:11px;font-weight:600;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.4px}
.field input,.field select,.field textarea{padding:8px 10px;border:1.5px solid var(--line);border-radius:var(--rs);background:#fff;font-size:13.5px;font-family:inherit;color:var(--ink);transition:border-color .15s,box-shadow .15s}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--teal);box-shadow:0 0 0 3px var(--teal-soft)}
.block{margin-bottom:18px}
.sub-block{margin-top:10px;padding-left:12px;border-left:3px solid var(--teal-soft)}
.hint{color:var(--ink-soft);font-size:12px;margin:3px 0 8px}
.chips{display:flex;flex-wrap:wrap;gap:7px}
.chips-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:7px}
@media(max-width:600px){.chips-grid{grid-template-columns:1fr}}
.chip{display:inline-flex;align-items:center;gap:7px;padding:8px 13px;border:1.5px solid var(--line);border-radius:999px;font-size:12.5px;cursor:pointer;background:#fff;color:var(--ink-soft);transition:all .15s;user-select:none;font-family:inherit}
.chip:hover{border-color:var(--teal);color:var(--teal-dark)}
.chip input{display:none}
.chip.active{background:var(--teal-dark);color:#fff;border-color:var(--teal-dark);box-shadow:0 2px 6px rgba(31,58,95,.25)}
.chips-grid .chip{border-radius:var(--rs);justify-content:flex-start}
.services{width:100%;border-collapse:collapse;border-radius:var(--rs);overflow:hidden;font-size:13px}
.services th,.services td{padding:8px 12px;text-align:center;border-bottom:1px solid var(--line)}
.services th{background:var(--teal-soft);color:var(--teal-dark);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.4px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.services td:first-child,.services th:first-child{text-align:left}
.services tr:last-child td{border-bottom:none}
.services .total td{background:var(--cream);border-top:2px solid var(--amber)}
.semaforo{margin-top:14px;display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:var(--rs);border-left:5px solid}
.semaforo strong{font-size:14px}
.semaforo span{font-size:12px}
.s-verde{background:var(--green-soft);border-color:var(--green);color:#1a5e3f}
.s-amarillo{background:var(--yellow-soft);border-color:var(--yellow);color:#7a5400}
.s-rojo{background:var(--red-soft);border-color:var(--red);color:#8b1f15}
.alert-box{margin-top:14px;padding:12px 16px;background:var(--red-soft);border-left:5px solid var(--red);border-radius:var(--rs);color:#8b1f15;font-size:13px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.warn{margin-top:8px;padding:9px 12px;background:var(--yellow-soft);border-left:4px solid var(--yellow);border-radius:var(--rs);color:#7a5400;font-size:12.5px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.rcard{padding:18px 22px;border-radius:var(--r);color:#fff;margin-bottom:18px;box-shadow:var(--sh);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.rcard.rv{background:linear-gradient(135deg,#2e9968,#1a7d51)}
.rcard.ra{background:linear-gradient(135deg,#e8a91e,#c48205)}
.rcard.rr{background:linear-gradient(135deg,#d34c3a,#a32a1d)}
.rc-h{display:flex;justify-content:space-between;align-items:baseline}
.rc-l{font-size:11px;opacity:.9;text-transform:uppercase;letter-spacing:1.2px}
.rc-n{font-size:28px;font-weight:800;letter-spacing:-.5px}
.rc-s{font-size:13px;opacity:.95;margin-top:3px}
.rc-a{margin:12px 0 0;font-size:13px;opacity:.95;line-height:1.5}
.legend{list-style:none;padding:0;margin:0;display:grid;gap:6px}
.legend li{padding:8px 12px;border-radius:var(--rs);font-size:13px;font-weight:500;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.lv{background:var(--green-soft);color:#1a5e3f;border-left:4px solid var(--green)}
.la{background:var(--yellow-soft);color:#7a5400;border-left:4px solid var(--yellow)}
.lr{background:var(--red-soft);color:#8b1f15;border-left:4px solid var(--red)}
.bullets{margin:6px 0 0;padding-left:18px}
.bullets li{padding:3px 0;font-size:13px;color:var(--ink-soft)}
.btn-limpiar{margin-top:16px;padding:9px 18px;border:1.5px solid var(--line);background:#fff;border-radius:var(--rs);font-size:13px;font-weight:600;cursor:pointer;color:var(--ink-soft);font-family:inherit;transition:all .15s}
.btn-limpiar:hover{background:var(--red-soft);color:var(--red);border-color:var(--red)}
.foot{margin:16px 16px 0;padding:12px 4px;display:flex;justify-content:space-between;font-size:11px;color:var(--ink-soft)}
.bot{height:5px;background:var(--teal)}
@media print{
  body{background:#fff}
  .print-bar,.tabs,.btn-limpiar,.foot{display:none!important}
  .panel{display:block!important;box-shadow:none;margin:0 0 6px;padding:16px;border-radius:0;border-bottom:1px solid var(--line)}
  .panel.off{display:block!important}
  .app{max-width:100%;padding-bottom:0}
  .hdr{box-shadow:none}
  .bot{display:none}
  input,select,textarea{background:transparent!important}
  .services th{background:var(--teal-soft)!important}
}
</style></head><body>
<div id="root"></div>
<script>
window.__pd   = ${f};
window.__logo = ${x};
<\/script>
<script type="importmap">{"imports":{"react":"https://esm.sh/react@18.3.1","react-dom/client":"https://esm.sh/react-dom@18.3.1/client"}}<\/script>
<script type="module">
import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
const e = React.createElement;
const LOGO = window.__logo || '';

const BASE = {
  fechaIngreso:'',nroHC:'',nombrePaciente:'',fechaNacimiento:'',edad:'',sexo:'',gradoInstruccion:'',
  nombrePadre:'',celPadre:'',ocupacionPadre:'',edadPadre:'',instruccionPadre:'',profesionPadre:'',
  nombreMadre:'',celMadre:'',ocupacionMadre:'',edadMadre:'',instruccionMadre:'',profesionMadre:'',
  domicilio:'',departamento:'LA PAZ',provincia:'MURILLO',nroHermanos:'',antecedenteFisuraFamiliar:'',
  diagnostico:'',observaciones:'',ingresoMensual:'',
  distanciaHospital:'',medioTransporte:'',dificultadEconomica:'',
  acompanante:'',disponibilidadCuidador:'',controlesPerdidos:'',motivoPerdida:[],
  tipoVivienda:'',tipoViviendaOtro:'',materialVivienda:'',
  servicios:{aguaPotable:null,alcantarillado:null,electricidad:null,internet:null,gasDomiciliario:null},
  personasHogar:'',habitacionesDormir:'',
  alertas:[],criteriosActivacion:[],
  aspectoNino:'',interaccionFamiliar:'',
  comprension:{importanciaControles:'',cirugiasMultiples:'',cuidadosPostquirurgicos:'',importanciaTerapias:''},
  profesional:'',fechaEvaluacion:new Date().toISOString().slice(0,10),
};

const OPT_ALERTAS = [
  'Ingreso insuficiente para tratamiento','Sospecha de negligencia','Inasistencia recurrente',
  'Nino no escolarizado','Violencia intrafamiliar','Consumo problematico de alcohol/drogas en hogar',
  'Madre/padre adolescente','Abandono familiar','Desnutricion aparente','Riesgo psicologico familiar',
  'Falta de documentacion','Vivienda precaria','Discapacidad adicional','Paciente en situacion de abandono'
];
const OPT_CRIT = [
  'Riesgo de abandono terapeutico','Vulnerabilidad economica severa','Violencia/negligencia sospechada',
  'Problemas psicologicos familiares','Dificultad grave de acceso','Desnutricion',
  'Falta de adherencia','Solicitud institucional'
];

const Field = ({label,children,full}) =>
  e('div',{className:'field'+(full?' full':'')},
    e('span',{className:'lbl'},label),children);

const Radio = ({name,value,current,onChange,children}) =>
  e('label',{className:'chip'+(current===value?' active':'')},
    e('input',{type:'radio',name,checked:current===value,onChange:()=>onChange(value)}),
    e('span',null,children));

const Check = ({checked,onChange,children}) =>
  e('label',{className:'chip'+(checked?' active':'')},
    e('input',{type:'checkbox',checked,onChange}),
    e('span',null,children));

function FichaSocial() {
  const [data, setData] = useState({...BASE, ...(window.__pd||{})});
  const [tab, setTab] = useState('generales');

  const set  = (k,v) => setData(d => ({...d,[k]:v}));
  const setN = (g,k,v) => setData(d => ({...d,[g]:{...d[g],[k]:v}}));
  const tog  = (key,val) => setData(d => {
    const a = d[key]||[];
    return {...d,[key]:a.includes(val)?a.filter(x=>x!==val):[...a,val]};
  });

  const riesgo = useMemo(() => {
    let s=0; const det=[];
    const ing=parseFloat(data.ingresoMensual);
    if(!isNaN(ing)&&ing>0&&ing<2500){s+=1;det.push({f:'Ingreso bajo (<2500 Bs)',p:1});}
    if(data.distanciaHospital==='>3 horas'){s+=1;det.push({f:'Distancia >3 horas',p:1});}
    const ph=parseInt(data.personasHogar,10),hh=parseInt(data.habitacionesDormir,10);
    if(ph>0&&hh>0&&ph/hh>3){s+=1;det.push({f:'Hacinamiento ('+(ph/hh).toFixed(1)+' pers/hab)',p:1});}
    if(data.controlesPerdidos==='Si'){s+=2;det.push({f:'Controles perdidos',p:2});}
    if(data.alertas.includes('Violencia intrafamiliar')){s+=3;det.push({f:'Violencia sospechada',p:3});}
    if(data.alertas.includes('Desnutricion aparente')||data.aspectoNino==='Sospecha de desnutricion'){s+=2;det.push({f:'Desnutricion',p:2});}
    if(data.dificultadEconomica==='Grave'){s+=1;det.push({f:'Dificultad economica grave',p:1});}
    if(data.tipoVivienda==='Cedida'||data.materialVivienda==='Precario/improvisado'){s+=1;det.push({f:'Vivienda precaria',p:1});}
    let nivel,color,accion;
    if(s<=2){nivel='BAJO';color='verde';accion='Sin factores de riesgo relevantes. Seguimiento estandar.';}
    else if(s<=5){nivel='MODERADO';color='amarillo';accion='1-3 factores de vulnerabilidad. Considerar seguimiento social ampliado.';}
    else{nivel='ALTO';color='rojo';accion='4+ factores o riesgo grave. Ficha social integral OBLIGATORIA.';}
    return {score:s,nivel,color,accion,det};
  },[data]);

  const clsA = useMemo(() => {
    const n=data.alertas.length;
    if(n===0) return {color:'verde',label:'VERDE',desc:'Sin factores de riesgo relevantes'};
    if(n<=3)  return {color:'amarillo',label:'AMARILLO',desc:'1-3 factores de vulnerabilidad'};
    return {color:'rojo',label:'ROJO',desc:'4+ factores o riesgo grave'};
  },[data.alertas]);

  const debeActivar = riesgo.color==='rojo'||data.criteriosActivacion.length>0;

  function compactPrint() {
    var idx = parseInt(data.personasHogar,10), hdx = parseInt(data.habitacionesDormir,10);
    var hacIdx = (idx>0&&hdx>0) ? (idx/hdx).toFixed(2) : '—';
    var srvMap = {aguaPotable:'Agua potable',alcantarillado:'Alcantarillado',electricidad:'Electricidad',internet:'Internet',gasDomiciliario:'Gas domiciliario'};
    var srvLines = Object.entries(data.servicios).map(function(e){return (e[1]===true?'[✓] ':'[✗] ')+srvMap[e[0]];}).join('  ');
    var compMap = {importanciaControles:'Controles',cirugiasMultiples:'Cirs. múltiples',cuidadosPostquirurgicos:'Cuid. postqx',importanciaTerapias:'Terapias'};
    var compLines = Object.entries(data.comprension).map(function(e){return compMap[e[0]]+': '+(e[1]||'—');}).join('  |  ');
    var alertasStr = data.alertas.length>0 ? data.alertas.join(', ') : 'Ninguna';
    var criteriosStr = data.criteriosActivacion.length>0 ? data.criteriosActivacion.join(', ') : 'Ninguno';
    var motivoStr = data.motivoPerdida.length>0 ? data.motivoPerdida.join(', ') : '';
    var rcColor = riesgo.color==='verde'?'#1a5e3f':riesgo.color==='amarillo'?'#7a5400':'#8b1f15';
    var rcBg = riesgo.color==='verde'?'#e3f6ec':riesgo.color==='amarillo'?'#fdf3d8':'#fbe5e2';
    var rcBorder = riesgo.color==='verde'?'#2e9968':riesgo.color==='amarillo'?'#d49100':'#c0392b';

    function row(label, val) {
      return '<div class="fr"><span class="fl">'+label+'</span><span class="fv">'+(val||'—')+'</span></div>';
    }
    function sec(num, title) {
      return '<div class="sec"><span class="sn">'+num+'</span><span class="st">'+title+'</span></div>';
    }

    var h = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>';
    h += '<title>Ficha Social Compacta — '+data.nombrePaciente+'</title>';
    h += '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"/>';
    h += '<style>';
    h += '@page{size:letter portrait;margin:12mm 14mm}';
    h += '*{box-sizing:border-box;margin:0;padding:0}';
    h += 'body{font-family:Inter,Arial,sans-serif;font-size:8.5pt;color:#1c2a2a;background:#fff}';
    h += '.toolbar{display:flex;justify-content:flex-end;gap:8px;padding:8px 12px;background:#f0f4f8;border-bottom:1px solid #dde}';
    h += '.toolbar button{background:#1F3A5F;color:#fff;border:none;padding:6px 14px;border-radius:4px;font-size:8.5pt;font-weight:700;cursor:pointer;font-family:inherit}';
    h += '.hdr{background:#1F3A5F;color:#fff;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;padding:8px 14px;border-bottom:4px solid #4FC3C2;margin-bottom:6px;-webkit-print-color-adjust:exact;print-color-adjust:exact}';
    h += '.hdr-logo{background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center;flex-shrink:0}';
    h += '.hdr-logo img{height:34px;width:auto;object-fit:contain}';
    h += '.hdr-logo span{font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px}';
    h += '.hdr-center{text-align:center}';
    h += '.hdr-sup{font-size:7pt;opacity:.85;text-transform:uppercase;letter-spacing:1.2px;color:#fff}';
    h += '.hdr-name{font-size:14pt;font-weight:800;letter-spacing:3px;color:#4FC3C2}';
    h += '.hdr-tag{font-size:7pt;opacity:.8;color:#fff;margin-top:1px}';
    h += '.hdr-right{text-align:right}';
    h += '.hdr-doc{font-size:9pt;font-weight:700;color:#fff;letter-spacing:.3px;text-transform:uppercase}';
    h += '.hdr-meta{font-size:7pt;color:#a0b4c4;margin-top:2px}';
    h += '.badge{padding:3px 8px;border-radius:4px;font-size:8.5pt;font-weight:700;color:#fff;display:inline-block;margin-top:3px;-webkit-print-color-adjust:exact;print-color-adjust:exact}';
    h += '.bv{background:#2e9968}.ba{background:#d49100}.br{background:#c0392b}';
    h += '.sec{display:flex;align-items:center;gap:6px;margin:6px 0 4px;padding:2px 0 2px 6px;border-left:3px solid #4FC3C2;background:#f5fbfb}';
    h += '.sn{font-size:7.5pt;font-weight:700;color:#4FC3C2;min-width:14px}';
    h += '.st{font-size:8pt;font-weight:700;color:#1F3A5F;text-transform:uppercase;letter-spacing:.4px}';
    h += '.g2{display:grid;grid-template-columns:1fr 1fr;gap:1px 10px}';
    h += '.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px 10px}';
    h += '.fr{display:flex;align-items:baseline;gap:4px;padding:1.5px 0;border-bottom:1px dotted #e0e8e8}';
    h += '.fl{font-weight:600;font-size:7.8pt;color:#4a5a5a;white-space:nowrap;min-width:0}';
    h += '.fv{font-size:8.5pt;color:#1c2a2a;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}';
    h += '.fullrow{grid-column:1/-1}';
    h += '.obs{font-size:8pt;color:#1c2a2a;padding:2px 4px;background:#f9fafa;border-radius:2px;line-height:1.4;margin-top:2px;word-break:break-word}';
    h += '.risk-box{border-radius:6px;padding:8px 12px;margin:6px 0;border-left:4px solid '+rcBorder+';background:'+rcBg+';color:'+rcColor+'}';
    h += '.risk-box .rn{font-size:14pt;font-weight:800;letter-spacing:-.3px}';
    h += '.risk-box .rs{font-size:8pt;opacity:.9;margin-left:8px}';
    h += '.risk-box .ra{font-size:8pt;margin-top:3px;font-style:italic}';
    h += 'table.ft{width:100%;border-collapse:collapse;font-size:8pt;margin-top:3px}';
    h += 'table.ft th{background:#e7f6f5;color:#1F3A5F;font-size:7.5pt;padding:3px 6px;text-align:left;border:1px solid #cde}';
    h += 'table.ft td{padding:3px 6px;border:1px solid #dde;vertical-align:top}';
    h += 'table.ft tr.tot td{background:#fffaf0;font-weight:700;border-top:2px solid #f4b73c}';
    h += '.alerts-list{display:grid;grid-template-columns:1fr 1fr;gap:1px 10px;margin-top:3px}';
    h += '.al{font-size:8pt;padding:1.5px 0;color:#8b1f15}';
    h += '.firmas{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:14px}';
    h += '.firma{text-align:center;font-size:8pt}';
    h += '.firma .lin{border-top:1px solid #1c2a2a;margin-bottom:3px;margin-top:70px}';
    h += '.firma .fn{font-weight:700;font-size:8.5pt}';
    h += '.firma-pac{font-size:8pt}';
    h += '.fp-title{font-size:7pt;font-weight:700;color:#1F3A5F;text-transform:uppercase;letter-spacing:.4px;margin-bottom:7px;padding-bottom:3px;border-bottom:1px dotted #4FC3C2}';
    h += '.fp-row{display:flex;align-items:flex-end;gap:5px;margin-bottom:5px}';
    h += '.fp-lbl{font-weight:600;font-size:7.5pt;color:#4a5a5a;white-space:nowrap}';
    h += '.fp-line{flex:1;border-bottom:1px solid #1c2a2a;min-height:1.1em}';
    h += '.fp-short{flex:0 0 28mm!important}';
    h += '.pie{text-align:center;font-size:7pt;color:#888;margin-top:10px;border-top:1px solid #dde;padding-top:4px}';
    h += '@media print{.toolbar{display:none!important}body{font-size:8pt}}';
    h += '</style></head><body>';

    h += '<div class="toolbar"><button onclick="window.print()">Imprimir / PDF</button></div>';

    var logoHdrHtml = LOGO ? '<div class="hdr-logo"><img src="'+LOGO+'"/></div>' : '<div class="hdr-logo"><span>MUNAY</span></div>';
    h += '<div class="hdr">';
    h += logoHdrHtml;
    h += '<div class="hdr-center"><div class="hdr-sup">Centro Médico Quirúrgico</div>';
    h += '<div class="hdr-name">MUNAY</div>';
    h += '<div class="hdr-tag">Trabajo Social · La Paz, Bolivia</div></div>';
    h += '<div class="hdr-right"><div class="hdr-doc">Ficha de Evaluación Social</div>';
    h += '<span class="badge b'+riesgo.color[0]+'">'+riesgo.nivel+' — Score '+riesgo.score+'</span>';
    h += '<div class="hdr-meta">'+( data.profesional||'—')+'</div>';
    h += '<div class="hdr-meta">'+( data.fechaEvaluacion||'—')+'</div></div>';
    h += '</div>';

    h += sec('1','Datos generales del paciente');
    h += '<div class="g3">';
    h += row('N° HC', data.nroHC);
    h += row('F. ingreso', data.fechaIngreso);
    h += row('Diagnóstico', data.diagnostico);
    h += '<div class="fr fullrow"><span class="fl">Nombre completo:</span><span class="fv" style="white-space:normal">'+(data.nombrePaciente||'—')+'</span></div>';
    h += row('F. nacimiento', data.fechaNacimiento);
    h += row('Edad', data.edad);
    h += row('Sexo', data.sexo);
    h += row('Grado instrucción', data.gradoInstruccion);
    h += row('Fam. con fisura', data.antecedenteFisuraFamiliar);
    h += row('Ingreso familiar (Bs.)', data.ingresoMensual);
    h += '</div>';

    h += '<div class="g2" style="margin-top:3px">';
    h += '<div>';
    h += '<div style="font-size:7.5pt;font-weight:700;color:#1F3A5F;margin:3px 0 2px;border-bottom:1px dotted #4FC3C2">PADRE</div>';
    h += '<div class="g2">';
    h += row('Nombre', data.nombrePadre);
    h += row('Celular', data.celPadre);
    h += row('Edad', data.edadPadre);
    h += row('Ocupación', data.ocupacionPadre);
    h += row('Instrucción', data.instruccionPadre);
    h += row('Profesión', data.profesionPadre);
    h += '</div></div>';
    h += '<div>';
    h += '<div style="font-size:7.5pt;font-weight:700;color:#1F3A5F;margin:3px 0 2px;border-bottom:1px dotted #4FC3C2">MADRE / RESPONSABLE</div>';
    h += '<div class="g2">';
    h += row('Nombre', data.nombreMadre);
    h += row('Celular', data.celMadre);
    h += row('Edad', data.edadMadre);
    h += row('Ocupación', data.ocupacionMadre);
    h += row('Instrucción', data.instruccionMadre);
    h += row('Profesión', data.profesionMadre);
    h += '</div></div>';
    h += '</div>';

    h += '<div class="g3" style="margin-top:3px">';
    h += row('Domicilio', data.domicilio);
    h += row('Departamento', data.departamento);
    h += row('Provincia', data.provincia);
    h += row('N° hermanos', data.nroHermanos);
    h += '</div>';
    if (data.observaciones) {
      h += '<div class="obs">Observaciones: '+data.observaciones+'</div>';
    }

    h += sec('2','Acceso al servicio y adherencia');
    h += '<div class="g3">';
    h += row('Distancia hospital', data.distanciaHospital);
    h += row('Transporte', data.medioTransporte);
    h += row('Dificultad económica', data.dificultadEconomica);
    h += row('Acompañante habitual', data.acompanante);
    h += row('Disp. cuidador controles', data.disponibilidadCuidador);
    h += row('Perdió controles', data.controlesPerdidos+(motivoStr?' ('+motivoStr+')':''));
    h += '</div>';

    h += sec('3','Vivienda, servicios básicos y hacinamiento');
    h += '<div class="g3">';
    h += row('Tipo vivienda', data.tipoVivienda+(data.tipoViviendaOtro?' ('+data.tipoViviendaOtro+')':''));
    h += row('Material', data.materialVivienda);
    h += row('Personas hogar / Hab. dormir', (data.personasHogar||'—')+' / '+(data.habitacionesDormir||'—')+' → Índice: '+hacIdx);
    h += '</div>';
    h += '<div class="obs" style="margin-top:3px">'+srvLines+'</div>';

    h += sec('4','Alertas y criterios de activación');
    if (data.alertas.length > 0) {
      h += '<div class="alerts-list">';
      data.alertas.forEach(function(a){ h += '<div class="al">⚠ '+a+'</div>'; });
      h += '</div>';
    } else {
      h += '<div class="obs">Sin alertas marcadas.</div>';
    }
    if (data.criteriosActivacion.length > 0) {
      h += '<div class="obs" style="margin-top:3px;color:#8b1f15"><strong>Criterios activación:</strong> '+criteriosStr+'</div>';
    }

    h += sec('5','Observación profesional');
    h += '<div class="g2">';
    h += row('Aspecto del niño', data.aspectoNino);
    h += row('Interacción familiar', data.interaccionFamiliar);
    h += '</div>';
    h += '<div class="obs" style="margin-top:3px">Comprensión familiar — '+compLines+'</div>';

    h += sec('6','Clasificación de riesgo');
    h += '<div class="risk-box">';
    h += '<span class="rn">'+riesgo.nivel+'</span><span class="rs">Score '+riesgo.score+' — '+riesgo.accion+'</span>';
    h += '</div>';
    if (riesgo.det.length > 0) {
      h += '<table class="ft"><thead><tr><th>Factor de riesgo</th><th style="width:60px;text-align:center">Puntaje</th></tr></thead><tbody>';
      riesgo.det.forEach(function(d){ h += '<tr><td>'+d.f+'</td><td style="text-align:center">'+d.p+'</td></tr>'; });
      h += '<tr class="tot"><td>Total</td><td style="text-align:center">'+riesgo.score+'</td></tr>';
      h += '</tbody></table>';
    }

    h += '<div class="firmas">';
    h += '<div class="firma"><div class="lin"></div><div class="fn">'+(data.profesional||'___________________________')+'</div><div>Profesional de Trabajo Social</div></div>';
    h += '<div class="firma-pac">';
    h += '<div class="fp-title">Firma del Paciente / Responsable</div>';
    h += '<div class="fp-row"><span class="fp-lbl">Nombre completo:</span><span class="fp-line"></span></div>';
    h += '<div class="fp-row"><span class="fp-lbl">Relación con el paciente:</span><span class="fp-line"></span></div>';
    h += '<div class="fp-row"><span class="fp-lbl">C.I.:</span><span class="fp-line fp-short"></span></div>';
    h += '<div style="border-top:1px solid #1c2a2a;margin-top:20px;margin-bottom:3px"></div>';
    h += '<div style="font-size:7.5pt;text-align:center;color:#4a5a5a">Firma</div>';
    h += '</div>';
    h += '</div>';

    h += '<div class="pie">Centro Médico Quirúrgico MUNAY · La Paz, Bolivia · Trabajo Social</div>';
    h += '</body></html>';

    var win = window.open('', '_blank', 'width=820,height=1060');
    win.document.write(h);
    win.document.close();
    win.focus();
  }

  const TABS=[['generales','1. Generales'],['acceso','2. Acceso'],['vivienda','3. Vivienda'],['alertas','4. Alertas'],['observacion','5. Observacion'],['resumen','6. Resumen']];

  const logoEl = LOGO
    ? e('div',{style:{background:'#FFF',padding:'5px 10px',borderRadius:'6px',display:'flex',alignItems:'center',flexShrink:0}},
        e('img',{src:LOGO,style:{height:'46px',width:'auto',objectFit:'contain'}}))
    : e('div',{style:{background:'#FFF',padding:'5px 10px',borderRadius:'6px',flexShrink:0}},
        e('span',{style:{fontSize:'14px',fontWeight:'900',color:'#1F3A5F',letterSpacing:'2px'}},'MUNAY'));

  const p = (id) => 'panel'+(tab!==id?' off':'');

  return e('div',{className:'app'},

    e('header',{className:'hdr'},
      logoEl,
      e('div',{style:{textAlign:'center',color:'#FFF',zIndex:1}},
        e('div',{style:{fontSize:'12px',fontWeight:'700',letterSpacing:'2.5px',textTransform:'uppercase',opacity:.85}},'Centro Medico Quirurgico'),
        e('div',{style:{fontSize:'20px',fontWeight:'900',letterSpacing:'5px',color:'#4FC3C2',marginTop:'2px'}},'MUNAY'),
        e('div',{style:{fontSize:'11px',opacity:.85,marginTop:'1px'}},'Trabajo Social')),
      e('div',{className:'riesgo-hdr rh-'+riesgo.color},
        e('span',{className:'rl'},'Riesgo'),
        e('span',{className:'rv'},riesgo.nivel),
        e('span',{className:'rs'},'Score '+riesgo.score))),

    e('div',{className:'print-bar'},
      e('button',{className:'clr',onClick:()=>{if(confirm('Limpiar el formulario?'))setData(BASE);}},'Limpiar'),
      e('button',{className:'compact',onClick:()=>compactPrint()},'Imprimir compacto'),
      e('button',{onClick:()=>window.print()},'Imprimir completo')),

    e('nav',{className:'tabs'},
      TABS.map(([id,lbl])=>e('button',{key:id,className:'tab'+(tab===id?' active':''),onClick:()=>setTab(id)},lbl))),

    e('main',null,

      e('section',{className:p('generales')},
        e('h2',null,'1. Datos generales del paciente'),
        e('div',{className:'grid'},
          e(Field,{label:'N.° HC'},e('input',{value:data.nroHC,onChange:ev=>set('nroHC',ev.target.value)})),
          e(Field,{label:'Fecha de ingreso'},e('input',{type:'date',value:data.fechaIngreso,onChange:ev=>set('fechaIngreso',ev.target.value)})),
          e(Field,{label:'Nombre completo',full:true},e('input',{value:data.nombrePaciente,onChange:ev=>set('nombrePaciente',ev.target.value)})),
          e(Field,{label:'Fecha de nacimiento'},e('input',{type:'date',value:data.fechaNacimiento,onChange:ev=>set('fechaNacimiento',ev.target.value)})),
          e(Field,{label:'Edad'},e('input',{value:data.edad,onChange:ev=>set('edad',ev.target.value),placeholder:'5 anios 0 meses'})),
          e(Field,{label:'Sexo'},e('select',{value:data.sexo,onChange:ev=>set('sexo',ev.target.value)},
            e('option',{value:''},'—'),e('option',null,'MASCULINO'),e('option',null,'FEMENINO'))),
          e(Field,{label:'Grado de instruccion'},e('input',{value:data.gradoInstruccion,onChange:ev=>set('gradoInstruccion',ev.target.value),placeholder:'Kinder, Primaria...'})),
          e(Field,{label:'Diagnostico'},e('input',{value:data.diagnostico,onChange:ev=>set('diagnostico',ev.target.value),placeholder:'Diagnóstico del paciente'}))),
        e('h3',null,'Padre'),
        e('div',{className:'grid'},
          e(Field,{label:'Nombre',full:true},e('input',{value:data.nombrePadre,onChange:ev=>set('nombrePadre',ev.target.value)})),
          e(Field,{label:'Celular'},e('input',{value:data.celPadre,onChange:ev=>set('celPadre',ev.target.value)})),
          e(Field,{label:'Edad'},e('input',{value:data.edadPadre,onChange:ev=>set('edadPadre',ev.target.value)})),
          e(Field,{label:'Ocupacion'},e('input',{value:data.ocupacionPadre,onChange:ev=>set('ocupacionPadre',ev.target.value)})),
          e(Field,{label:'Grado instruccion'},e('input',{value:data.instruccionPadre,onChange:ev=>set('instruccionPadre',ev.target.value)})),
          e(Field,{label:'Profesion'},e('input',{value:data.profesionPadre,onChange:ev=>set('profesionPadre',ev.target.value)}))),
        e('h3',null,'Madre / Responsable'),
        e('div',{className:'grid'},
          e(Field,{label:'Nombre',full:true},e('input',{value:data.nombreMadre,onChange:ev=>set('nombreMadre',ev.target.value)})),
          e(Field,{label:'Celular'},e('input',{value:data.celMadre,onChange:ev=>set('celMadre',ev.target.value)})),
          e(Field,{label:'Edad'},e('input',{value:data.edadMadre,onChange:ev=>set('edadMadre',ev.target.value)})),
          e(Field,{label:'Ocupacion'},e('input',{value:data.ocupacionMadre,onChange:ev=>set('ocupacionMadre',ev.target.value)})),
          e(Field,{label:'Grado instruccion'},e('input',{value:data.instruccionMadre,onChange:ev=>set('instruccionMadre',ev.target.value)})),
          e(Field,{label:'Profesion'},e('input',{value:data.profesionMadre,onChange:ev=>set('profesionMadre',ev.target.value)}))),
        e('h3',null,'Domicilio y contexto familiar'),
        e('div',{className:'grid'},
          e(Field,{label:'Domicilio',full:true},e('input',{value:data.domicilio,onChange:ev=>set('domicilio',ev.target.value)})),
          e(Field,{label:'Departamento'},e('input',{value:data.departamento,onChange:ev=>set('departamento',ev.target.value)})),
          e(Field,{label:'Provincia'},e('input',{value:data.provincia,onChange:ev=>set('provincia',ev.target.value)})),
          e(Field,{label:'N.° de hermanos'},e('input',{type:'number',value:data.nroHermanos,onChange:ev=>set('nroHermanos',ev.target.value)})),
          e(Field,{label:'Familiares con fisura'},e('select',{value:data.antecedenteFisuraFamiliar,onChange:ev=>set('antecedenteFisuraFamiliar',ev.target.value)},
            e('option',{value:''},'—'),e('option',null,'SI'),e('option',null,'NO'))),
          e(Field,{label:'Ingreso mensual familiar (Bs.)'},e('input',{type:'number',value:data.ingresoMensual,onChange:ev=>set('ingresoMensual',ev.target.value)})),
          e(Field,{label:'Observaciones',full:true},e('textarea',{rows:2,value:data.observaciones,onChange:ev=>set('observaciones',ev.target.value)})))),

      e('section',{className:p('acceso')},
        e('h2',null,'2. Acceso al servicio y adherencia'),
        e('div',{className:'block'},
          e('h4',null,'Distancia al hospital'),
          e('div',{className:'chips'},['<30 min','30 min - 1 hora','1-3 horas','>3 horas'].map(o=>
            e(Radio,{key:o,name:'dist',value:o,current:data.distanciaHospital,onChange:v=>set('distanciaHospital',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Medio de transporte'),
          e('div',{className:'chips'},['Publico','Bus','Propio','Caminando','Vuelo','Otro'].map(o=>
            e(Radio,{key:o,name:'transp',value:o,current:data.medioTransporte,onChange:v=>set('medioTransporte',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Dificultad economica para asistir'),
          e('div',{className:'chips'},['Ninguna','Ocasional','Frecuente','Grave'].map(o=>
            e(Radio,{key:o,name:'difEcon',value:o,current:data.dificultadEconomica,onChange:v=>set('dificultadEconomica',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Quien acompana habitualmente al paciente'),
          e('div',{className:'chips'},['Madre','Padre','Abuelos','Otro'].map(o=>
            e(Radio,{key:o,name:'acomp',value:o,current:data.acompanante,onChange:v=>set('acompanante',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'El cuidador tiene disponibilidad para controles frecuentes'),
          e('div',{className:'chips'},['Si','Parcial','No'].map(o=>
            e(Radio,{key:o,name:'dispCuid',value:o,current:data.disponibilidadCuidador,onChange:v=>set('disponibilidadCuidador',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'El paciente perdio controles anteriormente'),
          e('div',{className:'chips'},['No','Si'].map(o=>
            e(Radio,{key:o,name:'controles',value:o,current:data.controlesPerdidos,onChange:v=>set('controlesPerdidos',v)},o))),
          data.controlesPerdidos==='Si'&&e('div',{className:'sub-block'},
            e('h5',null,'Motivo (puede seleccionar varios)'),
            e('div',{className:'chips'},['Economico','Transporte','Trabajo','Desconocimiento','Otro'].map(o=>
              e(Check,{key:o,checked:data.motivoPerdida.includes(o),onChange:()=>tog('motivoPerdida',o)},o)))))),

      e('section',{className:p('vivienda')},
        e('h2',null,'3. Vivienda, servicios basicos y hacinamiento'),
        e('div',{className:'block'},
          e('h4',null,'Tipo de vivienda'),
          e('div',{className:'chips'},['Propia','Alquilada','Anticretico','Cedida','Otro'].map(o=>
            e(Radio,{key:o,name:'tipoViv',value:o,current:data.tipoVivienda,onChange:v=>set('tipoVivienda',v)},o))),
          data.tipoVivienda==='Otro'&&e('div',{className:'sub-block',style:{marginTop:'8px'}},
            e(Field,{label:'Describir'},e('input',{value:data.tipoViviendaOtro,onChange:ev=>set('tipoViviendaOtro',ev.target.value),placeholder:'Describa el tipo de vivienda'})))),
        e('div',{className:'block'},
          e('h4',null,'Material predominante'),
          e('div',{className:'chips'},['Ladrillo','Adobe','Madera','Precario/improvisado'].map(o=>
            e(Radio,{key:o,name:'matViv',value:o,current:data.materialVivienda,onChange:v=>set('materialVivienda',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Servicios basicos'),
          e('table',{className:'services'},
            e('thead',null,e('tr',null,e('th',null,'Servicio'),e('th',null,'Si'),e('th',null,'No'))),
            e('tbody',null,
              [['aguaPotable','Agua potable'],['alcantarillado','Alcantarillado'],['electricidad','Electricidad'],['internet','Internet'],['gasDomiciliario','Gas domiciliario']].map(([k,lbl])=>
                e('tr',{key:k},
                  e('td',null,lbl),
                  e('td',null,e('input',{type:'radio',name:'srv-'+k,checked:data.servicios[k]===true,onChange:()=>setN('servicios',k,true)})),
                  e('td',null,e('input',{type:'radio',name:'srv-'+k,checked:data.servicios[k]===false,onChange:()=>setN('servicios',k,false)}))))))),
        e('div',{className:'block'},
          e('h4',null,'Hacinamiento'),
          e('p',{className:'hint'},'Indicador clave de riesgo social. Se calcula automaticamente.'),
          e('div',{className:'grid'},
            e(Field,{label:'Personas en el hogar'},e('input',{type:'number',min:'1',value:data.personasHogar,onChange:ev=>set('personasHogar',ev.target.value)})),
            e(Field,{label:'Habitaciones para dormir'},e('input',{type:'number',min:'1',value:data.habitacionesDormir,onChange:ev=>set('habitacionesDormir',ev.target.value)})),
            e(Field,{label:'Indice (pers./hab.)'},e('input',{readOnly:true,style:{background:'#f5f5f5'},value:data.personasHogar&&data.habitacionesDormir?(parseInt(data.personasHogar,10)/parseInt(data.habitacionesDormir,10)).toFixed(2):''}))),
          data.personasHogar&&data.habitacionesDormir&&parseInt(data.personasHogar,10)/parseInt(data.habitacionesDormir,10)>3&&
            e('div',{className:'warn'},'Hacinamiento: mas de 3 personas por habitacion de dormir.'))),

      e('section',{className:p('alertas')},
        e('h2',null,'4. Checklist de alerta y criterios de activacion'),
        e('div',{className:'block'},
          e('h4',null,'Checklist de alerta social'),
          e('p',{className:'hint'},'Marque todas las que apliquen.'),
          e('div',{className:'chips chips-grid'},OPT_ALERTAS.map(o=>
            e(Check,{key:o,checked:data.alertas.includes(o),onChange:()=>tog('alertas',o)},o))),
          e('div',{className:'semaforo s-'+clsA.color},
            e('strong',null,clsA.label+': '),
            e('span',null,clsA.desc))),
        e('div',{className:'block'},
          e('h4',null,'Criterios para activar Ficha Social Integral'),
          e('p',{className:'hint'},'Activar si existe alguno de los siguientes:'),
          e('div',{className:'chips chips-grid'},OPT_CRIT.map(o=>
            e(Check,{key:o,checked:data.criteriosActivacion.includes(o),onChange:()=>tog('criteriosActivacion',o)},o))),
          debeActivar&&e('div',{className:'alert-box'},
            '🚨 ',e('strong',null,'Activacion recomendada de Ficha Social Integral.'),
            ' Coordinar con Trabajo Social y Psicologia del Centro.'))),

      e('section',{className:p('observacion')},
        e('h2',null,'5. Observacion profesional'),
        e('div',{className:'block'},
          e('h4',null,'Aspecto del nino'),
          e('div',{className:'chips'},['Adecuado','Descuidado','Sospecha de desnutricion','Ansiedad/miedo marcado'].map(o=>
            e(Radio,{key:o,name:'aspecto',value:o,current:data.aspectoNino,onChange:v=>set('aspectoNino',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Interaccion familiar'),
          e('div',{className:'chips'},['Adecuada','Sobreprotectora','Hostil','Desinteres aparente'].map(o=>
            e(Radio,{key:o,name:'interac',value:o,current:data.interaccionFamiliar,onChange:v=>set('interaccionFamiliar',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'La familia comprende:'),
          e('table',{className:'services'},
            e('thead',null,e('tr',null,e('th',null,'Tema'),e('th',null,'Si'),e('th',null,'Parcial'),e('th',null,'No'))),
            e('tbody',null,
              [
                ['importanciaControles','Importancia de controles'],
                ['cirugiasMultiples','Necesidad de cirugias multiples'],
                ['cuidadosPostquirurgicos','Cuidados postquirurgicos'],
                ['importanciaTerapias','Importancia de terapias']
              ].map(([k,lbl])=>
                e('tr',{key:k},
                  e('td',null,lbl),
                  ['Si','Parcial','No'].map(v=>
                    e('td',{key:v},e('input',{type:'radio',name:'comp-'+k,checked:data.comprension[k]===v,onChange:()=>setN('comprension',k,v)})))))))),
        e('div',{className:'grid',style:{marginTop:'16px'}},
          e(Field,{label:'Profesional evaluador'},e('input',{value:data.profesional,onChange:ev=>set('profesional',ev.target.value)})),
          e(Field,{label:'Fecha de evaluacion'},e('input',{type:'date',value:data.fechaEvaluacion,onChange:ev=>set('fechaEvaluacion',ev.target.value)})))),

      e('section',{className:p('resumen')},
        e('h2',null,'6. Resumen y clasificacion de riesgo'),
        e('div',{className:'rcard r'+riesgo.color[0]},
          e('div',{className:'rc-h'},
            e('span',{className:'rc-l'},'Nivel de riesgo'),
            e('span',{className:'rc-n'},riesgo.nivel)),
          e('div',{className:'rc-s'},'Puntaje total: '+riesgo.score),
          e('p',{className:'rc-a'},riesgo.accion)),
        e('div',{className:'block'},
          e('h4',null,'Factores de riesgo detectados'),
          riesgo.det.length===0
            ? e('p',{className:'hint'},'No se detectaron factores de riesgo cuantificables.')
            : e('table',{className:'services'},
                e('thead',null,e('tr',null,e('th',null,'Factor'),e('th',null,'Puntos'))),
                e('tbody',null,
                  riesgo.det.map((d,i)=>e('tr',{key:i},e('td',null,d.f),e('td',null,d.p))),
                  e('tr',{className:'total'},e('td',null,e('strong',null,'Total')),e('td',null,e('strong',null,riesgo.score)))))),
        e('div',{className:'block'},
          e('h4',null,'Escala de interpretacion'),
          e('ul',{className:'legend'},
            e('li',{className:'lv'},'0-2 — Riesgo bajo'),
            e('li',{className:'la'},'3-5 — Riesgo moderado'),
            e('li',{className:'lr'},'6+ — Riesgo alto — Ficha integral obligatoria'))),
        data.alertas.length>0&&e('div',{className:'block'},
          e('h4',null,'Alertas marcadas ('+data.alertas.length+')'),
          e('ul',{className:'bullets'},data.alertas.map(a=>e('li',{key:a},a)))),
        data.criteriosActivacion.length>0&&e('div',{className:'block'},
          e('h4',null,'Criterios de activacion marcados'),
          e('ul',{className:'bullets'},data.criteriosActivacion.map(a=>e('li',{key:a},a)))),
        e('button',{className:'btn-limpiar',onClick:()=>{if(confirm('Limpiar el formulario?'))setData(BASE);}},'Limpiar formulario'))),

    e('div',{className:'bot'}),
    e('footer',{className:'foot'},
      e('span',null,'Centro Medico Quirurgico MUNAY — La Paz, Bolivia — Trabajo Social'),
      e('span',null,'v1.0 — '+data.fechaEvaluacion)));
}

ReactDOM.createRoot(document.getElementById('root')).render(e(FichaSocial));
<\/script>
</body></html>`,S=window.open("","_blank","width=1100,height=860");S.document.write(y),S.document.close(),S.focus()}async function Zc(e){try{const s=await(await fetch(e)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(s)})}catch{return null}}async function ui(e){const t=await Zc(Le),s=oe(e==null?void 0:e.patientType),i=e!=null&&e.patientCode?`${s.label}-${e.patientCode}`:"",n=(e==null?void 0:e.fullName)||"",r=(e==null?void 0:e.guardian)||"",l=(e==null?void 0:e.guardianIdNumber)||"",c=(e==null?void 0:e.address)||"",d=(e==null?void 0:e.diagnosis)||"",h=new Date,j=String(h.getDate()).padStart(2,"0")+"/"+String(h.getMonth()+1).padStart(2,"0")+"/"+h.getFullYear(),m=t?`<div style="background:#fff;padding:5px 10px;border-radius:6px;display:flex;align-items:center;flex-shrink:0"><img src="${t}" style="height:46px;width:auto;object-fit:contain;display:block;"/></div>`:'<div style="background:#fff;padding:5px 10px;border-radius:6px"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>',v=`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Consentimiento Fotos — ${n}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
:root{--teal:#4FC3C2;--teal-dark:#1F3A5F;--amber:#F4B73C;--ink:#1c2a2a;--ink-soft:#4a5a5a;--line:#888}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#eef2f2;font-family:'Inter',Arial,sans-serif;color:var(--ink)}
.toolbar{position:sticky;top:0;z-index:10;background:#fff;border-bottom:1px solid #d8e0e0;padding:10px 20px;display:flex;gap:10px;justify-content:flex-end;align-items:center;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.toolbar .title{margin-right:auto;font-weight:600;color:var(--teal-dark);font-size:13px}
.btn{padding:8px 16px;border:1px solid #d0d8d8;background:#fff;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;color:var(--ink);transition:all .15s;font-family:inherit}
.btn:hover{border-color:var(--teal);color:var(--teal-dark)}
.btn.primary{background:var(--teal-dark);color:#fff;border-color:var(--teal-dark)}
.btn.primary:hover{background:#162e4d}
.sheet{width:210mm;min-height:297mm;margin:24px auto;background:#fff;box-shadow:0 8px 30px rgba(0,0,0,.08);display:flex;flex-direction:column}
.hdr{background:#1F3A5F;padding:14px 22px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;-webkit-print-color-adjust:exact;print-color-adjust:exact;position:relative;overflow:hidden}
.hdr::after{content:'';position:absolute;right:-40px;top:-40px;width:160px;height:160px;background:var(--amber);border-radius:50%;opacity:.12}
.hdr-center{text-align:center;z-index:1}
.hdr-sup{font-size:10px;color:#fff;opacity:.85;letter-spacing:1.5px;text-transform:uppercase;font-weight:600}
.hdr-name{font-size:22px;font-weight:900;color:#4FC3C2;letter-spacing:4px;margin:2px 0}
.hdr-tag{font-size:9px;color:#fff;opacity:.8;font-style:italic}
.hdr-right{text-align:right;z-index:1}
.hdr-nro{font-size:9px;color:#a0b4c4;letter-spacing:.3px}
.hdr-code{font-size:12px;font-weight:700;color:#fff;margin-top:2px}
.content{padding:10mm 22mm;flex:1;display:flex;flex-direction:column}
.doc-title{text-align:center;margin:0 0 2mm;font-size:16px;font-weight:700;letter-spacing:.5px;color:var(--teal-dark)}
.doc-subtitle{text-align:center;margin:0 0 8mm;font-size:12.5px;font-weight:600;letter-spacing:.3px;color:var(--ink)}
.data-block{font-size:12.5px;line-height:1.8}
.data-block .row{display:flex;align-items:flex-end;gap:6px;margin-bottom:2mm}
.data-block .label{font-weight:700;white-space:nowrap}
.data-block .blank{flex:1;border-bottom:1px solid var(--line);min-height:1em;padding:0 4px 1px}
.data-block .ci-row{display:flex;justify-content:flex-end;margin-bottom:1mm}
.data-block .ci-row .blank{flex:0 0 50mm}
.body-text{font-size:12px;line-height:1.65;text-align:justify;margin-top:4mm}
.body-text p{margin:0 0 3mm}
.diag-line{display:flex;align-items:flex-end;gap:8px;margin:3mm 0}
.diag-line .blank{flex:1;border-bottom:1px solid var(--line);min-height:1.4em;padding:0 4px 2px;text-align:center;font-weight:600}
.inline-blank{border-bottom:1px solid var(--line);padding:0 6px;min-width:55mm;display:inline-block;vertical-align:bottom;text-align:center}
.strong-line{font-weight:700;margin-top:3mm}
.fecha-line{display:flex;justify-content:flex-end;align-items:flex-end;gap:6px;margin-top:5mm;font-size:12px}
.fecha-line .label{font-weight:700}
.fecha-line .blank{border-bottom:1px solid var(--line);min-width:44mm;min-height:1.2em;padding:0 4px 1px}
.firma{margin:10mm auto 5mm;text-align:center;width:85mm}
.firma .linea{border-top:1px solid var(--ink);margin-top:26mm;margin-bottom:5px}
.firma .nombre{font-weight:700;font-size:12.5px;text-transform:uppercase;min-height:1.2em}
.firma .rol{font-size:10px;color:var(--ink-soft);margin-top:3px}
.firma .ci-firma{font-size:11.5px;margin-top:4px}
.firma .ci-firma .blank{display:inline-block;border-bottom:1px solid var(--line);min-width:32mm;min-height:1em;padding:0 4px;vertical-align:bottom}
.footer-bar{background:#1F3A5F;height:5px;margin-top:auto;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.editable{outline:none;cursor:text}
.editable:focus{background:#fffbe6}
.editable:empty::before{content:attr(data-placeholder);color:#b5bdbd;font-style:italic;font-weight:400}
@media print{
  html,body{background:#fff}
  .toolbar{display:none!important}
  .sheet{width:auto;min-height:auto;margin:0;box-shadow:none;page-break-after:always}
  @page{size:A4;margin:0}
}
</style></head><body>

<div class="toolbar">
  <span class="title">Consentimiento Informado — Toma de Imágenes y Video</span>
  <button class="btn" onclick="limpiar()">Limpiar</button>
  <button class="btn primary" onclick="window.print()">Imprimir / PDF</button>
</div>

<div class="sheet">

  <div class="hdr">
    <div>${m}</div>
    <div class="hdr-center">
      <div class="hdr-sup">Centro Médico Quirúrgico</div>
      <div class="hdr-name">MUNAY</div>
      <div class="hdr-tag">Centro del Niño con Fisura · La Paz, Bolivia</div>
    </div>
    <div class="hdr-right">
      ${i?`<div class="hdr-nro">N.° HC</div><div class="hdr-code">${i}</div>`:""}
    </div>
  </div>

  <div class="content">
    <h1 class="doc-title">CONSENTIMIENTO INFORMADO</h1>
    <h2 class="doc-subtitle">PARA LA TOMA DE IMÁGENES Y VIDEO CON FINES DE DIFUSIÓN</h2>

    <div class="data-block">
      <div class="ci-row">
        <span class="label">CI:&nbsp;</span>
        <span class="blank editable" contenteditable="true" data-placeholder="N.º de cédula">${l}</span>
      </div>
      <div class="row">
        <span class="label">Yo:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Nombre completo del representante legal">${r}</span>
      </div>
      <div class="row">
        <span class="label">Paciente/Representante Legal del paciente:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Nombre completo del paciente">${n}</span>
      </div>
      <div class="row">
        <span class="label">Domicilio:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Zona, calle, número">${c}</span>
      </div>
    </div>

    <div class="body-text">
      <p><strong>CONFIRMO</strong> que se me ha informado y explicado detalladamente en palabras comprensibles para mí la importancia de recibir el tratamiento Quirúrgico y Terapias de Rehabilitación que serán de beneficio para su salud.</p>

      <p><strong>Siendo el DIAGNÓSTICO:</strong></p>

      <div class="diag-line">
        <span class="blank editable" contenteditable="true" data-placeholder="Ej. FLAP BILATERAL">${d}</span>
      </div>

      <p>Por lo que <strong>AUTORIZO</strong> al <span class="inline-blank editable" contenteditable="true" data-placeholder="Dr. ___________"></span> y a todo su equipo para que puedan tomar las fotografías, videos o imágenes necesarias antes, durante y después de las intervenciones quirúrgicas y Terapias de Rehabilitación con la finalidad de tener un Registro de la Evolución y Seguimiento del Paciente necesarias para su mejor tratamiento, así como para ser presentadas en medios de difusión escritos o televisivos nacionales o extranjeros, como medio de sensibilización a la comunidad, para la recaudación de recursos económicos que servirán para llevar atención integral a personas que tienen Malformaciones Congénitas Craneofaciales, como la Fisura Labio Palatina. Llegando así a pacientes de escasos recursos económicos y que no tienen la posibilidad de acceder a Centros Especializados tanto en La Paz como a nivel Nacional.</p>

      <p>Entendiendo que en cualquier caso no se identificará por su nombre preservando la privacidad de la misma.</p>

      <p class="strong-line">ESTOY SATISFECHO CON LA INFORMACIÓN RECIBIDA Y FIRMO AL PIE ACEPTANDO TODOS LOS ASPECTOS QUE ESTA AUTORIZACIÓN IMPLICA PARA MI PERSONA Y/O MI REPRESENTADO/A.</p>

      <div class="fecha-line">
        <span class="label">Fecha:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="dd/mm/aaaa">${j}</span>
      </div>
    </div>

    <div class="firma">
      <div class="linea"></div>
      <div class="nombre editable" contenteditable="true" data-placeholder="NOMBRE COMPLETO">${r||n}</div>
      <div class="rol">Representante legal / Paciente</div>
      <div class="ci-firma">C.I.: <span class="blank editable" contenteditable="true" data-placeholder="N.º">${l}</span></div>
    </div>
  </div>

  <div class="footer-bar"></div>
</div>

<script>
function limpiar(){
  if(!confirm('¿Limpiar todos los campos editables?')) return;
  document.querySelectorAll('.editable').forEach(el => el.textContent = '');
}
<\/script>
</body></html>`,g=window.open("","_blank","width=900,height=800");g.document.write(v),g.document.close(),g.focus()}async function ed(e){try{const s=await(await fetch(e)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(s)})}catch{return null}}function ad(e){if(!e)return null;const t=Se(e);if(!Fe(t))return null;const s=new Date,i=_e(s,t),n=new Date(t.getFullYear()+i,t.getMonth(),t.getDate()),r=ea(s,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Ze(s,l);return{years:i,months:r,days:c}}function td(e){if(!e)return"";try{const t=Se(e);return Fe(t)?t.getDate().toString().padStart(2,"0")+"/"+(t.getMonth()+1).toString().padStart(2,"0")+"/"+t.getFullYear():e}catch{return e}}async function mi(e){const t=await ed(Le),s=oe(e==null?void 0:e.patientType),i=e!=null&&e.patientCode?`${s.label}-${e.patientCode}`:"",n=(e==null?void 0:e.fullName)||"",r=td((e==null?void 0:e.birthDate)||""),l=ad(e==null?void 0:e.birthDate),c=l?(()=>{const q=[];return l.years>0&&q.push(l.years+" a"),l.months>0&&q.push(l.months+" m"),q.length===0&&q.push(l.days+" d"),q.join(" ")})():"",d=l?l.years:-1,h=d<0||d<2,j=d<0||d>=2&&d<=11,m=d<0||d>=12&&d<=18,v=(e==null?void 0:e.sex)==="masculino"?"MASCULINO":(e==null?void 0:e.sex)==="femenino"?"FEMENINO":"",g=(e==null?void 0:e.address)||"",f=(e==null?void 0:e.guardian)||"",x=(e==null?void 0:e.guardianPhone)||"",y=(e==null?void 0:e.diagnosis)||"",S=y.toUpperCase(),u=new Date,N=u.getDate().toString().padStart(2,"0")+"/"+(u.getMonth()+1).toString().padStart(2,"0")+"/"+u.getFullYear(),F=t?`<div class="hdr-logo"><img src="${t}" alt="MUNAY"/></div>`:'<div class="hdr-logo"><span class="hdr-logo-text">MUNAY</span></div>',E=(q,L)=>`
    <div class="page-hdr">
      ${F}
      <div class="hdr-center">
        <div class="inst-name">MUNAY</div>
        <div class="inst-sub">Centro Médico Quirúrgico · Centro del Niño con Fisura · La Paz, Bolivia</div>
        <div class="doc-title">Historia Clínica Integral — Fisura Labio Alveolo Palatina</div>
      </div>
      <div class="hdr-right">
        ${L?`<div class="patient-name">${L}</div>`:""}
        <div class="hc-code">${i||"HC ______"}</div>
        <div>Hoja ${q} / 2 · ${N}</div>
      </div>
    </div>`,$=`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Historia Clínica — ${n}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
:root {
  --navy: #163A5F;
  --navy-mid: #2F5D8A;
  --navy-soft: #EBF2FA;
  --rule: #CBD5E0;
  --rule-light: #E2E8F0;
  --bg: #EDF2F7;
  --white: #FFFFFF;
  --ink: #1A202C;
  --ink-2: #4A5568;
  --ink-3: #718096;
  --amber: #B7791F;
  --amber-bg: #FEFCE8;
  --danger: #C53030;
  --success: #276749;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: var(--bg); font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; color: var(--ink); font-size: 8.5pt; line-height: 1.35; }

/* ── Document wrapper (single sheet on screen) ── */
.doc { width: 215.9mm; min-height: 279.4mm; margin: 12px auto; padding: 0 9mm 7mm; background: var(--white); box-shadow: 0 2px 16px rgba(0,0,0,.10); }

/* ── Page 2 separator (screen) / page-break trigger (print) ── */
.p2 { margin-top: 24px; padding-top: 14px; border-top: 3px dashed var(--rule-light); }

/* ── Toolbar ── */
.toolbar { position: sticky; top: 0; z-index: 100; background: var(--white); border-bottom: 2px solid var(--navy); padding: 7px 16px; display: flex; align-items: center; gap: 10px; box-shadow: 0 2px 8px rgba(22,58,95,.10); print-color-adjust: exact; }
.toolbar-brand { font-size: 9.5pt; font-weight: 700; color: var(--navy); letter-spacing: .3px; flex: 1; }
.toolbar-brand span { font-weight: 400; color: var(--ink-2); font-size: 8.5pt; }
.toolbar button { border: none; padding: 5px 13px; font-family: inherit; font-size: 8.5pt; font-weight: 600; cursor: pointer; border-radius: 5px; transition: opacity .15s; }
.btn-print { background: var(--navy); color: #fff; }
.btn-save  { background: var(--success); color: #fff; }
.btn-clear { background: transparent; color: var(--ink-2); border: 1px solid var(--rule) !important; }

/* ── Page Header ── */
.page-hdr { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px; padding: 8px 12px; margin-bottom: 6px; border-radius: 7px; background: linear-gradient(135deg, #0C1F35 0%, #163A5F 35%, #2F5D8A 70%, #3A7BBF 100%); print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.hdr-logo { background: rgba(255,255,255,0.12); border-radius: 5px; padding: 3px; }
.hdr-logo img { height: 40px; width: auto; display: block; border-radius: 3px; }
.hdr-logo-text { font-size: 14pt; font-weight: 800; color: #fff; letter-spacing: 3px; }
.hdr-center { text-align: center; }
.hdr-center .inst-name { font-size: 13pt; font-weight: 800; color: #fff; letter-spacing: 2px; line-height: 1; }
.hdr-center .inst-sub  { font-size: 7.5pt; color: rgba(255,255,255,0.80); margin-top: 2px; }
.hdr-center .doc-title { font-size: 8pt; font-weight: 600; color: rgba(255,255,255,0.92); margin-top: 3px; letter-spacing: .5px; text-transform: uppercase; }
.hdr-right { text-align: right; font-size: 7.5pt; color: rgba(255,255,255,0.85); line-height: 1.5; }
.hdr-right .hc-code { font-size: 10pt; font-weight: 700; color: #fff; font-family: 'Courier New', monospace; }
.hdr-right .patient-name { font-size: 8.5pt; font-weight: 600; color: #fff; }

/* ── Legend badges ── */
.badge { display: inline-block; font-size: 5.5pt; font-weight: 700; padding: 1px 4px; border-radius: 3px; vertical-align: middle; letter-spacing: .3px; }
.badge-obl  { background: #C53030; color: #fff; }
.badge-edad { background: #B7791F; color: #fff; }
.badge-clin { background: #276749; color: #fff; }
.legend { display: inline-flex; gap: 8px; font-size: 6.5pt; color: var(--ink-3); margin-left: 8px; font-weight: 400; text-transform: none; letter-spacing: 0; }
.legend-item { display: inline-flex; align-items: center; gap: 3px; }

/* ── Section card ── */
.section-card { margin: 4px 0; border: 1px solid var(--rule-light); border-radius: 6px; overflow: hidden; }
.section-card + .section-card { margin-top: 4px; }
h3.section { background: var(--navy-soft); color: var(--navy); font-size: 8pt; font-weight: 700; letter-spacing: .4px; text-transform: uppercase; padding: 4px 10px 4px 13px; border-left: 4px solid var(--navy); display: flex; align-items: center; gap: 6px; }
.section-body { padding: 5px 10px; }

/* Sub-headings */
h4.sub { font-size: 7.5pt; font-weight: 600; color: var(--navy-mid); text-transform: uppercase; letter-spacing: .3px; margin: 3px 0 2px; border-bottom: 1px solid var(--rule-light); padding-bottom: 1px; }

/* ── Field grid ── */
.fg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px 8px; }
.fg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 8px; }
.fg-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px 8px; }
.fg-auto { display: flex; flex-wrap: wrap; gap: 3px 10px; align-items: baseline; }
.field { display: flex; flex-direction: column; gap: 1px; }
.field-row { display: flex; align-items: baseline; gap: 4px; }
.lbl { font-size: 6.8pt; font-weight: 600; color: var(--ink-2); text-transform: uppercase; letter-spacing: .3px; white-space: nowrap; }
.val { border: none; border-bottom: 1px solid var(--rule); min-width: 60px; min-height: 13px; padding: 0px 3px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); outline: none; flex: 1; }
.val.wide { min-width: 110px; }
.val.xwide { min-width: 180px; }
.val.full  { min-width: 100%; width: 100%; }
.val.sm    { min-width: 38px; }
[contenteditable="true"] { outline: none; cursor: text; }
[contenteditable="true"]:focus { background: #EBF8FF; }

/* ── Two-col layout ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; }
.two-col-3-2 { display: grid; grid-template-columns: 3fr 2fr; gap: 4px 12px; }

/* ── Checkboxes ── */
.checklist { display: grid; gap: 1px 8px; margin: 2px 0; }
.cl-2 { grid-template-columns: repeat(2, 1fr); }
.cl-3 { grid-template-columns: repeat(3, 1fr); }
.cl-4 { grid-template-columns: repeat(4, 1fr); }
.cl-5 { grid-template-columns: repeat(5, 1fr); }
.cl-auto { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
.cl-inline { display: flex; flex-wrap: wrap; gap: 2px 10px; align-items: center; }
.chk { display: flex; align-items: center; gap: 5px; font-size: 7.8pt; line-height: 1.25; cursor: pointer; user-select: none; padding: 1px 0; }
.chk .box { display: inline-flex; align-items: center; justify-content: center; width: 10px; height: 10px; border: 1.5px solid var(--rule); border-radius: 2px; flex-shrink: 0; background: var(--white); font-size: 0; transition: all .1s; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.chk.checked .box { background: var(--navy); border-color: var(--navy); font-size: 7pt; color: #fff; font-weight: 900; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.chk.checked .box::after { content: "✓"; color: #fff; font-size: 7pt; line-height: 1; }

/* Other-line */
.other-line { display: inline-block; border-bottom: 1px solid var(--rule); min-width: 50px; padding: 0 2px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); min-height: 10px; }

/* ── Narrative ── */
.narrative { border: 1px solid var(--rule-light); border-radius: 4px; background: #FAFBFC; padding: 3px 6px; min-height: 14px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 500; line-height: 1.35; color: var(--navy); margin: 2px 0; }
.narrative.tall  { min-height: 18px; }
.narrative.xtall { min-height: 22px; }

/* ── Metrics strip ── */
.metrics-strip { display: flex; flex-wrap: wrap; gap: 3px 12px; background: var(--navy-soft); border: 1px solid var(--rule-light); border-radius: 5px; padding: 3px 8px; margin: 2px 0; }
.metric { display: flex; align-items: baseline; gap: 3px; }
.metric .lbl { font-size: 7pt; font-weight: 700; color: var(--navy); }
.metric .val { border-bottom: 1px solid var(--navy-mid); min-width: 40px; }
.metric .unit { font-size: 6.5pt; color: var(--ink-3); }

/* ── Number input ── */
.val-input { border: none; border-bottom: 1px solid var(--rule); background: transparent; width: 50px; padding: 0 3px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); outline: none; }
.val-input:focus { background: #EBF8FF; }
.val-input.imc-auto { background: var(--navy-soft); font-weight: 700; color: var(--navy); width: 55px; }
.val-input::-webkit-outer-spin-button, .val-input::-webkit-inner-spin-button { -webkit-appearance: none; }
.val-input[type="number"] { -moz-appearance: textfield; }

/* ── Add row button ── */
.add-row-btn { background: var(--navy-soft); color: var(--navy); border: 1px solid var(--rule); padding: 1px 7px; font-size: 6.8pt; font-weight: 600; cursor: pointer; border-radius: 3px; margin-left: 8px; font-family: inherit; }

/* ── Tables ── */
table.clinical { width: 100%; border-collapse: collapse; margin: 4px 0; font-size: 7.5pt; border-radius: 5px; overflow: hidden; }
table.clinical thead tr { background: var(--navy-soft); }
table.clinical th { padding: 4px 7px; text-align: left; font-size: 7pt; font-weight: 700; color: var(--navy); border: 1px solid var(--rule-light); }
table.clinical td { border: 1px solid var(--rule-light); padding: 2px 6px; vertical-align: top; }
table.clinical td.fillable { min-height: 14px; height: 14px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); }

table.edu { width: 100%; border-collapse: collapse; font-size: 7.8pt; margin: 4px 0; }
table.edu thead tr { background: var(--navy-soft); }
table.edu th { padding: 4px 8px; text-align: center; font-size: 7pt; font-weight: 700; color: var(--navy); border: 1px solid var(--rule-light); }
table.edu td { border: 1px solid var(--rule-light); padding: 3px 8px; }
table.edu td.tema { font-weight: 500; }
table.edu td.cell-chk { text-align: center; width: 13%; }
table.edu td.cell-chk .chk { justify-content: center; }

/* ── Age blocks ── */
.age-block { border-left: 3px solid var(--amber); background: var(--amber-bg); padding: 2px 8px; margin: 2px 0; border-radius: 0 4px 4px 0; display: flex; flex-wrap: wrap; gap: 1px 8px; align-items: center; }
.age-label { display: inline-block; background: var(--amber); color: #fff; font-size: 6.5pt; font-weight: 700; padding: 1px 6px; border-radius: 3px; margin-right: 6px; text-transform: uppercase; letter-spacing: .3px; print-color-adjust: exact; -webkit-print-color-adjust: exact; flex-shrink: 0; }

/* ── Cesarea motivo ── */
.cesarea-motivo { display: none; flex-wrap: wrap; gap: 2px 8px; margin: 3px 0 0 16px; padding: 4px 8px; background: var(--amber-bg); border-left: 3px solid var(--amber); border-radius: 0 4px 4px 0; align-items: center; }

/* ── Signature ── */
.firma-section { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px; }
.firma-box { border: 1px solid var(--rule-light); border-radius: 5px; padding: 6px 10px 5px; text-align: center; background: #FAFBFC; }
.firma-line { border-bottom: 1px solid var(--ink); min-height: 30px; margin: 0 auto 3px; width: 75%; }
.firma-label { font-size: 7pt; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; color: var(--ink-3); }

/* ── Page footer ── */
.footer { margin-top: 6px; padding-top: 4px; border-top: 1px solid var(--rule-light); font-size: 6.5pt; color: var(--ink-3); display: flex; justify-content: space-between; font-style: italic; }

/* ── Print ── */
@page { size: letter; margin: 8mm 9mm 7mm; }
@media print {
  html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
  .toolbar { display: none !important; }
  /* Single wrapper: no fixed height, let content flow naturally */
  .doc {
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    min-height: 0 !important;
  }
  /* Page 2 marker: force physical page break, hide visual separator */
  .p2 {
    page-break-before: always !important;
    break-before: page !important;
    border-top: none !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  .section-card { break-inside: avoid; page-break-inside: avoid; }
  .narrative.xtall { min-height: 18px !important; }
  .narrative.tall  { min-height: 14px !important; }
  .narrative       { min-height: 10px !important; }
  [contenteditable="true"]:focus { background: transparent !important; }
  .add-row-btn { display: none !important; }
  .page-hdr { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  .footer { margin-top: 4px !important; }
}
</style></head><body>

<div class="toolbar">
  <div class="toolbar-brand">MUNAY <span>· Historia Clínica Integral FLAP</span></div>
  <button class="btn-print" onclick="window.print()">🖨 Imprimir / PDF</button>
  <button class="btn-save" id="btn-guardar" onclick="saveToFirestore(this)">💾 Guardar en sistema</button>
  <button class="btn-clear" onclick="resetForm()">✕ Limpiar</button>
</div>

<div class="doc">
  ${E("1","")}

  <!-- Sección 1 -->
  <div class="section-card">
    <h3 class="section">1 · Identificación y Datos Administrativos
      <span class="legend">
        <span class="legend-item"><span class="badge badge-obl">OBL</span> Obligatorio</span>
        <span class="legend-item"><span class="badge badge-edad">EDAD</span> Por edad</span>
        <span class="legend-item"><span class="badge badge-clin">CLÍN</span> Pertinencia clínica</span>
      </span>
    </h3>
    <div class="section-body">
      <div class="fg-4" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${N}</span></div>
        <div class="field-row"><span class="lbl">Hora:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Sexo:</span><span class="val sm" contenteditable="true">${v}</span></div>
        <div class="field-row"><span class="lbl">Edad:</span><span class="val" contenteditable="true">${c}</span></div>
      </div>
      <div class="fg-2" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Nombre completo:</span><span class="val xwide" contenteditable="true">${n}</span></div>
        <div class="fg-2">
          <div class="field-row"><span class="lbl">F. Nacimiento:</span><span class="val" contenteditable="true">${r}</span></div>
          <div class="field-row"><span class="lbl">Lugar de nac.:</span><span class="val" contenteditable="true"></span></div>
        </div>
      </div>
      <div class="fg-3" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Dirección:</span><span class="val wide" contenteditable="true">${g}</span></div>
        <div class="field-row"><span class="lbl">Procedencia:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Tel. principal:</span><span class="val" contenteditable="true">${x}</span></div>
      </div>
      <div class="fg-4" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Persona responsable:</span><span class="val wide" contenteditable="true">${f}</span></div>
        <div class="field-row"><span class="lbl">Parentesco:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Tel. alternativo:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Código CI:</span><span class="val" contenteditable="true"></span></div>
      </div>
      <div class="cl-inline">
        <span class="lbl" style="margin-right:4px">Tipo ingreso:</span>
        <div class="chk"><span class="box"></span>Nuevo</div>
        <div class="chk"><span class="box"></span>Reingreso</div>
        <div class="chk"><span class="box"></span>Transferido</div>
        <span class="lbl" style="margin-left:12px;margin-right:4px">Referido por:</span>
        <div class="chk"><span class="box"></span>Hospital</div>
        <div class="chk"><span class="box"></span>Redes sociales</div>
        <div class="chk"><span class="box"></span>Fundación</div>
        <div class="chk"><span class="box"></span>Campaña</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
    </div>
  </div>

  <!-- Sección 2 -->
  <div class="section-card">
    <h3 class="section">2 · Motivo de Ingreso y Diagnóstico de Referencia <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Motivo principal</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Evaluación inicial FLAP</div>
            <div class="chk"><span class="box"></span>Cirugía primaria</div>
            <div class="chk"><span class="box"></span>Seguimiento</div>
            <div class="chk"><span class="box"></span>Segunda opinión</div>
            <div class="chk"><span class="box"></span>Complicación</div>
            <div class="chk"><span class="box"></span>Tratamiento integral</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
        </div>
        <div>
          <h4 class="sub">Diagnóstico inicial de referencia</h4>
          <div class="checklist cl-2">
            <div class="chk" data-dx="labio-uni"><span class="box"></span>Labio hendido unilateral</div>
            <div class="chk" data-dx="labio-bi"><span class="box"></span>Labio hendido bilateral</div>
            <div class="chk" data-dx="paladar"><span class="box"></span>Paladar hendido</div>
            <div class="chk" data-dx="flap"><span class="box"></span>FLAP completo</div>
            <div class="chk"><span class="box"></span>Fisura submucosa</div>
            <div class="chk"><span class="box"></span>Anomalía craneofacial</div>
            <div class="chk"><span class="box"></span>Sospecha sindrómica</div>
            <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true">${y}</span></div>
          </div>
          <div class="field-row" style="margin-top:3px"><span class="lbl">Especificar:</span><span class="val full" contenteditable="true"></span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 3 -->
  <div class="section-card">
    <h3 class="section">3 · Historia de la Enfermedad Actual <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline" style="margin-bottom:3px">
        <span class="lbl">Dx prenatal:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
        <span class="lbl" style="margin-left:10px">Atención previa:</span>
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>Hosp. público</div>
        <div class="chk"><span class="box"></span>Privado</div>
        <div class="chk"><span class="box"></span>Fundación</div>
      </div>
      <div class="field-row" style="margin-bottom:3px"><span class="lbl">Especificar atención previa:</span><span class="val full" contenteditable="true"></span></div>
      <div class="narrative xtall" contenteditable="true">Narrativa libre: relato de la madre/responsable sobre el origen, evolución y manejo previo del cuadro...</div>
      <h4 class="sub" style="margin-top:5px">Tratamientos / cirugías previas <span class="badge badge-clin">CLÍN</span>
        <button type="button" class="add-row-btn" onclick="addRow('tbl-cir',4)">+ Agregar fila</button>
      </h4>
      <table class="clinical" id="tbl-cir">
        <thead><tr><th style="width:10%">Edad</th><th style="width:38%">Procedimiento</th><th style="width:22%">Lugar</th><th>Complicaciones</th></tr></thead>
        <tbody>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Sección 4 -->
  <div class="section-card">
    <h3 class="section">4 · Antecedentes Prenatales y Perinatales <span class="badge badge-edad">EDAD</span></h3>
    <div class="section-body">
      <div class="fg-3" style="margin-bottom:3px">
        <div class="field-row"><span class="lbl">N.º embarazo:</span><span class="val sm" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Controles prenatales:</span><span class="val sm" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Semanas gestación:</span><span class="val sm" contenteditable="true"></span></div>
      </div>
      <div class="cl-inline" style="margin-bottom:3px">
        <span class="lbl">Tipo de parto:</span>
        <div class="chk" id="chk-eutocico"><span class="box"></span>Eutócico</div>
        <div class="chk" id="chk-distocico"><span class="box"></span>Distócico</div>
        <div class="chk" id="chk-cesarea-parto"><span class="box"></span>Cesárea</div>
      </div>
      <div class="cesarea-motivo" id="cesarea-motivo-parto">
        <span class="lbl" style="margin-right:6px">Motivo cesárea:</span>
        <div class="chk"><span class="box"></span>Sufrimiento fetal</div>
        <div class="chk"><span class="box"></span>Desproporción cefalopélvica</div>
        <div class="chk"><span class="box"></span>Presentación anormal</div>
        <div class="chk"><span class="box"></span>Cesárea anterior</div>
        <div class="chk"><span class="box"></span>Electiva</div>
        <div class="chk"><span class="box"></span>Otra: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="cl-inline" style="margin-bottom:3px">
        <div class="field-row"><span class="lbl">Peso nac.:</span><span class="val sm" contenteditable="true"></span></div>
        <div class="field-row" style="margin-left:10px"><span class="lbl">Talla nac.:</span><span class="val sm" contenteditable="true"></span></div>
        <span class="lbl" style="margin-left:12px">Incubadora:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
        <span class="lbl" style="margin-left:8px">Reanimación:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
        <span class="lbl" style="margin-left:8px">Tamizaje neonatal:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
      </div>
      <div>
        <span class="lbl">Exposiciones en embarazo:</span>
        <div class="checklist cl-5" style="margin-top:2px">
          <div class="chk"><span class="box"></span>Alcohol</div>
          <div class="chk"><span class="box"></span>Tabaco</div>
          <div class="chk"><span class="box"></span>Medicamentos teratogénicos</div>
          <div class="chk"><span class="box"></span>Infecciones</div>
          <div class="chk"><span class="box"></span>Diabetes gestacional</div>
          <div class="chk"><span class="box"></span>Hipertensión</div>
          <div class="chk"><span class="box"></span>Violencia</div>
          <div class="chk"><span class="box"></span>Desnutrición</div>
          <div class="chk"><span class="box"></span>Ninguna relevante</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 5 -->
  <div class="section-card">
    <h3 class="section">5 · Antecedentes Personales y Familiares <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Personales patológicos</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Ninguna</div>
            <div class="chk"><span class="box"></span>Respiratorias recurrentes</div>
            <div class="chk"><span class="box"></span>Cardiopatía</div>
            <div class="chk"><span class="box"></span>Convulsiones</div>
            <div class="chk"><span class="box"></span>Anemia</div>
            <div class="chk"><span class="box"></span>Desnutrición</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Hospitalizaciones: <span class="other-line" contenteditable="true"></span></div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
          <div class="cl-inline" style="margin-top:4px">
            <span class="lbl">Alergias:</span>
            <div class="chk"><span class="box"></span>No refiere</div>
            <div class="chk"><span class="box"></span>Medicamentos</div>
            <div class="chk"><span class="box"></span>Alimentos</div>
            <div class="chk"><span class="box"></span>Látex</div>
            <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
          <div class="field-row" style="margin-top:3px"><span class="lbl">Medicación actual:</span><span class="val full" contenteditable="true"></span></div>
        </div>
        <div>
          <h4 class="sub">Antecedentes familiares</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Historia familiar FLAP:</span>
            <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Familiar afectado:</span>
            <div class="chk"><span class="box"></span>Padre</div><div class="chk"><span class="box"></span>Madre</div>
            <div class="chk"><span class="box"></span>Hermanos</div><div class="chk"><span class="box"></span>Tíos</div>
            <div class="chk"><span class="box"></span>Primos</div>
            <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Antec. genéticos/sindrómicos:</span>
            <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Sospecha</div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Consanguinidad:</span>
            <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 6 -->
  <div class="section-card">
    <h3 class="section">6 · Desarrollo y Crecimiento <span class="badge badge-edad">EDAD</span></h3>
    <div class="section-body">
      ${h?`<div class="age-block">
        <span class="age-label">RN / Lactantes</span>
        <span class="lbl">Alimentación:</span>
        <div class="chk"><span class="box"></span>LME</div>
        <div class="chk"><span class="box"></span>Mixta</div>
        <div class="chk"><span class="box"></span>Fórmula especial</div>
        <div class="chk"><span class="box"></span>Dificultad succión</div>
        <div class="chk"><span class="box"></span>Regurgitación nasal</div>
        <span class="lbl" style="margin-left:8px">Desarrollo:</span>
        <div class="chk"><span class="box"></span>Sostén cefálico</div>
        <div class="chk"><span class="box"></span>Sonrisa social</div>
        <div class="chk"><span class="box"></span>Sedestación</div>
        <div class="chk"><span class="box"></span>Gateo</div>
      </div>`:""}
      ${j?`<div class="age-block">
        <span class="age-label">Preescolar / Escolar</span>
        <span class="lbl">Psicomotor:</span>
        <div class="chk"><span class="box"></span>Normal</div>
        <div class="chk"><span class="box"></span>Retraso leve</div>
        <div class="chk"><span class="box"></span>Moderado</div>
        <div class="chk"><span class="box"></span>Severo</div>
        <span class="lbl" style="margin-left:6px">Lenguaje:</span>
        <div class="chk"><span class="box"></span>Adecuado</div>
        <div class="chk"><span class="box"></span>Retraso</div>
        <div class="chk"><span class="box"></span>Hipernasalidad</div>
        <div class="chk"><span class="box"></span>Dif. articulatoria</div>
        <span style="display:inline-flex;align-items:baseline;gap:3px;margin-left:6px"><span class="lbl">Curso:</span><span class="val sm" contenteditable="true"></span></span>
        <span class="lbl" style="margin-left:6px">Rendimiento:</span>
        <div class="chk"><span class="box"></span>Bueno</div>
        <div class="chk"><span class="box"></span>Regular</div>
        <div class="chk"><span class="box"></span>Bajo</div>
      </div>`:""}
      ${m?`<div class="age-block">
        <span class="age-label">Adolescentes</span>
        <span class="lbl">Adaptación social:</span>
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Aislamiento</div>
        <div class="chk"><span class="box"></span>Bullying</div>
        <div class="chk"><span class="box"></span>Baja autoestima</div>
        <div class="chk"><span class="box"></span>Ansiedad social</div>
      </div>`:""}
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>

  <div class="p2">
    ${E("2",n)}
  </div>

  <!-- Sección 7+8 -->
  <div class="section-card">
    <h3 class="section">7 · Evaluación Nutricional · 8 · Inmunizaciones</h3>
    <div class="section-body">
      <div class="metrics-strip">
        <div class="metric"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" oninput="calcIMC()"/><span class="unit">kg</span></div>
        <div class="metric"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" oninput="calcIMC()"/><span class="unit">cm</span></div>
        <div class="metric"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly/><span class="unit">kg/m²</span></div>
        <span class="lbl" style="margin-left:8px">Riesgo nutricional:</span>
        <div class="chk"><span class="box"></span>Sin riesgo</div>
        <div class="chk"><span class="box"></span>Leve</div>
        <div class="chk"><span class="box"></span>Moderado</div>
        <div class="chk"><span class="box"></span>Alto</div>
      </div>
      <div class="cl-inline" style="margin-top:4px">
        <span class="lbl">Alimentación actual:</span>
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Selectiva</div>
        <div class="chk"><span class="box"></span>Déficit proteico</div>
        <div class="chk"><span class="box"></span>Predominio CHO</div>
        <div class="chk"><span class="box"></span>Baja frecuencia</div>
        <span class="lbl" style="margin-left:14px">Inmunizaciones:</span>
        <div class="chk"><span class="box"></span>Completo</div>
        <div class="chk"><span class="box"></span>Incompleto</div>
        <div class="chk"><span class="box"></span>Desconoce</div>
      </div>
    </div>
  </div>

  <!-- Sección 9+10 -->
  <div class="section-card">
    <h3 class="section">9 · Audición y ORL · 10 · Odontología y Ortodoncia</h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Historia auditiva</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Sin alteraciones</div>
            <div class="chk"><span class="box"></span>Otitis recurrente</div>
            <div class="chk"><span class="box"></span>Hipoacusia</div>
            <div class="chk"><span class="box"></span>Tubos de ventilación</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Evaluación ORL previa</div>
          </div>
        </div>
        <div>
          <h4 class="sub">Odontología</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Dentición:</span>
            <div class="chk"><span class="box"></span>Temporal</div>
            <div class="chk"><span class="box"></span>Mixta</div>
            <div class="chk"><span class="box"></span>Permanente</div>
          </div>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Caries</div>
            <div class="chk"><span class="box"></span>Maloclusión</div>
            <div class="chk"><span class="box"></span>Higiene deficiente</div>
            <div class="chk"><span class="box"></span>Fístula alveolar</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Edentulía fisiológica</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 11+12 -->
  <div class="section-card">
    <h3 class="section">11 · Tamizaje Psicológico · 12 · Evaluación Social</h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Conducta del paciente</h4>
          <div class="checklist cl-3">
            <div class="chk"><span class="box"></span>Adecuada</div>
            <div class="chk"><span class="box"></span>Ansioso</div>
            <div class="chk"><span class="box"></span>Temor marcado</div>
            <div class="chk"><span class="box"></span>Irritable</div>
            <div class="chk"><span class="box"></span>Retraído</div>
          </div>
          <h4 class="sub" style="margin-top:5px">Dinámica familiar</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Adecuada</div>
            <div class="chk"><span class="box"></span>Sobreprotectora</div>
            <div class="chk"><span class="box"></span>Negligencia sospechada</div>
            <div class="chk"><span class="box"></span>Hostilidad</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Ansiedad parental elevada</div>
          </div>
        </div>
        <div>
          <h4 class="sub">Vivienda y servicios</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Vivienda:</span>
            <div class="chk"><span class="box"></span>Propia</div>
            <div class="chk"><span class="box"></span>Alquilada</div>
            <div class="chk"><span class="box"></span>Prestada</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Servicios básicos:</span>
            <div class="chk"><span class="box"></span>Agua</div>
            <div class="chk"><span class="box"></span>Luz</div>
            <div class="chk"><span class="box"></span>Alcantarillado</div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Riesgo social:</span>
            <div class="chk"><span class="box"></span>Bajo</div>
            <div class="chk"><span class="box"></span>Moderado</div>
            <div class="chk"><span class="box"></span>Alto</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 13 -->
  <div class="section-card">
    <h3 class="section">13 · Examen Físico General <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline" style="margin-bottom:4px">
        <span class="lbl">Estado general:</span>
        <div class="chk"><span class="box"></span>Bueno</div>
        <div class="chk"><span class="box"></span>Regular</div>
        <div class="chk"><span class="box"></span>Malo</div>
      </div>
      <div class="metrics-strip">
        <div class="metric"><span class="lbl">FC:</span><span class="val sm" contenteditable="true"></span><span class="unit">lpm</span></div>
        <div class="metric"><span class="lbl">FR:</span><span class="val sm" contenteditable="true"></span><span class="unit">rpm</span></div>
        <div class="metric"><span class="lbl">SatO₂:</span><span class="val sm" contenteditable="true"></span><span class="unit">%</span></div>
        <div class="metric"><span class="lbl">Temp:</span><span class="val sm" contenteditable="true"></span><span class="unit">°C</span></div>
        <div class="metric"><span class="lbl">PA:</span><span class="val" contenteditable="true"></span><span class="unit">mmHg</span></div>
        <div class="metric"><span class="lbl">Peso:</span><span class="val sm" contenteditable="true"></span><span class="unit">kg</span></div>
        <div class="metric"><span class="lbl">Talla:</span><span class="val sm" contenteditable="true"></span><span class="unit">cm</span></div>
      </div>
      <div class="cl-inline" style="margin:3px 0">
        <span class="lbl">Hallazgos:</span>
        <div class="chk"><span class="box"></span>Desnutrición</div>
        <div class="chk"><span class="box"></span>Infección respiratoria</div>
        <div class="chk"><span class="box"></span>Mala higiene</div>
        <div class="chk"><span class="box"></span>Anomalías asociadas</div>
      </div>
      <div class="narrative xtall" contenteditable="true">Examen físico segmentario — cabeza/cuello, cardiovascular, respiratorio, abdomen, genitourinario, extremidades, neurológico...</div>
    </div>
  </div>

  <!-- Sección 14+15 -->
  <div class="section-card">
    <h3 class="section">14 · Evaluación Craneofacial Específica <span class="badge badge-obl">OBL</span> · 15 · Sospecha Sindrómica <span class="badge badge-clin">CLÍN</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Tipo de fisura</h4>
          <div class="checklist cl-auto">
            <div class="chk"><span class="box"></span>Labio unilateral</div>
            <div class="chk"><span class="box"></span>Labio bilateral</div>
            <div class="chk"><span class="box"></span>Paladar hendido</div>
            <div class="chk"><span class="box"></span>FLAP completo</div>
            <div class="chk"><span class="box"></span>Submucoso</div>
          </div>
          <h4 class="sub" style="margin-top:5px">Hallazgos específicos</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Fístula</div>
            <div class="chk"><span class="box"></span>Colapso nasal</div>
            <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
            <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
            <div class="chk"><span class="box"></span>Paladar corto</div>
          </div>
        </div>
        <div>
          <h4 class="sub">Sospecha sindrómica</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <div class="chk"><span class="box"></span>No aparente</div>
            <div class="chk"><span class="box"></span>Leve</div>
            <div class="chk"><span class="box"></span>Alta sospecha</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Hallazgos:</span>
            <div class="chk"><span class="box"></span>Auriculares</div>
            <div class="chk"><span class="box"></span>Oculares</div>
            <div class="chk"><span class="box"></span>Cardiopatía</div>
            <div class="chk"><span class="box"></span>Extremidades</div>
            <div class="chk"><span class="box"></span>Neurológicas</div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Derivación genética:</span>
            <div class="chk"><span class="box"></span>Sí</div>
            <div class="chk"><span class="box"></span>No</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 16 -->
  <div class="section-card">
    <h3 class="section">16 · Impresión Diagnóstica y Conducta <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Impresión diagnóstica integral</h4>
          <div class="narrative xtall" contenteditable="true"></div>
        </div>
        <div>
          <h4 class="sub">Conducta y plan terapéutico inicial</h4>
          <div class="narrative xtall" contenteditable="true"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="firma-section" style="grid-template-columns:1fr;max-width:240px">
    <div class="firma-box">
      <div class="firma-line"></div>
      <div class="firma-label">Firma y Sello del Médico</div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 2 de 2</span>
  </div>
</div>

<script>
  var DIAG = ${JSON.stringify(S)};
  var PATIENT_NAME = ${JSON.stringify(n)};
  var HC_CODE = ${JSON.stringify(i)};
  var PATIENT_ID = ${JSON.stringify((e==null?void 0:e.id)||"")};

  document.querySelectorAll('.chk').forEach(function(chk) {
    chk.addEventListener('click', function(e) {
      if (e.target.classList.contains('other-line')) return;
      if (e.target.isContentEditable) return;
      chk.classList.toggle('checked');
    });
  });

  document.getElementById('chk-cesarea-parto').addEventListener('click', function() {
    var motivo = document.getElementById('cesarea-motivo-parto');
    motivo.style.display = this.classList.contains('checked') ? 'flex' : 'none';
  });

  (function initDiag() {
    document.querySelectorAll('[data-dx]').forEach(function(el) {
      var dx = el.dataset.dx;
      if      (dx === 'flap'      && DIAG.includes('FLAP')) el.classList.add('checked');
      else if (dx === 'labio-bi'  && DIAG.includes('BILATERAL') && !DIAG.includes('FLAP')) el.classList.add('checked');
      else if (dx === 'labio-uni' && DIAG.includes('FL') && !DIAG.includes('BILATERAL') && !DIAG.includes('FLAP')) el.classList.add('checked');
      else if (dx === 'paladar'   && (DIAG.includes('FP') || DIAG.includes('PALAT') || DIAG.includes('FLP'))) el.classList.add('checked');
    });
  })();

  function calcIMC() {
    var p = parseFloat(document.getElementById('peso-nut').value);
    var t = parseFloat(document.getElementById('talla-nut').value);
    var el = document.getElementById('imc-nut');
    el.value = (p > 0 && t > 0) ? (p / Math.pow(t/100, 2)).toFixed(2) : '';
  }

  function addRow(id, cols) {
    var tbody = document.getElementById(id).querySelector('tbody');
    var tr = document.createElement('tr');
    for (var i = 0; i < cols; i++) {
      var td = document.createElement('td');
      td.className = 'fillable';
      td.setAttribute('contenteditable', 'true');
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  function resetForm() {
    if (!confirm('¿Limpiar todo el formulario?')) return;
    document.querySelectorAll('.chk.checked').forEach(function(c) { c.classList.remove('checked'); });
    document.querySelectorAll('[contenteditable="true"]').forEach(function(el) { el.textContent = ''; });
    document.querySelectorAll('.val-input').forEach(function(el) { el.value = ''; });
    document.getElementById('cesarea-motivo-parto').style.display = 'none';
  }

  function collectFormData() {
    function gatherItems(root, items) {
      root.querySelectorAll('.chk.checked').forEach(function(chk) {
        var cl = chk.cloneNode(true);
        var otherEl = cl.querySelector('.other-line');
        var otherTxt = otherEl ? otherEl.textContent.trim() : '';
        cl.querySelectorAll('.box,.other-line').forEach(function(s) { s.remove(); });
        var txt = cl.textContent.trim();
        if (otherTxt) txt += ' – ' + otherTxt;
        if (txt) items.push({ tipo: 'check', texto: txt });
      });
      root.querySelectorAll('.field-row, .inline').forEach(function(row) {
        var lbl = row.querySelector('.lbl');
        var val = row.querySelector('[contenteditable="true"]');
        if (lbl && val && val.textContent.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: val.textContent.trim() });
      });
      root.querySelectorAll('.metric').forEach(function(m) {
        var lbl = m.querySelector('.lbl');
        var inp = m.querySelector('input.val-input');
        var ve  = m.querySelector('[contenteditable="true"]');
        var unit = m.querySelector('.unit');
        var unitTxt = unit ? ' ' + unit.textContent.trim() : '';
        if (lbl && inp && inp.value.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: inp.value + unitTxt });
        if (lbl && ve && ve.textContent.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: ve.textContent.trim() + unitTxt });
      });
      root.querySelectorAll('.narrative').forEach(function(n) {
        var txt = n.textContent.trim();
        if (txt && txt.indexOf('relato de la madre') === -1 && txt.indexOf('Examen físico segmentario') === -1 && txt.indexOf('Narrativa libre') === -1)
          items.push({ tipo: 'narrativa', texto: txt });
      });
      var tbls = Array.from(root.querySelectorAll('table.clinical'));
      tbls.forEach(function(tbl) {
        var hdrs = Array.from(tbl.querySelectorAll('thead th')).map(function(th) { return th.textContent.trim(); });
        var rows = [];
        tbl.querySelectorAll('tbody tr').forEach(function(tr) {
          var cells = Array.from(tr.querySelectorAll('td')).map(function(td) { return td.textContent.trim(); });
          if (cells.some(function(c) { return c; })) rows.push(cells);
        });
        if (rows.length) items.push({ tipo: 'tabla', encabezados: hdrs, filas: rows });
      });
    }

    var data = {};
    document.querySelectorAll('.section-card').forEach(function(card) {
      var h3 = card.querySelector('h3.section');
      if (!h3) return;
      var cl = h3.cloneNode(true);
      cl.querySelectorAll('span').forEach(function(s) { s.remove(); });
      var title = cl.textContent.trim();
      var items = [];
      var body = card.querySelector('.section-body') || card;
      gatherItems(body, items);
      if (items.length) data[title] = items;
    });
    return data;
  }

  function saveToFirestore(btn) {
    var formData = collectFormData();
    if (!Object.keys(formData).length) {
      alert('No hay datos registrados para guardar. Complete al menos un campo del formulario.');
      return;
    }
    if (!window.opener || window.opener.closed) {
      alert('La ventana principal ya no está disponible. Imprima el formulario para conservarlo.');
      return;
    }
    window.opener.postMessage({
      type:         'MUNAY_SAVE_HC',
      patientId:    PATIENT_ID,
      patientName:  PATIENT_NAME,
      patientCode:  HC_CODE,
      clinicalData: formData,
      savedAt:      new Date().toISOString(),
    }, '*');
    btn.textContent = '✓ Guardado';
    btn.style.background = '#276749';
    btn.disabled = true;
  }
<\/script>
</body></html>`,Q=window.open("","_blank","width=1060,height=900");Q.document.write($),Q.document.close(),Q.focus()}const aa=[26,26,46],xi=[79,195,194],sd=[74,111,165],hi=[150,150,160];function id({clinicalData:e={},patientName:t="",patientCode:s="",savedAt:i}){const n=new jt({unit:"mm",format:"letter"}),r=n.internal.pageSize.getWidth(),l=n.internal.pageSize.getHeight(),c=15,d=r-c*2;let h=0;const j=()=>{n.addPage(),h=22},m=(g=10)=>{h+g>l-18&&j()};n.setFillColor(...aa),n.rect(0,0,r,28,"F"),n.setFont("helvetica","bold"),n.setFontSize(18),n.setTextColor(...xi),n.text("MUNAY",r/2,11,{align:"center"}),n.setFont("helvetica","normal"),n.setFontSize(7.5),n.setTextColor(220,220,235),n.text("HISTORIA CLINICA INTEGRAL",r/2,17,{align:"center"}),n.text("Centro Medico Quirurgico · La Paz, Bolivia",r/2,22,{align:"center"}),h=35,n.setFillColor(240,242,248),n.rect(c,h-3,d,14,"F"),n.setFont("helvetica","bold"),n.setFontSize(10),n.setTextColor(...aa),n.text(t||"—",c+3,h+3),n.setFont("helvetica","normal"),n.setFontSize(7.5),n.setTextColor(...hi),s&&n.text(s,r-c-3,h+1,{align:"right"}),n.text("Guardado: "+new Date(i||Date.now()).toLocaleString("es-BO"),r-c-3,h+7,{align:"right"}),h+=18,n.setDrawColor(200,200,215),n.setLineWidth(.3),n.line(c,h,r-c,h),h+=7;for(const[g,f]of Object.entries(e))if(!(!Array.isArray(f)||f.length===0)){m(16),n.setFillColor(...aa),n.rect(c,h,d,7,"F"),n.setFont("helvetica","bold"),n.setFontSize(7.5),n.setTextColor(255,255,255),n.text(g.toUpperCase(),c+3,h+4.8),h+=9;for(const x of f)if(m(7),x.tipo==="check"){n.setFont("helvetica","normal"),n.setFontSize(8.5),n.setTextColor(...aa);const y=n.splitTextToSize("[v] "+(x.texto||""),d-5);n.text(y,c+3,h),h+=y.length*4.8+1}else if(x.tipo==="campo"){const y=(x.etiqueta||"")+":";n.setFont("helvetica","bold"),n.setFontSize(7),n.setTextColor(...sd),n.text(y,c+3,h);const S=Math.min(n.getTextWidth(y)+2,50);n.setFont("helvetica","normal"),n.setFontSize(8.5),n.setTextColor(...aa);const u=n.splitTextToSize(String(x.valor||""),d-S-5);n.text(u,c+3+S,h),h+=Math.max(u.length*4.8,5)+1}else if(x.tipo==="narrativa"){const y=n.splitTextToSize(x.texto||"",d-7);n.setDrawColor(...xi),n.setLineWidth(.8),n.line(c+3,h-2,c+3,h+y.length*4.5+1),n.setLineWidth(.2),n.setFont("helvetica","italic"),n.setFontSize(8),n.setTextColor(55,65,81),n.text(y,c+7,h),n.setFont("helvetica","normal"),n.setTextColor(...aa),h+=y.length*4.5+4}else if(x.tipo==="tabla"){const y=x.encabezados||[],S=x.filas||[];if(y.length&&S.length){const u=(d-3)/y.length;n.setFillColor(220,225,235),n.rect(c+2,h-3.5,d-3,5.5,"F"),n.setFont("helvetica","bold"),n.setFontSize(7),n.setTextColor(...aa),y.forEach((N,F)=>n.text(String(N),c+3+F*u,h)),h+=4,n.setFont("helvetica","normal"),n.setFontSize(7.5),S.forEach(N=>{m(6),N.forEach((F,E)=>n.text(String(F??""),c+3+E*u,h)),h+=4.5}),h+=2}}h+=5}const v=n.internal.getNumberOfPages();for(let g=1;g<=v;g++)n.setPage(g),n.setFontSize(6.5),n.setTextColor(...hi),n.setDrawColor(200,200,215),n.setLineWidth(.3),n.line(c,l-12,r-c,l-12),n.text("Centro Medico Quirurgico MUNAY — Documento generado electronicamente",c,l-8),n.text(`Pag. ${g} / ${v}`,r-c,l-8,{align:"right"});return n.output("blob")}function gi(e){if(!e)return null;const t=Se(e);if(!Fe(t))return null;const s=new Date,i=_e(s,t),n=new Date(t.getFullYear()+i,t.getMonth(),t.getDate()),r=ea(s,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Ze(s,l);return{years:i,months:r,days:c}}function fi(e){if(!e)return"-";const t=[];return e.years>0&&t.push(`${e.years}a`),e.months>0&&t.push(`${e.months}m`),(e.days>0||t.length===0)&&t.push(`${e.days}d`),t.join(" ")}const nd=[{value:"all",label:"Todos"},{value:"mny",label:"MNY"},{value:"jwi",label:"JWI"},{value:"ext",label:"EXT"}];function rd(){const{patients:e,setPatients:t,setSurgeries:s,setTherapies:i}=ye(),{isAdmin:n,canEdit:r,user:l}=Ee(),[c,d]=w.useState(""),[h,j]=w.useState("all"),[m,v]=w.useState(!1),[g,f]=w.useState(!1),[x,y]=w.useState(null),[S,u]=w.useState(null),[N,F]=w.useState(!1);w.useEffect(()=>{const A=St(t),k=At(s),R=Dt(i);return()=>{A(),k(),R()}},[]),w.useEffect(()=>{const A=async k=>{var Z;if(((Z=k.data)==null?void 0:Z.type)!=="MUNAY_SAVE_HC")return;const{patientId:R,patientName:H,patientCode:J,clinicalData:U,savedAt:W}=k.data;if(!R||!U)return;const re=Y.loading("Guardando historia clínica…");try{const C=l?{uid:l.uid,name:l.displayName??l.email??"Sistema"}:{uid:"",name:"Sistema"},T=id({clinicalData:U,patientName:H,patientCode:J,savedAt:W}),I=new File([T],`HC_${(H||"paciente").replace(/\s+/g,"_")}_${Date.now()}.pdf`,{type:"application/pdf"}),V=await pc(R,"documents",I),ae=uc(V,"Historia Clínica","documents");await Cs(R,{documentType:"historia_clinica",specialty:"Medicina",status:"completed",clinicalData:U,attachments:[ae],createdBy:C,updatedBy:C,metadata:{printable:!0,signed:!1,locked:!1}}),Y.success("Historia clínica guardada y PDF subido",{id:re})}catch(C){console.error("[HC save]",C),Y.error("Error al guardar: "+C.message,{id:re})}};return window.addEventListener("message",A),()=>window.removeEventListener("message",A)},[l]);const E=w.useMemo(()=>{let A=e;if(h!=="all"&&(A=A.filter(k=>oe(k.patientType).label===h.toUpperCase())),c){const k=c.toLowerCase().replace(/^mny\s*-?\s*/i,""),R=c.toLowerCase();A=A.filter(H=>{var J,U,W,re,Z,C;return((J=H.fullName)==null?void 0:J.toLowerCase().includes(R))||((U=H.diagnosis)==null?void 0:U.toLowerCase().includes(R))||((W=H.guardian)==null?void 0:W.toLowerCase().includes(R))||((re=H.phone)==null?void 0:re.includes(R))||((Z=H.guardianPhone)==null?void 0:Z.includes(R))||((C=H.patientCode)==null?void 0:C.toLowerCase().includes(k))||`mny-${H.patientCode}`.toLowerCase().includes(R)})}return A},[e,h,c]),$=()=>{y(null),v(!0)},Q=A=>{y(A),v(!0)},q=A=>{y(A),f(!0)},L=async A=>{F(!0);try{x!=null&&x.id?(await ko(x.id,A),Y.success("Paciente actualizado")):(await Vi(A),Y.success("Paciente registrado")),v(!1)}catch(k){Y.error("Error al guardar: "+k.message)}finally{F(!1)}},K=async()=>{if(S)try{await Co(S.id),Y.success("Paciente eliminado")}catch(A){Y.error("Error: "+A.message)}finally{u(null)}};return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"card py-3",children:a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-start sm:items-center",children:[a.jsx("div",{className:"flex-1 w-full sm:w-auto",children:a.jsx(Ui,{value:c,onChange:d,placeholder:"Buscar por nombre, código MNY-, diagnóstico, teléfono..."})}),a.jsx("div",{className:"flex gap-2 flex-wrap",children:nd.map(A=>a.jsx("button",{onClick:()=>j(A.value),className:`btn btn-sm ${h===A.value?"btn-primary":"btn-secondary"}`,children:A.label},A.value))}),a.jsxs("div",{className:"flex gap-2 ml-auto",children:[a.jsx("button",{onClick:()=>Yc(E),className:"btn-secondary btn btn-sm",title:"Exportar CSV",children:a.jsx(hs,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>Xc(E),className:"btn-secondary btn btn-sm",title:"Exportar PDF",children:a.jsx(Je,{className:"w-4 h-4"})}),r&&a.jsxs("button",{onClick:$,className:"btn-primary btn btn-sm",children:[a.jsx(Kt,{className:"w-4 h-4"}),"Nuevo paciente"]})]})]})}),a.jsxs("p",{className:"text-sm text-gray-500",children:[E.length," paciente",E.length!==1?"s":""]}),E.length===0?a.jsxs("div",{className:"card flex flex-col items-center py-12 text-gray-400",children:[a.jsx(Kt,{className:"w-10 h-10 mb-2 opacity-40"}),a.jsx("p",{className:"text-sm",children:c?"Sin resultados para la búsqueda.":"No hay pacientes registrados."}),r&&!c&&a.jsx("button",{onClick:$,className:"btn-primary btn mt-4",children:"Registrar primer paciente"})]}):a.jsxs("div",{className:"card p-0 overflow-hidden",children:[a.jsx("div",{className:"hidden md:block overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:a.jsx("tr",{children:["Código","Nombre","Diagnóstico","Edad","Responsable","Tel. Resp.","Tipo",""].map(A=>a.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:A},A))})}),a.jsx("tbody",{className:"divide-y divide-gray-50",children:E.map(A=>{const k=gi(A.birthDate);return a.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[a.jsx("td",{className:"px-4 py-3 font-mono text-xs font-semibold whitespace-nowrap",children:A.patientCode?a.jsxs("span",{className:"px-1.5 py-0.5 rounded text-white text-[11px]",style:{backgroundColor:oe(A.patientType).bg},children:[oe(A.patientType).label,"-",A.patientCode]}):"—"}),a.jsx("td",{className:"px-4 py-3 font-medium text-gray-800",children:A.fullName}),a.jsx("td",{className:"px-4 py-3 text-gray-600 max-w-[200px] truncate",title:A.diagnosis,children:A.diagnosis}),a.jsx("td",{className:"px-4 py-3 text-gray-600 whitespace-nowrap",children:fi(k)}),a.jsx("td",{className:"px-4 py-3 text-gray-600",children:A.guardian||"-"}),a.jsx("td",{className:"px-4 py-3 text-gray-600",children:A.guardianPhone||"-"}),a.jsx("td",{className:"px-4 py-3",children:a.jsx(Ye,{variant:A.patientType})}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex gap-1 justify-end",children:[a.jsx("button",{onClick:()=>q(A),className:"btn-ghost btn btn-sm p-1.5",title:"Ver historial",children:a.jsx(ut,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>{pi(A),ft({patientId:A.id,documentType:"ficha_social",specialty:"Social",clinicalData:{nombre:A.name,ci:A.idNumber,responsable:A.guardian,ciResponsable:A.guardianIdNumber,telefono:A.guardianPhone,direccion:A.address,diagnostico:A.diagnosis},user:l})},className:"btn-ghost btn btn-sm p-1.5 text-teal-600 hover:bg-teal-50",title:"Ficha social",children:a.jsx(Ms,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>ui(A),className:"btn-ghost btn btn-sm p-1.5 text-amber-600 hover:bg-amber-50",title:"Consentimiento fotos",children:a.jsx(Ps,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>mi(A),className:"btn-ghost btn btn-sm p-1.5 text-indigo-600 hover:bg-indigo-50",title:"Historia clínica integral",children:a.jsx(pt,{className:"w-4 h-4"})}),r&&a.jsx("button",{onClick:()=>Q(A),className:"btn-ghost btn btn-sm p-1.5",title:"Editar",children:a.jsx(ja,{className:"w-4 h-4"})}),n&&a.jsx("button",{onClick:()=>u(A),className:"btn-ghost btn btn-sm p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50",title:"Eliminar",children:a.jsx(mt,{className:"w-4 h-4"})})]})})]},A.id)})})]})}),a.jsx("ul",{className:"md:hidden divide-y divide-gray-100",children:E.map(A=>{const k=gi(A.birthDate);return a.jsxs("li",{className:"p-4",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[A.patientCode&&a.jsxs("p",{className:"text-xs font-mono font-bold mb-0.5",style:{color:oe(A.patientType).bg},children:[oe(A.patientType).label,"-",A.patientCode]}),a.jsx("p",{className:"font-medium text-gray-800 truncate",children:A.fullName}),a.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:A.diagnosis}),k&&a.jsx("p",{className:"text-xs text-gray-400",children:fi(k)}),A.guardian&&a.jsxs("p",{className:"text-xs text-gray-400",children:["Resp: ",A.guardian,A.guardianPhone?` · ${A.guardianPhone}`:""]})]}),a.jsx(Ye,{variant:A.patientType})]}),a.jsxs("div",{className:"flex gap-2 mt-3",children:[a.jsxs("button",{onClick:()=>q(A),className:"btn-secondary btn btn-sm flex-1 justify-center",children:[a.jsx(ut,{className:"w-3.5 h-3.5"})," Historial"]}),a.jsx("button",{onClick:()=>{pi(A),ft({patientId:A.id,documentType:"ficha_social",specialty:"Social",clinicalData:{nombre:A.name,ci:A.idNumber,responsable:A.guardian,ciResponsable:A.guardianIdNumber,telefono:A.guardianPhone,direccion:A.address,diagnostico:A.diagnosis},user:l})},className:"btn btn-sm px-2.5 text-teal-600 border border-teal-200 hover:bg-teal-50",title:"Ficha social",children:a.jsx(Ms,{className:"w-3.5 h-3.5"})}),a.jsx("button",{onClick:()=>ui(A),className:"btn btn-sm px-2.5 text-amber-600 border border-amber-200 hover:bg-amber-50",title:"Consentimiento fotos",children:a.jsx(Ps,{className:"w-3.5 h-3.5"})}),a.jsx("button",{onClick:()=>mi(A),className:"btn btn-sm px-2.5 text-indigo-600 border border-indigo-200 hover:bg-indigo-50",title:"Historia clínica",children:a.jsx(pt,{className:"w-3.5 h-3.5"})}),r&&a.jsx("button",{onClick:()=>Q(A),className:"btn-secondary btn btn-sm px-2.5",children:a.jsx(ja,{className:"w-3.5 h-3.5"})}),n&&a.jsx("button",{onClick:()=>u(A),className:"btn btn-sm px-2.5 text-red-500 border border-red-200 hover:bg-red-50",children:a.jsx(mt,{className:"w-3.5 h-3.5"})})]})]},A.id)})})]}),a.jsx(Na,{open:m,onClose:()=>v(!1),title:x?"Editar paciente":"Nuevo paciente",size:"lg",children:a.jsx(tn,{initial:x,onSubmit:L,onCancel:()=>v(!1),busy:N})}),a.jsx(Na,{open:g,onClose:()=>f(!1),title:x?`Historial — ${x.fullName}`:"Historial",size:"lg",children:x&&a.jsx(Hc,{patient:x})}),a.jsx(Ra,{open:!!S,title:"Eliminar paciente",message:`¿Seguro que deseas eliminar a ${S==null?void 0:S.fullName}? Esta acción no se puede deshacer.`,onConfirm:K,onCancel:()=>u(null)})]})}var hn={code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",year:"Año",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},buttonHints:{prev:"$0 antes",next:"$0 siguiente",today(e){return e==="Día"?"Hoy":(e==="Semana"?"Esta":"Este")+" "+e.toLocaleLowerCase()}},viewHint(e){return"Vista "+(e==="Semana"?"de la":"del")+" "+e.toLocaleLowerCase()},weekText:"Sm",weekTextLong:"Semana",allDayText:"Todo el día",moreLinkText:"más",moreLinkHint(e){return`Mostrar ${e} eventos más`},noEventsText:"No hay eventos para mostrar",navLinkHint:"Ir al $0",closeHint:"Cerrar",timeHint:"La hora",eventHint:"Evento"};function ld(e,{date:t,excludeId:s=null}){return e.filter(i=>i.id===s||i.status==="cancelado"?!1:i.date===t)}function bi(e){if(!e)return null;const t=Se(e);if(!Fe(t))return null;const s=new Date,i=_e(s,t),n=new Date(t.getFullYear()+i,t.getMonth(),t.getDate()),r=ea(s,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Ze(s,l);return{years:i,months:r,days:c}}function od(e){if(!e)return null;const t=[];return e.years>0&&t.push(`${e.years}a`),e.months>0&&t.push(`${e.months}m`),(e.days>0||t.length===0)&&t.push(`${e.days}d`),t.join(" ")}const cd=["programado","confirmado","realizado","cancelado"],ct=["Plastia del Complejo Naso Labial (PCNL)","Rinoplastia","Colgajo Vomeriano + Adherencia Labial","Palatoplastia","Queiloplastia","Gingivoperioplastia (GPP)","Cierre de Fistula"];function vi(e){return e?ct.includes(e)?e:"__otro__":""}function dd({initial:e,onSubmit:t,onCancel:s,busy:i}){const{patients:n,surgeries:r}=ye(),[l,c]=w.useState((e==null?void 0:e.patientName)??""),[d,h]=w.useState(!1),[j,m]=w.useState(e!=null&&e.patientId?n.find(C=>C.id===e.patientId):null),v=w.useRef(null),[g,f]=w.useState(vi(e==null?void 0:e.surgeryType)),[x,y]=w.useState(e!=null&&e.surgeryType&&!ct.includes(e.surgeryType)?e.surgeryType:""),[S,u]=w.useState(!1);w.useEffect(()=>{const C=T=>{v.current&&!v.current.contains(T.target)&&h(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);const N=w.useMemo(()=>{const C=l.toLowerCase().trim(),T=C.replace(/^mny\s*-?\s*/i,"");return C?n.filter(I=>{var V,ae;return((V=I.fullName)==null?void 0:V.toLowerCase().includes(C))||((ae=I.diagnosis)==null?void 0:ae.toLowerCase().includes(C))||I.patientCode&&I.patientCode.toLowerCase().includes(T)||I.patientCode&&`mny-${I.patientCode}`.toLowerCase().includes(C)}):n},[n,l]),{register:F,handleSubmit:E,watch:$,reset:Q,setValue:q,formState:{errors:L}}=Et({defaultValues:e??{patientId:"",date:"",startTime:"",admissionTime:"",fastingTime:"",peso:"",talla:"",surgeon:"",anesthesiologist:"",scrubNurse:"",status:"programado",notes:"",quotation:"",paymentComplete:!1,amountPaid:"",paymentDate:"",partialPaymentDate:"",socialAid:!1,socialAidAmount:"",adminNotes:""}});w.useEffect(()=>{e&&(Q(e),c(e.patientName??""),m(n.find(C=>C.id===e.patientId)??null),f(vi(e.surgeryType)),y(e.surgeryType&&!ct.includes(e.surgeryType)?e.surgeryType:""))},[e]);const K=$("date"),A=$("patientId"),k=$("paymentComplete"),R=$("status"),H=$("amountPaid");w.useEffect(()=>{if(A&&!j){const C=n.find(T=>T.id===A);C&&(m(C),c(C.fullName))}},[A,n]),w.useEffect(()=>{k&&R==="programado"?q("status","confirmado"):!k&&R==="confirmado"&&q("status","programado")},[k]);const J=K?ld(r,{date:K,excludeId:e==null?void 0:e.id}):[],U=C=>{m(C),c(C.fullName),q("patientId",C.id,{shouldValidate:!0}),h(!1)},W=()=>{m(null),c(""),q("patientId","")},re=C=>{const T=g==="__otro__"?x.trim():g;if(!T){u(!0);return}u(!1);const I=n.find(V=>V.id===C.patientId);t({...C,surgeryType:T,patientName:(I==null?void 0:I.fullName)??"",patientType:(I==null?void 0:I.patientType)??"ext"})},Z=bi(j==null?void 0:j.birthDate);return a.jsxs("form",{onSubmit:E(re),className:"space-y-5",children:[J.length>0&&a.jsxs("div",{className:"flex gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-3 text-sm",children:[a.jsx(ki,{className:"w-5 h-5 shrink-0 mt-0.5 text-amber-500"}),a.jsxs("div",{children:[a.jsxs("p",{className:"font-semibold",children:[J.length," cirugía",J.length>1?"s":""," ya programada",J.length>1?"s":""," para este día"]}),J.map(C=>a.jsxs("p",{className:"text-xs mt-0.5 text-amber-700",children:["· ",C.patientName," — ",C.startTime," (",C.surgeryType,")"]},C.id))]})]}),a.jsxs("div",{ref:v,className:"relative",children:[a.jsx("input",{type:"hidden",...F("patientId",{required:"Selecciona un paciente"})}),a.jsx("label",{className:"label",children:"Paciente *"}),a.jsxs("div",{className:"relative",children:[a.jsx(yt,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),a.jsx("input",{type:"text",value:l,autoComplete:"off",onChange:C=>{c(C.target.value),h(!0),C.target.value||W()},onFocus:()=>h(!0),placeholder:"Buscar por nombre, código MNY- o diagnóstico...",className:`input pl-9 pr-8 ${L.patientId?"input-error":""}`}),l&&a.jsx("button",{type:"button",onClick:W,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:a.jsx(Ne,{className:"w-4 h-4"})})]}),d&&N.length>0&&a.jsx("div",{className:"absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-card-hover max-h-52 overflow-y-auto",children:N.map(C=>{const T=bi(C.birthDate),I=oe(C.patientType);return a.jsxs("button",{type:"button",onClick:()=>U(C),className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-hm-secondary-100 text-left transition",children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:I.bg}}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("p",{className:"text-sm font-semibold text-hm-primary truncate",children:C.fullName}),C.patientCode&&a.jsxs("span",{className:"text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded shrink-0",style:{backgroundColor:I.bg},children:[I.label,"-",C.patientCode]})]}),a.jsxs("p",{className:"text-xs text-gray-500 truncate",children:[C.diagnosis,T!==null?` · ${T} años`:""]})]}),a.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0",style:{backgroundColor:I.lightBg,color:I.textColor},children:I.label})]},C.id)})}),L.patientId&&a.jsx("p",{className:"error-msg",children:L.patientId.message}),j&&a.jsxs("div",{className:"mt-2 flex items-start gap-3 p-3 rounded-xl border",style:{backgroundColor:"rgba(9,214,212,0.06)",borderColor:"rgba(9,214,212,0.3)"},children:[a.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center shrink-0",style:{backgroundColor:oe(j.patientType).bg},children:a.jsx(qa,{className:"w-4 h-4 text-white"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[a.jsx("p",{className:"text-sm font-bold text-hm-primary",children:j.fullName}),j.patientCode&&a.jsxs("span",{className:"text-[10px] font-mono font-bold px-1.5 py-0.5 rounded",style:{backgroundColor:oe(j.patientType).bg,color:"#fff"},children:[oe(j.patientType).label,"-",j.patientCode]})]}),a.jsxs("p",{className:"text-xs text-gray-600 mt-0.5",children:[j.diagnosis,Z&&a.jsxs("span",{className:"ml-2 font-semibold",style:{color:"#09D6D4"},children:["· ",od(Z)]})]}),j.guardian&&a.jsxs("p",{className:"text-xs text-gray-400 mt-0.5",children:["Resp: ",j.guardian,j.guardianPhone?` — ${j.guardianPhone}`:""]})]})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Tipo de cirugía *"}),a.jsxs("select",{className:`input ${S?"input-error":""}`,value:g,onChange:C=>{f(C.target.value),u(!1),C.target.value!=="__otro__"&&y("")},children:[a.jsx("option",{value:"",children:"— Seleccionar tipo —"}),ct.map(C=>a.jsx("option",{value:C,children:C},C)),a.jsx("option",{value:"__otro__",children:"Otro (especificar)"})]}),g==="__otro__"&&a.jsx("input",{className:`input mt-2 ${S?"input-error":""}`,placeholder:"Especificar tipo de cirugía...",value:x,onChange:C=>{y(C.target.value),u(!1)}}),S&&a.jsx("p",{className:"error-msg",children:"Selecciona o especifica el tipo de cirugía"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Fecha *"}),a.jsx("input",{type:"date",className:`input ${L.date?"input-error":""}`,...F("date",{required:"Requerido"})}),L.date&&a.jsx("p",{className:"error-msg",children:L.date.message})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Hora de inicio *"}),a.jsx("input",{type:"time",className:`input ${L.startTime?"input-error":""}`,...F("startTime",{required:"Requerido"})}),L.startTime&&a.jsx("p",{className:"error-msg",children:L.startTime.message})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Hora de internación"}),a.jsx("input",{type:"time",className:"input",...F("admissionTime")})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Peso (kg)"}),a.jsx("input",{type:"number",step:"0.1",min:"0",className:"input",placeholder:"ej: 23.5",...F("peso")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Talla (cm)"}),a.jsx("input",{type:"number",step:"0.5",min:"0",className:"input",placeholder:"ej: 112",...F("talla")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Hora de ayuno"}),a.jsx("input",{type:"time",className:"input",...F("fastingTime")})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Cirujano"}),a.jsx("input",{className:"input",placeholder:"Dr. Nombre",...F("surgeon")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Anestesiólogo"}),a.jsx("input",{className:"input",placeholder:"Dr. Nombre",...F("anesthesiologist")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Instrumentadora"}),a.jsx("input",{className:"input",placeholder:"Nombre",...F("scrubNurse")})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Estado"}),a.jsx("div",{className:"flex gap-4 flex-wrap",children:cd.map(C=>a.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-sm",children:[a.jsx("input",{type:"radio",value:C,...F("status"),className:"accent-hm-primary"}),a.jsx("span",{className:"capitalize font-medium text-gray-700",children:C})]},C))})]}),a.jsxs("div",{className:"border border-hm-secondary-200 rounded-xl p-4 space-y-3",style:{backgroundColor:"#f8fafc"},children:[a.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Gestión Financiera"}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Cotización total ($)"}),a.jsx("input",{type:"number",min:"0",className:"input bg-white",...F("quotation")})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Monto pagado ($)"}),a.jsx("input",{type:"number",min:"0",className:"input bg-white",...F("amountPaid")})]})]}),a.jsxs("div",{className:"flex gap-6 pt-1",children:[a.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700",children:[a.jsx("input",{type:"checkbox",className:"accent-hm-primary w-4 h-4",...F("paymentComplete")}),"Pago completo"]}),a.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700",children:[a.jsx("input",{type:"checkbox",className:"accent-hm-primary w-4 h-4",...F("socialAid")}),"Ayuda social"]})]}),k&&a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Fecha de pago completo"}),a.jsx("input",{type:"date",className:"input bg-white",...F("paymentDate")})]}),Number(H)>0&&!k&&a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Fecha del último pago parcial"}),a.jsx("input",{type:"date",className:"input bg-white",...F("partialPaymentDate")})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Monto ayuda social ($)"}),a.jsx("input",{type:"number",min:"0",className:"input bg-white",...F("socialAidAmount")})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Observaciones financieras"}),a.jsx("input",{className:"input bg-white",...F("adminNotes")})]})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Notas clínicas"}),a.jsx("textarea",{rows:2,className:"input resize-none",...F("notes")})]}),a.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[a.jsx("button",{type:"button",onClick:s,className:"btn-secondary btn",children:"Cancelar"}),a.jsx("button",{type:"submit",disabled:i,className:"btn-primary btn",children:i?a.jsx(Ge,{className:"w-4 h-4 animate-spin"}):e!=null&&e.id?"Guardar cambios":"Programar cirugía"})]})]})}async function pd(e){try{const s=await(await fetch(e)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(s)})}catch{return null}}async function ud(e,t){const s=await pd(Le),i=oe(t==null?void 0:t.patientType),n=t!=null&&t.patientCode?`${i.label}-${t.patientCode}`:"",r=(t==null?void 0:t.fullName)||(e==null?void 0:e.patientName)||"",l=(t==null?void 0:t.guardian)||"",c=(t==null?void 0:t.guardianPhone)||"",d=(t==null?void 0:t.address)||"",h=((t==null?void 0:t.diagnosis)||"").toUpperCase(),j=(t==null?void 0:t.diagnosis)||"",m=(t==null?void 0:t.sex)==="masculino"?"M":(t==null?void 0:t.sex)==="femenino"?"F":"";let v="";if(t!=null&&t.birthDate){const I=Se(t.birthDate);if(Fe(I)){const V=new Date,ae=_e(V,I),ce=new Date(I.getFullYear()+ae,I.getMonth(),I.getDate()),$e=ea(V,ce),je=new Date(ce.getFullYear(),ce.getMonth()+$e,ce.getDate()),Me=Ze(V,je),Pe=[];ae>0&&Pe.push(`${ae}a`),$e>0&&Pe.push(`${$e}m`),(Me>0||!Pe.length)&&Pe.push(`${Me}d`),v=Pe.join(" ")}}const g=e!=null&&e.date?X(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"",f=(e==null?void 0:e.surgeryType)||"",x=(e==null?void 0:e.surgeon)||"";e!=null&&e.fastingTime||e!=null&&e.fastingHours&&`${e.fastingHours}`;const y=e!=null&&e.peso?String(e.peso):"",S=e!=null&&e.talla?String(e.talla):"",u=I=>I?" checked":"",N=f.toLowerCase(),F=h.includes("FLAP"),E=F||h.includes("BILATERAL")||h.includes("FLB"),$=!E&&(h.includes("FL")||h.includes("LABIO")),Q=h.includes("FP")||h.includes("PALAT"),q=N.includes("queil")&&!N.includes("secund"),L=N.includes("queil")&&N.includes("secund"),K=N.includes("palat"),A=f&&!q&&!L&&!K?f:"";let k=-1;if(t!=null&&t.birthDate){const I=Se(t.birthDate);Fe(I)&&(k=_e(new Date,I))}const R=k<0||k<2,H=k<0||k>=2&&k<=11,J=k<0||k>=12&&k<=18,U=new Date,W=U.getDate().toString().padStart(2,"0")+"/"+(U.getMonth()+1).toString().padStart(2,"0")+"/"+U.getFullYear(),re=s?`<div class="hdr-logo"><img src="${s}" alt="MUNAY"/></div>`:'<div class="hdr-logo"><span class="hdr-logo-text">MUNAY</span></div>',Z=(I,V)=>`
    <div class="page-hdr">
      ${re}
      <div class="hdr-center">
        <div class="inst-name">MUNAY</div>
        <div class="inst-sub">Centro Médico Quirúrgico · Centro del Niño con Fisura · La Paz, Bolivia</div>
        <div class="doc-title">Historia Clínica Quirúrgica — Fisura Labio Alveolo Palatina</div>
      </div>
      <div class="hdr-right">
        ${V?`<div class="patient-name">${V}</div>`:""}
        <div class="hc-code">${n||"HC-QX ______"}</div>
        <div>${g||W} · Hoja ${I}/2</div>
      </div>
    </div>`,C=`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>HC-QX · MUNAY · ${r}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
:root {
  --navy: #163A5F;
  --navy-mid: #2F5D8A;
  --navy-soft: #EBF2FA;
  --rule: #CBD5E0;
  --rule-light: #E2E8F0;
  --bg: #EDF2F7;
  --white: #FFFFFF;
  --ink: #1A202C;
  --ink-2: #4A5568;
  --ink-3: #718096;
  --amber: #B7791F;
  --amber-bg: #FEFCE8;
  --danger: #C53030;
  --success: #276749;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: var(--bg); font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; color: var(--ink); font-size: 8.5pt; line-height: 1.35; }

/* ── Document wrapper ── */
.doc { width: 215.9mm; min-height: 279.4mm; margin: 12px auto; padding: 0 9mm 7mm; background: var(--white); box-shadow: 0 2px 16px rgba(0,0,0,.10); }

/* ── Page 2 separator ── */
.p2 { margin-top: 24px; padding-top: 14px; border-top: 3px dashed var(--rule-light); }

/* ── Toolbar ── */
.toolbar { position: sticky; top: 0; z-index: 100; background: var(--white); border-bottom: 2px solid var(--navy); padding: 7px 16px; display: flex; align-items: center; gap: 10px; box-shadow: 0 2px 8px rgba(22,58,95,.10); print-color-adjust: exact; }
.toolbar-brand { font-size: 9.5pt; font-weight: 700; color: var(--navy); letter-spacing: .3px; flex: 1; }
.toolbar-brand span { font-weight: 400; color: var(--ink-2); font-size: 8.5pt; }
.toolbar button { border: none; padding: 5px 13px; font-family: inherit; font-size: 8.5pt; font-weight: 600; cursor: pointer; border-radius: 5px; transition: opacity .15s; }
.btn-print { background: var(--navy); color: #fff; }
.btn-clear { background: transparent; color: var(--ink-2); border: 1px solid var(--rule) !important; }

/* ── Page Header ── */
.page-hdr { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px; padding: 8px 12px; margin-bottom: 6px; border-radius: 7px; background: linear-gradient(135deg, #0C1F35 0%, #163A5F 35%, #2F5D8A 70%, #3A7BBF 100%); print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.hdr-logo { background: rgba(255,255,255,0.12); border-radius: 5px; padding: 3px; }
.hdr-logo img { height: 40px; width: auto; display: block; border-radius: 3px; }
.hdr-logo-text { font-size: 14pt; font-weight: 800; color: #fff; letter-spacing: 3px; }
.hdr-center { text-align: center; }
.hdr-center .inst-name { font-size: 13pt; font-weight: 800; color: #fff; letter-spacing: 2px; line-height: 1; }
.hdr-center .inst-sub  { font-size: 7.5pt; color: rgba(255,255,255,0.80); margin-top: 2px; }
.hdr-center .doc-title { font-size: 8pt; font-weight: 600; color: rgba(255,255,255,0.92); margin-top: 3px; letter-spacing: .5px; text-transform: uppercase; }
.hdr-right { text-align: right; font-size: 7.5pt; color: rgba(255,255,255,0.85); line-height: 1.5; }
.hdr-right .hc-code { font-size: 10pt; font-weight: 700; color: #fff; font-family: 'Courier New', monospace; }
.hdr-right .patient-name { font-size: 8.5pt; font-weight: 600; color: #fff; }

/* ── Legend badges ── */
.badge { display: inline-block; font-size: 5.5pt; font-weight: 700; padding: 1px 4px; border-radius: 3px; vertical-align: middle; letter-spacing: .3px; }
.badge-obl  { background: #C53030; color: #fff; }
.badge-edad { background: #B7791F; color: #fff; }
.badge-crit { background: #111; color: #fff; }

/* ── Section card ── */
.section-card { margin: 4px 0; border: 1px solid var(--rule-light); border-radius: 6px; overflow: hidden; }
.section-card + .section-card { margin-top: 4px; }
h3.section { background: var(--navy-soft); color: var(--navy); font-size: 8pt; font-weight: 700; letter-spacing: .4px; text-transform: uppercase; padding: 4px 10px 4px 13px; border-left: 4px solid var(--navy); display: flex; align-items: center; gap: 6px; }
h3.section.crit-hdr { background: #FFF5F5; color: var(--danger); border-left-color: var(--danger); }
.section-body { padding: 5px 10px; }

/* Sub-headings */
h4.sub { font-size: 7.5pt; font-weight: 600; color: var(--navy-mid); text-transform: uppercase; letter-spacing: .3px; margin: 3px 0 2px; border-bottom: 1px solid var(--rule-light); padding-bottom: 1px; }

/* ── Field row ── */
.field-row { display: flex; align-items: baseline; gap: 4px; }
.lbl { font-size: 6.8pt; font-weight: 600; color: var(--ink-2); text-transform: uppercase; letter-spacing: .3px; white-space: nowrap; }
.val { border: none; border-bottom: 1px solid var(--rule); min-width: 60px; min-height: 13px; padding: 0px 3px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); outline: none; flex: 1; }
.val.wide { min-width: 110px; }
.val.xwide { min-width: 180px; }
.val.full  { min-width: 100%; width: 100%; }
.val.sm    { min-width: 38px; }
[contenteditable="true"] { outline: none; cursor: text; }
[contenteditable="true"]:focus { background: #EBF8FF; }

/* ── Grid layouts ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; }
.three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px 10px; }
.three-col-asym { display: grid; grid-template-columns: 2fr 1.1fr 1.5fr; gap: 4px 10px; }
.fg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px 8px; }
.fg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 8px; }
.fg-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px 8px; }
.fg-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 3px 8px; }

/* ── Checkboxes ── */
.checklist { display: grid; gap: 1px 8px; margin: 2px 0; }
.cl-2 { grid-template-columns: repeat(2, 1fr); }
.cl-3 { grid-template-columns: repeat(3, 1fr); }
.cl-4 { grid-template-columns: repeat(4, 1fr); }
.cl-inline { display: flex; flex-wrap: wrap; gap: 2px 10px; align-items: center; }
.chk { display: flex; align-items: center; gap: 5px; font-size: 7.8pt; line-height: 1.25; cursor: pointer; user-select: none; padding: 1px 0; }
.chk .box { display: inline-flex; align-items: center; justify-content: center; width: 10px; height: 10px; border: 1.5px solid var(--rule); border-radius: 2px; flex-shrink: 0; background: var(--white); font-size: 0; transition: all .1s; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.chk.checked .box { background: var(--navy); border-color: var(--navy); font-size: 7pt; color: #fff; font-weight: 900; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.chk.checked .box::after { content: "✓"; color: #fff; font-size: 7pt; line-height: 1; }

/* Other-line */
.other-line { display: inline-block; border-bottom: 1px solid var(--rule); min-width: 50px; padding: 0 2px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); min-height: 10px; }

/* ── Narrative ── */
.narrative { border: 1px solid var(--rule-light); border-radius: 4px; background: #FAFBFC; padding: 3px 6px; min-height: 14px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 500; line-height: 1.35; color: var(--navy); margin: 2px 0; }
.narrative.tall  { min-height: 18px; }
.narrative.xtall { min-height: 55px; }

/* ── Metrics strip ── */
.metrics-strip { display: flex; flex-wrap: wrap; gap: 3px 12px; background: var(--navy-soft); border: 1px solid var(--rule-light); border-radius: 5px; padding: 3px 8px; margin: 2px 0; }
.metric { display: flex; align-items: baseline; gap: 3px; }
.metric .lbl { font-size: 7pt; font-weight: 700; color: var(--navy); }
.metric .val { border-bottom: 1px solid var(--navy-mid); min-width: 40px; }
.metric .unit { font-size: 6.5pt; color: var(--ink-3); }

/* ── Number input ── */
.val-input { border: none; border-bottom: 1px solid var(--rule); background: transparent; width: 50px; padding: 0 3px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); outline: none; }
.val-input:focus { background: #EBF8FF; }
.val-input.imc-auto { background: var(--navy-soft); font-weight: 700; color: var(--navy); width: 55px; }
.val-input::-webkit-outer-spin-button, .val-input::-webkit-inner-spin-button { -webkit-appearance: none; }
.val-input[type="number"] { -moz-appearance: textfield; }

/* ── Add row button ── */
.add-row-btn { background: var(--navy-soft); color: var(--navy); border: 1px solid var(--rule); padding: 1px 7px; font-size: 6.8pt; font-weight: 600; cursor: pointer; border-radius: 3px; margin-left: 8px; font-family: inherit; }

/* ── Tables ── */
table.clinical { width: 100%; border-collapse: collapse; margin: 4px 0; font-size: 7.5pt; border-radius: 5px; overflow: hidden; }
table.clinical thead tr { background: var(--navy-soft); }
table.clinical th { padding: 4px 7px; text-align: left; font-size: 7pt; font-weight: 700; color: var(--navy); border: 1px solid var(--rule-light); }
table.clinical td { border: 1px solid var(--rule-light); padding: 2px 6px; vertical-align: top; }
table.clinical td.fillable { min-height: 14px; height: 14px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); }

table.edu { width: 100%; border-collapse: collapse; font-size: 7.8pt; margin: 4px 0; }
table.edu thead tr { background: var(--navy-soft); }
table.edu th { padding: 4px 8px; text-align: center; font-size: 7pt; font-weight: 700; color: var(--navy); border: 1px solid var(--rule-light); }
table.edu td { border: 1px solid var(--rule-light); padding: 3px 8px; }
table.edu td.tema { font-weight: 500; }
table.edu td.cell-chk { text-align: center; width: 13%; }
table.edu td.cell-chk .chk { justify-content: center; }

/* ── Age blocks ── */
.age-block { border-left: 3px solid var(--amber); background: var(--amber-bg); padding: 2px 8px; margin: 2px 0; border-radius: 0 4px 4px 0; display: flex; flex-wrap: wrap; gap: 1px 8px; align-items: center; }
.age-label { display: inline-block; background: var(--amber); color: #fff; font-size: 6.5pt; font-weight: 700; padding: 1px 6px; border-radius: 3px; margin-right: 6px; text-transform: uppercase; letter-spacing: .3px; print-color-adjust: exact; -webkit-print-color-adjust: exact; flex-shrink: 0; }

/* ── Critical box ── */
.crit-box { border: 1.5px solid var(--danger); background: #FFF5F5; padding: 5px 8px; border-radius: 4px; margin: 3px 0; }

/* ── Kernahan ── */
.kernahan-container { display: grid; grid-template-columns: 1fr auto 1fr; gap: 6px; align-items: center; padding: 3px; background: var(--navy-soft); border: 1px solid var(--rule-light); border-radius: 5px; margin: 2px 0; }
.kernahan-legend { font-size: 6.3pt; line-height: 1.3; font-style: italic; color: var(--ink-2); }
.kernahan-legend.left { text-align: right; }
.kernahan-legend.right { text-align: left; }
.kernahan-legend strong { font-style: normal; color: var(--navy); }
.kernahan-svg { cursor: pointer; }
.kern-zone { fill: #fff; stroke: var(--ink); stroke-width: 1; transition: fill .15s; }
.kern-zone:hover { fill: #ffe9a8; }
.kern-zone.active { fill: var(--navy); print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.kern-num { font-size: 6pt; font-family: 'Inter', 'Helvetica Neue', sans-serif; fill: var(--ink); pointer-events: none; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
.kernahan-extra { grid-column: 1/-1; text-align: center; font-size: 6.3pt; font-style: italic; padding-top: 2px; border-top: 1px dashed var(--rule-light); margin-top: 2px; color: var(--ink-2); }
.kernahan-extra strong { font-style: normal; color: var(--navy); }

/* ── Signature ── */
.firma-section { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px; }
.firma-box { border: 1px solid var(--rule-light); border-radius: 5px; padding: 6px 10px 5px; text-align: center; background: #FAFBFC; }
.firma-line { border-bottom: 1px solid var(--ink); min-height: 30px; margin: 0 auto 3px; width: 75%; }
.firma-label { font-size: 7pt; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; color: var(--ink-3); }

/* ── Page footer ── */
.footer { margin-top: 6px; padding-top: 4px; border-top: 1px solid var(--rule-light); font-size: 6.5pt; color: var(--ink-3); display: flex; justify-content: space-between; font-style: italic; }

/* ── Print ── */
@page { size: letter; margin: 8mm 9mm 7mm; }
@media print {
  html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
  .toolbar { display: none !important; }
  .doc { box-shadow: none !important; margin: 0 !important; padding: 0 !important; width: 100% !important; min-height: 0 !important; }
  .p2 { page-break-before: always !important; break-before: page !important; border-top: none !important; margin-top: 0 !important; padding-top: 0 !important; }
  .section-card { break-inside: avoid; page-break-inside: avoid; }
  .narrative.xtall { min-height: 18px !important; }
  .add-row-btn { display: none !important; }
  .page-hdr { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  .kern-zone.active { fill: var(--navy) !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  [contenteditable="true"]:focus { background: transparent !important; }
}
</style></head><body>

<div class="toolbar">
  <div class="toolbar-brand">MUNAY <span>· Historia Clínica Quirúrgica</span></div>
  <button class="btn-print" onclick="window.print()">🖨 Imprimir / PDF</button>
  <button class="btn-clear" onclick="resetForm()">✕ Limpiar</button>
</div>

<div class="doc">
  ${Z("1","")}

  <!-- ── IDENTIFICACIÓN ── -->
  <div class="section-card">
    <h3 class="section">Identificación <span class="badge badge-obl">OBL</span>
      <span style="font-size:6pt;font-weight:400;text-transform:none;letter-spacing:0;color:var(--ink-3);margin-left:4px">
        <span class="badge badge-obl">OBL</span> Obligatorio &nbsp;
        <span class="badge badge-edad">EDAD</span> Por edad &nbsp;
        <span class="badge badge-crit">CRIT</span> Crítico
      </span>
    </h3>
    <div class="section-body">
      <div class="fg-5" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">N.º HC:</span><span class="val" contenteditable="true">${n}</span></div>
        <div class="field-row"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${g||W}</span></div>
        <div class="field-row"><span class="lbl">Hora:</span><span class="val" contenteditable="true">${(e==null?void 0:e.admissionTime)||""}</span></div>
        <div class="field-row"><span class="lbl">Servicio:</span><span class="val" contenteditable="true">Qx FLAP/FLP</span></div>
        <div class="field-row"><span class="lbl">Médico:</span><span class="val xwide" contenteditable="true">${x}</span></div>
      </div>
      <div class="fg-3" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Nombre:</span><span class="val xwide" contenteditable="true">${r}</span></div>
        <div class="field-row"><span class="lbl">Edad:</span><span class="val" contenteditable="true">${v}</span></div>
        <div class="field-row"><span class="lbl">Sexo:</span><span class="val sm" contenteditable="true">${m}</span></div>
      </div>
      <div class="fg-3" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Procedencia:</span><span class="val wide" contenteditable="true">${d}</span></div>
        <div class="field-row"><span class="lbl">Responsable:</span><span class="val wide" contenteditable="true">${l}</span></div>
        <div class="field-row"><span class="lbl">Tel.:</span><span class="val" contenteditable="true">${c}</span></div>
      </div>
    </div>
  </div>

  <!-- ── 1 · CIRUGÍA ACTUAL ── -->
  <div class="section-card">
    <h3 class="section">1 · Cirugía Actual <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="three-col-asym">
        <!-- Procedimiento programado -->
        <div>
          <h4 class="sub">Procedimiento programado</h4>
          <div class="two-col" style="gap:1px 8px">
            <div style="display:flex;flex-direction:column;gap:1px">
              <div class="chk${u(q)}"><span class="box"></span>Queiloplastia prim.</div>
              <div class="chk${u(L)}"><span class="box"></span>Queiloplastia sec.</div>
              <div class="chk${u(K)}"><span class="box"></span>Palatoplastia</div>
              <div class="chk"><span class="box"></span>Rinoplastia prim.</div>
              <div class="chk"><span class="box"></span>Rinoplastia sec.</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:1px">
              <div class="chk"><span class="box"></span>Gingivoperioplastia</div>
              <div class="chk"><span class="box"></span>Injerto alveolar</div>
              <div class="chk"><span class="box"></span>Fistulorrafia</div>
              <div class="chk"><span class="box"></span>Revisión cicatricial</div>
              <div class="chk"><span class="box"></span>Colgajo faríngeo</div>
            </div>
          </div>
          <div class="chk" style="margin-top:3px"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true">${A}</span></div>
        </div>
        <!-- Lado + Tipo -->
        <div>
          <h4 class="sub">Lado afectado</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk${u($)}"><span class="box"></span>Derecho</div>
            <div class="chk"><span class="box"></span>Izquierdo</div>
            <div class="chk${u(E)}"><span class="box"></span>Bilateral</div>
            <div class="chk${u(!$&&!E)}"><span class="box"></span>No aplica</div>
          </div>
          <h4 class="sub" style="margin-top:4px">Tipo de cirugía</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk${u(q||K&&!L)}"><span class="box"></span>Primaria</div>
            <div class="chk${u(L)}"><span class="box"></span>Secundaria</div>
            <div class="chk"><span class="box"></span>Reconstructiva</div>
            <div class="chk"><span class="box"></span>Correctiva</div>
          </div>
        </div>
        <!-- Motivo quirúrgico -->
        <div style="display:flex;flex-direction:column">
          <h4 class="sub">Motivo quirúrgico actual</h4>
          <div class="narrative xtall" contenteditable="true">${j}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 2 · EVOLUCIÓN PREVIA ── -->
  <div class="section-card">
    <h3 class="section">2 · Evolución Quirúrgica Previa
      <button type="button" class="add-row-btn" onclick="addRow('tbl-evol-qx',4)">+ fila</button>
    </h3>
    <div class="section-body" id="sec2">
      <table class="clinical" id="tbl-evol-qx">
        <thead><tr><th style="width:13%">Fecha</th><th style="width:36%">Procedimiento</th><th style="width:22%">Centro</th><th>Complicaciones</th></tr></thead>
        <tbody>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        </tbody>
      </table>
      <div class="cl-inline" style="margin-top:3px">
        <span class="lbl">Complicaciones previas:</span>
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>Dehiscencia</div>
        <div class="chk"><span class="box"></span>Fístula</div>
        <div class="chk"><span class="box"></span>Sangrado</div>
        <div class="chk"><span class="box"></span>Infección</div>
        <div class="chk"><span class="box"></span>Mala cicatrización</div>
        <div class="chk"><span class="box"></span>C. anestésicas</div>
        <div class="chk"><span class="box"></span>Reintervención</div>
        <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
      </div>
    </div>
  </div>

  <!-- ── 3 · NUTRICIÓN ── -->
  <div class="section-card">
    <h3 class="section">3 · Evaluación Nutricional Prequirúrgica <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <div class="metrics-strip">
            <div class="metric"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" value="${y}" oninput="calcIMC()"/><span class="unit">kg</span></div>
            <div class="metric"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" value="${S}" oninput="calcIMC()"/><span class="unit">cm</span></div>
            <div class="metric"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly/><span class="unit">kg/m²</span></div>
          </div>
          <div class="cl-inline" style="margin-top:3px">
            <span class="lbl">Estado:</span>
            <div class="chk"><span class="box"></span>Adecuado</div>
            <div class="chk"><span class="box"></span>Riesgo leve</div>
            <div class="chk"><span class="box"></span>Desnutrición mod.</div>
            <div class="chk"><span class="box"></span>Desnutrición sev.</div>
            <div class="chk"><span class="box"></span>Sobrepeso</div>
            <div class="chk"><span class="box"></span>Obesidad</div>
          </div>
        </div>
        <div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Signos alarma:</span>
            <div class="chk"><span class="box"></span>Palidez</div>
            <div class="chk"><span class="box"></span>Edema</div>
            <div class="chk"><span class="box"></span>Pérdida musc.</div>
            <div class="chk"><span class="box"></span>Deshidratación</div>
            <div class="chk"><span class="box"></span>Mala alimentación</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Hb disponible:</span>
            <div class="chk"><span class="box"></span>Sí</div>
            <div class="chk"><span class="box"></span>No</div>
            <div class="field-row" style="margin-left:6px"><span class="lbl">Resultado:</span><span class="val wide" contenteditable="true"></span></div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Apto nutricionalmente:</span>
            <div class="chk"><span class="box"></span>Sí</div>
            <div class="chk"><span class="box"></span>Requiere optimización</div>
            <div class="chk"><span class="box"></span>No apto</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 4 · INFECCIÓN ── -->
  <div class="section-card">
    <h3 class="section">4 · Evaluación Infecciosa</h3>
    <div class="section-body">
      <div class="cl-inline">
        <span class="lbl">Infecciones actuales:</span>
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>IRA</div>
        <div class="chk"><span class="box"></span>Otitis</div>
        <div class="chk"><span class="box"></span>Faringitis</div>
        <div class="chk"><span class="box"></span>Lesiones cutáneas</div>
        <div class="chk"><span class="box"></span>GI</div>
        <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
        <span class="lbl" style="margin-left:10px">Antibióticos recientes:</span>
        <div class="chk" id="chk-antibio-si"><span class="box"></span>Sí</div>
        <div class="chk"><span class="box"></span>No</div>
        <span class="lbl" style="margin-left:10px">Vacunación al día:</span>
        <div class="chk"><span class="box"></span>Sí</div>
        <div class="chk"><span class="box"></span>No</div>
        <div class="chk"><span class="box"></span>Desconoce</div>
      </div>
      <div id="antibio-desc" style="display:none;margin-top:3px">
        <div class="field-row"><span class="lbl">Describir antibiótico:</span><span class="val full" contenteditable="true"></span></div>
      </div>
    </div>
  </div>

  <!-- ── 5 · EVALUACIÓN FLAP ── -->
  <div class="section-card">
    <h3 class="section">5 · Evaluación Específica FLAP <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="three-col">
        <!-- LABIO + ALVÉOLO -->
        <div>
          <h4 class="sub" style="margin-top:0">Labio</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <div class="chk${u($)}"><span class="box"></span>Unilateral</div>
            <div class="chk${u(E)}"><span class="box"></span>Bilateral</div>
            <div class="chk${u(F)}"><span class="box"></span>Completa</div>
            <div class="chk${u(!F&&$)}"><span class="box"></span>Incompleta</div>
          </div>
          <h4 class="sub">Hallazgos labio</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
            <div class="chk"><span class="box"></span>Asimetría nasal</div>
            <div class="chk"><span class="box"></span>Retracción</div>
            <div class="chk"><span class="box"></span>Dehiscencia</div>
            <div class="chk"><span class="box"></span>Adherencias</div>
            <div class="chk"><span class="box"></span>Buena evolución</div>
          </div>
          <h4 class="sub" style="margin-top:4px">Alvéolo</h4>
          <div class="cl-inline">
            <div class="chk"><span class="box"></span>Comprometido</div>
            <div class="chk"><span class="box"></span>No comprometido</div>
          </div>
        </div>
        <!-- PALADAR + NARIZ -->
        <div>
          <h4 class="sub" style="margin-top:0">Paladar</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk${u(Q)}"><span class="box"></span>Fisura residual</div>
            <div class="chk"><span class="box"></span>Fístula</div>
            <div class="chk"><span class="box"></span>Paladar corto</div>
            <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
            <div class="chk"><span class="box"></span>Cicatriz tensa</div>
          </div>
          <h4 class="sub" style="margin-top:4px">Nariz</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk"><span class="box"></span>Colapso nasal</div>
            <div class="chk"><span class="box"></span>Asimetría</div>
            <div class="chk"><span class="box"></span>Punta deprimida</div>
            <div class="chk"><span class="box"></span>Desviación septal</div>
          </div>
        </div>
        <!-- DENTICIÓN -->
        <div>
          <h4 class="sub" style="margin-top:0">Dentición / Ortodoncia <span class="badge badge-edad">EDAD</span></h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk"><span class="box"></span>Caries</div>
            <div class="chk"><span class="box"></span>Mala higiene</div>
            <div class="chk"><span class="box"></span>Apiñamiento</div>
            <div class="chk"><span class="box"></span>Expansión maxilar</div>
            <div class="chk"><span class="box"></span>Orto. en curso</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>

  <!-- ═══════════════ PÁGINA 2 ═══════════════ -->
  <div class="p2">
    ${Z("2",r)}
  </div>

  <!-- ── 6 · EXAMEN FÍSICO ── -->
  <div class="section-card" id="sec6">
    <h3 class="section">6 · Examen Físico Quirúrgico <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline" style="margin-bottom:3px">
        <span class="lbl">Estado general:</span>
        <div class="chk"><span class="box"></span>Bueno</div>
        <div class="chk"><span class="box"></span>Regular</div>
        <div class="chk"><span class="box"></span>Malo</div>
        <div class="metrics-strip" style="margin-left:10px;flex:none">
          <div class="metric"><span class="lbl">FC:</span><span class="val sm" contenteditable="true"></span><span class="unit">lpm</span></div>
          <div class="metric"><span class="lbl">FR:</span><span class="val sm" contenteditable="true"></span><span class="unit">rpm</span></div>
          <div class="metric"><span class="lbl">SatO₂:</span><span class="val sm" contenteditable="true"></span><span class="unit">%</span></div>
          <div class="metric"><span class="lbl">Temp:</span><span class="val sm" contenteditable="true"></span><span class="unit">°C</span></div>
          <div class="metric"><span class="lbl">PA:</span><span class="val" contenteditable="true"></span><span class="unit">mmHg</span></div>
        </div>
      </div>
      <div class="narrative xtall" contenteditable="true"></div>
    </div>
  </div>

  <!-- ── 7 · POR EDAD ── -->
  <div class="section-card" id="sec7">
    <h3 class="section">7 · Evaluación según Edad <span class="badge badge-edad">EDAD</span></h3>
    <div class="section-body">
      ${R?`<div class="age-block">
        <span class="age-label">RN / Lactantes</span>
        <span class="lbl">Alimentación:</span>
        <div class="chk"><span class="box"></span>L. materna</div>
        <div class="chk"><span class="box"></span>Fórmula especial</div>
        <div class="chk"><span class="box"></span>Dif. succión</div>
        <div class="chk"><span class="box"></span>Regurg. nasal</div>
        <span class="lbl" style="margin-left:8px">Peso apto para Qx:</span>
        <div class="chk"><span class="box"></span>Sí</div>
        <div class="chk"><span class="box"></span>No</div>
      </div>`:""}
      ${H?`<div class="age-block">
        <span class="age-label">Preescolar / Escolar</span>
        <span class="lbl">Lenguaje:</span>
        <div class="chk"><span class="box"></span>Adecuado</div>
        <div class="chk"><span class="box"></span>Hipernasalidad</div>
        <div class="chk"><span class="box"></span>Dif. articulatoria</div>
        <span class="lbl" style="margin-left:8px">Conducta:</span>
        <div class="chk"><span class="box"></span>Colaborador</div>
        <div class="chk"><span class="box"></span>Ansioso</div>
        <div class="chk"><span class="box"></span>Poco colaborador</div>
      </div>`:""}
      ${J?`<div class="age-block">
        <span class="age-label">Adolescentes</span>
        <span class="lbl">Aspecto psicosocial:</span>
        <div class="chk"><span class="box"></span>Buena adaptación</div>
        <div class="chk"><span class="box"></span>Ansiedad estética</div>
        <div class="chk"><span class="box"></span>Baja autoestima</div>
        <div class="chk"><span class="box"></span>Bullying</div>
      </div>`:""}
    </div>
  </div>

  <!-- ── 8 · DOC. CLÍNICA + IMPRESIÓN DIAGNÓSTICA ── -->
  <div class="section-card">
    <h3 class="section">8 · Doc. Clínica &nbsp;·&nbsp; Impresión Diagnóstica <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col" style="gap:4px 12px">
        <div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Adjuntos:</span>
            <div class="chk"><span class="box"></span>Labs.</div>
            <div class="chk"><span class="box"></span>Rx</div>
            <div class="chk"><span class="box"></span>TC</div>
            <div class="chk"><span class="box"></span>Audiometría</div>
            <div class="chk"><span class="box"></span>Interconsultas</div>
          </div>
          <h4 class="sub">Diagnóstico principal</h4>
          <div class="narrative" contenteditable="true">${j}</div>
        </div>
        <div>
          <h4 class="sub">Diagnósticos asociados</h4>
          <div class="narrative tall" contenteditable="true"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 9 · CONDUCTA ── -->
  <div class="section-card">
    <h3 class="section">9 · Conducta <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline">
        <div class="chk"><span class="box"></span>Apto para cirugía</div>
        <div class="chk"><span class="box"></span>Requiere optim. nutricional</div>
        <div class="chk"><span class="box"></span>Requiere valoración anestésica adicional</div>
        <div class="chk"><span class="box"></span>Reprogramar cirugía</div>
        <div class="chk"><span class="box"></span>Suspender temporalmente</div>
      </div>
    </div>
  </div>

  <!-- ── KERNAHAN ── -->
  <div class="section-card">
    <h3 class="section">Anexo 1 · Clasificación de Kernahan — Esquema Anatómico FLAP</h3>
    <div class="section-body">
      <div class="kernahan-container">
        <div class="kernahan-legend left">
          <strong>1:</strong> Fosa nasal derecha<br>
          <strong>2.1:</strong> Labio 1/3 &nbsp;<strong>2.2:</strong> 2/3 &nbsp;<strong>2.3:</strong> 3/3<br>
          <strong>3:</strong> Alvéolo derecho<br>
          <strong>4:</strong> Paladar óseo ant. derecho
        </div>
        <svg class="kernahan-svg" viewBox="0 0 220 280" width="148" height="188" xmlns="http://www.w3.org/2000/svg">
          <polygon class="kern-zone" data-zone="1" points="55,5 95,5 92,35 60,35"/><text class="kern-num" x="75" y="22">1</text>
          <rect class="kern-zone" data-zone="2.1" x="60" y="35" width="32" height="28"/><text class="kern-num" x="76" y="51">2.1</text>
          <rect class="kern-zone" data-zone="2.2" x="60" y="63" width="32" height="28"/><text class="kern-num" x="76" y="79">2.2</text>
          <rect class="kern-zone" data-zone="2.3" x="60" y="91" width="32" height="28"/><text class="kern-num" x="76" y="107">2.3</text>
          <polygon class="kern-zone" data-zone="3" points="60,119 92,119 90,142 70,142"/><text class="kern-num" x="76" y="132">3</text>
          <polygon class="kern-zone" data-zone="4" points="70,142 105,142 105,165 80,165"/><text class="kern-num" x="88" y="155">4</text>
          <polygon class="kern-zone" data-zone="5" points="125,5 165,5 160,35 128,35"/><text class="kern-num" x="145" y="22">5</text>
          <rect class="kern-zone" data-zone="6.1" x="128" y="35" width="32" height="28"/><text class="kern-num" x="144" y="51">6.1</text>
          <rect class="kern-zone" data-zone="6.2" x="128" y="63" width="32" height="28"/><text class="kern-num" x="144" y="79">6.2</text>
          <rect class="kern-zone" data-zone="6.3" x="128" y="91" width="32" height="28"/><text class="kern-num" x="144" y="107">6.3</text>
          <polygon class="kern-zone" data-zone="7" points="128,119 160,119 150,142 130,142"/><text class="kern-num" x="144" y="132">7</text>
          <polygon class="kern-zone" data-zone="8" points="115,142 150,142 140,165 115,165"/><text class="kern-num" x="132" y="155">8</text>
          <rect class="kern-zone" data-zone="9" x="80" y="165" width="60" height="32"/><text class="kern-num" x="110" y="183">9</text>
          <rect class="kern-zone" data-zone="10" x="80" y="197" width="60" height="32"/><text class="kern-num" x="110" y="215">10</text>
          <rect class="kern-zone" data-zone="11" x="80" y="229" width="60" height="32"/><text class="kern-num" x="110" y="247">11</text>
        </svg>
        <div class="kernahan-legend right">
          <strong>5:</strong> Fosa nasal izquierda<br>
          <strong>6.1:</strong> Labio 1/3 &nbsp;<strong>6.2:</strong> 2/3 &nbsp;<strong>6.3:</strong> 3/3<br>
          <strong>7:</strong> Alvéolo izquierdo<br>
          <strong>8:</strong> Paladar óseo ant. izquierdo
        </div>
        <div class="kernahan-extra">
          <strong>9:</strong> Paladar óseo post. parcial &nbsp;·&nbsp; <strong>9+10:</strong> total &nbsp;·&nbsp; <strong>11:</strong> Paladar blando / fisura submucosa
          <span style="display:block;margin-top:1px;font-size:5.8pt;color:var(--ink-3)">Haga clic en cada zona para marcar las áreas comprometidas</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 10 · FIRMA ── -->
  <div class="section-card">
    <h3 class="section">10 · Firma y Validación</h3>
    <div class="section-body">
      <div class="firma-section" style="grid-template-columns:1fr;max-width:260px">
        <div class="firma-box">
          <div class="firma-line"></div>
          <div class="firma-label" contenteditable="true">${x}</div>
          <div style="font-size:6.5pt;color:var(--ink-3);margin-top:2px">Firma y Sello del Médico &nbsp;·&nbsp; Matrícula:&nbsp;<span contenteditable="true" style="display:inline-block;min-width:26mm;border-bottom:1px solid var(--rule)"></span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 2 de 2</span>
  </div>
</div>

<script>
var PATIENT_NAME = ${JSON.stringify(r)};
var HC_CODE = ${JSON.stringify(n)};

/* ── CHECKBOXES ── */
document.querySelectorAll('.chk').forEach(function(chk) {
  chk.addEventListener('click', function(e) {
    if (e.target.classList.contains('other-line')) return;
    if (e.target.isContentEditable) return;
    chk.classList.toggle('checked');
  });
});

/* ── Antibióticos recientes: mostrar descripción si Sí ── */
(function() {
  var antibioSi = document.getElementById('chk-antibio-si');
  var antibioDesc = document.getElementById('antibio-desc');
  if (antibioSi && antibioDesc) {
    antibioSi.addEventListener('click', function() {
      antibioDesc.style.display = antibioSi.classList.contains('checked') ? 'block' : 'none';
    });
  }
})();

/* ── KERNAHAN ── */
document.querySelectorAll('.kern-zone').forEach(function(zone) {
  zone.addEventListener('click', function() {
    zone.classList.toggle('active');
    var num = zone.nextElementSibling;
    if (num && num.classList.contains('kern-num')) {
      num.style.fill = zone.classList.contains('active') ? 'white' : '';
    }
  });
});

/* ── PRINT: expand all section bodies ── */
window.onbeforeprint = function() {
  document.querySelectorAll('.section-body').forEach(function(b) {
    if (b.style.display === 'none') {
      b.style.display = '';
      b.dataset.wasHidden = '1';
    }
  });
};
window.onafterprint = function() {
  document.querySelectorAll('.section-body[data-was-hidden]').forEach(function(b) {
    b.style.display = 'none';
    delete b.dataset.wasHidden;
  });
};

/* ── IMC ── */
function calcIMC() {
  var peso = parseFloat(document.getElementById('peso-nut').value);
  var tallaCm = parseFloat(document.getElementById('talla-nut').value);
  var imcEl = document.getElementById('imc-nut');
  if (peso > 0 && tallaCm > 0) {
    var m = tallaCm / 100;
    imcEl.value = (peso / (m * m)).toFixed(2);
  } else { imcEl.value = ''; }
}
calcIMC();

/* ── TABLE ROWS ── */
function addRow(tableId, numCols) {
  var tabla = document.getElementById(tableId);
  if (!tabla) return;
  var tbody = tabla.querySelector('tbody');
  var tr = document.createElement('tr');
  for (var i = 0; i < numCols; i++) {
    var td = document.createElement('td');
    td.className = 'fillable';
    td.setAttribute('contenteditable', 'true');
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

/* ── KERNAHAN INIT ── */
(function initKernahan() {
  var dx = ${JSON.stringify(h)};
  function mark(zoneId) {
    var zone = document.querySelector('[data-zone="' + zoneId + '"]');
    if (!zone) return;
    zone.classList.add('active');
    var num = zone.nextElementSibling;
    if (num && num.classList.contains('kern-num')) num.style.fill = 'white';
  }
  if (dx.includes('FLAP') || dx.includes('BILATERAL') || dx.includes('FLB')) {
    ['2.1','2.2','2.3','6.1','6.2','6.3'].forEach(mark);
    if (dx.includes('FLAP')) ['1','5'].forEach(mark);
  } else if (dx.includes('FL') || dx.includes('LABIO')) {
    ['2.1','2.2','2.3'].forEach(mark);
  }
  if (dx.includes('FP') || dx.includes('PALAT')) ['9','10','11'].forEach(mark);
})();

/* ── RESET ── */
function resetForm() {
  if (!confirm('¿Limpiar todo el formulario?')) return;
  document.querySelectorAll('.chk.checked').forEach(function(c) { c.classList.remove('checked'); });
  document.querySelectorAll('[contenteditable="true"]').forEach(function(el) { el.textContent = ''; });
  document.querySelectorAll('.val-input').forEach(function(el) { el.value = ''; });
  document.querySelectorAll('.kern-zone.active').forEach(function(z) {
    z.classList.remove('active');
    var num = z.nextElementSibling;
    if (num && num.classList.contains('kern-num')) num.style.fill = '';
  });
}

/* ── COMPACT PRINT ── */
function compactPrint() {
  function collectItems(root, items) {
    root.querySelectorAll('.chk.checked').forEach(function(chk) {
      var cl = chk.cloneNode(true);
      var other = cl.querySelector('.other-line');
      var otherTxt = other ? other.textContent.trim() : '';
      cl.querySelectorAll('.box,.other-line').forEach(function(s) { s.remove(); });
      var txt = cl.textContent.trim();
      if (otherTxt) txt += ' ' + otherTxt;
      if (txt) items.push({type:'check', text: txt});
    });
    root.querySelectorAll('.field-row').forEach(function(row) {
      var lbl = row.querySelector('.lbl');
      var val = row.querySelector('[contenteditable="true"]');
      if (lbl && val && val.textContent.trim()) {
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: val.textContent.trim()});
      }
    });
    root.querySelectorAll('.metric').forEach(function(m) {
      var lbl = m.querySelector('.lbl');
      var inp = m.querySelector('input.val-input');
      var ve  = m.querySelector('[contenteditable="true"]');
      var unitEl = m.querySelector('.unit');
      var unit = unitEl ? ' ' + unitEl.textContent.trim() : '';
      if (lbl && inp && inp.value.trim())
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: inp.value + unit});
      if (lbl && ve && ve.textContent.trim())
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: ve.textContent.trim() + unit});
    });
    root.querySelectorAll('.narrative').forEach(function(n) {
      var txt = n.textContent.trim();
      if (txt && txt.length > 5) items.push({type:'narrative', text: txt});
    });
    var tbls = Array.from(root.querySelectorAll('table:not(svg table)'));
    tbls.forEach(function(tbl) {
      if (tbl.closest('svg')) return;
      var hdrs = Array.from(tbl.querySelectorAll('thead th')).map(function(th) { return th.textContent.trim(); });
      var rows = [];
      tbl.querySelectorAll('tbody tr').forEach(function(tr) {
        var cells = Array.from(tr.querySelectorAll('td')).map(function(td) { return td.textContent.trim(); });
        if (cells.some(function(c) { return c; })) rows.push(cells);
      });
      if (rows.length) items.push({type:'table', headers: hdrs, rows: rows});
    });
  }

  var sections = [];
  var activeZones = Array.from(document.querySelectorAll('.kern-zone.active')).map(function(z) { return z.dataset.zone; });
  if (activeZones.length) {
    sections.push({title: 'Diagrama de Kernahan', items: [{type:'field', label: 'Zonas activas', value: activeZones.join(', ')}]});
  }
  document.querySelectorAll('.section-card').forEach(function(card) {
    var h3 = card.querySelector('h3.section');
    if (!h3) return;
    var cl = h3.cloneNode(true);
    cl.querySelectorAll('span,button').forEach(function(s) { s.remove(); });
    var title = cl.textContent.trim();
    var items = [];
    var body = card.querySelector('.section-body') || card;
    collectItems(body, items);
    if (items.length) sections.push({title: title, items: items});
  });

  if (!sections.length) { alert('No hay datos positivos registrados.'); return; }

  var body = '';
  sections.forEach(function(sec) {
    body += '<div class="sh">' + sec.title + '</div><div class="sb">';
    sec.items.forEach(function(it) {
      if (it.type === 'check') {
        body += '<div class="it ck"><span class="tk">&#10003;</span><span>' + it.text + '</span></div>';
      } else if (it.type === 'field') {
        body += '<div class="it fd"><span class="fl">' + it.label + '</span><span class="fv">' + it.value + '</span></div>';
      } else if (it.type === 'narrative') {
        body += '<div class="it nv">' + it.text + '</div>';
      } else if (it.type === 'table') {
        body += '<table class="ct"><thead><tr>' + it.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>';
        it.rows.forEach(function(r) { body += '<tr>' + r.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; });
        body += '</tbody></table>';
      }
    });
    body += '</div>';
  });

  var css = 'body{font-family:Arial,sans-serif;font-size:9pt;color:#1a1a2e;background:#f0f2f5;margin:0;padding:14px}' +
    '.hdr{background:#163A5F;color:#fff;padding:8px 16px;border-radius:5px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}' +
    '.hdr h1{margin:0;font-size:10.5pt;letter-spacing:.2px}.hdr p{margin:0;font-size:7.5pt;opacity:.75;white-space:nowrap}' +
    '.tb{text-align:center;margin-bottom:10px}.tb button{background:#B7791F;color:#fff;border:none;padding:5px 16px;font-size:9pt;font-weight:700;cursor:pointer;border-radius:3px}' +
    '.sh{background:#163A5F;color:#fff;padding:3px 10px;font-size:8pt;font-weight:700;letter-spacing:.3px;border-left:4px solid #B7791F;margin-top:9px;border-radius:0 3px 3px 0}' +
    '.sb{padding:4px 8px 5px;background:#fff;border:1px solid #e2e4e8;border-top:none;border-radius:0 0 3px 3px}' +
    '.it{padding:2px 0;display:flex;align-items:baseline;gap:5px;border-bottom:1px solid #f3f4f6}.it:last-child{border-bottom:none}' +
    '.ck .tk{color:#B7791F;font-weight:900;font-size:10pt;flex-shrink:0;line-height:1}' +
    '.fd .fl{font-size:7pt;font-weight:700;color:#163A5F;text-transform:uppercase;letter-spacing:.3px;white-space:nowrap;flex-shrink:0}' +
    '.fd .fv{font-family:"Courier New",monospace;font-size:9pt;color:#111;font-weight:600}' +
    '.nv{border-left:3px solid #2F5D8A;padding:2px 0 2px 8px;font-style:italic;color:#374151;font-size:8.5pt;width:100%;box-sizing:border-box}' +
    '.ct{width:100%;border-collapse:collapse;font-size:7.5pt;margin:3px 0}.ct th{background:#e5e7eb;font-weight:700;text-align:left;padding:2px 5px;border:1px solid #d1d5db}.ct td{padding:2px 5px;border:1px solid #e5e7eb}' +
    '@media print{body{background:#fff;padding:0}.tb{display:none}.sh{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';

  var pName = (typeof PATIENT_NAME !== 'undefined') ? PATIENT_NAME : '';
  var pCode = (typeof HC_CODE !== 'undefined') ? HC_CODE : '';
  var dateStr = new Date().toLocaleDateString('es-BO');
  var titleStr = 'Historia Cl&#237;nica Quir&#250;rgica &#8212; Vista Compacta' + (pName ? ' &middot; ' + pName : '') + (pCode ? ' (' + pCode + ')' : '');

  var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>HC-QX Compacta</title><style>' + css + '</style></head><body>' +
    '<div class="hdr"><h1>' + titleStr + '</h1><p>MUNAY &middot; ' + dateStr + '</p></div>' +
    '<div class="tb"><button onclick="window.print()">Imprimir / Guardar PDF</button></div>' +
    body + '</body></html>';

  var w = window.open('', '_blank', 'width=900,height=850');
  w.document.write(html);
  w.document.close();
  w.focus();
}
<\/script>
</body></html>`,T=window.open("","_blank","width=960,height=920");T.document.write(C),T.document.close(),T.focus()}function Pt(e){if(!e)return null;const t=Se(e);if(!Fe(t))return null;const s=new Date,i=_e(s,t),n=new Date(t.getFullYear()+i,t.getMonth(),t.getDate()),r=ea(s,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Ze(s,l);return{years:i,months:r,days:c}}function Ot(e){if(!e)return"—";const t=[];return e.years>0&&t.push(`${e.years}a`),e.months>0&&t.push(`${e.months}m`),(e.days>0||t.length===0)&&t.push(`${e.days}d`),t.join(" ")}function nt(e){return Number(e||0).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})}function gn(e,t){const s=Pt(t==null?void 0:t.birthDate),i=e.date?X(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"—",n=(t==null?void 0:t.sex)==="masculino"?"Masculino":(t==null?void 0:t.sex)==="femenino"?"Femenino":"—",r=[{label:"Diagnóstico",value:(t==null?void 0:t.diagnosis)??"—"},{label:"Fecha de internación",value:i},{label:"Hora de internación",value:e.admissionTime||"—"},{label:"Sexo",value:n}],l=[{label:"Hora de ayuno",value:e.fastingTime||(e.fastingHours?`${e.fastingHours} h`:"—")},{label:"Peso",value:e.peso?`${e.peso} kg`:"—"},{label:"Talla",value:e.talla?`${e.talla} cm`:"—"},{label:"Edad",value:Ot(s)},{label:"Alergias/Med.",value:t!=null&&t.allergies?t.allergies.substring(0,50):"—"}];return{left:r,right:l}}async function Qa(e){try{const s=await(await fetch(e)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(s)})}catch{return""}}async function md(e,t){const s=await Qa(Le),{left:i,right:n}=gn(e,t),r=X(new Date,"dd/MM/yyyy HH:mm"),l='<svg style="width:68px;height:68px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="32" r="18" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><path d="M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z" fill="#3D7AAB" stroke="#1F3A5F" stroke-width="1.2"/><path d="M 32 32 Q 34 30 36 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M 44 32 Q 46 30 48 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="28" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><circle cx="52" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><path d="M 36 38 Q 40 41 44 38" stroke="#1A2B42" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M 25 50 Q 25 65 40 65 Q 55 65 55 50" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><ellipse cx="22" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(-20 22 52)"/><ellipse cx="58" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(20 58 52)"/><path d="M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z" fill="#3D7AAB"/></svg>',c=s?`<div style="background:#FFFFFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;min-height:68px;flex-shrink:0;"><img src="${s}" style="width:62px;height:62px;object-fit:contain;"/></div>`:'<div style="background:#FFFFFF;padding:6px 14px;border-radius:6px;min-height:68px;display:flex;align-items:center;flex-shrink:0;"><span style="font-size:16px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',d=['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>'],h=['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>'],j=(y,S)=>y.map(({label:u,value:N},F)=>`<div style="display:grid;grid-template-columns:50px 1fr 1fr;align-items:center;padding:10px 14px 10px 10px;border-bottom:1px solid #E5EBF2;background:${F%2===1?"#F4F7FA":"#FFFFFF"};"><div style="width:32px;height:32px;border-radius:50%;background:#2B5C8A;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 1px 3px rgba(43,92,138,0.25);"><svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:#FFFFFF;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;">${S[F]}</svg></div><span style="font-size:12px;color:#5A6B82;font-weight:500;padding-left:4px;">${u}</span><span style="font-size:13px;font-weight:700;color:#1A2B42;max-width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${N}</span></div>`).join(""),m=`
    <div style="background:#1F3A5F;padding:14px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:4px solid #4FC3C2;">
      ${c}
      <div style="text-align:center;color:#FFFFFF;"><div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Centro Médico Quirúrgico</div><div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:2px;">MUNAY</div></div>
      <div style="text-align:right;color:#FFFFFF;"><div style="font-size:18px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Programación Quirúrgica</div><div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:3px;">${r}</div></div>
    </div>
    <div style="padding:14px 24px 10px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;flex-shrink:0;">
      <div><div style="font-size:22px;font-weight:700;color:#1F3A5F;letter-spacing:-0.3px;line-height:1.1;">${e.patientName??"—"}</div><div style="font-size:16px;font-weight:700;color:#3DA8A7;letter-spacing:0.5px;margin-top:5px;text-transform:uppercase;">${e.surgeryType??"—"}</div></div>
      ${l}
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 24px 18px;overflow:hidden;">
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(i,d)}</div>
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(n,h)}</div>
    </div>
    <div style="height:6px;background:#4FC3C2;flex-shrink:0;"></div>`,g=`
    <div style="background:#1F3A5F;padding:14px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:4px solid #4FC3C2;">
      ${c}
      <div style="text-align:center;color:#FFFFFF;"><div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Centro Médico Quirúrgico</div><div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:2px;">MUNAY</div></div>
      <div style="text-align:right;color:#FFFFFF;"><div style="font-size:18px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Orden de Internación</div><div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:3px;">${r}</div></div>
    </div>
    <div style="padding:14px 24px 10px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;flex-shrink:0;">
      <div><div style="font-size:22px;font-weight:700;color:#1F3A5F;letter-spacing:-0.3px;line-height:1.1;">${e.patientName??"—"}</div><div style="font-size:16px;font-weight:700;color:#3DA8A7;letter-spacing:0.5px;margin-top:5px;text-transform:uppercase;">${e.surgeryType??"—"}</div></div>
      <svg style="width:65px;height:65px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="10" fill="#C9A57B"/><circle cx="60" cy="22" r="10" fill="#C9A57B"/><circle cx="20" cy="22" r="6" fill="#E8C9A8"/><circle cx="60" cy="22" r="6" fill="#E8C9A8"/><ellipse cx="40" cy="38" rx="22" ry="20" fill="#D4B088"/><ellipse cx="40" cy="44" rx="12" ry="10" fill="#F0DAB8"/><rect x="22" y="55" width="36" height="18" rx="3" fill="#A8C5E8"/><path d="M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z" fill="#FFFFFF"/><ellipse cx="32" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><ellipse cx="48" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><circle cx="32.8" cy="35" r="0.8" fill="#FFFFFF"/><circle cx="48.8" cy="35" r="0.8" fill="#FFFFFF"/><ellipse cx="40" cy="42" rx="2.5" ry="2" fill="#2A2A3E"/><path d="M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47" stroke="#2A2A3E" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="25" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/><circle cx="55" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/></svg>
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 24px 18px;overflow:hidden;">
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(i,d)}</div>
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(n,h)}</div>
    </div>
    <div style="height:6px;background:#4FC3C2;flex-shrink:0;"></div>`,f=`<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/>
<title>Programación Quirúrgica — ${e.patientName}</title>
<style>
  @page { size: 8.5in 11in portrait; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 8.5in; height: 11in; font-family: Arial, sans-serif; }
  .copy { height: 5.5in; display: flex; flex-direction: column; overflow: hidden; }
  hr.divider { border: none; border-top: 2px dashed #b0bec5; }
</style>
</head>
<body>
  <div class="copy">${m}</div>
  <hr class="divider"/>
  <div class="copy">${g}</div>
</body>
</html>`,x=window.open("","_blank","width=816,height=1056");x.document.write(f),x.document.close(),x.focus(),setTimeout(()=>{x.print()},500)}async function xd(e,t){const s=await Qa(Le),i=e.surgeon||"___________",n=e.patientName||"___________",r=(t==null?void 0:t.guardian)||"___________",l=(t==null?void 0:t.guardianIdNumber)||(t==null?void 0:t.idNumber)||"___________",c=(t==null?void 0:t.address)||"___________",d=e.surgeryType||"___________",h=(t==null?void 0:t.sex)==="masculino"?"Masculino":(t==null?void 0:t.sex)==="femenino"?"Femenino":"—",j=e.date?X(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"___________",m=s?`<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:60px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',v=x=>`<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${x}</span>`,g=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Consentimiento Informado — ${n}</title>
<style>
  @page{size:8.5in 11in portrait;margin:0}*{box-sizing:border-box;margin:0;padding:0}
  body{width:8.5in;height:11in;font-family:Arial,Helvetica,sans-serif;font-size:10pt;color:#1a1a1a;line-height:1.5;display:flex;flex-direction:column}
  .hdr{background:#1F3A5F;padding:12px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;flex-shrink:0}
  .pstrip{background:linear-gradient(90deg,#EBF4FF,#F4F7FA);padding:7px 24px;border-bottom:1px solid #D5DEE8;flex-shrink:0;display:flex;align-items:center}
  .pi{font-size:9pt;padding:0 12px;border-right:1px solid #C5D8EE}.pi:first-child{padding-left:0}.pi:last-child{border-right:none}
  .pi .lbl{color:#5A6B82}.pi strong{color:#1F3A5F}
  .content{flex:1;padding:14px 26px 10px;display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;flex-direction:column;gap:8px}
  .doc-title{text-align:center;font-size:12pt;font-weight:bold;color:#1F3A5F;text-transform:uppercase;border-bottom:2px solid #4FC3C2;padding-bottom:6px;margin-bottom:4px}
  .s{text-align:justify;font-size:10pt;line-height:1.5}.s strong{color:#1F3A5F}
  .rl{margin:4px 0 0 20px}.rl li{font-size:9.5pt;line-height:1.45;margin-bottom:3px}
  .banner{text-align:center;font-weight:bold;font-size:10pt;color:#1F3A5F;background:#EBF4FF;border:1px solid #C5D8EE;border-radius:4px;padding:7px 14px}
  .bottom{display:flex;flex-direction:column;gap:10px}
  .sigs{display:flex;gap:28px}.sig{flex:1;text-align:center}
  .stamp-box{border:1px dashed #8AAFC8;border-radius:6px;height:72px;display:flex;align-items:center;justify-content:center;color:#A0B8CC;font-size:9pt;letter-spacing:1px;margin-bottom:8px}
  .sig-line{border-top:1px solid #555;margin-bottom:5px}
  .sig-txt{font-size:9pt;line-height:1.6}
  .date-row{text-align:right;font-size:10pt;color:#1F3A5F;padding-right:2px}
  .bot{height:5px;background:#4FC3C2;flex-shrink:0}
</style></head><body>
<div class="hdr">
  ${m}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:13px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;opacity:.85">Centro Médico Quirúrgico</div>
    <div style="font-size:24px;font-weight:900;letter-spacing:5px;color:#4FC3C2;margin-top:3px">MUNAY</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:14px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase">Consentimiento Informado</div>
    <div style="font-size:10px;opacity:.9;margin-top:3px">CIRUGÍA LABIO PALADAR HENDIDO</div>
  </div>
</div>
<div class="pstrip">
  <div class="pi"><span class="lbl">Paciente: </span><strong>${n}</strong></div>
  <div class="pi"><span class="lbl">Sexo: </span><strong>${h}</strong></div>
  <div class="pi"><span class="lbl">CI: </span><strong>${l}</strong></div>
  <div class="pi"><span class="lbl">Representante: </span><strong>${r}</strong></div>
  <div class="pi"><span class="lbl">Procedimiento: </span><strong style="color:#3DA8A7">${d}</strong></div>
</div>
<div class="content">
  <div class="top">
    <div class="doc-title">CONSENTIMIENTO INFORMADO PARA CIRUGÍA LABIO PALADAR HENDIDO</div>
    <div class="s">Yo, ${v(r)}, PACIENTE O REPRESENTANTE LEGAL DE ${v(n)}, CON CI ${v(l)} Y DOMICILIO EN: ${v(c)}.</div>
    <div class="s"><strong>1.</strong> Por la presente <strong>AUTORIZO</strong> al ${v(i)} y a los asistentes que sean seleccionados y personal de salud, para que realice en mi persona (o en la de mi representante), el siguiente procedimiento o tratamiento: ${v(d)}</div>
    <div class="s"><strong>2.</strong> Confirmo que el ${v(i)} me ha explicado detalladamente, en palabras comprensibles para mí, el efecto y la naturaleza de las operaciones a efectuar, incluyendo posibles riesgos, soluciones alternativas y molestias que se puedan sentir aun teniendo un postoperatorio normal.</div>
    <div class="s"><strong>3.</strong> Los <strong>RIESGOS</strong> de posibles complicaciones incluyen entre otras:<ul class="rl"><li>Estados temporales de inflamación y cambio de color natural de la piel.</li><li>Posibilidad de sangrado durante y después de la cirugía, seromas, infección o necrosis.</li><li>Trastornos temporales o permanentes de la sensibilidad y motilidad. Reacción alérgica a alguno de los medicamentos utilizados.</li><li>Intolerancia a materiales de sutura, implantes o apósitos. Imperfecciones e insatisfacción en los resultados.</li><li>Mala cicatrización: quedará una cicatriz permanente. El proceso de maduración puede tardar más de un año.</li></ul></div>
    <div class="s"><strong>4.</strong> Doy el <strong>CONSENTIMIENTO</strong> para la administración de los anestésicos necesarios o aconsejables. Comprendo que cualquier forma de anestesia entraña riesgos de complicaciones, lesiones y a veces muerte.</div>
    <div class="s"><strong>5.</strong> <strong>RECONOZCO</strong> que pueden darse condiciones imprevistas que necesiten procedimientos diferentes. <strong>AUTORIZO</strong> al cirujano y a sus asistentes a realizarlos en el ejercicio de su juicio profesional. En caso de complicaciones, <strong>AUTORIZO</strong> al ${v(i)} a solicitar la ayuda de otros especialistas.</div>
    <div class="s"><strong>6.</strong> <strong>COMPRENDO</strong> que el fin de la intervención es <strong>MEJORAR LA APARIENCIA</strong>, pudiendo persistir alguna imperfección. La Medicina y la Cirugía no son ciencias exactas. <strong>RECONOZCO QUE NO SE ME HA DADO GARANTÍA ABSOLUTA.</strong></div>
    <div class="s"><strong>7.</strong> He sido informado(a) que podrá ser necesario el uso de injertos, trasplantes o <strong>IMPLANTES DE MATERIAS ESPECIALES MÉDICAS</strong> y material de sutura permanente.</div>
    <div class="s"><strong>8.</strong> <strong>CONSIENTO</strong> el ser fotografiado o filmado antes, durante y después del tratamiento para uso médico y educativo. <strong>NUNCA EN PRENSA DIARIA O REVISTAS COMUNES</strong>, salvo con mi <strong>EXPRESO PERMISO</strong>.</div>
    <div class="banner">DOY CONSENTIMIENTO PARA EL TRATAMIENTO O PROCEDIMIENTO DE PUNTOS CITADOS PREVIAMENTE.<br/>ESTOY SATISFECHO/A CON LA EXPLICACIÓN Y NO NECESITO MÁS INFORMACIÓN.</div>
  </div>
  <div class="bottom">
    <div class="sigs">
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${r}</strong><br/>C.I.: ${l}<br/>(Tutor / Representante legal)</div></div>
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${i}</strong><br/>(Firma del Cirujano)</div></div>
    </div>
    <div class="date-row">Fecha: <strong>${j}</strong></div>
  </div>
</div>
<div class="bot"></div>
</body></html>`,f=window.open("","_blank","width=816,height=1056");f.document.write(g),f.document.close(),f.focus(),setTimeout(()=>{f.print()},500)}async function hd(e,t){const s=await Qa(Le),i=e.anesthesiologist||"___________",n=e.patientName||"___________",r=(t==null?void 0:t.guardian)||"___________",l=(t==null?void 0:t.guardianIdNumber)||(t==null?void 0:t.idNumber)||"___________",c=(t==null?void 0:t.sex)==="masculino"?"Masculino":(t==null?void 0:t.sex)==="femenino"?"Femenino":"—",d=e.date?X(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"___________",h=s?`<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:60px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',j=g=>`<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${g}</span>`,m=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Consentimiento Anestesia — ${n}</title>
<style>
  @page{size:8.5in 11in portrait;margin:0}*{box-sizing:border-box;margin:0;padding:0}
  body{width:8.5in;height:11in;font-family:Arial,Helvetica,sans-serif;font-size:9pt;color:#1a1a1a;line-height:1.46;display:flex;flex-direction:column}
  .hdr{background:#1F3A5F;padding:12px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;flex-shrink:0}
  .pstrip{background:linear-gradient(90deg,#EBF4FF,#F4F7FA);padding:7px 24px;border-bottom:1px solid #D5DEE8;flex-shrink:0;display:flex;align-items:center}
  .pi{font-size:8.5pt;padding:0 12px;border-right:1px solid #C5D8EE}.pi:first-child{padding-left:0}.pi:last-child{border-right:none}
  .pi .lbl{color:#5A6B82}.pi strong{color:#1F3A5F}
  .content{flex:1;padding:12px 26px 8px;display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;flex-direction:column;gap:7px}
  .doc-title{text-align:center;font-size:11.5pt;font-weight:bold;color:#1F3A5F;text-transform:uppercase;border-bottom:2px solid #4FC3C2;padding-bottom:6px;margin-bottom:3px}
  .qa-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 20px}
  .qa{margin-bottom:6px}.qa-q{font-weight:700;color:#1F3A5F;font-size:9pt;margin-bottom:2px}
  .qa-a{font-size:8.5pt;line-height:1.42;color:#1a1a1a;text-align:justify}
  .qa-a ul{margin:3px 0 0 16px}.qa-a li{margin-bottom:2px}
  .sec-hdr{font-size:9.5pt;font-weight:700;color:#1F3A5F;background:linear-gradient(90deg,#EBF4FF,#F4F7FA);padding:4px 12px;border-left:3px solid #4FC3C2;margin-bottom:4px}
  .s{text-align:justify;font-size:9pt;line-height:1.46}.s strong{color:#1F3A5F}
  .rl{margin:3px 0 0 16px}.rl li{font-size:8.5pt;line-height:1.42;margin-bottom:2px}
  .indiv{font-size:9pt;line-height:1.48;text-align:justify;background:#F4F7FA;border:1px solid #D5DEE8;border-left:3px solid #4FC3C2;border-radius:0 4px 4px 0;padding:8px 12px}
  .bottom{display:flex;flex-direction:column;gap:10px}
  .sigs{display:flex;gap:28px}.sig{flex:1;text-align:center}
  .stamp-box{border:1px dashed #8AAFC8;border-radius:6px;height:72px;display:flex;align-items:center;justify-content:center;color:#A0B8CC;font-size:9pt;letter-spacing:1px;margin-bottom:8px}
  .sig-line{border-top:1px solid #555;margin-bottom:5px}
  .sig-txt{font-size:9pt;line-height:1.6}
  .date-row{text-align:right;font-size:10pt;color:#1F3A5F;padding-right:2px}
  .bot{height:5px;background:#4FC3C2;flex-shrink:0}
</style></head><body>
<div class="hdr">
  ${h}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:13px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;opacity:.85">Centro Médico Quirúrgico</div>
    <div style="font-size:24px;font-weight:900;letter-spacing:5px;color:#4FC3C2;margin-top:3px">MUNAY</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:14px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase">Consentimiento Informado</div>
    <div style="font-size:10px;opacity:.9;margin-top:3px">ANESTESIA GENERAL</div>
  </div>
</div>
<div class="pstrip">
  <div class="pi"><span class="lbl">Paciente: </span><strong>${n}</strong></div>
  <div class="pi"><span class="lbl">Sexo: </span><strong>${c}</strong></div>
  <div class="pi"><span class="lbl">CI: </span><strong>${l}</strong></div>
  <div class="pi"><span class="lbl">Representante: </span><strong>${r}</strong></div>
  <div class="pi"><span class="lbl">Anestesiólogo: </span><strong style="color:#3DA8A7">${i}</strong></div>
</div>
<div class="content">
  <div class="top">
    <div class="doc-title">CONSENTIMIENTO INFORMADO DE ANESTESIA GENERAL</div>
    <div class="qa-grid">
      <div>
        <div class="qa"><div class="qa-q">¿Es importante leer este documento?</div><div class="qa-a">Sí. Informa de los procedimientos médico-anestésicos necesarios para la cirugía. Puede rechazar esta información o solicitarla las veces necesarias hasta su completa comprensión.</div></div>
        <div class="qa"><div class="qa-q">¿Estoy obligado a autorizar y firmar?</div><div class="qa-a">No. Tiene derecho de rechazar o aceptar los procedimientos en cualquier momento previo a la cirugía, sin temor a repercusiones por parte del equipo quirúrgico.</div></div>
        <div class="qa"><div class="qa-q">¿Qué es la anestesia?</div><div class="qa-a">Procedimiento médico que permite realizar una cirugía sin dolor, pudiendo dormir al paciente (general, local o regional). En ocasiones pueden desarrollarse dos tipos simultáneamente.</div></div>
        <div class="qa"><div class="qa-q">¿Quién es el anestesiólogo?</div><div class="qa-a">El médico especialista encargado de sugerir y administrar el tipo de anestesia adecuada, y de cuidar el estado general del paciente durante la operación.</div></div>
      </div>
      <div>
        <div class="qa"><div class="qa-q">¿La anestesia tiene riesgos?</div><div class="qa-a">Todo tipo de anestesia implica riesgos de lesiones, secuelas tardías e incluso la muerte. Los riesgos se relacionan con el estado de salud, edad, tipo y complejidad de la cirugía, alergias u otros factores imprevisibles.</div></div>
        <div class="qa"><div class="qa-q">¿Qué factores son importantes antes de la anestesia?</div><div class="qa-a">Dificultades en anestesias previas, alergias medicamentosas, alteraciones de la coagulación, prótesis o marcapasos, enfermedades de tiroides, riñones, hígado, pulmones, corazón o cerebro.</div></div>
        <div class="qa"><div class="qa-q">¿Cómo prepararme para la anestesia?</div><div class="qa-a"><ul><li>Cumpliendo ayuno absoluto por el tiempo indicado (su incumplimiento suspende la cirugía automáticamente).</li><li>Siguiendo el tratamiento habitual de enfermedades previas, salvo indicación del médico tratante.</li><li>Suspendiendo el hábito de fumar el mayor tiempo posible antes de la cirugía.</li></ul></div></div>
      </div>
    </div>
    <div class="sec-hdr">ANESTESIA GENERAL — Descripción del Procedimiento</div>
    <div class="s">Administración de medicamentos por vía endovenosa inhalatoria hasta quedar totalmente dormido. Se introduce un tubo por la boca o nariz hasta la tráquea, conectándolo a una máquina respiratoria durante toda la cirugía. Al concluir se desconecta y retira el tubo hasta que el paciente respire con su propio esfuerzo.</div>
    <div class="sec-hdr">RIESGOS DE LA ANESTESIA GENERAL</div>
    <div class="s"><ul class="rl">
      <li>Podría lesionar alguna pieza dentaria.</li>
      <li>Podría producir irritación en las cuerdas vocales (disfonía).</li>
      <li>Podría pasar contenido gástrico a los pulmones, requiriendo recuperación en terapia intensiva.</li>
      <li>Podría presentar reacciones alérgicas inesperadas a los medicamentos utilizados.</li>
      <li>Náuseas y vómitos después de la cirugía. Inflamación y dolor de la vena utilizada.</li>
      <li>Arritmia cardiaca, infarto de miocardio, muerte (si existe riesgo cardiaco).</li>
    </ul></div>
    <div class="indiv">Habiendo leído este documento y comprendiendo el procedimiento anestésico y sus riesgos, habiendo aclarado mis dudas con el/la ${j(i)}, quien respondió a todas mis preguntas, yo ${j(r)}, representante legal de ${j(n)}, con CI ${j(l)}, de manera libre y voluntaria <strong>DOY MI CONSENTIMIENTO</strong> para que sea sometido a la <strong>ANESTESIA GENERAL.</strong></div>
  </div>
  <div class="bottom">
    <div class="sigs">
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${r}</strong><br/>C.I.: ${l}<br/>(Tutor / Representante legal)</div></div>
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${i}</strong><br/>(Firma del Anestesiólogo)</div></div>
    </div>
    <div class="date-row">Fecha: <strong>${d}</strong></div>
  </div>
</div>
<div class="bot"></div>
</body></html>`,v=window.open("","_blank","width=816,height=1056");v.document.write(m),v.document.close(),v.focus(),setTimeout(()=>{v.print()},500)}async function gd(e,t){const s=await Qa(Le),i=Pt(t==null?void 0:t.birthDate),n=oe(t==null?void 0:t.patientType),r=t!=null&&t.patientCode?`${n.label}-${t.patientCode}`:"",l=e.patientName||"",c=(t==null?void 0:t.idNumber)||"",d=(t==null?void 0:t.sex)==="masculino"?"Masculino":(t==null?void 0:t.sex)==="femenino"?"Femenino":"",h=(t==null?void 0:t.diagnosis)||e.surgeryType||"",j=t!=null&&t.birthDate?X(new Date(t.birthDate+"T12:00"),"dd/MM/yyyy"):"",m=e.date?X(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"",v=e.surgeryType||"",g=e.surgeon||"",f=i?Ot(i):"",x=e.peso?`${e.peso} kg`:"",y=X(new Date,"dd/MM/yyyy"),S=s?`<div style="background:#FFF;padding:5px 10px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:54px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:5px 10px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',u=["Edema","Hematoma","Sangrado","Fiebre","Vómitos / náuseas","Dehiscencia de sutura","Secreción en herida","Signos de infección","Diuresis presente","Llanto / irritabilidad"],N=["Alimentación","Tolerancia oral","Sueño","Estado general","Estado de la herida","Higiene bucal"],F=["Uso de coderas / contención de brazos","Higiene bucal con suero fisiológico","Alimentación con jeringa o cuchara","Evita biberón y chupete","Antibiótico administrado según indicación","Analgesia administrada según indicación","Curación de herida realizada","Reposo según indicación"],E=u.map(A=>`<div class="eval-row"><span class="eval-item">${A}</span><div class="eval-cell"><input type="checkbox"></div><div class="eval-cell"><input type="checkbox"></div></div>`).join(""),$=N.map(A=>`<div class="eval-row"><span class="eval-item">${A}</span><div class="eval-cell"><input type="checkbox"></div><div class="eval-cell"><input type="checkbox"></div></div>`).join(""),Q=F.map(A=>`<label class="ii"><input type="checkbox"> ${A}</label>`).join(""),q=[0,1,2,3,4,5,6,7,8,9,10].map(A=>`<div class="n" data-v="${A}" onclick="selDolor(${A})">${A}</div>`).join(""),L=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Control Post Operatorio — ${l}</title>
<style>
  @page{size:letter portrait;margin:0}
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{font-family:Arial,Helvetica,sans-serif;color:#000;font-size:9pt;background:#dde3ea}
  .toolbar{max-width:8.5in;margin:0 auto;display:flex;gap:10px;justify-content:flex-end;padding:6px 20px;background:#dde3ea}
  .toolbar button{background:#1F3A5F;color:#fff;border:none;padding:6px 18px;border-radius:4px;font-size:9.5pt;cursor:pointer;font-weight:bold}
  .hoja{width:8.5in;min-height:11in;margin:0 auto 16px;background:#fff}
  .hdr{background:#1F3A5F;padding:10px 22px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px;border-bottom:4px solid #4FC3C2;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .content{padding:5mm 11mm 6mm}
  .sec{margin-bottom:7px}
  .sec-hdr{font-size:8.5pt;font-weight:bold;color:#1F3A5F;background:linear-gradient(90deg,#EBF4FF,#F4F7FA);padding:3px 9px;border-left:4px solid #4FC3C2;margin-bottom:5px;text-transform:uppercase;letter-spacing:0.4px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .row{display:grid;gap:3px 10px;margin-bottom:4px}
  .r2{grid-template-columns:1fr 1fr}
  .r3{grid-template-columns:1fr 1fr 1fr}
  .r4{grid-template-columns:1fr 1fr 1fr 1fr}
  .fi{display:flex;align-items:baseline;gap:4px}
  .fi .lbl{font-weight:bold;white-space:nowrap;font-size:7.5pt;color:#3A4D62}
  .fi input{flex:1;border:none;border-bottom:1px dotted #AAB8C8;background:transparent;font-family:inherit;font-size:8.5pt;padding:1px 2px;outline:none;min-width:0}
  .fi input:focus{background:#fffae6}
  .mod-bar{display:flex;flex-wrap:wrap;gap:5px 16px;background:#F4F7FA;border:1px solid #D5DEE8;border-left:4px solid #4FC3C2;border-radius:0 4px 4px 0;padding:5px 9px;margin-bottom:6px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .mod-g{display:flex;align-items:center;gap:5px;flex-wrap:wrap}
  .mod-g .mlbl{font-weight:bold;color:#1F3A5F;font-size:8.5pt}
  .chi{display:inline-flex;align-items:center;gap:3px;font-size:8.5pt;cursor:pointer}
  .chi input[type=checkbox]{width:12px;height:12px;cursor:pointer;accent-color:#1F3A5F}
  .tv{width:100%;border-collapse:collapse;font-size:8.5pt}
  .tv th,.tv td{border:1px solid #C5D8EE;padding:3px 5px;text-align:center}
  .tv th{background:#1F3A5F;color:#fff;font-weight:bold;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .tv td{height:22px}
  .tv td input{width:100%;border:none;background:transparent;font-family:inherit;font-size:8.5pt;text-align:center;outline:none;padding:0}
  .tv td input:focus{background:#fffae6}
  .tv .u{font-weight:normal;font-size:7pt;color:rgba(255,255,255,0.85);display:block}
  .eval-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:3px}
  .eval-card{border:1px solid #D5DEE8;border-radius:4px;overflow:hidden}
  .eval-card-hdr{background:#2B5C8A;color:#fff;padding:3px 7px;font-size:7.5pt;font-weight:bold;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .eval-col-hdr{display:grid;grid-template-columns:1fr 40px 40px;padding:2px 7px;background:#E8F0F8;font-size:7pt;font-weight:bold;text-align:center;color:#1F3A5F;border-bottom:1px solid #D5DEE8;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .eval-col-hdr .lbl2{text-align:left}
  .eval-row{display:grid;grid-template-columns:1fr 40px 40px;align-items:center;padding:2px 7px;border-bottom:1px solid #EEF2F7}
  .eval-row:last-child{border-bottom:none}
  .eval-row:nth-child(even){background:#F8FAFC}
  .eval-cell{text-align:center}
  .eval-item{font-size:8pt;color:#1A2B42}
  .eval-cell input[type=checkbox]{width:12px;height:12px;cursor:pointer;accent-color:#1F3A5F}
  .dolor-wrap{background:linear-gradient(90deg,#EBF4FF,#F4F7FA);border:1px solid #C5D8EE;border-radius:4px;padding:4px 9px;margin-top:5px;display:flex;align-items:center;gap:10px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .eva{display:flex;flex:1;border:1px solid #C5D8EE;border-radius:3px;overflow:hidden}
  .eva .n{flex:1;text-align:center;padding:3px 0;border-right:1px solid #C5D8EE;font-size:8.5pt;font-weight:bold;cursor:pointer}
  .eva .n:last-child{border-right:none}
  .eva .n.sel0{background:#4ade80;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .eva .n.sel3{background:#facc15;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .eva .n.sel7{background:#f97316;color:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .eva .n.sel9{background:#ef4444;color:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .ind{display:grid;grid-template-columns:1fr 1fr;gap:3px 14px}
  .ii{display:inline-flex;align-items:center;gap:4px;font-size:8.5pt;cursor:pointer}
  .ii input[type=checkbox]{width:12px;height:12px;cursor:pointer;accent-color:#1F3A5F}
  .obs-input{display:block;width:100%;border:none;border-bottom:1px dotted #AAB8C8;background:transparent;font-family:inherit;font-size:8.5pt;padding:2px 2px 1px;outline:none;margin-bottom:4px}
  .obs-input:focus{background:#fffae6}
  .pc{background:linear-gradient(90deg,#EBF4FF,#F4F7FA);border:1px solid #D5DEE8;border-left:4px solid #1F3A5F;border-radius:0 4px 4px 0;padding:5px 12px;margin-top:6px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .fir{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:10px}
  .fbox{text-align:center;font-size:8.5pt}
  .stamp-box{border:1px dashed #8AAFC8;border-radius:6px;height:48px;display:flex;align-items:center;justify-content:center;color:#A0B8CC;font-size:8.5pt;letter-spacing:1px;margin-bottom:4px}
  .flin{border-top:1px solid #000;padding-top:2px;margin-top:3px}
  .fbox .flbl{font-weight:bold;display:block}
  .fbox .fsub{font-size:7pt;color:#666;margin-top:1px}
  .pie{margin-top:5px;padding-top:4px;border-top:1px solid #D5DEE8;display:flex;justify-content:space-between;font-size:7pt;color:#888}
  .bot{height:5px;background:#4FC3C2;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  @media print{
    html,body{background:#fff}
    .toolbar{display:none}
    .hoja{margin:0}
  }
</style>
<script>
function selDolor(n){
  document.querySelectorAll('.eva .n').forEach(function(el){el.className='n'});
  var el=document.querySelector('.eva .n[data-v="'+n+'"]');
  if(!el)return;
  if(n<=2)el.classList.add('sel0');
  else if(n<=6)el.classList.add('sel3');
  else if(n<=8)el.classList.add('sel7');
  else el.classList.add('sel9');
}
<\/script>
</head><body>
<div class="toolbar">
  <button onclick="window.print()">&#128424; Imprimir</button>
</div>
<div class="hoja">
<div class="hdr">
  ${S}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:.8">Centro Médico Quirúrgico</div>
    <div style="font-size:18px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:1px">MUNAY</div>
    <div style="font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-top:3px;background:rgba(255,255,255,0.15);padding:2px 12px;border-radius:3px;display:inline-block">CONTROL POSTOPERATORIO</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:10px;font-weight:600;opacity:.85;margin-bottom:3px">FLAP / FLP</div>
    <div style="font-size:8px;opacity:.75">${y}</div>
  </div>
</div>
<div class="content">

  <div class="sec">
    <div class="sec-hdr">Datos del Control</div>
    <div class="mod-bar">
      <div class="mod-g">
        <span class="mlbl">TIPO:</span>
        <label class="chi"><input type="checkbox"> 24 horas</label>
        <label class="chi"><input type="checkbox"> 7 días</label>
        <label class="chi"><input type="checkbox"> 30 días</label>
        <label class="chi"><input type="checkbox"> Otro:<input type="text" style="border:none;border-bottom:1px dotted #888;background:transparent;font-family:inherit;font-size:8.5pt;outline:none;min-width:40px;margin-left:3px"/></label>
      </div>
      <div class="mod-g" style="gap:12px">
        <div class="fi"><span class="lbl">Fecha:</span><input type="date" style="font-family:Arial;font-size:8.5pt;border:1px solid #C5D8EE;border-radius:3px;padding:2px 4px;outline:none;margin-left:3px"/></div>
        <div class="fi"><span class="lbl">Hora:</span><input type="time" style="font-family:Arial;font-size:8.5pt;border:1px solid #C5D8EE;border-radius:3px;padding:2px 4px;outline:none;margin-left:3px"/></div>
      </div>
    </div>
  </div>

  <div class="sec">
    <div class="sec-hdr">Identificación del Paciente</div>
    <div class="row r4">
      <div class="fi" style="grid-column:span 2"><span class="lbl">Nombre completo:</span><input value="${l}"/></div>
      <div class="fi"><span class="lbl">Edad:</span><input value="${f}"/></div>
      <div class="fi"><span class="lbl">F. Nacimiento:</span><input value="${j}"/></div>
    </div>
    <div class="row r4">
      <div class="fi"><span class="lbl">N° HC:</span><input value="${r}"/></div>
      <div class="fi"><span class="lbl">CI:</span><input value="${c}"/></div>
      <div class="fi"><span class="lbl">Sexo:</span><input value="${d}"/></div>
      <div class="fi"><span class="lbl">F. Cirugía:</span><input value="${m}"/></div>
    </div>
    <div class="row r3">
      <div class="fi"><span class="lbl">Diagnóstico:</span><input value="${h}"/></div>
      <div class="fi"><span class="lbl">Procedimiento:</span><input value="${v}"/></div>
      <div class="fi"><span class="lbl">Cirujano:</span><input value="${g}"/></div>
    </div>
  </div>

  <div class="sec">
    <div class="sec-hdr">Signos Vitales</div>
    <table class="tv"><thead><tr>
      <th>FC <span class="u">lpm</span></th>
      <th>FR <span class="u">rpm</span></th>
      <th>Temp <span class="u">°C</span></th>
      <th>SatO&#8322; <span class="u">%</span></th>
      <th>PA <span class="u">mmHg</span></th>
      <th>Peso <span class="u">kg</span></th>
    </tr></thead><tbody><tr>
      <td><input/></td><td><input/></td><td><input/></td><td><input/></td><td><input/></td>
      <td><input value="${x}"/></td>
    </tr></tbody></table>
  </div>

  <div class="sec">
    <div class="sec-hdr">Evaluación Clínica Postoperatoria</div>
    <div class="eval-grid">
      <div class="eval-card">
        <div class="eval-card-hdr">Signos y Síntomas</div>
        <div class="eval-col-hdr"><span class="lbl2">Parámetro</span><span>SÍ</span><span>NO</span></div>
        ${E}
      </div>
      <div class="eval-card">
        <div class="eval-card-hdr">Estado General</div>
        <div class="eval-col-hdr"><span class="lbl2">Parámetro</span><span>MAL</span><span>BIEN</span></div>
        ${$}
      </div>
    </div>
    <div class="dolor-wrap">
      <b style="color:#1F3A5F;white-space:nowrap;font-size:8.5pt">DOLOR (EVA):</b>
      <div class="eva">${q}</div>
      <span style="font-size:7.5pt;color:#5A6B82;white-space:nowrap">Wong-Baker</span>
    </div>
  </div>

  <div class="sec">
    <div class="sec-hdr">Cumplimiento de Indicaciones FLAP/FLP</div>
    <div class="ind">${Q}</div>
  </div>

  <div class="sec">
    <div class="sec-hdr">Observaciones Clínicas</div>
    <input class="obs-input" placeholder="Observaciones..."/>
    <input class="obs-input"/>
    <input class="obs-input"/>
  </div>

  <div class="sec">
    <div class="sec-hdr">Recomendaciones a la Madre / Cuidador</div>
    <input class="obs-input" placeholder="Recomendaciones..."/>
    <input class="obs-input"/>
    <input class="obs-input"/>
  </div>

  <div class="pc">
    <div class="fi"><span class="lbl" style="font-size:9pt;color:#1F3A5F">Próximo control:</span><input type="date" style="font-family:Arial;font-size:9pt;border:1px solid #C5D8EE;border-radius:3px;padding:2px 7px;outline:none;min-width:130px;margin-left:6px"/></div>
  </div>

  <div class="fir">
    <div class="fbox">
      <div class="stamp-box">SELLO</div>
      <div class="flin"><span class="flbl">Profesional Responsable</span><div class="fsub">Nombre, firma y matrícula profesional</div></div>
    </div>
    <div class="fbox">
      <div class="stamp-box">SELLO</div>
      <div class="flin"><span class="flbl">Sello Institucional</span><div class="fsub">Centro Médico Quirúrgico MUNAY</div></div>
    </div>
  </div>

  <div class="pie">
    <span>FLAP-PO-001 v.3.0 / 2026</span>
    <span>Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Control Postoperatorio FLAP/FLP</span>
  </div>

</div>
<div class="bot"></div>
</div>
</body></html>`,K=window.open("","_blank","width=820,height=1060");K.document.write(L),K.document.close(),K.focus()}async function fd(e,t){const s=await Qa(Le),i=Pt(t==null?void 0:t.birthDate),n=oe(t==null?void 0:t.patientType),r=t!=null&&t.patientCode?`${n.label}-${t.patientCode}`:"",l=e.patientName||"",c=(t==null?void 0:t.idNumber)||"",d=(t==null?void 0:t.sex)==="masculino"?"Masculino":(t==null?void 0:t.sex)==="femenino"?"Femenino":"",h=(t==null?void 0:t.birthDate)||"",j=i?Ot(i):"",m=e.peso?String(e.peso):"",v=(t==null?void 0:t.guardian)||"",g=(t==null?void 0:t.guardianPhone)||"",f=e.date||"",x=e.admissionTime||e.startTime||"",y=(t==null?void 0:t.diagnosis)||"",S=e.surgeryType||"",u=s?`<div style="background:#FFF;padding:5px 10px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:52px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:5px 10px;border-radius:5px;flex-shrink:0;"><span style="font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',N=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Epicrisis — ${l}</title>
<style>
  @page{size:letter portrait;margin:0}
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{font-family:Arial,Helvetica,sans-serif;color:#000;font-size:9.5pt;background:#e8e8e8}
  .hdr{background:#1F3A5F;padding:10px 22px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px;border-bottom:4px solid #4FC3C2}
  .toolbar{max-width:8.5in;margin:0 auto;display:flex;gap:10px;justify-content:flex-end;padding:7px 22px;background:#e8e8e8}
  .toolbar button{background:#1F3A5F;color:#fff;border:none;padding:6px 13px;border-radius:4px;font-size:9.5pt;cursor:pointer;font-weight:bold}
  .toolbar button.add{background:#2a8f3f}.toolbar button.sec{background:#666}
  .hoja{width:8.5in;margin:0 auto 16px;background:#fff;padding:0.22in 0.38in}
  .titulo{text-align:center;font-size:12pt;font-weight:bold;margin:6px 0;letter-spacing:1px;border-top:2px solid #1F3A5F;border-bottom:2px solid #1F3A5F;padding:4px 0;color:#1F3A5F}
  .bloque{border:1px solid #ccc;border-radius:4px;margin-bottom:5px;overflow:hidden}
  .bt{background:linear-gradient(90deg,#e8f4f4 0%,#f5f5f5 100%);padding:3px 8px;font-weight:bold;font-size:9pt;border-bottom:1px solid #ccc;border-left:4px solid #4FC3C2;text-transform:uppercase;color:#1F3A5F;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .bc{padding:4px 8px}
  .g2{display:grid;grid-template-columns:1fr 1fr;gap:2px 12px}
  .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px 12px}
  .g4{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:2px 12px}
  .f{display:flex;align-items:baseline;gap:4px;padding:2px 0}
  .f .lbl{font-weight:bold;white-space:nowrap;font-size:8.5pt;color:#333}
  .f input,.f select{flex:1;border:none;border-bottom:1px dotted #666;background:transparent;font-family:inherit;font-size:9.5pt;padding:1px 2px;outline:none;min-width:0}
  .f input:focus,.f select:focus,textarea:focus{background:#fffae6}
  .fv{display:flex;flex-direction:column;gap:1px;padding:2px 0}
  .fv .lbl{font-weight:bold;font-size:8.5pt;color:#333}
  .fv input{border:none;border-bottom:1px dotted #666;background:transparent;font-family:inherit;font-size:9.5pt;padding:1px 2px;outline:none;width:100%}
  .fv input:focus{background:#fffae6}
  textarea{width:100%;border:1px solid #bbb;background:transparent;font-family:inherit;font-size:9.5pt;line-height:1.4;padding:3px 5px;resize:vertical;outline:none;min-height:24px}
  table.med{width:100%;border-collapse:collapse;font-size:8.5pt}
  table.med th,table.med td{border:1px solid #000;padding:2px 4px;text-align:left;vertical-align:top}
  table.med th{background:linear-gradient(90deg,#e8f4f4,#f0f0f0);font-weight:bold;text-align:center;-webkit-print-color-adjust:exact;print-color-adjust:exact;color:#1F3A5F}
  table.med input{width:100%;border:none;background:transparent;font-family:inherit;font-size:8.5pt;outline:none;padding:1px}
  table.med input:focus{background:#fffae6}
  .chk-l{display:grid;grid-template-columns:1fr 1fr;gap:2px 14px}
  .chk-i{display:flex;align-items:center;gap:5px;font-size:9.5pt}
  .chk-i input[type="checkbox"]{width:12px;height:12px;margin:0}
  .firmas{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:16px}
  .firma{text-align:center;font-size:8.5pt}
  .firma .esp{height:38px}
  .firma .lin{border-top:1px solid #000;margin-bottom:3px}
  .firma .nom{font-weight:bold}
  .pie-v{text-align:center;font-size:7pt;color:#666;margin-top:8px;border-top:1px solid #ccc;padding-top:3px}
  .bot{height:5px;background:#4FC3C2}
  @media print{
    body{background:#fff}
    .toolbar{display:none}
    .hoja{margin:0;width:100%;padding:0.22in 0.38in}
    input,select,textarea{background:transparent!important}
    .bt{background:linear-gradient(90deg,#e8f4f4 0%,#f5f5f5 100%)!important}
    table.med th{background:linear-gradient(90deg,#e8f4f4,#f0f0f0)!important}
  }
</style></head><body>
<div class="hdr">
  ${u}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;opacity:.85">Centro Médico Quirúrgico</div>
    <div style="font-size:22px;font-weight:900;letter-spacing:5px;color:#4FC3C2;margin-top:2px">MUNAY</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:13px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase">Epicrisis</div>
    <div style="font-size:9px;opacity:.9;margin-top:2px">Departamento Médico Quirúrgico</div>
  </div>
</div>
<div class="toolbar">
  <button onclick="window.print()">Imprimir</button>
  <button class="add" onclick="agregarMedicamento()">+ Medicamento</button>
  <button class="sec" onclick="limpiarFormulario()">Limpiar</button>
</div>
<div class="hoja">
  <div class="titulo">EPICRISIS DE EGRESO HOSPITALARIO</div>

  <div class="bloque">
    <div class="bt">1. Datos del paciente</div>
    <div class="bc">
      <div class="g2">
        <div class="f"><span class="lbl">Apellidos y nombres:</span><input value="${l}"/></div>
        <div class="f"><span class="lbl">N° HC:</span><input value="${r}"/></div>
      </div>
      <div class="g4">
        <div class="f"><span class="lbl">CI:</span><input value="${c}"/></div>
        <div class="f"><span class="lbl">Sexo:</span><select><option value=""></option><option ${d==="Masculino"?"selected":""}>Masculino</option><option ${d==="Femenino"?"selected":""}>Femenino</option></select></div>
        <div class="f"><span class="lbl">Fecha nac.:</span><input type="date" value="${h}"/></div>
        <div class="f"><span class="lbl">Edad:</span><input value="${j}"/></div>
      </div>
      <div class="g3">
        <div class="f"><span class="lbl">Peso (kg):</span><input value="${m}"/></div>
        <div class="f"><span class="lbl">Procedencia:</span><input placeholder="Ciudad / Comunidad"/></div>
        <div class="f"><span class="lbl">Idioma:</span><input placeholder="Español / Aymara / Quechua"/></div>
      </div>
      <div class="g2">
        <div class="f"><span class="lbl">Responsable legal:</span><input value="${v}"/></div>
        <div class="f"><span class="lbl">Teléfono contacto:</span><input type="tel" value="${g}"/></div>
      </div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">2. Datos de internación</div>
    <div class="bc">
      <div class="g2">
        <div class="f"><span class="lbl">Fecha ingreso:</span><input type="date" id="fecha_ingreso" value="${f}"/></div>
        <div class="f"><span class="lbl">Hora ingreso:</span><input type="time" value="${x}"/></div>
        <div class="f"><span class="lbl">Fecha egreso:</span><input type="date" id="fecha_egreso"/></div>
        <div class="f"><span class="lbl">Hora egreso:</span><input type="time"/></div>
      </div>
      <div class="g2">
        <div class="f"><span class="lbl">Días de estancia:</span><input id="dias_estancia"/></div>
        <div class="f"><span class="lbl">Tipo de egreso:</span><select><option value=""></option><option>Mejoría</option><option>Alta médica</option><option>Solicitud familiar</option><option>Referencia</option></select></div>
      </div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">3. Diagnósticos</div>
    <div class="bc">
      <div class="fv">
        <span class="lbl">Diagnóstico pre-quirúrgico (CIE-10):</span>
        <input value="${y}" placeholder="Ej: Q37.5 - Fisura labial bilateral con fisura palatina"/>
      </div>
      <div class="fv">
        <span class="lbl">Diagnóstico post-quirúrgico (CIE-10):</span>
        <input/>
      </div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">4. Procedimiento quirúrgico</div>
    <div class="bc">
      <div class="fv">
        <span class="lbl">Cirugía realizada:</span>
        <input value="${S}"/>
      </div>
      <div class="g3">
        <div class="f"><span class="lbl">Tipo de anestesia:</span><select><option value=""></option><option>General</option><option>Local</option><option>Local + sedación</option><option>Regional</option></select></div>
        <div class="f"><span class="lbl">Duración (min):</span><input/></div>
        <div class="f"><span class="lbl">Sangrado:</span><select><option value=""></option><option>Mínimo</option><option>Moderado</option><option>Abundante</option></select></div>
      </div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">5. Tratamiento al alta — Medicamentos</div>
    <div class="bc">
      <table class="med" id="tabla_med">
        <thead><tr>
          <th style="width:22%">Fármaco</th>
          <th style="width:14%">Presentación</th>
          <th style="width:12%">Dosis (mg/kg/día)</th>
          <th style="width:12%">Dosis indicada</th>
          <th style="width:10%">Vía</th>
          <th style="width:12%">Frecuencia</th>
          <th style="width:10%">Duración</th>
          <th style="width:8%">Final</th>
        </tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">6. Indicaciones al alta</div>
    <div class="bc">
      <div class="fv"><span class="lbl">Alimentación:</span><textarea rows="2" placeholder="Tipo de dieta, consistencia, duración."></textarea></div>
      <div class="fv"><span class="lbl">Higiene oral y de herida:</span><textarea rows="2"></textarea></div>
      <div class="fv"><span class="lbl">Cuidados generales:</span><textarea rows="2"></textarea></div>
      <div class="fv"><span class="lbl">Reposo / Actividad:</span><textarea rows="1"></textarea></div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">7. Signos de alarma — Acudir inmediatamente</div>
    <div class="bc">
      <div class="chk-l">
        <label class="chk-i"><input type="checkbox" checked> Fiebre que no calma con medicamentos (&gt;38.5°C)</label>
        <label class="chk-i"><input type="checkbox" checked> Sangrado abundante o persistente</label>
        <label class="chk-i"><input type="checkbox" checked> Hematoma en la región de la herida</label>
        <label class="chk-i"><input type="checkbox" checked> Dehiscencia (apertura) de la herida</label>
        <label class="chk-i"><input type="checkbox" checked> Secreción purulenta o mal olor</label>
        <label class="chk-i"><input type="checkbox" checked> Dificultad respiratoria</label>
        <label class="chk-i"><input type="checkbox" checked> Rechazo total de alimentos o líquidos</label>
        <label class="chk-i"><input type="checkbox" checked> Vómitos persistentes</label>
      </div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">8. Cita de control</div>
    <div class="bc">
      <div class="g3">
        <div class="f"><span class="lbl">Fecha:</span><input type="date"/></div>
        <div class="f"><span class="lbl">Hora:</span><input type="time"/></div>
        <div class="f"><span class="lbl">Especialidad:</span><input/></div>
      </div>
    </div>
  </div>

  <div class="firmas">
    <div class="firma"><div class="esp"></div><div class="lin"></div><div class="nom">Enfermera responsable del egreso</div><div>Firma y sello</div></div>
    <div class="firma"><div class="esp"></div><div class="lin"></div><div class="nom">Médico cirujano tratante</div><div>Firma y sello</div></div>
  </div>

  <div class="pie-v">Epicrisis v2026.1 — Centro Médico Quirúrgico MUNAY · La Paz, Bolivia — Documento clínico oficial</div>
</div>
<div class="bot"></div>
<script>
  function crearFila() {
    return '<tr><td><input type="text"/></td><td><input type="text" placeholder="ej: 500mg"/></td><td><input type="text"/></td><td><input type="text" placeholder="ej: 3 ml"/></td><td><input type="text" placeholder="VO/IM/EV"/></td><td><input type="text" placeholder="c/8h"/></td><td><input type="text" placeholder="7 dias"/></td><td><input type="date"/></td></tr>';
  }
  function agregarMedicamento() {
    document.querySelector('#tabla_med tbody').insertAdjacentHTML('beforeend', crearFila());
  }
  function limpiarFormulario() {
    if (!confirm('Limpiar todos los campos?')) return;
    document.querySelectorAll('input[type="text"],input[type="tel"],input[type="date"],input[type="time"],textarea,select').forEach(function(el){el.value='';});
    document.querySelectorAll('input[type="checkbox"]').forEach(function(c){c.checked=false;});
  }
  function calcularDias() {
    var i=document.getElementById('fecha_ingreso').value, e=document.getElementById('fecha_egreso').value;
    if(i&&e){var d=(new Date(e)-new Date(i))/86400000;if(d>=0)document.getElementById('dias_estancia').value=d;}
  }
  document.getElementById('fecha_ingreso').addEventListener('change',calcularDias);
  document.getElementById('fecha_egreso').addEventListener('change',calcularDias);
  for(var i=0;i<3;i++) agregarMedicamento();
<\/script>
</body></html>`,F=window.open("","_blank","width=980,height=900");F.document.write(N),F.document.close(),F.focus()}const bd=[{id:"info",label:"Información",icon:qa,adminOnly:!1},{id:"financiero",label:"Financiero",icon:us,adminOnly:!0},{id:"historial",label:"Historial",icon:_n,adminOnly:!1}];function vd({surgery:e,onEdit:t,onClose:s,onCancelSurgery:i,onSuspendSurgery:n,isAdmin:r,canEdit:l}){const[c,d]=w.useState("info"),[h,j]=w.useState(!1),[m,v]=w.useState(!1),[g,f]=w.useState("suspendido"),[x,y]=w.useState(""),[S,u]=w.useState((e==null?void 0:e.date)??""),[N,F]=w.useState((e==null?void 0:e.startTime)??""),[E,$]=w.useState(!1),{patients:Q,surgeries:q,therapies:L}=ye(),{user:K}=Ee();if(!e)return null;const A=bd.filter(C=>!C.adminOnly||r),k=Q.find(C=>C.id===e.patientId),R=Pt(k==null?void 0:k.birthDate),H=gn(e,k),J=e.date?X(new Date(e.date+"T12:00"),"EEEE d 'de' MMMM yyyy",{locale:ke}):"—",U=Math.max(0,Number(e.quotation||0)-Number(e.amountPaid||0)),W=e.status==="cancelado",re=q.filter(C=>C.patientId===e.patientId&&C.id!==e.id).sort((C,T)=>T.date.localeCompare(C.date)),Z=L.filter(C=>C.patientId===e.patientId).sort((C,T)=>T.date.localeCompare(C.date));return a.jsxs("div",{className:"flex flex-col relative",style:{maxHeight:"85vh"},children:[a.jsxs("div",{className:"px-6 pt-5 pb-4 border-b border-gray-100",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h2",{className:"text-xl font-extrabold text-hm-primary truncate",children:e.patientName}),a.jsxs("p",{className:"text-sm text-gray-500 mt-0.5 capitalize",children:[e.surgeryType," · ",J]})]}),a.jsx("button",{onClick:s,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:a.jsx(Ne,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[a.jsx(yd,{status:e.status}),e.paymentComplete&&a.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200",children:[a.jsx(ya,{className:"w-3 h-3"})," Completado"]}),e.surgeryType&&a.jsx("span",{className:"inline-flex px-3 py-0.5 rounded-full text-xs font-bold bg-pink-100 text-pink-800 border border-pink-200",children:e.surgeryType}),(()=>{const C=oe(e.patientType);return a.jsxs("span",{className:"inline-flex px-3 py-0.5 rounded-full text-xs font-bold border",style:{backgroundColor:C.lightBg,color:C.textColor,borderColor:C.border},children:[C.label," · ",C.longLabel]})})()]}),a.jsx("div",{className:"flex gap-0 mt-4 border-b border-gray-100 -mb-px",children:A.map(({id:C,label:T,icon:I})=>a.jsxs("button",{onClick:()=>d(C),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${c===C?"border-hm-tertiary text-hm-primary":"border-transparent text-gray-400 hover:text-hm-primary"}`,children:[a.jsx(I,{className:"w-4 h-4"}),T]},C))})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[c==="info"&&a.jsxs("div",{className:"space-y-5",children:[a.jsxs("section",{children:[a.jsx(yi,{icon:qa,label:"Datos del paciente"}),a.jsxs("div",{className:"border border-gray-100 rounded-xl overflow-hidden",children:[a.jsx(Ce,{label:"Nombre completo",value:e.patientName??"—"}),a.jsx(Ce,{label:"Edad / Peso / Talla",value:[R?Ot(R):null,e.peso?`${e.peso} kg`:null,e.talla?`${e.talla} cm`:null].filter(Boolean).join(" · ")||"—"}),a.jsx(Ce,{label:"Diagnóstico",value:(k==null?void 0:k.diagnosis)??e.patientName??"—"}),a.jsx(Ce,{label:"Tipo de cirugía",value:e.surgeryType??"—"}),a.jsx(Ce,{label:"Hora de inicio",value:e.startTime??"—"}),e.admissionTime&&a.jsx(Ce,{label:"Hora de internación",value:e.admissionTime}),(e.fastingTime||e.fastingHours)&&a.jsx(Ce,{label:"Hora de ayuno",value:e.fastingTime||`${e.fastingHours} horas`}),a.jsx(Ce,{label:"Carnet de identidad",value:(k==null?void 0:k.idNumber)||"—"}),(k==null?void 0:k.allergies)&&a.jsx(Ce,{label:"Alergias / Med.",value:k.allergies}),(k==null?void 0:k.guardian)&&a.jsx(Ce,{label:"Responsable",value:`${k.guardian}${k.guardianPhone?` — ${k.guardianPhone}`:""}`}),e.notes&&a.jsxs("div",{className:"px-4 py-3 bg-gray-50",children:[a.jsx("p",{className:"text-xs text-gray-400 mb-1",children:"Notas clínicas"}),a.jsx("p",{className:"text-sm text-gray-700",children:e.notes})]})]})]}),a.jsxs("section",{children:[a.jsx(yi,{icon:va,label:"Equipo quirúrgico"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[a.jsx(Gt,{role:"Cirujano principal",name:e.surgeon}),a.jsx(Gt,{role:"Anestesiólogo",name:e.anesthesiologist}),a.jsx(Gt,{role:"Instrumentadora",name:e.scrubNurse})]})]})]}),c==="financiero"&&a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[a.jsx(Qt,{label:"Cotización",value:nt(e.quotation),color:"primary"}),a.jsx(Qt,{label:"Pagado",value:nt(e.amountPaid),color:"green"}),a.jsx(Qt,{label:"Pendiente",value:U>0?nt(U):"—",color:U>0?"red":"gray"})]}),a.jsxs("div",{className:"border border-gray-100 rounded-xl overflow-hidden",children:[a.jsx(Ce,{label:"Estado de pago",value:e.paymentComplete?a.jsxs("span",{className:"flex items-center gap-1 text-green-700 font-bold",children:[a.jsx(ya,{className:"w-4 h-4"}),"Pago completo"]}):a.jsxs("span",{className:"flex items-center gap-1 text-red-500 font-bold",children:[a.jsx(vt,{className:"w-4 h-4"}),"Pendiente de pago"]})}),a.jsx(Ce,{label:"Ayuda social",value:e.socialAid?a.jsx("span",{className:"text-purple-700 font-bold",children:e.socialAidAmount?nt(e.socialAidAmount):"Sí"}):"No"}),e.adminNotes&&a.jsx(Ce,{label:"Observaciones",value:e.adminNotes})]})]}),c==="historial"&&a.jsxs("div",{className:"space-y-5",children:[a.jsxs("section",{children:[a.jsxs("p",{className:"text-xs font-bold text-hm-primary uppercase mb-2",children:["Cirugías anteriores (",re.length,")"]}),re.length===0?a.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin cirugías previas registradas."}):a.jsx("ul",{className:"space-y-2",children:re.map(C=>a.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-hm-primary",children:C.surgeryType}),a.jsxs("p",{className:"text-xs text-gray-500",children:[X(new Date(C.date+"T12:00"),"d MMM yyyy",{locale:ke})," · ",C.startTime," · ",C.surgeon||"—"]})]}),a.jsx(Ye,{variant:C.status})]},C.id))})]}),a.jsxs("section",{children:[a.jsxs("p",{className:"text-xs font-bold text-hm-primary uppercase mb-2",children:["Terapias (",Z.length,")"]}),Z.length===0?a.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin terapias registradas."}):a.jsx("ul",{className:"space-y-2",children:Z.map(C=>a.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-hm-primary",children:C.therapyType}),a.jsxs("p",{className:"text-xs text-gray-500",children:[X(new Date(C.date+"T12:00"),"d MMM yyyy",{locale:ke})," · ",C.startTime," · ",C.therapist||"—"]})]}),a.jsx(Ye,{variant:C.status??"programado"})]},C.id))})]})]})]}),a.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex flex-wrap gap-2 items-center",children:[a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsxs("button",{onClick:()=>j(!0),className:"btn btn-sm border border-gray-200 text-gray-600 hover:bg-gray-50 gap-1.5",children:[a.jsx(fa,{className:"w-4 h-4"}),"Imprimir"]}),a.jsxs("button",{onClick:()=>xd(e,k),className:"btn btn-sm border border-teal-200 text-teal-700 hover:bg-teal-50 gap-1.5",children:[a.jsx(Je,{className:"w-4 h-4"}),"Consentimiento"]}),a.jsxs("button",{onClick:()=>hd(e,k),className:"btn btn-sm border border-purple-200 text-purple-700 hover:bg-purple-50 gap-1.5",children:[a.jsx(Je,{className:"w-4 h-4"}),"Anestesia"]}),a.jsxs("button",{onClick:()=>gd(e,k),className:"btn btn-sm border border-sky-200 text-sky-700 hover:bg-sky-50 gap-1.5",children:[a.jsx(Je,{className:"w-4 h-4"}),"Post-Op"]}),a.jsxs("button",{onClick:()=>{fd(e,k),ft({patientId:e.patientId,documentType:"epicrisis",specialty:"Cirugía",clinicalData:{paciente:k==null?void 0:k.name,cirugia:e.surgeryType,fecha:e.date,cirujano:e.surgeon,diagnostico:k==null?void 0:k.diagnosis,alergias:k==null?void 0:k.allergies,anestesia:e.anesthesia,duracion:e.duration,hallazgos:e.findings,procedimiento:e.procedure,complicaciones:e.complications,indicaciones:e.postOpInstructions,status:e.status},user:K})},className:"btn btn-sm border border-emerald-200 text-emerald-700 hover:bg-emerald-50 gap-1.5",children:[a.jsx(Je,{className:"w-4 h-4"}),"Epicrisis"]}),a.jsxs("button",{onClick:()=>{ud(e,k),ft({patientId:e.patientId,documentType:"historia_quirurgica",specialty:"Cirugía",clinicalData:{paciente:k==null?void 0:k.name,fechaNac:k==null?void 0:k.birthDate,ci:k==null?void 0:k.idNumber,diagnostico:k==null?void 0:k.diagnosis,alergias:k==null?void 0:k.allergies,cirugia:e.surgeryType,fecha:e.date,cirujano:e.surgeon,anestesia:e.anesthesia,duracion:e.duration,hallazgos:e.findings,procedimiento:e.procedure,complicaciones:e.complications,status:e.status},user:K})},className:"btn btn-sm border border-indigo-200 text-indigo-700 hover:bg-indigo-50 gap-1.5",children:[a.jsx(pt,{className:"w-4 h-4"}),"Hist. Clínica Qx"]}),r&&!W&&e.status!=="suspendido"&&a.jsxs("button",{onClick:()=>{v(!0),y(""),f("suspendido"),u(e.date??""),F(e.startTime??"")},className:"btn btn-sm text-amber-700 border border-amber-300 hover:bg-amber-50 gap-1.5",children:[a.jsx(qt,{className:"w-4 h-4"}),"Suspender / Reprogramar"]}),r&&e.status==="suspendido"&&a.jsxs("button",{onClick:()=>{v(!0),y(""),f("reprogramar"),u(e.date??""),F(e.startTime??"")},className:"btn btn-sm text-blue-700 border border-blue-300 hover:bg-blue-50 gap-1.5",children:[a.jsx(Os,{className:"w-4 h-4"}),"Reprogramar"]}),r&&!W&&a.jsxs("button",{onClick:i,className:"btn btn-sm text-red-600 border border-red-200 hover:bg-red-50 gap-1.5",children:[a.jsx(_a,{className:"w-4 h-4"}),"Cancelar"]})]}),a.jsxs("div",{className:"flex gap-2 ml-auto",children:[a.jsx("button",{onClick:s,className:"btn-secondary btn btn-sm",children:"Cerrar"}),l&&a.jsxs("button",{onClick:t,className:"btn-primary btn btn-sm",children:[a.jsx(ja,{className:"w-4 h-4"})," Editar"]})]})]}),h&&a.jsxs("div",{className:"absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden",children:[a.jsxs("div",{className:"px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(fa,{className:"w-4 h-4 text-hm-primary"}),a.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Vista previa de impresión"})]}),a.jsx("button",{onClick:()=>j(!1),className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:a.jsx(Ne,{className:"w-5 h-5"})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto flex items-center justify-center p-5",style:{backgroundColor:"#c8d0da"},children:a.jsxs("div",{style:{width:"100%",maxWidth:580,fontFamily:"Arial, sans-serif",boxShadow:"0 6px 24px rgba(0,0,0,0.3)"},children:[a.jsxs("div",{style:{backgroundColor:"white",borderBottom:"2px dashed #b0bec5"},children:[a.jsxs("div",{style:{backgroundColor:"#1F3A5F",padding:"12px 20px",display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:14,borderBottom:"4px solid #4FC3C2"},children:[a.jsx("div",{style:{backgroundColor:"#FFFFFF",padding:"5px 10px",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",minHeight:62,flexShrink:0},children:a.jsx("img",{src:Le,alt:"Logo",style:{width:54,height:54,objectFit:"contain"}})}),a.jsxs("div",{style:{textAlign:"center",color:"#FFFFFF"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",opacity:.85},children:"Centro Médico Quirúrgico"}),a.jsx("div",{style:{fontSize:20,fontWeight:900,letterSpacing:"4px",color:"#4FC3C2",marginTop:2},children:"MUNAY"})]}),a.jsxs("div",{style:{textAlign:"right",color:"#FFFFFF"},children:[a.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"Programación Quirúrgica"}),a.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.85)",marginTop:2},children:X(new Date,"dd/MM/yyyy HH:mm")})]})]}),a.jsxs("div",{style:{padding:"12px 20px 8px",display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:12},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:19,fontWeight:700,color:"#1F3A5F",letterSpacing:"-0.3px",lineHeight:1.1},children:e.patientName??"—"}),a.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#3DA8A7",letterSpacing:"0.5px",marginTop:4,textTransform:"uppercase"},children:e.surgeryType??"—"})]}),a.jsxs("svg",{style:{width:60,height:60,flexShrink:0},viewBox:"0 0 80 80",children:[a.jsx("circle",{cx:"40",cy:"32",r:"18",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.8"}),a.jsx("path",{d:"M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z",fill:"#3D7AAB",stroke:"#1F3A5F",strokeWidth:"1.2"}),a.jsx("path",{d:"M 32 32 Q 34 30 36 32",stroke:"#1A2B42",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),a.jsx("path",{d:"M 44 32 Q 46 30 48 32",stroke:"#1A2B42",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),a.jsx("circle",{cx:"28",cy:"36",r:"2",fill:"#F5B5C8",opacity:"0.7"}),a.jsx("circle",{cx:"52",cy:"36",r:"2",fill:"#F5B5C8",opacity:"0.7"}),a.jsx("path",{d:"M 36 38 Q 40 41 44 38",stroke:"#1A2B42",strokeWidth:"1.3",fill:"none",strokeLinecap:"round"}),a.jsx("path",{d:"M 25 50 Q 25 65 40 65 Q 55 65 55 50",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.8"}),a.jsx("ellipse",{cx:"22",cy:"52",rx:"4",ry:"6",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.5",transform:"rotate(-20 22 52)"}),a.jsx("ellipse",{cx:"58",cy:"52",rx:"4",ry:"6",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.5",transform:"rotate(20 58 52)"}),a.jsx("path",{d:"M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z",fill:"#3D7AAB"})]})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"0 20px 16px"},children:[{fields:H.left,icons:['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>']},{fields:H.right,icons:['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>']}].map(({fields:C,icons:T},I)=>a.jsx("div",{style:{border:"1px solid #D5DEE8",borderRadius:4,overflow:"hidden"},children:C.map(({label:V,value:ae},ce)=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"44px 1fr 1fr",alignItems:"center",padding:"7px 12px 7px 8px",borderBottom:"1px solid #E5EBF2",backgroundColor:ce%2===1?"#F4F7FA":"#FFFFFF"},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:"#2B5C8A",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 1px 3px rgba(43,92,138,0.25)"},children:a.jsx("svg",{viewBox:"0 0 24 24",style:{width:13,height:13,stroke:"#FFFFFF",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},dangerouslySetInnerHTML:{__html:T[ce]}})}),a.jsx("span",{style:{fontSize:10,color:"#5A6B82",fontWeight:500,paddingLeft:3},children:V}),a.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#1A2B42",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ae})]},V))},I))}),a.jsx("div",{style:{height:5,backgroundColor:"#4FC3C2"}})]}),a.jsxs("div",{style:{backgroundColor:"white"},children:[a.jsxs("div",{style:{backgroundColor:"#1F3A5F",padding:"12px 20px",display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:14,borderBottom:"4px solid #4FC3C2"},children:[a.jsx("div",{style:{backgroundColor:"#FFFFFF",padding:"5px 10px",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",minHeight:62,flexShrink:0},children:a.jsx("img",{src:Le,alt:"Logo",style:{width:54,height:54,objectFit:"contain"}})}),a.jsxs("div",{style:{textAlign:"center",color:"#FFFFFF"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",opacity:.85},children:"Centro Médico Quirúrgico"}),a.jsx("div",{style:{fontSize:20,fontWeight:900,letterSpacing:"4px",color:"#4FC3C2",marginTop:2},children:"MUNAY"})]}),a.jsxs("div",{style:{textAlign:"right",color:"#FFFFFF"},children:[a.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"Orden de Internación"}),a.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.85)",marginTop:2},children:X(new Date,"dd/MM/yyyy HH:mm")})]})]}),a.jsxs("div",{style:{padding:"12px 20px 8px",display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:12},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:19,fontWeight:700,color:"#1F3A5F",letterSpacing:"-0.3px",lineHeight:1.1},children:e.patientName??"—"}),a.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#3DA8A7",letterSpacing:"0.5px",marginTop:4,textTransform:"uppercase"},children:e.surgeryType??"—"})]}),a.jsxs("svg",{style:{width:58,height:58,flexShrink:0},viewBox:"0 0 80 80",children:[a.jsx("circle",{cx:"20",cy:"22",r:"10",fill:"#C9A57B"}),a.jsx("circle",{cx:"60",cy:"22",r:"10",fill:"#C9A57B"}),a.jsx("circle",{cx:"20",cy:"22",r:"6",fill:"#E8C9A8"}),a.jsx("circle",{cx:"60",cy:"22",r:"6",fill:"#E8C9A8"}),a.jsx("ellipse",{cx:"40",cy:"38",rx:"22",ry:"20",fill:"#D4B088"}),a.jsx("ellipse",{cx:"40",cy:"44",rx:"12",ry:"10",fill:"#F0DAB8"}),a.jsx("rect",{x:"22",y:"55",width:"36",height:"18",rx:"3",fill:"#A8C5E8"}),a.jsx("path",{d:"M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z",fill:"#FFFFFF"}),a.jsx("ellipse",{cx:"32",cy:"36",rx:"2.5",ry:"3",fill:"#2A2A3E"}),a.jsx("ellipse",{cx:"48",cy:"36",rx:"2.5",ry:"3",fill:"#2A2A3E"}),a.jsx("circle",{cx:"32.8",cy:"35",r:"0.8",fill:"#FFFFFF"}),a.jsx("circle",{cx:"48.8",cy:"35",r:"0.8",fill:"#FFFFFF"}),a.jsx("ellipse",{cx:"40",cy:"42",rx:"2.5",ry:"2",fill:"#2A2A3E"}),a.jsx("path",{d:"M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47",stroke:"#2A2A3E",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),a.jsx("circle",{cx:"25",cy:"42",r:"2.5",fill:"#F5B5C8",opacity:"0.6"}),a.jsx("circle",{cx:"55",cy:"42",r:"2.5",fill:"#F5B5C8",opacity:"0.6"})]})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"0 20px 16px"},children:[{fields:H.left,icons:['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>']},{fields:H.right,icons:['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>']}].map(({fields:C,icons:T},I)=>a.jsx("div",{style:{border:"1px solid #D5DEE8",borderRadius:4,overflow:"hidden"},children:C.map(({label:V,value:ae},ce)=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"44px 1fr 1fr",alignItems:"center",padding:"7px 12px 7px 8px",borderBottom:"1px solid #E5EBF2",backgroundColor:ce%2===1?"#F4F7FA":"#FFFFFF"},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:"#2B5C8A",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 1px 3px rgba(43,92,138,0.25)"},children:a.jsx("svg",{viewBox:"0 0 24 24",style:{width:13,height:13,stroke:"#FFFFFF",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},dangerouslySetInnerHTML:{__html:T[ce]}})}),a.jsx("span",{style:{fontSize:10,color:"#5A6B82",fontWeight:500,paddingLeft:3},children:V}),a.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#1A2B42",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ae})]},V))},I))}),a.jsx("div",{style:{height:5,backgroundColor:"#4FC3C2"}})]})]})}),a.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0",children:[a.jsx("button",{onClick:()=>j(!1),className:"btn-secondary btn btn-sm",children:"Cancelar"}),a.jsxs("button",{onClick:()=>{j(!1),md(e,k)},className:"btn-primary btn btn-sm",children:[a.jsx(fa,{className:"w-4 h-4"})," Imprimir"]})]})]}),m&&a.jsxs("div",{className:"absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden",children:[a.jsxs("div",{className:"px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(qt,{className:"w-4 h-4 text-amber-600"}),a.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Suspender / Reprogramar cirugía"})]}),a.jsx("button",{onClick:()=>v(!1),className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:a.jsx(Ne,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-5",children:[a.jsxs("div",{children:[a.jsx("p",{className:"label mb-2",children:"Acción"}),a.jsxs("div",{className:"flex gap-4",children:[a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700",children:[a.jsx("input",{type:"radio",className:"accent-amber-500",checked:g==="suspendido",onChange:()=>f("suspendido")}),a.jsx("span",{children:"Suspender (sin nueva fecha)"})]}),a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700",children:[a.jsx("input",{type:"radio",className:"accent-hm-primary",checked:g==="reprogramar",onChange:()=>f("reprogramar")}),a.jsx("span",{children:"Reprogramar a nueva fecha"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Justificación / Motivo *"}),a.jsx("textarea",{rows:3,className:"input resize-none",placeholder:"Indique el motivo de la suspensión o reprogramación...",value:x,onChange:C=>y(C.target.value)})]}),g==="reprogramar"&&a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Nueva fecha *"}),a.jsx("input",{type:"date",className:"input",value:S,onChange:C=>u(C.target.value)})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Nueva hora de inicio *"}),a.jsx("input",{type:"time",className:"input",value:N,onChange:C=>F(C.target.value)})]})]})]}),a.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0",children:[a.jsx("button",{onClick:()=>v(!1),className:"btn-secondary btn btn-sm",children:"Cancelar"}),a.jsx("button",{disabled:E||!x.trim()||g==="reprogramar"&&(!S||!N),onClick:async()=>{$(!0);const C=g==="reprogramar"?{status:"programado",date:S,startTime:N,suspendReason:x.trim(),suspendDate:X(new Date,"yyyy-MM-dd")}:{status:"suspendido",suspendReason:x.trim(),suspendDate:X(new Date,"yyyy-MM-dd")};try{await n(e.id,C),v(!1)}finally{$(!1)}},className:`btn btn-sm text-white gap-1.5 ${g==="reprogramar"?"btn-primary":"bg-amber-600 hover:bg-amber-700"}`,children:E?a.jsx(Ge,{className:"w-4 h-4 animate-spin"}):g==="reprogramar"?a.jsxs(a.Fragment,{children:[a.jsx(Os,{className:"w-4 h-4"})," Reprogramar"]}):a.jsxs(a.Fragment,{children:[a.jsx(qt,{className:"w-4 h-4"})," Suspender"]})})]})]})]})}function yd({status:e}){const t={programado:"bg-hm-secondary-100 text-hm-primary border-hm-secondary-200",confirmado:"bg-blue-100 text-blue-800 border-blue-200",realizado:"bg-green-100 text-green-800 border-green-200",cancelado:"bg-red-100 text-red-700 border-red-200",suspendido:"bg-amber-100 text-amber-800 border-amber-200"},s={programado:"Programada",confirmado:"Confirmada",realizado:"Realizada",cancelado:"Cancelada",suspendido:"Suspendida"};return a.jsxs("span",{className:`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold border ${t[e]??"bg-gray-100 text-gray-700 border-gray-200"}`,children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-current inline-block opacity-60"}),s[e]??e]})}function yi({icon:e,label:t}){return a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx("div",{className:"w-7 h-7 rounded-lg flex items-center justify-center",style:{backgroundColor:"rgba(26,54,93,0.08)"},children:a.jsx(e,{className:"w-4 h-4 text-hm-primary"})}),a.jsx("p",{className:"text-sm font-bold text-hm-primary",children:t})]})}function Ce({label:e,value:t}){return a.jsxs("div",{className:"flex items-start justify-between px-4 py-3 border-b border-gray-50 last:border-b-0",children:[a.jsx("span",{className:"text-sm text-gray-400 shrink-0 w-40",children:e}),a.jsx("span",{className:"text-sm font-semibold text-hm-primary text-right flex-1 ml-4",children:t??"—"})]})}function Gt({role:e,name:t}){return a.jsxs("div",{className:"border border-gray-100 rounded-xl p-3 bg-gray-50",children:[a.jsx("p",{className:"text-xs text-gray-400 mb-1",children:e}),a.jsx("p",{className:"text-sm font-bold text-hm-primary",children:t||"—"})]})}function Qt({label:e,value:t,color:s}){const i={primary:"text-hm-primary",green:"text-green-700",red:"text-red-600",gray:"text-gray-300"};return a.jsxs("div",{className:"border border-gray-100 rounded-xl p-4 text-center bg-gray-50",children:[a.jsx("p",{className:"text-xs text-gray-400 mb-1",children:e}),a.jsx("p",{className:`text-base font-extrabold ${i[s]}`,children:t})]})}const jd=90;function wd(e,t){const[s,i]=e.split(":").map(Number),n=s*60+i+t;return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`}function Nd(){const{patients:e,setPatients:t,surgeries:s,setSurgeries:i,setTherapies:n}=ye(),{isAdmin:r,canEdit:l}=Ee(),c=w.useRef(null),[d,h]=w.useState(!1),[j,m]=w.useState(!1),[v,g]=w.useState(null),[f,x]=w.useState(null),[y,S]=w.useState(!1),[u,N]=w.useState("all"),[F,E]=w.useState(null);w.useEffect(()=>{const T=St(t),I=At(i),V=Dt(n);return()=>{T(),I(),V()}},[]);const Q=w.useMemo(()=>u==="all"?s:s.filter(T=>T.status===u),[s,u]).filter(T=>T.status!=="cancelado").map(T=>{const V=T.status==="suspendido"?{backgroundColor:"#9ca3af",borderColor:"#6b7280",textColor:"#fff"}:Ls[T.patientType]??Ls.ext,ae=wd(T.startTime,jd);return{id:T.id,title:T.patientName,start:`${T.date}T${T.startTime}`,end:`${T.date}T${ae}`,...V,extendedProps:T}}),q=T=>{x(T?{date:T}:null),h(!0)},L=()=>{m(!1),h(!0)},K=()=>{m(!1),x(null)},A=({event:T})=>{E(null),x(T.extendedProps),m(!0)},k=({dateStr:T})=>{l&&q(T)},R=({event:T,jsEvent:I})=>{const V=T.extendedProps,ae=e.find(ce=>ce.id===V.patientId);E({surgery:V,patient:ae,x:I.clientX,y:I.clientY})},H=()=>E(null),J=async({event:T,revert:I})=>{if(!l){I();return}const V=T.extendedProps,ae=X(T.start,"yyyy-MM-dd"),ce=X(T.start,"HH:mm");try{await tt(V.id,{date:ae,startTime:ce}),Y.success("Cirugía reprogramada")}catch{I(),Y.error("Error al reprogramar")}},U=async T=>{S(!0);try{f!=null&&f.id?(await tt(f.id,T),Y.success("Cirugía actualizada")):(await Fo(T),Y.success("Cirugía programada")),h(!1),x(null)}catch(I){Y.error("Error: "+I.message)}finally{S(!1)}},W=async()=>{if(v)try{await tt(v.id,{status:"cancelado"}),Y.success("Cirugía cancelada"),m(!1)}catch(T){Y.error("Error: "+T.message)}finally{g(null)}},re=async(T,I)=>{try{await tt(T,I),Y.success(I.status==="suspendido"?"Cirugía suspendida":"Cirugía reprogramada"),m(!1),x(null)}catch(V){throw Y.error("Error: "+V.message),V}},Z=()=>{var V;const T=(V=c.current)==null?void 0:V.getApi(),I=X(T?T.getDate():new Date,"yyyy-MM-dd");Gc(s,I)},C=()=>{var ae;const T=(ae=c.current)==null?void 0:ae.getApi(),I=T?la(T.getDate(),{weekStartsOn:1}):la(new Date,{weekStartsOn:1}),V=Array.from({length:7},(ce,$e)=>X(kr(I,$e),"yyyy-MM-dd"));Qc(s,V)};return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"card py-3",children:a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsx("div",{className:"flex gap-1.5 flex-wrap",children:[{v:"all",l:"Todas"},{v:"programado",l:"Programadas"},{v:"confirmado",l:"Confirmadas"},{v:"realizado",l:"Realizadas"},{v:"suspendido",l:"Suspendidas"}].map(({v:T,l:I})=>a.jsx("button",{onClick:()=>N(T),className:`btn btn-sm ${u===T?"btn-primary":"btn-secondary"}`,children:I},T))}),a.jsxs("div",{className:"ml-auto flex gap-2 flex-wrap items-center",children:[a.jsxs("div",{className:"flex items-center gap-3 mr-2 flex-wrap",children:[a.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[a.jsx("span",{className:"w-3 h-3 rounded-full inline-block",style:{backgroundColor:"#1e40af"}})," MNY"]}),a.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[a.jsx("span",{className:"w-3 h-3 rounded-full inline-block",style:{backgroundColor:"#ea580c"}})," JWI"]}),a.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[a.jsx("span",{className:"w-3 h-3 rounded-full bg-green-600 inline-block"})," EXT"]}),a.jsx("span",{className:"w-px h-4 bg-gray-200"}),a.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-green-500"})," Pagado"]}),a.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-yellow-400"})," Parcial"]}),a.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-red-500"})," Sin pago"]})]}),a.jsxs("button",{onClick:Z,className:"btn-secondary btn btn-sm",children:[a.jsx(fa,{className:"w-4 h-4"})," Día"]}),a.jsxs("button",{onClick:C,className:"btn-secondary btn btn-sm",children:[a.jsx(fa,{className:"w-4 h-4"})," Semana"]}),a.jsx("button",{onClick:()=>Uc(s),className:"btn-secondary btn btn-sm",title:"CSV",children:a.jsx(hs,{className:"w-4 h-4"})}),l&&a.jsxs("button",{onClick:()=>q(),className:"btn-primary btn btn-sm",children:[a.jsx(ra,{className:"w-4 h-4"})," Nueva cirugía"]})]})]})}),a.jsx("div",{className:"card p-3 md:p-5",children:a.jsx(Si,{ref:c,plugins:[Ai,Di,Ti,Ei],initialView:"dayGridMonth",locale:hn,height:"auto",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},events:Q,editable:l,selectable:l,dateClick:k,eventClick:A,eventDrop:J,eventMouseEnter:R,eventMouseLeave:H,eventContent:T=>{const I=T.event.extendedProps,V=I.paymentComplete?"#22c55e":Number(I.amountPaid)>0?"#eab308":"#ef4444";return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,padding:"0 4px",overflow:"hidden",height:"100%",width:"100%"},children:[a.jsx("span",{style:{width:7,height:7,minWidth:7,borderRadius:"50%",backgroundColor:V,border:"1.5px solid rgba(255,255,255,0.8)"}}),a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"0.72rem",fontWeight:600},children:T.event.title})]})},eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!1},slotMinTime:"06:00:00",slotMaxTime:"22:00:00",allDaySlot:!1,nowIndicator:!0,eventDisplay:"block",dayMaxEvents:4,moreLinkText:T=>`+${T} más`,noEventsText:"Sin cirugías en este período",buttonText:{today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Lista"}})}),F&&a.jsx("div",{className:"fixed z-[200] pointer-events-none",style:{left:Math.min(F.x+16,window.innerWidth-272),top:F.y-8},children:(()=>{var I;const T=oe(F.surgery.patientType);return a.jsxs("div",{className:"w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden",children:[a.jsxs("div",{className:"px-4 py-2.5 flex items-center justify-between gap-2",style:{backgroundColor:T.bg},children:[a.jsx("p",{className:"text-white font-extrabold text-sm truncate",children:F.surgery.patientName}),a.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-white/20 text-white",children:T.label})]}),a.jsxs("div",{className:"px-4 py-3 space-y-2",children:[((I=F.patient)==null?void 0:I.diagnosis)&&a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Diagnóstico"}),a.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:F.patient.diagnosis})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Tipo de cirugía"}),a.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:F.surgery.surgeryType||"—"})]}),r&&F.surgery.quotation>0&&a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Cotización"}),a.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:Number(F.surgery.quotation).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})})]}),a.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-gray-50",children:[a.jsx("span",{className:"text-[10px] text-gray-400",children:F.surgery.startTime}),a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full capitalize",style:{backgroundColor:F.surgery.status==="confirmado"?"#dbeafe":F.surgery.status==="realizado"?"#dcfce7":"#f1f5f9",color:F.surgery.status==="confirmado"?"#1d4ed8":F.surgery.status==="realizado"?"#15803d":"#475569"},children:F.surgery.status}),a.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full",style:{backgroundColor:T.lightBg,color:T.textColor},children:T.longLabel})]})]})]})]})})()}),a.jsx(Na,{open:d,onClose:()=>{h(!1),x(null)},title:f!=null&&f.id?"Editar cirugía":"Nueva cirugía",size:"xl",children:a.jsx(dd,{initial:f,onSubmit:U,onCancel:()=>{h(!1),x(null)},busy:y})}),j&&f&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:T=>{T.target===T.currentTarget&&K()},children:a.jsx("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden",style:{maxHeight:"92vh"},children:a.jsx(vd,{surgery:f,onEdit:L,onClose:K,onCancelSurgery:()=>g(f),onSuspendSurgery:re,isAdmin:r,canEdit:l})})}),a.jsx(Ra,{open:!!v,title:"Cancelar cirugía",message:`¿Marcar la cirugía de ${v==null?void 0:v.patientName} como cancelada?`,confirmLabel:"Sí, cancelar",onConfirm:W,onCancel:()=>g(null)})]})}const It="therapists",kd=e=>Ha(Qe(ue,It),t=>e(t.docs.map(s=>({id:s.id,...s.data()})))),Cd=e=>Ya(Qe(ue,It),e),Fd=(e,t)=>Va(Ue(ue,It,e),t),Sd=e=>Ua(Ue(ue,It,e));function Ad({patients:e,value:t,onChange:s,error:i}){const[n,r]=w.useState(""),[l,c]=w.useState(!1),d=w.useRef(null),h=w.useRef(null);w.useEffect(()=>{if(t){const f=e.find(x=>x.id===t);f&&r(f.fullName??"")}else r("")},[t,e]),w.useEffect(()=>{const f=x=>{d.current&&!d.current.contains(x.target)&&c(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]);const j=w.useMemo(()=>{const f=n.toLowerCase().trim();return(f?e.filter(y=>{var S,u,N;return((S=y.fullName)==null?void 0:S.toLowerCase().includes(f))||((u=y.patientCode)==null?void 0:u.toLowerCase().includes(f))||((N=y.diagnosis)==null?void 0:N.toLowerCase().includes(f))}):e).slice(0,12)},[e,n]),m=e.find(f=>f.id===t),v=f=>{s(f.id),r(f.fullName??""),c(!1)},g=()=>{var f;s(""),r(""),(f=h.current)==null||f.focus()};return a.jsxs("div",{ref:d,className:"relative",children:[a.jsxs("div",{className:`flex items-center border rounded-lg bg-white transition-colors
        ${i?"border-red-400":l?"border-blue-400 ring-2 ring-blue-100":"border-gray-200"}`,children:[a.jsx(yt,{className:"w-4 h-4 text-gray-400 ml-3 shrink-0"}),a.jsx("input",{ref:h,type:"text",value:n,onChange:f=>{r(f.target.value),c(!0),s("")},onFocus:()=>c(!0),onKeyDown:f=>{f.key==="Escape"&&c(!1)},placeholder:"Buscar por nombre, código o diagnóstico…",className:"flex-1 px-2 py-2 text-sm bg-transparent outline-none placeholder-gray-400"}),t&&a.jsx("button",{type:"button",onClick:g,className:"p-1.5 mr-1 text-gray-400 hover:text-gray-600 rounded",children:a.jsx(Ne,{className:"w-3.5 h-3.5"})}),a.jsx("button",{type:"button",onClick:()=>c(f=>!f),className:"p-1.5 mr-1 text-gray-400 hover:text-gray-600 rounded",children:a.jsx(ms,{className:`w-3.5 h-3.5 transition-transform ${l?"rotate-180":""}`})})]}),l&&a.jsxs("div",{className:"absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden",style:{maxHeight:280},children:[j.length===0?a.jsx("div",{className:"px-4 py-3 text-sm text-gray-400 text-center",children:n?"Sin resultados para esta búsqueda":"Sin pacientes registrados"}):a.jsx("ul",{className:"overflow-y-auto",style:{maxHeight:278},children:j.map(f=>a.jsx("li",{onClick:()=>v(f),className:`px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0
                      ${f.id===t?"bg-blue-50":""}`,children:a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"text-sm font-semibold text-gray-900 leading-tight truncate",children:f.fullName}),f.diagnosis&&a.jsx("p",{className:"text-xs text-gray-500 truncate mt-0.5",children:f.diagnosis})]}),a.jsxs("div",{className:"flex flex-col items-end shrink-0 gap-0.5",children:[f.patientCode&&a.jsx("span",{className:"text-[10px] font-mono text-gray-400",children:f.patientCode}),ha(f.birthDate)&&a.jsx("span",{className:"text-[10px] text-gray-400",children:ha(f.birthDate)})]})]})},f.id))}),a.jsxs("div",{className:"px-3 py-1.5 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-right",children:[j.length," de ",e.length," pacientes"]})]}),m&&a.jsxs("div",{className:"mt-1.5 flex flex-wrap gap-3 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5 text-xs text-blue-700",children:[ha(m.birthDate)&&a.jsxs("span",{children:["Edad: ",a.jsx("strong",{children:ha(m.birthDate)})]}),m.diagnosis&&a.jsxs("span",{children:["Dx: ",a.jsx("strong",{children:m.diagnosis})]}),m.guardian&&a.jsxs("span",{children:["Tutor: ",a.jsx("strong",{children:m.guardian})]}),m.guardianPhone&&a.jsxs("span",{children:["Tel: ",a.jsx("strong",{children:m.guardianPhone})]})]})]})}function Dd({specialty:e,value:t,onChange:s,therapistsList:i=[],dayOfWeek:n=null}){const{available:r,unavailable:l}=w.useMemo(()=>{const m=e?i.filter(f=>f.specialty===e):i;if(n===null)return{available:m,unavailable:[]};const v=m.filter(f=>{var x;return(x=f.schedule)==null?void 0:x.some(y=>y.day===n)}),g=m.filter(f=>{var x;return!((x=f.schedule)!=null&&x.some(y=>y.day===n))});return{available:v,unavailable:g}},[i,e,n]),c=[...r,...l],[d,h]=w.useState(!1);if(w.useEffect(()=>{t&&c.length>0&&(c.some(v=>v.name===t)||h(!0))},[t,c]),d||c.length===0)return a.jsxs("div",{className:"space-y-1",children:[a.jsx("input",{value:t,onChange:m=>s(m.target.value),className:"input",placeholder:"Nombre del profesional"}),c.length>0&&a.jsx("button",{type:"button",onClick:()=>{h(!1),s("")},className:"text-xs text-blue-600 hover:text-blue-800",children:"← Ver lista configurada"})]});const j=(m,v)=>{var x;const g=t===m.name,f=((x=m.schedule)==null?void 0:x.map(y=>`${y.dayName} (${y.shifts.map(S=>S==="mañana"?"M":"T").join("+")})`).join(" · "))??"";return a.jsxs("button",{type:"button",onClick:()=>!v&&s(g?"":m.name),className:`text-left rounded-lg border px-3 py-2 text-xs transition-all
          ${g?"bg-blue-600 text-white border-blue-600 shadow-sm":v?"bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed opacity-60":"bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50"}`,children:[a.jsx("div",{className:"font-semibold",children:m.name}),a.jsxs("div",{className:`text-[10px] mt-0.5 ${g?"text-blue-200":v?"text-gray-300":"text-gray-400"}`,children:[m.specialty," · ",f,v&&n!==null&&" · no disponible este día"]})]},m.id??m.name)};return a.jsxs("div",{className:"space-y-1.5",children:[n!==null&&r.length===0&&l.length>0&&a.jsx("p",{className:"text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-1.5 border border-amber-100",children:"Sin terapistas disponibles para este día según su horario registrado."}),a.jsxs("div",{className:"grid grid-cols-1 gap-1",children:[r.map(m=>j(m,!1)),l.map(m=>j(m,!0))]}),a.jsx("button",{type:"button",onClick:()=>h(!0),className:"text-xs text-gray-400 hover:text-gray-600",children:"+ Ingresar otro nombre"})]})}function Td({initial:e,onSubmit:t,onCancel:s,busy:i}){const{patients:n,therapists:r}=ye(),l=w.useMemo(()=>[...n].sort((q,L)=>(q.fullName??"").localeCompare(L.fullName??"","es")),[n]),{register:c,handleSubmit:d,watch:h,reset:j,setValue:m,formState:{errors:v}}=Et({defaultValues:e??{patientId:"",therapyType:"",date:"",startTime:"",durationMinutes:45,therapist:"",status:"programado",notes:""}});w.useEffect(()=>{e&&j(e)},[e]);const g=h("patientId"),f=h("therapyType"),x=h("therapist"),y=h("date"),S=w.useMemo(()=>y?new Date(y+"T12:00").getDay():null,[y]),[u,N]=w.useState(!1),[F,E]=w.useState(!1),$=async q=>{E(!0);try{const L=await Vi(q);m("patientId",L.id,{shouldValidate:!0}),N(!1),Y.success("Paciente registrado")}catch(L){Y.error(L.message)}finally{E(!1)}},Q=q=>{const L=n.find(K=>K.id===q.patientId);t({...q,patientName:(L==null?void 0:L.fullName)??"",patientType:(L==null?void 0:L.patientType)??"external"})};return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onSubmit:d(Q),className:"space-y-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("label",{className:"label mb-0",children:"Paciente *"}),a.jsxs("button",{type:"button",onClick:()=>N(!0),className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors",children:[a.jsx(Kt,{className:"w-3.5 h-3.5"}),"Nuevo paciente"]})]}),a.jsx("input",{type:"hidden",...c("patientId",{required:"Selecciona un paciente"})}),a.jsx(Ad,{patients:l,value:g,onChange:q=>m("patientId",q,{shouldValidate:!0}),error:!!v.patientId}),v.patientId&&a.jsx("p",{className:"error-msg mt-1",children:v.patientId.message})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Especialidad *"}),a.jsxs("select",{className:`input ${v.therapyType?"input-error":""}`,...c("therapyType",{required:"Requerido"}),children:[a.jsx("option",{value:"",children:"Seleccionar..."}),Yi.map(q=>a.jsx("option",{value:q,children:q},q))]}),v.therapyType&&a.jsx("p",{className:"error-msg",children:v.therapyType.message})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Estado"}),a.jsx("select",{className:"input",...c("status"),children:vs.map(q=>a.jsx("option",{value:q,children:La[q].label},q))})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Fecha *"}),a.jsx("input",{type:"date",className:`input ${v.date?"input-error":""}`,...c("date",{required:"Requerido"})}),v.date&&a.jsx("p",{className:"error-msg",children:v.date.message})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Hora *"}),a.jsx("input",{type:"time",className:`input ${v.startTime?"input-error":""}`,...c("startTime",{required:"Requerido"})}),v.startTime&&a.jsx("p",{className:"error-msg",children:v.startTime.message})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Duración (min)"}),a.jsx("input",{type:"number",min:"15",max:"240",step:"5",className:"input",...c("durationMinutes")})]})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Terapeuta"}),a.jsx(Dd,{specialty:f,value:x,onChange:q=>m("therapist",q),therapistsList:r,dayOfWeek:S}),a.jsx("input",{type:"hidden",...c("therapist")})]}),a.jsxs("div",{className:"form-group mb-0",children:[a.jsx("label",{className:"label",children:"Observaciones"}),a.jsx("textarea",{rows:2,className:"input resize-none",...c("notes")})]}),a.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[a.jsx("button",{type:"button",onClick:s,className:"btn-secondary btn",children:"Cancelar"}),a.jsx("button",{type:"submit",disabled:i,className:"btn-primary btn",children:i?a.jsx(Ge,{className:"w-4 h-4 animate-spin"}):e!=null&&e.id?"Guardar cambios":"Agendar terapia"})]})]}),a.jsx(Na,{open:u,onClose:()=>N(!1),title:"Registrar nuevo paciente",size:"lg",children:a.jsx(tn,{onSubmit:$,onCancel:()=>N(!1),busy:F})})]})}const fn=["08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00"],bn=["14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"],vn=[...fn,...bn];function Ed(e){if(!e)return null;const[t,s]=e.split(":").map(Number),i=`${String(t).padStart(2,"0")}:${s<30?"00":"30"}`;return vn.includes(i)?i:null}function Md({therapy:e,onCard:t,onAttend:s}){const i=Te(e.therapyType),n=na(e.status);return a.jsxs("div",{onClick:r=>{r.stopPropagation(),t(e)},className:"text-[10px] rounded border-l-2 bg-white p-1 mb-0.5 cursor-pointer hover:shadow-md transition-shadow group relative",style:{borderLeftColor:i.color,boxShadow:"0 1px 2px rgba(0,0,0,.06)"},children:[a.jsx("div",{className:"font-semibold truncate text-gray-800 leading-tight",children:e.patientName}),a.jsxs("div",{className:"flex items-center justify-between gap-0.5 mt-0.5",children:[a.jsx("span",{className:"truncate text-[9px]",style:{color:i.color},children:e.therapyType}),a.jsx("span",{className:`text-[8px] px-1 py-px rounded font-bold border shrink-0 ${n.tw}`,children:n.short})]}),e.therapist&&a.jsx("div",{className:"text-gray-400 truncate text-[9px] mt-0.5",children:e.therapist}),a.jsx("button",{onClick:r=>{r.stopPropagation(),s(e)},className:"absolute bottom-1 right-1 text-[8px] text-blue-600 hover:text-blue-800 hidden group-hover:block bg-blue-50 rounded px-1 py-px font-medium",children:"✓"})]})}function Pd({therapies:e,patients:t,selectedDate:s,onDateSelect:i,onCard:n,onAttend:r,onScheduleSlot:l,isAdmin:c}){const d=w.useMemo(()=>Oa(s),[s]),h=w.useMemo(()=>{const f={};for(const x of d){f[x]={};for(const y of vn)f[x][y]=[]}for(const x of e){if(!d.includes(x.date))continue;const y=Ed(x.startTime);y&&f[x.date][y].push(x)}return f},[e,d]),j=w.useMemo(()=>{const f={};for(const x of d){const y=e.filter(S=>S.date===x);f[x]={total:y.length,attended:y.filter(S=>$a.includes(S.status)).length}}return f},[e,d]),m=130,v=f=>f.map(x=>a.jsxs("tr",{className:"border-b border-gray-100 hover:bg-blue-50/10 transition-colors",children:[a.jsx("td",{className:"sticky left-0 z-10 bg-gray-50 border-r border-gray-200 text-center py-1.5 px-1 font-mono text-[10px] font-bold text-gray-600 align-top whitespace-nowrap w-14",style:{verticalAlign:"top"},children:x}),d.map(y=>{var E;const S=((E=h[y])==null?void 0:E[x])??[],u=y===ga,N=y===s,F=c&&!S.length;return a.jsxs("td",{onClick:()=>F&&l(y,x),className:`align-top p-1 border-r border-gray-100 transition-colors group/cell
                  ${N?"bg-blue-50/60":u?"bg-amber-50/30":""}
                  ${F?"cursor-pointer hover:bg-blue-50/40":""}`,style:{minWidth:m,verticalAlign:"top"},children:[S.map($=>a.jsx(Md,{therapy:$,onCard:n,onAttend:r},$.id)),F&&a.jsx("div",{className:"h-5 border border-dashed border-transparent group-hover/cell:border-blue-300 rounded text-[8px] text-transparent group-hover/cell:text-blue-400 flex items-center justify-center transition-all select-none",children:"+ agendar"})]},y)})]},x)),g=!e.some(f=>d.includes(f.date));return a.jsx("div",{className:"overflow-auto rounded-lg border border-gray-100",style:{maxHeight:"65vh"},children:a.jsxs("table",{className:"border-collapse text-xs",style:{minWidth:`${64+d.length*m}px`,tableLayout:"fixed"},children:[a.jsx("thead",{className:"sticky top-0 z-20",children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky left-0 z-30 bg-gray-900 text-white text-center py-2 px-1 w-14 text-[8px] font-bold uppercase tracking-widest border-r border-gray-700",children:"HORA"}),d.map(f=>{const x=new Date(f+"T12:00"),y=x.toLocaleDateString("es",{weekday:"long"}),S=x.toLocaleDateString("es",{day:"numeric",month:"short"}),u=f===ga,N=f===s,F=j[f]??{total:0,attended:0};return a.jsxs("th",{onClick:()=>i(f),style:{minWidth:m,borderRight:"1px solid rgba(255,255,255,.15)",cursor:"pointer"},className:`py-2 px-2 text-center hover:opacity-80 transition-opacity select-none
                      ${N?"bg-blue-500":u?"bg-blue-800":"bg-gray-800"}`,children:[a.jsx("div",{className:"capitalize text-white font-bold text-[10px]",children:y}),a.jsx("div",{className:"text-[8px] text-gray-400",children:S}),F.total>0&&a.jsxs("div",{className:"mt-0.5 flex justify-center gap-1",children:[a.jsx("span",{className:"bg-white/20 text-white text-[8px] px-1 py-px rounded font-bold",children:F.total}),F.attended>0&&a.jsxs("span",{className:"bg-green-500/70 text-white text-[8px] px-1 py-px rounded font-bold",children:["✓",F.attended]})]})]},f)})]})}),a.jsxs("tbody",{children:[a.jsx("tr",{children:a.jsx("td",{colSpan:d.length+1,className:"bg-blue-900 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 sticky left-0 z-10",children:"☀ TURNO MAÑANA · 08:30 – 13:00"})}),v(fn),a.jsx("tr",{children:a.jsx("td",{colSpan:d.length+1,className:"bg-orange-700 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 sticky left-0 z-10",children:"🌤 TURNO TARDE · 14:30 – 19:00"})}),v(bn),g&&a.jsx("tr",{children:a.jsxs("td",{colSpan:d.length+1,className:"py-12 text-center text-gray-400",children:[a.jsx("div",{className:"text-3xl mb-2",children:"📅"}),a.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Sin terapias esta semana"}),c&&a.jsx("p",{className:"text-xs mt-1",children:"Hacé click en una celda para agendar"})]})})]})]})})}function Od({therapy:e,onCard:t,onAttend:s}){const i=na(e.status);return a.jsxs("div",{onClick:()=>t(e),className:"flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-[11px] font-semibold text-gray-800 truncate leading-tight",children:e.patientName}),a.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[e.startTime&&a.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:e.startTime}),e.therapist&&a.jsx("span",{className:"text-[9px] text-gray-400 truncate",children:e.therapist})]})]}),a.jsxs("div",{className:"flex items-center gap-0.5 shrink-0",children:[a.jsx("span",{className:`text-[8px] px-1 py-px rounded font-bold border ${i.tw}`,children:i.short}),a.jsx("button",{onClick:n=>{n.stopPropagation(),s(e)},className:"text-[8px] text-blue-600 hidden group-hover:block bg-blue-100 rounded px-1 py-px font-medium",children:"✓"})]})]})}function yn({specialty:e,therapies:t,onCard:s,onAttend:i,onSchedule:n,isAdmin:r}){const l=Te(e);return a.jsxs("div",{className:"rounded-xl overflow-hidden flex flex-col shadow-sm border border-gray-100",style:{borderTop:`3px solid ${l.color}`},children:[a.jsxs("div",{className:"px-3 py-2 flex items-center justify-between gap-1",style:{background:l.light},children:[a.jsx("span",{className:"text-xs font-bold leading-tight truncate",style:{color:l.color},children:e}),t.length>0&&a.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white shrink-0",style:{background:l.color},children:t.length})]}),a.jsx("div",{className:"flex-1 p-2 space-y-1 min-h-[56px]",style:{background:t.length?"#fafafa":"#fff"},children:t.length===0?a.jsx("div",{className:"flex items-center justify-center h-12 text-[10px] text-gray-300 select-none",children:"Disponible"}):t.map(c=>a.jsx(Od,{therapy:c,onCard:s,onAttend:i},c.id))}),r&&a.jsx("div",{className:"px-2 pb-2 bg-white",children:a.jsxs("button",{onClick:()=>n(e),className:"w-full flex items-center justify-center gap-1 py-1.5 rounded-lg border-2 border-dashed border-gray-200 text-[10px] text-gray-400 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50 transition-colors",children:[a.jsx(ra,{className:"w-3 h-3"}),"Agendar"]})})]})}function ji({title:e,subtitle:t,headerClass:s,specialties:i,bySpecialty:n,shift:r,onCard:l,onAttend:c,onScheduleWithSpecialty:d,isAdmin:h}){return i.length?a.jsxs("div",{children:[a.jsxs("div",{className:`flex items-center gap-3 px-3 py-2 rounded-xl mb-3 ${s}`,children:[a.jsx("span",{className:"text-sm font-bold",children:e}),a.jsx("span",{className:"text-xs opacity-75",children:t}),a.jsxs("span",{className:"ml-auto text-xs font-semibold opacity-75",children:[i.length," especialidades"]})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3",children:i.map(j=>{var m;return a.jsx(yn,{specialty:j,therapies:((m=n[j])==null?void 0:m[r])??[],onCard:l,onAttend:c,onSchedule:v=>d(v,r),isAdmin:h},j)})})]}):null}function Id({therapies:e,patients:t,date:s,onCard:i,onAttend:n,onScheduleWithSpecialty:r,isAdmin:l}){const c=w.useMemo(()=>s?new Date(s+"T12:00").getDay():1,[s]),d=ts[c]??{mañana:[],tarde:[]},h=[...new Set([...d.mañana,...d.tarde])],j=w.useMemo(()=>{const g={};for(const f of e){const x=f.therapyType;g[x]||(g[x]={mañana:[],tarde:[]}),f.startTime&&f.startTime>="13:00"?g[x].tarde.push(f):g[x].mañana.push(f)}return g},[e]),m=w.useMemo(()=>e.filter(g=>!h.includes(g.therapyType)),[e,h]);return!d.mañana.length&&!d.tarde.length&&!e.length?a.jsxs("div",{className:"text-center py-16 text-gray-400",children:[a.jsx("div",{className:"text-4xl mb-3",children:"📅"}),a.jsx("p",{className:"font-medium text-gray-600",children:"Sin especialidades configuradas para este día"}),a.jsxs("p",{className:"text-sm mt-1",children:["Podés configurar el horario en ",a.jsx("code",{children:"therapyConstants.js → DAY_SCHEDULE_CONFIG"})]})]}):a.jsxs("div",{className:"space-y-6",style:{maxHeight:"65vh",overflowY:"auto",paddingRight:2},children:[a.jsx(ji,{title:"☀ Turno Mañana",subtitle:"08:30 – 13:00",headerClass:"bg-blue-900/10 text-blue-900",specialties:d.mañana,bySpecialty:j,shift:"mañana",onCard:i,onAttend:n,onScheduleWithSpecialty:r,isAdmin:l}),a.jsx(ji,{title:"🌤 Turno Tarde",subtitle:"14:30 – 19:00",headerClass:"bg-orange-700/10 text-orange-800",specialties:d.tarde,bySpecialty:j,shift:"tarde",onCard:i,onAttend:n,onScheduleWithSpecialty:r,isAdmin:l}),m.length>0&&a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 rounded-xl mb-3 bg-gray-100 text-gray-600",children:[a.jsx("span",{className:"text-sm font-bold",children:"Otras terapias"}),a.jsx("span",{className:"text-xs opacity-75",children:"fuera del horario configurado"})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3",children:[...new Set(m.map(g=>g.therapyType))].map(g=>a.jsx(yn,{specialty:g,therapies:m.filter(f=>f.therapyType===g),onCard:i,onAttend:n,onSchedule:f=>r(f,null),isAdmin:l},g))})]})]})}const As=[{n:1,label:"Lunes"},{n:2,label:"Martes"},{n:3,label:"Miércoles"},{n:4,label:"Jueves"},{n:5,label:"Viernes"}];function zd(e=[]){const t={};return As.forEach(s=>{const i=e.find(n=>n.day===s.n);t[s.n]={enabled:!!i,shifts:(i==null?void 0:i.shifts)??[]}}),t}function _d(e){return As.filter(t=>{var s,i;return((s=e[t.n])==null?void 0:s.enabled)&&((i=e[t.n])==null?void 0:i.shifts.length)>0}).map(t=>({day:t.n,dayName:t.label,shifts:e[t.n].shifts}))}function Ld({value:e,onChange:t}){const s=n=>{const r={...e,[n]:{...e[n],enabled:!e[n].enabled,shifts:e[n].enabled?[]:["mañana"]}};t(r)},i=(n,r)=>{const l=e[n].shifts,c=l.includes(r)?l.filter(d=>d!==r):[...l,r];t({...e,[n]:{...e[n],shifts:c}})};return a.jsx("div",{className:"space-y-1.5",children:As.map(({n,label:r})=>{const{enabled:l,shifts:c}=e[n]??{enabled:!1,shifts:[]};return a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("button",{type:"button",onClick:()=>s(n),className:`w-28 text-left text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all
                ${l?"bg-blue-600 text-white border-blue-600":"bg-white text-gray-600 border-gray-200 hover:border-blue-300"}`,children:r}),l&&a.jsx("div",{className:"flex gap-1.5",children:[["mañana","☀ Mañana"],["tarde","🌤 Tarde"]].map(([d,h])=>a.jsx("button",{type:"button",onClick:()=>i(n,d),className:`text-[11px] px-2 py-1 rounded border font-medium transition-all
                      ${c.includes(d)?"bg-amber-500 text-white border-amber-500":"bg-white text-gray-500 border-gray-200 hover:border-amber-300"}`,children:h},d))})]},n)})})}function $d({initial:e,onClose:t}){const[s,i]=w.useState((e==null?void 0:e.name)??""),[n,r]=w.useState((e==null?void 0:e.specialty)??""),[l,c]=w.useState(()=>zd(e==null?void 0:e.schedule)),[d,h]=w.useState(!1),j=async m=>{if(m.preventDefault(),!s.trim()||!n)return Y.error("Completá nombre y especialidad");const v=_d(l);if(!v.length)return Y.error("Seleccioná al menos un día y turno");h(!0);try{const g={name:s.trim(),specialty:n,schedule:v};e!=null&&e.id?(await Fd(e.id,g),Y.success("Terapista actualizado")):(await Cd(g),Y.success("Terapista registrado")),t()}catch(g){Y.error(g.message)}finally{h(!1)}};return n&&Te(n),a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:a.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md",children:[a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100",children:[a.jsx("h2",{className:"font-bold text-gray-900",children:e!=null&&e.id?"Editar terapista":"Nuevo terapista"}),a.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-gray-100 text-gray-500",children:a.jsx(Ne,{className:"w-4 h-4"})})]}),a.jsxs("form",{onSubmit:j,className:"p-5 space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Nombre completo *"}),a.jsx("input",{value:s,onChange:m=>i(m.target.value),className:"input",placeholder:"Ej. Lic. María García"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Especialidad *"}),a.jsxs("select",{value:n,onChange:m=>r(m.target.value),className:"input",children:[a.jsx("option",{value:"",children:"Seleccionar…"}),Yi.map(m=>a.jsx("option",{value:m,children:m},m))]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"label",children:"Días y turnos de atención *"}),a.jsx(Ld,{value:l,onChange:c})]}),a.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[a.jsx("button",{type:"button",onClick:t,className:"btn btn-secondary",children:"Cancelar"}),a.jsx("button",{type:"submit",disabled:d,className:"btn btn-primary",children:d?a.jsx(Ge,{className:"w-4 h-4 animate-spin"}):e!=null&&e.id?"Guardar":"Registrar"})]})]})]})})}function Rd({therapist:e,isAdmin:t,onEdit:s,onDelete:i}){var r;const n=Te(e.specialty);return a.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"h-1.5",style:{background:n.color}}),a.jsxs("div",{className:"p-4",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"font-bold text-sm text-gray-900 leading-tight",children:e.name}),a.jsx("span",{className:"inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full",style:{background:n.light,color:n.color},children:e.specialty})]}),t&&a.jsxs("div",{className:"flex gap-1 shrink-0",children:[a.jsx("button",{onClick:()=>s(e),className:"p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",children:a.jsx(ja,{className:"w-3.5 h-3.5"})}),a.jsx("button",{onClick:()=>i(e),className:"p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors",children:a.jsx(mt,{className:"w-3.5 h-3.5"})})]})]}),((r=e.schedule)==null?void 0:r.length)>0&&a.jsx("div",{className:"mt-3 space-y-1",children:e.schedule.map((l,c)=>{const d=l.shifts??[];return a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-[11px] w-20 font-medium text-gray-600",children:l.dayName}),a.jsx("div",{className:"flex gap-1",children:d.map(h=>a.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-semibold
                          ${h==="mañana"?"bg-amber-100 text-amber-700":"bg-indigo-100 text-indigo-700"}`,children:h==="mañana"?"☀ M":"🌤 T"},h))})]},c)})})]})]})}function Bd({therapists:e,isAdmin:t}){const[s,i]=w.useState(null),[n,r]=w.useState(null),l=w.useMemo(()=>{const d={};return e.forEach(h=>{d[h.specialty]||(d[h.specialty]=[]),d[h.specialty].push(h)}),Object.entries(d).sort(([h],[j])=>h.localeCompare(j,"es"))},[e]),c=async()=>{if(n)try{await Sd(n.id),Y.success("Terapista eliminado"),r(null)}catch(d){Y.error(d.message)}};return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-gray-800",children:"Equipo terapéutico"}),a.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:[e.length," profesionales registrados"]})]}),t&&a.jsxs("button",{onClick:()=>i({}),className:"btn btn-primary btn-sm",children:[a.jsx(ra,{className:"w-3.5 h-3.5"})," Nuevo terapista"]})]}),!e.length&&a.jsxs("div",{className:"text-center py-16 text-gray-400",children:[a.jsx("div",{className:"text-4xl mb-3",children:"👩‍⚕️"}),a.jsx("p",{className:"font-medium text-gray-600",children:"Sin terapistas registrados"}),t&&a.jsxs("button",{onClick:()=>i({}),className:"mt-3 btn btn-primary btn-sm",children:[a.jsx(ra,{className:"w-3.5 h-3.5"})," Registrar primer terapista"]})]}),l.map(([d,h])=>{const j=Te(d);return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:j.color}}),a.jsx("span",{className:"text-xs font-bold text-gray-700 uppercase tracking-wide",children:d}),a.jsx("span",{className:"text-[10px] text-gray-400",children:h.length})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:h.map(m=>a.jsx(Rd,{therapist:m,isAdmin:t,onEdit:i,onDelete:r},m.id))})]},d)}),s!==null&&a.jsx($d,{initial:s!=null&&s.id?s:null,onClose:()=>i(null)}),n&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:a.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm",children:[a.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:"Eliminar terapista"}),a.jsxs("p",{className:"text-sm text-gray-600 mb-5",children:["¿Eliminar a ",a.jsx("strong",{children:n.name}),"? Esta acción no se puede deshacer."]}),a.jsxs("div",{className:"flex gap-3 justify-end",children:[a.jsx("button",{onClick:()=>r(null),className:"btn btn-secondary",children:"Cancelar"}),a.jsx("button",{onClick:c,className:"btn bg-red-600 text-white hover:bg-red-700",children:"Eliminar"})]})]})})]})}const qd=[{id:"sesiones",label:"Sesiones del día"},{id:"historial",label:"Historial"}];function Xt({icon:e,label:t,value:s}){return s?a.jsxs("div",{className:"flex items-start gap-3 px-4 py-2.5 border-b border-gray-100 last:border-b-0",children:[a.jsx(e,{className:"w-4 h-4 text-gray-400 shrink-0 mt-0.5"}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wide leading-none mb-0.5",children:t}),a.jsx("p",{className:"text-sm text-gray-700 leading-snug",children:s})]})]}):null}function Hd({therapy:e,onAttend:t,onEdit:s,isAdmin:i}){const n=Te(e.therapyType),r=na(e.status);return a.jsx("div",{className:"border border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 transition-colors group",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"w-1.5 shrink-0 self-stretch",style:{background:n.color}}),a.jsxs("div",{className:"flex-1 min-w-0 px-3 py-2.5",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("p",{className:"text-sm font-bold leading-tight",style:{color:n.color},children:e.therapyType}),a.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-xs text-gray-500",children:[a.jsx("span",{className:"font-mono font-semibold text-gray-700",children:e.startTime}),e.durationMinutes&&a.jsxs("span",{children:[e.durationMinutes," min"]}),e.therapist&&a.jsx("span",{children:e.therapist})]}),e.notes&&a.jsxs("p",{className:"text-xs text-gray-400 italic mt-1 truncate",children:['"',e.notes,'"']}),e.attendanceNote&&a.jsxs("p",{className:"text-xs text-amber-600 mt-1 bg-amber-50 rounded px-2 py-0.5 truncate",children:["Obs: ",e.attendanceNote]})]}),a.jsx("div",{className:"flex flex-col items-end gap-1 shrink-0",children:a.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-bold border ${r.tw}`,children:[r.icon," ",r.label]})})]}),a.jsxs("div",{className:"flex gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[a.jsx("button",{onClick:()=>t(e),className:"text-[10px] px-2 py-1 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition-colors",children:"✓ Registrar asistencia"}),i&&a.jsx("button",{onClick:()=>s(e),className:"text-[10px] px-2 py-1 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors",children:"Editar"})]})]})]})})}function Vd({patientId:e,patientName:t,date:s,dayTherapies:i,onClose:n,onAttend:r,onEdit:l,onNewSession:c,isAdmin:d}){const[h,j]=w.useState("sesiones"),{patients:m,therapies:v}=ye(),g=w.useMemo(()=>m.find(S=>S.id===e),[m,e]),f=ha(g==null?void 0:g.birthDate),x=new Date(s+"T12:00").toLocaleDateString("es",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),y=w.useMemo(()=>v.filter(S=>S.patientId===e&&S.date!==s).sort((S,u)=>u.date.localeCompare(S.date)||(u.startTime??"").localeCompare(S.startTime??"")).slice(0,15),[v,e,s]);return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",onClick:n,children:a.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col",style:{maxHeight:"88vh"},onClick:S=>S.stopPropagation(),children:[a.jsxs("div",{className:"px-6 pt-5 pb-0 border-b border-gray-100 shrink-0",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h2",{className:"text-xl font-extrabold text-gray-900 truncate",children:t}),a.jsx("p",{className:"text-sm text-gray-500 mt-0.5 capitalize",children:x})]}),a.jsx("button",{onClick:n,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:a.jsx(Ne,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[f&&a.jsx("span",{className:"inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700",children:f}),a.jsxs("span",{className:"inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200",children:[i.length," ",i.length===1?"terapia":"terapias"]}),(g==null?void 0:g.diagnosis)&&a.jsx("span",{className:"inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100 max-w-[220px] truncate",children:g.diagnosis})]}),a.jsx("div",{className:"flex gap-0 mt-4 -mb-px",children:qd.map(({id:S,label:u})=>a.jsx("button",{onClick:()=>j(S),className:`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors
                  ${h===S?"border-blue-600 text-blue-700":"border-transparent text-gray-400 hover:text-gray-700"}`,children:u},S))})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[h==="sesiones"&&a.jsxs("div",{className:"space-y-4",children:[g&&(g.guardian||g.guardianPhone||g.address)&&a.jsxs("div",{className:"bg-gray-50 rounded-xl border border-gray-100 overflow-hidden",children:[a.jsx(Xt,{icon:qa,label:"Responsable",value:[g.guardian,g.guardianPhone].filter(Boolean).join(" — ")}),a.jsx(Xt,{icon:Ci,label:"Teléfono",value:g.guardian?null:g.guardianPhone}),a.jsx(Xt,{icon:Fi,label:"Dirección",value:g.address})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:"Ruta terapéutica del día"}),a.jsx("div",{className:"space-y-2",children:i.map(S=>a.jsx(Hd,{therapy:S,onAttend:r,onEdit:l,isAdmin:d},S.id))})]})]}),h==="historial"&&a.jsxs("div",{children:[a.jsxs("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3",children:["Historial reciente (",y.length,")"]}),y.length?a.jsx("ul",{className:"space-y-1.5",children:y.map(S=>{const u=Te(S.therapyType),N=na(S.status);return a.jsxs("li",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100",children:[a.jsx("div",{className:"w-1 self-stretch rounded-full shrink-0",style:{background:u.color}}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-sm font-semibold",style:{color:u.color},children:S.therapyType}),a.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:[new Date(S.date+"T12:00").toLocaleDateString("es",{day:"numeric",month:"short",year:"numeric"})," · ",S.startTime,S.therapist?` · ${S.therapist}`:""]})]}),a.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-bold border shrink-0 ${N.tw}`,children:[N.icon," ",N.short]})]},S.id)})}):a.jsx("p",{className:"text-sm text-gray-400 italic text-center py-8",children:"Sin historial previo registrado."})]})]}),a.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex flex-wrap items-center gap-2 shrink-0",children:[d&&a.jsxs("button",{onClick:c,className:"btn btn-sm border border-blue-200 text-blue-600 hover:bg-blue-50 gap-1",children:[a.jsx(ra,{className:"w-3.5 h-3.5"})," Nueva sesión"]}),a.jsx("button",{onClick:n,className:"btn btn-secondary btn-sm ml-auto",children:"Cerrar"})]})]})})}function Yd({therapy:e,isAdmin:t,onClose:s,onAttend:i,onEdit:n}){const{patients:r,therapies:l}=ye(),c=w.useMemo(()=>r.find(g=>g.id===(e==null?void 0:e.patientId)),[r,e]),d=Te(e==null?void 0:e.therapyType),h=na(e==null?void 0:e.status),j=ha(c==null?void 0:c.birthDate),m=w.useMemo(()=>e?l.filter(g=>g.patientId===e.patientId&&g.date===e.date).sort((g,f)=>g.startTime.localeCompare(f.startTime)):[],[l,e]),v=w.useMemo(()=>e?l.filter(g=>g.patientId===e.patientId&&g.id!==e.id).sort((g,f)=>f.date.localeCompare(g.date)||f.startTime.localeCompare(g.startTime)).slice(0,6):[],[l,e]);return e?a.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[a.jsx("div",{className:"flex-1 bg-black/30",onClick:s}),a.jsxs("div",{className:"w-80 md:w-96 bg-white shadow-2xl flex flex-col overflow-hidden",style:{borderLeft:`4px solid ${d.color}`},children:[a.jsxs("div",{className:"px-4 py-3 border-b border-gray-100 flex items-start justify-between shrink-0",style:{background:d.light},children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-gray-900 text-sm leading-tight",children:e.patientName}),a.jsx("p",{className:"text-xs text-gray-600 mt-0.5",children:e.therapyType}),j&&a.jsx("p",{className:"text-xs text-gray-500",children:j})]}),a.jsx("button",{onClick:s,className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-white/60 shrink-0",children:a.jsx(Ne,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 text-xs",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Sesión actual"}),a.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1.5 border border-gray-100",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-semibold text-gray-800",children:e.therapyType}),a.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${h.tw}`,children:[h.icon," ",h.label]})]}),a.jsxs("p",{className:"text-gray-600",children:[e.date," · ",e.startTime," · ",e.durationMinutes||45," min"]}),e.therapist&&a.jsxs("p",{className:"text-gray-500",children:["Terapeuta: ",e.therapist]}),e.attendanceNote&&a.jsxs("p",{className:"text-amber-700 bg-amber-50 rounded px-2 py-1 mt-1 italic",children:['"',e.attendanceNote,'"']})]})]}),c&&a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Paciente"}),a.jsxs("div",{className:"space-y-1.5",children:[c.diagnosis&&a.jsxs("div",{className:"flex gap-2 items-start",children:[a.jsx(Jt,{className:"w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5"}),a.jsx("span",{className:"text-gray-700 leading-snug",children:c.diagnosis})]}),c.guardian&&a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx(qa,{className:"w-3.5 h-3.5 text-gray-400 shrink-0"}),a.jsx("span",{className:"text-gray-700",children:c.guardian})]}),c.guardianPhone&&a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx(Ci,{className:"w-3.5 h-3.5 text-gray-400 shrink-0"}),a.jsx("span",{className:"text-gray-700",children:c.guardianPhone})]}),c.address&&a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx(Fi,{className:"w-3.5 h-3.5 text-gray-400 shrink-0"}),a.jsx("span",{className:"text-gray-700 truncate",children:c.address})]})]})]}),m.length>1&&a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Ruta terapéutica hoy"}),a.jsx("div",{className:"space-y-1",children:m.map(g=>{const f=Te(g.therapyType),x=na(g.status),y=g.id===e.id;return a.jsxs("div",{className:`flex items-center gap-2 rounded px-2 py-1.5 ${y?"bg-blue-50 border border-blue-100":""}`,children:[a.jsx("span",{className:"font-mono text-gray-500 w-10 shrink-0",children:g.startTime}),a.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:f.color}}),a.jsx("span",{className:"flex-1 text-gray-700 font-medium",children:g.therapyType}),a.jsx("span",{className:`px-1.5 py-0.5 rounded text-[9px] font-semibold ${x.tw}`,children:x.short})]},g.id)})})]}),v.length>0&&a.jsxs("div",{children:[a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Historial reciente"}),a.jsx("div",{className:"space-y-1",children:v.map(g=>{const f=na(g.status);return a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-gray-400 font-mono w-20 shrink-0",children:g.date}),a.jsx("span",{className:"text-gray-600 flex-1 truncate",children:g.therapyType}),a.jsx("span",{className:`px-1.5 py-0.5 rounded text-[9px] font-semibold ${f.tw}`,children:f.short})]},g.id)})})]})]}),a.jsxs("div",{className:"p-3 border-t border-gray-100 flex gap-2 shrink-0",children:[a.jsx("button",{onClick:()=>i(e),className:"flex-1 btn btn-sm btn-primary text-xs",children:"Registrar asistencia"}),t&&a.jsx("button",{onClick:()=>n(e),className:"btn btn-sm btn-secondary text-xs",children:"Editar"})]})]})]}):null}function Ud({therapy:e,onSave:t,onClose:s}){const[i,n]=w.useState((e==null?void 0:e.status)||"programado"),[r,l]=w.useState((e==null?void 0:e.attendanceNote)||""),[c,d]=w.useState(!1),h=Te(e==null?void 0:e.therapyType),j=async()=>{d(!0),await t({status:i,notes:r}),d(!1)};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:m=>{m.target===m.currentTarget&&s()},children:a.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md",children:[a.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-100",style:{borderLeft:`4px solid ${h.color}`,borderRadius:"0.75rem 0.75rem 0 0"},children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:e==null?void 0:e.patientName}),a.jsxs("p",{className:"text-xs text-gray-500",children:[e==null?void 0:e.therapyType," · ",e==null?void 0:e.startTime,e!=null&&e.therapist?` · ${e.therapist}`:""]})]}),a.jsx("button",{onClick:s,className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100",children:a.jsx(Ne,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"p-4",children:[a.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:"Estado de asistencia"}),a.jsx("div",{className:"grid grid-cols-3 gap-1.5 mb-4",children:vs.map(m=>{const v=La[m],g=i===m;return a.jsxs("button",{onClick:()=>n(m),className:`text-xs rounded-lg border px-2 py-2 text-left transition-all font-medium leading-tight
                    ${g?`ring-2 ring-offset-1 border-transparent shadow-sm ${v.tw}`:"border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[a.jsx("span",{className:"mr-1",children:v.icon}),v.label]},m)})}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Observación (opcional)"}),a.jsx("textarea",{rows:2,value:r,onChange:m=>l(m.target.value),placeholder:'Ej: "No asistió por enfermedad", "Llegó 20 min tarde"',className:"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"})]}),a.jsxs("div",{className:"flex gap-2 justify-end",children:[a.jsx("button",{onClick:s,className:"btn-secondary btn btn-sm",children:"Cancelar"}),a.jsx("button",{onClick:j,disabled:c,className:"btn-primary btn btn-sm",children:c?a.jsx(Ge,{className:"w-3.5 h-3.5 animate-spin"}):"Guardar asistencia"})]})]})]})})}const Wd=[1,2,3,4,5,6,0],Gd={1:"Lunes",2:"Martes",3:"Miércoles",4:"Jueves",5:"Viernes",6:"Sábado",0:"Domingo"};function wi({shift:e,therapists:t}){const s=e==="mañana";return a.jsxs("div",{className:"flex items-start gap-1.5",children:[a.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-semibold shrink-0 mt-px
        ${s?"bg-blue-100 text-blue-700":"bg-orange-100 text-orange-700"}`,children:s?"☀ Mañana":"🌤 Tarde"}),t.length===0?a.jsx("span",{className:"text-[10px] text-gray-300 italic mt-px",children:"Sin terapista registrado"}):a.jsx("div",{className:"flex flex-wrap gap-1",children:t.map(i=>a.jsx("span",{className:"text-[10px] bg-gray-100 text-gray-700 px-1.5 py-px rounded font-medium",children:i.name},i.id??i.name))})]})}function Qd({therapists:e=[]}){const[t,s]=w.useState(null),i=w.useMemo(()=>{const l=new Set;for(const c of Object.values(ts))c.mañana.forEach(d=>l.add(d)),c.tarde.forEach(d=>l.add(d));return Array.from(l).sort((c,d)=>c.localeCompare(d,"es"))},[]),n=w.useMemo(()=>t?Wd.map(l=>{const c=ts[l];if(!c)return null;const d=c.mañana.includes(t),h=c.tarde.includes(t);if(!d&&!h)return null;const j=e.filter(v=>v.specialty===t),m=v=>j.filter(g=>{var f;return(f=g.schedule)==null?void 0:f.some(x=>{var y;return x.day===l&&((y=x.shifts)==null?void 0:y.includes(v))})});return{day:l,mañana:d?m("mañana"):null,tarde:h?m("tarde"):null}}).filter(Boolean):null,[t,e]),r=t?Te(t):null;return a.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 overflow-x-auto",children:[a.jsx("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wide shrink-0 pr-2 border-r border-gray-100",children:"Especialidades"}),i.map(l=>{const c=Te(l),d=t===l;return a.jsx("button",{onClick:()=>s(d?null:l),className:"shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all whitespace-nowrap",style:d?{background:c.color,color:"#fff",borderColor:c.color}:{background:c.light,color:c.color,borderColor:c.color+"66"},children:l},l)})]}),t&&n&&a.jsxs("div",{className:"border-t border-gray-100 px-4 py-3",style:{background:r.light+"66"},children:[a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:r.color}}),a.jsx("span",{className:"text-sm font-bold",style:{color:r.color},children:t}),a.jsxs("span",{className:"text-[10px] text-gray-400",children:["· ",n.length," ",n.length===1?"día":"días"," a la semana"]}),a.jsx("button",{onClick:()=>s(null),className:"ml-auto p-1 rounded-lg hover:bg-black/5 transition-colors",children:a.jsx(Ne,{className:"w-3.5 h-3.5 text-gray-500"})})]}),n.length===0?a.jsx("p",{className:"text-xs text-gray-400 italic",children:"Sin días configurados."}):a.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(({day:l,mañana:c,tarde:d})=>a.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 px-3 py-2.5 min-w-[170px] shadow-sm",children:[a.jsx("p",{className:"text-xs font-bold text-gray-800 mb-2",children:Gd[l]}),a.jsxs("div",{className:"space-y-1.5",children:[c!==null&&a.jsx(wi,{shift:"mañana",therapists:c}),d!==null&&a.jsx(wi,{shift:"tarde",therapists:d})]})]},l))})]})]})}function Xd(e){return e?new Date(e+"T12:00").toLocaleDateString("es",{weekday:"long",day:"numeric",month:"long"}):""}function Jd(e){const t=Oa(e),s=new Date(t[0]+"T12:00").toLocaleDateString("es",{day:"numeric",month:"short"}),i=new Date(t[6]+"T12:00").toLocaleDateString("es",{day:"numeric",month:"short",year:"numeric"});return`Semana ${s} – ${i}`}const Kd=Object.fromEntries(wa.map(e=>[e.key,{backgroundColor:e.color,borderColor:e.color}])),Zd=[{k:"calendar",l:"Calendario",I:ia,tip:"Vista de calendario mensual"},{k:"week",l:"Semanal",I:$n,tip:"Vista semanal por paciente"},{k:"matrix",l:"Día",I:Rn,tip:"Vista diaria por paciente"},{k:"therapists",l:"Terapistas",I:va,tip:"Equipo terapéutico"}];function ep(){const{patients:e,setPatients:t,therapies:s,setTherapies:i,therapists:n,setTherapists:r}=ye(),{isAdmin:l}=Ee(),c=w.useRef(null),[d,h]=w.useState("calendar"),[j,m]=w.useState(ga),[v,g]=w.useState(!1),[f,x]=w.useState(""),[y,S]=w.useState("all"),[u,N]=w.useState("all"),[F,E]=w.useState("all"),[$,Q]=w.useState(!1),[q,L]=w.useState(!1),[K,A]=w.useState(!1),[k,R]=w.useState(null),[H,J]=w.useState(!1),[U,W]=w.useState(null),[re,Z]=w.useState(!1),[C,T]=w.useState(null);w.useEffect(()=>{const o=St(t),p=Dt(i),b=kd(r);return()=>{o(),p(),b()}},[]);const I=w.useMemo(()=>{const o=new Set(s.map(p=>p.therapist).filter(Boolean));return Array.from(o).sort()},[s]),V=w.useMemo(()=>{const o=f.toLowerCase();return s.filter(p=>{var b;return!(o&&!((b=p.patientName)!=null&&b.toLowerCase().includes(o))||y!=="all"&&p.therapyType!==y||u!=="all"&&p.therapist!==u||F!=="all"&&p.status!==F)})},[s,f,y,u,F]),ae=w.useMemo(()=>V.filter(o=>o.date===j),[V,j]),ce=w.useMemo(()=>{const o=s.filter(p=>p.date===j);return{total:o.length,atendidos:o.filter(p=>$a.includes(p.status)).length,ausencias:o.filter(p=>xa.includes(p.status)).length,pendientes:o.filter(p=>as.includes(p.status)).length,reprogramados:o.filter(p=>Gs.includes(p.status)).length}},[s,j]),$e=w.useMemo(()=>{const o=Oa(j),p=s.filter(D=>o.includes(D.date)),b=new Set(p.map(D=>D.therapist).filter(Boolean));return{total:p.length,atendidos:p.filter(D=>$a.includes(D.status)).length,ausencias:p.filter(D=>xa.includes(D.status)).length,pendientes:p.filter(D=>as.includes(D.status)).length,reprogramados:p.filter(D=>Gs.includes(D.status)).length,terapeutas:b.size}},[s,j]),je=d==="week",Me=je?$e:ce,Pe=w.useMemo(()=>{const o=[],p=ae.filter(z=>xa.includes(z.status));p.length&&o.push({type:"warn",msg:`${p.length} paciente(s) no asistieron hoy`});const b=new Date(Date.now()-30*864e5).toISOString().slice(0,10),D={};s.filter(z=>z.date>=b&&xa.includes(z.status)).forEach(z=>{D[z.patientName]=(D[z.patientName]||0)+1});const M=Object.entries(D).filter(([,z])=>z>=3);M.length&&o.push({type:"err",msg:`Ausentismo crónico (≥3 en 30d): ${M.map(([z])=>z).join(", ")}`});const P=Oa(j),O=Object.entries(s.filter(z=>P.includes(z.date)&&z.therapist).reduce((z,G)=>(z[G.therapist]=(z[G.therapist]||0)+1,z),{})).filter(([,z])=>z>20);return O.length&&o.push({type:"warn",msg:`Sobrecarga esta semana: ${O.map(([z,G])=>`${z} (${G})`).join(", ")}`}),o},[ae,s,j]),zt=w.useMemo(()=>{const o={};for(const p of V){const b=`${p.patientId}__${p.date}`;o[b]||(o[b]={patientId:p.patientId,patientName:p.patientName,date:p.date,therapies:[],earliest:"23:59"}),o[b].therapies.push(p),(p.startTime??"")<o[b].earliest&&(o[b].earliest=p.startTime??"08:00")}return Object.values(o).map(({patientId:p,patientName:b,date:D,therapies:M,earliest:P})=>{M.sort((z,G)=>(z.startTime??"").localeCompare(G.startTime??""));const O=M.length;return{id:`grp__${p}__${D}`,title:O>1?`${b} (${O})`:b,start:`${D}T${P}`,backgroundColor:"#2563eb",borderColor:"#1d4ed8",textColor:"#fff",extendedProps:{isGrouped:!0,therapies:M,patientId:p,patientName:b,date:D}}})},[V]);w.useMemo(()=>V.map(o=>{const p=Kd[o.therapyType]??{backgroundColor:"#64748b",borderColor:"#475569"},[b,D]=(o.startTime??"08:00").split(":").map(Number),M=b*60+D+Number(o.durationMinutes??45),P=`${String(Math.floor(M/60)).padStart(2,"0")}:${String(M%60).padStart(2,"0")}`;return{id:o.id,title:`${o.startTime} ${o.patientName}`,start:`${o.date}T${o.startTime}`,end:`${o.date}T${P}`,...p,textColor:"#fff",extendedProps:{...o,isGrouped:!1}}}),[V]);const oa=w.useCallback(o=>{W(o),L(!0)},[]),ka=w.useCallback(o=>{W(o),A(!0)},[]),Ca=w.useCallback((o,p)=>{W({date:o,startTime:p}),Q(!0)},[]),Fa=w.useCallback((o,p)=>{W({date:j,therapyType:o,startTime:p==="tarde"?"14:30":"08:30"}),Q(!0)},[j]),_t=async o=>{Z(!0);try{U!=null&&U.id?(await Us(U.id,o),Y.success("Terapia actualizada")):(await So(o),Y.success("Terapia agendada")),Q(!1),W(null)}catch(p){Y.error(p.message)}finally{Z(!1)}},Xa=async({status:o,notes:p})=>{try{o==="cancelado"?(await Ws(U.id),Y.success("Terapia cancelada y eliminada")):(await Us(U.id,{status:o,attendanceNote:p,attendanceAt:new Date().toISOString()}),Y.success("Asistencia registrada")),A(!1)}catch(b){Y.error(b.message)}},Lt=async()=>{if(k)try{await Ws(k.id),Y.success("Terapia eliminada"),R(null)}catch(o){Y.error(o.message)}},Ja=async()=>{const o=s.filter(p=>p.status==="programado").map(p=>p.id);try{await Ao(o),Y.success(`${o.length} terapias programadas eliminadas`)}catch(p){Y.error(p.message)}finally{J(!1)}},ca=y!=="all"||u!=="all"||F!=="all"||!!f,Ka=je?7:1,$t=()=>m(Xs(j,-Ka)),Ds=()=>m(Xs(j,+Ka)),Za=je?Jd(j):Xd(j);return a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2.5",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsxs("div",{className:"relative",children:[a.jsx(yt,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"}),a.jsx("input",{value:f,onChange:o=>x(o.target.value),placeholder:"Buscar paciente…",className:"pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 w-44 bg-gray-50"})]}),a.jsxs("button",{onClick:()=>g(o=>!o),className:`btn btn-sm gap-1 ${v||ca?"btn-primary":"btn-secondary"}`,children:[a.jsx(Ln,{className:"w-3.5 h-3.5"}),"Filtros",ca?" ●":""]}),a.jsx("div",{className:"flex rounded-lg border border-gray-200 overflow-hidden text-[11px] font-medium",children:Zd.map(({k:o,l:p,I:b})=>a.jsxs("button",{onClick:()=>h(o),title:p,className:`px-2.5 py-1.5 flex items-center gap-1 border-r border-gray-200 last:border-r-0 transition-colors
                        ${d===o?"bg-blue-600 text-white":"text-gray-600 hover:bg-gray-50"}`,children:[a.jsx(b,{className:"w-3 h-3"}),a.jsx("span",{className:"hidden sm:inline",children:p})]},o))}),a.jsx("div",{className:"flex-1"}),l&&a.jsxs(a.Fragment,{children:[a.jsxs("button",{onClick:()=>J(!0),className:"btn btn-sm border border-red-200 text-red-600 hover:bg-red-50 gap-1",title:"Eliminar todas las terapias programadas",children:[a.jsx(_a,{className:"w-3.5 h-3.5"})," Limpiar"]}),a.jsxs("button",{onClick:()=>{W(null),Q(!0)},className:"btn-primary btn btn-sm",children:[a.jsx(ra,{className:"w-3.5 h-3.5"})," Nueva terapia"]})]})]}),v&&a.jsxs("div",{className:"flex flex-wrap gap-2 mt-2 pt-2 border-t border-gray-100",children:[a.jsxs("select",{value:y,onChange:o=>S(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50",children:[a.jsx("option",{value:"all",children:"Todas las especialidades"}),wa.map(o=>a.jsx("option",{value:o.key,children:o.key},o.key))]}),a.jsxs("select",{value:u,onChange:o=>N(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50",children:[a.jsx("option",{value:"all",children:"Todos los terapeutas"}),I.map(o=>a.jsx("option",{value:o,children:o},o))]}),a.jsxs("select",{value:F,onChange:o=>E(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50",children:[a.jsx("option",{value:"all",children:"Todos los estados"}),vs.map(o=>a.jsx("option",{value:o,children:La[o].label},o))]}),ca&&a.jsx("button",{onClick:()=>{S("all"),N("all"),E("all"),x("")},className:"text-xs text-red-500 hover:text-red-700 font-medium px-1",children:"× Limpiar"})]})]}),a.jsx("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-2",children:[{label:"Programados",value:Me.total,I:ia,c:"text-slate-600",bg:"bg-slate-50  border-slate-200"},{label:"Atendidos",value:Me.atendidos,I:ya,c:"text-green-600",bg:"bg-green-50  border-green-200"},{label:"Ausencias",value:Me.ausencias,I:_a,c:"text-red-600",bg:"bg-red-50    border-red-200"},{label:"Pendientes",value:Me.pendientes,I:xs,c:"text-blue-600",bg:"bg-blue-50   border-blue-200"},{label:"Reprog.",value:Me.reprogramados,I:Bn,c:"text-amber-600",bg:"bg-amber-50  border-amber-200"},{label:"Terapeutas",value:je?Me.terapeutas??"—":"—",I:va,c:"text-purple-600",bg:"bg-purple-50 border-purple-200"}].map(({label:o,value:p,I:b,c:D,bg:M})=>a.jsxs("div",{className:`rounded-xl border px-3 py-2 flex items-center gap-2 ${M}`,children:[a.jsx(b,{className:`w-4 h-4 ${D} shrink-0`}),a.jsxs("div",{children:[a.jsx("p",{className:`text-xl font-bold leading-none ${D}`,children:p}),a.jsx("p",{className:"text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide",children:o})]})]},o))}),Pe.length>0&&a.jsx("div",{className:"space-y-1",children:Pe.map((o,p)=>a.jsxs("div",{className:`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border
              ${o.type==="err"?"bg-red-50 border-red-200 text-red-700":"bg-amber-50 border-amber-200 text-amber-700"}`,children:[a.jsx(vt,{className:"w-3.5 h-3.5 shrink-0"}),o.msg]},p))}),a.jsx(Qd,{therapists:n}),d!=="calendar"&&a.jsx("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2",children:a.jsxs("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("button",{onClick:$t,className:"p-1 rounded-lg hover:bg-gray-100",children:a.jsx(qn,{className:"w-4 h-4 text-gray-600"})}),a.jsx("button",{onClick:()=>m(ga),className:`text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors
                  ${Oa(j).includes(ga)&&je||j===ga&&!je?"bg-blue-600 text-white":"text-gray-600 hover:bg-gray-100"}`,children:"Hoy"}),a.jsx("button",{onClick:Ds,className:"p-1 rounded-lg hover:bg-gray-100",children:a.jsx(Hn,{className:"w-4 h-4 text-gray-600"})}),a.jsx("span",{className:"text-sm font-semibold text-gray-800 capitalize ml-1 hidden sm:block",children:Za})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("span",{className:"text-[10px] font-semibold text-gray-400 uppercase tracking-wide",children:[je?"Semana":"Día",":"]}),a.jsx("input",{type:"date",value:j,onChange:o=>m(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50"})]})]})}),a.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm p-3",children:[d!=="calendar"&&d!=="availability"&&a.jsx("div",{className:"flex flex-wrap gap-x-3 gap-y-1 mb-2.5 pb-2.5 border-b border-gray-100",children:wa.map(o=>a.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-gray-500",children:[a.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:o.color}}),o.key]},o.key))}),d==="week"&&a.jsx(Pd,{therapies:V,patients:e,selectedDate:j,onDateSelect:o=>m(o),onCard:oa,onAttend:ka,onScheduleSlot:Ca,isAdmin:l}),d==="matrix"&&a.jsx(Id,{therapies:ae,patients:e,date:j,onCard:oa,onAttend:ka,onScheduleWithSpecialty:Fa,isAdmin:l}),d==="therapists"&&a.jsx(Bd,{therapists:n,isAdmin:l}),d==="calendar"&&a.jsx(Si,{ref:c,plugins:[Ai,Di,Ti,Ei],initialView:"dayGridMonth",locale:hn,height:"auto",headerToolbar:{left:"prev,next today",center:"title",right:""},events:zt,editable:!1,selectable:!1,dateClick:({dateStr:o})=>{m(o.slice(0,10)),h("matrix")},eventClick:({event:o})=>{const p=o.extendedProps;p.isGrouped?T({patientName:p.patientName,date:p.date,therapies:p.therapies}):(W(p),L(!0))},eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!1},slotMinTime:"07:00:00",slotMaxTime:"20:00:00",allDaySlot:!1,nowIndicator:!0,buttonText:{today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Lista"},noEventsText:"Sin terapias en este período"})]}),a.jsx(Na,{open:$,onClose:()=>{Q(!1),W(null)},title:U!=null&&U.id?"Editar terapia":"Nueva terapia",size:"lg",children:a.jsx(Td,{initial:U,onSubmit:_t,onCancel:()=>{Q(!1),W(null)},busy:re})}),q&&U&&a.jsx(Yd,{therapy:U,isAdmin:l,onClose:()=>{L(!1),W(null)},onAttend:o=>{L(!1),W(o),A(!0)},onEdit:o=>{L(!1),W(o),Q(!0)}}),K&&U&&a.jsx(Ud,{therapy:U,onSave:Xa,onClose:()=>{A(!1),W(null)}}),a.jsx(Ra,{open:!!k,title:"Eliminar terapia",message:`¿Eliminar la sesión de ${k==null?void 0:k.patientName}?`,onConfirm:Lt,onCancel:()=>R(null)}),a.jsx(Ra,{open:H,title:"Limpiar terapias programadas",message:`Se eliminarán ${s.filter(o=>o.status==="programado").length} terapias con estado "Programado". Esta acción no se puede deshacer.`,onConfirm:Ja,onCancel:()=>J(!1)}),C&&a.jsx(Vd,{patientId:C.patientId,patientName:C.patientName,date:C.date,dayTherapies:C.therapies,isAdmin:l,onClose:()=>T(null),onAttend:o=>{T(null),W(o),A(!0)},onEdit:o=>{T(null),W(o),Q(!0)},onNewSession:()=>{T(null),W({date:C.date,patientId:C.patientId}),Q(!0)}})]})}function me(e){return Number(e||0).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})}function ap(e){const s=[["Fecha","Paciente","Tipo","Cirujano","Estado","Cotización","Pagado","Fecha pago","Pendiente","Pago Completo","Ayuda Social","Monto Ayuda","Obs. Admin."].join(","),...e.map(l=>[l.date,`"${l.patientName??""}"`,`"${l.surgeryType??""}"`,`"${l.surgeon??""}"`,l.status,l.quotation||0,l.amountPaid||0,l.paymentDate||l.partialPaymentDate||"",Math.max(0,(l.quotation||0)-(l.amountPaid||0)),l.paymentComplete?"Sí":"No",l.socialAid?"Sí":"No",l.socialAidAmount||0,`"${l.adminNotes??""}"`].join(","))],i=new Blob(["\uFEFF"+s.join(`
`)],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(i);Object.assign(document.createElement("a"),{href:n,download:"finanzas.csv"}).click(),URL.revokeObjectURL(n)}function tp(e,t){Zt(async()=>{const{default:s}=await import("./pdf-vendor-D1D5NA3e.js").then(i=>i.c);return{default:s}},__vite__mapDeps([0,1])).then(({default:s})=>{Zt(async()=>{const{default:i}=await import("./pdf-vendor-D1D5NA3e.js").then(n=>n.j);return{default:i}},__vite__mapDeps([0,1])).then(({default:i})=>{const n=new s({orientation:"landscape"}),r=[15,118,110];n.setFillColor(...r),n.rect(0,0,297,22,"F"),n.setTextColor(255,255,255),n.setFontSize(16),n.setFont("helvetica","bold"),n.text("MUNAY — Reporte Financiero",14,10),n.setFontSize(9),n.setFont("helvetica","normal"),n.text(`Generado: ${X(new Date,"dd/MM/yyyy HH:mm")}`,283,10,{align:"right"}),n.text(`Total cirugías: ${t.count} | Cotizado: $${t.quoted.toLocaleString("es-CL")} | Cobrado: $${t.collected.toLocaleString("es-CL")} | Pendiente: $${t.pending.toLocaleString("es-CL")}`,14,18),n.setTextColor(0,0,0),i(n,{startY:26,head:[["Fecha","Paciente","Tipo cirugía","Cirujano","Estado","Cotización","Pagado","Fecha pago","Pendiente","Pago OK","Ayuda Social"]],body:e.map(l=>[l.date,l.patientName??"",l.surgeryType??"",l.surgeon??"",l.status,`$${Number(l.quotation||0).toLocaleString("es-CL")}`,`$${Number(l.amountPaid||0).toLocaleString("es-CL")}`,l.paymentDate||l.partialPaymentDate||"—",`$${Math.max(0,(l.quotation||0)-(l.amountPaid||0)).toLocaleString("es-CL")}`,l.paymentComplete?"✓":"✗",l.socialAid?`$${Number(l.socialAidAmount||0).toLocaleString("es-CL")}`:"—"]),headStyles:{fillColor:r,fontSize:7},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),n.save("finanzas-munay.pdf")})})}const sp=[{v:"all",l:"Todas"},{v:"pendiente",l:"Con deuda"},{v:"completo",l:"Pagadas"},{v:"socialAid",l:"Con ayuda social"}];function ip(){const{surgeries:e,setSurgeries:t}=ye(),[s,i]=w.useState(""),[n,r]=w.useState("all"),[l,c]=w.useState(""),[d,h]=w.useState(""),[j,m]=w.useState("date"),[v,g]=w.useState("desc");w.useEffect(()=>At(t),[]);const f=w.useMemo(()=>e.filter(u=>u.status!=="cancelado"),[e]),x=w.useMemo(()=>{let u=f;if(l&&(u=u.filter(N=>N.date>=l)),d&&(u=u.filter(N=>N.date<=d)),n==="pendiente"&&(u=u.filter(N=>!N.paymentComplete&&(N.quotation||N.amountPaid))),n==="completo"&&(u=u.filter(N=>N.paymentComplete)),n==="socialAid"&&(u=u.filter(N=>N.socialAid)),s){const N=s.toLowerCase();u=u.filter(F=>{var E,$,Q;return((E=F.patientName)==null?void 0:E.toLowerCase().includes(N))||(($=F.surgeryType)==null?void 0:$.toLowerCase().includes(N))||((Q=F.surgeon)==null?void 0:Q.toLowerCase().includes(N))})}return[...u].sort((N,F)=>{let E=N[j]??"",$=F[j]??"";return(j==="quotation"||j==="amountPaid")&&(E=Number(E),$=Number($)),E<$?v==="asc"?-1:1:E>$?v==="asc"?1:-1:0})},[f,l,d,n,s,j,v]),y=w.useMemo(()=>{const u=x.reduce((E,$)=>E+Number($.quotation||0),0),N=x.reduce((E,$)=>E+Number($.amountPaid||0),0),F=x.reduce((E,$)=>E+Number($.socialAidAmount||0),0);return{count:x.length,quoted:u,collected:N,pending:Math.max(0,u-N),socialAid:F,paidCount:x.filter(E=>E.paymentComplete).length,socialCount:x.filter(E=>E.socialAid).length}},[x]),S=u=>{j===u?g(N=>N==="asc"?"desc":"asc"):(m(u),g("desc"))};return a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[a.jsx(rt,{icon:us,label:"Total cotizado",value:me(y.quoted),sub:`${y.count} cirugía${y.count!==1?"s":""}`,color:"teal"}),a.jsx(rt,{icon:Ni,label:"Total cobrado",value:me(y.collected),sub:`${y.paidCount} pagadas completo`,color:"green"}),a.jsx(rt,{icon:Vn,label:"Total pendiente",value:me(y.pending),sub:y.pending>0?"Por cobrar":"Sin deuda",color:y.pending>0?"red":"green"}),a.jsx(rt,{icon:Is,label:"Ayuda social",value:me(y.socialAid),sub:`${y.socialCount} paciente${y.socialCount!==1?"s":""}`,color:"purple"})]}),a.jsx("div",{className:"card py-3",children:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[a.jsx("div",{className:"flex-1 min-w-[200px]",children:a.jsx(Ui,{value:s,onChange:i,placeholder:"Buscar paciente, cirugía, cirujano..."})}),a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("label",{className:"text-xs text-gray-500 shrink-0",children:"Desde"}),a.jsx("input",{type:"date",value:l,onChange:u=>c(u.target.value),className:"input text-sm py-1.5 w-36"})]}),a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("label",{className:"text-xs text-gray-500 shrink-0",children:"Hasta"}),a.jsx("input",{type:"date",value:d,onChange:u=>h(u.target.value),className:"input text-sm py-1.5 w-36"})]}),(l||d||s)&&a.jsx("button",{onClick:()=>{i(""),c(""),h("")},className:"btn-secondary btn btn-sm text-xs",children:"Limpiar"})]}),a.jsxs("div",{className:"flex flex-wrap gap-2 items-center justify-between",children:[a.jsx("div",{className:"flex gap-1.5 flex-wrap",children:sp.map(({v:u,l:N})=>a.jsx("button",{onClick:()=>r(u),className:`btn btn-sm ${n===u?"btn-primary":"btn-secondary"}`,children:N},u))}),a.jsxs("div",{className:"flex gap-2 ml-auto",children:[a.jsxs("button",{onClick:()=>ap(x),className:"btn-secondary btn btn-sm",title:"Exportar CSV",children:[a.jsx(hs,{className:"w-4 h-4"})," CSV"]}),a.jsxs("button",{onClick:()=>tp(x,y),className:"btn-secondary btn btn-sm",title:"Exportar PDF",children:[a.jsx(Je,{className:"w-4 h-4"})," PDF"]})]})]})]})}),a.jsxs("div",{className:"flex gap-4 flex-wrap text-sm text-gray-600",children:[a.jsxs("span",{children:[a.jsx("strong",{className:"text-gray-800",children:x.length})," registros"]}),a.jsx("span",{className:"text-gray-300",children:"|"}),a.jsxs("span",{children:["Cotizado: ",a.jsx("strong",{className:"text-teal-700",children:me(y.quoted)})]}),a.jsxs("span",{children:["Cobrado: ",a.jsx("strong",{className:"text-green-700",children:me(y.collected)})]}),y.pending>0&&a.jsxs("span",{children:["Pendiente: ",a.jsx("strong",{className:"text-red-600",children:me(y.pending)})]})]}),x.length===0?a.jsxs("div",{className:"card flex flex-col items-center py-14 text-gray-400",children:[a.jsx(vt,{className:"w-10 h-10 mb-2 opacity-40"}),a.jsx("p",{className:"text-sm",children:"No hay registros que coincidan con los filtros."})]}):a.jsxs("div",{className:"card p-0 overflow-hidden",children:[a.jsx("div",{className:"hidden md:block overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:a.jsxs("tr",{children:[a.jsx(lt,{label:"Fecha",field:"date",sortField:j,sortDir:v,onSort:S}),a.jsx(lt,{label:"Paciente",field:"patientName",sortField:j,sortDir:v,onSort:S}),a.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Cirugía"}),a.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Cirujano"}),a.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Estado"}),a.jsx(lt,{label:"Cotización",field:"quotation",sortField:j,sortDir:v,onSort:S,right:!0}),a.jsx(lt,{label:"Pagado",field:"amountPaid",sortField:j,sortDir:v,onSort:S,right:!0}),a.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Fecha pago"}),a.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Pendiente"}),a.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Pago"}),a.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Ayuda Social"})]})}),a.jsx("tbody",{className:"divide-y divide-gray-50",children:x.map(u=>{const N=Math.max(0,Number(u.quotation||0)-Number(u.amountPaid||0));return a.jsxs("tr",{className:`hover:bg-gray-50 transition ${u.paymentComplete?"":N>0?"bg-red-50/30":""}`,children:[a.jsx("td",{className:"px-4 py-3 text-gray-600 whitespace-nowrap",children:X(new Date(u.date+"T12:00"),"dd/MM/yyyy")}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:`w-1.5 h-1.5 rounded-full shrink-0 ${u.patientType==="flap"?"bg-green-500":"bg-blue-500"}`}),a.jsx("span",{className:"font-medium text-gray-800",children:u.patientName})]})}),a.jsx("td",{className:"px-4 py-3 text-gray-600 max-w-[160px] truncate",title:u.surgeryType,children:u.surgeryType}),a.jsx("td",{className:"px-4 py-3 text-gray-600",children:u.surgeon||"—"}),a.jsx("td",{className:"px-4 py-3",children:a.jsx(Ye,{variant:u.status})}),a.jsx("td",{className:"px-4 py-3 text-right font-medium text-gray-800",children:u.quotation?me(u.quotation):a.jsx("span",{className:"text-gray-300",children:"—"})}),a.jsx("td",{className:"px-4 py-3 text-right text-green-700 font-medium",children:u.amountPaid?me(u.amountPaid):a.jsx("span",{className:"text-gray-300",children:"—"})}),a.jsx("td",{className:"px-4 py-3 text-xs text-gray-500 whitespace-nowrap",children:u.paymentDate?a.jsx("span",{className:"text-green-700 font-medium",children:X(new Date(u.paymentDate+"T12:00"),"dd/MM/yyyy")}):u.partialPaymentDate?a.jsxs("span",{className:"text-amber-600",children:[X(new Date(u.partialPaymentDate+"T12:00"),"dd/MM/yyyy")," ",a.jsx("span",{className:"text-gray-400",children:"(parcial)"})]}):a.jsx("span",{className:"text-gray-300",children:"—"})}),a.jsx("td",{className:"px-4 py-3 text-right",children:N>0?a.jsx("span",{className:"text-red-600 font-semibold",children:me(N)}):a.jsx("span",{className:"text-gray-300",children:"—"})}),a.jsx("td",{className:"px-4 py-3 text-center",children:u.paymentComplete?a.jsx(ya,{className:"w-4 h-4 text-green-600 mx-auto"}):a.jsx(_a,{className:"w-4 h-4 text-red-400 mx-auto"})}),a.jsx("td",{className:"px-4 py-3 text-center",children:u.socialAid?a.jsx("span",{className:"text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium",children:u.socialAidAmount?me(u.socialAidAmount):"Sí"}):a.jsx("span",{className:"text-gray-300 text-xs",children:"—"})})]},u.id)})}),a.jsx("tfoot",{className:"bg-gray-50 border-t-2 border-gray-200",children:a.jsxs("tr",{children:[a.jsxs("td",{colSpan:5,className:"px-4 py-3 text-xs font-semibold text-gray-500 uppercase",children:["Totales (",x.length," registros)"]}),a.jsx("td",{className:"px-4 py-3 text-right font-bold text-gray-800",children:me(y.quoted)}),a.jsx("td",{className:"px-4 py-3 text-right font-bold text-green-700",children:me(y.collected)}),a.jsx("td",{className:"px-4 py-3"}),a.jsx("td",{className:"px-4 py-3 text-right font-bold text-red-600",children:y.pending>0?me(y.pending):"—"}),a.jsxs("td",{className:"px-4 py-3 text-center text-xs text-gray-500",children:[y.paidCount,"/",x.length]}),a.jsx("td",{className:"px-4 py-3 text-center font-bold text-purple-700 text-xs",children:y.socialAid>0?me(y.socialAid):"—"})]})})]})}),a.jsx("ul",{className:"md:hidden divide-y divide-gray-100",children:x.map(u=>{const N=Math.max(0,Number(u.quotation||0)-Number(u.amountPaid||0));return a.jsxs("li",{className:"p-4 space-y-2",children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-medium text-gray-800",children:u.patientName}),a.jsx("p",{className:"text-xs text-gray-500",children:u.surgeryType}),a.jsxs("p",{className:"text-xs text-gray-400",children:[X(new Date(u.date+"T12:00"),"d MMM yyyy",{locale:ke})," · ",u.surgeon||"—"]})]}),a.jsx(Ye,{variant:u.status})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[a.jsxs("div",{className:"bg-gray-50 rounded p-2",children:[a.jsx("p",{className:"text-gray-400",children:"Cotización"}),a.jsx("p",{className:"font-semibold text-gray-800",children:u.quotation?me(u.quotation):"—"})]}),a.jsxs("div",{className:"bg-gray-50 rounded p-2",children:[a.jsx("p",{className:"text-gray-400",children:"Pagado"}),a.jsx("p",{className:"font-semibold text-green-700",children:u.amountPaid?me(u.amountPaid):"—"})]}),a.jsxs("div",{className:`rounded p-2 ${N>0?"bg-red-50":"bg-gray-50"}`,children:[a.jsx("p",{className:"text-gray-400",children:"Pendiente"}),a.jsx("p",{className:`font-semibold ${N>0?"text-red-600":"text-gray-400"}`,children:N>0?me(N):"—"})]})]}),(u.paymentDate||u.partialPaymentDate)&&a.jsxs("p",{className:"text-xs text-gray-500",children:["Fecha pago:"," ",u.paymentDate?a.jsx("span",{className:"text-green-700 font-medium",children:X(new Date(u.paymentDate+"T12:00"),"dd/MM/yyyy")}):a.jsxs("span",{className:"text-amber-600",children:[X(new Date(u.partialPaymentDate+"T12:00"),"dd/MM/yyyy")," (parcial)"]})]}),a.jsxs("div",{className:"flex gap-2",children:[u.paymentComplete&&a.jsxs("span",{className:"flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full",children:[a.jsx(ya,{className:"w-3 h-3"})," Pagado"]}),u.socialAid&&a.jsxs("span",{className:"flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full",children:[a.jsx(Is,{className:"w-3 h-3"})," Ayuda social"]}),u.adminNotes&&a.jsx("span",{className:"text-xs text-gray-400 italic truncate",children:u.adminNotes})]})]},u.id)})})]})]})}function rt({icon:e,label:t,value:s,sub:i,color:n}){const r={teal:"bg-teal-50   text-teal-700",green:"bg-green-50  text-green-700",red:"bg-red-50    text-red-600",purple:"bg-purple-50 text-purple-700"};return a.jsxs("div",{className:"card",children:[a.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${r[n]}`,children:a.jsx(e,{className:"w-5 h-5"})}),a.jsx("p",{className:"text-lg font-bold text-gray-800 leading-tight",children:s}),a.jsx("p",{className:"text-sm font-medium text-gray-600 mt-0.5",children:t}),a.jsx("p",{className:"text-xs text-gray-400 mt-0.5",children:i})]})}function lt({label:e,field:t,sortField:s,sortDir:i,onSort:n,right:r=!1}){return a.jsxs("th",{className:`px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-700 select-none ${r?"text-right":"text-left"}`,onClick:()=>n(t),children:[e," ",s===t?i==="asc"?a.jsx(Yn,{className:"w-3.5 h-3.5 inline"}):a.jsx(ms,{className:"w-3.5 h-3.5 inline"}):null]})}function np(){const{loading:e}=Ee();return e?a.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{backgroundColor:"#F8FAFC"},children:a.jsxs("div",{className:"flex flex-col items-center gap-3",children:[a.jsx("div",{className:"w-12 h-12 border-4 border-t-transparent rounded-full animate-spin",style:{borderColor:"#1A365D",borderTopColor:"transparent"}}),a.jsx("p",{className:"font-semibold",style:{color:"#1A365D"},children:"Hospital Munay"})]})}):a.jsxs(An,{children:[a.jsx(Oe,{path:"/login",element:a.jsx(Nr,{})}),a.jsx(Oe,{element:a.jsx(jr,{}),children:a.jsxs(Oe,{element:a.jsx(yr,{}),children:[a.jsx(Oe,{index:!0,element:a.jsx(dt,{to:"/dashboard",replace:!0})}),a.jsx(Oe,{path:"/dashboard",element:a.jsx(Mo,{})}),a.jsx(Oe,{path:"/pacientes",element:a.jsx(rd,{})}),a.jsx(Oe,{path:"/cirugias",element:a.jsx(Nd,{})}),a.jsx(Oe,{path:"/terapias",element:a.jsx(ep,{})}),a.jsx(Oe,{element:a.jsx(wr,{}),children:a.jsx(Oe,{path:"/finanzas",element:a.jsx(ip,{})})})]})}),a.jsx(Oe,{path:"*",element:a.jsx(dt,{to:"/dashboard",replace:!0})})]})}pr({onNeedRefresh(){Y("Nueva versión disponible. Recarga para actualizar.",{duration:8e3,icon:"🔄"})},onOfflineReady(){Y.success("App lista para usar sin conexión.")}});es.createRoot(document.getElementById("root")).render(a.jsx(he.StrictMode,{children:a.jsx(Dn,{children:a.jsxs(xr,{children:[a.jsx(np,{}),a.jsx(Un,{position:"top-right",toastOptions:{duration:4e3,style:{fontFamily:"Inter, sans-serif",fontSize:"14px"},success:{iconTheme:{primary:"#0f766e",secondary:"#fff"}}}})]})})}));
