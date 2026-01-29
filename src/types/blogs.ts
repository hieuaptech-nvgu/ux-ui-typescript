export interface BlogMeta {
  title: string
  date: string
  description?: string
  tags?: string[]
}

export interface ParsedPost {
  meta: BlogMeta
  content: string
}
