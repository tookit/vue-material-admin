import Chart from './main'

Chart.install = function (Vue) {
  Vue.component(Chart.name, Chart)
}

export default Chart
