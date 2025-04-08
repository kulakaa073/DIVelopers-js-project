import{A as $,i as S}from"./assets/vendor-BbpDt08y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const P=document.querySelector(".faq-acc-container"),D=document.querySelectorAll(".ac");new $(P,{openOnInit:[0],collapse:!0,duration:400,showMultiple:!1,beforeOpen:function(e){e.previousElementSibling&&e.previousElementSibling.classList.add("no-border-bottom"),e.classList.add("no-border-bottom")},beforeClose:function(){D.forEach(e=>{e.classList.remove("no-border-bottom")})}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".menu-btn"),r=document.querySelector(".submenu"),n=document.querySelectorAll(".nav-link");function s(){r.classList.toggle("active")}function t(){r.classList.remove("active")}e.addEventListener("click",s),n.forEach(o=>o.addEventListener("click",({target:c})=>{document.getElementById(c.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"}),t()})),document.addEventListener("click",({target:o})=>{e.contains(o)||r.contains(o)||t()})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#openModal"),r=document.querySelector(".close-modal-menu"),n=document.querySelector(".modal-menu"),s=document.querySelector("body"),t=document.querySelectorAll(".modal-nav-link");function o(){n.classList.add("active"),s.style.overflow="hidden"}function c(){n.classList.remove("active"),s.style.overflow="auto"}e.addEventListener("click",o),r.addEventListener("click",c),t.forEach(u=>u.addEventListener("click",({target:m})=>{document.getElementById(m.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"}),c()}))});const T="https://portfolio-js.b.goit.study/api/reviews",E=document.querySelector(".reviews-list");let b=!1;new Swiper(".reviews-swiper",{slidesPerView:1,spaceBetween:16,direction:"horizontal",navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});async function j(){try{const e=await fetch(T);if(!e.ok)throw new Error("Server error");return await e.json()}catch{return W(),V(),null}}function N(e){const r=e.map(({_id:n,author:s,review:t,avatar_url:o})=>`
      <li class="swiper-slide reviews-item" data-id="${n}">
        <div class="reviews-avatar">
          <img src="${o}" alt="${s}" width="80" height="80" loading="lazy" />
        </div>
        <h3 class="reviews-name">${s}</h3>
        <p class="reviews-text">${t}</p>
      </li>`).join("");E.innerHTML=r}function V(){E.innerHTML='<li class="reviews-placeholder">Not found</li>'}function W(){S.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}const z=new IntersectionObserver(async(e,r)=>{const[n]=e;if(n.isIntersecting&&!b){b=!0;const s=await j();s&&N(s),r.unobserve(n.target)}},{root:null,threshold:.3}),H=document.querySelector("#reviews");z.observe(H);const g=document.querySelector(".footer-form"),v=document.querySelector(".footer-modal-window"),R=document.querySelector(".footer-close");g.addEventListener("submit",async e=>{e.preventDefault();const r=g.elements.email.value.trim(),n=g.elements.comment.value.trim(),s={email:r,comment:n};try{const t=await fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!t.ok){const o=await t.json();throw new Error(o.message||"Something went wrong")}v.classList.add("is-visible"),document.body.classList.add("no-scroll"),g.reset()}catch{S.show({message:"Error",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}});function h(){v.classList.remove("is-visible"),document.body.classList.remove("no-scroll")}R.addEventListener("click",h);v.addEventListener("click",e=>{e.target===v&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});const G=[{x1:"./img/cover-powerpulse@1x.png",x2:"./img/cover-powerpulse@2x.png",alt:"Power Pulse"},{x1:"./img/cover-mimino@1x.png",x2:"./img/cover-mimino@2x.png",alt:"Mimino"},{x1:"./img/cover-ua-artistry@1x.png",x2:"./img/cover-ua-artistry@2x.png",alt:"Ua Artistry"},{x1:"./img/cover-green-harvest@1x.png",x2:"./img/cover-green-harvest@2x.png",alt:"Green Harvest"},{x1:"./img/cover-wallet@1x.png",x2:"./img/cover-wallet@2x.png",alt:"Wallet"},{x1:"./img/cover-chego@1x.png",x2:"./img/cover-chego@2x.png",alt:"Chego"},{x1:"./img/cover-energy-flow@1x.png",x2:"./img/cover-energy-flow@2x.png",alt:"Energy Flow"},{x1:"./img/cover-fruitbox@1x.png",x2:"./img/cover-fruitbox@2x.png",alt:"Fruibox"},{x1:"./img/cover-englishexcellence@1x.png",x2:"./img/cover-englishexcellence@2x.png",alt:"English Excellence"},{x1:"./img/cover-starlight-studio@1x.png",x2:"./img/cover-starlight-studio@2x.png",alt:"Starlight Studio"}],U=G.map(({x1:e,x2:r,alt:n})=>`<li class="slide">
    <img src=${e} srcset="${e} 1x, ${r} 2x" alt="${n}"/>
  </li>`).join(""),_=[document.querySelector(".carousel-from-start-1"),document.querySelector(".carousel-from-start-2"),document.querySelector(".carousel-from-start-3"),document.querySelector(".carousel-from-end-1"),document.querySelector(".carousel-from-end-2")];function J(){for(let e of _)e.insertAdjacentHTML("beforeend",U)}J();const y=document.querySelector(".carousel"),f=parseFloat(window.getComputedStyle(y).transitionDuration)*1e3,p=[];function x(){const e=y.children,r=document.querySelector(".covers-container"),n=parseFloat(window.getComputedStyle(y).rowGap),s=parseFloat(window.getComputedStyle(r).width),t=e[0].offsetWidth+n,o=e.length,c=t*o-s;function u(a){let i=0,l=-1;return()=>{i+=l,i<0?i=o-1:i>=o&&(i=0);let d=i*t;d>c&&(d=c-n),a.style.transform=`translateX(${-d}px)`,l*=-1}}function m(a,i){let l=u(a);window.requestAnimationFrame(()=>{l()});const d=setInterval(()=>{l()},i);p.push(d)}function w(a,i){let l=u(a);a.style.transitionDuration="0s",l(),window.requestAnimationFrame(()=>{a.style.transitionDuration=`${i/1e3}s`,l()});const d=setInterval(()=>{l()},i);p.push(d)}const q=document.querySelector(".carousel-from-start-1"),k=document.querySelector(".carousel-from-start-2"),I=document.querySelector(".carousel-from-start-3"),F=document.querySelector(".carousel-from-end-1"),M=document.querySelector(".carousel-from-end-2"),A={root:null,rootMargin:"0px",threshold:0},C=function(a,i){a.forEach(l=>{l.isIntersecting&&(window.requestAnimationFrame(()=>{m(q,f),m(k,f),m(I,f),w(F,f),w(M,f)}),i.unobserve(l.target))})},O=new IntersectionObserver(C,A);var B=document.querySelector("#covers");O.observe(B)}function L(){p.forEach(clearInterval),p.length=0}window.addEventListener("resize",()=>{L(),x()});window.addEventListener("orientationchange",()=>{L(),x()});x();
//# sourceMappingURL=index.js.map
