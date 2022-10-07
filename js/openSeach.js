(function () {

  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 1300) {
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

        document.addEventListener('click', (e) => {
          if (!e.target.closest('.header__btns-inner')) {
            closeSeach()
            setTimeout(() => {
              btnOpen.focus()
            }, 500)
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
        }, 500);
      }

      btnOpen.addEventListener('click', () => {
        openSeach();
        setTimeout(() => {
          input.focus()
        }, 500)
      });

      btnClose.addEventListener('click', () => {
        closeSeach();
        setTimeout(() => {
          btnOpen.focus()
        }, 500)
      });

    }
  })

})();
