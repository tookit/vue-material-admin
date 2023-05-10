<script lang="ts" setup>
import FullCalendar from '@fullcalendar/vue3';
import { ref, computed } from 'vue';
import { blankEvent, useCalendar } from '@/composable/useCalendar';
import { useCalendarStore } from '@/store/event';
import AppDateTimePicker from '@/components/AppDateTimePicker.vue';
import EventForm from '@/components/forms/EventForm.vue';

const showDialog = ref(false);
const loading = ref(false);

// 👉 Store
const store = useCalendarStore();
// 👉 Event
const event = ref(structuredClone(blankEvent));
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, jumpToDate } = useCalendar(
  event,
  showDialog,
  loading
);
const checkAll = computed({
  /*
    GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
    SET: If value is `true` => then add all available options in selected filters => Select All
          Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
  */
  get: () => store.selectedCalendars.length === store.availableCalendars.length,
  set: (val) => {
    if (val) store.selectedCalendars = store.availableCalendars.map((i) => i.label);
    else if (store.selectedCalendars.length === store.availableCalendars.length) store.selectedCalendars = [];
  }
});
const handleAddEvent = () => {
  showDialog.value = true;
  event.value = structuredClone(blankEvent);
};
const handleEventUpdate = (e) => {
  updateEvent(e);
  showDialog.value = false;
};
</script>

<template>
  <div class="app-calendar">
    <VCard>
      <VLayout>
        <VNavigationDrawer :width="292" absolute touchless location="start" class="calendar-add-event-drawer">
          <div style="margin: 23.5px">
            <VBtn block prepend-icon="mdi-plus" @click="handleAddEvent"> Add event </VBtn>
          </div>
          <VDivider />
          <div class="d-flex align-center justify-center pa-2 mb-3">
            <AppDateTimePicker
              :model-value="new Date().toJSON().slice(0, 10)"
              :config="{ inline: true }"
              class="calendar-date-picker"
              @input="jumpToDate($event.target.value)"
            />
          </div>
          <VDivider />
          <div class="pa-7">
            <VListSubheader>FILTER</VListSubheader>
            <div class="d-flex flex-column calendars-checkbox">
              <VCheckbox v-model="checkAll" label="View all" />
              <VCheckbox
                v-for="calendar in store.availableCalendars"
                :key="calendar.label"
                v-model="store.selectedCalendars"
                :value="calendar.label"
                :color="calendar.color"
                :label="calendar.label"
                hide-details
              />
            </div>
          </div>
        </VNavigationDrawer>
        <VMain>
          <VCard flat :loading="loading">
            <FullCalendar class="demo-app-calendar" :options="calendarOptions" ref="refCalendar"> </FullCalendar>
          </VCard>
        </VMain>
      </VLayout>
    </VCard>
    <VDialog v-model="showDialog" width="auto" eager persistent>
      <EventForm :event="event" @form:cancel="showDialog = false" @form:update="handleEventUpdate" />
    </VDialog>
  </div>
</template>
<style lang="scss">
@use '@/scss/full-calendar';
.calendars-checkbox {
  .v-label {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    opacity: var(--v-high-emphasis-opacity);
  }
  .v-input--density-comfortable {
    --v-input-control-height: 36px;
  }
}

.calendar-add-event-drawer {
  &.v-navigation-drawer:not(.v-navigation-drawer--temporary) {
    border-end-start-radius: 0.375rem;
    border-start-start-radius: 0.375rem;
  }
}

.calendar-date-picker {
  display: none;

  + .flatpickr-input {
    + .flatpickr-calendar.inline {
      border: none;
      box-shadow: none;

      .flatpickr-months {
        border-block-end: none;
      }
    }
  }

  & ~ .flatpickr-calendar .flatpickr-weekdays {
    margin-block: 0 4px;
  }
}
</style>
