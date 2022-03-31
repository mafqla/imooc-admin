import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './getters'
import app from './modules/app'
import theme from './modules/theme.js'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters,
  modules: {
    user,
    app,
    theme
  }
})
