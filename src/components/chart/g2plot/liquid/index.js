import mixins from 'vuetify/lib/util/mixins'
import BaseMixin from '../BaseMixin'
import { Liquid } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2plot-liquid',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      chart: null
    }
  },
  methods: {
    drawChart() {
      this.chart = new Liquid(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: this.data,
        padding: this.padding,
        forceFit: this.forceFit,
        // donut props
        min: this.min,
        max: this.max,
        value: this.value
      })
      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
