<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <img src="/static/m.png" alt="Vue Material Admin" width="55" />
            <h1 class="primary--text display-1">
              Material Admin Template
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              class="my-10"
              lazy-validation
              v-model="formValid"
            >
              <v-text-field
                append-icon="person"
                autocomplete="off"
                name="login"
                :label="$vuetify.lang.t('$vuetify.username')"
                :placeholder="$vuetify.lang.t('$vuetify.username')"
                type="text"
                required
                outlined
                :rules="formRule.username"
                v-model="formModel.username"
              />
              <v-text-field
                append-icon="lock"
                autocomplete="off"
                name="password"
                :label="$vuetify.lang.t('$vuetify.password')"
                :placeholder="$vuetify.lang.t('$vuetify.password')"
                type="password"
                :rules="formRule.password"
                required
                outlined
                v-model="formModel.password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-tooltip v-for="item in socialIcons" :key="item.text" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mr-3"
                  v-text="item.icon"
                  v-bind="attrs"
                  v-on="on"
                  @click="handleSocialLogin"
                />
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
            <v-spacer />
            <v-btn large tile color="primary" @click="login" :loading="loading">
              {{ $vuetify.lang.t('$vuetify.login') }}
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
        username: '',
        password: ''
      },
      formRule: {
        username: [
          (v) =>
            !!v || this.$vuetify.lang.t('$vuetify.rule.required', ['username'])
        ],
        password: [
          (v) =>
            !!v || this.$vuetify.lang.t('$vuetify.rule.required', ['password'])
        ]
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
          .then((res) => {
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
