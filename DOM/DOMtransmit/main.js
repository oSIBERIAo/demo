showPopover("#clickMe", "#popover", "#wraper")

function showPopover(btn, popover, wraper){
  $(btn).on('click', function() {
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
}





























































//
