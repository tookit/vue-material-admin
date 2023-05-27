<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import AppSidebar from '@/components/AppSidebar.vue';
import AppToolbar from '@/components/AppToolbar.vue';
const route = useRoute();
const items = computed(() => {
  return route.matched.map((item) => {
    return {
      title: String(item.name),
      href: item.path
    };
  });
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
  background-color: var(--v-theme-background);
  .app-container {
    max-width: 1440px;
  }
}
</style>
