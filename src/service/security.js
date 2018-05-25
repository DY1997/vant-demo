// security
import fetch from '../config/fetch'
import { API_PATH } from '../config/env'
/**
 * 获取appId
 */
export const getAppId = (data) => fetch(API_PATH + '/index.php?s=WechatJs/getAppID', data, 'POST')

/**
 * 微信jsapi
 */
export const getWeixinConfig = () => fetch(API_PATH + '/index.php?s=WechatJs/getJsSign', {
  targetUrl: (location.origin + location.pathname + location.search).replace('&', '%26')  // + location.search 防止微信登录或分享时"?code=xxxx..."导致验证不通过
}, 'POST')

/**
 * 微信授权
 */
export const securityAuthorize = (data) => fetch(API_PATH + '/index.php?s=WechatJs/getOauth', data, 'POST')
