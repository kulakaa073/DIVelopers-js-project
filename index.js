import{A as I,S as M,N as E,K as A,i as P}from"./assets/vendor-CaRVR06H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const H={duration:400,showMultiple:!0,ariaEnabled:!0,collapse:!0,elementClass:"about-ac",triggerClass:"about-ac-trigger",panelClass:"about-ac-panel",activeClass:"is-active",openOnInit:[0]};new I(".about-accordion-container",H);M.use([E,A]);const K={modules:[E],loop:!0,navigation:{nextEl:".about-btn-next"},slidesPerView:2,spaceBetween:0,breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!1,enabled:!0,forceToAxis:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,allowTouchMove:!0,threshold:20,touchStartPreventDefault:!1,touchMoveStopPropagation:!0,touchEventsTarget:".swiper-wrapper"};new M(".about-swiper",K);new Swiper(".swiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".proj-swiper-button-next",prevEl:".proj-swiper-button-prev"},keyboard:{enabled:!0},on:{init:function(){B(this)},slideChange:function(){B(this)}}});function B(e){const t=document.querySelector(".proj-swiper-button-prev"),n=document.querySelector(".proj-swiper-button-next");t.classList.toggle("swiper-button-disabled",e.isBeginning),n.classList.toggle("swiper-button-disabled",e.isEnd),t.disabled=e.isBeginning,n.disabled=e.isEnd}const U=document.querySelector(".faq-acc-container");document.querySelectorAll(".ac");new I(U,{openOnInit:[0],collapse:!0,duration:400,showMultiple:!1});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".menu-btn"),t=document.querySelector(".submenu"),n=document.querySelectorAll(".nav-link");function s(){t.classList.toggle("active")}function o(){t.classList.remove("active")}e.addEventListener("click",s),n.forEach(r=>r.addEventListener("click",({target:l})=>{document.getElementById(l.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"}),o()})),document.addEventListener("click",({target:r})=>{e.contains(r)||t.contains(r)||o()})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#openModal"),t=document.querySelector(".close-modal-menu"),n=document.querySelector(".modal-menu"),s=document.querySelector("body"),o=document.querySelectorAll(".modal-nav-link"),r=document.querySelector(".modal-order-btn");function l(){n.classList.add("active"),s.style.overflow="hidden"}function d(){n.classList.remove("active"),s.style.overflow="auto"}e.addEventListener("click",l),t.addEventListener("click",d),o.forEach(m=>m.addEventListener("click",({target:p})=>{document.getElementById(p.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"}),d()})),r.addEventListener("click",m=>{m.preventDefault();const p=document.getElementById(r.getAttribute("href").substring(1));p&&p.scrollIntoView({behavior:"smooth"}),d()})});const _="https://portfolio-js.b.goit.study/api/reviews",F=document.querySelector(".reviews-list");let C=!1;Swiper.use([E,A]);const x=new Swiper(".reviews-swiper",{slidesPerView:1,spaceBetween:16,direction:"horizontal",navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:function(){const e=document.querySelector(".swiper-btn-prev"),t=document.querySelector(".swiper-btn-next");x.isBeginning?(e.classList.add("swiper-button-disabled"),e.classList.remove("swiper-button-active"),t.classList.remove("swiper-button-disabled"),t.classList.add("swiper-button-active")):x.isEnd?(t.classList.add("swiper-button-disabled"),t.classList.remove("swiper-button-active"),e.classList.remove("swiper-button-disabled"),e.classList.add("swiper-button-active")):(e.classList.remove("swiper-button-disabled"),e.classList.add("swiper-button-active"),t.classList.remove("swiper-button-disabled"),t.classList.add("swiper-button-active"))}}});async function G(){try{const e=await fetch(_);if(!e.ok)throw new Error("Server error");return await e.json()}catch{return X(),J(),null}}function Z(e){const t=e.map(({_id:n,author:s,review:o,avatar_url:r})=>`
      <li class="swiper-slide reviews-item" data-id="${n}">
        <div class="reviews-avatar">
          <img src="${r}" alt="${s}" width="80" height="80" loading="lazy" />
        </div>
        <h3 class="reviews-name">${s}</h3>
        <p class="reviews-text">${o}</p>
      </li>`).join("");F.innerHTML=t,x.update()}function J(){F.innerHTML='<li class="reviews-placeholder">Not found</li>'}function X(){P.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}const Q=new IntersectionObserver(async(e,t)=>{const[n]=e;if(n.isIntersecting&&!C){C=!0;const s=await G();s&&Z(s),t.unobserve(n.target)}},{root:null,threshold:.3}),Y=document.querySelector("#reviews");Q.observe(Y);const y=document.querySelector(".footer-form"),b=document.querySelector(".footer-modal-window"),ee=document.querySelector(".footer-close"),u=y.querySelector(".footer-input-email"),te=y.querySelector(".footer-input-comment"),w=document.querySelector(".footer-succes"),f=document.querySelector(".footer-invalid-email");function O(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}u.addEventListener("input",()=>{const e=u.value.trim();if(e===""){w.style.display="none",f.style.display="none",u.style.borderColor="rgba(250, 250, 250, 0.6)";return}O(e)?(w.style.display="block",u.style.borderColor="#3cbc81",f.style.display="none"):(w.style.display="none",f.style.display="block",u.style.borderColor="#e74a3b")});y.addEventListener("submit",async e=>{e.preventDefault();const t=u.value.trim(),n=te.value.trim();if(!O(t)){w.style.display="none",f.style.display="block",u.style.borderColor="#e74a3b";return}w.style.display="none",f.style.display="none",u.style.borderColor="rgba(250, 250, 250, 0.6)";const s={email:t,comment:n};try{const o=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!o.ok){const r=await o.json();throw new Error(r.message||"Something went wrong")}b.classList.add("is-visible"),document.body.classList.add("no-scroll"),y.reset()}catch{P.show({message:"Error",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}});function L(){b.classList.remove("is-visible"),document.body.classList.remove("no-scroll")}ee.addEventListener("click",L);b.addEventListener("click",e=>{e.target===b&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});const oe=[{x1:"./img/cover-powerpulse@1x.png",x2:"./img/cover-powerpulse@2x.png",alt:"Power Pulse"},{x1:"./img/cover-mimino@1x.png",x2:"./img/cover-mimino@2x.png",alt:"Mimino"},{x1:"./img/cover-ua-artistry@1x.png",x2:"./img/cover-ua-artistry@2x.png",alt:"Ua Artistry"},{x1:"./img/cover-green-harvest@1x.png",x2:"./img/cover-green-harvest@2x.png",alt:"Green Harvest"},{x1:"./img/cover-wallet@1x.png",x2:"./img/cover-wallet@2x.png",alt:"Wallet"},{x1:"./img/cover-chego@1x.png",x2:"./img/cover-chego@2x.png",alt:"Chego"},{x1:"./img/cover-energy-flow@1x.png",x2:"./img/cover-energy-flow@2x.png",alt:"Energy Flow"},{x1:"./img/cover-fruitbox@1x.png",x2:"./img/cover-fruitbox@2x.png",alt:"Fruibox"},{x1:"./img/cover-englishexcellence@1x.png",x2:"./img/cover-englishexcellence@2x.png",alt:"English Excellence"},{x1:"./img/cover-starlight-studio@1x.png",x2:"./img/cover-starlight-studio@2x.png",alt:"Starlight Studio"}],re=oe.map(({x1:e,x2:t,alt:n})=>`<li class="slide">
    <img src=${e} srcset="${e} 1x, ${t} 2x" alt="${n}"/>
  </li>`).join(""),ne=[document.querySelector(".carousel-from-start-1"),document.querySelector(".carousel-from-start-2"),document.querySelector(".carousel-from-start-3"),document.querySelector(".carousel-from-end-1"),document.querySelector(".carousel-from-end-2")];function se(){for(let e of ne)e.insertAdjacentHTML("beforeend",re)}se();const S=document.querySelector(".carousel"),v=parseFloat(window.getComputedStyle(S).transitionDuration)*1e3,h=[];function q(){const e=S.children,t=document.querySelector(".covers-container"),n=parseFloat(window.getComputedStyle(S).rowGap),s=parseFloat(window.getComputedStyle(t).width),o=e[0].offsetWidth+n,r=e.length,l=o*r-s;function d(a){let i=0,c=-1;return()=>{i+=c,i<0?i=r-1:i>=r&&(i=0);let g=i*o;g>l&&(g=l-n),a.style.transform=`translateX(${-g}px)`,c*=-1}}function m(a,i){let c=d(a);window.requestAnimationFrame(()=>{c()});const g=setInterval(()=>{c()},i);h.push(g)}function p(a,i){let c=d(a);a.style.transitionDuration="0s",c(),window.requestAnimationFrame(()=>{a.style.transitionDuration=`${i/1e3}s`,c()});const g=setInterval(()=>{c()},i);h.push(g)}const k=document.querySelector(".carousel-from-start-1"),$=document.querySelector(".carousel-from-start-2"),j=document.querySelector(".carousel-from-start-3"),D=document.querySelector(".carousel-from-end-1"),T=document.querySelector(".carousel-from-end-2"),N={root:null,rootMargin:"0px",threshold:0},R=function(a,i){a.forEach(c=>{c.isIntersecting&&(window.requestAnimationFrame(()=>{m(k,v),m($,v),m(j,v),p(D,v),p(T,v)}),i.unobserve(c.target))})},z=new IntersectionObserver(R,N);var W=document.querySelector("#covers");z.observe(W)}function V(){h.forEach(clearInterval),h.length=0}window.addEventListener("resize",()=>{V(),q()});window.addEventListener("orientationchange",()=>{V(),q()});q();
//# sourceMappingURL=index.js.map
