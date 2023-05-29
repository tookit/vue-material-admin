<script lang="ts" setup>
import { ref } from 'vue';
import AccountSetting from './AccountSetting.vue';
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
          <VCardText>
            <div class="d-flex">
              <div class="mr-10">
                <VAvatar class="cursor-pointer" size="160" rounded="0">
                  <VImg src="/assets/images/users/user.jpg" />
                </VAvatar>
              </div>
              <div class="flex-1-0">
                <div class="user-meta d-flex flex-column">
                  <h3 class="font-weight-light">Michael Wang</h3>
                  <div class="d-flex">
                    <VBtn class="pl-0" variant="plain" color="grey" prepend-icon="mdi-account">Developer</VBtn>
                    <VBtn class="pl-0" variant="plain" color="grey" prepend-icon="mdi-map-marker">Shenzhen</VBtn>
                    <VBtn class="pl-0" variant="plain" color="grey" prepend-icon="mdi-email">tookit@gmail.com</VBtn>
                  </div>
                </div>
              </div>
            </div>
          </VCardText>
          <VTabs v-model="activeTab" color="primary">
            <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
              <VIcon size="20" start :icon="item.icon" />
              {{ item.title }}
            </VTab>
          </VTabs>
        </VCard>

        <VCard class="mt-5">
          <VCardText>
            <VWindow v-model="activeTab" class="disable-tab-transition" :touch="false">
              <!-- Account -->
              <VWindowItem value="account"> <AccountSetting /> </VWindowItem>

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
