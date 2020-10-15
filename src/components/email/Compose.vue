<template>
  <v-card tile>
    <v-toolbar color="primary" dark>
      <v-icon>mdi-arrow-back</v-icon>
      <v-toolbar-title>Compose</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>mdi-send</v-icon> </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col :cols="12">
            <v-autocomplete
              v-model="formModel.to"
              :items="users"
              filled
              chips
              color="blue-grey lighten-2"
              label="To"
              placeholder="to"
              item-text="name"
              item-value="name"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  <v-avatar left>
                    <v-img :src="data.item.avatar"></v-img>
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar>
                    <img :src="data.item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.name"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="data.item.group"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col :cols="12">
            <v-text-field filled label="Subject" v-model="formModel.subject" />
          </v-col>
          <v-col :cols="12">
            <v-textarea
              label="Message"
              placeholder="message"
              filled
              v-model="formModel.message"
              counter
              max="120"
              full-width
              multi-line
              single-line
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: 'Michael',
          avatar: 'https://randomuser.me/api/portraits/men/92.jpg'
        },
        {
          name: 'John Doe',
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
        }
      ],
      formModel: {
        subject: 'Plan for this week',
        message: '',
        to: ['Michael']
      }
    }
  }
}
</script>
