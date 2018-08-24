!function () {
  var view = View('#message').element
  var model = Model({
    resourceName: 'Message'
  })
  var controller = Controller({
    init: function (view, model) {
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
          let li = document.createElement('li')
          li.innerHTML = message
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
      model.save({
        message: messageValue,
        user: User,
      }).then( (object) => {
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
  })
  controller.init(view, model)
}.call()

// message切换
