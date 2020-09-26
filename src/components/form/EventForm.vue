<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container>
      <v-row>
        <v-col :cols="12">
          <v-text-field
            label="Title"
            placeholder="Title"
            name="title"
            v-model="title"
            dense
          />
        </v-col>
        <v-col :cols="6">
          <v-menu
            ref="startDate"
            :close-on-content-click="false"
            v-model="startDateMenu"
            transition="scale-transition"
            offset-y
            max-width="290px"
            :return-value.sync="startDate"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="Start Date"
                v-model="startDate"
                append-icon="mdi-calendar"
                dense
                v-on="on"
              />
            </template>
            <v-date-picker v-model="startDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="startDateMenu = false"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="$refs.startDate.save(startDate)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col :cols="6">
          <v-menu
            ref="startTime"
            :close-on-content-click="false"
            v-model="startTimeMenu"
            transition="scale-transition"
            offset-y
            max-width="290px"
            :return-value.sync="startTime"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="Start Time"
                v-model="startTime"
                append-icon="mdi-clock-outline"
                dense
                v-on="on"
              />
            </template>
            <v-time-picker v-model="startTime">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="startTimeMenu = false"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="$refs.startTime.save(startTime)"
                >OK</v-btn
              >
            </v-time-picker>
          </v-menu>
        </v-col>
        <v-col :cols="6">
          <v-menu
            ref="endDate"
            :close-on-content-click="false"
            v-model="endDateMenu"
            transition="scale-transition"
            offset-y
            min-width="290px"
            :return-value.sync="endDate"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="End Date"
                v-model="endDate"
                append-icon="mdi-calendar"
                dense
                v-on="on"
              />
            </template>
            <v-date-picker v-model="endDate" no-title scrollable>
              <v-spacer />
              <v-btn text color="primary" @click="endDateMenu = false"
                >Cancel</v-btn
              >
              <v-btn text color="primary" @click="$refs.endDate.save(endDate)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col :cols="6">
          <v-menu
            ref="endTime"
            lazy
            :close-on-content-click="false"
            v-model="endTimeMenu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-bottom="-24"
            max-width="290px"
            :return-value.sync="endTime"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="End Time"
                v-model="endTime"
                append-icon="mdi-clock-outline"
                dense
                v-on="on"
              />
            </template>
            <v-time-picker v-model="endTime">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="endTimeMenu = false"
                >Cancel</v-btn
              >
              <v-btn text color="primary" @click="$refs.endTime.save(endTime)"
                >OK</v-btn
              >
            </v-time-picker>
          </v-menu>
        </v-col>
        <v-col :cols="12">
          <v-textarea outlined label="Description"> </v-textarea>
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    title: null,
    valid: true,
    startDateMenu: false,
    startDate: null,
    startTimeMenu: false,
    startTime: null,
    endDateMenu: false,
    endDate: null,
    endTimeMenu: false,
    endTime: null
  }),
  methods: {
    closeDialog() {
      this.$parent.isActive = false
    }
  }
}
</script>
