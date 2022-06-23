(function() {
  const btns = document.querySelectorAll('.popup-open'),
    popup = document.querySelector('.popup'),
    popupWrap = document.querySelectorAll('.popup__wrap'),
    html = document.documentElement,
    body = document.body;

  // отключение скролла
  let disableScroll = function() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    // сохраняем в переменную значение текущего скролла
    let pagePosition = window.scrollY;
    // меняем значение padding right у body, чтобы сайт не прыгал
    body.style.paddingRight = paddingOffset;
    // добавляем класс, который отключает скролл, и бросает стр на верх
    body.classList.add('disable-scroll');
    // отключаем плавный скролл
    html.style.scrollBehavior = 'auto';
    // устанавливаем у body атрибут date-position со значением pagePosition
    body.dataset.position = pagePosition;
    // сайт прыгаем на верх но мы его возращаем назад на минус это значение
    body.style.top = -pagePosition + 'px';
  }

  // включение скролла
  let enableScroll = function() {
    // значение по умолчанию строка, мы переводим его в число
    let pagePosition = parseInt(document.body.dataset.position, 10);
    // убираем предыдущие значение top у body
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    body.style.paddingRight = '0px';
    // отправляем пользователя обратно через функцию JS
    window.scroll({ top: pagePosition, left: 0 });
    // удаляем атрибут
    body.removeAttribute('data-position');
    // включаем плавный скролл
    html.style.scrollBehavior = 'smooth';
  }

  // на все кнопки(img) навешиваем событие клик, по клику через атрубут data находим img которую нужно показать
  btns.forEach((el) => {
    el.addEventListener('click', (e) => {

      disableScroll(); // отключаем скролл, при клике по img

      let path = e.currentTarget.getAttribute('data-path');

      popupWrap.forEach((el) => {
        el.classList.remove('popup--active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('popup__wrap--active');
      popup.classList.add('popup--active');
    });
  });

  // закрываем модальное окно, если происходит клик по popup или по кнопки
  popup.addEventListener('click', (e) => {
    if (e.target == popup || e.target.tagName === 'BUTTON') {

      enableScroll(); // включаем скролл

      popup.classList.remove('popup--active');
      popupWrap.forEach((el) => {
        el.classList.remove('popup__wrap--active');
      });
    }
  });

})();
