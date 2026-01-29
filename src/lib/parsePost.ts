import { ParsedPost } from '../types/blogs'

export function parsePost(raw: string): ParsedPost {
  const [frontMatter, ...body] = raw.split('---').slice(1)
  const meta = Object.fromEntries(
    frontMatter
      .trim()
      .split('\n')
      .map((line) => line.split(':').map((s) => s.trim()))
  )

  return {
    meta: meta as ParsedPost['meta'],
    content: body.join('---').trim()
  }
}
