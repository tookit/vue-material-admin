<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container>
      <v-row>
        <v-col :cols="12">
          <v-text-field
            :label="form.title.lable"
            :placeholder="form.title.placeholder"
            v-model="formModel.title"
          />
        </v-col>
        <v-col :cols="6">
          <v-menu
            ref="startDate"
            :close-on-content-click="false"
            v-model="startDateMenu"
            :day-format="dateFormat"
            transition="scale-transition"
            offset-y
            max-width="290px"
            :return-value.sync="formModel.startDate"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :label="form.startDate.label"
                :placeholder="form.startDate.placeholder"
                v-model="formModel.startDate"
                append-icon="mdi-clock-outline"
                autocomplete="off"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="formModel.startDate" no-title scrollable>
              <v-spacer />
              <v-btn text color="primary" @click="startDateMenu = false"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="$refs.startDate.save(formModel.startDate)"
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
            :return-value.sync="formModel.startTime"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :label="form.startTime.label"
                :placeholder="form.startTime.placeholder"
                v-model="formModel.startTime"
                append-icon="mdi-clock-outline"
                v-on="on"
              />
            </template>
            <v-time-picker v-model="formModel.startTime" format="24hr">
              <v-spacer />
              <v-btn text color="primary" @click="startTimeMenu = false"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="$refs.startTime.save(formModel.startTime)"
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
            :return-value.sync="formModel.endDate"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :label="form.endDate.label"
                :placeholder="form.endDate.placeholder"
                v-model="formModel.endDate"
                append-icon="mdi-calendar"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="formModel.endDate" no-title scrollable>
              <v-spacer />
              <v-btn text color="primary" @click="endDateMenu = false"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="$refs.endDate.save(formModel.endDate)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col :cols="6">
          <v-menu
            ref="endTime"
            :close-on-content-click="false"
            v-model="endTimeMenu"
            transition="scale-transition"
            offset-y
            max-width="290px"
            :return-value.sync="formModel.endTime"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :label="form.endTime.lable"
                :placeholder="form.endTime.placeholder"
                v-model="formModel.endTime"
                append-icon="mdi-clock-outline"
                v-on="on"
              />
            </template>
            <v-time-picker v-model="formModel.endTime" format="24hr">
              <v-spacer />
              <v-btn text color="primary" @click="endTimeMenu = false"
                >Cancel</v-btn
              >
              <v-btn
                text
                color="primary"
                @click="$refs.endTime.save(formModel.endTime)"
                >OK</v-btn
              >
            </v-time-picker>
          </v-menu>
        </v-col>
        <v-col :cols="12">
          <v-textarea
            outlined
            :rows="2"
            :label="form.remark.lable"
            :placeholder="form.remark.placeholder"
            v-model="formModel.remark"
          />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { format } from 'date-fns'
const DATE_FORMAT = 'yyyy-MM-dd'
export default {
  props: {
    event: Object
  },
  data() {
    return {
      valid: true,
      dateFormat: DATE_FORMAT,
      startDateMenu: false,
      startTimeMenu: false,
      endDateMenu: false,
      endTimeMenu: false,
      formModel: {
        title: null,
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
        remark: null
      },
      form: {
        title: {
          label: 'Title',
          placeholder: 'Event Title',
          rules: [(v) => !!v || 'This field is required']
        },
        startDate: {
          label: 'Start date',
          placeholder: 'Start date',
          rules: [(v) => !!v || 'This field is required']
        },
        endDate: {
          label: 'End date',
          placeholder: 'End date',
          rules: [(v) => !!v || 'This field is required']
        },
        startTime: {
          label: 'Start time',
          placeholder: 'Start time',
          rules: [(v) => !!v || 'This field is required']
        },
        endTime: {
          label: 'End time',
          placeholder: 'end time',
          rules: [(v) => !!v || 'This field is required']
        },
        remark: {
          label: 'Remark',
          placeholder: 'Remark',
          rules: [(v) => !!v || 'This field is required']
        }
      }
    }
  },
  watch: {
    event: {
      handler(event) {
        this.updateEvent(event)
      },
      immediate: true
    }
  },
  methods: {
    updateEvent({ name, color, start, end, timed }) {
      this.formModel.title = name
      this.formModel.startDate = format(start, DATE_FORMAT)
      this.formModel.endDate = format(end, DATE_FORMAT)
      this.formModel.startTime = format(start, 'HH:mm')
      this.formModel.endTime = format(end, 'HH:mm')
    }
  }
}
</script>
