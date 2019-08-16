<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-3">{{ $route.meta.title || '' }}</h3>
    </div>
    <v-breadcrumbs divider="-" :items="breadcrumbs" v-if="breadcrumbs" />
    <v-spacer />
    <div class="page-header-right">
      <v-btn icon> <v-icon class="text--secondary">refresh</v-icon> </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home',
      breadcrumbs: [],
    }
  },
  methods: {
    computeBreadcrumbs() {
      let breadcrumbs = [
        {
          text: 'Home',
          to: { path: '/' },
          disabled: false,
        },
      ]
      if (this.$route.path !== '/dashboard') {
        let appends = []
        appends = this.$route.matched.map(item => {
          const path = item.path || '/'
          let tmp = {
            text: item.meta.title || '',
            to: { path: path },
          }
          if (item.path === this.$route.path) {
            tmp.disabled = true
          }
          return tmp
        })
        this.breadcrumbs = breadcrumbs.concat(appends)
      }
    },
  },
  created() {
    this.computeBreadcrumbs()
  },
}
</script>
<style lang="sass" scoped>
.disabled
  color: grey
  pointer-events: none
  text-decoration: blink
</style>
