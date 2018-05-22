//测试AJAX
// 😄😄测试😄😄
button.addEventListener('click', (e)=>{
   let request = new XMLHttpRequest()
   request.open('GET', '/xxx') //配置 request
   request.onreadystatechange = ()=>{
     if (request.readyState === 4) {
       console.log('haha');
       if (request.status >= 200 && request.status <= 300) {
         console.log('haha2');
         console.log(request);
         console.log(request.responseText);
         let string = request.responseText
         let object = window.JSON.parse(string)
       }
     }
    }
   request.send()
})
