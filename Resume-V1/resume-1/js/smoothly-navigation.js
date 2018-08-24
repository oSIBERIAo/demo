!function (){
  var view = View('div.topNavBar').allElement
  var controller = {
    view: null,
    aTags: null,
    init: function (view) {
      this.view = view
      this.initAnimate()
      this.bindEvents()
    },
    initAnimate: function () {
      function animate(time) {
          requestAnimationFrame(animate);
          TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    bindEvents: function () {
      var aTags = document.querySelectorAll('div.topNavBar > nav > ul > li > a')
      for (let index = 0; index < aTags.length; index++) {
          const element = aTags[index];
          element.onclick = (e) => {
              e.preventDefault()
              let a = e.currentTarget
              let ahref = a.getAttribute('href')
              let element = document.querySelector(ahref)
              // let h = element.getBoundingClientRect().y //返回元素的大小及其相对于视口的位置
              this.scrollToElement(element)

          }
      }
    },
    scrollToElement: function (element) {
      let top = element.offsetTop
      let currentTop = window.scrollY          //当前位置
      let targetTop = top - 70                 //目的位置
      let s = Math.abs(targetTop - currentTop) //路程
      let time = s / 100 * 600                 //时间
      if (time > 1000) {
          time = 1000
      } //超过1秒重置
      var coords = { x: 0, y: currentTop }; // Start at (0, 0)
      var tween = new TWEEN.Tween(coords)
          .to({ y: targetTop }, time)       //终点, 时间
          .easing(TWEEN.Easing.Exponential.Out)  //缓动类型
          .onUpdate(function () {
              addEventListener("scroll", function (params) {
              })
              window.scroll(0, coords.y)   //更新滚动
          })
          .start();
    }
  }
  controller.init(view)
}.call()
