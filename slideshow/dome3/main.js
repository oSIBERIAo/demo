var log = function(){
    console.log.apply(console, arguments)
}
//1.选中所用按钮
//2.监听鼠标事件移动图片
//3.设置时钟自动移动图片
//4.鼠标移入停止自动移动，移除继续自动移动图片

var allButtons = $('#buttons > span')
log(allButtons)

for (let i = 0; i < allButtons.length; i++) {

  $(allButtons[i]).on('click', function(){
    // log('allButtons[i]', $(allButtons[i]))
    var n = $(allButtons[i]).index()
    // log('index', n)
    var p = i * -400
    $('#images').css({transform: 'translate('+ p +'px)'})
    activeButton(allButtons.eq(n))
    // log('1', $('#buttons > span'))
  })
}


// var n = 0
//
// setInterval (() => {
//   n += 1
//   let s = n % 3
//   $('#images').css({transform: 'translate('+ s*-400 +'px)'})
//   log('setInterval', s)
// },1000)
var n = 0
var size = allButtons.length

var timerId = setTimer()
function setTimer(){
  return setInterval (() => {
    n += 1
    $(allButtons.eq(n % size)).trigger('click')
  },1000)
}

function activeButton($button){
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}
$('.window, #buttons').on('mouseenter', function(){
  clearInterval(timerId)
})

$('.window, #buttons').on('mouseleave', function(){
  timerId = setTimer()
})


























//
//
//
// var allButtons = $('#buttons > span')
// log(allButtons)
//
// for (let i = 0; i < allButtons.length; i++) {
//   $(allButtons[i]).on('click', function(x){
//     var n = $(x.currentTarget).index()
//     log('index',n)
//     var p = n * -400
//     $('#images').css({
//       transform: 'translate('+ p +'px)'
//     })
//     var s = allButtons.eq(n)
//     log('allButtons.eq(n)',s)
//     allButtons.eq(n)
//       .addClass('red')
//       .siblings('.red').removeClass('red')
//   })
// }
//
// var n = 0
// var size = allButtons.length
//
//
// var timerId = setTimer()
// function setTimer(){
//   return setInterval(() => {
//       n += 1
//       allButtons.eq(n % size).trigger('click')
//   }, 1000)
// }
//
//
//
// $('.window').on('mouseenter', function() {
//   window.clearInterval(timerId)
// })
//
// $('.window').on('mouseleave', function() {
//   timerId = setTimer()
// })
//
//
//
//
//
//
//
//
//
//
//























////
