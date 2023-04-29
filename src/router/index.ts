import { createRouter, createWebHistory } from 'vue-router';
import PrivateRoutes from './private';
import PublicRoutes from './public';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/Error404.vue')
    },
    PrivateRoutes,
    PublicRoutes
  ]
});
