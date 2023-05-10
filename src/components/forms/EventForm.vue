<script setup lang="ts">
import { ref, reactive, defineEmits, watch } from 'vue';
import { useCalendarStore } from '@/store/event';
import { IEvent } from '@/api/type';
interface IModel {
  event: IEvent;
}
const props = defineProps<IModel>();
const emit = defineEmits(['form:cancel', 'form:update', 'form:store']);

const formModel = reactive<IEvent>({
  ...props.event
});

const eventStore = useCalendarStore();
const submiting = ref(false);
const handleSubmit = (e) => {
  e.preventDefault();
  if (formModel.id) {
    emit('form:update', formModel);
  } else {
    emit('form:store', formModel);
  }
};
const handleCancel = () => {
  emit('form:cancel');
};

watch(props, () => {
  Object.assign(formModel, props.event);
});
</script>

<template>
  <VCard width="640px">
    <VToolbar tag="div">
      <VToolbarTitle>Event Form</VToolbarTitle>
      <VBtn icon="mdi-close" @click="$emit('form:cancel')"></VBtn>
    </VToolbar>
    <VCardText>
      <VForm>
        <VRow class="d-flex mb-3">
          <VCol cols="12">
            <VLabel class="font-weight-bold mb-1">Title</VLabel>
            <VTextField v-model="formModel.title" variant="outlined" color="primary" name="title" />
          </VCol>

          <VCol cols="12">
            <VLabel class="font-weight-bold mb-1">Calendar</VLabel>
            <VSelect
              v-model="formModel.extendedProps.calendar"
              :items="eventStore.availableCalendars"
              item-title="label"
              item-value="label"
              variant="outlined"
              color="primary"
              name="Calendar"
            />
          </VCol>
          <VCol cols="12">
            <VLabel class="font-weight-bold mb-1">Start Date</VLabel>
            <VTextField v-model="formModel.start" variant="outlined" color="primary" name="start" type="datetime" />
          </VCol>
          <VCol cols="12">
            <VLabel class="font-weight-bold mb-1">End Date</VLabel>
            <VTextField v-model="formModel.end" variant="outlined" color="primary" name="end" type="datetime" />
          </VCol>
          <VCol cols="12">
            <VSwitch v-model="formModel.allDay" label="All day" />
          </VCol>
          <VCol cols="12">
            <VLabel class="font-weight-bold mb-1">Event URL</VLabel>
            <VTextField v-model="formModel.url" variant="outlined" color="primary" name="url" type="url" />
          </VCol>
          <VCol cols="12">
            <VLabel class="font-weight-bold mb-1">Location</VLabel>
            <VTextField v-model="formModel.extendedProps.location" variant="outlined" color="primary" name="location" />
          </VCol>
          <VCol cols="12">
            <VLabel class="font-weight-bold mb-1">Description</VLabel>
            <VTextarea
              v-model="formModel.extendedProps.description"
              variant="outlined"
              color="primary"
              name="description"
            />
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
    <VCardActions>
      <VBtn @click="handleCancel">Cancel</VBtn>
      <VBtn color="primary" @click="handleSubmit">Submit</VBtn>
    </VCardActions>
  </VCard>
</template>
