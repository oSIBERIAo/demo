
let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let imagesWidth = 400
let current = 0

$slides.hide().offset()
$slides.css({transform:'translateX(-400px)'}).show()

makeFakeSlides()

//上、下一张监听
$(previous).on('click', function() {
  goToSlide(current - 1)
})
$(next).on('click', function() {
  goToSlide(current + 1)
})

let timer = setInterval(function() {
  goToSlide(current + 1)
},2000)

//鼠标移入移出监听
$('.container').on('mouseenter', function() {
  window.clearInterval(timer)
})
$('.container').on('mouseleave', function() {
  timer = setInterval(function() {
    goToSlide(current + 1)
  },2000)
})


//转到指定页面
bindEvents()

function bindEvents() {
  $('#buttonWrapper').on('click', 'button', function(e) {
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
  })
}

//页面跳转
function goToSlide(index) {
  if (index > $buttons.length - 1) {
    index = 0
  } else if (index < 0) {
    index = $buttons.length - 1
  }
  if (current === $buttons.length - 1 && index === 0) {
  console.log('n>1');
  activeButton($buttons.eq(index))
  console.log('$buttons.eq(index)', $buttons.eq(index));
  $slides.css({transform:`translateX(${- ($buttons.length + 1) * imagesWidth}px)`})
    .one('transitionend', function() {
      $slides
        .hide()
        .offset()
      $slides.css({transform:`translateX(${- (index+1) * imagesWidth}px)`})
        .show()
    })
  } else if (current === 0 && index === $buttons.length - 1) {
    console.log('1>n');
    activeButton($buttons.eq(index))
    $slides.css({transform:`translateX(0px)`})
      .one('transitionend', function() {
        $slides
          .hide()
          .offset()
        $slides.css({transform:`translateX(${- (index+1) * imagesWidth}px)`})
          .show()
      })
  } else {
    activeButton($buttons.eq(index))
    $slides.css({transform:`translateX(${- (index+1) * imagesWidth}px)`})
  }
  current = index
}

function activeButton($button){
  $button
    .addClass('select')
    .siblings('.select').removeClass('select')
}

//////////////////////////////////////////////

function makeFakeSlides(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length - 1).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
  console.dir($buttons);
  console.dir($firstCopy[0].outerHTML);
  console.dir($lastCopy[0].outerHTML);
}
