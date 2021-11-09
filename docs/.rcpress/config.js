let nav = [
  { text: 'HomePage', link: "/", important: true },
  { text: 'Design', link: "/design/" },
  { text: 'Document', link: "/document/" },
  { text: 'Component', link: '/component/all/' },
  {
    text: 'More',
    items: [
      { text: 'react', link: '/more/react/' },
      { text: 'react Hook', link: '/more/react-hook/hook-all/' },
      { text: 'redux', link: '/more/redux/' },
      { text: 'Ant Design', link: '/more/ant-design/all/' },
    ]
  },
  { text: 'GitHub', link: 'https://github.com/eternallycyf/pluviophobe-react' }
]

let nav_zh = [
  { text: '主页', link: "/zh/" },
  { text: '设计', link: "/zh/design/" },
  { text: '文档', link: "/zh/document/" },
  { text: '组件', link: '/zh/component/all/' },
  {
    text: '更多',
    items: [
      { text: 'react', link: '/zh/more/react/' },
      { text: 'react Hook', link: '/zh/more/react-hook/hook-all/' },
      { text: 'redux', link: '/zh/more/redux/' },
      { text: 'Ant Design', link: '/more/ant-design/all/' },
    ]
  },
  { text: 'GitHub', link: 'https://github.com/eternallycyf/pluviophobe-react' }
]

let sidebar = {
  '/design/': [
    {
      title: 'design',
    }
  ],
  '/document/': [
    {
      title: 'document',
    }
  ],
  '/component/': [
    {
      title: "component",
      collapsable: false,
      path: "/component/all/",
      sidebarDepth: 2,
      children: [
        ['/component/all/', 'Components Overview'],
        {
          title: "General",
          collapsable: false,
          children: [
            ['/component/general/button/', 'Button'],
            ['/component/general/icon/', 'Icon'],
            ['/component/general/typography/', 'Typography'],
          ]
        },
        {
          title: "Layout",
          collapsable: false,
          children: [
            ['/component/layout/divider/', 'Divider'],
            ['/component/layout/grid/', 'Grid'],
            ['/component/layout/layout/', 'Layout'],
            ['/component/layout/space/', 'Space'],
          ]
        },
        {
          title: "Navigation",
          collapsable: false,
          children: [
            ['/component/navigation/affix/', 'Affix'],
            ['/component/navigation/breadcrumb/', 'Breadcrumb'],
            ['/component/navigation/dropdown/', 'Dropdown'],
            ['/component/navigation/menu/', 'Menu'],
            ['/component/navigation/paga-header/', 'PagaHeader'],
            ['/component/navigation/Pagination/', 'Pagination'],
            ['/component/navigation/steps/', 'Steps'],
          ]
        },
        {
          title: "Data Entry",
          collapsable: false,
          children: [
            ['/component/dataEntry/auto-complete/', 'AutoComplete'],
            ['/component/dataEntry/cascader/', 'Cascader'],
            ['/component/dataEntry/checkbox/', 'Checkbox'],
            ['/component/dataEntry/date-picker/', 'DatePicker'],
            ['/component/dataEntry/form/', 'Form'],
            ['/component/dataEntry/input/', 'Input'],
            ['/component/dataEntry/input-number/', 'InputNumber'],
            ['/component/dataEntry/mentions/', 'Mentions'],
            ['/component/dataEntry/radio/', 'Radio'],
            ['/component/dataEntry/rate/', 'Rate'],
            ['/component/dataEntry/select/', 'Select'],
            ['/component/dataEntry/slider/', 'Slider'],
            ['/component/dataEntry/switch/', 'Switch'],
            ['/component/dataEntry/time-picker/', 'TimePicker'],
            ['/component/dataEntry/transfer/', 'Rransfer'],
            ['/component/dataEntry/tree-select/', 'TreeSelect'],
            ['/component/dataEntry/upload/', 'Upload'],
          ]
        },
        {
          title: "Data Display",
          collapsable: false,
          children: [
            ['/component/dataDisplay/avatar/', 'Avatar'],
            ['/component/dataDisplay/badge/', 'Badge'],
            ['/component/dataDisplay/calendar/', 'Calendar'],
            ['/component/dataDisplay/card/', 'Card'],
            ['/component/dataDisplay/carousel/', 'Carousel'],
            ['/component/dataDisplay/clooapse/', 'Clooapse'],
            ['/component/dataDisplay/comment/', 'Comment'],
            ['/component/dataDisplay/descriptions/', 'Descriptions'],
            ['/component/dataDisplay/empty/', 'Empty'],
            ['/component/dataDisplay/image/', 'Image'],
            ['/component/dataDisplay/list/', 'List'],
            ['/component/dataDisplay/popover/', 'Popover'],
            ['/component/dataDisplay/statistic/', 'Statistic'],
            ['/component/dataDisplay/table/', 'Table'],
            ['/component/dataDisplay/tabs/', 'Tabs'],
            ['/component/dataDisplay/tag/', 'Tag'],
            ['/component/dataDisplay/timeline/', 'Timeline'],
            ['/component/dataDisplay/tooltip/', 'Tooltip'],
            ['/component/dataDisplay/tree/', 'Tree'],
          ]
        },
        {
          title: "Feedback",
          collapsable: false,
          children: [
            ['/component/feedback/alert/', 'Alert'],
            ['/component/feedback/drawer/', 'Drawer'],
            ['/component/feedback/message/', 'Message'],
            ['/component/feedback/modal/', 'Modal'],
            ['/component/feedback/notification/', 'Notification'],
            ['/component/feedback/popconfirm/', 'Popconfirm'],
            ['/component/feedback/progress/', 'Progress'],
            ['/component/feedback/result/', 'Result'],
            ['/component/feedback/skeleton/', 'Skeleton'],
            ['/component/feedback/spin/', 'Spin'],
          ]
        },
        {
          title: "Other",
          collapsable: false,
          children: [
            ['/component/other/anchor/', 'Anchor'],
            ['/component/other/back-top/', 'BackTop'],
            ['/component/other/config-provider/', 'ConfigProvider'],
          ]
        },
      ]
    }
  ],
  '/more/react/': [
    {
      title: 'React',
    }
  ],
  '/more/react-hook/': [
    {
      title: 'ReactHook',
      collapsable: false,
      path: "/more/react-hook/hook-all/",
      children: [
        ['/more/react-hook/hook-all/', 'ReactHookAll'],
        {
          title: "ReactHook",
          collapsable: false,
          children: [
            ['/more/react-hook/use-debouce/', 'useDebouce'],
            ['/more/react-hook/use-throttle/', 'useThrottle'],
            ['/more/react-hook/use-scroll-position/', 'useScrollPosition'],
            ['/more/react-hook/use-win-size/', 'useWinSize'],
            ['/more/react-hook/use-is-visible/', 'useIsVisible'],
            ['/more/react-hook/use-virtual-list/', 'useVirtualList'],
          ]
        },
      ]
    }
  ],
  '/more/redux/': [
    {
      title: 'redux',
    },
  ],
  '/more/ant-design/': [
    {
      title: 'Antdesign',
      collapsable: false,
      path: "/more/ant-design/all/",
      children: [
        ['/more/ant-design/all/', 'AntDesign All'],
        {
          title: "Bug",
          collapsable: false,
          children: [
            ['/more/ant-design/bug/', 'Bug'],
          ]
        },
        {
          title: "Component Use skill",
          collapsable: false,
          children: [
            ['/more/ant-design/component-use-skill/', 'Component Use skill'],
          ]
        },
      ]
    },
  ],
}

let sidebar_zh = {
  '/zh/design/': [
    {
      title: '设计',
    }
  ],
  '/zh/document/': [
    {
      title: '文档',
    }
  ],
  '/zh/component/': [
    {
      path: "/zh/component/all/",
      title: "component",
      collapsable: false,
      children: [
        ['/zh/component/all/', '组件总览'],
        {
          title: "通用",
          collapsable: false,
          children: [
            ['/zh/component/general/button/', 'Button 按钮'],
            ['/zh/component/general/icon/', 'Icon 图标'],
            ['/zh/component/general/typography/', 'Typography 排版'],
          ]
        },
        {
          title: "布局",
          collapsable: false,
          children: [
            ['/zh/component/layout/divider/', 'Divider 分割线'],
            ['/zh/component/layout/grid/', 'Grid 栅格'],
            ['/zh/component/layout/layout/', 'Layout 布局'],
            ['/zh/component/layout/space/', 'Space 间距'],
          ]
        },
        {
          title: "导航",
          collapsable: false,
          children: [
            ['/zh/component/navigation/affix/', 'Affix 固钉'],
            ['/zh/component/navigation/breadcrumb/', 'Breadcrumb 面包屑'],
            ['/zh/component/navigation/dropdown/', 'Dropdown 下拉菜单'],
            ['/zh/component/navigation/menu/', 'Menu 导航菜单'],
            ['/zh/component/navigation/paga-header/', 'PagaHeader 页头'],
            ['/zh/component/navigation/Pagination/', 'Pagination 分页'],
            ['/zh/component/navigation/steps/', 'Steps 步骤条'],
          ]
        },
        {
          title: "数据录入",
          collapsable: false,
          children: [
            ['/zh/component/dataEntry/auto-complete/', 'AutoComplete 自动完成'],
            ['/zh/component/dataEntry/cascader/', 'Cascader  级联选择'],
            ['/zh/component/dataEntry/checkbox/', 'Checkbox 多选框'],
            ['/zh/component/dataEntry/date-picker/', 'DatePicker 日期选择器'],
            ['/zh/component/dataEntry/form/', 'Form 表单'],
            ['/zh/component/dataEntry/input/', 'Input 输入框'],
            ['/zh/component/dataEntry/input-number/', 'InputNumber 数字输入框'],
            ['/zh/component/dataEntry/mentions/', 'Mentions 提及'],
            ['/zh/component/dataEntry/radio/', 'Radio 单选框'],
            ['/zh/component/dataEntry/rate/', 'Rate 评分'],
            ['/zh/component/dataEntry/select/', 'Select 选择器'],
            ['/zh/component/dataEntry/slider/', 'Slider 滑动输入条'],
            ['/zh/component/dataEntry/switch/', 'Switch 开关'],
            ['/zh/component/dataEntry/time-picker/', 'TimePicker 时间选择器'],
            ['/zh/component/dataEntry/transfer/', 'Rransfer 穿梭框'],
            ['/zh/component/dataEntry/tree-select/', 'TreeSelect 树选择'],
            ['/zh/component/dataEntry/upload/', 'Upload 上传'],
          ]
        },
        {
          title: "数据展示",
          collapsable: false,
          children: [
            ['/zh/component/dataDisplay/avatar/', 'Avatar 头像'],
            ['/zh/component/dataDisplay/badge/', 'Badge 徽标数'],
            ['/zh/component/dataDisplay/calendar/', 'Calendar 日历'],
            ['/zh/component/dataDisplay/card/', 'Card 卡片'],
            ['/zh/component/dataDisplay/carousel/', 'Carousel 走马灯'],
            ['/zh/component/dataDisplay/clooapse/', 'Clooapse 折叠面板'],
            ['/zh/component/dataDisplay/comment/', 'Comment 评论'],
            ['/zh/component/dataDisplay/descriptions/', 'Descriptions 描述列表'],
            ['/zh/component/dataDisplay/empty/', 'Empty 空状态'],
            ['/zh/component/dataDisplay/image/', 'Image 图片'],
            ['/zh/component/dataDisplay/list/', 'List 列表'],
            ['/zh/component/dataDisplay/popover/', 'Popover 气泡卡片'],
            ['/zh/component/dataDisplay/statistic/', 'Statistic 统计数值'],
            ['/zh/component/dataDisplay/table/', 'Table 表格'],
            ['/zh/component/dataDisplay/tabs/', 'Tabs 标签页'],
            ['/zh/component/dataDisplay/tag/', 'Tag 标签'],
            ['/zh/component/dataDisplay/timeline/', 'Timeline 时间轴'],
            ['/zh/component/dataDisplay/tooltip/', 'Tooltip 文字提示'],
            ['/zh/component/dataDisplay/tree/', 'Tree 树形控件'],
          ]
        },
        {
          title: "反馈",
          collapsable: false,
          children: [
            ['/zh/component/feedback/alert/', 'Alert 警告提示'],
            ['/zh/component/feedback/drawer/', 'Drawer 抽屉'],
            ['/zh/component/feedback/message/', 'Message 全局提示'],
            ['/zh/component/feedback/modal/', 'Modal 对话框'],
            ['/zh/component/feedback/notification/', 'Notification 通知提醒框'],
            ['/zh/component/feedback/popconfirm/', 'Popconfirm 气泡确认框'],
            ['/zh/component/feedback/progress/', 'Progress 进度条'],
            ['/zh/component/feedback/result/', 'Result 结果'],
            ['/zh/component/feedback/skeleton/', 'Skeleton 骨架屏'],
            ['/zh/component/feedback/spin/', 'Spin 加载中'],
          ]
        },
        {
          title: "其他",
          collapsable: false,
          children: [
            ['/zh/component/other/anchor/', 'Anchor 锚点'],
            ['/zh/component/other/back-top/', 'BackTop 回到顶部'],
            ['/zh/component/other/config-provider/', 'ConfigProvider 全局化配置'],
          ]
        },
      ]
    }
  ],
  '/zh/more/react/': [
    {
      title: 'react',
    },
  ],
  '/zh/more/react-hook/': [
    {
      title: 'ReactHookAll',
      collapsable: false,
      path: "/zh/more/react-hook/hook-all/",
      children: [
        ['/zh/more/react-hook/hook-all/', 'ReactHookAll'],
        {
          title: "ReactHook",
          collapsable: false,
          children: [
            ['/zh/more/react-hook/use-debouce/', 'useDebouce 防抖'],
            ['/zh/more/react-hook/use-throttle/', 'useThrottle 节流'],
            ['/zh/more/react-hook/use-scroll-position/', 'useScrollPosition 屏幕滚动距离'],
            ['/zh/more/react-hook/use-win-size/', 'useWinSize 屏幕尺寸'],
            ['/zh/more/react-hook/use-is-visible/', 'useIsVisible 组件是否在可视区'],
            ['/zh/more/react-hook/use-virtual-list/', 'useVirtualList 虚拟列表渲染'],
          ]
        },
      ]
    }
  ],
  '/zh/more/redux/': [
    {
      title: 'redux',
    },
  ],
  '/zh/more/ant-design/': [
    {
      title: 'Antdesign',
      collapsable: false,
      path: "/zh/more/ant-design/all/",
      children: [
        ['/zh/more/ant-design/all/', 'AntDesign All'],
        {
          title: "Bug",
          collapsable: false,
          children: [
            ['/zh/more/ant-design/bug/', 'Bug'],
          ]
        },
        {
          title: "Component Use skill",
          collapsable: false,
          children: [
            ['/zh/more/ant-design/component-use-skill/', 'Component Use skill'],
          ]
        },
      ]
    },
  ],
}

let GitHubConfig = {
  repo: 'eternallycyf/pluviophobe-react',
  docsRepo: 'eternallycyf/pluviophobe-react-document',
  docsRelativeDir: 'packages/docs',
  docsDir: 'docs',
  docsBranch: 'main',
  editLinks: true,
  editLinkText: '帮助我们改善此页面！',
  showAvatarList: true
}

module.exports = {
  title: 'PluvioPhobe',
  base: "/pluviophobe-react-document/",
  description: "react组件库",
  logo: "/favicon.ico",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/css/index.css' }]
  ],
  plugins: [],
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false }
  },
  lastUpdated: true,
  locales: {
    '/': { lang: '英语', },
    '/zh/': { lang: '中文' }
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    logo: '/assets/favicon.ico',
    showBackToTop: true,
    ...GitHubConfig,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav,
        sidebar,
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: nav_zh,
        sidebar: sidebar_zh
      }
    },
  }
}
