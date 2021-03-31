import Liquid from './main'

Liquid.install = function (Vue) {
  Vue.component(Liquid.name, Liquid)
}

export default Liquid
