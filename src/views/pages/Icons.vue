<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Icons">
        <div class="pa-7 pt-0">
          <iframe src="https://tabler-icons.io/" title="Inline Frame Example" frameborder="0" width="100%" height="650"></iframe>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
