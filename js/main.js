"use strict";

$('.services__slider').slick({
  infinite: true,
  variableWidth: true,
  arrows: true,
  prevArrow: '<button id="prev" type="button" class="arrows arrow__left"><</button>',
  nextArrow: '<button id="next" type="button" class="arrows arrow__right">></button>',
  responsive: [{
    breakpoint: 951,
    settings: {
      variableWidth: false
    }
  }]
});
$('.testimonials__slider').slick({
  fade: true,
  infinite: true,
  arrows: true,
  prevArrow: '<button id="prev" type="button" class="arrows arrows--testimonials arrow__left"><</button>',
  nextArrow: '<button id="next" type="button" class="arrows arrows--testimonials arrow__right">></button>'
});
new WOW().init();
"use strict";
"use strict";

var tabsBtn = document.querySelectorAll('.tabs__nav-btn');
var tabsItems = document.querySelectorAll('.works__gallery');
var modal = document.querySelector('.modal');
var modalPlay = document.querySelectorAll('.main-right__video-play');
var modalClose = document.querySelector('.modal-work__close');
tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });
    }

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});
modalPlay.forEach(function (item) {
  item.addEventListener('click', function () {
    var body = document.body;
    body.classList.add('no-scroll');
    modalClose.addEventListener('click', function () {
      modal.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    modal.classList.add('active');
  });
});
//# sourceMappingURL=main.js.map
