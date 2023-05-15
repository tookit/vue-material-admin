const PrivateRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main',
  component: () => import('@/layouts/DefaultLayout.vue'),
  children: [
    {
      name: 'Dashboard',
      path: '/',
      component: () => import('@/views/dashboard/index.vue')
    },
    {
      name: 'Form',
      path: '/form',
      component: () => import('@/views/forms/form-layout.vue')
    },
    {
      name: 'Table',
      path: '/user-table',
      component: () => import('@/views/tables/user-table.vue')
    },
    {
      name: 'Chart',
      path: '/Chart',
      component: () => import('@/views/charts/Chart.vue')
    },
    {
      name: 'Calendar',
      path: '/calendar',
      component: () => import('@/views/apps/Calendar.vue')
    },
    {
      name: 'Chat',
      path: '/chat',
      component: () => import('@/views/apps/Chat.vue')
    }
  ]
};

export default PrivateRoutes;
