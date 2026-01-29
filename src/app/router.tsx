import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home/home'
import BlogPage from '../pages/blog/blog'
import BlogDetailPage from '../pages/blog/detail'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:slug' element={<BlogDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
