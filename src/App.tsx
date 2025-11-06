import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../pages/Home'
import Erion from '../pages/Erion'
import Tutorial from '../pages/Tutorial'
import Internship from '../pages/Internship'
import Aiwhat from '../pages/Aiwhat'
import Hack from '../pages/Hack';
import ForParents from '../pages/ForParents';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-container">
      {isHomePage && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<div>About Page</div>} />
          <Route path="/Erion" element={<Erion />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Internship" element={<Internship />} />
          <Route path="/Aiwhat" element={<Aiwhat />} />
          <Route path="/Hack" element={<Hack />} />
          <Route path="/ForParents" element={<ForParents />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
