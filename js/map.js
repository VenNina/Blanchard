(() => {
  ymaps.ready(init);

  function init() {
    let myMap = new ymaps.Map("map", {
      center: [55.758788495115844, 37.61637636268213],
      zoom: 14,
    });

    let myPlacemark = new ymaps.Placemark([55.758788495115844, 37.61637636268213], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/marker-map.svg',
      iconImageSize: [20, 20],
    });

    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);


    // Выключим масштабирование колесом мыши
    myMap.behaviors.disable('scrollZoom');
  }
})()

