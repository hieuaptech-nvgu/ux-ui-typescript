export async function fetchPost(slug: string) {
  const res = await fetch(`/blog/${slug}.md`)

  if (!res.ok) {
    throw new Error('Post not found')
  }

  return res.text()
}
