import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSpinner: false
  },
  mutations: {
    toggleSpinner(state) {
      state.showSpinner = !state.showSpinner;
    }
  },
  actions: {
  },
  modules: {
  }
})
