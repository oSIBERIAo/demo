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




// 1.meta viewport


// 2.媒体查询


// 3.方法一：使用 JS 动态调整 REM



//
// 第 3 题
// 2017年腾讯前端实习面试题（二面）：
// 用过CSS3吗? 实现圆角矩形和阴影怎么做?
//


border-radius: 50px;


























//