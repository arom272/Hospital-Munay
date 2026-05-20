const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdf-vendor-D1D5NA3e.js","assets/react-vendor-BZp2bWF9.js"])))=>i.map(i=>d[i]);
import{r as y,b as fn,N as bn,u as vn,O as lt,d as cs,e as yn,L as Ta,R as xe,f as jn,h as Pe,B as wn}from"./react-vendor-BZp2bWF9.js";import{c as Nn,L as kn,U as ba,C as sa,H as Ea,D as ot,X as we,a as Cn,z as V,M as Fn,S as ds,E as Sn,b as ps,d as Ye,e as va,A as Gs,f as An,g as Ia,T as fi,h as fs,i as bi,j as bs,P as ia,k as ya,l as ga,m as us,n as ct,o as Dn,p as dt,F as Qe,q as pt,r as Qs,s as At,t as Dt,u as qa,v as Tn,w as $s,x as Tt,y as vi,B as yi,G as En,I as Pn,J as Mn,R as On,K as zn,N as In,O as Ln,Q as Et,V as _n,W as $n}from"./ui-vendor-C1ftNjD3.js";import{_ as Xs,E as ut,a as mt}from"./pdf-vendor-D1D5NA3e.js";import{i as Rn,g as qn,a as Hn,b as Bn,o as Vn,c as Yn,d as He,s as Un,e as Wn,f as Gn,q as vs,h as ys,j as Ue,k as Ha,u as Ba,l as Va,m as Ya,n as Ve}from"./firebase-vendor-BNWioZyw.js";import{F as ji,i as wi,a as Ni,b as ki,c as Ci}from"./calendar-vendor-2lW9V1yc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var Fi={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn=y,Xn=Symbol.for("react.element"),Jn=Symbol.for("react.fragment"),Kn=Object.prototype.hasOwnProperty,Zn=Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,er={key:!0,ref:!0,__self:!0,__source:!0};function Si(a,s,t){var i,n={},r=null,l=null;t!==void 0&&(r=""+t),s.key!==void 0&&(r=""+s.key),s.ref!==void 0&&(l=s.ref);for(i in s)Kn.call(s,i)&&!er.hasOwnProperty(i)&&(n[i]=s[i]);if(a&&a.defaultProps)for(i in s=a.defaultProps,s)n[i]===void 0&&(n[i]=s[i]);return{$$typeof:Xn,type:a,key:r,ref:l,props:n,_owner:Zn.current}}js.Fragment=Jn;js.jsx=Si;js.jsxs=Si;Fi.exports=js;var e=Fi.exports,Js={},Pt=fn;Js.createRoot=Pt.createRoot,Js.hydrateRoot=Pt.hydrateRoot;function ar(a={}){const{immediate:s=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:n,onRegisteredSW:r,onRegisterError:l}=a;let c,p;const b=async(u=!0)=>{await p};async function j(){if("serviceWorker"in navigator){if(c=await Xs(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:u}},[]).then(({Workbox:u})=>new u("/sw.js",{scope:"/",type:"classic"})).catch(u=>{l==null||l(u)}),!c)return;c.addEventListener("activated",u=>{(u.isUpdate||u.isExternal)&&window.location.reload()}),c.addEventListener("installed",u=>{u.isUpdate||i==null||i()}),c.register({immediate:s}).then(u=>{r?r("/sw.js",u):n==null||n(u)}).catch(u=>{l==null||l(u)})}}return p=j(),b}const sr={apiKey:"AIzaSyBWwGg-1xq9tXpNiHHIlAbrHre4KfiSRBU",authDomain:"hospital-munay.firebaseapp.com",projectId:"hospital-munay",storageBucket:"hospital-munay.firebasestorage.app",messagingSenderId:"219046537621",appId:"1:219046537621:web:b43f713778f76a39b82e9c"},xt=Rn(sr);qn(xt);const pe=Hn(xt),Za=Bn(xt),Ai=y.createContext(null);function tr({children:a}){const[s,t]=y.useState(null),[i,n]=y.useState(null),[r,l]=y.useState(!0);y.useEffect(()=>Vn(Za,async x=>{if(x){t(x);try{const w=await Yn(He(pe,"users",x.uid));n(w.exists()?w.data().role:"viewer")}catch{n("viewer")}}else t(null),n(null);l(!1)}),[]);const c=(g,x)=>Gn(Za,g,x),p=()=>Wn(Za),b=g=>Un(Za,g),j=i==="admin",u=i==="secretaria",v=i==="viewer",h=j||u;return e.jsx(Ai.Provider,{value:{user:s,role:i,isAdmin:j,isSecretary:u,isViewer:v,canEdit:h,loading:r,login:c,logout:p,resetPassword:b},children:a})}const De=()=>{const a=y.useContext(Ai);if(!a)throw new Error("useAuth must be used inside AuthProvider");return a},ye=Nn(a=>({patients:[],setPatients:s=>a({patients:s}),surgeries:[],setSurgeries:s=>a({surgeries:s}),therapies:[],setTherapies:s=>a({therapies:s}),therapists:[],setTherapists:s=>a({therapists:s}),sidebarOpen:!1,toggleSidebar:()=>a(s=>({sidebarOpen:!s.sidebarOpen})),closeSidebar:()=>a({sidebarOpen:!1}),searchQuery:"",setSearchQuery:s=>a({searchQuery:s})})),ir="/assets/LOGO-xe2ktJXh.jpg",nr=[{to:"/dashboard",icon:kn,label:"Dashboard",adminOnly:!1},{to:"/pacientes",icon:ba,label:"Pacientes",adminOnly:!1},{to:"/cirugias",icon:sa,label:"Cirugías",adminOnly:!1},{to:"/terapias",icon:Ea,label:"Terapias",adminOnly:!1},{to:"/finanzas",icon:ot,label:"Finanzas",adminOnly:!0}];function rr(){const{sidebarOpen:a,closeSidebar:s}=ye(),{logout:t,user:i,isAdmin:n,isSecretary:r}=De(),l=nr.filter(p=>!p.adminOnly||n),c=async()=>{await t(),V.success("Sesión cerrada")};return e.jsxs("aside",{className:`
      fixed inset-y-0 left-0 z-30 w-64 flex flex-col
      transform transition-transform duration-200 ease-in-out
      lg:static lg:translate-x-0
      ${a?"translate-x-0":"-translate-x-full"}
    `,style:{backgroundColor:"#1A365D"},children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/10",children:[e.jsx("div",{className:"bg-white rounded-xl px-3 py-1.5 flex items-center",children:e.jsx("img",{src:ir,alt:"Hospital Munay",className:"h-12 w-auto object-contain"})}),e.jsx("button",{onClick:s,className:"lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition text-white",children:e.jsx(we,{className:"w-5 h-5"})})]}),e.jsx("nav",{className:"flex-1 px-3 py-4 space-y-0.5 overflow-y-auto",children:l.map(({to:p,icon:b,label:j,adminOnly:u})=>e.jsxs(bn,{to:p,onClick:s,className:({isActive:v})=>`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${v?"text-hm-primary font-bold shadow-sm":"text-white/75 hover:text-white hover:bg-white/10"}`,style:({isActive:v})=>v?{backgroundColor:"#09D6D4",color:"#1A365D"}:{},children:[e.jsx(b,{className:"w-5 h-5 shrink-0"}),e.jsx("span",{className:"flex-1",children:j}),u&&e.jsx("span",{className:"text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-medium",children:"Admin"})]},p))}),e.jsxs("div",{className:"px-4 py-4 border-t border-white/10",children:[e.jsx("p",{className:"text-xs text-white/60 truncate mb-0.5",children:i==null?void 0:i.email}),e.jsx("p",{className:"text-xs text-white/40 mb-3",children:n?"Administrador":r?"Secretaria":"Visualizador"}),e.jsxs("button",{onClick:c,className:`flex items-center gap-2 w-full text-sm text-white/70 hover:text-white
                     hover:bg-white/10 rounded-xl px-3 py-2 transition`,children:[e.jsx(Cn,{className:"w-4 h-4"}),"Cerrar sesión"]})]})]})}const lr={"/dashboard":"Dashboard","/pacientes":"Pacientes","/cirugias":"Cirugías","/terapias":"Terapias","/finanzas":"Finanzas"};function or(){const{toggleSidebar:a}=ye(),{pathname:s}=vn(),t=lr[s]??"Hospital Munay";return e.jsxs("header",{className:"bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-4 no-print shadow-sm",children:[e.jsx("button",{onClick:a,className:"lg:hidden p-2 rounded-lg text-hm-primary hover:bg-hm-secondary-100 transition","aria-label":"Abrir menú",children:e.jsx(Fn,{className:"w-5 h-5"})}),e.jsx("h1",{className:"text-lg font-bold text-hm-primary flex-1",children:t})]})}function cr(){const{sidebarOpen:a,closeSidebar:s}=ye();return e.jsxs("div",{className:"flex h-screen overflow-hidden bg-gray-50",children:[a&&e.jsx("div",{className:"fixed inset-0 z-20 bg-black/40 lg:hidden",onClick:s}),e.jsx(rr,{}),e.jsxs("div",{className:"flex flex-col flex-1 overflow-hidden",children:[e.jsx(or,{}),e.jsx("main",{className:"flex-1 overflow-y-auto p-4 md:p-6",children:e.jsx(lt,{})})]})]})}function dr(){const{user:a,loading:s}=De();return s?null:a?e.jsx(lt,{}):e.jsx(cs,{to:"/login",replace:!0})}function pr(){const{isAdmin:a,loading:s}=De();return s?null:a?e.jsx(lt,{}):e.jsx(cs,{to:"/dashboard",replace:!0})}function ur(){const{login:a}=De(),s=yn(),[t,i]=y.useState(""),[n,r]=y.useState(""),[l,c]=y.useState(!1),[p,b]=y.useState(!1),[j,u]=y.useState(""),v=async h=>{if(h.preventDefault(),!t||!n){u("Completa todos los campos.");return}b(!0),u("");try{await a(t.trim(),n),V.success("Bienvenido a Munay"),s("/dashboard",{replace:!0})}catch(g){u({"auth/invalid-credential":"Correo o contraseña incorrectos.","auth/user-not-found":"Usuario no encontrado.","auth/wrong-password":"Contraseña incorrecta.","auth/too-many-requests":"Demasiados intentos. Intenta más tarde."}[g.code]??"Error al iniciar sesión. Intenta de nuevo.")}finally{b(!1)}};return e.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{background:"linear-gradient(135deg, #1A365D 0%, #0d2040 100%)"},children:e.jsxs("div",{className:"w-full max-w-sm",children:[e.jsxs("div",{className:"flex flex-col items-center mb-8 text-white",children:[e.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center mb-4",style:{backgroundColor:"rgba(9,214,212,0.2)",border:"1px solid rgba(9,214,212,0.4)"},children:e.jsx(ds,{className:"w-9 h-9 text-white"})}),e.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Munay"}),e.jsx("p",{className:"text-sm mt-1",style:{color:"#72A0C1"},children:"Gestión Quirúrgica Hospitalaria"})]}),e.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-6 text-center",children:"Iniciar sesión"}),e.jsxs("form",{onSubmit:v,className:"space-y-4",children:[j&&e.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg",children:j}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Correo electrónico"}),e.jsx("input",{type:"email",value:t,onChange:h=>i(h.target.value),placeholder:"usuario@hospital.com",className:"input",autoComplete:"username",disabled:p})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Contraseña"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:l?"text":"password",value:n,onChange:h=>r(h.target.value),placeholder:"••••••••",className:"input pr-10",autoComplete:"current-password",disabled:p}),e.jsx("button",{type:"button",onClick:()=>c(!l),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:l?e.jsx(Sn,{className:"w-4 h-4"}):e.jsx(ps,{className:"w-4 h-4"})})]})]}),e.jsx("button",{type:"submit",disabled:p,className:"btn-primary btn w-full justify-center py-2.5 mt-2",children:p?e.jsx(Ye,{className:"w-4 h-4 animate-spin"}):"Ingresar"})]})]}),e.jsxs("p",{className:"text-center text-xs mt-6",style:{color:"#72A0C1"},children:["Munay © ",new Date().getFullYear()," — Sistema Hospitalario"]})]})})}const Mt={mny:{label:"MNY",longLabel:"Hospital Munay",bg:"#1e40af",lightBg:"#dbeafe",textColor:"#1d4ed8",border:"#93c5fd"},jwi:{label:"JWI",longLabel:"JIWAQUI",bg:"#ea580c",lightBg:"#ffedd5",textColor:"#c2410c",border:"#fdba74"},ext:{label:"EXT",longLabel:"Externo",bg:"#16a34a",lightBg:"#dcfce7",textColor:"#15803d",border:"#86efac"},flap:{label:"MNY",longLabel:"Hospital Munay",bg:"#1e40af",lightBg:"#dbeafe",textColor:"#1d4ed8",border:"#93c5fd"},external:{label:"EXT",longLabel:"Externo",bg:"#16a34a",lightBg:"#dcfce7",textColor:"#15803d",border:"#86efac"}};function oe(a){return Mt[a]??Mt.ext}const Ot={mny:{backgroundColor:"#1e40af",borderColor:"#1d4ed8",textColor:"#fff"},jwi:{backgroundColor:"#ea580c",borderColor:"#c2410c",textColor:"#fff"},ext:{backgroundColor:"#16a34a",borderColor:"#15803d",textColor:"#fff"},flap:{backgroundColor:"#1e40af",borderColor:"#1d4ed8",textColor:"#fff"},external:{backgroundColor:"#16a34a",borderColor:"#15803d",textColor:"#fff"}};function ae(a){const s=Object.prototype.toString.call(a);return a instanceof Date||typeof a=="object"&&s==="[object Date]"?new a.constructor(+a):typeof a=="number"||s==="[object Number]"||typeof a=="string"||s==="[object String]"?new Date(a):new Date(NaN)}function Xe(a,s){return a instanceof Date?new a.constructor(s):new Date(s)}function mr(a,s){const t=ae(a);return isNaN(s)?Xe(a,NaN):(s&&t.setDate(t.getDate()+s),t)}const Di=6048e5,xr=864e5,Ti=6e4,Ei=36e5;let hr={};function ws(){return hr}function na(a,s){var c,p,b,j;const t=ws(),i=(s==null?void 0:s.weekStartsOn)??((p=(c=s==null?void 0:s.locale)==null?void 0:c.options)==null?void 0:p.weekStartsOn)??t.weekStartsOn??((j=(b=t.locale)==null?void 0:b.options)==null?void 0:j.weekStartsOn)??0,n=ae(a),r=n.getDay(),l=(r<i?7:0)+r-i;return n.setDate(n.getDate()-l),n.setHours(0,0,0,0),n}function ms(a){return na(a,{weekStartsOn:1})}function Pi(a){const s=ae(a),t=s.getFullYear(),i=Xe(a,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const n=ms(i),r=Xe(a,0);r.setFullYear(t,0,4),r.setHours(0,0,0,0);const l=ms(r);return s.getTime()>=n.getTime()?t+1:s.getTime()>=l.getTime()?t:t-1}function zt(a){const s=ae(a);return s.setHours(0,0,0,0),s}function It(a){const s=ae(a),t=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()));return t.setUTCFullYear(s.getFullYear()),+a-+t}function Mi(a,s){const t=zt(a),i=zt(s),n=+t-It(t),r=+i-It(i);return Math.round((n-r)/xr)}function gr(a){const s=Pi(a),t=Xe(a,0);return t.setFullYear(s,0,4),t.setHours(0,0,0,0),ms(t)}function Pa(a,s){const t=ae(a),i=ae(s),n=t.getTime()-i.getTime();return n<0?-1:n>0?1:n}function fr(a){return a instanceof Date||typeof a=="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Te(a){if(!fr(a)&&typeof a!="number")return!1;const s=ae(a);return!isNaN(Number(s))}function br(a,s){const t=ae(a),i=ae(s),n=t.getFullYear()-i.getFullYear(),r=t.getMonth()-i.getMonth();return n*12+r}function vr(a,s){const t=ae(a),i=ae(s);return t.getFullYear()-i.getFullYear()}function Je(a,s){const t=ae(a),i=ae(s),n=Lt(t,i),r=Math.abs(Mi(t,i));t.setDate(t.getDate()-n*r);const l=+(Lt(t,i)===-n),c=n*(r-l);return c===0?0:c}function Lt(a,s){const t=a.getFullYear()-s.getFullYear()||a.getMonth()-s.getMonth()||a.getDate()-s.getDate()||a.getHours()-s.getHours()||a.getMinutes()-s.getMinutes()||a.getSeconds()-s.getSeconds()||a.getMilliseconds()-s.getMilliseconds();return t<0?-1:t>0?1:t}function yr(a){const s=ae(a);return s.setHours(23,59,59,999),s}function jr(a){const s=ae(a),t=s.getMonth();return s.setFullYear(s.getFullYear(),t+1,0),s.setHours(23,59,59,999),s}function wr(a){const s=ae(a);return+yr(s)==+jr(s)}function Ke(a,s){const t=ae(a),i=ae(s),n=Pa(t,i),r=Math.abs(br(t,i));let l;if(r<1)l=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-n*r);let c=Pa(t,i)===-n;wr(ae(a))&&r===1&&Pa(a,i)===1&&(c=!1),l=n*(r-Number(c))}return l===0?0:l}function Be(a,s){const t=ae(a),i=ae(s),n=Pa(t,i),r=Math.abs(vr(t,i));t.setFullYear(1584),i.setFullYear(1584);const l=Pa(t,i)===-n,c=n*(r-+l);return c===0?0:c}function Nr(a){const s=ae(a),t=Xe(a,0);return t.setFullYear(s.getFullYear(),0,1),t.setHours(0,0,0,0),t}const kr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Cr=(a,s,t)=>{let i;const n=kr[a];return typeof n=="string"?i=n:s===1?i=n.one:i=n.other.replace("{{count}}",s.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function fa(a){return(s={})=>{const t=s.width?String(s.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}}const Fr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Sr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ar={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Dr={date:fa({formats:Fr,defaultWidth:"full"}),time:fa({formats:Sr,defaultWidth:"full"}),dateTime:fa({formats:Ar,defaultWidth:"full"})},Tr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Er=(a,s,t,i)=>Tr[a];function $e(a){return(s,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let n;if(i==="formatting"&&a.formattingValues){const l=a.defaultFormattingWidth||a.defaultWidth,c=t!=null&&t.width?String(t.width):l;n=a.formattingValues[c]||a.formattingValues[l]}else{const l=a.defaultWidth,c=t!=null&&t.width?String(t.width):a.defaultWidth;n=a.values[c]||a.values[l]}const r=a.argumentCallback?a.argumentCallback(s):s;return n[r]}}const Pr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Mr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Or={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},zr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ir={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Lr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},_r=(a,s)=>{const t=Number(a),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},$r={ordinalNumber:_r,era:$e({values:Pr,defaultWidth:"wide"}),quarter:$e({values:Mr,defaultWidth:"wide",argumentCallback:a=>a-1}),month:$e({values:Or,defaultWidth:"wide"}),day:$e({values:zr,defaultWidth:"wide"}),dayPeriod:$e({values:Ir,defaultWidth:"wide",formattingValues:Lr,defaultFormattingWidth:"wide"})};function Re(a){return(s,t={})=>{const i=t.width,n=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],r=s.match(n);if(!r)return null;const l=r[0],c=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],p=Array.isArray(c)?qr(c,u=>u.test(l)):Rr(c,u=>u.test(l));let b;b=a.valueCallback?a.valueCallback(p):p,b=t.valueCallback?t.valueCallback(b):b;const j=s.slice(l.length);return{value:b,rest:j}}}function Rr(a,s){for(const t in a)if(Object.prototype.hasOwnProperty.call(a,t)&&s(a[t]))return t}function qr(a,s){for(let t=0;t<a.length;t++)if(s(a[t]))return t}function Oi(a){return(s,t={})=>{const i=s.match(a.matchPattern);if(!i)return null;const n=i[0],r=s.match(a.parsePattern);if(!r)return null;let l=a.valueCallback?a.valueCallback(r[0]):r[0];l=t.valueCallback?t.valueCallback(l):l;const c=s.slice(n.length);return{value:l,rest:c}}}const Hr=/^(\d+)(th|st|nd|rd)?/i,Br=/\d+/i,Vr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Yr={any:[/^b/i,/^(a|c)/i]},Ur={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Wr={any:[/1/i,/2/i,/3/i,/4/i]},Gr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Qr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Jr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Kr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Zr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},el={ordinalNumber:Oi({matchPattern:Hr,parsePattern:Br,valueCallback:a=>parseInt(a,10)}),era:Re({matchPatterns:Vr,defaultMatchWidth:"wide",parsePatterns:Yr,defaultParseWidth:"any"}),quarter:Re({matchPatterns:Ur,defaultMatchWidth:"wide",parsePatterns:Wr,defaultParseWidth:"any",valueCallback:a=>a+1}),month:Re({matchPatterns:Gr,defaultMatchWidth:"wide",parsePatterns:Qr,defaultParseWidth:"any"}),day:Re({matchPatterns:Xr,defaultMatchWidth:"wide",parsePatterns:Jr,defaultParseWidth:"any"}),dayPeriod:Re({matchPatterns:Kr,defaultMatchWidth:"any",parsePatterns:Zr,defaultParseWidth:"any"})},al={code:"en-US",formatDistance:Cr,formatLong:Dr,formatRelative:Er,localize:$r,match:el,options:{weekStartsOn:0,firstWeekContainsDate:1}};function sl(a){const s=ae(a);return Mi(s,Nr(s))+1}function tl(a){const s=ae(a),t=+ms(s)-+gr(s);return Math.round(t/Di)+1}function zi(a,s){var j,u,v,h;const t=ae(a),i=t.getFullYear(),n=ws(),r=(s==null?void 0:s.firstWeekContainsDate)??((u=(j=s==null?void 0:s.locale)==null?void 0:j.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(v=n.locale)==null?void 0:v.options)==null?void 0:h.firstWeekContainsDate)??1,l=Xe(a,0);l.setFullYear(i+1,0,r),l.setHours(0,0,0,0);const c=na(l,s),p=Xe(a,0);p.setFullYear(i,0,r),p.setHours(0,0,0,0);const b=na(p,s);return t.getTime()>=c.getTime()?i+1:t.getTime()>=b.getTime()?i:i-1}function il(a,s){var c,p,b,j;const t=ws(),i=(s==null?void 0:s.firstWeekContainsDate)??((p=(c=s==null?void 0:s.locale)==null?void 0:c.options)==null?void 0:p.firstWeekContainsDate)??t.firstWeekContainsDate??((j=(b=t.locale)==null?void 0:b.options)==null?void 0:j.firstWeekContainsDate)??1,n=zi(a,s),r=Xe(a,0);return r.setFullYear(n,0,i),r.setHours(0,0,0,0),na(r,s)}function nl(a,s){const t=ae(a),i=+na(t,s)-+il(t,s);return Math.round(i/Di)+1}function Z(a,s){const t=a<0?"-":"",i=Math.abs(a).toString().padStart(s,"0");return t+i}const Ge={y(a,s){const t=a.getFullYear(),i=t>0?t:1-t;return Z(s==="yy"?i%100:i,s.length)},M(a,s){const t=a.getMonth();return s==="M"?String(t+1):Z(t+1,2)},d(a,s){return Z(a.getDate(),s.length)},a(a,s){const t=a.getHours()/12>=1?"pm":"am";switch(s){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(a,s){return Z(a.getHours()%12||12,s.length)},H(a,s){return Z(a.getHours(),s.length)},m(a,s){return Z(a.getMinutes(),s.length)},s(a,s){return Z(a.getSeconds(),s.length)},S(a,s){const t=s.length,i=a.getMilliseconds(),n=Math.trunc(i*Math.pow(10,t-3));return Z(n,s.length)}},ca={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_t={G:function(a,s,t){const i=a.getFullYear()>0?1:0;switch(s){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(a,s,t){if(s==="yo"){const i=a.getFullYear(),n=i>0?i:1-i;return t.ordinalNumber(n,{unit:"year"})}return Ge.y(a,s)},Y:function(a,s,t,i){const n=zi(a,i),r=n>0?n:1-n;if(s==="YY"){const l=r%100;return Z(l,2)}return s==="Yo"?t.ordinalNumber(r,{unit:"year"}):Z(r,s.length)},R:function(a,s){const t=Pi(a);return Z(t,s.length)},u:function(a,s){const t=a.getFullYear();return Z(t,s.length)},Q:function(a,s,t){const i=Math.ceil((a.getMonth()+1)/3);switch(s){case"Q":return String(i);case"QQ":return Z(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(a,s,t){const i=Math.ceil((a.getMonth()+1)/3);switch(s){case"q":return String(i);case"qq":return Z(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(a,s,t){const i=a.getMonth();switch(s){case"M":case"MM":return Ge.M(a,s);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(a,s,t){const i=a.getMonth();switch(s){case"L":return String(i+1);case"LL":return Z(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(a,s,t,i){const n=nl(a,i);return s==="wo"?t.ordinalNumber(n,{unit:"week"}):Z(n,s.length)},I:function(a,s,t){const i=tl(a);return s==="Io"?t.ordinalNumber(i,{unit:"week"}):Z(i,s.length)},d:function(a,s,t){return s==="do"?t.ordinalNumber(a.getDate(),{unit:"date"}):Ge.d(a,s)},D:function(a,s,t){const i=sl(a);return s==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):Z(i,s.length)},E:function(a,s,t){const i=a.getDay();switch(s){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(a,s,t,i){const n=a.getDay(),r=(n-i.weekStartsOn+8)%7||7;switch(s){case"e":return String(r);case"ee":return Z(r,2);case"eo":return t.ordinalNumber(r,{unit:"day"});case"eee":return t.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(n,{width:"short",context:"formatting"});case"eeee":default:return t.day(n,{width:"wide",context:"formatting"})}},c:function(a,s,t,i){const n=a.getDay(),r=(n-i.weekStartsOn+8)%7||7;switch(s){case"c":return String(r);case"cc":return Z(r,s.length);case"co":return t.ordinalNumber(r,{unit:"day"});case"ccc":return t.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(n,{width:"narrow",context:"standalone"});case"cccccc":return t.day(n,{width:"short",context:"standalone"});case"cccc":default:return t.day(n,{width:"wide",context:"standalone"})}},i:function(a,s,t){const i=a.getDay(),n=i===0?7:i;switch(s){case"i":return String(n);case"ii":return Z(n,s.length);case"io":return t.ordinalNumber(n,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(a,s,t){const n=a.getHours()/12>=1?"pm":"am";switch(s){case"a":case"aa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(a,s,t){const i=a.getHours();let n;switch(i===12?n=ca.noon:i===0?n=ca.midnight:n=i/12>=1?"pm":"am",s){case"b":case"bb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(a,s,t){const i=a.getHours();let n;switch(i>=17?n=ca.evening:i>=12?n=ca.afternoon:i>=4?n=ca.morning:n=ca.night,s){case"B":case"BB":case"BBB":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(a,s,t){if(s==="ho"){let i=a.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Ge.h(a,s)},H:function(a,s,t){return s==="Ho"?t.ordinalNumber(a.getHours(),{unit:"hour"}):Ge.H(a,s)},K:function(a,s,t){const i=a.getHours()%12;return s==="Ko"?t.ordinalNumber(i,{unit:"hour"}):Z(i,s.length)},k:function(a,s,t){let i=a.getHours();return i===0&&(i=24),s==="ko"?t.ordinalNumber(i,{unit:"hour"}):Z(i,s.length)},m:function(a,s,t){return s==="mo"?t.ordinalNumber(a.getMinutes(),{unit:"minute"}):Ge.m(a,s)},s:function(a,s,t){return s==="so"?t.ordinalNumber(a.getSeconds(),{unit:"second"}):Ge.s(a,s)},S:function(a,s){return Ge.S(a,s)},X:function(a,s,t){const i=a.getTimezoneOffset();if(i===0)return"Z";switch(s){case"X":return Rt(i);case"XXXX":case"XX":return Ze(i);case"XXXXX":case"XXX":default:return Ze(i,":")}},x:function(a,s,t){const i=a.getTimezoneOffset();switch(s){case"x":return Rt(i);case"xxxx":case"xx":return Ze(i);case"xxxxx":case"xxx":default:return Ze(i,":")}},O:function(a,s,t){const i=a.getTimezoneOffset();switch(s){case"O":case"OO":case"OOO":return"GMT"+$t(i,":");case"OOOO":default:return"GMT"+Ze(i,":")}},z:function(a,s,t){const i=a.getTimezoneOffset();switch(s){case"z":case"zz":case"zzz":return"GMT"+$t(i,":");case"zzzz":default:return"GMT"+Ze(i,":")}},t:function(a,s,t){const i=Math.trunc(a.getTime()/1e3);return Z(i,s.length)},T:function(a,s,t){const i=a.getTime();return Z(i,s.length)}};function $t(a,s=""){const t=a>0?"-":"+",i=Math.abs(a),n=Math.trunc(i/60),r=i%60;return r===0?t+String(n):t+String(n)+s+Z(r,2)}function Rt(a,s){return a%60===0?(a>0?"-":"+")+Z(Math.abs(a)/60,2):Ze(a,s)}function Ze(a,s=""){const t=a>0?"-":"+",i=Math.abs(a),n=Z(Math.trunc(i/60),2),r=Z(i%60,2);return t+n+s+r}const qt=(a,s)=>{switch(a){case"P":return s.date({width:"short"});case"PP":return s.date({width:"medium"});case"PPP":return s.date({width:"long"});case"PPPP":default:return s.date({width:"full"})}},Ii=(a,s)=>{switch(a){case"p":return s.time({width:"short"});case"pp":return s.time({width:"medium"});case"ppp":return s.time({width:"long"});case"pppp":default:return s.time({width:"full"})}},rl=(a,s)=>{const t=a.match(/(P+)(p+)?/)||[],i=t[1],n=t[2];if(!n)return qt(a,s);let r;switch(i){case"P":r=s.dateTime({width:"short"});break;case"PP":r=s.dateTime({width:"medium"});break;case"PPP":r=s.dateTime({width:"long"});break;case"PPPP":default:r=s.dateTime({width:"full"});break}return r.replace("{{date}}",qt(i,s)).replace("{{time}}",Ii(n,s))},ll={p:Ii,P:rl},ol=/^D+$/,cl=/^Y+$/,dl=["D","DD","YY","YYYY"];function pl(a){return ol.test(a)}function ul(a){return cl.test(a)}function ml(a,s,t){const i=xl(a,s,t);if(console.warn(i),dl.includes(a))throw new RangeError(i)}function xl(a,s,t){const i=a[0]==="Y"?"years":"days of the month";return`Use \`${a.toLowerCase()}\` instead of \`${a}\` (in \`${s}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const hl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fl=/^'([^]*?)'?$/,bl=/''/g,vl=/[a-zA-Z]/;function Q(a,s,t){var j,u,v,h,g,x,w,A;const i=ws(),n=(t==null?void 0:t.locale)??i.locale??al,r=(t==null?void 0:t.firstWeekContainsDate)??((u=(j=t==null?void 0:t.locale)==null?void 0:j.options)==null?void 0:u.firstWeekContainsDate)??i.firstWeekContainsDate??((h=(v=i.locale)==null?void 0:v.options)==null?void 0:h.firstWeekContainsDate)??1,l=(t==null?void 0:t.weekStartsOn)??((x=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:x.weekStartsOn)??i.weekStartsOn??((A=(w=i.locale)==null?void 0:w.options)==null?void 0:A.weekStartsOn)??0,c=ae(a);if(!Te(c))throw new RangeError("Invalid time value");let p=s.match(gl).map(m=>{const k=m[0];if(k==="p"||k==="P"){const C=ll[k];return C(m,n.formatLong)}return m}).join("").match(hl).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const k=m[0];if(k==="'")return{isToken:!1,value:yl(m)};if(_t[k])return{isToken:!0,value:m};if(k.match(vl))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:m}});n.localize.preprocessor&&(p=n.localize.preprocessor(c,p));const b={firstWeekContainsDate:r,weekStartsOn:l,locale:n};return p.map(m=>{if(!m.isToken)return m.value;const k=m.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&ul(k)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&pl(k))&&ml(k,s,String(a));const C=_t[k[0]];return C(c,k,n.localize,b)}).join("")}function yl(a){const s=a.match(fl);return s?s[1].replace(bl,"'"):a}function Ee(a,s){const i=kl(a);let n;if(i.date){const p=Cl(i.date,2);n=Fl(p.restDateString,p.year)}if(!n||isNaN(n.getTime()))return new Date(NaN);const r=n.getTime();let l=0,c;if(i.time&&(l=Sl(i.time),isNaN(l)))return new Date(NaN);if(i.timezone){if(c=Al(i.timezone),isNaN(c))return new Date(NaN)}else{const p=new Date(r+l),b=new Date(0);return b.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),b.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),b}return new Date(r+l+c)}const es={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},jl=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,wl=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Nl=/^([+-])(\d{2})(?::?(\d{2}))?$/;function kl(a){const s={},t=a.split(es.dateTimeDelimiter);let i;if(t.length>2)return s;if(/:/.test(t[0])?i=t[0]:(s.date=t[0],i=t[1],es.timeZoneDelimiter.test(s.date)&&(s.date=a.split(es.timeZoneDelimiter)[0],i=a.substr(s.date.length,a.length))),i){const n=es.timezone.exec(i);n?(s.time=i.replace(n[1],""),s.timezone=n[1]):s.time=i}return s}function Cl(a,s){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+s)+"})|(\\d{2}|[+-]\\d{"+(2+s)+"})$)"),i=a.match(t);if(!i)return{year:NaN,restDateString:""};const n=i[1]?parseInt(i[1]):null,r=i[2]?parseInt(i[2]):null;return{year:r===null?n:r*100,restDateString:a.slice((i[1]||i[2]).length)}}function Fl(a,s){if(s===null)return new Date(NaN);const t=a.match(jl);if(!t)return new Date(NaN);const i=!!t[4],n=Sa(t[1]),r=Sa(t[2])-1,l=Sa(t[3]),c=Sa(t[4]),p=Sa(t[5])-1;if(i)return Ml(s,c,p)?Dl(s,c,p):new Date(NaN);{const b=new Date(0);return!El(s,r,l)||!Pl(s,n)?new Date(NaN):(b.setUTCFullYear(s,r,Math.max(n,l)),b)}}function Sa(a){return a?parseInt(a):1}function Sl(a){const s=a.match(wl);if(!s)return NaN;const t=Rs(s[1]),i=Rs(s[2]),n=Rs(s[3]);return Ol(t,i,n)?t*Ei+i*Ti+n*1e3:NaN}function Rs(a){return a&&parseFloat(a.replace(",","."))||0}function Al(a){if(a==="Z")return 0;const s=a.match(Nl);if(!s)return 0;const t=s[1]==="+"?-1:1,i=parseInt(s[2]),n=s[3]&&parseInt(s[3])||0;return zl(i,n)?t*(i*Ei+n*Ti):NaN}function Dl(a,s,t){const i=new Date(0);i.setUTCFullYear(a,0,4);const n=i.getUTCDay()||7,r=(s-1)*7+t+1-n;return i.setUTCDate(i.getUTCDate()+r),i}const Tl=[31,null,31,30,31,30,31,31,30,31,30,31];function Li(a){return a%400===0||a%4===0&&a%100!==0}function El(a,s,t){return s>=0&&s<=11&&t>=1&&t<=(Tl[s]||(Li(a)?29:28))}function Pl(a,s){return s>=1&&s<=(Li(a)?366:365)}function Ml(a,s,t){return s>=1&&s<=53&&t>=0&&t<=6}function Ol(a,s,t){return a===24?s===0&&t===0:t>=0&&t<60&&s>=0&&s<60&&a>=0&&a<25}function zl(a,s){return s>=0&&s<=59}const Il={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},Ll=(a,s,t)=>{let i;const n=Il[a];return typeof n=="string"?i=n:s===1?i=n.one:i=n.other.replace("{{count}}",s.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"en "+i:"hace "+i:i},_l={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},$l={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Rl={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ql={date:fa({formats:_l,defaultWidth:"full"}),time:fa({formats:$l,defaultWidth:"full"}),dateTime:fa({formats:Rl,defaultWidth:"full"})},Hl={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},Bl={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},Vl=(a,s,t,i)=>s.getHours()!==1?Bl[a]:Hl[a],Yl={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},Ul={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},Wl={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},Gl={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},Ql={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},Xl={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},Jl=(a,s)=>Number(a)+"º",Kl={ordinalNumber:Jl,era:$e({values:Yl,defaultWidth:"wide"}),quarter:$e({values:Ul,defaultWidth:"wide",argumentCallback:a=>Number(a)-1}),month:$e({values:Wl,defaultWidth:"wide"}),day:$e({values:Gl,defaultWidth:"wide"}),dayPeriod:$e({values:Ql,defaultWidth:"wide",formattingValues:Xl,defaultFormattingWidth:"wide"})},Zl=/^(\d+)(º)?/i,eo=/\d+/i,ao={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},so={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},to={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},io={any:[/1/i,/2/i,/3/i,/4/i]},no={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},ro={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},lo={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},oo={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},co={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},po={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},uo={ordinalNumber:Oi({matchPattern:Zl,parsePattern:eo,valueCallback:function(a){return parseInt(a,10)}}),era:Re({matchPatterns:ao,defaultMatchWidth:"wide",parsePatterns:so,defaultParseWidth:"any"}),quarter:Re({matchPatterns:to,defaultMatchWidth:"wide",parsePatterns:io,defaultParseWidth:"any",valueCallback:a=>a+1}),month:Re({matchPatterns:no,defaultMatchWidth:"wide",parsePatterns:ro,defaultParseWidth:"any"}),day:Re({matchPatterns:lo,defaultMatchWidth:"wide",parsePatterns:oo,defaultParseWidth:"any"}),dayPeriod:Re({matchPatterns:co,defaultMatchWidth:"any",parsePatterns:po,defaultParseWidth:"any"})},Ne={code:"es",formatDistance:Ll,formatLong:ql,formatRelative:Vl,localize:Kl,match:uo,options:{weekStartsOn:1,firstWeekContainsDate:1}},Ns="patients",ks=a=>{const s=vs(Ue(pe,Ns),ys("createdAt","desc"));return Ha(s,t=>a(t.docs.map(i=>({id:i.id,...i.data()}))))},_i=a=>Va(Ue(pe,Ns),{...a,createdAt:Ve()}),mo=(a,s)=>Ba(He(pe,Ns,a),{...s,updatedAt:Ve()}),xo=a=>Ya(He(pe,Ns,a)),ht="surgeries",Cs=a=>{const s=vs(Ue(pe,ht),ys("date","asc"));return Ha(s,t=>a(t.docs.map(i=>({id:i.id,...i.data()}))))},ho=a=>Va(Ue(pe,ht),{...a,createdAt:Ve()}),as=(a,s)=>Ba(He(pe,ht,a),{...s,updatedAt:Ve()}),Ua="therapies",Fs=a=>{const s=vs(Ue(pe,Ua),ys("date","asc"));return Ha(s,t=>a(t.docs.map(i=>({id:i.id,...i.data()}))))},go=a=>Va(Ue(pe,Ua),{...a,createdAt:Ve()}),Ht=(a,s)=>Ba(He(pe,Ua,a),{...s,updatedAt:Ve()}),Bt=a=>Ya(He(pe,Ua,a)),fo=a=>Promise.all(a.map(s=>Ya(He(pe,Ua,s)))),bo={mny:"bg-blue-100   text-blue-800   ring-blue-200",jwi:"bg-orange-100 text-orange-800 ring-orange-200",ext:"bg-green-100  text-green-800  ring-green-200",flap:"bg-blue-100   text-blue-800   ring-blue-200",external:"bg-green-100  text-green-800  ring-green-200",activo:"bg-emerald-100 text-emerald-800 ring-emerald-200",inactivo:"bg-gray-100   text-gray-600   ring-gray-200",programado:"bg-slate-100  text-slate-700  ring-slate-200",confirmado:"bg-blue-100   text-blue-700   ring-blue-200",asistio:"bg-green-100  text-green-700  ring-green-200",no_asistio:"bg-red-100    text-red-700    ring-red-200",reprogramado:"bg-amber-100  text-amber-700  ring-amber-200",cancelado:"bg-rose-100   text-rose-700   ring-rose-200",llego_tarde:"bg-orange-100 text-orange-700 ring-orange-200",en_espera:"bg-violet-100 text-violet-700 ring-violet-200",completada:"bg-cyan-100   text-cyan-700   ring-cyan-200",parcial:"bg-teal-100   text-teal-700   ring-teal-200",derivado:"bg-purple-100 text-purple-700 ring-purple-200",suspendido:"bg-amber-200  text-amber-800  ring-amber-300",realizado:"bg-emerald-100 text-emerald-700 ring-emerald-200"},vo={mny:"MNY",jwi:"JWI",ext:"EXT",flap:"MNY",external:"EXT",activo:"Activo",inactivo:"Inactivo",programado:"Programado",confirmado:"Confirmado",asistio:"Asistió",no_asistio:"No asistió",reprogramado:"Reprogramado",cancelado:"Cancelado",llego_tarde:"Llegó tarde",en_espera:"En espera",completada:"Completada",parcial:"Parcial",derivado:"Derivado",suspendido:"Suspendido",realizado:"Realizado"};function qe({variant:a,label:s,className:t=""}){const i=bo[a]??"bg-gray-100 text-gray-700 ring-gray-200",n=s??vo[a]??a;return e.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ring-1 ring-inset ${i} ${t}`,children:n})}const ja=[{key:"Cirugía Pediátrica",color:"#dc2626",light:"#fee2e2"},{key:"Electroterapia",color:"#d97706",light:"#fef3c7"},{key:"Fonoaudiología",color:"#7c3aed",light:"#ede9fe"},{key:"Psicología",color:"#db2777",light:"#fce7f3"},{key:"Kinesiología",color:"#0891b2",light:"#cffafe"},{key:"Nutrición",color:"#ea580c",light:"#ffedd5"},{key:"Psicomotricidad",color:"#16a34a",light:"#dcfce7"},{key:"Psicopedagogía",color:"#0f766e",light:"#ccfbf1"},{key:"Odontopediatría",color:"#0d9488",light:"#ccfbf1"},{key:"Ortodoncia",color:"#6d28d9",light:"#ede9fe"},{key:"Ortopedia",color:"#7c2d12",light:"#ffedd5"},{key:"Enfermería",color:"#be185d",light:"#fce7f3"},{key:"Pediatría",color:"#1d4ed8",light:"#dbeafe"},{key:"Terapia Ocupacional",color:"#15803d",light:"#dcfce7"},{key:"Otro",color:"#64748b",light:"#f1f5f9"}],yo=Object.fromEntries(ja.map(a=>[a.key,a])),La={programado:{label:"Programado",short:"PROG",icon:"○",tw:"bg-slate-100 text-slate-700 border-slate-300",hex:"#64748b"},confirmado:{label:"Confirmado",short:"CONF",icon:"●",tw:"bg-blue-100 text-blue-700 border-blue-300",hex:"#2563eb"},asistio:{label:"Asistió",short:"ASIS",icon:"✓",tw:"bg-green-100 text-green-700 border-green-300",hex:"#16a34a"},no_asistio:{label:"No asistió",short:"AUS",icon:"✗",tw:"bg-red-100 text-red-700 border-red-300",hex:"#dc2626"},reprogramado:{label:"Reprogramado",short:"REPR",icon:"↻",tw:"bg-amber-100 text-amber-700 border-amber-300",hex:"#d97706"},cancelado:{label:"Cancelado",short:"CANC",icon:"⊘",tw:"bg-rose-100 text-rose-700 border-rose-300",hex:"#e11d48"},llego_tarde:{label:"Llegó tarde",short:"TARD",icon:"⌛",tw:"bg-orange-100 text-orange-700 border-orange-300",hex:"#ea580c"},en_espera:{label:"En espera",short:"ESP",icon:"⏳",tw:"bg-violet-100 text-violet-700 border-violet-300",hex:"#7c3aed"},completada:{label:"Completada",short:"COMP",icon:"✔",tw:"bg-cyan-100 text-cyan-700 border-cyan-300",hex:"#0891b2"},parcial:{label:"Parcial",short:"PARC",icon:"◑",tw:"bg-teal-100 text-teal-700 border-teal-300",hex:"#0d9488"},derivado:{label:"Derivado",short:"DER",icon:"→",tw:"bg-purple-100 text-purple-700 border-purple-300",hex:"#9333ea"},suspendido:{label:"Suspendido",short:"SUSP",icon:"⏸",tw:"bg-amber-200 text-amber-800 border-amber-400",hex:"#b45309"},realizado:{label:"Realizado",short:"REAL",icon:"✔",tw:"bg-emerald-100 text-emerald-700 border-emerald-300",hex:"#059669"}},gt=["programado","confirmado","asistio","no_asistio","llego_tarde","en_espera","completada","parcial","reprogramado","cancelado","derivado","suspendido"],$i=ja.map(a=>a.key),_a=["asistio","completada","llego_tarde","parcial","realizado"],ma=["no_asistio"],Vt=["reprogramado","cancelado","derivado","suspendido"],Ks=["programado","confirmado","en_espera"],Yt=[];for(let a=7;a<20;a++)Yt.push(`${String(a).padStart(2,"0")}:00`),Yt.push(`${String(a).padStart(2,"0")}:30`);function Ae(a){return yo[a]??{color:"#64748b",light:"#f1f5f9"}}function ta(a){return La[a]??La.programado}function xa(a){if(!a)return"";const s=new Date(a),t=new Date;let i=t.getFullYear()-s.getFullYear(),n=t.getMonth()-s.getMonth();return n<0&&(i--,n+=12),i>=2?`${i}a`:i===1?`1a ${n}m`:`${n}m`}function Ma(a){const s=new Date(a+"T12:00"),t=s.getDay(),i=t===0?-6:1-t,n=new Date(s);n.setDate(s.getDate()+i);const r=[];for(let l=0;l<7;l++){const c=new Date(n);c.setDate(n.getDate()+l),r.push(c.toISOString().slice(0,10))}return r}function Ut(a,s){const t=new Date(a+"T12:00");return t.setDate(t.getDate()+s),t.toISOString().slice(0,10)}const ha=new Date().toISOString().slice(0,10),Zs={1:{mañana:["Fonoaudiología","Kinesiología","Electroterapia","Psicología","Psicomotricidad"],tarde:["Cirugía Pediátrica","Psicomotricidad","Kinesiología","Psicopedagogía","Ortopedia","Psicología"]},2:{mañana:["Psicomotricidad","Psicopedagogía","Fonoaudiología","Kinesiología","Psicología","Pediatría","Odontopediatría"],tarde:["Psicomotricidad","Fonoaudiología","Electroterapia","Ortopedia","Ortodoncia","Kinesiología"]},3:{mañana:["Psicomotricidad","Psicología","Kinesiología","Electroterapia","Psicopedagogía","Fonoaudiología"],tarde:["Fonoaudiología","Psicomotricidad","Kinesiología","Psicopedagogía","Odontopediatría"]},4:{mañana:["Fonoaudiología"],tarde:["Fonoaudiología","Psicomotricidad","Psicopedagogía","Ortopedia","Ortodoncia","Kinesiología"]},5:{mañana:["Psicopedagogía","Psicomotricidad","Fonoaudiología","Kinesiología","Electroterapia","Psicología"],tarde:["Ortopedia","Ortodoncia","Psicopedagogía","Fonoaudiología","Odontopediatría"]},6:{mañana:[],tarde:[]},0:{mañana:[],tarde:[]}},Wt=Object.fromEntries(ja.map(a=>[a.key,a]));function jo(){const{patients:a,setPatients:s,surgeries:t,setSurgeries:i,therapies:n,setTherapies:r}=ye(),l=Q(new Date,"yyyy-MM-dd");y.useEffect(()=>{const x=ks(s),w=Cs(i),A=Fs(r);return()=>{x(),w(),A()}},[]);const c=t.filter(x=>x.date===l&&x.status!=="cancelado"),p=a.length,b=a.filter(x=>oe(x.patientType).label==="MNY").length;t.filter(x=>x.status==="programado").length,t.filter(x=>x.status==="realizado").length;const j=t.filter(x=>x.date>=l&&x.status!=="cancelado").slice(0,5),u=y.useMemo(()=>n.filter(x=>x.date===l),[n,l]),v=y.useMemo(()=>{const x=u.filter(k=>_a.includes(k.status)).length,w=u.filter(k=>ma.includes(k.status)).length,A=u.filter(k=>Ks.includes(k.status)).length,m=u.length?Math.round(x/u.length*100):0;return{total:u.length,atendidos:x,ausentes:w,pendientes:A,pct:m}},[u]),h=y.useMemo(()=>{const x={};for(const w of u)x[w.therapyType]||(x[w.therapyType]=[]),x[w.therapyType].push(w);return Object.entries(x).sort((w,A)=>A[1].length-w[1].length)},[u]),g=y.useMemo(()=>{const x=new Set,w=[],A=[...n].filter(m=>m.date>l).sort((m,k)=>m.date.localeCompare(k.date)||(m.startTime??"").localeCompare(k.startTime??""));for(const m of A){const k=`${m.patientId}__${m.date}`;if(x.has(k)||(x.add(k),w.push(m)),w.length>=5)break}return w},[n,l]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsx(ss,{icon:ba,label:"Total Pacientes",value:p,sub:`${b} Munay`,color:"teal",to:"/pacientes"}),e.jsx(ss,{icon:sa,label:"Cirugías Hoy",value:c.length,sub:"quirófano único",color:"blue",to:"/cirugias"}),e.jsx(ss,{icon:Ea,label:"Terapias Hoy",value:v.total,sub:`${v.pendientes} pendientes`,color:"purple",to:"/terapias"}),e.jsx(ss,{icon:va,label:"Asistencia Hoy",value:`${v.pct}%`,sub:`${v.atendidos} atendidos`,color:"green",to:"/terapias"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(qs,{icon:Gs,label:"Programadas",value:v.total,color:"slate"}),e.jsx(qs,{icon:An,label:"Atendidos",value:v.atendidos,color:"green"}),e.jsx(qs,{icon:Ia,label:"Ausencias",value:v.ausentes,color:"red"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h2",{className:"section-title flex items-center gap-2",children:[e.jsx(Ea,{className:"w-5 h-5 text-purple-600"}),"Terapias de Hoy"]}),e.jsx(Ta,{to:"/terapias",className:"text-sm text-hm-primary hover:underline",children:"Ver módulo"})]}),h.length===0?e.jsx(ts,{message:"No hay terapias registradas para hoy."}):e.jsx("ul",{className:"space-y-2",children:h.map(([x,w])=>{const A=Wt[x]??{color:"#64748b",light:"#f1f5f9"},m=w.filter(C=>_a.includes(C.status)).length,k=w.filter(C=>ma.includes(C.status)).length;return e.jsxs("li",{className:"flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100",style:{background:A.light},children:[e.jsx("div",{className:"w-2 h-8 rounded-full shrink-0",style:{background:A.color}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-bold truncate",style:{color:A.color},children:x}),e.jsxs("p",{className:"text-[11px] text-gray-500 mt-0.5",children:[w.length," ",w.length===1?"paciente":"pacientes",m>0&&` · ${m} atendido${m>1?"s":""}`,k>0&&` · ${k} ausente${k>1?"s":""}`]})]}),e.jsxs("div",{className:"flex -space-x-1",children:[w.slice(0,4).map(C=>e.jsx("div",{title:C.patientName,className:"w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shrink-0",style:{background:A.color},children:(C.patientName??"?")[0].toUpperCase()},C.id)),w.length>4&&e.jsxs("div",{className:"w-6 h-6 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-[9px] font-bold text-white",children:["+",w.length-4]})]})]},x)})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h2",{className:"section-title flex items-center gap-2",children:[e.jsx(sa,{className:"w-5 h-5 text-hm-primary"}),"Cirugías de Hoy"]}),e.jsx("span",{className:"text-sm text-gray-500 capitalize",children:Q(new Date,"EEEE d 'de' MMMM",{locale:Ne})})]}),c.length===0?e.jsx(ts,{message:"No hay cirugías programadas para hoy."}):e.jsx("ul",{className:"space-y-2",children:c.sort((x,w)=>x.startTime.localeCompare(w.startTime)).map(x=>e.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[e.jsx("div",{className:"w-2 h-10 rounded-full shrink-0",style:{backgroundColor:oe(x.patientType).bg}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:x.patientName}),e.jsxs("p",{className:"text-xs text-gray-500",children:[x.startTime," · ",x.surgeryType]})]}),e.jsx(qe,{variant:x.status})]},x.id))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h2",{className:"section-title flex items-center gap-2",children:[e.jsx(Gs,{className:"w-5 h-5 text-hm-primary"}),"Próximas Terapias"]}),e.jsx(Ta,{to:"/terapias",className:"text-sm text-hm-primary hover:underline",children:"Ver módulo"})]}),g.length===0?e.jsx(ts,{message:"No hay terapias próximas registradas."}):e.jsx("ul",{className:"space-y-2",children:g.map(x=>{const w=Wt[x.therapyType]??{color:"#64748b"};return e.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[e.jsx("div",{className:"w-2 h-10 rounded-full shrink-0",style:{background:w.color}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:x.patientName}),e.jsxs("p",{className:"text-xs text-gray-500",children:[Q(new Date(x.date+"T12:00"),"EEE d MMM",{locale:Ne}),x.startTime?` · ${x.startTime}`:""," · ",e.jsx("span",{style:{color:w.color},children:x.therapyType})]})]})]},x.id)})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h2",{className:"section-title flex items-center gap-2",children:[e.jsx(fi,{className:"w-5 h-5 text-hm-primary"}),"Próximas Cirugías"]}),e.jsx(Ta,{to:"/cirugias",className:"text-sm text-hm-primary hover:underline",children:"Ver todas"})]}),j.length===0?e.jsx(ts,{message:"No hay cirugías próximas registradas."}):e.jsx("ul",{className:"space-y-2",children:j.map(x=>e.jsxs("li",{className:"flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition",children:[e.jsx("div",{className:`w-2 h-10 rounded-full shrink-0 ${x.patientType==="flap"?"bg-green-500":"bg-blue-500"}`}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"font-medium text-sm text-gray-800 truncate",children:x.patientName}),e.jsxs("p",{className:"text-xs text-gray-500",children:[Q(new Date(x.date+"T12:00"),"EEE d MMM",{locale:Ne})," · ",x.startTime," · ",x.surgeryType]})]}),e.jsx(qe,{variant:x.status})]},x.id))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsx(Hs,{to:"/pacientes",icon:ba,label:"Registrar Paciente",color:"navy"}),e.jsx(Hs,{to:"/cirugias",icon:sa,label:"Nueva Cirugía",color:"blue"}),e.jsx(Hs,{to:"/terapias",icon:Ea,label:"Agendar Terapia",color:"purple"})]})]})}function ss({icon:a,label:s,value:t,sub:i,color:n,to:r}){const l={teal:"bg-teal-50   text-teal-700",blue:"bg-blue-50   text-blue-700",yellow:"bg-yellow-50 text-yellow-700",green:"bg-green-50  text-green-700",purple:"bg-purple-50 text-purple-700"};return e.jsxs(Ta,{to:r,className:"card hover:shadow-md transition-shadow",children:[e.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${l[n]}`,children:e.jsx(a,{className:"w-5 h-5"})}),e.jsx("p",{className:"text-2xl font-bold text-gray-800",children:t}),e.jsx("p",{className:"text-sm font-medium text-gray-600 mt-0.5",children:s}),e.jsx("p",{className:"text-xs text-gray-400 mt-0.5",children:i})]})}function qs({icon:a,label:s,value:t,color:i}){const n={slate:"bg-slate-50  text-slate-600  border-slate-200",green:"bg-green-50  text-green-600  border-green-200",red:"bg-red-50    text-red-600    border-red-200"};return e.jsxs("div",{className:`flex items-center gap-3 px-4 py-3 rounded-xl border ${n[i]}`,children:[e.jsx(a,{className:"w-5 h-5 shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xl font-bold leading-none",children:t}),e.jsx("p",{className:"text-[10px] uppercase tracking-wide mt-0.5 opacity-70",children:s})]})]})}function Hs({to:a,icon:s,label:t,color:i}){const n={navy:"bg-hm-primary hover:bg-hm-primary-800",blue:"bg-blue-600   hover:bg-blue-700",purple:"bg-purple-600 hover:bg-purple-700"};return e.jsxs(Ta,{to:a,className:`flex items-center gap-3 px-5 py-4 rounded-xl text-white font-medium text-sm transition ${n[i]}`,children:[e.jsx(s,{className:"w-5 h-5"}),t]})}function ts({message:a}){return e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 text-gray-400",children:[e.jsx(fs,{className:"w-8 h-8 mb-2 opacity-40"}),e.jsx("p",{className:"text-sm",children:a})]})}function wa({open:a,onClose:s,title:t,children:i,size:n="md"}){if(y.useEffect(()=>{if(!a)return;const l=c=>{c.key==="Escape"&&s()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[a,s]),!a)return null;const r={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl","2xl":"max-w-5xl"}[n]??"max-w-lg";return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:l=>{l.target===l.currentTarget&&s()},children:e.jsxs("div",{className:`bg-white rounded-xl shadow-2xl w-full ${r} flex flex-col max-h-[90vh]`,children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100",children:[e.jsx("h2",{className:"text-base font-semibold text-gray-800",children:t}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:e.jsx(we,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-5 py-4",children:i})]})})}function $a({open:a,title:s,message:t,onConfirm:i,onCancel:n,confirmLabel:r="Eliminar",danger:l=!0}){return a?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-sm p-6",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${l?"bg-red-100":"bg-yellow-100"}`,children:e.jsx(bi,{className:`w-5 h-5 ${l?"text-red-600":"text-yellow-600"}`})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-800",children:s}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:t})]})]}),e.jsxs("div",{className:"flex gap-3 mt-6 justify-end",children:[e.jsx("button",{onClick:n,className:"btn-secondary btn",children:"Cancelar"}),e.jsx("button",{onClick:i,className:l?"btn-danger btn":"btn-primary btn",children:r})]})]})}):null}function Ri({value:a,onChange:s,placeholder:t="Buscar..."}){return e.jsxs("div",{className:"relative",children:[e.jsx(bs,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),e.jsx("input",{type:"text",value:a,onChange:i=>s(i.target.value),placeholder:t,className:"input pl-9 pr-9"}),a&&e.jsx("button",{onClick:()=>s(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600",children:e.jsx(we,{className:"w-4 h-4"})})]})}var Wa=a=>a.type==="checkbox",aa=a=>a instanceof Date,be=a=>a==null;const qi=a=>typeof a=="object";var le=a=>!be(a)&&!Array.isArray(a)&&qi(a)&&!aa(a),wo=a=>le(a)&&a.target?Wa(a.target)?a.target.checked:a.target.value:a,No=(a,s)=>s.split(".").some((t,i,n)=>!isNaN(Number(t))&&a.has(n.slice(0,i).join("."))),ko=a=>{const s=a.constructor&&a.constructor.prototype;return le(s)&&s.hasOwnProperty("isPrototypeOf")},ft=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ce(a){if(a instanceof Date)return new Date(a);const s=typeof FileList<"u"&&a instanceof FileList;if(ft&&(a instanceof Blob||s))return a;const t=Array.isArray(a);if(!t&&!(le(a)&&ko(a)))return a;const i=t?[]:Object.create(Object.getPrototypeOf(a));for(const n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i[n]=ce(a[n]));return i}var Ss=a=>/^\w*$/.test(a),ne=a=>a===void 0,bt=a=>Array.isArray(a)?a.filter(Boolean):[],vt=a=>bt(a.replace(/["|']|\]/g,"").split(/\.|\[/)),I=(a,s,t)=>{if(!s||!le(a))return t;const n=(Ss(s)?[s]:vt(s)).reduce((r,l)=>be(r)?void 0:r[l],a);return ne(n)||n===a?ne(a[s])?t:a[s]:n},Le=a=>typeof a=="boolean",Fe=a=>typeof a=="function",ie=(a,s,t)=>{let i=-1;const n=Ss(s)?[s]:vt(s),r=n.length,l=r-1;for(;++i<r;){const c=n[i];let p=t;if(i!==l){const b=a[c];p=le(b)||Array.isArray(b)?b:isNaN(+n[i+1])?{}:[]}if(c==="__proto__"||c==="constructor"||c==="prototype")return;a[c]=p,a=a[c]}};const da={BLUR:"blur",FOCUS_OUT:"focusout",SUBMIT:"submit",TRIGGER:"trigger",VALID:"valid"},Oe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Me={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Bs="form",Hi="root",Co=xe.createContext(null);Co.displayName="HookFormControlContext";var Fo=(a,s,t,i=!0)=>{const n={};for(const r in a)Object.defineProperty(n,r,{get:()=>{const l=r;return s._proxyFormState[l]!==Oe.all&&(s._proxyFormState[l]=!i||Oe.all),a[l]}});return n};const So=typeof window<"u"?xe.useLayoutEffect:xe.useEffect;var he=a=>typeof a=="string",Ao=(a,s,t,i,n)=>he(a)?(i&&s.watch.add(a),I(t,a,n)):Array.isArray(a)?a.map(r=>(i&&s.watch.add(r),I(t,r))):(i&&(s.watchAll=!0),t),et=a=>be(a)||!qi(a);function _e(a,s,t=new WeakSet){if(a===s)return!0;if(et(a)||et(s))return Object.is(a,s);if(aa(a)&&aa(s))return Object.is(a.getTime(),s.getTime());const i=Object.keys(a),n=Object.keys(s);if(i.length!==n.length)return!1;if(t.has(a)||t.has(s))return!0;t.add(a),t.add(s);for(const r of i){const l=a[r];if(!(r in s))return!1;if(r!=="ref"){const c=s[r];if(aa(l)&&aa(c)||(le(l)||Array.isArray(l))&&(le(c)||Array.isArray(c))?!_e(l,c,t):!Object.is(l,c))return!1}}return!0}const Do=xe.createContext(null);Do.displayName="HookFormContext";var To=(a,s,t,i,n)=>s?{...t[a],types:{...t[a]&&t[a].types?t[a].types:{},[i]:n||!0}}:{},Oa=a=>Array.isArray(a)?a:[a],Gt=()=>{let a=[];return{get observers(){return a},next:n=>{for(const r of a)r.next&&r.next(n)},subscribe:n=>(a.push(n),{unsubscribe:()=>{a=a.filter(r=>r!==n)}}),unsubscribe:()=>{a=[]}}};function Bi(a,s){const t={};for(const i in a)if(a.hasOwnProperty(i)){const n=a[i],r=s[i];if(n&&le(n)&&r){const l=Bi(n,r);le(l)&&(t[i]=l)}else a[i]&&(t[i]=r)}return t}var me=a=>le(a)&&!Object.keys(a).length,yt=a=>a.type==="file",xs=a=>{if(!ft)return!1;const s=a?a.ownerDocument:0;return a instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},Vi=a=>a.type==="select-multiple",jt=a=>a.type==="radio",Eo=a=>jt(a)||Wa(a),Vs=a=>xs(a)&&a.isConnected;function Po(a,s){const t=s.slice(0,-1).length;let i=0;for(;i<t;){if(be(a)){a=void 0;break}a=a[s[i]],i++}return a}function Mo(a){for(const s in a)if(a.hasOwnProperty(s)&&!ne(a[s]))return!1;return!0}function de(a,s){if(he(s)&&Object.prototype.hasOwnProperty.call(a,s))return delete a[s],a;const t=Array.isArray(s)?s:Ss(s)?[s]:vt(s),i=t.length===1?a:Po(a,t),n=t.length-1,r=t[n];return i&&delete i[r],n!==0&&(le(i)&&me(i)||Array.isArray(i)&&Mo(i))&&de(a,t.slice(0,-1)),a}var Oo=a=>{for(const s in a)if(Fe(a[s]))return!0;return!1};function Yi(a){return Array.isArray(a)||le(a)&&!Oo(a)}function at(a,s={}){for(const t in a){const i=a[t];Yi(i)?(s[t]=Array.isArray(i)?[]:{},at(i,s[t])):ne(i)||(s[t]=!0)}return s}function st(a){if(a!==!1){if(a===!0)return!0;if(Array.isArray(a)){const s=a.map(t=>st(t));return s.some(t=>t!==void 0)?s:void 0}if(le(a)){const s={};for(const t in a){const i=st(a[t]);ne(i)||(s[t]=i)}return Object.keys(s).length?s:void 0}}}function Da(a,s,t){t||(t=at(s));for(const i in a){const n=a[i];if(Yi(n))ne(s)||et(t[i])?t[i]=at(n,Array.isArray(n)?[]:{}):Da(n,be(s)?{}:s[i],t[i]);else{const r=s[i];t[i]=!_e(n,r)}}return st(t)||{}}const Qt={value:!1,isValid:!1},Xt={value:!0,isValid:!0};var Ui=a=>{if(Array.isArray(a)){if(a.length>1){const s=a.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!ne(a[0].attributes.value)?ne(a[0].value)||a[0].value===""?Xt:{value:a[0].value,isValid:!0}:Xt:Qt}return Qt},Wi=(a,{valueAsNumber:s,valueAsDate:t,setValueAs:i})=>ne(a)?a:s?a===""?NaN:a&&+a:t&&he(a)?new Date(a):i?i(a):a;const Jt={isValid:!1,value:null};var Gi=a=>Array.isArray(a)?a.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Jt):Jt;function Kt(a){const s=a.ref;return yt(s)?s.files:jt(s)?Gi(a.refs).value:Vi(s)?[...s.selectedOptions].map(({value:t})=>t):Wa(s)?Ui(a.refs).value:Wi(ne(s.value)?a.ref.value:s.value,a)}var zo=(a,s,t,i)=>{const n={};for(const r of a){const l=I(s,r);l&&ie(n,r,l._f)}return{criteriaMode:t,names:[...a],fields:n,shouldUseNativeValidation:i}},hs=a=>a instanceof RegExp,Aa=a=>ne(a)?a:hs(a)?a.source:le(a)?hs(a.value)?a.value.source:a.value:a,Zt=a=>({isOnSubmit:!a||a===Oe.onSubmit,isOnBlur:a===Oe.onBlur,isOnChange:a===Oe.onChange,isOnAll:a===Oe.all,isOnTouch:a===Oe.onTouched});const ei="AsyncFunction";var Io=a=>!!a&&!!a.validate&&!!(Fe(a.validate)&&a.validate.constructor.name===ei||le(a.validate)&&Object.values(a.validate).find(s=>s.constructor.name===ei)),Lo=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate),ai=(a,s,t)=>!t&&(s.watchAll||s.watch.has(a)||[...s.watch].some(i=>a.startsWith(i)&&/^\.\w+/.test(a.slice(i.length))));const za=(a,s,t,i)=>{for(const n of t||Object.keys(a)){const r=I(a,n);if(r){const{_f:l,...c}=r;if(l){if(l.refs&&l.refs[0]&&s(l.refs[0],n)&&!i)return!0;if(l.ref&&s(l.ref,l.name)&&!i)return!0;if(za(c,s))break}else if(le(c)&&za(c,s))break}}};function si(a,s,t){const i=I(a,t);if(i||Ss(t))return{error:i,name:t};const n=t.split(".");for(;n.length;){const r=n.join("."),l=I(s,r),c=I(a,r);if(l&&!Array.isArray(l)&&t!==r)return{name:t};if(c&&c.type)return{name:r,error:c};if(c&&c.root&&c.root.type)return{name:`${r}.root`,error:c.root};n.pop()}return{name:t}}var _o=(a,s,t,i)=>{t(a);const{name:n,...r}=a;return me(r)||i&&Object.keys(r).length>=Object.keys(s).length||Object.keys(r).find(l=>s[l]===(!i||Oe.all))},$o=(a,s,t)=>!a||!s||a===s||Oa(a).some(i=>i&&(t?i===s:i.startsWith(s)||s.startsWith(i))),Ro=(a,s,t,i,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||a):(t?i.isOnBlur:n.isOnBlur)?!a:(t?i.isOnChange:n.isOnChange)?a:!0,qo=(a,s)=>!bt(I(a,s)).length&&de(a,s),Ho=(a,s,t)=>{const i=Oa(I(a,t));return ie(i,Hi,s[t]),ie(a,t,i),a};function ti(a,s,t="validate"){if(he(a)||Array.isArray(a)&&a.every(he)||Le(a)&&!a)return{type:t,message:he(a)?a:"",ref:s}}var pa=a=>le(a)&&!hs(a)?a:{value:a,message:""},ii=async(a,s,t,i,n,r)=>{const{ref:l,refs:c,required:p,maxLength:b,minLength:j,min:u,max:v,pattern:h,validate:g,name:x,valueAsNumber:w,mount:A}=a._f,m=I(t,x);if(!A||s.has(x))return{};const k=c?c[0]:l,C=S=>{n&&k.reportValidity&&(k.setCustomValidity(Le(S)?"":S||""),k.reportValidity())},E={},_=jt(l),X=Wa(l),G=_||X,q=(w||yt(l))&&ne(l.value)&&ne(m)||xs(l)&&l.value===""||m===""||Array.isArray(m)&&!m.length||w&&typeof m=="number"&&isNaN(m),K=To.bind(null,x,i,E),N=(S,$,H,J=Me.maxLength,U=Me.minLength)=>{const B=S?$:H;E[x]={type:S?J:U,message:B,ref:l,...K(S?J:U,B)}};if(r?!Array.isArray(m)||!m.length:p&&(!G&&(q||be(m))||Le(m)&&!m||X&&!Ui(c).isValid||_&&!Gi(c).isValid)){const{value:S,message:$}=he(p)?{value:!!p,message:p}:pa(p);if(S&&(E[x]={type:Me.required,message:$,ref:k,...K(Me.required,$)},!i))return C($),E}if(!q&&(!be(u)||!be(v))){let S,$;const H=pa(v),J=pa(u);if(!be(m)&&!isNaN(m)){const U=l.valueAsNumber||m&&+m;be(H.value)||(S=U>H.value),be(J.value)||($=U<J.value)}else{const U=l.valueAsDate||new Date(m),B=F=>new Date(new Date().toDateString()+" "+F),re=l.type=="time",se=l.type=="week";he(H.value)&&m&&(S=re?B(m)>B(H.value):se?m>H.value:U>new Date(H.value)),he(J.value)&&m&&($=re?B(m)<B(J.value):se?m<J.value:U<new Date(J.value))}if((S||$)&&(N(!!S,H.message,J.message,Me.max,Me.min),!i))return C(E[x].message),E}if((b||j)&&!q&&(he(m)||r&&Array.isArray(m))){const S=pa(b),$=pa(j),H=!be(S.value)&&m.length>+S.value,J=!be($.value)&&m.length<+$.value;if((H||J)&&(N(H,S.message,$.message),!i))return C(E[x].message),E}if(h&&!q&&he(m)){const{value:S,message:$}=pa(h);if(hs(S)&&!m.match(S)&&(E[x]={type:Me.pattern,message:$,ref:l,...K(Me.pattern,$)},!i))return C($),E}if(g){if(Fe(g)){const S=await g(m,t),$=ti(S,k);if($&&(E[x]={...$,...K(Me.validate,$.message)},!i))return C($.message),E}else if(le(g)){let S={};for(const $ in g){if(!me(S)&&!i)break;const H=ti(await g[$](m,t),k,$);H&&(S={...H,...K($,H.message)},C(H.message),i&&(E[x]=S))}if(!me(S)&&(E[x]={ref:k,...S},!i))return E}}return C(!0),E};const Bo={mode:Oe.onSubmit,reValidateMode:Oe.onChange,shouldFocusError:!0},Qi={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}};function Vo(a={}){let s={...Bo,...a},t={...ce(Qi),isLoading:Fe(s.defaultValues),errors:s.errors||{},disabled:s.disabled||!1},i={},n=le(s.defaultValues)||le(s.values)?ce(s.defaultValues||s.values)||{}:{},r=s.shouldUnregister?{}:ce(n),l={action:!1,mount:!1,watch:!1,keepIsValid:!1},c={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},p,b=0;const j={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},u={...j};let v={...u};const h={array:Gt(),state:Gt()},g=s.criteriaMode===Oe.all,x=o=>d=>{clearTimeout(b),b=setTimeout(o,d)},w=async o=>{if(!l.keepIsValid&&!s.disabled&&(u.isValid||v.isValid||o)){let d;s.resolver?(d=me((await q()).errors),A()):d=await S({fields:i,onlyCheckValid:!0,eventType:da.VALID}),d!==t.isValid&&h.state.next({isValid:d})}},A=(o,d)=>{!s.disabled&&(u.isValidating||u.validatingFields||v.isValidating||v.validatingFields)&&((o||Array.from(c.mount)).forEach(f=>{f&&(d?ie(t.validatingFields,f,d):de(t.validatingFields,f))}),h.state.next({validatingFields:t.validatingFields,isValidating:!me(t.validatingFields)}))},m=()=>{t.dirtyFields=Da(n,r)},k=(o,d=[],f,D,P=!0,M=!0)=>{if(D&&f&&!s.disabled){if(l.action=!0,M&&Array.isArray(I(i,o))){const O=f(I(i,o),D.argA,D.argB);P&&ie(i,o,O)}if(M&&Array.isArray(I(t.errors,o))){const O=f(I(t.errors,o),D.argA,D.argB);P&&ie(t.errors,o,O),qo(t.errors,o)}if((u.touchedFields||v.touchedFields)&&M&&Array.isArray(I(t.touchedFields,o))){const O=f(I(t.touchedFields,o),D.argA,D.argB);P&&ie(t.touchedFields,o,O)}(u.dirtyFields||v.dirtyFields)&&m(),h.state.next({name:o,isDirty:H(o,d),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else ie(r,o,d)},C=(o,d)=>{ie(t.errors,o,d),h.state.next({errors:t.errors})},E=o=>{t.errors=o,h.state.next({errors:t.errors,isValid:!1})},_=(o,d,f,D)=>{const P=I(i,o);if(P){const M=ne(I(r,o)),O=I(r,o,ne(f)?I(n,o):f);ne(O)||D&&D.defaultChecked||d?ie(r,o,d?O:Kt(P._f)):B(o,O),l.mount&&!l.action&&(w(),M&&t.isDirty&&(u.isDirty||v.isDirty)&&(H()||(t.isDirty=!1,h.state.next({...t}))))}},X=(o,d,f,D,P)=>{let M=!1,O=!1;const z={name:o};if(!s.disabled){if(!f||D){(u.isDirty||v.isDirty)&&(O=t.isDirty,t.isDirty=z.isDirty=H(),M=O!==z.isDirty);const W=_e(I(n,o),d);O=!!I(t.dirtyFields,o),W?de(t.dirtyFields,o):ie(t.dirtyFields,o,!0),z.dirtyFields=t.dirtyFields,M=M||(u.dirtyFields||v.dirtyFields)&&O!==!W}if(f){const W=I(t.touchedFields,o);W||(ie(t.touchedFields,o,f),z.touchedFields=t.touchedFields,M=M||(u.touchedFields||v.touchedFields)&&W!==f)}M&&P&&h.state.next(z)}return M?z:{}},G=(o,d,f,D)=>{const P=I(t.errors,o),M=(u.isValid||v.isValid)&&Le(d)&&t.isValid!==d;if(s.delayError&&f?(p=x(()=>C(o,f)),p(s.delayError)):(clearTimeout(b),p=null,f?ie(t.errors,o,f):de(t.errors,o)),(f?!_e(P,f):P)||!me(D)||M){const O={...D,...M&&Le(d)?{isValid:d}:{},errors:t.errors,name:o};t={...t,...O},h.state.next(O)}},q=async o=>(A(o,!0),await s.resolver(r,s.context,zo(o||c.mount,i,s.criteriaMode,s.shouldUseNativeValidation))),K=async o=>{const{errors:d}=await q(o);if(A(o),o)for(const f of o){const D=I(d,f);D?ie(t.errors,f,D):de(t.errors,f)}else t.errors=d;return d},N=async({name:o,eventType:d})=>{if(a.validate){const f=await a.validate({formValues:r,formState:t,name:o,eventType:d});if(le(f))for(const D in f)f[D]&&Ce(`${Bs}.${D}`,{message:he(f.message)?f.message:"",type:Me.validate});else he(f)||!f?Ce(Bs,{message:f||"",type:Me.validate}):ra(Bs);return f}return!0},S=async({fields:o,onlyCheckValid:d,name:f,eventType:D,context:P={valid:!0,runRootValidation:!1}})=>{if(a.validate&&(P.runRootValidation=!0,!await N({name:f,eventType:D})&&(P.valid=!1,d)))return P.valid;for(const M in o){const O=o[M];if(O){const{_f:z,...W}=O;if(z){const fe=c.array.has(z.name),Ie=O._f&&Io(O._f);Ie&&u.validatingFields&&A([z.name],!0);const je=await ii(O,c.disabled,r,g,s.shouldUseNativeValidation&&!d,fe);if(Ie&&u.validatingFields&&A([z.name]),je[z.name]&&(P.valid=!1,d)||(!d&&(I(je,z.name)?fe?Ho(t.errors,je,z.name):ie(t.errors,z.name,je[z.name]):de(t.errors,z.name)),a.shouldUseNativeValidation&&je[z.name]))break}!me(W)&&await S({context:P,onlyCheckValid:d,fields:W,name:M,eventType:D})}}return P.valid},$=()=>{for(const o of c.unMount){const d=I(i,o);d&&(d._f.refs?d._f.refs.every(f=>!Vs(f)):!Vs(d._f.ref))&&la(o)}c.unMount=new Set},H=(o,d)=>!s.disabled&&(o&&d&&ie(r,o,d),!_e(ee(),n)),J=(o,d,f)=>Ao(o,c,{...l.mount?r:ne(d)?n:he(o)?{[o]:d}:d},f,d),U=o=>bt(I(l.mount?r:n,o,s.shouldUnregister?I(n,o,[]):[])),B=(o,d,f={})=>{const D=I(i,o);let P=d;if(D){const M=D._f;M&&(!M.disabled&&ie(r,o,Wi(d,M)),P=xs(M.ref)&&be(d)?"":d,Vi(M.ref)?[...M.ref.options].forEach(O=>O.selected=P.includes(O.value)):M.refs?Wa(M.ref)?M.refs.forEach(O=>{(!O.defaultChecked||!O.disabled)&&(Array.isArray(P)?O.checked=!!P.find(z=>z===O.value):O.checked=P===O.value||!!P)}):M.refs.forEach(O=>O.checked=O.value===P):yt(M.ref)?M.ref.value="":(M.ref.value=P,M.ref.type||h.state.next({name:o,values:ce(r)})))}(f.shouldDirty||f.shouldTouch)&&X(o,P,f.shouldTouch,f.shouldDirty,!0),f.shouldValidate&&Y(o)},re=(o,d,f)=>{for(const D in d){if(!d.hasOwnProperty(D))return;const P=d[D],M=o+"."+D,O=I(i,M);(c.array.has(o)||le(P)||O&&!O._f)&&!aa(P)?re(M,P,f):B(M,P,f)}},se=(o,d,f={})=>{const D=I(i,o),P=c.array.has(o),M=ce(d),O=I(r,o),z=_e(O,M);if(ie(r,o,M),P)h.array.next({name:o,values:ce(r)}),(u.isDirty||u.dirtyFields||v.isDirty||v.dirtyFields)&&f.shouldDirty&&(m(),h.state.next({name:o,dirtyFields:t.dirtyFields,isDirty:H(o,M)}));else{const W=Array.isArray(M)&&!M.length||me(M);!D||D._f||be(M)||W?B(o,M,f):re(o,M,f)}if(!z){const W=ai(o,c);h.state.next({...W&&t,name:l.mount||W?o:void 0,values:ce(r)})}},F=o=>{const d=Fe(o)?o(r):o;_e(r,d)||(r={...r,...d},h.state.next({...t,values:r}))},T=async o=>{l.mount=!0;const d=o.target;let f=d.name,D=!0;const P=I(i,f),M=W=>{D=Number.isNaN(W)||aa(W)&&isNaN(W.getTime())||_e(W,I(r,f,W))},O=Zt(s.mode),z=Zt(s.reValidateMode);if(P){let W,fe;const Ie=d.type?Kt(P._f):wo(o),je=o.type===da.BLUR||o.type===da.FOCUS_OUT,xn=!Lo(P._f)&&!a.validate&&!s.resolver&&!I(t.errors,f)&&!P._f.deps||Ro(je,I(t.touchedFields,f),t.isSubmitted,z,O),Ls=ai(f,c,je);ie(r,f,Ie),je?(!d||!d.readOnly)&&(P._f.onBlur&&P._f.onBlur(o),p&&p(0)):P._f.onChange&&P._f.onChange(o);const _s=X(f,Ie,je),hn=!me(_s)||Ls;if(!je&&h.state.next({name:f,type:o.type,values:ce(r)}),xn)return(u.isValid||v.isValid)&&(s.mode==="onBlur"?je&&w():je||w()),hn&&h.state.next({name:f,...Ls?{}:_s});if(!s.resolver&&a.validate&&await N({name:f,eventType:o.type}),!je&&Ls&&h.state.next({...t}),s.resolver){const{errors:Ft}=await q([f]);if(A([f]),M(Ie),D){const gn=si(t.errors,i,f),St=si(Ft,i,gn.name||f);W=St.error,f=St.name,fe=me(Ft)}}else A([f],!0),W=(await ii(P,c.disabled,r,g,s.shouldUseNativeValidation))[f],A([f]),M(Ie),D&&(W?fe=!1:(u.isValid||v.isValid)&&(fe=await S({fields:i,onlyCheckValid:!0,name:f,eventType:o.type})));D&&(P._f.deps&&(!Array.isArray(P._f.deps)||P._f.deps.length>0)&&Y(P._f.deps),G(f,fe,W,_s))}},L=(o,d)=>{if(I(t.errors,d)&&o.focus)return o.focus(),1},Y=async(o,d={})=>{let f,D;const P=Oa(o);if(s.resolver){const M=await K(ne(o)?o:P);f=me(M),D=o?!P.some(O=>I(M,O)):f}else o?(D=(await Promise.all(P.map(async M=>{const O=I(i,M);return await S({fields:O&&O._f?{[M]:O}:O,eventType:da.TRIGGER})}))).every(Boolean),!(!D&&!t.isValid)&&w()):D=f=await S({fields:i,name:o,eventType:da.TRIGGER});return h.state.next({...!he(o)||(u.isValid||v.isValid)&&f!==t.isValid?{}:{name:o},...s.resolver||!o?{isValid:f}:{},errors:t.errors}),d.shouldFocus&&!D&&za(i,L,o?P:c.mount),D},ee=(o,d)=>{let f={...l.mount?r:n};return d&&(f=Bi(d.dirtyFields?t.dirtyFields:t.touchedFields,f)),ne(o)?f:he(o)?I(f,o):o.map(D=>I(f,D))},ge=(o,d)=>({invalid:!!I((d||t).errors,o),isDirty:!!I((d||t).dirtyFields,o),error:I((d||t).errors,o),isValidating:!!I(t.validatingFields,o),isTouched:!!I((d||t).touchedFields,o)}),ra=o=>{const d=o?Oa(o):void 0;d==null||d.forEach(f=>de(t.errors,f)),d?d.forEach(f=>{h.state.next({name:f,errors:t.errors})}):h.state.next({errors:{}})},Ce=(o,d,f)=>{const D=(I(i,o,{_f:{}})._f||{}).ref,P=I(t.errors,o)||{},{ref:M,message:O,type:z,...W}=P;ie(t.errors,o,{...W,...d,ref:D}),h.state.next({name:o,errors:t.errors,isValid:!1}),f&&f.shouldFocus&&D&&D.focus&&D.focus()},We=(o,d)=>Fe(o)?h.state.subscribe({next:f=>"values"in f&&o(f.values||J(void 0,d),f)}):J(o,d,!0),Na=o=>h.state.subscribe({next:d=>{if($o(o.name,d.name,o.exact)&&_o(d,o.formState||u,Is,o.reRenderRoot)){const f={...r};o.callback({values:f,...t,...d,defaultValues:n})}}}).unsubscribe,Ms=o=>(l.mount=!0,v={...v,...o.formState},Na({...o,formState:{...j,...o.formState}})),la=(o,d={})=>{for(const f of o?Oa(o):c.mount)c.mount.delete(f),c.array.delete(f),d.keepValue||(de(i,f),de(r,f)),!d.keepError&&de(t.errors,f),!d.keepDirty&&de(t.dirtyFields,f),!d.keepTouched&&de(t.touchedFields,f),!d.keepIsValidating&&de(t.validatingFields,f),!s.shouldUnregister&&!d.keepDefaultValue&&de(n,f);h.state.next({values:ce(r)}),h.state.next({...t,...d.keepDirty?{isDirty:H()}:{}}),!d.keepIsValid&&w()},ka=({disabled:o,name:d})=>{if(Le(o)&&l.mount||o||c.disabled.has(d)){const P=c.disabled.has(d)!==!!o;o?c.disabled.add(d):c.disabled.delete(d),P&&l.mount&&!l.action&&w()}},Ca=(o,d={})=>{let f=I(i,o);const D=Le(d.disabled)||Le(s.disabled),P=!c.registerName.has(o)&&f&&f._f&&!f._f.mount;return ie(i,o,{...f||{},_f:{...f&&f._f?f._f:{ref:{name:o}},name:o,mount:!0,...d}}),c.mount.add(o),f&&!P?ka({disabled:Le(d.disabled)?d.disabled:s.disabled,name:o}):_(o,!0,d.value),{...D?{disabled:d.disabled||s.disabled}:{},...s.progressive?{required:!!d.required,min:Aa(d.min),max:Aa(d.max),minLength:Aa(d.minLength),maxLength:Aa(d.maxLength),pattern:Aa(d.pattern)}:{},name:o,onChange:T,onBlur:T,ref:M=>{if(M){c.registerName.add(o),Ca(o,d),c.registerName.delete(o),f=I(i,o);const O=ne(M.value)&&M.querySelectorAll&&M.querySelectorAll("input,select,textarea")[0]||M,z=Eo(O),W=f._f.refs||[];if(z?W.find(fe=>fe===O):O===f._f.ref)return;ie(i,o,{_f:{...f._f,...z?{refs:[...W.filter(Vs),O,...Array.isArray(I(n,o))?[{}]:[]],ref:{type:O.type,name:o}}:{ref:O}}}),_(o,!1,void 0,O)}else f=I(i,o,{}),f._f&&(f._f.mount=!1),(s.shouldUnregister||d.shouldUnregister)&&!(No(c.array,o)&&l.action)&&c.unMount.add(o)}}},Fa=()=>s.shouldFocusError&&za(i,L,c.mount),Os=o=>{Le(o)&&(h.state.next({disabled:o}),za(i,(d,f)=>{const D=I(i,f);D&&(d.disabled=D._f.disabled||o,Array.isArray(D._f.refs)&&D._f.refs.forEach(P=>{P.disabled=D._f.disabled||o}))},0,!1))},Qa=(o,d)=>async f=>{let D;f&&(f.preventDefault&&f.preventDefault(),f.persist&&f.persist());let P=ce(r);if(h.state.next({isSubmitting:!0}),s.resolver){const{errors:M,values:O}=await q();A(),t.errors=M,P=ce(O)}else await S({fields:i,eventType:da.SUBMIT});if(c.disabled.size)for(const M of c.disabled)de(P,M);if(de(t.errors,Hi),me(t.errors)){h.state.next({errors:{}});try{await o(P,f)}catch(M){D=M}}else d&&await d({...t.errors},f),Fa(),setTimeout(Fa);if(h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:me(t.errors)&&!D,submitCount:t.submitCount+1,errors:t.errors}),D)throw D},zs=(o,d={})=>{I(i,o)&&(ne(d.defaultValue)?se(o,ce(I(n,o))):(se(o,d.defaultValue),ie(n,o,ce(d.defaultValue))),d.keepTouched||de(t.touchedFields,o),d.keepDirty||(de(t.dirtyFields,o),t.isDirty=d.defaultValue?H(o,ce(I(n,o))):H()),d.keepError||(de(t.errors,o),u.isValid&&w()),h.state.next({...t}))},Xa=(o,d={})=>{const f=o?ce(o):n,D=ce(f),P=me(o),M=P?n:D;if(d.keepDefaultValues||(n=f),!d.keepValues){if(d.keepDirtyValues){const O=new Set([...c.mount,...Object.keys(Da(n,r))]);for(const z of Array.from(O)){const W=I(t.dirtyFields,z),fe=I(r,z),Ie=I(M,z);W&&!ne(fe)?ie(M,z,fe):!W&&!ne(Ie)&&se(z,Ie)}}else{if(ft&&ne(o))for(const O of c.mount){const z=I(i,O);if(z&&z._f){const W=Array.isArray(z._f.refs)?z._f.refs[0]:z._f.ref;if(xs(W)){const fe=W.closest("form");if(fe){fe.reset();break}}}}if(d.keepFieldsRef)for(const O of c.mount)se(O,I(M,O));else i={}}r=s.shouldUnregister?d.keepDefaultValues?ce(n):{}:ce(M),h.array.next({values:{...M}}),h.state.next({values:{...M}})}c={mount:d.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!u.isValid||!!d.keepIsValid||!!d.keepDirtyValues||!s.shouldUnregister&&!me(M),l.watch=!!s.shouldUnregister,l.keepIsValid=!!d.keepIsValid,l.action=!1,d.keepErrors||(t.errors={}),h.state.next({submitCount:d.keepSubmitCount?t.submitCount:0,isDirty:P?!1:d.keepDirty?t.isDirty:!!(d.keepDefaultValues&&!_e(o,n)),isSubmitted:d.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:P?{}:d.keepDirtyValues?d.keepDefaultValues&&r?Da(n,r):t.dirtyFields:d.keepDefaultValues&&o?Da(n,o):d.keepDirty?t.dirtyFields:{},touchedFields:d.keepTouched?t.touchedFields:{},errors:d.keepErrors?t.errors:{},isSubmitSuccessful:d.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},oa=(o,d)=>Xa(Fe(o)?o(r):o,{...s.resetOptions,...d}),Ja=(o,d={})=>{const f=I(i,o),D=f&&f._f;if(D){const P=D.refs?D.refs[0]:D.ref;P.focus&&setTimeout(()=>{P.focus(),d.shouldSelect&&Fe(P.select)&&P.select()})}},Is=o=>{t={...t,...o}},Ka={control:{register:Ca,unregister:la,getFieldState:ge,handleSubmit:Qa,setError:Ce,_subscribe:Na,_runSchema:q,_updateIsValidating:A,_focusError:Fa,_getWatch:J,_getDirty:H,_setValid:w,_setFieldArray:k,_setDisabledField:ka,_setErrors:E,_getFieldArray:U,_reset:Xa,_resetDefaultValues:()=>Fe(s.defaultValues)&&s.defaultValues().then(o=>{oa(o,s.resetOptions),h.state.next({isLoading:!1})}),_removeUnmounted:$,_disableForm:Os,_subjects:h,_proxyFormState:u,get _fields(){return i},get _formValues(){return r},get _state(){return l},set _state(o){l=o},get _defaultValues(){return n},get _names(){return c},set _names(o){c=o},get _formState(){return t},get _options(){return s},set _options(o){s={...s,...o}}},subscribe:Ms,trigger:Y,register:Ca,handleSubmit:Qa,watch:We,setValue:se,setValues:F,getValues:ee,reset:oa,resetField:zs,clearErrors:ra,unregister:la,setError:Ce,setFocus:Ja,getFieldState:ge};return{...Ka,formControl:Ka}}function As(a={}){const s=xe.useRef(void 0),t=xe.useRef(void 0),[i,n]=xe.useState(()=>({...ce(Qi),isLoading:Fe(a.defaultValues),errors:a.errors||{},disabled:a.disabled||!1,defaultValues:Fe(a.defaultValues)?void 0:a.defaultValues}));if(!s.current)if(a.formControl)s.current={...a.formControl,formState:i},a.defaultValues&&!Fe(a.defaultValues)&&a.formControl.reset(a.defaultValues,a.resetOptions);else{const{formControl:l,...c}=Vo(a);s.current={...c,formState:i}}const r=s.current.control;return r._options=a,So(()=>{const l=r._subscribe({formState:r._proxyFormState,callback:()=>n({...r._formState}),reRenderRoot:!0});return n(c=>({...c,isReady:!0})),r._formState.isReady=!0,l},[r]),xe.useEffect(()=>r._disableForm(a.disabled),[r,a.disabled]),xe.useEffect(()=>{a.mode&&(r._options.mode=a.mode),a.reValidateMode&&(r._options.reValidateMode=a.reValidateMode)},[r,a.mode,a.reValidateMode]),xe.useEffect(()=>{a.errors&&(r._setErrors(a.errors),r._focusError())},[r,a.errors]),xe.useEffect(()=>{a.shouldUnregister&&r._subjects.state.next({values:r._getWatch()})},[r,a.shouldUnregister]),xe.useEffect(()=>{if(r._proxyFormState.isDirty){const l=r._getDirty();l!==i.isDirty&&r._subjects.state.next({isDirty:l})}},[r,i.isDirty]),xe.useEffect(()=>{var l;a.values&&!_e(a.values,t.current)?(r._reset(a.values,{keepFieldsRef:!0,...r._options.resetOptions}),!((l=r._options.resetOptions)===null||l===void 0)&&l.keepIsValid||r._setValid(),t.current=a.values,n(c=>({...c}))):r._resetDefaultValues()},[r,a.values]),xe.useEffect(()=>{r._state.mount||(r._setValid(),r._state.mount=!0),r._state.watch&&(r._state.watch=!1,r._subjects.state.next({...r._formState})),r._removeUnmounted()}),s.current.formState=xe.useMemo(()=>Fo(i,r),[r,i]),s.current}const ls=["FLAP Izquierdo","FLAP Derecho","FLAP Bilateral","FLA Izquierdo","FLA Derecho","FLA Bilateral","Fisura Palatina"];function ni(a){return a?ls.includes(a)?a:"__otro__":""}function Yo(a){if(!a)return null;const s=Ee(a);if(!Te(s))return null;const t=new Date,i=Be(t,s),n=new Date(s.getFullYear()+i,s.getMonth(),s.getDate()),r=Ke(t,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Je(t,l);return{years:i,months:r,days:c}}function Uo({years:a,months:s,days:t}){const i=[];return a>0&&i.push(`${a} ${a===1?"año":"años"}`),s>0&&i.push(`${s} ${s===1?"mes":"meses"}`),(t>0||i.length===0)&&i.push(`${t} ${t===1?"día":"días"}`),i.join(", ")}function Xi({initial:a,onSubmit:s,onCancel:t,busy:i}){const{register:n,handleSubmit:r,reset:l,watch:c,formState:{errors:p}}=As({defaultValues:a??{patientCode:"",fullName:"",birthDate:"",diagnosis:"",idNumber:"",sex:"",address:"",guardian:"",guardianIdNumber:"",guardianPhone:"",allergies:"",clinicalHistory:"",patientType:"mny"}});y.useEffect(()=>{a&&(l(a),g(ni(a.diagnosis)),w(a.diagnosis&&!ls.includes(a.diagnosis)?a.diagnosis:""))},[a]);const b=c("birthDate"),j=c("patientType"),u=Yo(b),v=oe(j),[h,g]=y.useState(ni(a==null?void 0:a.diagnosis)),[x,w]=y.useState(a!=null&&a.diagnosis&&!ls.includes(a.diagnosis)?a.diagnosis:""),[A,m]=y.useState(!1),k=C=>{const E=h==="__otro__"?x.trim():h;if(!E){m(!0);return}m(!1),s({...C,diagnosis:E})};return e.jsxs("form",{onSubmit:r(k),className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"sm:col-span-2 form-group mb-0",children:[e.jsx("label",{className:"label",children:"Nombre completo *"}),e.jsx("input",{className:`input ${p.fullName?"input-error":""}`,placeholder:"Nombre y apellidos",...n("fullName",{required:"Requerido"})}),p.fullName&&e.jsx("p",{className:"error-msg",children:p.fullName.message})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Tipo de paciente *"}),e.jsxs("select",{className:"input",...n("patientType",{required:!0}),children:[e.jsx("option",{value:"mny",children:"MNY — Hospital Munay"}),e.jsx("option",{value:"jwi",children:"JWI — Fundación JIWAQUI"}),e.jsx("option",{value:"ext",children:"EXT — Externo"})]})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Código de paciente"}),e.jsxs("div",{className:"flex",children:[e.jsxs("span",{className:"inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 text-sm font-bold select-none",style:{backgroundColor:v.lightBg,color:v.bg},children:[v.label," -"]}),e.jsx("input",{className:"input rounded-l-none flex-1",placeholder:"ej: 001",...n("patientCode")})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Número correlativo para buscar al paciente por código."})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Fecha de nacimiento"}),e.jsx("input",{type:"date",className:"input",...n("birthDate")}),u!==null&&e.jsxs("p",{className:"text-xs font-medium mt-1",style:{color:"#09D6D4"},children:["Edad: ",e.jsx("span",{className:"font-bold",children:Uo(u)})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Sexo"}),e.jsxs("select",{className:"input",...n("sex"),children:[e.jsx("option",{value:"",children:"— Seleccionar —"}),e.jsx("option",{value:"masculino",children:"Masculino"}),e.jsx("option",{value:"femenino",children:"Femenino"})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"CI del paciente"}),e.jsx("input",{className:"input",placeholder:"Ej: 12345678",...n("idNumber")})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Diagnóstico *"}),e.jsxs("select",{className:`input ${A?"input-error":""}`,value:h,onChange:C=>{g(C.target.value),m(!1),C.target.value!=="__otro__"&&w("")},children:[e.jsx("option",{value:"",children:"— Seleccionar diagnóstico —"}),ls.map(C=>e.jsx("option",{value:C,children:C},C)),e.jsx("option",{value:"__otro__",children:"Otro (especificar)"})]}),h==="__otro__"&&e.jsx("input",{className:`input mt-2 ${A?"input-error":""}`,placeholder:"Especificar diagnóstico...",value:x,onChange:C=>{w(C.target.value),m(!1)}}),A&&e.jsx("p",{className:"error-msg",children:"Selecciona o especifica el diagnóstico"})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Dirección"}),e.jsx("input",{className:"input",placeholder:"Calle, ciudad, región",...n("address")})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"sm:col-span-1 form-group mb-0",children:[e.jsx("label",{className:"label",children:"Responsable / Tutor"}),e.jsx("input",{className:"input",placeholder:"Nombre del responsable",...n("guardian")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"CI del responsable"}),e.jsx("input",{className:"input",placeholder:"Ej: 12345678",...n("guardianIdNumber")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Teléfono del responsable"}),e.jsx("input",{className:"input",placeholder:"+591 7XXXXXXX",...n("guardianPhone")})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Alergias / Medicamentos"}),e.jsx("textarea",{rows:2,className:"input resize-none",placeholder:"Alergias conocidas, medicamentos actuales...",...n("allergies")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Historial clínico"}),e.jsx("textarea",{rows:3,className:"input resize-none",placeholder:"Antecedentes, cirugías previas, observaciones...",...n("clinicalHistory")})]}),e.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[e.jsx("button",{type:"button",onClick:t,className:"btn-secondary btn",children:"Cancelar"}),e.jsx("button",{type:"submit",disabled:i,className:"btn-primary btn",children:i?e.jsx(Ye,{className:"w-4 h-4 animate-spin"}):a!=null&&a.id?"Guardar cambios":"Registrar paciente"})]})]})}const Ji={historia_clinica:{label:"Historia Clínica",specialty:"Medicina",icon:"📋",color:"#2563eb",light:"#dbeafe"},epicrisis:{label:"Epicrisis",specialty:"Cirugía",icon:"📄",color:"#7c3aed",light:"#ede9fe"},ficha_social:{label:"Ficha Social",specialty:"Trabajo Social",icon:"👥",color:"#0891b2",light:"#cffafe"},historia_quirurgica:{label:"Historia Quirúrgica",specialty:"Cirugía",icon:"🔬",color:"#dc2626",light:"#fee2e2"},evolucion:{label:"Evolución",specialty:"Medicina",icon:"📝",color:"#16a34a",light:"#dcfce7"},consentimiento:{label:"Consentimiento",specialty:"Medicina",icon:"✍️",color:"#d97706",light:"#fef3c7"}},Wo=Object.entries(Ji).map(([a,s])=>({value:a,...s})),Ra={draft:{label:"Borrador",tw:"bg-slate-100 text-slate-700 border-slate-300",color:"#64748b"},in_progress:{label:"En progreso",tw:"bg-amber-100 text-amber-700 border-amber-300",color:"#d97706"},completed:{label:"Completado",tw:"bg-green-100 text-green-700 border-green-300",color:"#16a34a"},signed:{label:"Firmado",tw:"bg-blue-100 text-blue-700 border-blue-300",color:"#2563eb"},archived:{label:"Archivado",tw:"bg-gray-100 text-gray-500 border-gray-200",color:"#6b7280"}},Ki=Object.entries(Ra).map(([a,s])=>({value:a,label:s.label})),Zi=a=>Ue(pe,"patients",a,"documents"),en=(a,s)=>He(pe,"patients",a,"documents",s),an=(a,s)=>Va(Zi(a),{patientId:a,documentType:s.documentType??"historia_clinica",specialty:s.specialty??"medicina",status:s.status??"draft",version:1,metadata:{printable:!0,signed:!1,locked:!1,...s.metadata},clinicalData:s.clinicalData??{},createdBy:s.createdBy??{uid:"",name:""},updatedBy:s.updatedBy??{uid:"",name:""},createdAt:Ve(),updatedAt:Ve()}),tt=(a,s,t)=>Ba(en(a,s),{...t,updatedAt:Ve()}),Go=(a,s)=>Ya(en(a,s)),Qo=(a,s)=>{const t=vs(Zi(a),ys("createdAt","desc"));return Ha(t,i=>s(i.docs.map(n=>({id:n.id,...n.data()}))))};async function ea({patientId:a,documentType:s,specialty:t,clinicalData:i,user:n}){if(a)try{const r=n?{uid:n.uid,name:n.displayName??n.email??"Sistema"}:{uid:"",name:"Sistema"};await an(a,{documentType:s,specialty:t,status:"completed",clinicalData:i,createdBy:r,updatedBy:r,metadata:{printable:!0,signed:!1,locked:!1}})}catch{}}function sn(a){const[s,t]=y.useState([]),[i,n]=y.useState(!0);return y.useEffect(()=>{if(!a){t([]),n(!1);return}return n(!0),Qo(a,l=>{t(l),n(!1)})},[a]),{documents:s,loading:i}}const ua={IDLE:"idle",SAVING:"saving",SAVED:"saved",ERROR:"error"};function Xo({data:a,onSave:s,interval:t=15e3,enabled:i=!0}){const[n,r]=y.useState(ua.IDLE),[l,c]=y.useState(null),p=y.useRef(!1),b=y.useRef(a);y.useEffect(()=>{b.current=a},[a]);const j=y.useCallback(async()=>{if(!p.current){p.current=!0,r(ua.SAVING);try{await s(b.current),c(new Date),r(ua.SAVED),setTimeout(()=>r(ua.IDLE),3e3)}catch{r(ua.ERROR)}finally{p.current=!1}}},[s]);return y.useEffect(()=>{if(!i)return;const u=setInterval(j,t);return()=>clearInterval(u)},[j,t,i]),{status:n,lastSaved:l,saveNow:j}}function gs(a){return Ji[a]??{label:a,specialty:"—",icon:"📁",color:"#64748b",light:"#f1f5f9"}}function ri(a){if(!a)return"—";const s=a.toDate?a.toDate():new Date(a);return s.toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"})+" "+s.toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"})}function Jo(a){return a?(a.toDate?a.toDate():new Date(a)).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"}):"—"}function it(a){return{uid:(a==null?void 0:a.uid)??"",name:(a==null?void 0:a.displayName)??(a==null?void 0:a.email)??"Sistema"}}function tn(a){return a.replace(/([A-Z])/g," $1").replace(/_/g," ").replace(/^\s?/,"").replace(/^./,s=>s.toUpperCase())}function nt({status:a,size:s="sm"}){const t=Ra[a]??Ra.draft,i=s==="xs"?"text-[9px] px-1.5 py-px":s==="lg"?"text-xs px-3 py-1":"text-[10px] px-2 py-0.5";return e.jsx("span",{className:`inline-flex items-center font-semibold rounded-full border ${i} ${t.tw}`,children:t.label})}function Ko(){return e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-gray-400",children:[e.jsx("div",{className:"text-4xl mb-3",children:"📁"}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Sin documentos clínicos"}),e.jsx("p",{className:"text-xs mt-1",children:"Crea el primer documento usando el botón de arriba."})]})}function Zo({documents:a=[],loading:s=!1,patientId:t,onView:i,onEdit:n,onNew:r}){const{canEdit:l,isAdmin:c}=De(),[p,b]=y.useState(null),j=async()=>{if(p)try{await Go(t,p.id),V.success("Documento eliminado")}catch(u){V.error(u.message)}finally{b(null)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:["Documentos clínicos · ",a.length]}),l&&e.jsxs("button",{onClick:r,className:"btn btn-primary btn-sm gap-1",children:[e.jsx(ia,{className:"w-3.5 h-3.5"}),"Nuevo documento"]})]}),s?e.jsx("div",{className:"flex justify-center py-8",children:e.jsx(Ye,{className:"w-6 h-6 animate-spin text-gray-300"})}):a.length===0?e.jsx(Ko,{}):e.jsx("div",{className:"rounded-xl border border-gray-100 overflow-hidden",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:e.jsx("tr",{children:["Fecha","Tipo","Especialidad","Profesional","Estado",""].map(u=>e.jsx("th",{className:"text-left px-4 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wide",children:u},u))})}),e.jsx("tbody",{className:"divide-y divide-gray-50",children:a.map(u=>{var h;const v=gs(u.documentType);return e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors group",children:[e.jsx("td",{className:"px-4 py-3 text-xs text-gray-500 whitespace-nowrap",children:Jo(u.createdAt)}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:v.icon}),e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:v.label})]})}),e.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:v.specialty}),e.jsx("td",{className:"px-4 py-3 text-xs text-gray-600 max-w-[140px] truncate",children:((h=u.createdBy)==null?void 0:h.name)||"—"}),e.jsx("td",{className:"px-4 py-3",children:e.jsx(nt,{status:u.status})}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity",children:[e.jsx("button",{onClick:()=>i(u),title:"Ver",className:"p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",children:e.jsx(ps,{className:"w-3.5 h-3.5"})}),l&&e.jsx("button",{onClick:()=>n(u),title:"Editar",className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors",children:e.jsx(ya,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>i(u),title:"Imprimir",className:"p-1.5 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors",children:e.jsx(ga,{className:"w-3.5 h-3.5"})}),c&&e.jsx("button",{onClick:()=>b(u),title:"Eliminar",className:"p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors",children:e.jsx(us,{className:"w-3.5 h-3.5"})})]})})]},u.id)})})]})}),e.jsx($a,{open:!!p,title:"Eliminar documento",message:`¿Eliminar "${gs(p==null?void 0:p.documentType).label}"? Esta acción no se puede deshacer.`,onConfirm:j,onCancel:()=>b(null)})]})}function rt(a){return a==null||a===""?e.jsx("span",{className:"text-gray-300 italic",children:"—"}):typeof a=="boolean"?a?"Sí":"No":typeof a=="object"&&!Array.isArray(a)?e.jsx("div",{className:"pl-3 border-l-2 border-gray-100 space-y-1 mt-1",children:Object.entries(a).map(([s,t])=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-[10px] font-semibold text-gray-400 shrink-0 w-28 pt-px",children:tn(s)}),e.jsx("span",{className:"text-xs text-gray-700",children:rt(t)})]},s))}):Array.isArray(a)?e.jsx("ul",{className:"list-disc pl-4 space-y-0.5",children:a.map((s,t)=>e.jsx("li",{className:"text-xs text-gray-700",children:rt(s)},t))}):e.jsx("span",{className:"text-xs text-gray-800 whitespace-pre-wrap",children:String(a)})}function ec({data:a}){return!a||Object.keys(a).length===0?e.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin datos clínicos registrados."}):e.jsx("div",{className:"space-y-3",children:Object.entries(a).map(([s,t])=>e.jsxs("div",{className:"grid grid-cols-[140px_1fr] gap-3 text-sm py-2 border-b border-gray-50 last:border-0",children:[e.jsx("span",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wide pt-0.5",children:tn(s)}),e.jsx("div",{children:rt(t)})]},s))})}function ac({document:a,patientId:s,onUpdated:t}){const{canEdit:i,user:n}=De(),[r,l]=y.useState(!1),c=async p=>{try{await tt(s,a.id,{status:p,updatedBy:it(n)}),V.success("Estado actualizado"),l(!1),t==null||t()}catch(b){V.error(b.message)}};return i?e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>l(p=>!p),className:"flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 transition-colors hover:bg-gray-50",children:[e.jsx(nt,{status:a.status,size:"xs"}),e.jsx(ct,{className:`w-3 h-3 text-gray-400 transition-transform ${r?"rotate-180":""}`})]}),r&&e.jsx("div",{className:"absolute top-full mt-1 right-0 z-20 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden min-w-[160px]",children:Ki.map(p=>e.jsx("button",{onClick:()=>c(p.value),className:`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 transition-colors
                ${a.status===p.value?"font-bold text-blue-600":"text-gray-700"}`,children:p.label},p.value))})]}):e.jsx(nt,{status:a.status,size:"lg"})}function sc({document:a,patientId:s,onClose:t,onEdit:i}){var l,c,p,b,j;if(!a)return null;const n=gs(a.documentType),r=(l=a.metadata)==null?void 0:l.locked;return e.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",onClick:t,children:[e.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-sm"}),e.jsxs("div",{className:"relative z-10 flex flex-col bg-white shadow-2xl w-full max-w-xl h-full",onClick:u=>u.stopPropagation(),children:[e.jsxs("div",{className:"px-6 pt-5 pb-4 border-b border-gray-100 shrink-0",style:{borderTop:`3px solid ${n.color}`},children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:n.icon}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-extrabold text-gray-900 leading-tight",children:n.label}),e.jsx("p",{className:"text-xs text-gray-400",children:n.specialty})]})]}),e.jsx("button",{onClick:t,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition",children:e.jsx(we,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-3",children:[e.jsx(ac,{document:a,patientId:s}),!r&&i&&e.jsxs("button",{onClick:()=>i(a),className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium",children:[e.jsx(ya,{className:"w-3 h-3"}),"Editar"]}),r&&e.jsx("span",{className:"text-[10px] text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-medium",children:"🔒 Documento bloqueado"})]})]}),e.jsx("div",{className:"px-6 py-3 bg-gray-50 border-b border-gray-100 shrink-0",children:e.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] text-gray-500",children:[e.jsxs("span",{children:["Creado: ",e.jsx("strong",{className:"text-gray-700",children:ri(a.createdAt)})]}),e.jsxs("span",{children:["Por: ",e.jsx("strong",{className:"text-gray-700",children:((c=a.createdBy)==null?void 0:c.name)||"—"})]}),e.jsxs("span",{children:["Actualizado: ",e.jsx("strong",{className:"text-gray-700",children:ri(a.updatedAt)})]}),e.jsxs("span",{children:["Por: ",e.jsx("strong",{className:"text-gray-700",children:((p=a.updatedBy)==null?void 0:p.name)||"—"})]})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4",children:"Datos clínicos"}),e.jsx(ec,{data:a.clinicalData})]}),e.jsx("div",{className:"px-6 py-4 border-t border-gray-100 bg-gray-50 shrink-0",children:e.jsxs("div",{className:"flex items-center justify-between text-[10px] text-gray-400",children:[e.jsxs("span",{children:["v",a.version??1," · ID: ",(b=a.id)==null?void 0:b.slice(0,8),"…"]}),((j=a.metadata)==null?void 0:j.printable)&&e.jsx("span",{className:"text-green-600 font-medium",children:"✓ Imprimible"})]})})]})]})}function R({label:a,children:s,hint:t}){return e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:a}),s,t&&e.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:t})]})}function Se({register:a,name:s,placeholder:t}){return e.jsx("input",{className:"input",placeholder:t,...a(s)})}function te({register:a,name:s,rows:t=3,placeholder:i}){return e.jsx("textarea",{rows:t,className:"input resize-none",placeholder:i,...a(s)})}function wt({register:a,prefix:s}){const t=[{key:"peso",label:"Peso (kg)",placeholder:"ej: 12.5"},{key:"talla",label:"Talla (cm)",placeholder:"ej: 90"},{key:"temp",label:"Temp (°C)",placeholder:"ej: 36.5"},{key:"fc",label:"FC (lpm)",placeholder:"ej: 90"},{key:"fr",label:"FR (rpm)",placeholder:"ej: 20"},{key:"spo2",label:"SpO₂ (%)",placeholder:"ej: 98"}];return e.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-6 gap-3",children:t.map(i=>e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:i.label}),e.jsx("input",{className:"input",placeholder:i.placeholder,...a(`${s}.${i.key}`)})]},i.key))})}function ve({children:a}){return e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-1 pb-0.5 border-b border-gray-100",children:a})}function tc({register:a}){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:"Motivo de consulta"}),e.jsx(R,{label:"Motivo de consulta *",children:e.jsx(te,{register:a,name:"clinicalData.motivoConsulta",rows:2,placeholder:"Describa el motivo principal de la consulta..."})}),e.jsx(R,{label:"Enfermedad actual",children:e.jsx(te,{register:a,name:"clinicalData.enfermedadActual",rows:3,placeholder:"Inicio, evolución, síntomas asociados..."})}),e.jsx(ve,{children:"Antecedentes"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Antecedentes personales",children:e.jsx(te,{register:a,name:"clinicalData.antecedentesPersonales",rows:3,placeholder:"Patologías previas, hospitalizaciones, cirugías..."})}),e.jsx(R,{label:"Antecedentes familiares",children:e.jsx(te,{register:a,name:"clinicalData.antecedentesFamiliares",rows:3,placeholder:"Enfermedades hereditarias, patologías en familia..."})})]}),e.jsx(ve,{children:"Examen físico"}),e.jsx(wt,{register:a,prefix:"clinicalData.signosVitales"}),e.jsx(R,{label:"Examen físico general",children:e.jsx(te,{register:a,name:"clinicalData.examenFisico",rows:3,placeholder:"Hallazgos del examen físico..."})}),e.jsx(ve,{children:"Diagnóstico y plan"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Diagnóstico clínico",children:e.jsx(te,{register:a,name:"clinicalData.diagnostico",rows:2,placeholder:"Diagnóstico presuntivo o definitivo..."})}),e.jsx(R,{label:"Plan de tratamiento",children:e.jsx(te,{register:a,name:"clinicalData.planTratamiento",rows:2,placeholder:"Indicaciones, tratamiento propuesto..."})})]}),e.jsx(R,{label:"Observaciones",children:e.jsx(te,{register:a,name:"clinicalData.observaciones",rows:2,placeholder:"Notas adicionales..."})})]})}function ic({register:a}){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:"Datos de internación"}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsx(R,{label:"Fecha ingreso",children:e.jsx("input",{type:"date",className:"input",...a("clinicalData.fechaIngreso")})}),e.jsx(R,{label:"Hora ingreso",children:e.jsx("input",{type:"time",className:"input",...a("clinicalData.horaIngreso")})}),e.jsx(R,{label:"Fecha egreso",children:e.jsx("input",{type:"date",className:"input",...a("clinicalData.fechaEgreso")})}),e.jsx(R,{label:"Hora egreso",children:e.jsx("input",{type:"time",className:"input",...a("clinicalData.horaEgreso")})})]}),e.jsx(ve,{children:"Diagnósticos"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Diagnóstico pre-quirúrgico",children:e.jsx(te,{register:a,name:"clinicalData.diagnosticoPreQx",rows:2,placeholder:"CIE-10, diagnóstico de ingreso..."})}),e.jsx(R,{label:"Diagnóstico post-quirúrgico",children:e.jsx(te,{register:a,name:"clinicalData.diagnosticoPostQx",rows:2,placeholder:"CIE-10, diagnóstico de egreso..."})})]}),e.jsx(ve,{children:"Procedimiento quirúrgico"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsx(R,{label:"Procedimiento realizado",children:e.jsx(Se,{register:a,name:"clinicalData.procedimiento",placeholder:"Nombre del procedimiento"})}),e.jsx(R,{label:"Tipo de anestesia",children:e.jsxs("select",{className:"input",...a("clinicalData.anestesia"),children:[e.jsx("option",{value:"",children:"Seleccionar..."}),e.jsx("option",{value:"general",children:"General"}),e.jsx("option",{value:"local",children:"Local"}),e.jsx("option",{value:"regional",children:"Regional"}),e.jsx("option",{value:"sedacion",children:"Sedación"})]})}),e.jsx(R,{label:"Duración (min)",children:e.jsx(Se,{register:a,name:"clinicalData.duracionMin",placeholder:"ej: 120"})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(R,{label:"Sangrado (ml)",children:e.jsx(Se,{register:a,name:"clinicalData.sangradoMl",placeholder:"ej: 50"})}),e.jsx(R,{label:"Cirujano",children:e.jsx(Se,{register:a,name:"clinicalData.cirujano",placeholder:"Nombre del cirujano"})})]}),e.jsx(ve,{children:"Indicaciones de alta"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Dieta",children:e.jsx(te,{register:a,name:"clinicalData.indicaciones.dieta",rows:2,placeholder:"Indicaciones dietarias..."})}),e.jsx(R,{label:"Cuidado de herida",children:e.jsx(te,{register:a,name:"clinicalData.indicaciones.cuidadoHerida",rows:2,placeholder:"Cuidados locales, curaciones..."})}),e.jsx(R,{label:"Precauciones generales",children:e.jsx(te,{register:a,name:"clinicalData.indicaciones.precauciones",rows:2,placeholder:"Restricciones, cuidados especiales..."})}),e.jsx(R,{label:"Actividad / reposo",children:e.jsx(te,{register:a,name:"clinicalData.indicaciones.actividad",rows:2,placeholder:"Limitaciones físicas, reposo..."})})]}),e.jsx(R,{label:"Signos de alarma",children:e.jsx(te,{register:a,name:"clinicalData.signosAlarma",rows:2,placeholder:"Fiebre >38°C, sangrado excesivo, dificultad respiratoria..."})}),e.jsx(ve,{children:"Próxima cita"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(R,{label:"Fecha",children:e.jsx("input",{type:"date",className:"input",...a("clinicalData.proximaCita.fecha")})}),e.jsx(R,{label:"Hora",children:e.jsx("input",{type:"time",className:"input",...a("clinicalData.proximaCita.hora")})})]}),e.jsx(R,{label:"Observaciones de egreso",children:e.jsx(te,{register:a,name:"clinicalData.observaciones",rows:2,placeholder:"Notas adicionales del alta..."})})]})}function nc({register:a}){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:"Composición familiar"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Tipo de familia",children:e.jsxs("select",{className:"input",...a("clinicalData.tipoFamilia"),children:[e.jsx("option",{value:"",children:"Seleccionar..."}),e.jsx("option",{value:"nuclear",children:"Nuclear"}),e.jsx("option",{value:"monoparental",children:"Monoparental"}),e.jsx("option",{value:"extensa",children:"Extensa"}),e.jsx("option",{value:"reconstituida",children:"Reconstituida"}),e.jsx("option",{value:"unipersonal",children:"Unipersonal"})]})}),e.jsx(R,{label:"N° integrantes",children:e.jsx(Se,{register:a,name:"clinicalData.nIntegrantes",placeholder:"ej: 4"})})]}),e.jsx(R,{label:"Descripción familiar",children:e.jsx(te,{register:a,name:"clinicalData.composicionFamiliar",rows:3,placeholder:"Integrantes, edades, relación con el paciente..."})}),e.jsx(ve,{children:"Situación socioeconómica"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Ocupación padre / tutor",children:e.jsx(Se,{register:a,name:"clinicalData.ocupacionPadre",placeholder:"Ocupación o trabajo"})}),e.jsx(R,{label:"Ocupación madre / tutora",children:e.jsx(Se,{register:a,name:"clinicalData.ocupacionMadre",placeholder:"Ocupación o trabajo"})}),e.jsx(R,{label:"Nivel educativo",children:e.jsxs("select",{className:"input",...a("clinicalData.nivelEducativo"),children:[e.jsx("option",{value:"",children:"Seleccionar..."}),e.jsx("option",{value:"ninguno",children:"Ninguno"}),e.jsx("option",{value:"primaria",children:"Primaria"}),e.jsx("option",{value:"secundaria",children:"Secundaria"}),e.jsx("option",{value:"tecnico",children:"Técnico/Universitario"})]})}),e.jsx(R,{label:"Condición económica",children:e.jsxs("select",{className:"input",...a("clinicalData.condicionEconomica"),children:[e.jsx("option",{value:"",children:"Seleccionar..."}),e.jsx("option",{value:"muy_baja",children:"Muy baja"}),e.jsx("option",{value:"baja",children:"Baja"}),e.jsx("option",{value:"media",children:"Media"}),e.jsx("option",{value:"media_alta",children:"Media alta"})]})})]}),e.jsx(ve,{children:"Vivienda y red de apoyo"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Tipo de vivienda",children:e.jsxs("select",{className:"input",...a("clinicalData.tipoVivienda"),children:[e.jsx("option",{value:"",children:"Seleccionar..."}),e.jsx("option",{value:"propia",children:"Propia"}),e.jsx("option",{value:"alquilada",children:"Alquilada"}),e.jsx("option",{value:"prestada",children:"Prestada"}),e.jsx("option",{value:"otro",children:"Otro"})]})}),e.jsx(R,{label:"Red de apoyo",children:e.jsx(Se,{register:a,name:"clinicalData.redApoyo",placeholder:"Familiares, vecinos, organizaciones..."})})]}),e.jsx(R,{label:"Observaciones sociales",children:e.jsx(te,{register:a,name:"clinicalData.observaciones",rows:3,placeholder:"Observaciones del trabajador/a social..."})})]})}function rc({register:a}){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:"Motivo de consulta"}),e.jsx(R,{label:"Motivo quirúrgico *",children:e.jsx(te,{register:a,name:"clinicalData.motivoConsulta",rows:2,placeholder:"Indicación quirúrgica, motivo de la intervención..."})}),e.jsx(R,{label:"Antecedentes quirúrgicos",children:e.jsx(te,{register:a,name:"clinicalData.antecedentesQx",rows:2,placeholder:"Cirugías previas, complicaciones..."})}),e.jsx(ve,{children:"Examen preoperatorio"}),e.jsx(wt,{register:a,prefix:"clinicalData.signosVitales"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsx(R,{label:"Peso (kg)",children:e.jsx(Se,{register:a,name:"clinicalData.peso",placeholder:"ej: 14.5"})}),e.jsx(R,{label:"Talla (cm)",children:e.jsx(Se,{register:a,name:"clinicalData.talla",placeholder:"ej: 95"})}),e.jsx(R,{label:"Ayuno (horas)",children:e.jsx(Se,{register:a,name:"clinicalData.ayunoHoras",placeholder:"ej: 8"})})]}),e.jsx(R,{label:"Examen físico preoperatorio",children:e.jsx(te,{register:a,name:"clinicalData.examenFisicoPreQx",rows:3,placeholder:"Hallazgos relevantes para la cirugía..."})}),e.jsx(ve,{children:"Plan quirúrgico"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(R,{label:"Procedimiento planificado",children:e.jsx(Se,{register:a,name:"clinicalData.procedimientoPlanificado",placeholder:"Tipo de cirugía a realizar"})}),e.jsx(R,{label:"Tipo de anestesia planificada",children:e.jsxs("select",{className:"input",...a("clinicalData.tipoAnestesia"),children:[e.jsx("option",{value:"",children:"Seleccionar..."}),e.jsx("option",{value:"general",children:"General"}),e.jsx("option",{value:"local",children:"Local"}),e.jsx("option",{value:"regional",children:"Regional"}),e.jsx("option",{value:"sedacion",children:"Sedación"})]})})]}),e.jsx(R,{label:"Diagnóstico preoperatorio",children:e.jsx(te,{register:a,name:"clinicalData.diagnosticoPreQx",rows:2,placeholder:"Diagnóstico que indica la cirugía..."})}),e.jsx(R,{label:"Observaciones",children:e.jsx(te,{register:a,name:"clinicalData.observaciones",rows:2,placeholder:"Notas adicionales del cirujano..."})})]})}function lc({register:a}){return e.jsxs(e.Fragment,{children:[e.jsx(R,{label:"Fecha de evolución",children:e.jsx("input",{type:"date",className:"input",...a("clinicalData.fecha")})}),e.jsx(R,{label:"Subjetivo (S)",children:e.jsx(te,{register:a,name:"clinicalData.subjetivo",rows:2,placeholder:"Lo que refiere el paciente/familia..."})}),e.jsx(R,{label:"Objetivo (O)",children:e.jsx(te,{register:a,name:"clinicalData.objetivo",rows:2,placeholder:"Signos vitales, examen físico..."})}),e.jsx(wt,{register:a,prefix:"clinicalData.signosVitales"}),e.jsx(R,{label:"Análisis (A)",children:e.jsx(te,{register:a,name:"clinicalData.analisis",rows:2,placeholder:"Evaluación clínica, diagnóstico diferencial..."})}),e.jsx(R,{label:"Plan (P)",children:e.jsx(te,{register:a,name:"clinicalData.plan",rows:2,placeholder:"Indicaciones, cambios de tratamiento..."})})]})}function oc({documentType:a,register:s}){switch(a){case"historia_clinica":return e.jsx(tc,{register:s});case"epicrisis":return e.jsx(ic,{register:s});case"ficha_social":return e.jsx(nc,{register:s});case"historia_quirurgica":return e.jsx(rc,{register:s});case"evolucion":return e.jsx(lc,{register:s});default:return e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Contenido clínico"}),e.jsx("textarea",{rows:6,className:"input resize-none",placeholder:"Ingrese el contenido del documento...",...s("clinicalData.contenido")})]})}}function cc({status:a,lastSaved:s}){if(a===ua.IDLE&&!s)return null;const t={saving:{text:"Guardando…",cls:"text-amber-600"},saved:{text:"Guardado",cls:"text-green-600"},error:{text:"Error al guardar",cls:"text-red-500"},idle:{text:s?`Guardado ${s.toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"})}`:"",cls:"text-gray-400"}},{text:i,cls:n}=t[a]??t.idle;return i?e.jsxs("span",{className:`flex items-center gap-1 text-[10px] ${n}`,children:[e.jsx(dt,{className:"w-3 h-3"}),i]}):null}function dc({open:a,onClose:s,patientId:t,document:i}){const{user:n}=De(),r=!!(i!=null&&i.id),{register:l,handleSubmit:c,watch:p,reset:b,getValues:j,formState:{errors:u}}=As({defaultValues:i??{documentType:"historia_clinica",status:"draft",clinicalData:{}}});y.useEffect(()=>{b(i??{documentType:"historia_clinica",status:"draft",clinicalData:{}})},[i,b]);const[v,h]=y.useState(!1),[g,x]=y.useState((i==null?void 0:i.id)??null),w=p("documentType"),{status:A,lastSaved:m}=Xo({data:null,onSave:async()=>{if(!g)return;const E=j();await tt(t,g,{clinicalData:E.clinicalData??{},status:E.status,updatedBy:it(n)})},interval:15e3,enabled:r||!!g}),k=async E=>{h(!0);try{const _=it(n);if(r||g){const X=g??i.id;await tt(t,X,{...E,status:E.status,updatedBy:_}),V.success("Documento actualizado")}else{const X=await an(t,{...E,createdBy:_,updatedBy:_});x(X.id),V.success("Documento creado")}s()}catch(_){V.error(_.message)}finally{h(!1)}},C=r?"Editar documento clínico":"Nuevo documento clínico";return e.jsx(wa,{open:a,onClose:s,title:C,size:"xl",children:e.jsxs("form",{onSubmit:c(k),className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Tipo de documento *"}),e.jsx("select",{className:`input ${u.documentType?"input-error":""}`,...l("documentType",{required:!0}),disabled:r,children:Wo.map(E=>e.jsxs("option",{value:E.value,children:[E.icon," ",E.label]},E.value))})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Estado"}),e.jsx("select",{className:"input",...l("status"),children:Ki.map(E=>e.jsx("option",{value:E.value,children:E.label},E.value))})]})]}),e.jsx("div",{className:"border-t border-gray-100"}),e.jsx("div",{className:"space-y-4",children:e.jsx(oc,{documentType:w,register:l})}),e.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-gray-100",children:[e.jsx(cc,{status:A,lastSaved:m}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsx("button",{type:"button",onClick:s,className:"btn btn-secondary",children:"Cancelar"}),e.jsxs("button",{type:"submit",disabled:v,className:"btn btn-primary gap-1.5",children:[v?e.jsx(Ye,{className:"w-4 h-4 animate-spin"}):e.jsx(Dn,{className:"w-4 h-4"}),r?"Guardar cambios":"Crear documento"]})]})]})]})})}function pc(a){var i,n,r,l;const s=gs(a.documentType),t=(i=a.createdAt)!=null&&i.toDate?a.createdAt.toDate():new Date;return{id:`doc_${a.id}`,date:t,dateIso:t.toISOString().slice(0,10),type:"document",icon:s.icon,title:s.label,subtitle:s.specialty,by:((n=a.createdBy)==null?void 0:n.name)??"",statusTw:((r=Ra[a.status])==null?void 0:r.tw)??"",statusLabel:((l=Ra[a.status])==null?void 0:l.label)??"",color:s.color}}function uc(a){const s={programado:"#64748b",confirmado:"#2563eb",realizado:"#16a34a",cancelado:"#dc2626"};return{id:`surg_${a.id}`,date:new Date(a.date+"T"+(a.startTime??"08:00")),dateIso:a.date,type:"surgery",icon:"🔬",title:a.surgeryType,subtitle:"Cirugía · "+(a.startTime??""),by:a.surgeon??"",statusTw:"",statusLabel:a.status,color:s[a.status]??"#64748b"}}function mc(a){const s={Fonoaudiología:"#7c3aed",Kinesiología:"#0891b2",Psicología:"#db2777",Psicomotricidad:"#16a34a",Psicopedagogía:"#0f766e",default:"#64748b"};return{id:`ther_${a.id}`,date:new Date(a.date+"T"+(a.startTime??"08:00")),dateIso:a.date,type:"therapy",icon:"🩺",title:a.therapyType,subtitle:a.startTime?`${a.startTime}${a.therapist?" · "+a.therapist:""}`:a.therapist??"",by:a.therapist??"",statusTw:"",statusLabel:a.status,color:s[a.therapyType]??s.default}}function xc({dateIso:a}){const s=new Date(a+"T12:00");return e.jsxs("div",{className:"flex items-center gap-3 my-3 first:mt-0",children:[e.jsxs("div",{className:"shrink-0 text-center bg-gray-900 text-white rounded-xl px-3 py-1.5 min-w-[56px]",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-wide opacity-70 leading-none",children:Q(s,"MMM",{locale:Ne})}),e.jsx("p",{className:"text-lg font-bold leading-none mt-0.5",children:Q(s,"d")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold text-gray-700 capitalize",children:Q(s,"EEEE",{locale:Ne})}),e.jsx("p",{className:"text-[10px] text-gray-400",children:Q(s,"yyyy")})]})]})}function hc({event:a}){return e.jsxs("div",{className:"flex gap-3 ml-2 pb-3 last:pb-0",children:[e.jsxs("div",{className:"flex flex-col items-center shrink-0",children:[e.jsx("div",{className:"w-7 h-7 rounded-xl flex items-center justify-center text-sm shadow-sm border border-white",style:{background:a.color+"22",borderColor:a.color+"44"},children:a.icon}),e.jsx("div",{className:"w-px flex-1 mt-1",style:{background:a.color+"33"}})]}),e.jsx("div",{className:"flex-1 min-w-0 pb-3",children:e.jsx("div",{className:"bg-white rounded-xl border border-gray-100 px-3 py-2.5 shadow-sm hover:border-gray-200 transition-colors",children:e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:"text-sm font-bold text-gray-800 leading-tight truncate",style:{color:a.color},children:a.title}),a.subtitle&&e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5 truncate",children:a.subtitle}),a.by&&e.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:a.by})]}),a.statusLabel&&e.jsx("span",{className:`text-[9px] font-bold px-1.5 py-px rounded-full border shrink-0 ${a.statusTw||"bg-gray-100 text-gray-500 border-gray-200"}`,children:a.statusLabel})]})})})]})}function gc({documents:a=[],surgeries:s=[],therapies:t=[],loading:i=!1}){const n=y.useMemo(()=>[...a.map(pc),...s.map(uc),...t.map(mc)].sort((c,p)=>p.date-c.date),[a,s,t]),r=y.useMemo(()=>{const l={};for(const c of n)l[c.dateIso]||(l[c.dateIso]=[]),l[c.dateIso].push(c);return Object.entries(l).sort(([c],[p])=>p.localeCompare(c))},[n]);return i?e.jsx("div",{className:"flex justify-center py-12 text-gray-300",children:e.jsx("div",{className:"animate-pulse text-4xl",children:"⏳"})}):r.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-14 text-gray-400",children:[e.jsx("div",{className:"text-4xl mb-3",children:"🗓"}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Sin eventos registrados"}),e.jsx("p",{className:"text-xs mt-1 text-gray-400",children:"Las cirugías, terapias y documentos aparecerán aquí."})]}):e.jsx("div",{className:"space-y-0",children:r.map(([l,c])=>e.jsxs("div",{children:[e.jsx(xc,{dateIso:l}),e.jsx("div",{children:c.map(p=>e.jsx(hc,{event:p},p.id))})]},l))})}function fc(a){if(!a)return null;const s=Ee(a);if(!Te(s))return null;const t=new Date,i=Be(t,s),n=new Date(s.getFullYear()+i,s.getMonth(),s.getDate()),r=Ke(t,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Je(t,l);return{years:i,months:r,days:c}}function bc(a){if(!a)return"-";const s=[];return a.years>0&&s.push(`${a.years}a`),a.months>0&&s.push(`${a.months}m`),(a.days>0||s.length===0)&&s.push(`${a.days}d`),s.join(" ")}const vc=[{id:"datos",label:"Datos",Icon:Qe},{id:"documentos",label:"Documentos",Icon:Qe},{id:"timeline",label:"Timeline",Icon:dt}];function yc({patient:a,surgeries:s,therapies:t}){const i=s.filter(r=>r.patientId===a.id).sort((r,l)=>l.date.localeCompare(r.date)),n=t.filter(r=>r.patientId===a.id).sort((r,l)=>l.date.localeCompare(r.date));return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[["Diagnóstico",a.diagnosis],["Tipo",oe(a.patientType).longLabel],["Fecha de nac.",a.birthDate?Q(Ee(a.birthDate),"dd/MM/yyyy"):"-"],["Edad",bc(fc(a.birthDate))],["CI paciente",a.idNumber||"-"],["Sexo",a.sex==="masculino"?"Masculino":a.sex==="femenino"?"Femenino":"-"],["Responsable",a.guardian||"-"],["CI responsable",a.guardianIdNumber||"-"],["Tel. responsable",a.guardianPhone||"-"],["Dirección",a.address||"-"]].map(([r,l])=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium",children:r}),e.jsx("p",{className:"text-gray-800 font-medium",children:l})]},r))}),a.allergies&&e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium mb-1",children:"Alergias / Medicamentos"}),e.jsx("p",{className:"text-sm text-gray-700 bg-amber-50 rounded-lg p-3",children:a.allergies})]}),a.clinicalHistory&&e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-400 uppercase font-medium mb-1",children:"Historial clínico"}),e.jsx("p",{className:"text-sm text-gray-700 bg-gray-50 rounded-lg p-3",children:a.clinicalHistory})]}),e.jsxs("section",{children:[e.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3",children:[e.jsx(sa,{className:"w-4 h-4 text-teal-600"}),"Cirugías (",i.length,")"]}),i.length===0?e.jsx("p",{className:"text-sm text-gray-400",children:"Sin cirugías registradas."}):e.jsx("ul",{className:"space-y-2",children:i.map(r=>e.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-800",children:r.surgeryType}),e.jsxs("p",{className:"text-xs text-gray-500",children:[Q(new Date(r.date+"T12:00"),"d MMM yyyy",{locale:Ne})," · ",r.startTime," · ",r.surgeon||"—"]})]}),e.jsx(qe,{variant:r.status})]},r.id))})]}),e.jsxs("section",{children:[e.jsxs("h3",{className:"flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3",children:[e.jsx(Ea,{className:"w-4 h-4 text-purple-600"}),"Terapias (",n.length,")"]}),n.length===0?e.jsx("p",{className:"text-sm text-gray-400",children:"Sin terapias registradas."}):e.jsx("ul",{className:"space-y-2",children:n.map(r=>e.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-800",children:r.therapyType}),e.jsxs("p",{className:"text-xs text-gray-500",children:[Q(new Date(r.date+"T12:00"),"d MMM yyyy",{locale:Ne})," · ",r.startTime," · ",r.therapist||"—"]})]}),e.jsx(qe,{variant:r.status??"programado"})]},r.id))})]})]})}function jc({patient:a}){const{documents:s,loading:t}=sn(a.id),[i,n]=y.useState(null),[r,l]=y.useState(null),[c,p]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(Zo,{documents:s,loading:t,patientId:a.id,onView:n,onEdit:b=>{l(b),p(!0)},onNew:()=>{l(null),p(!0)}}),i&&e.jsx(sc,{document:i,patientId:a.id,onClose:()=>n(null),onEdit:b=>{n(null),l(b),p(!0)}}),e.jsx(dc,{open:c,onClose:()=>{p(!1),l(null)},patientId:a.id,document:r})]})}function wc({patient:a}){const{documents:s,loading:t}=sn(a.id),{surgeries:i,therapies:n}=ye(),r=i.filter(c=>c.patientId===a.id),l=n.filter(c=>c.patientId===a.id);return e.jsx(gc,{documents:s,surgeries:r,therapies:l,loading:t})}function Nc({patient:a}){const{surgeries:s,therapies:t}=ye(),[i,n]=y.useState("datos");return e.jsxs("div",{className:"space-y-0",children:[e.jsx("div",{className:"flex gap-0 -mx-1 mb-4 border-b border-gray-100",children:vc.map(({id:r,label:l,Icon:c})=>e.jsxs("button",{onClick:()=>n(r),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors
              ${i===r?"border-blue-600 text-blue-700":"border-transparent text-gray-400 hover:text-gray-700"}`,children:[e.jsx(c,{className:"w-3.5 h-3.5"}),l]},r))}),i==="datos"&&e.jsx(yc,{patient:a,surgeries:s,therapies:t}),i==="documentos"&&e.jsx(jc,{patient:a}),i==="timeline"&&e.jsx(wc,{patient:a})]})}function kc(a){if(!a)return"";const s=Ee(a);return Te(s)?Be(new Date,s):""}function nn(a,s){const t=i=>{const n=String(i??"").replace(/"/g,'""');return/[,"\n]/.test(n)?`"${n}"`:n};return[a.map(t).join(","),...s.map(i=>i.map(t).join(","))].join(`
`)}function rn(a,s){const t=new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t);Object.assign(document.createElement("a"),{href:i,download:s}).click(),URL.revokeObjectURL(i)}function Cc(a){const s=["Nombre","Fecha Nac.","Edad","Diagnóstico","Teléfono","Dirección","Responsable","Tel. Responsable","Tipo"],t=a.map(i=>[i.fullName,i.birthDate,kc(i.birthDate),i.diagnosis,i.phone,i.address,i.guardian,i.guardianPhone,i.patientType==="flap"?"FLAP":"Externo"]);rn(nn(s,t),"pacientes.csv")}function Fc(a){const s=["Fecha","Hora","Paciente","Tipo","Cirujano","Anestesiólogo","Instrumentadora","Ayuno","Estado","Cotización","Pagado","Pago Completo","Ayuda Social"],t=a.map(i=>[i.date,i.startTime,i.patientName,i.surgeryType,i.surgeon,i.anesthesiologist,i.scrubNurse,i.fastingTime,i.status,i.quotation,i.amountPaid,i.paymentComplete?"Sí":"No",i.socialAid?"Sí":"No"]);rn(nn(s,t),"cirugias.csv")}const Ds=[15,118,110];function Sc(a){if(!a)return"";const s=Ee(a);return Te(s)?`${Be(new Date,s)} años`:""}function Nt(a,s,t,i=!1){const n=i?297:210;a.setFillColor(...Ds),a.rect(0,0,n,22,"F"),a.setTextColor(255,255,255),a.setFontSize(16),a.setFont("helvetica","bold"),a.text("MUNAY - Gestión Quirúrgica",14,10),a.setFontSize(9),a.setFont("helvetica","normal"),a.text(s,14,17),t&&a.text(t,n/2,17,{align:"center"}),a.text(`Generado: ${Q(new Date,"dd/MM/yyyy HH:mm",{locale:Ne})}`,n-14,17,{align:"right"}),a.setTextColor(0,0,0)}function Ac(a,s){const t=new ut,i=Q(new Date(s+"T12:00:00"),"EEEE d 'de' MMMM yyyy",{locale:Ne});Nt(t,"Programación Diaria",i);const n=a.filter(r=>r.date===s&&r.status!=="cancelado").sort((r,l)=>r.startTime.localeCompare(l.startTime)).map(r=>[r.startTime,r.patientName??"",r.surgeryType??"",r.surgeon??"",r.anesthesiologist??"",r.fastingTime??"—",ln(r.status)]);mt(t,{startY:28,head:[["Hora","Paciente","Tipo de cirugía","Cirujano","Anestesiólogo","Ayuno","Estado"]],body:n,headStyles:{fillColor:Ds,fontSize:8},bodyStyles:{fontSize:8},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:14,right:14}}),t.save(`programacion-${s}.pdf`)}function Dc(a,s){const t=new ut({orientation:"landscape"});Nt(t,"Programación Semanal",`Semana del ${s[0]} al ${s[6]}`,!0);const i=a.filter(n=>s.includes(n.date)&&n.status!=="cancelado").sort((n,r)=>n.date.localeCompare(r.date)||n.startTime.localeCompare(r.startTime)).map(n=>[Q(new Date(n.date+"T12:00"),"EEE dd/MM",{locale:Ne}),n.startTime,n.patientName??"",n.surgeryType??"",n.surgeon??"",n.anesthesiologist??"",n.fastingTime??"—",ln(n.status)]);mt(t,{startY:28,head:[["Día","Hora","Paciente","Tipo","Cirujano","Anestesiólogo","Ayuno","Estado"]],body:i,headStyles:{fillColor:Ds,fontSize:7},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),t.save("programacion-semana.pdf")}function Tc(a){const s=new ut;Nt(s,"Listado de Pacientes","");const t=a.map(i=>[i.fullName??"",i.birthDate??"",Sc(i.birthDate),i.diagnosis??"",i.phone??"",i.guardian??"",i.guardianPhone??"",i.patientType==="flap"?"FLAP":"Externo"]);mt(s,{startY:28,head:[["Nombre","Fecha Nac.","Edad","Diagnóstico","Teléfono","Responsable","Tel. Resp.","Tipo"]],body:t,headStyles:{fillColor:Ds,fontSize:8},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),s.save("pacientes.pdf")}function ln(a){return{programado:"Programado",confirmado:"Confirmado",realizado:"Realizado",cancelado:"Cancelado"}[a]??a}const ze="/assets/LOGO%202-DdZTdNO6.jpg";async function Ec(a){try{const t=await(await fetch(a)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(t)})}catch{return null}}function Pc(a){if(!a)return null;const s=Ee(a);if(!Te(s))return null;const t=new Date,i=Be(t,s),n=new Date(s.getFullYear()+i,s.getMonth(),s.getDate()),r=Ke(t,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Je(t,l);return{years:i,months:r,days:c}}async function li(a){const s=await Ec(ze),t=oe(a==null?void 0:a.patientType),i=a!=null&&a.patientCode?`${t.label}-${a.patientCode}`:"",n=(a==null?void 0:a.fullName)||"",r=(a==null?void 0:a.birthDate)||"",l=Pc(a==null?void 0:a.birthDate),c=l?(()=>{const m=[];return l.years>0&&m.push(`${l.years} año${l.years!==1?"s":""}`),l.months>0&&m.push(`${l.months} mes${l.months!==1?"es":""}`),m.length===0&&m.push(`${l.days} días`),m.join(" ")})():"",p=(a==null?void 0:a.sex)==="masculino"?"MASCULINO":(a==null?void 0:a.sex)==="femenino"?"FEMENINO":"",b=(a==null?void 0:a.diagnosis)||"",j=(a==null?void 0:a.address)||"",u=(a==null?void 0:a.guardian)||"",v=(a==null?void 0:a.guardianPhone)||"",h=new Date().toISOString().slice(0,10),g=JSON.stringify({nroHC:i,nombrePaciente:n,fechaNacimiento:r,edad:c,sexo:p,diagnostico:b,domicilio:j,nombreMadre:u,celMadre:v,fechaEvaluacion:h}),x=JSON.stringify(s||""),w=`<!DOCTYPE html><html lang="es"><head>
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
window.__pd   = ${g};
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
</body></html>`,A=window.open("","_blank","width=1100,height=860");A.document.write(w),A.document.close(),A.focus()}async function Mc(a){try{const t=await(await fetch(a)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(t)})}catch{return null}}async function oi(a){const s=await Mc(ze),t=oe(a==null?void 0:a.patientType),i=a!=null&&a.patientCode?`${t.label}-${a.patientCode}`:"",n=(a==null?void 0:a.fullName)||"",r=(a==null?void 0:a.guardian)||"",l=(a==null?void 0:a.guardianIdNumber)||"",c=(a==null?void 0:a.address)||"",p=(a==null?void 0:a.diagnosis)||"",b=new Date,j=String(b.getDate()).padStart(2,"0")+"/"+String(b.getMonth()+1).padStart(2,"0")+"/"+b.getFullYear(),u=s?`<div style="background:#fff;padding:5px 10px;border-radius:6px;display:flex;align-items:center;flex-shrink:0"><img src="${s}" style="height:46px;width:auto;object-fit:contain;display:block;"/></div>`:'<div style="background:#fff;padding:5px 10px;border-radius:6px"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>',v=`<!DOCTYPE html><html lang="es"><head>
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
    <div>${u}</div>
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
        <span class="blank editable" contenteditable="true" data-placeholder="Ej. FLAP BILATERAL">${p}</span>
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
</body></html>`,h=window.open("","_blank","width=900,height=800");h.document.write(v),h.document.close(),h.focus()}async function Oc(a){try{const t=await(await fetch(a)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(t)})}catch{return null}}function zc(a){if(!a)return null;const s=Ee(a);if(!Te(s))return null;const t=new Date,i=Be(t,s),n=new Date(s.getFullYear()+i,s.getMonth(),s.getDate()),r=Ke(t,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Je(t,l);return{years:i,months:r,days:c}}function Ic(a){if(!a)return"";try{const s=Ee(a);return Te(s)?s.getDate().toString().padStart(2,"0")+"/"+(s.getMonth()+1).toString().padStart(2,"0")+"/"+s.getFullYear():a}catch{return a}}async function ci(a){const s=await Oc(ze),t=oe(a==null?void 0:a.patientType),i=a!=null&&a.patientCode?`${t.label}-${a.patientCode}`:"",n=(a==null?void 0:a.fullName)||"",r=Ic((a==null?void 0:a.birthDate)||""),l=zc(a==null?void 0:a.birthDate),c=l?(()=>{const C=[];return l.years>0&&C.push(l.years+" a"),l.months>0&&C.push(l.months+" m"),C.length===0&&C.push(l.days+" d"),C.join(" ")})():"",p=(a==null?void 0:a.sex)==="masculino"?"MASCULINO":(a==null?void 0:a.sex)==="femenino"?"FEMENINO":"",b=(a==null?void 0:a.address)||"",j=(a==null?void 0:a.guardian)||"",u=(a==null?void 0:a.guardianPhone)||"",v=(a==null?void 0:a.diagnosis)||"",h=v.toUpperCase(),g=new Date,x=g.getDate().toString().padStart(2,"0")+"/"+(g.getMonth()+1).toString().padStart(2,"0")+"/"+g.getFullYear(),w=s?`<div style="background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center;flex-shrink:0"><img src="${s}" style="height:38px;width:auto;object-fit:contain;display:block;"/></div>`:'<div style="background:#fff;padding:4px 8px;border-radius:5px"><span style="font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>',A=(C,E)=>`
    <div class="page-hdr">
      ${w}
      <div style="text-align:center">
        <div style="font-size:9px;color:#fff;opacity:.85;text-transform:uppercase;letter-spacing:1.5px;font-weight:600">Centro Médico Quirúrgico</div>
        <div style="font-size:18px;font-weight:900;color:#4FC3C2;letter-spacing:4px;margin:2px 0">MUNAY</div>
        <div style="font-size:8px;color:#fff;opacity:.8;font-style:italic">Centro del Niño con Fisura · La Paz, Bolivia</div>
      </div>
      <div style="text-align:right;color:#fff">
        ${E?`<div style="font-size:7.5pt;opacity:.85">${E}</div>`:""}
        <div style="font-size:9pt;font-weight:700;font-family:monospace">${i||"HC ______"}</div>
        <div style="font-size:7.5pt;opacity:.85;margin-top:2px">Hoja ${C}/2 · ${x}</div>
      </div>
    </div>`,m=`<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Historia Clínica — ${n}</title>
<style>
:root{--ink:#1a1d24;--ink-soft:#3a3f4a;--rule-soft:#b8bdc7;--navy:#1F3A5F;--teal:#4FC3C2;--amber:#F4B73C;--section-bg:#eef4f9;--hl:#fef9c3}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#e8e9ec;font-family:"Helvetica Neue",Arial,sans-serif;color:var(--ink);font-size:8pt;line-height:1.2}
.page{width:215.9mm;height:279.4mm;margin:14px auto;padding:0 10mm 8mm;background:#fff;box-shadow:0 2px 14px rgba(0,0,0,.12);position:relative;overflow:hidden}
.page-hdr{background:var(--navy);margin:0 -10mm 2mm;padding:7px 11px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;border-bottom:4px solid var(--teal);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.main-title{text-align:center;font-size:9pt;font-weight:bold;color:var(--navy);margin:1px 0 2px;letter-spacing:.5px;text-transform:uppercase;border-bottom:1.5px solid var(--teal);padding-bottom:1px}
h3.section{background:var(--navy);color:#fff;padding:2px 6px;margin:2px 0 1px;font-size:8pt;font-weight:bold;letter-spacing:.5px;text-transform:uppercase;border-left:4px solid var(--amber);-webkit-print-color-adjust:exact;print-color-adjust:exact}
h4.sub{margin:1px 0 0;font-size:7.5pt;font-weight:bold;color:var(--navy);text-transform:uppercase;letter-spacing:.3px}
.add-row-btn{background:var(--amber);color:#fff;border:none;padding:1px 7px;font-size:6.8pt;font-weight:bold;cursor:pointer;border-radius:2px;margin-left:8px;font-family:inherit}
@media print{.add-row-btn{display:none}}
.inline-fields{display:flex;flex-wrap:wrap;gap:1px 10px;margin:1px 0}
.inline{display:inline-flex;align-items:baseline;gap:3px;font-size:8pt}
.inline .lbl{font-weight:bold;color:var(--ink);white-space:nowrap}
.inline .val{border-bottom:1px solid var(--ink-soft);min-width:60px;min-height:13px;padding:0 3px;font-family:"Courier New",monospace;font-size:8pt;flex:1}
.inline .val.wide{min-width:120px}.inline .val.xwide{min-width:200px}.inline .val.full{min-width:100%}
[contenteditable="true"]{outline:none;cursor:text}
[contenteditable="true"]:focus{background:var(--hl)}
.narrative{border:1px solid var(--rule-soft);background:#fbfcfd;padding:2px 5px;min-height:20px;font-family:"Courier New",monospace;font-size:7.8pt;line-height:1.3;margin:1px 0}
.narrative.tall{min-height:26px}
.checklist{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:0px 8px;margin:0 0 1px}
.checklist.cols-2{grid-template-columns:repeat(2,1fr)}.checklist.cols-3{grid-template-columns:repeat(3,1fr)}
.checklist.cols-4{grid-template-columns:repeat(4,1fr)}.checklist.cols-5{grid-template-columns:repeat(5,1fr)}
.chk{display:flex;align-items:center;gap:4px;font-size:7.8pt;line-height:1.2;cursor:pointer;user-select:none}
.chk .box{display:inline-block;width:9px;height:9px;border:1px solid var(--ink);flex-shrink:0;background:#fff;position:relative}
.chk.checked .box{background:var(--navy);border-color:var(--navy);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.chk.checked .box::after{content:"✓";position:absolute;top:-4px;left:0;color:#fff;font-size:7pt;font-weight:bold;line-height:1}
.req{display:inline-block;font-size:6pt;font-weight:bold;padding:0 3px;border-radius:2px;margin-left:4px;vertical-align:middle;color:#fff}
.req.obl{background:#c93232}.req.opt-edad{background:#d4a017}.req.opt-clin{background:#5a7a3a}
table.clinical{width:100%;border-collapse:collapse;margin:2px 0;font-size:7.5pt}
table.clinical th,table.clinical td{border:1px solid var(--ink-soft);padding:1px 4px;text-align:left;vertical-align:top}
table.clinical th{background:var(--section-bg);font-weight:bold;font-size:7.2pt}
table.clinical td.fillable{min-height:13px;height:13px;font-family:"Courier New",monospace}
.other-line{display:inline-block;border-bottom:1px solid var(--ink-soft);min-width:50px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.8pt;min-height:10px}
.metrics-inline{display:flex;flex-wrap:wrap;gap:1px 10px;padding:1px 4px;background:var(--section-bg);border:1px solid var(--rule-soft);font-size:8pt;margin:0}
.metrics-inline .m{display:inline-flex;align-items:baseline;gap:3px}
.metrics-inline .m .lbl{font-weight:bold;font-size:7.5pt}
.metrics-inline .m .val{border-bottom:1px solid var(--ink-soft);min-width:38px;min-height:11px;padding:0 3px;font-family:"Courier New",monospace}
.val-input{border:none;border-bottom:1px solid var(--ink-soft);background:transparent;width:50px;padding:0 3px;font-family:"Courier New",monospace;font-size:8pt;color:var(--ink);outline:none}
.val-input:focus{background:var(--hl)}.val-input.imc-auto{background:var(--section-bg);font-weight:bold;color:var(--navy);width:55px}
.val-input::-webkit-outer-spin-button,.val-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.val-input[type="number"]{-moz-appearance:textfield}
table.edu{width:100%;border-collapse:collapse;font-size:7.5pt;margin:1px 0}
table.edu th,table.edu td{border:1px solid var(--ink-soft);padding:1px 4px}
table.edu th{background:var(--section-bg);font-size:7pt}
table.edu td.tema{width:60%}
table.edu td.cell-chk{text-align:center;width:13.33%}
table.edu td.cell-chk .chk{justify-content:center}
.age-row{border-left:3px solid var(--amber);padding-left:6px;margin:0}
.age-row .age-label{display:inline-block;background:var(--amber);color:#fff;font-size:6.5pt;font-weight:bold;padding:1px 5px;margin-right:6px;text-transform:uppercase;letter-spacing:.3px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.firma-box{margin-top:3px;padding:4px 6px 3px;border:1px solid var(--ink-soft);text-align:center;background:#fbfcfd}
.firma-line{border-bottom:1px solid var(--ink);min-height:28px;margin:0 auto 2px;width:70%}
.firma-label{font-size:7.5pt;font-weight:bold;text-transform:uppercase;letter-spacing:.5px;color:var(--ink-soft)}
.footer{position:absolute;bottom:3mm;left:10mm;right:10mm;padding-top:2px;border-top:1px solid var(--rule-soft);font-size:6.5pt;color:var(--ink-soft);display:flex;justify-content:space-between;font-style:italic}
.legend{display:inline-flex;gap:10px;font-size:6.8pt;color:var(--ink-soft);margin-left:6px}
.legend-item{display:inline-flex;align-items:center;gap:3px}
.toolbar{position:sticky;top:0;background:var(--navy);color:#fff;padding:8px 20px;text-align:center;z-index:100;box-shadow:0 2px 6px rgba(0,0,0,.2);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.toolbar button{background:var(--amber);color:#fff;border:none;padding:5px 14px;margin:0 4px;font-family:inherit;font-size:9pt;font-weight:bold;cursor:pointer;border-radius:3px}
.toolbar span{margin-right:12px;font-size:9.5pt;opacity:.95}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px}
.cesarea-motivo{display:none;flex-wrap:wrap;gap:1px 8px;margin-left:14px;margin-top:1px;padding:2px 6px;background:#fef9c3;border-left:3px solid var(--amber)}
@page{size:letter;margin:0}
@media print{
  body{background:#fff}.toolbar{display:none}
  .page{box-shadow:none;margin:0;page-break-after:always}
  .page:last-child{page-break-after:auto}
  [contenteditable="true"]:focus{background:transparent}
}
</style></head><body>

<div class="toolbar">
  <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY</span>
  <button onclick="window.print()">Imprimir / Guardar PDF</button>
  <button id="btn-guardar" onclick="saveToFirestore(this)" style="background:#16a34a">💾 Guardar en sistema</button>
  <button onclick="resetForm()">Limpiar</button>
</div>

<!-- ===== PÁGINA 1 ===== -->
<div class="page">
  ${A("1","")}
  <div class="main-title">Historia Clínica Integral</div>

  <h3 class="section">1 · Identificación y Datos Administrativos
    <span class="legend">
      <span class="legend-item"><span class="req obl">OBL</span>Obligatorio</span>
      <span class="legend-item"><span class="req opt-edad">EDAD</span>Por edad</span>
      <span class="legend-item"><span class="req opt-clin">CLÍN</span>Pertinencia clínica</span>
    </span>
  </h3>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${x}</span></span>
    <span class="inline"><span class="lbl">Hora:</span><span class="val" contenteditable="true"></span></span>
  </div>
  <div class="inline-fields">
    <span class="inline" style="flex:1 1 55%"><span class="lbl">Nombre completo:</span><span class="val xwide" contenteditable="true">${n}</span></span>
    <span class="inline"><span class="lbl">Sexo:</span><span class="val" style="min-width:30px" contenteditable="true">${p}</span></span>
    <span class="inline"><span class="lbl">F. Nac.:</span><span class="val" contenteditable="true">${r}</span></span>
    <span class="inline"><span class="lbl">Edad:</span><span class="val" style="min-width:70px" contenteditable="true">${c}</span></span>
  </div>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Lugar de nac.:</span><span class="val wide" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Procedencia:</span><span class="val wide" contenteditable="true"></span></span>
    <span class="inline" style="flex:1 1 40%"><span class="lbl">Dirección:</span><span class="val xwide" contenteditable="true">${b}</span></span>
  </div>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Persona responsable:</span><span class="val wide" contenteditable="true">${j}</span></span>
    <span class="inline"><span class="lbl">Parentesco:</span><span class="val" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Tel. principal:</span><span class="val" contenteditable="true">${u}</span></span>
    <span class="inline"><span class="lbl">Tel. alternativo:</span><span class="val" contenteditable="true"></span></span>
  </div>
  <div class="inline-fields" style="margin-top:2px">
    <span style="font-weight:bold;font-size:7.5pt">Tipo:</span>
    <div class="chk"><span class="box"></span>Nuevo</div>
    <div class="chk"><span class="box"></span>Reingreso</div>
    <div class="chk"><span class="box"></span>Transferido</div>
    <span style="font-weight:bold;font-size:7.5pt;margin-left:14px">Referido por:</span>
    <div class="chk"><span class="box"></span>Hospital</div>
    <div class="chk"><span class="box"></span>Redes sociales</div>
    <div class="chk"><span class="box"></span>Fundación</div>
    <div class="chk"><span class="box"></span>Campaña</div>
    <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
  </div>

  <h3 class="section">2 · Motivo de Ingreso y Diagnóstico de Referencia <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Motivo principal</h4>
      <div class="checklist cols-2">
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
      <div class="checklist cols-2">
        <div class="chk" data-dx="labio-uni"><span class="box"></span>Labio hendido unilateral</div>
        <div class="chk" data-dx="labio-bi"><span class="box"></span>Labio hendido bilateral</div>
        <div class="chk" data-dx="paladar"><span class="box"></span>Paladar hendido</div>
        <div class="chk" data-dx="flap"><span class="box"></span>FLAP completo</div>
        <div class="chk"><span class="box"></span>Fisura submucosa</div>
        <div class="chk"><span class="box"></span>Anomalía craneofacial</div>
        <div class="chk"><span class="box"></span>Sospecha sindrómica</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true">${v}</span></div>
      </div>
      <div class="inline-fields" style="margin-top:2px">
        <span class="inline" style="flex:1"><span class="lbl">Especificar diagnóstico:</span><span class="val xwide" contenteditable="true"></span></span>
      </div>
    </div>
  </div>

  <h3 class="section">3 · Historia de la Enfermedad Actual <span class="req obl">OBL</span></h3>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Dx prenatal:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
    <span style="font-weight:bold;font-size:7.5pt;margin-left:8px">Atención previa:</span>
    <div class="chk"><span class="box"></span>Ninguna</div><div class="chk"><span class="box"></span>Hosp. público</div>
    <div class="chk"><span class="box"></span>Privado</div><div class="chk"><span class="box"></span>Fundación</div>
  </div>
  <div class="inline-fields" style="margin-top:2px">
    <span class="inline" style="flex:1"><span class="lbl">Especificar atención previa:</span><span class="val xwide" contenteditable="true"></span></span>
  </div>
  <div class="narrative" contenteditable="true">Narrativa libre: relato de la madre/responsable sobre el origen, evolución y manejo previo del cuadro...</div>
  <h4 class="sub">Tratamientos / cirugías previas <span class="req opt-clin">CLÍN</span>
    <button type="button" class="add-row-btn" onclick="addRow('tbl-cir',4)">+ Agregar fila</button>
  </h4>
  <table class="clinical" id="tbl-cir">
    <thead><tr><th style="width:10%">Edad</th><th style="width:38%">Procedimiento</th><th style="width:22%">Lugar</th><th>Complicaciones</th></tr></thead>
    <tbody>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
    </tbody>
  </table>

  <h3 class="section">4 · Antecedentes Prenatales y Perinatales <span class="req opt-edad">EDAD</span> <span style="font-weight:normal;font-style:italic;font-size:7pt;text-transform:none">(detallar en RN/lactantes · resumir en &gt;10 años)</span></h3>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">N.º embarazo:</span><span class="val" style="min-width:35px" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Controles prenatales:</span><span class="val" style="min-width:35px" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">SDG:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
    <span style="font-weight:bold;font-size:7.5pt">Tipo de parto:</span>
    <div class="chk" id="chk-eutocico"><span class="box"></span>Eutócico</div>
    <div class="chk" id="chk-distocico"><span class="box"></span>Distócico</div>
    <div class="chk" id="chk-cesarea-parto"><span class="box"></span>Cesárea</div>
  </div>
  <div class="cesarea-motivo" id="cesarea-motivo-parto">
    <span style="font-size:7.2pt;font-weight:bold">Motivo cesárea:</span>
    <div class="chk"><span class="box"></span>Sufrimiento fetal</div>
    <div class="chk"><span class="box"></span>Desproporción cefalopélvica</div>
    <div class="chk"><span class="box"></span>Presentación anormal</div>
    <div class="chk"><span class="box"></span>Cesárea anterior</div>
    <div class="chk"><span class="box"></span>Electiva</div>
    <div class="chk"><span class="box"></span>Otra: <span class="other-line" contenteditable="true"></span></div>
  </div>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Peso nac.:</span><span class="val" style="min-width:60px" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Talla nac.:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
    <span style="font-weight:bold;font-size:7.5pt">Incubadora:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
    <span style="font-weight:bold;font-size:7.5pt">Reanimación:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
    <span style="font-weight:bold;font-size:7.5pt">Tamizaje neonatal:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
  </div>
  <div style="margin-top:2px">
    <span style="font-weight:bold;font-size:7.5pt">Exposiciones en embarazo:</span>
    <div class="checklist cols-5" style="margin-top:1px">
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

  <h3 class="section">5 · Antecedentes Personales y Familiares <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Personales patológicos</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>Respiratorias recurrentes</div>
        <div class="chk"><span class="box"></span>Cardiopatía</div>
        <div class="chk"><span class="box"></span>Convulsiones</div>
        <div class="chk"><span class="box"></span>Anemia</div>
        <div class="chk"><span class="box"></span>Desnutrición</div>
        <div class="chk"><span class="box"></span>Hospitalizaciones previas: <span class="other-line" contenteditable="true"></span></div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="inline-fields" style="margin-top:2px">
        <span style="font-weight:bold;font-size:7.5pt">Alergias:</span>
        <div class="chk"><span class="box"></span>No refiere</div>
        <div class="chk"><span class="box"></span>Medicamentos</div>
        <div class="chk"><span class="box"></span>Alimentos</div>
        <div class="chk"><span class="box"></span>Látex</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="inline-fields">
        <span class="inline" style="flex:1"><span class="lbl">Medicación actual:</span><span class="val full" contenteditable="true"></span></span>
      </div>
    </div>
    <div>
      <h4 class="sub">Familiares</h4>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Historia familiar FLAP:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Familiar afectado:</span>
        <div class="chk"><span class="box"></span>Padre</div><div class="chk"><span class="box"></span>Madre</div>
        <div class="chk"><span class="box"></span>Hermanos</div><div class="chk"><span class="box"></span>Tíos</div>
        <div class="chk"><span class="box"></span>Primos</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Antec. genéticos/sindrómicos:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Sospecha</div>
        <span style="font-weight:bold;font-size:7.5pt;margin-left:8px">Consanguinidad:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
      </div>
    </div>
  </div>

  <h3 class="section">6 · Desarrollo y Crecimiento <span class="req opt-edad">EDAD</span> <span style="font-weight:normal;font-style:italic;font-size:7pt;text-transform:none">(completar bloque según edad)</span></h3>
  <div class="age-row">
    <span class="age-label">RN / Lactantes</span>
    <span style="font-size:7.2pt;font-weight:bold">Alimentación:</span>
    <div class="chk" style="display:inline-flex;margin-left:4px"><span class="box"></span>LME</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Mixta</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Fórmula especial</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Dificultad succión</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Regurgitación nasal</div>
    <span style="font-size:7.2pt;font-weight:bold;margin-left:8px">Desarrollo:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Sostén cefálico</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Sonrisa social</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Sedestación</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Gateo</div>
  </div>
  <div class="age-row">
    <span class="age-label">Preescolar/Escolar</span>
    <span style="font-size:7.2pt;font-weight:bold">Psicomotor:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Normal</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Retraso leve</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Moderado</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Severo</div>
    <span style="font-size:7.2pt;font-weight:bold;margin-left:6px">Lenguaje:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Adecuado</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Retraso</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Hipernasalidad</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. articulatoria</div>
    <span class="inline" style="margin-left:6px"><span class="lbl">Curso:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
    <span style="font-size:7.2pt;font-weight:bold">Rend.:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Bueno</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Regular</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Bajo</div>
  </div>
  <div class="age-row">
    <span class="age-label">Adolescentes</span>
    <span style="font-size:7.2pt;font-weight:bold">Adaptación social:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Adecuada</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Aislamiento</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Bullying</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Baja autoestima</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Ansiedad social</div>
  </div>

  <h3 class="section">7 · Evaluación Nutricional · 8 · Inmunizaciones</h3>
  <div class="metrics-inline">
    <span class="m"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" oninput="calcIMC()"/><span style="font-size:7pt">kg</span></span>
    <span class="m"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" oninput="calcIMC()"/><span style="font-size:7pt">cm</span></span>
    <span class="m"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly/><span style="font-size:7pt">kg/m²</span></span>
    <span style="font-size:7.5pt;font-weight:bold">Riesgo nutricional:</span>
    <div class="chk"><span class="box"></span>Sin riesgo</div>
    <div class="chk"><span class="box"></span>Leve</div>
    <div class="chk"><span class="box"></span>Moderado</div>
    <div class="chk"><span class="box"></span>Alto</div>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Alimentación actual:</span>
    <div class="chk"><span class="box"></span>Adecuada</div>
    <div class="chk"><span class="box"></span>Selectiva</div>
    <div class="chk"><span class="box"></span>Déficit proteico</div>
    <div class="chk"><span class="box"></span>Predominio CHO</div>
    <div class="chk"><span class="box"></span>Baja frecuencia</div>
    <span style="font-weight:bold;font-size:7.5pt;margin-left:14px">Inmunizaciones:</span>
    <div class="chk"><span class="box"></span>Completo</div>
    <div class="chk"><span class="box"></span>Incompleto</div>
    <div class="chk"><span class="box"></span>Desconoce</div>
  </div>

  <div class="footer">
    <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>
</div>

<!-- ===== PÁGINA 2 ===== -->
<div class="page">
  ${A("2",n)}
  <div class="main-title">Historia Clínica Integral · Continuación · Examen Físico</div>

  <h3 class="section">9 · Audición y ORL · 10 · Odontología y Ortodoncia</h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Historia auditiva</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Sin alteraciones</div>
        <div class="chk"><span class="box"></span>Otitis recurrente</div>
        <div class="chk"><span class="box"></span>Hipoacusia</div>
        <div class="chk"><span class="box"></span>Tubos de ventilación</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Evaluación ORL previa</div>
      </div>
    </div>
    <div>
      <h4 class="sub">Odontología</h4>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Dentición:</span>
        <div class="chk"><span class="box"></span>Temporal</div>
        <div class="chk"><span class="box"></span>Mixta</div>
        <div class="chk"><span class="box"></span>Permanente</div>
      </div>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Caries</div>
        <div class="chk"><span class="box"></span>Maloclusión</div>
        <div class="chk"><span class="box"></span>Higiene deficiente</div>
        <div class="chk"><span class="box"></span>Fístula alveolar</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Edentulía fisiológica</div>
      </div>
    </div>
  </div>

  <h3 class="section">11 · Tamizaje Psicológico · 12 · Evaluación Social</h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Conducta del paciente</h4>
      <div class="checklist cols-3">
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Ansioso</div>
        <div class="chk"><span class="box"></span>Temor marcado</div>
        <div class="chk"><span class="box"></span>Irritable</div>
        <div class="chk"><span class="box"></span>Retraído</div>
      </div>
      <h4 class="sub">Dinámica familiar</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Sobreprotectora</div>
        <div class="chk"><span class="box"></span>Negligencia sospechada</div>
        <div class="chk"><span class="box"></span>Hostilidad</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Ansiedad parental elevada</div>
      </div>
    </div>
    <div>
      <h4 class="sub">Vivienda y servicios</h4>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Vivienda:</span>
        <div class="chk"><span class="box"></span>Propia</div>
        <div class="chk"><span class="box"></span>Alquilada</div>
        <div class="chk"><span class="box"></span>Prestada</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Servicios básicos:</span>
        <div class="chk"><span class="box"></span>Agua</div>
        <div class="chk"><span class="box"></span>Luz</div>
        <div class="chk"><span class="box"></span>Alcantarillado</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Riesgo social:</span>
        <div class="chk"><span class="box"></span>Bajo</div>
        <div class="chk"><span class="box"></span>Moderado</div>
        <div class="chk"><span class="box"></span>Alto</div>
      </div>
    </div>
  </div>

  <h3 class="section">13 · Examen Físico General <span class="req obl">OBL</span></h3>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Estado general:</span>
    <div class="chk"><span class="box"></span>Bueno</div>
    <div class="chk"><span class="box"></span>Regular</div>
    <div class="chk"><span class="box"></span>Malo</div>
  </div>
  <div class="metrics-inline">
    <span class="m"><span class="lbl">FC:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">lpm</span></span>
    <span class="m"><span class="lbl">FR:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">rpm</span></span>
    <span class="m"><span class="lbl">SatO₂:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">%</span></span>
    <span class="m"><span class="lbl">Temp:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">°C</span></span>
    <span class="m"><span class="lbl">PA:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">mmHg</span></span>
    <span class="m"><span class="lbl">Peso:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">kg</span></span>
    <span class="m"><span class="lbl">Talla:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">cm</span></span>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Hallazgos:</span>
    <div class="chk"><span class="box"></span>Desnutrición</div>
    <div class="chk"><span class="box"></span>Infección respiratoria</div>
    <div class="chk"><span class="box"></span>Mala higiene</div>
    <div class="chk"><span class="box"></span>Anomalías asociadas</div>
  </div>
  <div class="narrative" contenteditable="true">Examen físico segmentario — cabeza/cuello, cardiovascular, respiratorio, abdomen, genitourinario, extremidades, neurológico...</div>

  <h3 class="section">14 · Evaluación Craneofacial Específica <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Tipo de fisura:</span>
        <div class="chk"><span class="box"></span>Labio unilateral</div>
        <div class="chk"><span class="box"></span>Labio bilateral</div>
        <div class="chk"><span class="box"></span>Paladar</div>
        <div class="chk"><span class="box"></span>FLAP completo</div>
        <div class="chk"><span class="box"></span>Submucoso</div>
      </div>
    </div>
    <div>
      <h4 class="sub">Hallazgos específicos</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Fístula</div>
        <div class="chk"><span class="box"></span>Colapso nasal</div>
        <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
        <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
        <div class="chk"><span class="box"></span>Paladar corto</div>
      </div>
      <h4 class="sub" style="margin-top:4px">15 · Sospecha sindrómica <span class="req opt-clin">CLÍN</span></h4>
      <div class="inline-fields">
        <div class="chk"><span class="box"></span>No aparente</div>
        <div class="chk"><span class="box"></span>Leve</div>
        <div class="chk"><span class="box"></span>Alta sospecha</div>
      </div>
      <div class="inline-fields">
        <span style="font-size:7pt;font-weight:bold">Hallazgos:</span>
        <div class="chk"><span class="box"></span>Auriculares</div>
        <div class="chk"><span class="box"></span>Oculares</div>
        <div class="chk"><span class="box"></span>Cardiopatía</div>
        <div class="chk"><span class="box"></span>Extremidades</div>
        <div class="chk"><span class="box"></span>Neurológicas</div>
        <span style="font-size:7pt;font-weight:bold;margin-left:6px">Deriv. genética:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
      </div>
    </div>
  </div>

  <h3 class="section">18 · Educación Familiar <span class="req obl">OBL</span></h3>
  <table class="edu">
    <thead><tr><th class="tema">La familia comprende:</th><th>Sí</th><th>Parcial</th><th>No</th></tr></thead>
    <tbody>
      <tr><td class="tema">Naturaleza del FLAP</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
      <tr><td class="tema">Necesidad de múltiples cirugías</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
      <tr><td class="tema">Seguimiento prolongado</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
      <tr><td class="tema">Importancia de terapias</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
    </tbody>
  </table>

  <h3 class="section">20 · Impresión Diagnóstica y Conducta <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Impresión diagnóstica integral</h4>
      <div class="narrative tall" contenteditable="true"></div>
    </div>
    <div>
      <h4 class="sub">Conducta inicial</h4>
      <div class="narrative tall" contenteditable="true"></div>
    </div>
  </div>

  <div class="firma-box">
    <div class="firma-line"></div>
    <div class="firma-label">Firma y Sello del Médico</div>
  </div>

  <div class="footer">
    <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 2 de 2</span>
  </div>
</div>

<script>
  var DIAG = ${JSON.stringify(h)};
  var PATIENT_NAME = ${JSON.stringify(n)};
  var HC_CODE = ${JSON.stringify(i)};
  var PATIENT_ID = ${JSON.stringify((a==null?void 0:a.id)||"")};

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
      root.querySelectorAll('.inline').forEach(function(inl) {
        var lbl = inl.querySelector('.lbl');
        var val = inl.querySelector('[contenteditable="true"]');
        if (lbl && val && val.textContent.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: val.textContent.trim() });
      });
      root.querySelectorAll('.m').forEach(function(m) {
        var lbl = m.querySelector('.lbl');
        var inp = m.querySelector('input.val-input');
        if (lbl && inp && inp.value.trim()) {
          var unit = inp.nextElementSibling ? ' ' + inp.nextElementSibling.textContent.trim() : '';
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: inp.value + unit });
        }
      });
      if (root.classList && root.classList.contains('narrative')) {
        var txt = root.textContent.trim();
        if (txt && txt.indexOf('relato de la madre') === -1)
          items.push({ tipo: 'narrativa', texto: txt });
      }
      var tbls = (root.tagName === 'TABLE') ? [root] : Array.from(root.querySelectorAll('table'));
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
    document.querySelectorAll('h3.section').forEach(function(h3) {
      var cl = h3.cloneNode(true);
      cl.querySelectorAll('span').forEach(function(s) { s.remove(); });
      var title = cl.textContent.trim();
      var items = [];
      var node = h3.nextElementSibling;
      while (node && node.tagName !== 'H3') { gatherItems(node, items); node = node.nextElementSibling; }
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
      clinicalData: formData,
      savedAt:      new Date().toISOString(),
    }, '*');
    btn.textContent = '✓ Guardado';
    btn.style.background = '#15803d';
    btn.disabled = true;
  }
<\/script>
</body></html>`,k=window.open("","_blank","width=1060,height=900");k.document.write(m),k.document.close(),k.focus()}function di(a){if(!a)return null;const s=Ee(a);if(!Te(s))return null;const t=new Date,i=Be(t,s),n=new Date(s.getFullYear()+i,s.getMonth(),s.getDate()),r=Ke(t,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Je(t,l);return{years:i,months:r,days:c}}function pi(a){if(!a)return"-";const s=[];return a.years>0&&s.push(`${a.years}a`),a.months>0&&s.push(`${a.months}m`),(a.days>0||s.length===0)&&s.push(`${a.days}d`),s.join(" ")}const Lc=[{value:"all",label:"Todos"},{value:"mny",label:"MNY"},{value:"jwi",label:"JWI"},{value:"ext",label:"EXT"}];function _c(){const{patients:a,setPatients:s,setSurgeries:t,setTherapies:i}=ye(),{isAdmin:n,canEdit:r,user:l}=De(),[c,p]=y.useState(""),[b,j]=y.useState("all"),[u,v]=y.useState(!1),[h,g]=y.useState(!1),[x,w]=y.useState(null),[A,m]=y.useState(null),[k,C]=y.useState(!1);y.useEffect(()=>{const N=ks(s),S=Cs(t),$=Fs(i);return()=>{N(),S(),$()}},[]),y.useEffect(()=>{const N=async S=>{var J;if(((J=S.data)==null?void 0:J.type)!=="MUNAY_SAVE_HC")return;const{patientId:$,clinicalData:H}=S.data;if(!(!$||!H))try{await ea({patientId:$,documentType:"historia_clinica",specialty:"Medicina",clinicalData:H,user:l}),V.success("Historia clínica guardada en el sistema")}catch(U){V.error("Error al guardar historia clínica: "+U.message)}};return window.addEventListener("message",N),()=>window.removeEventListener("message",N)},[l]);const E=y.useMemo(()=>{let N=a;if(b!=="all"&&(N=N.filter(S=>oe(S.patientType).label===b.toUpperCase())),c){const S=c.toLowerCase().replace(/^mny\s*-?\s*/i,""),$=c.toLowerCase();N=N.filter(H=>{var J,U,B,re,se,F;return((J=H.fullName)==null?void 0:J.toLowerCase().includes($))||((U=H.diagnosis)==null?void 0:U.toLowerCase().includes($))||((B=H.guardian)==null?void 0:B.toLowerCase().includes($))||((re=H.phone)==null?void 0:re.includes($))||((se=H.guardianPhone)==null?void 0:se.includes($))||((F=H.patientCode)==null?void 0:F.toLowerCase().includes(S))||`mny-${H.patientCode}`.toLowerCase().includes($)})}return N},[a,b,c]),_=()=>{w(null),v(!0)},X=N=>{w(N),v(!0)},G=N=>{w(N),g(!0)},q=async N=>{C(!0);try{x!=null&&x.id?(await mo(x.id,N),V.success("Paciente actualizado")):(await _i(N),V.success("Paciente registrado")),v(!1)}catch(S){V.error("Error al guardar: "+S.message)}finally{C(!1)}},K=async()=>{if(A)try{await xo(A.id),V.success("Paciente eliminado")}catch(N){V.error("Error: "+N.message)}finally{m(null)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"card py-3",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-start sm:items-center",children:[e.jsx("div",{className:"flex-1 w-full sm:w-auto",children:e.jsx(Ri,{value:c,onChange:p,placeholder:"Buscar por nombre, código MNY-, diagnóstico, teléfono..."})}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:Lc.map(N=>e.jsx("button",{onClick:()=>j(N.value),className:`btn btn-sm ${b===N.value?"btn-primary":"btn-secondary"}`,children:N.label},N.value))}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsx("button",{onClick:()=>Cc(E),className:"btn-secondary btn btn-sm",title:"Exportar CSV",children:e.jsx(pt,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>Tc(E),className:"btn-secondary btn btn-sm",title:"Exportar PDF",children:e.jsx(Qe,{className:"w-4 h-4"})}),r&&e.jsxs("button",{onClick:_,className:"btn-primary btn btn-sm",children:[e.jsx(Qs,{className:"w-4 h-4"}),"Nuevo paciente"]})]})]})}),e.jsxs("p",{className:"text-sm text-gray-500",children:[E.length," paciente",E.length!==1?"s":""]}),E.length===0?e.jsxs("div",{className:"card flex flex-col items-center py-12 text-gray-400",children:[e.jsx(Qs,{className:"w-10 h-10 mb-2 opacity-40"}),e.jsx("p",{className:"text-sm",children:c?"Sin resultados para la búsqueda.":"No hay pacientes registrados."}),r&&!c&&e.jsx("button",{onClick:_,className:"btn-primary btn mt-4",children:"Registrar primer paciente"})]}):e.jsxs("div",{className:"card p-0 overflow-hidden",children:[e.jsx("div",{className:"hidden md:block overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:e.jsx("tr",{children:["Código","Nombre","Diagnóstico","Edad","Responsable","Tel. Resp.","Tipo",""].map(N=>e.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:N},N))})}),e.jsx("tbody",{className:"divide-y divide-gray-50",children:E.map(N=>{const S=di(N.birthDate);return e.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[e.jsx("td",{className:"px-4 py-3 font-mono text-xs font-semibold whitespace-nowrap",children:N.patientCode?e.jsxs("span",{className:"px-1.5 py-0.5 rounded text-white text-[11px]",style:{backgroundColor:oe(N.patientType).bg},children:[oe(N.patientType).label,"-",N.patientCode]}):"—"}),e.jsx("td",{className:"px-4 py-3 font-medium text-gray-800",children:N.fullName}),e.jsx("td",{className:"px-4 py-3 text-gray-600 max-w-[200px] truncate",title:N.diagnosis,children:N.diagnosis}),e.jsx("td",{className:"px-4 py-3 text-gray-600 whitespace-nowrap",children:pi(S)}),e.jsx("td",{className:"px-4 py-3 text-gray-600",children:N.guardian||"-"}),e.jsx("td",{className:"px-4 py-3 text-gray-600",children:N.guardianPhone||"-"}),e.jsx("td",{className:"px-4 py-3",children:e.jsx(qe,{variant:N.patientType})}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex gap-1 justify-end",children:[e.jsx("button",{onClick:()=>G(N),className:"btn-ghost btn btn-sm p-1.5",title:"Ver historial",children:e.jsx(ps,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>{li(N),ea({patientId:N.id,documentType:"ficha_social",specialty:"Social",clinicalData:{nombre:N.name,ci:N.idNumber,responsable:N.guardian,ciResponsable:N.guardianIdNumber,telefono:N.guardianPhone,direccion:N.address,diagnostico:N.diagnosis},user:l})},className:"btn-ghost btn btn-sm p-1.5 text-teal-600 hover:bg-teal-50",title:"Ficha social",children:e.jsx(At,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>oi(N),className:"btn-ghost btn btn-sm p-1.5 text-amber-600 hover:bg-amber-50",title:"Consentimiento fotos",children:e.jsx(Dt,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>{ci(N),ea({patientId:N.id,documentType:"historia_clinica",specialty:"Medicina",clinicalData:{nombre:N.name,fechaNac:N.birthDate,ci:N.idNumber,sexo:N.sex,diagnostico:N.diagnosis,alergias:N.allergies,historialClinico:N.clinicalHistory,responsable:N.guardian,ciResponsable:N.guardianIdNumber,telefono:N.guardianPhone,direccion:N.address},user:l})},className:"btn-ghost btn btn-sm p-1.5 text-indigo-600 hover:bg-indigo-50",title:"Historia clínica integral",children:e.jsx(ds,{className:"w-4 h-4"})}),r&&e.jsx("button",{onClick:()=>X(N),className:"btn-ghost btn btn-sm p-1.5",title:"Editar",children:e.jsx(ya,{className:"w-4 h-4"})}),n&&e.jsx("button",{onClick:()=>m(N),className:"btn-ghost btn btn-sm p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50",title:"Eliminar",children:e.jsx(us,{className:"w-4 h-4"})})]})})]},N.id)})})]})}),e.jsx("ul",{className:"md:hidden divide-y divide-gray-100",children:E.map(N=>{const S=di(N.birthDate);return e.jsxs("li",{className:"p-4",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[N.patientCode&&e.jsxs("p",{className:"text-xs font-mono font-bold mb-0.5",style:{color:oe(N.patientType).bg},children:[oe(N.patientType).label,"-",N.patientCode]}),e.jsx("p",{className:"font-medium text-gray-800 truncate",children:N.fullName}),e.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:N.diagnosis}),S&&e.jsx("p",{className:"text-xs text-gray-400",children:pi(S)}),N.guardian&&e.jsxs("p",{className:"text-xs text-gray-400",children:["Resp: ",N.guardian,N.guardianPhone?` · ${N.guardianPhone}`:""]})]}),e.jsx(qe,{variant:N.patientType})]}),e.jsxs("div",{className:"flex gap-2 mt-3",children:[e.jsxs("button",{onClick:()=>G(N),className:"btn-secondary btn btn-sm flex-1 justify-center",children:[e.jsx(ps,{className:"w-3.5 h-3.5"})," Historial"]}),e.jsx("button",{onClick:()=>{li(N),ea({patientId:N.id,documentType:"ficha_social",specialty:"Social",clinicalData:{nombre:N.name,ci:N.idNumber,responsable:N.guardian,ciResponsable:N.guardianIdNumber,telefono:N.guardianPhone,direccion:N.address,diagnostico:N.diagnosis},user:l})},className:"btn btn-sm px-2.5 text-teal-600 border border-teal-200 hover:bg-teal-50",title:"Ficha social",children:e.jsx(At,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>oi(N),className:"btn btn-sm px-2.5 text-amber-600 border border-amber-200 hover:bg-amber-50",title:"Consentimiento fotos",children:e.jsx(Dt,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>{ci(N),ea({patientId:N.id,documentType:"historia_clinica",specialty:"Medicina",clinicalData:{nombre:N.name,fechaNac:N.birthDate,ci:N.idNumber,sexo:N.sex,diagnostico:N.diagnosis,alergias:N.allergies,historialClinico:N.clinicalHistory,responsable:N.guardian,ciResponsable:N.guardianIdNumber,telefono:N.guardianPhone,direccion:N.address},user:l})},className:"btn btn-sm px-2.5 text-indigo-600 border border-indigo-200 hover:bg-indigo-50",title:"Historia clínica",children:e.jsx(ds,{className:"w-3.5 h-3.5"})}),r&&e.jsx("button",{onClick:()=>X(N),className:"btn-secondary btn btn-sm px-2.5",children:e.jsx(ya,{className:"w-3.5 h-3.5"})}),n&&e.jsx("button",{onClick:()=>m(N),className:"btn btn-sm px-2.5 text-red-500 border border-red-200 hover:bg-red-50",children:e.jsx(us,{className:"w-3.5 h-3.5"})})]})]},N.id)})})]}),e.jsx(wa,{open:u,onClose:()=>v(!1),title:x?"Editar paciente":"Nuevo paciente",size:"lg",children:e.jsx(Xi,{initial:x,onSubmit:q,onCancel:()=>v(!1),busy:k})}),e.jsx(wa,{open:h,onClose:()=>g(!1),title:x?`Historial — ${x.fullName}`:"Historial",size:"lg",children:x&&e.jsx(Nc,{patient:x})}),e.jsx($a,{open:!!A,title:"Eliminar paciente",message:`¿Seguro que deseas eliminar a ${A==null?void 0:A.fullName}? Esta acción no se puede deshacer.`,onConfirm:K,onCancel:()=>m(null)})]})}var on={code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",year:"Año",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},buttonHints:{prev:"$0 antes",next:"$0 siguiente",today(a){return a==="Día"?"Hoy":(a==="Semana"?"Esta":"Este")+" "+a.toLocaleLowerCase()}},viewHint(a){return"Vista "+(a==="Semana"?"de la":"del")+" "+a.toLocaleLowerCase()},weekText:"Sm",weekTextLong:"Semana",allDayText:"Todo el día",moreLinkText:"más",moreLinkHint(a){return`Mostrar ${a} eventos más`},noEventsText:"No hay eventos para mostrar",navLinkHint:"Ir al $0",closeHint:"Cerrar",timeHint:"La hora",eventHint:"Evento"};function $c(a,{date:s,excludeId:t=null}){return a.filter(i=>i.id===t||i.status==="cancelado"?!1:i.date===s)}function ui(a){if(!a)return null;const s=Ee(a);if(!Te(s))return null;const t=new Date,i=Be(t,s),n=new Date(s.getFullYear()+i,s.getMonth(),s.getDate()),r=Ke(t,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Je(t,l);return{years:i,months:r,days:c}}function Rc(a){if(!a)return null;const s=[];return a.years>0&&s.push(`${a.years}a`),a.months>0&&s.push(`${a.months}m`),(a.days>0||s.length===0)&&s.push(`${a.days}d`),s.join(" ")}const qc=["programado","confirmado","realizado","cancelado"],os=["Plastia del Complejo Naso Labial (PCNL)","Rinoplastia","Colgajo Vomeriano + Adherencia Labial","Palatoplastia","Queiloplastia","Gingivoperioplastia (GPP)","Cierre de Fistula"];function mi(a){return a?os.includes(a)?a:"__otro__":""}function Hc({initial:a,onSubmit:s,onCancel:t,busy:i}){const{patients:n,surgeries:r}=ye(),[l,c]=y.useState((a==null?void 0:a.patientName)??""),[p,b]=y.useState(!1),[j,u]=y.useState(a!=null&&a.patientId?n.find(F=>F.id===a.patientId):null),v=y.useRef(null),[h,g]=y.useState(mi(a==null?void 0:a.surgeryType)),[x,w]=y.useState(a!=null&&a.surgeryType&&!os.includes(a.surgeryType)?a.surgeryType:""),[A,m]=y.useState(!1);y.useEffect(()=>{const F=T=>{v.current&&!v.current.contains(T.target)&&b(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[]);const k=y.useMemo(()=>{const F=l.toLowerCase().trim(),T=F.replace(/^mny\s*-?\s*/i,"");return F?n.filter(L=>{var Y,ee;return((Y=L.fullName)==null?void 0:Y.toLowerCase().includes(F))||((ee=L.diagnosis)==null?void 0:ee.toLowerCase().includes(F))||L.patientCode&&L.patientCode.toLowerCase().includes(T)||L.patientCode&&`mny-${L.patientCode}`.toLowerCase().includes(F)}):n},[n,l]),{register:C,handleSubmit:E,watch:_,reset:X,setValue:G,formState:{errors:q}}=As({defaultValues:a??{patientId:"",date:"",startTime:"",admissionTime:"",fastingTime:"",peso:"",talla:"",surgeon:"",anesthesiologist:"",scrubNurse:"",status:"programado",notes:"",quotation:"",paymentComplete:!1,amountPaid:"",paymentDate:"",partialPaymentDate:"",socialAid:!1,socialAidAmount:"",adminNotes:""}});y.useEffect(()=>{a&&(X(a),c(a.patientName??""),u(n.find(F=>F.id===a.patientId)??null),g(mi(a.surgeryType)),w(a.surgeryType&&!os.includes(a.surgeryType)?a.surgeryType:""))},[a]);const K=_("date"),N=_("patientId"),S=_("paymentComplete"),$=_("status"),H=_("amountPaid");y.useEffect(()=>{if(N&&!j){const F=n.find(T=>T.id===N);F&&(u(F),c(F.fullName))}},[N,n]),y.useEffect(()=>{S&&$==="programado"?G("status","confirmado"):!S&&$==="confirmado"&&G("status","programado")},[S]);const J=K?$c(r,{date:K,excludeId:a==null?void 0:a.id}):[],U=F=>{u(F),c(F.fullName),G("patientId",F.id,{shouldValidate:!0}),b(!1)},B=()=>{u(null),c(""),G("patientId","")},re=F=>{const T=h==="__otro__"?x.trim():h;if(!T){m(!0);return}m(!1);const L=n.find(Y=>Y.id===F.patientId);s({...F,surgeryType:T,patientName:(L==null?void 0:L.fullName)??"",patientType:(L==null?void 0:L.patientType)??"ext"})},se=ui(j==null?void 0:j.birthDate);return e.jsxs("form",{onSubmit:E(re),className:"space-y-5",children:[J.length>0&&e.jsxs("div",{className:"flex gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-3 text-sm",children:[e.jsx(bi,{className:"w-5 h-5 shrink-0 mt-0.5 text-amber-500"}),e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold",children:[J.length," cirugía",J.length>1?"s":""," ya programada",J.length>1?"s":""," para este día"]}),J.map(F=>e.jsxs("p",{className:"text-xs mt-0.5 text-amber-700",children:["· ",F.patientName," — ",F.startTime," (",F.surgeryType,")"]},F.id))]})]}),e.jsxs("div",{ref:v,className:"relative",children:[e.jsx("input",{type:"hidden",...C("patientId",{required:"Selecciona un paciente"})}),e.jsx("label",{className:"label",children:"Paciente *"}),e.jsxs("div",{className:"relative",children:[e.jsx(bs,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),e.jsx("input",{type:"text",value:l,autoComplete:"off",onChange:F=>{c(F.target.value),b(!0),F.target.value||B()},onFocus:()=>b(!0),placeholder:"Buscar por nombre, código MNY- o diagnóstico...",className:`input pl-9 pr-8 ${q.patientId?"input-error":""}`}),l&&e.jsx("button",{type:"button",onClick:B,className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:e.jsx(we,{className:"w-4 h-4"})})]}),p&&k.length>0&&e.jsx("div",{className:"absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-card-hover max-h-52 overflow-y-auto",children:k.map(F=>{const T=ui(F.birthDate),L=oe(F.patientType);return e.jsxs("button",{type:"button",onClick:()=>U(F),className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-hm-secondary-100 text-left transition",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:L.bg}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"text-sm font-semibold text-hm-primary truncate",children:F.fullName}),F.patientCode&&e.jsxs("span",{className:"text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded shrink-0",style:{backgroundColor:L.bg},children:[L.label,"-",F.patientCode]})]}),e.jsxs("p",{className:"text-xs text-gray-500 truncate",children:[F.diagnosis,T!==null?` · ${T} años`:""]})]}),e.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0",style:{backgroundColor:L.lightBg,color:L.textColor},children:L.label})]},F.id)})}),q.patientId&&e.jsx("p",{className:"error-msg",children:q.patientId.message}),j&&e.jsxs("div",{className:"mt-2 flex items-start gap-3 p-3 rounded-xl border",style:{backgroundColor:"rgba(9,214,212,0.06)",borderColor:"rgba(9,214,212,0.3)"},children:[e.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center shrink-0",style:{backgroundColor:oe(j.patientType).bg},children:e.jsx(qa,{className:"w-4 h-4 text-white"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("p",{className:"text-sm font-bold text-hm-primary",children:j.fullName}),j.patientCode&&e.jsxs("span",{className:"text-[10px] font-mono font-bold px-1.5 py-0.5 rounded",style:{backgroundColor:oe(j.patientType).bg,color:"#fff"},children:[oe(j.patientType).label,"-",j.patientCode]})]}),e.jsxs("p",{className:"text-xs text-gray-600 mt-0.5",children:[j.diagnosis,se&&e.jsxs("span",{className:"ml-2 font-semibold",style:{color:"#09D6D4"},children:["· ",Rc(se)]})]}),j.guardian&&e.jsxs("p",{className:"text-xs text-gray-400 mt-0.5",children:["Resp: ",j.guardian,j.guardianPhone?` — ${j.guardianPhone}`:""]})]})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Tipo de cirugía *"}),e.jsxs("select",{className:`input ${A?"input-error":""}`,value:h,onChange:F=>{g(F.target.value),m(!1),F.target.value!=="__otro__"&&w("")},children:[e.jsx("option",{value:"",children:"— Seleccionar tipo —"}),os.map(F=>e.jsx("option",{value:F,children:F},F)),e.jsx("option",{value:"__otro__",children:"Otro (especificar)"})]}),h==="__otro__"&&e.jsx("input",{className:`input mt-2 ${A?"input-error":""}`,placeholder:"Especificar tipo de cirugía...",value:x,onChange:F=>{w(F.target.value),m(!1)}}),A&&e.jsx("p",{className:"error-msg",children:"Selecciona o especifica el tipo de cirugía"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Fecha *"}),e.jsx("input",{type:"date",className:`input ${q.date?"input-error":""}`,...C("date",{required:"Requerido"})}),q.date&&e.jsx("p",{className:"error-msg",children:q.date.message})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Hora de inicio *"}),e.jsx("input",{type:"time",className:`input ${q.startTime?"input-error":""}`,...C("startTime",{required:"Requerido"})}),q.startTime&&e.jsx("p",{className:"error-msg",children:q.startTime.message})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Hora de internación"}),e.jsx("input",{type:"time",className:"input",...C("admissionTime")})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Peso (kg)"}),e.jsx("input",{type:"number",step:"0.1",min:"0",className:"input",placeholder:"ej: 23.5",...C("peso")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Talla (cm)"}),e.jsx("input",{type:"number",step:"0.5",min:"0",className:"input",placeholder:"ej: 112",...C("talla")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Hora de ayuno"}),e.jsx("input",{type:"time",className:"input",...C("fastingTime")})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Cirujano"}),e.jsx("input",{className:"input",placeholder:"Dr. Nombre",...C("surgeon")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Anestesiólogo"}),e.jsx("input",{className:"input",placeholder:"Dr. Nombre",...C("anesthesiologist")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Instrumentadora"}),e.jsx("input",{className:"input",placeholder:"Nombre",...C("scrubNurse")})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Estado"}),e.jsx("div",{className:"flex gap-4 flex-wrap",children:qc.map(F=>e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-sm",children:[e.jsx("input",{type:"radio",value:F,...C("status"),className:"accent-hm-primary"}),e.jsx("span",{className:"capitalize font-medium text-gray-700",children:F})]},F))})]}),e.jsxs("div",{className:"border border-hm-secondary-200 rounded-xl p-4 space-y-3",style:{backgroundColor:"#f8fafc"},children:[e.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Gestión Financiera"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Cotización total ($)"}),e.jsx("input",{type:"number",min:"0",className:"input bg-white",...C("quotation")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Monto pagado ($)"}),e.jsx("input",{type:"number",min:"0",className:"input bg-white",...C("amountPaid")})]})]}),e.jsxs("div",{className:"flex gap-6 pt-1",children:[e.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700",children:[e.jsx("input",{type:"checkbox",className:"accent-hm-primary w-4 h-4",...C("paymentComplete")}),"Pago completo"]}),e.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700",children:[e.jsx("input",{type:"checkbox",className:"accent-hm-primary w-4 h-4",...C("socialAid")}),"Ayuda social"]})]}),S&&e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Fecha de pago completo"}),e.jsx("input",{type:"date",className:"input bg-white",...C("paymentDate")})]}),Number(H)>0&&!S&&e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Fecha del último pago parcial"}),e.jsx("input",{type:"date",className:"input bg-white",...C("partialPaymentDate")})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Monto ayuda social ($)"}),e.jsx("input",{type:"number",min:"0",className:"input bg-white",...C("socialAidAmount")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Observaciones financieras"}),e.jsx("input",{className:"input bg-white",...C("adminNotes")})]})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Notas clínicas"}),e.jsx("textarea",{rows:2,className:"input resize-none",...C("notes")})]}),e.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[e.jsx("button",{type:"button",onClick:t,className:"btn-secondary btn",children:"Cancelar"}),e.jsx("button",{type:"submit",disabled:i,className:"btn-primary btn",children:i?e.jsx(Ye,{className:"w-4 h-4 animate-spin"}):a!=null&&a.id?"Guardar cambios":"Programar cirugía"})]})]})}async function Bc(a){try{const t=await(await fetch(a)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(t)})}catch{return null}}async function Vc(a,s){const t=await Bc(ze),i=oe(s==null?void 0:s.patientType),n=s!=null&&s.patientCode?`${i.label}-${s.patientCode}`:"",r=(s==null?void 0:s.fullName)||(a==null?void 0:a.patientName)||"",l=(s==null?void 0:s.guardian)||"",c=(s==null?void 0:s.guardianPhone)||"",p=(s==null?void 0:s.address)||"",b=((s==null?void 0:s.diagnosis)||"").toUpperCase(),j=(s==null?void 0:s.diagnosis)||"",u=(s==null?void 0:s.sex)==="masculino"?"M":(s==null?void 0:s.sex)==="femenino"?"F":"";let v="";if(s!=null&&s.birthDate){const B=Ee(s.birthDate);if(Te(B)){const re=new Date,se=Be(re,B),F=new Date(B.getFullYear()+se,B.getMonth(),B.getDate()),T=Ke(re,F),L=new Date(F.getFullYear(),F.getMonth()+T,F.getDate()),Y=Je(re,L),ee=[];se>0&&ee.push(`${se}a`),T>0&&ee.push(`${T}m`),(Y>0||!ee.length)&&ee.push(`${Y}d`),v=ee.join(" ")}}const h=a!=null&&a.date?Q(new Date(a.date+"T12:00"),"dd/MM/yyyy"):"",g=(a==null?void 0:a.surgeryType)||"",x=(a==null?void 0:a.surgeon)||"",w=(a==null?void 0:a.fastingTime)||(a!=null&&a.fastingHours?`${a.fastingHours} h`:""),A=a!=null&&a.peso?String(a.peso):"",m=a!=null&&a.talla?String(a.talla):"",k=B=>B?" checked":"",C=g.toLowerCase(),E=b.includes("FLAP"),_=E||b.includes("BILATERAL")||b.includes("FLB"),X=!_&&(b.includes("FL")||b.includes("LABIO")),G=b.includes("FP")||b.includes("PALAT"),q=C.includes("queil")&&!C.includes("secund"),K=C.includes("queil")&&C.includes("secund"),N=C.includes("palat"),S=g&&!q&&!K&&!N?g:"",H=`
    <div class="header">
      <div class="logo-block">
        ${t?`<div style="background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center;flex-shrink:0"><img src="${t}" style="height:38px;width:auto;object-fit:contain;display:block"/></div>`:'<div style="background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center"><span style="font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>'}
        <div class="brand">
          <h1>Centro Médico Quirúrgico MUNAY</h1>
          <h2>Centro del Niño con Fisura · La Paz, Bolivia</h2>
        </div>
      </div>`,J=`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>HC-QX · MUNAY · ${r}</title>
<style>
/* ── TOKENS ── */
:root{--ink:#1a1d24;--soft:#4a5568;--rule:#c4cad4;--blue:#1F3A5F;--orange:#F4B73C;--teal:#4FC3C2;--bg:#eef4f9;--hi:#fef9c3;--err-bg:#fdecec;--err:#c93232}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#dde1e7;font-family:"Helvetica Neue",Arial,sans-serif;color:var(--ink);font-size:7.5pt;line-height:1.18}

/* ── PAGE ── */
.page{width:215.9mm;height:279.4mm;margin:10px auto;padding:5mm 9mm 7mm;background:#fff;box-shadow:0 2px 18px rgba(0,0,0,.15);position:relative;overflow:hidden}
.page::before{content:"";position:absolute;top:0;right:0;width:52%;height:13mm;background:linear-gradient(115deg,transparent 0%,#1F3A5F 28%,#4FC3C2 72%,transparent 100%);opacity:.8;clip-path:polygon(16% 0%,100% 0%,100% 60%,0% 100%);z-index:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}

/* ── HEADER ── */
.header{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;padding-bottom:2px;border-bottom:2px solid var(--blue);margin-bottom:2px}
.logo-block{display:flex;align-items:center;gap:7px}
.brand h1{font-size:10pt;margin:0;color:var(--blue);font-weight:bold;letter-spacing:.2px}
.brand h2{font-size:6.8pt;margin:0;color:var(--soft);font-style:italic;font-weight:normal}
.doc-id{font-family:"Courier New",monospace;font-size:6.8pt;color:var(--soft);background:#fff;padding:2px 5px;border:1px solid var(--rule);text-align:right;line-height:1.3}
.main-title{text-align:center;font-size:9pt;font-weight:bold;color:var(--ink);margin:1px 0 2px;letter-spacing:.3px;text-transform:uppercase}

/* ── SECTION HEADERS (collapsible & fixed) ── */
h3.section{background:var(--blue);color:#fff;padding:2px 7px;margin:2px 0 0;font-size:7.5pt;font-weight:bold;letter-spacing:.4px;text-transform:uppercase;border-left:4px solid var(--orange);-webkit-print-color-adjust:exact;print-color-adjust:exact;display:flex;justify-content:space-between;align-items:center}
h3.section.crit{background:var(--err);border-left-color:#ffb800}
h3.section.collapsible{cursor:pointer}
h3.section .toggle-icon{font-size:6pt;opacity:.75;margin-left:6px;font-weight:normal}

/* ── SECTION BODY ── */
.sec-body{padding:1px 0 2px}
.sec-body.collapsed{display:none}

/* ── SUB LABELS ── */
.slbl{font-size:6.8pt;font-weight:bold;color:var(--blue);text-transform:uppercase;letter-spacing:.3px;padding-bottom:1px;border-bottom:1px solid #d4dce6;margin-bottom:2px;margin-top:3px}
.slbl:first-child{margin-top:0}

/* ── BADGES ── */
.req{display:inline-block;font-size:5.5pt;font-weight:bold;padding:0 3px;border-radius:2px;margin-left:3px;vertical-align:middle;letter-spacing:.3px;color:#fff}
.req.obl{background:#c93232}.req.opt-edad{background:#d4a017}.req.crit{background:#111}
.legend-inline{font-size:6pt;font-weight:normal;text-transform:none;letter-spacing:0;opacity:.85;margin-left:8px}

/* ── GRID SYSTEM ── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:2px 8px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px 8px}
.g3a{display:grid;grid-template-columns:2fr 1.15fr 1.6fr;gap:2px 8px}
.gcol{display:flex;flex-direction:column;gap:1px}
.gcol2{display:grid;grid-template-columns:1fr 1fr;gap:1px 6px}

/* ── ID GRID ── */
.id-row{display:grid;gap:1px 5px;margin:1px 0}
.id-row.r1{grid-template-columns:1fr 1fr 1fr 1fr 2fr}
.id-row.r2{grid-template-columns:2fr 1fr 1fr 1.2fr 1.2fr 1fr}

/* ── INLINE FIELDS (label + underline value) ── */
.inline{display:inline-flex;align-items:baseline;gap:3px;font-size:7.5pt}
.inline .lbl{font-weight:bold;color:var(--ink);white-space:nowrap}
.inline .val{border-bottom:1px solid var(--soft);min-width:50px;min-height:11px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.5pt;flex:1}
.inline .val.wide{min-width:90px}.inline .val.xwide{min-width:150px}

/* ── ROW (flexible horizontal strip) ── */
.row{display:flex;flex-wrap:wrap;gap:1px 7px;align-items:center;margin:1px 0}
.f{font-weight:bold;font-size:7pt;white-space:nowrap;color:var(--ink);flex-shrink:0}

/* ── INPUTS ── */
[contenteditable="true"]{outline:none;cursor:text}
[contenteditable="true"]:focus{background:var(--hi)}
.val-input{border:none;border-bottom:1px solid var(--soft);background:transparent;width:42px;min-height:10px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.5pt;color:var(--ink);outline:none}
.val-input:focus{background:var(--hi)}
.val-input.imc-auto{background:var(--bg);font-weight:bold;color:var(--blue);width:46px}
.val-input::-webkit-outer-spin-button,.val-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.val-input[type="number"]{-moz-appearance:textfield}
.other-line{display:inline-block;border-bottom:1px solid var(--soft);min-width:38px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.3pt;min-height:9px}

/* ── NARRATIVE ── */
.narrative{border:1px solid var(--rule);background:#fafbfc;padding:2px 4px;min-height:15px;font-family:"Courier New",monospace;font-size:7.3pt;line-height:1.25;margin:1px 0}

/* ── CHECKBOXES ── */
.chk{display:flex;align-items:center;gap:3px;font-size:7.3pt;line-height:1.18;cursor:pointer;user-select:none}
.chk .box{display:inline-block;width:8px;height:8px;border:1px solid var(--ink);flex-shrink:0;background:#fff;position:relative;transition:background .1s}
.chk.checked .box{background:var(--blue);border-color:var(--blue)}
.chk.checked .box::after{content:"✓";position:absolute;top:-4px;left:0;color:#fff;font-size:6.5pt;font-weight:bold;line-height:1}
.cv{display:flex;flex-direction:column;gap:1px}
.ch{display:flex;flex-wrap:wrap;gap:1px 7px}
.checklist-v{display:flex;flex-direction:column;gap:1px}

/* ── METRICS BAR ── */
.metrics-inline{display:flex;flex-wrap:wrap;gap:1px 9px;padding:1px 4px;background:var(--bg);border:1px solid var(--rule);margin:0;align-items:center}
.metrics-inline .m{display:inline-flex;align-items:baseline;gap:2px}
.metrics-inline .m .lbl{font-weight:bold;font-size:7pt}
.metrics-inline .m .val{border-bottom:1px solid var(--soft);min-width:32px;min-height:10px;padding:0 2px;font-family:"Courier New",monospace}

/* ── AGE ROWS ── */
.age-row{border-left:3px solid var(--orange);padding-left:5px;margin:1px 0}
.age-row .age-label{display:inline-block;background:var(--orange);color:#fff;font-size:5.8pt;font-weight:bold;padding:1px 4px;margin-right:5px;text-transform:uppercase;letter-spacing:.2px;-webkit-print-color-adjust:exact;print-color-adjust:exact}

/* ── CRITICAL BOX ── */
.crit-box{border:1.5px solid var(--err);background:var(--err-bg);padding:2px 5px;margin:1px 0}

/* ── TABLES ── */
table.clinical{width:100%;border-collapse:collapse;margin:1px 0;font-size:7.2pt}
table.clinical th,table.clinical td{border:1px solid var(--rule);padding:1px 3px;text-align:left;vertical-align:top}
table.clinical th{background:var(--bg);font-weight:bold;font-size:6.8pt}
table.clinical td.fillable{height:12px;font-family:"Courier New",monospace}
table.edu{width:100%;border-collapse:collapse;font-size:7.2pt;margin:1px 0}
table.edu th,table.edu td{border:1px solid var(--rule);padding:1px 3px}
table.edu th{background:var(--bg);font-size:6.8pt}
table.edu td.tema{width:60%}
table.edu td.cell-chk{text-align:center;width:13%}
table.edu td.cell-chk .chk{justify-content:center}
.add-row-btn{background:var(--orange);color:#fff;border:none;padding:1px 6px;font-size:6.3pt;font-weight:bold;cursor:pointer;border-radius:2px;margin-left:6px;font-family:inherit;vertical-align:middle}

/* ── KERNAHAN ── */
.kernahan-container{display:grid;grid-template-columns:1fr auto 1fr;gap:6px;align-items:center;padding:3px;background:var(--bg);border:1px solid var(--rule);margin:1px 0}
.kernahan-legend{font-size:6.3pt;line-height:1.3;font-style:italic}
.kernahan-legend.left{text-align:right}.kernahan-legend.right{text-align:left}
.kernahan-legend strong{font-style:normal;color:var(--blue)}
.kernahan-svg{cursor:pointer}
.kern-zone{fill:#fff;stroke:var(--ink);stroke-width:1;transition:fill .15s}
.kern-zone:hover{fill:#ffe9a8}
.kern-zone.active{fill:var(--blue)}
.kern-num{font-size:6pt;font-family:"Helvetica Neue",sans-serif;fill:var(--ink);pointer-events:none;text-anchor:middle;dominant-baseline:middle;font-weight:bold}
.kernahan-extra{grid-column:1/-1;text-align:center;font-size:6.3pt;font-style:italic;padding-top:2px;border-top:1px dashed var(--rule);margin-top:2px}
.kernahan-extra strong{font-style:normal;color:var(--blue)}

/* ── SIGNATURE ── */
.firma-box{padding:3px 6px 2px;border:1px solid var(--soft);text-align:center;background:#fafbfc;margin-top:3px;max-width:50%;margin-left:auto;margin-right:auto}
.firma-line{border-bottom:1px solid var(--ink);min-height:24px;margin:0 auto 2px;width:80%}
.firma-label{font-size:7pt;font-weight:bold;text-transform:uppercase;letter-spacing:.5px;color:var(--soft)}

/* ── FOOTER ── */
.footer{position:absolute;bottom:3mm;left:9mm;right:9mm;padding-top:2px;border-top:1px solid var(--rule);font-size:6pt;color:var(--soft);display:flex;justify-content:space-between;font-style:italic}

/* ── TOOLBAR ── */
.toolbar{position:sticky;top:0;background:var(--blue);color:#fff;padding:6px 16px;text-align:center;z-index:100;box-shadow:0 2px 6px rgba(0,0,0,.22);font-family:inherit}
.toolbar button{background:var(--orange);color:#fff;border:none;padding:4px 12px;margin:0 3px;font-family:inherit;font-size:8.5pt;font-weight:bold;cursor:pointer;border-radius:3px}
.toolbar button:hover{opacity:.85}
.toolbar span{margin-right:10px;font-size:9pt;opacity:.9}

/* ── PRINT ── */
@page{size:letter;margin:0}
@media print{
  body{background:#fff}
  .toolbar,.add-row-btn{display:none}
  .page{box-shadow:none;margin:0;page-break-after:always;width:215.9mm;height:279.4mm}
  .page:last-child{page-break-after:auto}
  [contenteditable="true"]:focus{background:transparent}
  .kern-zone:hover{fill:#fff}
  .kern-zone.active:hover{fill:var(--blue)}
  .sec-body.collapsed{display:block!important}
  h3.section .toggle-icon{display:none}
}
</style>
</head>
<body>

<div class="toolbar">
  <span>Historia Clínica Quirúrgica · MUNAY · ${r}</span>
  <button onclick="window.print()">Imprimir / PDF</button>
  <button onclick="compactPrint()" style="background:#4a6fa5">Vista compacta</button>
  <button onclick="resetForm()">Limpiar</button>
</div>

<!-- ═══════════════ PÁGINA 1 ═══════════════ -->
<div class="page">
  ${H}
    <div class="doc-id">
      HC-QX&nbsp;<span contenteditable="true" style="display:inline-block;min-width:50px">${n}</span>
      &nbsp;·&nbsp;Folio&nbsp;<span contenteditable="true" style="display:inline-block;min-width:35px"></span>&nbsp;·&nbsp;Hoja&nbsp;1/2
    </div>
  </div>

  <div class="main-title">Historia Clínica Quirúrgica</div>

  <!-- ── IDENTIFICACIÓN ── -->
  <h3 class="section">Identificación <span class="req obl">OBL</span>
    <span class="legend-inline"><span class="req obl">OBL</span> Obligatorio &nbsp;<span class="req opt-edad">EDAD</span> Por edad &nbsp;<span class="req crit">CRIT</span> Crítico</span>
  </h3>
  <div class="sec-body">
    <div class="id-row r1">
      <span class="inline"><span class="lbl">N.º HC:</span><span class="val" contenteditable="true">${n}</span></span>
      <span class="inline"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${h}</span></span>
      <span class="inline"><span class="lbl">Hora:</span><span class="val" contenteditable="true">${(a==null?void 0:a.admissionTime)||""}</span></span>
      <span class="inline"><span class="lbl">Servicio:</span><span class="val" contenteditable="true">Qx FLAP/FLP</span></span>
      <span class="inline"><span class="lbl">Médico:</span><span class="val xwide" contenteditable="true">${x}</span></span>
    </div>
    <div class="id-row r2">
      <span class="inline"><span class="lbl">Nombre:</span><span class="val xwide" contenteditable="true">${r}</span></span>
      <span class="inline"><span class="lbl">Edad:</span><span class="val" style="min-width:52px" contenteditable="true">${v}</span></span>
      <span class="inline"><span class="lbl">Sexo:</span><span class="val" style="min-width:24px" contenteditable="true">${u}</span></span>
      <span class="inline"><span class="lbl">Procedencia:</span><span class="val wide" contenteditable="true">${p}</span></span>
      <span class="inline"><span class="lbl">Responsable:</span><span class="val wide" contenteditable="true">${l}</span></span>
      <span class="inline"><span class="lbl">Tel.:</span><span class="val" contenteditable="true">${c}</span></span>
    </div>
  </div>

  <!-- ── 1 · CIRUGÍA ACTUAL ── -->
  <h3 class="section">1 · Cirugía Actual <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="g3a">
      <!-- Procedimiento programado -->
      <div class="gcol">
        <div class="slbl">Procedimiento programado</div>
        <div class="gcol2">
          <div class="cv">
            <div class="chk${k(q)}"><span class="box"></span>Queiloplastia prim.</div>
            <div class="chk${k(K)}"><span class="box"></span>Queiloplastia sec.</div>
            <div class="chk${k(N)}"><span class="box"></span>Palatoplastia</div>
            <div class="chk"><span class="box"></span>Rinoplastia prim.</div>
            <div class="chk"><span class="box"></span>Rinoplastia sec.</div>
          </div>
          <div class="cv">
            <div class="chk"><span class="box"></span>Gingivoperioplastia</div>
            <div class="chk"><span class="box"></span>Injerto alveolar</div>
            <div class="chk"><span class="box"></span>Fistulorrafia</div>
            <div class="chk"><span class="box"></span>Revisión cicatricial</div>
            <div class="chk"><span class="box"></span>Colgajo faríngeo</div>
          </div>
        </div>
        <div class="chk" style="margin-top:2px"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true">${S}</span></div>
      </div>
      <!-- Lado + Tipo -->
      <div class="gcol">
        <div class="slbl">Lado afectado</div>
        <div class="cv">
          <div class="chk${k(X)}"><span class="box"></span>Derecho</div>
          <div class="chk"><span class="box"></span>Izquierdo</div>
          <div class="chk${k(_)}"><span class="box"></span>Bilateral</div>
          <div class="chk${k(!X&&!_)}"><span class="box"></span>No aplica</div>
        </div>
        <div class="slbl">Tipo de cirugía</div>
        <div class="cv">
          <div class="chk${k(q||N&&!K)}"><span class="box"></span>Primaria</div>
          <div class="chk${k(K)}"><span class="box"></span>Secundaria</div>
          <div class="chk"><span class="box"></span>Reconstructiva</div>
          <div class="chk"><span class="box"></span>Correctiva</div>
          <div class="chk"><span class="box"></span>Reintervención</div>
        </div>
      </div>
      <!-- Motivo -->
      <div class="gcol">
        <div class="slbl">Motivo quirúrgico actual</div>
        <div class="narrative" style="flex:1;min-height:55px" contenteditable="true">${j}</div>
      </div>
    </div>
  </div>

  <!-- ── 2 · EVOLUCIÓN PREVIA (colapsable) ── -->
  <h3 class="section collapsible" data-body="sec2">2 · Evolución Quirúrgica Previa
    <span style="font-weight:normal;font-size:6.8pt;text-transform:none;letter-spacing:0"><button type="button" class="add-row-btn" onclick="addRow('tbl-evol-qx',4);event.stopPropagation()">+ fila</button></span>
    <span class="toggle-icon">▾</span>
  </h3>
  <div id="sec2" class="sec-body collapsed">
    <table class="clinical" id="tbl-evol-qx">
      <thead><tr><th style="width:13%">Fecha</th><th style="width:36%">Procedimiento</th><th style="width:22%">Centro</th><th>Complicaciones</th></tr></thead>
      <tbody>
        <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      </tbody>
    </table>
    <div class="row" style="margin-top:1px">
      <span class="f">Complicaciones previas:</span>
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

  <!-- ── 3 · PREANESTÉSICA (CRIT) ── -->
  <h3 class="section crit">3 · Evaluación Preanestésica Rápida <span class="req crit">CRIT</span></h3>
  <div class="sec-body">
    <div class="crit-box">
      <div class="g3">
        <div class="gcol">
          <div class="slbl" style="margin-top:0">Estado actual</div>
          <div class="cv">
            <div class="chk"><span class="box"></span>Afebril</div>
            <div class="chk"><span class="box"></span>IRA reciente</div>
            <div class="chk"><span class="box"></span>Tos activa</div>
            <div class="chk"><span class="box"></span>Rinorrea</div>
            <div class="chk"><span class="box"></span>Fiebre</div>
            <div class="chk"><span class="box"></span>Dif. respiratoria</div>
          </div>
        </div>
        <div class="gcol">
          <div class="slbl" style="margin-top:0">Antecedentes anestésicos</div>
          <div class="cv">
            <div class="chk"><span class="box"></span>Sin complicaciones</div>
            <div class="chk"><span class="box"></span>Intubación difícil</div>
            <div class="chk"><span class="box"></span>Reacción anestésica</div>
            <div class="chk"><span class="box"></span>Náuseas/vómitos severos</div>
            <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
          </div>
        </div>
        <div class="gcol">
          <div class="slbl" style="margin-top:0">Ayuno</div>
          <div class="row"><span class="f" style="min-width:58px">Líq. claros:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true">${w}</span></span></div>
          <div class="row"><span class="f" style="min-width:58px">Lactancia:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true"></span></span></div>
          <div class="row"><span class="f" style="min-width:58px">Fórmula:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true"></span></span></div>
          <div class="row"><span class="f" style="min-width:58px">Sólidos:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true"></span></span></div>
          <div class="slbl">ASA</div>
          <div class="row">
            <div class="chk"><span class="box"></span>I</div>
            <div class="chk"><span class="box"></span>II</div>
            <div class="chk"><span class="box"></span>III</div>
            <div class="chk"><span class="box"></span>IV</div>
          </div>
          <div class="slbl">Riesgo anestésico</div>
          <div class="row">
            <div class="chk"><span class="box"></span>Bajo</div>
            <div class="chk"><span class="box"></span>Moderado</div>
            <div class="chk"><span class="box"></span>Alto</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 4 · NUTRICIÓN ── -->
  <h3 class="section">4 · Evaluación Nutricional Prequirúrgica <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="g2">
      <div class="gcol">
        <div class="metrics-inline">
          <span class="m"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" value="${A}" oninput="calcIMC()"><span style="font-size:6.5pt">kg</span></span>
          <span class="m"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" value="${m}" oninput="calcIMC()"><span style="font-size:6.5pt">cm</span></span>
          <span class="m"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly><span style="font-size:6.5pt">kg/m²</span></span>
          <span class="m"><span class="lbl">Percentil:</span><span class="val" contenteditable="true" style="min-width:28px"></span></span>
          <span class="m"><span class="lbl">Z-score:</span><span class="val" contenteditable="true" style="min-width:28px"></span></span>
        </div>
        <div class="row" style="margin-top:1px">
          <span class="f">Estado:</span>
          <div class="chk"><span class="box"></span>Adecuado</div>
          <div class="chk"><span class="box"></span>Riesgo leve</div>
          <div class="chk"><span class="box"></span>Desnutrición mod.</div>
          <div class="chk"><span class="box"></span>Desnutrición sev.</div>
          <div class="chk"><span class="box"></span>Sobrepeso</div>
          <div class="chk"><span class="box"></span>Obesidad</div>
        </div>
      </div>
      <div class="gcol">
        <div class="row">
          <span class="f">Signos alarma:</span>
          <div class="chk"><span class="box"></span>Palidez</div>
          <div class="chk"><span class="box"></span>Edema</div>
          <div class="chk"><span class="box"></span>Pérdida musc.</div>
          <div class="chk"><span class="box"></span>Deshidratación</div>
          <div class="chk"><span class="box"></span>Mala alimentación</div>
        </div>
        <div class="row">
          <span class="f">Hb disponible:</span>
          <div class="chk"><span class="box"></span>Sí</div>
          <div class="chk"><span class="box"></span>No</div>
          <span class="inline"><span class="lbl">Resultado:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
        </div>
        <div class="row">
          <span class="f">Apto nutricionalmente:</span>
          <div class="chk"><span class="box"></span>Sí</div>
          <div class="chk"><span class="box"></span>Requiere optimización</div>
          <div class="chk"><span class="box"></span>No apto</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 5 · INFECCIÓN ── -->
  <h3 class="section">5 · Evaluación Infecciosa</h3>
  <div class="sec-body">
    <div class="row">
      <span class="f">Infecciones actuales:</span>
      <div class="chk"><span class="box"></span>Ninguna</div>
      <div class="chk"><span class="box"></span>IRA</div>
      <div class="chk"><span class="box"></span>Otitis</div>
      <div class="chk"><span class="box"></span>Faringitis</div>
      <div class="chk"><span class="box"></span>Lesiones cutáneas</div>
      <div class="chk"><span class="box"></span>GI</div>
      <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
      <span class="f" style="margin-left:10px">Antibióticos recientes:</span>
      <div class="chk"><span class="box"></span>Sí</div>
      <div class="chk"><span class="box"></span>No</div>
      <span class="f" style="margin-left:10px">Vacunación al día:</span>
      <div class="chk"><span class="box"></span>Sí</div>
      <div class="chk"><span class="box"></span>No</div>
      <div class="chk"><span class="box"></span>Desconoce</div>
    </div>
  </div>

  <!-- ── 6 · EVALUACIÓN FLAP ── -->
  <h3 class="section">6 · Evaluación Específica FLAP <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="g3">
      <!-- LABIO + ALVÉOLO -->
      <div class="gcol">
        <div class="slbl" style="margin-top:0">Labio</div>
        <div class="ch">
          <div class="chk${k(X)}"><span class="box"></span>Unilateral</div>
          <div class="chk${k(_)}"><span class="box"></span>Bilateral</div>
          <div class="chk${k(E)}"><span class="box"></span>Completa</div>
          <div class="chk${k(!E&&X)}"><span class="box"></span>Incompleta</div>
        </div>
        <div class="slbl">Hallazgos labio</div>
        <div class="cv">
          <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
          <div class="chk"><span class="box"></span>Asimetría nasal</div>
          <div class="chk"><span class="box"></span>Retracción</div>
          <div class="chk"><span class="box"></span>Dehiscencia</div>
          <div class="chk"><span class="box"></span>Adherencias</div>
          <div class="chk"><span class="box"></span>Buena evolución</div>
        </div>
        <div class="slbl">Alvéolo</div>
        <div class="ch">
          <div class="chk"><span class="box"></span>Comprometido</div>
          <div class="chk"><span class="box"></span>No comprometido</div>
        </div>
      </div>
      <!-- PALADAR + NARIZ -->
      <div class="gcol">
        <div class="slbl" style="margin-top:0">Paladar</div>
        <div class="cv">
          <div class="chk${k(G)}"><span class="box"></span>Fisura residual</div>
          <div class="chk"><span class="box"></span>Fístula</div>
          <div class="chk"><span class="box"></span>Paladar corto</div>
          <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
          <div class="chk"><span class="box"></span>Cicatriz tensa</div>
        </div>
        <div class="slbl">Nariz</div>
        <div class="cv">
          <div class="chk"><span class="box"></span>Colapso nasal</div>
          <div class="chk"><span class="box"></span>Asimetría</div>
          <div class="chk"><span class="box"></span>Punta deprimida</div>
          <div class="chk"><span class="box"></span>Desviación septal</div>
        </div>
      </div>
      <!-- DENTICIÓN -->
      <div class="gcol">
        <div class="slbl" style="margin-top:0">Dentición / Ortodoncia <span class="req opt-edad">EDAD</span></div>
        <div class="cv">
          <div class="chk"><span class="box"></span>Caries</div>
          <div class="chk"><span class="box"></span>Mala higiene</div>
          <div class="chk"><span class="box"></span>Apiñamiento</div>
          <div class="chk"><span class="box"></span>Expansión maxilar</div>
          <div class="chk"><span class="box"></span>Orto. en curso</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>
</div>

<!-- ═══════════════ PÁGINA 2 ═══════════════ -->
<div class="page">
  ${H}
    <div class="doc-id">
      HC-QX&nbsp;<span contenteditable="true" style="display:inline-block;min-width:50px">${n}</span>
      &nbsp;·&nbsp;${r}&nbsp;·&nbsp;Hoja&nbsp;2/2
    </div>
  </div>

  <div class="main-title">Continuación · Examen Físico y Plan Quirúrgico</div>

  <!-- ── 7 · EXAMEN FÍSICO (colapsable) ── -->
  <h3 class="section collapsible" data-body="sec7">7 · Examen Físico Quirúrgico <span class="req obl">OBL</span> <span class="toggle-icon">▾</span></h3>
  <div id="sec7" class="sec-body collapsed">
    <div class="row" style="margin:1px 0">
      <span class="f">Estado general:</span>
      <div class="chk"><span class="box"></span>Bueno</div>
      <div class="chk"><span class="box"></span>Regular</div>
      <div class="chk"><span class="box"></span>Malo</div>
      <span style="flex:1"></span>
      <div class="metrics-inline" style="flex:none">
        <span class="m"><span class="lbl">FC:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">lpm</span></span>
        <span class="m"><span class="lbl">FR:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">rpm</span></span>
        <span class="m"><span class="lbl">SatO₂:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">%</span></span>
        <span class="m"><span class="lbl">Temp:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">°C</span></span>
        <span class="m"><span class="lbl">PA:</span><span class="val" contenteditable="true" style="min-width:36px"></span><span style="font-size:6.5pt">mmHg</span></span>
      </div>
    </div>
    <table class="clinical">
      <thead><tr><th style="width:28%">Sistema</th><th>Hallazgos</th></tr></thead>
      <tbody>
        <tr><td style="font-weight:bold;font-size:7pt">Cabeza y cuello</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Cardiovascular</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Respiratorio</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Abdomen</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Genitourinario</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Extremidades</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Neurológico</td><td class="fillable" contenteditable="true"></td></tr>
      </tbody>
    </table>
  </div>

  <!-- ── 8 · POR EDAD (colapsable) ── -->
  <h3 class="section collapsible" data-body="sec8">8 · Evaluación según Edad <span class="req opt-edad">EDAD</span> <span class="toggle-icon">▾</span></h3>
  <div id="sec8" class="sec-body collapsed">
    <div class="age-row">
      <span class="age-label">RN / Lactantes</span>
      <span class="f">Alimentación:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>L. materna</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Fórmula especial</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. succión</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Regurg. nasal</div>
      <span class="f" style="margin-left:8px">Peso apto para Qx:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Sí</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>No</div>
    </div>
    <div class="age-row">
      <span class="age-label">Preescolar / Escolar</span>
      <span class="f">Lenguaje:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Adecuado</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Hipernasalidad</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. articulatoria</div>
      <span class="f" style="margin-left:8px">Conducta:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Colaborador</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Ansioso</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Poco colaborador</div>
    </div>
    <div class="age-row">
      <span class="age-label">Adolescentes</span>
      <span class="f">Aspecto psicosocial:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Buena adaptación</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Ansiedad estética</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Baja autoestima</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Bullying</div>
    </div>
  </div>

  <!-- ── 9 · 10 · 11 — dos columnas ── -->
  <div class="g2">
    <div>
      <h3 class="section">9 · Educación y Comprensión Familiar</h3>
      <div class="sec-body">
        <table class="edu">
          <thead><tr><th class="tema">La familia comprende:</th><th>Sí</th><th>Parcial</th><th>No</th></tr></thead>
          <tbody>
            <tr><td class="tema">Objetivo de la cirugía</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Riesgos</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Cuidados postoperatorios</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Alimentación posterior</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Necesidad de seguimiento</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <h3 class="section">10 · Doc. Clínica &nbsp;·&nbsp; 11 · Impresión Diagnóstica <span class="req obl">OBL</span></h3>
      <div class="sec-body">
        <div class="row">
          <span class="f">Adjuntos:</span>
          <div class="chk"><span class="box"></span>Labs.</div>
          <div class="chk"><span class="box"></span>Rx</div>
          <div class="chk"><span class="box"></span>TC</div>
          <div class="chk"><span class="box"></span>Audiometría</div>
          <div class="chk"><span class="box"></span>Interconsultas</div>
        </div>
        <div class="slbl">Diagnóstico principal</div>
        <div class="narrative" contenteditable="true">${j}</div>
        <div class="slbl">Diagnósticos asociados</div>
        <div class="narrative" contenteditable="true"></div>
      </div>
    </div>
  </div>

  <!-- ── 12 · CONDUCTA ── -->
  <h3 class="section">12 · Conducta <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="row">
      <div class="chk"><span class="box"></span>Apto para cirugía</div>
      <div class="chk"><span class="box"></span>Requiere optim. nutricional</div>
      <div class="chk"><span class="box"></span>Requiere valoración anestésica adicional</div>
      <div class="chk"><span class="box"></span>Reprogramar cirugía</div>
      <div class="chk"><span class="box"></span>Suspender temporalmente</div>
    </div>
  </div>

  <!-- ── KERNAHAN ── -->
  <h3 class="section">Anexo 1 · Clasificación de Kernahan — Esquema Anatómico FLAP</h3>
  <div class="sec-body">
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
        <span style="display:block;margin-top:1px;font-size:5.8pt;color:var(--soft)">Haga clic en cada zona para marcar las áreas comprometidas</span>
      </div>
    </div>
  </div>

  <!-- ── 13 · FIRMA ── -->
  <h3 class="section">13 · Firma y Validación</h3>
  <div class="sec-body">
    <div class="firma-box">
      <div class="firma-line"></div>
      <div class="firma-label" contenteditable="true">${x}</div>
      <div style="font-size:6.5pt;color:var(--soft);margin-top:1px">Firma y Sello del Médico &nbsp;·&nbsp; Matrícula:&nbsp;<span contenteditable="true" style="display:inline-block;min-width:26mm;border-bottom:1px solid var(--soft)"></span></div>
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

/* ── COLLAPSIBLE SECTIONS ── */
document.querySelectorAll('h3.section.collapsible').forEach(function(h3) {
  var icon = h3.querySelector('.toggle-icon');
  h3.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-row-btn')) return;
    var bodyEl = document.getElementById(h3.dataset.body);
    if (!bodyEl) return;
    bodyEl.classList.toggle('collapsed');
    if (icon) icon.textContent = bodyEl.classList.contains('collapsed') ? '▾' : '▴';
  });
});

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

/* ── PRINT: expand all collapsed sections ── */
window.onbeforeprint = function() {
  document.querySelectorAll('.sec-body.collapsed').forEach(function(b) {
    b.classList.remove('collapsed');
    b.dataset.wasCollapsed = '1';
  });
};
window.onafterprint = function() {
  document.querySelectorAll('.sec-body[data-was-collapsed]').forEach(function(b) {
    b.classList.add('collapsed');
    delete b.dataset.wasCollapsed;
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
  var dx = ${JSON.stringify(b)};
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
  document.querySelectorAll('.sec-body').forEach(function(b) { b.classList.add('collapsed'); });
  document.querySelectorAll('h3.section.collapsible .toggle-icon').forEach(function(i) { i.textContent = '▾'; });
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
    root.querySelectorAll('.inline').forEach(function(inl) {
      var lbl = inl.querySelector('.lbl');
      var val = inl.querySelector('[contenteditable="true"]');
      if (lbl && val && val.textContent.trim()) {
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: val.textContent.trim()});
      }
    });
    root.querySelectorAll('.m').forEach(function(m) {
      var lbl = m.querySelector('.lbl');
      var inp = m.querySelector('input.val-input');
      if (lbl && inp && inp.value.trim()) {
        var unitEl = inp.nextElementSibling;
        var unit = unitEl ? ' ' + unitEl.textContent.trim() : '';
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: inp.value + unit});
      }
    });
    if (root.classList && root.classList.contains('narrative')) {
      var txt = root.textContent.trim();
      if (txt && txt.length > 5) items.push({type:'narrative', text: txt});
    }
    var tbls = (root.tagName === 'TABLE') ? [root] : Array.from(root.querySelectorAll('table:not(svg table)'));
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
  document.querySelectorAll('h3.section').forEach(function(h3) {
    var cl = h3.cloneNode(true);
    cl.querySelectorAll('span,button').forEach(function(s) { s.remove(); });
    var title = cl.textContent.trim();
    var items = [];
    var node = h3.nextElementSibling;
    while (node && node.tagName !== 'H3') { collectItems(node, items); node = node.nextElementSibling; }
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
    '.hdr{background:#1F3A5F;color:#fff;padding:8px 16px;border-radius:5px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}' +
    '.hdr h1{margin:0;font-size:10.5pt;letter-spacing:.2px}.hdr p{margin:0;font-size:7.5pt;opacity:.75;white-space:nowrap}' +
    '.tb{text-align:center;margin-bottom:10px}.tb button{background:#F4B73C;color:#1F3A5F;border:none;padding:5px 16px;font-size:9pt;font-weight:700;cursor:pointer;border-radius:3px}' +
    '.sh{background:#1F3A5F;color:#fff;padding:3px 10px;font-size:8pt;font-weight:700;letter-spacing:.3px;border-left:4px solid #F4B73C;margin-top:9px;border-radius:0 3px 3px 0}' +
    '.sb{padding:4px 8px 5px;background:#fff;border:1px solid #e2e4e8;border-top:none;border-radius:0 0 3px 3px}' +
    '.it{padding:2px 0;display:flex;align-items:baseline;gap:5px;border-bottom:1px solid #f3f4f6}.it:last-child{border-bottom:none}' +
    '.ck .tk{color:#F4B73C;font-weight:900;font-size:10pt;flex-shrink:0;line-height:1}' +
    '.fd .fl{font-size:7pt;font-weight:700;color:#1F3A5F;text-transform:uppercase;letter-spacing:.3px;white-space:nowrap;flex-shrink:0}' +
    '.fd .fv{font-family:"Courier New",monospace;font-size:9pt;color:#111;font-weight:600}' +
    '.nv{border-left:3px solid #20b2aa;padding:2px 0 2px 8px;font-style:italic;color:#374151;font-size:8.5pt;width:100%;box-sizing:border-box}' +
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
</body>
</html>`,U=window.open("","_blank","width=960,height=920");U.document.write(J),U.document.close(),U.focus()}function Ts(a){if(!a)return null;const s=Ee(a);if(!Te(s))return null;const t=new Date,i=Be(t,s),n=new Date(s.getFullYear()+i,s.getMonth(),s.getDate()),r=Ke(t,n),l=new Date(n.getFullYear(),n.getMonth()+r,n.getDate()),c=Je(t,l);return{years:i,months:r,days:c}}function Es(a){if(!a)return"—";const s=[];return a.years>0&&s.push(`${a.years}a`),a.months>0&&s.push(`${a.months}m`),(a.days>0||s.length===0)&&s.push(`${a.days}d`),s.join(" ")}function is(a){return Number(a||0).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})}function cn(a,s){const t=Ts(s==null?void 0:s.birthDate),i=a.date?Q(new Date(a.date+"T12:00"),"dd/MM/yyyy"):"—",n=(s==null?void 0:s.sex)==="masculino"?"Masculino":(s==null?void 0:s.sex)==="femenino"?"Femenino":"—",r=[{label:"Diagnóstico",value:(s==null?void 0:s.diagnosis)??"—"},{label:"Fecha de internación",value:i},{label:"Hora de internación",value:a.admissionTime||"—"},{label:"Sexo",value:n}],l=[{label:"Hora de ayuno",value:a.fastingTime||(a.fastingHours?`${a.fastingHours} h`:"—")},{label:"Peso",value:a.peso?`${a.peso} kg`:"—"},{label:"Talla",value:a.talla?`${a.talla} cm`:"—"},{label:"Edad",value:Es(t)},{label:"Alergias/Med.",value:s!=null&&s.allergies?s.allergies.substring(0,50):"—"}];return{left:r,right:l}}async function Ga(a){try{const t=await(await fetch(a)).blob();return new Promise(i=>{const n=new FileReader;n.onloadend=()=>i(n.result),n.readAsDataURL(t)})}catch{return""}}async function Yc(a,s){const t=await Ga(ze),{left:i,right:n}=cn(a,s),r=Q(new Date,"dd/MM/yyyy HH:mm"),l='<svg style="width:68px;height:68px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="32" r="18" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><path d="M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z" fill="#3D7AAB" stroke="#1F3A5F" stroke-width="1.2"/><path d="M 32 32 Q 34 30 36 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M 44 32 Q 46 30 48 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="28" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><circle cx="52" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><path d="M 36 38 Q 40 41 44 38" stroke="#1A2B42" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M 25 50 Q 25 65 40 65 Q 55 65 55 50" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><ellipse cx="22" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(-20 22 52)"/><ellipse cx="58" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(20 58 52)"/><path d="M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z" fill="#3D7AAB"/></svg>',c=t?`<div style="background:#FFFFFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;min-height:68px;flex-shrink:0;"><img src="${t}" style="width:62px;height:62px;object-fit:contain;"/></div>`:'<div style="background:#FFFFFF;padding:6px 14px;border-radius:6px;min-height:68px;display:flex;align-items:center;flex-shrink:0;"><span style="font-size:16px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',p=['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>'],b=['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>'],j=(w,A)=>w.map(({label:m,value:k},C)=>`<div style="display:grid;grid-template-columns:50px 1fr 1fr;align-items:center;padding:10px 14px 10px 10px;border-bottom:1px solid #E5EBF2;background:${C%2===1?"#F4F7FA":"#FFFFFF"};"><div style="width:32px;height:32px;border-radius:50%;background:#2B5C8A;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 1px 3px rgba(43,92,138,0.25);"><svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:#FFFFFF;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;">${A[C]}</svg></div><span style="font-size:12px;color:#5A6B82;font-weight:500;padding-left:4px;">${m}</span><span style="font-size:13px;font-weight:700;color:#1A2B42;max-width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${k}</span></div>`).join(""),u=`
    <div style="background:#1F3A5F;padding:14px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:4px solid #4FC3C2;">
      ${c}
      <div style="text-align:center;color:#FFFFFF;"><div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Centro Médico Quirúrgico</div><div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:2px;">MUNAY</div></div>
      <div style="text-align:right;color:#FFFFFF;"><div style="font-size:18px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Programación Quirúrgica</div><div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:3px;">${r}</div></div>
    </div>
    <div style="padding:14px 24px 10px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;flex-shrink:0;">
      <div><div style="font-size:22px;font-weight:700;color:#1F3A5F;letter-spacing:-0.3px;line-height:1.1;">${a.patientName??"—"}</div><div style="font-size:16px;font-weight:700;color:#3DA8A7;letter-spacing:0.5px;margin-top:5px;text-transform:uppercase;">${a.surgeryType??"—"}</div></div>
      ${l}
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 24px 18px;overflow:hidden;">
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(i,p)}</div>
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(n,b)}</div>
    </div>
    <div style="height:6px;background:#4FC3C2;flex-shrink:0;"></div>`,h=`
    <div style="background:#1F3A5F;padding:14px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:4px solid #4FC3C2;">
      ${c}
      <div style="text-align:center;color:#FFFFFF;"><div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Centro Médico Quirúrgico</div><div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:2px;">MUNAY</div></div>
      <div style="text-align:right;color:#FFFFFF;"><div style="font-size:18px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Orden de Internación</div><div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:3px;">${r}</div></div>
    </div>
    <div style="padding:14px 24px 10px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;flex-shrink:0;">
      <div><div style="font-size:22px;font-weight:700;color:#1F3A5F;letter-spacing:-0.3px;line-height:1.1;">${a.patientName??"—"}</div><div style="font-size:16px;font-weight:700;color:#3DA8A7;letter-spacing:0.5px;margin-top:5px;text-transform:uppercase;">${a.surgeryType??"—"}</div></div>
      <svg style="width:65px;height:65px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="10" fill="#C9A57B"/><circle cx="60" cy="22" r="10" fill="#C9A57B"/><circle cx="20" cy="22" r="6" fill="#E8C9A8"/><circle cx="60" cy="22" r="6" fill="#E8C9A8"/><ellipse cx="40" cy="38" rx="22" ry="20" fill="#D4B088"/><ellipse cx="40" cy="44" rx="12" ry="10" fill="#F0DAB8"/><rect x="22" y="55" width="36" height="18" rx="3" fill="#A8C5E8"/><path d="M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z" fill="#FFFFFF"/><ellipse cx="32" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><ellipse cx="48" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><circle cx="32.8" cy="35" r="0.8" fill="#FFFFFF"/><circle cx="48.8" cy="35" r="0.8" fill="#FFFFFF"/><ellipse cx="40" cy="42" rx="2.5" ry="2" fill="#2A2A3E"/><path d="M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47" stroke="#2A2A3E" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="25" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/><circle cx="55" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/></svg>
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 24px 18px;overflow:hidden;">
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(i,p)}</div>
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${j(n,b)}</div>
    </div>
    <div style="height:6px;background:#4FC3C2;flex-shrink:0;"></div>`,g=`<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/>
<title>Programación Quirúrgica — ${a.patientName}</title>
<style>
  @page { size: 8.5in 11in portrait; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 8.5in; height: 11in; font-family: Arial, sans-serif; }
  .copy { height: 5.5in; display: flex; flex-direction: column; overflow: hidden; }
  hr.divider { border: none; border-top: 2px dashed #b0bec5; }
</style>
</head>
<body>
  <div class="copy">${u}</div>
  <hr class="divider"/>
  <div class="copy">${h}</div>
</body>
</html>`,x=window.open("","_blank","width=816,height=1056");x.document.write(g),x.document.close(),x.focus(),setTimeout(()=>{x.print()},500)}async function Uc(a,s){const t=await Ga(ze),i=a.surgeon||"___________",n=a.patientName||"___________",r=(s==null?void 0:s.guardian)||"___________",l=(s==null?void 0:s.guardianIdNumber)||(s==null?void 0:s.idNumber)||"___________",c=(s==null?void 0:s.address)||"___________",p=a.surgeryType||"___________",b=(s==null?void 0:s.sex)==="masculino"?"Masculino":(s==null?void 0:s.sex)==="femenino"?"Femenino":"—",j=a.date?Q(new Date(a.date+"T12:00"),"dd/MM/yyyy"):"___________",u=t?`<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${t}" style="height:60px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',v=x=>`<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${x}</span>`,h=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
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
  ${u}
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
  <div class="pi"><span class="lbl">Sexo: </span><strong>${b}</strong></div>
  <div class="pi"><span class="lbl">CI: </span><strong>${l}</strong></div>
  <div class="pi"><span class="lbl">Representante: </span><strong>${r}</strong></div>
  <div class="pi"><span class="lbl">Procedimiento: </span><strong style="color:#3DA8A7">${p}</strong></div>
</div>
<div class="content">
  <div class="top">
    <div class="doc-title">CONSENTIMIENTO INFORMADO PARA CIRUGÍA LABIO PALADAR HENDIDO</div>
    <div class="s">Yo, ${v(r)}, PACIENTE O REPRESENTANTE LEGAL DE ${v(n)}, CON CI ${v(l)} Y DOMICILIO EN: ${v(c)}.</div>
    <div class="s"><strong>1.</strong> Por la presente <strong>AUTORIZO</strong> al ${v(i)} y a los asistentes que sean seleccionados y personal de salud, para que realice en mi persona (o en la de mi representante), el siguiente procedimiento o tratamiento: ${v(p)}</div>
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
</body></html>`,g=window.open("","_blank","width=816,height=1056");g.document.write(h),g.document.close(),g.focus(),setTimeout(()=>{g.print()},500)}async function Wc(a,s){const t=await Ga(ze),i=a.anesthesiologist||"___________",n=a.patientName||"___________",r=(s==null?void 0:s.guardian)||"___________",l=(s==null?void 0:s.guardianIdNumber)||(s==null?void 0:s.idNumber)||"___________",c=(s==null?void 0:s.sex)==="masculino"?"Masculino":(s==null?void 0:s.sex)==="femenino"?"Femenino":"—",p=a.date?Q(new Date(a.date+"T12:00"),"dd/MM/yyyy"):"___________",b=t?`<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${t}" style="height:60px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',j=h=>`<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${h}</span>`,u=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
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
  ${b}
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
    <div class="date-row">Fecha: <strong>${p}</strong></div>
  </div>
</div>
<div class="bot"></div>
</body></html>`,v=window.open("","_blank","width=816,height=1056");v.document.write(u),v.document.close(),v.focus(),setTimeout(()=>{v.print()},500)}async function Gc(a,s){const t=await Ga(ze),i=Ts(s==null?void 0:s.birthDate),n=oe(s==null?void 0:s.patientType),r=s!=null&&s.patientCode?`${n.label}-${s.patientCode}`:"",l=a.patientName||"",c=(s==null?void 0:s.idNumber)||"",p=(s==null?void 0:s.sex)==="masculino"?"Masculino":(s==null?void 0:s.sex)==="femenino"?"Femenino":"",b=(s==null?void 0:s.diagnosis)||a.surgeryType||"",j=s!=null&&s.birthDate?Q(new Date(s.birthDate+"T12:00"),"dd/MM/yyyy"):"",u=a.date?Q(new Date(a.date+"T12:00"),"dd/MM/yyyy"):"",v=a.surgeryType||"",h=a.surgeon||"",g=i?Es(i):"",x=a.peso?`${a.peso} kg`:"",w=Q(new Date,"dd/MM/yyyy"),A=t?`<div style="background:#FFF;padding:5px 10px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${t}" style="height:54px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:5px 10px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',m=["Edema","Hematoma","Sangrado","Fiebre","Vómitos / náuseas","Dehiscencia de sutura","Secreción en herida","Signos de infección","Diuresis presente","Llanto / irritabilidad"],k=["Alimentación","Tolerancia oral","Sueño","Estado general","Estado de la herida","Higiene bucal"],C=["Uso de coderas / contención de brazos","Higiene bucal con suero fisiológico","Alimentación con jeringa o cuchara","Evita biberón y chupete","Antibiótico administrado según indicación","Analgesia administrada según indicación","Curación de herida realizada","Reposo según indicación"],E=m.map(N=>`<div class="eval-row"><span class="eval-item">${N}</span><div class="eval-cell"><input type="checkbox"></div><div class="eval-cell"><input type="checkbox"></div></div>`).join(""),_=k.map(N=>`<div class="eval-row"><span class="eval-item">${N}</span><div class="eval-cell"><input type="checkbox"></div><div class="eval-cell"><input type="checkbox"></div></div>`).join(""),X=C.map(N=>`<label class="ii"><input type="checkbox"> ${N}</label>`).join(""),G=[0,1,2,3,4,5,6,7,8,9,10].map(N=>`<div class="n" data-v="${N}" onclick="selDolor(${N})">${N}</div>`).join(""),q=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
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
  ${A}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:.8">Centro Médico Quirúrgico</div>
    <div style="font-size:18px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:1px">MUNAY</div>
    <div style="font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-top:3px;background:rgba(255,255,255,0.15);padding:2px 12px;border-radius:3px;display:inline-block">CONTROL POSTOPERATORIO</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:10px;font-weight:600;opacity:.85;margin-bottom:3px">FLAP / FLP</div>
    <div style="font-size:8px;opacity:.75">${w}</div>
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
      <div class="fi"><span class="lbl">Edad:</span><input value="${g}"/></div>
      <div class="fi"><span class="lbl">F. Nacimiento:</span><input value="${j}"/></div>
    </div>
    <div class="row r4">
      <div class="fi"><span class="lbl">N° HC:</span><input value="${r}"/></div>
      <div class="fi"><span class="lbl">CI:</span><input value="${c}"/></div>
      <div class="fi"><span class="lbl">Sexo:</span><input value="${p}"/></div>
      <div class="fi"><span class="lbl">F. Cirugía:</span><input value="${u}"/></div>
    </div>
    <div class="row r3">
      <div class="fi"><span class="lbl">Diagnóstico:</span><input value="${b}"/></div>
      <div class="fi"><span class="lbl">Procedimiento:</span><input value="${v}"/></div>
      <div class="fi"><span class="lbl">Cirujano:</span><input value="${h}"/></div>
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
        ${_}
      </div>
    </div>
    <div class="dolor-wrap">
      <b style="color:#1F3A5F;white-space:nowrap;font-size:8.5pt">DOLOR (EVA):</b>
      <div class="eva">${G}</div>
      <span style="font-size:7.5pt;color:#5A6B82;white-space:nowrap">Wong-Baker</span>
    </div>
  </div>

  <div class="sec">
    <div class="sec-hdr">Cumplimiento de Indicaciones FLAP/FLP</div>
    <div class="ind">${X}</div>
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
</body></html>`,K=window.open("","_blank","width=820,height=1060");K.document.write(q),K.document.close(),K.focus()}async function Qc(a,s){const t=await Ga(ze),i=Ts(s==null?void 0:s.birthDate),n=oe(s==null?void 0:s.patientType),r=s!=null&&s.patientCode?`${n.label}-${s.patientCode}`:"",l=a.patientName||"",c=(s==null?void 0:s.idNumber)||"",p=(s==null?void 0:s.sex)==="masculino"?"Masculino":(s==null?void 0:s.sex)==="femenino"?"Femenino":"",b=(s==null?void 0:s.birthDate)||"",j=i?Es(i):"",u=a.peso?String(a.peso):"",v=(s==null?void 0:s.guardian)||"",h=(s==null?void 0:s.guardianPhone)||"",g=a.date||"",x=a.admissionTime||a.startTime||"",w=(s==null?void 0:s.diagnosis)||"",A=a.surgeryType||"",m=t?`<div style="background:#FFF;padding:5px 10px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${t}" style="height:52px;width:auto;object-fit:contain;"/></div>`:'<div style="background:#FFF;padding:5px 10px;border-radius:5px;flex-shrink:0;"><span style="font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>',k=`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
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
  ${m}
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
        <div class="f"><span class="lbl">Sexo:</span><select><option value=""></option><option ${p==="Masculino"?"selected":""}>Masculino</option><option ${p==="Femenino"?"selected":""}>Femenino</option></select></div>
        <div class="f"><span class="lbl">Fecha nac.:</span><input type="date" value="${b}"/></div>
        <div class="f"><span class="lbl">Edad:</span><input value="${j}"/></div>
      </div>
      <div class="g3">
        <div class="f"><span class="lbl">Peso (kg):</span><input value="${u}"/></div>
        <div class="f"><span class="lbl">Procedencia:</span><input placeholder="Ciudad / Comunidad"/></div>
        <div class="f"><span class="lbl">Idioma:</span><input placeholder="Español / Aymara / Quechua"/></div>
      </div>
      <div class="g2">
        <div class="f"><span class="lbl">Responsable legal:</span><input value="${v}"/></div>
        <div class="f"><span class="lbl">Teléfono contacto:</span><input type="tel" value="${h}"/></div>
      </div>
    </div>
  </div>

  <div class="bloque">
    <div class="bt">2. Datos de internación</div>
    <div class="bc">
      <div class="g2">
        <div class="f"><span class="lbl">Fecha ingreso:</span><input type="date" id="fecha_ingreso" value="${g}"/></div>
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
        <input value="${w}" placeholder="Ej: Q37.5 - Fisura labial bilateral con fisura palatina"/>
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
        <input value="${A}"/>
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
</body></html>`,C=window.open("","_blank","width=980,height=900");C.document.write(k),C.document.close(),C.focus()}const Xc=[{id:"info",label:"Información",icon:qa,adminOnly:!1},{id:"financiero",label:"Financiero",icon:ot,adminOnly:!0},{id:"historial",label:"Historial",icon:Tn,adminOnly:!1}];function Jc({surgery:a,onEdit:s,onClose:t,onCancelSurgery:i,onSuspendSurgery:n,isAdmin:r,canEdit:l}){const[c,p]=y.useState("info"),[b,j]=y.useState(!1),[u,v]=y.useState(!1),[h,g]=y.useState("suspendido"),[x,w]=y.useState(""),[A,m]=y.useState((a==null?void 0:a.date)??""),[k,C]=y.useState((a==null?void 0:a.startTime)??""),[E,_]=y.useState(!1),{patients:X,surgeries:G,therapies:q}=ye(),{user:K}=De();if(!a)return null;const N=Xc.filter(F=>!F.adminOnly||r),S=X.find(F=>F.id===a.patientId),$=Ts(S==null?void 0:S.birthDate),H=cn(a,S),J=a.date?Q(new Date(a.date+"T12:00"),"EEEE d 'de' MMMM yyyy",{locale:Ne}):"—",U=Math.max(0,Number(a.quotation||0)-Number(a.amountPaid||0)),B=a.status==="cancelado",re=G.filter(F=>F.patientId===a.patientId&&F.id!==a.id).sort((F,T)=>T.date.localeCompare(F.date)),se=q.filter(F=>F.patientId===a.patientId).sort((F,T)=>T.date.localeCompare(F.date));return e.jsxs("div",{className:"flex flex-col relative",style:{maxHeight:"85vh"},children:[e.jsxs("div",{className:"px-6 pt-5 pb-4 border-b border-gray-100",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h2",{className:"text-xl font-extrabold text-hm-primary truncate",children:a.patientName}),e.jsxs("p",{className:"text-sm text-gray-500 mt-0.5 capitalize",children:[a.surgeryType," · ",J]})]}),e.jsx("button",{onClick:t,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:e.jsx(we,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[e.jsx(Kc,{status:a.status}),a.paymentComplete&&e.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200",children:[e.jsx(va,{className:"w-3 h-3"})," Completado"]}),a.surgeryType&&e.jsx("span",{className:"inline-flex px-3 py-0.5 rounded-full text-xs font-bold bg-pink-100 text-pink-800 border border-pink-200",children:a.surgeryType}),(()=>{const F=oe(a.patientType);return e.jsxs("span",{className:"inline-flex px-3 py-0.5 rounded-full text-xs font-bold border",style:{backgroundColor:F.lightBg,color:F.textColor,borderColor:F.border},children:[F.label," · ",F.longLabel]})})()]}),e.jsx("div",{className:"flex gap-0 mt-4 border-b border-gray-100 -mb-px",children:N.map(({id:F,label:T,icon:L})=>e.jsxs("button",{onClick:()=>p(F),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${c===F?"border-hm-tertiary text-hm-primary":"border-transparent text-gray-400 hover:text-hm-primary"}`,children:[e.jsx(L,{className:"w-4 h-4"}),T]},F))})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[c==="info"&&e.jsxs("div",{className:"space-y-5",children:[e.jsxs("section",{children:[e.jsx(xi,{icon:qa,label:"Datos del paciente"}),e.jsxs("div",{className:"border border-gray-100 rounded-xl overflow-hidden",children:[e.jsx(ke,{label:"Nombre completo",value:a.patientName??"—"}),e.jsx(ke,{label:"Edad / Peso / Talla",value:[$?Es($):null,a.peso?`${a.peso} kg`:null,a.talla?`${a.talla} cm`:null].filter(Boolean).join(" · ")||"—"}),e.jsx(ke,{label:"Diagnóstico",value:(S==null?void 0:S.diagnosis)??a.patientName??"—"}),e.jsx(ke,{label:"Tipo de cirugía",value:a.surgeryType??"—"}),e.jsx(ke,{label:"Hora de inicio",value:a.startTime??"—"}),a.admissionTime&&e.jsx(ke,{label:"Hora de internación",value:a.admissionTime}),(a.fastingTime||a.fastingHours)&&e.jsx(ke,{label:"Hora de ayuno",value:a.fastingTime||`${a.fastingHours} horas`}),e.jsx(ke,{label:"Carnet de identidad",value:(S==null?void 0:S.idNumber)||"—"}),(S==null?void 0:S.allergies)&&e.jsx(ke,{label:"Alergias / Med.",value:S.allergies}),(S==null?void 0:S.guardian)&&e.jsx(ke,{label:"Responsable",value:`${S.guardian}${S.guardianPhone?` — ${S.guardianPhone}`:""}`}),a.notes&&e.jsxs("div",{className:"px-4 py-3 bg-gray-50",children:[e.jsx("p",{className:"text-xs text-gray-400 mb-1",children:"Notas clínicas"}),e.jsx("p",{className:"text-sm text-gray-700",children:a.notes})]})]})]}),e.jsxs("section",{children:[e.jsx(xi,{icon:ba,label:"Equipo quirúrgico"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsx(Ys,{role:"Cirujano principal",name:a.surgeon}),e.jsx(Ys,{role:"Anestesiólogo",name:a.anesthesiologist}),e.jsx(Ys,{role:"Instrumentadora",name:a.scrubNurse})]})]})]}),c==="financiero"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(Us,{label:"Cotización",value:is(a.quotation),color:"primary"}),e.jsx(Us,{label:"Pagado",value:is(a.amountPaid),color:"green"}),e.jsx(Us,{label:"Pendiente",value:U>0?is(U):"—",color:U>0?"red":"gray"})]}),e.jsxs("div",{className:"border border-gray-100 rounded-xl overflow-hidden",children:[e.jsx(ke,{label:"Estado de pago",value:a.paymentComplete?e.jsxs("span",{className:"flex items-center gap-1 text-green-700 font-bold",children:[e.jsx(va,{className:"w-4 h-4"}),"Pago completo"]}):e.jsxs("span",{className:"flex items-center gap-1 text-red-500 font-bold",children:[e.jsx(fs,{className:"w-4 h-4"}),"Pendiente de pago"]})}),e.jsx(ke,{label:"Ayuda social",value:a.socialAid?e.jsx("span",{className:"text-purple-700 font-bold",children:a.socialAidAmount?is(a.socialAidAmount):"Sí"}):"No"}),a.adminNotes&&e.jsx(ke,{label:"Observaciones",value:a.adminNotes})]})]}),c==="historial"&&e.jsxs("div",{className:"space-y-5",children:[e.jsxs("section",{children:[e.jsxs("p",{className:"text-xs font-bold text-hm-primary uppercase mb-2",children:["Cirugías anteriores (",re.length,")"]}),re.length===0?e.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin cirugías previas registradas."}):e.jsx("ul",{className:"space-y-2",children:re.map(F=>e.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-hm-primary",children:F.surgeryType}),e.jsxs("p",{className:"text-xs text-gray-500",children:[Q(new Date(F.date+"T12:00"),"d MMM yyyy",{locale:Ne})," · ",F.startTime," · ",F.surgeon||"—"]})]}),e.jsx(qe,{variant:F.status})]},F.id))})]}),e.jsxs("section",{children:[e.jsxs("p",{className:"text-xs font-bold text-hm-primary uppercase mb-2",children:["Terapias (",se.length,")"]}),se.length===0?e.jsx("p",{className:"text-sm text-gray-400 italic",children:"Sin terapias registradas."}):e.jsx("ul",{className:"space-y-2",children:se.map(F=>e.jsxs("li",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-hm-primary",children:F.therapyType}),e.jsxs("p",{className:"text-xs text-gray-500",children:[Q(new Date(F.date+"T12:00"),"d MMM yyyy",{locale:Ne})," · ",F.startTime," · ",F.therapist||"—"]})]}),e.jsx(qe,{variant:F.status??"programado"})]},F.id))})]})]})]}),e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex flex-wrap gap-2 items-center",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:()=>j(!0),className:"btn btn-sm border border-gray-200 text-gray-600 hover:bg-gray-50 gap-1.5",children:[e.jsx(ga,{className:"w-4 h-4"}),"Imprimir"]}),e.jsxs("button",{onClick:()=>Uc(a,S),className:"btn btn-sm border border-teal-200 text-teal-700 hover:bg-teal-50 gap-1.5",children:[e.jsx(Qe,{className:"w-4 h-4"}),"Consentimiento"]}),e.jsxs("button",{onClick:()=>Wc(a,S),className:"btn btn-sm border border-purple-200 text-purple-700 hover:bg-purple-50 gap-1.5",children:[e.jsx(Qe,{className:"w-4 h-4"}),"Anestesia"]}),e.jsxs("button",{onClick:()=>Gc(a,S),className:"btn btn-sm border border-sky-200 text-sky-700 hover:bg-sky-50 gap-1.5",children:[e.jsx(Qe,{className:"w-4 h-4"}),"Post-Op"]}),e.jsxs("button",{onClick:()=>{Qc(a,S),ea({patientId:a.patientId,documentType:"epicrisis",specialty:"Cirugía",clinicalData:{paciente:S==null?void 0:S.name,cirugia:a.surgeryType,fecha:a.date,cirujano:a.surgeon,diagnostico:S==null?void 0:S.diagnosis,alergias:S==null?void 0:S.allergies,anestesia:a.anesthesia,duracion:a.duration,hallazgos:a.findings,procedimiento:a.procedure,complicaciones:a.complications,indicaciones:a.postOpInstructions,status:a.status},user:K})},className:"btn btn-sm border border-emerald-200 text-emerald-700 hover:bg-emerald-50 gap-1.5",children:[e.jsx(Qe,{className:"w-4 h-4"}),"Epicrisis"]}),e.jsxs("button",{onClick:()=>{Vc(a,S),ea({patientId:a.patientId,documentType:"historia_quirurgica",specialty:"Cirugía",clinicalData:{paciente:S==null?void 0:S.name,fechaNac:S==null?void 0:S.birthDate,ci:S==null?void 0:S.idNumber,diagnostico:S==null?void 0:S.diagnosis,alergias:S==null?void 0:S.allergies,cirugia:a.surgeryType,fecha:a.date,cirujano:a.surgeon,anestesia:a.anesthesia,duracion:a.duration,hallazgos:a.findings,procedimiento:a.procedure,complicaciones:a.complications,status:a.status},user:K})},className:"btn btn-sm border border-indigo-200 text-indigo-700 hover:bg-indigo-50 gap-1.5",children:[e.jsx(ds,{className:"w-4 h-4"}),"Hist. Clínica Qx"]}),r&&!B&&a.status!=="suspendido"&&e.jsxs("button",{onClick:()=>{v(!0),w(""),g("suspendido"),m(a.date??""),C(a.startTime??"")},className:"btn btn-sm text-amber-700 border border-amber-300 hover:bg-amber-50 gap-1.5",children:[e.jsx($s,{className:"w-4 h-4"}),"Suspender / Reprogramar"]}),r&&a.status==="suspendido"&&e.jsxs("button",{onClick:()=>{v(!0),w(""),g("reprogramar"),m(a.date??""),C(a.startTime??"")},className:"btn btn-sm text-blue-700 border border-blue-300 hover:bg-blue-50 gap-1.5",children:[e.jsx(Tt,{className:"w-4 h-4"}),"Reprogramar"]}),r&&!B&&e.jsxs("button",{onClick:i,className:"btn btn-sm text-red-600 border border-red-200 hover:bg-red-50 gap-1.5",children:[e.jsx(Ia,{className:"w-4 h-4"}),"Cancelar"]})]}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsx("button",{onClick:t,className:"btn-secondary btn btn-sm",children:"Cerrar"}),l&&e.jsxs("button",{onClick:s,className:"btn-primary btn btn-sm",children:[e.jsx(ya,{className:"w-4 h-4"})," Editar"]})]})]}),b&&e.jsxs("div",{className:"absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden",children:[e.jsxs("div",{className:"px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ga,{className:"w-4 h-4 text-hm-primary"}),e.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Vista previa de impresión"})]}),e.jsx("button",{onClick:()=>j(!1),className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:e.jsx(we,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto flex items-center justify-center p-5",style:{backgroundColor:"#c8d0da"},children:e.jsxs("div",{style:{width:"100%",maxWidth:580,fontFamily:"Arial, sans-serif",boxShadow:"0 6px 24px rgba(0,0,0,0.3)"},children:[e.jsxs("div",{style:{backgroundColor:"white",borderBottom:"2px dashed #b0bec5"},children:[e.jsxs("div",{style:{backgroundColor:"#1F3A5F",padding:"12px 20px",display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:14,borderBottom:"4px solid #4FC3C2"},children:[e.jsx("div",{style:{backgroundColor:"#FFFFFF",padding:"5px 10px",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",minHeight:62,flexShrink:0},children:e.jsx("img",{src:ze,alt:"Logo",style:{width:54,height:54,objectFit:"contain"}})}),e.jsxs("div",{style:{textAlign:"center",color:"#FFFFFF"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",opacity:.85},children:"Centro Médico Quirúrgico"}),e.jsx("div",{style:{fontSize:20,fontWeight:900,letterSpacing:"4px",color:"#4FC3C2",marginTop:2},children:"MUNAY"})]}),e.jsxs("div",{style:{textAlign:"right",color:"#FFFFFF"},children:[e.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"Programación Quirúrgica"}),e.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.85)",marginTop:2},children:Q(new Date,"dd/MM/yyyy HH:mm")})]})]}),e.jsxs("div",{style:{padding:"12px 20px 8px",display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:19,fontWeight:700,color:"#1F3A5F",letterSpacing:"-0.3px",lineHeight:1.1},children:a.patientName??"—"}),e.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#3DA8A7",letterSpacing:"0.5px",marginTop:4,textTransform:"uppercase"},children:a.surgeryType??"—"})]}),e.jsxs("svg",{style:{width:60,height:60,flexShrink:0},viewBox:"0 0 80 80",children:[e.jsx("circle",{cx:"40",cy:"32",r:"18",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.8"}),e.jsx("path",{d:"M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z",fill:"#3D7AAB",stroke:"#1F3A5F",strokeWidth:"1.2"}),e.jsx("path",{d:"M 32 32 Q 34 30 36 32",stroke:"#1A2B42",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M 44 32 Q 46 30 48 32",stroke:"#1A2B42",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"28",cy:"36",r:"2",fill:"#F5B5C8",opacity:"0.7"}),e.jsx("circle",{cx:"52",cy:"36",r:"2",fill:"#F5B5C8",opacity:"0.7"}),e.jsx("path",{d:"M 36 38 Q 40 41 44 38",stroke:"#1A2B42",strokeWidth:"1.3",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M 25 50 Q 25 65 40 65 Q 55 65 55 50",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.8"}),e.jsx("ellipse",{cx:"22",cy:"52",rx:"4",ry:"6",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.5",transform:"rotate(-20 22 52)"}),e.jsx("ellipse",{cx:"58",cy:"52",rx:"4",ry:"6",fill:"#FFFFFF",stroke:"#1F3A5F",strokeWidth:"1.5",transform:"rotate(20 58 52)"}),e.jsx("path",{d:"M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z",fill:"#3D7AAB"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"0 20px 16px"},children:[{fields:H.left,icons:['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>']},{fields:H.right,icons:['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>']}].map(({fields:F,icons:T},L)=>e.jsx("div",{style:{border:"1px solid #D5DEE8",borderRadius:4,overflow:"hidden"},children:F.map(({label:Y,value:ee},ge)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"44px 1fr 1fr",alignItems:"center",padding:"7px 12px 7px 8px",borderBottom:"1px solid #E5EBF2",backgroundColor:ge%2===1?"#F4F7FA":"#FFFFFF"},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:"#2B5C8A",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 1px 3px rgba(43,92,138,0.25)"},children:e.jsx("svg",{viewBox:"0 0 24 24",style:{width:13,height:13,stroke:"#FFFFFF",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},dangerouslySetInnerHTML:{__html:T[ge]}})}),e.jsx("span",{style:{fontSize:10,color:"#5A6B82",fontWeight:500,paddingLeft:3},children:Y}),e.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#1A2B42",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ee})]},Y))},L))}),e.jsx("div",{style:{height:5,backgroundColor:"#4FC3C2"}})]}),e.jsxs("div",{style:{backgroundColor:"white"},children:[e.jsxs("div",{style:{backgroundColor:"#1F3A5F",padding:"12px 20px",display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:14,borderBottom:"4px solid #4FC3C2"},children:[e.jsx("div",{style:{backgroundColor:"#FFFFFF",padding:"5px 10px",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",minHeight:62,flexShrink:0},children:e.jsx("img",{src:ze,alt:"Logo",style:{width:54,height:54,objectFit:"contain"}})}),e.jsxs("div",{style:{textAlign:"center",color:"#FFFFFF"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",opacity:.85},children:"Centro Médico Quirúrgico"}),e.jsx("div",{style:{fontSize:20,fontWeight:900,letterSpacing:"4px",color:"#4FC3C2",marginTop:2},children:"MUNAY"})]}),e.jsxs("div",{style:{textAlign:"right",color:"#FFFFFF"},children:[e.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"Orden de Internación"}),e.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.85)",marginTop:2},children:Q(new Date,"dd/MM/yyyy HH:mm")})]})]}),e.jsxs("div",{style:{padding:"12px 20px 8px",display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:19,fontWeight:700,color:"#1F3A5F",letterSpacing:"-0.3px",lineHeight:1.1},children:a.patientName??"—"}),e.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#3DA8A7",letterSpacing:"0.5px",marginTop:4,textTransform:"uppercase"},children:a.surgeryType??"—"})]}),e.jsxs("svg",{style:{width:58,height:58,flexShrink:0},viewBox:"0 0 80 80",children:[e.jsx("circle",{cx:"20",cy:"22",r:"10",fill:"#C9A57B"}),e.jsx("circle",{cx:"60",cy:"22",r:"10",fill:"#C9A57B"}),e.jsx("circle",{cx:"20",cy:"22",r:"6",fill:"#E8C9A8"}),e.jsx("circle",{cx:"60",cy:"22",r:"6",fill:"#E8C9A8"}),e.jsx("ellipse",{cx:"40",cy:"38",rx:"22",ry:"20",fill:"#D4B088"}),e.jsx("ellipse",{cx:"40",cy:"44",rx:"12",ry:"10",fill:"#F0DAB8"}),e.jsx("rect",{x:"22",y:"55",width:"36",height:"18",rx:"3",fill:"#A8C5E8"}),e.jsx("path",{d:"M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z",fill:"#FFFFFF"}),e.jsx("ellipse",{cx:"32",cy:"36",rx:"2.5",ry:"3",fill:"#2A2A3E"}),e.jsx("ellipse",{cx:"48",cy:"36",rx:"2.5",ry:"3",fill:"#2A2A3E"}),e.jsx("circle",{cx:"32.8",cy:"35",r:"0.8",fill:"#FFFFFF"}),e.jsx("circle",{cx:"48.8",cy:"35",r:"0.8",fill:"#FFFFFF"}),e.jsx("ellipse",{cx:"40",cy:"42",rx:"2.5",ry:"2",fill:"#2A2A3E"}),e.jsx("path",{d:"M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47",stroke:"#2A2A3E",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"25",cy:"42",r:"2.5",fill:"#F5B5C8",opacity:"0.6"}),e.jsx("circle",{cx:"55",cy:"42",r:"2.5",fill:"#F5B5C8",opacity:"0.6"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"0 20px 16px"},children:[{fields:H.left,icons:['<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>','<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>']},{fields:H.right,icons:['<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>','<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>','<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>','<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>']}].map(({fields:F,icons:T},L)=>e.jsx("div",{style:{border:"1px solid #D5DEE8",borderRadius:4,overflow:"hidden"},children:F.map(({label:Y,value:ee},ge)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"44px 1fr 1fr",alignItems:"center",padding:"7px 12px 7px 8px",borderBottom:"1px solid #E5EBF2",backgroundColor:ge%2===1?"#F4F7FA":"#FFFFFF"},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:"#2B5C8A",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 1px 3px rgba(43,92,138,0.25)"},children:e.jsx("svg",{viewBox:"0 0 24 24",style:{width:13,height:13,stroke:"#FFFFFF",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},dangerouslySetInnerHTML:{__html:T[ge]}})}),e.jsx("span",{style:{fontSize:10,color:"#5A6B82",fontWeight:500,paddingLeft:3},children:Y}),e.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#1A2B42",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ee})]},Y))},L))}),e.jsx("div",{style:{height:5,backgroundColor:"#4FC3C2"}})]})]})}),e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0",children:[e.jsx("button",{onClick:()=>j(!1),className:"btn-secondary btn btn-sm",children:"Cancelar"}),e.jsxs("button",{onClick:()=>{j(!1),Yc(a,S)},className:"btn-primary btn btn-sm",children:[e.jsx(ga,{className:"w-4 h-4"})," Imprimir"]})]})]}),u&&e.jsxs("div",{className:"absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden",children:[e.jsxs("div",{className:"px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx($s,{className:"w-4 h-4 text-amber-600"}),e.jsx("p",{className:"text-sm font-bold text-hm-primary",children:"Suspender / Reprogramar cirugía"})]}),e.jsx("button",{onClick:()=>v(!1),className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:e.jsx(we,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"label mb-2",children:"Acción"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700",children:[e.jsx("input",{type:"radio",className:"accent-amber-500",checked:h==="suspendido",onChange:()=>g("suspendido")}),e.jsx("span",{children:"Suspender (sin nueva fecha)"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700",children:[e.jsx("input",{type:"radio",className:"accent-hm-primary",checked:h==="reprogramar",onChange:()=>g("reprogramar")}),e.jsx("span",{children:"Reprogramar a nueva fecha"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Justificación / Motivo *"}),e.jsx("textarea",{rows:3,className:"input resize-none",placeholder:"Indique el motivo de la suspensión o reprogramación...",value:x,onChange:F=>w(F.target.value)})]}),h==="reprogramar"&&e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Nueva fecha *"}),e.jsx("input",{type:"date",className:"input",value:A,onChange:F=>m(F.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Nueva hora de inicio *"}),e.jsx("input",{type:"time",className:"input",value:k,onChange:F=>C(F.target.value)})]})]})]}),e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0",children:[e.jsx("button",{onClick:()=>v(!1),className:"btn-secondary btn btn-sm",children:"Cancelar"}),e.jsx("button",{disabled:E||!x.trim()||h==="reprogramar"&&(!A||!k),onClick:async()=>{_(!0);const F=h==="reprogramar"?{status:"programado",date:A,startTime:k,suspendReason:x.trim(),suspendDate:Q(new Date,"yyyy-MM-dd")}:{status:"suspendido",suspendReason:x.trim(),suspendDate:Q(new Date,"yyyy-MM-dd")};try{await n(a.id,F),v(!1)}finally{_(!1)}},className:`btn btn-sm text-white gap-1.5 ${h==="reprogramar"?"btn-primary":"bg-amber-600 hover:bg-amber-700"}`,children:E?e.jsx(Ye,{className:"w-4 h-4 animate-spin"}):h==="reprogramar"?e.jsxs(e.Fragment,{children:[e.jsx(Tt,{className:"w-4 h-4"})," Reprogramar"]}):e.jsxs(e.Fragment,{children:[e.jsx($s,{className:"w-4 h-4"})," Suspender"]})})]})]})]})}function Kc({status:a}){const s={programado:"bg-hm-secondary-100 text-hm-primary border-hm-secondary-200",confirmado:"bg-blue-100 text-blue-800 border-blue-200",realizado:"bg-green-100 text-green-800 border-green-200",cancelado:"bg-red-100 text-red-700 border-red-200",suspendido:"bg-amber-100 text-amber-800 border-amber-200"},t={programado:"Programada",confirmado:"Confirmada",realizado:"Realizada",cancelado:"Cancelada",suspendido:"Suspendida"};return e.jsxs("span",{className:`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold border ${s[a]??"bg-gray-100 text-gray-700 border-gray-200"}`,children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-current inline-block opacity-60"}),t[a]??a]})}function xi({icon:a,label:s}){return e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-lg flex items-center justify-center",style:{backgroundColor:"rgba(26,54,93,0.08)"},children:e.jsx(a,{className:"w-4 h-4 text-hm-primary"})}),e.jsx("p",{className:"text-sm font-bold text-hm-primary",children:s})]})}function ke({label:a,value:s}){return e.jsxs("div",{className:"flex items-start justify-between px-4 py-3 border-b border-gray-50 last:border-b-0",children:[e.jsx("span",{className:"text-sm text-gray-400 shrink-0 w-40",children:a}),e.jsx("span",{className:"text-sm font-semibold text-hm-primary text-right flex-1 ml-4",children:s??"—"})]})}function Ys({role:a,name:s}){return e.jsxs("div",{className:"border border-gray-100 rounded-xl p-3 bg-gray-50",children:[e.jsx("p",{className:"text-xs text-gray-400 mb-1",children:a}),e.jsx("p",{className:"text-sm font-bold text-hm-primary",children:s||"—"})]})}function Us({label:a,value:s,color:t}){const i={primary:"text-hm-primary",green:"text-green-700",red:"text-red-600",gray:"text-gray-300"};return e.jsxs("div",{className:"border border-gray-100 rounded-xl p-4 text-center bg-gray-50",children:[e.jsx("p",{className:"text-xs text-gray-400 mb-1",children:a}),e.jsx("p",{className:`text-base font-extrabold ${i[t]}`,children:s})]})}const Zc=90;function ed(a,s){const[t,i]=a.split(":").map(Number),n=t*60+i+s;return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`}function ad(){const{patients:a,setPatients:s,surgeries:t,setSurgeries:i,setTherapies:n}=ye(),{isAdmin:r,canEdit:l}=De(),c=y.useRef(null),[p,b]=y.useState(!1),[j,u]=y.useState(!1),[v,h]=y.useState(null),[g,x]=y.useState(null),[w,A]=y.useState(!1),[m,k]=y.useState("all"),[C,E]=y.useState(null);y.useEffect(()=>{const T=ks(s),L=Cs(i),Y=Fs(n);return()=>{T(),L(),Y()}},[]);const X=y.useMemo(()=>m==="all"?t:t.filter(T=>T.status===m),[t,m]).filter(T=>T.status!=="cancelado").map(T=>{const Y=T.status==="suspendido"?{backgroundColor:"#9ca3af",borderColor:"#6b7280",textColor:"#fff"}:Ot[T.patientType]??Ot.ext,ee=ed(T.startTime,Zc);return{id:T.id,title:T.patientName,start:`${T.date}T${T.startTime}`,end:`${T.date}T${ee}`,...Y,extendedProps:T}}),G=T=>{x(T?{date:T}:null),b(!0)},q=()=>{u(!1),b(!0)},K=()=>{u(!1),x(null)},N=({event:T})=>{E(null),x(T.extendedProps),u(!0)},S=({dateStr:T})=>{l&&G(T)},$=({event:T,jsEvent:L})=>{const Y=T.extendedProps,ee=a.find(ge=>ge.id===Y.patientId);E({surgery:Y,patient:ee,x:L.clientX,y:L.clientY})},H=()=>E(null),J=async({event:T,revert:L})=>{if(!l){L();return}const Y=T.extendedProps,ee=Q(T.start,"yyyy-MM-dd"),ge=Q(T.start,"HH:mm");try{await as(Y.id,{date:ee,startTime:ge}),V.success("Cirugía reprogramada")}catch{L(),V.error("Error al reprogramar")}},U=async T=>{A(!0);try{g!=null&&g.id?(await as(g.id,T),V.success("Cirugía actualizada")):(await ho(T),V.success("Cirugía programada")),b(!1),x(null)}catch(L){V.error("Error: "+L.message)}finally{A(!1)}},B=async()=>{if(v)try{await as(v.id,{status:"cancelado"}),V.success("Cirugía cancelada"),u(!1)}catch(T){V.error("Error: "+T.message)}finally{h(null)}},re=async(T,L)=>{try{await as(T,L),V.success(L.status==="suspendido"?"Cirugía suspendida":"Cirugía reprogramada"),u(!1),x(null)}catch(Y){throw V.error("Error: "+Y.message),Y}},se=()=>{var Y;const T=(Y=c.current)==null?void 0:Y.getApi(),L=Q(T?T.getDate():new Date,"yyyy-MM-dd");Ac(t,L)},F=()=>{var ee;const T=(ee=c.current)==null?void 0:ee.getApi(),L=T?na(T.getDate(),{weekStartsOn:1}):na(new Date,{weekStartsOn:1}),Y=Array.from({length:7},(ge,ra)=>Q(mr(L,ra),"yyyy-MM-dd"));Dc(t,Y)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"card py-3",children:e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("div",{className:"flex gap-1.5 flex-wrap",children:[{v:"all",l:"Todas"},{v:"programado",l:"Programadas"},{v:"confirmado",l:"Confirmadas"},{v:"realizado",l:"Realizadas"},{v:"suspendido",l:"Suspendidas"}].map(({v:T,l:L})=>e.jsx("button",{onClick:()=>k(T),className:`btn btn-sm ${m===T?"btn-primary":"btn-secondary"}`,children:L},T))}),e.jsxs("div",{className:"ml-auto flex gap-2 flex-wrap items-center",children:[e.jsxs("div",{className:"flex items-center gap-3 mr-2 flex-wrap",children:[e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[e.jsx("span",{className:"w-3 h-3 rounded-full inline-block",style:{backgroundColor:"#1e40af"}})," MNY"]}),e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[e.jsx("span",{className:"w-3 h-3 rounded-full inline-block",style:{backgroundColor:"#ea580c"}})," JWI"]}),e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-green-600 inline-block"})," EXT"]}),e.jsx("span",{className:"w-px h-4 bg-gray-200"}),e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-green-500"})," Pagado"]}),e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-yellow-400"})," Parcial"]}),e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-600",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full inline-block bg-red-500"})," Sin pago"]})]}),e.jsxs("button",{onClick:se,className:"btn-secondary btn btn-sm",children:[e.jsx(ga,{className:"w-4 h-4"})," Día"]}),e.jsxs("button",{onClick:F,className:"btn-secondary btn btn-sm",children:[e.jsx(ga,{className:"w-4 h-4"})," Semana"]}),e.jsx("button",{onClick:()=>Fc(t),className:"btn-secondary btn btn-sm",title:"CSV",children:e.jsx(pt,{className:"w-4 h-4"})}),l&&e.jsxs("button",{onClick:()=>G(),className:"btn-primary btn btn-sm",children:[e.jsx(ia,{className:"w-4 h-4"})," Nueva cirugía"]})]})]})}),e.jsx("div",{className:"card p-3 md:p-5",children:e.jsx(ji,{ref:c,plugins:[wi,Ni,ki,Ci],initialView:"dayGridMonth",locale:on,height:"auto",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},events:X,editable:l,selectable:l,dateClick:S,eventClick:N,eventDrop:J,eventMouseEnter:$,eventMouseLeave:H,eventContent:T=>{const L=T.event.extendedProps,Y=L.paymentComplete?"#22c55e":Number(L.amountPaid)>0?"#eab308":"#ef4444";return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,padding:"0 4px",overflow:"hidden",height:"100%",width:"100%"},children:[e.jsx("span",{style:{width:7,height:7,minWidth:7,borderRadius:"50%",backgroundColor:Y,border:"1.5px solid rgba(255,255,255,0.8)"}}),e.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"0.72rem",fontWeight:600},children:T.event.title})]})},eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!1},slotMinTime:"06:00:00",slotMaxTime:"22:00:00",allDaySlot:!1,nowIndicator:!0,eventDisplay:"block",dayMaxEvents:4,moreLinkText:T=>`+${T} más`,noEventsText:"Sin cirugías en este período",buttonText:{today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Lista"}})}),C&&e.jsx("div",{className:"fixed z-[200] pointer-events-none",style:{left:Math.min(C.x+16,window.innerWidth-272),top:C.y-8},children:(()=>{var L;const T=oe(C.surgery.patientType);return e.jsxs("div",{className:"w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden",children:[e.jsxs("div",{className:"px-4 py-2.5 flex items-center justify-between gap-2",style:{backgroundColor:T.bg},children:[e.jsx("p",{className:"text-white font-extrabold text-sm truncate",children:C.surgery.patientName}),e.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-white/20 text-white",children:T.label})]}),e.jsxs("div",{className:"px-4 py-3 space-y-2",children:[((L=C.patient)==null?void 0:L.diagnosis)&&e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Diagnóstico"}),e.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:C.patient.diagnosis})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Tipo de cirugía"}),e.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:C.surgery.surgeryType||"—"})]}),r&&C.surgery.quotation>0&&e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide",style:{color:"#72A0C1"},children:"Cotización"}),e.jsx("p",{className:"text-xs font-semibold text-hm-primary mt-0.5",children:Number(C.surgery.quotation).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})})]}),e.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-gray-50",children:[e.jsx("span",{className:"text-[10px] text-gray-400",children:C.surgery.startTime}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full capitalize",style:{backgroundColor:C.surgery.status==="confirmado"?"#dbeafe":C.surgery.status==="realizado"?"#dcfce7":"#f1f5f9",color:C.surgery.status==="confirmado"?"#1d4ed8":C.surgery.status==="realizado"?"#15803d":"#475569"},children:C.surgery.status}),e.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full",style:{backgroundColor:T.lightBg,color:T.textColor},children:T.longLabel})]})]})]})]})})()}),e.jsx(wa,{open:p,onClose:()=>{b(!1),x(null)},title:g!=null&&g.id?"Editar cirugía":"Nueva cirugía",size:"xl",children:e.jsx(Hc,{initial:g,onSubmit:U,onCancel:()=>{b(!1),x(null)},busy:w})}),j&&g&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:T=>{T.target===T.currentTarget&&K()},children:e.jsx("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden",style:{maxHeight:"92vh"},children:e.jsx(Jc,{surgery:g,onEdit:q,onClose:K,onCancelSurgery:()=>h(g),onSuspendSurgery:re,isAdmin:r,canEdit:l})})}),e.jsx($a,{open:!!v,title:"Cancelar cirugía",message:`¿Marcar la cirugía de ${v==null?void 0:v.patientName} como cancelada?`,confirmLabel:"Sí, cancelar",onConfirm:B,onCancel:()=>h(null)})]})}const Ps="therapists",sd=a=>Ha(Ue(pe,Ps),s=>a(s.docs.map(t=>({id:t.id,...t.data()})))),td=a=>Va(Ue(pe,Ps),a),id=(a,s)=>Ba(He(pe,Ps,a),s),nd=a=>Ya(He(pe,Ps,a));function rd({patients:a,value:s,onChange:t,error:i}){const[n,r]=y.useState(""),[l,c]=y.useState(!1),p=y.useRef(null),b=y.useRef(null);y.useEffect(()=>{if(s){const g=a.find(x=>x.id===s);g&&r(g.fullName??"")}else r("")},[s,a]),y.useEffect(()=>{const g=x=>{p.current&&!p.current.contains(x.target)&&c(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]);const j=y.useMemo(()=>{const g=n.toLowerCase().trim();return(g?a.filter(w=>{var A,m,k;return((A=w.fullName)==null?void 0:A.toLowerCase().includes(g))||((m=w.patientCode)==null?void 0:m.toLowerCase().includes(g))||((k=w.diagnosis)==null?void 0:k.toLowerCase().includes(g))}):a).slice(0,12)},[a,n]),u=a.find(g=>g.id===s),v=g=>{t(g.id),r(g.fullName??""),c(!1)},h=()=>{var g;t(""),r(""),(g=b.current)==null||g.focus()};return e.jsxs("div",{ref:p,className:"relative",children:[e.jsxs("div",{className:`flex items-center border rounded-lg bg-white transition-colors
        ${i?"border-red-400":l?"border-blue-400 ring-2 ring-blue-100":"border-gray-200"}`,children:[e.jsx(bs,{className:"w-4 h-4 text-gray-400 ml-3 shrink-0"}),e.jsx("input",{ref:b,type:"text",value:n,onChange:g=>{r(g.target.value),c(!0),t("")},onFocus:()=>c(!0),onKeyDown:g=>{g.key==="Escape"&&c(!1)},placeholder:"Buscar por nombre, código o diagnóstico…",className:"flex-1 px-2 py-2 text-sm bg-transparent outline-none placeholder-gray-400"}),s&&e.jsx("button",{type:"button",onClick:h,className:"p-1.5 mr-1 text-gray-400 hover:text-gray-600 rounded",children:e.jsx(we,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",onClick:()=>c(g=>!g),className:"p-1.5 mr-1 text-gray-400 hover:text-gray-600 rounded",children:e.jsx(ct,{className:`w-3.5 h-3.5 transition-transform ${l?"rotate-180":""}`})})]}),l&&e.jsxs("div",{className:"absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden",style:{maxHeight:280},children:[j.length===0?e.jsx("div",{className:"px-4 py-3 text-sm text-gray-400 text-center",children:n?"Sin resultados para esta búsqueda":"Sin pacientes registrados"}):e.jsx("ul",{className:"overflow-y-auto",style:{maxHeight:278},children:j.map(g=>e.jsx("li",{onClick:()=>v(g),className:`px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0
                      ${g.id===s?"bg-blue-50":""}`,children:e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-900 leading-tight truncate",children:g.fullName}),g.diagnosis&&e.jsx("p",{className:"text-xs text-gray-500 truncate mt-0.5",children:g.diagnosis})]}),e.jsxs("div",{className:"flex flex-col items-end shrink-0 gap-0.5",children:[g.patientCode&&e.jsx("span",{className:"text-[10px] font-mono text-gray-400",children:g.patientCode}),xa(g.birthDate)&&e.jsx("span",{className:"text-[10px] text-gray-400",children:xa(g.birthDate)})]})]})},g.id))}),e.jsxs("div",{className:"px-3 py-1.5 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-right",children:[j.length," de ",a.length," pacientes"]})]}),u&&e.jsxs("div",{className:"mt-1.5 flex flex-wrap gap-3 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5 text-xs text-blue-700",children:[xa(u.birthDate)&&e.jsxs("span",{children:["Edad: ",e.jsx("strong",{children:xa(u.birthDate)})]}),u.diagnosis&&e.jsxs("span",{children:["Dx: ",e.jsx("strong",{children:u.diagnosis})]}),u.guardian&&e.jsxs("span",{children:["Tutor: ",e.jsx("strong",{children:u.guardian})]}),u.guardianPhone&&e.jsxs("span",{children:["Tel: ",e.jsx("strong",{children:u.guardianPhone})]})]})]})}function ld({specialty:a,value:s,onChange:t,therapistsList:i=[],dayOfWeek:n=null}){const{available:r,unavailable:l}=y.useMemo(()=>{const u=a?i.filter(g=>g.specialty===a):i;if(n===null)return{available:u,unavailable:[]};const v=u.filter(g=>{var x;return(x=g.schedule)==null?void 0:x.some(w=>w.day===n)}),h=u.filter(g=>{var x;return!((x=g.schedule)!=null&&x.some(w=>w.day===n))});return{available:v,unavailable:h}},[i,a,n]),c=[...r,...l],[p,b]=y.useState(!1);if(y.useEffect(()=>{s&&c.length>0&&(c.some(v=>v.name===s)||b(!0))},[s,c]),p||c.length===0)return e.jsxs("div",{className:"space-y-1",children:[e.jsx("input",{value:s,onChange:u=>t(u.target.value),className:"input",placeholder:"Nombre del profesional"}),c.length>0&&e.jsx("button",{type:"button",onClick:()=>{b(!1),t("")},className:"text-xs text-blue-600 hover:text-blue-800",children:"← Ver lista configurada"})]});const j=(u,v)=>{var x;const h=s===u.name,g=((x=u.schedule)==null?void 0:x.map(w=>`${w.dayName} (${w.shifts.map(A=>A==="mañana"?"M":"T").join("+")})`).join(" · "))??"";return e.jsxs("button",{type:"button",onClick:()=>!v&&t(h?"":u.name),className:`text-left rounded-lg border px-3 py-2 text-xs transition-all
          ${h?"bg-blue-600 text-white border-blue-600 shadow-sm":v?"bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed opacity-60":"bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50"}`,children:[e.jsx("div",{className:"font-semibold",children:u.name}),e.jsxs("div",{className:`text-[10px] mt-0.5 ${h?"text-blue-200":v?"text-gray-300":"text-gray-400"}`,children:[u.specialty," · ",g,v&&n!==null&&" · no disponible este día"]})]},u.id??u.name)};return e.jsxs("div",{className:"space-y-1.5",children:[n!==null&&r.length===0&&l.length>0&&e.jsx("p",{className:"text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-1.5 border border-amber-100",children:"Sin terapistas disponibles para este día según su horario registrado."}),e.jsxs("div",{className:"grid grid-cols-1 gap-1",children:[r.map(u=>j(u,!1)),l.map(u=>j(u,!0))]}),e.jsx("button",{type:"button",onClick:()=>b(!0),className:"text-xs text-gray-400 hover:text-gray-600",children:"+ Ingresar otro nombre"})]})}function od({initial:a,onSubmit:s,onCancel:t,busy:i}){const{patients:n,therapists:r}=ye(),l=y.useMemo(()=>[...n].sort((G,q)=>(G.fullName??"").localeCompare(q.fullName??"","es")),[n]),{register:c,handleSubmit:p,watch:b,reset:j,setValue:u,formState:{errors:v}}=As({defaultValues:a??{patientId:"",therapyType:"",date:"",startTime:"",durationMinutes:45,therapist:"",status:"programado",notes:""}});y.useEffect(()=>{a&&j(a)},[a]);const h=b("patientId"),g=b("therapyType"),x=b("therapist"),w=b("date"),A=y.useMemo(()=>w?new Date(w+"T12:00").getDay():null,[w]),[m,k]=y.useState(!1),[C,E]=y.useState(!1),_=async G=>{E(!0);try{const q=await _i(G);u("patientId",q.id,{shouldValidate:!0}),k(!1),V.success("Paciente registrado")}catch(q){V.error(q.message)}finally{E(!1)}},X=G=>{const q=n.find(K=>K.id===G.patientId);s({...G,patientName:(q==null?void 0:q.fullName)??"",patientType:(q==null?void 0:q.patientType)??"external"})};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:p(X),className:"space-y-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"label mb-0",children:"Paciente *"}),e.jsxs("button",{type:"button",onClick:()=>k(!0),className:"flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors",children:[e.jsx(Qs,{className:"w-3.5 h-3.5"}),"Nuevo paciente"]})]}),e.jsx("input",{type:"hidden",...c("patientId",{required:"Selecciona un paciente"})}),e.jsx(rd,{patients:l,value:h,onChange:G=>u("patientId",G,{shouldValidate:!0}),error:!!v.patientId}),v.patientId&&e.jsx("p",{className:"error-msg mt-1",children:v.patientId.message})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Especialidad *"}),e.jsxs("select",{className:`input ${v.therapyType?"input-error":""}`,...c("therapyType",{required:"Requerido"}),children:[e.jsx("option",{value:"",children:"Seleccionar..."}),$i.map(G=>e.jsx("option",{value:G,children:G},G))]}),v.therapyType&&e.jsx("p",{className:"error-msg",children:v.therapyType.message})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Estado"}),e.jsx("select",{className:"input",...c("status"),children:gt.map(G=>e.jsx("option",{value:G,children:La[G].label},G))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Fecha *"}),e.jsx("input",{type:"date",className:`input ${v.date?"input-error":""}`,...c("date",{required:"Requerido"})}),v.date&&e.jsx("p",{className:"error-msg",children:v.date.message})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Hora *"}),e.jsx("input",{type:"time",className:`input ${v.startTime?"input-error":""}`,...c("startTime",{required:"Requerido"})}),v.startTime&&e.jsx("p",{className:"error-msg",children:v.startTime.message})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Duración (min)"}),e.jsx("input",{type:"number",min:"15",max:"240",step:"5",className:"input",...c("durationMinutes")})]})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Terapeuta"}),e.jsx(ld,{specialty:g,value:x,onChange:G=>u("therapist",G),therapistsList:r,dayOfWeek:A}),e.jsx("input",{type:"hidden",...c("therapist")})]}),e.jsxs("div",{className:"form-group mb-0",children:[e.jsx("label",{className:"label",children:"Observaciones"}),e.jsx("textarea",{rows:2,className:"input resize-none",...c("notes")})]}),e.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[e.jsx("button",{type:"button",onClick:t,className:"btn-secondary btn",children:"Cancelar"}),e.jsx("button",{type:"submit",disabled:i,className:"btn-primary btn",children:i?e.jsx(Ye,{className:"w-4 h-4 animate-spin"}):a!=null&&a.id?"Guardar cambios":"Agendar terapia"})]})]}),e.jsx(wa,{open:m,onClose:()=>k(!1),title:"Registrar nuevo paciente",size:"lg",children:e.jsx(Xi,{onSubmit:_,onCancel:()=>k(!1),busy:C})})]})}const dn=["08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00"],pn=["14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"],un=[...dn,...pn];function cd(a){if(!a)return null;const[s,t]=a.split(":").map(Number),i=`${String(s).padStart(2,"0")}:${t<30?"00":"30"}`;return un.includes(i)?i:null}function dd({therapy:a,onCard:s,onAttend:t}){const i=Ae(a.therapyType),n=ta(a.status);return e.jsxs("div",{onClick:r=>{r.stopPropagation(),s(a)},className:"text-[10px] rounded border-l-2 bg-white p-1 mb-0.5 cursor-pointer hover:shadow-md transition-shadow group relative",style:{borderLeftColor:i.color,boxShadow:"0 1px 2px rgba(0,0,0,.06)"},children:[e.jsx("div",{className:"font-semibold truncate text-gray-800 leading-tight",children:a.patientName}),e.jsxs("div",{className:"flex items-center justify-between gap-0.5 mt-0.5",children:[e.jsx("span",{className:"truncate text-[9px]",style:{color:i.color},children:a.therapyType}),e.jsx("span",{className:`text-[8px] px-1 py-px rounded font-bold border shrink-0 ${n.tw}`,children:n.short})]}),a.therapist&&e.jsx("div",{className:"text-gray-400 truncate text-[9px] mt-0.5",children:a.therapist}),e.jsx("button",{onClick:r=>{r.stopPropagation(),t(a)},className:"absolute bottom-1 right-1 text-[8px] text-blue-600 hover:text-blue-800 hidden group-hover:block bg-blue-50 rounded px-1 py-px font-medium",children:"✓"})]})}function pd({therapies:a,patients:s,selectedDate:t,onDateSelect:i,onCard:n,onAttend:r,onScheduleSlot:l,isAdmin:c}){const p=y.useMemo(()=>Ma(t),[t]),b=y.useMemo(()=>{const g={};for(const x of p){g[x]={};for(const w of un)g[x][w]=[]}for(const x of a){if(!p.includes(x.date))continue;const w=cd(x.startTime);w&&g[x.date][w].push(x)}return g},[a,p]),j=y.useMemo(()=>{const g={};for(const x of p){const w=a.filter(A=>A.date===x);g[x]={total:w.length,attended:w.filter(A=>_a.includes(A.status)).length}}return g},[a,p]),u=130,v=g=>g.map(x=>e.jsxs("tr",{className:"border-b border-gray-100 hover:bg-blue-50/10 transition-colors",children:[e.jsx("td",{className:"sticky left-0 z-10 bg-gray-50 border-r border-gray-200 text-center py-1.5 px-1 font-mono text-[10px] font-bold text-gray-600 align-top whitespace-nowrap w-14",style:{verticalAlign:"top"},children:x}),p.map(w=>{var E;const A=((E=b[w])==null?void 0:E[x])??[],m=w===ha,k=w===t,C=c&&!A.length;return e.jsxs("td",{onClick:()=>C&&l(w,x),className:`align-top p-1 border-r border-gray-100 transition-colors group/cell
                  ${k?"bg-blue-50/60":m?"bg-amber-50/30":""}
                  ${C?"cursor-pointer hover:bg-blue-50/40":""}`,style:{minWidth:u,verticalAlign:"top"},children:[A.map(_=>e.jsx(dd,{therapy:_,onCard:n,onAttend:r},_.id)),C&&e.jsx("div",{className:"h-5 border border-dashed border-transparent group-hover/cell:border-blue-300 rounded text-[8px] text-transparent group-hover/cell:text-blue-400 flex items-center justify-center transition-all select-none",children:"+ agendar"})]},w)})]},x)),h=!a.some(g=>p.includes(g.date));return e.jsx("div",{className:"overflow-auto rounded-lg border border-gray-100",style:{maxHeight:"65vh"},children:e.jsxs("table",{className:"border-collapse text-xs",style:{minWidth:`${64+p.length*u}px`,tableLayout:"fixed"},children:[e.jsx("thead",{className:"sticky top-0 z-20",children:e.jsxs("tr",{children:[e.jsx("th",{className:"sticky left-0 z-30 bg-gray-900 text-white text-center py-2 px-1 w-14 text-[8px] font-bold uppercase tracking-widest border-r border-gray-700",children:"HORA"}),p.map(g=>{const x=new Date(g+"T12:00"),w=x.toLocaleDateString("es",{weekday:"long"}),A=x.toLocaleDateString("es",{day:"numeric",month:"short"}),m=g===ha,k=g===t,C=j[g]??{total:0,attended:0};return e.jsxs("th",{onClick:()=>i(g),style:{minWidth:u,borderRight:"1px solid rgba(255,255,255,.15)",cursor:"pointer"},className:`py-2 px-2 text-center hover:opacity-80 transition-opacity select-none
                      ${k?"bg-blue-500":m?"bg-blue-800":"bg-gray-800"}`,children:[e.jsx("div",{className:"capitalize text-white font-bold text-[10px]",children:w}),e.jsx("div",{className:"text-[8px] text-gray-400",children:A}),C.total>0&&e.jsxs("div",{className:"mt-0.5 flex justify-center gap-1",children:[e.jsx("span",{className:"bg-white/20 text-white text-[8px] px-1 py-px rounded font-bold",children:C.total}),C.attended>0&&e.jsxs("span",{className:"bg-green-500/70 text-white text-[8px] px-1 py-px rounded font-bold",children:["✓",C.attended]})]})]},g)})]})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:p.length+1,className:"bg-blue-900 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 sticky left-0 z-10",children:"☀ TURNO MAÑANA · 08:30 – 13:00"})}),v(dn),e.jsx("tr",{children:e.jsx("td",{colSpan:p.length+1,className:"bg-orange-700 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 sticky left-0 z-10",children:"🌤 TURNO TARDE · 14:30 – 19:00"})}),v(pn),h&&e.jsx("tr",{children:e.jsxs("td",{colSpan:p.length+1,className:"py-12 text-center text-gray-400",children:[e.jsx("div",{className:"text-3xl mb-2",children:"📅"}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Sin terapias esta semana"}),c&&e.jsx("p",{className:"text-xs mt-1",children:"Hacé click en una celda para agendar"})]})})]})]})})}function ud({therapy:a,onCard:s,onAttend:t}){const i=ta(a.status);return e.jsxs("div",{onClick:()=>s(a),className:"flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[11px] font-semibold text-gray-800 truncate leading-tight",children:a.patientName}),e.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[a.startTime&&e.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:a.startTime}),a.therapist&&e.jsx("span",{className:"text-[9px] text-gray-400 truncate",children:a.therapist})]})]}),e.jsxs("div",{className:"flex items-center gap-0.5 shrink-0",children:[e.jsx("span",{className:`text-[8px] px-1 py-px rounded font-bold border ${i.tw}`,children:i.short}),e.jsx("button",{onClick:n=>{n.stopPropagation(),t(a)},className:"text-[8px] text-blue-600 hidden group-hover:block bg-blue-100 rounded px-1 py-px font-medium",children:"✓"})]})]})}function mn({specialty:a,therapies:s,onCard:t,onAttend:i,onSchedule:n,isAdmin:r}){const l=Ae(a);return e.jsxs("div",{className:"rounded-xl overflow-hidden flex flex-col shadow-sm border border-gray-100",style:{borderTop:`3px solid ${l.color}`},children:[e.jsxs("div",{className:"px-3 py-2 flex items-center justify-between gap-1",style:{background:l.light},children:[e.jsx("span",{className:"text-xs font-bold leading-tight truncate",style:{color:l.color},children:a}),s.length>0&&e.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white shrink-0",style:{background:l.color},children:s.length})]}),e.jsx("div",{className:"flex-1 p-2 space-y-1 min-h-[56px]",style:{background:s.length?"#fafafa":"#fff"},children:s.length===0?e.jsx("div",{className:"flex items-center justify-center h-12 text-[10px] text-gray-300 select-none",children:"Disponible"}):s.map(c=>e.jsx(ud,{therapy:c,onCard:t,onAttend:i},c.id))}),r&&e.jsx("div",{className:"px-2 pb-2 bg-white",children:e.jsxs("button",{onClick:()=>n(a),className:"w-full flex items-center justify-center gap-1 py-1.5 rounded-lg border-2 border-dashed border-gray-200 text-[10px] text-gray-400 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50 transition-colors",children:[e.jsx(ia,{className:"w-3 h-3"}),"Agendar"]})})]})}function hi({title:a,subtitle:s,headerClass:t,specialties:i,bySpecialty:n,shift:r,onCard:l,onAttend:c,onScheduleWithSpecialty:p,isAdmin:b}){return i.length?e.jsxs("div",{children:[e.jsxs("div",{className:`flex items-center gap-3 px-3 py-2 rounded-xl mb-3 ${t}`,children:[e.jsx("span",{className:"text-sm font-bold",children:a}),e.jsx("span",{className:"text-xs opacity-75",children:s}),e.jsxs("span",{className:"ml-auto text-xs font-semibold opacity-75",children:[i.length," especialidades"]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3",children:i.map(j=>{var u;return e.jsx(mn,{specialty:j,therapies:((u=n[j])==null?void 0:u[r])??[],onCard:l,onAttend:c,onSchedule:v=>p(v,r),isAdmin:b},j)})})]}):null}function md({therapies:a,patients:s,date:t,onCard:i,onAttend:n,onScheduleWithSpecialty:r,isAdmin:l}){const c=y.useMemo(()=>t?new Date(t+"T12:00").getDay():1,[t]),p=Zs[c]??{mañana:[],tarde:[]},b=[...new Set([...p.mañana,...p.tarde])],j=y.useMemo(()=>{const h={};for(const g of a){const x=g.therapyType;h[x]||(h[x]={mañana:[],tarde:[]}),g.startTime&&g.startTime>="13:00"?h[x].tarde.push(g):h[x].mañana.push(g)}return h},[a]),u=y.useMemo(()=>a.filter(h=>!b.includes(h.therapyType)),[a,b]);return!p.mañana.length&&!p.tarde.length&&!a.length?e.jsxs("div",{className:"text-center py-16 text-gray-400",children:[e.jsx("div",{className:"text-4xl mb-3",children:"📅"}),e.jsx("p",{className:"font-medium text-gray-600",children:"Sin especialidades configuradas para este día"}),e.jsxs("p",{className:"text-sm mt-1",children:["Podés configurar el horario en ",e.jsx("code",{children:"therapyConstants.js → DAY_SCHEDULE_CONFIG"})]})]}):e.jsxs("div",{className:"space-y-6",style:{maxHeight:"65vh",overflowY:"auto",paddingRight:2},children:[e.jsx(hi,{title:"☀ Turno Mañana",subtitle:"08:30 – 13:00",headerClass:"bg-blue-900/10 text-blue-900",specialties:p.mañana,bySpecialty:j,shift:"mañana",onCard:i,onAttend:n,onScheduleWithSpecialty:r,isAdmin:l}),e.jsx(hi,{title:"🌤 Turno Tarde",subtitle:"14:30 – 19:00",headerClass:"bg-orange-700/10 text-orange-800",specialties:p.tarde,bySpecialty:j,shift:"tarde",onCard:i,onAttend:n,onScheduleWithSpecialty:r,isAdmin:l}),u.length>0&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 rounded-xl mb-3 bg-gray-100 text-gray-600",children:[e.jsx("span",{className:"text-sm font-bold",children:"Otras terapias"}),e.jsx("span",{className:"text-xs opacity-75",children:"fuera del horario configurado"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3",children:[...new Set(u.map(h=>h.therapyType))].map(h=>e.jsx(mn,{specialty:h,therapies:u.filter(g=>g.therapyType===h),onCard:i,onAttend:n,onSchedule:g=>r(g,null),isAdmin:l},h))})]})]})}const kt=[{n:1,label:"Lunes"},{n:2,label:"Martes"},{n:3,label:"Miércoles"},{n:4,label:"Jueves"},{n:5,label:"Viernes"}];function xd(a=[]){const s={};return kt.forEach(t=>{const i=a.find(n=>n.day===t.n);s[t.n]={enabled:!!i,shifts:(i==null?void 0:i.shifts)??[]}}),s}function hd(a){return kt.filter(s=>{var t,i;return((t=a[s.n])==null?void 0:t.enabled)&&((i=a[s.n])==null?void 0:i.shifts.length)>0}).map(s=>({day:s.n,dayName:s.label,shifts:a[s.n].shifts}))}function gd({value:a,onChange:s}){const t=n=>{const r={...a,[n]:{...a[n],enabled:!a[n].enabled,shifts:a[n].enabled?[]:["mañana"]}};s(r)},i=(n,r)=>{const l=a[n].shifts,c=l.includes(r)?l.filter(p=>p!==r):[...l,r];s({...a,[n]:{...a[n],shifts:c}})};return e.jsx("div",{className:"space-y-1.5",children:kt.map(({n,label:r})=>{const{enabled:l,shifts:c}=a[n]??{enabled:!1,shifts:[]};return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{type:"button",onClick:()=>t(n),className:`w-28 text-left text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all
                ${l?"bg-blue-600 text-white border-blue-600":"bg-white text-gray-600 border-gray-200 hover:border-blue-300"}`,children:r}),l&&e.jsx("div",{className:"flex gap-1.5",children:[["mañana","☀ Mañana"],["tarde","🌤 Tarde"]].map(([p,b])=>e.jsx("button",{type:"button",onClick:()=>i(n,p),className:`text-[11px] px-2 py-1 rounded border font-medium transition-all
                      ${c.includes(p)?"bg-amber-500 text-white border-amber-500":"bg-white text-gray-500 border-gray-200 hover:border-amber-300"}`,children:b},p))})]},n)})})}function fd({initial:a,onClose:s}){const[t,i]=y.useState((a==null?void 0:a.name)??""),[n,r]=y.useState((a==null?void 0:a.specialty)??""),[l,c]=y.useState(()=>xd(a==null?void 0:a.schedule)),[p,b]=y.useState(!1),j=async u=>{if(u.preventDefault(),!t.trim()||!n)return V.error("Completá nombre y especialidad");const v=hd(l);if(!v.length)return V.error("Seleccioná al menos un día y turno");b(!0);try{const h={name:t.trim(),specialty:n,schedule:v};a!=null&&a.id?(await id(a.id,h),V.success("Terapista actualizado")):(await td(h),V.success("Terapista registrado")),s()}catch(h){V.error(h.message)}finally{b(!1)}};return n&&Ae(n),e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100",children:[e.jsx("h2",{className:"font-bold text-gray-900",children:a!=null&&a.id?"Editar terapista":"Nuevo terapista"}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-lg hover:bg-gray-100 text-gray-500",children:e.jsx(we,{className:"w-4 h-4"})})]}),e.jsxs("form",{onSubmit:j,className:"p-5 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Nombre completo *"}),e.jsx("input",{value:t,onChange:u=>i(u.target.value),className:"input",placeholder:"Ej. Lic. María García"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Especialidad *"}),e.jsxs("select",{value:n,onChange:u=>r(u.target.value),className:"input",children:[e.jsx("option",{value:"",children:"Seleccionar…"}),$i.map(u=>e.jsx("option",{value:u,children:u},u))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label",children:"Días y turnos de atención *"}),e.jsx(gd,{value:l,onChange:c})]}),e.jsxs("div",{className:"flex gap-3 justify-end pt-2 border-t border-gray-100",children:[e.jsx("button",{type:"button",onClick:s,className:"btn btn-secondary",children:"Cancelar"}),e.jsx("button",{type:"submit",disabled:p,className:"btn btn-primary",children:p?e.jsx(Ye,{className:"w-4 h-4 animate-spin"}):a!=null&&a.id?"Guardar":"Registrar"})]})]})]})})}function bd({therapist:a,isAdmin:s,onEdit:t,onDelete:i}){var r;const n=Ae(a.specialty);return e.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("div",{className:"h-1.5",style:{background:n.color}}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"font-bold text-sm text-gray-900 leading-tight",children:a.name}),e.jsx("span",{className:"inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full",style:{background:n.light,color:n.color},children:a.specialty})]}),s&&e.jsxs("div",{className:"flex gap-1 shrink-0",children:[e.jsx("button",{onClick:()=>t(a),className:"p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",children:e.jsx(ya,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>i(a),className:"p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors",children:e.jsx(us,{className:"w-3.5 h-3.5"})})]})]}),((r=a.schedule)==null?void 0:r.length)>0&&e.jsx("div",{className:"mt-3 space-y-1",children:a.schedule.map((l,c)=>{const p=l.shifts??[];return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[11px] w-20 font-medium text-gray-600",children:l.dayName}),e.jsx("div",{className:"flex gap-1",children:p.map(b=>e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-semibold
                          ${b==="mañana"?"bg-amber-100 text-amber-700":"bg-indigo-100 text-indigo-700"}`,children:b==="mañana"?"☀ M":"🌤 T"},b))})]},c)})})]})]})}function vd({therapists:a,isAdmin:s}){const[t,i]=y.useState(null),[n,r]=y.useState(null),l=y.useMemo(()=>{const p={};return a.forEach(b=>{p[b.specialty]||(p[b.specialty]=[]),p[b.specialty].push(b)}),Object.entries(p).sort(([b],[j])=>b.localeCompare(j,"es"))},[a]),c=async()=>{if(n)try{await nd(n.id),V.success("Terapista eliminado"),r(null)}catch(p){V.error(p.message)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-gray-800",children:"Equipo terapéutico"}),e.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:[a.length," profesionales registrados"]})]}),s&&e.jsxs("button",{onClick:()=>i({}),className:"btn btn-primary btn-sm",children:[e.jsx(ia,{className:"w-3.5 h-3.5"})," Nuevo terapista"]})]}),!a.length&&e.jsxs("div",{className:"text-center py-16 text-gray-400",children:[e.jsx("div",{className:"text-4xl mb-3",children:"👩‍⚕️"}),e.jsx("p",{className:"font-medium text-gray-600",children:"Sin terapistas registrados"}),s&&e.jsxs("button",{onClick:()=>i({}),className:"mt-3 btn btn-primary btn-sm",children:[e.jsx(ia,{className:"w-3.5 h-3.5"})," Registrar primer terapista"]})]}),l.map(([p,b])=>{const j=Ae(p);return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:j.color}}),e.jsx("span",{className:"text-xs font-bold text-gray-700 uppercase tracking-wide",children:p}),e.jsx("span",{className:"text-[10px] text-gray-400",children:b.length})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:b.map(u=>e.jsx(bd,{therapist:u,isAdmin:s,onEdit:i,onDelete:r},u.id))})]},p)}),t!==null&&e.jsx(fd,{initial:t!=null&&t.id?t:null,onClose:()=>i(null)}),n&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:"Eliminar terapista"}),e.jsxs("p",{className:"text-sm text-gray-600 mb-5",children:["¿Eliminar a ",e.jsx("strong",{children:n.name}),"? Esta acción no se puede deshacer."]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx("button",{onClick:()=>r(null),className:"btn btn-secondary",children:"Cancelar"}),e.jsx("button",{onClick:c,className:"btn bg-red-600 text-white hover:bg-red-700",children:"Eliminar"})]})]})})]})}const yd=[{id:"sesiones",label:"Sesiones del día"},{id:"historial",label:"Historial"}];function Ws({icon:a,label:s,value:t}){return t?e.jsxs("div",{className:"flex items-start gap-3 px-4 py-2.5 border-b border-gray-100 last:border-b-0",children:[e.jsx(a,{className:"w-4 h-4 text-gray-400 shrink-0 mt-0.5"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wide leading-none mb-0.5",children:s}),e.jsx("p",{className:"text-sm text-gray-700 leading-snug",children:t})]})]}):null}function jd({therapy:a,onAttend:s,onEdit:t,isAdmin:i}){const n=Ae(a.therapyType),r=ta(a.status);return e.jsx("div",{className:"border border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 transition-colors group",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-1.5 shrink-0 self-stretch",style:{background:n.color}}),e.jsxs("div",{className:"flex-1 min-w-0 px-3 py-2.5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:"text-sm font-bold leading-tight",style:{color:n.color},children:a.therapyType}),e.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-xs text-gray-500",children:[e.jsx("span",{className:"font-mono font-semibold text-gray-700",children:a.startTime}),a.durationMinutes&&e.jsxs("span",{children:[a.durationMinutes," min"]}),a.therapist&&e.jsx("span",{children:a.therapist})]}),a.notes&&e.jsxs("p",{className:"text-xs text-gray-400 italic mt-1 truncate",children:['"',a.notes,'"']}),a.attendanceNote&&e.jsxs("p",{className:"text-xs text-amber-600 mt-1 bg-amber-50 rounded px-2 py-0.5 truncate",children:["Obs: ",a.attendanceNote]})]}),e.jsx("div",{className:"flex flex-col items-end gap-1 shrink-0",children:e.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-bold border ${r.tw}`,children:[r.icon," ",r.label]})})]}),e.jsxs("div",{className:"flex gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[e.jsx("button",{onClick:()=>s(a),className:"text-[10px] px-2 py-1 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition-colors",children:"✓ Registrar asistencia"}),i&&e.jsx("button",{onClick:()=>t(a),className:"text-[10px] px-2 py-1 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors",children:"Editar"})]})]})]})})}function wd({patientId:a,patientName:s,date:t,dayTherapies:i,onClose:n,onAttend:r,onEdit:l,onNewSession:c,isAdmin:p}){const[b,j]=y.useState("sesiones"),{patients:u,therapies:v}=ye(),h=y.useMemo(()=>u.find(A=>A.id===a),[u,a]),g=xa(h==null?void 0:h.birthDate),x=new Date(t+"T12:00").toLocaleDateString("es",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),w=y.useMemo(()=>v.filter(A=>A.patientId===a&&A.date!==t).sort((A,m)=>m.date.localeCompare(A.date)||(m.startTime??"").localeCompare(A.startTime??"")).slice(0,15),[v,a,t]);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",onClick:n,children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col",style:{maxHeight:"88vh"},onClick:A=>A.stopPropagation(),children:[e.jsxs("div",{className:"px-6 pt-5 pb-0 border-b border-gray-100 shrink-0",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h2",{className:"text-xl font-extrabold text-gray-900 truncate",children:s}),e.jsx("p",{className:"text-sm text-gray-500 mt-0.5 capitalize",children:x})]}),e.jsx("button",{onClick:n,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition",children:e.jsx(we,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[g&&e.jsx("span",{className:"inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700",children:g}),e.jsxs("span",{className:"inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200",children:[i.length," ",i.length===1?"terapia":"terapias"]}),(h==null?void 0:h.diagnosis)&&e.jsx("span",{className:"inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100 max-w-[220px] truncate",children:h.diagnosis})]}),e.jsx("div",{className:"flex gap-0 mt-4 -mb-px",children:yd.map(({id:A,label:m})=>e.jsx("button",{onClick:()=>j(A),className:`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors
                  ${b===A?"border-blue-600 text-blue-700":"border-transparent text-gray-400 hover:text-gray-700"}`,children:m},A))})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:[b==="sesiones"&&e.jsxs("div",{className:"space-y-4",children:[h&&(h.guardian||h.guardianPhone||h.address)&&e.jsxs("div",{className:"bg-gray-50 rounded-xl border border-gray-100 overflow-hidden",children:[e.jsx(Ws,{icon:qa,label:"Responsable",value:[h.guardian,h.guardianPhone].filter(Boolean).join(" — ")}),e.jsx(Ws,{icon:vi,label:"Teléfono",value:h.guardian?null:h.guardianPhone}),e.jsx(Ws,{icon:yi,label:"Dirección",value:h.address})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:"Ruta terapéutica del día"}),e.jsx("div",{className:"space-y-2",children:i.map(A=>e.jsx(jd,{therapy:A,onAttend:r,onEdit:l,isAdmin:p},A.id))})]})]}),b==="historial"&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3",children:["Historial reciente (",w.length,")"]}),w.length?e.jsx("ul",{className:"space-y-1.5",children:w.map(A=>{const m=Ae(A.therapyType),k=ta(A.status);return e.jsxs("li",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100",children:[e.jsx("div",{className:"w-1 self-stretch rounded-full shrink-0",style:{background:m.color}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold",style:{color:m.color},children:A.therapyType}),e.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:[new Date(A.date+"T12:00").toLocaleDateString("es",{day:"numeric",month:"short",year:"numeric"})," · ",A.startTime,A.therapist?` · ${A.therapist}`:""]})]}),e.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-bold border shrink-0 ${k.tw}`,children:[k.icon," ",k.short]})]},A.id)})}):e.jsx("p",{className:"text-sm text-gray-400 italic text-center py-8",children:"Sin historial previo registrado."})]})]}),e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 flex flex-wrap items-center gap-2 shrink-0",children:[p&&e.jsxs("button",{onClick:c,className:"btn btn-sm border border-blue-200 text-blue-600 hover:bg-blue-50 gap-1",children:[e.jsx(ia,{className:"w-3.5 h-3.5"})," Nueva sesión"]}),e.jsx("button",{onClick:n,className:"btn btn-secondary btn-sm ml-auto",children:"Cerrar"})]})]})})}function Nd({therapy:a,isAdmin:s,onClose:t,onAttend:i,onEdit:n}){const{patients:r,therapies:l}=ye(),c=y.useMemo(()=>r.find(h=>h.id===(a==null?void 0:a.patientId)),[r,a]),p=Ae(a==null?void 0:a.therapyType),b=ta(a==null?void 0:a.status),j=xa(c==null?void 0:c.birthDate),u=y.useMemo(()=>a?l.filter(h=>h.patientId===a.patientId&&h.date===a.date).sort((h,g)=>h.startTime.localeCompare(g.startTime)):[],[l,a]),v=y.useMemo(()=>a?l.filter(h=>h.patientId===a.patientId&&h.id!==a.id).sort((h,g)=>g.date.localeCompare(h.date)||g.startTime.localeCompare(h.startTime)).slice(0,6):[],[l,a]);return a?e.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[e.jsx("div",{className:"flex-1 bg-black/30",onClick:t}),e.jsxs("div",{className:"w-80 md:w-96 bg-white shadow-2xl flex flex-col overflow-hidden",style:{borderLeft:`4px solid ${p.color}`},children:[e.jsxs("div",{className:"px-4 py-3 border-b border-gray-100 flex items-start justify-between shrink-0",style:{background:p.light},children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-sm leading-tight",children:a.patientName}),e.jsx("p",{className:"text-xs text-gray-600 mt-0.5",children:a.therapyType}),j&&e.jsx("p",{className:"text-xs text-gray-500",children:j})]}),e.jsx("button",{onClick:t,className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-white/60 shrink-0",children:e.jsx(we,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 text-xs",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Sesión actual"}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1.5 border border-gray-100",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-gray-800",children:a.therapyType}),e.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${b.tw}`,children:[b.icon," ",b.label]})]}),e.jsxs("p",{className:"text-gray-600",children:[a.date," · ",a.startTime," · ",a.durationMinutes||45," min"]}),a.therapist&&e.jsxs("p",{className:"text-gray-500",children:["Terapeuta: ",a.therapist]}),a.attendanceNote&&e.jsxs("p",{className:"text-amber-700 bg-amber-50 rounded px-2 py-1 mt-1 italic",children:['"',a.attendanceNote,'"']})]})]}),c&&e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Paciente"}),e.jsxs("div",{className:"space-y-1.5",children:[c.diagnosis&&e.jsxs("div",{className:"flex gap-2 items-start",children:[e.jsx(Gs,{className:"w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700 leading-snug",children:c.diagnosis})]}),c.guardian&&e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(qa,{className:"w-3.5 h-3.5 text-gray-400 shrink-0"}),e.jsx("span",{className:"text-gray-700",children:c.guardian})]}),c.guardianPhone&&e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(vi,{className:"w-3.5 h-3.5 text-gray-400 shrink-0"}),e.jsx("span",{className:"text-gray-700",children:c.guardianPhone})]}),c.address&&e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(yi,{className:"w-3.5 h-3.5 text-gray-400 shrink-0"}),e.jsx("span",{className:"text-gray-700 truncate",children:c.address})]})]})]}),u.length>1&&e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Ruta terapéutica hoy"}),e.jsx("div",{className:"space-y-1",children:u.map(h=>{const g=Ae(h.therapyType),x=ta(h.status),w=h.id===a.id;return e.jsxs("div",{className:`flex items-center gap-2 rounded px-2 py-1.5 ${w?"bg-blue-50 border border-blue-100":""}`,children:[e.jsx("span",{className:"font-mono text-gray-500 w-10 shrink-0",children:h.startTime}),e.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:g.color}}),e.jsx("span",{className:"flex-1 text-gray-700 font-medium",children:h.therapyType}),e.jsx("span",{className:`px-1.5 py-0.5 rounded text-[9px] font-semibold ${x.tw}`,children:x.short})]},h.id)})})]}),v.length>0&&e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5",children:"Historial reciente"}),e.jsx("div",{className:"space-y-1",children:v.map(h=>{const g=ta(h.status);return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-gray-400 font-mono w-20 shrink-0",children:h.date}),e.jsx("span",{className:"text-gray-600 flex-1 truncate",children:h.therapyType}),e.jsx("span",{className:`px-1.5 py-0.5 rounded text-[9px] font-semibold ${g.tw}`,children:g.short})]},h.id)})})]})]}),e.jsxs("div",{className:"p-3 border-t border-gray-100 flex gap-2 shrink-0",children:[e.jsx("button",{onClick:()=>i(a),className:"flex-1 btn btn-sm btn-primary text-xs",children:"Registrar asistencia"}),s&&e.jsx("button",{onClick:()=>n(a),className:"btn btn-sm btn-secondary text-xs",children:"Editar"})]})]})]}):null}function kd({therapy:a,onSave:s,onClose:t}){const[i,n]=y.useState((a==null?void 0:a.status)||"programado"),[r,l]=y.useState((a==null?void 0:a.attendanceNote)||""),[c,p]=y.useState(!1),b=Ae(a==null?void 0:a.therapyType),j=async()=>{p(!0),await s({status:i,notes:r}),p(!1)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:u=>{u.target===u.currentTarget&&t()},children:e.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-100",style:{borderLeft:`4px solid ${b.color}`,borderRadius:"0.75rem 0.75rem 0 0"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:a==null?void 0:a.patientName}),e.jsxs("p",{className:"text-xs text-gray-500",children:[a==null?void 0:a.therapyType," · ",a==null?void 0:a.startTime,a!=null&&a.therapist?` · ${a.therapist}`:""]})]}),e.jsx("button",{onClick:t,className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100",children:e.jsx(we,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",children:"Estado de asistencia"}),e.jsx("div",{className:"grid grid-cols-3 gap-1.5 mb-4",children:gt.map(u=>{const v=La[u],h=i===u;return e.jsxs("button",{onClick:()=>n(u),className:`text-xs rounded-lg border px-2 py-2 text-left transition-all font-medium leading-tight
                    ${h?`ring-2 ring-offset-1 border-transparent shadow-sm ${v.tw}`:"border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[e.jsx("span",{className:"mr-1",children:v.icon}),v.label]},u)})}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Observación (opcional)"}),e.jsx("textarea",{rows:2,value:r,onChange:u=>l(u.target.value),placeholder:'Ej: "No asistió por enfermedad", "Llegó 20 min tarde"',className:"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:t,className:"btn-secondary btn btn-sm",children:"Cancelar"}),e.jsx("button",{onClick:j,disabled:c,className:"btn-primary btn btn-sm",children:c?e.jsx(Ye,{className:"w-3.5 h-3.5 animate-spin"}):"Guardar asistencia"})]})]})]})})}const Cd=[1,2,3,4,5,6,0],Fd={1:"Lunes",2:"Martes",3:"Miércoles",4:"Jueves",5:"Viernes",6:"Sábado",0:"Domingo"};function gi({shift:a,therapists:s}){const t=a==="mañana";return e.jsxs("div",{className:"flex items-start gap-1.5",children:[e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-semibold shrink-0 mt-px
        ${t?"bg-blue-100 text-blue-700":"bg-orange-100 text-orange-700"}`,children:t?"☀ Mañana":"🌤 Tarde"}),s.length===0?e.jsx("span",{className:"text-[10px] text-gray-300 italic mt-px",children:"Sin terapista registrado"}):e.jsx("div",{className:"flex flex-wrap gap-1",children:s.map(i=>e.jsx("span",{className:"text-[10px] bg-gray-100 text-gray-700 px-1.5 py-px rounded font-medium",children:i.name},i.id??i.name))})]})}function Sd({therapists:a=[]}){const[s,t]=y.useState(null),i=y.useMemo(()=>{const l=new Set;for(const c of Object.values(Zs))c.mañana.forEach(p=>l.add(p)),c.tarde.forEach(p=>l.add(p));return Array.from(l).sort((c,p)=>c.localeCompare(p,"es"))},[]),n=y.useMemo(()=>s?Cd.map(l=>{const c=Zs[l];if(!c)return null;const p=c.mañana.includes(s),b=c.tarde.includes(s);if(!p&&!b)return null;const j=a.filter(v=>v.specialty===s),u=v=>j.filter(h=>{var g;return(g=h.schedule)==null?void 0:g.some(x=>{var w;return x.day===l&&((w=x.shifts)==null?void 0:w.includes(v))})});return{day:l,mañana:p?u("mañana"):null,tarde:b?u("tarde"):null}}).filter(Boolean):null,[s,a]),r=s?Ae(s):null;return e.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 overflow-x-auto",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wide shrink-0 pr-2 border-r border-gray-100",children:"Especialidades"}),i.map(l=>{const c=Ae(l),p=s===l;return e.jsx("button",{onClick:()=>t(p?null:l),className:"shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all whitespace-nowrap",style:p?{background:c.color,color:"#fff",borderColor:c.color}:{background:c.light,color:c.color,borderColor:c.color+"66"},children:l},l)})]}),s&&n&&e.jsxs("div",{className:"border-t border-gray-100 px-4 py-3",style:{background:r.light+"66"},children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:r.color}}),e.jsx("span",{className:"text-sm font-bold",style:{color:r.color},children:s}),e.jsxs("span",{className:"text-[10px] text-gray-400",children:["· ",n.length," ",n.length===1?"día":"días"," a la semana"]}),e.jsx("button",{onClick:()=>t(null),className:"ml-auto p-1 rounded-lg hover:bg-black/5 transition-colors",children:e.jsx(we,{className:"w-3.5 h-3.5 text-gray-500"})})]}),n.length===0?e.jsx("p",{className:"text-xs text-gray-400 italic",children:"Sin días configurados."}):e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(({day:l,mañana:c,tarde:p})=>e.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 px-3 py-2.5 min-w-[170px] shadow-sm",children:[e.jsx("p",{className:"text-xs font-bold text-gray-800 mb-2",children:Fd[l]}),e.jsxs("div",{className:"space-y-1.5",children:[c!==null&&e.jsx(gi,{shift:"mañana",therapists:c}),p!==null&&e.jsx(gi,{shift:"tarde",therapists:p})]})]},l))})]})]})}function Ad(a){return a?new Date(a+"T12:00").toLocaleDateString("es",{weekday:"long",day:"numeric",month:"long"}):""}function Dd(a){const s=Ma(a),t=new Date(s[0]+"T12:00").toLocaleDateString("es",{day:"numeric",month:"short"}),i=new Date(s[6]+"T12:00").toLocaleDateString("es",{day:"numeric",month:"short",year:"numeric"});return`Semana ${t} – ${i}`}const Td=Object.fromEntries(ja.map(a=>[a.key,{backgroundColor:a.color,borderColor:a.color}])),Ed=[{k:"calendar",l:"Calendario",I:sa,tip:"Vista de calendario mensual"},{k:"week",l:"Semanal",I:Pn,tip:"Vista semanal por paciente"},{k:"matrix",l:"Día",I:Mn,tip:"Vista diaria por paciente"},{k:"therapists",l:"Terapistas",I:ba,tip:"Equipo terapéutico"}];function Pd(){const{patients:a,setPatients:s,therapies:t,setTherapies:i,therapists:n,setTherapists:r}=ye(),{isAdmin:l}=De(),c=y.useRef(null),[p,b]=y.useState("calendar"),[j,u]=y.useState(ha),[v,h]=y.useState(!1),[g,x]=y.useState(""),[w,A]=y.useState("all"),[m,k]=y.useState("all"),[C,E]=y.useState("all"),[_,X]=y.useState(!1),[G,q]=y.useState(!1),[K,N]=y.useState(!1),[S,$]=y.useState(null),[H,J]=y.useState(!1),[U,B]=y.useState(null),[re,se]=y.useState(!1),[F,T]=y.useState(null);y.useEffect(()=>{const o=ks(s),d=Fs(i),f=sd(r);return()=>{o(),d(),f()}},[]);const L=y.useMemo(()=>{const o=new Set(t.map(d=>d.therapist).filter(Boolean));return Array.from(o).sort()},[t]),Y=y.useMemo(()=>{const o=g.toLowerCase();return t.filter(d=>{var f;return!(o&&!((f=d.patientName)!=null&&f.toLowerCase().includes(o))||w!=="all"&&d.therapyType!==w||m!=="all"&&d.therapist!==m||C!=="all"&&d.status!==C)})},[t,g,w,m,C]),ee=y.useMemo(()=>Y.filter(o=>o.date===j),[Y,j]),ge=y.useMemo(()=>{const o=t.filter(d=>d.date===j);return{total:o.length,atendidos:o.filter(d=>_a.includes(d.status)).length,ausencias:o.filter(d=>ma.includes(d.status)).length,pendientes:o.filter(d=>Ks.includes(d.status)).length,reprogramados:o.filter(d=>Vt.includes(d.status)).length}},[t,j]),ra=y.useMemo(()=>{const o=Ma(j),d=t.filter(D=>o.includes(D.date)),f=new Set(d.map(D=>D.therapist).filter(Boolean));return{total:d.length,atendidos:d.filter(D=>_a.includes(D.status)).length,ausencias:d.filter(D=>ma.includes(D.status)).length,pendientes:d.filter(D=>Ks.includes(D.status)).length,reprogramados:d.filter(D=>Vt.includes(D.status)).length,terapeutas:f.size}},[t,j]),Ce=p==="week",We=Ce?ra:ge,Na=y.useMemo(()=>{const o=[],d=ee.filter(z=>ma.includes(z.status));d.length&&o.push({type:"warn",msg:`${d.length} paciente(s) no asistieron hoy`});const f=new Date(Date.now()-30*864e5).toISOString().slice(0,10),D={};t.filter(z=>z.date>=f&&ma.includes(z.status)).forEach(z=>{D[z.patientName]=(D[z.patientName]||0)+1});const P=Object.entries(D).filter(([,z])=>z>=3);P.length&&o.push({type:"err",msg:`Ausentismo crónico (≥3 en 30d): ${P.map(([z])=>z).join(", ")}`});const M=Ma(j),O=Object.entries(t.filter(z=>M.includes(z.date)&&z.therapist).reduce((z,W)=>(z[W.therapist]=(z[W.therapist]||0)+1,z),{})).filter(([,z])=>z>20);return O.length&&o.push({type:"warn",msg:`Sobrecarga esta semana: ${O.map(([z,W])=>`${z} (${W})`).join(", ")}`}),o},[ee,t,j]),Ms=y.useMemo(()=>{const o={};for(const d of Y){const f=`${d.patientId}__${d.date}`;o[f]||(o[f]={patientId:d.patientId,patientName:d.patientName,date:d.date,therapies:[],earliest:"23:59"}),o[f].therapies.push(d),(d.startTime??"")<o[f].earliest&&(o[f].earliest=d.startTime??"08:00")}return Object.values(o).map(({patientId:d,patientName:f,date:D,therapies:P,earliest:M})=>{P.sort((z,W)=>(z.startTime??"").localeCompare(W.startTime??""));const O=P.length;return{id:`grp__${d}__${D}`,title:O>1?`${f} (${O})`:f,start:`${D}T${M}`,backgroundColor:"#2563eb",borderColor:"#1d4ed8",textColor:"#fff",extendedProps:{isGrouped:!0,therapies:P,patientId:d,patientName:f,date:D}}})},[Y]);y.useMemo(()=>Y.map(o=>{const d=Td[o.therapyType]??{backgroundColor:"#64748b",borderColor:"#475569"},[f,D]=(o.startTime??"08:00").split(":").map(Number),P=f*60+D+Number(o.durationMinutes??45),M=`${String(Math.floor(P/60)).padStart(2,"0")}:${String(P%60).padStart(2,"0")}`;return{id:o.id,title:`${o.startTime} ${o.patientName}`,start:`${o.date}T${o.startTime}`,end:`${o.date}T${M}`,...d,textColor:"#fff",extendedProps:{...o,isGrouped:!1}}}),[Y]);const la=y.useCallback(o=>{B(o),q(!0)},[]),ka=y.useCallback(o=>{B(o),N(!0)},[]),Ca=y.useCallback((o,d)=>{B({date:o,startTime:d}),X(!0)},[]),Fa=y.useCallback((o,d)=>{B({date:j,therapyType:o,startTime:d==="tarde"?"14:30":"08:30"}),X(!0)},[j]),Os=async o=>{se(!0);try{U!=null&&U.id?(await Ht(U.id,o),V.success("Terapia actualizada")):(await go(o),V.success("Terapia agendada")),X(!1),B(null)}catch(d){V.error(d.message)}finally{se(!1)}},Qa=async({status:o,notes:d})=>{try{o==="cancelado"?(await Bt(U.id),V.success("Terapia cancelada y eliminada")):(await Ht(U.id,{status:o,attendanceNote:d,attendanceAt:new Date().toISOString()}),V.success("Asistencia registrada")),N(!1)}catch(f){V.error(f.message)}},zs=async()=>{if(S)try{await Bt(S.id),V.success("Terapia eliminada"),$(null)}catch(o){V.error(o.message)}},Xa=async()=>{const o=t.filter(d=>d.status==="programado").map(d=>d.id);try{await fo(o),V.success(`${o.length} terapias programadas eliminadas`)}catch(d){V.error(d.message)}finally{J(!1)}},oa=w!=="all"||m!=="all"||C!=="all"||!!g,Ja=Ce?7:1,Is=()=>u(Ut(j,-Ja)),Ct=()=>u(Ut(j,+Ja)),Ka=Ce?Dd(j):Ad(j);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2.5",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(bs,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"}),e.jsx("input",{value:g,onChange:o=>x(o.target.value),placeholder:"Buscar paciente…",className:"pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 w-44 bg-gray-50"})]}),e.jsxs("button",{onClick:()=>h(o=>!o),className:`btn btn-sm gap-1 ${v||oa?"btn-primary":"btn-secondary"}`,children:[e.jsx(En,{className:"w-3.5 h-3.5"}),"Filtros",oa?" ●":""]}),e.jsx("div",{className:"flex rounded-lg border border-gray-200 overflow-hidden text-[11px] font-medium",children:Ed.map(({k:o,l:d,I:f})=>e.jsxs("button",{onClick:()=>b(o),title:d,className:`px-2.5 py-1.5 flex items-center gap-1 border-r border-gray-200 last:border-r-0 transition-colors
                        ${p===o?"bg-blue-600 text-white":"text-gray-600 hover:bg-gray-50"}`,children:[e.jsx(f,{className:"w-3 h-3"}),e.jsx("span",{className:"hidden sm:inline",children:d})]},o))}),e.jsx("div",{className:"flex-1"}),l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>J(!0),className:"btn btn-sm border border-red-200 text-red-600 hover:bg-red-50 gap-1",title:"Eliminar todas las terapias programadas",children:[e.jsx(Ia,{className:"w-3.5 h-3.5"})," Limpiar"]}),e.jsxs("button",{onClick:()=>{B(null),X(!0)},className:"btn-primary btn btn-sm",children:[e.jsx(ia,{className:"w-3.5 h-3.5"})," Nueva terapia"]})]})]}),v&&e.jsxs("div",{className:"flex flex-wrap gap-2 mt-2 pt-2 border-t border-gray-100",children:[e.jsxs("select",{value:w,onChange:o=>A(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50",children:[e.jsx("option",{value:"all",children:"Todas las especialidades"}),ja.map(o=>e.jsx("option",{value:o.key,children:o.key},o.key))]}),e.jsxs("select",{value:m,onChange:o=>k(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50",children:[e.jsx("option",{value:"all",children:"Todos los terapeutas"}),L.map(o=>e.jsx("option",{value:o,children:o},o))]}),e.jsxs("select",{value:C,onChange:o=>E(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50",children:[e.jsx("option",{value:"all",children:"Todos los estados"}),gt.map(o=>e.jsx("option",{value:o,children:La[o].label},o))]}),oa&&e.jsx("button",{onClick:()=>{A("all"),k("all"),E("all"),x("")},className:"text-xs text-red-500 hover:text-red-700 font-medium px-1",children:"× Limpiar"})]})]}),e.jsx("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-2",children:[{label:"Programados",value:We.total,I:sa,c:"text-slate-600",bg:"bg-slate-50  border-slate-200"},{label:"Atendidos",value:We.atendidos,I:va,c:"text-green-600",bg:"bg-green-50  border-green-200"},{label:"Ausencias",value:We.ausencias,I:Ia,c:"text-red-600",bg:"bg-red-50    border-red-200"},{label:"Pendientes",value:We.pendientes,I:dt,c:"text-blue-600",bg:"bg-blue-50   border-blue-200"},{label:"Reprog.",value:We.reprogramados,I:On,c:"text-amber-600",bg:"bg-amber-50  border-amber-200"},{label:"Terapeutas",value:Ce?We.terapeutas??"—":"—",I:ba,c:"text-purple-600",bg:"bg-purple-50 border-purple-200"}].map(({label:o,value:d,I:f,c:D,bg:P})=>e.jsxs("div",{className:`rounded-xl border px-3 py-2 flex items-center gap-2 ${P}`,children:[e.jsx(f,{className:`w-4 h-4 ${D} shrink-0`}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xl font-bold leading-none ${D}`,children:d}),e.jsx("p",{className:"text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide",children:o})]})]},o))}),Na.length>0&&e.jsx("div",{className:"space-y-1",children:Na.map((o,d)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border
              ${o.type==="err"?"bg-red-50 border-red-200 text-red-700":"bg-amber-50 border-amber-200 text-amber-700"}`,children:[e.jsx(fs,{className:"w-3.5 h-3.5 shrink-0"}),o.msg]},d))}),e.jsx(Sd,{therapists:n}),p!=="calendar"&&e.jsx("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2",children:e.jsxs("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:Is,className:"p-1 rounded-lg hover:bg-gray-100",children:e.jsx(zn,{className:"w-4 h-4 text-gray-600"})}),e.jsx("button",{onClick:()=>u(ha),className:`text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors
                  ${Ma(j).includes(ha)&&Ce||j===ha&&!Ce?"bg-blue-600 text-white":"text-gray-600 hover:bg-gray-100"}`,children:"Hoy"}),e.jsx("button",{onClick:Ct,className:"p-1 rounded-lg hover:bg-gray-100",children:e.jsx(In,{className:"w-4 h-4 text-gray-600"})}),e.jsx("span",{className:"text-sm font-semibold text-gray-800 capitalize ml-1 hidden sm:block",children:Ka})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-[10px] font-semibold text-gray-400 uppercase tracking-wide",children:[Ce?"Semana":"Día",":"]}),e.jsx("input",{type:"date",value:j,onChange:o=>u(o.target.value),className:"text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50"})]})]})}),e.jsxs("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm p-3",children:[p!=="calendar"&&p!=="availability"&&e.jsx("div",{className:"flex flex-wrap gap-x-3 gap-y-1 mb-2.5 pb-2.5 border-b border-gray-100",children:ja.map(o=>e.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-gray-500",children:[e.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:o.color}}),o.key]},o.key))}),p==="week"&&e.jsx(pd,{therapies:Y,patients:a,selectedDate:j,onDateSelect:o=>u(o),onCard:la,onAttend:ka,onScheduleSlot:Ca,isAdmin:l}),p==="matrix"&&e.jsx(md,{therapies:ee,patients:a,date:j,onCard:la,onAttend:ka,onScheduleWithSpecialty:Fa,isAdmin:l}),p==="therapists"&&e.jsx(vd,{therapists:n,isAdmin:l}),p==="calendar"&&e.jsx(ji,{ref:c,plugins:[wi,Ni,ki,Ci],initialView:"dayGridMonth",locale:on,height:"auto",headerToolbar:{left:"prev,next today",center:"title",right:""},events:Ms,editable:!1,selectable:!1,dateClick:({dateStr:o})=>{u(o.slice(0,10)),b("matrix")},eventClick:({event:o})=>{const d=o.extendedProps;d.isGrouped?T({patientName:d.patientName,date:d.date,therapies:d.therapies}):(B(d),q(!0))},eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:!1},slotMinTime:"07:00:00",slotMaxTime:"20:00:00",allDaySlot:!1,nowIndicator:!0,buttonText:{today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Lista"},noEventsText:"Sin terapias en este período"})]}),e.jsx(wa,{open:_,onClose:()=>{X(!1),B(null)},title:U!=null&&U.id?"Editar terapia":"Nueva terapia",size:"lg",children:e.jsx(od,{initial:U,onSubmit:Os,onCancel:()=>{X(!1),B(null)},busy:re})}),G&&U&&e.jsx(Nd,{therapy:U,isAdmin:l,onClose:()=>{q(!1),B(null)},onAttend:o=>{q(!1),B(o),N(!0)},onEdit:o=>{q(!1),B(o),X(!0)}}),K&&U&&e.jsx(kd,{therapy:U,onSave:Qa,onClose:()=>{N(!1),B(null)}}),e.jsx($a,{open:!!S,title:"Eliminar terapia",message:`¿Eliminar la sesión de ${S==null?void 0:S.patientName}?`,onConfirm:zs,onCancel:()=>$(null)}),e.jsx($a,{open:H,title:"Limpiar terapias programadas",message:`Se eliminarán ${t.filter(o=>o.status==="programado").length} terapias con estado "Programado". Esta acción no se puede deshacer.`,onConfirm:Xa,onCancel:()=>J(!1)}),F&&e.jsx(wd,{patientId:F.patientId,patientName:F.patientName,date:F.date,dayTherapies:F.therapies,isAdmin:l,onClose:()=>T(null),onAttend:o=>{T(null),B(o),N(!0)},onEdit:o=>{T(null),B(o),X(!0)},onNewSession:()=>{T(null),B({date:F.date,patientId:F.patientId}),X(!0)}})]})}function ue(a){return Number(a||0).toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0})}function Md(a){const t=[["Fecha","Paciente","Tipo","Cirujano","Estado","Cotización","Pagado","Fecha pago","Pendiente","Pago Completo","Ayuda Social","Monto Ayuda","Obs. Admin."].join(","),...a.map(l=>[l.date,`"${l.patientName??""}"`,`"${l.surgeryType??""}"`,`"${l.surgeon??""}"`,l.status,l.quotation||0,l.amountPaid||0,l.paymentDate||l.partialPaymentDate||"",Math.max(0,(l.quotation||0)-(l.amountPaid||0)),l.paymentComplete?"Sí":"No",l.socialAid?"Sí":"No",l.socialAidAmount||0,`"${l.adminNotes??""}"`].join(","))],i=new Blob(["\uFEFF"+t.join(`
`)],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(i);Object.assign(document.createElement("a"),{href:n,download:"finanzas.csv"}).click(),URL.revokeObjectURL(n)}function Od(a,s){Xs(async()=>{const{default:t}=await import("./pdf-vendor-D1D5NA3e.js").then(i=>i.c);return{default:t}},__vite__mapDeps([0,1])).then(({default:t})=>{Xs(async()=>{const{default:i}=await import("./pdf-vendor-D1D5NA3e.js").then(n=>n.j);return{default:i}},__vite__mapDeps([0,1])).then(({default:i})=>{const n=new t({orientation:"landscape"}),r=[15,118,110];n.setFillColor(...r),n.rect(0,0,297,22,"F"),n.setTextColor(255,255,255),n.setFontSize(16),n.setFont("helvetica","bold"),n.text("MUNAY — Reporte Financiero",14,10),n.setFontSize(9),n.setFont("helvetica","normal"),n.text(`Generado: ${Q(new Date,"dd/MM/yyyy HH:mm")}`,283,10,{align:"right"}),n.text(`Total cirugías: ${s.count} | Cotizado: $${s.quoted.toLocaleString("es-CL")} | Cobrado: $${s.collected.toLocaleString("es-CL")} | Pendiente: $${s.pending.toLocaleString("es-CL")}`,14,18),n.setTextColor(0,0,0),i(n,{startY:26,head:[["Fecha","Paciente","Tipo cirugía","Cirujano","Estado","Cotización","Pagado","Fecha pago","Pendiente","Pago OK","Ayuda Social"]],body:a.map(l=>[l.date,l.patientName??"",l.surgeryType??"",l.surgeon??"",l.status,`$${Number(l.quotation||0).toLocaleString("es-CL")}`,`$${Number(l.amountPaid||0).toLocaleString("es-CL")}`,l.paymentDate||l.partialPaymentDate||"—",`$${Math.max(0,(l.quotation||0)-(l.amountPaid||0)).toLocaleString("es-CL")}`,l.paymentComplete?"✓":"✗",l.socialAid?`$${Number(l.socialAidAmount||0).toLocaleString("es-CL")}`:"—"]),headStyles:{fillColor:r,fontSize:7},bodyStyles:{fontSize:7},alternateRowStyles:{fillColor:[245,250,250]},margin:{left:10,right:10}}),n.save("finanzas-munay.pdf")})})}const zd=[{v:"all",l:"Todas"},{v:"pendiente",l:"Con deuda"},{v:"completo",l:"Pagadas"},{v:"socialAid",l:"Con ayuda social"}];function Id(){const{surgeries:a,setSurgeries:s}=ye(),[t,i]=y.useState(""),[n,r]=y.useState("all"),[l,c]=y.useState(""),[p,b]=y.useState(""),[j,u]=y.useState("date"),[v,h]=y.useState("desc");y.useEffect(()=>Cs(s),[]);const g=y.useMemo(()=>a.filter(m=>m.status!=="cancelado"),[a]),x=y.useMemo(()=>{let m=g;if(l&&(m=m.filter(k=>k.date>=l)),p&&(m=m.filter(k=>k.date<=p)),n==="pendiente"&&(m=m.filter(k=>!k.paymentComplete&&(k.quotation||k.amountPaid))),n==="completo"&&(m=m.filter(k=>k.paymentComplete)),n==="socialAid"&&(m=m.filter(k=>k.socialAid)),t){const k=t.toLowerCase();m=m.filter(C=>{var E,_,X;return((E=C.patientName)==null?void 0:E.toLowerCase().includes(k))||((_=C.surgeryType)==null?void 0:_.toLowerCase().includes(k))||((X=C.surgeon)==null?void 0:X.toLowerCase().includes(k))})}return[...m].sort((k,C)=>{let E=k[j]??"",_=C[j]??"";return(j==="quotation"||j==="amountPaid")&&(E=Number(E),_=Number(_)),E<_?v==="asc"?-1:1:E>_?v==="asc"?1:-1:0})},[g,l,p,n,t,j,v]),w=y.useMemo(()=>{const m=x.reduce((E,_)=>E+Number(_.quotation||0),0),k=x.reduce((E,_)=>E+Number(_.amountPaid||0),0),C=x.reduce((E,_)=>E+Number(_.socialAidAmount||0),0);return{count:x.length,quoted:m,collected:k,pending:Math.max(0,m-k),socialAid:C,paidCount:x.filter(E=>E.paymentComplete).length,socialCount:x.filter(E=>E.socialAid).length}},[x]),A=m=>{j===m?h(k=>k==="asc"?"desc":"asc"):(u(m),h("desc"))};return e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsx(ns,{icon:ot,label:"Total cotizado",value:ue(w.quoted),sub:`${w.count} cirugía${w.count!==1?"s":""}`,color:"teal"}),e.jsx(ns,{icon:fi,label:"Total cobrado",value:ue(w.collected),sub:`${w.paidCount} pagadas completo`,color:"green"}),e.jsx(ns,{icon:Ln,label:"Total pendiente",value:ue(w.pending),sub:w.pending>0?"Por cobrar":"Sin deuda",color:w.pending>0?"red":"green"}),e.jsx(ns,{icon:Et,label:"Ayuda social",value:ue(w.socialAid),sub:`${w.socialCount} paciente${w.socialCount!==1?"s":""}`,color:"purple"})]}),e.jsx("div",{className:"card py-3",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx("div",{className:"flex-1 min-w-[200px]",children:e.jsx(Ri,{value:t,onChange:i,placeholder:"Buscar paciente, cirugía, cirujano..."})}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-xs text-gray-500 shrink-0",children:"Desde"}),e.jsx("input",{type:"date",value:l,onChange:m=>c(m.target.value),className:"input text-sm py-1.5 w-36"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("label",{className:"text-xs text-gray-500 shrink-0",children:"Hasta"}),e.jsx("input",{type:"date",value:p,onChange:m=>b(m.target.value),className:"input text-sm py-1.5 w-36"})]}),(l||p||t)&&e.jsx("button",{onClick:()=>{i(""),c(""),b("")},className:"btn-secondary btn btn-sm text-xs",children:"Limpiar"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 items-center justify-between",children:[e.jsx("div",{className:"flex gap-1.5 flex-wrap",children:zd.map(({v:m,l:k})=>e.jsx("button",{onClick:()=>r(m),className:`btn btn-sm ${n===m?"btn-primary":"btn-secondary"}`,children:k},m))}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsxs("button",{onClick:()=>Md(x),className:"btn-secondary btn btn-sm",title:"Exportar CSV",children:[e.jsx(pt,{className:"w-4 h-4"})," CSV"]}),e.jsxs("button",{onClick:()=>Od(x,w),className:"btn-secondary btn btn-sm",title:"Exportar PDF",children:[e.jsx(Qe,{className:"w-4 h-4"})," PDF"]})]})]})]})}),e.jsxs("div",{className:"flex gap-4 flex-wrap text-sm text-gray-600",children:[e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-800",children:x.length})," registros"]}),e.jsx("span",{className:"text-gray-300",children:"|"}),e.jsxs("span",{children:["Cotizado: ",e.jsx("strong",{className:"text-teal-700",children:ue(w.quoted)})]}),e.jsxs("span",{children:["Cobrado: ",e.jsx("strong",{className:"text-green-700",children:ue(w.collected)})]}),w.pending>0&&e.jsxs("span",{children:["Pendiente: ",e.jsx("strong",{className:"text-red-600",children:ue(w.pending)})]})]}),x.length===0?e.jsxs("div",{className:"card flex flex-col items-center py-14 text-gray-400",children:[e.jsx(fs,{className:"w-10 h-10 mb-2 opacity-40"}),e.jsx("p",{className:"text-sm",children:"No hay registros que coincidan con los filtros."})]}):e.jsxs("div",{className:"card p-0 overflow-hidden",children:[e.jsx("div",{className:"hidden md:block overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:e.jsxs("tr",{children:[e.jsx(rs,{label:"Fecha",field:"date",sortField:j,sortDir:v,onSort:A}),e.jsx(rs,{label:"Paciente",field:"patientName",sortField:j,sortDir:v,onSort:A}),e.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Cirugía"}),e.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Cirujano"}),e.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Estado"}),e.jsx(rs,{label:"Cotización",field:"quotation",sortField:j,sortDir:v,onSort:A,right:!0}),e.jsx(rs,{label:"Pagado",field:"amountPaid",sortField:j,sortDir:v,onSort:A,right:!0}),e.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Fecha pago"}),e.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Pendiente"}),e.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Pago"}),e.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Ayuda Social"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-50",children:x.map(m=>{const k=Math.max(0,Number(m.quotation||0)-Number(m.amountPaid||0));return e.jsxs("tr",{className:`hover:bg-gray-50 transition ${m.paymentComplete?"":k>0?"bg-red-50/30":""}`,children:[e.jsx("td",{className:"px-4 py-3 text-gray-600 whitespace-nowrap",children:Q(new Date(m.date+"T12:00"),"dd/MM/yyyy")}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`w-1.5 h-1.5 rounded-full shrink-0 ${m.patientType==="flap"?"bg-green-500":"bg-blue-500"}`}),e.jsx("span",{className:"font-medium text-gray-800",children:m.patientName})]})}),e.jsx("td",{className:"px-4 py-3 text-gray-600 max-w-[160px] truncate",title:m.surgeryType,children:m.surgeryType}),e.jsx("td",{className:"px-4 py-3 text-gray-600",children:m.surgeon||"—"}),e.jsx("td",{className:"px-4 py-3",children:e.jsx(qe,{variant:m.status})}),e.jsx("td",{className:"px-4 py-3 text-right font-medium text-gray-800",children:m.quotation?ue(m.quotation):e.jsx("span",{className:"text-gray-300",children:"—"})}),e.jsx("td",{className:"px-4 py-3 text-right text-green-700 font-medium",children:m.amountPaid?ue(m.amountPaid):e.jsx("span",{className:"text-gray-300",children:"—"})}),e.jsx("td",{className:"px-4 py-3 text-xs text-gray-500 whitespace-nowrap",children:m.paymentDate?e.jsx("span",{className:"text-green-700 font-medium",children:Q(new Date(m.paymentDate+"T12:00"),"dd/MM/yyyy")}):m.partialPaymentDate?e.jsxs("span",{className:"text-amber-600",children:[Q(new Date(m.partialPaymentDate+"T12:00"),"dd/MM/yyyy")," ",e.jsx("span",{className:"text-gray-400",children:"(parcial)"})]}):e.jsx("span",{className:"text-gray-300",children:"—"})}),e.jsx("td",{className:"px-4 py-3 text-right",children:k>0?e.jsx("span",{className:"text-red-600 font-semibold",children:ue(k)}):e.jsx("span",{className:"text-gray-300",children:"—"})}),e.jsx("td",{className:"px-4 py-3 text-center",children:m.paymentComplete?e.jsx(va,{className:"w-4 h-4 text-green-600 mx-auto"}):e.jsx(Ia,{className:"w-4 h-4 text-red-400 mx-auto"})}),e.jsx("td",{className:"px-4 py-3 text-center",children:m.socialAid?e.jsx("span",{className:"text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium",children:m.socialAidAmount?ue(m.socialAidAmount):"Sí"}):e.jsx("span",{className:"text-gray-300 text-xs",children:"—"})})]},m.id)})}),e.jsx("tfoot",{className:"bg-gray-50 border-t-2 border-gray-200",children:e.jsxs("tr",{children:[e.jsxs("td",{colSpan:5,className:"px-4 py-3 text-xs font-semibold text-gray-500 uppercase",children:["Totales (",x.length," registros)"]}),e.jsx("td",{className:"px-4 py-3 text-right font-bold text-gray-800",children:ue(w.quoted)}),e.jsx("td",{className:"px-4 py-3 text-right font-bold text-green-700",children:ue(w.collected)}),e.jsx("td",{className:"px-4 py-3"}),e.jsx("td",{className:"px-4 py-3 text-right font-bold text-red-600",children:w.pending>0?ue(w.pending):"—"}),e.jsxs("td",{className:"px-4 py-3 text-center text-xs text-gray-500",children:[w.paidCount,"/",x.length]}),e.jsx("td",{className:"px-4 py-3 text-center font-bold text-purple-700 text-xs",children:w.socialAid>0?ue(w.socialAid):"—"})]})})]})}),e.jsx("ul",{className:"md:hidden divide-y divide-gray-100",children:x.map(m=>{const k=Math.max(0,Number(m.quotation||0)-Number(m.amountPaid||0));return e.jsxs("li",{className:"p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-800",children:m.patientName}),e.jsx("p",{className:"text-xs text-gray-500",children:m.surgeryType}),e.jsxs("p",{className:"text-xs text-gray-400",children:[Q(new Date(m.date+"T12:00"),"d MMM yyyy",{locale:Ne})," · ",m.surgeon||"—"]})]}),e.jsx(qe,{variant:m.status})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[e.jsxs("div",{className:"bg-gray-50 rounded p-2",children:[e.jsx("p",{className:"text-gray-400",children:"Cotización"}),e.jsx("p",{className:"font-semibold text-gray-800",children:m.quotation?ue(m.quotation):"—"})]}),e.jsxs("div",{className:"bg-gray-50 rounded p-2",children:[e.jsx("p",{className:"text-gray-400",children:"Pagado"}),e.jsx("p",{className:"font-semibold text-green-700",children:m.amountPaid?ue(m.amountPaid):"—"})]}),e.jsxs("div",{className:`rounded p-2 ${k>0?"bg-red-50":"bg-gray-50"}`,children:[e.jsx("p",{className:"text-gray-400",children:"Pendiente"}),e.jsx("p",{className:`font-semibold ${k>0?"text-red-600":"text-gray-400"}`,children:k>0?ue(k):"—"})]})]}),(m.paymentDate||m.partialPaymentDate)&&e.jsxs("p",{className:"text-xs text-gray-500",children:["Fecha pago:"," ",m.paymentDate?e.jsx("span",{className:"text-green-700 font-medium",children:Q(new Date(m.paymentDate+"T12:00"),"dd/MM/yyyy")}):e.jsxs("span",{className:"text-amber-600",children:[Q(new Date(m.partialPaymentDate+"T12:00"),"dd/MM/yyyy")," (parcial)"]})]}),e.jsxs("div",{className:"flex gap-2",children:[m.paymentComplete&&e.jsxs("span",{className:"flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full",children:[e.jsx(va,{className:"w-3 h-3"})," Pagado"]}),m.socialAid&&e.jsxs("span",{className:"flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full",children:[e.jsx(Et,{className:"w-3 h-3"})," Ayuda social"]}),m.adminNotes&&e.jsx("span",{className:"text-xs text-gray-400 italic truncate",children:m.adminNotes})]})]},m.id)})})]})]})}function ns({icon:a,label:s,value:t,sub:i,color:n}){const r={teal:"bg-teal-50   text-teal-700",green:"bg-green-50  text-green-700",red:"bg-red-50    text-red-600",purple:"bg-purple-50 text-purple-700"};return e.jsxs("div",{className:"card",children:[e.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${r[n]}`,children:e.jsx(a,{className:"w-5 h-5"})}),e.jsx("p",{className:"text-lg font-bold text-gray-800 leading-tight",children:t}),e.jsx("p",{className:"text-sm font-medium text-gray-600 mt-0.5",children:s}),e.jsx("p",{className:"text-xs text-gray-400 mt-0.5",children:i})]})}function rs({label:a,field:s,sortField:t,sortDir:i,onSort:n,right:r=!1}){return e.jsxs("th",{className:`px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-700 select-none ${r?"text-right":"text-left"}`,onClick:()=>n(s),children:[a," ",t===s?i==="asc"?e.jsx(_n,{className:"w-3.5 h-3.5 inline"}):e.jsx(ct,{className:"w-3.5 h-3.5 inline"}):null]})}function Ld(){const{loading:a}=De();return a?e.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{backgroundColor:"#F8FAFC"},children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-t-transparent rounded-full animate-spin",style:{borderColor:"#1A365D",borderTopColor:"transparent"}}),e.jsx("p",{className:"font-semibold",style:{color:"#1A365D"},children:"Hospital Munay"})]})}):e.jsxs(jn,{children:[e.jsx(Pe,{path:"/login",element:e.jsx(ur,{})}),e.jsx(Pe,{element:e.jsx(dr,{}),children:e.jsxs(Pe,{element:e.jsx(cr,{}),children:[e.jsx(Pe,{index:!0,element:e.jsx(cs,{to:"/dashboard",replace:!0})}),e.jsx(Pe,{path:"/dashboard",element:e.jsx(jo,{})}),e.jsx(Pe,{path:"/pacientes",element:e.jsx(_c,{})}),e.jsx(Pe,{path:"/cirugias",element:e.jsx(ad,{})}),e.jsx(Pe,{path:"/terapias",element:e.jsx(Pd,{})}),e.jsx(Pe,{element:e.jsx(pr,{}),children:e.jsx(Pe,{path:"/finanzas",element:e.jsx(Id,{})})})]})}),e.jsx(Pe,{path:"*",element:e.jsx(cs,{to:"/dashboard",replace:!0})})]})}ar({onNeedRefresh(){V("Nueva versión disponible. Recarga para actualizar.",{duration:8e3,icon:"🔄"})},onOfflineReady(){V.success("App lista para usar sin conexión.")}});Js.createRoot(document.getElementById("root")).render(e.jsx(xe.StrictMode,{children:e.jsx(wn,{children:e.jsxs(tr,{children:[e.jsx(Ld,{}),e.jsx($n,{position:"top-right",toastOptions:{duration:4e3,style:{fontFamily:"Inter, sans-serif",fontSize:"14px"},success:{iconTheme:{primary:"#0f766e",secondary:"#fff"}}}})]})})}));
