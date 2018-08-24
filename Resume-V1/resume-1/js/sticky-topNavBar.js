!function () {
  var view = document.querySelector('#topNavBar')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.stickyBar()
    },
    stickyBar: function (){
      window.addEventListener('scroll', (e) => {
          if (window.scrollY > 0) {
              this.view.classList.add("topNavBarActive")
          } else {
              this.view.classList.remove("topNavBarActive")
          }
      })
    },
  }
  controller.init(view)
}.call()
