const state = {
  mode: 'light',
  themeColor: '#3f51b5',
  theme: 'inidigo'
}

// getters
const getters = {
  getTheme: (state) => {
    return state.theme
  },
  getThemeColor: (state) => {
    return state.themeColor
  }
}

// actions
const actions = {}

// mutations
const mutations = {
  setThemeColor(state, payload) {
    state.themeColor = payload
  },
  setTheme(state, payload) {
    state.theme = payload
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
