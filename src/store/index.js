import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default () => {
  let store = new Vuex.Store({
    state: {
      name: 'lee',
      age: 18,
    },
    mutations: {
      changeName(state) {
        state.name = 'li'
      },
    },
    actions: {
      changeName({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('changeName')
            resolve()
          }, 1000)
        })
      },
    },
  })
  if(typeof window !== 'undefined' && window.__INITIAL_STATE__){
    store.replaceState(window.__INITIAL_STATE__)
  }
  return store
}
