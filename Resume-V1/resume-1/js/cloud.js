var { Query, User } = AV;
// AV.init('appId', 'appKey');
// 实时消息服务
// var { Realtime, TextMessage } = AV;
//
var APP_ID = 'gdp7vSppEKKm14mL6XkC2vGx-gzGzoHsz';
var APP_KEY = 'vlS29qhJ2EJBdjDyOzUciMHH';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
//

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  // alert('LeanCloud Rocks!');
  console.log('LeanCloud Rocks!');
})

// var Message = AV.Object.extend('Message');
// var message= new Message();
// message.save({
//
// }).then(function(object) {
//   // alert('LeanCloud Rocks!');
//   console.log('LeanCloud Rocks!');
// })



// 第一个参数是 className，第二个参数是 objectId
var todo = AV.Object.createWithoutData('Message');

function xxx() {
  todo.fetch().then(function (e) {
    let response = JSON.parse(e._hashedJSON.results)
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      let {user, message} = response[i]
      console.log("user", user);
      console.log("message", message);
      let li = document.createElement('li')
      li.innerHTML = message
      console.log('li',li);
      messageList.children[0].append(li)
    }
  }, function (error) {
    // 异常处理
  });
}
xxx()

messageSubmit.addEventListener('submit',function (e) {
  e.preventDefault()
  var messageValue = document.getElementById("messageValue").value
  var User = document.getElementById("User").value
  if (messageValue === "") {
    alert('留言不能为空哦')
    return
  }
  let Message = AV.Object.extend('Message');
  let message= new Message();
  message.save({
    message: messageValue,
    user: User,
  }).then(function(object) {
    let {user, message} = object.attributes
    let li = document.createElement('li')
    li.innerHTML = message
    messageList.children[0].append(li)
    var scrollHeight = $('#xxxx').prop("scrollHeight");
    $('#xxxx').scrollTop(scrollHeight,0);
  })
})

//
