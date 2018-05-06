var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    console.log(x.currentTarget);
    console.log(index);//从匹配的元素中搜索给定元素的索引值，从0开始计数。
    var p = index * - 400
    $('#images').css({
      transform: 'translate('+ p +'px)'
    })
    n = index
    var s = allButtons.eq(n)
    var ss = allButtons
    console.log('allButtons.eq(n)',s);
    //:eq()选择器选取带有指定 index 值的元素
    // console.log('allButtons',ss);
    allButtons.eq(n)
      .addClass('red')
      .siblings('.red').removeClass('red')
  })
}

var n = 0
var size = allButtons.length

allButtons.eq(n % size).trigger('click')
   .addClass('red')
   .siblings('.red').removeClass('red')

var timerId = setInterval(() => {
  n += 1
   allButtons.eq(n % size).trigger('click')
      .addClass('red')
      .siblings('.red').removeClass('red')
}, 1000)

// clearInterval() 方法可取消由 setInterval() 函数设定的定时执行操作。
$('.window, #buttons').on('mouseenter', function() {
  window.clearInterval(timerId)
})

$('.window, #buttons').on('mouseleave', function(){
  timerId = setInterval(() => {
    n += 1
     allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
  }, 1000)
})






















//
