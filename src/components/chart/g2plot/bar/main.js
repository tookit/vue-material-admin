import Bar from './main'

Bar.install = function (Vue) {
  Vue.component(Bar.name, Bar)
}

export default Bar
