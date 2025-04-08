import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const reviewsUrl = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewsList = document.querySelector('.reviews-list');
let reviewsLoaded = false;

const reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },

  on: {
    slideChange: function () {
      const prevButton = document.querySelector('.swiper-btn-prev');
      const nextButton = document.querySelector('.swiper-btn-next');

      if (reviewsSwiper.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
        prevButton.classList.remove('swiper-button-active');
        nextButton.classList.remove('swiper-button-disabled');
        nextButton.classList.add('swiper-button-active');
      } else if (reviewsSwiper.isEnd) {
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

async function getReviews() {
  try {
    const response = await fetch(reviewsUrl);
    if (!response.ok) {
      throw new Error('Server error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    showError();
    showFallback();
    return null;
  }
}

function renderReviews(reviews) {
  const markup = reviews
    .map(
      ({ _id: id, author: name, review: text, avatar_url: avatar }) => `
      <li class="swiper-slide reviews-item" data-id="${id}">
        <div class="reviews-avatar">
          <img src="${avatar}" alt="${name}" width="80" height="80" loading="lazy" />
        </div>
        <h3 class="reviews-name">${name}</h3>
        <p class="reviews-text">${text}</p>
      </li>`
    )
    .join('');
  reviewsList.innerHTML = markup;

  reviewsSwiper.update();
}

function showFallback() {
  reviewsList.innerHTML = `<li class="reviews-placeholder">Not found</li>`;
}

function showError() {
  iziToast.error({
    title: 'Error',
    message: 'Failed to load reviews',
    position: 'topRight',
  });
}

const observer = new IntersectionObserver(
  async (entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting && !reviewsLoaded) {
      reviewsLoaded = true;
      const reviews = await getReviews();
      if (reviews) {
        renderReviews(reviews);
      }
      observer.unobserve(entry.target);
    }
  },
  {
    root: null,
    threshold: 0.3,
  }
);

const reviewsSection = document.querySelector('#reviews');
observer.observe(reviewsSection);
