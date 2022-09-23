(function () {
  // находим все кнопки
  const menuBtns = document.querySelectorAll('.main-menu-btn');
  // находим все дропдауны
  const drops = document.querySelectorAll('.main-menu-dropdown');
  menuBtns.forEach(el => {
    el.addEventListener('click', e => {
      // кнопка по которой нажали
      let currentBtn = e.currentTarget,
        // находим дропдаун этой кнопки
        drop = currentBtn.parentElement.querySelector('.main-menu-dropdown')

      // удаляем класс main-menu-btn--active у всех кнопок, кроме той на которую нажали
      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('main-menu-btn--active')
          el.setAttribute('aria-expanded', false)
        }
      });

      // если дропдаун не текущий, то тогда удаляем класс
      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('main-menu-dropdown--active')
          el.setAttribute('hidden', true)
        }
      });

      // currentBtn.classList.toggle('main-menu-btn--active');
      // drop.classList.toggle('main-menu-dropdown--active');

      if (currentBtn.getAttribute('aria-expanded') === 'false') {
        currentBtn.setAttribute('aria-expanded', true)
        drop.removeAttribute('hidden')
        currentBtn.classList.add('main-menu-btn--active')
        drop.classList.add('main-menu-dropdown--active')
      }
      else {
        currentBtn.setAttribute('aria-expanded', false)
        drop.setAttribute('hidden', true)
        currentBtn.classList.remove('main-menu-btn--active')
        drop.classList.remove('main-menu-dropdown--active')
      }

    });

    document.addEventListener('click', (e) => {
      // если элемент по которому произошел клик не являются потомками меню,
      // то мы закрываем меню, удаляем все классы active
      if (!e.target.closest('.main-menu__list')) {
        menuBtns.forEach(el => {
          el.classList.remove('main-menu-btn--active')
        });

        drops.forEach(el => {
          el.classList.remove('main-menu-dropdown--active')
        });
      }
    })

  });

})();
