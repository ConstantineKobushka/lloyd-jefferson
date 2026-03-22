export const createObserver = ({
  element,
  onEnter,
  onLeave,
  threshold,
  root = null,
  rootMargin = '0px',
}) => {
  if (!element) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onEnter?.(entry);
        } else {
          onLeave?.(entry);
        }
      });
    },
    { root, rootMargin, threshold }
  );

  observer.observe(element);

  return observer;
};
