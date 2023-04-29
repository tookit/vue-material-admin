<script setup lang="ts">
import HorizontalForm from '@/components/form-layout/HorizontalForm.vue';
import HorizontalFormWithIcon from '@/components/form-layout/HorizontalFormWithIcon.vue';
import VerticalForm from '@/components/form-layout/VerticalForm.vue';
import VerticalFormWithIcon from '@/components/form-layout/VerticalFormWithIcon.vue';
import TabForm from '@/components/form-layout/TabForm.vue';
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12" md="6">
        <!-- 👉 Horizontal Form -->
        <VCard>
          <VCardItem> <VCardTitle>Horizontal Form</VCardTitle> </VCardItem>
          <VCardText>
            <HorizontalForm />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Horizontal Form With Icons-->
        <VCard>
          <VCardItem> <VCardTitle>Horizontal Form with Icons</VCardTitle> </VCardItem>
          <VCardText>
            <HorizontalFormWithIcon />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Horizontal Form With Icons-->
        <VCard>
          <VCardItem><VCardTitle>Vertical Form</VCardTitle></VCardItem>
          <VCardText>
            <VerticalForm />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Horizontal Form With Icons-->
        <VCard>
          <VCardItem><VCardTitle>Vertical Form With Icon</VCardTitle></VCardItem>
          <VCardText>
            <VerticalFormWithIcon />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="12">
        <VCard>
          <VCardItem><VCardTitle>Form With Tab</VCardTitle></VCardItem>
          <VCardText>
            <TabForm />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
