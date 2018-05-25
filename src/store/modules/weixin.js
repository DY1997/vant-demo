import * as types from '../mutation-types'

// each Vuex instance is just a single state tree.
const state = {
  weixinUser: {
    info: {
      isRegist: 0
    }
  },
  hasWeixinAuth: false
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  [types.SET_WEIXIN_USER] (state, user) {
    state.weixinUser = user
  },
  [types.SET_REGIST] (state, isRegist) {
    state.weixinUser.info.isRegist = isRegist
  },
  [types.SET_WEIXIN_AUTH] (state, auth) {
    state.hasWeixinAuth = auth
  }

}

// getters are functions
const getters = {
  weixinUser: () => state.weixinUser,
  isRegist: () => state.weixinUser.info.isRegist,
  hasWeixinAuth: () => state.hasWeixinAuth
}

export default {
  state,
  getters,
  mutations
}
