import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { fetchPost } from 'lib/getPosts'
import { parsePost } from 'lib/parsePost'
import type { BlogMeta } from '../../types/blogs'

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string>('')
  const [meta, setMeta] = useState<BlogMeta | null>(null)

  useEffect(() => {
    if (!slug) return

    fetchPost(slug).then((raw) => {
      const parsed = parsePost(raw)
      setMeta(parsed.meta)
      setContent(parsed.content)
    })
  }, [slug])

  if (!meta) return <div>Loading...</div>

  return (
    <article>
      <h1>{meta.title}</h1>
      <p>{meta.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
