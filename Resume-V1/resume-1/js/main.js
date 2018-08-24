let specialTags = document.querySelectorAll('[data-x]')
for (var i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add("offset")
}
setTimeout(function () {
  findClosest()
}, 1000)
window.addEventListener('scroll', function (e) {
    findClosest()
})


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

//分类切换
portfolioAll.onclick = function () {
  portfolioBar.className = 'bar'
}
portfolioVue.onclick = function (){
  portfolioBar.className = 'bar state-2'
}
portfolioJs.onclick = function () {
  portfolioBar.className = 'bar state-3'
}


//
