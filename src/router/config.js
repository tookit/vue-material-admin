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
      title: 'home',
      group: 'apps',
      icon: ''
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          group: 'apps',
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/task',
        meta: {
          title: 'task',
          group: 'apps',
          icon: 'mdi-calendar-check'
        },
        name: 'task',
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
          icon: 'mdi-view-grid',
          group: 'cms'
        },
        children: [
          {
            path: '/cms/table',
            name: 'cms.table',
            meta: {
              title: 'table',
              icon: 'mdi-database'
            },
            component: () => import('@/views/list/Table.vue')
          }
        ]
      },
      {
        path: '/acl',
        component: RouteWrapper,
        redirect: '/acl/user/list',
        meta: {
          title: 'acl',
          icon: 'mdi-shield',
          group: 'cms'
        },
        children: [
          {
            path: '/acl/user',
            name: 'acl.user',
            meta: {
              title: 'users',
              icon: 'mdi-account-multiple'
            },
            redirect: '/acl/user/list',
            component: RouteWrapper,
            children: [
              {
                path: '/acl/user/list',
                name: 'acl.user.list',
                meta: {
                  title: 'user_list',
                  icon: 'mdi-account-multiple'
                },
                component: () => import('@/views/user/UserList.vue')
              },
              {
                path: '/acl/user/create',
                name: 'acl.user.create',
                meta: {
                  title: 'create_user',
                  icon: 'mdi-view-grid'
                },
                component: () => import('@/views/user/UserItem.vue')
              },
              {
                path: '/acl/user/item/:id',
                name: 'acl.user.edit',
                meta: {
                  title: 'edit_user',
                  icon: 'mdi-view-grid'
                },
                props: true,
                component: () => import('@/views/user/UserItem.vue')
              }
            ]
          }
        ]
      },
      //widgets
      {
        path: '/widgets',
        component: RouteWrapper,
        meta: {
          title: 'widget',
          icon: 'mdi-widgets',
          group: 'advance'
        },
        redirect: '/widgets/list',
        children: [
          {
            path: '/widgets/list',
            name: 'ListWidget',
            meta: {
              title: 'list',
              icon: 'mdi-table'
            },
            component: () => import('@/views/widgets/List.vue')
          },
          {
            path: '/widgets/social',
            name: 'SocialWidget',
            meta: {
              title: 'social',
              icon: 'mdi-face-profile'
            },
            component: () => import('@/views/widgets/Social.vue')
          },
          {
            path: '/widgets/statistic',
            name: 'StatisticWidget',
            meta: {
              title: 'statistic',
              icon: 'mdi-hexagon'
            },
            component: () => import('@/views/widgets/Statistic.vue')
          }
        ]
      },
      //form
      {
        path: '/forms',
        component: RouteWrapper,
        meta: {
          title: 'form',
          icon: 'mdi-form-textbox',
          group: 'advance'
        },
        redirect: '/forms/list',
        children: [
          {
            path: '/forms/basic',
            name: 'forms.basic',
            meta: {
              title: 'basic_form',
              icon: 'mdi-alpha-b'
            },
            component: () => import('@/views/form/BasicForm.vue')
          },
          {
            path: '/forms/stepper',
            name: 'forms.stepper',
            meta: {
              title: 'step_form',
              icon: 'mdi-alpha-s'
            },
            component: () => import('@/views/form/Steppers.vue')
          }
        ]
      },
      //chart
      {
        path: '/chart',
        component: RouteWrapper,
        meta: {
          title: 'chart',
          icon: 'mdi-chart-line',
          group: 'advance'
        },
        redirect: '/chart/echart',
        children: [
          {
            path: '/cart/echart',
            name: 'echart',
            meta: {
              title: 'echart',
              icon: 'mdi-paw'
            },
            component: () => import('@/views/chart/Echart.vue')
          },
          {
            path: '/cart/g2',
            name: 'g2',
            meta: {
              title: 'g2',
              icon: 'mdi-alpha-g'
            },
            component: () => import('@/views/chart/G2.vue')
          }
        ]
      },
      //email
      {
        path: '/mail',
        component: () => import('@/views/mail/Index.vue'),
        meta: {
          title: 'mail',
          icon: 'mdi-email',
          group: 'email'
        },
        redirect: '/mail/inbox',
        children: [
          {
            path: '/mail/:category',
            name: 'inbox',
            props: true,
            meta: {
              title: 'inbox',
              icon: 'mdi-view-list'
            },
            component: () => import('@/views/mail/Inbox.vue')
          }
        ]
      },
      {
        path: '/media',
        meta: {
          title: 'media',
          icon: 'mdi-image'
        },
        name: 'media',
        component: () => import('@/views/Media.vue')
      },

      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'access_denied',
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
    path: '/email',
    name: 'Mail',
    component: () => import('@/components/email/Layout.vue'),
    redirect: {
      path: '/email/all'
    },
    children: [
      {
        path: '/email/:mailType',
        name: 'MailIndex',
        component: () => import('@/components/email/List.vue')
      },
      {
        path: '/email/0/:uuid',
        name: 'MailDetail',
        component: () => import('@/components/email/Reply.vue')
      }
    ]
  }
]
