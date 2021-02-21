<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <img
              src="/static/m.png"
              alt="Vue Material Admin"
              height="48"
              contain
            />
            <h1 class="primary--text display-1 page-login_title">
              Material Admin Template
            </h1>
          </v-card-title>
          <v-card-text>
            <v-alert type="info">
              {{ __('login_account') }} : admin/admin
            </v-alert>
            <v-form
              ref="form"
              class="my-10"
              lazy-validation
              v-model="formValid"
            >
              <v-text-field
                append-icon="mdi-email"
                autocomplete="off"
                name="login"
                :label="__('username')"
                :placeholder="__('username')"
                type="text"
                required
                outlined
                :rules="formRule.username"
                v-model="formModel.username"
              />
              <v-text-field
                append-icon="mdi-lock"
                autocomplete="off"
                name="password"
                :label="__('password')"
                :placeholder="__('password')"
                type="password"
                :rules="formRule.password"
                required
                outlined
                v-model="formModel.password"
                v-on:keyup.enter="login"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-tooltip v-for="item in socialIcons" :key="item.text" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="handleSocialLogin"
                >
                  <v-icon v-text="item.icon" />
                </v-btn>
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
            <v-spacer />
            <v-btn large text @click="login">
              {{ __('register') }}
            </v-btn>
            <v-btn large tile color="primary" @click="login" :loading="loading">
              {{ __('login') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageLogin',
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: null,
        password: null
      },
      formRule: {
        username: [(v) => !!v || this.__('rule.required', ['username'])],
        password: [(v) => !!v || this.__('rule.required', ['password'])]
      },
      socialIcons: [
        {
          text: 'Google',
          icon: 'mdi-google'
        },
        {
          text: 'Facebook',
          icon: 'mdi-facebook'
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter'
        }
      ]
    }
  },
  computed: {
    prefix() {
      return ''
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('login', this.formModel)
          .then(() => {
            this.loading = false
            this.$router.push('/dashboard')
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
    handleSocialLogin() {}
  }
}
</script>

<style lang="sass" scoped>
.page-login
  &__card
  max-width: 600px
  margin: 0 auto
</style>
