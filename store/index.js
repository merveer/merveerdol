import Vuex from 'vuex'

import MeStore from '../store/modules/me'

export default () => new Vuex.Store({
  modules: {
    me: MeStore
  }
})
