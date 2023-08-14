import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)// 插件安装

const store = new Vuex.Store({
  strict: true, // 严格模式 (直接修改数据会报错 => 上线时需要关闭)

  state: {
    title: '仓库大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: { // 第一个参数，都是 state
    addCount (state, obj) {
      state.count += obj.count // 修改数据
    },
    subCount (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  },

  actions: {
    changeCountAction (context, num) { // context.commit('mutation名字', 额外参数)
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  getters: { // 必须有返回值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  modules: {
    user,
    setting
  }
})

// 导出给main.js使用
export default store
