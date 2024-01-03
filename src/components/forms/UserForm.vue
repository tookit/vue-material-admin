<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useUserStore } from '@/store';
import { IUser } from '@/api/type';
interface IModel {
  user: IUser;
}
const props = defineProps<IModel>();
const emit = defineEmits(['form:cancel']);
const formRules = reactive({
  username: [
    (value: string) => {
      if (value) return true;
      return 'Username required';
    }
  ]
});
const formModel = reactive<IUser>({
  ...props.user
});

const userStore = useUserStore();
const handleSubmit = (e) => {
  e.preventDefault();
};
const handleCancel = () => {
  emit('form:cancel');
};

watch(props, () => {
  Object.assign(formModel, props.user);
});
</script>

<template>
  <VCard width="640px">
    <VToolbar tag="div">
      <VToolbarTitle>User Form</VToolbarTitle>
      <VBtn icon="mdi-close" @click="$emit('form:cancel')"></VBtn>
    </VToolbar>
    <VCardText>
      <VForm>
        <VRow class="d-flex mb-3">
          <VCol cols="12">
            <VLabel class="mb-1">Username</VLabel>
            <VTextField
              v-model="formModel.username"
              :rules="formRules.username"
              variant="outlined"
              color="primary"
              name="username"
            />
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">Email</VLabel>
            <VTextField
              v-model="formModel.email"
              :rules="formRules.username"
              variant="outlined"
              color="primary"
              name="email"
            />
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">Role</VLabel>
            <VAutocomplete
              v-model="formModel.role"
              :items="userStore.roles"
              variant="outlined"
              color="primary"
              name="role"
            />
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">Status</VLabel>
            <VAutocomplete
              v-model="formModel.status"
              :items="userStore.statusOptions"
              variant="outlined"
              color="primary"
              name="status"
            />
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
    <VCardActions>
      <VBtn type="submit" variant="outlined" color="primary" @click="handleSubmit">Submit</VBtn>
      <VBtn @click="handleCancel">Cancel</VBtn>
    </VCardActions>
  </VCard>
</template>
@/store/userStore
