import colors from 'vuetify/es5/util/colors'

const state = {
  mode: 'light',
  themeColor: 'pink',
}

// getters
const getters = {
  getThemeColor: (state) => {
    return colors[state.themeColor].base
  },
}

// actions
const actions = {}

// mutations
const mutations = {
  setThemeColor(state, payload) {
    state.themeColor = payload
  },
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}
