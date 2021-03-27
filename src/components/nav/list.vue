<v-list class="pa-0">
          <template v-for="(item, key) in computeMenu">
            <template v-if="item.children && item.children.length > 0">
              <v-list-group :key="key" no-action :to="item.path" :value="computeGroupExpanded(item, $route)">
                <template #prependIcon>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on" v-text="item.meta.icon" />
                    </template>
                    <span>
                      {{ __('menu.' + item.meta.title) }}
                    </span>
                  </v-tooltip>
                </template>
                <template #activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="__('menu.' + item.meta.title)" />
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="subItem in item.children"
                  v-show="!subItem.meta.hiddenInMenu"
                  :key="subItem.name"
                  :class="drawerWidth === 64 ? 'pl-4' : ''"
                  :to="subItem.path"
                >
                  <template v-if="drawerWidth === 64">
                    <v-list-item-icon>
                      <v-tooltip bottom>
                        <template #activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" v-text="subItem.meta.icon" />
                        </template>
                        <span>{{ __('menu.' + subItem.meta.title) }}</span>
                      </v-tooltip>
                    </v-list-item-icon>
                  </template>
                  <template v-else>
                    <v-list-item-content>
                      <v-list-item-title v-text="__('menu.' + subItem.meta.title)" />
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-group>
            </template>
            <template v-else>
              <v-list-item v-show="!item.meta.hiddenInMenu" :key="key" :to="item.path">
                <v-list-item-icon>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on" v-text="item.meta.icon" />
                    </template>
                    <span>{{ __('menu.' + item.meta.title) }}</span>
                  </v-tooltip>
                </v-list-item-icon>
                <v-list-item-content v-if="drawerWidth !== 64">
                  <v-list-item-title v-text="__('menu.' + item.meta.title)" />
                </v-list-item-content>
                <v-list-item-action v-if="item.meta.new">
                  <v-icon color="green">mdi-new-box </v-icon>
                </v-list-item-action>
              </v-list-item>
            </template>
          </template>
        </v-list>
