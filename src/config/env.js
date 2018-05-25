/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

// 域名地址
let API_PATH = '/proxy-api'

let baseUrl = ''

// 生存哈希值http，例如
// http://localhost:8888/#/test
let routerMode = 'hash'
let imgBaseUrl = ''

if (process.env.NODE_ENV === 'development') {
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://cangdu.org:8001'
}

export {
  API_PATH,
  baseUrl,
  routerMode,
  imgBaseUrl
}
