<template>
  <v-form v-model="valid">
      <v-subheader class="pa-0 mt-3">CONTACT DETAIL</v-subheader>
      <v-text-field
        label="Full Name"
        name="fullname"
        placeholder="Michael Wang"
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="fullname"     
        :error-messages="errors.collect('fullname')"  
        required
      ></v-text-field>    
      <v-text-field
        label="Email"
        placeholder="wangqiangshen@gmail.com"
        name="email"
        v-validate="'required|email'"
        data-vv-name="email"     
        :error-messages="errors.collect('email')"        
        v-model="formModel.email"
        required
      ></v-text-field>    
      <v-text-field
        label="Phone"
        placeholder="(###) ### - ####"
        v-validate="'required'"
        data-vv-name="phone"     
        :error-messages="errors.collect('phone')"                
        v-model="formModel.phone"
        mask="phone"
        required
      ></v-text-field>    
      <v-subheader class="pa-0 mt-3">SHIP ADDRESS</v-subheader>
      <v-select
        :items="countries"
        v-validate="'required'"
        data-vv-name="country"     
        :error-messages="errors.collect('country')"           
        v-model="formModel.country"
        label="Country"
        auto
        required
        item-text="country"
        item-value="abbr"
      ></v-select>
      <v-select
        :items="states"
        v-validate="'required'"
        data-vv-name="state"     
        :error-messages="errors.collect('state')"           
        v-model="formModel.state"
        label="State"
        auto
        required
        item-text="name"
        item-value="id"
      ></v-select>
      <v-select
        :items="cities"
        v-validate="'required'"
        data-vv-name="city"     
        :error-messages="errors.collect('city')"           
        v-model="formModel.city"
        label="City"
        required
        auto
        item-text="name"
        item-value="id"
      ></v-select>
    <v-text-field
      label="Zip Code"
      v-model="formModel.zipcode"
      required
    ></v-text-field>
    <v-text-field
      label="Address"
        v-validate="'required'"
        data-vv-name="address"     
        :error-messages="errors.collect('address')"         
      v-model="formModel.address"
      required
    ></v-text-field>
    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Submit</v-btn>
      <v-btn outline @click="clear">Clear</v-btn>
    </div>

  </v-form>
</template>

<script>
import Countries from '@/api/country';
export default {
  $_veeValidate: {
    validator: 'new'
  },    
  data: () => ({
    formModel: {
      country: null,
    },
    countries: Countries,
    states: [
      { name: 'Florida', abbr: 'FL', id: 1, country_id: 1 },
      { name: 'Georgia', abbr: 'GA', id: 2, country_id: 1 },
      { name: 'Nebraska', abbr: 'NE', id: 3, country_id: 1 },
      { name: 'California', abbr: 'CA', id: 4, country_id: 1 },
    ],    
    cities: [
      { name: 'New York', abbr: 'NY', id: 1, country_id: 1 },
      { name: 'Tample', abbr: 'TA', id: 2, country_id: 1 },
      { name: 'San Francisco', abbr: 'SF', id: 3, country_id: 1 },
    ],    
    valid: true,

  }),
  mounted () {
    this.$validator.localize('en', this.dictionary);
  },  
  methods: {
    submit () {
      this.$validator.validateAll();
    },
    clear () {
      this.formModel = {};
      this.$validator.reset();
    }    
  }
};
</script>
