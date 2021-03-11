import request from '@/util/request'

const state = {}

// getters
const getters = {}

// actions
const actions = {
  fetchDir({ commit }, query) {
    console.log(query)
    return request({
      url: `/storage/file`,
      method: 'get',
      params: query
    }).then((resp) => {
      return resp
    })
  }
}

// mutations
const mutations = {}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
