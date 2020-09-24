import request from '@/util/request'

const state = {}

// getters
const getters = {}

// actions
const actions = {
  createUser(context, data) {
    return request({
      url: `/acl/user/`,
      method: 'post',
      data: data
    }).then((resp) => {
      return resp
    })
  },
  updateUser(context, { id, data }) {
    return request({
      url: `/acl/user/${id}`,
      method: 'put',
      data: data
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
