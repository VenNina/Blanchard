(function () {

  const
    headerBtnsWrap = document.querySelector('.header__btns-wrap'),
    headerBtns = document.querySelector('.header__btns'),
    headerBtnsInner = document.querySelector('.header__btns-inner'),
    btnSeachOpen = document.querySelector('.seach-form__btn-open'),
    btnSeachClose = document.querySelector('.seach-form__btn-close');

  // 0. добавляем класс c background-color к блоку header__btns, начинает работать на @media (max-widht: 1010px)
  // 1. по нажатию на лупу, добавляем класс display:block к форме
  // 2. через 50 мс добаляем ширину, чтобы добиться плавности
  // 3. отодвигаем лупу вправо, чтобы был отступ.

  btnSeachOpen.addEventListener('click', () => {
    headerBtnsWrap.classList.add('header__btns-wrap--active');
    headerBtns.classList.add('header__btns--active');
    headerBtnsInner.classList.add('header__btns-inner--active');
    // formSeach.classList.add('seach-form--display');
    // setTimeout(() => {
    //   formSeach.classList.add('seach-form--width');
    // }, 50);
  });

  btnSeachClose.addEventListener('click', () => {
    headerBtns.classList.remove('header__btns--active');
    headerBtnsInner.classList.remove('header__btns-inner--active');
    headerBtnsWrap.classList.remove('header__btns-wrap--active');
    // setTimeout(() => {
    //   formSeach.classList.remove('seach-form--display');
    // }, 300);
  });


})();
