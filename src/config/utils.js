/**
 * 禁用微信右上角的分享功能
 * @return {[type]} [description]
 */
export function hideWeixinShare () {
  function onBridgeReady () {
    window.WeixinJSBridge.call('hideOptionMenu')
  }
  if (typeof window.WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady()
  }
}

/**
 * 联系客服demo，点击跳转：
   import ysf from '../../plugins/qiyukf'
   import { qiyukf } from '../../config/utils'
   methods: {
     linkCustomService () {
       qiyukf()
     }
   }
   用户ID，localStorage存在了verify | se-password | empty-page | bind-phone
 */
export function qiyukf () {
  // 拿到用户登录之后的用户名和手机号码
  var userName = localStorage.getItem('userName')
  var telphone = localStorage.getItem('telephone')
  var userId = localStorage.getItem('userId')

  console.log('namePhone ', userName, telphone, userId)

  // 必填项：用户名、电话
  var namePhone = {
    uid: userId,  // 必填，拿登录之后的用户id
    email: '', // 非必填
    name: userName, // *必填，用户名
    mobile: telphone // *必填，电话
  }

  // 配置用户信息
  window.ysf.config(namePhone)
  location.href = window.ysf.url()
}

/**
 * 校验是否合法手机号
 * @param  {[type]} phone [description]
 * @return {[type]}       [description]
 */
export const checkPhone = (phone) => {
  if (/^1[34578]\d{9}$/.test(phone)) {
    return true
  } else {
    return false
  }
}

/**
 * 获取 url 参数
 * @param  {[type]} name [description]
 * @param  {[type]} link [description]
 * @return {[type]}      [description]
 */
export const getUrlKey = (name, link = location.href) => {
  const reg = new RegExp(`(?:^|&|\\?)${name}=([^&]*)(?:&|$)`)
  const r = link.substring(link.indexOf('?') + 1).match(reg)
  if (r) {
    return decodeURIComponent(r[1])
  }
  return ''
}

/**
 * 获取渠道号
 */
export const getChannelCode = () => {
  var channelCode = getUrlKey('channel')

  if (!channelCode) {
    channelCode = localStorage.getItem('channelCode')
  }
  // console.log('channelCode', channelCode)
  return channelCode
}

/**
 * 时间格式化
 * @param  {[type]} time   [description]
 * @param  {[type]} format [description]
 * @return {[type]}        [description]
 */
export const formatTimeString = (time, format) => {
  var format1 = format1 || 'yyyy-MM-dd'
  var t = new Date(time)
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format1.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear())
      case 'MM':
        return tf(t.getMonth() + 1)
      case 'mm':
        return tf(t.getMinutes())
      case 'dd':
        return tf(t.getDate())
      case 'HH':
        return tf(t.getHours())
      case 'ss':
        return tf(t.getSeconds())
    }
  })
}

/**
 * 跳转登录，登录完再回来
 */
export const goLogin = (url = location.href) => {
  location.href = `/src/views/verify.vue?redirect=${encodeURIComponent(url)}`
}

/**
 * 去掉微信授权或分享后url附加的"//?code=xxxx" "//?from=xxxx" 之类的东西, 返回原本的url
 * @param {String} url
 * @return {String} 原本的url
 */
export function trimShareUrl (url) {
  return url.replace(/\/+\?(code=|from=).[^#]+/, '/')
}

