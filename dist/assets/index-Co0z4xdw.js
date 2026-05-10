const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdf-vendor-D1D5NA3e.js","assets/react-vendor-BZp2bWF9.js"])))=>i.map(i=>d[i]);
import{r as A,b as ur,N as pr,u as mr,O as ia,d as Nt,e as fr,L as na,R as ue,f as gr,h as ye,B as hr}from"./react-vendor-BZp2bWF9.js";import{c as xr,L as br,U as jt,C as tt,H as St,D as oa,X as Re,a as vr,z as ee,M as yr,S as wr,E as Nr,b as Zt,d as lt,e as jr,f as nt,T as xs,A as la,g as bs,h as vs,F as da,i as Ye,j as Ia,k as La,l as za,P as Ft,m as Kt,n as ca,o as Fr,p as at,q as Bt,r as $a,s as ys,t as ws,u as Cr,v as Ra,w as kr,x as Ar,y as Sr}from"./ui-vendor-S1oflI6S.js";import{_ as ea,E as ua,a as pa}from"./pdf-vendor-D1D5NA3e.js";import{i as Dr,g as Tr,a as Mr,o as Er,b as Pr,d as Ue,s as _r,c as Or,e as Ir,q as ma,f as fa,h as Qe,j as ga,u as ha,k as xa,l as Ns,m as Ge}from"./firebase-vendor-BgxLv82m.js";import{F as js,i as Fs,a as Cs,b as ks,c as As}from"./calendar-vendor-2lW9V1yc.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();var Ss={exports:{}},Dt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=A,zr=Symbol.for("react.element"),$r=Symbol.for("react.fragment"),Rr=Object.prototype.hasOwnProperty,qr=Lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hr={key:!0,ref:!0,__self:!0,__source:!0};function Ds(e,a,s){var r,i={},n=null,o=null;s!==void 0&&(n=""+s),a.key!==void 0&&(n=""+a.key),a.ref!==void 0&&(o=a.ref);for(r in a)Rr.call(a,r)&&!Hr.hasOwnProperty(r)&&(i[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zr,type:e,key:n,ref:o,props:i,_owner:qr.current}}Dt.Fragment=$r;Dt.jsx=Ds;Dt.jsxs=Ds;Ss.exports=Dt;var t=Ss.exports,ta={},qa=ur;ta.createRoot=qa.createRoot,ta.hydrateRoot=qa.hydrateRoot;function Vr(e={}){const{immediate:a=!1,onNeedRefresh:s,onOfflineReady:r,onRegistered:i,onRegisteredSW:n,onRegisterError:o}=e;let d,g;const v=async(p=!0)=>{await g};async function h(){if("serviceWorker"in navigator){if(d=await ea(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/sw.js",{scope:"/",type:"classic"})).catch(p=>{o==null||o(p)}),!d)return;d.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),d.addEventListener("installed",p=>{p.isUpdate||r==null||r()}),d.register({immediate:a}).then(p=>{n?n("/sw.js",p):i==null||i(p)}).catch(p=>{o==null||o(p)})}}return g=h(),v}const Br={apiKey:"AIzaSyBWwGg-1xq9tXpNiHHIlAbrHre4KfiSRBU",authDomain:"hospital-munay.firebaseapp.com",projectId:"hospital-munay",storageBucket:"hospital-munay.firebasestorage.app",messagingSenderId:"219046537621",appId:"1:219046537621:web:b43f713778f76a39b82e9c"},Ts=Dr(Br),be=Tr(Ts),mt=Mr(Ts),Ms=A.createContext(null);function Yr({children:e}){const[a,s]=A.useState(null),[r,i]=A.useState(null),[n,o]=A.useState(!0);A.useEffect(()=>Er(mt,async w=>{if(w){s(w);try{const D=await Pr(Ue(be,"users",w.uid));i(D.exists()?D.data().role:"viewer")}catch{i("viewer")}}else s(null),i(null);o(!1)}),[]);const d=(C,w)=>Ir(mt,C,w),g=()=>Or(mt),v=C=>_r(mt,C),h=r==="admin",p=r==="secretaria",x=r==="viewer",f=h||p;return t.jsx(Ms.Provider,{value:{user:a,role:r,isAdmin:h,isSecretary:p,isViewer:x,canEdit:f,loading:n,login:d,logout:g,resetPassword:v},children:e})}const Oe=()=>{const e=A.useContext(Ms);if(!e)throw new Error("useAuth must be used inside AuthProvider");return e},ve=xr(e=>({patients:[],setPatients:a=>e({patients:a}),surgeries:[],setSurgeries:a=>e({surgeries:a}),therapies:[],setTherapies:a=>e({therapies:a}),sidebarOpen:!1,toggleSidebar:()=>e(a=>({sidebarOpen:!a.sidebarOpen})),closeSidebar:()=>e({sidebarOpen:!1}),searchQuery:"",setSearchQuery:a=>e({searchQuery:a})})),Wr="/assets/LOGO-xe2ktJXh.jpg",Ur=[{to:"/dashboard",icon:br,label:"Dashboard",adminOnly:!1},{to:"/pacientes",icon:jt,label:"Pacientes",adminOnly:!1},{to:"/cirugias",icon:tt,label:"Cirugías",adminOnly:!1},{to:"/terapias",icon:St,label:"Terapias",adminOnly:!1},{to:"/finanzas",icon:oa,label:"Finanzas",adminOnly:!0}];function Qr(){const{sidebarOpen:e,closeSidebar:a}=ve(),{logout:s,user:r,isAdmin:i,isSecretary:n}=Oe(),o=Ur.filter(g=>!g.adminOnly||i),d=async()=>{await s(),ee.success("Sesión cerrada")};return t.jsxs("aside",{className:`
      fixed inset-y-0 left-0 z-30 w-64 flex flex-col
      transform transition-transform duration-200 ease-in-out
      lg:static lg:translate-x-0
      ${e?"translate-x-0":"-translate-x-full"}
    `,style:{backgroundColor:"#1A365D"},children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/10",children:[t.jsx("div",{className:"bg-white rounded-xl px-3 py-1.5 flex items-center",children:t.jsx("img",{src:Wr,alt:"Hospital Munay",className:"h-12 w-auto object-contain"})}),t.jsx("button",{onClick:a,className:"lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition text-white",children:t.jsx(Re,{className:"w-5 h-5"})})]}),t.jsx("nav",{className:"flex-1 px-3 py-4 space-y-0.5 overflow-y-auto",children:o.map(({to:g,icon:v,label:h,adminOnly:p})=>t.jsxs(pr,{to:g,onClick:a,className:({isActive:x})=>`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${x?"text-hm-primary font-bold shadow-sm":"text-white/75 hover:text-white hover:bg-white/10"}`,style:({isActive:x})=>x?{backgroundColor:"#09D6D4",color:"#1A365D"}:{},children:[t.jsx(v,{className:"w-5 h-5 shrink-0"}),t.jsx("span",{className:"flex-1",children:h}),p&&t.jsx("span",{className:"text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-medium",children:"Admin"})]},g))}),t.jsxs("div",{className:"px-4 py-4 border-t border-white/10",children:[t.jsx("p",{className:"text-xs text-white/60 truncate mb-0.5",children:r==null?void 0:r.email}),t.jsx("p",{className:"text-xs text-white/40 mb-3",children:i?"Administrador":n?"Secretaria":"Visualizador"}),t.jsxs("button",{onClick:d,className:`flex items-center gap-2 w-full text-sm text-white/70 hover:text-white
                     hover:bg-white/10 rounded-xl px-3 py-2 transition`,children:[t.jsx(vr,{className:"w-4 h-4"}),"Cerrar sesión"]})]})]})}const Gr={"/dashboard":"Dashboard","/pacientes":"Pacientes","/cirugias":"Cirugías","/terapias":"Terapias","/finanzas":"Finanzas"};function Xr(){const{toggleSidebar:e}=ve(),{pathname:a}=mr(),s=Gr[a]??"Hospital Munay";return t.jsxs("header",{className:"bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-4 no-print shadow-sm",children:[t.jsx("button",{onClick:e,className:"lg:hidden p-2 rounded-lg text-hm-primary hover:bg-hm-secondary-100 transition","aria-label":"Abrir menú",children:t.jsx(yr,{className:"w-5 h-5"})}),t.jsx("h1",{className:"text-lg font-bold text-hm-primary flex-1",children:s})]})}function Jr(){const{sidebarOpen:e,closeSidebar:a}=ve();return t.jsxs("div",{className:"flex h-screen overflow-hidden bg-gray-50",children:[e&&t.jsx("div",{className:"fixed inset-0 z-20 bg-black/40 lg:hidden",onClick:a}),t.jsx(Qr,{}),t.jsxs("div",{className:"flex flex-col flex-1 overflow-hidden",children:[t.jsx(Xr,{}),t.jsx("main",{className:"flex-1 overflow-y-auto p-4 md:p-6",children:t.jsx(ia,{})})]})]})}function Zr(){const{user:e,loading:a}=Oe();return a?null:e?t.jsx(ia,{}):t.jsx(Nt,{to:"/login",replace:!0})}function Kr(){const{isAdmin:e,loading:a}=Oe();return a?null:e?t.jsx(ia,{}):t.jsx(Nt,{to:"/dashboard",replace:!0})}function ei(){const{login:e}=Oe(),a=fr(),[s,r]=A.useState(""),[i,n]=A.useState(""),[o,d]=A.useState(!1),[g,v]=A.useState(!1),[h,p]=A.useState(""),x=async f=>{if(f.preventDefault(),!s||!i){p("Completa todos los campos.");return}v(!0),p("");try{await e(s.trim(),i),ee.success("Bienvenido a Munay"),a("/dashboard",{replace:!0})}catch(C){p({"auth/invalid-credential":"Correo o contraseña incorrectos.","auth/user-not-found":"Usuario no encontrado.","auth/wrong-password":"Contraseña incorrecta.","auth/too-many-requests":"Demasiados intentos. Intenta más tarde."}[C.code]??"Error al iniciar sesión. Intenta de nuevo.")}finally{v(!1)}};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{background:"linear-gradient(135deg, #1A365D 0%, #0d2040 100%)"},children:t.jsxs("div",{className:"w-full max-w-sm",children:[t.jsxs("div",{className:"flex flex-col items-center mb-8 text-white",children:[t.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center mb-4",style:{backgroundColor:"rgba(9,214,212,0.2)",border:"1px solid rgba(9,214,212,0.4)"},children:t.jsx(wr,{className:"w-9 h-9 text-white"})}),t.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Munay"}),t.jsx("p",{className:"text-sm mt-1",style:{color:"#72A0C1"},children:"Gestión Quirúrgica Hospitalaria"})]}),t.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8",children:[t.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-6 text-center",children:"Iniciar sesión"}),t.jsxs("form",{onSubmit:x,className:"space-y-4",children:[h&&t.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg",children:h}),t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Correo electrónico"}),t.jsx("input",{type:"email",value:s,onChange:f=>r(f.target.value),placeholder:"usuario@hospital.com",className:"input",autoComplete:"username",disabled:g})]}),t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Contraseña"}),t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:o?"text":"password",value:i,onChange:f=>n(f.target.value),placeholder:"••••••••",className:"input pr-10",autoComplete:"current-password",disabled:g}),t.jsx("button",{type:"button",onClick:()=>d(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:o?t.jsx(Nr,{className:"w-4 h-4"}):t.jsx(Zt,{className:"w-4 h-4"})})]})]}),t.jsx("button",{type:"submit",disabled:g,className:"btn-primary btn w-full justify-center py-2.5 mt-2",children:g?t.jsx(lt,{className:"w-4 h-4 animate-spin"}):"Ingresar"})]})]}),t.jsxs("p",{className:"text-center text-xs mt-6",style:{color:"#72A0C1"},children:["Munay © ",new Date().getFullYear()," — Sistema Hospitalario"]})]})})}const Ha={mny:{label:"MNY",longLabel:"Hospital Munay",bg:"#1e40af",lightBg:"#dbeafe",textColor:"#1d4ed8",border:"#93c5fd"},jwi:{label:"JWI",longLabel:"JIWAQUI",bg:"#ea580c",lightBg:"#ffedd5",textColor:"#c2410c",border:"#fdba74"},ext:{label:"EXT",longLabel:"Externo",bg:"#16a34a",lightBg:"#dcfce7",textColor:"#15803d",border:"#86efac"},flap:{label:"MNY",longLabel:"Hospital Munay",bg:"#1e40af",lightBg:"#dbeafe",textColor:"#1d4ed8",border:"#93c5fd"},external:{label:"EXT",longLabel:"Externo",bg:"#16a34a",lightBg:"#dcfce7",textColor:"#15803d",border:"#86efac"}};function oe(e){return Ha[e]??Ha.ext}const Va={mny:{backgroundColor:"#1e40af",borderColor:"#1d4ed8",textColor:"#fff"},jwi:{backgroundColor:"#ea580c",borderColor:"#c2410c",textColor:"#fff"},ext:{backgroundColor:"#16a34a",borderColor:"#15803d",textColor:"#fff"},flap:{backgroundColor:"#1e40af",borderColor:"#1d4ed8",textColor:"#fff"},external:{backgroundColor:"#16a34a",borderColor:"#15803d",textColor:"#fff"}};function X(e){const a=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&a==="[object Date]"?new e.constructor(+e):typeof e=="number"||a==="[object Number]"||typeof e=="string"||a==="[object String]"?new Date(e):new Date(NaN)}function _e(e,a){return e instanceof Date?new e.constructor(a):new Date(a)}function ti(e,a){const s=X(e);return isNaN(a)?_e(e,NaN):(a&&s.setDate(s.getDate()+a),s)}const Es=6048e5,ai=864e5,Ps=6e4,_s=36e5;let si={};function Tt(){return si}function qe(e,a){var d,g,v,h;const s=Tt(),r=(a==null?void 0:a.weekStartsOn)??((g=(d=a==null?void 0:a.locale)==null?void 0:d.options)==null?void 0:g.weekStartsOn)??s.weekStartsOn??((h=(v=s.locale)==null?void 0:v.options)==null?void 0:h.weekStartsOn)??0,i=X(e),n=i.getDay(),o=(n<r?7:0)+n-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Ct(e){return qe(e,{weekStartsOn:1})}function Os(e){const a=X(e),s=a.getFullYear(),r=_e(e,0);r.setFullYear(s+1,0,4),r.setHours(0,0,0,0);const i=Ct(r),n=_e(e,0);n.setFullYear(s,0,4),n.setHours(0,0,0,0);const o=Ct(n);return a.getTime()>=i.getTime()?s+1:a.getTime()>=o.getTime()?s:s-1}function Ba(e){const a=X(e);return a.setHours(0,0,0,0),a}function Ya(e){const a=X(e),s=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return s.setUTCFullYear(a.getFullYear()),+e-+s}function Is(e,a){const s=Ba(e),r=Ba(a),i=+s-Ya(s),n=+r-Ya(r);return Math.round((i-n)/ai)}function ri(e){const a=Os(e),s=_e(e,0);return s.setFullYear(a,0,4),s.setHours(0,0,0,0),Ct(s)}function st(e,a){const s=X(e),r=X(a),i=s.getTime()-r.getTime();return i<0?-1:i>0?1:i}function ii(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Me(e){if(!ii(e)&&typeof e!="number")return!1;const a=X(e);return!isNaN(Number(a))}function ni(e,a){const s=X(e),r=X(a),i=s.getFullYear()-r.getFullYear(),n=s.getMonth()-r.getMonth();return i*12+n}function oi(e,a){const s=X(e),r=X(a);return s.getFullYear()-r.getFullYear()}function Xe(e,a){const s=X(e),r=X(a),i=Wa(s,r),n=Math.abs(Is(s,r));s.setDate(s.getDate()-i*n);const o=+(Wa(s,r)===-i),d=i*(n-o);return d===0?0:d}function Wa(e,a){const s=e.getFullYear()-a.getFullYear()||e.getMonth()-a.getMonth()||e.getDate()-a.getDate()||e.getHours()-a.getHours()||e.getMinutes()-a.getMinutes()||e.getSeconds()-a.getSeconds()||e.getMilliseconds()-a.getMilliseconds();return s<0?-1:s>0?1:s}function li(e){const a=X(e);return a.setHours(23,59,59,999),a}function di(e){const a=X(e),s=a.getMonth();return a.setFullYear(a.getFullYear(),s+1,0),a.setHours(23,59,59,999),a}function ci(e){const a=X(e);return+li(a)==+di(a)}function Je(e,a){const s=X(e),r=X(a),i=st(s,r),n=Math.abs(ni(s,r));let o;if(n<1)o=0;else{s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-i*n);let d=st(s,r)===-i;ci(X(e))&&n===1&&st(e,r)===1&&(d=!1),o=i*(n-Number(d))}return o===0?0:o}function Ie(e,a){const s=X(e),r=X(a),i=st(s,r),n=Math.abs(oi(s,r));s.setFullYear(1584),r.setFullYear(1584);const o=st(s,r)===-i,d=i*(n-+o);return d===0?0:d}function ui(e){const a=X(e),s=_e(e,0);return s.setFullYear(a.getFullYear(),0,1),s.setHours(0,0,0,0),s}const pi={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},mi=(e,a,s)=>{let r;const i=pi[e];return typeof i=="string"?r=i:a===1?r=i.one:r=i.other.replace("{{count}}",a.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"in "+r:r+" ago":r};function We(e){return(a={})=>{const s=a.width?String(a.width):e.defaultWidth;return e.formats[s]||e.formats[e.defaultWidth]}}const fi={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},gi={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},hi={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xi={date:We({formats:fi,defaultWidth:"full"}),time:We({formats:gi,defaultWidth:"full"}),dateTime:We({formats:hi,defaultWidth:"full"})},bi={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},vi=(e,a,s,r)=>bi[e];function Se(e){return(a,s)=>{const r=s!=null&&s.context?String(s.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,d=s!=null&&s.width?String(s.width):o;i=e.formattingValues[d]||e.formattingValues[o]}else{const o=e.defaultWidth,d=s!=null&&s.width?String(s.width):e.defaultWidth;i=e.values[d]||e.values[o]}const n=e.argumentCallback?e.argumentCallback(a):a;return i[n]}}const yi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ni={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ji={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ci={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ki=(e,a)=>{const s=Number(e),r=s%100;if(r>20||r<10)switch(r%10){case 1:return s+"st";case 2:return s+"nd";case 3:return s+"rd"}return s+"th"},Ai={ordinalNumber:ki,era:Se({values:yi,defaultWidth:"wide"}),quarter:Se({values:wi,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:Ni,defaultWidth:"wide"}),day:Se({values:ji,defaultWidth:"wide"}),dayPeriod:Se({values:Fi,defaultWidth:"wide",formattingValues:Ci,defaultFormattingWidth:"wide"})};function De(e){return(a,s={})=>{const r=s.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],n=a.match(i);if(!n)return null;const o=n[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],g=Array.isArray(d)?Di(d,p=>p.test(o)):Si(d,p=>p.test(o));let v;v=e.valueCallback?e.valueCallback(g):g,v=s.valueCallback?s.valueCallback(v):v;const h=a.slice(o.length);return{value:v,rest:h}}}function Si(e,a){for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&a(e[s]))return s}function Di(e,a){for(let s=0;s<e.length;s++)if(a(e[s]))return s}function Ls(e){return(a,s={})=>{const r=a.match(e.matchPattern);if(!r)return null;const i=r[0],n=a.match(e.parsePattern);if(!n)return null;let o=e.valueCallback?e.valueCallback(n[0]):n[0];o=s.valueCallback?s.valueCallback(o):o;const d=a.slice(i.length);return{value:o,rest:d}}}const Ti=/^(\d+)(th|st|nd|rd)?/i,Mi=/\d+/i,Ei={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Pi={any:[/^b/i,/^(a|c)/i]},_i={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Oi={any:[/1/i,/2/i,/3/i,/4/i]},Ii={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Li={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},zi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$i={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ri={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qi={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Hi={ordinalNumber:Ls({matchPattern:Ti,parsePattern:Mi,valueCallback:e=>parseInt(e,10)}),era:De({matchPatterns:Ei,defaultMatchWidth:"wide",parsePatterns:Pi,defaultParseWidth:"any"}),quarter:De({matchPatterns:_i,defaultMatchWidth:"wide",parsePatterns:Oi,defaultParseWidth:"any",valueCallback:e=>e+1}),month:De({matchPatterns:Ii,defaultMatchWidth:"wide",parsePatterns:Li,defaultParseWidth:"any"}),day:De({matchPatterns:zi,defaultMatchWidth:"wide",parsePatterns:$i,defaultParseWidth:"any"}),dayPeriod:De({matchPatterns:Ri,defaultMatchWidth:"any",parsePatterns:qi,defaultParseWidth:"any"})},Vi={code:"en-US",formatDistance:mi,formatLong:xi,formatRelative:vi,localize:Ai,match:Hi,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Bi(e){const a=X(e);return Is(a,ui(a))+1}function Yi(e){const a=X(e),s=+Ct(a)-+ri(a);return Math.round(s/Es)+1}function zs(e,a){var h,p,x,f;const s=X(e),r=s.getFullYear(),i=Tt(),n=(a==null?void 0:a.firstWeekContainsDate)??((p=(h=a==null?void 0:a.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??i.firstWeekContainsDate??((f=(x=i.locale)==null?void 0:x.options)==null?void 0:f.firstWeekContainsDate)??1,o=_e(e,0);o.setFullYear(r+1,0,n),o.setHours(0,0,0,0);const d=qe(o,a),g=_e(e,0);g.setFullYear(r,0,n),g.setHours(0,0,0,0);const v=qe(g,a);return s.getTime()>=d.getTime()?r+1:s.getTime()>=v.getTime()?r:r-1}function Wi(e,a){var d,g,v,h;const s=Tt(),r=(a==null?void 0:a.firstWeekContainsDate)??((g=(d=a==null?void 0:a.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??((h=(v=s.locale)==null?void 0:v.options)==null?void 0:h.firstWeekContainsDate)??1,i=zs(e,a),n=_e(e,0);return n.setFullYear(i,0,r),n.setHours(0,0,0,0),qe(n,a)}function Ui(e,a){const s=X(e),r=+qe(s,a)-+Wi(s,a);return Math.round(r/Es)+1}function G(e,a){const s=e<0?"-":"",r=Math.abs(e).toString().padStart(a,"0");return s+r}const Pe={y(e,a){const s=e.getFullYear(),r=s>0?s:1-s;return G(a==="yy"?r%100:r,a.length)},M(e,a){const s=e.getMonth();return a==="M"?String(s+1):G(s+1,2)},d(e,a){return G(e.getDate(),a.length)},a(e,a){const s=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return s.toUpperCase();case"aaa":return s;case"aaaaa":return s[0];case"aaaa":default:return s==="am"?"a.m.":"p.m."}},h(e,a){return G(e.getHours()%12||12,a.length)},H(e,a){return G(e.getHours(),a.length)},m(e,a){return G(e.getMinutes(),a.length)},s(e,a){return G(e.getSeconds(),a.length)},S(e,a){const s=a.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,s-3));return G(i,a.length)}},He={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ua={G:function(e,a,s){const r=e.getFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return s.era(r,{width:"abbreviated"});case"GGGGG":return s.era(r,{width:"narrow"});case"GGGG":default:return s.era(r,{width:"wide"})}},y:function(e,a,s){if(a==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return s.ordinalNumber(i,{unit:"year"})}return Pe.y(e,a)},Y:function(e,a,s,r){const i=zs(e,r),n=i>0?i:1-i;if(a==="YY"){const o=n%100;return G(o,2)}return a==="Yo"?s.ordinalNumber(n,{unit:"year"}):G(n,a.length)},R:function(e,a){const s=Os(e);return G(s,a.length)},u:function(e,a){const s=e.getFullYear();return G(s,a.length)},Q:function(e,a,s){const r=Math.ceil((e.getMonth()+1)/3);switch(a){case"Q":return String(r);case"QQ":return G(r,2);case"Qo":return s.ordinalNumber(r,{unit:"quarter"});case"QQQ":return s.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return s.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,a,s){const r=Math.ceil((e.getMonth()+1)/3);switch(a){case"q":return String(r);case"qq":return G(r,2);case"qo":return s.ordinalNumber(r,{unit:"quarter"});case"qqq":return s.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return s.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,a,s){const r=e.getMonth();switch(a){case"M":case"MM":return Pe.M(e,a);case"Mo":return s.ordinalNumber(r+1,{unit:"month"});case"MMM":return s.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return s.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(r,{width:"wide",context:"formatting"})}},L:function(e,a,s){const r=e.getMonth();switch(a){case"L":return String(r+1);case"LL":return G(r+1,2);case"Lo":return s.ordinalNumber(r+1,{unit:"month"});case"LLL":return s.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return s.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(r,{width:"wide",context:"standalone"})}},w:function(e,a,s,r){const i=Ui(e,r);return a==="wo"?s.ordinalNumber(i,{unit:"week"}):G(i,a.length)},I:function(e,a,s){const r=Yi(e);return a==="Io"?s.ordinalNumber(r,{unit:"week"}):G(r,a.length)},d:function(e,a,s){return a==="do"?s.ordinalNumber(e.getDate(),{unit:"date"}):Pe.d(e,a)},D:function(e,a,s){const r=Bi(e);return a==="Do"?s.ordinalNumber(r,{unit:"dayOfYear"}):G(r,a.length)},E:function(e,a,s){const r=e.getDay();switch(a){case"E":case"EE":case"EEE":return s.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return s.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(r,{width:"short",context:"formatting"});case"EEEE":default:return s.day(r,{width:"wide",context:"formatting"})}},e:function(e,a,s,r){const i=e.getDay(),n=(i-r.weekStartsOn+8)%7||7;switch(a){case"e":return String(n);case"ee":return G(n,2);case"eo":return s.ordinalNumber(n,{unit:"day"});case"eee":return s.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return s.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(i,{width:"short",context:"formatting"});case"eeee":default:return s.day(i,{width:"wide",context:"formatting"})}},c:function(e,a,s,r){const i=e.getDay(),n=(i-r.weekStartsOn+8)%7||7;switch(a){case"c":return String(n);case"cc":return G(n,a.length);case"co":return s.ordinalNumber(n,{unit:"day"});case"ccc":return s.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return s.day(i,{width:"narrow",context:"standalone"});case"cccccc":return s.day(i,{width:"short",context:"standalone"});case"cccc":default:return s.day(i,{width:"wide",context:"standalone"})}},i:function(e,a,s){const r=e.getDay(),i=r===0?7:r;switch(a){case"i":return String(i);case"ii":return G(i,a.length);case"io":return s.ordinalNumber(i,{unit:"day"});case"iii":return s.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return s.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return s.day(r,{width:"short",context:"formatting"});case"iiii":default:return s.day(r,{width:"wide",context:"formatting"})}},a:function(e,a,s){const i=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return s.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,a,s){const r=e.getHours();let i;switch(r===12?i=He.noon:r===0?i=He.midnight:i=r/12>=1?"pm":"am",a){case"b":case"bb":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return s.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,a,s){const r=e.getHours();let i;switch(r>=17?i=He.evening:r>=12?i=He.afternoon:r>=4?i=He.morning:i=He.night,a){case"B":case"BB":case"BBB":return s.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return s.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,a,s){if(a==="ho"){let r=e.getHours()%12;return r===0&&(r=12),s.ordinalNumber(r,{unit:"hour"})}return Pe.h(e,a)},H:function(e,a,s){return a==="Ho"?s.ordinalNumber(e.getHours(),{unit:"hour"}):Pe.H(e,a)},K:function(e,a,s){const r=e.getHours()%12;return a==="Ko"?s.ordinalNumber(r,{unit:"hour"}):G(r,a.length)},k:function(e,a,s){let r=e.getHours();return r===0&&(r=24),a==="ko"?s.ordinalNumber(r,{unit:"hour"}):G(r,a.length)},m:function(e,a,s){return a==="mo"?s.ordinalNumber(e.getMinutes(),{unit:"minute"}):Pe.m(e,a)},s:function(e,a,s){return a==="so"?s.ordinalNumber(e.getSeconds(),{unit:"second"}):Pe.s(e,a)},S:function(e,a){return Pe.S(e,a)},X:function(e,a,s){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(a){case"X":return Ga(r);case"XXXX":case"XX":return ze(r);case"XXXXX":case"XXX":default:return ze(r,":")}},x:function(e,a,s){const r=e.getTimezoneOffset();switch(a){case"x":return Ga(r);case"xxxx":case"xx":return ze(r);case"xxxxx":case"xxx":default:return ze(r,":")}},O:function(e,a,s){const r=e.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+Qa(r,":");case"OOOO":default:return"GMT"+ze(r,":")}},z:function(e,a,s){const r=e.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+Qa(r,":");case"zzzz":default:return"GMT"+ze(r,":")}},t:function(e,a,s){const r=Math.trunc(e.getTime()/1e3);return G(r,a.length)},T:function(e,a,s){const r=e.getTime();return G(r,a.length)}};function Qa(e,a=""){const s=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),n=r%60;return n===0?s+String(i):s+String(i)+a+G(n,2)}function Ga(e,a){return e%60===0?(e>0?"-":"+")+G(Math.abs(e)/60,2):ze(e,a)}function ze(e,a=""){const s=e>0?"-":"+",r=Math.abs(e),i=G(Math.trunc(r/60),2),n=G(r%60,2);return s+i+a+n}const Xa=(e,a)=>{switch(e){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});case"PPPP":default:return a.date({width:"full"})}},$s=(e,a)=>{switch(e){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});case"pppp":default:return a.time({width:"full"})}},Qi=(e,a)=>{const s=e.match(/(P+)(p+)?/)||[],r=s[1],i=s[2];if(!i)return Xa(e,a);let n;switch(r){case"P":n=a.dateTime({width:"short"});break;case"PP":n=a.dateTime({width:"medium"});break;case"PPP":n=a.dateTime({width:"long"});break;case"PPPP":default:n=a.dateTime({width:"full"});break}return n.replace("{{date}}",Xa(r,a)).replace("{{time}}",$s(i,a))},Gi={p:$s,P:Qi},Xi=/^D+$/,Ji=/^Y+$/,Zi=["D","DD","YY","YYYY"];function Ki(e){return Xi.test(e)}function en(e){return Ji.test(e)}function tn(e,a,s){const r=an(e,a,s);if(console.warn(r),Zi.includes(e))throw new RangeError(r)}function an(e,a,s){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${a}\`) for formatting ${r} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const sn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nn=/^'([^]*?)'?$/,on=/''/g,ln=/[a-zA-Z]/;function W(e,a,s){var h,p,x,f,C,w,D,$;const r=Tt(),i=(s==null?void 0:s.locale)??r.locale??Vi,n=(s==null?void 0:s.firstWeekContainsDate)??((p=(h=s==null?void 0:s.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((f=(x=r.locale)==null?void 0:x.options)==null?void 0:f.firstWeekContainsDate)??1,o=(s==null?void 0:s.weekStartsOn)??((w=(C=s==null?void 0:s.locale)==null?void 0:C.options)==null?void 0:w.weekStartsOn)??r.weekStartsOn??(($=(D=r.locale)==null?void 0:D.options)==null?void 0:$.weekStartsOn)??0,d=X(e);if(!Me(d))throw new RangeError("Invalid time value");let g=a.match(rn).map(u=>{const j=u[0];if(j==="p"||j==="P"){const b=Gi[j];return b(u,i.formatLong)}return u}).join("").match(sn).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const j=u[0];if(j==="'")return{isToken:!1,value:dn(u)};if(Ua[j])return{isToken:!0,value:u};if(j.match(ln))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");return{isToken:!1,value:u}});i.localize.preprocessor&&(g=i.localize.preprocessor(d,g));const v={firstWeekContainsDate:n,weekStartsOn:o,locale:i};return g.map(u=>{if(!u.isToken)return u.value;const j=u.value;(!(s!=null&&s.useAdditionalWeekYearTokens)&&en(j)||!(s!=null&&s.useAdditionalDayOfYearTokens)&&Ki(j))&&tn(j,a,String(e));const b=Ua[j[0]];return b(d,j,i.localize,v)}).join("")}function dn(e){const a=e.match(nn);return a?a[1].replace(on,"'"):e}function Ee(e,a){const r=mn(e);let i;if(r.date){const g=fn(r.date,2);i=gn(g.restDateString,g.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);const n=i.getTime();let o=0,d;if(r.time&&(o=hn(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(d=xn(r.timezone),isNaN(d))return new Date(NaN)}else{const g=new Date(n+o),v=new Date(0);return v.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),v.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),v}return new Date(n+o+d)}const ft={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},cn=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,un=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,pn=/^([+-])(\d{2})(?::?(\d{2}))?$/;function mn(e){const a={},s=e.split(ft.dateTimeDelimiter);let r;if(s.length>2)return a;if(/:/.test(s[0])?r=s[0]:(a.date=s[0],r=s[1],ft.timeZoneDelimiter.test(a.date)&&(a.date=e.split(ft.timeZoneDelimiter)[0],r=e.substr(a.date.length,e.length))),r){const i=ft.timezone.exec(r);i?(a.time=r.replace(i[1],""),a.timezone=i[1]):a.time=r}return a}function fn(e,a){const s=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+a)+"})|(\\d{2}|[+-]\\d{"+(2+a)+"})$)"),r=e.match(s);if(!r)return{year:NaN,restDateString:""};const i=r[1]?parseInt(r[1]):null,n=r[2]?parseInt(r[2]):null;return{year:n===null?i:n*100,restDateString:e.slice((r[1]||r[2]).length)}}function gn(e,a){if(a===null)return new Date(NaN);const s=e.match(cn);if(!s)return new Date(NaN);const r=!!s[4],i=Ze(s[1]),n=Ze(s[2])-1,o=Ze(s[3]),d=Ze(s[4]),g=Ze(s[5])-1;if(r)return Nn(a,d,g)?bn(a,d,g):new Date(NaN);{const v=new Date(0);return!yn(a,n,o)||!wn(a,i)?new Date(NaN):(v.setUTCFullYear(a,n,Math.max(i,o)),v)}}function Ze(e){return e?parseInt(e):1}function hn(e){const a=e.match(un);if(!a)return NaN;const s=Yt(a[1]),r=Yt(a[2]),i=Yt(a[3]);return jn(s,r,i)?s*_s+r*Ps+i*1e3:NaN}function Yt(e){return e&&parseFloat(e.replace(",","."))||0}function xn(e){if(e==="Z")return 0;const a=e.match(pn);if(!a)return 0;const s=a[1]==="+"?-1:1,r=parseInt(a[2]),i=a[3]&&parseInt(a[3])||0;return Fn(r,i)?s*(r*_s+i*Ps):NaN}function bn(e,a,s){const r=new Date(0);r.setUTCFullYear(e,0,4);const i=r.getUTCDay()||7,n=(a-1)*7+s+1-i;return r.setUTCDate(r.getUTCDate()+n),r}const vn=[31,null,31,30,31,30,31,31,30,31,30,31];function Rs(e){return e%400===0||e%4===0&&e%100!==0}function yn(e,a,s){return a>=0&&a<=11&&s>=1&&s<=(vn[a]||(Rs(e)?29:28))}function wn(e,a){return a>=1&&a<=(Rs(e)?366:365)}function Nn(e,a,s){return a>=1&&a<=53&&s>=0&&s<=6}function jn(e,a,s){return e===24?a===0&&s===0:s>=0&&s<60&&a>=0&&a<60&&e>=0&&e<25}function Fn(e,a){return a>=0&&a<=59}const Cn={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},kn=(e,a,s)=>{let r;const i=Cn[e];return typeof i=="string"?r=i:a===1?r=i.one:r=i.other.replace("{{count}}",a.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"en "+r:"hace "+r:r},An={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},Sn={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Dn={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Tn={date:We({formats:An,defaultWidth:"full"}),time:We({formats:Sn,defaultWidth:"full"}),dateTime:We({formats:Dn,defaultWidth:"full"})},Mn={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},En={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},Pn=(e,a,s,r)=>a.getHours()!==1?En[e]:Mn[e],_n={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},On={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},In={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},Ln={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},zn={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},$n={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},Rn=(e,a)=>Number(e)+"º",qn={ordinalNumber:Rn,era:Se({values:_n,defaultWidth:"wide"}),quarter:Se({values:On,defaultWidth:"wide",argumentCallback:e=>Number(e)-1}),month:Se({values:In,defaultWidth:"wide"}),day:Se({values:Ln,defaultWidth:"wide"}),dayPeriod:Se({values:zn,defaultWidth:"wide",formattingValues:$n,defaultFormattingWidth:"wide"})},Hn=/^(\d+)(º)?/i,Vn=/\d+/i,Bn={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},Yn={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},Wn={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},Un={any:[/1/i,/2/i,/3/i,/4/i]},Qn={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},Gn={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},Xn={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},Jn={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},Zn={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},Kn={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},eo={ordinalNumber:Ls({matchPattern:Hn,parsePattern:Vn,valueCallback:function(e){return parseInt(e,10)}}),era:De({matchPatterns:Bn,defaultMatchWidth:"wide",parsePatterns:Yn,defaultParseWidth:"any"}),quarter:De({matchPatterns:Wn,defaultMatchWidth:"wide",parsePatterns:Un,defaultParseWidth:"any",valueCallback:e=>e+1}),month:De({matchPatterns:Qn,defaultMatchWidth:"wide",parsePatterns:Gn,defaultParseWidth:"any"}),day:De({matchPatterns:Xn,defaultMatchWidth:"wide",parsePatterns:Jn,defaultParseWidth:"any"}),dayPeriod:De({matchPatterns:Zn,defaultMatchWidth:"any",parsePatterns:Kn,defaultParseWidth:"any"})},je={code:"es",formatDistance:kn,formatLong:Tn,formatRelative:Pn,localize:qn,match:eo,options:{weekStartsOn:1,firstWeekContainsDate:1}},Mt="patients",Et=e=>{const a=ma(Qe(be,Mt),fa("createdAt","desc"));return ga(a,s=>e(s.docs.map(r=>({id:r.id,...r.data()}))))},to=e=>xa(Qe(be,Mt),{...e,createdAt:Ge()}),ao=(e,a)=>ha(Ue(be,Mt,e),{...a,updatedAt:Ge()}),so=e=>Ns(Ue(be,Mt,e)),ba="surgeries",Pt=e=>{const a=ma(Qe(be,ba),fa("date","asc"));return ga(a,s=>e(s.docs.map(r=>({id:r.id,...r.data()}))))},ro=e=>xa(Qe(be,ba),{...e,createdAt:Ge()}),gt=(e,a)=>ha(Ue(be,ba,e),{...a,updatedAt:Ge()}),io={mny:"bg-blue-100   text-blue-800   ring-blue-200",jwi:"bg-orange-100 text-orange-800 ring-orange-200",ext:"bg-green-100  text-green-800  ring-green-200",flap:"bg-blue-100   text-blue-800   ring-blue-200",external:"bg-green-100  text-green-800  ring-green-200",programado:"bg-yellow-100 text-yellow-800 ring-yellow-200",confirmado:"bg-blue-100   text-blue-800   ring-blue-200",realizado:"bg-green-100  text-green-800  ring-green-200",cancelado:"bg-red-100    text-red-700    ring-red-200",suspendido:"bg-amber-100  text-amber-800  ring-amber-200",activo:"bg-emerald-100 text-emerald-800 ring-emerald-200",inactivo:"bg-gray-100   text-gray-600   ring-gray-200"},no={mny:"MNY",jwi:"JWI",ext:"EXT",flap:"MNY",external:"EXT",programado:"Programado",confirmado:"Confirmado",realizado:"Realizado",cancelado:"Cancelado",suspendido:"Suspendida",activo:"Activo",inactivo:"Inactivo"};function Fe({variant:e,label:a,className:s=""}){const r=io[e]??"bg-gray-100 text-gray-700 ring-gray-200",i=a??no[e]??e;return t.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ring-1 ring-inset ${r} ${s}`,children:i})}function oo(){const{patients:e,setPatients:a,surgeries:s,setSurgeries:r}=ve(),i=W(new Date,"yyyy-MM-dd");A.useEffect(()=>{const p=Et(a),x=Pt(r);return()=>{p(),x()}},[]);const n=s.filter(p=>p.date===i&&p.status!=="cancelado"),o=e.length,d=e.filter(p=>oe(p.patientType).label==="MNY").length,g=s.filter(p=>p.status==="programado").length,v=s.filter(p=>p.status==="realizado").length,h=s.filter(p=>p.date>=i&&p.status!=="cancelado").slice(0,5);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[t.jsx(ht,{icon:jt,label:"Total Pacientes",value:o,sub:`${d} Munay`,color:"teal",to:"/pacientes"}),t.jsx(ht,{icon:tt,label:"Cirugías Hoy",value:n.length,sub:"quirófano único",color:"blue",to:"/cirugias"}),t.jsx(ht,{icon:jr,label:"Programadas",value:g,sub:"pendientes",color:"yellow",to:"/cirugias"}),t.jsx(ht,{icon:nt,label:"Realizadas",value:v,sub:"historial total",color:"green",to:"/cirugias"})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("h2",{className:"section-title flex items-center gap-2",children:[t.jsx(tt,{className:"w-5 h-5 text-hm-primary"}),"Agenda de Hoy"]}),t.jsx("span",{className:"text-sm text-gray-500 capitalize",children:W(new Date,"EEEE d 'de' MMMM",{locale:je})})]}),n.length===0?t.jsx(Ja,{message:"No hay cirugías programadas para hoy."}):t.jsx("ul",{className:"space-y-2",children:n.sort((p,x)=>p.startTime.localeCompare(x.startTime)).map(p=>t.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[t.jsx("div",{className:"w-2 h-10 rounded-full shrink-0",style:{backgroundColor:oe(p.patientType).bg}}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:p.patientName}),t.jsxs("p",{className:"text-xs text-gray-500",children:[p.startTime," · ",p.surgeryType]})]}),t.jsx(Fe,{variant:p.status})]},p.id))})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("h2",{className:"section-title flex items-center gap-2",children:[t.jsx(xs,{className:"w-5 h-5 text-hm-primary"}),"Próximas Cirugías"]}),t.jsx(na,{to:"/cirugias",className:"text-sm text-hm-primary hover:underline",children:"Ver todas"})]}),h.length===0?t.jsx(Ja,{message:"No hay cirugías próximas registradas."}):t.jsx("ul",{className:"space-y-2",children:h.map(p=>t.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[t.jsx("div",{className:`w-2 h-10 rounded-full shrink-0 ${p.patientType==="flap"?"bg-green-500":"bg-blue-500"}`}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:p.patientName}),t.jsxs("p",{className:"text-xs text-gray-500",children:[W(new Date(p.date+"T12:00"),"EEE d MMM",{locale:je})," · ",p.startTime," · ",p.surgeryType]})]}),t.jsx(Fe,{variant:p.status})]},p.id))})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsx(Wt,{to:"/pacientes",icon:jt,label:"Registrar Paciente",color:"navy"}),t.jsx(Wt,{to:"/cirugias",icon:tt,label:"Nueva Cirugía",color:"blue"}),t.jsx(Wt,{to:"/terapias",icon:St,label:"Agendar Terapia",color:"purple"})]})]})}function ht({icon:e,label:a,value:s,sub:r,color:i,to:n}){const o={teal:"bg-teal-50   text-teal-700",blue:"bg-blue-50   text-blue-700",yellow:"bg-yellow-50 text-yellow-700",green:"bg-green-50  text-green-700"};return t.jsxs(na,{to:n,className:"card hover:shadow-md transition-shadow",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${o[i]}`,children:t.jsx(e,{className:"w-5 h-5"})}),t.jsx("p",{className:"text-2xl font-bold text-gray-800",children:s}),t.jsx("p",{className:"text-sm font-medium text-gray-600 mt-0.5",children:a}),t.jsx("p",{className:"text-xs text-gray-400 mt-0.5",children:r})]})}function Wt({to:e,icon:a,label:s,color:r}){const i={navy:"bg-hm-primary   hover:bg-hm-primary-800",blue:"bg-blue-600     hover:bg-blue-700",purple:"bg-purple-600   hover:bg-purple-700"};return t.jsxs(na,{to:e,className:`flex items-center gap-3 px-5 py-4 rounded-xl text-white font-medium text-sm transition ${i[r]}`,children:[t.jsx(a,{className:"w-5 h-5"}),s]})}function Ja({message:e}){return t.jsxs("div",{className:"flex flex-col items-center justify-center py-8 text-gray-400",children:[t.jsx(la,{className:"w-8 h-8 mb-2 opacity-40"}),t.jsx("p",{className:"text-sm",children:e})]})}const _t="therapies",va=e=>{const a=ma(Qe(be,_t),fa("date","asc"));return ga(a,s=>e(s.docs.map(r=>({id:r.id,...r.data()}))))},lo=e=>xa(Qe(be,_t),{...e,createdAt:Ge()}),co=(e,a)=>ha(Ue(be,_t,e),{...a,updatedAt:Ge()}),uo=e=>Ns(Ue(be,_t,e));function ot({open:e,onClose:a,title:s,children:r,size:i="md"}){if(A.useEffect(()=>{if(!e)return;const o=d=>{d.key==="Escape"&&a()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,a]),!e)return null;const n={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl","2xl":"max-w-5xl"}[i]??"max-w-lg";return t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:o=>{o.target===o.currentTarget&&a()},children:t.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${n} flex flex-col max-h-[90vh]`,children:[t.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100",children:[t.jsx("h2",{className:"text-base font-semibold text-gray-800",children:s}),t.jsx("button",{onClick:a,className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:t.jsx(Re,{className:"w-4 h-4"})})]}),t.jsx("div",{className:"flex-1 overflow-y-auto px-5 py-4",children:r})]})})}function ya({open:e,title:a,message:s,onConfirm:r,onCancel:i,confirmLabel:n="Eliminar",danger:o=!0}){return e?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",children:t.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-sm p-6",children:[t.jsxs("div",{className:"flex gap-4",children:[t.jsx("div",{className:`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${o?"bg-red-100":"bg-yellow-100"}`,children:t.jsx(bs,{className:`w-5 h-5 ${o?"text-red-600":"text-yellow-600"}`})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-gray-800",children:a}),t.jsx("p",{className:"text-sm text-gray-500 mt-1",children:s})]})]}),t.jsxs("div",{className:"flex gap-3 mt-6 justify-end",children:[t.jsx("button",{onClick:i,className:"btn-secondary btn",children:"Cancelar"}),t.jsx("button",{onClick:r,className:o?"btn-danger btn":"btn-primary btn",children:n})]})]})}):null}function qs({value:e,onChange:a,placeholder:s="Buscar..."}){return t.jsxs("div",{className:"relative",children:[t.jsx(vs,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),t.jsx("input",{type:"text",value:e,onChange:r=>a(r.target.value),placeholder:s,className:"input pl-9 pr-9"}),e&&t.jsx("button",{onClick:()=>a(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600",children:t.jsx(Re,{className:"w-4 h-4"})})]})}var dt=e=>e.type==="checkbox",$e=e=>e instanceof Date,fe=e=>e==null;const Hs=e=>typeof e=="object";var te=e=>!fe(e)&&!Array.isArray(e)&&Hs(e)&&!$e(e),po=e=>te(e)&&e.target?dt(e.target)?e.target.checked:e.target.value:e,mo=(e,a)=>a.split(".").some((s,r,i)=>!isNaN(Number(s))&&e.has(i.slice(0,r).join("."))),fo=e=>{const a=e.constructor&&e.constructor.prototype;return te(a)&&a.hasOwnProperty("isPrototypeOf")},wa=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){if(e instanceof Date)return new Date(e);const a=typeof FileList<"u"&&e instanceof FileList;if(wa&&(e instanceof Blob||a))return e;const s=Array.isArray(e);if(!s&&!(te(e)&&fo(e)))return e;const r=s?[]:Object.create(Object.getPrototypeOf(e));for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=ie(e[i]));return r}var Ot=e=>/^\w*$/.test(e),Z=e=>e===void 0,Na=e=>Array.isArray(e)?e.filter(Boolean):[],ja=e=>Na(e.replace(/["|']|\]/g,"").split(/\.|\[/)),P=(e,a,s)=>{if(!a||!te(e))return s;const i=(Ot(a)?[a]:ja(a)).reduce((n,o)=>fe(n)?void 0:n[o],e);return Z(i)||i===e?Z(e[a])?s:e[a]:i},ke=e=>typeof e=="boolean",xe=e=>typeof e=="function",J=(e,a,s)=>{let r=-1;const i=Ot(a)?[a]:ja(a),n=i.length,o=n-1;for(;++r<n;){const d=i[r];let g=s;if(r!==o){const v=e[d];g=te(v)||Array.isArray(v)?v:isNaN(+i[r+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=g,e=e[d]}};const Ve={BLUR:"blur",FOCUS_OUT:"focusout",SUBMIT:"submit",TRIGGER:"trigger",VALID:"valid"},Ne={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},we={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ut="form",Vs="root",go=ue.createContext(null);go.displayName="HookFormControlContext";var ho=(e,a,s,r=!0)=>{const i={};for(const n in e)Object.defineProperty(i,n,{get:()=>{const o=n;return a._proxyFormState[o]!==Ne.all&&(a._proxyFormState[o]=!r||Ne.all),e[o]}});return i};const xo=typeof window<"u"?ue.useLayoutEffect:ue.useEffect;var pe=e=>typeof e=="string",bo=(e,a,s,r,i)=>pe(e)?(r&&a.watch.add(e),P(s,e,i)):Array.isArray(e)?e.map(n=>(r&&a.watch.add(n),P(s,n))):(r&&(a.watchAll=!0),s),aa=e=>fe(e)||!Hs(e);function Ae(e,a,s=new WeakSet){if(e===a)return!0;if(aa(e)||aa(a))return Object.is(e,a);if($e(e)&&$e(a))return Object.is(e.getTime(),a.getTime());const r=Object.keys(e),i=Object.keys(a);if(r.length!==i.length)return!1;if(s.has(e)||s.has(a))return!0;s.add(e),s.add(a);for(const n of r){const o=e[n];if(!(n in a))return!1;if(n!=="ref"){const d=a[n];if($e(o)&&$e(d)||(te(o)||Array.isArray(o))&&(te(d)||Array.isArray(d))?!Ae(o,d,s):!Object.is(o,d))return!1}}return!0}const vo=ue.createContext(null);vo.displayName="HookFormContext";var yo=(e,a,s,r,i)=>a?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:i||!0}}:{},rt=e=>Array.isArray(e)?e:[e],Za=()=>{let e=[];return{get observers(){return e},next:i=>{for(const n of e)n.next&&n.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(n=>n!==i)}}),unsubscribe:()=>{e=[]}}};function Bs(e,a){const s={};for(const r in e)if(e.hasOwnProperty(r)){const i=e[r],n=a[r];if(i&&te(i)&&n){const o=Bs(i,n);te(o)&&(s[r]=o)}else e[r]&&(s[r]=n)}return s}var ce=e=>te(e)&&!Object.keys(e).length,Fa=e=>e.type==="file",kt=e=>{if(!wa)return!1;const a=e?e.ownerDocument:0;return e instanceof(a&&a.defaultView?a.defaultView.HTMLElement:HTMLElement)},Ys=e=>e.type==="select-multiple",Ca=e=>e.type==="radio",wo=e=>Ca(e)||dt(e),Qt=e=>kt(e)&&e.isConnected;function No(e,a){const s=a.slice(0,-1).length;let r=0;for(;r<s;){if(fe(e)){e=void 0;break}e=e[a[r]],r++}return e}function jo(e){for(const a in e)if(e.hasOwnProperty(a)&&!Z(e[a]))return!1;return!0}function ne(e,a){if(pe(a)&&Object.prototype.hasOwnProperty.call(e,a))return delete e[a],e;const s=Array.isArray(a)?a:Ot(a)?[a]:ja(a),r=s.length===1?e:No(e,s),i=s.length-1,n=s[i];return r&&delete r[n],i!==0&&(te(r)&&ce(r)||Array.isArray(r)&&jo(r))&&ne(e,s.slice(0,-1)),e}var Fo=e=>{for(const a in e)if(xe(e[a]))return!0;return!1};function Ws(e){return Array.isArray(e)||te(e)&&!Fo(e)}function sa(e,a={}){for(const s in e){const r=e[s];Ws(r)?(a[s]=Array.isArray(r)?[]:{},sa(r,a[s])):Z(r)||(a[s]=!0)}return a}function ra(e){if(e!==!1){if(e===!0)return!0;if(Array.isArray(e)){const a=e.map(s=>ra(s));return a.some(s=>s!==void 0)?a:void 0}if(te(e)){const a={};for(const s in e){const r=ra(e[s]);Z(r)||(a[s]=r)}return Object.keys(a).length?a:void 0}}}function et(e,a,s){s||(s=sa(a));for(const r in e){const i=e[r];if(Ws(i))Z(a)||aa(s[r])?s[r]=sa(i,Array.isArray(i)?[]:{}):et(i,fe(a)?{}:a[r],s[r]);else{const n=a[r];s[r]=!Ae(i,n)}}return ra(s)||{}}const Ka={value:!1,isValid:!1},es={value:!0,isValid:!0};var Us=e=>{if(Array.isArray(e)){if(e.length>1){const a=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:a,isValid:!!a.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Z(e[0].attributes.value)?Z(e[0].value)||e[0].value===""?es:{value:e[0].value,isValid:!0}:es:Ka}return Ka},Qs=(e,{valueAsNumber:a,valueAsDate:s,setValueAs:r})=>Z(e)?e:a?e===""?NaN:e&&+e:s&&pe(e)?new Date(e):r?r(e):e;const ts={isValid:!1,value:null};var Gs=e=>Array.isArray(e)?e.reduce((a,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:a,ts):ts;function as(e){const a=e.ref;return Fa(a)?a.files:Ca(a)?Gs(e.refs).value:Ys(a)?[...a.selectedOptions].map(({value:s})=>s):dt(a)?Us(e.refs).value:Qs(Z(a.value)?e.ref.value:a.value,e)}var Co=(e,a,s,r)=>{const i={};for(const n of e){const o=P(a,n);o&&J(i,n,o._f)}return{criteriaMode:s,names:[...e],fields:i,shouldUseNativeValidation:r}},At=e=>e instanceof RegExp,Ke=e=>Z(e)?e:At(e)?e.source:te(e)?At(e.value)?e.value.source:e.value:e,ss=e=>({isOnSubmit:!e||e===Ne.onSubmit,isOnBlur:e===Ne.onBlur,isOnChange:e===Ne.onChange,isOnAll:e===Ne.all,isOnTouch:e===Ne.onTouched});const rs="AsyncFunction";var ko=e=>!!e&&!!e.validate&&!!(xe(e.validate)&&e.validate.constructor.name===rs||te(e.validate)&&Object.values(e.validate).find(a=>a.constructor.name===rs)),Ao=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),is=(e,a,s)=>!s&&(a.watchAll||a.watch.has(e)||[...a.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const it=(e,a,s,r)=>{for(const i of s||Object.keys(e)){const n=P(e,i);if(n){const{_f:o,...d}=n;if(o){if(o.refs&&o.refs[0]&&a(o.refs[0],i)&&!r)return!0;if(o.ref&&a(o.ref,o.name)&&!r)return!0;if(it(d,a))break}else if(te(d)&&it(d,a))break}}};function ns(e,a,s){const r=P(e,s);if(r||Ot(s))return{error:r,name:s};const i=s.split(".");for(;i.length;){const n=i.join("."),o=P(a,n),d=P(e,n);if(o&&!Array.isArray(o)&&s!==n)return{name:s};if(d&&d.type)return{name:n,error:d};if(d&&d.root&&d.root.type)return{name:`${n}.root`,error:d.root};i.pop()}return{name:s}}var So=(e,a,s,r)=>{s(e);const{name:i,...n}=e;return ce(n)||r&&Object.keys(n).length>=Object.keys(a).length||Object.keys(n).find(o=>a[o]===(!r||Ne.all))},Do=(e,a,s)=>!e||!a||e===a||rt(e).some(r=>r&&(s?r===a:r.startsWith(a)||a.startsWith(r))),To=(e,a,s,r,i)=>i.isOnAll?!1:!s&&i.isOnTouch?!(a||e):(s?r.isOnBlur:i.isOnBlur)?!e:(s?r.isOnChange:i.isOnChange)?e:!0,Mo=(e,a)=>!Na(P(e,a)).length&&ne(e,a),Eo=(e,a,s)=>{const r=rt(P(e,s));return J(r,Vs,a[s]),J(e,s,r),e};function os(e,a,s="validate"){if(pe(e)||Array.isArray(e)&&e.every(pe)||ke(e)&&!e)return{type:s,message:pe(e)?e:"",ref:a}}var Be=e=>te(e)&&!At(e)?e:{value:e,message:""},ls=async(e,a,s,r,i,n)=>{const{ref:o,refs:d,required:g,maxLength:v,minLength:h,min:p,max:x,pattern:f,validate:C,name:w,valueAsNumber:D,mount:$}=e._f,u=P(s,w);if(!$||a.has(w))return{};const j=d?d[0]:o,b=O=>{i&&j.reportValidity&&(j.setCustomValidity(ke(O)?"":O||""),j.reportValidity())},I={},V=Ca(o),ae=dt(o),z=V||ae,H=(D||Fa(o))&&Z(o.value)&&Z(u)||kt(o)&&o.value===""||u===""||Array.isArray(u)&&!u.length||D&&typeof u=="number"&&isNaN(u),y=yo.bind(null,w,r,I),_=(O,R,B,U=we.maxLength,se=we.minLength)=>{const K=O?R:B;I[w]={type:O?U:se,message:K,ref:o,...y(O?U:se,K)}};if(n?!Array.isArray(u)||!u.length:g&&(!z&&(H||fe(u))||ke(u)&&!u||ae&&!Us(d).isValid||V&&!Gs(d).isValid)){const{value:O,message:R}=pe(g)?{value:!!g,message:g}:Be(g);if(O&&(I[w]={type:we.required,message:R,ref:j,...y(we.required,R)},!r))return b(R),I}if(!H&&(!fe(p)||!fe(x))){let O,R;const B=Be(x),U=Be(p);if(!fe(u)&&!isNaN(u)){const se=o.valueAsNumber||u&&+u;fe(B.value)||(O=se>B.value),fe(U.value)||(R=se<U.value)}else{const se=o.valueAsDate||new Date(u),K=T=>new Date(new Date().toDateString()+" "+T),de=o.type=="time",E=o.type=="week";pe(B.value)&&u&&(O=de?K(u)>K(B.value):E?u>B.value:se>new Date(B.value)),pe(U.value)&&u&&(R=de?K(u)<K(U.value):E?u<U.value:se<new Date(U.value))}if((O||R)&&(_(!!O,B.message,U.message,we.max,we.min),!r))return b(I[w].message),I}if((v||h)&&!H&&(pe(u)||n&&Array.isArray(u))){const O=Be(v),R=Be(h),B=!fe(O.value)&&u.length>+O.value,U=!fe(R.value)&&u.length<+R.value;if((B||U)&&(_(B,O.message,R.message),!r))return b(I[w].message),I}if(f&&!H&&pe(u)){const{value:O,message:R}=Be(f);if(At(O)&&!u.match(O)&&(I[w]={type:we.pattern,message:R,ref:o,...y(we.pattern,R)},!r))return b(R),I}if(C){if(xe(C)){const O=await C(u,s),R=os(O,j);if(R&&(I[w]={...R,...y(we.validate,R.message)},!r))return b(R.message),I}else if(te(C)){let O={};for(const R in C){if(!ce(O)&&!r)break;const B=os(await C[R](u,s),j,R);B&&(O={...B,...y(R,B.message)},b(B.message),r&&(I[w]=O))}if(!ce(O)&&(I[w]={ref:j,...O},!r))return I}}return b(!0),I};const Po={mode:Ne.onSubmit,reValidateMode:Ne.onChange,shouldFocusError:!0},Xs={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}};function _o(e={}){let a={...Po,...e},s={...ie(Xs),isLoading:xe(a.defaultValues),errors:a.errors||{},disabled:a.disabled||!1},r={},i=te(a.defaultValues)||te(a.values)?ie(a.defaultValues||a.values)||{}:{},n=a.shouldUnregister?{}:ie(i),o={action:!1,mount:!1,watch:!1,keepIsValid:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},g,v=0;const h={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={...h};let x={...p};const f={array:Za(),state:Za()},C=a.criteriaMode===Ne.all,w=l=>c=>{clearTimeout(v),v=setTimeout(l,c)},D=async l=>{if(!o.keepIsValid&&!a.disabled&&(p.isValid||x.isValid||l)){let c;a.resolver?(c=ce((await H()).errors),$()):c=await O({fields:r,onlyCheckValid:!0,eventType:Ve.VALID}),c!==s.isValid&&f.state.next({isValid:c})}},$=(l,c)=>{!a.disabled&&(p.isValidating||p.validatingFields||x.isValidating||x.validatingFields)&&((l||Array.from(d.mount)).forEach(m=>{m&&(c?J(s.validatingFields,m,c):ne(s.validatingFields,m))}),f.state.next({validatingFields:s.validatingFields,isValidating:!ce(s.validatingFields)}))},u=()=>{s.dirtyFields=et(i,n)},j=(l,c=[],m,S,k=!0,N=!0)=>{if(S&&m&&!a.disabled){if(o.action=!0,N&&Array.isArray(P(r,l))){const M=m(P(r,l),S.argA,S.argB);k&&J(r,l,M)}if(N&&Array.isArray(P(s.errors,l))){const M=m(P(s.errors,l),S.argA,S.argB);k&&J(s.errors,l,M),Mo(s.errors,l)}if((p.touchedFields||x.touchedFields)&&N&&Array.isArray(P(s.touchedFields,l))){const M=m(P(s.touchedFields,l),S.argA,S.argB);k&&J(s.touchedFields,l,M)}(p.dirtyFields||x.dirtyFields)&&u(),f.state.next({name:l,isDirty:B(l,c),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else J(n,l,c)},b=(l,c)=>{J(s.errors,l,c),f.state.next({errors:s.errors})},I=l=>{s.errors=l,f.state.next({errors:s.errors,isValid:!1})},V=(l,c,m,S)=>{const k=P(r,l);if(k){const N=Z(P(n,l)),M=P(n,l,Z(m)?P(i,l):m);Z(M)||S&&S.defaultChecked||c?J(n,l,c?M:as(k._f)):K(l,M),o.mount&&!o.action&&(D(),N&&s.isDirty&&(p.isDirty||x.isDirty)&&(B()||(s.isDirty=!1,f.state.next({...s}))))}},ae=(l,c,m,S,k)=>{let N=!1,M=!1;const q={name:l};if(!a.disabled){if(!m||S){(p.isDirty||x.isDirty)&&(M=s.isDirty,s.isDirty=q.isDirty=B(),N=M!==q.isDirty);const Y=Ae(P(i,l),c);M=!!P(s.dirtyFields,l),Y?ne(s.dirtyFields,l):J(s.dirtyFields,l,!0),q.dirtyFields=s.dirtyFields,N=N||(p.dirtyFields||x.dirtyFields)&&M!==!Y}if(m){const Y=P(s.touchedFields,l);Y||(J(s.touchedFields,l,m),q.touchedFields=s.touchedFields,N=N||(p.touchedFields||x.touchedFields)&&Y!==m)}N&&k&&f.state.next(q)}return N?q:{}},z=(l,c,m,S)=>{const k=P(s.errors,l),N=(p.isValid||x.isValid)&&ke(c)&&s.isValid!==c;if(a.delayError&&m?(g=w(()=>b(l,m)),g(a.delayError)):(clearTimeout(v),g=null,m?J(s.errors,l,m):ne(s.errors,l)),(m?!Ae(k,m):k)||!ce(S)||N){const M={...S,...N&&ke(c)?{isValid:c}:{},errors:s.errors,name:l};s={...s,...M},f.state.next(M)}},H=async l=>($(l,!0),await a.resolver(n,a.context,Co(l||d.mount,r,a.criteriaMode,a.shouldUseNativeValidation))),y=async l=>{const{errors:c}=await H(l);if($(l),l)for(const m of l){const S=P(c,m);S?J(s.errors,m,S):ne(s.errors,m)}else s.errors=c;return c},_=async({name:l,eventType:c})=>{if(e.validate){const m=await e.validate({formValues:n,formState:s,name:l,eventType:c});if(te(m))for(const S in m)m[S]&&pt(`${Ut}.${S}`,{message:pe(m.message)?m.message:"",type:we.validate});else pe(m)||!m?pt(Ut,{message:m||"",type:we.validate}):ut(Ut);return m}return!0},O=async({fields:l,onlyCheckValid:c,name:m,eventType:S,context:k={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(k.runRootValidation=!0,!await _({name:m,eventType:S})&&(k.valid=!1,c)))return k.valid;for(const N in l){const M=l[N];if(M){const{_f:q,...Y}=M;if(q){const me=d.array.has(q.name),Ce=M._f&&ko(M._f);Ce&&p.validatingFields&&$([q.name],!0);const ge=await ls(M,d.disabled,n,C,a.shouldUseNativeValidation&&!c,me);if(Ce&&p.validatingFields&&$([q.name]),ge[q.name]&&(k.valid=!1,c)||(!c&&(P(ge,q.name)?me?Eo(s.errors,ge,q.name):J(s.errors,q.name,ge[q.name]):ne(s.errors,q.name)),e.shouldUseNativeValidation&&ge[q.name]))break}!ce(Y)&&await O({context:k,onlyCheckValid:c,fields:Y,name:N,eventType:S})}}return k.valid},R=()=>{for(const l of d.unMount){const c=P(r,l);c&&(c._f.refs?c._f.refs.every(m=>!Qt(m)):!Qt(c._f.ref))&&$t(l)}d.unMount=new Set},B=(l,c)=>!a.disabled&&(l&&c&&J(n,l,c),!Ae(re(),i)),U=(l,c,m)=>bo(l,d,{...o.mount?n:Z(c)?i:pe(l)?{[l]:c}:c},m,c),se=l=>Na(P(o.mount?n:i,l,a.shouldUnregister?P(i,l,[]):[])),K=(l,c,m={})=>{const S=P(r,l);let k=c;if(S){const N=S._f;N&&(!N.disabled&&J(n,l,Qs(c,N)),k=kt(N.ref)&&fe(c)?"":c,Ys(N.ref)?[...N.ref.options].forEach(M=>M.selected=k.includes(M.value)):N.refs?dt(N.ref)?N.refs.forEach(M=>{(!M.defaultChecked||!M.disabled)&&(Array.isArray(k)?M.checked=!!k.find(q=>q===M.value):M.checked=k===M.value||!!k)}):N.refs.forEach(M=>M.checked=M.value===k):Fa(N.ref)?N.ref.value="":(N.ref.value=k,N.ref.type||f.state.next({name:l,values:ie(n)})))}(m.shouldDirty||m.shouldTouch)&&ae(l,k,m.shouldTouch,m.shouldDirty,!0),m.shouldValidate&&Q(l)},de=(l,c,m)=>{for(const S in c){if(!c.hasOwnProperty(S))return;const k=c[S],N=l+"."+S,M=P(r,N);(d.array.has(l)||te(k)||M&&!M._f)&&!$e(k)?de(N,k,m):K(N,k,m)}},E=(l,c,m={})=>{const S=P(r,l),k=d.array.has(l),N=ie(c),M=P(n,l),q=Ae(M,N);if(J(n,l,N),k)f.array.next({name:l,values:ie(n)}),(p.isDirty||p.dirtyFields||x.isDirty||x.dirtyFields)&&m.shouldDirty&&(u(),f.state.next({name:l,dirtyFields:s.dirtyFields,isDirty:B(l,N)}));else{const Y=Array.isArray(N)&&!N.length||ce(N);!S||S._f||fe(N)||Y?K(l,N,m):de(l,N,m)}if(!q){const Y=is(l,d);f.state.next({...Y&&s,name:o.mount||Y?l:void 0,values:ie(n)})}},T=l=>{const c=xe(l)?l(n):l;Ae(n,c)||(n={...n,...c},f.state.next({...s,values:n}))},F=async l=>{o.mount=!0;const c=l.target;let m=c.name,S=!0;const k=P(r,m),N=Y=>{S=Number.isNaN(Y)||$e(Y)&&isNaN(Y.getTime())||Ae(Y,P(n,m,Y))},M=ss(a.mode),q=ss(a.reValidateMode);if(k){let Y,me;const Ce=c.type?as(k._f):po(l),ge=l.type===Ve.BLUR||l.type===Ve.FOCUS_OUT,lr=!Ao(k._f)&&!e.validate&&!a.resolver&&!P(s.errors,m)&&!k._f.deps||To(ge,P(s.touchedFields,m),s.isSubmitted,q,M),Ht=is(m,d,ge);J(n,m,Ce),ge?(!c||!c.readOnly)&&(k._f.onBlur&&k._f.onBlur(l),g&&g(0)):k._f.onChange&&k._f.onChange(l);const Vt=ae(m,Ce,ge),dr=!ce(Vt)||Ht;if(!ge&&f.state.next({name:m,type:l.type,values:ie(n)}),lr)return(p.isValid||x.isValid)&&(a.mode==="onBlur"?ge&&D():ge||D()),dr&&f.state.next({name:m,...Ht?{}:Vt});if(!a.resolver&&e.validate&&await _({name:m,eventType:l.type}),!ge&&Ht&&f.state.next({...s}),a.resolver){const{errors:_a}=await H([m]);if($([m]),N(Ce),S){const cr=ns(s.errors,r,m),Oa=ns(_a,r,cr.name||m);Y=Oa.error,m=Oa.name,me=ce(_a)}}else $([m],!0),Y=(await ls(k,d.disabled,n,C,a.shouldUseNativeValidation))[m],$([m]),N(Ce),S&&(Y?me=!1:(p.isValid||x.isValid)&&(me=await O({fields:r,onlyCheckValid:!0,name:m,eventType:l.type})));S&&(k._f.deps&&(!Array.isArray(k._f.deps)||k._f.deps.length>0)&&Q(k._f.deps),z(m,me,Y,Vt))}},L=(l,c)=>{if(P(s.errors,c)&&l.focus)return l.focus(),1},Q=async(l,c={})=>{let m,S;const k=rt(l);if(a.resolver){const N=await y(Z(l)?l:k);m=ce(N),S=l?!k.some(M=>P(N,M)):m}else l?(S=(await Promise.all(k.map(async N=>{const M=P(r,N);return await O({fields:M&&M._f?{[N]:M}:M,eventType:Ve.TRIGGER})}))).every(Boolean),!(!S&&!s.isValid)&&D()):S=m=await O({fields:r,name:l,eventType:Ve.TRIGGER});return f.state.next({...!pe(l)||(p.isValid||x.isValid)&&m!==s.isValid?{}:{name:l},...a.resolver||!l?{isValid:m}:{},errors:s.errors}),c.shouldFocus&&!S&&it(r,L,l?k:d.mount),S},re=(l,c)=>{let m={...o.mount?n:i};return c&&(m=Bs(c.dirtyFields?s.dirtyFields:s.touchedFields,m)),Z(l)?m:pe(l)?P(m,l):l.map(S=>P(m,S))},Le=(l,c)=>({invalid:!!P((c||s).errors,l),isDirty:!!P((c||s).dirtyFields,l),error:P((c||s).errors,l),isValidating:!!P(s.validatingFields,l),isTouched:!!P((c||s).touchedFields,l)}),ut=l=>{const c=l?rt(l):void 0;c==null||c.forEach(m=>ne(s.errors,m)),c?c.forEach(m=>{f.state.next({name:m,errors:s.errors})}):f.state.next({errors:{}})},pt=(l,c,m)=>{const S=(P(r,l,{_f:{}})._f||{}).ref,k=P(s.errors,l)||{},{ref:N,message:M,type:q,...Y}=k;J(s.errors,l,{...Y,...c,ref:S}),f.state.next({name:l,errors:s.errors,isValid:!1}),m&&m.shouldFocus&&S&&S.focus&&S.focus()},ar=(l,c)=>xe(l)?f.state.subscribe({next:m=>"values"in m&&l(m.values||U(void 0,c),m)}):U(l,c,!0),Sa=l=>f.state.subscribe({next:c=>{if(Do(l.name,c.name,l.exact)&&So(c,l.formState||p,or,l.reRenderRoot)){const m={...n};l.callback({values:m,...s,...c,defaultValues:i})}}}).unsubscribe,sr=l=>(o.mount=!0,x={...x,...l.formState},Sa({...l,formState:{...h,...l.formState}})),$t=(l,c={})=>{for(const m of l?rt(l):d.mount)d.mount.delete(m),d.array.delete(m),c.keepValue||(ne(r,m),ne(n,m)),!c.keepError&&ne(s.errors,m),!c.keepDirty&&ne(s.dirtyFields,m),!c.keepTouched&&ne(s.touchedFields,m),!c.keepIsValidating&&ne(s.validatingFields,m),!a.shouldUnregister&&!c.keepDefaultValue&&ne(i,m);f.state.next({values:ie(n)}),f.state.next({...s,...c.keepDirty?{isDirty:B()}:{}}),!c.keepIsValid&&D()},Da=({disabled:l,name:c})=>{if(ke(l)&&o.mount||l||d.disabled.has(c)){const k=d.disabled.has(c)!==!!l;l?d.disabled.add(c):d.disabled.delete(c),k&&o.mount&&!o.action&&D()}},Rt=(l,c={})=>{let m=P(r,l);const S=ke(c.disabled)||ke(a.disabled),k=!d.registerName.has(l)&&m&&m._f&&!m._f.mount;return J(r,l,{...m||{},_f:{...m&&m._f?m._f:{ref:{name:l}},name:l,mount:!0,...c}}),d.mount.add(l),m&&!k?Da({disabled:ke(c.disabled)?c.disabled:a.disabled,name:l}):V(l,!0,c.value),{...S?{disabled:c.disabled||a.disabled}:{},...a.progressive?{required:!!c.required,min:Ke(c.min),max:Ke(c.max),minLength:Ke(c.minLength),maxLength:Ke(c.maxLength),pattern:Ke(c.pattern)}:{},name:l,onChange:F,onBlur:F,ref:N=>{if(N){d.registerName.add(l),Rt(l,c),d.registerName.delete(l),m=P(r,l);const M=Z(N.value)&&N.querySelectorAll&&N.querySelectorAll("input,select,textarea")[0]||N,q=wo(M),Y=m._f.refs||[];if(q?Y.find(me=>me===M):M===m._f.ref)return;J(r,l,{_f:{...m._f,...q?{refs:[...Y.filter(Qt),M,...Array.isArray(P(i,l))?[{}]:[]],ref:{type:M.type,name:l}}:{ref:M}}}),V(l,!1,void 0,M)}else m=P(r,l,{}),m._f&&(m._f.mount=!1),(a.shouldUnregister||c.shouldUnregister)&&!(mo(d.array,l)&&o.action)&&d.unMount.add(l)}}},qt=()=>a.shouldFocusError&&it(r,L,d.mount),rr=l=>{ke(l)&&(f.state.next({disabled:l}),it(r,(c,m)=>{const S=P(r,m);S&&(c.disabled=S._f.disabled||l,Array.isArray(S._f.refs)&&S._f.refs.forEach(k=>{k.disabled=S._f.disabled||l}))},0,!1))},Ta=(l,c)=>async m=>{let S;m&&(m.preventDefault&&m.preventDefault(),m.persist&&m.persist());let k=ie(n);if(f.state.next({isSubmitting:!0}),a.resolver){const{errors:N,values:M}=await H();$(),s.errors=N,k=ie(M)}else await O({fields:r,eventType:Ve.SUBMIT});if(d.disabled.size)for(const N of d.disabled)ne(k,N);if(ne(s.errors,Vs),ce(s.errors)){f.state.next({errors:{}});try{await l(k,m)}catch(N){S=N}}else c&&await c({...s.errors},m),qt(),setTimeout(qt);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ce(s.errors)&&!S,submitCount:s.submitCount+1,errors:s.errors}),S)throw S},ir=(l,c={})=>{P(r,l)&&(Z(c.defaultValue)?E(l,ie(P(i,l))):(E(l,c.defaultValue),J(i,l,ie(c.defaultValue))),c.keepTouched||ne(s.touchedFields,l),c.keepDirty||(ne(s.dirtyFields,l),s.isDirty=c.defaultValue?B(l,ie(P(i,l))):B()),c.keepError||(ne(s.errors,l),p.isValid&&D()),f.state.next({...s}))},Ma=(l,c={})=>{const m=l?ie(l):i,S=ie(m),k=ce(l),N=k?i:S;if(c.keepDefaultValues||(i=m),!c.keepValues){if(c.keepDirtyValues){const M=new Set([...d.mount,...Object.keys(et(i,n))]);for(const q of Array.from(M)){const Y=P(s.dirtyFields,q),me=P(n,q),Ce=P(N,q);Y&&!Z(me)?J(N,q,me):!Y&&!Z(Ce)&&E(q,Ce)}}else{if(wa&&Z(l))for(const M of d.mount){const q=P(r,M);if(q&&q._f){const Y=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(kt(Y)){const me=Y.closest("form");if(me){me.reset();break}}}}if(c.keepFieldsRef)for(const M of d.mount)E(M,P(N,M));else r={}}n=a.shouldUnregister?c.keepDefaultValues?ie(i):{}:ie(N),f.array.next({values:{...N}}),f.state.next({values:{...N}})}d={mount:c.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!p.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!a.shouldUnregister&&!ce(N),o.watch=!!a.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,c.keepErrors||(s.errors={}),f.state.next({submitCount:c.keepSubmitCount?s.submitCount:0,isDirty:k?!1:c.keepDirty?s.isDirty:!!(c.keepDefaultValues&&!Ae(l,i)),isSubmitted:c.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:k?{}:c.keepDirtyValues?c.keepDefaultValues&&n?et(i,n):s.dirtyFields:c.keepDefaultValues&&l?et(i,l):c.keepDirty?s.dirtyFields:{},touchedFields:c.keepTouched?s.touchedFields:{},errors:c.keepErrors?s.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},Ea=(l,c)=>Ma(xe(l)?l(n):l,{...a.resetOptions,...c}),nr=(l,c={})=>{const m=P(r,l),S=m&&m._f;if(S){const k=S.refs?S.refs[0]:S.ref;k.focus&&setTimeout(()=>{k.focus(),c.shouldSelect&&xe(k.select)&&k.select()})}},or=l=>{s={...s,...l}},Pa={control:{register:Rt,unregister:$t,getFieldState:Le,handleSubmit:Ta,setError:pt,_subscribe:Sa,_runSchema:H,_updateIsValidating:$,_focusError:qt,_getWatch:U,_getDirty:B,_setValid:D,_setFieldArray:j,_setDisabledField:Da,_setErrors:I,_getFieldArray:se,_reset:Ma,_resetDefaultValues:()=>xe(a.defaultValues)&&a.defaultValues().then(l=>{Ea(l,a.resetOptions),f.state.next({isLoading:!1})}),_removeUnmounted:R,_disableForm:rr,_subjects:f,_proxyFormState:p,get _fields(){return r},get _formValues(){return n},get _state(){return o},set _state(l){o=l},get _defaultValues(){return i},get _names(){return d},set _names(l){d=l},get _formState(){return s},get _options(){return a},set _options(l){a={...a,...l}}},subscribe:sr,trigger:Q,register:Rt,handleSubmit:Ta,watch:ar,setValue:E,setValues:T,getValues:re,reset:Ea,resetField:ir,clearErrors:ut,unregister:$t,setError:pt,setFocus:nr,getFieldState:Le};return{...Pa,formControl:Pa}}function ka(e={}){const a=ue.useRef(void 0),s=ue.useRef(void 0),[r,i]=ue.useState(()=>({...ie(Xs),isLoading:xe(e.defaultValues),errors:e.errors||{},disabled:e.disabled||!1,defaultValues:xe(e.defaultValues)?void 0:e.defaultValues}));if(!a.current)if(e.formControl)a.current={...e.formControl,formState:r},e.defaultValues&&!xe(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:o,...d}=_o(e);a.current={...d,formState:r}}const n=a.current.control;return n._options=e,xo(()=>{const o=n._subscribe({formState:n._proxyFormState,callback:()=>i({...n._formState}),reRenderRoot:!0});return i(d=>({...d,isReady:!0})),n._formState.isReady=!0,o},[n]),ue.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),ue.useEffect(()=>{e.mode&&(n._options.mode=e.mode),e.reValidateMode&&(n._options.reValidateMode=e.reValidateMode)},[n,e.mode,e.reValidateMode]),ue.useEffect(()=>{e.errors&&(n._setErrors(e.errors),n._focusError())},[n,e.errors]),ue.useEffect(()=>{e.shouldUnregister&&n._subjects.state.next({values:n._getWatch()})},[n,e.shouldUnregister]),ue.useEffect(()=>{if(n._proxyFormState.isDirty){const o=n._getDirty();o!==r.isDirty&&n._subjects.state.next({isDirty:o})}},[n,r.isDirty]),ue.useEffect(()=>{var o;e.values&&!Ae(e.values,s.current)?(n._reset(e.values,{keepFieldsRef:!0,...n._options.resetOptions}),!((o=n._options.resetOptions)===null||o===void 0)&&o.keepIsValid||n._setValid(),s.current=e.values,i(d=>({...d}))):n._resetDefaultValues()},[n,e.values]),ue.useEffect(()=>{n._state.mount||(n._setValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),a.current.formState=ue.useMemo(()=>ho(r,n),[n,r]),a.current}const yt=["FLAP Izquierdo","FLAP Derecho","FLAP Bilateral","FLA Izquierdo","FLA Derecho","FLA Bilateral","Fisura Palatina"];function ds(e){return e?yt.includes(e)?e:"__otro__":""}function Oo(e){if(!e)return null;const a=Ee(e);if(!Me(a))return null;const s=new Date,r=Ie(s,a),i=new Date(a.getFullYear()+r,a.getMonth(),a.getDate()),n=Je(s,i),o=new Date(i.getFullYear(),i.getMonth()+n,i.getDate()),d=Xe(s,o);return{years:r,months:n,days:d}}function Io({years:e,months:a,days:s}){const r=[];return e>0&&r.push(`${e} ${e===1?"año":"años"}`),a>0&&r.push(`${a} ${a===1?"mes":"meses"}`),(s>0||r.length===0)&&r.push(`${s} ${s===1?"día":"días"}`),r.join(", ")}function Lo({initial:e,onSubmit:a,onCancel:s,busy:r}){const{register:i,handleSubmit:n,reset:o,watch:d,formState:{errors:g}}=ka({defaultValues:e??{patientCode:"",fullName:"",birthDate:"",diagnosis:"",idNumber:"",sex:"",address:"",guardian:"",guardianIdNumber:"",guardianPhone:"",allergies:"",clinicalHistory:"",patientType:"mny"}});A.useEffect(()=>{e&&(o(e),C(ds(e.diagnosis)),D(e.diagnosis&&!yt.includes(e.diagnosis)?e.diagnosis:""))},[e]);const v=d("birthDate"),h=d("patientType"),p=Oo(v),x=oe(h),[f,C]=A.useState(ds(e==null?void 0:e.diagnosis)),[w,D]=A.useState(e!=null&&e.diagnosis&&!yt.includes(e.diagnosis)?e.diagnosis:""),[$,u]=A.useState(!1),j=b=>{const I=f==="__otro__"?w.trim():f;if(!I){u(!0);return}u(!1),a({...b,diagnosis:I})};return t.jsxs("form",{onSubmit:n(j),className:"space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"sm:col-span-2 form-group mb-0",children:[t.jsx("label",{className:"label",children:"Nombre completo *"}),t.jsx("input",{className:`input ${g.fullName?"input-error":""}`,placeholder:"Nombre y apellidos",...i("fullName",{required:"Requerido"})}),g.fullName&&t.jsx("p",{className:"error-msg",children:g.fullName.message})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Tipo de paciente *"}),t.jsxs("select",{className:"input",...i("patientType",{required:!0}),children:[t.jsx("option",{value:"mny",children:"MNY — Hospital Munay"}),t.jsx("option",{value:"jwi",children:"JWI — Fundación JIWAQUI"}),t.jsx("option",{value:"ext",children:"EXT — Externo"})]})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Código de paciente"}),t.jsxs("div",{className:"flex",children:[t.jsxs("span",{className:"inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 text-sm font-bold select-none",style:{backgroundColor:x.lightBg,color:x.bg},children:[x.label," -"]}),t.jsx("input",{className:"input rounded-l-none flex-1",placeholder:"ej: 001",...i("patientCode")})]}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Número correlativo para buscar al paciente por código."})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Fecha de nacimiento"}),t.jsx("input",{type:"date",className:"input",...i("birthDate")}),p!==null&&t.jsxs("p",{className:"text-xs font-medium mt-1",style:{color:"#09D6D4"},children:["Edad: ",t.jsx("span",{className:"font-bold",children:Io(p)})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Sexo"}),t.jsxs("select",{className:"input",...i("sex"),children:[t.jsx("option",{value:"",children:"— Seleccionar —"}),t.jsx("option",{value:"masculino",children:"Masculino"}),t.jsx("option",{value:"femenino",children:"Femenino"})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"CI del paciente"}),t.jsx("input",{className:"input",placeholder:"Ej: 12345678",...i("idNumber")})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Diagnóstico *"}),t.jsxs("select",{className:`input ${$?"input-error":""}`,value:f,onChange:b=>{C(b.target.value),u(!1),b.target.value!=="__otro__"&&D("")},children:[t.jsx("option",{value:"",children:"— Seleccionar diagnóstico —"}),yt.map(b=>t.jsx("option",{value:b,children:b},b)),t.jsx("option",{value:"__otro__",children:"Otro (especificar)"})]}),f==="__otro__"&&t.jsx("input",{className:`input mt-2 ${$?"input-error":""}`,placeholder:"Especificar diagnóstico...",value:w,onChange:b=>{D(b.target.value),u(!1)}}),$&&t.jsx("p",{className:"error-msg",children:"Selecciona o especifica el diagnóstico"})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Dirección"}),t.jsx("input",{className:"input",placeholder:"Calle, ciudad, región",...i("address")})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"sm:col-span-1 form-group mb-0",children:[t.jsx("label",{className:"label",children:"Responsable / Tutor"}),t.jsx("input",{className:"input",placeholder:"Nombre del responsable",...i("guardian")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"CI del responsable"}),t.jsx("input",{className:"input",placeholder:"Ej: 12345678",...i("guardianIdNumber")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Teléfono del responsable"}),t.jsx("input",{className:"input",placeholder:"+591 7XXXXXXX",...i("guardianPhone")})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Alergias / Medicamentos"}),t.jsx("textarea",{rows:2,className:"input resize-none",placeholder:"Alergias conocidas, medicamentos actuales...",...i("allergies")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Historial clínico"}),t.jsx("textarea",{rows:3,className:"input resize-none",placeholder:"Antecedentes, cirugías previas, observaciones...",...i("clinicalHistory")})]}),t.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[t.jsx("button",{type:"button",onClick:s,className:"btn-secondary btn",children:"Cancelar"}),t.jsx("button",{type:"submit",disabled:r,className:"btn-primary btn",children:r?t.jsx(lt,{className:"w-4 h-4 animate-spin"}):e!=null&&e.id?"Guardar cambios":"Registrar paciente"})]})]})}function zo(e){if(!e)return null;const a=Ee(e);if(!Me(a))return null;const s=new Date,r=Ie(s,a),i=new Date(a.getFullYear()+r,a.getMonth(),a.getDate()),n=Je(s,i),o=new Date(i.getFullYear(),i.getMonth()+n,i.getDate()),d=Xe(s,o);return{years:r,months:n,days:d}}function $o(e){if(!e)return"-";const a=[];return e.years>0&&a.push(`${e.years}a`),e.months>0&&a.push(`${e.months}m`),(e.days>0||a.length===0)&&a.push(`${e.days}d`),a.join(" ")}function Ro({patient:e}){const{surgeries:a,therapies:s}=ve(),r=zo(e.birthDate),i=a.filter(o=>o.patientId===e.id).sort((o,d)=>d.date.localeCompare(o.date)),n=s.filter(o=>o.patientId===e.id).sort((o,d)=>d.date.localeCompare(o.date));return t.jsxs("div",{className:"space-y-6",children:[t.jsx("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[["Diagnóstico",e.diagnosis],["Tipo",oe(e.patientType).longLabel],["Fecha de nac.",e.birthDate?W(Ee(e.birthDate),"dd/MM/yyyy"):"-"],["Edad",$o(r)],["CI paciente",e.idNumber||"-"],["Sexo",e.sex==="masculino"?"Masculino":e.sex==="femenino"?"Femenino":"-"],["Responsable",e.guardian||"-"],["CI responsable",e.guardianIdNumber||"-"],["Tel. responsable",e.guardianPhone||"-"],["Dirección",e.address||"-"]].map(([o,d])=>t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium",children:o}),t.jsx("p",{className:"text-gray-800 font-medium",children:d})]},o))}),e.allergies&&t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium mb-1",children:"Alergias / Medicamentos"}),t.jsx("p",{className:"text-sm text-gray-700 bg-amber-50 rounded-lg p-3",children:e.allergies})]}),e.clinicalHistory&&t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium mb-1",children:"Historial clínico"}),t.jsx("p",{className:"text-sm text-gray-700 bg-gray-50 rounded-lg p-3",children:e.clinicalHistory})]}),t.jsxs("section",{children:[t.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3",children:[t.jsx(tt,{className:"w-4 h-4 text-teal-600"}),"Cirugías (",i.length,")"]}),i.length===0?t.jsx("p",{className:"text-sm text-gray-400",children:"Sin cirugías registradas."}):t.jsx("ul",{className:"space-y-2",children:i.map(o=>t.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-gray-800",children:o.surgeryType}),t.jsxs("p",{className:"text-xs text-gray-500",children:[W(new Date(o.date+"T12:00"),"d MMM yyyy",{locale:je})," · ",o.startTime," · ",o.surgeon||"—"]})]}),t.jsx(Fe,{variant:o.status})]},o.id))})]}),t.jsxs("section",{children:[t.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3",children:[t.jsx(St,{className:"w-4 h-4 text-purple-600"}),"Terapias (",n.length,")"]}),n.length===0?t.jsx("p",{className:"text-sm text-gray-400",children:"Sin terapias registradas."}):t.jsx("ul",{className:"space-y-2",children:n.map(o=>t.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-gray-800",children:o.therapyType}),t.jsxs("p",{className:"text-xs text-gray-500",children:[W(new Date(o.date+"T12:00"),"d MMM yyyy",{locale:je})," · ",o.startTime," · ",o.therapist||"—"]})]}),t.jsx(Fe,{variant:o.status??"programado"})]},o.id))})]})]})}function qo(e){if(!e)return"";const a=Ee(e);return Me(a)?Ie(new Date,a):""}function Js(e,a){const s=r=>{const i=String(r??"").replace(/"/g,'""');return/[,"\n]/.test(i)?`"${i}"`:i};return[e.map(s).join(","),...a.map(r=>r.map(s).join(","))].join(`
`)}function Zs(e,a){const s=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(s);Object.assign(document.createElement("a"),{href:r,download:a}).click(),URL.revokeObjectURL(r)}function Ho(e){const a=["Nombre","Fecha Nac.","Edad","Diagnóstico","Teléfono","Dirección","Responsable","Tel. Responsable","Tipo"],s=e.map(r=>[r.fullName,r.birthDate,qo(r.birthDate),r.diagnosis,r.phone,r.address,r.guardian,r.guardianPhone,r.patientType==="flap"?"FLAP":"Externo"]);Zs(Js(a,s),"pacientes.csv")}function Vo(e){const a=["Fecha","Hora","Paciente","Tipo","Cirujano","Anestesiólogo","Instrumentadora","Ayuno","Estado","Cotización","Pagado","Pago Completo","Ayuda Social"],s=e.map(r=>[r.date,r.startTime,r.patientName,r.surgeryType,r.surgeon,r.anesthesiologist,r.scrubNurse,r.fastingTime,r.status,r.quotation,r.amountPaid,r.paymentComplete?"Sí":"No",r.socialAid?"Sí":"No"]);Zs(Js(a,s),"cirugias.csv")}const It=[15,118,110];function Bo(e){if(!e)return"";const a=Ee(e);return Me(a)?`${Ie(new Date,a)} años`:""}function Aa(e,a,s,r=!1){const i=r?297:210;e.setFillColor(...It),e.rect(0,0,i,22,"F"),e.setTextColor(255,255,255),e.setFontSize(16),e.setFont("helvetica","bold"),e.text("MUNAY - Gestión Quirúrgica",14,10),e.setFontSize(9),e.setFont("helvetica","normal"),e.text(a,14,17),s&&e.text(s,i/2,17,{align:"center"}),e.text(`Generado: ${W(new Date,"dd/MM/yyyy HH:mm",{locale:je})}`,i-14,17,{align:"right"}),e.setTextColor(0,0,0)}function Yo(e,a){const s=new ua,r=W(new Date(a+"T12:00:00"),"EEEE d 'de' MMMM yyyy",{locale:je});Aa(s,"Programación Diaria",r);const i=e.filter(n=>n.date===a&&n.status!=="cancelado").sort((n,o)=>n.startTime.localeCompare(o.startTime)).map(n=>[n.startTime,n.patientName??"",n.surgeryType??"",n.surgeon??"",n.anesthesiologist??"",n.fastingTime??"—",Ks(n.status)]);pa(s,{startY:28,head:[["Hora","Paciente","Tipo de cirugía","Cirujano","Anestesiólogo","Ayuno","Estado"]],body:i,headStyles:{fillColor:It,fontSize:8},bodyStyles:{fontSize:8},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:14,right:14}}),s.save(`programacion-${a}.pdf`)}function Wo(e,a){const s=new ua({orientation:"landscape"});Aa(s,"Programación Semanal",`Semana del ${a[0]} al ${a[6]}`,!0);const r=e.filter(i=>a.includes(i.date)&&i.status!=="cancelado").sort((i,n)=>i.date.localeCompare(n.date)||i.startTime.localeCompare(n.startTime)).map(i=>[W(new Date(i.date+"T12:00"),"EEE dd/MM",{locale:je}),i.startTime,i.patientName??"",i.surgeryType??"",i.surgeon??"",i.anesthesiologist??"",i.fastingTime??"—",Ks(i.status)]);pa(s,{startY:28,head:[["Día","Hora","Paciente","Tipo","Cirujano","Anestesiólogo","Ayuno","Estado"]],body:r,headStyles:{fillColor:It,fontSize:7},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),s.save("programacion-semana.pdf")}function Uo(e){const a=new ua;Aa(a,"Listado de Pacientes","");const s=e.map(r=>[r.fullName??"",r.birthDate??"",Bo(r.birthDate),r.diagnosis??"",r.phone??"",r.guardian??"",r.guardianPhone??"",r.patientType==="flap"?"FLAP":"Externo"]);pa(a,{startY:28,head:[["Nombre","Fecha Nac.","Edad","Diagnóstico","Teléfono","Responsable","Tel. Resp.","Tipo"]],body:s,headStyles:{fillColor:It,fontSize:8},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),a.save("pacientes.pdf")}function Ks(e){return{programado:"Programado",confirmado:"Confirmado",realizado:"Realizado",cancelado:"Cancelado"}[e]??e}const Te="/assets/LOGO%202-DdZTdNO6.jpg";async function Qo(e){try{const s=await(await fetch(e)).blob();return new Promise(r=>{const i=new FileReader;i.onloadend=()=>r(i.result),i.readAsDataURL(s)})}catch{return null}}function Go(e){if(!e)return null;const a=Ee(e);if(!Me(a))return null;const s=new Date,r=Ie(s,a),i=new Date(a.getFullYear()+r,a.getMonth(),a.getDate()),n=Je(s,i),o=new Date(i.getFullYear(),i.getMonth()+n,i.getDate()),d=Xe(s,o);return{years:r,months:n,days:d}}function Xo(e){if(!e)return"";const a=e.toUpperCase();return a.includes("BILATERAL")&&a.includes("FLAP")?"FLAP Bilateral":a.includes("FLAP")?"FLAP Unilateral":a.includes("BILATERAL")&&a.includes("FL")?"FL Bilateral":a.includes("FLA")||a.includes("FL")&&!a.includes("FLAP")?"FL Unilateral":a.includes("PALAT")||a==="FP"?"FP":""}async function cs(e){const a=await Qo(Te),s=oe(e==null?void 0:e.patientType),r=e!=null&&e.patientCode?`${s.label}-${e.patientCode}`:"",i=(e==null?void 0:e.fullName)||"",n=(e==null?void 0:e.birthDate)||"",o=Go(e==null?void 0:e.birthDate),d=o?(()=>{const u=[];return o.years>0&&u.push(`${o.years} año${o.years!==1?"s":""}`),o.months>0&&u.push(`${o.months} mes${o.months!==1?"es":""}`),u.length===0&&u.push(`${o.days} días`),u.join(" ")})():"",g=(e==null?void 0:e.sex)==="masculino"?"MASCULINO":(e==null?void 0:e.sex)==="femenino"?"FEMENINO":"",v=Xo(e==null?void 0:e.diagnosis),h=(e==null?void 0:e.address)||"",p=(e==null?void 0:e.guardian)||"",x=(e==null?void 0:e.guardianPhone)||"",f=new Date().toISOString().slice(0,10),C=JSON.stringify({nroHC:r,nombrePaciente:i,fechaNacimiento:n,edad:d,sexo:g,diagnostico:v,domicilio:h,nombreMadre:p,celMadre:x,fechaEvaluacion:f}),w=JSON.stringify(a||""),D=`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Ficha Social — ${i}</title>
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
window.__pd   = ${C};
window.__logo = ${w};
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
  tipoVivienda:'',materialVivienda:'',
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
    h += '.hdr{display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #4FC3C2;padding-bottom:4px;margin-bottom:6px}';
    h += '.hdr-left{display:flex;align-items:center;gap:8px}';
    h += '.hdr-title{font-size:10pt;font-weight:700;color:#1F3A5F;letter-spacing:.3px}';
    h += '.hdr-sub{font-size:7.5pt;color:#4a5a5a}';
    h += '.badge{padding:4px 10px;border-radius:4px;font-size:9pt;font-weight:700;color:#fff}';
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
    h += '.firma .lin{border-top:1px solid #1c2a2a;margin-bottom:3px;margin-top:30px}';
    h += '.firma .fn{font-weight:700;font-size:8.5pt}';
    h += '.pie{text-align:center;font-size:7pt;color:#888;margin-top:10px;border-top:1px solid #dde;padding-top:4px}';
    h += '@media print{.toolbar{display:none!important}body{font-size:8pt}}';
    h += '</style></head><body>';

    h += '<div class="toolbar"><button onclick="window.print()">Imprimir / PDF</button></div>';

    h += '<div class="hdr">';
    h += '<div class="hdr-left">';
    h += '<div><div class="hdr-title">Ficha Social Integral — Centro MUNAY</div>';
    h += '<div class="hdr-sub">Trabajo Social · Evaluación Psicosocial · La Paz, Bolivia</div></div></div>';
    h += '<div><span class="badge b'+riesgo.color[0]+'">'+riesgo.nivel+' — Score '+riesgo.score+'</span>';
    h += '<div style="font-size:7pt;color:#4a5a5a;text-align:right;margin-top:2px">Profesional: '+(data.profesional||'—')+'  |  Fecha: '+(data.fechaEvaluacion||'—')+'</div></div>';
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
    h += row('Tipo vivienda', data.tipoVivienda);
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
    h += '<div class="firma"><div class="lin"></div><div class="fn">___________________________</div><div>Responsable del paciente</div></div>';
    h += '</div>';

    h += '<div class="pie">Ficha Social Integral v1.0 — Centro Médico Quirúrgico MUNAY · La Paz, Bolivia · Trabajo Social</div>';
    h += '</body></html>';

    var win = window.open('', '_blank', 'width=820,height=1060');
    win.document.write(h);
    win.document.close();
    win.focus();
  }

  const Field = ({label,children,full}) =>
    e('label',{className:'field'+(full?' full':'')},
      e('span',{className:'lbl'},label),children);

  const Radio = ({name,value,current,onChange,children}) =>
    e('label',{className:'chip'+(current===value?' active':'')},
      e('input',{type:'radio',name,checked:current===value,onChange:()=>onChange(value)}),
      e('span',null,children));

  const Check = ({checked,onChange,children}) =>
    e('label',{className:'chip'+(checked?' active':'')},
      e('input',{type:'checkbox',checked,onChange}),
      e('span',null,children));

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
        e('div',{style:{fontSize:'11px',opacity:.85,marginTop:'1px'}},'Ficha Social Integral — Trabajo Social')),
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
          e(Field,{label:'Diagnostico'},e('select',{value:data.diagnostico,onChange:ev=>set('diagnostico',ev.target.value)},
            e('option',{value:''},'—'),
            ['FL Unilateral','FL Bilateral','FP','FLAP Unilateral','FLAP Bilateral'].map(o=>e('option',{key:o},o))))),
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
          e('div',{className:'chips'},['Publico','Propio','Caminando','Otro'].map(o=>
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
          e('div',{className:'chips'},['Propia','Alquilada','Anticretico','Cedida'].map(o=>
            e(Radio,{key:o,name:'tipoViv',value:o,current:data.tipoVivienda,onChange:v=>set('tipoVivienda',v)},o)))),
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
</body></html>`,$=window.open("","_blank","width=1100,height=860");$.document.write(D),$.document.close(),$.focus()}async function Jo(e){try{const s=await(await fetch(e)).blob();return new Promise(r=>{const i=new FileReader;i.onloadend=()=>r(i.result),i.readAsDataURL(s)})}catch{return null}}async function us(e){const a=await Jo(Te),s=oe(e==null?void 0:e.patientType);e!=null&&e.patientCode&&`${s.label}${e.patientCode}`;const r=(e==null?void 0:e.fullName)||"",i=(e==null?void 0:e.guardian)||"",n=(e==null?void 0:e.guardianIdNumber)||"",o=(e==null?void 0:e.address)||"",d=(e==null?void 0:e.diagnosis)||"",g=`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Consentimiento Fotos — ${r}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
:root{--teal:#4FC3C2;--teal-dark:#1F3A5F;--amber:#F4B73C;--amber-dark:#D49A1C;--ink:#1c2a2a;--ink-soft:#4a5a5a;--line:#888}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#eef2f2;font-family:'Inter',Arial,sans-serif;color:var(--ink)}
.toolbar{position:sticky;top:0;z-index:10;background:#fff;border-bottom:1px solid #d8e0e0;padding:10px 20px;display:flex;gap:10px;justify-content:flex-end;align-items:center;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.toolbar .title{margin-right:auto;font-weight:600;color:var(--teal-dark);font-size:13px}
.btn{padding:8px 16px;border:1px solid #d0d8d8;background:#fff;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;color:var(--ink);transition:all .15s}
.btn:hover{border-color:var(--teal);color:var(--teal-dark)}
.btn.primary{background:var(--teal-dark);color:#fff;border-color:var(--teal-dark)}
.btn.primary:hover{background:#162e4d}
.sheet{width:210mm;min-height:297mm;margin:24px auto;background:#fff;box-shadow:0 8px 30px rgba(0,0,0,.08);position:relative;display:flex;flex-direction:column}
.deco{position:relative;width:100%;height:38mm;overflow:hidden;flex-shrink:0}
.deco svg{width:100%;height:100%;display:block}
.logo-wrap{position:absolute;top:10mm;left:14mm;display:flex;align-items:center;gap:10px;z-index:2}
.logo-text{line-height:1.1}
.logo-text .l1{font-size:9px;color:#fff;font-weight:600;letter-spacing:.3px;opacity:.9}
.logo-text .l2{font-size:17px;color:#fff;font-weight:800;letter-spacing:-.3px}
.logo-text .l3{font-size:7px;color:#fff;opacity:.85;font-style:italic;margin-top:1px}
.logo-text .l2 span{color:var(--amber)}
.content{padding:0 22mm;flex:1;display:flex;flex-direction:column}
.doc-title{text-align:center;margin:5mm 0 1mm;font-size:17px;font-weight:700;letter-spacing:.5px;color:var(--teal-dark)}
.doc-subtitle{text-align:center;margin:0 0 7mm;font-size:14px;font-weight:700;letter-spacing:.3px;color:var(--ink)}
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
.firma{margin:14mm auto 5mm;text-align:center;width:75mm}
.firma .linea{border-top:1px solid var(--ink);margin-bottom:4px}
.firma .nombre{font-weight:700;font-size:12.5px;text-transform:uppercase;min-height:1.2em}
.firma .ci-firma{font-size:11.5px;margin-top:3px}
.firma .ci-firma .blank{display:inline-block;border-bottom:1px solid var(--line);min-width:32mm;min-height:1em;padding:0 4px;vertical-align:bottom}
.deco-bottom{margin-top:auto}
.logo-wrap-bot{position:absolute;bottom:7mm;left:14mm;display:flex;align-items:center;gap:10px;z-index:2}
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

  <div class="deco">
    <svg viewBox="0 0 210 38" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L210,0 L210,14 Q160,4 110,12 Q60,20 0,8 Z" fill="#F4B73C"/>
      <path d="M0,8 Q60,22 110,14 Q160,6 210,16 L210,28 Q160,18 110,26 Q60,34 0,22 Z" fill="#1F3A5F"/>
      <path d="M0,18 Q60,32 110,24 Q160,16 210,26" fill="none" stroke="#4FC3C2" stroke-width="2"/>
    </svg>
    <div class="logo-wrap">
      ${a?`<img src="${a}" style="height:44px;width:auto;object-fit:contain;filter:brightness(0) invert(1);"/>`:""}
      <div class="logo-text">
        <div class="l1">Hospital</div>
        <div class="l2">Mun<span>ay</span></div>
        <div class="l3">Amigo del Niño con Fisura</div>
      </div>
    </div>
  </div>

  <div class="content">
    <h1 class="doc-title">CONSENTIMIENTO INFORMADO</h1>
    <h2 class="doc-subtitle">PARA LA TOMA DE IMÁGENES Y VIDEO CON FINES DE DIFUSIÓN</h2>

    <div class="data-block">
      <div class="ci-row">
        <span class="label">CI:&nbsp;</span>
        <span class="blank editable" contenteditable="true" data-placeholder="N.º de cédula">${n}</span>
      </div>
      <div class="row">
        <span class="label">Yo:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Nombre completo del representante legal">${i}</span>
      </div>
      <div class="row">
        <span class="label">Paciente/Representante Legal del paciente:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Nombre completo del paciente">${r}</span>
      </div>
      <div class="row">
        <span class="label">Domicilio:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Zona, calle, número">${o}</span>
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
        <span class="blank editable" contenteditable="true" data-placeholder="dd/mm/aaaa"></span>
      </div>
    </div>

    <div class="firma">
      <div class="linea"></div>
      <div class="nombre editable" contenteditable="true" data-placeholder="NOMBRE COMPLETO">${i||r}</div>
      <div class="ci-firma">
        C.I.: <span class="blank editable" contenteditable="true" data-placeholder="N.º">${n}</span>
      </div>
    </div>
  </div>

  <div class="deco deco-bottom">
    <svg viewBox="0 0 210 38" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,10 Q60,0 110,8 Q160,16 210,4 L210,24 Q160,14 110,22 Q60,30 0,20 Z" fill="#1F3A5F"/>
      <path d="M0,20 Q60,30 110,22 Q160,14 210,24 L210,38 L0,38 Z" fill="#F4B73C"/>
      <path d="M0,16 Q60,6 110,14 Q160,22 210,10" fill="none" stroke="#4FC3C2" stroke-width="2"/>
    </svg>
    <div class="logo-wrap-bot">
      ${a?`<img src="${a}" style="height:38px;width:auto;object-fit:contain;filter:brightness(0) invert(1);"/>`:""}
      <div class="logo-text">
        <div class="l1">Hospital</div>
        <div class="l2">Mun<span>ay</span></div>
        <div class="l3">Amigo del Niño con Fisura</div>
      </div>
    </div>
  </div>
</div>

<script>
function limpiar(){
  if(!confirm('¿Limpiar todos los campos editables?')) return;
  document.querySelectorAll('.editable').forEach(el => el.textContent = '');
}
<\/script>
</body></html>`,v=window.open("","_blank","width=900,height=800");v.document.write(g),v.document.close(),v.focus()}function ps(e){if(!e)return null;const a=Ee(e);if(!Me(a))return null;const s=new Date,r=Ie(s,a),i=new Date(a.getFullYear()+r,a.getMonth(),a.getDate()),n=Je(s,i),o=new Date(i.getFullYear(),i.getMonth()+n,i.getDate()),d=Xe(s,o);return{years:r,months:n,days:d}}function ms(e){if(!e)return"-";const a=[];return e.years>0&&a.push(`${e.years}a`),e.months>0&&a.push(`${e.months}m`),(e.days>0||a.length===0)&&a.push(`${e.days}d`),a.join(" ")}const Zo=[{value:"all",label:"Todos"},{value:"mny",label:"MNY"},{value:"jwi",label:"JWI"},{value:"ext",label:"EXT"}];function Ko(){const{patients:e,setPatients:a,setSurgeries:s,setTherapies:r}=ve(),{isAdmin:i,canEdit:n}=Oe(),[o,d]=A.useState(""),[g,v]=A.useState("all"),[h,p]=A.useState(!1),[x,f]=A.useState(!1),[C,w]=A.useState(null),[D,$]=A.useState(null),[u,j]=A.useState(!1);A.useEffect(()=>{const y=Et(a),_=Pt(s),O=va(r);return()=>{y(),_(),O()}},[]);const b=A.useMemo(()=>{let y=e;if(g!=="all"&&(y=y.filter(_=>oe(_.patientType).label===g.toUpperCase())),o){const _=o.toLowerCase().replace(/^mny\s*-?\s*/i,""),O=o.toLowerCase();y=y.filter(R=>{var B,U,se,K,de,E;return((B=R.fullName)==null?void 0:B.toLowerCase().includes(O))||((U=R.diagnosis)==null?void 0:U.toLowerCase().includes(O))||((se=R.guardian)==null?void 0:se.toLowerCase().includes(O))||((K=R.phone)==null?void 0:K.includes(O))||((de=R.guardianPhone)==null?void 0:de.includes(O))||((E=R.patientCode)==null?void 0:E.toLowerCase().includes(_))||`mny-${R.patientCode}`.toLowerCase().includes(O)})}return y},[e,g,o]),I=()=>{w(null),p(!0)},V=y=>{w(y),p(!0)},ae=y=>{w(y),f(!0)},z=async y=>{j(!0);try{C!=null&&C.id?(await ao(C.id,y),ee.success("Paciente actualizado")):(await to(y),ee.success("Paciente registrado")),p(!1)}catch(_){ee.error("Error al guardar: "+_.message)}finally{j(!1)}},H=async()=>{if(D)try{await so(D.id),ee.success("Paciente eliminado")}catch(y){ee.error("Error: "+y.message)}finally{$(null)}};return t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"card py-3",children:t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-start sm:items-center",children:[t.jsx("div",{className:"flex-1 w-full sm:w-auto",children:t.jsx(qs,{value:o,onChange:d,placeholder:"Buscar por nombre, código MNY-, diagnóstico, teléfono..."})}),t.jsx("div",{className:"flex gap-2 flex-wrap",children:Zo.map(y=>t.jsx("button",{onClick:()=>v(y.value),className:`btn btn-sm ${g===y.value?"btn-primary":"btn-secondary"}`,children:y.label},y.value))}),t.jsxs("div",{className:"flex gap-2 ml-auto",children:[t.jsx("button",{onClick:()=>Ho(b),className:"btn-secondary btn btn-sm",title:"Exportar CSV",children:t.jsx(da,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>Uo(b),className:"btn-secondary btn btn-sm",title:"Exportar PDF",children:t.jsx(Ye,{className:"w-4 h-4"})}),n&&t.jsxs("button",{onClick:I,className:"btn-primary btn btn-sm",children:[t.jsx(Ia,{className:"w-4 h-4"}),"Nuevo paciente"]})]})]})}),t.jsxs("p",{className:"text-sm text-gray-500",children:[b.length," paciente",b.length!==1?"s":""]}),b.length===0?t.jsxs("div",{className:"card flex flex-col items-center py-12 text-gray-400",children:[t.jsx(Ia,{className:"w-10 h-10 mb-2 opacity-40"}),t.jsx("p",{className:"text-sm",children:o?"Sin resultados para la búsqueda.":"No hay pacientes registrados."}),n&&!o&&t.jsx("button",{onClick:I,className:"btn-primary btn mt-4",children:"Registrar primer paciente"})]}):t.jsxs("div",{className:"card p-0 overflow-hidden",children:[t.jsx("div",{className:"hidden md:block overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:t.jsx("tr",{children:["Código","Nombre","Diagnóstico","Edad","Responsable","Tel. Resp.","Tipo",""].map(y=>t.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:y},y))})}),t.jsx("tbody",{className:"divide-y divide-gray-50",children:b.map(y=>{const _=ps(y.birthDate);return t.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[t.jsx("td",{className:"px-4 py-3 font-mono text-xs font-semibold whitespace-nowrap",children:y.patientCode?t.jsxs("span",{className:"px-1.5 py-0.5 rounded text-white text-[11px]",style:{backgroundColor:oe(y.patientType).bg},children:[oe(y.patientType).label,"-",y.patientCode]}):"—"}),t.jsx("td",{className:"px-4 py-3 font-medium text-gray-800",children:y.fullName}),t.jsx("td",{className:"px-4 py-3 text-gray-600 max-w-[200px] truncate",title:y.diagnosis,children:y.diagnosis}),t.jsx("td",{className:"px-4 py-3 text-gray-600 whitespace-nowrap",children:ms(_)}),t.jsx("td",{className:"px-4 py-3 text-gray-600",children:y.guardian||"-"}),t.jsx("td",{className:"px-4 py-3 text-gray-600",children:y.guardianPhone||"-"}),t.jsx("td",{className:"px-4 py-3",children:t.jsx(Fe,{variant:y.patientType})}),t.jsx("td",{className:"px-4 py-3",children:t.jsxs("div",{className:"flex gap-1 justify-end",children:[t.jsx("button",{onClick:()=>ae(y),className:"btn-ghost btn btn-sm p-1.5",title:"Ver historial",children:t.jsx(Zt,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>cs(y),className:"btn-ghost btn btn-sm p-1.5 text-teal-600 hover:bg-teal-50",title:"Ficha social",children:t.jsx(La,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>us(y),className:"btn-ghost btn btn-sm p-1.5 text-amber-600 hover:bg-amber-50",title:"Consentimiento fotos",children:t.jsx(za,{className:"w-4 h-4"})}),n&&t.jsx("button",{onClick:()=>V(y),className:"btn-ghost btn btn-sm p-1.5",title:"Editar",children:t.jsx(Ft,{className:"w-4 h-4"})}),i&&t.jsx("button",{onClick:()=>$(y),className:"btn-ghost btn btn-sm p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50",title:"Eliminar",children:t.jsx(Kt,{className:"w-4 h-4"})})]})})]},y.id)})})]})}),t.jsx("ul",{className:"md:hidden divide-y divide-gray-100",children:b.map(y=>{const _=ps(y.birthDate);return t.jsxs("li",{className:"p-4",children:[t.jsxs("div",{className:"flex items-start justify-between gap-2",children:[t.jsxs("div",{className:"flex-1 min-w-0",children:[y.patientCode&&t.jsxs("p",{className:"text-xs font-mono font-bold mb-0.5",style:{color:oe(y.patientType).bg},children:[oe(y.patientType).label,"-",y.patientCode]}),t.jsx("p",{className:"font-medium text-gray-800 truncate",children:y.fullName}),t.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:y.diagnosis}),_&&t.jsx("p",{className:"text-xs text-gray-400",children:ms(_)}),y.guardian&&t.jsxs("p",{className:"text-xs text-gray-400",children:["Resp: ",y.guardian,y.guardianPhone?` · ${y.guardianPhone}`:""]})]}),t.jsx(Fe,{variant:y.patientType})]}),t.jsxs("div",{className:"flex gap-2 mt-3",children:[t.jsxs("button",{onClick:()=>ae(y),className:"btn-secondary btn btn-sm flex-1 justify-center",children:[t.jsx(Zt,{className:"w-3.5 h-3.5"})," Historial"]}),t.jsx("button",{onClick:()=>cs(y),className:"btn btn-sm px-2.5 text-teal-600 border border-teal-200 hover:bg-teal-50",title:"Ficha social",children:t.jsx(La,{className:"w-3.5 h-3.5"})}),t.jsx("button",{onClick:()=>us(y),className:"btn btn-sm px-2.5 text-amber-600 border border-amber-200 hover:bg-amber-50",title:"Consentimiento fotos",children:t.jsx(za,{className:"w-3.5 h-3.5"})}),n&&t.jsx("button",{onClick:()=>V(y),className:"btn-secondary btn btn-sm px-2.5",children:t.jsx(Ft,{className:"w-3.5 h-3.5"})}),i&&t.jsx("button",{onClick:()=>$(y),className:"btn btn-sm px-2.5 text-red-500 border border-red-200 hover:bg-red-50",children:t.jsx(Kt,{className:"w-3.5 h-3.5"})})]})]},y.id)})})]}),t.jsx(ot,{open:h,onClose:()=>p(!1),title:C?"Editar paciente":"Nuevo paciente",size:"lg",children:t.jsx(Lo,{initial:C,onSubmit:z,onCancel:()=>p(!1),busy:u})}),t.jsx(ot,{open:x,onClose:()=>f(!1),title:C?`Historial — ${C.fullName}`:"Historial",size:"lg",children:C&&t.jsx(Ro,{patient:C})}),t.jsx(ya,{open:!!D,title:"Eliminar paciente",message:`¿Seguro que deseas eliminar a ${D==null?void 0:D.fullName}? Esta acción no se puede deshacer.`,onConfirm:H,onCancel:()=>$(null)})]})}var er={code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",year:"Año",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},buttonHints:{prev:"$0 antes",next:"$0 siguiente",today(e){return e==="Día"?"Hoy":(e==="Semana"?"Esta":"Este")+" "+e.toLocaleLowerCase()}},viewHint(e){return"Vista "+(e==="Semana"?"de la":"del")+" "+e.toLocaleLowerCase()},weekText:"Sm",weekTextLong:"Semana",allDayText:"Todo el día",moreLinkText:"más",moreLinkHint(e){return`Mostrar ${e} eventos más`},noEventsText:"No hay eventos para mostrar",navLinkHint:"Ir al $0",closeHint:"Cerrar",timeHint:"La hora",eventHint:"Evento"};function el(e,{date:a,excludeId:s=null}){return e.filter(r=>r.id===s||r.status==="cancelado"?!1:r.date===a)}function fs(e){if(!e)return null;const a=Ee(e);if(!Me(a))return null;const s=new Date,r=Ie(s,a),i=new Date(a.getFullYear()+r,a.getMonth(),a.getDate()),n=Je(s,i),o=new Date(i.getFullYear(),i.getMonth()+n,i.getDate()),d=Xe(s,o);return{years:r,months:n,days:d}}function tl(e){if(!e)return null;const a=[];return e.years>0&&a.push(`${e.years}a`),e.months>0&&a.push(`${e.months}m`),(e.days>0||a.length===0)&&a.push(`${e.days}d`),a.join(" ")}const al=["programado","confirmado","realizado","cancelado"],wt=["Plastia del Complejo Naso Labial (PCNL)","Rinoplastia","Colgajo Vomeriano + Adherencia Labial","Palatoplastia","Queiloplastia","Gingivoperioplastia (GPP)","Cierre de Fistula"];function gs(e){return e?wt.includes(e)?e:"__otro__":""}function sl({initial:e,onSubmit:a,onCancel:s,busy:r}){const{patients:i,surgeries:n}=ve(),[o,d]=A.useState((e==null?void 0:e.patientName)??""),[g,v]=A.useState(!1),[h,p]=A.useState(e!=null&&e.patientId?i.find(T=>T.id===e.patientId):null),x=A.useRef(null),[f,C]=A.useState(gs(e==null?void 0:e.surgeryType)),[w,D]=A.useState(e!=null&&e.surgeryType&&!wt.includes(e.surgeryType)?e.surgeryType:""),[$,u]=A.useState(!1);A.useEffect(()=>{const T=F=>{x.current&&!x.current.contains(F.target)&&v(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const j=A.useMemo(()=>{const T=o.toLowerCase().trim(),F=T.replace(/^mny\s*-?\s*/i,"");return T?i.filter(L=>{var Q,re;return((Q=L.fullName)==null?void 0:Q.toLowerCase().includes(T))||((re=L.diagnosis)==null?void 0:re.toLowerCase().includes(T))||L.patientCode&&L.patientCode.toLowerCase().includes(F)||L.patientCode&&`mny-${L.patientCode}`.toLowerCase().includes(T)}):i},[i,o]),{register:b,handleSubmit:I,watch:V,reset:ae,setValue:z,formState:{errors:H}}=ka({defaultValues:e??{patientId:"",date:"",startTime:"",admissionTime:"",fastingTime:"",peso:"",talla:"",surgeon:"",anesthesiologist:"",scrubNurse:"",status:"programado",notes:"",quotation:"",paymentComplete:!1,amountPaid:"",paymentDate:"",partialPaymentDate:"",socialAid:!1,socialAidAmount:"",adminNotes:""}});A.useEffect(()=>{e&&(ae(e),d(e.patientName??""),p(i.find(T=>T.id===e.patientId)??null),C(gs(e.surgeryType)),D(e.surgeryType&&!wt.includes(e.surgeryType)?e.surgeryType:""))},[e]);const y=V("date"),_=V("patientId"),O=V("paymentComplete"),R=V("status"),B=V("amountPaid");A.useEffect(()=>{if(_&&!h){const T=i.find(F=>F.id===_);T&&(p(T),d(T.fullName))}},[_,i]),A.useEffect(()=>{O&&R==="programado"?z("status","confirmado"):!O&&R==="confirmado"&&z("status","programado")},[O]);const U=y?el(n,{date:y,excludeId:e==null?void 0:e.id}):[],se=T=>{p(T),d(T.fullName),z("patientId",T.id,{shouldValidate:!0}),v(!1)},K=()=>{p(null),d(""),z("patientId","")},de=T=>{const F=f==="__otro__"?w.trim():f;if(!F){u(!0);return}u(!1);const L=i.find(Q=>Q.id===T.patientId);a({...T,surgeryType:F,patientName:(L==null?void 0:L.fullName)??"",patientType:(L==null?void 0:L.patientType)??"ext"})},E=fs(h==null?void 0:h.birthDate);return t.jsxs("form",{onSubmit:I(de),className:"space-y-5",children:[U.length>0&&t.jsxs("div",{className:"flex gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-3 text-sm",children:[t.jsx(bs,{className:"w-5 h-5 shrink-0 mt-0.5 text-amber-500"}),t.jsxs("div",{children:[t.jsxs("p",{className:"font-semibold",children:[U.length," cirugía",U.length>1?"s":""," ya programada",U.length>1?"s":""," para este día"]}),U.map(T=>t.jsxs("p",{className:"text-xs mt-0.5 text-amber-700",children:["· ",T.patientName," — ",T.startTime," (",T.surgeryType,")"]},T.id))]})]}),t.jsxs("div",{ref:x,className:"relative",children:[t.jsx("input",{type:"hidden",...b("patientId",{required:"Selecciona un paciente"})}),t.jsx("label",{className:"label",children:"Paciente *"}),t.jsxs("div",{className:"relative",children:[t.jsx(vs,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),t.jsx("input",{type:"text",value:o,autoComplete:"off",onChange:T=>{d(T.target.value),v(!0),T.target.value||K()},onFocus:()=>v(!0),placeholder:"Buscar por nombre, código MNY- o diagnóstico...",className:`input pl-9 pr-8 ${H.patientId?"input-error":""}`}),o&&t.jsx("button",{type:"button",onClick:K,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:t.jsx(Re,{className:"w-4 h-4"})})]}),g&&j.length>0&&t.jsx("div",{className:"absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-card-hover max-h-52 overflow-y-auto",children:j.map(T=>{const F=fs(T.birthDate),L=oe(T.patientType);return t.jsxs("button",{type:"button",onClick:()=>se(T),className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-hm-secondary-100 text-left transition",children:[t.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:L.bg}}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("p",{className:"text-sm font-semibold text-hm-primary truncate",children:T.fullName}),T.patientCode&&t.jsxs("span",{className:"text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded shrink-0",style:{backgroundColor:L.bg},children:[L.label,"-",T.patientCode]})]}),t.jsxs("p",{className:"text-xs text-gray-500 truncate",children:[T.diagnosis,F!==null?` · ${F} años`:""]})]}),t.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0",style:{backgroundColor:L.lightBg,color:L.textColor},children:L.label})]},T.id)})}),H.patientId&&t.jsx("p",{className:"error-msg",children:H.patientId.message}),h&&t.jsxs("div",{className:"mt-2 flex items-start gap-3 p-3 rounded-xl border",style:{backgroundColor:"rgba(9,214,212,0.06)",borderColor:"rgba(9,214,212,0.3)"},children:[t.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center shrink-0",style:{backgroundColor:oe(h.patientType).bg},children:t.jsx(ca,{className:"w-4 h-4 text-white"})}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[t.jsx("p",{className:"text-sm font-bold text-hm-primary",children:h.fullName}),h.patientCode&&t.jsxs("span",{className:"text-[10px] font-mono font-bold px-1.5 py-0.5 rounded",style:{backgroundColor:oe(h.patientType).bg,color:"#fff"},children:[oe(h.patientType).label,"-",h.patientCode]})]}),t.jsxs("p",{className:"text-xs text-gray-600 mt-0.5",children:[h.diagnosis,E&&t.jsxs("span",{className:"ml-2 font-semibold",style:{color:"#09D6D4"},children:["· ",tl(E)]})]}),h.guardian&&t.jsxs("p",{className:"text-xs text-gray-400 mt-0.5",children:["Resp: ",h.guardian,h.guardianPhone?` — ${h.guardianPhone}`:""]})]})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Tipo de cirugía *"}),t.jsxs("select",{className:`input ${$?"input-error":""}`,value:f,onChange:T=>{C(T.target.value),u(!1),T.target.value!=="__otro__"&&D("")},children:[t.jsx("option",{value:"",children:"— Seleccionar tipo —"}),wt.map(T=>t.jsx("option",{value:T,children:T},T)),t.jsx("option",{value:"__otro__",children:"Otro (especificar)"})]}),f==="__otro__"&&t.jsx("input",{className:`input mt-2 ${$?"input-error":""}`,placeholder:"Especificar tipo de cirugía...",value:w,onChange:T=>{D(T.target.value),u(!1)}}),$&&t.jsx("p",{className:"error-msg",children:"Selecciona o especifica el tipo de cirugía"})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Fecha *"}),t.jsx("input",{type:"date",className:`input ${H.date?"input-error":""}`,...b("date",{required:"Requerido"})}),H.date&&t.jsx("p",{className:"error-msg",children:H.date.message})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Hora de inicio *"}),t.jsx("input",{type:"time",className:`input ${H.startTime?"input-error":""}`,...b("startTime",{required:"Requerido"})}),H.startTime&&t.jsx("p",{className:"error-msg",children:H.startTime.message})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Hora de internación"}),t.jsx("input",{type:"time",className:"input",...b("admissionTime")})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Peso (kg)"}),t.jsx("input",{type:"number",step:"0.1",min:"0",className:"input",placeholder:"ej: 23.5",...b("peso")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Talla (cm)"}),t.jsx("input",{type:"number",step:"0.5",min:"0",className:"input",placeholder:"ej: 112",...b("talla")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Hora de ayuno"}),t.jsx("input",{type:"time",className:"input",...b("fastingTime")})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Cirujano"}),t.jsx("input",{className:"input",placeholder:"Dr. Nombre",...b("surgeon")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Anestesiólogo"}),t.jsx("input",{className:"input",placeholder:"Dr. Nombre",...b("anesthesiologist")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Instrumentadora"}),t.jsx("input",{className:"input",placeholder:"Nombre",...b("scrubNurse")})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Estado"}),t.jsx("div",{className:"flex gap-4 flex-wrap",children:al.map(T=>t.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-sm",children:[t.jsx("input",{type:"radio",value:T,...b("status"),className:"accent-hm-primary"}),t.jsx("span",{className:"capitalize font-medium text-gray-700",children:T})]},T))})]}),t.jsxs("div",{className:"border border-hm-secondary-200 rounded-xl p-4 space-y-3",style:{backgroundColor:"#f8fafc"},children:[t.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Gestión Financiera"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Cotización total ($)"}),t.jsx("input",{type:"number",min:"0",className:"input bg-white",...b("quotation")})]}),t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Monto pagado ($)"}),t.jsx("input",{type:"number",min:"0",className:"input bg-white",...b("amountPaid")})]})]}),t.jsxs("div",{className:"flex gap-6 pt-1",children:[t.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700",children:[t.jsx("input",{type:"checkbox",className:"accent-hm-primary w-4 h-4",...b("paymentComplete")}),"Pago completo"]}),t.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700",children:[t.jsx("input",{type:"checkbox",className:"accent-hm-primary w-4 h-4",...b("socialAid")}),"Ayuda social"]})]}),O&&t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Fecha de pago completo"}),t.jsx("input",{type:"date",className:"input bg-white",...b("paymentDate")})]}),Number(B)>0&&!O&&t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Fecha del último pago parcial"}),t.jsx("input",{type:"date",className:"input bg-white",...b("partialPaymentDate")})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Monto ayuda social ($)"}),t.jsx("input",{type:"number",min:"0",className:"input bg-white",...b("socialAidAmount")})]}),t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Observaciones financieras"}),t.jsx("input",{className:"input bg-white",...b("adminNotes")})]})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Notas clínicas"}),t.jsx("textarea",{rows:2,className:"input resize-none",...b("notes")})]}),t.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[t.jsx("button",{type:"button",onClick:s,className:"btn-secondary btn",children:"Cancelar"}),t.jsx("button",{type:"submit",disabled:r,className:"btn-primary btn",children:r?t.jsx(lt,{className:"w-4 h-4 animate-spin"}):e!=null&&e.id?"Guardar cambios":"Programar cirugía"})]})]})}function Lt(e){if(!e)return null;const a=Ee(e);if(!Me(a))return null;const s=new Date,r=Ie(s,a),i=new Date(a.getFullYear()+r,a.getMonth(),a.getDate()),n=Je(s,i),o=new Date(i.getFullYear(),i.getMonth()+n,i.getDate()),d=Xe(s,o);return{years:r,months:n,days:d}}function zt(e){if(!e)return"—";const a=[];return e.years>0&&a.push(`${e.years}a`),e.months>0&&a.push(`${e.months}m`),(e.days>0||a.length===0)&&a.push(`${e.days}d`),a.join(" ")}function xt(e){return Number(e||0).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})}function tr(e,a){const s=Lt(a==null?void 0:a.birthDate),r=e.date?W(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"—",i=(a==null?void 0:a.sex)==="masculino"?"Masculino":(a==null?void 0:a.sex)==="femenino"?"Femenino":"—",n=[{label:"Diagnóstico",value:(a==null?void 0:a.diagnosis)??"—"},{label:"Fecha de internación",value:r},{label:"Hora de internación",value:e.admissionTime||"—"},{label:"Sexo",value:i}],o=[{label:"Hora de ayuno",value:e.fastingTime||(e.fastingHours?`${e.fastingHours} h`:"—")},{label:"Peso",value:e.peso?`${e.peso} kg`:"—"},{label:"Talla",value:e.talla?`${e.talla} cm`:"—"},{label:"Edad",value:zt(s)},{label:"Alergias/Med.",value:a!=null&&a.allergies?a.allergies.substring(0,50):"—"}];return{left:n,right:o}}async function ct(e){try{const s=await(await fetch(e)).blob();return new Promise(r=>{const i=new FileReader;i.onloadend=()=>r(i.result),i.readAsDataURL(s)})}catch{return""}}async function rl(e,a){const s=await ct(Te),{left:r,right:i}=tr(e,a),n=W(new Date,"dd/MM/yyyy HH:mm"),o='<svg style="width:68px;height:68px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="32" r="18" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><path d="M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z" fill="#3D7AAB" stroke="#1F3A5F" stroke-width="1.2"/><path d="M 32 32 Q 34 30 36 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M 44 32 Q 46 30 48 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="28" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><circle cx="52" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><path d="M 36 38 Q 40 41 44 38" stroke="#1A2B42" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M 25 50 Q 25 65 40 65 Q 55 65 55 50" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><ellipse cx="22" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(-20 22 52)"/><ellipse cx="58" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(20 58 52)"/><path d="M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z" fill="#3D7AAB"/></svg>',d=s?`<div style="background:#FFFFFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;min-height:68px;flex-shrink:0;"><img src="${s}" style="width:62px;height:62px;object-fit:contain;"/></div>`:'<div style="background:#FFFFFF;padding:6px 14px;border-radius:6px;min-height:68px;display:flex;align-items:center;flex-shrink:0;"><span style="font-size:16px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',g=['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>'],v=['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>'],h=(D,$)=>D.map(({label:u,value:j},b)=>`<div style="display:grid;grid-template-columns:50px 1fr 1fr;align-items:center;padding:10px 14px 10px 10px;border-bottom:1px solid #E5EBF2;background:${b%2===1?"#F4F7FA":"#FFFFFF"};"><div style="width:32px;height:32px;border-radius:50%;background:#2B5C8A;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 1px 3px rgba(43,92,138,0.25);"><svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:#FFFFFF;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;">${$[b]}</svg></div><span style="font-size:12px;color:#5A6B82;font-weight:500;padding-left:4px;">${u}</span><span style="font-size:13px;font-weight:700;color:#1A2B42;max-width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${j}</span></div>`).join(""),p=`
    <div style="background:#1F3A5F;padding:14px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:4px solid #4FC3C2;">
      ${d}
      <div style="text-align:center;color:#FFFFFF;"><div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Centro Médico Quirúrgico</div><div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:2px;">MUNAY</div></div>
      <div style="text-align:right;color:#FFFFFF;"><div style="font-size:18px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Programación Quirúrgica</div><div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:3px;">${n}</div></div>
    </div>
    <div style="padding:14px 24px 10px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;flex-shrink:0;">
      <div><div style="font-size:22px;font-weight:700;color:#1F3A5F;letter-spacing:-0.3px;line-height:1.1;">${e.patientName??"—"}</div><div style="font-size:16px;font-weight:700;color:#3DA8A7;letter-spacing:0.5px;margin-top:5px;text-transform:uppercase;">${e.surgeryType??"—"}</div></div>
      ${o}
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 24px 18px;overflow:hidden;">
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${h(r,g)}</div>
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${h(i,v)}</div>
    </div>
    <div style="height:6px;background:#4FC3C2;flex-shrink:0;"></div>`,f=`
    <div style="background:#1F3A5F;padding:14px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:4px solid #4FC3C2;">
      ${d}
      <div style="text-align:center;color:#FFFFFF;"><div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Centro Médico Quirúrgico</div><div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:2px;">MUNAY</div></div>
      <div style="text-align:right;color:#FFFFFF;"><div style="font-size:18px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Orden de Internación</div><div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:3px;">${n}</div></div>
    </div>
    <div style="padding:14px 24px 10px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;flex-shrink:0;">
      <div><div style="font-size:22px;font-weight:700;color:#1F3A5F;letter-spacing:-0.3px;line-height:1.1;">${e.patientName??"—"}</div><div style="font-size:16px;font-weight:700;color:#3DA8A7;letter-spacing:0.5px;margin-top:5px;text-transform:uppercase;">${e.surgeryType??"—"}</div></div>
      <svg style="width:65px;height:65px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="10" fill="#C9A57B"/><circle cx="60" cy="22" r="10" fill="#C9A57B"/><circle cx="20" cy="22" r="6" fill="#E8C9A8"/><circle cx="60" cy="22" r="6" fill="#E8C9A8"/><ellipse cx="40" cy="38" rx="22" ry="20" fill="#D4B088"/><ellipse cx="40" cy="44" rx="12" ry="10" fill="#F0DAB8"/><rect x="22" y="55" width="36" height="18" rx="3" fill="#A8C5E8"/><path d="M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z" fill="#FFFFFF"/><ellipse cx="32" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><ellipse cx="48" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><circle cx="32.8" cy="35" r="0.8" fill="#FFFFFF"/><circle cx="48.8" cy="35" r="0.8" fill="#FFFFFF"/><ellipse cx="40" cy="42" rx="2.5" ry="2" fill="#2A2A3E"/><path d="M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47" stroke="#2A2A3E" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="25" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/><circle cx="55" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/></svg>
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 24px 18px;overflow:hidden;">
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${h(r,g)}</div>
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${h(i,v)}</div>
    </div>
    <div style="height:6px;background:#4FC3C2;flex-shrink:0;"></div>`,C=`<!DOCTYPE html>
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
  <div class="copy">${p}</div>
  <hr class="divider"/>
  <div class="copy">${f}</div>
</body>
</html>`,w=window.open("","_blank","width=816,height=1056");w.document.write(C),w.document.close(),w.focus(),setTimeout(()=>{w.print()},500)}async function il(e,a){const s=await ct(Te),r=e.surgeon||"___________",i=e.patientName||"___________",n=(a==null?void 0:a.guardian)||"___________",o=(a==null?void 0:a.guardianIdNumber)||(a==null?void 0:a.idNumber)||"___________",d=(a==null?void 0:a.address)||"___________",g=e.surgeryType||"___________",v=(a==null?void 0:a.sex)==="masculino"?"Masculino":(a==null?void 0:a.sex)==="femenino"?"Femenino":"—",h=e.date?W(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"___________",p=s?`<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:60px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',x=w=>`<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${w}</span>`,f=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Consentimiento Informado — ${i}</title>
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
  ${p}
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
  <div class="pi"><span class="lbl">Paciente: </span><strong>${i}</strong></div>
  <div class="pi"><span class="lbl">Sexo: </span><strong>${v}</strong></div>
  <div class="pi"><span class="lbl">CI: </span><strong>${o}</strong></div>
  <div class="pi"><span class="lbl">Representante: </span><strong>${n}</strong></div>
  <div class="pi"><span class="lbl">Procedimiento: </span><strong style="color:#3DA8A7">${g}</strong></div>
</div>
<div class="content">
  <div class="top">
    <div class="doc-title">CONSENTIMIENTO INFORMADO PARA CIRUGÍA LABIO PALADAR HENDIDO</div>
    <div class="s">Yo, ${x(n)}, PACIENTE O REPRESENTANTE LEGAL DE ${x(i)}, CON CI ${x(o)} Y DOMICILIO EN: ${x(d)}.</div>
    <div class="s"><strong>1.</strong> Por la presente <strong>AUTORIZO</strong> al ${x(r)} y a los asistentes que sean seleccionados y personal de salud, para que realice en mi persona (o en la de mi representante), el siguiente procedimiento o tratamiento: ${x(g)}</div>
    <div class="s"><strong>2.</strong> Confirmo que el ${x(r)} me ha explicado detalladamente, en palabras comprensibles para mí, el efecto y la naturaleza de las operaciones a efectuar, incluyendo posibles riesgos, soluciones alternativas y molestias que se puedan sentir aun teniendo un postoperatorio normal.</div>
    <div class="s"><strong>3.</strong> Los <strong>RIESGOS</strong> de posibles complicaciones incluyen entre otras:<ul class="rl"><li>Estados temporales de inflamación y cambio de color natural de la piel.</li><li>Posibilidad de sangrado durante y después de la cirugía, seromas, infección o necrosis.</li><li>Trastornos temporales o permanentes de la sensibilidad y motilidad. Reacción alérgica a alguno de los medicamentos utilizados.</li><li>Intolerancia a materiales de sutura, implantes o apósitos. Imperfecciones e insatisfacción en los resultados.</li><li>Mala cicatrización: quedará una cicatriz permanente. El proceso de maduración puede tardar más de un año.</li></ul></div>
    <div class="s"><strong>4.</strong> Doy el <strong>CONSENTIMIENTO</strong> para la administración de los anestésicos necesarios o aconsejables. Comprendo que cualquier forma de anestesia entraña riesgos de complicaciones, lesiones y a veces muerte.</div>
    <div class="s"><strong>5.</strong> <strong>RECONOZCO</strong> que pueden darse condiciones imprevistas que necesiten procedimientos diferentes. <strong>AUTORIZO</strong> al cirujano y a sus asistentes a realizarlos en el ejercicio de su juicio profesional. En caso de complicaciones, <strong>AUTORIZO</strong> al ${x(r)} a solicitar la ayuda de otros especialistas.</div>
    <div class="s"><strong>6.</strong> <strong>COMPRENDO</strong> que el fin de la intervención es <strong>MEJORAR LA APARIENCIA</strong>, pudiendo persistir alguna imperfección. La Medicina y la Cirugía no son ciencias exactas. <strong>RECONOZCO QUE NO SE ME HA DADO GARANTÍA ABSOLUTA.</strong></div>
    <div class="s"><strong>7.</strong> He sido informado(a) que podrá ser necesario el uso de injertos, trasplantes o <strong>IMPLANTES DE MATERIAS ESPECIALES MÉDICAS</strong> y material de sutura permanente.</div>
    <div class="s"><strong>8.</strong> <strong>CONSIENTO</strong> el ser fotografiado o filmado antes, durante y después del tratamiento para uso médico y educativo. <strong>NUNCA EN PRENSA DIARIA O REVISTAS COMUNES</strong>, salvo con mi <strong>EXPRESO PERMISO</strong>.</div>
    <div class="banner">DOY CONSENTIMIENTO PARA EL TRATAMIENTO O PROCEDIMIENTO DE PUNTOS CITADOS PREVIAMENTE.<br/>ESTOY SATISFECHO/A CON LA EXPLICACIÓN Y NO NECESITO MÁS INFORMACIÓN.</div>
  </div>
  <div class="bottom">
    <div class="sigs">
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${n}</strong><br/>C.I.: ${o}<br/>(Tutor / Representante legal)</div></div>
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${r}</strong><br/>(Firma del Cirujano)</div></div>
    </div>
    <div class="date-row">Fecha: <strong>${h}</strong></div>
  </div>
</div>
<div class="bot"></div>
</body></html>`,C=window.open("","_blank","width=816,height=1056");C.document.write(f),C.document.close(),C.focus(),setTimeout(()=>{C.print()},500)}async function nl(e,a){const s=await ct(Te),r=e.anesthesiologist||"___________",i=e.patientName||"___________",n=(a==null?void 0:a.guardian)||"___________",o=(a==null?void 0:a.guardianIdNumber)||(a==null?void 0:a.idNumber)||"___________",d=(a==null?void 0:a.sex)==="masculino"?"Masculino":(a==null?void 0:a.sex)==="femenino"?"Femenino":"—",g=e.date?W(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"___________",v=s?`<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:60px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',h=f=>`<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${f}</span>`,p=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Consentimiento Anestesia — ${i}</title>
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
  ${v}
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
  <div class="pi"><span class="lbl">Paciente: </span><strong>${i}</strong></div>
  <div class="pi"><span class="lbl">Sexo: </span><strong>${d}</strong></div>
  <div class="pi"><span class="lbl">CI: </span><strong>${o}</strong></div>
  <div class="pi"><span class="lbl">Representante: </span><strong>${n}</strong></div>
  <div class="pi"><span class="lbl">Anestesiólogo: </span><strong style="color:#3DA8A7">${r}</strong></div>
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
    <div class="indiv">Habiendo leído este documento y comprendiendo el procedimiento anestésico y sus riesgos, habiendo aclarado mis dudas con el/la ${h(r)}, quien respondió a todas mis preguntas, yo ${h(n)}, representante legal de ${h(i)}, con CI ${h(o)}, de manera libre y voluntaria <strong>DOY MI CONSENTIMIENTO</strong> para que sea sometido a la <strong>ANESTESIA GENERAL.</strong></div>
  </div>
  <div class="bottom">
    <div class="sigs">
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${n}</strong><br/>C.I.: ${o}<br/>(Tutor / Representante legal)</div></div>
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${r}</strong><br/>(Firma del Anestesiólogo)</div></div>
    </div>
    <div class="date-row">Fecha: <strong>${g}</strong></div>
  </div>
</div>
<div class="bot"></div>
</body></html>`,x=window.open("","_blank","width=816,height=1056");x.document.write(p),x.document.close(),x.focus(),setTimeout(()=>{x.print()},500)}async function ol(e,a){const s=await ct(Te),r=Lt(a==null?void 0:a.birthDate),i=oe(a==null?void 0:a.patientType),n=a!=null&&a.patientCode?`${i.label}-${a.patientCode}`:"",o=e.patientName||"",d=(a==null?void 0:a.idNumber)||"",g=(a==null?void 0:a.sex)==="masculino"?"Masculino":(a==null?void 0:a.sex)==="femenino"?"Femenino":"",v=(a==null?void 0:a.diagnosis)||e.surgeryType||"",h=a!=null&&a.birthDate?W(new Date(a.birthDate+"T12:00"),"dd/MM/yyyy"):"",p=e.date?W(new Date(e.date+"T12:00"),"dd/MM/yyyy"):"",x=e.surgeryType||"",f=e.surgeon||"",C=r?zt(r):"",w=e.peso?`${e.peso} kg`:"",D=W(new Date,"dd/MM/yyyy"),$=s?`<div style="background:#FFF;padding:5px 10px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:54px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:5px 10px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',u=["Edema","Hematoma","Sangrado","Fiebre","Vómitos / náuseas","Dehiscencia de sutura","Secreción en herida","Signos de infección","Diuresis presente","Llanto / irritabilidad"],j=["Alimentación","Tolerancia oral","Sueño","Estado general","Estado de la herida","Higiene bucal"],b=["Uso de coderas / contención de brazos","Higiene bucal con suero fisiológico","Alimentación con jeringa o cuchara","Evita biberón y chupete","Antibiótico administrado según indicación","Analgesia administrada según indicación","Curación de herida realizada","Reposo según indicación"],I=u.map(_=>`<div class="eval-row"><span class="eval-item">${_}</span><div class="eval-cell"><input type="checkbox"></div><div class="eval-cell"><input type="checkbox"></div></div>`).join(""),V=j.map(_=>`<div class="eval-row"><span class="eval-item">${_}</span><div class="eval-cell"><input type="checkbox"></div><div class="eval-cell"><input type="checkbox"></div></div>`).join(""),ae=b.map(_=>`<label class="ii"><input type="checkbox"> ${_}</label>`).join(""),z=[0,1,2,3,4,5,6,7,8,9,10].map(_=>`<div class="n" data-v="${_}" onclick="selDolor(${_})">${_}</div>`).join(""),H=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Control Post Operatorio — ${o}</title>
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
  ${$}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:.8">Centro Médico Quirúrgico</div>
    <div style="font-size:18px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:1px">MUNAY</div>
    <div style="font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-top:3px;background:rgba(255,255,255,0.15);padding:2px 12px;border-radius:3px;display:inline-block">CONTROL POSTOPERATORIO</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:10px;font-weight:600;opacity:.85;margin-bottom:3px">FLAP / FLP</div>
    <div style="font-size:8px;opacity:.75">${D}</div>
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
      <div class="fi" style="grid-column:span 2"><span class="lbl">Nombre completo:</span><input value="${o}"/></div>
      <div class="fi"><span class="lbl">Edad:</span><input value="${C}"/></div>
      <div class="fi"><span class="lbl">F. Nacimiento:</span><input value="${h}"/></div>
    </div>
    <div class="row r4">
      <div class="fi"><span class="lbl">N° HC:</span><input value="${n}"/></div>
      <div class="fi"><span class="lbl">CI:</span><input value="${d}"/></div>
      <div class="fi"><span class="lbl">Sexo:</span><input value="${g}"/></div>
      <div class="fi"><span class="lbl">F. Cirugía:</span><input value="${p}"/></div>
    </div>
    <div class="row r3">
      <div class="fi"><span class="lbl">Diagnóstico:</span><input value="${v}"/></div>
      <div class="fi"><span class="lbl">Procedimiento:</span><input value="${x}"/></div>
      <div class="fi"><span class="lbl">Cirujano:</span><input value="${f}"/></div>
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
      <td><input value="${w}"/></td>
    </tr></tbody></table>
  </div>

  <div class="sec">
    <div class="sec-hdr">Evaluación Clínica Postoperatoria</div>
    <div class="eval-grid">
      <div class="eval-card">
        <div class="eval-card-hdr">Signos y Síntomas</div>
        <div class="eval-col-hdr"><span class="lbl2">Parámetro</span><span>SÍ</span><span>NO</span></div>
        ${I}
      </div>
      <div class="eval-card">
        <div class="eval-card-hdr">Estado General</div>
        <div class="eval-col-hdr"><span class="lbl2">Parámetro</span><span>MAL</span><span>BIEN</span></div>
        ${V}
      </div>
    </div>
    <div class="dolor-wrap">
      <b style="color:#1F3A5F;white-space:nowrap;font-size:8.5pt">DOLOR (EVA):</b>
      <div class="eva">${z}</div>
      <span style="font-size:7.5pt;color:#5A6B82;white-space:nowrap">Wong-Baker</span>
    </div>
  </div>

  <div class="sec">
    <div class="sec-hdr">Cumplimiento de Indicaciones FLAP/FLP</div>
    <div class="ind">${ae}</div>
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
</body></html>`,y=window.open("","_blank","width=820,height=1060");y.document.write(H),y.document.close(),y.focus()}async function ll(e,a){const s=await ct(Te),r=Lt(a==null?void 0:a.birthDate),i=oe(a==null?void 0:a.patientType),n=a!=null&&a.patientCode?`${i.label}-${a.patientCode}`:"",o=e.patientName||"",d=(a==null?void 0:a.idNumber)||"",g=(a==null?void 0:a.sex)==="masculino"?"Masculino":(a==null?void 0:a.sex)==="femenino"?"Femenino":"",v=(a==null?void 0:a.birthDate)||"",h=r?zt(r):"",p=e.peso?String(e.peso):"",x=(a==null?void 0:a.guardian)||"",f=(a==null?void 0:a.guardianPhone)||"",C=e.date||"",w=e.admissionTime||e.startTime||"",D=(a==null?void 0:a.diagnosis)||"",$=e.surgeryType||"",u=s?`<div style="background:#FFF;padding:5px 10px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${s}" style="height:52px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:5px 10px;border-radius:5px;flex-shrink:0;"><span style="font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',j=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Epicrisis — ${o}</title>
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
        <div class="f"><span class="lbl">Apellidos y nombres:</span><input value="${o}"/></div>
        <div class="f"><span class="lbl">N° HC:</span><input value="${n}"/></div>
      </div>
      <div class="g4">
        <div class="f"><span class="lbl">CI:</span><input value="${d}"/></div>
        <div class="f"><span class="lbl">Sexo:</span><select><option value=""></option><option ${g==="Masculino"?"selected":""}>Masculino</option><option ${g==="Femenino"?"selected":""}>Femenino</option></select></div>
        <div class="f"><span class="lbl">Fecha nac.:</span><input type="date" value="${v}"/></div>
        <div class="f"><span class="lbl">Edad:</span><input value="${h}"/></div>
      </div>
      <div class="g3">
        <div class="f"><span class="lbl">Peso (kg):</span><input value="${p}"/></div>
        <div class="f"><span class="lbl">Procedencia:</span><input placeholder="Ciudad / Comunidad"/></div>
        <div class="f"><span class="lbl">Idioma:</span><input placeholder="Español / Aymara / Quechua"/></div>
      </div>
      <div class="g2">
        <div class="f"><span class="lbl">Responsable legal:</span><input value="${x}"/></div>
        <div class="f"><span class="lbl">Teléfono contacto:</span><input type="tel" value="${f}"/></div>
      </div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">2. Datos de internación</div>
    <div class="bc">
      <div class="g2">
        <div class="f"><span class="lbl">Fecha ingreso:</span><input type="date" id="fecha_ingreso" value="${C}"/></div>
        <div class="f"><span class="lbl">Hora ingreso:</span><input type="time" value="${w}"/></div>
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
        <input value="${D}" placeholder="Ej: Q37.5 - Fisura labial bilateral con fisura palatina"/>
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
        <input value="${$}"/>
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
</body></html>`,b=window.open("","_blank","width=980,height=900");b.document.write(j),b.document.close(),b.focus()}const dl=[{id:"info",label:"Información",icon:ca,adminOnly:!1},{id:"financiero",label:"Financiero",icon:oa,adminOnly:!0},{id:"historial",label:"Historial",icon:Fr,adminOnly:!1}];function cl({surgery:e,onEdit:a,onClose:s,onCancelSurgery:r,onSuspendSurgery:i,isAdmin:n,canEdit:o}){const[d,g]=A.useState("info"),[v,h]=A.useState(!1),[p,x]=A.useState(!1),[f,C]=A.useState("suspendido"),[w,D]=A.useState(""),[$,u]=A.useState((e==null?void 0:e.date)??""),[j,b]=A.useState((e==null?void 0:e.startTime)??""),[I,V]=A.useState(!1),{patients:ae,surgeries:z,therapies:H}=ve();if(!e)return null;const y=dl.filter(E=>!E.adminOnly||n),_=ae.find(E=>E.id===e.patientId),O=Lt(_==null?void 0:_.birthDate),R=tr(e,_),B=e.date?W(new Date(e.date+"T12:00"),"EEEE d 'de' MMMM yyyy",{locale:je}):"—",U=Math.max(0,Number(e.quotation||0)-Number(e.amountPaid||0)),se=e.status==="cancelado",K=z.filter(E=>E.patientId===e.patientId&&E.id!==e.id).sort((E,T)=>T.date.localeCompare(E.date)),de=H.filter(E=>E.patientId===e.patientId).sort((E,T)=>T.date.localeCompare(E.date));return t.jsxs("div",{className:"flex flex-col relative",style:{maxHeight:"85vh"},children:[t.jsxs("div",{className:"px-6 pt-5 pb-4 border-b border-gray-100",children:[t.jsxs("div",{className:"flex items-start justify-between gap-4",children:[t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h2",{className:"text-xl font-extrabold text-hm-primary truncate",children:e.patientName}),t.jsxs("p",{className:"text-sm text-gray-500 mt-0.5 capitalize",children:[e.surgeryType," · ",B]})]}),t.jsx("button",{onClick:s,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:t.jsx(Re,{className:"w-5 h-5"})})]}),t.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[t.jsx(ul,{status:e.status}),e.paymentComplete&&t.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200",children:[t.jsx(nt,{className:"w-3 h-3"})," Completado"]}),e.surgeryType&&t.jsx("span",{className:"inline-flex px-3 py-0.5 rounded-full text-xs font-bold bg-pink-100 text-pink-800 border border-pink-200",children:e.surgeryType}),(()=>{const E=oe(e.patientType);return t.jsxs("span",{className:"inline-flex px-3 py-0.5 rounded-full text-xs font-bold border",style:{backgroundColor:E.lightBg,color:E.textColor,borderColor:E.border},children:[E.label," · ",E.longLabel]})})()]}),t.jsx("div",{className:"flex gap-0 mt-4 border-b border-gray-100 -mb-px",children:y.map(({id:E,label:T,icon:F})=>t.jsxs("button",{onClick:()=>g(E),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${d===E?"border-hm-tertiary text-hm-primary":"border-transparent text-gray-400 hover:text-hm-primary"}`,children:[t.jsx(F,{className:"w-4 h-4"}),T]},E))})]}),t.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[d==="info"&&t.jsxs("div",{className:"space-y-5",children:[t.jsxs("section",{children:[t.jsx(hs,{icon:ca,label:"Datos del paciente"}),t.jsxs("div",{className:"border border-gray-100 rounded-xl overflow-hidden",children:[t.jsx(he,{label:"Nombre completo",value:e.patientName??"—"}),t.jsx(he,{label:"Edad / Peso / Talla",value:[O?zt(O):null,e.peso?`${e.peso} kg`:null,e.talla?`${e.talla} cm`:null].filter(Boolean).join(" · ")||"—"}),t.jsx(he,{label:"Diagnóstico",value:(_==null?void 0:_.diagnosis)??e.patientName??"—"}),t.jsx(he,{label:"Tipo de cirugía",value:e.surgeryType??"—"}),t.jsx(he,{label:"Hora de inicio",value:e.startTime??"—"}),e.admissionTime&&t.jsx(he,{label:"Hora de internación",value:e.admissionTime}),(e.fastingTime||e.fastingHours)&&t.jsx(he,{label:"Hora de ayuno",value:e.fastingTime||`${e.fastingHours} horas`}),t.jsx(he,{label:"Carnet de identidad",value:(_==null?void 0:_.idNumber)||"—"}),(_==null?void 0:_.allergies)&&t.jsx(he,{label:"Alergias / Med.",value:_.allergies}),(_==null?void 0:_.guardian)&&t.jsx(he,{label:"Responsable",value:`${_.guardian}${_.guardianPhone?` — ${_.guardianPhone}`:""}`}),e.notes&&t.jsxs("div",{className:"px-4 py-3 bg-gray-50",children:[t.jsx("p",{className:"text-xs text-gray-400 mb-1",children:"Notas clínicas"}),t.jsx("p",{className:"text-sm text-gray-700",children:e.notes})]})]})]}),t.jsxs("section",{children:[t.jsx(hs,{icon:jt,label:"Equipo quirúrgico"}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[t.jsx(Gt,{role:"Cirujano principal",name:e.surgeon}),t.jsx(Gt,{role:"Anestesiólogo",name:e.anesthesiologist}),t.jsx(Gt,{role:"Instrumentadora",name:e.scrubNurse})]})]})]}),d==="financiero"&&t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[t.jsx(Xt,{label:"Cotización",value:xt(e.quotation),color:"primary"}),t.jsx(Xt,{label:"Pagado",value:xt(e.amountPaid),color:"green"}),t.jsx(Xt,{label:"Pendiente",value:U>0?xt(U):"—",color:U>0?"red":"gray"})]}),t.jsxs("div",{className:"border border-gray-100 rounded-xl overflow-hidden",children:[t.jsx(he,{label:"Estado de pago",value:e.paymentComplete?t.jsxs("span",{className:"flex items-center gap-1 text-green-700 font-bold",children:[t.jsx(nt,{className:"w-4 h-4"}),"Pago completo"]}):t.jsxs("span",{className:"flex items-center gap-1 text-red-500 font-bold",children:[t.jsx(la,{className:"w-4 h-4"}),"Pendiente de pago"]})}),t.jsx(he,{label:"Ayuda social",value:e.socialAid?t.jsx("span",{className:"text-purple-700 font-bold",children:e.socialAidAmount?xt(e.socialAidAmount):"Sí"}):"No"}),e.adminNotes&&t.jsx(he,{label:"Observaciones",value:e.adminNotes})]})]}),d==="historial"&&t.jsxs("div",{className:"space-y-5",children:[t.jsxs("section",{children:[t.jsxs("p",{className:"text-xs font-bold text-hm-primary uppercase mb-2",children:["Cirugías anteriores (",K.length,")"]}),K.length===0?t.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin cirugías previas registradas."}):t.jsx("ul",{className:"space-y-2",children:K.map(E=>t.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold text-hm-primary",children:E.surgeryType}),t.jsxs("p",{className:"text-xs text-gray-500",children:[W(new Date(E.date+"T12:00"),"d MMM yyyy",{locale:je})," · ",E.startTime," · ",E.surgeon||"—"]})]}),t.jsx(Fe,{variant:E.status})]},E.id))})]}),t.jsxs("section",{children:[t.jsxs("p",{className:"text-xs font-bold text-hm-primary uppercase mb-2",children:["Terapias (",de.length,")"]}),de.length===0?t.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin terapias registradas."}):t.jsx("ul",{className:"space-y-2",children:de.map(E=>t.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold text-hm-primary",children:E.therapyType}),t.jsxs("p",{className:"text-xs text-gray-500",children:[W(new Date(E.date+"T12:00"),"d MMM yyyy",{locale:je})," · ",E.startTime," · ",E.therapist||"—"]})]}),t.jsx(Fe,{variant:E.status??"programado"})]},E.id))})]})]})]}),t.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex flex-wrap gap-2 items-center",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsxs("button",{onClick:()=>h(!0),className:"btn btn-sm border border-gray-200 text-gray-600 hover:bg-gray-50 gap-1.5",children:[t.jsx(at,{className:"w-4 h-4"}),"Imprimir"]}),t.jsxs("button",{onClick:()=>il(e,_),className:"btn btn-sm border border-teal-200 text-teal-700 hover:bg-teal-50 gap-1.5",children:[t.jsx(Ye,{className:"w-4 h-4"}),"Consentimiento"]}),t.jsxs("button",{onClick:()=>nl(e,_),className:"btn btn-sm border border-purple-200 text-purple-700 hover:bg-purple-50 gap-1.5",children:[t.jsx(Ye,{className:"w-4 h-4"}),"Anestesia"]}),t.jsxs("button",{onClick:()=>ol(e,_),className:"btn btn-sm border border-sky-200 text-sky-700 hover:bg-sky-50 gap-1.5",children:[t.jsx(Ye,{className:"w-4 h-4"}),"Post-Op"]}),t.jsxs("button",{onClick:()=>ll(e,_),className:"btn btn-sm border border-emerald-200 text-emerald-700 hover:bg-emerald-50 gap-1.5",children:[t.jsx(Ye,{className:"w-4 h-4"}),"Epicrisis"]}),n&&!se&&e.status!=="suspendido"&&t.jsxs("button",{onClick:()=>{x(!0),D(""),C("suspendido"),u(e.date??""),b(e.startTime??"")},className:"btn btn-sm text-amber-700 border border-amber-300 hover:bg-amber-50 gap-1.5",children:[t.jsx(Bt,{className:"w-4 h-4"}),"Suspender / Reprogramar"]}),n&&e.status==="suspendido"&&t.jsxs("button",{onClick:()=>{x(!0),D(""),C("reprogramar"),u(e.date??""),b(e.startTime??"")},className:"btn btn-sm text-blue-700 border border-blue-300 hover:bg-blue-50 gap-1.5",children:[t.jsx($a,{className:"w-4 h-4"}),"Reprogramar"]}),n&&!se&&t.jsxs("button",{onClick:r,className:"btn btn-sm text-red-600 border border-red-200 hover:bg-red-50 gap-1.5",children:[t.jsx(ys,{className:"w-4 h-4"}),"Cancelar"]})]}),t.jsxs("div",{className:"flex gap-2 ml-auto",children:[t.jsx("button",{onClick:s,className:"btn-secondary btn btn-sm",children:"Cerrar"}),o&&t.jsxs("button",{onClick:a,className:"btn-primary btn btn-sm",children:[t.jsx(Ft,{className:"w-4 h-4"})," Editar"]})]})]}),v&&t.jsxs("div",{className:"absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden",children:[t.jsxs("div",{className:"px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(at,{className:"w-4 h-4 text-hm-primary"}),t.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Vista previa de impresión"})]}),t.jsx("button",{onClick:()=>h(!1),className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:t.jsx(Re,{className:"w-5 h-5"})})]}),t.jsx("div",{className:"flex-1 overflow-y-auto flex items-center justify-center p-5",style:{backgroundColor:"#c8d0da"},children:t.jsxs("div",{style:{width:"100%",maxWidth:580,fontFamily:"Arial, sans-serif",boxShadow:"0 6px 24px rgba(0,0,0,0.3)"},children:[t.jsxs("div",{style:{backgroundColor:"white",borderBottom:"2px dashed #b0bec5"},children:[t.jsxs("div",{style:{backgroundColor:"#1F3A5F",padding:"12px 20px",display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:14,borderBottom:"4px solid #4FC3C2"},children:[t.jsx("div",{style:{backgroundColor:"#FFFFFF",padding:"5px 10px",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",minHeight:62,flexShrink:0},children:t.jsx("img",{src:Te,alt:"Logo",style:{width:54,height:54,objectFit:"contain"}})}),t.jsxs("div",{style:{textAlign:"center",color:"#FFFFFF"},children:[t.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",opacity:.85},children:"Centro Médico Quirúrgico"}),t.jsx("div",{style:{fontSize:20,fontWeight:900,letterSpacing:"4px",color:"#4FC3C2",marginTop:2},children:"MUNAY"})]}),t.jsxs("div",{style:{textAlign:"right",color:"#FFFFFF"},children:[t.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"Programación Quirúrgica"}),t.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.85)",marginTop:2},children:W(new Date,"dd/MM/yyyy HH:mm")})]})]}),t.jsxs("div",{style:{padding:"12px 20px 8px",display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:12},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:19,fontWeight:700,color:"#1F3A5F",letterSpacing:"-0.3px",lineHeight:1.1},children:e.patientName??"—"}),t.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#3DA8A7",letterSpacing:"0.5px",marginTop:4,textTransform:"uppercase"},children:e.surgeryType??"—"})]}),t.jsxs("svg",{style:{width:60,height:60,flexShrink:0},viewBox:"0 0 80 80",children:[t.jsx("circle",{cx:"40",cy:"32",r:"18",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.8"}),t.jsx("path",{d:"M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z",fill:"#3D7AAB",stroke:"#1F3A5F",strokeWidth:"1.2"}),t.jsx("path",{d:"M 32 32 Q 34 30 36 32",stroke:"#1A2B42",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),t.jsx("path",{d:"M 44 32 Q 46 30 48 32",stroke:"#1A2B42",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),t.jsx("circle",{cx:"28",cy:"36",r:"2",fill:"#F5B5C8",opacity:"0.7"}),t.jsx("circle",{cx:"52",cy:"36",r:"2",fill:"#F5B5C8",opacity:"0.7"}),t.jsx("path",{d:"M 36 38 Q 40 41 44 38",stroke:"#1A2B42",strokeWidth:"1.3",fill:"none",strokeLinecap:"round"}),t.jsx("path",{d:"M 25 50 Q 25 65 40 65 Q 55 65 55 50",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.8"}),t.jsx("ellipse",{cx:"22",cy:"52",rx:"4",ry:"6",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.5",transform:"rotate(-20 22 52)"}),t.jsx("ellipse",{cx:"58",cy:"52",rx:"4",ry:"6",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.5",transform:"rotate(20 58 52)"}),t.jsx("path",{d:"M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z",fill:"#3D7AAB"})]})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"0 20px 16px"},children:[{fields:R.left,icons:['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>']},{fields:R.right,icons:['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>']}].map(({fields:E,icons:T},F)=>t.jsx("div",{style:{border:"1px solid #D5DEE8",borderRadius:4,overflow:"hidden"},children:E.map(({label:L,value:Q},re)=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"44px 1fr 1fr",alignItems:"center",padding:"7px 12px 7px 8px",borderBottom:"1px solid #E5EBF2",backgroundColor:re%2===1?"#F4F7FA":"#FFFFFF"},children:[t.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:"#2B5C8A",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 1px 3px rgba(43,92,138,0.25)"},children:t.jsx("svg",{viewBox:"0 0 24 24",style:{width:13,height:13,stroke:"#FFFFFF",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},dangerouslySetInnerHTML:{__html:T[re]}})}),t.jsx("span",{style:{fontSize:10,color:"#5A6B82",fontWeight:500,paddingLeft:3},children:L}),t.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#1A2B42",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Q})]},L))},F))}),t.jsx("div",{style:{height:5,backgroundColor:"#4FC3C2"}})]}),t.jsxs("div",{style:{backgroundColor:"white"},children:[t.jsxs("div",{style:{backgroundColor:"#1F3A5F",padding:"12px 20px",display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:14,borderBottom:"4px solid #4FC3C2"},children:[t.jsx("div",{style:{backgroundColor:"#FFFFFF",padding:"5px 10px",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",minHeight:62,flexShrink:0},children:t.jsx("img",{src:Te,alt:"Logo",style:{width:54,height:54,objectFit:"contain"}})}),t.jsxs("div",{style:{textAlign:"center",color:"#FFFFFF"},children:[t.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",opacity:.85},children:"Centro Médico Quirúrgico"}),t.jsx("div",{style:{fontSize:20,fontWeight:900,letterSpacing:"4px",color:"#4FC3C2",marginTop:2},children:"MUNAY"})]}),t.jsxs("div",{style:{textAlign:"right",color:"#FFFFFF"},children:[t.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"Orden de Internación"}),t.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.85)",marginTop:2},children:W(new Date,"dd/MM/yyyy HH:mm")})]})]}),t.jsxs("div",{style:{padding:"12px 20px 8px",display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:12},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:19,fontWeight:700,color:"#1F3A5F",letterSpacing:"-0.3px",lineHeight:1.1},children:e.patientName??"—"}),t.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#3DA8A7",letterSpacing:"0.5px",marginTop:4,textTransform:"uppercase"},children:e.surgeryType??"—"})]}),t.jsxs("svg",{style:{width:58,height:58,flexShrink:0},viewBox:"0 0 80 80",children:[t.jsx("circle",{cx:"20",cy:"22",r:"10",fill:"#C9A57B"}),t.jsx("circle",{cx:"60",cy:"22",r:"10",fill:"#C9A57B"}),t.jsx("circle",{cx:"20",cy:"22",r:"6",fill:"#E8C9A8"}),t.jsx("circle",{cx:"60",cy:"22",r:"6",fill:"#E8C9A8"}),t.jsx("ellipse",{cx:"40",cy:"38",rx:"22",ry:"20",fill:"#D4B088"}),t.jsx("ellipse",{cx:"40",cy:"44",rx:"12",ry:"10",fill:"#F0DAB8"}),t.jsx("rect",{x:"22",y:"55",width:"36",height:"18",rx:"3",fill:"#A8C5E8"}),t.jsx("path",{d:"M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z",fill:"#FFFFFF"}),t.jsx("ellipse",{cx:"32",cy:"36",rx:"2.5",ry:"3",fill:"#2A2A3E"}),t.jsx("ellipse",{cx:"48",cy:"36",rx:"2.5",ry:"3",fill:"#2A2A3E"}),t.jsx("circle",{cx:"32.8",cy:"35",r:"0.8",fill:"#FFFFFF"}),t.jsx("circle",{cx:"48.8",cy:"35",r:"0.8",fill:"#FFFFFF"}),t.jsx("ellipse",{cx:"40",cy:"42",rx:"2.5",ry:"2",fill:"#2A2A3E"}),t.jsx("path",{d:"M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47",stroke:"#2A2A3E",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),t.jsx("circle",{cx:"25",cy:"42",r:"2.5",fill:"#F5B5C8",opacity:"0.6"}),t.jsx("circle",{cx:"55",cy:"42",r:"2.5",fill:"#F5B5C8",opacity:"0.6"})]})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"0 20px 16px"},children:[{fields:R.left,icons:['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>']},{fields:R.right,icons:['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>']}].map(({fields:E,icons:T},F)=>t.jsx("div",{style:{border:"1px solid #D5DEE8",borderRadius:4,overflow:"hidden"},children:E.map(({label:L,value:Q},re)=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"44px 1fr 1fr",alignItems:"center",padding:"7px 12px 7px 8px",borderBottom:"1px solid #E5EBF2",backgroundColor:re%2===1?"#F4F7FA":"#FFFFFF"},children:[t.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:"#2B5C8A",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 1px 3px rgba(43,92,138,0.25)"},children:t.jsx("svg",{viewBox:"0 0 24 24",style:{width:13,height:13,stroke:"#FFFFFF",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},dangerouslySetInnerHTML:{__html:T[re]}})}),t.jsx("span",{style:{fontSize:10,color:"#5A6B82",fontWeight:500,paddingLeft:3},children:L}),t.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#1A2B42",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Q})]},L))},F))}),t.jsx("div",{style:{height:5,backgroundColor:"#4FC3C2"}})]})]})}),t.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0",children:[t.jsx("button",{onClick:()=>h(!1),className:"btn-secondary btn btn-sm",children:"Cancelar"}),t.jsxs("button",{onClick:()=>{h(!1),rl(e,_)},className:"btn-primary btn btn-sm",children:[t.jsx(at,{className:"w-4 h-4"})," Imprimir"]})]})]}),p&&t.jsxs("div",{className:"absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden",children:[t.jsxs("div",{className:"px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Bt,{className:"w-4 h-4 text-amber-600"}),t.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Suspender / Reprogramar cirugía"})]}),t.jsx("button",{onClick:()=>x(!1),className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:t.jsx(Re,{className:"w-5 h-5"})})]}),t.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-5",children:[t.jsxs("div",{children:[t.jsx("p",{className:"label mb-2",children:"Acción"}),t.jsxs("div",{className:"flex gap-4",children:[t.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700",children:[t.jsx("input",{type:"radio",className:"accent-amber-500",checked:f==="suspendido",onChange:()=>C("suspendido")}),t.jsx("span",{children:"Suspender (sin nueva fecha)"})]}),t.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700",children:[t.jsx("input",{type:"radio",className:"accent-hm-primary",checked:f==="reprogramar",onChange:()=>C("reprogramar")}),t.jsx("span",{children:"Reprogramar a nueva fecha"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Justificación / Motivo *"}),t.jsx("textarea",{rows:3,className:"input resize-none",placeholder:"Indique el motivo de la suspensión o reprogramación...",value:w,onChange:E=>D(E.target.value)})]}),f==="reprogramar"&&t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Nueva fecha *"}),t.jsx("input",{type:"date",className:"input",value:$,onChange:E=>u(E.target.value)})]}),t.jsxs("div",{children:[t.jsx("label",{className:"label",children:"Nueva hora de inicio *"}),t.jsx("input",{type:"time",className:"input",value:j,onChange:E=>b(E.target.value)})]})]})]}),t.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0",children:[t.jsx("button",{onClick:()=>x(!1),className:"btn-secondary btn btn-sm",children:"Cancelar"}),t.jsx("button",{disabled:I||!w.trim()||f==="reprogramar"&&(!$||!j),onClick:async()=>{V(!0);const E=f==="reprogramar"?{status:"programado",date:$,startTime:j,suspendReason:w.trim(),suspendDate:W(new Date,"yyyy-MM-dd")}:{status:"suspendido",suspendReason:w.trim(),suspendDate:W(new Date,"yyyy-MM-dd")};try{await i(e.id,E),x(!1)}finally{V(!1)}},className:`btn btn-sm text-white gap-1.5 ${f==="reprogramar"?"btn-primary":"bg-amber-600 hover:bg-amber-700"}`,children:I?t.jsx(lt,{className:"w-4 h-4 animate-spin"}):f==="reprogramar"?t.jsxs(t.Fragment,{children:[t.jsx($a,{className:"w-4 h-4"})," Reprogramar"]}):t.jsxs(t.Fragment,{children:[t.jsx(Bt,{className:"w-4 h-4"})," Suspender"]})})]})]})]})}function ul({status:e}){const a={programado:"bg-hm-secondary-100 text-hm-primary border-hm-secondary-200",confirmado:"bg-blue-100 text-blue-800 border-blue-200",realizado:"bg-green-100 text-green-800 border-green-200",cancelado:"bg-red-100 text-red-700 border-red-200",suspendido:"bg-amber-100 text-amber-800 border-amber-200"},s={programado:"Programada",confirmado:"Confirmada",realizado:"Realizada",cancelado:"Cancelada",suspendido:"Suspendida"};return t.jsxs("span",{className:`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold border ${a[e]??"bg-gray-100 text-gray-700 border-gray-200"}`,children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-current inline-block opacity-60"}),s[e]??e]})}function hs({icon:e,label:a}){return t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("div",{className:"w-7 h-7 rounded-lg flex items-center justify-center",style:{backgroundColor:"rgba(26,54,93,0.08)"},children:t.jsx(e,{className:"w-4 h-4 text-hm-primary"})}),t.jsx("p",{className:"text-sm font-bold text-hm-primary",children:a})]})}function he({label:e,value:a}){return t.jsxs("div",{className:"flex items-start justify-between px-4 py-3 border-b border-gray-50 last:border-b-0",children:[t.jsx("span",{className:"text-sm text-gray-400 shrink-0 w-40",children:e}),t.jsx("span",{className:"text-sm font-semibold text-hm-primary text-right flex-1 ml-4",children:a??"—"})]})}function Gt({role:e,name:a}){return t.jsxs("div",{className:"border border-gray-100 rounded-xl p-3 bg-gray-50",children:[t.jsx("p",{className:"text-xs text-gray-400 mb-1",children:e}),t.jsx("p",{className:"text-sm font-bold text-hm-primary",children:a||"—"})]})}function Xt({label:e,value:a,color:s}){const r={primary:"text-hm-primary",green:"text-green-700",red:"text-red-600",gray:"text-gray-300"};return t.jsxs("div",{className:"border border-gray-100 rounded-xl p-4 text-center bg-gray-50",children:[t.jsx("p",{className:"text-xs text-gray-400 mb-1",children:e}),t.jsx("p",{className:`text-base font-extrabold ${r[s]}`,children:a})]})}const pl=90;function ml(e,a){const[s,r]=e.split(":").map(Number),i=s*60+r+a;return`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function fl(){const{patients:e,setPatients:a,surgeries:s,setSurgeries:r,setTherapies:i}=ve(),{isAdmin:n,canEdit:o}=Oe(),d=A.useRef(null),[g,v]=A.useState(!1),[h,p]=A.useState(!1),[x,f]=A.useState(null),[C,w]=A.useState(null),[D,$]=A.useState(!1),[u,j]=A.useState("all"),[b,I]=A.useState(null);A.useEffect(()=>{const F=Et(a),L=Pt(r),Q=va(i);return()=>{F(),L(),Q()}},[]);const ae=A.useMemo(()=>u==="all"?s:s.filter(F=>F.status===u),[s,u]).filter(F=>F.status!=="cancelado").map(F=>{const Q=F.status==="suspendido"?{backgroundColor:"#9ca3af",borderColor:"#6b7280",textColor:"#fff"}:Va[F.patientType]??Va.ext,re=ml(F.startTime,pl);return{id:F.id,title:F.patientName,start:`${F.date}T${F.startTime}`,end:`${F.date}T${re}`,...Q,extendedProps:F}}),z=F=>{w(F?{date:F}:null),v(!0)},H=()=>{p(!1),v(!0)},y=()=>{p(!1),w(null)},_=({event:F})=>{I(null),w(F.extendedProps),p(!0)},O=({dateStr:F})=>{o&&z(F)},R=({event:F,jsEvent:L})=>{const Q=F.extendedProps,re=e.find(Le=>Le.id===Q.patientId);I({surgery:Q,patient:re,x:L.clientX,y:L.clientY})},B=()=>I(null),U=async({event:F,revert:L})=>{if(!o){L();return}const Q=F.extendedProps,re=W(F.start,"yyyy-MM-dd"),Le=W(F.start,"HH:mm");try{await gt(Q.id,{date:re,startTime:Le}),ee.success("Cirugía reprogramada")}catch{L(),ee.error("Error al reprogramar")}},se=async F=>{$(!0);try{C!=null&&C.id?(await gt(C.id,F),ee.success("Cirugía actualizada")):(await ro(F),ee.success("Cirugía programada")),v(!1),w(null)}catch(L){ee.error("Error: "+L.message)}finally{$(!1)}},K=async()=>{if(x)try{await gt(x.id,{status:"cancelado"}),ee.success("Cirugía cancelada"),p(!1)}catch(F){ee.error("Error: "+F.message)}finally{f(null)}},de=async(F,L)=>{try{await gt(F,L),ee.success(L.status==="suspendido"?"Cirugía suspendida":"Cirugía reprogramada"),p(!1),w(null)}catch(Q){throw ee.error("Error: "+Q.message),Q}},E=()=>{var Q;const F=(Q=d.current)==null?void 0:Q.getApi(),L=W(F?F.getDate():new Date,"yyyy-MM-dd");Yo(s,L)},T=()=>{var re;const F=(re=d.current)==null?void 0:re.getApi(),L=F?qe(F.getDate(),{weekStartsOn:1}):qe(new Date,{weekStartsOn:1}),Q=Array.from({length:7},(Le,ut)=>W(ti(L,ut),"yyyy-MM-dd"));Wo(s,Q)};return t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"card py-3",children:t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx("div",{className:"flex gap-1.5 flex-wrap",children:[{v:"all",l:"Todas"},{v:"programado",l:"Programadas"},{v:"confirmado",l:"Confirmadas"},{v:"realizado",l:"Realizadas"},{v:"suspendido",l:"Suspendidas"}].map(({v:F,l:L})=>t.jsx("button",{onClick:()=>j(F),className:`btn btn-sm ${u===F?"btn-primary":"btn-secondary"}`,children:L},F))}),t.jsxs("div",{className:"ml-auto flex gap-2 flex-wrap items-center",children:[t.jsxs("div",{className:"flex items-center gap-3 mr-2 flex-wrap",children:[t.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[t.jsx("span",{className:"w-3 h-3 rounded-full inline-block",style:{backgroundColor:"#1e40af"}})," MNY"]}),t.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[t.jsx("span",{className:"w-3 h-3 rounded-full inline-block",style:{backgroundColor:"#ea580c"}})," JWI"]}),t.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-green-600 inline-block"})," EXT"]}),t.jsx("span",{className:"w-px h-4 bg-gray-200"}),t.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[t.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-green-500"})," Pagado"]}),t.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[t.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-yellow-400"})," Parcial"]}),t.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[t.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-red-500"})," Sin pago"]})]}),t.jsxs("button",{onClick:E,className:"btn-secondary btn btn-sm",children:[t.jsx(at,{className:"w-4 h-4"})," Día"]}),t.jsxs("button",{onClick:T,className:"btn-secondary btn btn-sm",children:[t.jsx(at,{className:"w-4 h-4"})," Semana"]}),t.jsx("button",{onClick:()=>Vo(s),className:"btn-secondary btn btn-sm",title:"CSV",children:t.jsx(da,{className:"w-4 h-4"})}),o&&t.jsxs("button",{onClick:()=>z(),className:"btn-primary btn btn-sm",children:[t.jsx(ws,{className:"w-4 h-4"})," Nueva cirugía"]})]})]})}),t.jsx("div",{className:"card p-3 md:p-5",children:t.jsx(js,{ref:d,plugins:[Fs,Cs,ks,As],initialView:"dayGridMonth",locale:er,height:"auto",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},events:ae,editable:o,selectable:o,dateClick:O,eventClick:_,eventDrop:U,eventMouseEnter:R,eventMouseLeave:B,eventContent:F=>{const L=F.event.extendedProps,Q=L.paymentComplete?"#22c55e":Number(L.amountPaid)>0?"#eab308":"#ef4444";return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,padding:"0 4px",overflow:"hidden",height:"100%",width:"100%"},children:[t.jsx("span",{style:{width:7,height:7,minWidth:7,borderRadius:"50%",backgroundColor:Q,border:"1.5px solid rgba(255,255,255,0.8)"}}),t.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"0.72rem",fontWeight:600},children:F.event.title})]})},eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!1},slotMinTime:"06:00:00",slotMaxTime:"22:00:00",allDaySlot:!1,nowIndicator:!0,eventDisplay:"block",dayMaxEvents:4,moreLinkText:F=>`+${F} más`,noEventsText:"Sin cirugías en este período",buttonText:{today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Lista"}})}),b&&t.jsx("div",{className:"fixed z-[200] pointer-events-none",style:{left:Math.min(b.x+16,window.innerWidth-272),top:b.y-8},children:(()=>{var L;const F=oe(b.surgery.patientType);return t.jsxs("div",{className:"w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden",children:[t.jsxs("div",{className:"px-4 py-2.5 flex items-center justify-between gap-2",style:{backgroundColor:F.bg},children:[t.jsx("p",{className:"text-white font-extrabold text-sm truncate",children:b.surgery.patientName}),t.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-white/20 text-white",children:F.label})]}),t.jsxs("div",{className:"px-4 py-3 space-y-2",children:[((L=b.patient)==null?void 0:L.diagnosis)&&t.jsxs("div",{children:[t.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Diagnóstico"}),t.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:b.patient.diagnosis})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Tipo de cirugía"}),t.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:b.surgery.surgeryType||"—"})]}),n&&b.surgery.quotation>0&&t.jsxs("div",{children:[t.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Cotización"}),t.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:Number(b.surgery.quotation).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})})]}),t.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-gray-50",children:[t.jsx("span",{className:"text-[10px] text-gray-400",children:b.surgery.startTime}),t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full capitalize",style:{backgroundColor:b.surgery.status==="confirmado"?"#dbeafe":b.surgery.status==="realizado"?"#dcfce7":"#f1f5f9",color:b.surgery.status==="confirmado"?"#1d4ed8":b.surgery.status==="realizado"?"#15803d":"#475569"},children:b.surgery.status}),t.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full",style:{backgroundColor:F.lightBg,color:F.textColor},children:F.longLabel})]})]})]})]})})()}),t.jsx(ot,{open:g,onClose:()=>{v(!1),w(null)},title:C!=null&&C.id?"Editar cirugía":"Nueva cirugía",size:"xl",children:t.jsx(sl,{initial:C,onSubmit:se,onCancel:()=>{v(!1),w(null)},busy:D})}),h&&C&&t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:F=>{F.target===F.currentTarget&&y()},children:t.jsx("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden",style:{maxHeight:"92vh"},children:t.jsx(cl,{surgery:C,onEdit:H,onClose:y,onCancelSurgery:()=>f(C),onSuspendSurgery:de,isAdmin:n,canEdit:o})})}),t.jsx(ya,{open:!!x,title:"Cancelar cirugía",message:`¿Marcar la cirugía de ${x==null?void 0:x.patientName} como cancelada?`,confirmLabel:"Sí, cancelar",onConfirm:K,onCancel:()=>f(null)})]})}const gl=["Fonoaudiología","Psicología","Nutrición","Kinesiología","Terapia Ocupacional","Otro"];function hl({initial:e,onSubmit:a,onCancel:s,busy:r}){const{patients:i}=ve(),n=i.filter(f=>f.status==="activo"),{register:o,handleSubmit:d,watch:g,reset:v,formState:{errors:h}}=ka({defaultValues:e??{patientId:"",therapyType:"",date:"",startTime:"",durationMinutes:45,therapist:"",status:"programado",notes:""}});A.useEffect(()=>{e&&v(e)},[e]);const p=g("patientId");i.find(f=>f.id===p);const x=f=>{const C=i.find(w=>w.id===f.patientId);a({...f,patientName:(C==null?void 0:C.fullName)??"",patientType:(C==null?void 0:C.patientType)??"external"})};return t.jsxs("form",{onSubmit:d(x),className:"space-y-4",children:[t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Paciente *"}),t.jsxs("select",{className:`input ${h.patientId?"input-error":""}`,...o("patientId",{required:"Selecciona un paciente"}),children:[t.jsx("option",{value:"",children:"Seleccionar paciente..."}),n.map(f=>t.jsxs("option",{value:f.id,children:[f.fullName," — ",f.diagnosis]},f.id))]}),h.patientId&&t.jsx("p",{className:"error-msg",children:h.patientId.message})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Tipo de terapia *"}),t.jsxs("select",{className:`input ${h.therapyType?"input-error":""}`,...o("therapyType",{required:"Requerido"}),children:[t.jsx("option",{value:"",children:"Seleccionar..."}),gl.map(f=>t.jsx("option",{value:f,children:f},f))]}),h.therapyType&&t.jsx("p",{className:"error-msg",children:h.therapyType.message})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Fecha *"}),t.jsx("input",{type:"date",className:`input ${h.date?"input-error":""}`,...o("date",{required:"Requerido"})}),h.date&&t.jsx("p",{className:"error-msg",children:h.date.message})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Hora *"}),t.jsx("input",{type:"time",className:`input ${h.startTime?"input-error":""}`,...o("startTime",{required:"Requerido"})}),h.startTime&&t.jsx("p",{className:"error-msg",children:h.startTime.message})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Duración (min)"}),t.jsx("input",{type:"number",min:"15",max:"240",step:"5",className:"input",...o("durationMinutes")})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Terapeuta"}),t.jsx("input",{className:"input",placeholder:"Nombre del profesional",...o("therapist")})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Estado"}),t.jsxs("select",{className:"input",...o("status"),children:[t.jsx("option",{value:"programado",children:"Programado"}),t.jsx("option",{value:"confirmado",children:"Confirmado"}),t.jsx("option",{value:"realizado",children:"Realizado"}),t.jsx("option",{value:"cancelado",children:"Cancelado"})]})]})]}),t.jsxs("div",{className:"form-group mb-0",children:[t.jsx("label",{className:"label",children:"Observaciones"}),t.jsx("textarea",{rows:2,className:"input resize-none",...o("notes")})]}),t.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[t.jsx("button",{type:"button",onClick:s,className:"btn-secondary btn",children:"Cancelar"}),t.jsx("button",{type:"submit",disabled:r,className:"btn-primary btn",children:r?t.jsx(lt,{className:"w-4 h-4 animate-spin"}):e!=null&&e.id?"Guardar cambios":"Agendar terapia"})]})]})}const Jt={Fonoaudiología:{backgroundColor:"#7c3aed",borderColor:"#6d28d9"},Psicología:{backgroundColor:"#db2777",borderColor:"#be185d"},Nutrición:{backgroundColor:"#ea580c",borderColor:"#c2410c"},Kinesiología:{backgroundColor:"#0891b2",borderColor:"#0e7490"},"Terapia Ocupacional":{backgroundColor:"#16a34a",borderColor:"#15803d"},default:{backgroundColor:"#64748b",borderColor:"#475569"}};function xl(){const{patients:e,setPatients:a,therapies:s,setTherapies:r}=ve(),{isAdmin:i}=Oe(),[n,o]=A.useState(!1),[d,g]=A.useState(!1),[v,h]=A.useState(null),[p,x]=A.useState(null),[f,C]=A.useState(!1),[w,D]=A.useState("all");A.useEffect(()=>{const z=Et(a),H=va(r);return()=>{z(),H()}},[]);const $=A.useMemo(()=>["all",...new Set(s.map(H=>H.therapyType).filter(Boolean))],[s]),j=(w==="all"?s:s.filter(z=>z.therapyType===w)).map(z=>{const H=Jt[z.therapyType]??Jt.default,[y,_]=z.startTime.split(":").map(Number),O=y*60+_+Number(z.durationMinutes??45),R=`${String(Math.floor(O/60)).padStart(2,"0")}:${String(O%60).padStart(2,"0")}`;return{id:z.id,title:`${z.startTime} ${z.patientName} (${z.therapyType})`,start:`${z.date}T${z.startTime}`,end:`${z.date}T${R}`,...H,textColor:"#fff",extendedProps:z}}),b=({dateStr:z})=>{i&&(x({date:z}),o(!0))},I=({event:z})=>{x(z.extendedProps),g(!0)},V=async z=>{C(!0);try{p!=null&&p.id?(await co(p.id,z),ee.success("Terapia actualizada")):(await lo(z),ee.success("Terapia agendada")),o(!1),x(null)}catch(H){ee.error("Error: "+H.message)}finally{C(!1)}},ae=async()=>{if(v)try{await uo(v.id),ee.success("Terapia eliminada"),g(!1)}catch(z){ee.error("Error: "+z.message)}finally{h(null)}};return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 flex items-center gap-3",children:[t.jsx(St,{className:"w-5 h-5 text-purple-600 shrink-0"}),t.jsx("p",{className:"text-sm text-purple-700",children:"Módulo de terapias — sin restricción de quirófano. Múltiples terapeutas pueden atender simultáneamente."})]}),t.jsx("div",{className:"card py-3",children:t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx("div",{className:"flex gap-1.5 flex-wrap",children:$.map(z=>t.jsx("button",{onClick:()=>D(z),className:`btn btn-sm ${w===z?"btn-primary":"btn-secondary"}`,children:z==="all"?"Todas":z},z))}),t.jsx("div",{className:"ml-auto flex flex-wrap gap-2 items-center",children:Object.entries(Jt).filter(([z])=>z!=="default").map(([z,H])=>t.jsxs("span",{className:"flex items-center gap-1 text-xs text-gray-600",children:[t.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block",style:{background:H.backgroundColor}}),z]},z))}),i&&t.jsxs("button",{onClick:()=>{x(null),o(!0)},className:"btn-primary btn btn-sm",children:[t.jsx(ws,{className:"w-4 h-4"})," Nueva terapia"]})]})}),t.jsx("div",{className:"card p-3 md:p-5",children:t.jsx(js,{plugins:[Fs,Cs,ks,As],initialView:"timeGridWeek",locale:er,height:"auto",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},events:j,editable:i,selectable:i,dateClick:b,eventClick:I,eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!1},slotMinTime:"07:00:00",slotMaxTime:"20:00:00",allDaySlot:!1,nowIndicator:!0,buttonText:{today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Lista"},noEventsText:"Sin terapias en este período"})}),t.jsx(ot,{open:n,onClose:()=>{o(!1),x(null)},title:p!=null&&p.id?"Editar terapia":"Nueva terapia",size:"lg",children:t.jsx(hl,{initial:p,onSubmit:V,onCancel:()=>{o(!1),x(null)},busy:f})}),t.jsx(ot,{open:d,onClose:()=>{g(!1),x(null)},title:"Detalle de terapia",size:"sm",children:p&&t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"p-3 bg-gray-50 rounded-lg",children:[t.jsx("p",{className:"font-semibold text-gray-800",children:p.patientName}),t.jsxs("p",{className:"text-gray-500",children:[p.therapyType," · ",p.therapist||"—"]})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[t.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[t.jsx("p",{className:"text-xs text-gray-400",children:"Fecha"}),t.jsx("p",{className:"font-medium",children:p.date})]}),t.jsxs("div",{className:"p-2 bg-gray-50 rounded",children:[t.jsx("p",{className:"text-xs text-gray-400",children:"Hora"}),t.jsxs("p",{className:"font-medium",children:[p.startTime," · ",p.durationMinutes," min"]})]})]}),p.notes&&t.jsx("p",{className:"text-gray-600 bg-gray-50 rounded p-2",children:p.notes}),t.jsx(Fe,{variant:p.status}),i&&t.jsxs("div",{className:"flex gap-2 justify-end pt-2 border-t border-gray-100",children:[t.jsxs("button",{onClick:()=>h(p),className:"btn-danger btn btn-sm",children:[t.jsx(Kt,{className:"w-4 h-4"})," Eliminar"]}),t.jsxs("button",{onClick:()=>{x(p),g(!1),o(!0)},className:"btn-primary btn btn-sm",children:[t.jsx(Ft,{className:"w-4 h-4"})," Editar"]})]})]})}),t.jsx(ya,{open:!!v,title:"Eliminar terapia",message:`¿Eliminar la sesión de ${v==null?void 0:v.patientName}?`,onConfirm:ae,onCancel:()=>h(null)})]})}function le(e){return Number(e||0).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})}function bl(e){const s=[["Fecha","Paciente","Tipo","Cirujano","Estado","Cotización","Pagado","Fecha pago","Pendiente","Pago Completo","Ayuda Social","Monto Ayuda","Obs. Admin."].join(","),...e.map(o=>[o.date,`"${o.patientName??""}"`,`"${o.surgeryType??""}"`,`"${o.surgeon??""}"`,o.status,o.quotation||0,o.amountPaid||0,o.paymentDate||o.partialPaymentDate||"",Math.max(0,(o.quotation||0)-(o.amountPaid||0)),o.paymentComplete?"Sí":"No",o.socialAid?"Sí":"No",o.socialAidAmount||0,`"${o.adminNotes??""}"`].join(","))],r=new Blob(["\uFEFF"+s.join(`
`)],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(r);Object.assign(document.createElement("a"),{href:i,download:"finanzas.csv"}).click(),URL.revokeObjectURL(i)}function vl(e,a){ea(async()=>{const{default:s}=await import("./pdf-vendor-D1D5NA3e.js").then(r=>r.c);return{default:s}},__vite__mapDeps([0,1])).then(({default:s})=>{ea(async()=>{const{default:r}=await import("./pdf-vendor-D1D5NA3e.js").then(i=>i.j);return{default:r}},__vite__mapDeps([0,1])).then(({default:r})=>{const i=new s({orientation:"landscape"}),n=[15,118,110];i.setFillColor(...n),i.rect(0,0,297,22,"F"),i.setTextColor(255,255,255),i.setFontSize(16),i.setFont("helvetica","bold"),i.text("MUNAY — Reporte Financiero",14,10),i.setFontSize(9),i.setFont("helvetica","normal"),i.text(`Generado: ${W(new Date,"dd/MM/yyyy HH:mm")}`,283,10,{align:"right"}),i.text(`Total cirugías: ${a.count} | Cotizado: $${a.quoted.toLocaleString("es-CL")} | Cobrado: $${a.collected.toLocaleString("es-CL")} | Pendiente: $${a.pending.toLocaleString("es-CL")}`,14,18),i.setTextColor(0,0,0),r(i,{startY:26,head:[["Fecha","Paciente","Tipo cirugía","Cirujano","Estado","Cotización","Pagado","Fecha pago","Pendiente","Pago OK","Ayuda Social"]],body:e.map(o=>[o.date,o.patientName??"",o.surgeryType??"",o.surgeon??"",o.status,`$${Number(o.quotation||0).toLocaleString("es-CL")}`,`$${Number(o.amountPaid||0).toLocaleString("es-CL")}`,o.paymentDate||o.partialPaymentDate||"—",`$${Math.max(0,(o.quotation||0)-(o.amountPaid||0)).toLocaleString("es-CL")}`,o.paymentComplete?"✓":"✗",o.socialAid?`$${Number(o.socialAidAmount||0).toLocaleString("es-CL")}`:"—"]),headStyles:{fillColor:n,fontSize:7},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),i.save("finanzas-munay.pdf")})})}const yl=[{v:"all",l:"Todas"},{v:"pendiente",l:"Con deuda"},{v:"completo",l:"Pagadas"},{v:"socialAid",l:"Con ayuda social"}];function wl(){const{surgeries:e,setSurgeries:a}=ve(),[s,r]=A.useState(""),[i,n]=A.useState("all"),[o,d]=A.useState(""),[g,v]=A.useState(""),[h,p]=A.useState("date"),[x,f]=A.useState("desc");A.useEffect(()=>Pt(a),[]);const C=A.useMemo(()=>e.filter(u=>u.status!=="cancelado"),[e]),w=A.useMemo(()=>{let u=C;if(o&&(u=u.filter(j=>j.date>=o)),g&&(u=u.filter(j=>j.date<=g)),i==="pendiente"&&(u=u.filter(j=>!j.paymentComplete&&(j.quotation||j.amountPaid))),i==="completo"&&(u=u.filter(j=>j.paymentComplete)),i==="socialAid"&&(u=u.filter(j=>j.socialAid)),s){const j=s.toLowerCase();u=u.filter(b=>{var I,V,ae;return((I=b.patientName)==null?void 0:I.toLowerCase().includes(j))||((V=b.surgeryType)==null?void 0:V.toLowerCase().includes(j))||((ae=b.surgeon)==null?void 0:ae.toLowerCase().includes(j))})}return[...u].sort((j,b)=>{let I=j[h]??"",V=b[h]??"";return(h==="quotation"||h==="amountPaid")&&(I=Number(I),V=Number(V)),I<V?x==="asc"?-1:1:I>V?x==="asc"?1:-1:0})},[C,o,g,i,s,h,x]),D=A.useMemo(()=>{const u=w.reduce((I,V)=>I+Number(V.quotation||0),0),j=w.reduce((I,V)=>I+Number(V.amountPaid||0),0),b=w.reduce((I,V)=>I+Number(V.socialAidAmount||0),0);return{count:w.length,quoted:u,collected:j,pending:Math.max(0,u-j),socialAid:b,paidCount:w.filter(I=>I.paymentComplete).length,socialCount:w.filter(I=>I.socialAid).length}},[w]),$=u=>{h===u?f(j=>j==="asc"?"desc":"asc"):(p(u),f("desc"))};return t.jsxs("div",{className:"space-y-5",children:[t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[t.jsx(bt,{icon:oa,label:"Total cotizado",value:le(D.quoted),sub:`${D.count} cirugía${D.count!==1?"s":""}`,color:"teal"}),t.jsx(bt,{icon:xs,label:"Total cobrado",value:le(D.collected),sub:`${D.paidCount} pagadas completo`,color:"green"}),t.jsx(bt,{icon:Cr,label:"Total pendiente",value:le(D.pending),sub:D.pending>0?"Por cobrar":"Sin deuda",color:D.pending>0?"red":"green"}),t.jsx(bt,{icon:Ra,label:"Ayuda social",value:le(D.socialAid),sub:`${D.socialCount} paciente${D.socialCount!==1?"s":""}`,color:"purple"})]}),t.jsx("div",{className:"card py-3",children:t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[t.jsx("div",{className:"flex-1 min-w-[200px]",children:t.jsx(qs,{value:s,onChange:r,placeholder:"Buscar paciente, cirugía, cirujano..."})}),t.jsxs("div",{className:"flex gap-2 items-center",children:[t.jsx("label",{className:"text-xs text-gray-500 shrink-0",children:"Desde"}),t.jsx("input",{type:"date",value:o,onChange:u=>d(u.target.value),className:"input text-sm py-1.5 w-36"})]}),t.jsxs("div",{className:"flex gap-2 items-center",children:[t.jsx("label",{className:"text-xs text-gray-500 shrink-0",children:"Hasta"}),t.jsx("input",{type:"date",value:g,onChange:u=>v(u.target.value),className:"input text-sm py-1.5 w-36"})]}),(o||g||s)&&t.jsx("button",{onClick:()=>{r(""),d(""),v("")},className:"btn-secondary btn btn-sm text-xs",children:"Limpiar"})]}),t.jsxs("div",{className:"flex flex-wrap gap-2 items-center justify-between",children:[t.jsx("div",{className:"flex gap-1.5 flex-wrap",children:yl.map(({v:u,l:j})=>t.jsx("button",{onClick:()=>n(u),className:`btn btn-sm ${i===u?"btn-primary":"btn-secondary"}`,children:j},u))}),t.jsxs("div",{className:"flex gap-2 ml-auto",children:[t.jsxs("button",{onClick:()=>bl(w),className:"btn-secondary btn btn-sm",title:"Exportar CSV",children:[t.jsx(da,{className:"w-4 h-4"})," CSV"]}),t.jsxs("button",{onClick:()=>vl(w,D),className:"btn-secondary btn btn-sm",title:"Exportar PDF",children:[t.jsx(Ye,{className:"w-4 h-4"})," PDF"]})]})]})]})}),t.jsxs("div",{className:"flex gap-4 flex-wrap text-sm text-gray-600",children:[t.jsxs("span",{children:[t.jsx("strong",{className:"text-gray-800",children:w.length})," registros"]}),t.jsx("span",{className:"text-gray-300",children:"|"}),t.jsxs("span",{children:["Cotizado: ",t.jsx("strong",{className:"text-teal-700",children:le(D.quoted)})]}),t.jsxs("span",{children:["Cobrado: ",t.jsx("strong",{className:"text-green-700",children:le(D.collected)})]}),D.pending>0&&t.jsxs("span",{children:["Pendiente: ",t.jsx("strong",{className:"text-red-600",children:le(D.pending)})]})]}),w.length===0?t.jsxs("div",{className:"card flex flex-col items-center py-14 text-gray-400",children:[t.jsx(la,{className:"w-10 h-10 mb-2 opacity-40"}),t.jsx("p",{className:"text-sm",children:"No hay registros que coincidan con los filtros."})]}):t.jsxs("div",{className:"card p-0 overflow-hidden",children:[t.jsx("div",{className:"hidden md:block overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:t.jsxs("tr",{children:[t.jsx(vt,{label:"Fecha",field:"date",sortField:h,sortDir:x,onSort:$}),t.jsx(vt,{label:"Paciente",field:"patientName",sortField:h,sortDir:x,onSort:$}),t.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Cirugía"}),t.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Cirujano"}),t.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Estado"}),t.jsx(vt,{label:"Cotización",field:"quotation",sortField:h,sortDir:x,onSort:$,right:!0}),t.jsx(vt,{label:"Pagado",field:"amountPaid",sortField:h,sortDir:x,onSort:$,right:!0}),t.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Fecha pago"}),t.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Pendiente"}),t.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Pago"}),t.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Ayuda Social"})]})}),t.jsx("tbody",{className:"divide-y divide-gray-50",children:w.map(u=>{const j=Math.max(0,Number(u.quotation||0)-Number(u.amountPaid||0));return t.jsxs("tr",{className:`hover:bg-gray-50 transition ${u.paymentComplete?"":j>0?"bg-red-50/30":""}`,children:[t.jsx("td",{className:"px-4 py-3 text-gray-600 whitespace-nowrap",children:W(new Date(u.date+"T12:00"),"dd/MM/yyyy")}),t.jsx("td",{className:"px-4 py-3",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:`w-1.5 h-1.5 rounded-full shrink-0 ${u.patientType==="flap"?"bg-green-500":"bg-blue-500"}`}),t.jsx("span",{className:"font-medium text-gray-800",children:u.patientName})]})}),t.jsx("td",{className:"px-4 py-3 text-gray-600 max-w-[160px] truncate",title:u.surgeryType,children:u.surgeryType}),t.jsx("td",{className:"px-4 py-3 text-gray-600",children:u.surgeon||"—"}),t.jsx("td",{className:"px-4 py-3",children:t.jsx(Fe,{variant:u.status})}),t.jsx("td",{className:"px-4 py-3 text-right font-medium text-gray-800",children:u.quotation?le(u.quotation):t.jsx("span",{className:"text-gray-300",children:"—"})}),t.jsx("td",{className:"px-4 py-3 text-right text-green-700 font-medium",children:u.amountPaid?le(u.amountPaid):t.jsx("span",{className:"text-gray-300",children:"—"})}),t.jsx("td",{className:"px-4 py-3 text-xs text-gray-500 whitespace-nowrap",children:u.paymentDate?t.jsx("span",{className:"text-green-700 font-medium",children:W(new Date(u.paymentDate+"T12:00"),"dd/MM/yyyy")}):u.partialPaymentDate?t.jsxs("span",{className:"text-amber-600",children:[W(new Date(u.partialPaymentDate+"T12:00"),"dd/MM/yyyy")," ",t.jsx("span",{className:"text-gray-400",children:"(parcial)"})]}):t.jsx("span",{className:"text-gray-300",children:"—"})}),t.jsx("td",{className:"px-4 py-3 text-right",children:j>0?t.jsx("span",{className:"text-red-600 font-semibold",children:le(j)}):t.jsx("span",{className:"text-gray-300",children:"—"})}),t.jsx("td",{className:"px-4 py-3 text-center",children:u.paymentComplete?t.jsx(nt,{className:"w-4 h-4 text-green-600 mx-auto"}):t.jsx(ys,{className:"w-4 h-4 text-red-400 mx-auto"})}),t.jsx("td",{className:"px-4 py-3 text-center",children:u.socialAid?t.jsx("span",{className:"text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium",children:u.socialAidAmount?le(u.socialAidAmount):"Sí"}):t.jsx("span",{className:"text-gray-300 text-xs",children:"—"})})]},u.id)})}),t.jsx("tfoot",{className:"bg-gray-50 border-t-2 border-gray-200",children:t.jsxs("tr",{children:[t.jsxs("td",{colSpan:5,className:"px-4 py-3 text-xs font-semibold text-gray-500 uppercase",children:["Totales (",w.length," registros)"]}),t.jsx("td",{className:"px-4 py-3 text-right font-bold text-gray-800",children:le(D.quoted)}),t.jsx("td",{className:"px-4 py-3 text-right font-bold text-green-700",children:le(D.collected)}),t.jsx("td",{className:"px-4 py-3"}),t.jsx("td",{className:"px-4 py-3 text-right font-bold text-red-600",children:D.pending>0?le(D.pending):"—"}),t.jsxs("td",{className:"px-4 py-3 text-center text-xs text-gray-500",children:[D.paidCount,"/",w.length]}),t.jsx("td",{className:"px-4 py-3 text-center font-bold text-purple-700 text-xs",children:D.socialAid>0?le(D.socialAid):"—"})]})})]})}),t.jsx("ul",{className:"md:hidden divide-y divide-gray-100",children:w.map(u=>{const j=Math.max(0,Number(u.quotation||0)-Number(u.amountPaid||0));return t.jsxs("li",{className:"p-4 space-y-2",children:[t.jsxs("div",{className:"flex items-start justify-between",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-gray-800",children:u.patientName}),t.jsx("p",{className:"text-xs text-gray-500",children:u.surgeryType}),t.jsxs("p",{className:"text-xs text-gray-400",children:[W(new Date(u.date+"T12:00"),"d MMM yyyy",{locale:je})," · ",u.surgeon||"—"]})]}),t.jsx(Fe,{variant:u.status})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[t.jsxs("div",{className:"bg-gray-50 rounded p-2",children:[t.jsx("p",{className:"text-gray-400",children:"Cotización"}),t.jsx("p",{className:"font-semibold text-gray-800",children:u.quotation?le(u.quotation):"—"})]}),t.jsxs("div",{className:"bg-gray-50 rounded p-2",children:[t.jsx("p",{className:"text-gray-400",children:"Pagado"}),t.jsx("p",{className:"font-semibold text-green-700",children:u.amountPaid?le(u.amountPaid):"—"})]}),t.jsxs("div",{className:`rounded p-2 ${j>0?"bg-red-50":"bg-gray-50"}`,children:[t.jsx("p",{className:"text-gray-400",children:"Pendiente"}),t.jsx("p",{className:`font-semibold ${j>0?"text-red-600":"text-gray-400"}`,children:j>0?le(j):"—"})]})]}),(u.paymentDate||u.partialPaymentDate)&&t.jsxs("p",{className:"text-xs text-gray-500",children:["Fecha pago:"," ",u.paymentDate?t.jsx("span",{className:"text-green-700 font-medium",children:W(new Date(u.paymentDate+"T12:00"),"dd/MM/yyyy")}):t.jsxs("span",{className:"text-amber-600",children:[W(new Date(u.partialPaymentDate+"T12:00"),"dd/MM/yyyy")," (parcial)"]})]}),t.jsxs("div",{className:"flex gap-2",children:[u.paymentComplete&&t.jsxs("span",{className:"flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full",children:[t.jsx(nt,{className:"w-3 h-3"})," Pagado"]}),u.socialAid&&t.jsxs("span",{className:"flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full",children:[t.jsx(Ra,{className:"w-3 h-3"})," Ayuda social"]}),u.adminNotes&&t.jsx("span",{className:"text-xs text-gray-400 italic truncate",children:u.adminNotes})]})]},u.id)})})]})]})}function bt({icon:e,label:a,value:s,sub:r,color:i}){const n={teal:"bg-teal-50   text-teal-700",green:"bg-green-50  text-green-700",red:"bg-red-50    text-red-600",purple:"bg-purple-50 text-purple-700"};return t.jsxs("div",{className:"card",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${n[i]}`,children:t.jsx(e,{className:"w-5 h-5"})}),t.jsx("p",{className:"text-lg font-bold text-gray-800 leading-tight",children:s}),t.jsx("p",{className:"text-sm font-medium text-gray-600 mt-0.5",children:a}),t.jsx("p",{className:"text-xs text-gray-400 mt-0.5",children:r})]})}function vt({label:e,field:a,sortField:s,sortDir:r,onSort:i,right:n=!1}){return t.jsxs("th",{className:`px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-700 select-none ${n?"text-right":"text-left"}`,onClick:()=>i(a),children:[e," ",s===a?r==="asc"?t.jsx(kr,{className:"w-3.5 h-3.5 inline"}):t.jsx(Ar,{className:"w-3.5 h-3.5 inline"}):null]})}function Nl(){const{loading:e}=Oe();return e?t.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{backgroundColor:"#F8FAFC"},children:t.jsxs("div",{className:"flex flex-col items-center gap-3",children:[t.jsx("div",{className:"w-12 h-12 border-4 border-t-transparent rounded-full animate-spin",style:{borderColor:"#1A365D",borderTopColor:"transparent"}}),t.jsx("p",{className:"font-semibold",style:{color:"#1A365D"},children:"Hospital Munay"})]})}):t.jsxs(gr,{children:[t.jsx(ye,{path:"/login",element:t.jsx(ei,{})}),t.jsx(ye,{element:t.jsx(Zr,{}),children:t.jsxs(ye,{element:t.jsx(Jr,{}),children:[t.jsx(ye,{index:!0,element:t.jsx(Nt,{to:"/dashboard",replace:!0})}),t.jsx(ye,{path:"/dashboard",element:t.jsx(oo,{})}),t.jsx(ye,{path:"/pacientes",element:t.jsx(Ko,{})}),t.jsx(ye,{path:"/cirugias",element:t.jsx(fl,{})}),t.jsx(ye,{path:"/terapias",element:t.jsx(xl,{})}),t.jsx(ye,{element:t.jsx(Kr,{}),children:t.jsx(ye,{path:"/finanzas",element:t.jsx(wl,{})})})]})}),t.jsx(ye,{path:"*",element:t.jsx(Nt,{to:"/dashboard",replace:!0})})]})}Vr({onNeedRefresh(){ee("Nueva versión disponible. Recarga para actualizar.",{duration:8e3,icon:"🔄"})},onOfflineReady(){ee.success("App lista para usar sin conexión.")}});ta.createRoot(document.getElementById("root")).render(t.jsx(ue.StrictMode,{children:t.jsx(hr,{children:t.jsxs(Yr,{children:[t.jsx(Nl,{}),t.jsx(Sr,{position:"top-right",toastOptions:{duration:4e3,style:{fontFamily:"Inter, sans-serif",fontSize:"14px"},success:{iconTheme:{primary:"#0f766e",secondary:"#fff"}}}})]})})}));
