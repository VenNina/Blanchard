const btnSeachOpen = document.querySelector('.seach-form__btn-open'),
  formSeach = document.querySelector('.seach-form'),
  btnSeachClose = document.querySelector('.seach-form__btn-close');

// 1. по нажатию на лупу, добавляем класс display:block к форме
// 2. через 50 мс добаляем ширину, чтобы добиться плавности
// 3. отодвигаем лупу вправо, чтобы был отступ.
btnSeachOpen.addEventListener('click', () => {
  formSeach.classList.add('seach-form--display');
  setTimeout(() => {
    formSeach.classList.add('seach-form--width');
  }, 50);
  btnSeachOpen.style.transform = 'translateX(-4px)';
});

btnSeachClose.addEventListener('click', () => {
  btnSeachOpen.style.transform = 'translateX(0)';
  formSeach.classList.remove('seach-form--width');
  setTimeout(() => {
    formSeach.classList.remove('seach-form--display');
  }, 200);
});
