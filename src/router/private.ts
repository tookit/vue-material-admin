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
      component: () => import('@/views/dashboard/Index.vue')
    },
    {
      name: 'Form',
      path: '/form',
      component: () => import('@/views/forms/FormLayout.vue')
    },
    {
      name: 'Table',
      path: '/user-table',
      component: () => import('@/views/tables/UserTable.vue')
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
    },
    {
      name: 'Profile',
      path: '/profile',
      component: () => import('@/views/profile/UserProfile.vue')
    },
    {
      name: 'Setting',
      path: '/setting',
      component: () => import('@/views/setting/UserSetting.vue')
    }
  ]
};

export default PrivateRoutes;
