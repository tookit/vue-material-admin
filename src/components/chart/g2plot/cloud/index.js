import mixins from 'vuetify/lib/util/mixins'
import BaseMixin from '../BaseMixin'
import { WordCloud } from '@antv/g2plot'

export default mixins(BaseMixin).extend({
  name: 'v-g2-cloud',
  props: {
    /**
     *  {
     *    word: 'test'，
     *    weight: 10
     *  }
     */
    data: {
      type: Array,
      default: () => []
    },
    xField: String
  },

  data() {
    return {
      chart: null
    }
  },

  methods: {
    drawChart() {
      this.chart = new WordCloud(this.$refs.canvas, {
        width: this.width,
        height: this.height,
        data: this.data,
        padding: this.padding,
        forceFit: this.forceFit,
        title: this.title,
        maskImage:
          'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
        wordStyle: {
          rotation: [-Math.PI / 2, Math.PI / 2],
          rotationSteps: 4,
          fontSize: [10, 60],
          color: (word, weight) => {
            return this.getRandomColor()
          },
          active: {
            shadowColor: '#333333',
            shadowBlur: 10
          },
          gridSize: 8
        },
        shape: 'circle',
        backgroundColor: '#fff',
        // onWordCloudHover: (e) => {
        //   console.log(e)
        // },
        tooltip: {
          visible: true
        },
        onWordCloudClick: (e) => {
          console.log(e)
        }
      })

      this.chart.render()
    },

    getRandomColor() {
      const arr = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3'
      ]

      return arr[Math.floor(Math.random() * (arr.length - 1))]
    }
  },

  mounted() {
    this.drawChart()
  }
})
