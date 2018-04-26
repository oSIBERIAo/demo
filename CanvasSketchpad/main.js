var canvas = document.getElementById('xxx');
var context = canvas.getContext('2d');
var lineWidth = 2




autosetCanvas(canvas)
function autosetCanvas(){
  setCanvasSize()
  window.onresize = function() {
    setCanvasSize()
  }

  function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}



////////////

listenToUser(canvas)
function listenToUser(canvas) {
  if (document.body.ontouchstart !== undefined) {
    console.log(111);
    listenToTouch(canvas)
    function listenToTouch(canvas) {
      var lastPoint = {x: undefined, y: undefined}
      var using = false

      canvas.ontouchstart = function(aaa){
        var x = aaa.touches[0].clientX
        var y = aaa.touches[0].clientY
        // console.log(aaa,x,y);
        using = true
        if(eraserEnable){
          context.clearRect(x-5,y-5,10,10)
        } else {
          lastPoint = {x:x,y:y}
        }

      }
      canvas.ontouchmove = function(aaa){
        var x = aaa.touches[0].clientX
        var y = aaa.touches[0].clientY
        var newPoint = {x:x,y:y}
        if (!using) {return}
        if (eraserEnable) {
         context.clearRect(x-5,y-5,10,10)
         lastPoint = newPoint
        } else {
         drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
         lastPoint = newPoint
        }
      }
      canvas.ontouchend = function(aaa) {
        using = false
      }
    }
  } else {
    listenToMouse(canvas)
    function listenToMouse(canvas) {
      var lastPoint = {x: undefined, y: undefined}
      var using = false

      canvas.onmousedown = function(aaa){
        var x = aaa.clientX
        var y = aaa.clientY
        using = true
        if(eraserEnable){
          context.clearRect(x-5,y-5,10,10)
        } else {
          lastPoint = {x:x,y:y}
        }

      }
      canvas.onmousemove = function(aaa){
        var x = aaa.clientX
        var y = aaa.clientY
        var newPoint = {x:x,y:y}
        if (!using) {return}
        if (eraserEnable) {
         context.clearRect(x-5,y-5,10,10)
         lastPoint = newPoint
        } else {
         drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
         lastPoint = newPoint
        }
      }
      canvas.onmouseup = function(aaa) {
        using = false
      }
    }
  }
}


//
// listenToTouch(canvas)
// function listenToTouch(canvas) {
//   var lastPoint = {x: undefined, y: undefined}
//   var using = false
//
//   canvas.ontouchstart = function(aaa){
//     var x = aaa.clientX
//     var y = aaa.clientY
//     using = true
//     if(eraserEnable){
//       context.clearRect(x-5,y-5,10,10)
//     } else {
//       lastPoint = {x:x,y:y}
//     }
//
//   }
//   canvas.ontouchmove = function(aaa){
//     var x = aaa.clientX
//     var y = aaa.clientY
//     var newPoint = {x:x,y:y}
//     if (!using) {return}
//     if (eraserEnable) {
//      context.clearRect(x-5,y-5,10,10)
//      lastPoint = newPoint
//     } else {
//      drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
//      lastPoint = newPoint
//     }
//   }
//   canvas.ontouchend = function(aaa) {
//     using = false
//   }
// }

// canvas.ontouchstart = function(aaa){
//   console.log(aaa);
//   console.log(aaa.targetTouches[0].clientX)
// }
/////


/////

function drawCircle(x,y,radius) {
  context.beginPath()
  context.fillStyle = 'black'
  context.arc(x,y,radius,0,Math.PI*2)
  context.fill()
}
function drawLine(x1,y1,x2,y2){
  context.beginPath()
  // context.strokeStyle = 'black'
  context.lineWidth = lineWidth
  context.moveTo(x1,y1)
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}



var eraserEnable = false
eraser.onclick = function() {
  eraserEnable = true
  // actions.className = 'actions x'
  eraser.classList.add('active')
  brush.classList.remove('active')
}
brush.onclick = function() {
  eraserEnable = false
  // actions.className = 'actions'
  brush.classList.add('active')
  eraser.classList.remove('active')
}
///////////
black.onclick = function() {
  context.strokeStyle = 'black'
  black.classList.add('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  red.classList.remove('active')
}

red.onclick = function() {
  context.strokeStyle = 'red'
  red.classList.add('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  black.classList.remove('active')
}

green.onclick = function() {
  context.strokeStyle = 'green'
  green.classList.add('active')
  red.classList.remove('active')
  blue.classList.remove('active')
  black.classList.remove('active')
}

blue.onclick = function() {
  context.strokeStyle = 'blue'
  blue.classList.add('active')
  green.classList.remove('active')
  red.classList.remove('active')
  black.classList.remove('active')
}
///////////
thin.onclick = function() {
  lineWidth = 2
}
thick.onclick = function() {
  lineWidth = 4
  console.log(111111);
}
////////////
clear.onclick = function() {
  context.clearRect(0,0,canvas.width,canvas.height)
}

save.onclick = function() {
  var url = canvas.toDataURL("image/png",1)
  var a = document.createElement('a')
  a.href = url
  a.download = 'Sketch'
  a.target = '_blank'
  a.click()
}







// context.strokeStyle = 'yellow';
// context.strokeRect(10, 10, 100, 100);

// context.fillStyle = 'blue';
// context.fillRect(10, 10, 100, 100);

// context.clearRect(10, 10, 30, 30);

// context.fillStyle = 'red';
// context.beginPath()
// context.moveTo(240,240)
// context.lineTo(300,240)
// context.lineTo(300,300)
// context.fill()


// context.beginPath();
// context.arc(150, 150, 50, 0, Math.PI*2)
// context.arc(250, 150, 50, 0, Math.PI)
// context.fill();
// context.stroke()
