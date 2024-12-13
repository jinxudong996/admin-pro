import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user.js'
export default createStore({
  getters,
  modules: {
    user
  }
})
