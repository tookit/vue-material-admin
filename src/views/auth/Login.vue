<template>
  <v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
<<<<<<< HEAD
      <div class="layout column align-center">
        <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120" />
        <h1 class="flex my-4 primary--text">Material Admin Template</h1>
      </div>
=======
      <v-layout align-center justify-center column fill-height>
        <img
          src="/static/m.png"
          alt="Vue Material Admin"
          width="120"
          height="120"
        />
        <h1 class="my-4 primary--text display-1">Material Admin Template</h1>
      </v-layout>
>>>>>>> dev
      <v-form>
        <v-text-field
          append-icon="person"
          name="login"
<<<<<<< HEAD
          :label="$t('login.account')"
=======
          label="Login"
>>>>>>> dev
          type="text"
          v-model="model.username"
        ></v-text-field>
        <v-text-field
          append-icon="lock"
          name="password"
<<<<<<< HEAD
          :label="$t('login.password')"
=======
          label="Password"
>>>>>>> dev
          id="password"
          type="password"
          v-model="model.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
<<<<<<< HEAD
    <div class="login-btn">
      <v-btn icon>
        <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="red">fa fa-google fa-lg</v-icon>
      </v-btn>
=======
    <v-card-actions>
      <v-btn icon>
        <v-icon color="blue">fa fa-facebook fa-lg</v-icon>
      </v-btn>
      <v-btn icon> <v-icon color="red">fa fa-google fa-lg</v-icon> </v-btn>
>>>>>>> dev
      <v-btn icon>
        <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
<<<<<<< HEAD
      <v-btn block color="primary" @click="login" :loading="loading">{{$t("login.submit")}}</v-btn>
    </div>
=======
      <v-btn color="primary" @click="login" :loading="loading">
        Login
      </v-btn>
    </v-card-actions>
>>>>>>> dev
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
<<<<<<< HEAD
      username: "admin@isocked.com",
      password: "password"
    }
=======
      username: 'admin@isocked.com',
      password: 'password',
    },
>>>>>>> dev
  }),

  methods: {
    login() {
      this.loading = true
      // handle login
      setTimeout(() => {
<<<<<<< HEAD
        this.$router.push("/dashboard")
      }, 1000)
    }
  }
}
</script>
<style scoped lang="css"></style>
=======
        this.$router.push('/dashboard')
      }, 1000)
    },
  },
}
</script>
<style lang="sass" scoped></style>
>>>>>>> dev
