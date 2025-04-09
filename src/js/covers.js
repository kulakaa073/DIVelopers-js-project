import renderSlides from './covers-render-slides.js';

renderSlides();

const intervals = [];

const carousel = document.querySelector('.carousel');
const allCarousels = Array.from(document.querySelectorAll('.carousel'));
const duration =
  parseFloat(window.getComputedStyle(carousel).transitionDuration) * 1000;

function updateCarouselDimensions() {
  allCarousels.forEach(carousel => {
    carousel.style.transitionDuration = '0s';
    carousel.style.transform = 'translateX(0px)';
  });

  const slides = carousel.children;
  const container = document.querySelector('.covers-container');

  const gap = parseFloat(window.getComputedStyle(carousel).rowGap);
  const containerWith = parseFloat(window.getComputedStyle(container).width);

  const slideWidth = slides[0].offsetWidth + gap;
  const totalSlides = slides.length;
  const maxOffset = slideWidth * totalSlides - containerWith;

  function moveCarousel(carousel) {
    let currentIndex = 0;
    let direction = -1;
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

  function fromStartToEnd(carousel) {
    let move = moveCarousel(carousel);

    window.requestAnimationFrame(() => {
      carousel.style.transitionDuration = `${duration / 1000}s`;
      move();
    });

    const interval = setInterval(() => {
      move();
    }, duration);
    intervals.push(interval);
  }

  function fromEndToStart(carousel) {
    let move = moveCarousel(carousel);

    carousel.style.transitionDuration = `0s`;
    move();

    window.requestAnimationFrame(() => {
      carousel.style.transitionDuration = `${duration / 1000}s`;
      move();
    });

    const interval = setInterval(() => {
      move();
    }, duration);
    intervals.push(interval);
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const callback = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.requestAnimationFrame(() => {
          allCarousels.forEach(carousel => {
            if (carousel.classList.contains('carousel-from-start')) {
              fromStartToEnd(carousel);
            } else {
              fromEndToStart(carousel);
            }
          });
        });

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  var target = document.querySelector('#covers');
  observer.observe(target);
}

function clearAllIntervals() {
  intervals.forEach(clearInterval);
  intervals.length = 0;
}

window.addEventListener('resize', () => {
  clearAllIntervals();
  updateCarouselDimensions();
});
window.addEventListener('orientationchange', () => {
  clearAllIntervals();
  updateCarouselDimensions();
});

updateCarouselDimensions();
