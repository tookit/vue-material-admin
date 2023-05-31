<script lang="ts" setup>
import ChatAvatar from './ChatAvatar.vue';
import { useUserStore } from '@/store';
interface Props {
  avatar?: string;
  username?: string;
  status?: string;
  message: string;
  sentAt: string;
}
const props = withDefaults(defineProps<Props>(), {
  avatar: '',
  username: 'Johh',
  status: 'online',
  message: '',
  sentAt: ''
});
const userStore = useUserStore();
const isMySelf = () => {
  console.log(userStore.username);
  return props.username === userStore.username;
};
</script>

<template>
  <div :class="{ 'd-flex': true, message: true, 'flex-row-reverse': !isMySelf() }">
    <ChatAvatar class="message-avatar" :avatar="props.avatar" :username="props.username" size="24" />
    <div class="message-item">
      <p class="message-item__text elevation-1">{{ props.message }}</p>
      <div class="message-item__meta">
        <VIcon icon="mdi-check-all" size="24" color="success" />
        <span class="ml-3 text-body-1">{{ props.sentAt }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.message.flex-row-reverse {
  .message-avatar {
    margin-left: 16px;
  }
}
.message {
  margin-bottom: 8px;
  &-avatar {
    margin-right: 16px;
  }
  &-item {
    margin-bottom: 24px;
    &__text {
      margin-bottom: 8px;
      background-color: #fff;
      padding: 8px 12px;
      border-end-end-radius: 6px;
      border-end-start-radius: 6px;
    }
  }
}
</style>
