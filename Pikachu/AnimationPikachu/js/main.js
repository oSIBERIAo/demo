/* 把code写到 #code和style标签里 */
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  let n = 0
  var id = setInterval( ()=>{
    n += 1
    domCode.innerHTML = code.substring(0, n)
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if(n >= code.length ){
      window.clearInterval(id)
      fn()
    }
  },10)
}

function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper > .content')
  // console.log(domPaper.innerHTML.length);
  // domPaper.innerHTML = prefix || ''
  let n = 0
  var id = setInterval( ()=>{
    n += 1
    // domPaper.innerHTML = Prism.highlight(markdown.substring(0, n), Prism.languages.markdown, 'markdown');
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    // console.log(domPaper.length);
    if(n >= md.length){
      window.clearInterval(id)
      console.log('222');
      fn()
    }
  },10)
}
function markdownToHtml(element) {
  console.log('到这里了');
  console.log(element);
  document.getElementById(element).innerHTML =
    marked(md);
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
  margin: 0; padding: 0; box-sizing: border-box;
}
*::after{
  box-sizing: border-box;
}

*::before{
  box-sizing: border-box;
}
body{
  height: 100vh;
  border:1px solid black;
  background:  yellow;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper{
  width: 100%;
  height: 165px;
  /* border: 1px solid red; */
  position: relative;
}
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

`
var result2 = `
.lowerLip-wrapper{
  top: 62px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  /* border: 1px solid black; */
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
}
/* ～接下来把 Mackdown 变成 HTML - marked.js ～ */
/* ～接下来把 HTML 加样式～ */
`
var md = `
# 自我介绍

我叫xxx

公元前出生
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

#### 轮播图
#### 个人简历网站
#### 简约画板
`



writeCode('', result, ()=>{
  createPaper( ()=>{
    writeCode(result, result2, ()=>{
      writeMarkdown(md, ()=>{
        markdownToHtml('content')
      })
    })
  })
})



function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.setAttribute('class', 'content')
  content.setAttribute('id', 'content')
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}




// var n = 0
// var id = setInterval( ()=>{
//   n += 1
//   code.innerHTML = result.substring(0, n)
//   // code.innerHTML = code.innerHTML.replace('html',
//   //   '<span style="color:red;">html</span>')
//   code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
//   styleTag.innerHTML = result.substring(0, n)
//   if(n >= result.length ){
//     window.clearInterval(id)
//       console.log('完成');
//       fn2()
//       fn3(result)
//   }
//   // console.log('运行中');
// },10)

/*
// The code snippet you want to highlight, as a string
var text = "body{color: red;}";

// Returns a highlighted HTML string
var html = Prism.highlight(text, Prism.languages.css, 'css');
console.log(html);
*/


//
