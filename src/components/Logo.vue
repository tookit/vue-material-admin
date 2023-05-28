<script setup lang="ts">
import { ref } from 'vue';
const props = withDefaults(
  defineProps<{
    height: number;
  }>(),
  {
    height: 36
  }
);

const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>

<template>
  <div style="line-height: 0; color: rgb(var(--v-theme-primary))" class="logo">
    <svg :height="props.height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.03 61.5">
      <path
        d="M71.73,61.5H91L69.16,24.68h-19C57.44,37,64.57,49.15,71.73,61.5Z"
        :fill="String(secondary)"
        fill-rule="evenodd"
      />
      <path
        d="M0,61.09H18.88q18-30.3,36-60.64L54.62,0H36.19Q18.15,30.54,0,61.09ZM45.48,24.68h0Q34.5,43.13,23.57,61.5H42.16c4.19-7,8.37-14.13,12.59-21.21-3.1-5.22-6.16-10.39-9.27-15.61Z"
        :fill="String(primary)"
        fill-rule="evenodd"
      />
    </svg>
  </div>
</template>
