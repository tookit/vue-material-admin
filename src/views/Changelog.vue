<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <v-card tile>
          <v-card-title>Changelog</v-card-title>
          <v-divider />
          <v-card-text>
            <v-timeline>
              <v-timeline-item
                v-for="(item, i) in changelogs"
                :key="i"
                :color="item.color"
                small
              >
                <template v-slot:opposite>
                  <span
                    :class="`headline font-weight-bold ${item.color}--text`"
                    v-text="item.tag"
                  />
                </template>
                <div class="py-4">
                  <h2
                    :class="
                      `headline font-weight-light mb-4 ${item.color}--text`
                    "
                  >
                    {{ item.version }}
                  </h2>
                  <div v-for="log in item.logs" :key="log">
                    {{ log }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      changelogs: [
        {
          version: '0.1.4',
          tag: 'patch',
          color: 'primary',
          logs: [
            '* add event color in event form (b87165a)',
            '* update calendar (a7e2f9f)',
            '* add event in calendar (f1d67b9)',
            '* update work flow (79d77b9)',
            '* docs: update readme (a30b6bd)'
          ]
        }
      ]
    }
  }
}
</script>
