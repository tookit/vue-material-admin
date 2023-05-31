<script lang="ts" setup>
import { VSkeletonLoader } from 'vuetify/lib/labs/VSkeletonLoader/index';
import { IChatMessage, IUser } from '@/api/type';
import { ref, watchEffect, reactive } from 'vue';
import { useChatStore } from '@/store/chat';
import ChatAvatar from '@/components/chat/ChatAvatar.vue';
import ChatMessage from '@/components/chat/ChatMessage.vue';
import VerticalProfileCard from '@/components/card/VerticalProfileCard.vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
const store = useChatStore();
const loading = ref(true);
const showDialog = ref(false);
const selectedUser = reactive<IUser>({
  id: 0,
  username: '',
  company: '',
  country: '',
  contact: '',
  currentPlan: 'free',
  email: '',
  avatar: '',
  billing: '',
  role: '',
  status: 'active'
});
watchEffect(() => {
  store
    .initChat()
    .then((resp) => {
      console.log(resp);
      loading.value = false;
    })
    .catch((err) => {
      console.log(err);
      loading.value = false;
    });
});
const messages: Ref<IChatMessage[]> = ref([]);
const handleSentMsg = () => {
  console.log('here');
};
const handleViewProfile = (contact) => {
  Object.assign(selectedUser, contact);
  showDialog.value = true;
};
const handleViewChat = (chat) => {
  messages.value = chat.messages;
};
</script>
<template>
  <VSheet elevation="10">
    <VLayout class="chat">
      <VNavigationDrawer :width="360" absolute touchless location="start">
        <VToolbar flat tag="div">
          <VTextField class="mx-5" append-inner-icon="mdi-magnify"></VTextField>
        </VToolbar>
        <VDivider />
        <VList lines="two" class="pa-0">
          <VListSubheader>Recent</VListSubheader>
          <VDivider />
          <VSkeletonLoader v-if="loading" type="list-item-avatar"></VSkeletonLoader>
          <template v-for="chat in store.chats" :key="chat.id">
            <VListItem @click="handleViewChat(chat)" :value="chat.id">
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
          <VDivider />
          <VSkeletonLoader v-if="loading" type="list-item-avatar"></VSkeletonLoader>
          <template v-for="contact in store.chatContacts" :key="contact.id">
            <VListItem @click="handleViewProfile(contact)">
              <template v-slot:prepend>
                <ChatAvatar :username="contact.fullName" :avatar="contact.avatar" />
              </template>
              <VListItemTitle class="ml-3">{{ contact.fullName }}</VListItemTitle>
              <VListItemSubtitle class="ml-3">{{ contact.role }}</VListItemSubtitle>
            </VListItem>
            <VDivider />
          </template>
        </VList>
      </VNavigationDrawer>
      <VMain>
        <VSheet class="chat-sheet fill-height">
          <VToolbar class="px-5" flat tag="div">
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
          <div class="chat-container">
            <PerfectScrollbar tag="div" class="chat-scroll">
              <ChatMessage
                v-for="(msg, key) in messages"
                :key="key"
                :avatar="msg.sender ? msg.sender.avatar : ''"
                :username="msg.sender ? msg.sender.username : ''"
                :sent-at="msg.time"
                :message="msg.message"
              />
            </PerfectScrollbar>
          </div>
          <VForm class="chat-form mb-5 mx-5">
            <VTextField
              variant="solo"
              class="chat-message-input"
              placeholder="Type your message..."
              density="default"
              autofocus
            >
              <template #append-inner>
                <VBtn height="36" width="36" density="comfortable" icon="mdi-image-outline" variant="text"> </VBtn>
                <VBtn height="36" width="36" density="comfortable" class="mx-2" icon="mdi-phone-outline" variant="text">
                </VBtn>
                <VBtn @click="handleSentMsg">Send</VBtn>
              </template>
            </VTextField>
            <input ref="refInputEl" type="file" name="file" accept=".jpeg,.png,.jpg,GIF" hidden />
          </VForm>
        </VSheet>
      </VMain>
    </VLayout>
    <VDialog v-model="showDialog" width="640px" eager>
      <VerticalProfileCard :user="selectedUser" @form:cancel="showDialog = false" />
    </VDialog>
  </VSheet>
</template>
<style lang="scss">
.chat {
  &-container {
    min-height: calc(100vh - 64px - 62px - 16px - 24px - 64px - 64px - 64px);
    padding: 24px;
    .chat-scroll {
      height: calc(100vh - 64px - 62px - 16px - 24px - 64px - 64px - 64px - 48px);
    }
  }
}
</style>
