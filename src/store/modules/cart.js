import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, payload) {
      const goods = state.list.find(item => item.id === payload.id)
      goods.count = payload.newCount
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, payload) {
      await axios.patch(`http://localhost:3000/cart/${payload.id}`, {
        count: payload.newCount
      })
      context.commit('updateCount', {
        id: payload.id,
        newCount: payload.newCount
      })
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  }
}
