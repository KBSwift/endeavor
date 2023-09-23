import React from 'react';

import Card from './Card';

import artificialIntelligence from '../assets/artificial-intelligence-4389372_640.jpg';
import augmentedReality from '../assets/augmented-reality-7488321_640.jpg';
import digitalArt from '../assets/girl-7451711_640.jpg';

const BlogList = ({title}) => {
  const featuredPosts = [
    {
      id: 0,
      title: 'The Impact of Artificial Intelligence on Healthcare',
      image: artificialIntelligence,
      altText: 'Artificial Intelligence',
    },
    {
      id: 1,
      title: 'Augmented Reality in Education: Transforming Learning Experiences',
      image: augmentedReality,
      altText: 'Augmented Reality',
    },
    {
      id: 2,
      title: 'Art and Technology: The Intersection of Creativity and Innovation',
      image: digitalArt,
      altText: 'Girl drawing digital art',
    }
  ];

  const cards = featuredPosts.map(post => {
    return <Card title={post.title} image={post.image} altText={post.altText} key={post.id} />;
  });

  return (
    <section>
      <h2>{title}</h2>
      { cards }
    </section>
  );
}

export default BlogList;
