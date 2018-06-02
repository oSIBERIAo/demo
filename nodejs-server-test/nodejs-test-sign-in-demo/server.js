var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

let sessions = {

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

  if(path === '/'){
    var string = fs.readFileSync('./index.html', 'utf8')
    let cookies
    if (request.headers.cookie !== undefined) {
      cookies = request.headers.cookie.split(';')
    } else {
      cookies = [ '' ]
    }
    console.log(cookies);
    let hash = {}
    for (let i = 0; i < cookies.length; i++) {
      let parts = cookies[i].split('=')
      let key = parts[0]
      let value = parts[1]
      hash[key] = value
    }
    let mySession = sessions[hash.sessionId]
    console.log('mySession',mySession);
    let email
    if (mySession) {
      email = mySession.sign_in_email
    }
    let users = fs.readFileSync('./db/users', 'utf8')
    users = JSON.parse(users)
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        var foundUser = users[i]
        break
      }
    }

    if (foundUser) {
      string = string.replace('__password__', foundUser.password)
      string = string.replace('__user__', foundUser.email)
    } else {
      string = string.replace('__password__', '不知道')
      string = string.replace('__user__', '不知道')
    }

    try {
      users = JSON.parse(users)
    } catch (exception) {
      users = []
    }
    console.log('request.headers.cookie', request.headers.cookie);
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

      let {email, password, password_confirmation} = hash
      if(email.indexOf('@') === -1){
        response.statusCode = 400
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write(`{
          "errors": {
            "email": "invalid"
          }
        }`)
      } else if(password !== password_confirmation) {
        response.statusCode = 400
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write('password not match')
      } else if(password === password_confirmation){
        var users = fs.readFileSync('./db/users', 'utf8')

        try {
          users = JSON.parse(users)
        } catch (exception) {
          users = []
        }
        let inUse = false
        console.log('users', users);
        for (let i = 0; i < users.length; i++) {
          let user = users[i]
          if (user.email === email) {
            inUse = true
            break
          }
        }
        if (inUse) {
          console.log('---------');
          response.statusCode = 404
          response.setHeader('Content-Type', 'application/json;charset=utf-8')
          response.write(`{
            "errors": {
              "users": "ture"
            }
          }`)
          response.end()
          return
        } else {
          users.push({email: email, password: password})
          var usersString = JSON.stringify(users)
          console.log('usersString', usersString);
          fs.writeFileSync('./db/users', usersString)
        }
        response.statusCode = 200
      }
      response.end()
    })
  } else if(path === '/sign_in' && method === 'GET') {
    let string = fs.readFileSync('./sign_in.html', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  } else if(path === '/sign_in' && method === 'POST'){
    readBody(request).then( (body)=>{
      let strings = body.split('&')
      let hash = []
      strings.forEach( (string)=>{
        let parts = string.split('=')
        let key =  parts[0]
        let value = parts[1]
        hash[key] = decodeURIComponent(value) //转码
      })

      let {email, password} = hash
      console.log(email);
      console.log(password);
      var users = fs.readFileSync('./db/users', 'utf8')

      try {
        users = JSON.parse(users)
      } catch (exception) {
        users = []
      }
      let found
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          found = true
          break
        }
      }
      if(found){
        let sessionId = Math.random() * 100000
        sessions[sessionId] = {sign_in_email: email}
        //Set-Cookie: <cookie-name>=<cookie-value>
        response.setHeader(`Set-Cookie`, `sessionId=${sessionId}`)
        response.statusCode = 200
      } else {
        response.statusCode = 401
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
