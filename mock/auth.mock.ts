import { defineMock } from 'vite-plugin-mock-dev-server';

const isAuthenticated = (username, password) => {
  return username === 'admin' && password === '123456';
};

export const login = defineMock({
  url: '/api/login',
  method: 'POST',
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
