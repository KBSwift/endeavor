import { React, useContext } from 'react';

// import '../App.css';

import { PostsContext } from '../contexts/Contexts';

import ContentList from './ContentList';

const LandingPage = () => {
  const posts = useContext(PostsContext);

  return (
    <>
        <ContentList title="Featured Posts" posts={posts}/>
    </>
  );
}

export default LandingPage;