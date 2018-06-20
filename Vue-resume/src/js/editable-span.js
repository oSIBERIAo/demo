Vue.component('editable-span', {
  props: ['value'],
  data: function () {
    return {
      editing: false
    }
  },
  template: `
  <span class="editableSpan">
    <span v-show="!editing">{{value}}</span>
    <input v-show="editing" type="text" v-bind:value="value" @input="triggerEdit"/>
    <button @click="editing = !editing">edit</button>
  </span>
  `,
  methods:{
    triggerEdit(e){
      console.log(e.target.value);
      this.$emit('edit', e.target.value)
    }
  },
})
