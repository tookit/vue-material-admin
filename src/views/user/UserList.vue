<template>
  <div class="page-user">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-toolbar flat>
              <v-text-field
                text
                solo
                flat
                prepend-icon="mdi-filter-variant-plus"
                append-icon="mdi-magnify"
                placeholder="Type something"
                v-model="search"
                hide-details
              />
              <v-btn @click="handleRefreshItem" icon>
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
              <v-btn @click="handleCreateItem" icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :loading="loadingItems"
                :headers="headers"
                :search="search"
                :items="items"
                :items-per-page-options="[10, 25, 50]"
                item-key="id"
                show-select
              >
                <template v-slot:item.avatar="{ item }">
                  <c-avatar class="my-3" :username="item.username" />
                </template>
                <template v-slot:item.action="{ item }">
                  <v-menu>
                    <template v-slot:activator="{ on: menu }">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on: tooltip }">
                          <v-btn icon v-on="onTooltip({ ...tooltip, ...menu })">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <span>Action</span>
                      </v-tooltip>
                    </template>
                    <v-list class="pa-0" dense>
                      <v-list-item
                        v-for="action in actions"
                        :key="action.text"
                        @click="action.click(item)"
                      >
                        <v-list-item-icon class="mr-2">
                          <v-icon small>{{ action.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ action.text }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TooltipMixin from '@/mixins/Tooltip'
import { fetchUsers } from '@/api/service'
import CAvatar from '@/components/avatar/CAvatar'
export default {
  components: {
    CAvatar
  },
  mixins: [TooltipMixin],
  data() {
    return {
      search: '',
      loadingItems: false,
      headers: [
        {
          text: 'Avatar',
          value: 'avatar'
        },
        {
          text: 'Name',
          value: 'username'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Phone',
          value: 'phone'
        },
        {
          text: 'Action',
          value: 'action'
        }
      ],
      items: [],
      actions: [
        {
          text: 'View Item',
          icon: 'mdi-eye',
          click: this.handleViewItem
        },
        {
          text: 'Edit Item',
          icon: 'mdi-pencil',
          click: this.handleEditItem
        },
        {
          text: 'Delete Item',
          icon: 'mdi-close',
          click: this.handleDeleteItem
        }
      ]
    }
  },
  watch: {
    '$route.query': {
      handler(query) {
        this.fetchRecords(query)
      },
      immediate: true
    }
  },
  methods: {
    //
    fetchRecords(query) {
      this.loadingItems = true
      return fetchUsers(query)
        .then(({ data }) => {
          this.items = data
          this.loadingItems = false
        })
        .catch(() => {
          this.loadingItems = false
        })
    },
    handleCreateItem() {
      this.$router.push({
        path: '/acl/user/create'
      })
    },
    handleViewItem() {},
    handleEditItem({ id }) {
      this.$router.push({
        path: `/acl/user/item/${id}`
      })
    },
    handleDeleteItem() {},
    handleSubmit() {},
    handleRefreshItem() {}
  }
}
</script>
