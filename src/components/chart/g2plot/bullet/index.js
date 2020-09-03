import mixins from 'vuetify/lib/util/mixins'

import BaseMixin from '../BaseMixin'

import { Bullet } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-bullet',

  props: {
    /**
     *  schema
     *  {
     *      title: 'Task',
     *       measures: [83],
     *       targets: [90],
     *       ranges: [0, 0.6, 0.9, 1],
     *  }
     */
    data: {
      type: Array,
      default: () => []
    },
    rangeColors: {
      type: Array,
      default: () => []
    },

    rangeMax: {
      type: Number,
      default: 100
    }
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      const { data, rangeColors, rangeMax } = this
      this.chart = new Bullet(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: data,
        padding: this.padding,
        forceFit: this.forceFit,
        rangeMax: rangeMax,
        rangeColors: rangeColors
      })

      this.chart.render()
    }
  },

  mounted() {
    this.drawChart()
  }
})
