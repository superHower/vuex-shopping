<template>
  <div class="app-container">
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 -->
    <cart-item v-for="item in list" :key="item.id" :item="item"></cart-item>

    <!-- Foote 区域 -->
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import CartHeader from '@/components/cart-header.vue'
import CartFooter from '@/components/cart-footer.vue'
import CartItem from '@/components/cart-item.vue'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  created () {
    this.getList()
  },
  computed: {
    ...mapState('cart', ['list'])
  },
  methods: {
    ...mapActions('cart', ['getList'])
  },
  components: {
    CartHeader,
    CartFooter,
    CartItem
  }
}
</script>

<style lang="less" scoped>
.app-container {
  border: #0c63e4 solid 3px;
  border-radius: 10px;
  width: 500px;
  padding: 50px 0;
  font-size: 14px;
  margin: 0 auto;
}
</style>
