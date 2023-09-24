import React from 'react';

import Button from './Button';

const Hero = ({ content }) => {
  let websiteTitle = '';
  let remainingTitle = '';

  if (content.onHomePage) {
    websiteTitle = content.title.split(' ')[0];
    remainingTitle = content.title.split(' ').slice(1).join(' ');
  }

  return (
    <section>
      {content.onHomePage ? <h1><span>{websiteTitle}</span> {remainingTitle}</h1> : <h1>{content.title}</h1> }
      <Button text={content.ctaText} type={content.ctaType} />
    </section>
  );
}

export default Hero;
