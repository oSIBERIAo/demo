/* 把code写到 #code和style标签里 */
function writeCode(code) {
  let domCode = document.querySelector('#code')
  let n = 0
  var id = setInterval( ()=>{
    n += 1
    domCode.innerHTML = code.substring(0, n)
    domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = code.substring(0, n)
    if(n >= result.length ){
      window.clearInterval(id)
    }
  },10)
}

var result = `/*
 * 👋你好👋
 * 我将以动画的形式来介绍我自己
 * 只用文字介绍太简单了
 * 我就用代码来介绍吧
 * 首先准备一下～
 * 👇开始👇
*/

*{
 transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border:1px solid black;
  padding: 16px;
}

/* ～代码亮起来～ */

.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #DD4A68;
}

/* ～加点3D效果～ */

#code{
  transform: rotate(360deg);
}

/* ～不玩了， 我来介绍一下我我自己吧～ */

/* ～我需要一张白纸～ */

`
var n = 0
var id = setInterval( ()=>{
  n += 1
  code.innerHTML = result.substring(0, n)
  // code.innerHTML = code.innerHTML.replace('html',
  //   '<span style="color:red;">html</span>')
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
  styleTag.innerHTML = result.substring(0, n)
  if(n >= result.length ){
    window.clearInterval(id)
      console.log('完成');
      fn2()
      fn3(result)
  }
  // console.log('运行中');
},10)

function fn2() {
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}

function fn3(preResult) {
var result = `
#paper{
  width: 100px; height: 100px;
  background: red;
}
  `
  var n = 0
  var id = setInterval( ()=>{
    n += 1
    // console.log(result.substring(0,n))
    code.innerHTML = preResult + result.substring(0, n)
    // code.innerHTML = code.innerHTML + result[n-1]
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = preResult + result.substring(0, n)
    if( n>= result.length){
      window.clearInterval(id)
    }
  }, 10)
}










/*
// The code snippet you want to highlight, as a string
var text = "body{color: red;}";

// Returns a highlighted HTML string
var html = Prism.highlight(text, Prism.languages.css, 'css');
console.log(html);
*/


//
