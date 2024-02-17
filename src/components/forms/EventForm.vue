<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { useCalendarStore } from '@/store';
import { IEvent } from '@/api/type';
import AppDatePicker from '../picker/AppDatePicker.vue';
interface IModel {
  event: IEvent;
}
const props = defineProps<IModel>();
const emit = defineEmits(['form:cancel', 'form:update', 'form:store', 'form:error']);

const formModel = reactive<IEvent>({
  ...props.event
});

const eventStore = useCalendarStore();
const submiting = ref(false);
const showMenu = ref(false);
const handleSubmit = (e) => {
  e.preventDefault();
  submiting.value = true;
  if (formModel.id) {
    eventStore
      .updateEvent(formModel)
      .then(() => {
        emit('form:update', formModel);
        submiting.value = false;
      })
      .catch(() => {
        emit('form:error');
        submiting.value = false;
      });
  } else {
    eventStore
      .addEvent(formModel)
      .then(() => {
        emit('form:store', formModel);
        submiting.value = false;
      })
      .catch(() => {
        emit('form:error');
        submiting.value = false;
      });
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
    <VToolbar tag="div" color="transparent">
      <VToolbarTitle>Event Form</VToolbarTitle>
      <VBtn icon="mdi-close" @click="$emit('form:cancel')"></VBtn>
    </VToolbar>
    <VCardText>
      <VForm>
        <VRow class="d-flex mb-3">
          <VCol cols="12">
            <VLabel class="mb-1">Title</VLabel>
            <VTextField v-model="formModel.title" variant="outlined" color="primary" name="title" />
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">Calendar</VLabel>
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
            <VLabel class="mb-1">Start Date</VLabel>
            <VMenu v-model="showMenu">
              <template v-slot:activator="{ props: menu }">
                <VTextField
                  v-model="formModel.start"
                  v-bind="menu"
                  variant="outlined"
                  color="primary"
                  name="start"
                  type="datetime"
                  :append-inner-icon="showMenu === true ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                />
              </template>
              <VDatePicker v-model="formModel.start" width="100%" />
            </VMenu>
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">End Date</VLabel>
            <AppDatePicker v-model="formModel.end" />
            <!-- <VTextField v-model="formModel.end" variant="outlined" color="primary" name="end" type="datetime" />1 -->
          </VCol>
          <VCol cols="12">
            <VSwitch v-model="formModel.allDay" label="All day" />
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">Event URL</VLabel>
            <VTextField v-model="formModel.url" variant="outlined" color="primary" name="url" type="url" />
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">Location</VLabel>
            <VTextField v-model="formModel.extendedProps.location" variant="outlined" color="primary" name="location" />
          </VCol>
          <VCol cols="12">
            <VLabel class="mb-1">Description</VLabel>
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
    <div class="d-flex justify-end pa-3">
      <VBtn @click="handleCancel" variant="plain">Cancel</VBtn>
      <VBtn color="primary" @click="handleSubmit" :loading="submiting">Submit</VBtn>
    </div>
  </VCard>
</template>
