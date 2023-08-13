<template>
  <div class="about">
    <h1>
      根组件
      - {{ title }}
      - {{ count }}
    </h1>
    <input :value="count" @input="handleInput" type="text">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    handleInput (e) {
      const num = +e.target.value
      this.$store.commit('changeCount', num)
    }
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style scoped>
.about {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
