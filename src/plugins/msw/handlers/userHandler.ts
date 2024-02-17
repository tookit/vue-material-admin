import { http, HttpResponse, delay } from 'msw';
import { users } from './db';

export const findUserById = (id) => {
  return users.find((item) => item.id === id);
};

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg';

export const handlerUser = [
  // get current user info
  http.get('/api/me', async ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '');
    console.log(token);
    const data = users;

    if (token === TOKEN) {
      return HttpResponse.json(data[0], { status: 200 });
    } else {
      return HttpResponse.json(data[0], { status: 401 });
    }
  }),

  http.get('/api/user', async ({ request }) => {
    let data = users;
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('filter[role]') ?? null;
    const status = searchParams.get('filter[status]') ?? null;
    if (role) {
      data = users.filter((item) => {
        return item.role === role;
      });
    }
    if (status) {
      data = users.filter((item) => {
        return item.status === status;
      });
    }
    await delay(2000);
    return HttpResponse.json(data, { status: 200 });
  }),

  http.get('/api/user/:id', async ({ params }) => {
    const data = findUserById(params.id);
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
    return HttpResponse.json(data, { status: 200 });
  })
];
