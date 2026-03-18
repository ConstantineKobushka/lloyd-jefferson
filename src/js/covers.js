const coversSection = document.querySelector('.covers');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.5,
};

const observerCallBack = entries => {
  if (entries[0].isIntersecting) {
    coversSection.classList.add('animate');
  } else {
    coversSection.classList.remove('animate');
  }
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(coversSection);
