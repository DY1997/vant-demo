<template>
  <div>
    <div v-title>{{ title }}</div>
    <loading loadingText="授权中..."></loading>
  </div>
</template>

<script>
import { getUrlKey, getChannelCode } from '@/config/utils'
import { securityAuthorize } from '@/service'
import { Toast } from 'mint-ui'
import { mapMutations } from 'vuex'
import loading from '@/components/common/loading.vue'

export default {
  components: {
    loading: loading
  },
  data () {
    return {
      title: '微信授权',
      code: '',
      state: '',
      channelCode: '', // 拿到channelCode
      redirectRouter: '', // 用来存放重定向地址，页面：/project-detail
      type: ''
    }
  },

  created () {
    // 接口需要channel
    this.channelCode = getChannelCode()

    this.code = getUrlKey('code')
    // console.log('this.code', this.code)

    // 拿到'？'之后的地址
    this.redirectRouter = encodeURI(this.$route.query.redirect || '')
    console.log('this.redirectRouter', this.redirectRouter)
    console.log('this.redirectRouter.indexOf(\'/manager/\')', this.redirectRouter.indexOf('/manager/'))
    this.getWeixinLogin()
  },
  methods: {
    getWeixinLogin () {
      securityAuthorize({
        code: this.code
      }).then(res => {
        if (res.status === 1) {
//          Toast(res.info.token)
          // 储存或更新 token
          localStorage.setItem('token', res.info.token)
          this.SET_WEIXIN_USER(res)
          this.SET_WEIXIN_AUTH(true)
          this.$router.replace(this.redirectRouter)
        } else {
//          Toast(res.msg)
          Toast('授权失败')
          this.$router.replace(this.redirectRouter)
        }
      })
    },
    ...mapMutations([
      'SET_WEIXIN_USER',
      'SET_WEIXIN_AUTH'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .transfer-station {}
</style>
