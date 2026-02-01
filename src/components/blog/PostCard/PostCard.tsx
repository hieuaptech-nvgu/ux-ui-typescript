import { BlogPost } from '../../../types/blogs'
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className={styles.post_card}>
      <h3 className={styles.post_title}>{post.title}</h3>
      <p className={styles.post_publishAt}>{post.publishedAt}</p>

      <p className={styles.post_description}>{post.description}</p>

      <Link to='/' className={styles.post_readMore}>
        Đọc thêm <ChevronRight size={18} />
      </Link>
    </article>
  )
}
