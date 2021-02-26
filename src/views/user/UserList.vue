<template>
  <div class="page-user">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card tile>
            <v-toolbar flat>
              <v-text-field
                text
                solo
                flat
                :prepend-icon="
                  showFilter ? 'mdi-filter-variant-plus' : 'mdi-filter-variant'
                "
                append-icon="mdi-magnify"
                placeholder="Type something"
                v-model="filter['filter[username]']"
                hide-details
                clearable
                @keyup.enter="handleApplyFilter"
                @click:append="handleApplyFilter"
                @click:prepend="showFilter = !showFilter"
                @click:clear="handleClear"
              />
              <v-btn @click="handleRefreshItem" icon>
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
              <v-btn @click="handleCreateItem" icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider />
            <v-card v-show="showFilter" flat class="grey lighten-4">
              <v-card-text>
                <v-btn-toggle
                  v-model="filter['filter[gender]']"
                  tile
                  color="deep-purple accent-3"
                >
                  <v-btn value="male" icon>
                    <v-icon>mdi-gender-male</v-icon>
                  </v-btn>
                  <v-btn value="female">
                    <v-icon>mdi-gender-female</v-icon>
                  </v-btn>
                  <v-btn value="other">
                    <v-icon>mdi-gender-non-binary</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="handleResetFilter" text>Reset</v-btn>
                <v-btn tile @click="handleApplyFilter" color="primary"
                  >Apply</v-btn
                >
              </v-card-actions>
            </v-card>
            <v-card-text class="pa-0">
              <v-data-table
                :loading="loadingItems"
                :headers="headers"
                :items="items"
                :items-per-page-options="[15, 30, 50]"
                :server-items-length="serverItemsLength"
                :items-per-page="itemsPerPage"
                :page.sync="filter['page']"
                @update:page="handlePageChanged"
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
      serverItemsLength: 0,
      itemsPerPage: 15,
      showFilter: false,
      filter: {
        page: 1,
        'filter[username]': null,
        'filter[gender]': null
      },
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
          text: 'Gender',
          value: 'gender'
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
        const filter = this.updateFilterQuery(query)
        this.fetchRecords(filter)
      },
      immediate: true
    }
  },
  methods: {
    //
    updateFilterQuery(query) {
      const filter = Object.assign(this.filter, query)
      filter.page = parseInt(filter.page)
      return filter
    },
    resetFilter() {
      this.filter = {
        page: 1,
        'filter[username]': null
      }
    },
    fetchRecords(query) {
      this.loadingItems = true
      this.items = []
      return fetchUsers(query)
        .then(({ data, meta }) => {
          this.items = data
          this.serverItemsLength = meta.total
          this.loadingItems = false
        })
        .catch(() => {
          this.loadingItems = false
        })
    },
    //action
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
    handleRefreshItem() {
      this.fetchRecords(this.filter)
    },
    // filter
    handlePageChanged(page) {
      this.filter.page = page
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleResetFilter() {
      this.filter = {
        page: 1,
        'filter[username]': null,
        'filter[gender]': null
      }
      this.$router.replace({
        path: this.$route.path
      })
    },
    handleApplyFilter() {
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleClear() {
      this.resetFilter()
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    }
  }
}
</script>
