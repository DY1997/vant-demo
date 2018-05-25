import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
import weixin from './modules/weixin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    weixin
  }
})
