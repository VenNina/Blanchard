(function () {
  const btns = document.querySelectorAll('.popup-btn-open'),
    popup = document.querySelector('.popup'),
    popupWrap = document.querySelectorAll('.popup__wrap'),
    html = document.documentElement,
    body = document.body,
    main = document.querySelector('main'),
    gallery = document.querySelector('.gallery');
  let activeElement;

  // отключение скролла
  let disableScroll = function () {
    activeElement = document.activeElement // запоминаем активный элемент
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    // сохраняем в переменную ширину текущего скролла
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
  let enableScroll = function () {
    // значение по умолчанию строка, мы переводим его в число
    let pagePosition = parseInt(document.body.dataset.position, 10);
    console.log(pagePosition);
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
    setTimeout(() => {
      activeElement.focus() // возвращаем фокус на элемент
    }, 100)
  }

  // на все кнопки(img) навешиваем событие клик, по клику через атрубут data находим img которую нужно показать
  btns.forEach((el) => {
    el.addEventListener('click', (e) => {

      disableScroll(); // отключаем скролл, при клике по img

      let path = e.currentTarget.getAttribute('data-path')

      popupWrap.forEach((el) => {
        el.classList.remove('popup--active')
      });

      let activePopup = document.querySelector(`[data-target="${path}"]`),
        activeBtn = activePopup.firstChild.nextElementSibling;

      activePopup.classList.add('popup__wrap--active')
      popup.classList.add('popup--active')

      setTimeout(() => {
        activeBtn.focus();
      }, 100);

      // отключаем взаимодейсвие со всеми элементами на странице
      Array.from(body.children).forEach((child) => {
        if (child !== main) child.inert = true
      })
      Array.from(main.children).forEach((child) => {
        if (child !== gallery) child.inert = true
      })
      Array.from(gallery.children).forEach((child) => {
        if (child !== popup) child.inert = true
      })

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

      // включает взаимодейсвие со всеми элементами на странице
      Array.from(body.children).forEach((child) => {
        if (child !== main) child.inert = false
      })
      Array.from(main.children).forEach((child) => {
        if (child !== gallery) child.inert = false
      })
      Array.from(gallery.children).forEach((child) => {
        if (child !== popup) child.inert = false
      })

      setTimeout(() => {
        activeElement.focus() // возвращаем фокус на элемент
      }, 100)
    }
  });

})();
