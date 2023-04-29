<script setup lang="ts">
import UiParentCard from '@/components/shared/UiParentCard.vue';
import Heading from '@/components/style-components/typography/Heading.vue';
import Default from '@/components/style-components/typography/DefaultText.vue';
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Default Text">
        <Heading />
      </UiParentCard>
      <UiParentCard title="Default Text" class="mt-6">
        <Default />
      </UiParentCard>
    </v-col>
  </v-row>
</template>
