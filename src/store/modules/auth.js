import request from '@/util/request'

const state = {
  access_token: null,
  expires_in: 3600,
  token_type: 'bearer'
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
    }).then((resp) => {
      commit('SET_LOGIN', resp)
    })
  },
  logout({ commit }) {
    commit('SET_ACCESS_TOKEN', null)
  }
}
const mutations = {
  SET_LOGIN(state, { access_token, expires_in }) {
    state.access_token = access_token
    state.expires_in = expires_in
  },
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
