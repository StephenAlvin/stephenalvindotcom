import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'));
const BlogsPage = lazy(() => import('@/pages/BlogsPage'));
const BlogDetailPage = lazy(() => import('@/pages/BlogDetailPage'));
// const HikingPage = lazy(() => import('@/pages/HikingPage'));

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogDetailPage />} />
              {/* <Route path="/hiking" element={<HikingPage />} /> */}
            </Routes>
          </Suspense>
        </Layout>
      </AnimatePresence>
    </Router>
  );
}

export default App;