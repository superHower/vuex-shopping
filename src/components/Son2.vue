<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
<!--    <button @click="changeCountAction(888)">1秒后改成888</button>-->
    <button @click="changeTitle('前端程序员')">改标题</button>
    <hr>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    subCount (n) {
      this.$store.commit('subCount', n)
    },

    changeTitle () {
      this.$store.commit('changeTitle', '黑马程序员')
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
