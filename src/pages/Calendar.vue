<template>
  <v-container fluid>
    <v-layout column>
      <v-flex>
        <full-calendar class="fullwidth" :events="fcEvents" @dayClick="handleDayClick" @eventClick="handleEventClick">
        </full-calendar>
      </v-flex>
    </v-layout>
      <v-dialog v-model="dialog" width="650">
        <event-form ref="eForm" v-bind="dialogData"></event-form>
      </v-dialog>  
  </v-container>
</template>

<script>
import FullCalendar from 'vue-fullcalendar';
import EventForm from '../components/widgets/form/EventForm';

export default {
  components: {
    FullCalendar,
    EventForm
  },
  data: () => ({
    size: 'sm',
    dialog: false,
    dialogData: null,
    fcEvents: [
      {
        title: 'Sunny Out of Office',
        start: '2018-03-30',
        end: '2018-04-02'  
      }
    
    ],

  }),


  
  methods: {
    handleDayClick (day, e) {
      this.dialog = true;
    },
    handleEventClick (e, event, pos) {
      this.dialog = true;
      this.$refs.eForm.title = e.title;
      this.$refs.eForm.startDate = e.start;
      this.$refs.eForm.endDate = e.end;

    }
  },
};
</script>
<style scoped>
.fullwidth {
  width: 100%!important;
  max-width: 100%;;
}
</style>
