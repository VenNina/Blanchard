const swiperFirst = new Swiper('.swiper-first', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 2000,
  },
});

const swiperSecond = new Swiper('.swiper-second', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  zoom: {
    maxRatio: 5,
  },
});

const swiperThree = new Swiper('.swiper-three', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

});
