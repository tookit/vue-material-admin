import { AuthLayout, DefaultLayout, ChatLayout } from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "errors-404" */ '@/views/error/NotFound.vue'),
  },
  {
    path: '/auth',
    component: AuthLayout,
    meta: {
      title: 'Login',
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login',
        },
        component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue'),
      },
    ],
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found',
    },
    component: () => import(/* webpackChunkName: "errors-404" */ '@/views/error/NotFound.vue'),
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error',
    },
    component: () => import(/* webpackChunkName: "errors-500" */ '@/views/error/Error.vue'),
  },
]

export const protectedRoute = [
  {
    path: '/',
    component: DefaultLayout,
    meta: {
      title: 'Home',
      group: 'apps',
      icon: '',
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Home',
          group: 'apps',
          icon: 'dashboard',
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/media',
        meta: {
          title: 'Media',
          group: 'apps',
          icon: 'media',
        },
        name: 'Media',
        props: (route) => ({
          type: route.query.type,
        }),
        component: () => import(/* webpackChunkName: "media" */ '@/views/Media.vue'),
      },

      {
        path: '/task',
        meta: {
          title: 'Task',
          group: 'apps',
          icon: 'media',
        },
        name: 'Task',
        props: (route) => ({
          type: route.query.type,
        }),
        component: () => import(/* webpackChunkName: "task" */ '@/views/Calendar.vue'),
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'Access Denied',
          hiddenInMenu: true,
        },
        component: () => import(/* webpackChunkName: "error-403" */ '@/views/error/Deny.vue'),
      },
    ],
  },

  //list
  {
    path: '/cms',
    component: DefaultLayout,
    redirect: '/cms/table',
    meta: {
      title: 'CMS',
      icon: 'view_compact',
      group: 'cms',
    },
    children: [
      {
        path: '/cms/table',
        name: 'ListTable',
        meta: {
          title: 'CMS Table',
        },
        component: () => import(/* webpackChunkName: "table" */ '@/views/list/Table.vue'),
      },
    ],
  },

  //widgets
  {
    path: '/widgets',
    component: DefaultLayout,
    meta: {
      title: 'Widget',
      icon: 'widgets',
      group: 'advance',
    },
    redirect: '/widgets/chart',
    children: [
      {
        path: '/widgets/chart',
        name: 'ChartWidget',
        meta: {
          title: 'Chart Widget',
        },
        component: () => import(/* webpackChunkName: "chart-widget" */ '@/views/widgets/Chart.vue'),
      },
      {
        path: '/widgets/list',
        name: 'ListWidget',
        meta: {
          title: 'List Widget',
        },
        component: () => import(/* webpackChunkName: "list-widget" */ '@/views/widgets/List.vue'),
      },
      {
        path: '/widgets/social',
        name: 'SocialWidget',
        meta: {
          title: 'Social Widget',
        },
        component: () => import(/* webpackChunkName: "social-widget" */ '@/views/widgets/Social.vue'),
      },
      {
        path: '/widgets/statistic',
        name: 'StatisticWidget',
        meta: {
          title: 'Statistic Widget',
        },
        component: () => import(/* webpackChunkName: "statistic-widget" */ '@/views/widgets/Statistic.vue'),
      },
    ],
  },

  //media

  // chat app
  {
    path: '/chat',
    name: 'Chat',
    component: ChatLayout,
    redirect: {
      path: '/chat/messaging',
    },
    meta: {
      title: 'Chat',
      group: 'apps',
      icon: 'chat_bubble',
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        name: 'ChatMessaging',
        props: true,
        component: () => import(/* webpackChunkName: "chat-messaging" */ '@/views/chat/ChatMessaging.vue'),
      },
      {
        path: '/chat/contact/:uuid?',
        meta: {
          public: true,
        },
        name: 'ChatContact',
        component: () => import(/* webpackChunkName: "chat-contact" */ '@/views/chat/ChatContact.vue'),
      },
    ],
  },

  //mail app
  {
    path: '/mail',
    name: 'Mail',
    component: () => import(/* webpackChunkName: "mail-layout" */ '@/components/email/Layout.vue'),
    redirect: {
      path: '/mail/all',
    },
    children: [
      {
        path: '/mail/:mailType',
        name: 'MailIndex',
        component: () => import(/* webpackChunkName: "mail-list" */ '@/components/email/List.vue'),
      },
      {
        path: '/mail/0/:uuid',
        name: 'MailDetail',
        component: () => import(/* webpackChunkName: "mail-reply" */ '@/components/email/Reply.vue'),
      },
    ],
  },
]
