import { AuthLayout, DefaultLayout, ChatLayout } from "@/components/layouts"

export const publicRoute = [
  {
    path: "/auth",
    component: AuthLayout,
    redirect: "/auth/login",
    hidden: true,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "@/views/auth/Login.vue")
      }
    ]
  },

  {
    path: "/404",
    component: () => import(/* webpackChunkName: "errors-404" */ "@/views/error/NotFound.vue")
  },

  {
    path: "/500",
    component: () => import(/* webpackChunkName: "errors-500" */ "@/views/error/Error.vue")
  }
]

export const protectedRoute = [
  {
    path: "/",
    component: DefaultLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
      },

      {
        path: "/403",
        name: "Forbidden",
        component: () => import(/* webpackChunkName: "error-403" */ "@/views/error/Deny.vue")
      }
    ]
  },

  //list
  {
    path: "/cms",
    component: DefaultLayout,
    redirect: "/cms/table",
    meta: { title: "cms" },
    children: [
      {
        path: "/cms/table",
        name: "ListTable",
        meta: { title: "CMS Table" },
        component: () => import(/* webpackChunkName: "table" */ "@/views/list/Table.vue")
      }
    ]
  },

  //widgets
  {
    path: "/widgets",
    component: DefaultLayout,
    meta: { title: "Widget" },
    redirect: "/widgets/chart",
    children: [
      {
        path: "/widgets/chart",
        name: "ChartWidget",
        meta: { title: "Chart Widget" },
        component: () => import(/* webpackChunkName: "chart-widget" */ "@/views/widgets/Chart.vue")
      },
      {
        path: "/widgets/list",
        name: "ListWidget",
        meta: { title: "List Widget" },
        component: () => import(/* webpackChunkName: "list-widget" */ "@/views/widgets/List.vue")
      },
      {
        path: "/widgets/social",
        name: "SocialWidget",
        meta: { title: "Social Widget" },
        component: () => import(/* webpackChunkName: "social-widget" */ "@/views/widgets/Social.vue")
      },
      {
        path: "/widgets/statistic",
        name: "StatisticWidget",
        meta: { title: "Statistic Widget" },
        component: () => import(/* webpackChunkName: "statistic-widget" */ "@/views/widgets/Statistic.vue")
      }
    ]
  },

  //media
  {
    path: "/media",
    meta: { title: "Media" },
    name: "Media",
    props: route => ({ type: route.query.type }),
    component: () => import(/* webpackChunkName: "routes" */ `@/views/Media.vue`)
  },

  // chat app
  {
    path: "/chat",
    name: "Chat",
    component: ChatLayout,
    redirect: {
      path: "/chat/messaging"
    },
    children: [
      {
        path: "/chat/messaging/:uuid?",
        name: "ChatMessaging",
        props: true,
        components: {
          default: () =>
            import(/* webpackChunkName: "routes" */
            `@/components/chat/ChatMessaging.vue`)
        }
      },
      {
        path: "/chat/contact/:uuid?",
        meta: {
          public: true
        },
        name: "ChatContact",
        components: {
          default: () =>
            import(/* webpackChunkName: "routes" */
            `@/components/chat/ChatContact.vue`)
        }
      }
    ]
  },

  //mail app
  {
    path: "/mail",
    meta: {
      public: true
    },
    name: "Mail",
    component: () => import(/* webpackChunkName: "routes" */ `@/components/email/Layout.vue`),
    redirect: {
      path: "/mail/all"
    },
    children: [
      {
        path: "/mail/:mailType",
        meta: {
          public: true
        },
        name: "MailIndex",
        component: () => import(/* webpackChunkName: "routes" */ `@/components/email/List.vue`)
      },
      {
        path: "/mail/0/:uuid",
        meta: {
          public: true
        },
        name: "MailDetail",
        component: () => import(/* webpackChunkName: "routes" */ `@/components/email/Reply.vue`)
      }
    ]
  }
]
