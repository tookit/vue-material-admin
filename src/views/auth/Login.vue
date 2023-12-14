<script setup lang="ts">
import Logo from '@/components/Logo.vue';
/* Login form */
import LoginForm from '@/components/forms/LoginForm.vue';
</script>
<template>
  <div class="page-auth">
    <div class="page-auth-wrapper">
      <VCard rounded="md" elevation="10" class="login-card" max-width="500">
        <VCardItem class="pa-sm-8">
          <div class="d-flex justify-center py-4">
            <Logo :height="32" />
          </div>
          <h3 class="text-center">Vue Material Admin</h3>
          <LoginForm />
          <div class="d-flex align-center justify-center">
            <RouterLink to="/auth/register" class="text-primary text-decoration-none"> Create an account</RouterLink>
          </div>
        </VCardItem>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
.login-card {
  overflow: visible;
}
.login-card::before {
  content: '';
  background: url(/assets/svg/dot2.svg);
  width: 6rem;
  height: 6rem;
  position: absolute;
  bottom: -2rem;
  left: -2rem;
  z-index: 0;
}
</style>
