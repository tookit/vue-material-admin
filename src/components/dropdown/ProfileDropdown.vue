<script setup lang="ts">
import { UserIcon, MailIcon, ListCheckIcon } from 'vue-tabler-icons';
const items = [
  {
    title: 'Profile',
    props: {
      prependIcon: UserIcon,
      link: true,
      to: '/profile',
      exact: true
    },
    value: '/profile'
  },
  {
    title: 'Message',
    props: {
      prependIcon: MailIcon,
      link: true,
      to: '/message',
      exact: true
    },
    to: '/message'
  },
  {
    title: 'Task',
    props: {
      prependIcon: ListCheckIcon,
      link: true,
      to: '/task',
      exact: true
    },
    to: '/task'
  }
];
</script>

<template>
  <VMenu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <VBtn class="custom-hover-primary mr-3" variant="text" v-bind="props" icon>
        <VBadge dot color="success" offset-x="0" offset-y="3">
          <VAvatar size="35">
            <img src="@/assets/images/users/avatar-1.jpg" height="35" alt="user" />
          </VAvatar>
        </VBadge>
      </VBtn>
    </template>
    <VSheet rounded="md" width="200" elevation="10" class="mt-2">
      <VList :items="items" lines="one" density="compact" class="pa-0" color="primary" />
      <div class="pt-4 pb-4 px-5 text-center">
        <VBtn to="/auth/login" color="primary" variant="outlined" block>Logout</VBtn>
      </div>
    </VSheet>
  </VMenu>
</template>
