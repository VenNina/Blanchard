const swiperFirst = document.querySelector('.swiper-first');
const swiperSecond = document.querySelector('.swiper-second');
const swiperThree = document.querySelector('.swiper-three');
const swiperFour = document.querySelector('.swiper-four');

let mySwiperFirst = new Swiper(swiperFirst, {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 2000,
  },
});

let mySwiperSecond = new Swiper(swiperSecond, {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 3,
  // loop: true,
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    // when window width is >= 320px
    // 480: {
    //   slidesPerView: 1,
    // },
    1000: {
      slidesPerView: 2,
    },
    1680: {
      slidesPerView: 3,
    },
  },
});

window.addEventListener('resize', () => {
  let windowWidth = window.innerWidth;
  if (windowWidth > 1300) {
    mySwiperSecond.update();
  }
});

let mySwiperThree = new Swiper(swiperThree, {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 3,
  // loop: true,
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  pagination: {
    el: '.events__swiper-pagination',
    clickable: 'true',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {
    // when window width is >= 320px
    // 480: {
    //   slidesPerView: 1,
    // },
    400: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

let mySwiperFour = new Swiper(swiperFour, {
  slidesPerView: 1,
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
  breakpoints: {
    // when window width is >= 320px
    // 600: {
    //   slidesPerView: 1,
    // },
    900: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
