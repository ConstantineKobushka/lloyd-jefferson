import Swiper from 'swiper/bundle';

import { attachSwiperKeyboardOnView } from './swiperWithObserver';

const projects = document.querySelector('.projects');

const projectsSlider = new Swiper('.projects-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  slidesPerGroup: 1,
  speed: 1000,
  grabCursor: true,
  simulateTouch: true,
  slideToClickedSlide: true,
  navigation: {
    prevEl: '.projects-btn-prev',
    nextEl: '.projects-btn-next',
  },
});

attachSwiperKeyboardOnView({
  swiper: projectsSlider,
  element: projects,
  threshold: 0.5,
});
