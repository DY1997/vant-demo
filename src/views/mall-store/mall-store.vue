<template>
  <div class="team-meet">
    <div v-title>{{ title }}</div>


    <!--加载中-->
    <loading v-show="showLoading" loadingText="加载中..."></loading>

  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  import loading from '../../components/common/loading.vue'

  export default {
    name: 'team-meet',
    components: {
      Toast,
      loading
    },
    data () {
      return {
        title: 'test',
        token: localStorage.getItem('token')
      }
    },
    mounted () {
    },
    created () {
    },
    methods: {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scosped>
  .team-meet {
    min-height: 100vh;
    background: #fff;

    .chose-team{
      width: 100%;
      height: 26px;
      line-height: 26px;
      text-align: center;
      display: inline-block;
      z-index: 1;

    }

  }
</style>
