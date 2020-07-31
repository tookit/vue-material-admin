import { LayoutAuth, LayoutDefault, LayoutChat } from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue')
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () =>
          import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () =>
      import(/* webpackChunkName: "errors-404" */ '@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'Home',
      group: 'apps',
      icon: ''
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          group: 'apps',
          icon: 'dashboard'
        },
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/media',
        meta: {
          title: 'Media',
          group: 'apps',
          icon: 'media'
        },
        name: 'Media',
        component: () => import('@/views/Media.vue')
      },

      {
        path: '/task',
        meta: {
          title: 'Task',
          group: 'apps',
          icon: 'media'
        },
        name: 'Task',
        props: (route) => ({
          type: route.query.type
        }),
        component: () => import('@/views/Calendar.vue')
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'Access Denied',
          hiddenInMenu: true
        },
        component: () => import('@/views/error/Deny.vue')
      }
    ]
  },

  //list
  {
    path: '/cms',
    component: LayoutDefault,
    redirect: '/cms/table',
    meta: {
      title: 'CMS',
      icon: 'view_compact',
      group: 'cms'
    },
    children: [
      {
        path: '/cms/table',
        name: 'ListTable',
        meta: {
          title: 'CMS Table'
        },
        component: () =>
          import(/* webpackChunkName: "table" */ '@/views/list/Table.vue')
      }
    ]
  },

  //widgets
  {
    path: '/widgets',
    component: LayoutDefault,
    meta: {
      title: 'Widget',
      icon: 'widgets',
      group: 'advance'
    },
    redirect: '/widgets/chart',
    children: [
      {
        path: '/widgets/chart',
        name: 'ChartWidget',
        meta: {
          title: 'Chart Widget'
        },
        component: () =>
          import(
            /* webpackChunkName: "chart-widget" */ '@/views/widgets/Chart.vue'
          )
      },
      {
        path: '/widgets/list',
        name: 'ListWidget',
        meta: {
          title: 'List Widget'
        },
        component: () =>
          import(
            /* webpackChunkName: "list-widget" */ '@/views/widgets/List.vue'
          )
      },
      {
        path: '/widgets/social',
        name: 'SocialWidget',
        meta: {
          title: 'Social Widget'
        },
        component: () =>
          import(
            /* webpackChunkName: "social-widget" */ '@/views/widgets/Social.vue'
          )
      },
      {
        path: '/widgets/statistic',
        name: 'StatisticWidget',
        meta: {
          title: 'Statistic Widget'
        },
        component: () =>
          import(
            /* webpackChunkName: "statistic-widget" */ '@/views/widgets/Statistic.vue'
          )
      }
    ]
  },
  // chat app
  {
    path: '/chat',
    name: 'Chat',
    component: LayoutChat,
    redirect: {
      path: '/chat/messaging'
    },
    meta: {
      title: 'Chat',
      group: 'apps',
      icon: 'chat_bubble'
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        name: 'ChatMessaging',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "chat-messaging" */ '@/views/chat/ChatMessaging.vue'
          )
      },
      {
        path: '/chat/contact/:uuid?',
        meta: {
          public: true
        },
        name: 'ChatContact',
        component: () =>
          import(
            /* webpackChunkName: "chat-contact" */ '@/views/chat/ChatContact.vue'
          )
      }
    ]
  },

  //mail app
  {
    path: '/mail',
    name: 'Mail',
    component: () =>
      import(
        /* webpackChunkName: "mail-layout" */ '@/components/email/Layout.vue'
      ),
    redirect: {
      path: '/mail/all'
    },
    children: [
      {
        path: '/mail/:mailType',
        name: 'MailIndex',
        component: () =>
          import(
            /* webpackChunkName: "mail-list" */ '@/components/email/List.vue'
          )
      },
      {
        path: '/mail/0/:uuid',
        name: 'MailDetail',
        component: () =>
          import(
            /* webpackChunkName: "mail-reply" */ '@/components/email/Reply.vue'
          )
      }
    ]
  }
]
