// mocks/navigation.ts
export const navigation = [
  {
    key: 'about',
    label: 'About',
    path: '/about',
    end: true,
    sidebar: [
      { label: 'Giới thiệu', path: '/about' },
      { label: 'Hành trình coder', path: '/about/journey' }
    ]
  },
  {
    key: 'coding',
    label: 'Coding',
    path: '/coding',
    sidebar: [
      { label: 'JavaScript', path: '/coding/javascript' },
      { label: 'React', path: '/coding/react' },
      { label: 'TypeScript', path: '/coding/typescript' },
      { label: 'Tooling', path: '/coding/tooling' }
    ]
  },
  {
    key: 'travel',
    label: 'Travel',
    path: '/travel',
    sidebar: [
      { label: 'Việt Nam', path: '/travel/vietnam' },
      { label: 'Asia', path: '/travel/asia' }
    ]
  },
  {
    key: 'random',
    label: 'Random',
    path: '/random',
    sidebar: [
      { label: 'Tạp nham', path: '/random' },
      { label: 'Suy nghĩ vớ vẩn', path: '/random/thoughts' }
    ]
  }
]
