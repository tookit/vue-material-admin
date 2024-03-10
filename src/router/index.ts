import { fetchMe } from '@/api/user';
// import { useUserStore } from '@/store/userStore';
import { createRouter, createWebHistory } from 'vue-router';
import PrivateRoutes from './private';
import PublicRoutes from './public';

const whiteList = ['Login', 'Register', 'Forget', 'Reset'];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 60 };

    return { top: 0 };
  },
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/NotFound.vue')
    },
    PrivateRoutes,
    PublicRoutes
  ]
});

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(async (to) => {
  const routeName = String(to.name);
  if (whiteList.includes(routeName)) {
    return true;
  } else {
    // const userStore = useUserStore();
    try {
      const resp = await fetchMe();
      console.log(resp);
      return true;
    } catch (error) {
      return { name: 'Login' };
    }
  }
});
