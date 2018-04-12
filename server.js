var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/













  console.log('方方说：得到 HTTP 路径\n' + path)
  // console.log('方方说：查询字符串为\n' + query)
  // console.log('方方说：不含查询字符串的路径为\n' + pathNoQuery)
  if (path == '/') {
     response.write('Hi\n')
     response.end()
  } else if (path == '/style') {
     response.setHeader('Content-Type', 'text/css; charset=utf-8')
     response.write('body{background-color: #000;}h1{color: #fff;}')
     response.end()
  } else if (path == '/script') {
     response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
     response.write('alert("JS已执行")')
     response.end()
  } else if (path == '/index'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>' +
     '<head><link rel="stylesheet" href="/style">' +
     '</head><body>' +
     '<h1>👉  Hello Node.js 你好  👋</h1>' +
     '<script src="/script"></script>' +
     '</body></html>')
    response.end()
     response.end()
  } else {
     response.statusCode = 404
     response.end()
  }





  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
