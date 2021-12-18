var j=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var C=(e,o,n)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,m=(e,o)=>{for(var n in o||(o={}))y.call(o,n)&&C(e,n,o[n]);if(f)for(var n of f(o))v.call(o,n)&&C(e,n,o[n]);return e},g=(e,o)=>N(e,P(o));var x=(e,o)=>{var n={};for(var t in e)y.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&f)for(var t of f(e))o.indexOf(t)<0&&v.call(e,t)&&(n[t]=e[t]);return n};import{j as h,u as w,R as k,c as L,r as i,a as E,C as O,T as R,P as T,O as M,b as F,d as I}from"./vendor.23611b55.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};A();const s=h.exports.jsx,u=h.exports.jsxs,D=h.exports.Fragment;w.preload("/wall.gltf");const b=k.forwardRef((e,o)=>{const{nodes:n}=w("/wall.gltf");return s("group",g(m({ref:o},e),{dispose:null,children:s("mesh",{geometry:n.dungeon_wall.geometry,material:n.dungeon_wall.material,children:s("meshStandardMaterial",{attach:"material",color:"#fff"})})}))}),B={wall:b},p=L((e,o)=>({ready:!1,selected:null,setSelected:(t,r)=>(console.log(r),e({selected:{object:t,ref:r}})),setReady:t=>e({ready:t}),set:e,session:null,transformControlProps:{mode:"translate",showY:!1},tiles:[{position:[0,0,0],rotation:[0,0,0],component:b}],actions:{onTransformControlChange:()=>{const{transformControlProps:{mode:t}}=o();console.log(t),e(t==="translate"?{transformControlProps:{mode:"rotate",showY:!0,showX:!1,showZ:!1,rotationSnap:1.5708}}:{transformControlProps:{mode:"translate",showY:!1,showX:!0,showZ:!0,rotationSnap:0}})},addTile:t=>{const{tiles:r}=o(),l={position:[0,0,0],rotation:[0,0,0],component:B[t]};console.log(r),e({tiles:[...r,l]})}}}));function Y({setReady:e}){return i.exports.useEffect(()=>()=>void e(!0),[]),null}function $(){const{progress:e}=E();return u("div",{children:["loading ",e.toFixed()," %"]})}function H({children:e}){const[o,n]=i.exports.useState(!1),[t,r]=i.exports.useState(!1),[l,d]=p(a=>[a.session,a.set]);return i.exports.useEffect(()=>{console.log(t,o),t&&o&&d({ready:!0})},[o,t]),console.log(o),u(D,{children:[s(i.exports.Suspense,{fallback:s(Y,{setReady:n}),children:e}),s("div",{className:`text-center fullscreen bg ${o?"ready":"notready"} ${t&&"clicked"}`,children:s("div",{className:"stack",children:u("div",{className:"intro-keys",children:[s("h1",{className:"text-5xl",children:"Openforge Builder"}),s("a",{className:"continue-link",href:"#",onClick:()=>o&&r(!0),children:o?"Click to continue":s($,{})})]})})})]})}const W=n=>{var t=n,{Component:e}=t,o=x(t,["Component"]);const r=p(c=>c.setSelected),l=i.exports.useRef(),[d,a]=i.exports.useState(!1);return F(d),s(e,g(m({ref:l},o),{onClick:c=>r(c.object,l),onDrag:c=>console.log(c.toArray()),onPointerOver:()=>a(!0),onPointerOut:()=>a(!1)}))};function X(){const{selected:e,tiles:o,actions:n,transformControlProps:t,setSelected:r}=p(),l=i.exports.useRef(null);i.exports.useEffect(()=>{if(l.current){const{current:a}=l,c=S=>console.log(S.target.object.position);return a.addEventListener("dragging-changed",c),()=>a.removeEventListener("dragging-changed",c)}}),i.exports.useEffect(()=>{const a=c=>{c.key.toLowerCase()==="r"&&n.onTransformControlChange()};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[]);const d=()=>(console.log(o),o.length>0&&o.map((a,c)=>s(W,{Component:a.component,position:a.position,rotation:a.rotation},c)));return console.log(e),s(H,{children:s("div",{className:"col-end-auto",children:u(O,{dpr:[1,2],onPointerMissed:()=>r(null),children:[d(),e&&e.object&&s(R,m({size:.5,ref:l,translationSnap:1,object:e.object},t)),s(T,{makeDefault:!0,position:[20,20,20]}),s(M,{makeDefault:!0}),s("gridHelper",{args:[100,100,"#8f8f8f","#1f1f1f"]})]})})})}const Z=()=>{const{actions:e}=p();return s("div",{className:"ui grid w-80",children:u("div",{className:"bg-gray-100 p-3 border-gray-500",children:[s("img",{src:"/stone.jpg",alt:"stone",onClick:()=>{e.addTile("wall"),console.log("hola")}}),"asdasdsaasda"]})})},_=()=>u("div",{className:"font-mono h-full w-full relative grid auto-rows-min",children:[s("div",{className:"bg-color  text-gray-300 h-10 p-2",children:"Openforge Builder"}),u("div",{className:"grid container-app h-screen",children:[s(Z,{}),s(X,{})]})]});I.render(s(k.StrictMode,{children:s(_,{})}),document.getElementById("root"));