import { React, useContext } from 'react';

import { PostsContext } from '../contexts/Contexts';

import ContentList from './ContentList';

const ContentListingPage = () => {
  const posts = useContext(PostsContext);

  return (
    <>
      <ContentList title="Posts" posts={posts} />
    </>
  );
}

export default ContentListingPage;
