const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.proj-swiper-button-next',
    prevEl: '.proj-swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  on: {
    init: function () {
      toggleButtons(this);
    },
    slideChange: function () {
      toggleButtons(this);
    },
  },
});

function toggleButtons(swiper) {
  const prevBtn = document.querySelector('.proj-swiper-button-prev');
  const nextBtn = document.querySelector('.proj-swiper-button-next');

  prevBtn.classList.toggle('swiper-button-disabled', swiper.isBeginning);
  nextBtn.classList.toggle('swiper-button-disabled', swiper.isEnd);

  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;

  /* prevBtn.removeAttribute('disabled');
  nextBtn.removeAttribute('disabled');
  prevBtn.setAttribute('aria-disabled', 'false');
  nextBtn.setAttribute('aria-disabled', 'false');
  prevBtn.classList.remove('swiper-button-lock');
  nextBtn.classList.remove('swiper-button-lock'); */
}
