<template>
  <v-form-builder
    ref="builder"
    v-model="formModel"
    :title="formTitle"
    :items="formItems"
    :loading="loading"
    color="primary"
    show-header
    @form:submit="handleSubmit"
    @form:cancel="$emit('form:cancel')"
  />
</template>

<script>
import VFormBuilder from '@/components/builder/VFormBuilder'
import { VTextField, VTextarea, VAutocomplete, VSwitch } from 'vuetify/lib'
import VEditor from '@/components/editor/VEditor'
import { mapGetters } from 'vuex'
export default {
  name: 'FormNews',
  components: {
    VFormBuilder,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      loading: false,
      formModel: {},
    }
  },
  computed: {
    ...mapGetters(['getCMSCategoryList']),
    formTitle() {
      return this.item ? 'Edit Post - ' + this.item.name : 'Create Post'
    },
    formItems() {
      return [
        {
          cols: 6,
          element: VTextField,
          props: {
            name: 'name',
            required: true,
            outlined: true,
            rules: [(v) => !!v || 'Name is required'],
          },
        },
        {
          cols: 6,
          element: VTextField,
          props: {
            name: 'slug',
            outlined: true,
          },
        },
        {
          cols: 6,
          element: VAutocomplete,
          props: {
            name: 'category_id',
            outlined: true,
            items: this.getCMSCategoryList,
          },
        },
        {
          cols: 6,
          element: VSwitch,
          props: {
            name: 'is_active',
            inputValue: 0,
            trueValue: 1,
            falseValue: 0,
            outlined: true,
          },
        },
        {
          cols: 6,
          element: VAutocomplete,
          props: {
            name: 'tags',
            outlined: true,
            multiple: true,
            smallChips: true,
            clearable: true,
            items: this.getTagsByType('fiber'),
          },
        },
        {
          cols: 12,
          element: VTextarea,
          props: {
            name: 'description',
            outlined: true,
          },
        },
        {
          cols: 12,
          element: VEditor,
          default: 'type',
          props: {
            name: 'content',
            outlined: true,
          },
        },
      ]
    },
  },
  watch: {
    item: {
      handler(item) {
        this.formModel = item ? this.mergeData(this.formData(), item) : this.formData()
      },
      immediate: true,
    },
  },
  methods: {
    mergeData(source, target) {
      for (let key in source) {
        source[key] = target[key]
      }
      return source
    },
    formData() {
      const model = {}
      this.formItems.forEach((item) => {
        model[item.props.name] = item.default || null
      })
      return model
    },
    handleSubmit() {
      const form = this.$refs.builder.$refs.form
      if (form.validate()) {
        this.loading = true
        const data = this.transformData(this.formModel)
        if (this.item && this.item.id) {
          return this.$store
            .dispatch('updateNews', {
              id: this.item.id,
              data: data,
            })
            .then(() => {
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return this.$store
            .dispatch('createNews', data)
            .then(() => {
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        }
      }
    },
    transformData(data) {
      return data
    },
  },
}
</script>
