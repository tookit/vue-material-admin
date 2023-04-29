<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import RegisterForm from '@/components/forms/RegisterForm.vue';
</script>
<template>
  <div class="authentication">
    <VContainer fluid class="pa-3">
      <VRow class="h-100vh d-flex justify-center align-center">
        <VCol cols="12" lg="4" xl="3" class="d-flex align-center">
          <VCard rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
            <VCardItem class="pa-sm-8">
              <div class="d-flex justify-center py-4">
                <Logo />
              </div>
              <div class="text-body-1 text-muted text-center mb-3">Your Social Campaigns</div>
              <RegisterForm />
              <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                Already have an Account?
                <RouterLink
                  to="/auth/login"
                  class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                >
                  Sign In</RouterLink
                >
              </h6>
            </VCardItem>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
