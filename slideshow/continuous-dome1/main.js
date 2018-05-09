let n
初始化()
let timer = setInterval(() => {
  console.log('n',n);
  makeLeave(getImage(n))
    .one('transitionend', (e)=>{
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImage(n + 1))
  n += 1
}, 3000)


document.addEventListener('visibilitychange', function(e){
  console.log(document.hidden);
  if(document.hidden){
    window.clearInterval(timer)
  } else {
    timer = setInterval(() => {
      makeLeave(getImage(n))
        .one('transitionend', function(e){
          makeEnter($(e.currentTarget))
        })
      makeCurrent(getImage(n + 1))
      n += 1
    }, 3000)
  }
})




////////////////////////////////////////////////////////////
function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}
function x(n){
  if(n > 3){
    n = n%3
    if(n === 0){
      n = 3
    }
  }  //n = 1 2 3
  return n
}
function 初始化(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
////////////////////////////////////////////////////////////
function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}

function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}
////////////////////////////////////////////////////////////


































// 初始化()
// let n = 1
// setInterval(() => {
//   // $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
//   mackleave($(`.images > img:nth-child(${x(n)})`))
//     .one('transitionend', function(e){
//       // $(e.currentTarget).removeClass('leave').addClass('enter')
//       mackEnter($(e.currentTarget))
//       // console.log($(e.currentTarget));
//     })
//   // $(`.images > img:nth-child(${x(n + 1)})`).removeClass('enter').addClass('current')
//   mackCrrent($(`.images > img:nth-child(${x(n + 1)})`))
//   n += 1
// }, 3000)
//
// function x(n){
//   if(n > 3){
//     n = n%3
//     if(n === 0){
//       n = 3
//     }
//   }
//   return n
// }
//
// function mackCrrent($node){
//   $node.removeClass('enter leave').addClass('current')
//   return $node;
// }
//
// function mackleave($node){
//   // function(e){
//   //   $(e.currentTarget).removeClass('leave').addClass('enter')
//   $node.removeClass('enter current').addClass('leave')
//   return $node;
// }
//
// function mackEnter($node){
//   $node.removeClass('current leave').addClass('enter')
//   return $node;
// }
//
//
//
//
// function 初始化(){
//   $('.images > img:nth-child(1)').addClass('current')
//   $('.images > img:nth-child(2)').addClass('enter')
//   $('.images > img:nth-child(3)').addClass('enter')
// }


// setTimeout(function(){
//   $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
//     .one('transitionend', function(e){
//       $(e.currentTarget).removeClass('leave').addClass('enter')
//       // console.log($(e.currentTarget));
//     })
//   $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
// },3000)
//
// setTimeout(function(){
//   $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
//     .one('transitionend', function(e){
//       $(e.currentTarget).removeClass('leave').addClass('enter')
//       // console.log($(e.currentTarget));
//     })
//   $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
// },6000)
//
// setTimeout(function(){
//   $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
//     .one('transitionend', function(e){
//       $(e.currentTarget).removeClass('leave').addClass('enter')
//       // console.log($(e.currentTarget));
//     })
//   $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
// },9000)









//
// setTimeout(function(){
//   $('.images > img:nth-child(1)').css({
//     transform: 'translateX(-100%)'
//   })
//   $('.images > img:nth-child(2)').css({
//     transform: 'translateX(-100%)'
//   })
//   $('.images > img:nth-child(1)').one('transitionend', function(e){
//     $(e.currentTarget).addClass('right').one().css({transform: 'none'})
//   })
// },1000)
//
// setTimeout(function(){
//   $('.images > img:nth-child(2)').css({
//     transform: 'translateX(-200%)'
//   })
//   $('.images > img:nth-child(3)').css({
//     transform: 'translateX(-100%)'
//   })
//   $('.images > img:nth-child(2)').one('transitionend', function(e){
//     $(e.currentTarget).addClass('right').css({transform: 'none'})
//   })
// },2000)
//
// setTimeout(function(){
//   $('.images > img:nth-child(3)').css({
//     transform: 'translateX(-200%)'
//   })
//   $('.images > img:nth-child(1)').css({
//     transform: 'translateX(-100%)'
//   })
//   $('.images > img:nth-child(3)').one('transitionend', function(e){
//     $(e.currentTarget).addClass('right').css({transform: 'none'})
//   })
// },3000)
//






































// $('.images > img:nth-child(1)').addClass('current')
// $('.images > img:nth-child(2)').addClass('enter')
// $('.images > img:nth-child(3)').addClass('enter')
// let n = 1
// setInterval(()=>{
//   $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
//     .one('transitionend', (e)=>{
//       $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//   $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
//   n += 1
// },3000)
//
//
// function x(n){
//   if(n>3){
//     n = n%3
//     if (n===0){
//       n =3
//     }
//   } // n = 1 2 3
//   return n
// }
