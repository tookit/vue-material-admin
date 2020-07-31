<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 login-card" tile>
          <v-card-text>
            <v-layout align-center justify-center column fill-height>
              <v-img src="/static/m.png" alt="Vue Material Admin" size="100" />
              <h1 class="my-4 primary--text display-1">Material Admin Template</h1>
            </v-layout>
            <v-form>
              <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="model.username" />
              <v-text-field
                append-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="model.password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon color="blue">fa fa-facebook fa-lg</v-icon>
            </v-btn>
            <v-btn icon> <v-icon color="red">fa fa-google fa-lg</v-icon> </v-btn>
            <v-btn icon>
              <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn large tile color="primary" @click="login" :loading="loading">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,

    model: {
      username: 'admin@isocked.com',

      password: 'password',
    },
  }),

  methods: {
    login() {
      this.loading = true

      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 1000)
    },
  },
}
</script>

<style lang="sass" scoped>
.login-card
  max-width: 600px
  margin: 0 auto
</style>
