function init() {
    var myMap = new ymaps.Map("mapM", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [51.112428, 71.402411],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.8, 37.8] // координаты точки
        }
    });

    var placemark = new ymaps.Placemark([51.112428, 71.402411], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/assets/img/map/icon.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myGeoObject); 
    myMap.geoObjects.add(placemark); 

    myMap.behaviors.disable('scrollZoom'); 

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init)