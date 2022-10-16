(() => {
  // inputmask
  const form = document.querySelector('.form'),
    telSelector = form.querySelector('input[type="tel"]'),
    inputMask = new Inputmask('+7 (999) 999-99-99'),
    html = document.documentElement

  inputMask.mask(telSelector)

  const validation = new JustValidate('.form', {
    errorLabelStyle: {
      color: '#d11616',
    },
  });

  const showAlert = document.getElementById('showroom-popup'),
    absoluteBlock = document.querySelectorAll('absolute-block'),
    body = document.body;

  function disableScroll() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px',
      pagePosition = window.scrollY
    html.style.scrollBehavior = 'auto'
    body.style.paddingRight = paddingOffset
    absoluteBlock.forEach((e) => {
      e.styel.paddingRight = paddingOffset
    })
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
  }

  function enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    body.style.paddingRight = '0px';
    absoluteBlock.forEach((e) => {
      e.style.paddingRight = '0px';
    })
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute('data-position');
    html.style.scrollBehavior = 'smooth';
  }

  validation
    .addField('.input-name', [{
      rule: 'minLength',
      value: 1,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
    ])
    .addField('.input-tel', [{
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
    ]).onSuccess((event) => {
      // console.log('Validation passes and form submitted', event);

      let formData = new FormData(event.target);

      // console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            showAlert.removeAttribute('hidden')
            showAlert.classList.add('popup--active')
            disableScroll()
            setTimeout(() => {
              showAlert.classList.remove('popup--active')
              showAlert.setAttribute('hidden', true)
              enableScroll()
            }, 3000)
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    });

  document.getElementById('submit-btn').addEventListener('click', () => {
    showAlert.removeAttribute('hidden')
    showAlert.classList.add('popup--active')
    disableScroll()
    setTimeout(() => {
      showAlert.classList.remove('popup--active')
      showAlert.setAttribute('hidden', true)
      enableScroll()
    }, 3000)
  })

})()
