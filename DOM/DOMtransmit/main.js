$(clickMe).on('click', function() {
   $(popover).toggleClass("active")
   if($(popover).hasClass("active")){
     setTimeout(function() {
       $(document).one('click', function() {
         $(popover).removeClass("active")
       })
     }, 0)
   }
})

$(wrapper).on('click', function(e){
  e.stopPropagation()
})

























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
