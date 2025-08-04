import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './styles/global.css';

// Lazy load pages for better initial bundle size
const Home = React.lazy(() => import('./pages/Home'));

// Loading fallback for route-level code splitting
const PageLoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '50vh',
    color: 'var(--color-text)',
    fontSize: 'var(--font-size-lg)'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
