!function (){
  var view = document.querySelector('#sticky')
  var controller = {
    view: null,
    init: function(view) {
      this.view = view
      this.bindEvents()
      // this.bindEvents.call(this)
    },
    bindEvents: function(){
      var view = this.view
      // window.addEventListener('scroll', function(x){
      //   if (window.scrollY > 0){
      //     this.active()
      //   } else {
      //     this.deactive()
      //   }
      // }.bind(this))
      //箭头函数不改this
      window.addEventListener('scroll', ()=>{
        if (window.scrollY > 0){
          this.active()
        } else {
          this.deactive()
        }
      })
    },
    active: function() {
      this.view.classList.add('sticky')
    },
    deactive: function() {
      this.view.classList.remove('sticky')
    }
  }
  controller.init(view)
  // controller.init.call(controller, view)
}.call()
