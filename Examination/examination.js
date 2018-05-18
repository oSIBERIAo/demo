//
// 第 1 题
// 请写出一个符合 W3C 规范的 HTML 文件，要求
//
// 页面标题为「我的页面」
// 页面中引入了一个外部 CSS 文件，文件路径为 /style.css
// 页面中引入了另一个外部 CSS 文件，路径为 /print.css，该文件仅在打印时生效
// 页面中引入了另一个外部 CSS 文件，路径为 /mobile.css，该文件仅在设备宽度小于 500 像素时生效
// 页面中引入了一个外部 JS 文件，路径为 /main.js
// 页面中引入了一个外部 JS 文件，路径为 /gbk.js，文件编码为 GBK
// 页面中有一个 SVG 标签，SVG 里面有一个直径为 100 像素的圆圈，颜色随意

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  s<title>Document</title>
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./print.css" media="print">
  <link rel="stylesheet" href="./mobile.css" media="(max-width: 500px)">
  <script src="./main.js"></script>
  <script src="./gbk.js" charset="gbk"></script>
</head>
<body>
  <svg xmlns="http://www.w3.org/2000/svg">
   <circle cx="100" cy="100" r="50" fill="red" />
  </svg>
</body>
</html>




/////////////////



//
// 第 2 题
// 2016年腾讯前端面试题：
// 移动端是怎么做适配的？
//
// 回答要点：
//
// meta viewport
// 媒体查询（教程）
// 动态 rem 方案（教程）
// 这三个知识点只有第一个我有讲过，你需要自学第二点和第三点。
// 如果大家在这道题上都答得不好，我会在考试后直播这两节课的录屏。
// （因为我觉得视频里已经讲得很好了，没必要重新讲一遍）
//




### 1.meta viewport
```
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
```
### 2.媒体查询
```
<style> @media(max-width:375px){ body{background: blue;} } </style>
```
如果媒体满足max-width:375px，就生效这个css样式。
### 3.方法一：使用 JS 动态调整 REM
```
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<script>
    var pageWidth = window.innerWidth
    document.write('<style>html{font-size:'+pageWidth/10+'px;}</style>')
</script>
```

//
// 第 3 题
// 2017年腾讯前端实习面试题（二面）：
// 用过CSS3吗? 实现圆角矩形和阴影怎么做?
//


border-radius: 50px;


// 第 4 题
/*
什么是闭包，闭包的用途是什么？

我在课堂上讲过闭包是什么，也演示过闭包的用途，但是并没有帮大家总结。
请自行搜索。

「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。
闭包的作用
闭包常常用来「间接访问一个变量」。换句话说，「隐藏一个变量」。
```
!function(){

  var lives = 50

  window.奖励一条命 = function(){
    lives += 1
    console.log(lives)
  }

  window.死一条命 = function(){
    lives -= 1
    console.log(lives)
  }
}()
```
可以使用 window.奖励一条命() 来涨命，使用 window.死一条命() 来让角色掉一条命。

*/


/*
// 第 5 题
call、apply、bind 的用法分别是什么？
### call
call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数(参数的列表)。
### apply
apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数。
```
function add(a,b){
    return a+b;
}
add.call(add, 5, 3); //8
add.apply(add, [5, 3]); //8
```
PS:call()方法的作用和 apply() 方法类似，
只有一个区别，就是 call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组。
### bind
bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
bind 接受的参数跟 call 一致，只是 bind 不会立即调用，它会生成一个新的函数，你想什么时候调就什么时候调。
在Javascript中，多次bind()是无效的。更深层次的原因，bind()的实现，
相当于使用函数在内部包了一个call/apply，第二次bind()相当于再包住第一次bind(),故第二次以后的bind是无法生效的
```
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

```
*/


// 第 6 题
/*
请说出至少 8 个 HTTP 状态码，并描述各状态码的意义。

例如：

状态码 200 表示响应成功。
///////

### HTTP 请求包括哪些部分
#### [状态码](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
状态码概要，是服务器对浏览器说的话
1xx 不常用
2xx 表示成功
3xx 表示滚吧
4xx 表示你丫错了
5xx 表示好吧，我错了
xxx （给人看的信息）
💢
## 👍讲人话👍
### 2xx成功
#### 200 ok
>请求已成功，
#### 204 No Content
>服务器接收到的请求，但是没东西给回你
#### 206 Partial Content
>服务器已经成功处理了部分GET请求。类似于FlashGet或者迅雷这类的HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。
### 3xx重定向
#### 301 Moved Permanently
>资源已永久永久永久移动到新位置
#### 302 Found
>网站临时性重定向，暂时不能访问如：备案、升级等等...区别`307`客户端收到的新的 URI，不是原始请求资源的替代引用。
#### 304 Not Modified
>懒得和你说多一遍，你遇到的问题同上（上一次放回一样）表示资源未被修改
#### 307 Temporary Redirect
>可以理解为一个临时的重定向,与302重定向有所区别的地方在于，收到307响应码后，客户端应保持请求方法不变向新的地址发出请求。
### 4xx客户端错误
#### 400 Bad Request
>由于明显的客户端错误（例如，格式错误的请求语法，太大的大小，无效的请求消息或欺骗性路由请求），服务器不能或不会处理该请求。
#### 401 Unauthorized
>要知道你是何许人也～～即用户没有必要的凭据。该状态码表示当前请求需要用户验证。
#### 404 Not Found
>服务器找不到请求的网页。这个不知道回去卖红薯～～🍠🍠🍠🍠🍠
### 5xx服务器错误
>服务器已经理解请求，但是拒绝执行它。让你死的明明白白👀
#### 500 Internal Server Error
>通用错误消息，服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。没有给出具体错误信息。
#### 503 Service Unavailable
>服务器要么休息♨️要么炸了💥，都是暂时的～如果知道什么时候恢复会返回包含一个Retry-After头用以标明这个延迟时间
如何用Chrome开发者工具查看 HTTP 响应内容

*/

// 第 6 题
/*
请写出一个 HTTP post 请求的内容，包括四部分。
其中
第四部分的内容是 username=ff&password=123
第二部分必须含有 Content-Type 字段
请求的路径为 /path
*/

GET / HTTP/1.1
Host: www.baidu.com
Content-Type: application/x-www-form-urlencoded
User-Agent: curl/7.54.0
Accept: */*

username=ff&password=123

/*
// 第 8 题
请说出至少三种排序的思路，这三种排序的时间复杂度分别为

O(n*n)
O(n log2 n)
O(n + max)


O(n*n)
O(n*n)
冒泡排序：比较相邻的元素，如果第一个比第二个大，就交换他们两个，对每一对相邻的元素做同样的工作，
从开始第一对到结尾最后一对，这步会让后一位元素就是最大的数，对所有元素重复以上步骤，
除了最后一个，直到没有任何一堆数字需要比较
O(n log2 n)
快速排序：以一个元素为基准，重新排序数列，比基准值小的元素放左边，大的放右边，
然后在对左半边和右半边重复以上操作，直到只有一个数字为止。
O(n + max)
基数排序：排序过程：将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零。
然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。



*/


/*
// 第 9 题

一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

这一题是在挖掘你的知识边界，所以你知道多少就要答多少。

可以先查阅一些资料再查，但是不要把自己不懂的东西放在答案里，面试官会追问的。

提示：本题 5 分，因为目前我们知道的不多。


/////////////
### DNS解析
DNS解析的过程就是寻找哪台机器上有你需要资源的过程。当你在浏览器中输入一个地址时，
例如www.baidu.com，其实不是百度网站真正意义上的地址。
互联网上每一台计算机的唯一标识是它的IP地址，但是IP地址并不方便记忆。
用户更喜欢用方便记忆的网址去寻找互联网上的其它计算机，也就是上面提到的百度的网址。
所以互联网设计者需要在用户的方便性与可用性方面做一个权衡，这个权衡就是一个网址到IP地址的转换，
这个过程就是DNS解析。它实际上充当了一个翻译的角色，实现了网址到IP地址的转换。
*****
### TCP连接
简答：每次建立连接前，客户端和服务端之前都要先进行三次对话才开始正式传输内容，三次对话大概是这样的：
1. 客户端：我要连接你了，可以吗
2. 服务端：嗯，我准备好了，连接我吧
3. 客户端：那我连接你咯。
4. 开始后面步骤
*****
### 发送HTTP请求
其实这部分又可以称为前端工程师眼中的HTTP，它主要发生在客户端。
发送HTTP请求的过程就是构建HTTP请求报文并通过TCP协议中发送到服务器指定端口(HTTP协议80/8080, HTTPS协议443)。
HTTP请求报文是由三部分组成: 请求行, 请求报头和请求正文。
*****
### 服务器处理请求并返回HTTP报文
自然而然这部分对应的就是后端工程师眼中的HTTP。
后端从在固定的端口接收到TCP报文开始，这一部分对应于编程语言中的socket。
它会对TCP连接进行处理，对HTTP协议进行解析，并按照报文格式进一步封装成HTTP Request对象，供上层使用。
这一部分工作一般是由Web服务器去进行，我使用过的Web服务器有Tomcat, Jetty和Netty等等。

HTTP响应报文也是由三部分组成: 状态码, 响应报头和响应报文。
状态码
状态码是由3位数组成，第一个数字定义了响应的类别，且有五种可能取值:

1xx：指示信息–表示请求已接收，继续处理。
2xx：成功–表示请求已被成功接收、理解、接受。
3xx：重定向–要完成请求必须进行更进一步的操作。
4xx：客户端错误–请求有语法错误或请求无法实现。
5xx：服务器端错误–服务器未能实现合法的请求。
平时遇到比较常见的状态码有:200, 204, 301, 302, 304, 400, 401, 403, 404, 422, 500(分别表示什么请自行查找)。
响应报头
常见的响应报头字段有: Server, Connection...。
响应报文
服务器返回给浏览器的文本信息，通常HTML, CSS, JS, 图片等文件就放在这一部分。
*****
### 浏览器解析渲染页面
浏览器是一个边解析边渲染的过程。
首先浏览器解析HTML文件构建DOM树，然后解析CSS文件构建渲染树，
等到渲染树构建完成后，浏览器开始布局渲染树并将其绘制到屏幕上。
*****
### 连接结束
通过四次挥手关闭连接。一端断开连接需要两次挥手（请求和回应），两端断开连接就需要四次挥手。
第四次分手：主机1收到主机2发送的FIN报文段，向主机2发送ACK报文段，
然后主机1进入TIME_WAIT状态；主机2收到主机1的ACK报文段以后，就关闭连接；
此时，主机1等待2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，主机1也可以关闭连接了。
*/
/*
// 第 10 题
如何实现数组去重？
假设有数组 array = [1,5,2,3,4,2,3,1,3,4]
你要写一个函数 unique，使得
unique(array) 的值为 [1,5,2,3,4]
也就是把重复的值都去掉，只保留不重复的值。

要求：

不要做多重循环，只能遍历一次
请给出两种方案，一种能在 ES 5 环境中运行，一种能在 ES 6 环境中运行（提示 ES 6 环境多了一个 Set 对象）

*/



// function unique(array) {
//   var newArr = []
//    for (var i = 0; i < array.length; i++) {
//      console.log(newArr);
//      let key = array[i]
//      if(newArr[key] === undefined){
//        newArr[i] = array[i]
//        console.log(array[i]);
//      }
//    }
//    return newArr
// }
// array = [1,5,2,3,4,2,3,1,3,40]
// unique(array)
// var newArr2 = unique(array)


function unique(array) {
  var newArr = []
   for (var i = 0; i < array.length; i++) {
     console.log(newArr);
     if(newArr.indexOf(array[i]) === -1){
        newArr.push(array[i])
     }
   }
   return newArr
}
array = [1,5,2,3,4,2,3,1,3,40]
unique(array)


function unique(array) {
  let newArr = Array.from(new Set(array));
  console.log(array);
   return newArr
}
array = [1,5,2,3,4,2,3,1,3,40]
unique(array)



//
