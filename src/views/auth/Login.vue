<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col :cols="12">
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <img src="/static/m.png" alt="Vue Material Admin" height="48" contain />
            <div class="primary--text display-1">Material Admin Template</div>
          </v-card-title>
          <v-card-text>
            <v-alert type="success"> {{ $t('login_account') }} : admin/admin </v-alert>
            <v-form ref="form" v-model="formValid" class="my-10" lazy-validation>
              <v-text-field
                v-model="formModel.username"
                append-icon="mdi-email"
                autocomplete="off"
                name="login"
                :label="$t('username')"
                :placeholder="$t('username')"
                type="text"
                required
                outlined
                :rules="formRule.username"
              />
              <v-text-field
                v-model="formModel.password"
                append-icon="mdi-lock"
                autocomplete="off"
                name="password"
                :label="$t('password')"
                :placeholder="$t('password')"
                type="password"
                :rules="formRule.password"
                required
                outlined
                @keyup.enter="handleLogin"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-tooltip v-for="item in socialIcons" :key="item.text" bottom>
              <template #activator="{ on, attrs }">
                <v-btn color="primary" icon v-bind="attrs" v-on="on" @click="handleSocialLogin">
                  <v-icon v-text="item.icon" />
                </v-btn>
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
            <v-spacer />
            <v-btn large text @click="handleRegister">
              {{ $t('register') }}
            </v-btn>
            <v-btn large tile color="primary" :loading="loading" @click="handleLogin">
              {{ $t('login') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const name = 'page-login'
export default {
  name: name,
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: 'admin',
        password: 'admin',
      },
      formRule: {
        username: [(v) => !!v || this.$t('rule.required', ['username'])],
        password: [(v) => !!v || this.$t('rule.required', ['password'])],
      },
      socialIcons: [
        {
          text: 'Google',
          icon: 'mdi-google',
        },
        {
          text: 'Facebook',
          icon: 'mdi-facebook',
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter',
        },
      ],
    }
  },
  computed: {},
  methods: {
    handleLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('login', this.formModel)
          .then(() => {
            const redirect = this.$route.query.redirect
            const route = redirect ? { path: redirect } : { path: '/' }
            this.$router.push(route)
            this.loading = false
          })
          .catch(() => {
            window._VMA.$emit('SHOW_SNACKBAR', {
              show: true,
              text: 'Auth Failed',
              color: 'error',
            })
            this.loading = false
          })
      }
    },
    handleRegister() {
      console.log(this)
    },
    handleSocialLogin() {},
  },
}
</script>

<style lang="sass" scoped>
.page-login
  &__card
  max-width: 600px
  margin: 0 auto
</style>
