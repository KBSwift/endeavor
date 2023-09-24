import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { NavLink } from 'react-router-dom';

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
      <Link to={"/create-content"}><Button text={content.ctaText} type={content.ctaType} /></Link>
    </section>
  );
}

export default Hero;
