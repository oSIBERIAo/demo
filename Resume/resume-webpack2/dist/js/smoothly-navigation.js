'use strict';

!function () {
  var view = View('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    init: function init(view) {
      this.view = view;
      this.initAnimation();
      this.bandEvents();
    },
    initAnimation: function initAnimation() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop;

      var currentTop = window.scrollY;
      var targetTop = top - 80;
      var s = targetTop - currentTop; //路程
      console.log(s);
      var t = Math.abs(s / 100) * 500; //时间
      if (t > 1000) {
        t = 1000;
      }

      var coords = { y: currentTop }; //启始位置
      var tween = new TWEEN.Tween(coords).to({ y: targetTop }, t) //结束位置， 时间
      .easing(TWEEN.Easing.Cubic.InOut) //缓动类型
      // .easing(TWEEN.Easing.Bounce.InOut)
      // .easing(TWEEN.Easing.Quartic.InOut)
      .onUpdate(function () {
        window.scrollTo(0, coords.y); //更新坐标
      }).start(); //开始缓动
    },
    bandEvents: function bandEvents() {
      var _this = this;

      var aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault();
          var a = x.currentTarget;
          var href = a.getAttribute('href');
          var element = document.querySelector(href);
          _this.scrollToElement(element);
        };
      }
    }
  };

  controller.init.call(controller, view);
}.call();