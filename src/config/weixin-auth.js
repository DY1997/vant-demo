// 微信授权
import { getAppId } from '@/service'

// 微信登录，默认跳转到个人中心
export function weixinAuth ({redirectUrl}) {
  let appID
  getAppId().then(res => {
    if (res.status === 1) {
      appID = res.info
      localStorage.setItem('appID', appID)
      var stateCode = 'weixin' // 正式环境，代替state的参数1001

      // 域名和路径
      var yuming = location.origin + location.pathname
      // console.log('location.origin', location.origin)
      console.log('location.pathname', location.pathname)
      console.log('yuming', yuming)
      console.log('redirectUrl', redirectUrl)
      var REDIRECT_URI = encodeURIComponent(yuming + '#' + '/weixin-auth?redirect=' + redirectUrl)
      // REDIRECT_URI = encodeURIComponent(yuming + '#/' + localStorage.getItem('spaceId') + '/weixin-auth?redirect=' + redirectUrl)
      let authpath = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_userinfo&state=${stateCode}#wechat_redirect`
      // location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${jssdkAppid}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_userinfo&state=${stateCode}#wechat_redirect`
      location.href = authpath
    }
  })
}
