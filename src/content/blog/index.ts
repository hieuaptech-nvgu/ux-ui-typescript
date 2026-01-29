export interface BlogMeta {
  slug: string
  title: string
  date: string
  description: string
}

export const BLOG_POSTS: BlogMeta[] = [
  {
    slug: 'react-eslint-husky',
    title: 'Cấu hình React + TypeScript với ESLint, Prettier, Husky',
    date: '2026-01-29',
    description: 'Setup chuẩn cho project frontend React'
  }
]
