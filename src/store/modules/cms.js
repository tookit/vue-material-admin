import request from '@/util/request'

const state = {}

// getters
const getters = {}

// actions
const actions = {
  fetchPost(context, query) {
    return request({
      url: `/cms/post/`,
      method: 'get',
      params: query,
    })
  },
  createPost(context, data) {
    return request({
      url: `/cms/post/`,
      method: 'post',
      data: data,
    }).then((resp) => {
      return resp
    })
  },
  updatePost(context, { id, data }) {
    return request({
      url: `/cms/post/${id}`,
      method: 'put',
      data: data,
    }).then((resp) => {
      return resp
    })
  },
  getPostById(context, id) {
    return request({
      url: `/cms/post/${id}`,
      method: 'get',
    }).then((resp) => {
      return resp
    })
  },
}

// mutations
const mutations = {}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}
