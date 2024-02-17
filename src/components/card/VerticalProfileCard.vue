<script setup lang="ts">
import { reactive, watch } from 'vue';
// import { useUserStore } from '@/store';
import { IUser } from '@/api/type';
import ChatAvatar from '../chat/ChatAvatar.vue';
interface IModel {
  user: IUser;
}
const props = defineProps<IModel>();

const formModel = reactive<IUser>({
  ...props.user
});

// const userStore = useUserStore();
watch(props, () => {
  Object.assign(formModel, props.user);
});
</script>

<template>
  <VCard>
    <VToolbar tag="div" color="transparent">
      <VSpacer />
      <VBtn icon="mdi-dots-vertical"> </VBtn>
    </VToolbar>
    <VCardText class="text-center">
      <ChatAvatar :username="user.username" :avatar="user.avatar" status="online" size="160" />
      <div class="mt-5">
        <h3>{{ user.username }}</h3>
        <p>{{ user.role }}</p>
      </div>
    </VCardText>
    <VCardItem>
      <div class="justify-space-evenly d-flex">
        <VBtn>Message</VBtn>
        <VBtn>Contact</VBtn>
      </div>
    </VCardItem>
    <VCardItem>
      <VList>
        <v-list-subheader>{{ $t('profile') }}</v-list-subheader>
        <VListItem>
          <template v-slot:prepend>
            <v-icon icon="mdi-email"></v-icon>
          </template>
          <VListItemTitle>{{ user.email }}</VListItemTitle>
        </VListItem>
        <VListItem>
          <template v-slot:prepend>
            <v-icon icon="mdi-phone"></v-icon>
          </template>
          <VListItemTitle>{{ user.phone }}</VListItemTitle>
        </VListItem>
        <VListItem>
          <template v-slot:prepend>
            <v-icon icon="mdi-city"></v-icon>
          </template>
          <VListItemTitle>{{ user.country }}</VListItemTitle>
        </VListItem>
        <VListItem>
          <template v-slot:prepend>
            <v-icon icon="mdi-domain"></v-icon>
          </template>
          <VListItemTitle>{{ user.company }}</VListItemTitle>
        </VListItem>
      </VList>
    </VCardItem>
    <VCardActions> </VCardActions>
  </VCard>
</template>
