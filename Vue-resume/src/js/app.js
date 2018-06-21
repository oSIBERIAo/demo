
let app = new Vue({
  el: '#app',
  data: {
    editingName: false,
    loginVisible: false,
    signUpVisible: false,
    currentUser: {
      objectId: undefined,
      email: '',
    },
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
    hasLogin(){
      return !!this.currentUser.objectId
    },
    onLogin(e){
      console.log(this.login);
      AV.User.logIn(this.login.email, this.login.password).then( (user) => {
        user = user.toJSON()
        console.log('user', user);
        console.log('登陆成功');
        this.currentUser = {
          objectId: user.objectId,
          email: user.email
        }
        this.loginVisible = false
        // this.currentUser.id = user.id
        // this.currentUser.attributes.email = user.attributes.email
        console.log('currentUser', this.currentUser);
      }, (error) => {
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
      user.signUp().then((user) => {
        user = user.toJSON()
          console.log(user)
          this.currentUser = {
            objectId: user.objectId,
            email: user.email
          }
          this.loginVisible = false
      },  (error) => {
        alert(error.rawMessage)
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
      let {objectId} = AV.User.current().toJSON()
      // console.log(id)
      var user = AV.Object.createWithoutData('User', objectId);
      user.set('resume', this.resume)
      user.save().then(()=>{
        alert('保存成功')
      },()=>{
        alert('保存失败')
      })
    },
    getResume(){
      var query = new AV.Query('User');
      query.get(this.currentUser.objectId ).then((user)=>{
        console.log('getResume', user);
        let resume = user.toJSON().resume
        this.resume = resume
        // 成功获得实例
        // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
      }, function (error) {
        // 异常处理
      });
    },
  },
})


let currentUser = AV.User.current()
if (currentUser) {
  console.log('currentUser', currentUser.toJSON());
  console.log('currentUser', currentUser);
  app.currentUser = currentUser.toJSON()
  // app.currentUser.objectId = currentUser.toJSON().objectId
  // app.currentUser.email = currentUser.toJSON().email
  console.log('app.currentUser', app.currentUser);
  app.getResume()
}



//
