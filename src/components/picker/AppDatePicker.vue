<script lang="ts" setup>
import { ref } from 'vue';

const model = defineModel();
const showMenu = ref(false);
const props = defineProps({
  name: String
});
console.log(showMenu);
</script>

<template>
  <VMenu v-model="showMenu">
    <template v-slot:activator="{ props: menu }">
      <VTextField
        v-model="model"
        v-bind="menu"
        variant="outlined"
        color="primary"
        :name="props.name"
        type="datetime"
        :append-inner-icon="showMenu === true ? 'mdi-chevron-up' : 'mdi-chevron-down'"
      />
    </template>
    <VDatePicker v-model="model" width="100%" />
  </VMenu>
</template>
