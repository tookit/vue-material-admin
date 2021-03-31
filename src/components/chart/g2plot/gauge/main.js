import Gauge from './main'

Gauge.install = function (Vue) {
  Vue.component(Gauge.name, Gauge)
}

export default Gauge
