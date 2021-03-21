import VContainer from 'vuetify/lib/components/VGrid/VContainer'
import VRow from 'vuetify/lib/components/VGrid/VRow'
import VCol from 'vuetify/lib/components/VGrid/VCol'
import VForm from 'vuetify/lib/components/VForm/VForm'
import { getObjectValueByPath } from 'vuetify/lib/util/helpers'
export default {
  name: 'v-form-builder',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      formData: {}
    }
  },
  watch: {
    value: {
      handler(val) {
        this.formData = val ?? {}
      },
      immediate: true
    }
  },
  methods: {
    genFormItem(item) {
      const { name } = item.props
      const value = getObjectValueByPath(this.formData, item.props.name) ?? null
      return this.$createElement(
        VCol,
        {
          props: {
            cols: item.cols ?? 12
          }
        },
        [
          this.$createElement(item.element, {
            props: {
              ...item.props,
              label: item.props.label ?? name.toUpperCase(),
              placeholder: item.props.placeholder ?? name.toUpperCase(),
              value: value
            },
            on: {
              input: (e) => {
                this.formData[name] = e
                this.$emit('input', this.formData)
              }
            }
          })
        ]
      )
    },
    genFormItems() {
      return this.items.map((item) => {
        return this.genFormItem(item)
      })
    },
    genFormWrapper() {
      return this.$createElement(VForm, [
        this.$createElement(
          VContainer,
          {
            props: {
              fluid: true
            },
            on: {
              submit: this.$emit('submit')
            }
          },
          [this.$createElement(VRow, [this.genFormItems()])]
        )
      ])
    }
  },
  render(h) {
    return h('div', [this.genFormWrapper()])
  }
}
