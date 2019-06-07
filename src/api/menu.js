const Menu = [
  { header: "Apps" },
  {
    title: "Dashboard",
    group: "apps",
    icon: "dashboard",
    name: "Dashboard"
  },
  {
    title: "Chat",
    group: "apps",
    icon: "chat_bubble",
    target: "_blank",
    name: "Chat"
  },
  {
    title: "Inbox",
    group: "apps",
    name: "Mail",
    target: "_blank",
    icon: "email"
  },
  // {
  //   title: 'Media',
  //   group: 'apps',
  //   name: 'Media',
  //   icon: 'perm_media',
  // },
  {
    title: "Widgets",
    group: "widgets",
    component: "widgets",
    icon: "widgets",
    items: [
      { name: "social", title: "Social", component: "SocialWidget" },
      {
        name: "statistic",
        title: "Statistic",
        badge: "new",
        component: "StatisticWidget"
      },
      { name: "chart", title: "Chart", component: "ChartWidget" },
      { name: "list", title: "List", component: "ListWidget" }
    ]
  },
  { header: "CMS" },
  {
    title: "List & Query",
    group: "layout",
    icon: "view_compact",
    items: [{ name: "Table", title: "Basic Table", component: "ListTable" }]
  }
  // {
  //   title: 'Forms & Controls',
  //   group: 'forms',
  //   component: 'forms',
  //   icon: 'edit',
  //   items: [
  //     { name: 'basic', title: 'General', component: 'components/basic-forms' },
  //   ]
  // },
  // { divider: true },
  // { header: 'Extras' },
  // {
  //   title: 'Pages',
  //   group: 'extra',
  //   icon: 'list',
  //   items: [
  //     { name: 'Login', title: 'Login', component: 'Login' },
  //     { name: '404', title: '404', component: 'NotFound' },
  //     { name: '403', title: '403', component: 'AccessDenied' },
  //     { name: '500', title: '500', component: 'ServerError' },
  //   ]
  // },
]
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase()
      let textB = y.title.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
  }
})

export default Menu
