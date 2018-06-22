Vue.component('share', {
  props: ['shareLink'],
  template:`
  <div class="share" v-cloak>
    <h2>
      分享简历链接
    </h2>
    <div>
      <textarea readonly type="text" :value="shareLink"></textarea>
    </div>
    <button type="button" name="button" @click="$emit('close-share')">关闭</button>
  </div>
  `,
})
