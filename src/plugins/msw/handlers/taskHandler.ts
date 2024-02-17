import { http, HttpResponse, delay } from 'msw';
import { IUser } from '@/api/type';

import { users } from './db';

export const findUserById = (id) => {
  return users.find((item) => item.id === id);
};

export const handlerUser = [
  // get current user info
  http.get('/api/me', async () => {
    const data = users;
    return HttpResponse.json(data[0], { status: 200 });
  }),

  http.get('/api/user', async ({ request }) => {
    let data = users;
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('filter[role]') ?? null;
    const status = searchParams.get('filter[status]') ?? null;
    if (role) {
      console.log(role);

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
