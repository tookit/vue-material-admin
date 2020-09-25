<template>
  <v-container>
    <v-row>
      <v-col>
        changelog
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
