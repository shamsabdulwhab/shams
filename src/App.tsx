import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../pages/Home'
import Erion from '../pages/Erion'
import Tutorial from '../pages/Tutorial'
import Internship from '../pages/Internship'
import Aiwhat from '../pages/Aiwhat'
import Hack from '../pages/Hack';
import ForParents from '../pages/ForParents';
import About from '../pages/About';
import GroupRetrospective from '../pages/GroupRetrospective';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Handle GitHub Pages 404 redirect
  useEffect(() => {
    const path = location.pathname;
    if (path && window.location.search.includes('?/')) {
      const newPath = window.location.search
        .slice(2)
        .split('&')[0]
        .split('~and~')
        .join('&');
      navigate(newPath || '/', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="app-container">
      {isHomePage && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/Erion" element={<Erion />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Internship" element={<Internship />} />
          <Route path="/Aiwhat" element={<Aiwhat />} />
          <Route path="/Hack" element={<Hack />} />
          <Route path="/ForParents" element={<ForParents />} />
          <Route path="/GroupRetrospective" element={<GroupRetrospective />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/shams">
      <AppContent />
    </Router>
  )
}

export default App
