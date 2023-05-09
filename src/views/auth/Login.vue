<script setup lang="ts">
import Logo from '@/components/Logo.vue';
/* Login form */
import LoginForm from '@/components/forms/LoginForm.vue';
</script>
<template>
  <div class="authentication">
    <VContainer class="pa-0">
      <VRow>
        <VCol cols="12" class="pa-0">
          <div class="h-100vh d-flex justify-center align-center">
            <VCard rounded="md" elevation="10" class="px-sm-1 px-0 mx-auto" max-width="500">
              <VCardItem class="pa-sm-8">
                <div class="d-flex justify-center py-4">
                  <Logo :height="32" />
                </div>
                <div class="text-body-1 text-muted text-center mb-3">Vue Material Admin</div>
                <LoginForm />
                <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                  <RouterLink to="/auth/register" class="text-primary text-decoration-none">
                    Create an account</RouterLink
                  >
                </h6>
              </VCardItem>
            </VCard>
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
