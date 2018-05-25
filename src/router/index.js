import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMode } from '../config/env'
import { shareDefault } from '@/config/weixin-config'
import { weixinAuth } from '@/config/weixin-auth'
// import { getUrlKey } from '@/config/utils'
import store from '@/store'
// 主路由
import mainRoutes from './main-routes'
// 电商
import electricity from './electricity-supplier'

// 嵌套路由
import App from '../App'
// 解析url，拿到spaceId，存储在localStorage
// let spaceId = decodeURIComponent(location.href).split('#')[1].split('/')[1]
// let link = decodeURIComponent(location.href)
// let userType = getUrlKey('userType', link)
// localStorage.setItem('userType', userType)
// localStorage.setItem('spaceId', spaceId)
var routes = [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 主路由配置
  ]
}]
// 主路由
routes[0].children.push(...mainRoutes)
// 主路由
routes[0].children.push(...electricity)
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  // 微信授权  || process.env.NODE_ENV === 'development'
  if (to.meta.requireWeixinAuth === false || process.env.NODE_ENV === 'development') { // 默认每个页面都需要微信授权, 只有明确配置不用微信授权的页面才不用微信授权, process.env.NODE_ENV === 'development'用于开发环境不用授权, 开发环境如果需要授权把process.env.NODE_ENV === 'development'条件去掉
    // localStorage.setItem('token', 'b4f14e4dbe85b787bf27b7ecd643f2a7')
    next()
  } else {
    if (store.getters.hasWeixinAuth === true) {
      next()
    } else {
      weixinAuth({
        redirectUrl: to.fullPath
      })
    }
  }
})

router.afterEach((to, from) => {
  shareDefault({
    shareLink: location.origin + location.pathname + '#' + to.fullPath
  })
  // console.log('PUSH===>>>' + location.pathname + '#' + to.fullPath)
  window._hmt.push(['_setAutoPageview', false])
  window._hmt.push(['_trackPageview', location.pathname + '#' + to.fullPath])
})

export default router
