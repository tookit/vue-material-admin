<template>
  <v-app class="layout-auth primary">
    <v-main>
      <router-view :key="$route.path"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  methods: {}
}
</script>
<style lang="sass" scoped>
.layout-auth
  height: 50%
  width: 100%
  position: absolute
  top: 0
  left: 0
  content: ""
  z-index: 0
</style>
