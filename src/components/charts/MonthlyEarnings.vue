<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
// const primary = theme.current.value.colors.primary;
const secondary = theme.current.value.colors.info;

/* Chart */
const areachartOptions = computed(() => {
  return {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    chart: {
      type: 'area',
      height: 60,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      group: 'sparklines'
    },
    colors: [secondary],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'solid',
      opacity: 0.05
    },
    markers: {
      size: 0
    },
    tooltip: {
      theme: 'light',
      x: {
        show: true
      }
    }
  };
});

const areaChart = {
  series: [
    {
      name: '',
      data: [25, 66, 20, 40, 12, 58, 20]
    }
  ]
};
</script>
<template>
  <VCard>
    <VCardItem>
      <div class="d-flex align-center justify-space-between">
        <VCardTitle class="text-h5">{{ $t('monthly_earnings') }}</VCardTitle>
        <VBtn size="large" icon>
          <VIcon icon="mdi-currency-usd" color="white" />
        </VBtn>
      </div>
      <VRow>
        <VCol cols="12">
          <div class="mt-2">
            <h3 class="text-h5">$6,820</h3>
            <div class="mt-1">
              <VIcon icon="mdi-arrow-up-right" color="success" />
              <span class="text-subtitle-1 ml-2 font-weight-bold">+9%</span>
              <span class="text-subtitle-1 text-muted ml-2">{{ $t('last_year') }}</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardItem>
    <div class="mt-3">
      <apexchart type="area" height="60" :options="areachartOptions" :series="areaChart.series"> </apexchart>
    </div>
  </VCard>
</template>
