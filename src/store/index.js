import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: auth.getToken()
  },
  mutations: {
    /**
     * 登录成功，调用 mutation 更新容器中的 user 的状态
     */
    setToken (state, data) {
      // 将数据
      state.token = data

      // 将数据放到本地存储
      auth.setToken(data)
    }
  },
  actions: {

  }

})
