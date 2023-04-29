<script lang="ts" setup>
import { reactive } from 'vue';
import { emailValidator, requiredValidator, passwordValidator } from '@/utils/validators';
const formModel = reactive({
  username: '',
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
        <VTextField
          v-model="formModel.username"
          :rules="[requiredValidator]"
          label="Username"
          append-inner-icon="mdi-account-outline"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="formModel.email"
          :rules="[requiredValidator, emailValidator]"
          append-inner-icon="mdi-email-outline"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="formModel.mobile"
          :rules="[requiredValidator]"
          append-inner-icon="mdi-phone-outline"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="formModel.password"
          :rules="[passwordValidator]"
          label="Password"
          append-inner-icon="mdi-key-outline"
          type="password"
          placeholder="password"
        />
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
