//jq版
button.addEventListener('click', (e)=>{
  $.ajax({
      url: "http://localhost:8888/pay",
      dataType: "jsonp",
      success: function( response ) {
          console.log( response ); // server response
          if (response === "success") {
            alert("这是前端的代码～")
            amount.innerText = amount.innerText - 1
          } else {
            alert(`操作失败`)
          }
      }
  });
})

/*
//js版
button.addEventListener('click', (e)=>{
  let script =  document.createElement('script')
  let functionName = 'pay' + parseInt(Math.random()*1000000, 10)
  script.src = '/pay?callbackName=' + functionName
  window[functionName] = function(result) {
    if (result === "success") {
      alert("这是前端的代码～")
      amount.innerText = amount.innerText - 1
    } else {
      alert(`操作失败`)
    }
  }
  document.body.appendChild(script)
  script.onload = function(e) {
    e.currentTarget.remove()
    delete window[functionName]
  }
  script.onerror = function() {
    e.currentTarget.remove()
    delete window[functionName]
  }
})
*/
//
