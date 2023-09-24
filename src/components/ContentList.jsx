import React from 'react';

import Card from './Card';

const ContentList = ({title, posts}) => {
  const cards = posts.map(post => {
    return <Card post={post} key={post.id} />;
  });

  return (
    <section>
      <h2>{title}</h2>
      { cards }
    </section>
  );
}

export default ContentList;
