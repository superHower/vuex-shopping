<template>
  <div class="box">
    <h2>Son1 子组件 - store调用数据</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="handleChange">一秒后修改成666</button>
    <button @click="changeFn">改标题</button>

    <hr>
    <div>store直接使用state: {{ $store.state.list }}</div>
    <div>getters返回特定state: {{ $store.getters.filterList }}</div>

    <hr>
     测试访问模块中的state - 原生
    <div>user模块 - name: {{ $store.state.user.userInfo.name }}</div>
    <div>user模块 - age: {{ $store.state.user.userInfo.age }}</div>
    <button @click="updateUser">更新个人信息</button>
    <button @click="updateUser2">一秒后更新信息</button>

    <div>{{ $store.state.setting.theme }}</div>
    <button @click="updateTheme">更新主题色</button>
    <hr>
    <!-- 测试访问模块中的getters - 原生 -->
    <div>{{ $store.getters['user/UpperCaseName'] }}</div>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    // 调用mutations
    handleAdd (n) {
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    changeFn () {
      this.$store.commit('changeTitle', '传智教育')
    },
    // 调用action
    handleChange () {
      this.$store.dispatch('changeCountAction', 666)
    },
    updateUser () {
      // $store.commit('模块名/mutation名', 额外传参)
      this.$store.commit('user/setUser', {
        name: 'hower',
        age: 45
      })
    },
    updateUser2 () {
      // 异步处理；调用action dispatch
      this.$store.dispatch('user/setUserSecond', {
        name: 'pickure',
        age: 28
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
