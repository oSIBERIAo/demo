<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <router-view></router-view>
    <list/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import list from './components/list'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  components: {
    list
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
