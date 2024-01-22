<script setup lang="ts">
/*Call Components*/
import SalesOverview from '@/components/charts/SalesOverview.vue';
import YearlyBreakup from '@/components/charts/YearlyBreakup.vue';
import MonthlyEarning from '@/components/charts/MonthlyEarnings.vue';
import RecentTransaction from '@/components/dashboard/RecentTransaction.vue';
import RecentTask from '@/components/dashboard/RecentTask.vue';
</script>
<template>
  <VRow>
    <VCol cols="12">
      <VRow>
        <!-- Sales overview -->
        <VCol cols="12" lg="8">
          <SalesOverview />
        </VCol>
        <!-- Yearly Breakup / Monthly Earnings -->
        <VCol cols="12" lg="4">
          <div class="mb-6">
            <YearlyBreakup />
          </div>
          <div>
            <MonthlyEarning />
          </div>
        </VCol>
        <!-- Recent transaction -->
        <VCol cols="12" lg="4">
          <RecentTransaction />
        </VCol>
        <!-- Product performence -->
        <VCol cols="12" lg="8">
          <RecentTask />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
