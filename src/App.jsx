import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog';
import CreateContentPage from './components/CreateContentPage';
import NavBar from './components/NavBar';
import ContentListingPage from './components/ContentListingPage';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Router>
            <Routes>
              
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-posts" element={<ContentListingPage />} />
              <Route path="/create-content" element={<CreateContentPage />} />

            </Routes>
          </Router>
      </main>
    
      
    </>
  );
}

export default App