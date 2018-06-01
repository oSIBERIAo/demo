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
  var pathWithQuery = request.url
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('方方说：含查询字符串的路径\n' + pathWithQuery)

  // if(path === '/'){
  //   response.statusCode = 200
  //   response.setHeader('Content-Type', 'text/html;charset=utf-8')
  //   response.write('哈哈哈')
  //   response.end()
  // }else{
  //   response.statusCode = 404
  //   response.setHeader('Content-Type', 'text/html;charset=utf-8')
  //   response.write('呜呜呜')
  //   response.end()
  // }


  if(path === '/'){
    var string = fs.readFileSync('./index.html', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  } else if(path === '/style.css') {
    var string = fs.readFileSync('./style.css', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(string)
    response.end()
  } else if(path === '/main.js') {
    var string = fs.readFileSync('./main.js', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/jacascript;charset=utf-8')
    response.write(string)
    response.end()
  } else if (path === '/sign_up' && method === 'GET') {
    var string = fs.readFileSync('./sign_up.html', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  } else if (path === '/sign_up' && method === 'POST') {
    readBody(request).then( (body)=>{
      let strings = body.split('&')
      let hash = []
      strings.forEach( (string)=>{
        let parts = string.split('=')
        let key =  parts[0]
        let value = parts[1]
        hash[key] = decodeURIComponent(value) //转码
      })
      console.log(hash);
      // let email = hash['email']
      // let password = hash['password']
      // let password_confirmation = hash['password_confirmation']
      let {email, password, password_confirmation} = hash
      if(email.indexOf('@') === -1){
        response.statusCode = 400
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write(`{
          "errors": {
            "email": "invalid"
          }
        }`)
      } else if(password!== password_confirmation) {
        response.statusCode = 400
        response.write('password not match')
      } else {
        var users = fs.readFileSync('./db/users', 'utf8')
        console.log('users', users);
        try {
          users = JSON.parse(users)
        } catch (exception) {
          users = []
        }
        let inUse = false
        for (let i = 0; i < users.length; i++) {
          let user[i] = users[i]
          if (user.email === email) {
            inUse = ture
            break
          }
        }
        if (inUse) {
          response.statusCode = 404
          response.setHeader('Content-Type', 'application/jacascript;charset=utf-8')
          response.write('呜呜呜')
          response.end()
        }
        users.push({email: email, password: password})
        var usersString = JSON.stringify(users)
        console.log('usersString', usersString);
        fs.writeFileSync('./db/users', usersString)

        response.statusCode = 200
      }
      response.end()
    })
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'application/jacascript;charset=utf-8')
    response.write('呜呜呜')
    response.end()
  }
  /******** 代码结束，下面不要看 ************/
})

function readBody(request) {
  let body = []
  return new Promise((resolve, reject)=>{
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      resolve(body)
    });
  })
}

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
