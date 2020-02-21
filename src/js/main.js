// import $ from "jquery";
// import Swiper from 'swiper';
import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.ru.js';

;(function (window, document) {
'use strict';

// var file = 'img/logo.svg',
// var file = 'img/work2.svg',
// var file = 'img/galka.svg',
let file = 'img/icons-sprite.svg',
  revision = 1;

if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
  return true;

let isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
  request,
  data,
  insertIT = function () {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
  insert = function () {
    if (document.body) insertIT();
    else document.addEventListener('DOMContentLoaded', insertIT);
  };

if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
  data = localStorage.getItem('inlineSVGdata');
  if (data) {
    insert();
    return true;
  }
}

try {
  request = new XMLHttpRequest();
  request.open('GET', file, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      data = request.responseText;
      insert();
      if (isLocalStorage) {
        localStorage.setItem('inlineSVGdata', data);
        localStorage.setItem('inlineSVGrev', revision);
      }
    }
  }
  request.send();
} catch (e) {
}

}(window, document));


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
let  officeGeoCoord = [56.86140703569652,53.210432510589484];
ymaps.ready(init);
function init(){
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    center: officeGeoCoord,
    zoom: 16,
    controls: ['zoomControl']
  });

  // Создание геообъекта с типом точка (метка).
  let myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: officeGeoCoord // координаты точки
    }
  });

// Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(new ymaps.Placemark([56.86140703569652,53.210432510589484], {
      balloonContentHeader: 'Компания "Виктори"',
      balloonContentBody: '<strong>Адрес</strong>: г. Ижевск, ул. Пушкинская 268,<br><strong>тел.</strong>: (3412) 908-530,<br><strong>e-mail</strong>: <a href="mailto:office@victory.su">office@victory.su</a>',
      balloonContentFooter: '<strong>Режим работы</strong>: пн-пт 9.00-18.00'

  }, {
    preset: 'islands#icon',
    iconColor: '#C81D24'
  }))
}


$(document).ready(function() {


  let mySwiper = new Swiper ('.proud.slider .swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    // roundLengths: true,
    spaceBetween: 30,

    // slidesOffsetBefore: 5,
    // If we need pagination
    pagination: {
      el: '.proud.slider-pagination .swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.proud.slider-block .swiper-button-next',
      prevEl: '.proud.slider-block .swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 3,
      },
    }

  });
  let mySwiper2 = new Swiper ('.our-cases.slider .swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    roundLengths: true,
    // slidesOffsetBefore: 5,
    // If we need pagination
    pagination: {
      el: '.our-cases.slider-pagination .swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.our-cases.slider-block .swiper-button-next',
      prevEl: '.our-cases.slider-block .swiper-button-prev',
    },
  });
  let mySwiper3 = new Swiper ('.reviews .swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    spaceBetween: 30,
    roundLengths: true,
    // slidesOffsetBefore: 5,
    // If we need pagination
    pagination: {
      el: '.reviews .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 3,
      },
    }
  });

  $('input[type=tel]').toArray().forEach(function(field){
    new Cleave(field, {
      phone: true,
      phoneRegionCode: 'RU'
    })
  });

  $('a.btn-down').on('click', function(e){

    $('html,body').stop().animate({ scrollTop: $(this.attributes['href'].value).offset().top }, 800);
    e.preventDefault();
  });
});
