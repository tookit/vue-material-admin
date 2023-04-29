<script setup lang="ts">
import { ref } from 'vue';
const checkbox = ref(true);
</script>

<template>
  <VRow class="d-flex mb-3">
    <VCol cols="12">
      <VLabel class="font-weight-bold mb-1">Name</VLabel>
      <VTextField variant="outlined" hide-details color="primary"></VTextField>
    </VCol>
    <VCol cols="12">
      <VLabel class="font-weight-bold mb-1">Email Address</VLabel>
      <VTextField variant="outlined" type="email" hide-details color="primary"></VTextField>
    </VCol>
    <VCol cols="12">
      <VLabel class="font-weight-bold mb-1">Password</VLabel>
      <VTextField variant="outlined" type="password" hide-details color="primary"></VTextField>
    </VCol>
    <VCol cols="12">
      <VBtn to="/" color="primary" size="large" block flat>Sign up</VBtn>
    </VCol>
  </VRow>
</template>
