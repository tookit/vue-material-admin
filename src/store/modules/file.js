import request from '@/util/request'

const state = {
  icons: [
    {
      ext: 'ico',
      icon: '#icon-weizhi'
    },
    {
      ext: 'html',
      icon: '#icon-html'
    },
    {
      ext: 'video',
      icon: '#icon-Video'
    },
    {
      ext: 'png',
      icon: '#icon-pic'
    },
    {
      ext: 'jpg',
      icon: '#icon-pic'
    },
    {
      ext: 'jpeg',
      icon: '#icon-pic'
    },
    {
      ext: 'json',
      icon: '#icon-json'
    },
    {
      ext: 'js',
      icon: '#icon-json'
    },
    {
      ext: 'svg',
      icon: '#icon-SVG'
    }
  ]
}

// getters
const getters = {
  getIconByExt: (state) => (ext) => {
    const find = state.icons.find(item => item.ext === ext)
    return find ? find.icon : '#icon-weizhi'
  }
}

// actions
const actions = {
  fetchDir({ commit }, query) {
    console.log(query)
    return request({
      url: `/storage/file`,
      method: 'get',
      params: query
    }).then((resp) => {
      return resp
    })
  }
}

// mutations
const mutations = {}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
