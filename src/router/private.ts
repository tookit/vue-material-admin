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
      name: 'Typography',
      path: '/ui/typography',
      component: () => import('@/views/components/Typography.vue')
    },
    {
      name: 'Shadow',
      path: '/ui/shadow',
      component: () => import('@/views/components/Shadow.vue')
    },
    {
      name: 'Icons',
      path: '/icons',
      component: () => import('@/views/pages/Icons.vue')
    },
    {
      name: 'Starter',
      path: '/sample-page',
      component: () => import('@/views/pages/SamplePage.vue')
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
    }
  ]
};

export default PrivateRoutes;
