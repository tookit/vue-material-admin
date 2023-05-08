import Mock from 'mockjs';
import { defineMock } from 'vite-plugin-mock-dev-server';

const isAuthenticated = (username, password) => {
  return username === 'admin' && password === '123456';
};

export const login = defineMock({
  url: '/api/login',
  delay: 2000,
  response(req, res, next) {
    const { body } = req;
    const { username, password } = body;
    const data = isAuthenticated(username, password)
      ? {
          access_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGVtby5pc29ja2VkLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY4MTIwMTM4MiwiZXhwIjoxNjgxMjg3NzgyLCJuYmYiOjE2ODEyMDEzODIsImp0aSI6IjBmSGpWMjRLbmluaDVOS3oiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.hafnDiombVoWyUIVj_t7xwZQ0Md-N9RZxHh9rN0ieNQ',
          expires_in: 86400
        }
      : {
          errorCode: '400',
          errorMessage: 'Auth Failed.'
        };
    res.statusCode = isAuthenticated(username, password) ? 200 : 400;
    res.end(JSON.stringify(data));
  }
});

const users = Mock.mock({
  'data|25': [
    {
      'id|+1': 1,
      username: '@first',
      email: '@email',
      'role|+1': ['Admin', 'Guest', 'Editor'],
      avatar: "@Image('100x100','@color','小甜甜')",
      'status|+1': ['Active', 'Pending', 'Frozen']
    }
  ]
});

export const fetchUsers = defineMock({
  url: '/api/user',
  delay: 2000,
  response(req, res, next) {
    const { query, body, params, headers } = req;
    const data = users.data;
    res.end(JSON.stringify(data));
  }
});

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

const events = {
  data: [
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
  ]
};

export const fetchEvents = defineMock({
  url: '/api/event',
  delay: 2000,
  response(req, res, next) {
    const data = events.data;
    res.end(JSON.stringify(data));
  }
});
