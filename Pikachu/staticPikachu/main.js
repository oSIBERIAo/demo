!function(){
  var duration = 50
  var end = false
  $('.actions').on('click', 'button', function(e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed);
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 50
        break
      case 'normal':
        duration = 30
        break
      case 'fast':
        duration = 10
        break
      case 'end':
        end = true
        break
    }
  })
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout( function again(){
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (end) {
         container.innerHTML = code.substring(0, code.length)
         styleTag.innerHTML = code.substring(0, code.length)
         container.scrollTop = container.scrollHeight
         return
      } else if (n < code.length) {
        id = setTimeout(again, duration)
      } else { fn && fn.call()}
    }, duration)
  }
let code1 = `
/*
 * 首先画皮卡丘的衣服
 */
.nose{
  width: 0px;
  height: 0px;
  border: 13px solid;
  border-color: black transparent transparent transparent;
  border-radius: 11px;
  /* background: black; */
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%)
}
.eye{
  width: 50px;
  height: 50px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50px;
  border: 2px solid #000000;
}
/*
 * 画皮卡丘的眼
 */
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 6px;
  position: absolute;
  border: 2px solid #000000;
}
.eye.left{
  right: 50%;
  margin-right: 90px;
}
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
 * 画皮卡丘的脸颊
 */
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  position: absolute;
  border-radius: 50px;
  border: 2px solid #000000;
}
.face.left{
  top: 85px;
  right: 50%;
  margin-right: 116px;
}
.face.right{
  top: 85px;
  left: 50%;
  margin-left: 116px;
}
/*
 * 画皮卡丘的上唇
 */
.upperLip{
  width: 70px;
  height: 25px;
  background: yellow;
  border: 3px solid #000000;
  position: absolute;
  top: 52px;
}
.upperLip.left{
  border-bottom-left-radius: 40px 20px;
  border-top: none;
  border-right: none;
  left: 50%;
  transform: translateX(-71px) rotate(-23deg);
}
.upperLip.right{
  border-bottom-right-radius: 40px 20px;
  border-top: none;
  border-left: none;
  right: 50%;
  transform: translateX(71px) rotate(23deg);
}
/*
 * 画皮卡丘的嘴巴
 */
.lowerLip-wrapper{
  top: 62px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 140px;
  width: 120px;
  overflow: hidden;
}
.lowerLip{
  width: 300px;
  height: 3500px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 3px solid #000000;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
/*
 * 画皮卡丘的舌
 */
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 150px;
  background: #FC4A62;
  border-radius: 160px/200px;
}`
  writeCode('', code1)

}.call()
