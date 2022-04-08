// "use strict";

// ждем когда загрузиться весь контент внутри браузера
// выделяем все кнопки, которые управляют табами и для каждой и них выполняем функцию
// при клике выпониться функция
// где мы удаляем класс tab-content-active
// и у единственной которая нам нужна, мы ее узнаем из события клик
// мы добавляем класс который нам должен ее показать

window.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll(".tabs__btn").forEach(function(tabsBtn) { // forEach специальная функция, метод итератор
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path // currentTarget HTML документ по которому непосредственно произошел клик
      document.querySelectorAll(".card__items").forEach(function(tabContent) {
        tabContent.classList.remove("card__items--active")
      })
      document.querySelectorAll(".tabs__btn").forEach(function(tabContent) {
        tabContent.classList.remove("tabs__btn--active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("card__items--active")
      document.querySelector(`[data-path="${path}"]`).classList.add("tabs__btn--active")
    })
  })
})

// currentTarget - это тот элемент по которому был совершен клик
// dataset - набор data атрибутов