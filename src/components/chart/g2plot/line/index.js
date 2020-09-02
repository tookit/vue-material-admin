import mixins from 'vuetify/lib/util/mixins'
import BaseMixin from '../BaseMixin'
import { Line } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-line',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
    color: Array,
    colorField: String,
    // line width
    size: {
      type: Number,
      default: 2
    }
  },

  watch: {
    data: {
      handler(data) {
        if (this.chart) {
          this.chart.changeData(data)
          this.chart.updateConfig({
            width: this.width,
            height: this.height
          })
          this.chart.render()
        }
      },
      immediate: true
    }
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      this.chart = new Line(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: this.data,
        padding: this.padding,
        forceFit: true,
        title: this.title,
        description: this.description,
        color: this.color,
        colorField: this.colorField,
        meta: this.meta,
        label: {
          visible: true,
          position: 'middle' // option: middle / top / bottom
        },

        xField: this.xField,
        yField: this.yField,
        xAxis: {
          title: {
            visible: true
          }
        },
        yAxis: {
          title: {
            visible: true
          }
        },
        legend: {
          position: 'top-left'
        }
      })

      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
