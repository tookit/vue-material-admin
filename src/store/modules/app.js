const state = {
  mode: 'light',
  themeColor: '#2196f3',
  theme: 'blue',
  notificatons: [
    {
      title: 'New user registered',
      color: 'light-green',
      icon: 'mdi-account-circle',
      timeLabel: 'Just now',
    },
    {
      title: 'New order received',
      color: 'light-blue',
      icon: 'mdi-cart-plus',
      timeLabel: '2 min ago',
    },
    {
      title: 'New payment made',
      color: 'cyan',
      icon: 'mdi-receipt',
      timeLabel: '24 min ago',
    },
    {
      title: 'New message from Michael',
      color: 'red',
      icon: 'mdi-email',
      timeLabel: '1 hour ago',
    },
  ],
}

// getters
const getters = {
  getTheme: (state) => {
    return state.theme
  },
  getThemeColor: (state) => {
    return state.themeColor
  },
  getNotification: (state) => {
    return state.notificatons
  },
}

// actions
const actions = {
  updateNotification({ commit }, text) {
    const note = {
      title: text,
      color: 'light-green',
      icon: 'mdi-account-circle',
      timeLabel: 'Just now',
    }
    commit('UPDATE_NOTIFICATION', note)
  },
  clearNotificaton({ commit }) {
    commit('CLEAR_NOTIFICATION')
  },
}

// mutations
const mutations = {
  setThemeColor(state, payload) {
    state.themeColor = payload
  },
  setTheme(state, payload) {
    state.theme = payload
  },
  UPDATE_NOTIFICATION(state, payload) {
    state.notificatons.push(payload)
  },
  CLEAR_NOTIFICATION(state) {
    state.notificatons = []
  },
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}
