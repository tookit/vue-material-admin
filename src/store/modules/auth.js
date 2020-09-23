import request from '@/util/request'

const state = {
  access_token: null
}
const getters = {
  getAccessToken: (state) => {
    return state.access_token
  }
}
const actions = {
  login({ commit }, { username, password }) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: {
        email: username,
        password
      }
    }).then(({ access_token }) => {
      commit('SET_ACCESS_TOKEN', access_token)
    })
  },
  logout({ commit }) {
    commit('SET_ACCESS_TOKEN', null)
  }
}
const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
