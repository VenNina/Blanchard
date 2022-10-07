(() => {
  const element = document.querySelector('#selectChoices');
  const choices = new Choices(element, {
    searchEnabled: false,
    sorter: () => { },
    position: 'bottom',
  });
})()
