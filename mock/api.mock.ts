import Mock from 'mockjs';
import { defineMock } from 'vite-plugin-mock-dev-server';
export const login = defineMock({
  url: '/api/login',
  body: {
    access_token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGVtby5pc29ja2VkLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY4MTIwMTM4MiwiZXhwIjoxNjgxMjg3NzgyLCJuYmYiOjE2ODEyMDEzODIsImp0aSI6IjBmSGpWMjRLbmluaDVOS3oiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.hafnDiombVoWyUIVj_t7xwZQ0Md-N9RZxHh9rN0ieNQ',
    expires_in: 86400
  },
  delay: 2000
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
  body: users.data,
  delay: 2000
});
