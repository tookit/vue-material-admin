<template>
  <div class="v-editor">
    <iframe ref="editor" />
  </div>
</template>

<script>
import { Jodit } from 'jodit'

export default {
  name: 'VEditor',
  components: {},
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          height: 600,
        }
      },
    },
    value: {
      type: [String, Object],
      required: true,
      default: 'placeholder',
    },
  },
  data() {
    return {
      selectedItems: [],
      showDialog: false,
    }
  },
  computed: {},
  watch: {
    value: {
      handler(val) {
        this.editor.value = val
      },
    },
  },
  mounted() {
    const btns = ['source', 'ul', 'ol', 'paragraph', 'link', 'video', 'table', 'fullsize', 'preview']
    const defaultOptions = {
      useSearch: false,
      height: '600',
      defaultActionOnPaste: 'insert_clear_html',
      disablePlugins: 'addnewline,autofocus,color,font,indent,redoundo',
      buttons: btns,
      buttonsSM: btns,
      buttonsMD: btns,
    }
    const jodit = new Jodit(this.$refs.editor, defaultOptions)
    this.editor = jodit
    this.editor.value = this.value
    this.editor.events.on('change', (newValue) => this.$emit('input', newValue))
  },
  beforeDestroy() {
    this.editor.destruct()
  },
}
</script>
