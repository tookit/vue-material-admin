import Vue from 'vue'

const io = require('socket.io-client')

const state = {
  socket: null,
  clientId: null,
  messages: [],
  clients: new Set(),
  // {username: '', status: '', clientId}
  chatUsers: []
}

// getters
const getters = {
  getClientId: (state) => state.clientId,
  getMessages: (state) => state.messages,
  getChatUsers: (state) => state.chatUsers,
  getStatusByName: (state) => (username) => {
    const user = state.chatUsers.find((item) => item.username === username)
    return user.status ? 'online' : 'offline'
  }
}

// actions
const actions = {
  initSocket({ commit, dispatch, rootState }) {
    const socket = io.connect(process.env.VUE_APP_SOCKET, {
      reconnectionAttempts: 5
    })
    socket.on('connect', () => {
      const user = { username: rootState.auth.username }
      commit('INIT_CONNECT', socket)
      commit('UPDATE_SELF_STATUS', 'online')
      dispatch('joinRoom', user)
    })
    socket.on('join', (users) => {
      dispatch('pushJoin', users)
    })
    socket.on('message', ({ username, text, createAt }) => {
      dispatch('pushMessage', { username, text, createAt })
    })
    socket.on('leave', (clientId) => {
      dispatch('pushLeave', clientId)
    })
  },
  closeConnection({ commit, state }) {
    if (state.socket) {
      state.socket.close()
      commit('CLOSE_CONNECT')
    }
  },
  pushMessage({ commit }, text) {
    commit('UPDATE_MESSAGE_LIST', text)
  },
  sendMessage({ commit }, message) {
    commit('SEND_MESSAGE', message)
    commit('UPDATE_MESSAGE_LIST', message)
  },
  pushJoin({ commit }, users) {
    commit('UPDATE_USER_LIST', users)
  },
  pushLeave({ commit }, users) {
    commit('UPDATE_USER_LIST', users)
  },
  joinRoom({ commit }, { username }) {
    commit('JOIN_ROOM', { username })
  }
}

// mutations
const mutations = {
  INIT_CONNECT(state, socket) {
    state.socket = socket
    state.clientId = socket.id
    state.clients.add(socket.id)
  },
  CLOSE_CONNECT(state) {
    state.socket = null
    state.clientId = null
  },
  UPDATE_MESSAGE_LIST(state, message) {
    state.messages.push(message)
  },
  UPDATE_USER_LIST(state, users) {
    if (users.length > state.chatUsers.length) {
      state.chatUsers = users
    } else {
      const online = users.map((item) => item.username)
      state.chatUsers.forEach((item) => {
        if (online.includes(item.username)) {
          item.status = 1
        } else {
          item.status = 0
        }
      })
    }
  },

  UPDATE_USER_STATUS(state, { clientId, status }) {
    const index = state.chatUsers.findIndex(
      (item) => item.clientId === clientId
    )
    if (index) {
      console.log(index)
      const user = state.chatUsers[index]
      if (user) {
        user.status = status
        Vue.set(state.chatUsers, index, user)
      }
    }
  },
  SEND_MESSAGE(state, message) {
    state.socket.emit('message', message)
  },
  JOIN_ROOM(state, { username }) {
    state.socket.emit('join', {
      username: username,
      clientId: state.clientId,
      status: 1
    })
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
