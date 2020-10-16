<template>
  <v-container>
    <v-row>
      <v-progress-linear
        v-if="loading"
        :indeterminate="loading"
      ></v-progress-linear>
      <template v-for="dir in dirs">
        <v-col :key="dir">
          <v-card :to="computePath(dir)">
            <v-card-text>
              <div class="d-flex flex-column align-center">
                <v-icon>mdi-folder</v-icon>
                <span>{{ dir }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    dir: String
  },

  data() {
    return {
      loading: false,
      dirs: []
    }
  },
  watch: {
    dir: {
      handler(dir) {
        this.fetchRecord(dir)
      },
      immediate: true
    }
  },
  methods: {
    fetchRecord() {
      this.loading = true
      this.dirs = []
      this.$store.dispatch('fetchDir').then(({ data }) => {
        this.loading = false
        this.dirs = data
      })
    },
    computePath(dir) {
      console.log(dir)
      return {
        path: `/media/${dir}`
      }
    }
  }
}
</script>

<style></style>
