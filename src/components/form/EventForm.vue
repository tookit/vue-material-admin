<template>
  <v-card tile>
    <v-toolbar flat dark>
      <v-toolbar-title v-text="eventTitle" />
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text style="max-height: 450px; overflow: auto">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col :cols="12">
              <v-text-field
                v-model="formModel.title"
                :label="form.title.label"
                :placeholder="form.title.placeholder"
                :rules="form.title.rules"
              />
            </v-col>
            <v-col :cols="12">
              <v-autocomplete
                v-model="formModel.color"
                :items="colors"
                :label="form.color.label"
                :placeholder="form.color.placeholder"
              >
                <template #item="data">
                  <v-list-item-avatar>
                    <v-avatar :color="data.item.value"> </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.value"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col :cols="6">
              <v-menu
                ref="startDate"
                v-model="startDateMenu"
                :close-on-content-click="false"
                :day-format="dateFormat"
                transition="scale-transition"
                offset-y
                max-width="290px"
                :return-value.sync="formModel.startDate"
              >
                <template #activator="{ on }">
                  <v-text-field
                    v-model="formModel.startDate"
                    :label="form.startDate.label"
                    :placeholder="form.startDate.placeholder"
                    append-icon="mdi-clock-outline"
                    autocomplete="off"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="formModel.startDate" no-title scrollable>
                  <v-spacer />
                  <v-btn text color="primary" @click="startDateMenu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.startDate.save(formModel.startDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col :cols="6">
              <v-menu
                ref="startTime"
                v-model="startTimeMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                :return-value.sync="formModel.startTime"
              >
                <template #activator="{ on }">
                  <v-text-field
                    v-model="formModel.startTime"
                    :label="form.startTime.label"
                    :placeholder="form.startTime.placeholder"
                    append-icon="mdi-clock-outline"
                    v-on="on"
                  />
                </template>
                <v-time-picker v-model="formModel.startTime" format="24hr">
                  <v-spacer />
                  <v-btn text color="primary" @click="startTimeMenu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.startTime.save(formModel.startTime)">OK</v-btn>
                </v-time-picker>
              </v-menu>
            </v-col>
            <v-col :cols="6">
              <v-menu
                ref="endDate"
                v-model="endDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
                :return-value.sync="formModel.endDate"
              >
                <template #activator="{ on }">
                  <v-text-field
                    v-model="formModel.endDate"
                    :label="form.endDate.label"
                    :placeholder="form.endDate.placeholder"
                    append-icon="mdi-calendar"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="formModel.endDate" no-title scrollable>
                  <v-spacer />
                  <v-btn text color="primary" @click="endDateMenu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.endDate.save(formModel.endDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col :cols="6">
              <v-menu
                ref="endTime"
                v-model="endTimeMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                :return-value.sync="formModel.endTime"
              >
                <template #activator="{ on }">
                  <v-text-field
                    v-model="formModel.endTime"
                    :label="form.endTime.lable"
                    :placeholder="form.endTime.placeholder"
                    append-icon="mdi-clock-outline"
                    v-on="on"
                  />
                </template>
                <v-time-picker v-model="formModel.endTime" format="24hr">
                  <v-spacer />
                  <v-btn text color="primary" @click="endTimeMenu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.endTime.save(formModel.endTime)">OK</v-btn>
                </v-time-picker>
              </v-menu>
            </v-col>
            <v-col :cols="12">
              <v-textarea
                v-model="formModel.remark"
                outlined
                :rows="2"
                :label="form.remark.lable"
                :placeholder="form.remark.placeholder"
              />
            </v-col>
            <v-spacer />
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn text color="secondary" @click="$emit('cancel')"> Cancel </v-btn>
      <v-spacer />

      <v-btn :loading="loading" tile color="primary" @click="handleSubmitForm"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { format } from 'date-fns'
import { setTimeout } from 'timers'
const DATE_FORMAT = 'yyyy-MM-dd'
export default {
  props: {
    event: Object,
  },
  data() {
    return {
      valid: true,
      loading: false,
      dateFormat: DATE_FORMAT,
      startDateMenu: false,
      startTimeMenu: false,
      endDateMenu: false,
      endTimeMenu: false,
      colors: [
        {
          text: 'Blue',
          value: 'blue',
        },
        {
          text: 'Red',
          value: 'red',
        },
        {
          text: 'Green',
          value: 'green',
        },
        {
          text: 'Brown',
          value: 'brown',
        },
      ],
      formModel: {
        title: null,
        color: 'blue',
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
        remark: null,
      },
      form: {
        title: {
          label: 'Title',
          placeholder: 'Event Title',
          rules: [(v) => !!v || 'This field is required'],
        },
        color: {
          label: 'Color',
          placeholder: 'Event Color',
          rules: [(v) => !!v || 'This field is required'],
        },
        startDate: {
          label: 'Start date',
          placeholder: 'Start date',
          rules: [(v) => !!v || 'This field is required'],
        },
        endDate: {
          label: 'End date',
          placeholder: 'End date',
          rules: [(v) => !!v || 'This field is required'],
        },
        startTime: {
          label: 'Start time',
          placeholder: 'Start time',
          rules: [(v) => !!v || 'This field is required'],
        },
        endTime: {
          label: 'End time',
          placeholder: 'end time',
          rules: [(v) => !!v || 'This field is required'],
        },
        remark: {
          label: 'Remark',
          placeholder: 'Remark',
          rules: [(v) => !!v || 'This field is required'],
        },
      },
    }
  },
  computed: {
    eventTitle() {
      return this.event && this.event.id ? 'Update Event' : 'Create Event'
    },
  },
  watch: {
    event: {
      handler(event) {
        if (event) {
          this.updateModel(event)
        }
      },
      immediate: true,
    },
  },
  methods: {
    updateModel({ name, color, start, end, timed }) {
      this.formModel.title = name
      ;(this.formModel.color = color), (this.formModel.timed = timed)
      this.formModel.startDate = format(start, DATE_FORMAT)
      this.formModel.endDate = format(end, DATE_FORMAT)
      this.formModel.startTime = format(start, 'HH:mm')
      this.formModel.endTime = format(end, 'HH:mm')
    },
    handleSubmitForm() {
      if (this.$refs.form.validate()) {
        if (this.event.id) {
          this.updateEvent()
        } else {
          this.createEvent(0)
        }
      }
    },
    createEvent() {
      const event = {
        name: this.formModel.title,
        start: new Date(this.formModel.startDate),
        end: new Date(this.formModel.endDate),
        color: 'primary',
      }
      this.loading = true
      setTimeout(() => {
        this.$store.dispatch('createEvent', event)
        this.$emit('saved')
        this.loading = false
      }, 1000)
    },
    updateEvent() {
      const event = {
        id: this.event.id,
        name: this.formModel.title,
        start: new Date(this.formModel.startDate),
        end: new Date(this.formModel.endDate),
        color: 'primary',
      }
      this.loading = true
      setTimeout(() => {
        this.$store.dispatch('updateEvent', event)
        this.$emit('saved')
        this.loading = false
      }, 1000)
    },
  },
}
</script>
