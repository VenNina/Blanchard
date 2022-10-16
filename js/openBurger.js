(function () {
  const burger = document.querySelector('.burger'),
    header = document.querySelector('.header'),
    btnSeach = document.querySelector('.btn-loop'),
    headerPopup = document.querySelector('.header__popup'),
    headerPopupWrap = document.querySelector('.header__popup-wrap'),
    body = document.body,
    absoluteBlocks = document.querySelectorAll('.absolute-block');

  function openPopupMenu() {
    // определяем ширину скролла
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    // меняем значение padding right у body, чтобы сайт не прыгал
    body.style.paddingRight = paddingOffset
    // добавляем класс, который отключает скролл, и бросает стр на верх
    body.classList.add('disable-scroll')
    absoluteBlocks.forEach((el) => {
      el.style.right = paddingOffset
    });
    // отключаем взаимодействие с body
    btnSeach.inert = true
    Array.from(body.children).forEach((child) => {
      if (child !== header) {
        child.inert = true
      }
    })
    // открываем бургер
    burger.classList.add('burger--open')
    burger.setAttribute('aria-expanded', true)
    // открываем popup
    headerPopup.classList.add('header__popup--active');
    headerPopupWrap.classList.add('header__popup-wrap--active')

    // события закрытие бургера
    headerPopupWrap.addEventListener('keydown', (el) => {

      if (el.key == 'Enter' || el.key == 'Escape') {
        closePopupMenu()
      }
    })
    headerPopupWrap.addEventListener('click', (el) => {
      if (el.target.tagName === 'SPAN' || el.target == burger) {
        closePopupMenu()
      }
    })
  }

  function closePopupMenu() {
    // закрываем бургер
    burger.classList.remove('burger--open')
    burger.setAttribute('aria-expanded', false)
    // меняем значение padding right у body, чтобы сайт не прыгал
    body.style.paddingRight = 0 + 'px'
    // добавляем класс, который отключает скролл, и бросает стр на верх
    body.classList.remove('disable-scroll')
    absoluteBlocks.forEach((el) => {
      el.style.right = 0 + 'px'
    });
    // открываем popup
    headerPopup.classList.remove('header__popup--active');
    headerPopupWrap.classList.remove('header__popup-wrap--active')
    // отключаем взаимодействие с body
    btnSeach.inert = false
    Array.from(body.children).forEach((child) => {
      child.inert = false
      if (child !== header) {
      }
    })
  }

  burger.addEventListener('click', () => {
    if (burger.classList.contains('burger--open')) {
      closePopupMenu()
      setTimeout(() => {
        burger.focus()
      }, 200)
    }
    else {
      openPopupMenu()
      setTimeout(() => {
        burger.focus()
      }, 200)
    }
  })
})();

// старая функция
// (function () {
//   const burger = document.querySelector('.burger'),
//     header = document.querySelector('.header'),
//     btnSeach = document.querySelector('.btn-loop'),
//     headerPopup = document.querySelector('.header__popup'),
//     headerPopupWrap = document.querySelector('.header__popup-wrap'),
//     body = document.body,
//     absoluteBlocks = document.querySelectorAll('.absolute-block');

//   function openClosePopupMenu() {
//     // определяем ширину скролла
//     let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
//     // открываем бургер
//     let isOpen = burger.getAttribute('aria-expanded') === "false"
//     burger.setAttribute('aria-expanded', isOpen)
//     burger.classList.toggle('burger--open')

//     // меняем значение padding right у body, чтобы сайт не прыгал
//     body.style.paddingRight = paddingOffset
//     // добавляем класс, который отключает скролл, и бросает стр на верх
//     body.classList.toggle('disable-scroll')
//     // у всех абсолютно позиционированнах элементов убираем ширину скролла
//     absoluteBlocks.forEach((el) => {
//       el.style.right = paddingOffset
//     });
//     // открываем popup
//     headerPopup.classList.toggle('header__popup--active');
//     headerPopupWrap.classList.toggle('header__popup-wrap--active')

//     headerPopupWrap.addEventListener('click', (el) => {
//       if (el.target.tagName === 'SPAN') {
//         console.log(el.target)
//         console.log(el.currentTarget)
//         openClosePopupMenu()
//       }
//     });

//     headerPopupWrap.addEventListener('keydown', (el) => {
//       if (el.key == 'Enter' || el.key == 'Escape') {
//         openClosePopupMenu()
//       }
//     })

//     // отключаем взаимодействие с body
//     if (headerPopup.classList.contains('header__popup--active')) {
//       btnSeach.inert = true
//       Array.from(body.children).forEach((child) => {
//         if (child !== header) {
//           child.inert = true
//         }
//       })
//     }
//     else {
//       btnSeach.inert = false
//       Array.from(body.children).forEach((child) => {
//         if (child !== header) {
//           child.inert = false
//         }
//       })
//     }
//   };

//   burger.addEventListener('click', () => {
//     openClosePopupMenu()
//   });
// })();
