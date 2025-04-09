import Accordion from 'accordion-js';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

const options = {
  duration: 400,
  showMultiple: true,
  ariaEnabled: true,
  collapse: true,
  elementClass: 'about-ac',
  triggerClass: 'about-ac-trigger',
  panelClass: 'about-ac-panel',
  activeClass: 'is-active',
  openOnInit: [0],
};

new Accordion('.about-accordion-container', options);

const swiperParams = {
  modules: [Navigation, Keyboard],
  loop: true,
  navigation: {
    nextEl: '.about-btn-next',
  },
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: false,
    enabled: true,
    forceToAxis: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  allowTouchMove: true,
  threshold: 20,
  touchStartPreventDefault: false,
  touchMoveStopPropagation: true,
  //touchEventsTarget: '.swiper-wrapper',
  wrapperClass: 'about-swiper-wrapper',
  slideClass: 'about-slide',
};

const aboutSwiper = new Swiper('.about-swiper', { ...swiperParams });
