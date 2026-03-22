import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';

import { attachSwiperKeyboardOnView } from './swiperWithObserver';

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

attachSwiperKeyboardOnView({
  swiper: aboutSwiper,
  element: aboutSwiperInner,
  threshold: 0.5,
});
