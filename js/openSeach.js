(function () {

  const
    headerBtnsWrap = document.querySelector('.header__btns-wrap'),
    // headerBtns = document.querySelector('.header__btns'),
    headerBtnsInner = document.querySelector('.header__btns-inner'),
    btnOpen = document.querySelector('.seach__btn-open'),
    btnClose = document.querySelector('.seach-form__btn-close'),
    input = document.querySelector('.seach-form__input');


  // 0. добавляем класс c background-color к блоку header__btns, начинает работать на @media (max-widht: 1010px)
  // 1. по нажатию на лупу, добавляем класс display:block к форме
  // 2. через 50 мс добаляем ширину, чтобы добиться плавности
  // 3. отодвигаем лупу вправо, чтобы был отступ.

  function openSeach() {
    btnOpen.setAttribute('aria-expanded', true)
    btnOpen.style.pointerEvents = 'none'
    btnOpen.setAttribute('tabindex', '-1')
    btnClose.setAttribute('aria-expanded', true)
    headerBtnsWrap.classList.add('header__btns-wrap--active')
    headerBtnsWrap.style.zIndex = 200
    headerBtnsInner.classList.add('header__btns-inner--active')

    setTimeout(() => {
      input.focus()
    }, 500)

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header__btns-inner') && headerBtnsWrap.classList.contains('header__btns-wrap--active')) {
        closeSeach()
      }
    })
  }

  function closeSeach() {
    btnOpen.setAttribute('aria-expanded', false)
    btnOpen.style.pointerEvents = 'auto'
    btnOpen.setAttribute('tabindex', '0')
    btnClose.setAttribute('aria-expanded', false)
    headerBtnsWrap.classList.remove('header__btns-wrap--active');
    headerBtnsInner.classList.remove('header__btns-inner--active');
    setTimeout(() => {
      headerBtnsWrap.style.zIndex = 100
      btnOpen.focus()
    }, 500);
  }

  btnOpen.addEventListener('click', () => {
    openSeach();

  });

  btnClose.addEventListener('click', () => {
    closeSeach();
  });
})();
