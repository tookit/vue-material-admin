<script setup lang="ts">
// import { ref } from 'vue';
</script>

<template>
  <VRow class="d-flex mb-3">
    <VCol cols="12">
      <VLabel class="mb-1">{{ $t('username') }}</VLabel>
      <VTextField variant="outlined" hide-details color="primary"></VTextField>
    </VCol>
    <VCol cols="12">
      <VLabel class="mb-1">{{ $t('email') }}</VLabel>
      <VTextField variant="outlined" type="email" hide-details color="primary"></VTextField>
    </VCol>
    <VCol cols="12">
      <VLabel class="mb-1">{{ $t('password') }}</VLabel>
      <VTextField variant="outlined" type="password" hide-details color="primary"></VTextField>
    </VCol>
    <VCol cols="12">
      <VBtn to="/" color="primary" size="large" block flat>{{ $t('sign_up') }}</VBtn>
    </VCol>
  </VRow>
</template>
