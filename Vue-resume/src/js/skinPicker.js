window.SkinPicker = {
  data() {
    return {
      skinPickerVisible: false,
    }
  },
  template:`
  <div class="skinPicker" v-cloak>
    <button type="button" name="button" @click="setTheme('default')">默认</button>
    <button type="button" name="button" @click="setTheme('dark')">暗黑</button>
    <button type="button" name="button" @click="$emit('close-skinpicker')">关闭</button>
    <router-link to="/">关闭</router-link>
  </div>
  `,
  methods: {
    setTheme(name){
      document.body.className = name
    },
  },
}
Vue.component('skinPicker', window.SkinPicker)
