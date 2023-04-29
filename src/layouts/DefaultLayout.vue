<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppSidebar from '@/components/AppSidebar.vue';
import AppToolbar from '@/components/AppToolbar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const items = computed(() => {
  return [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: route.name,
      href: route.path
    }
  ];
});
</script>

<template>
  <VApp class="app">
    <!------Sidebar-------->
    <AppSidebar />
    <!------Header-------->
    <AppToolbar />
    <!------Page-------->
    <VMain class="app-main">
      <VContainer class="app-container">
        <VBreadcrumbs :items="items" class="pa-5"></VBreadcrumbs>
        <div class="page-wrapper">
          <RouterView />
        </div>
      </VContainer>
    </VMain>
  </VApp>
</template>

<style lang="scss">
.app-main {
  background-color: #fbfbfb;
  .app-container {
    max-width: 1440px;
  }
  .page-wrapper {
    min-height: 100vh;
  }
}
</style>
