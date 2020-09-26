<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat class="grey lighten-4">
            <v-btn outlined class="mr-4" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="type"
              tile
              color="deep-purple accent-3"
              group
            >
              <v-btn value="day">
                Day
              </v-btn>

              <v-btn value="week">
                Week
              </v-btn>

              <v-btn value="month">
                Month
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="getEvents"
            :event-color="getEventColor"
            :type="type"
            @click:event="handleEditEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @click:day="handleDayClick"
            @click:time="handleTimeClick"
            @click:interval="handleIntervalClick"
            @change="updateRange"
          />
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
    <v-dialog v-model="showEventDialog" width="500">
      <event-form
        :event="selectedEvent"
        ref="form"
        @close="handleCloseDialog"
        @saved="showEventDialog = false"
      />
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import EventForm from '@/components/form/EventForm'
export default {
  name: 'PageCalendar',
  components: {
    EventForm
  },
  data() {
    return {
      showEventDialog: false,
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days'
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: [
        'blue',
        'indigo',
        'deep-purple',
        'cyan',
        'green',
        'orange',
        'grey darken-1'
      ],
      names: [
        'Meeting',
        'Holiday',
        'PTO',
        'Travel',
        'Event',
        'Birthday',
        'Conference',
        'Party'
      ]
    }
  },
  computed: {
    ...mapGetters(['getEvents'])
  },
  methods: {
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    handleEditEvent({ nativeEvent, event }) {
      console.log(event)
      this.selectedEvent = event
      this.showEventDialog = true
      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {},
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    handleDateClick(e) {
      console.log(e)
    },
    handleDayClick({ date }) {
      this.selectedEvent = {
        name: '',
        start: new Date(date),
        end: new Date(date),
        color: 'primary'
      }
      this.showEventDialog = true
    },
    handleTimeClick({ date }) {
      this.selectedEvent = {
        name: '',
        start: new Date(date),
        end: new Date(date),
        color: 'primary',
        timed: false
      }
      this.showEventDialog = true
    },
    handleIntervalClick(e) {
      console.log('interval click', e)
    },
    handleCloseDialog() {
      this.showEventDialog = false
      this.selectedEvent = null
    }
  }
}
</script>
