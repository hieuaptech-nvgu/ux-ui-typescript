export interface BlogAuthor {
  name: string
  avatar: string
  url?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  coverImage: string
  publishedAt: string
  author: BlogAuthor
  tags: string[]
}
