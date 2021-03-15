const io = require('socket.io-client')

const state = {
  socket: null,
  clientId: null,
  messages: [],
  clients: new Set(),
  onlineUsers: []
}

// getters
const getters = {
  getClientId: (state) => state.clientId,
  getMessages: (state) => state.messages
}

// actions
const actions = {
  initSocket({ commit, dispatch, rootState }) {
    const socket = io.connect('http://127.0.0.1:3000', { reconnectionAttempts: 5 })
    socket.on('connect', () => {
      commit('INIT_CONNECT', socket)
      dispatch('joinRoom', { username: rootState.auth.username })
    })
    socket.on('join', (user) => {
      dispatch('pushJoin', user)
    })
    socket.on('message', ({ username, text, createAt }) => {
      dispatch('pushMessage', { username, text, createAt })
    })
    socket.on('close', (e) => {
      console.log(e)
    })
  },
  pushMessage({ commit }, text) {
    commit('UPDATE_MESSAGE_LIST', text)
  },
  sendMessage({ commit }, message) {
    console.log(message)
    commit('SEND_MESSAGE', message)
    commit('UPDATE_MESSAGE_LIST', message)
  },
  pushJoin({ commit }, user) {
    commit('UPDATE_USER_LIST', user)
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
  UPDATE_MESSAGE_LIST(state, message) {
    state.messages.push(message)
  },
  UPDATE_USER_LIST(state, user) {
    state.onlineUsers.push(user)
  },
  SEND_MESSAGE(state, message) {
    state.socket.emit('message', message)
  },
  JOIN_ROOM(state, { username }) {
    state.socket.emit('join', { username })
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
