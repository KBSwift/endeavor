import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';

import { PostsContext } from '../contexts/Contexts';

const ContentDetailPage = () => {
  // Get the id parameter from the URL
  const { id } = useParams();

  // Access the context data
  const posts = useContext(PostsContext);

  // Find the content item by id
  const content = posts.find((item) => item.id === Number(id)); 

  return (
    <article>
      <h2>{content.title}</h2>
      <img src={content.image} alt={content.altText} />
    </article>
  );
}

export default ContentDetailPage;
