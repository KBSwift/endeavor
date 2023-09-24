import React, { useContext } from 'react';
import { PostsContext } from '../contexts/Contexts';
import ContentList from './ContentList';

const ContentListingPage = () => {
  const posts = useContext(PostsContext);

  return (
    <div className="content-grid">
      {posts.map((post, index) => (
        <div key={index} className="content-item">
          <ContentList posts={[post]} />
        </div>
      ))}
    </div>
  );
}

export default ContentListingPage;
