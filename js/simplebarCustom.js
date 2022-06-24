document.querySelectorAll('.my-elements').forEach(el => {
  new SimpleBar((el), {
    // делаем полосу прокрукти всегда видимой, по умолчанию true
    autoHide: false,
    // устанавливаем собственный атрибут для aria-label
    ariaLabel: 'Прокручиваемый контент',
    // делаем дорожку прокрутки видимой
    forceVisible: true | 'x' | 'y',
  });
});

// Например, если вы хотите, чтобы это было только на рабочем столе, вы можете сначала проверить размер экрана, используя
// if (window.matchMedia('(min-width: 600px)').matches) {
//   new SimpleBar(..)
// }
