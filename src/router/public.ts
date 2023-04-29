const PublicRoutes = {
  path: '/auth',
  component: () => import('@/layouts/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Login',
      path: '/auth/login',
      component: () => import('@/views/auth/Login.vue')
    },
    {
      name: 'Register',
      path: '/auth/register',
      component: () => import('@/views/auth/Register.vue')
    }
  ]
};

export default PublicRoutes;
