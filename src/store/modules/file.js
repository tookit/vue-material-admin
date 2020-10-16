import request from '@/util/request'

const state = {}

// getters
const getters = {}

// actions
const actions = {
  fetchDir(context) {
    return request({
      url: `/storage/dir`,
      method: 'get'
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
