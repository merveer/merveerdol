import graphql from 'graphql.js'

class GraphQLProvider {
  constructor (url, options) {
    this.url = url
    this.setOptions(options)
  }
  setOptions (options) {
    this.options = options
    this.createGraphQLInstance()
  }
  createGraphQLInstance () {
    this.graph = graphql(this.url, this.options)
  }
  install (Vue) {
    const self = this
    Vue.mixin({
      created () {
        this._graph = self.graph
      }
    })
    Object.defineProperty(Vue.prototype, '$graph', {
      get () {
        return this._graph
      }
    })
  }
}

const API_URL = 'https://api.graph.cool/simple/v1/cji4bl8hm6h0x0119u5g73eo8'

const graphConnection = new GraphQLProvider(API_URL, {
  asJSON: true
})

export default graphConnection
