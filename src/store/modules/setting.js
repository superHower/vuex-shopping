// setting模块
const state = {
  theme: 'light', // 主题色
  desc: 'demo'
}
const mutations = {
  setTheme (state, newTheme) {
    state.theme = newTheme
  }
}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
