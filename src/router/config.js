import {
  LayoutAuth,
  LayoutDefault,
  LayoutChat,
  RouteWrapper
} from '@/components/layouts'

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
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound.vue')
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
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/task',
        meta: {
          title: 'Task',
          group: 'apps',
          icon: 'mdi-calendar-check'
        },
        name: 'Task',
        props: (route) => ({
          type: route.query.type
        }),
        component: () => import('@/views/Calendar.vue')
      },
      {
        path: '/cms',
        component: RouteWrapper,
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
              title: 'CMS Table',
              icon: 'mdi-database'
            },
            component: () => import('@/views/list/Table.vue')
          }
        ]
      },
      //widgets
      {
        path: '/widgets',
        component: RouteWrapper,
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
              title: 'Chart Widget',
              icon: 'mdi-chart-line'
            },
            component: () => import('@/views/widgets/Chart.vue')
          },
          {
            path: '/widgets/list',
            name: 'ListWidget',
            meta: {
              title: 'List Widget',
              icon: 'mdi-table'
            },
            component: () => import('@/views/widgets/List.vue')
          },
          {
            path: '/widgets/social',
            name: 'SocialWidget',
            meta: {
              title: 'Social Widget',
              icon: 'mdi-face-profile'
            },
            component: () => import('@/views/widgets/Social.vue')
          },
          {
            path: '/widgets/statistic',
            name: 'StatisticWidget',
            meta: {
              title: 'Statistic Widget',
              icon: 'mdi-hexagon'
            },
            component: () => import('@/views/widgets/Statistic.vue')
          }
        ]
      },
      {
        path: '/media',
        meta: {
          title: 'Media',
          icon: 'mdi-image'
        },
        name: 'Media',
        component: () => import('@/views/Media.vue')
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
        component: () => import('@/views/chat/ChatMessaging.vue')
      },
      {
        path: '/chat/contact/:uuid?',
        meta: {
          public: true
        },
        name: 'ChatContact',
        component: () => import('@/views/chat/ChatContact.vue')
      }
    ]
  },

  //mail app
  {
    path: '/mail',
    name: 'Mail',
    component: () => import('@/components/email/Layout.vue'),
    redirect: {
      path: '/mail/all'
    },
    children: [
      {
        path: '/mail/:mailType',
        name: 'MailIndex',
        component: () => import('@/components/email/List.vue')
      },
      {
        path: '/mail/0/:uuid',
        name: 'MailDetail',
        component: () => import('@/components/email/Reply.vue')
      }
    ]
  }
]
