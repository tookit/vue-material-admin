import mixins from 'vuetify/lib/util/mixins'
import BaseMixin from '../BaseMixin'
import { StackedColumn } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-stack-column',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
    // line width
    stackField: {
      type: String,
      default: 'type'
    },
    color: [Object, Array],
    columnStyle: Object,
    events: {
      type: Object
    }
  },
  data() {
    return {
      chart: null
    }
  },
  methods: {
    drawChart() {
      this.chart = new StackedColumn(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: this.data,
        padding: this.padding,
        forceFit: true,
        description: this.description,
        meta: this.meta,
        stackField: this.stackField,
        color: this.color,
        label: {
          visible: true,
          position: 'middle' // option: middle / top / bottom
        },
        columnStyle: this.columnStyle,
        legend: {
          position: 'top-left'
        },
        xField: this.xField,
        yField: this.yField,
        xAxis: {
          title: {
            visible: false
          }
        },
        yAxis: {
          title: {
            visible: false
          }
        },
        interactions: [
          {
            type: 'slider'
          }
        ],
        events: this.events
      })
      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
