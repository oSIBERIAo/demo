'use strict';

!function () {
  var view = View('#sticky');
  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.bindEvents();
      // this.bindEvents.call(this)
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var view = this.view;
      // window.addEventListener('scroll', function(x){
      //   if (window.scrollY > 0){
      //     this.active()
      //   } else {
      //     this.deactive()
      //   }
      // }.bind(this))
      //箭头函数不改this
      window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
          _this.active();
        } else {
          _this.deactive();
        }
      });
    },
    active: function active() {
      this.view.classList.add('sticky');
    },
    deactive: function deactive() {
      this.view.classList.remove('sticky');
    }
  };
  controller.init(view);
  // controller.init.call(controller, view)
}.call();