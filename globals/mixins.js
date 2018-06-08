import merge from 'webpack-merge'

export function store (object) {
  return merge(object, {
    namespaced: true
  })
}

export default {
  store
}
