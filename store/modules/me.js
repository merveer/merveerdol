import graphConnection from '../../globals/graph'
import { store } from '../../globals/mixins'
import { gql } from '../../globals/utils'

const queryMe = graphConnection.graph.query(gql`($userName: String!) {
  Me(userName: $userName) {
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

const queryMes = graphConnection.graph.query(gql`{
  allMes(filter: {isActiveWorker: true}) {
    userName
    id
    nameSurname
    title
    description
    accounts {
      websites {
        url
        name
      }
    }
  }
}`)

export default store({
  state: {
    me: {},
    mes: {}
  },
  getters: {
    me: state => state.me,
    mes: state => state.mes
  },
  actions: {
    async getMe ({ commit }, userName) {
      const results = await queryMe({ userName })
      commit('SET_ME', results.Me)
    },
    async getAllMes ({ commit }) {
      const mes = await queryMes()
      commit('SET_ALL_MES', mes.allMes)
    },
  },
  mutations: {
    SET_ME (state, results) {
      state.me = results
    },
    SET_ALL_MES (state, result) {
      state.mes = result
    }
  }
})
