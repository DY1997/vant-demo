<template>
  <div>
    <div v-title>{{ title }}</div>
    <router-view  v-if="!$route.meta.keepAlive" @route-data-loaded="title"></router-view>
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"  @route-data-loaded="title"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui'
import { weixinConfig } from '@/config/weixin-config'

export default {
  name: 'app',
  data () {
    return {
      title: '拾号'
    }
  },
  mounted () {
    // 微信JSSDK 注入权限验证配置
    weixinConfig()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- app 要去掉 scoped，否则引入的共同样式带不到子组件去 -->
<style lang="scss">
 @import "./styles/config";
 @import "./styles/common";
 @import "./styles/public";
</style>
