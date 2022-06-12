// (function() {
//   const gallerySwiper = document.querySelector('.gallery__swiper-wrapper');

//   gallerySwiper.addEventListener('click', function(event) {
//     let galleryTarget = event.target;
//     console.log(galleryTarget.tagName);
//   });
// })();


// function showTarget(ev) {
//   // события настроены на всплытие
//   // target это конечный элемент, на котором произошло событие, на которое мы подписались
//   // currentTarget это текущий элемент, на котором мы перехватили событие, на определенной его стадии, всплытие или погружение
//   console.log('target:', ev.target, '\ncurrentTarget:', ev.currentTarget);
// }
// document.querySelector('body').addEventListener('click', showTarget);
// document.querySelector('.gallery__container').addEventListener('click', showTarget);

// (function() {
//   document
//     .querySelector('.gallery__slider')
//     .addEventListener('click', function(ev) {
//       if (ev.target.children[0].tagName === 'IMG') {
//         console.log('это img');
//         let img = ev.target.children[0];
//         let igmSrc = img.getAttribute('src');
//         console.log(igmSrc);
//         let igmAlt = img.getAttribute('alt');
//         console.log(igmAlt);
//         let imgTitle = img.getAttribute('title');
//         console.log(imgTitle);
//       }
//     })
// })();
