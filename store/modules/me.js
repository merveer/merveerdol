import graphConnection from '../../globals/graph'
import { store } from '../../globals/mixins'
import { gql } from '../../globals/utils'

const queryMe = graphConnection.graph.query(gql`{
  Me(userName: "merve-erdol") {
    nameSurname
    title
    userName
    description
    accounts {
      userName
      websites {
        name
        url
      }
    }
  }
}`)

export default store({
  state: {
    me: {},
    //accounts: []
  },
  getters: {
    me: state => state.me,
    //accounts: state => state.accounts
  },
  actions: {
    async getMe ({ commit }) {
      const results = await queryMe()
      commit('SET_ME', results.Me)
    },
    // async getAccounts ({ commit }) {
    //   const accounts = await queryAccounts()
    //   commit('SET_ALL_ACCOUNTS', accounts.allAccounts)
    // },
  },
  mutations: {
    SET_ME (state, results) {
      state.me = results
    },
    // SET_ALL_ACCOUNTS (state, result) {
    //   state.accounts = result
    // }
  }
})
