<script setup lang="ts">
import { reactive } from 'vue';
import { IUser } from '@/api/type';
import VerticalProfileCard from '@/components/card/VerticalProfileCard.vue';
const user = reactive<IUser>({
  id: 0,
  username: 'tookit',
  company: '',
  country: '',
  contact: '',
  currentPlan: 'free',
  email: '',
  avatar: '',
  billing: '',
  role: '',
  status: 'active'
});
</script>

<template>
  <VRow>
    <VCol lg="4">
      <VerticalProfileCard :user="user" />
    </VCol>
  </VRow>
</template>
