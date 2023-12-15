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
        <VCard class="form-card">
          <VCardItem> <VCardTitle>Horizontal Form</VCardTitle> </VCardItem>
          <VCardText><HorizontalForm /> </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Horizontal Form With Icons-->
        <VCard class="form-card">
          <VCardItem> <VCardTitle>Horizontal Form with Icons</VCardTitle> </VCardItem>
          <VCardText>
            <HorizontalFormWithIcon />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Horizontal Form With Icons-->
        <VCard class="form-card">
          <VCardItem><VCardTitle>Vertical Form</VCardTitle></VCardItem>
          <VCardText>
            <VerticalForm />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Horizontal Form With Icons-->
        <VCard class="form-card">
          <VCardItem><VCardTitle>Vertical Form With Icon</VCardTitle></VCardItem>
          <VCardText>
            <VerticalFormWithIcon />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="12">
        <VSheet class="pa-4">
          <TabForm />
        </VSheet>
      </VCol>
    </VRow>
  </div>
</template>
<style lang="scss">
.form-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
}
</style>
