import { defineMock } from 'vite-plugin-mock-dev-server';
import { ICalendarEvent, IEvent } from '../src/api/type';

const date = new Date();
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const nextMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() + 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const prevMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() - 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() - 1, 1);

let events: ICalendarEvent[] = [
  {
    id: '1',
    url: '',
    title: 'Design Review',
    start: date.toUTCString(),
    end: nextDay.toUTCString(),
    allDay: false,
    extendedProps: {
      calendar: 'Business'
    }
  },
  {
    id: '2',
    url: '',
    title: 'Meeting With Client',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11).toUTCString(),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10).toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  },
  {
    id: '3',
    url: '',
    title: 'Family Trip',
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9).toUTCString(),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7).toUTCString(),
    extendedProps: {
      calendar: 'Holiday'
    }
  },
  {
    id: '4',
    url: '',
    title: "Doctor's Appointment",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11).toUTCString(),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10).toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  },
  {
    id: '5',
    url: '',
    title: 'Dart Game?',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13).toUTCString(),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12).toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'ETC'
    }
  },
  {
    id: '6',
    url: '',
    title: 'Meditation',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13).toUTCString(),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12).toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  },
  {
    id: '7',
    url: '',
    title: 'Dinner',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13).toUTCString(),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12).toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'Family'
    }
  },
  {
    id: '8',
    url: '',
    title: 'Product Review',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13).toUTCString(),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12).toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  },
  {
    id: '9',
    url: '',
    title: 'Monthly Meeting',
    start: nextMonth.toUTCString(),
    end: nextMonth.toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  },
  {
    id: '10',
    url: '',
    title: 'Monthly Checkup',
    start: prevMonth.toUTCString(),
    end: prevMonth.toUTCString(),
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  }
];

export const fetchEvents = defineMock({
  url: '/api/event',
  method: 'GET',
  delay: 2000,
  response(req, res, next) {
    const { query } = req;
    const data = events.filter((event) => {
      const calendars = query.calendars.split(',');
      return calendars.includes(event.extendedProps.calendar);
    });

    res.end(JSON.stringify(data));
  }
});

export const addEvents = defineMock({
  url: '/api/event',
  method: 'POST',
  delay: 2000,
  response(req, res, next) {
    const blankEvent = {
      id: '',
      title: '',
      start: '',
      end: '',
      allDay: false,
      url: '',
      extendedProps: {
        calendar: ''
      }
    };
    const { body } = req;
    const event = Object.assign(blankEvent, body);
    events.push(event);
    res.end(JSON.stringify(event));
  }
});

export const updateEvent = defineMock({
  url: '/api/event/:eventId',
  method: 'PUT',
  delay: 2000,
  response(req, res, next) {
    const { params, body } = req;
    const eventId = params.eventId;
    let event = events.find((item) => {
      return item.id === eventId;
    });
    res.end(JSON.stringify(body));
  }
});
