<template>
  <v-card :loading="loading" tile>
    <v-subheader>Login as a exist new user</v-subheader>
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
export default {
  props: {},
  data: () => ({
    valid: true,
    loading: false,
    formModel: {
      username: null,
      password: null
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
      }
    },

    formHasErrors: false
  }),
  computed: {
    formTitle() {
      return 'Login'
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
          .dispatch('login', this.formModel)
          .then(() => {
            this.loading = false
            this.$emit('login:success')
          })
          .catch(() => {
            this.loading = false
          })
      }
    }
  }
}
</script>
