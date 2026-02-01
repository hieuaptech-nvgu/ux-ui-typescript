import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/home/home'
import BlogPage from './pages/blog/blog'
import Programming from 'pages/programming/Programming'
import BlogDetailPage from 'pages/blog/detail'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<BlogPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:slug' element={<BlogDetailPage />} />
          <Route path='/lap-trinh' element={<Programming />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
