!function (){
  window.addEventListener('scroll', function(x){
    if (window.scrollY > 0){
      sticky.classList.add('sticky')
    } else {
      sticky.classList.remove('sticky')
    }
  })
}.call()
