export default [

  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },  
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/NotFound.vue`
    )
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Deny.vue`
    )
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Error.vue`
    )
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Login.vue`
    )
  },
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true },
    name: 'Dashboard',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Dashboard.vue`
    )
  },

  {
    path: '/media',
    meta: { },
    name: 'Media',
    props: (route) => ({ type: route.query.type }),
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Media.vue`
    )
  },  
  {
    path: '/chat',
    meta: {
      public: true,
    },
    name: 'Chat',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/components/chat/ChatLayout.vue`
    ),
    redirect: {
      path: '/chat/messaging'
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        meta: {
          public: true,
        },
        name: 'ChatMessaging',
        props: true,
        components: {
          default: () => import(
            /* webpackChunkName: "routes" */
            `@/components/chat/ChatMessaging.vue`
          ),  
        }   
      },
      {
        path: '/chat/contact/:uuid?',
        meta: {
          public: true,
        },
        name: 'ChatContact',
        components: {
          default: () => import(
            /* webpackChunkName: "routes" */
            `@/components/chat/ChatContact.vue`
          ),  

        }     
      }             
    ]
  },    
  {
    path: '/mail',
    meta: {
      public: true,
    },
    name: 'Mail',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/components/email/Layout.vue`
    ),
    redirect: {
      path: '/mail/all'
    },
    children: [
      {
        path: '/mail/:mailType',
        meta: {
          public: true,
        },
        name: 'MailIndex',
        component: () => import(
          /* webpackChunkName: "routes" */
          `@/components/email/List.vue`
        ),        
      },
      {
        path: '/mail/0/:uuid',
        meta: {
          public: true,
        },
        name: 'MailDetail',
        component: () => import(
          /* webpackChunkName: "routes" */
          `@/components/email/Reply.vue`
        ),        
      }      
    ]
  },  
  {
    path: '/components/alert',
    meta: { breadcrumb: true },
    name: 'components/alerts',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Alert.vue`
    )
  },
  {
    path: '/components/avatar',
    meta: { breadcrumb: true },
    name: 'components/avatars',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Avatar.vue`
    )
  },
  {
    path: '/components/badge',
    meta: { breadcrumb: true },
    name: 'components/badges',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Badge.vue`
    )
  },
  {
    path: '/components/button',
    meta: { breadcrumb: true },
    name: 'components/buttons',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Button.vue`
    )
  },
  {
    path: '/components/parallax',
    meta: { breadcrumb: true },
    name: 'components/parallax',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Parallax.vue`
    )
  },
  {
    path: '/components/snackbar',
    meta: { breadcrumb: true },
    name: 'components/snackbar',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Snackbar.vue`
    )
  },
  {
    path: '/components/chip',
    meta: { breadcrumb: true },
    name: 'components/chips',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Chip.vue`
    )
  },
  {
    path: '/components/card',
    meta: { breadcrumb: true },
    name: 'components/cards',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Cards.vue`
    )
  },
  {
    path: '/components/table',
    meta: { breadcrumb: true },
    name: 'components/tables',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Tables.vue`
    )
  },
  {
    path: '/components/carousel',
    meta: { breadcrumb: true },
    name: 'components/carousels',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Carousels.vue`
    )
  },
  {
    path: '/components/dialog',
    meta: { breadcrumb: true },
    name: 'components/dialogs',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Dialogs.vue`
    )
  },
  {
    path: '/components/icon',
    meta: { breadcrumb: true },
    name: 'components/icons',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Icon.vue`
    )
  },
  {
    path: '/components/progress',
    meta: { breadcrumb: true },
    name: 'components/progress',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Progress.vue`
    )
  },
  {
    path: '/components/slider',
    meta: { breadcrumb: true },
    name: 'components/sliders',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Slider.vue`
    )
  },
  {
    path: '/components/tooltip',
    meta: { breadcrumb: true },
    name: 'components/tooltips',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Tooltip.vue`
    )
  },
  {
    path: '/components/pagination',
    meta: { breadcrumb: true },
    name: 'components/paginations',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Pagination.vue`
    )
  },
  {
    path: '/pickers/datepicker',
    meta: { breadcrumb: true },
    name: 'pickers/datepicker',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Datepicker.vue`
    )
  },
  {
    path: '/components/typography',
    meta: { breadcrumb: true },
    name: 'components/typography',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Typography.vue`
    )
  },
  {
    path: '/components/color',
    meta: { breadcrumb: true },
    name: 'components/color',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Colors.vue`
    )
  },
  {
    path: '/pickers/timepicker',
    meta: { breadcrumb: true },
    name: 'pickers/timepicker',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Timepicker.vue`
    )
  },
  {
    path: '/layout/bottomsheets',
    meta: { breadcrumb: true },
    name: 'components/bottom-sheets',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/BottomSheets.vue`
    )
  },
  {
    path: '/layout/expansion-panel',
    meta: { breadcrumb: true },
    name: 'components/expansion-panels',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/ExpansionPanels.vue`
    )
  },
  {
    path: '/layout/footer',
    meta: { breadcrumb: true },
    name: 'components/footer',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/Footers.vue`
    )
  },
  {
    path: '/layout/timeline',
    meta: { breadcrumb: true },
    name: 'components/timeline',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/Timeline.vue`
    )
  },
  {
    path: '/layout/list',
    meta: { breadcrumb: true },
    name: 'components/lists',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/Lists.vue`
    )
  },
  {
    path: '/layout/toolbar',
    meta: { breadcrumb: true },
    name: 'components/toolbar',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/Toolbar.vue`
    )
  },
  {
    path: '/layout/jumbotron',
    meta: { breadcrumb: true },
    name: 'components/jumbotrons',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/Jumbotrons.vue`
    )
  },
  {
    path: '/layout/menu',
    meta: { breadcrumb: true },
    name: 'components/menus',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/Menus.vue`
    )
  },
  {
    path: '/layout/navigation-drawer',
    meta: { breadcrumb: true },
    name: 'components/navigation-drawers',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/NavigationDrawers.vue`
    )
  },
  {
    path: '/layout/tabs',
    meta: { breadcrumb: true },
    name: 'components/tabs',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/layout/Tabs.vue`
    )
  },
  {
    path: '/forms/basic',
    meta: { breadcrumb: true },
    name: 'components/basic-forms',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/BasicForms.vue`
    )
  },
  {
    path: '/forms/selects',
    meta: { breadcrumb: true },
    name: 'components/selects',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/Selects.vue`
    )
  },
  {
    path: '/forms/editor',
    meta: { breadcrumb: true },
    name: 'components/editors',
    component: () => import(
      `@/views/form/Editors.vue`
    )
  },
  {
    path: '/forms/selection-controls',
    meta: { breadcrumb: true },
    name: 'components/selection-controls',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/SelectionControls.vue`
    )
  },
  {
    path: '/forms/text-fields',
    meta: { breadcrumb: true },
    name: 'components/text-fields',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/TextFields.vue`
    )
  },
  {
    path: '/forms/steppers',
    meta: { breadcrumb: true },
    name: 'components/steppers',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/Steppers.vue`
    )
  },
  {
    path: '/widgets/social',
    meta: { breadcrumb: true },
    name: 'components/social',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/widgets/Social.vue`
    )
  },
  {
    path: '/widgets/post',
    meta: { breadcrumb: true },
    name: 'components/widget-post',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/widgets/Post.vue`
    )
  },
  {
    path: '/widgets/statistic',
    meta: { breadcrumb: true },
    name: 'components/statistic',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/widgets/Statistic.vue`
    )
  },
  {
    path: '/widgets/chart',
    meta: { breadcrumb: true },
    name: 'components/chart',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/widgets/Chart.vue`
    )
  },
  {
    path: '/widgets/list',
    meta: { breadcrumb: true },
    name: 'components/widget-list',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/widgets/List.vue`
    )
  },
];
