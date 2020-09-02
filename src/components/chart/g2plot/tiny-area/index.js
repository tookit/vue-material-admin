import mixins from 'vuetify/lib/util/mixins'
import BaseMixin from '../BaseMixin'
import { TinyArea } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-tiny-area',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    xField: String,
    yField: String,
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
      this.chart = new TinyArea(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: this.data,
        padding: this.padding,
        forceFit: this.forceFit,
        xField: this.xField,
        yField: this.yField
      })
      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
