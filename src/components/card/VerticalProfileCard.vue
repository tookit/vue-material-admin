<script setup lang="ts">
import { reactive, defineEmits, watch } from 'vue';
import { useUserStore } from '@/store/user';
import { IUser } from '@/api/type';
import ChatAvatar from '../chat/ChatAvatar.vue';
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
const computeAvatarText = (value) => {
  if (!value) return '';
  const nameArray = value.split(' ');
  return nameArray.map((word) => word.charAt(0).toUpperCase()).join('');
};
</script>

<template>
  <VCard>
    <VCardText>
      <ChatAvatar :username="user.username" :avatar="user.avatar" status="online" size="160" />
    </VCardText>
  </VCard>
</template>
