window.jQuery = function(){}
window.$ = window.jQuery

//测试AJAX
// 😄😄测试😄😄
button.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.open('GET', '/xxx') //配置 request
    request.onreadystatechange = ()=>{
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status <= 300) {
          let string = request.responseText
          let object = window.JSON.parse(string)
          console.log('说明请求成功')
        } else if (request.status >= 400){
          console.log('说明请求失败')
        }
      }
     }
    request.send()
})

button2.addEventListener('click', (e)=>{
   window.jQuery.ajax2({
     url: '/xxx',
     method: 'get',
     body: undefined,
     success: (x)=>{
        f1.call(undefined, x)
        f2.call(undefined, x)
     },
     fail: (x)=>{
       console.log(x);
       console.log(x.status);
       console.log(x.responseText);
     },
     headers: {
       'content-type':'application/x-www-form0-urlencoded',
       'say': 'haha'
     },
   })
})

button3.addEventListener('click', (e)=>{
   let promise = window.jQuery.ajax3({
     url: '/xxx',
     method: 'get',
     body: undefined,
     headers: {
       'content-type':'application/x-www-form0-urlencoded',
       'say': 'haha'
     },
   })
   promise.then(
     (text)=>{console.log(text)},
     (request)=>{console.log(request)}
   )
})





//封装的jQuery
/////////////////////////////

// 自己封装jQuery.ajax--Promise 规则
// window.jQuery.ajax(url,method,body,success, fail)
window.jQuery.ajax3 = function({url, method, body, headers}){
  return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest()
    request.open(method, url)
    for(let key in headers) {
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined, request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined, request)
        }
      }
    }
    request.send()
  })
}



// 自己封装jQuery.ajax
//window.jQuery.ajax(url,method,body,success, fail)

window.jQuery.ajax2 = function({url, method, body, success, fail, headers}){
  let request = new XMLHttpRequest()
  request.open(method, url)
  for(let key in headers) {
    let value = headers[key]
    request.setRequestHeader(key, value)
  }
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        success.call(undefined, request.responseText)
      }else if(request.status >= 400){
        fail.call(undefined, request)
      }
    }
  }
  request.send(body)
}




// 自己封装jQuery.ajax
//window.jQuery.ajax(options)
/*
window.jQuery.ajax = function(options){
  let url
  if (arguments.length === 1) {
    url = options.url
  } else if (arguments.length === 2){
    url = arguments[0]
  }
  let method = options.method
  let body = options.body
  let success = options.success
  let fail = options.fail
  let headers = options.headers

  let request = new XMLHttpRequest()
  request.open(method , url)
  for (var key in headers) {
    let value = headers[key]
    request.setRequestHeader(key, value)
  }
  request.onreadystatechange = ()=>{
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 300) {
        success.call(undefined, request.responseText)
        console.log('说明请求成功')
      } else if (request.status >= 400){
        fail.call(undefined, request.request)
        console.log('说明请求失败')
      }
    }
  }
  request.send()
}
*/

///////////////
function f1(x){
  console.log('f1');
}
function f2(x){
  console.log('f2');
}















//
