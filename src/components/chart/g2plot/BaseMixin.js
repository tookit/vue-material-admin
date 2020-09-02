export default {
  props: {
    /**

     * example

     * ```

     *  title: {

     *    visible: true,

     *    text: '图表标题及描述',

     *  },

     * ```

     *

     */

    title: Object,

    /**

     * description

     * ```

     *  description: {

     *    visible: true,

     *    text: '图表标题及描述',

     *  },

     * ```

     *

     */

    description: Object,

    /**

     * legend

     * ```

     *  legend: {

     *    visible: true,

     *    position: 'right-center',

     *  },

     * ```

     *

     */

    legend: Object,

    /**

     * meta

     * ```

     *  meta: {

     *    {

     *      type: {

     *        alias: 'aliasName'

     *      }

     *    }

     *  }

     *

     * ```

     *

     */

    meta: Object,

    tooltip: Object,

    forceFit: Boolean,

    width: {
      type: Number
    },

    height: {
      type: Number
    }
  },

  render(h) {
    return h(
      'div',

      {
        class: 'g2-canvas'
      },

      [
        h('div', {
          class: 'canvas',

          ref: 'canvas'
        }),

        h('span', {
          class: 'loading',

          ref: 'loading'
        })
      ]
    )
  }
}
