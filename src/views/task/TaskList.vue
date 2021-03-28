<template>
  <div class="task-list">
    <v-container>
      <v-subheader class="pl-0">A simple demo for showing how to build datatable with REST API </v-subheader>
      <v-row>
        <v-col cols="12">
          <v-card tile>
            <v-toolbar flat>
              <v-text-field
                v-model="filter['filter[name]']"
                text
                solo
                flat
                :prepend-icon="showFilter ? 'mdi-filter-variant-plus' : 'mdi-filter-variant'"
                append-icon="mdi-magnify"
                placeholder="Type something"
                hide-details
                clearable
                @keyup.enter="handleApplyFilter"
                @click:append="handleApplyFilter"
                @click:prepend="showFilter = !showFilter"
                @click:clear="handleClear"
              />
              <v-btn icon @click="handleRefreshItem">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
              <v-btn icon @click="handleCreateItem">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider />
            <v-card v-show="showFilter" flat class="grey lighten-4">
              <v-card-text>
                <v-row>
                  <v-col :cols="4">
                    <v-autocomplete
                      v-model="filter['filter[project_id]']"
                      item-text="name"
                      item-value="id"
                      :items="getProjectList"
                      label="Project"
                    />
                  </v-col>
                  <v-col :cols="4">
                    <v-autocomplete v-model="filter['filter[status]']" :items="getTaskStatus" label="Status" />
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="handleResetFilter">Reset</v-btn>
                <v-btn tile color="primary" @click="handleApplyFilter">Apply</v-btn>
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
                item-key="id"
                show-select
                @update:page="handlePageChanged"
              >
                <template #[`item.status`]="{ item }">
                  <v-autocomplete
                    v-model="item.status"
                    :items="getTaskStatus"
                    @change="handleUpdateStatus(item, item.status)"
                  />
                </template>
                <template #[`item.action`]="{ item }">
                  <v-menu>
                    <template #activator="{ on: menu }">
                      <v-tooltip bottom>
                        <template #activator="{ on: tooltip }">
                          <v-btn icon v-on="onTooltip({ ...tooltip, ...menu })">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <span>Action</span>
                      </v-tooltip>
                    </template>
                    <v-list class="pa-0" dense>
                      <v-list-item v-for="action in actions" :key="action.text" @click="action.click(item)">
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
    <v-dialog v-model="showDialog" scrollable width="840">
      <task-form :item="selectedItem" @form:success="handleFormSuccess" />
    </v-dialog>
  </div>
</template>

<script>
import TooltipMixin from '@/mixins/Tooltip'
import TaskForm from '@/components/form/TaskForm'
import { mapGetters } from 'vuex'
export default {
  components: {
    TaskForm,
  },
  mixins: [TooltipMixin],
  data() {
    return {
      showDialog: false,
      search: '',
      loadingItems: false,
      selectedItem: null,
      serverItemsLength: 0,
      itemsPerPage: 15,
      showFilter: true,
      filter: {
        page: 1,
        'filter[name]': null,
        'filter[project_id]': null,
        'filter[status]': null,
      },
      headers: [
        {
          text: 'Project',
          value: 'project.name',
        },
        {
          text: 'Task',
          value: 'name',
        },
        {
          text: 'Description',
          value: 'description',
        },
        {
          text: 'slug',
          value: 'slug',
        },
        {
          text: 'Status',
          value: 'status',
          width: 100,
        },
        {
          text: 'Action',
          value: 'action',
        },
      ],
      items: [],
      actions: [
        {
          text: 'Edit Item',
          icon: 'mdi-pencil',
          click: this.handleEditItem,
        },
        {
          text: 'Delete Item',
          icon: 'mdi-close',
          click: this.handleDeleteItem,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getTaskStatus', 'getProjectList']),
  },
  watch: {
    '$route.query': {
      handler(query) {
        const filter = this.updateFilterQuery(query)
        this.fetchRecords(filter)
      },
      immediate: true,
    },
  },
  created() {
    this.$store.dispatch('fetchProject')
  },
  methods: {
    //
    updateFilterQuery(query) {
      const filter = Object.assign(this.filter, this.transformQuery(query))
      return filter
    },
    transformQuery(query) {
      const numbers = ['filter[project_id]', 'filter[status]', 'page']
      for (let key in query) {
        if (numbers.includes(key)) {
          const val = query[key] ? parseInt(query[key]) : query[key]
          query[key] = val
        }
      }
      return query
    },
    resetFilter() {
      this.filter = {
        page: 1,
        'filter[name]': null,
        'filter[project_id]': null,
        'filter[status]': null,
      }
    },
    fetchRecords(query) {
      this.loadingItems = true
      this.items = []
      return this.$store
        .dispatch('fetchTask', query)
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
      this.selectedItem = null
      this.showDialog = true
    },
    handleEditItem(item) {
      this.selectedItem = item
      this.showDialog = true
    },
    handleDeleteItem({ id }) {
      if (window.confirm('Are you sure to delete this')) {
        this.$store.dispatch('deleteTask', id).then(() => {
          this.items = this.items.filter((item) => item.id != id)
        })
      }
    },
    handleUpdateStatus(item, status) {
      const payload = {
        id: item.id,
        data: {
          status: status,
        },
      }
      this.$store.dispatch('updateTask', payload)
    },
    handleRefreshItem() {
      this.fetchRecords(this.filter)
    },
    // filter
    handlePageChanged(page) {
      this.filter.page = page
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter,
      })
    },
    handleResetFilter() {
      this.filter = {
        page: 1,
        'filter[name]': null,
        'filter[status]': null,
      }
      this.$router.replace({
        path: this.$route.path,
      })
    },
    handleApplyFilter() {
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter,
      })
    },
    handleClear() {
      this.resetFilter()
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter,
      })
    },
    handleFormSuccess() {
      this.showDialog = false
      this.fetchRecords()
    },
  },
}
</script>
