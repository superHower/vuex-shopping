<template>
  <div class="box">
    <h2>Son2 子组件 - map调用</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeCountAction(888)">1秒后改成888</button>
    <button @click="changeTitle('前端程序员')">改标题</button>
    <hr>
    <div>mapGetters: 使用{{ filterList }}</div>
    <hr>
    <!-- 访问模块中的state -->
    <div>{{ userInfo.name }}</div>
    <div>{{ theme }}</div>
    <hr>
    <!-- 访问模块中的state -->
    <div>user模块的数据：{{ userInfo.name }} - {{ desc }}</div>
    <button @click="setUser({ name: 'xiaoli', age: 80 })">更新个人信息</button>
    <button @click="setUserSecond({ name: 'xiaoli', age: 80 })">一秒后更新信息</button>

    <div>setting模块的数据：{{ theme }} - {{ desc }}</div>
    <button @click="setTheme('skyblue')">更新主题</button>
    <hr>
    <!-- 访问模块中的getters -->
    <div>{{ UpperCaseName }}</div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAction']),
    ...mapMutations('setting', ['setTheme']),
    ...mapMutations('user', ['setUser']),
    ...mapActions('user', ['setUserSecond'])
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
