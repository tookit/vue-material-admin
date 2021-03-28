import Vue from 'vue'

const io = require('socket.io-client')

const state = {
  socket: null,
  clientId: null,
  socketConnected: 0,
  messages: [],
  chatUsers: [], // {username: '', status: '', clientId, 'device'}
}

// getters
const getters = {
  getClientId: (state) => state.clientId,
  getSocket: (state) => state.socket,
  getMessages: (state) => state.messages,
  getChatUsers: (state) => {
    return state.chatUsers.map((item) => {
      let ip = item.ip
      item.ip = ip ? ip.replace('::ffff:', '') : ''
      return item
    })
  },
  getStatusByName: (state) => (username) => {
    const user = state.chatUsers.find((item) => item.username === username)
    return user.status ? 'online' : 'offline'
  },
}

// actions
const actions = {
  initSocket({ commit, dispatch, rootState }) {
    const socket = io.connect(process.env.VUE_APP_SOCKET, {
      reconnectionAttempts: 5,
      transports: ['websocket'],
    })
    socket.on('connect', () => {
      const user = { username: rootState.auth.username }
      commit('SET_SOCKET', socket)
      dispatch('joinRoom', user)
    })
    socket.on('join', (users) => {
      dispatch('pushJoin', users)
    })
    socket.on('message', ({ username, text, createdAt }) => {
      dispatch('pushMessage', { username, text, createdAt })
    })
    socket.on('leave', (clientId) => {
      dispatch('pushLeave', clientId)
    })
  },
  closeSocket({ commit, state }) {
    if (state.socket) {
      state.socket.close()
      commit('CLOSE_CONNECT')
    }
  },
  pushMessage({ commit, dispatch }, text) {
    commit('UPDATE_MESSAGE_LIST', text)
  },
  sendMessage({ commit, rootState }, text) {
    const message = {
      text: text,
      username: rootState.auth.username,
      createdAt: Date.now(),
    }
    commit('SEND_MESSAGE', message)
    commit('UPDATE_MESSAGE_LIST', message)
  },
  pushJoin({ commit }, user) {
    console.log(user)
    user.status = 1
    commit('UPDATE_USER_LIST', user)
  },
  pushLeave({ commit }, user) {
    user.status = 0
    commit('UPDATE_USER_LIST', user)
  },
  joinRoom({ commit }, user) {
    commit('JOIN_ROOM', user)
  },
}

// mutations
const mutations = {
  INIT_USER(state, data) {
    state.chatUsers = data.map((item) => {
      return {
        username: item.username,
        status: 0,
      }
    })
  },
  SET_SOCKET(state, socket) {
    state.socket = socket
    state.socketConnected = socket.conencted
    state.clientId = socket.id
  },
  CLOSE_CONNECT(state) {
    state.socket = null
    state.clientId = null
  },
  JOIN_ROOM(state, user) {
    state.socket.emit('join', user)
  },
  UPDATE_MESSAGE_LIST(state, message) {
    state.messages.push(message)
  },
  UPDATE_USER_LIST(state, user) {
    const index = state.chatUsers.findIndex((item) => item.username === user.username)
    if (index === -1) {
      state.chatUsers.push(user)
    } else {
      Vue.set(state.chatUsers, index, user)
    }
  },
  SEND_MESSAGE(state, message) {
    state.socket.emit('message', message)
  },
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}
