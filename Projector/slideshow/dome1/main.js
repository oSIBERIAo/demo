var n = 0
var $slides = $('#slides')
$slides.css({transform:'translateX(-0px)'})


PreviousOrNext()
buttonPoint()

//上、下一张监听
function PreviousOrNext() {
  function translatePrevious() {
    n -= 1
    if (n == -1) {
      n = $('#slides > img').length-1
      $slides.css({transform:'translateX(-'+ n * 400 +'px)'})
      return
    } else {
      $slides.css({transform:'translateX(-'+ n * 400 +'px)'})
    }
    addSelect()
  }
  function translatenext() {
    n += 1
    if (n > $('#slides > img').length-1) { n = 0 }
    $slides.css({transform:'translateX(-'+ n * 400 +'px)'})
    addSelect()
  }

  $('#previous')[0].addEventListener("click", translatePrevious)
  $('#next')[0].addEventListener("click", translatenext)
}

//转到指定页面
function addSelect() {
  $('#buttonWrapper > button').removeClass('select').eq(n).addClass('select')
}
function buttonPoint() {
  var $button = $('#buttonWrapper > button')
  $button.on('click', function (e) {
    n = $button.index( e.currentTarget )
    $slides.css({transform:'translateX(-'+ n * 400 +'px)'})
    addSelect()
  })
}


//鼠标移入移出监听
var autoSlide = setInterval(function functionName() {
    $('#next')[0].click()
  }, 1000)

$('.container').mouseenter(function(){
    window.clearInterval(autoSlide)
  })
$('.container').mouseleave(function(e){
    autoSlide = setInterval(function functionName() {
        $('#next')[0].click()
      }, 1000)
})


//监听用户是否离开页面
document.addEventListener('visibilitychange', function(e){
  // console.log('document.hidden', document.hidden);
  if(document.hidden){
    window.clearInterval(autoSlide)
  } else {
    autoSlide = setInterval(function functionName() {
        $('#next')[0].click()
      }, 1000)
  }
})




//
