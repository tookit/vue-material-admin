<template>
  <v-container>
    <v-row>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.column.title.text }}</v-toolbar-title>
            <v-spacer />
            <v-menu>
              <template #activator="{ on: menu }">
                <v-tooltip bottom>
                  <template #activator="{ on: tooltip }">
                    <v-btn icon v-on="{ ...tooltip, ...menu }">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <span>Action</span>
                </v-tooltip>
              </template>
              <v-list class="pa-0" dense>
                <v-list-item v-for="action in chart.column.actions" :key="action.text" @click="action.click()">
                  <v-list-item-icon class="mr-2">
                    <v-icon small>{{ action.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ action.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-g2-column
            :data="chart.column.data"
            :x-field="chart.column.xField"
            :y-field="chart.column.yField"
            :color-field="chart.column.colorField"
          />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.line.title.text }}</v-toolbar-title>
            <v-spacer />
            <v-menu>
              <template #activator="{ on: menu }">
                <v-tooltip bottom>
                  <template #activator="{ on: tooltip }">
                    <v-btn icon v-on="{ ...tooltip, ...menu }">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <span>Action</span>
                </v-tooltip>
              </template>
              <v-list class="pa-0" dense>
                <v-list-item v-for="action in chart.line.actions" :key="action.text" @click="action.click()">
                  <v-list-item-icon class="mr-2">
                    <v-icon small>{{ action.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ action.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-g2-line
            :data="chart.line.data"
            :x-field="chart.line.xField"
            :y-field="chart.line.yField"
            :color-field="chart.line.colorField"
          />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.gauge.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-gauge />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.donut.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-donut :data="chart.donut.data" />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.cloud.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-cloud :data="chart.cloud.data" />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.bullet.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-bullet :data="chart.bullet.data" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VG2Column from '@/components/chart/g2plot/column'
import VG2Line from '@/components/chart/g2plot/line'
import VG2Gauge from '@/components/chart/g2plot/gauge'
import VG2Donut from '@/components/chart/g2plot/donut'
import VG2Cloud from '@/components/chart/g2plot/cloud'
import VG2Bullet from '@/components/chart/g2plot/bullet'
export default {
  name: 'PageChartG2',
  components: {
    VG2Column,
    VG2Line,
    VG2Gauge,
    VG2Donut,
    VG2Cloud,
    VG2Bullet,
  },
  data() {
    return {
      chart: {
        column: {
          data: [
            {
              type: 'Toy',
              sales: 38,
            },
            {
              type: 'Woman Fasion',
              sales: 52,
            },
            {
              type: 'Men Fasion',
              sales: 61,
            },
            {
              type: 'Phone',
              sales: 145,
            },
            {
              type: 'Computer',
              sales: 48,
            },
            {
              type: 'Electronics',
              sales: 38,
            },
            {
              type: 'Watches',
              sales: 38,
            },
            {
              type: 'Bag & Shoes',
              sales: 38,
            },
          ],
          xField: 'type',
          yField: 'sales',
          title: {
            visible: true,
            text: 'Basic column chart',
          },
          colorField: 'type',
          actions: [
            {
              text: 'Show Lengend',
              click: this.showColumnLengend,
            },
          ],
        },
        line: {
          data: [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
          ],
          xField: 'year',
          yField: 'value',
          title: {
            visible: true,
            text: 'Basic line chart',
          },
          actions: [
            {
              text: 'Show Lengend',
              click: this.showColumnLengend,
            },
          ],
        },
        gauge: {
          title: {
            visible: true,
            text: 'Gauge',
          },
        },
        donut: {
          data: [
            {
              type: 'United States',
              value: 27,
            },
            {
              type: 'China',
              value: 25,
            },
            {
              type: 'Russia',
              value: 18,
            },
            {
              type: 'France',
              value: 15,
            },
            {
              type: 'Spanish',
              value: 10,
            },
            {
              type: 'Other',
              value: 5,
            },
          ],
          title: {
            visible: true,
            text: 'Donut chart',
          },
        },
        cloud: {
          title: {
            visible: true,
            text: 'Tag Cloud',
          },
          data: [
            {
              weight: 12,
              word: 'VMA',
            },
            {
              weight: 9,
              word: 'Vue',
            },
            {
              weight: 8,
              word: 'Material',
            },
            {
              weight: 8,
              word: 'Chart',
            },
            {
              weight: 8,
              word: 'vuex',
            },
            {
              weight: 8,
              word: 'G2',
            },

            {
              weight: 3,
              word: 'Echart',
            },
            {
              weight: 10,
              word: 'Laravel',
            },
            {
              weight: 6,
              word: 'Data Vis',
            },
          ],
        },
        bullet: {
          title: {
            visible: true,
            text: 'Bullet',
          },
          data: [
            {
              title: 'GUI',
              measures: [83],
              targets: [90],
            },
            {
              title: 'REST API',
              measures: [13],
              targets: [90],
            },
            {
              title: 'Websocket',
              measures: [45],
              targets: [80],
            },
            {
              title: 'SSR',
              measures: [83],
              targets: [70],
            },
          ],
        },
      },
    }
  },
  methods: {
    //column
    showColumnLengend() {
      this.chart.column.colorField = 'type'
    },
  },
}
</script>
