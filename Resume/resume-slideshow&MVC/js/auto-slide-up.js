// 添加 offset 类， 缓入动画。
let specialTags = document.querySelectorAll('[data-x]')
for (var i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add('offset')
}

setTimeout(function() {
  findClosestAndRemoveOffset()
},1000)
window.addEventListener('scroll', function(x){
  findClosestAndRemoveOffset()
})

function findClosestAndRemoveOffset() {
  // log('window.scrollY',window.scrollY)
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for (let i = 1; i < specialTags.length; i++) {
    //下一标签默认距离-当前距离
    let min = Math.abs(specialTags[i].offsetTop - window.scrollY)
    //当前标签距离-当前距离
    let s = Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
    //
    if(min < s){
      minIndex = i
    }
  }
  // 去除 offset 类， 缓入动画。
  specialTags[minIndex].classList.remove('offset')

  /////////////
  //自动更新导航栏下划线状态
  let id = specialTags[minIndex].id
  specialTags[minIndex].classList.add('animate')
  let a = document.querySelector('a[href="#'+ id + '"]')
  // console.log(a);
  let li = a.parentNode
  let brothersAndMe = li.parentNode.children
  for(let i = 0; i < brothersAndMe.length; i++){
    brothersAndMe[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
  // console.log(specialTags);
  // log('x',x)
}
