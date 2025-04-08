import{A,S as L,N as E,K as q,i as P}from"./assets/vendor-CkB2Yy-u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".menu-btn"),t=document.querySelector(".submenu"),s=document.querySelectorAll(".nav-link");function n(){t.classList.toggle("active")}function o(){t.classList.remove("active")}e.addEventListener("click",n),s.forEach(r=>r.addEventListener("click",({target:c})=>{document.getElementById(c.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"}),o()})),document.addEventListener("click",({target:r})=>{e.contains(r)||t.contains(r)||o()})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#openModal"),t=document.querySelector(".close-modal-menu"),s=document.querySelector(".modal-menu"),n=document.querySelector("body"),o=document.querySelectorAll(".modal-nav-link"),r=document.querySelector(".modal-order-btn");function c(){s.classList.add("active"),n.style.overflow="hidden"}function d(){s.classList.remove("active"),n.style.overflow="auto"}e.addEventListener("click",c),t.addEventListener("click",d),o.forEach(m=>m.addEventListener("click",({target:p})=>{document.getElementById(p.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"}),d()})),r.addEventListener("click",m=>{m.preventDefault();const p=document.getElementById(r.getAttribute("href").substring(1));p&&p.scrollIntoView({behavior:"smooth"}),d()})});const H={duration:400,showMultiple:!0,ariaEnabled:!0,collapse:!0,elementClass:"about-ac",triggerClass:"about-ac-trigger",panelClass:"about-ac-panel",activeClass:"is-active",openOnInit:[0]};new A(".about-accordion-container",H);const K={modules:[E,q],loop:!0,navigation:{nextEl:".about-btn-next"},slidesPerView:2,spaceBetween:0,breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!1,enabled:!0,forceToAxis:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,allowTouchMove:!0,threshold:20,touchStartPreventDefault:!1,touchMoveStopPropagation:!0,wrapperClass:"about-swiper-wrapper",slideClass:"about-slide"};new L(".about-swiper",{...K});const I=new L(".projects-swiper",{modules:[E,q],slidesPerView:1,spaceBetween:30,direction:"horizontal",navigation:{prevEl:".proj-swiper-button-prev",nextEl:".proj-swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},watchOverflow:!1,on:{slideChange:function(){const e=document.querySelector(".proj-swiper-button-prev"),t=document.querySelector(".proj-swiper-button-next");I.isBeginning?(e.classList.add("swiper-button-disabled"),e.classList.remove("swiper-button-active"),t.classList.remove("swiper-button-disabled"),t.classList.add("swiper-button-active")):I.isEnd?(t.classList.add("swiper-button-disabled"),t.classList.remove("swiper-button-active"),e.classList.remove("swiper-button-disabled"),e.classList.add("swiper-button-active")):(e.classList.remove("swiper-button-disabled"),e.classList.add("swiper-button-active"),t.classList.remove("swiper-button-disabled"),t.classList.add("swiper-button-active"))}}}),U="https://portfolio-js.b.goit.study/api/reviews",F=document.querySelector(".reviews-list");let M=!1;const x=new L(".reviews-swiper",{modules:[E,q],slidesPerView:1,spaceBetween:16,direction:"horizontal",navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:function(){const e=document.querySelector(".swiper-btn-prev"),t=document.querySelector(".swiper-btn-next");x.isBeginning?(e.classList.add("swiper-button-disabled"),e.classList.remove("swiper-button-active"),t.classList.remove("swiper-button-disabled"),t.classList.add("swiper-button-active")):x.isEnd?(t.classList.add("swiper-button-disabled"),t.classList.remove("swiper-button-active"),e.classList.remove("swiper-button-disabled"),e.classList.add("swiper-button-active")):(e.classList.remove("swiper-button-disabled"),e.classList.add("swiper-button-active"),t.classList.remove("swiper-button-disabled"),t.classList.add("swiper-button-active"))}}});async function _(){try{const e=await fetch(U);if(!e.ok)throw new Error("Server error");return await e.json()}catch{return J(),Z(),null}}function G(e){const t=e.map(({_id:s,author:n,review:o,avatar_url:r})=>`
      <li class="swiper-slide reviews-item" data-id="${s}">
        <div class="reviews-avatar">
          <img src="${r}" alt="${n}" width="80" height="80" loading="lazy" />
        </div>
        <h3 class="reviews-name">${n}</h3>
        <p class="reviews-text">${o}</p>
      </li>`).join("");F.innerHTML=t,x.update()}function Z(){F.innerHTML='<li class="reviews-placeholder">Not found</li>'}function J(){P.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}const X=new IntersectionObserver(async(e,t)=>{const[s]=e;if(s.isIntersecting&&!M){M=!0;const n=await _();n&&G(n),t.unobserve(s.target)}},{root:null,threshold:.3}),Q=document.querySelector("#reviews");X.observe(Q);const Y=document.querySelector(".faq-acc-container");document.querySelectorAll(".ac");new A(Y,{collapse:!0,duration:400,showMultiple:!1});const ee=[{x1:"./img/cover-powerpulse@1x.png",x2:"./img/cover-powerpulse@2x.png",alt:"Power Pulse"},{x1:"./img/cover-mimino@1x.png",x2:"./img/cover-mimino@2x.png",alt:"Mimino"},{x1:"./img/cover-ua-artistry@1x.png",x2:"./img/cover-ua-artistry@2x.png",alt:"Ua Artistry"},{x1:"./img/cover-green-harvest@1x.png",x2:"./img/cover-green-harvest@2x.png",alt:"Green Harvest"},{x1:"./img/cover-wallet@1x.png",x2:"./img/cover-wallet@2x.png",alt:"Wallet"},{x1:"./img/cover-chego@1x.png",x2:"./img/cover-chego@2x.png",alt:"Chego"},{x1:"./img/cover-energy-flow@1x.png",x2:"./img/cover-energy-flow@2x.png",alt:"Energy Flow"},{x1:"./img/cover-fruitbox@1x.png",x2:"./img/cover-fruitbox@2x.png",alt:"Fruibox"},{x1:"./img/cover-englishexcellence@1x.png",x2:"./img/cover-englishexcellence@2x.png",alt:"English Excellence"},{x1:"./img/cover-starlight-studio@1x.png",x2:"./img/cover-starlight-studio@2x.png",alt:"Starlight Studio"}],te=ee.map(({x1:e,x2:t,alt:s})=>`<li class="slide">
    <img src=${e} srcset="${e} 1x, ${t} 2x" alt="${s}"/>
  </li>`).join(""),oe=[document.querySelector(".carousel-from-start-1"),document.querySelector(".carousel-from-start-2"),document.querySelector(".carousel-from-start-3"),document.querySelector(".carousel-from-end-1"),document.querySelector(".carousel-from-end-2")];function re(){for(let e of oe)e.insertAdjacentHTML("beforeend",te)}re();const S=document.querySelector(".carousel"),w=parseFloat(window.getComputedStyle(S).transitionDuration)*1e3,b=[];function C(){const e=S.children,t=document.querySelector(".covers-container"),s=parseFloat(window.getComputedStyle(S).rowGap),n=parseFloat(window.getComputedStyle(t).width),o=e[0].offsetWidth+s,r=e.length,c=o*r-n;function d(l){let i=0,a=-1;return()=>{i+=a,i<0?i=r-1:i>=r&&(i=0);let v=i*o;v>c&&(v=c-s),l.style.transform=`translateX(${-v}px)`,a*=-1}}function m(l,i){let a=d(l);window.requestAnimationFrame(()=>{a()});const v=setInterval(()=>{a()},i);b.push(v)}function p(l,i){let a=d(l);l.style.transitionDuration="0s",a(),window.requestAnimationFrame(()=>{l.style.transitionDuration=`${i/1e3}s`,a()});const v=setInterval(()=>{a()},i);b.push(v)}const B=document.querySelector(".carousel-from-start-1"),j=document.querySelector(".carousel-from-start-2"),D=document.querySelector(".carousel-from-start-3"),$=document.querySelector(".carousel-from-end-1"),T=document.querySelector(".carousel-from-end-2"),N={root:null,rootMargin:"0px",threshold:0},z=function(l,i){l.forEach(a=>{a.isIntersecting&&(window.requestAnimationFrame(()=>{m(B,w),m(j,w),m(D,w),p($,w),p(T,w)}),i.unobserve(a.target))})},R=new IntersectionObserver(z,N);var W=document.querySelector("#covers");R.observe(W)}function O(){b.forEach(clearInterval),b.length=0}window.addEventListener("resize",()=>{O(),C()});window.addEventListener("orientationchange",()=>{O(),C()});C();const y=document.querySelector(".footer-form"),h=document.querySelector(".footer-modal-window"),se=document.querySelector(".footer-close"),u=y.querySelector(".footer-input-email"),ne=y.querySelector(".footer-input-comment"),g=document.querySelector(".footer-succes"),f=document.querySelector(".footer-invalid-email");function V(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}u.addEventListener("input",()=>{const e=u.value.trim();if(e===""){g.style.display="none",f.style.display="none",u.style.borderColor="rgba(250, 250, 250, 0.6)";return}V(e)?(g.style.display="block",u.style.borderColor="#3cbc81",f.style.display="none"):(g.style.display="none",f.style.display="block",u.style.borderColor="#e74a3b")});y.addEventListener("submit",async e=>{e.preventDefault();const t=u.value.trim(),s=ne.value.trim();if(!V(t)){g.style.display="none",f.style.display="block",u.style.borderColor="#e74a3b";return}g.style.display="none",f.style.display="none",u.style.borderColor="rgba(250, 250, 250, 0.6)";const n={email:t,comment:s};try{const o=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok){const r=await o.json();throw new Error(r.message||"Something went wrong")}h.classList.add("is-visible"),document.body.classList.add("no-scroll"),y.reset()}catch{P.show({message:"Error",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}});function k(){h.classList.remove("is-visible"),document.body.classList.remove("no-scroll")}se.addEventListener("click",k);h.addEventListener("click",e=>{e.target===h&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});
//# sourceMappingURL=index.js.map
