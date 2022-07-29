(function() {
  const burger = document.querySelector('.burger'),
    headerPopup = document.querySelector('.header__popup'),
    headerPopupWrap = document.querySelector('.header__popup-wrap'),
    body = document.body,
    absoluteBlocks = document.querySelectorAll('.absolute-block');

  function openClosePopupMenu() {
    // определяем ширину скролла
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    // открываем бургер
    burger.classList.toggle('burger--open');
    // меняем значение padding right у body, чтобы сайт не прыгал
    body.style.paddingRight = paddingOffset;
    // добавляем класс, который отключает скролл, и бросает стр на верх
    body.classList.toggle('disable-scroll');
    // у всех абсолютно позиционированнах элементов убираем ширину скролла
    absoluteBlocks.forEach((el) => {
      el.style.right = paddingOffset;
    });
    // открываем popup
    headerPopup.classList.toggle('header__popup--active');
    headerPopupWrap.classList.toggle('header__popup-wrap--active');
  };

  burger.addEventListener('click', () => {
    openClosePopupMenu();
  });

  headerPopupWrap.addEventListener('click', (el) => {
    if (el.target.tagName === 'SPAN') {
      openClosePopupMenu();
    }
  });

})();
