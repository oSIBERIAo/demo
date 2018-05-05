// <ul>
//   <li id="item1">item1</li>
//   <li id="item2">item2</li>
//   <li id="item3">item3</li>
//   <li id="item4">item4</li>
//   <li id="item5">item5</li>
// </ul>

function getSiblings(node){
  var allChildren = node.parentNode.children
  var array = { length:0 }
  for (let i = 0; i < allChildren.length; i++) {
    if(allChildren[i] !== node) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
}
console.log( getSiblings(item3))

//var classes = {'a':true, 'b':false, 'c':true}

// function addClass(node, classes){
//   for (let key in classes){
//     var value = classes[key]
//     if (value) {
//       node.classList.add(key)
//     } else {
//       node.classList.remive(key)
//     }
//   }
// }
function addClass(node, classes){
  for (let key in classes){
    var value = classes[key]
    var mathodName = value ? 'add' : 'remove'
    node.classList[mathodName](key)
  }
}
//addClass(item3, {'a':true, 'b':false, 'c':true})


window.rendom = {}
rendom.getSiblings = getSiblings
rendom.addClass = addClass

//////////////


Node.prototype.getSiblings = function() {
  var allChildren = this.parentNode.children
  var array = { length:0 }
  for (let i = 0; i < allChildren.length; i++) {
    if(allChildren[i] !== this) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
}

console.log( item3.getSiblings())






<!DOCTYPE html>
<html>
<head>
<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>

</body>
</html>







window.jQuery = function(nodeOrSelector){
  let nodes = {}
  if(typeof nodeOrSelector === 'string'){
    temp = document.querySelectorAll(nodeOrSelector)
    for (var i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  }else if (nodeOrSelector instanceof Node){
    nodes = {
      0: nodeOrSelector,
      length: 1
    }
  }
  nodes.jQuery = document.querySelectorAll(nodeOrSelector)
  nodes.addClass = function(node){
    var temp = this.jQuery
    for (let i = 0; i < temp.length; i++) {
      temp[i].className = node
    }
  }

  nodes.setText = function(node){
    var temp = this.jQuery
    for (let i = 0; i < temp.length; i++) {
      temp[i].textContent = node
    }
  }
  return nodes
}
window.$ = jQuery

var $div = $('div')
$div.jQuery
$div.addClass('red') // 可将所有 div 的 class 添加一个 red
$div.setText('hi') // 可将所有 div 的 textContent 变为 hi
$div.addClass('main > div')

/*
Has Attribute Selector [name]
https://www.jquery123.com/has-attribute-selector/


*/



window.jQuery = function(nodeOrSelector){
  //初始化nodes数组
  let nodes = {}
  /////////
  //创建一个伪数组，得到一个纯净的原型链指向 Object
  if(typeof nodeOrSelector === 'string'){
    temp = document.querySelectorAll(nodeOrSelector)
    for (var i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  }else if (nodeOrSelector instanceof Node){
    //如果是一个节点也返回一个伪数组
    nodes = {
      0: nodeOrSelector,
      length: 1
    }
  }
  //遍历nodes，获取并设置指定元素的class属性的值。
  nodes.addClass = function(node){
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].className = node
    }
  }
  //遍历nodes，设置所有节点的及其后代的文本内容
  nodes.setText = function(node){
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].textContent = node
    }
  }
  return nodes
}
window.$ = jQuery

var $div = $('div')
$div.jQuery
$div.addClass('red') // 可将所有 div 的 class 添加一个 red
$div.setText('hi') // 可将所有 div 的 textContent 变为 hi
$div.getText()



  // nodes.jQuery = document.querySelectorAll(nodeOrSelector)
  nodes.getText = function(){
    var texts = []
    for (let i = 0; i < nodes.length; i++) {
      texts.push(nodes[i].textContent)
    }
    return texts
  }













function addClass(node, classes){
  for (let key in classes){
    var value = classes[key]
    var mathodName = value ? 'add' : 'remove'
    node.classList[mathodName](key)
  }
}












function




var parent = document.getElementById('parent');
parent.childNodes.length //2
parent.appendChild(document.createElement('div'));
parent.childNodes.length // 请问现在 length 是多少

var allDiv = document.querySelectorAll('div') allDiv.length// 假设是 2
document.body.appendChild( document.createElement('div') ) allDiv.length
// 请问现在 length 的值是多少？？？











2.请将上面代码实现过程中的细节记录到博客里














//
