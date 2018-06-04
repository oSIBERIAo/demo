'use strict';

!function () {
  var view = View('section.message');

  var model = Model({ resourceName: 'Message' });
  var controller = Controller({
    messageList: null,
    form: null,
    init: function init(view, controller) {
      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('form');
      this.loadMessages();
    },
    loadMessages: function loadMessages() {
      var _this = this;

      console.log(this.model);
      this.model.fetch().then(function (message) {
        var array = message.map(function (item) {
          return item.attributes;
        });
        // console.log('here')
        // console.log('array', array);
        // console.log(message);
        array.forEach(function (item) {
          var li = document.createElement('li');
          li.innerText = item.name + ':' + ('' + item.content);
          // console.log(li);
          _this.messageList.appendChild(li);
        });
      }, function (error) {
        // 异常处理
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      console.log(this.form);
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        _this2.saveMessages();
      });
    },
    saveMessages: function saveMessages() {
      var myForm = this.form;
      console.log('myForm', myForm);
      console.log('saveMessages-this.model', this.model);
      var content = myForm.querySelector('input[name=content]').value;
      var name = myForm.querySelector('input[name=name]').value;
      // console.log(name);

      this.model.save({ 'name': name, 'content': content }).then(function (object) {
        // alert(`${content}存入成功!`);
        // window.location.reload()
        var li = document.createElement('li');
        li.innerText = object.attributes.name + ':' + ('' + object.attributes.content);
        var messageList = document.querySelector('#messageList');
        messageList.appendChild(li);
        console.log(object);
        myForm.querySelector('input[name=content]').value = '';
      });
    }
  });

  controller.init.call(controller, view, model);
  // controller.init(view)
}.call();

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