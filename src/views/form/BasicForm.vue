<template>
  <div class="page-forms">
    <v-container>
      <v-row>
        <v-col :cols="12" :lg="6">
          <contact-form />
        </v-col>
        <v-col :col="12" :lg="6">
          <payment-form />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/form/ContactForm'
import PaymentForm from '@/components/form/PaymentForm'
export default {
  components: {
    ContactForm,
    PaymentForm,
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
