import mixins from 'vuetify/lib/util/mixins'
import BaseMixin from '../BaseMixin'
import { Area } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-area',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
    xAxis: {
      type: Object,
      default: () => {
        return {
          type: 'dateTime',
          tickCount: 5
        }
      }
    },
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
      const { data, xField, yField } = this
      this.chart = new Area(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: data,
        padding: this.padding,
        forceFit: this.forceFit,
        title: this.title,
        label: {
          visible: true,
          position: 'middle' // option: middle / top / bottom
        },
        xField: xField,
        yField: yField,
        xAxis: this.xAxis
      })
      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
