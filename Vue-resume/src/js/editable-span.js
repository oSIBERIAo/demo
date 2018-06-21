Vue.component('editable-span', {
  props: ['value', 'disabled'],
  data: function () {
    return {
      editing: false
    }
  },
  template: `
  <span class="editableSpan">
    <span v-show="!editing">{{value}}</span>
    <input v-show="editing" type="text" v-bind:value="value" @input="triggerEdit"/>
    <button v-if="!disabled" @click="editing = !editing">edit</button>
  </span>
  `,
  methods:{
    triggerEdit(e){
      console.log(e.target.value);
      this.$emit('edit', e.target.value)
    }
  },
})
