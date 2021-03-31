import Cloud from './main'

Cloud.install = function (Vue) {
  Vue.component(Cloud.name, Cloud)
}

export default Cloud
