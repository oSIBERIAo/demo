var APP_ID = 'EDxMbgBCPl0kyC5cjk0IzxUp-gzGzoHsz';
var APP_KEY = 'KVS1wNH1CwYUb8aIA7zfEvqB';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log('运行到这里了');

var query = new AV.Query('Message');
query.find().then(function (content) {
  let array = content.map((item)=> item.attributes)
  console.log('here')
  console.log('array', array);
  array.forEach((item)=>{
    let li = document.createElement('li')
    li.innerText = item.content
    let messageList = document.querySelector('#messageList')
    console.log(li);
    messageList.appendChild(li)
  })
}, function (error) {
  // 异常处理
});

let myForm = document.querySelector('#postMessageFrom')

myForm.addEventListener('submit', function(e) {
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('Message')
  var message = new Message()
  message.save({
    'content': content
  }).then(function(object) {
    alert(`${content}存入成功!`);
    window.location.reload()
    console.log(content);
  })
})




/*
var TestObject = AV.Object.extend('SIBERIA');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
  console.log(arguments[0]);
  console.log(object);
})
*/

















//
