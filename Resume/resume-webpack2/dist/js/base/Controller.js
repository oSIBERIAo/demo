'use strict';

/*
Controller({
  init:(){
  this.xxx()
  this.yyy()
},
  xxx(){}
  yyy(){}
})
*/

window.Controller = function (options) {
  var _init = options.init;

  var object = {
    view: null,
    model: null,
    init: function init(view, model) {
      this.view = view;
      this.model = model;
      this.model.init();
      _init.call(this, view, model);
      this.bindEvents.call(this);
      // this.bindEvents.call(this)
    }
  };
  console.log('object', object);
  console.log('options', options);
  // debugger
  for (var key in options) {
    if (key !== 'init') {
      object[key] = options[key];
    }
  }
  return object;
};