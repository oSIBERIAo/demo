import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//创建状态仓库
export default new Vuex.Store({
  state: {
    num: 10,
  },
  mutations: {
    increase: function(state) {
      state.num++
    },
    decrease(state) {
      state.num--
      // Mutation 必须是同步函数??
      // setTimeout(function () {
      //   state.num--
      // },2000)
    },
    // increase(state) {
    //
    // },
  },
  actions: {
    //actions只能对mutations进行操作
    decreaseAction: function(context) {
      setTimeout(function () {
        context.commit('decrease')
        context.commit('decrease')
      },1000)
    }
  },
  getters: {
    getNum(state){
      return state.num > 0 ? state.num : 0
    }
  },
})
