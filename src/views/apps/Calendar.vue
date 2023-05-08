<script lang="ts" setup>
import FullCalendar from '@fullcalendar/vue3';
import { ref } from 'vue';
import { blankEvent, useCalendar } from '@/composable/useCalendar';
import { useCalendarStore } from '@/store/event';

// 👉 Store
const store = useCalendarStore();
// 👉 Event
const event = ref(structuredClone(blankEvent));
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, jumpToDate } = useCalendar(event);
</script>

<template>
  <div class="app-calendar">
    <VCard>
      <FullCalendar class="demo-app-calendar" :options="calendarOptions" ref="refCalendar"> </FullCalendar>
    </VCard>
  </div>
</template>
<style lang="scss">
@use '@/scss/full-calendar';
</style>
