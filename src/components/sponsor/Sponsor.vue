<template>
  <div class="pa-3">
    <v-subheader v-if="drawerWidth !== 64">
      {{ __('sponsor') }}
    </v-subheader>
    <a :href="sponsor.href">
      <v-img
        :src="drawerWidth === 64 ? sponsor.srcMini : sponsor.src"
        height="64px"
        alt="Optic fiber component provider"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    drawerWidth: [Number, String],
  },
  data() {
    return {
      sponsor: {
        href: 'https://www.kamefiber.com/',
        src: '/sponsor/logo.png',
        srcMini: '/sponsor/logo_mini.png',
      },
    }
  },
}
</script>
