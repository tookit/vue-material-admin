<script lang="ts" setup>
import { ref } from 'vue';
const twitterLink = ref('');
const facebookLink = ref('');
const googlePlusLink = ref('');
const linkedInLink = ref('');
const instagramLink = ref('');
const quoraLink = ref('');
</script>

<template>
  <VForm class="mt-2">
    <VRow>
      <VCol cols="12" md="6">
        <VTextField v-model="twitterLink" append-inner-icon="mdi-twitter" label="Twitter" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="facebookLink" append-inner-icon="mdi-facebook" label="Facebook" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="googlePlusLink" append-inner-icon="mdi-google-plus" label="Google+" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="linkedInLink" append-inner-icon="mdi-linkedin" label="LinkedIn" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="instagramLink" append-inner-icon="mdi-instagram" label="Instagram" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="quoraLink" append-inner-icon="mdi-quora" label="Quora" />
      </VCol>
    </VRow>
  </VForm>
</template>
