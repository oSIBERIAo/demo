let specialTags = document.querySelectorAll('[data-x]')
for (var i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add("offset")
}
setTimeout(function () {
  findClosest()
}, 1000)
window.onscroll = function (e) {
    if (window.scrollY > 0) {
        topNavBar.classList.add("topNavBarActive")
    } else {
        topNavBar.classList.remove("topNavBarActive")
    }
    findClosest()
}

function findClosest() {
  //绝对值最近的 = minIndex
  let minIndex = 0
  for (var i = 0; i < specialTags.length; i++) {
    if (Math.abs(specialTags[i].offsetTop - window.scrollY + 55) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY + 55)) {
      minIndex = i
    }
  }
  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id
  let a = document.querySelector('a[href="#'+ id +'"]')

  if(a){
    let ul = a.parentNode.parentNode.children
    for (var i = 0; i < ul.length; i++) {
      ul[i].classList.remove("active")
    }
    a.parentNode.classList.add("active")
  }
}
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



//
