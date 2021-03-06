'use strict';

!function () {
  var view = View('#mySlides');
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      // direction: 'vertical',
      loop: true,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    init: function init(view) {
      this.view = view;
      this.initSwiper();
      // this.initSwiper.call(this)
    },
    initSwiper: function initSwiper() {
      this.swiper = new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions);
    }
  };
  controller.init.call(controller, view);
}.call();