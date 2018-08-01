<template>
  <div class="header">
    <router-link :to="{name: 'root',}">
      <img src="../assets/cnodejs_logo.svg" alt="">
    </router-link>
    <ul>
      <li>
        <router-link :to="{
          name: 'root',
        }">
         <a href="#">首页</a>
        </router-link>
      </li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登陆</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  max-width: 120px;
  /* margin: 8px 0 9px 0; */
  margin-left: 50px;
  margin-top: 5px;
}
.header {
  /* display: flex; */
  height: 50px;
  padding: 5px;
  /* width: 90%; */
  background-color: #333333;
}
ul {
  /* display: flex; */
  float: right;
  list-style: none;
  margin-top: -2px;
  margin-right: 50px;
}
li {
  display: inline-block;
  padding: 10px 15px;
}
a {
  text-decoration: none;
  color: #ccc;
  font-size: 13px;
}
/* h1, h2 {
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
a {
  color: #42b983;
} */
</style>
