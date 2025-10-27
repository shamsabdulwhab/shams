import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
