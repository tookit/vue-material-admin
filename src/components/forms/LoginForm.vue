<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useUserStore } from '@/store/user';
import { useRoute, useRouter } from 'vue-router';
const checkbox = ref(true);
const formRules = reactive({
  username: [
    (value: string) => {
      if (value) return true;
      return 'Username required';
    }
  ],
  password: [
    (value: string) => {
      if (value) return true;
      return 'Passowrd required';
    }
  ]
});
const formModel = reactive({
  username: 'admin',
  password: '123456'
});

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const submiting = ref(false);
const handleSubmit = (e) => {
  e.preventDefault();
  submiting.value = true;
  userStore
    .login(formModel)
    .then(() => {
      router.replace(route.query.to ? String(route.query.to) : '/');
    })
    .catch((err) => {
      console.log(err);
      submiting.value = false;
    });
};
</script>

<template>
  <VForm>
    <VRow class="d-flex mb-3">
      <VCol cols="12">
        <VLabel class="font-weight-bold mb-1">Username</VLabel>
        <VTextField
          variant="outlined"
          color="primary"
          name="username"
          :rules="formRules.username"
          v-model="formModel.username"
        />
      </VCol>
      <VCol cols="12">
        <VLabel class="font-weight-bold mb-1">Password</VLabel>
        <VTextField
          variant="outlined"
          type="password"
          color="primary"
          :rules="formRules.password"
          v-model="formModel.password"
        />
      </VCol>
      <VCol cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <VCheckbox v-model="checkbox" color="primary" hide-details>
            <template v-slot:label class="text-body-1">Remeber this Device</template>
          </VCheckbox>
          <div class="ml-sm-auto">
            <RouterLink to="/" class="text-primary text-decoration-none">Forgot Password ?</RouterLink>
          </div>
        </div>
      </VCol>
      <VCol cols="12" class="pt-0">
        <VBtn :loading="submiting" type="submit" color="primary" size="large" block flat @click="handleSubmit"
          >Sign in</VBtn
        >
      </VCol>
    </VRow>
  </VForm>
</template>
