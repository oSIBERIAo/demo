var canvas = document.getElementById('xxx');
var context = canvas.getContext('2d');





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
  context.strokeStyle = 'black'
  context.lineWidth = 4
  context.moveTo(x1,y1)
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}



var eraserEnable = false
eraser.onclick = function() {
  eraserEnable = !eraserEnable
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
