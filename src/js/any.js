const slides = document.querySelectorAll('.slide-temp');
const carousel = document.querySelector('.carousel');
const container = document.querySelector('.covers-container');

const duration =
  parseFloat(window.getComputedStyle(carousel).transitionDuration) * 1000;
const gap = parseFloat(window.getComputedStyle(carousel).rowGap);
const containerWith = container.offsetWidth;

const slideWidth = slides[0].offsetWidth + gap;
const totalSlides = slides.length;
const maxOffset = slideWidth * totalSlides - containerWith;

function moveCarousel(carousel) {
  let currentIndex = 0;
  let direction = -1; // 1 — вперед, -1 — назад

  return () => {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    let offset = currentIndex * slideWidth;
    if (offset > maxOffset) {
      offset = maxOffset - gap;
    }

    carousel.style.transform = `translateX(${-offset}px)`;

    direction *= -1;
  };
}

function fromStatToEnd(carousel, duration) {
  let move = moveCarousel(carousel);

  move();

  setInterval(() => {
    move();
  }, duration);
}

function fromEndToStart(carousel, duration) {
  let move = moveCarousel(carousel);

  carousel.style.transitionDuration = `0s`;
  move();
  setTimeout(() => {
    carousel.style.transitionDuration = `${duration / 1000}s`;
    move();
  }, 0);

  setInterval(() => {
    move();
  }, duration);
}

const carouselFromStart1 = document.querySelector('.carousel-from-start-1');
const carouselFromStart2 = document.querySelector('.carousel-from-start-2');
const carouselFromStart3 = document.querySelector('.carousel-from-start-3');
const carouselFromEnd1 = document.querySelector('.carousel-from-end-1');
const carouselFromEnd2 = document.querySelector('.carousel-from-end-2');

fromStatToEnd(carouselFromStart1, duration);
fromStatToEnd(carouselFromStart2, duration);
fromStatToEnd(carouselFromStart3, duration);
fromEndToStart(carouselFromEnd1, duration);
fromEndToStart(carouselFromEnd2, duration);
