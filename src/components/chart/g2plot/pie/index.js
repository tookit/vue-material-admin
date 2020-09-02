import mixins from 'vuetify/lib/util/mixins'
import BaseMixin from '../BaseMixin'
import { Pie } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-pie',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    angleField: String,
    colorField: String,
    color: Array,
    // line width
    size: {
      type: Number,
      default: 2
    }
  },

  data() {
    return {
      chart: null
    }
  },
  methods: {
    drawChart() {
      this.chart = new Pie(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: this.data,
        padding: this.padding,
        forceFit: true,
        description: this.description,
        color: this.color,
        meta: this.meta,
        label: {
          visible: true,
          type: 'outer-center'
        },
        legend: {
          position: 'bottom-center'
        },
        angleField: this.angleField,
        colorField: this.colorField,
        xAxis: {
          title: {
            visible: false
          }
        },
        yAxis: {
          title: {
            visible: false
          }
        }
      })
      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
