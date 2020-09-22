<template>
  <v-card tile>
    <v-card-title>Contact Form</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-text-field
          outlined
          :label="form.name.label"
          :placeholder="form.name.placeholder"
          v-model="formModel.name"
          required
          :append-icon="'mdi-account-check'"
          :rules="form.name.rules"
        />
        <v-text-field
          outlined
          :label="form.email.label"
          :placeholder="form.email.placeholder"
          v-model="formModel.email"
          required
          :append-icon="'mdi-email'"
          :rules="form.email.rules"
        />
        <v-text-field
          outlined
          :label="form.address.label"
          :placeholder="form.address.placeholder"
          v-model="formModel.address"
          :append-icon="'mdi-location'"
          required
          :rules="form.address.rules"
        />
        <v-text-field
          outlined
          :label="form.city.label"
          :placeholder="form.city.placeholder"
          v-model="formModel.city"
          required
          :rules="form.city.rules"
        />
        <v-text-field
          outlined
          :label="form.state.label"
          :placeholder="form.state.placeholder"
          v-model="formModel.state"
          required
          :rules="form.state.rules"
        />
        <v-text-field
          outlined
          :label="form.zip.label"
          :placeholder="form.zip.placeholder"
          v-model="formModel.zip"
          required
          type="number"
          :rules="form.zip.rules"
        />
        <v-combobox
          outlined
          :label="form.country.label"
          :placeholder="form.country.placeholder"
          :rules="form.country.rules"
          :items="countries"
          v-model="formModel.country"
          required
        />
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
import { EMAIL } from '@/util/regex'

export default {
  data: () => ({
    countries: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antigua &amp; Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia &amp; Herzegovina',
      'Botswana',
      'Brazil',
      'British Virgin Islands',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Cape Verde',
      'Cayman Islands',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Congo',
      'Cook Islands',
      'Costa Rica',
      'Cote D Ivoire',
      'Croatia',
      'Cruise Ship',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Estonia',
      'Ethiopia',
      'Falkland Islands',
      'Faroe Islands',
      'Fiji',
      'Finland',
      'France',
      'French Polynesia',
      'French West Indies',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guam',
      'Guatemala',
      'Guernsey',
      'Guinea',
      'Guinea Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Isle of Man',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jersey',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kuwait',
      'Kyrgyz Republic',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macau',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Namibia',
      'Nepal',
      'Netherlands',
      'Netherlands Antilles',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palestine',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunion',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Pierre &amp; Miquelon',
      'Samoa',
      'San Marino',
      'Satellite',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'South Africa',
      'South Korea',
      'Spain',
      'Sri Lanka',
      'St Kitts &amp; Nevis',
      'St Lucia',
      'St Vincent',
      'St. Lucia',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      "Timor L'Este",
      'Togo',
      'Tonga',
      'Trinidad &amp; Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks &amp; Caicos',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
      'Venezuela',
      'Vietnam',
      'Virgin Islands (US)',
      'Yemen',
      'Zambia',
      'Zimbabwe'
    ],
    valid: true,
    formModel: {
      name: null,
      email: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null
    },
    form: {
      name: {
        label: 'Full Name',
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
      address: {
        label: 'Address Line',
        placeholder: 'Address',
        rules: [(v) => !!v || 'This field is required']
      },
      city: {
        label: 'City',
        placeholder: 'Shenzhen',
        rules: [(v) => !!v || 'This field is required']
      },
      state: {
        label: 'State/Provice/Region',
        placeholder: 'Guangdong',
        rules: [(v) => !!v || 'This field is required']
      },
      zip: {
        label: 'Zip',
        placeholder: '528020',
        rules: [(v) => !!v || 'This field is required']
      },
      country: {
        label: 'Country',
        placeholder: 'China',
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
        console.log('handle form process logic here')
      }
    }
  }
}
</script>
