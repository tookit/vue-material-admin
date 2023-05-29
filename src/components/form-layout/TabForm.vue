<script lang="ts" setup>
import { ref, reactive } from 'vue';
import BasicAccountForm from '../forms/BasicAccountForm.vue';
import BasicSecurityForm from '../forms/BasicSecurityForm.vue';
import BasicConnectionForm from '../forms/BasicConnectionForm.vue';
const activeTab = ref('personal-info');
const tabs = [
  { title: 'Account', icon: 'mdi-account-alert', tab: 'account' },
  { title: 'Security', icon: 'mdi-lock', tab: 'security' },
  { title: 'Connections', icon: 'mdi-link', tab: 'connection' }
];
const account = reactive({
  firstName: '',
  lastName: '',
  country: 'China',
  lang: '',
  phoneNo: 0,
  birthDate: ''
});
</script>

<template>
  <VTabs v-model="activeTab" color="primary">
    <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
      <VIcon size="20" start :icon="item.icon" />
      {{ item.title }}
    </VTab>
  </VTabs>
  <VDivider />

  <VCard flat>
    <VCardText>
      <VWindow v-model="activeTab">
        <VWindowItem value="account">
          <BasicAccountForm :account="account" />
        </VWindowItem>
        <VWindowItem value="security">
          <BasicSecurityForm />
        </VWindowItem>

        <VWindowItem value="connection">
          <BasicConnectionForm />
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
    </VCardText>
  </VCard>
</template>
