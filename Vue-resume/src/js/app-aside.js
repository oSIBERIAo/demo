Vue.component('app-aside', {
  props: ['mode',],
  methods: {
    hasLogin(){
      return !!this.currentUser.objectId
    },
    onClickSave(){
      var currentUser = AV.User.current();
      if (!currentUser) {
        this.loginVisible = true
      } else {
        this.saveResume()
        console.log('currentUser', currentUser);
      }
    },
    onShare(){
      if (this.hasLogin()) {
        this.shareVisible = true
      } else {
        alert('请先登陆')
      }
    },
    print(){
      window.print()
    },
    setTheme(name){
      document.body.className = name
    },
  },
  template: `
    <aside v-show="mode === 'edit'">
      <div class="upper">
        <ul class="actions">
          <li>
            <button class="button" @click="$emit('save')">保存</button>
          </li>
          <li>
            <button class="button" @click="$emit('share')">分享</button>
          </li>
          <li>
            <button class="button" @click="$emit('print')">打印</button>
          </li>
          <li>
            <button class="button" @click="$emit('changeTheme')">换肤</button>
            <router-link to="/skinPicker">换肤</router-link>
          </li>
        </ul>
      </div>
      <div class="down">
        <button class="button" @click="$emit('logout')" v-show="">登出</button>
      </div>
    </aside>
  `,
})
//skinPickerVisible = !skinPickerVisible
