import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

const reviewSwiper = new Swiper('.projects-swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  navigation: {
    prevEl: '.proj-swiper-button-prev',
    nextEl: '.proj-swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  watchOverflow: false,
  on: {
    slideChange: function () {
      const prevButton = document.querySelector('.proj-swiper-button-prev');
      const nextButton = document.querySelector('.proj-swiper-button-next');

      if (reviewSwiper.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
        prevButton.classList.remove('swiper-button-active');
        nextButton.classList.remove('swiper-button-disabled');
        nextButton.classList.add('swiper-button-active');
      } else if (reviewSwiper.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
        nextButton.classList.remove('swiper-button-active');
        prevButton.classList.remove('swiper-button-disabled');
        prevButton.classList.add('swiper-button-active');
      } else {
        prevButton.classList.remove('swiper-button-disabled');
        prevButton.classList.add('swiper-button-active');
        nextButton.classList.remove('swiper-button-disabled');
        nextButton.classList.add('swiper-button-active');
      }
    },
  },
});

/* function toggleButtons() {
  const prevButton = document.querySelector('.proj-swiper-button-prev');
  const nextButton = document.querySelector('.proj-swiper-button-next');

  if (reviewSwiper.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
    prevButton.classList.remove('swiper-button-active');
    nextButton.classList.remove('swiper-button-disabled');
    nextButton.classList.add('swiper-button-active');
  } else if (reviewSwiper.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
    nextButton.classList.remove('swiper-button-active');
    prevButton.classList.remove('swiper-button-disabled');
    prevButton.classList.add('swiper-button-active');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
    prevButton.classList.add('swiper-button-active');
    nextButton.classList.remove('swiper-button-disabled');
    nextButton.classList.add('swiper-button-active');
  }
} */
