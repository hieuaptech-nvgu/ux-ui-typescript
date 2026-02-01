import { posts } from 'data/posts'
import PostCard from '../PostCard/PostCard'
import styles from './LatestPosts.module.css'

export default function LatestPosts() {
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
  return (
    <section>
      <h2>Bài viết mới nhất</h2>

      <div className={styles.box_postLatest}>
        {latestPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
