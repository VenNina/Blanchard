const swiperFirst = document.querySelector('.swiper-first');
const swiperSecond = document.querySelector('.swiper-second');
const swiperThree = document.querySelector('.swiper-three');
const swiperFour = document.querySelector('.swiper-four');

let mySwiperFirst = new Swiper(swiperFirst, {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2000,
  },
});

let mySwiperSecond = new Swiper(swiperSecond, {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    500: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1011: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1680: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});


let mySwiperThree = new Swiper(swiperThree, {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 3,
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
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    610: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 50,
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
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

// window.addEventListener('resize', () => {
//   let windowWidth = window.innerWidth;
//   if (windowWidth > 1300) {
//     mySwiperSecond.update();
//     mySwiperThree.update();
//   }
//   if (windowWidth < 1300) {
//     mySwiperThree.update();
//   }
// });
