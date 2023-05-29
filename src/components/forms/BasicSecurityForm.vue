<script lang="ts" setup>
import { ref } from 'vue';
const username = ref('');
const email = ref('');
const password = ref('');
const cPassword = ref('');
const isPasswordVisible = ref(false);
const isCPasswordVisible = ref(false);
</script>

<template>
  <VForm class="mt-2">
    <VRow>
      <VCol cols="12" md="6">
        <VTextField v-model="username" label="Username" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="email" label="Email" suffix="@example.com" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField
          v-model="cPassword"
          label="Confirm Password"
          :type="isCPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
          @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
