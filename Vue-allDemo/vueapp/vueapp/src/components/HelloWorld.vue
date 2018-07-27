<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>{{$route.params.worldmsg}}</h2>
    <h2>全局数据{{getNum}}</h2>
    <h2 @click="add">增加全局数据状态</h2>
    <h2 @click="minus">减少全局数据状态</h2>
    <h2 @click="minusactions">异步(actions)全局数据状态</h2>
    <h2 @click="getData">我是axios,点击GET发送请求</h2>
    <h2 @click="postData">我是axios,点击POST发送请求</h2>
    <ul>
      <li class="liitem" v-for="item in items">{{item.title}}</li>
    </ul>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
Vue.prototype.$http = axios
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [],
    }
  },
  computed: {
    getNum:function() {
      // return this.$store.state.num
      return this.$store.getters.getNum
    }
  },
  methods: {
    getData(){
      // var self = this
      // https://cnodejs.org/api/v1/topics?page=1&limit=15
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params: {
          page: 1,
          limit: 10,
        }
      })
       // .then(function(res) {
       //   self.items = res.data.data
       //   console.log(res.data.data);
       // })
       .then(res => {
         this.items = res.data.data
         console.log(res.data.data);
       })
       .catch(function(err) {
         console.log(err);
       })
    },
    postData(){
      // var self = this
      // https://cnodejs.org/api/v1/topics?page=1&limit=15
      this.$http.post(url,qs.stringify({
        page: 1,
        limit: 10,
      }))
       // .then(function(res) {
       //   self.items = res.data.data
       //   console.log(res.data.data);
       // })
       .then(res => {
         this.items = res.data.data
         console.log(res.data.data);
       })
       .catch(function(err) {
         console.log(err);
       })
    },
    add(){
      this.$store.commit('increase')
    },
    minus(){
      this.$store.commit('decrease')
    },
    minusactions(){
      this.$store.dispatch('decreaseAction')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.liitem {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
