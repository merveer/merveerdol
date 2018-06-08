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

const queryAccounts = graphConnection.graph.query(gql`{
  allAccounts{
   website {
     id
     url
   }
  }
}`)

export default store({
  state: {
    me: {},
    allAccounts: {}
  },
  getters: {
    me: state => state.me,
    allAccounts: state => state.allAccounts
  },
  actions: {
    async getMe ({ commit }) {
      const results = await queryMe()
      commit('SET_ME', results.Me)
    }
  },
  async getAccounts ({ commit }) {
    const results = await queryAccounts()
    commit('SET_ACCOUNT', results.allAccounts)
  },
  mutations: {
    SET_ME (state, results) {
      state.me = results
    },
    SET_ACCOUNT (state, results) {
      state.allAccounts = results
    }
  }
})
