import { createObserver } from './observer';
import { createSwiperKeyboardHandler } from './swiperKeyboard';

export const attachSwiperKeyboardOnView = ({ swiper, element, threshold }) => {
  const handler = createSwiperKeyboardHandler(swiper);

  createObserver({
    element,
    threshold,
    onEnter: () => {
      document.addEventListener('keydown', handler);
    },
    onLeave: () => {
      document.removeEventListener('keydown', handler);
    },
  });
};
