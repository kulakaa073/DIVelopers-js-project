import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const options = {
    duration: 400,
    showMultiple: false,
    ariaEnabled: true,
    collapse: true,
    elementClass: 'about-ac',
    triggerClass: 'about-ac-trigger',
    panelClass: 'about-ac-panel',
    activeClass: 'is-active',
    openOnInit: [0],
};

new Accordion(".about-accordion-container", options);


const swiperParams = {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.about-btn-next',
  },
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0
       },
    },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
       },
  mousewheel: {
    invert: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    allowTouchMove: true,
    threshold: 20,
};

const aboutSwiper = new Swiper('.about-swiper', swiperParams);