import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';

const aboutSwiperInner = document.querySelector('.about-swiper-inner');

new Accordion(['.about-accordion-container'], {
  openOnInit: [0],
});

const aboutSwiper = new Swiper('.about-swiper', {
  slidesPerView: 2,
  loop: true,
  slidesPerGroup: 1,
  speed: 1000,
  grabCursor: true,
  simulateTouch: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.about-swiper-btn-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

const handleKeyDown = event => {
  switch (event.key) {
    case 'ArrowRight':
      aboutSwiper.slideNext(1000);
      break;
    case 'ArrowLeft':
      aboutSwiper.slidePrev(1000);
      break;
    case 'Tab':
      event.preventDefault();
      aboutSwiper.slideNext(1000);
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
observer.observe(aboutSwiperInner);
