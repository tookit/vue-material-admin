<template>
  <v-card tile>
    <v-card-title>Create User</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col :cols="12">
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
              :label="form.email.label"
              :placeholder="form.email.placeholder"
              v-model="formModel.email"
              required
              :append-icon="'mdi-email'"
              :rules="form.email.rules"
            />
          </v-col>
          <v-col :cols="6">
            <v-text-field
              outlined
              :label="form.firstname.label"
              :placeholder="form.firstname.placeholder"
              v-model="formModel.firstname"
              :append-icon="'mdi-location'"
              required
              :rules="form.firstname.rules"
            />
          </v-col>
          <v-col :cols="6">
            <v-text-field
              outlined
              :label="form.lastname.label"
              :placeholder="form.lastname.placeholder"
              v-model="formModel.lastname"
              required
              :rules="form.lastname.rules"
            />
          </v-col>
          <v-col :cols="6">
            <v-select
              outlined
              :label="form.gender.label"
              :placeholder="form.gender.placeholder"
              :rules="form.gender.rules"
              :items="genders"
              v-model="formModel.gender"
              required
            />
          </v-col>
        </v-row>
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
  props: {
    userId: [Number, String]
  },
  data: () => ({
    genders: ['male', 'female', 'other'],
    valid: true,
    loading: false,
    formModel: {
      username: null,
      email: null,
      phone: null,
      firstname: null,
      lastname: null,
      gender: 'male'
    },

    form: {
      username: {
        label: 'Username',
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
      phone: {
        label: 'phone',
        placeholder: '18682157492',
        rules: [
          (v) => !!v || 'This field is required',
          (v) => EMAIL.test(v) || 'Invalid email'
        ]
      },
      firstname: {
        label: 'Firstname',
        placeholder: 'Firstname',
        rules: [(v) => !!v || 'This field is required']
      },
      lastname: {
        label: 'Lastname',
        placeholder: 'Lastname',
        rules: [(v) => !!v || 'This field is required']
      },
      gender: {
        label: 'Gender',
        placeholder: 'gender',
        rules: [(v) => !!v || 'This field is required']
      }
    },

    formHasErrors: false
  }),

  methods: {
    handleCancelForm() {
      this.$refs.form.reset()
    },
    handleSubmitForm() {
      if (this.$refs.form.validate()) {
        this.loading = true
        if (this.userId) {
          this.updateUser(this.userId)
        } else {
          this.createUser()
        }
      }
    },
    updateUser() {
      this.$store
        .dispatch('updateUser', {
          id: this.item.id,
          data: this.formModel
        })
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    createUser(id) {
      this.$store
        .dispatch('createUser', this.formModel)
        .then(({ data }) => {
          this.loading = false
          this.$router.push({
            path: `/acl/user/item/${data.id}`
          })
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>
