import {
  VContainer,
  VRow,
  VCol,
  VForm,
  VCard,
  VCardActions,
  VToolbar,
  VToolbarTitle,
  VBtn
} from 'vuetify/lib'

import { getObjectValueByPath } from 'vuetify/lib/util/helpers'
export default {
  name: 'v-form-builder',
  props: {
    showHeader: Boolean,
    title: {
      type: String,
      default: 'Form'
    },
    saveText: {
      type: String,
      default: 'Save'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    loading: Boolean,
    color: {
      type: String,
      default: 'white'
    },
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
        this.formData = val || {}
      },
      immediate: true
    }
  },
  methods: {
    genFormItem(item) {
      const { name } = item.props
      const VNode = this.$createElement(item.element, {
        props: {
          ...item.props,
          label: item.props.label ?? name.toUpperCase(),
          placeholder: item.props.placeholder ?? name.toUpperCase(),
          value: this.formData[name]
        },
        on: {
          input: (e) => {
            this.formData[name] = e
            this.$emit('input', this.formData)
          }
        }
      })
      return this.$createElement(
        VCol,
        {
          props: {
            cols: item.cols ?? 12
          }
        },
        [VNode]
      )
    },
    genFormItems() {
      return this.items.map((item) => {
        return this.genFormItem(item)
      })
    },
    genFormWrapper() {
      return this.$createElement(
        VForm,
        { ref: 'form', class: 'v-card__text' },
        [
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
        ]
      )
    },
    genFormTitle() {
      return this.$createElement(
        VToolbar,
        {
          props: {
            color: this.color,
            dark: true
          }
        },
        [
          this.$createElement(
            VToolbarTitle,
            {
              props: {}
            },
            this.title
          )
        ]
      )
    },
    genFormFooter() {
      return this.$createElement(
        VCardActions,
        {
          class: 'justify-end',
          props: {}
        },
        [
          this.$createElement(
            VBtn,
            {
              props: {
                text: true,
                tile: true
              },
              on: {
                click: () => {
                  this.$emit('form:cancel')
                }
              }
            },
            this.cancelText
          ),
          this.$createElement(
            VBtn,
            {
              props: {
                color: this.color,
                loading: this.loading,
                tile: true
              },
              on: {
                click: () => {
                  this.$emit('form:submit')
                }
              }
            },
            this.saveText
          )
        ]
      )
    }
  },
  render(h) {
    const nodes = [
      this.genFormTitle(),
      this.genFormWrapper(),
      this.genFormFooter()
    ]
    if (!this.showHeader) nodes.shift()
    return h(
      VCard,
      { props: { loading: this.loading, tile: true, flat: true } },
      nodes
    )
  }
}
