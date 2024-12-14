import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user.js'
export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
