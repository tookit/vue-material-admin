<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

<template>
  <!-- -------------------------------------------------------------------- -->
  <!-- Card with Header & Footer -->
  <!-- -------------------------------------------------------------------- -->
  <VCard variant="outlined" elevation="0">
    <VCardItem>
      <VCardTitle class="text-18">{{ title }}</VCardTitle>
    </VCardItem>
    <VDivider />
    <VCardText>
      <slot />
    </VCardText>
    <VDivider />
    <VCardActions>
      <slot name="footer" />
    </VCardActions>
  </VCard>
</template>
