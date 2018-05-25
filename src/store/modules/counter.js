import * as types from '../mutation-types'

// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit(types.INCREMENT),
  decrement: ({ commit }) => commit(types.DECREMENT),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit(types.INCREMENT)
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.INCREMENT)
        resolve()
      }, 1000)
    })
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  getCount: () => state.count
}

export default {
  state,
  getters,
  actions,
  mutations
}
