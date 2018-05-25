// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'

import store from './store'
import FastClick from 'fastclick'
// 引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// 引入Mint全部组件
import Mint from 'mint-ui'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(Mint)
Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// Vue.component('scroller', Scroller)
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
