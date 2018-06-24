window.SignUp ={
  data() {
    return {
      signUp: {
        email: '',
        password: '',
      },
    }
  },
  template:`
    <div class="signUp" v-cloak>
      <form class="form" @submit.prevent="onSignUp">
        <h2>注册</h2>
        <button type="button" @click="$emit('close')"><router-link to="/">关闭</router-link></button>
        <div class="row">
          <label>邮箱</label>
          <input type="text" v-model="signUp.email">
        </div>
        <div class="row">
          <label>密码</label>
          <input type="text" v-model="signUp.password">
        </div>
        <div class="actions">
          <button type='submit'>提交 </button>
          <router-link to="/login">登陆</router-link>
        </div>
      </form>
    </div>
  `,
  methods: {
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
        this.$emit('signup', user)
        // this.currentUser = {
        //   objectId: user.objectId,
        //   email: user.email
        // }
        // this.signUpVisible = false
      },  (error) => {
        alert(error.rawMessage)
      });
    },
    onClickLogin(e){
      this.$emit('goto-login')
    },
  },
}
Vue.component('signUp', window.SignUp)
