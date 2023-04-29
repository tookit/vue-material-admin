<script lang="ts" setup>
import { reactive } from 'vue';
const formModel = reactive({
  firstName: '',
  email: '',
  password: '',
  mobile: '',
  remember: false
});
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField v-model="formModel.firstName" label="First Name" placeholder="First Name" />
      </VCol>

      <VCol cols="12">
        <VTextField v-model="formModel.email" label="Email" type="email" placeholder="Email" />
      </VCol>

      <VCol cols="12">
        <VTextField v-model="formModel.mobile" label="Mobile" type="number" placeholder="Number" />
      </VCol>

      <VCol cols="12">
        <VTextField v-model="formModel.password" label="Password" type="password" placeholder="password" />
      </VCol>

      <VCol cols="12">
        <VCheckbox v-model="formModel.remember" label="Remember me" />
      </VCol>
      <VCol cols="12" class="d-flex gap-4">
        <VBtn type="submit" color="primary"> Submit </VBtn>
        <VBtn type="reset" color="secondary" variant="tonal"> Reset </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
