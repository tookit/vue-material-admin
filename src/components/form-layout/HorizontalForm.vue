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
        <VRow no-gutters>
          <VCol cols="12" md="3">
            <label for="username">Username</label>
          </VCol>
          <VCol cols="12" md="9">
            <VTextField
              v-model="formModel.username"
              :rules="[requiredValidator]"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12">
        <VRow no-gutters>
          <VCol cols="12" md="3">
            <label for="email">Email</label>
          </VCol>
          <VCol cols="12" md="9">
            <VTextField
              v-model="formModel.email"
              :rules="[requiredValidator, emailValidator]"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12">
        <VRow no-gutters>
          <VCol cols="12" md="3">
            <label for="mobile">Mobile</label>
          </VCol>
          <VCol cols="12" md="9">
            <VTextField
              v-model="formModel.mobile"
              :rules="[requiredValidator]"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12">
        <VRow no-gutters>
          <VCol cols="12" md="3">
            <label for="password">Password</label>
          </VCol>
          <VCol cols="12" md="9">
            <VTextField
              v-model="formModel.password"
              :rules="[requiredValidator, passwordValidator]"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol offset-md="3" cols="12" md="9">
        <VCheckbox v-model="formModel.remember" label="Remember me" />
      </VCol>
      <VCol offset-md="3" cols="12" md="9" class="d-flex gap-4">
        <VBtn type="submit" color="primary"> Submit </VBtn>
        <VBtn color="secondary" variant="tonal" type="reset"> Reset </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
