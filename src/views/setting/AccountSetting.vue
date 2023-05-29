<script lang="ts" setup>
import { ref } from 'vue';
const firstName = ref('');
const lastName = ref('');
const country = ref();
const birthDate = ref('');
const phoneNo = ref<number>();
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico'];
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'];
const languages = ref('');
</script>

<template>
  <VCard flat>
    <VCardText>
      <VForm class="mt-2">
        <VRow>
          <VCol md="12" cols="12">
            <VTextField v-model="firstName" label="First name" />
          </VCol>
          <VCol md="12" cols="12">
            <VTextField v-model="lastName" label="Last name" />
          </VCol>
          <VCol cols="12" md="12">
            <VSelect v-model="country" :items="countryList" label="Country" />
          </VCol>

          <VCol cols="12" md="12">
            <VSelect v-model="languages" :items="languageList" label="Language" />
          </VCol>
          <VCol cols="12" md="12">
            <VTextField v-model="birthDate" label="Birth Date" placeholder="YYYY-MM-DD" />
          </VCol>
          <VCol cols="12" md="12">
            <VTextField v-model="phoneNo" type="number" label="Phone No." />
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
    <VCardText>
      <VBtn class="mr-3">Submit</VBtn>
      <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
    </VCardText>
  </VCard>
</template>
