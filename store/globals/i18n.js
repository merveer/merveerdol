export default {
    namespaced: true,
    state: {
      locale: 'tr'
    },
    getters: {
      locale: state => state.locale
    },
    actions: {
      set: ({ commit }, locale) => commit('SET', locale)
    },
    mutations: {
      SET (state, locale) {
        state.locale = locale
      }
    }
  }