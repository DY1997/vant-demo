/**
 * 主路由配置
 */
const routes = []
const subPath = ''

/**
 * 订单结算
 */
routes.push({
  path: subPath + '/mall-settle',
  component: resolve => require(['@/views/mall-settle/mall-settle.vue'], resolve)
  // meta: {
  //   // requireAuth: true // 需要登录
  //   // requireWeixinAuth: false
  // }
})

/**
 * 选择门店
 */
routes.push({
  path: subPath + '/mall-store',
  component: resolve => require(['@/views/mall-store/mall-store.vue'], resolve)
  // meta: {
  //   // requireAuth: true // 需要登录
  //   // requireWeixinAuth: false
  // }
})

/**
 * 订单生成
 */
routes.push({
  path: subPath + '/mall-generate',
  component: resolve => require(['@/views/mall-generate/mall-generate.vue'], resolve)
  // meta: {
  //   // requireAuth: true // 需要登录
  //   // requireWeixinAuth: false
  // }
})

/**
 * 订单详情
 */
routes.push({
  path: subPath + '/mall-order-detail',
  component: resolve => require(['@/views/mall-order-detail/mall-order-detail.vue'], resolve)
  // meta: {
  //   // requireAuth: true // 需要登录
  //   // requireWeixinAuth: false
  // }
})

/**
 * 电商平台商品列表
 */
routes.push({
  path: subPath + '/mall-success',
  component: resolve => require(['@/views/mall-success/mall-success.vue'], resolve)
  // meta: {
  //   // requireAuth: true // 需要登录
  //   // requireWeixinAuth: false
  // }
})

/**
 * 电商平台商品详情
 */
routes.push({
  path: subPath + '/mall-detail',
  component: resolve => require(['@/views/mall-detail/mall-detail.vue'], resolve)
  // meta: {
  //   // requireAuth: true // 需要登录
  //   // requireWeixinAuth: false
  // }
})

export default routes
