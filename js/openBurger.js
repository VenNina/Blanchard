(function () {
  const burger = document.querySelector('.burger'),
    header = document.querySelector('.header'),
    btnSeach = document.querySelector('.btn-loop'),
    headerPopup = document.querySelector('.header__popup'),
    headerPopupWrap = document.querySelector('.header__popup-wrap'),
    body = document.body,
    absoluteBlocks = document.querySelectorAll('.absolute-block');

  function openClosePopupMenu() {
    // определяем ширину скролла
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    // открываем бургер
    let isOpen = burger.getAttribute('aria-expanded') === "false"
    burger.setAttribute('aria-expanded', isOpen)
    burger.classList.toggle('burger--open')

    // меняем значение padding right у body, чтобы сайт не прыгал
    body.style.paddingRight = paddingOffset
    // добавляем класс, который отключает скролл, и бросает стр на верх
    body.classList.toggle('disable-scroll')
    // у всех абсолютно позиционированнах элементов убираем ширину скролла
    absoluteBlocks.forEach((el) => {
      el.style.right = paddingOffset
    });
    // открываем popup
    headerPopup.classList.toggle('header__popup--active');
    headerPopupWrap.classList.toggle('header__popup-wrap--active')

    headerPopupWrap.addEventListener('click', (el) => {
      if (el.target.tagName === 'SPAN') {
        openClosePopupMenu()
      }
    });

    headerPopupWrap.addEventListener('keydown', (el) => {
      if (el.key == 'Enter' || el.key == 'Escape') {
        openClosePopupMenu()
      }
    })

    // отключаем взаимодействие с body
    if (headerPopup.classList.contains('header__popup--active')) {
      btnSeach.inert = true
      Array.from(body.children).forEach((child) => {
        if (child !== header) {
          child.inert = true
        }
      })
    }
    else {
      btnSeach.inert = false
      Array.from(body.children).forEach((child) => {
        if (child !== header) {
          child.inert = false
        }
      })
    }
  };

  burger.addEventListener('click', () => {
    openClosePopupMenu()
  });
})();
