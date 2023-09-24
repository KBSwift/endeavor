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
                <Route path="/blog-posts/detail/:id" element={<ContentDetailPage />} />
                <Route path="/create-content" element={<CreateContentPage />} />
                <Route path="/art-gallery" element={<ArtGalleryPage />} />
                <Route path="/chat-bot" element={<Chatbot />} />

            </Routes>
          </Router>
      </main>
    </>
  );
}

export default App