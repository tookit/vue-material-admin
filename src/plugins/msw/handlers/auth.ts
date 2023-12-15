import { http, delay, HttpResponse } from 'msw';
const isAuthenticated = (username, password) => {
  return username === 'admin' && password === '123456';
};

export const handlerAuth = [
  http.post('/api/auth/login', async ({ request }) => {
    const { username, password } = (await request.json()) as { username: string; password: string };
    console.log(username, password);
    const statusCode = isAuthenticated(username, password) ? 200 : 400;
    const data = isAuthenticated(username, password)
      ? {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg',
          expires_in: 86400
        }
      : {
          errorCode: '400',
          errorMessage: 'Auth Failed.'
        };
    await delay(1000);
    return HttpResponse.json(data, { status: statusCode });
  })
];
