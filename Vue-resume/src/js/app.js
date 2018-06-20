let app = new Vue({
  el: '#app',
  data: {
    editingName: false,
    loginVisible: false,
    signUpVisible: false,
    resume: {
      message: 'Hello Vue!',
      name: '姓名',
      birthday: '1994',
      gender: '男',
      email: 'example@gmail.com',
      phone: '18888888888',
      jobTitile: '前端工程师'
    }
  },
  methods: {
    onEdit(key, value){
      console.log('key',key);
      console.log('value',value);
      this.resume[key] = value
    },
    onClickSave(){
      var currentUser = AV.User.current();
      if (!currentUser) {
        this.loginVisible = true
      } else {
        this.saveResume()
      }
      // console.log(this.resume)
      // let User = AV.Object.extend('User')
      // let user = new User()
      // user.set('resume',this.resume)
      // user.save().then(function () {
      //   console.log('保存成功');
      // }, function (error) {
      //   console.error(error);
      // })
    },
    saveResume(){

    },
  },
})
