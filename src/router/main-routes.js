/**
 * 主路由配置
 */
const routes = []
const subPath = ''

// 默认主页跳转
routes.push({
  path: subPath,
  redirect: '/test'
})

// 普通用户微信授权页
routes.push({
  path: subPath + '/weixin-auth',
  component: resolve => require(['@/views/weixin-auth/weixin-auth.vue'], resolve),
  meta: {
    requireWeixinAuth: false // 授权页中转页不用微信授权配置
  }
})

// 普通用户微信授权页
routes.push({
  path: subPath + '/test',
  component: resolve => require(['@/views/test/test.vue'], resolve),
  meta: {
    requireWeixinAuth: false // 授权页中转页不用微信授权配置
  }
})

export default routes
