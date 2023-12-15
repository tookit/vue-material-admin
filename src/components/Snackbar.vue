<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSnackbarStore } from '@/store/';
const store = useSnackbarStore();
const { showSnackbar, message, color } = storeToRefs(store);
</script>
<template>
  <VSnackbar v-model="showSnackbar" :timeout="3000" location="top" :color="color">
    {{ message }}
    <template v-slot:actions>
      <VBtn density="comfortable" icon="mdi-close" color="white" @click="showSnackbar = false" />
    </template>
  </VSnackbar>
</template>
