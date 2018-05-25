<template>
  <div class="mall-list">
    <div v-title>{{ title }}</div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  export default {
    components: {
      Toast
    },
    data () {
      return {
        title: '所有商品',
        token: localStorage.getItem('token')
      }
    },
    watch: {},
    methods: {
    },
    created () {}
  }
</script>
<style lang="scss" scoped>
  .mall-list {
    min-height: 100vh;
    background-color: #fff;
  }
</style>
