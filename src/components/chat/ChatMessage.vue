<script lang="ts" setup>
import ChatAvatar from './ChatAvatar.vue';
</script>

<template>
  <div class="message d-flex">
    <ChatAvatar class="message-avatar" />
    <div class="message-item">
      <p class="message-item__text elevation-1">This is a test message</p>
      <div class="message-item__meta">
        <VIcon icon="mdi-check" size="24" color="success" />
        <span class="ml-3 text-body-1">3:46 PM</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.message {
  &-avatar {
    margin-right: 16px;
  }
  &-item {
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
