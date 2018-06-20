let app = new Vue({
  el: '#app',
  data: {
    editingName: false,
    loginVisible: false,
    signUpVisible: false,
    resume: {
      name: '姓名',
      birthday: '1994',
      gender: '男',
      email: 'example@gmail.com',
      phone: '18888888888',
      jobTitile: '前端工程师'
    },
    login: {
      email: '',
      password: '',
    },
    signUp: {
      email: '',
      password: '',
    },
  },
  methods: {
    onEdit(key, value){
      console.log('key',key);
      console.log('value',value);
      this.resume[key] = value
    },
    onLogin(e){
      console.log(this.login);
      AV.User.logIn(this.login.email, this.login.password).then(function (loggedInUser) {
        console.log(loggedInUser);
        console.log('登陆成功');
      }, function (error) {
        console.log(error);
        if (error.code === 211) {
          alert('用户不存在')
        } else if (error.code === 210) {
          alert('邮箱与密码不匹配')
        }
      });
    },
    onSignUp(e){
      console.log(this.signUp);
      // 新建 AVUser 对象实例
      const user = new AV.User();
      // 设置用户名
      user.setUsername(this.signUp.email);
      // 设置密码
      user.setPassword(this.signUp.password);
      // 设置邮箱
      user.setEmail(this.signUp.email);
      user.signUp().then(function (user) {
          console.log(user);
      }, function (error) {
      });
    },
    onLogOut(e){
      AV.User.logOut();
      // 现在的 currentUser 是 null 了
      var currentUser = AV.User.current();
      window.location.reload()
    },
    onClickSave(){
      var currentUser = AV.User.current();
      if (!currentUser) {
        this.loginVisible = true
      } else {
        this.saveResume()
        console.log('currentUser', currentUser);
        // this.loginVisible = true
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
      let {id} = AV.User.current()
      console.log(id)
      var user = AV.Object.createWithoutData('User', id);
      user.set('resume', this.resume)
      user.save()
    },
  },
})
