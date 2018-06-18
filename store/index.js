import Vuex from 'vuex'

import i18n from '../store/globals/i18n'

import MeStore from '../store/modules/me'

export default () => new Vuex.Store({
  modules: {
    i18n,
    me: MeStore,
  }
})
