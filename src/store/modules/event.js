const today = new Date().toDateString()
const state = {
  /**
   *   {
   *     name: String,
   *     start: Date,
   *     end: Date,
   *     timed: boolean
   *     color: String
   *   }
   */
  lastId: 2,
  events: [
    {
      id: 1,
      name: 'Standup meeting',
      start: new Date(today + ' 09:30'),
      end: new Date(today + ' 10:00'),
      color: 'red',
      timed: true,
    },
    {
      id: 2,
      name: 'National Day',
      start: new Date('2020-10-01'),
      end: new Date('2020-10-07'),
      color: 'green',
      timed: false,
    },
  ],
}

// getters
const getters = {
  getEvents: (state) => state.events,
}

// actions
const actions = {
  createEvent({ state }, data) {
    data.id = state.lastId++
    state.events.push(data)
  },
  updateEvent({ state }, data) {
    state.events.forEach((item) => {
      if (item.id === data.id) {
        item = data
      }
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
