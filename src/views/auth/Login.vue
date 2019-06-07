<template>
  <v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
      <div class="layout column align-center">
        <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120" />
        <h1 class="flex my-4 primary--text">Material Admin Template</h1>
      </div>
      <v-form>
        <v-text-field
          append-icon="person"
          name="login"
          label="Login"
          type="text"
          v-model="model.username"
        ></v-text-field>
        <v-text-field
          append-icon="lock"
          name="password"
          label="Password"
          id="password"
          type="password"
          v-model="model.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <div class="login-btn">
      <v-btn icon>
        <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="red">fa fa-google fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: "admin@isocked.com",
      password: "password"
    }
  }),

  methods: {
    login() {
      this.loading = true
      // handle login
      setTimeout(() => {
        this.$router.push("/dashboard")
      }, 1000)
    }
  }
}
</script>
<style scoped lang="css"></style>
