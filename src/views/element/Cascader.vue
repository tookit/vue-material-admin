<template>
  <div class="page-cascader mt-10">
    <v-container>
      <v-row>
        <v-col :cols="12">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-items class="align-center">
                <v-checkbox
                  v-model="option.outlined"
                  label="Outline"
                  hide-details
                />
                <v-checkbox v-model="option.dense" label="Dense" hide-details />
              </v-toolbar-items>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text style="height: 350px">
              <v-cascader
                v-model="selectedItem"
                label="Select Product"
                item-value="id"
                item-text="text"
                :items="items"
                :outlined="option.outlined"
                :dense="option.dense"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VCascader from 'vuetify-cascader'

export default {
  name: 'page-cascader',
  components: { VCascader },
  data() {
    return {
      option: {
        outlined: true,
        dense: false
      },
      items: [
        {
          id: 1,
          text: 'Phone',
          value: 'phone',
          children: [
            {
              id: 2,
              text: 'IPhone',
              value: 'iphone',
              children: [
                {
                  id: 3,
                  text: 'IPhone 12',
                  value: 'iphone 12'
                },
                {
                  id: 99,
                  text: 'IPhone 8',
                  value: 'iphone 8'
                }
              ]
            }
          ]
        },
        {
          id: 11,
          text: 'Computer',
          value: 'computer',
          children: [
            {
              id: 12,
              text: 'Mac',
              value: 'mac',
              children: [
                {
                  id: 13,
                  text: 'Mac Air',
                  value: 'Mac air'
                }
              ]
            },
            {
              id: 14,
              text: 'PC',
              value: 'PC',
              children: [
                {
                  id: 15,
                  text: 'Surface',
                  value: 'surface '
                }
              ]
            }
          ]
        }
      ],
      selectedItem: 99
    }
  },
  computed: {},
  methods: {}
}
</script>
