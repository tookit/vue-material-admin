import mixins from 'vuetify/lib/util/mixins'

import BaseMixin from '../BaseMixin'

import { Donut } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-donut',

  props: {
    data: {
      type: Array,
      default: () => []
    },

    radius: {
      tyep: Number,
      default: 0.8
    },

    angleField: {
      type: String,
      default: 'value'
    },

    colorField: {
      type: String,
      default: 'type'
    }
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      this.chart = new Donut(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: this.data,

        padding: this.padding,

        forceFit: this.forceFit,

        // donut props

        radius: this.radius,

        angleField: this.angleField,

        colorField: this.colorField
      })

      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
