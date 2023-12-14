<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import RegisterForm from '@/components/forms/RegisterForm.vue';
</script>
<template>
  <div class="auth">
    <div class="auth-wrapper">
      <VCard rounded="md" elevation="10" class="mx-auto" max-width="500">
        <VCardItem class="pa-sm-8">
          <div class="d-flex justify-center py-4">
            <Logo :height="32" />
          </div>
          <div class="text-body-1 text-muted text-center mb-3">Vue Material Admin</div>
          <RegisterForm />
          <h5 class="text-muted text-center mt-3">
            Already have an Account?
            <RouterLink to="/auth/login" class="text-primary text-decoration-none"> Sign In</RouterLink>
          </h5>
        </VCardItem>
      </VCard>
    </div>
  </div>
</template>
