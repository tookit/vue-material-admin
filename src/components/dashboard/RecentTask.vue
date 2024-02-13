<script setup lang="ts">
import { reactive } from 'vue';
import { useLocale } from 'vuetify';
const { t } = useLocale();
const items = [
  {
    id: 1,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Low',
    statuscolor: 'primary',
    budget: '$3.9'
  },
  {
    id: 2,
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    status: 'Medium',
    statuscolor: 'secondary',
    budget: '$24.5k'
  },
  {
    id: 3,
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    status: 'High',
    statuscolor: 'error',
    budget: '$12.8k'
  },
  {
    id: 4,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Critical',
    statuscolor: 'success',
    budget: '$2.4k'
  },
  {
    id: 5,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Critical',
    statuscolor: 'success',
    budget: '$2.4k'
  },
  {
    id: 6,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Critical',
    statuscolor: 'success',
    budget: '$2.4k'
  }
];
const headers = reactive([
  { title: t('id'), key: 'id' },
  { title: t('name'), key: 'name' },
  { title: t('position'), key: 'post' },
  { title: t('project'), key: 'pname' },
  { title: t('status'), key: 'status' },
  { title: t('action'), key: 'action' }
]);
</script>
<template>
  <VCard>
    <VCardItem>
      <VCardTitle>{{ $t('recent_task') }}</VCardTitle>
      <VDataTable :headers="headers" :items="items" />
    </VCardItem>
  </VCard>
</template>
