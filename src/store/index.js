import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './getters'
import app from './modules/app'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters,
  modules: {
    user,
    app
  }
})
