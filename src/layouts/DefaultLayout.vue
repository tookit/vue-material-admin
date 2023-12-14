<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import AppSidebar from '@/components/AppSidebar.vue';
import AppToolbar from '@/components/AppToolbar.vue';
const route = useRoute();
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
        <div class="page-wrapper">
          <h3 class="page-title">{{ route.name }}</h3>
          <RouterView />
        </div>
      </VContainer>
    </VMain>
  </VApp>
</template>

<style lang="scss">
.app-main {
  background-color: var(--v-theme-background, '#f6f6f6');
  .app-container {
    max-width: 1440px;
    .page-title {
      color: #3f434a;
      font-size: 28px;
      font-weight: 700;
      padding: 30px 0;
    }
  }
}
</style>
