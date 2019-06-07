<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Validation</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="E-mail" v-model="email" :rules="[rules.required, rules.email]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Normal with hint text/label</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field name="input-1" label="Label Text" color="primary" id="testing"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Focus</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-2"
                      label="Label Text"
                      value="Input text"
                      color="success"
                      class="input-group--focused"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Normal with input text + label</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field name="input-3" label="Label Text" color="pink" value="Input text"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Single</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field name="input-3" label="Label Text" value="Input text" disabled></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Single line (no hint) </v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-4"
                      label="Label Text"
                      value="Input text"
                      color="info"
                      single-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Multiline </v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-5"
                      label="Label Text"
                      value="Input text"
                      color="teal"
                      multi-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Character counter </v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-6"
                      label="Label Text"
                      value="Input text"
                      :rules="[v => v.length <= 25 || 'Max 25 characters']"
                      :counter="25"
                      single-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Append icon </v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-7"
                      label="Label Text"
                      value="Input text"
                      append-icon="phone"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Prepend icon </v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-7"
                      label="Label Text"
                      value="Input text"
                      prepend-icon="phone"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Prefix for dollar currency</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="Amount" value="10.00" prefix="$"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Suffix for weight</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="Weight" value="28.00" suffix="lbs"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Suffix for email domain</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="Email address" value="example" suffix="@gmail.com"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Suffix for time zone</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="Label Text" value="12:30:00" type="time" suffix="PST"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Input with mask</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="Credit Card" mask="credit-card" value="4444444444444444"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget"
export default {
  components: {
    VWidget
  },
  data() {
    return {
      email: "",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || "Invalid e-mail."
        }
      }
    }
  },
  computed: {},
  methods: {}
}
</script>
