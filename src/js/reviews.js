import Swiper from 'swiper/bundle';

import { getreviews } from './api';
import { attachSwiperKeyboardOnView } from './swiperWithObserver';

const reviewsSection = document.querySelector('.reviews');
const reviewsListEl = document.querySelector('.reviews-wrapper');
const reviewsNotFoundEl = document.querySelector('.reviews-not-found');
const reviewsButtonsEl = document.querySelector('.reviews-btn-container');
const reviewsSliderEl = document.querySelector('.reviews-slider');

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

attachSwiperKeyboardOnView({
  swiper: reviewsSwiper,
  element: reviewsSection,
  threshold: 0.5,
});

const createReviewItem = ({ author, avatar_url, review }) => {
  return `
  <li class="reviews-slide swiper-slide">
    <img
      class="reviews-img"
      src="${avatar_url}"
      alt="${author}"
      width="48"
      height="48"
      loading="lazy"
    />
    <h3 class="reviews-title">${author}</h3>
    <p class="reviews-text">
      ${review}
    </p>
  </li>
  `;
};

const createReviews = reviews => {
  return reviews.map(createReviewItem).join('');
};

const renderReviews = async container => {
  try {
    const { data: reviews } = await getreviews();
    container.insertAdjacentHTML('beforeend', createReviews(reviews));
  } catch (error) {
    reviewsButtonsEl.remove();
    reviewsSliderEl.remove();
    reviewsNotFoundEl.classList.add('active');
  }
};

renderReviews(reviewsListEl);
