import Vue from 'vue'
import Storage from 'vue-ls'

const options = {
  namespace: 'vma__',
  name: 'ls',
  storage: 'local', // storage name session, local, memory
}

Vue.use(Storage, options)
