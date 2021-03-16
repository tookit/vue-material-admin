import Vue from 'vue'

const io = require('socket.io-client')

const state = {
  socket: null,
  clientId: null,
  messages: [],
  clients: new Set(),
  // user clientId as username
  clientUsers: [],
  // {username: '', status: '', clientId, 'device'}
  chatUsers: []
}

// getters
const getters = {
  getClientId: (state) => state.clientId,
  getMessages: (state) => state.messages,
  getChatUsers: (state) => state.chatUsers,
  getClientUsers: (state) => {
    return state.clientUsers
      .map((item) => {
        item.master = item.clientId === state.clientId
        return item
      })
      .sort((a, b) => {
        return parseInt(a.master) > parseInt(b.master)
      })
  },
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
      // const user = { username: rootState.auth.username }
      commit('INIT_CONNECT', socket)
      // commit('UPDATE_SELF_STATUS', 'online')
      dispatch('joinRoom', socket)
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
  closeConnection({ commit, state }) {
    if (state.socket) {
      state.socket.close()
      commit('CLOSE_CONNECT')
    }
  },
  pushMessage({ commit, dispatch }, text) {
    console.log(text)
    dispatch('updateNotification', 'New message')
    commit('UPDATE_MESSAGE_LIST', text)
  },
  sendMessage({ commit, state }, text) {
    const message = {
      text: text,
      clientId: state.clientId,
      username: state.clientId,
      createdAt: Date.now()
    }
    commit('SEND_MESSAGE', message)
    commit('UPDATE_MESSAGE_LIST', message)
  },
  pushJoin({ commit }, users) {
    // commit('UPDATE_USER_LIST', users)
    commit('UPDATE_CLIENT_USER_LIST', users)
  },
  pushLeave({ commit }, clientId) {
    commit('REMOVE_CLIENT_USERS', clientId)
  },
  joinRoom({ commit }, socket) {
    commit('JOIN_ROOM', socket)
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
  UPDATE_CLIENT_USER_LIST(state, users) {
    state.clientUsers = users // return online users only for demo
  },
  REMOVE_CLIENT_USERS(state, clientId) {
    state.clientUsers = state.clientUsers.filter(item => item.clientId !== clientId)
  },
  SEND_MESSAGE(state, message) {
    state.socket.emit('message', message)
  },
  JOIN_ROOM(state, socket) {
    state.socket.emit('join', {
      username: state.clientId,
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
