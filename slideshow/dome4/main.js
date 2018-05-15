
let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let imagesWidth = 400
let current = 0


$slides.css({transform:'translateX(0px)'})

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

//监听用户是否离开页面
document.addEventListener('visibilitychange', function(e){
  // console.log('document.hidden', document.hidden);
  if(document.hidden){
    window.clearInterval(timer)
  } else {
    timer = setInterval(function() {
      goToSlide(current + 1)
    },2000)
  }
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
  activeButton($buttons.eq(index))
  $slides.css({transform:`translateX(${- (index) * imagesWidth}px)`})
  current = index
}

function activeButton($button){
  $button
    .addClass('select')
    .siblings('.select').removeClass('select')
}
