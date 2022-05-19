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
  zoom: true,
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
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
  // loop: true,
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

const swiperFourth = new Swiper('.swiper-fourth', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  // loop: true,
  navigation: {
    nextEl: '.prodjects__swiper-button-next',
    prevEl: '.prodjects__swiper-button-prev',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});
