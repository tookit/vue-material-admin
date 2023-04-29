<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>

<template>
    <!-- -------------------------------------------------------------------- -->
    <!-- Card with Header & Footer -->
    <!-- -------------------------------------------------------------------- -->
    <v-card variant="outlined" elevation="0" class="withbg mb-6 overflow-hidden">
        <v-card-item>
            <v-card-title class="text-18">{{ title }}</v-card-title>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>
