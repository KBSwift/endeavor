import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog';
import CreateContentPage from './components/CreateContentPage';
import NavBar from './components/NavBar';
import ContentListingPage from './components/ContentListingPage';
import ContentDetailPage from './components/ContentDetailPage';
import ArtGalleryPage from './components/ArtGalleryPage';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div id="app">
        <main className='main-content'>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-posts" element={<ContentListingPage />} />
              <Route path="/blog-posts/detail/:id" element={<ContentDetailPage />} />
              <Route path="/create-content" element={<CreateContentPage />} />
              <Route path="/art-gallery" element={<ArtGalleryPage />} />
              <Route path="/ai-me" element={<Chatbot />} />

            </Routes>
          </Router>
        </main>
        <Footer />
      </div> </>
  );
}

export default App