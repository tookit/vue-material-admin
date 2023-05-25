<script lang="ts" setup>
import { ref } from 'vue';
const activeTab = ref('security');
const tabs = [
  { title: 'Account', icon: 'mdi-account-alert', tab: 'account' },
  { title: 'Security', icon: 'mdi-lock', tab: 'security' },
  { title: 'Billing & Plans', icon: 'mdi-file-certificate', tab: 'billing-plans' },
  { title: 'Notifications', icon: 'mdi-bell', tab: 'notification' },
  { title: 'Connections', icon: 'mdi-link', tab: 'connection' }
];
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VTabs v-model="activeTab" color="primary">
            <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
              <VIcon size="20" start :icon="item.icon" />
              {{ item.title }}
            </VTab>
          </VTabs>
          <VCardText>
            <VWindow v-model="activeTab" class="disable-tab-transition" :touch="false">
              <!-- Account -->
              <VWindowItem value="account"> account </VWindowItem>

              <!-- Security -->
              <VWindowItem value="security"> security </VWindowItem>

              <!-- Billing -->
              <VWindowItem value="billing-plans"> billing</VWindowItem>

              <!-- Notification -->
              <VWindowItem value="notification"> </VWindowItem>
              <!-- Connections -->
              <VWindowItem value="connection"> </VWindowItem>
            </VWindow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </section>
</template>
