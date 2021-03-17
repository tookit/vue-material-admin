<template>
  <div class="media_manager">
    <v-toolbar class="media_manager_toolbar" tag="div">
      <v-breadcrumbs :items="breadcrumbs" class="mr-4" />
      <v-text-field
        flat
        hide-details
        solo
        width="250"
        prepend-icon="mdi-magnify"
        label="search files, folders"
        placeholder="search"
      />
      <v-btn icon value="refresh" @click="handleRefresh">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon value="upload">
        <v-icon>mdi-upload</v-icon>
      </v-btn>
      <v-btn-toggle tile dense mandatory v-model="viewMode">
        <v-btn icon value="grid">
          <v-icon>mdi-view-grid</v-icon>
        </v-btn>
        <v-btn icon value="list">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <template v-if="loading">
      <v-progress-linear value="15" indeterminate />
    </template>
    <template v-else>
      <v-container>
        <v-row>
          <template v-if="viewMode === 'list'">
            <v-col :cols="12">
              <v-list class="media_manager__list">
                <v-list-item-group color="primary" v-model="selectedItem">
                  <template v-for="(item, i) in items">
                    <v-list-item
                      :key="i"
                      :value="item"
                      @click="handleSelectItem(item)"
                      two-line
                      exact
                    >
                      <v-list-item-avatar>
                        <!-- <v-icon size="32" v-text="computeIcon(item)"></v-icon> -->
                        <svg class="icon" aria-hidden="true">
                          <use v-bind:xlink:href="computeIcon(item)"></use>
                        </svg>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.basename" />
                        <v-list-item-subtitle>
                          {{
                            item.type == 'file' ? computeSize(item.size) : ''
                          }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-menu>
                          <template v-slot:activator="{ on: menu }">
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on: tooltip }">
                                <v-btn
                                  icon
                                  v-on="onTooltip({ ...tooltip, ...menu })"
                                >
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
                              @click.stop="action.click(item)"
                            >
                              <v-list-item-icon class="mr-2">
                                <v-icon small>{{ action.icon }}</v-icon>
                              </v-list-item-icon>
                              <v-list-item-title>{{
                                action.text
                              }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-list-item-action>
                    </v-list-item>
                    <v-divider :key="'d' + i" />
                  </template>
                </v-list-item-group>
              </v-list>
            </v-col>
          </template>
          <template v-else>
            <template v-for="item in items">
              <v-col :cols="3" :key="item.basename">
                <v-card tile @click="handleSelectItem(item)">
                  <template
                    v-if="item.type === 'file' && item.extension === 'png'"
                  >
                    <v-img :src="item.url" height="200px"> </v-img>
                  </template>
                  <template v-else>
                    <v-img height="200px">
                      <svg class="icon icon-64 center-align" aria-hidden="true">
                        <use v-bind:xlink:href="computeIcon(item)"></use>
                      </svg>
                    </v-img>
                  </template>
                  <v-divider></v-divider>
                  <v-card-actions class="pa-0">
                    <v-list tile two-line class="flex pa-0">
                      <v-list-item class="">
                        <v-list-item-content>
                          <v-list-item-title v-text="item.basename" />
                          <v-list-item-subtitle>
                            {{
                              item.type == 'file' ? computeSize(item.size) : ''
                            }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-menu>
                            <template v-slot:activator="{ on: menu }">
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on: tooltip }">
                                  <v-btn
                                    icon
                                    v-on="onTooltip({ ...tooltip, ...menu })"
                                  >
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
                                @click.stop="action.click(item)"
                              >
                                <v-list-item-icon class="mr-2">
                                  <v-icon small>{{ action.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>{{
                                  action.text
                                }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                  </v-card-actions>
                </v-card>
              </v-col>
            </template>
          </template>
        </v-row>
      </v-container>
    </template>
    <v-navigation-drawer
      v-model="showRight"
      app
      right
      hide-overlay
      clipped
      clipped-right
    >
      <div v-if="selectedItem">
        <v-toolbar flat class="border-bottom">
          <v-subheader>{{ selectedItem.path }}</v-subheader>
          <v-spacer />
          <v-btn icon @click="showRight = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-toolbar>
        <div>
          <v-card flat>
            <template
              v-if="
                selectedItem.type === 'file' && selectedItem.extension === 'png'
              "
            >
              <v-img :src="item.url" height="200px"> </v-img>
            </template>
            <template v-else>
              <v-img height="200px">
                <svg class="icon icon-64 center-align" aria-hidden="true">
                  <use v-bind:xlink:href="computeIcon(selectedItem)"></use>
                </svg>
              </v-img>
            </template>
          </v-card>
          <v-divider />
          <v-list>
            <v-list-item>
              <v-list-item-subtitle v-text="selectedItem.basename" />
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle v-text="selectedItem.dirname || '/'" />
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle v-text="computeSize(selectedItem.size)" />
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import TooltipMixin from '@/mixins/Tooltip'
import { humanReadableFileSize } from 'vuetify/lib/util/helpers'
import { mapGetters } from 'vuex'
export default {
  name: 'MediaView',
  components: {},
  mixins: [TooltipMixin],
  data() {
    return {
      showRight: false,
      viewMode: 'list',
      selectedItem: null,
      icons: {
        txt: 'mdi-format-text',
        json: 'mdi-code-json',
        html: 'mdi-language-html5',
        png: 'mdi-image',
        svg: 'mdi-svg'
      },
      loading: false,
      items: [],
      actions: [
        {
          text: 'Share',
          icon: 'mdi-heart',
          click: this.$emit('file:share')
        },
        {
          text: 'Download',
          icon: 'mdi-download',
          click: this.$emit('file:download')
        },
        {
          text: 'Delete',
          icon: 'mdi-delete',
          click: this.$emit('file:delete')
        }
      ]
    }
  },

  computed: {
    ...mapGetters(['getIconByExt']),
    breadcrumbs() {
      const root = [
        {
          text: 'Root',
          to: `/media/file`,
          exact: true,
          disabled: false
        }
      ]
      const { path } = this.$route.query
      const paths = path ? path.split('/') : []
      const tmp = !path
        ? []
        : paths.map((item, index) => {
            const path = paths.slice(0, index + 1).join('/')
            return {
              text: item,
              to: `/media/file?path=${path}`,
              exact: true,
              disabled: false
            }
          })
      return root.concat(tmp)
    }
  },
  watch: {
    '$route.query': {
      handler(query) {
        this.fetchRecord(query)
      },
      immediate: true
    }
  },
  methods: {
    fetchRecord(query) {
      this.loading = true
      this.items = []
      this.$store
        .dispatch('fetchDir', query)
        .then(({ data }) => {
          this.loading = false
          this.items = data
        })
        .catch(() => {
          this.loading = false
        })
    },
    computePath(item) {
      return item.type === 'dir'
        ? {
            path: '/media',
            query: {
              path: item.path
            }
          }
        : false
    },
    computeIcon(item) {
      return item.type === 'dir'
        ? '#icon-wenjianjia'
        : this.getIconByExt(item.extension)
    },
    computeSize(size) {
      return humanReadableFileSize(size)
    },
    handleRefresh() {
      this.fetchRecord(this.$route.query)
    },
    handleSelectItem(item) {
      if (item.type === 'dir') {
        this.$router.push(this.computePath(item))
      } else {
        this.selectedItem = item
        this.showRight = true
        // view file
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.center-align
    position: absolute
    left: 50%
    top: 50%
    transform: translateY(-50%) translateX(-50%)
.icon
  width: 42px
  height: 42px
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden
.icon-64
  width: 128px
  height: 128px
</style>
