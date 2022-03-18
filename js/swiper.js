const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

});
