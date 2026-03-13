import Swiper from 'swiper/bundle';

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

const handleKeyDown = event => {
  switch (event.key) {
    case 'ArrowRight':
      projectsSlider.slideNext(1000);
      break;
    case 'ArrowLeft':
      projectsSlider.slidePrev(1000);
      break;
    case 'Tab':
      event.preventDefault();
      projectsSlider.slideNext(1000);
      break;
  }
};

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.1,
};

const observerCallBack = entries => {
  if (entries[0].isIntersecting) {
    document.addEventListener('keydown', handleKeyDown);
  } else {
    document.removeEventListener('keydown', handleKeyDown);
  }
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(projects);
