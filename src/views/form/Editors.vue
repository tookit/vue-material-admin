<template>
  <div id="pageEditor">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3 class="pa-0">Awesome Quill Editor &nbsp;&nbsp;<a href="https://quilljs.com">Offical Website</a></h3>
        </v-flex>
        <v-flex sm12>
          <quill-editor class="quill" :content="content" :options="editorOption"> </quill-editor>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
import { quillEditor } from "vue-quill-editor"
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: "Compose Epic Story...",
      editorOption: {}
    }
  },
  computed: {},

  methods: {}
}
</script>
<style lang="stylus" scoped>
.quill
  height : 520px
</style>
