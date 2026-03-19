const scrollUp = document.querySelector('.scroll-up');
const offset = 1;

const getTop = () => window.scrollY || document.documentElement.scrollTop;

const updateScrollUp = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const step = height / 25;
  let value = getTop() / step;
  value = Math.max(0, Math.min(value, 100));
  const currentColor = document.documentElement.dataset.theme;
  scrollUp.style.boxShadow = `inset 0 0 0 ${value}px ${currentColor}`;
};

const onScroll = () => {
  updateScrollUp();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up-active');
  } else {
    scrollUp.classList.remove('scroll-up-active');
  }
};

const onScrollUpClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

window.addEventListener('scroll', onScroll);
document.addEventListener('DOMContentLoaded', updateScrollUp);
scrollUp.addEventListener('click', onScrollUpClick);
