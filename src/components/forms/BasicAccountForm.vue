<script lang="ts" setup>
import { reactive } from 'vue';
export interface IAccount {
  id?: number;
  firstName: string;
  lastName: string;
  country: string;
  lang: string;
  birthDate: string;
  phoneNo: number;
}

interface IModel {
  account: IAccount;
}

const props = defineProps<IModel>();
const formModel = reactive<IAccount>({
  ...props.account
});
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico'];
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'];
</script>

<template>
  <VForm class="mt-2">
    <VRow>
      <VCol md="6" cols="12">
        <VTextField v-model="formModel.firstName" label="First name" />
      </VCol>
      <VCol md="6" cols="12">
        <VTextField v-model="formModel.lastName" label="Last name" />
      </VCol>
      <VCol cols="12" md="6">
        <VSelect v-model="formModel.country" :items="countryList" label="Country" />
      </VCol>
      <VCol cols="12" md="6">
        <VSelect v-model="formModel.lang" :items="languageList" label="Language" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="formModel.birthDate" label="Birth Date" placeholder="YYYY-MM-DD" />
      </VCol>
      <VCol cols="12" md="6">
        <VTextField v-model="formModel.phoneNo" type="number" label="Phone No." />
      </VCol>
    </VRow>
  </VForm>
</template>
