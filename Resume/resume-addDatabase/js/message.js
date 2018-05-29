!function() {
  var view =  document.querySelector('section.message')

  var model = {
    init: function() {
      var APP_ID = 'EDxMbgBCPl0kyC5cjk0IzxUp-gzGzoHsz';
      var APP_KEY = 'KVS1wNH1CwYUb8aIA7zfEvqB';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
      // console.log('运行到这里了');
    },
    //获取数据
    fetch: function() {
      var query = new AV.Query('Message');
      return query.find()
    },
    //创建数据
    save: function(name, content) {
      var Message = AV.Object.extend('Message')
      var message = new Message()
      return message.save({
        'content': content,
        'name': name
      })
    },
  }

  var controller = {
    view: null,
    model: null,
    messageList: null,
    form: null,
    init: function(view, model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvnets()
    },
    loadMessages: function() {
      this.model.fetch().then( (message)=> {
        let array = message.map((item)=> item.attributes)
        // console.log('here')
        // console.log('array', array);
        // console.log(message);
        array.forEach((item)=>{
          let li = document.createElement('li')
          li.innerText = `${item.name}:` + `${item.content}`
          // console.log(li);
          this.messageList.appendChild(li)
        })
      }, function (error) {
        // 异常处理
      });
    },
    bindEvnets: function() {
      let myForm = this.form
      this.form.addEventListener('submit', function(e) {
        e.preventDefault()
        this.saveMessages()
      })
    },
    saveMessages: function() {
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      // console.log(name);
      this.model.save().then(function(object) {
        // alert(`${content}存入成功!`);
        // window.location.reload()
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:` + `${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        console.log(object);
        myForm.querySelector('input[name=content]').value = ''
      })
    },
  }
  controller.init.call(controller, view, model)
  // controller.init(view)
}.call()







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
