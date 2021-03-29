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
import { VFormBuilder } from '@tookit/vma'
import { VTextField, VTextarea, VAutocomplete, VSwitch } from 'vuetify/lib'
import VEditor from '@/components/editor/VEditor'
import { mapGetters } from 'vuex'
export default {
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
    ...mapGetters(['getProjectList']),
    formTitle() {
      return this.item ? 'Edit Task - ' + this.item.name : 'Create Task'
    },
    formItems() {
      return [
        {
          cols: 12,
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
          element: VAutocomplete,
          props: {
            name: 'project_id',
            label: 'Project',
            outlined: true,
            items: this.getProjectList,
          },
        },
        {
          cols: 6,
          element: VSwitch,
          props: {
            label: 'Active',
            name: 'is_active',
            inputValue: 0,
            trueValue: 1,
            falseValue: 0,
            outlined: true,
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
  created() {
    this.$store.dispatch('fetchProject')
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
            .dispatch('updateTask', {
              id: this.item.id,
              data: data,
            })
            .then(() => {
              this.$emit('form:success')
              this.loading = false
            })
            .catch(() => {
              this.$emit('form:fail')
              this.loading = false
            })
        } else {
          return this.$store
            .dispatch('createTask', data)
            .then(() => {
              this.$emit('form:success')
              this.loading = false
            })
            .catch(() => {
              this.$emit('form:fail')
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
