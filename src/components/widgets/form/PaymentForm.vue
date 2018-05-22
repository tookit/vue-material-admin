<template>
  <v-form v-model="valid">
    <v-subheader class="pa-0">Payment Method</v-subheader>
    <div class="layout ma-0 row">
      <a class="payment-method pa-3 grey--text mr-3">
        <i class="fa fa-credit-card display-3"></i>
      </a>      
      <a class="payment-method pa-3 grey--text mr-3">
        <i class="fa fa-apple display-3"></i>
      </a>      
      <a class="payment-method pa-3 grey--text mr-3">
        <i class="fa fa-paypal display-3"></i>
      </a>      
    </div>
    <v-subheader class="pa-0 mt-3">Payment Detial</v-subheader>
    <div class="d-flex my-2">
      <v-select
        :items="cardTypes"
        v-model="form.cardTypeId"
        label="Card Type"
        auto
        required
        item-text="name"
        item-value="id"
      ></v-select>
    </div>
    <div class="d-flex my-2">
      <v-text-field
        label="Card Number"
        v-validate="'required|credit_card'"
        data-vv-name="cardNumber"
        :error-messages="errors.collect('cardNumber')"
        v-model="form.cardNumber"
        required
        mask="credit-card"
      ></v-text-field>
    </div>
    <div class="d-flex my-2">
      <v-text-field
        label="Card Name"
        v-model="form.cardName"
        v-validate="'required'"
        data-vv-name="cardName"      
        :error-messages="errors.collect('cardName')"  
        required
      ></v-text-field>
    </div>
    <div class="d-flex">
      <v-text-field
        class="mr-2"
        label="Expire Date"
        :error-messages="errors.collect('Expire Date')"        
        append-icon="today"
        type="date"
        v-model="form.expireDate"
        required
      ></v-text-field>   
      <v-text-field
          label="CVV"
          v-model="form.cvv"
          mask="###"
          suffix="CVV"
        ></v-text-field>           
    </div>
    <div class="d-flex">
      <v-switch
        label="Save My Card Detials"
        v-model="saveCard"
      ></v-switch>    
    </div>
    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Submit</v-btn>
      <v-btn outline @click="clear">Clear</v-btn>
    </div>

  </v-form>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },  
  data: () => ({
    saveCard: true,
    cardTypes: [
      {
        id: 1,
        name: 'Visa Express'
      },
      {
        id: 2,
        name: 'Mastard'
      }
    ],
    valid: true,
    form: {
      cardNumber: '5105105105105100',
      cardName: 'Mcihael Wang',
      cardTypeId: 1,
      expireDate: '2018-04-09',
    }

  }),
  mounted () {
    this.$validator.localize('en', this.dictionary);
  },
  
  methods: {
    submit () {
      this.$validator.validateAll();
    },
    clear () {
      this.form = {};
      this.$validator.reset();
    }
  }
};
</script>

<style lang="stylus" scoped>
  .payment-method
    border: 1px solid #eee
</style>
