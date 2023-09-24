import { React, useContext } from 'react';

// import '../App.css';

import { PostsContext } from '../contexts/Contexts';

import ContentList from './ContentList';
import Hero from './Hero';

const LandingPage = () => {
  const posts = useContext(PostsContext);
  const heroProps = {
    title: 'Endeavor To Create',
    containsCta: true,
    onHomePage: true,
    ctaText: 'Create Content',
    ctaType: 'button'
  }

  return (
    <>
        <Hero content={heroProps} />
        <ContentList title="Featured Posts" posts={posts}/>
    </>
  );
}

export default LandingPage;