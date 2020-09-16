<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      outlined
      :label="form.name.label"
      :placeholder="form.name.placeholder"
      v-model="formModel.name"
      required
      :append-icon="'mdi-account-check'"
      :rules="form.name.rules"
    />
    <v-text-field
      outlined
      :label="form.email.label"
      :placeholder="form.email.placeholder"
      v-model="formModel.email"
      required
      :append-icon="'mdi-email'"
      :rules="form.email.rules"
    />
    <v-combobox
      outlined
      :items="cities"
      :label="form.city.label"
      :placeholder="form.city.placeholder"
      v-model="formModel.city"
      required
      :rules="form.city.rules"
    />
    <v-combobox
      outlined
      :label="form.state.label"
      :placeholder="form.state.placeholder"
      v-model="formModel.state"
      required
      :rules="form.state.rules"
    />
  </v-form>
</template>

<script>
import { EMAIL } from '@/util/regex'

export default {
  data() {
    return {
      valid: true,
      formModel: {
        name: null,
        email: null,
        city: null,
        state: null
      },
      form: {
        name: {
          label: 'Full Name',
          placeholder: 'Tookit',
          rules: [(v) => !!v || 'This field is required']
        },
        email: {
          label: 'Email',
          placeholder: 'wangqiangshen@gmail.com',
          rules: [
            (v) => !!v || 'This field is required',
            (v) => EMAIL.test(v) || 'Invalid email'
          ]
        },

        city: {
          label: 'City',
          placeholder: 'Shenzhen',
          rules: [(v) => !!v || 'This field is required']
        },
        state: {
          label: 'State/Provice/Region',
          placeholder: 'Guangdong',
          rules: [(v) => !!v || 'This field is required']
        }
      },
      cities: ['New York', 'Paris', 'Shenzhen'],
      formHasErrors: false
    }
  },
  computed: {
    formValue() {
      return [
        {
          text: this.form.name.label,
          value: this.formModel.name
        },
        {
          text: this.form.email.label,
          value: this.formModel.email
        },
        {
          text: this.form.city.label,
          value: this.formModel.city
        },
        {
          text: this.form.state.label,
          value: this.formModel.state
        }
      ]
    }
  }
}
</script>
