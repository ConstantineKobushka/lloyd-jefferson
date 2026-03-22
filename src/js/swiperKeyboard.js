export const createSwiperKeyboardHandler = (
  swiper,
  {
    nextKey = 'ArrowRight',
    prevKey = 'ArrowLeft',
    triggerKey = 'Tab',
    preventDefault = true,
    speed = 1000,
  } = {}
) => {
  const handler = event => {
    switch (event.key) {
      case nextKey:
        swiper.slideNext(speed);
        break;

      case prevKey:
        swiper.slidePrev(speed);
        break;

      case triggerKey:
        if (preventDefault) event.preventDefault();
        swiper.slideNext(speed);
        break;
    }
  };

  return handler;
};
