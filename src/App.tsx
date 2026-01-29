import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/home/home'
import BlogPage from './pages/blog/blog'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<BlogPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
