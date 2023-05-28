<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Card -->
  <!-- ---------------------------------------------------- -->
  <v-card variant="outlined" elevation="0" class="withbg">
    <v-card-item>
      <v-card-title class="text-18">{{ title }}</v-card-title>
    </v-card-item>
    <v-divider></v-divider>

    <slot />
  </v-card>
</template>
