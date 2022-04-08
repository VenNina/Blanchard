/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */
(function() {
  var tablist = document.querySelectorAll('[role="tablist"]')[0];
  var tabs;
  var panels;
  var delay = determineDelay();

  generateArrays();

  function generateArrays() {
    tabs = document.querySelectorAll('[role="tab"]');
    panels = document.querySelectorAll('[role="tabpanel"]');
  };

  // Для удобства
  var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
  };

  // Добавляем или вычитаем в зависимости от нажатой клавиши
  var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
  };

  // Связываем слушателей
  for (i = 0; i < tabs.length; ++i) {
    addListeners(i);
  };

  function addListeners(index) {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    // Строим массив со всеми вкладками (<button>) в нем
    tabs[index].index = index;
  };

  // Когда вкладка нажата, активируется activateTab, чтобы активировать ее
  function clickEventListener(event) {
    var tab = event.target;
    activateTab(tab, false);
  };

  // Обработка нажатия клавиши на вкладках
  function keydownEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault();
        // Активируем последнюю вкладку
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Активируем первую вкладку
        activateTab(tabs[0]);
        break;

        // Вверх и вниз по нажатию клавиши
        // потому что нам нужно предотвратить прокрутку страницы> :)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    };
  };

  // Обработка клавиш на вкладках
  function keyupEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
    };
  };

  // Когда ария-ориентация списка вкладок установлена ​​на вертикальную,
  // должны работать только стрелки вверх и вниз.
  // Во всех остальных случаях работают только стрелки влево и вправо.
  function determineOrientation(event) {
    var key = event.keyCode;
    var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
    var proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      };
    } else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      };
    };

    if (proceed) {
      switchTabOnArrowPress(event);
    };
  };

  // Либо фокус на следующей, предыдущей, первой или последней вкладке
  // в зависимости от нажатой клавиши
  function switchTabOnArrowPress(event) {
    var pressed = event.keyCode;

    for (x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener('focus', focusEventHandler);
    };

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        } else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        } else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        };
      };
    };
  };

  // Активирует любую заданную панель вкладок
  function activateTab(tab, setFocus) {
    setFocus = setFocus || true;
    // Деактивировать все остальные вкладки
    deactivateTabs();

    // Устанавливаем вкладку как выбранную
    tab.removeAttribute('tabindex');

    // Устанавливаем вкладку как выбранную
    tab.setAttribute('aria-selected', 'true');

    // Получаем значение aria-controls (которое является идентификатором)
    var controls = tab.getAttribute('aria-controls');

    // Удаляем скрытый атрибут с панели вкладок, чтобы сделать его видимым
    document.getElementById(controls).removeAttribute('hidden');

    // Устанавливаем фокус при необходимости
    if (setFocus) {
      tab.focus();
    };
  };

  // Деактивировать все вкладки и панели вкладок
  function deactivateTabs() {
    for (t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
      tabs[t].removeEventListener('focus', focusEventHandler);
    };

    for (p = 0; p < panels.length; p++) {
      panels[p].setAttribute('hidden', 'hidden');
    };
  };

  // Угадай
  function focusFirstTab() {
    tabs[0].focus();
  };

  // Угадай
  function focusLastTab() {
    tabs[tabs.length - 1].focus();
  };

  // Определяем, можно ли удалить вкладку
  function determineDeletable(event) {
    target = event.target;

    if (target.getAttribute('data-deletable') !== null) {
      // Удаляем целевую вкладку
      deleteTab(event, target);

      // Обновляем массивы, относящиеся к виджету вкладок
      generateArrays();

      // Активируем вкладку, ближайшую к той, которая была только что удалена
      if (target.index - 1 < 0) {
        activateTab(tabs[0]);
      } else {
        activateTab(tabs[target.index - 1]);
      };
    };
  };

  // Удаляет вкладку и ее панель
  function deleteTab(event) {
    var target = event.target;
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  };

  // Определяем, должна ли быть задержка
  // когда пользователь перемещается с помощью клавиш со стрелками
  function determineDelay() {
    var hasDelay = tablist.hasAttribute('data-delay');
    var delay = 0;

    if (hasDelay) {
      var delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      } else {
        // If no value is specified, default to 300ms
        delay = 300;
      };
    };

    return delay;
  };

  //
  function focusEventHandler(event) {
    var target = event.target;

    setTimeout(checkTabFocus, delay, target);
  };

  // Активируйте вкладку в фокусе, только если она все еще находится в фокусе после задержки
  function checkTabFocus(target) {
    focused = document.activeElement;

    if (target === focused) {
      activateTab(target, false);
    };
  };
}());