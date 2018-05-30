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

#code{
  position: fixed;
  left: 0;
  width: 50%;
  height 100%;
}
#paper{
  position: fixed;
  right: 0;
  width: 50%;
  height: 100%;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
#paper > .content{
  background: white;
  width: 90%;
  height: 95%;
}
`
var result2 = `
#paper{
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
