import graphConnection from '../../globals/graph'
import { store } from '../../globals/mixins'
import { gql } from '../../globals/utils'

const queryMe = graphConnection.graph.query(gql`{
  Me(userName: "merve-erdol") {
    nameSurname
    title
    websites {
      name
      url
    }
  }
}`)

export default store({
  state: {
    me: {},
  },
  getters: {
    me: state => state.me,
  },
  actions: {
    async getMe ({ commit }) {
      const results = await queryMe()
      commit('SET_ME', results.Me)
    }
  },
  mutations: {
    SET_ME (state, results) {
      state.me = results
    }
  }
})
