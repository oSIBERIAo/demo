$(clickMe).on('click', function() {
  $(popover).show()
  setTimeout(function() {
    $(document).one('click', function() {
      $(popover).hide()
    })
  }, 0)
})
$(wrapper).on('click', function(e){
  e.stopPropagation()
})
// $(wrapper).on('click', false)
//相等
// $(wrapper).on('click', function(e){
//   e.preventDefault()
//   e.stopPropagation()
// })



































//简单的方法
// clickMe.addEventListener('click', function(e) {
//   popover.style.display = 'block'
//   e.stopPropagation()
// })
// wrapper.addEventListener('click', function(e) {
//   e.stopPropagation()
// })
// document.addEventListener('click', function() {
//   popover.style.display = 'none'
// })

































































//
