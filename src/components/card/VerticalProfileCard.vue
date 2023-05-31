<script setup lang="ts">
import { reactive, defineEmits, watch } from 'vue';
import { useUserStore } from '@/store/user';
import { IUser } from '@/api/type';
interface IModel {
  user: IUser;
}
const props = defineProps<IModel>();
const emit = defineEmits(['form:cancel']);

const formModel = reactive<IUser>({
  ...props.user
});

const userStore = useUserStore();
const handleSubmit = (e) => {
  e.preventDefault();
};
const handleCancel = () => {
  emit('form:cancel');
};

watch(props, () => {
  Object.assign(formModel, props.user);
});
</script>

<template>
  <VCard> </VCard>
</template>
