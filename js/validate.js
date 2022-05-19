// Для маскирования
let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

const phone = selector.inputmask.unmaskedvalue();

// Для валидации
const validation = new JustValidate('#form', {
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#d11616',
  },
});

validation
  .addField('#name', [{
      rule: 'minLength',
      value: 3,
      errorMessage: 'Как вас зовут?',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Как вас зовут?',
    },
  ])
  .addField('#inputMask', [{
    rule: 'required',
    errorMessage: 'Укажите ваш телефон',
  }, ])
  .addField('#inputMask', [{
    errorMessage: 'Укажите ваш телефон',
    validator: (value) => {
      // храним не маскированный телефон
      const phone = selector.inputmask.unmaskedvalue()
      console.log(phone);
      return Number(phone) && phone.length === 10
    },
  }, ]);
