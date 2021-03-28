import request from '@/util/request'

const state = {
  projects: [
    {
      text: 'Demo Project',
      value: 1,
    },
  ],
  taskStatus: [
    {
      text: 'Todo',
      value: 0,
    },
    {
      text: 'Progress',
      value: 1,
    },
    {
      text: 'Done',
      value: 2,
    },
  ],
}

// getters
const getters = {
  getProjectList: (state) => state.projects,
  getTaskStatus: (state) => state.taskStatus,
  getTaskStatusByValue: (state) => (value) => {
    const find = state.taskStatus.find(item.value === value)
    return find.text
  },
}

// actions
const actions = {
  fetchProject(context, query) {
    return request({
      url: `project`,
      method: 'get',
      params: query,
    }).then((resp) => {
      context.commit('SET_PROJECT', resp.data)
      return resp
    })
  },
  fetchTask(context, query) {
    return request({
      url: `task`,
      method: 'get',
      params: query,
    })
  },
  createTask(context, data) {
    return request({
      url: `task`,
      method: 'post',
      data: data,
    }).then((resp) => {
      return resp
    })
  },
  updateTask(context, { id, data }) {
    return request({
      url: `task/${id}`,
      method: 'put',
      data: data,
    }).then((resp) => {
      return resp
    })
  },
  deleteTask(context, id) {
    return request({
      url: `task/${id}`,
      method: 'delete',
    })
  },
  getTaskById(context, id) {
    return request({
      url: `task/${id}`,
      method: 'get',
    }).then((resp) => {
      return resp
    })
  },
}

// mutations
const mutations = {
  SET_PROJECT(state, data) {
    state.projects = data
  },
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}
