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
    <VCardTitle>User Profile</VCardTitle>
    <VCardText>
      <VAvatar size="160" class="cursor-pointer" :color="user.avatar ? '' : 'surface-variant'">
        <VImg :src="user.avatar" v-if="user.avatar" />
        <span v-else>{{ computeAvatarText(user.username) }}</span>
      </VAvatar>
    </VCardText>
  </VCard>
</template>
