<script lang="ts" setup>
import { watchEffect } from 'vue';
import { useChatStore } from '@/store/chat';
import ChatAvatar from '@/components/chat/ChatAvatar.vue';
const store = useChatStore();
watchEffect(() => {
  store.initChat();
});
const handleSentMsg = () => {};
</script>
<template>
  <VSheet elevation="10">
    <VLayout class="chat">
      <VNavigationDrawer :width="360" absolute touchless location="start">
        <VToolbar style="background-color: #fff" flat tag="div">
          <VTextField class="mx-5" append-inner-icon="mdi-magnify"></VTextField>
        </VToolbar>
        <VDivider />
        <VList lines="two">
          <VListSubheader>Recent</VListSubheader>
          <VDivider />
          <template v-for="chat in store.chats">
            <VListItem>
              <template v-slot:prepend>
                <ChatAvatar
                  :username="chat.user ? chat.user.username : ''"
                  :avatar="chat.user ? chat.user.avatar : ''"
                />
              </template>
              <VListItemTitle class="ml-3">{{ chat.user ? chat.user.username : '' }}</VListItemTitle>
              <VListItemSubtitle class="ml-3">{{ chat.user ? chat.user.role : '' }}</VListItemSubtitle>
            </VListItem>
            <VDivider />
          </template>
          <VListSubheader>Contacts</VListSubheader>
          <template v-for="contact in store.chatContacts">
            <VListItem>
              <template v-slot:prepend>
                <ChatAvatar :username="contact.fullName" />
              </template>
              <VListItemTitle class="ml-3">{{ contact.fullName }}</VListItemTitle>
              <VListItemSubtitle class="ml-3">{{ contact.role }}</VListItemSubtitle>
            </VListItem>
            <VDivider />
          </template>
        </VList>
      </VNavigationDrawer>

      <VMain>
        <VSheet class="chat-sheet">
          <VToolbar class="px-5" style="background-color: #fff" flat tag="div">
            <!-- avatar -->
            <VList class="pa-0">
              <VListItem class="px-0">
                <template v-slot:prepend>
                  <VBadge dot location="bottom right" offset-x="3" offset-y="0" bordered>
                    <VAvatar class="cursor-pointer">
                      <VImg src="/assets/images/users/user.jpg" />
                    </VAvatar>
                  </VBadge>
                </template>
                <VListItemTitle class="ml-3">Lucy</VListItemTitle>
                <VListItemSubtitle class="ml-3">Design</VListItemSubtitle>
              </VListItem>
            </VList>
            <VSpacer />
            <VBtn icon="mdi-video-outline" size="36" density="comfortable"></VBtn>
            <VBtn icon="mdi-phone-outline" size="36" density="comfortable"></VBtn>
            <VBtn icon="mdi-magnify" size="36" density="comfortable"></VBtn>
          </VToolbar>
          <VDivider />
          <div class="chat-container"></div>
          <VForm class="chat-log-message-form mb-5 mx-5">
            <VTextField
              variant="solo"
              class="chat-message-input"
              placeholder="Type your message..."
              density="default"
              autofocus
            >
              <template #append-inner>
                <VBtn density="comfortable" icon="mdi-image-outline" variant="text"> </VBtn>
                <VBtn density="comfortable" class="mx-2" icon="mdi-phone-outline" variant="text"> </VBtn>
                <VBtn @click="handleSentMsg"> Send </VBtn>
              </template>
            </VTextField>

            <input ref="refInputEl" type="file" name="file" accept=".jpeg,.png,.jpg,GIF" hidden />
          </VForm>
        </VSheet>
      </VMain>
    </VLayout>
  </VSheet>
</template>
<style lang="scss">
.chat {
  &-sheet {
    min-height: calc(100vh - 64px - 62px - 16px - 24px - 64px);
    background-color: #fbfbfb;
  }
  &-container {
    min-height: calc(100vh - 64px - 62px - 16px - 24px - 64px - 64px - 64px);
    background-color: #fbfbfb;
  }
}
</style>
