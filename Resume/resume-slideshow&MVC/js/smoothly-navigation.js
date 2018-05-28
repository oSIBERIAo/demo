let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(x) {
    x.preventDefault()
    let a = x.currentTarget
    let href = a.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop

    let currentTop = window.scrollY
    let targetTop = top - 80
    let s = targetTop - currentTop  //路程
    console.log(s);
    let t = Math.abs(s/100)*500  //时间
    if(t > 1000) { t = 1000 }

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
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
  }
}
