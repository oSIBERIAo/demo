
let app = new Vue({
  el: '#app',
  data: {
    editingName: false,
    loginVisible: false,
    signUpVisible: false,
    shareVisible: false,
    skinPickerVisible: false,
    shareLink: '',
    previewUser: {
      objectId: undefined,
    },
    previewResume: {
      name: '姓名',
      birthday: '1994',
      gender: '男',
      email: 'example@gmail.com',
      phone: '18888888888',
      jobTitile: '前端工程师',
      skills: [
        {name: '请填写技能名称', description: '请填写技能描述'},
        {name: '请填写技能名称', description: '请填写技能描述'},
        {name: '请填写技能名称', description: '请填写技能描述'},
        {name: '请填写技能名称', description: '请填写技能描述'},
      ],
      projects:[
        {name: '请填写技能名称', link: 'http://', keywords: '请填写关键字', description: '请详细描述'},
        {name: '请填写技能名称', link: 'http://', keywords: '请填写关键字', description: '请详细描述'},
      ],
    },
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
      jobTitile: '前端工程师',
      skills: [
        {name: '请填写技能名称', description: '请填写技能描述'},
        {name: '请填写技能名称', description: '请填写技能描述'},
        {name: '请填写技能名称', description: '请填写技能描述'},
        {name: '请填写技能名称', description: '请填写技能描述'},
      ],
      projects:[
        {name: '请填写技能名称', link: 'http://', keywords: '请填写关键字', description: '请详细描述'},
        {name: '请填写技能名称', link: 'http://', keywords: '请填写关键字', description: '请详细描述'},
      ],
    },
    login: {
      email: '',
      password: '',
    },
    signUp: {
      email: '',
      password: '',
    },
    shareLink: '',
    mode: 'edit', // 'preview'
  },
  computed: {
    displayResume(){
      return this.mode === 'preview' ? this.previewResume : this.resume
    }
  },
  watch: {
    'currentUser.objectId': function(newValue, oldValue){
      // console.log('newValue', newValue);
      if (newValue) {
        this.getResume(this.currentUser).then((resume)=>{
          if (resume) {
            this.resume = resume
          }
        })
      }
    }
  },
  methods: {
    onEdit(key, value){
      console.log('key',key);
      console.log('value',value);
      //解析key
      let regex = /\[(\d+)\]/g
      key = key.replace(regex, (match,number)=> `.${number}`)
      keys = key.split('.')
      console.log('ksys', keys);
      let result = this.resume
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          result[keys[i]] = value
        } else {
          result = result[keys[i]]
        }
      }
    },
    onShare(){
      if (this.hasLogin()) {
        this.shareVisible = true
      } else {
        alert('请先登陆')
      }
    },
    hasLogin(){
      return !!this.currentUser.objectId
    },
    onLogin(user){
      console.log('登陆成功');
      user = user.toJSON()
      console.log('user', user);
      Object.assign(this.currentUser, user)
      console.log("this", this);
      console.log("this.currentUser", this.currentUser);
      this.loginVisible = false
    },
    gotoSignupLogin(){
      this.signUpVisible = !this.signUpVisible
      this.loginVisible = !this.loginVisible
    },
    onSignUp(user){
      Object.assign(this.currentUser, user)
      this.signUpVisible = false
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
    getResume(user){
      var query = new AV.Query('User');
      return query.get(user.objectId ).then((user)=>{
        // console.log('getResume', user);
        let resume = user.toJSON().resume
        return resume
      }, function (error) {
        // 异常处理
      });
    },
    addSkill(){
      this.resume.skills.push({name: '请填写技能名称', description: '请填写技能描述'})
    },
    removeSkill(index){
      this.resume.skills.splice(index, 1)
    },
    addProjects(index){
      this.resume.projects.push(  {name: '请填写技能名称', link: 'http://', keywords: '请填写关键字', description: '请详细描述'})
    },
    removeProjects(index){
      this.resume.projects.splice(index, 1)
    },
    print(){
      window.print()
    },
    setTheme(name){
      document.body.className = name
    },
  },
})

//获取当前用户的 id
let currentUser = AV.User.current()
if (currentUser) {
  console.log('currentUser', currentUser.toJSON());
  console.log('currentUser', currentUser);
  app.currentUser = currentUser.toJSON()
  // app.currentUser.objectId = currentUser.toJSON().objectId
  // app.currentUser.email = currentUser.toJSON().email
  app.shareLink = location.origin + location.pathname + '?user_id=' + app.currentUser.objectId
  app.getResume(app.currentUser).then(resume => {
    console.log('currentId', app.currentUser.objectId);
    Object.assign(app.resume, resume)
    // app.resume = resume
  })
}

//获取预览用户的 id
let search = location.search
let regex = /user_id=([^&]+)/
let matches = search.match(regex)
let userId
if (matches) {
  userId = matches[1]
  app.mode = 'preview'
  app.getResume({objectId: userId}).then(resume => {
    console.log('previewId', userId);
    Object.assign(app.previewResume, resume)
  })
}





//
