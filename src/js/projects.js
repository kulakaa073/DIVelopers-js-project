const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  on: {
    init: function () {
      toggleButtons(this);
    },
    slideChange: function () {
      toggleButtons(this);
    }
  }
});

function toggleButtons(swiper) {
  const prevBtn = document.querySelector('.swiper-button-prev');
  const nextBtn = document.querySelector('.swiper-button-next');

  prevBtn.classList.toggle('swiper-button-disabled', swiper.isBeginning);
  nextBtn.classList.toggle('swiper-button-disabled', swiper.isEnd);

  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}
