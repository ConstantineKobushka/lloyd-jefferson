import{A as i}from"./assets/vendor-BaWhf9Kk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();new i([".about-accordion-container"],{openOnInit:[0]});new i([".faq-accordion-container"]);const n=document.querySelector(".scroll-up"),u=1,l=()=>window.scrollY||document.documentElement.scrollTop,d=()=>{const o=(document.documentElement.scrollHeight-window.innerHeight)/25;let r=l()/o;r=Math.max(0,Math.min(r,100)),n.style.boxShadow=`inset 0 0 0 ${r}px #01288d`},f=()=>{d(),l()>u?n.classList.add("scroll-up-active"):n.classList.remove("scroll-up-active")},p=()=>{window.scrollTo({top:0,behavior:"smooth"})};window.addEventListener("scroll",f);document.addEventListener("DOMContentLoaded",d);n.addEventListener("click",p);
//# sourceMappingURL=index.js.map
