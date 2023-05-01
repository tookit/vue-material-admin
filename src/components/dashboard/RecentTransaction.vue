<script setup lang="ts">
import { CircleIcon } from 'vue-tabler-icons';
import { recentTransaction } from '@/data/dashboard/dashboardData';
</script>
<template>
  <VCard elevation="10" class="withbg">
    <VCardItem class="pb-0">
      <VCardTitle class="text-h5 pt-sm-2">Recent Transactions</VCardTitle>
      <div class="recent-transaction mt-10 px-3">
        <div v-for="list in recentTransaction" :key="list.title">
          <VRow class="d-flex mb-4">
            <VCol cols="4" lg="3" md="auto" sm="auto" class="px-0 pt-0 pb-1 d-flex align-start">
              <h6 class="text-body-1 textSecondary text-no-wrap">{{ list.title }}</h6>
            </VCol>
            <VCol cols="1" sm="1" class="px-0 text-center pt-0 pb-1">
              <CircleIcon size="13" :class="'text-' + list.textcolor" />
              <div v-if="list.line" class="line mx-auto bg-grey100"></div>
            </VCol>
            <VCol cols="7" sm="8" class="pt-0">
              <h6 v-if="list.boldtext" class="text-body-1 font-weight-bold">{{ list.subtitle }}</h6>
              <h6 v-else class="text-body-1 textSecondary">{{ list.subtitle }}</h6>
              <div class="mt-n1">
                <RouterLink :to="list.url" class="text-body-1 text-primary text-decoration-none" v-if="list.link">{{
                  list.link
                }}</RouterLink>
              </div>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardItem>
  </VCard>
</template>
<style lang="scss">
.recent-transaction {
  .line {
    width: 2px;
    height: 35px;
  }
}
</style>
