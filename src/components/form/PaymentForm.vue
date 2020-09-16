<template>
  <v-card tile>
    <v-card-title>Payment Form</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <v-subheader class="pl-0">Payment Method</v-subheader>
        <v-btn-toggle color="primary" group v-model="formModel.payment_method">
          <v-btn icon value="apple">
            <v-icon>mdi-apple</v-icon>
          </v-btn>
          <v-btn icon value="credit">
            <v-icon>mdi-credit-card</v-icon>
          </v-btn>
          <v-btn icon value="wechat">
            <v-icon>mdi-wechat</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-subheader class="pl-0 mt-3">Payment Detail</v-subheader>
        <v-select
          :items="cardTypes"
          :label="form.card_type.label"
          :placeholder="form.card_type.placeholder"
          v-model="formModel.card_type"
          required
          :append-icon="'mdi-credit-card'"
          :rules="form.card_type.rules"
        />
        <v-text-field
          :label="form.card_number.label"
          :placeholder="form.card_number.placeholder"
          v-model="formModel.card_number"
          required
          :append-icon="'mdi-credit-card'"
          :rules="form.card_number.rules"
          mask="credit-card"
        />
        <v-text-field
          :label="form.card_name.label"
          :placeholder="form.card_name.placeholder"
          v-model="formModel.card_name"
          required
          :append-icon="'mdi-credit-account'"
          :rules="form.card_name.rules"
        />
        <div class="d-flex">
          <v-menu
            ref="menu"
            v-model="showMenu"
            :close-on-content-click="false"
            :return-value.sync="formModel.expire"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="mr-2"
                v-bind="attrs"
                v-on="on"
                :label="form.expire.label"
                :placeholder="form.expire.placeholder"
                v-model="formModel.expire"
                required
                :append-icon="'mdi-credit-card-clock'"
                :rules="form.expire.rules"
              />
            </template>
            <v-date-picker v-model="formModel.expire" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="showMenu = false"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(formModel.expire)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>

          <v-text-field
            :label="form.cvv.label"
            :placeholder="form.cvv.placeholder"
            v-model="formModel.cvv"
            required
            type="number"
            :append-icon="'mdi-credit-account'"
            :rules="form.cvv.rules"
          />
        </div>
        <div class="d-flex">
          <v-switch label="Saved Card Detials" v-model="saveCard"></v-switch>
        </div>
      </v-form>
    </v-card-text>
    <v-divider class="mt-5"></v-divider>
    <v-card-actions>
      <v-btn @click="handleCancelForm" text>Cancel</v-btn>
      <v-spacer />
      <v-btn tile color="primary" @click="handleSubmitForm">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      showMenu: false,
      formModel: {
        payment_method: 'apple',
        card_number: null,
        card_name: null,
        expire: new Date().toISOString().substr(0, 10)
      },
      form: {
        card_type: {
          label: 'Card type',
          placeholder: 'Mater',
          rules: [(v) => !!v || 'This field is required']
        },
        card_number: {
          label: 'Card number',
          placeholder: 'xx-xx-xxxxx',
          rules: [(v) => !!v || 'This field is required']
        },
        card_name: {
          label: 'Card name',
          placeholder: 'Michael Wang',
          rules: [(v) => !!v || 'This field is required']
        },
        expire: {
          label: 'Expire date',
          placeholder: new Date().toISOString().substr(0, 10),
          rules: [(v) => !!v || 'This field is required']
        },
        cvv: {
          label: 'CVV',
          placeholder: 'CVV',
          rules: [(v) => !!v || 'This field is required']
        }
      },
      saveCard: true,
      cardTypes: [
        {
          value: 'visa',
          text: 'Visa Express'
        },
        {
          value: 'master',
          text: 'Mastard'
        }
      ]
    }
  },
  mounted() {},

  methods: {
    handleCancelForm() {
      this.$refs.form.reset()
    },
    handleSubmitForm() {
      if (this.$refs.form.validate()) {
        console.log('handle form process logic here')
      }
    }
  }
}
</script>
