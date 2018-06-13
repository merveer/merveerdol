const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/merveerdol/'
  }
} : {}
const graphql = require('graphql.js')
const forEach = require('lodash/forEach')
const graph = graphql("https://api.graph.cool/simple/v1/cji4bl8hm6h0x0119u5g73eo8", {
  asJSON: true
})

const queryMes = graph(`query {
  {
    allMes {
      id
      title
      nameSurname
      userName
      isActiveWorker
      createdAt
      accounts {
        websites {
          url
          name
        }
      }
    }
  }
}`)

module.exports = {
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: 'merveerdol.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    async routes () {
      const urls = []
      const results = await queryMes()
      forEach(results.allMes, function (me) {
        urls.push({
          route: `/${me.userName}`,
          payload: me
        })
      })
      return urls
    }
  }
}
