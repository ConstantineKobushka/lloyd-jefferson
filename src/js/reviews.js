import Swiper from 'swiper/bundle';

const reviews = document.querySelector('.reviews');

const reviewsSwiper = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  speed: 1000,
  grabCursor: true,
  simulateTouch: true,
  slideToClickedSlide: true,
  navigation: {
    prevEl: '.reviews-btn-prev',
    nextEl: '.reviews-btn-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

const handleKeyDown = event => {
  switch (event.key) {
    case 'ArrowRight':
      reviewsSwiper.slideNext(1000);
      break;
    case 'ArrowLeft':
      reviewsSwiper.slidePrev(1000);
      break;
    case 'Tab':
      event.preventDefault();
      reviewsSwiper.slideNext(1000);
      break;
  }
};

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 1,
};

const observerCallBack = entries => {
  if (entries[0].isIntersecting) {
    document.addEventListener('keydown', handleKeyDown);
  } else {
    document.removeEventListener('keydown', handleKeyDown);
  }
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(reviews);
