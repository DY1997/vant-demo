// 微信分享功能
var wx = require('weixin-js-sdk')
import { trimShareUrl } from '@/config/utils'
import { getWeixinConfig } from '@/service'
import { Toast } from 'mint-ui'

// import defaultLogo from 'src/img/icon/team-logo.png'

let isDebug = false
if (process.env.NODE_ENV === 'development') {
  isDebug = true
} else {
  isDebug = false
}
function weixinConfig () {
  // 调用后端接口，配置以下信息
  getWeixinConfig().then((res) => {
    if (res.status === 1) {
      // 储存appid，用于
      localStorage.setItem('jssdkAppid', res.info.appId)
      wx.config({
        debug: isDebug, // 打开提示信息，正式环境需要关闭
        appId: res.info.appId,
        timestamp: res.info.timestamp,
        nonceStr: res.info.nonceStr,
        signature: res.info.signature,
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'hideMenuItems',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'showAllNonBaseMenuItem',
          'translateVoice',
          'startRecord',
          'stopRecord',
          'onRecordEnd',
          'playVoice',
          'pauseVoice',
          'stopVoice',
          'uploadVoice',
          'downloadVoice',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard'
        ]
      })
      wx.checkJsApi({
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'hideMenuItems',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'showAllNonBaseMenuItem',
          'translateVoice',
          'startRecord',
          'stopRecord',
          'onRecordEnd',
          'playVoice',
          'pauseVoice',
          'stopVoice',
          'uploadVoice',
          'downloadVoice',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard'
        ],
        success: function (res) {
          console.log('checkJsApi:', res)
        }
      })
    }
  })
  getlocation()
  shareDefault({})
}
function getlocation () {
  wx.ready(function () {
    wx.getLocation({
      type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function (res) {
        // Toast(JSON.stringify(res))
        console.log('getLocation: ' + res)
        var latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
        localStorage.setItem('latitude', latitude)
        localStorage.setItem('longitude', longitude)
        // var speed = res.speed // 速度，以米/每秒计
        // var accuracy = res.accuracy // 位置精度
      },
      cancel: function (res) {
        localStorage.setItem('latitude', '')
        localStorage.setItem('longitude', '')
      }
    })
  })
}
// 默认的分享设置
function shareDefault ({shareLink = location.origin}) {
  // console.log('shareLink', shareLink)location.origin
  // alert('shareLink:' + shareLink)
  let shareTitle = '拾号体育，约球就这么简单！'
  let shareDesc = '一键预定球场、约战、竞猜，爱上运动新生活'
  // let shareImg = defaultLogo
  localStorage.setItem('defaultShareLink', shareLink)
  let link = location.origin + location.pathname + location.search
  wx.ready(function () {
    // 分享朋友圈
    wx.onMenuShareTimeline({
      title: shareTitle,
      desc: shareDesc,
      // link: trimShareUrl(shareLink),
      link: trimShareUrl(link),
      // imgUrl: shareImg,
      success: function () {
        Toast('分享成功啦')
      },
      cancel: function () {
        Toast('分享失败')
      }
    })

    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: shareTitle,
      desc: shareDesc,
      // link: trimShareUrl(shareLink),
      link: trimShareUrl(link),
      // imgUrl: shareImg,
      success: function () {
        // Toast(shareLink)
        Toast('分享成功啦')
      },
      cancel: function () {
        Toast('分享失败')
      }
    })
  })
}

export default weixinConfig
export { weixinConfig, wx, shareDefault }
