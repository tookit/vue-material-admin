<template>
  <v-form ref="form" v-model="valid">
    <v-select
      v-model="formModel.type"
      :items="types"
      :label="form.type.label"
      :placeholder="form.type.placeholder"
      :rules="form.type.rules"
      :append-icon="'mdi-bed'"
      required
      outlined
    />
    <v-text-field
      v-model="formModel.nights"
      :label="form.nights.label"
      :placeholder="form.nights.placeholder"
      :rules="form.nights.rules"
      :append-icon="'mdi-numeric'"
      required
      outlined
    />
    <v-menu
      ref="menu"
      v-model="showMenu"
      :close-on-content-click="false"
      :return-value.sync="formModel.checkin"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          v-model="formModel.checkin"
          class="mr-2"
          v-bind="attrs"
          :label="form.checkin.label"
          :placeholder="form.checkin.placeholder"
          :rules="form.checkin.rules"
          :append-icon="'mdi-calendar'"
          required
          outlined
          v-on="on"
        />
      </template>
      <v-date-picker v-model="formModel.checkin" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="showMenu = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(formModel.checkin)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      showMenu: false,
      formModel: {
        type: 'business',
        nights: 1,
        checkin: null,
      },
      types: ['Single Bed', 'Double Bed', 'Sweat'],
      form: {
        type: {
          label: 'Room Type',
          placeholder: 'Room type',
          rules: [(v) => !!v || 'This field is required'],
        },
        nights: {
          label: 'Night(s)',
          placeholder: 'How may nights?',
          rules: [(v) => !!v || 'This field is required'],
        },
        checkin: {
          label: 'Checkin date',
          placeholder: 'Checkin date',
          rules: [(v) => !!v || 'This field is required'],
        },
      },
      formHasErrors: false,
    }
  },
  methods: {},
}
</script>
