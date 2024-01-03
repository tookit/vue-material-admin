<script setup lang="ts">
import Logo from '@/components/Logo.vue';
/* Login form */
import LoginForm from '@/components/forms/LoginForm.vue';
</script>
<template>
  <div class="auth">
    <div class="auth-wrapper">
      <VCard rounded="md" elevation="10" class="login-card" max-width="500">
        <VCardItem class="pa-sm-8">
          <div class="d-flex flex-column align-center justify-center py-4">
            <Logo :height="32" />
            <h3>Vue Material Admin</h3>
          </div>
          <LoginForm />
          <div class="d-flex align-center justify-center">
            <a href="/auth/register" class="text-primary text-decoration-none"> {{ $t('Create account') }}</a>
          </div>
        </VCardItem>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
.login-card {
  overflow: visible;
  &::before {
    content: '';
    background: url(/assets/svg/dot2.svg);
    width: 6rem;
    height: 6rem;
    position: absolute;
    bottom: -2rem;
    left: -2rem;
    z-index: 0;
  }
}
</style>
