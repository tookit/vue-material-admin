<template>
  <v-card :loading="loading" tile>
    <v-toolbar tile dark color="primary">
      <v-toolbar-title> {{ formTitle }}</v-toolbar-title>
    </v-toolbar>
    <v-divider />
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-container>
          <v-row>
            <v-col :cols="6">
              <v-text-field
                outlined
                :label="form.username.label"
                :placeholder="form.username.placeholder"
                v-model="formModel.username"
                required
                :append-icon="'mdi-account-check'"
                :rules="form.username.rules"
              />
            </v-col>
            <v-col :cols="6">
              <v-text-field
                outlined
                :label="form.password.label"
                :placeholder="form.password.placeholder"
                v-model="formModel.password"
                required
                :append-icon="'mdi-account-check'"
                :rules="form.password.rules"
              />
            </v-col>
            <v-col :cols="12">
              <v-text-field
                outlined
                :label="form.email.label"
                :placeholder="form.email.placeholder"
                v-model="formModel.email"
                required
                :append-icon="'mdi-email'"
                :rules="form.email.rules"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-divider class="mt-5"></v-divider>
    <v-card-actions>
      <v-btn @click="handleCancelForm" text>Cancel</v-btn>
      <v-spacer />
      <v-btn :loaidng="loading" tile color="primary" @click="handleSubmitForm"
        >Submit</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { EMAIL } from '@/util/regex'
export default {
  props: {},
  data: () => ({
    valid: true,
    loading: false,
    formModel: {
      username: null,
      password: null,
      email: null
    },

    form: {
      username: {
        label: 'Username',
        placeholder: 'Tookit',
        rules: [(v) => !!v || 'This field is required']
      },
      password: {
        label: 'Password',
        placeholder: 'xxx',
        rules: [(v) => !!v || 'This field is required']
      },
      email: {
        label: 'Email',
        placeholder: 'wangqiangshen@gmail.com',
        rules: [
          (v) => !!v || 'This field is required',
          (v) => EMAIL.test(v) || 'Invalid email'
        ]
      }
    },

    formHasErrors: false
  }),
  computed: {
    formTitle() {
      return 'Register a new user for Chat'
    }
  },
  watch: {},
  methods: {
    handleCancelForm() {
      this.$refs.form.reset()
    },
    handleSubmitForm() {
      this.loading = true
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('register', this.formModel)
          .then(() => {
            this.loading = false
            this.$emit('register:success')
          })
          .catch(() => {
            this.loading = false
          })
      }
    }
  }
}
</script>
