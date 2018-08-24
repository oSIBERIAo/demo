!function () {
  var view = document.querySelector('#message')
  var model = {
    initAV: function() {
      var { Query, User } = AV;
      // AV.init('appId', 'appKey');

      var APP_ID = 'gdp7vSppEKKm14mL6XkC2vGx-gzGzoHsz';
      var APP_KEY = 'vlS29qhJ2EJBdjDyOzUciMHH';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function () {
      var message = AV.Object.createWithoutData('Message');
      return message.fetch()
    },
    save: function (User, messageValue) {
      let Message = AV.Object.extend('Message');
      let message= new Message();
      return message.save({
        message: messageValue,
        user: User,
      })
    },
  }
  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view
      this.model = model

      this.messageList = view.querySelector('#messageList')
      this.messageBG = view.querySelector('#messageBG')
      this.form = view.querySelector('#messageSubmit')
      this.model.initAV()
      this.loadMessages()
      this.bindEvents()
      this.toggleMessage()
    },
    loadMessages: function(){
      model.fetch().then(function (e) {
        let response = JSON.parse(e._hashedJSON.results)
        // console.log(response);
        for (var i = 0; i < response.length; i++) {
          let {user, message} = response[i]
          // console.log("user", user);
          // console.log("message", message);
          let li = document.createElement('li')
          li.innerHTML = message
          // console.log('li',li);
          messageList.children[0].append(li)
        }
      }, function (error) {
        // 异常处理
      });
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      // var messageValue = document.getElementById("messageValue").value
      // var User = document.getElementById("User").value
      var messageValue = this.form.querySelector('input[name=message]').value
      var User = this.form.querySelector('input[name=user]').value
      if (messageValue === "") {
        alert('留言不能为空哦')
        return
      }
      model.save(User, messageValue).then( (object) => {
        let {user, message} = object.attributes
        let li = document.createElement('li')
        li.innerHTML = message
        let ul = messageList.children[0]
        ul.append(li)
        // var scrollHeight = $('#xxxx').prop("scrollHeight");
        // $('#xxxx').scrollTop(scrollHeight,0);
        var scrollHeight = ul.scrollHeight
        ul.scrollTo( 0, scrollHeight )
        this.form.querySelector('input[name=message]').value = ''
      })
    },
    toggleMessage: function () {
      this.messageBG.addEventListener('click',  (params) => {
        this.messageBG.children[0].classList.toggle("unactie")
        this.messageBG.children[1].classList.toggle("unactie")
        this.messageList.classList.toggle("unactie")
        this.messageList.classList.toggle("offset")
      })
      messageList.addEventListener('mouseenter', (e) => {
        this.fixedBody()
      })
      messageList.addEventListener('mouseleave', (e) => {
        this.looseBody()
      })
    },
    fixedBody: function () { //滚动穿透工具函数
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      document.body.style.cssText += 'position: fixed;top:-' + scrollTop + 'px;width: 100%;';
    },
    looseBody: function () { //滚动穿透工具函数
      var body = document.body;
      body.style.position = '';
      var top = body.style.top;
      document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
      body.style.top = '';
    }
  }
  controller.init(view, model)
}.call()

// message切换
