import { BlogPost } from '../types/blogs'

export const posts: BlogPost[] = [
  {
    id: 'markdown-blog',
    slug: '/blog/markdown-blog',
    title: 'Tạo dự án React Typescript với React Router & ESLint Prettier',
    description:
      'Cách mình xây dựng blog cá nhân cho dev. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit aut, facere illum aperiam dolores inventore.',
    coverImage: '/images/blog/markdown.jpg',
    publishedAt: '2026-01-25',
    author: {
      name: 'Hiếu Trần',
      avatar: '/images/avatar.jpg'
    },
    tags: ['blog', 'markdown']
  },
  {
    id: 'react-folder-structure',
    slug: '/blog/react-folder-structure',
    title: 'Tổ chức cấu trúc thư mục React sao cho dễ scale',
    description:
      'Chia sẻ cách mình tổ chức folder React theo hướng feature-based, dễ maintain, dễ mở rộng cho project vừa và lớn.',
    coverImage: '/images/blog/folder-structure.jpg',
    publishedAt: '2026-01-27',
    author: {
      name: 'Hiếu Trần',
      avatar: '/images/avatar.jpg'
    },
    tags: ['react', 'architecture']
  },
  {
    id: 'theme-with-css-variables',
    slug: '/blog/theme-with-css-variables',
    title: 'Quản lý theme Dark / Light bằng CSS Variables trong React',
    description:
      'Cách sử dụng CSS Variables kết hợp Context để quản lý theme một cách gọn gàng, không phụ thuộc thư viện ngoài.',
    coverImage: '/images/blog/theme-css.jpg',
    publishedAt: '2026-01-29',
    author: {
      name: 'Hiếu Trần',
      avatar: '/images/avatar.jpg'
    },
    tags: ['css', 'theme', 'react']
  }
]
