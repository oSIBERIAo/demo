!function (){
  function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
  }
  requestAnimationFrame(animate);

  var aTags = document.querySelectorAll('div.topNavBar > nav > ul > li > a')
  for (let index = 0; index < aTags.length; index++) {
      const element = aTags[index];
      element.onclick = function (e) {
          e.preventDefault()
          let a = e.currentTarget
          let ahref = a.getAttribute('href')
          let element = document.querySelector(ahref)
          let h = element.getBoundingClientRect().y
          let currentTop = window.scrollY

          let top = element.offsetTop

          let targetTop = top - 70
          let s = Math.abs(targetTop - currentTop)
          let time = s / 100 * 600
          if (time > 1000) {
              time = 1000
          }
          var coords = { x: 0, y: currentTop }; // Start at (0, 0)
          var tween = new TWEEN.Tween(coords)
              .to({ y: targetTop }, time)
              .easing(TWEEN.Easing.Exponential.Out)
              .onUpdate(function () {
                  addEventListener("scroll", function (params) {
                  })
                  window.scroll(0, coords.y)
              })
              .start();
      }
  }
}.call()
