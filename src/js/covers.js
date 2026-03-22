import { createObserver } from './observer';

const coversSection = document.querySelector('.covers');

createObserver({
  element: coversSection,
  threshold: 0.5,
  onEnter: () => coversSection.classList.add('animate'),
  onLeave: () => coversSection.classList.remove('animate'),
});
