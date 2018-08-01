<template>
  <div class="authorinfo">
    <div class="authorsummary">
      <div class="topbar">作者</div>
      <router-link :to="{
        name: 'user_info',
        params: {
          name: userinfo.loginname
        }
      }">
        <img :src="userinfo.avatar_url" alt="">
      </router-link>
    </div>
    <div class="recent_topics">
        <div class="topbar">作者最近主题</div>
        <ul>
          <li v-for="list in topiclimitby5">
            <!-- {{list.title}} -->
            <!-- {{list.author.loginname}} -->
            <router-link :to="{
              name: 'post_content',
              params: {
                id: list.id,
                name: list.author.loginname
              }
            }">
              {{list.title}}
            </router-link>
          </li>
        </ul>
    </div>
    <div class="recent_replies">
        <div class="topbar">作者最近回复</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideBar',
  data(){
    return {
      isLoading: false,
      userinfo: {},
    }
  },
  methods: {
    getDate(){
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(response => {
          this.isLoading = false
          // console.log(response);
          this.userinfo = response.data.data
          console.log('this.userinfo', this.userinfo);
        })
        .catch(function (err) {
          console.log(err);
        })
    }
  },
  beforeMount(){
    this.isLoading = true
    this.getDate()
  },
  computed: {
    topiclimitby5(){
      //限制5条
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5)
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .authorsummary, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .authorinfo {
    width: 20%;
    float: right;
    margin-top: 0;
    margin-left: 20px;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 36px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authorsummary .topbar {
    margin-top: 0px;
  }
</style>
