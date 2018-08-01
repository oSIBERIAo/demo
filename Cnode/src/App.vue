<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <Header></Header>
    <div class="main">
      <!-- <PostList></PostList> -->

      <router-view name="main"></router-view>
      <router-view name="slidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'

export default {
  name: 'App',
  components: {
    Header,
    PostList
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
  background-color: #e1e1e1;
}
#app {
  background-color: #e1e1e1;
  flex-grow: 1;
}
#app {
  padding: 0 0 30px 0;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  width: 80%;
  margin: 20px auto 20px;
  display: flex;
}

</style>
