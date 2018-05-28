!function (){
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    aTags: null,
    init: function(view) {
      this.view = view
      this.initAnimation()
      this.bandEvents()
    },
    initAnimation: function() {
      function animate(time) {
          requestAnimationFrame(animate);
          TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function(element) {
      let top = element.offsetTop

      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop  //路程
      console.log(s);
      let t = Math.abs(s/100)*500  //时间
      if(t > 1000) { t = 1000 }


      var coords = { y: currentTop };  //启始位置
      var tween = new TWEEN.Tween(coords)
        .to({y: targetTop }, t)  //结束位置， 时间
        .easing(TWEEN.Easing.Cubic.InOut)  //缓动类型
        // .easing(TWEEN.Easing.Bounce.InOut)
        // .easing(TWEEN.Easing.Quartic.InOut)
        .onUpdate(function() {
            window.scrollTo(0, coords.y)  //更新坐标
        })
        .start();  //开始缓动
    },
    bandEvents: function() {
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x)=>{
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href')
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    },
  }

  controller.init.call(controller, view)
}.call()
