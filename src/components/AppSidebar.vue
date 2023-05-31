<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import { reactive, computed } from 'vue';
const items = [
  { type: 'subheader', title: 'Apps' },
  {
    title: 'Dashboard',
    props: {
      prependIcon: 'mdi-view-dashboard-outline',
      link: true,
      to: '/',
      exact: true
    },
    value: '/'
  },
  {
    title: 'Chat',
    props: {
      prependIcon: 'mdi-chat',
      link: true,
      to: '/chat',
      exact: true
    },
    value: '/chat'
  },
  {
    title: 'Calendar',
    props: {
      prependIcon: 'mdi-calendar-blank-outline',
      link: true,
      to: '/calendar',
      exact: true
    },
    value: '/calendar'
  },
  { type: 'subheader', title: 'Widgets' },
  {
    title: 'Card',
    props: {
      prependIcon: 'mdi-card',
      link: true,
      to: '/widget/card',
      exact: true
    },
    value: '/widget/card'
  },
  { type: 'subheader', title: 'Auth' },
  {
    title: 'Login',
    props: {
      prependIcon: 'mdi-login-variant',
      link: true,
      to: '/auth/login',
      exact: true
    },
    value: '/auth/login'
  },
  {
    title: 'Register',
    props: {
      prependIcon: 'mdi-account-arrow-right-outline',
      link: true,
      to: '/auth/login',
      exact: true
    },
    value: '/auth/register'
  },
  { type: 'subheader', title: 'Forms' },
  {
    title: 'Form',
    props: {
      prependIcon: 'mdi-form-textbox',
      link: true,
      to: '/form',
      exact: true
    },
    value: '/form'
  },
  { type: 'subheader', title: 'Tables' },
  {
    title: 'Table',
    props: {
      prependIcon: 'mdi-view-list-outline',
      link: true,
      to: '/user-table',
      exact: true
    },
    value: '/user-table'
  },
  { type: 'subheader', title: 'Chart' },
  {
    title: 'Chart',
    props: {
      prependIcon: 'mdi-chart-box-outline',
      link: true,
      to: '/chart',
      exact: true
    },
    value: '/chart'
  }
];

const drawerProps = reactive({
  rail: false,
  railWidth: 256,
  icon: 'mdi-arrow-left'
});

const handleDrawerWidth = () => {
  const rail = drawerProps.rail;
  const railWidth = drawerProps.railWidth;
  drawerProps.rail = !rail;
  drawerProps.railWidth = railWidth == 64 ? 256 : 64;
  drawerProps.icon = drawerProps.railWidth === 256 ? 'mdi-arrow-expand-left  ' : 'mdi-arrow-expand-right';
};

const menus = computed(() => {
  if (drawerProps.railWidth === 256) {
    return items;
  } else {
    return items.filter((item) => {
      return item.type !== 'subheader';
    });
  }
});
</script>

<template>
  <VNavigationDrawer :rail-width="drawerProps.railWidth" :rail="drawerProps.rail" :border="true" :elevation="1">
    <VToolbar class="px-3">
      <Logo :height="26" />
      <VToolbarTitle>Materiv</VToolbarTitle>
    </VToolbar>
    <div class="app-drawer__inner">
      <VList :items="menus" active-color="primary" class="pa-0 menu-list" />
    </div>
    <VBtn
      class="btn-collapse"
      rounded="lg"
      color="white"
      size="x-small"
      :icon="drawerProps.icon"
      @click="handleDrawerWidth"
      :style="{ left: drawerProps.railWidth - 12 + 'px' }"
    />
  </VNavigationDrawer>
</template>

<style lang="scss">
.btn-collapse {
  position: absolute;
  inset-block-start: 50%;
  transform: translateY(-50%);
}
.menu-list {
  .v-list-item__prepend > .v-icon {
    margin-inline-end: 16px;
  }
}
</style>
