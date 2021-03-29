<template>
  <div class="kanboard">
    <v-container>
      <v-row>
        <template v-for="col in getTaskStatus">
          <v-col :key="col.value">
            <v-card :loading="loading">
              <v-toolbar flat>
                <v-toolbar-title>{{ col.text }} </v-toolbar-title>
                <v-spacer />
                <v-btn icon @click="handleCreateTask">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider />
              <v-card-text :id="'task-list__' + col.value" class="task-list" :data-status="col.value">
                <v-list-item-group v-model="selectedItem">
                  <template v-for="task in getTaskByStatus(col.value)">
                    <div :key="task.id" :data-id="task.id" class="task-list__item">
                      <v-list-item :value="task">
                        <v-list-item-avatar>
                          <v-icon>mdi-account-circle</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title> #{{ task.id }} {{ task.name }}</v-list-item-title>
                          <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon small @click.stop="handleEditItem(task)">mdi-pencil</v-icon>
                        </v-list-item-action>
                      </v-list-item>
                    </div>
                  </template>
                </v-list-item-group>
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <v-dialog v-model="showDialog" scrollable width="840">
      <task-form :item="selectedItem" @form:success="handleFormSuccess" />
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import CAvatar from '@/components/avatar/CAvatar'
import TaskForm from '@/components/form/TaskForm'
import Sortable from 'sortablejs'
import TooltipMixin from '@/mixins/Tooltip'
export default {
  name: 'KanBoard',
  components: {
    TaskForm,
  },
  mixins: [TooltipMixin],
  data() {
    return {
      showDialog: false,
      loading: false,
      items: [],
      selectedItem: null,
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
    ...mapGetters(['getTaskStatus']),
  },
  created() {
    this.fetchTask()
    this.$nextTick(() => {
      this.getTaskStatus.forEach((item) => {
        new Sortable(document.querySelector(`#task-list__${item.value}`), {
          group: 'shared',
          animation: 150,
          onEnd: (e) => {
            const taskId = e.item.dataset.id
            const status = e.to.dataset.status
            this.$store.dispatch('updateTaskStatus', { id: taskId, status: status })
          },
        })
      })
    })
  },
  methods: {
    fetchTask() {
      this.items = []
      this.loading = true
      this.$store.dispatch('fetchTask').then((resp) => {
        this.items = resp.data
        this.loading = false
      })
    },
    getTaskByStatus(status) {
      return this.items.filter((item) => item.status === status)
    },
    handleCreateTask() {
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
    handleFormSuccess() {
      this.fetchTask()
    },
  },
}
</script>

<style lang="sass" scoped>
.task-list
  min-height: 500px
  padding: 0
  &__item
    border-bottom: 1px solid #eee
    .sortable-chosen,
    .sortable-ghost
      border: 1px dotted #333
      background: #eee
</style>
