


import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog';
import CreateContentPage from './components/CreateContentPage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create-content" element={<CreateContentPage />} />

      </Routes>
    </Router>
  );
}

export default App