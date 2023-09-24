import React from 'react';
import Marquee from '../../Marquee';

import '../App.css';
import ListOfTeam from './ListOfTeam';

const AboutPage = () => {
  const technologies = "Technologies used: Vite, React, Pinata, Node, Express, Axios, Bootstrap, Open AI API, Pinata API"
    .toUpperCase()
    .split(', ')
    .join(' | ');

  return (
    <>
      <div>
        <ListOfTeam />
        <Marquee text={technologies} speed={2} />
      </div>
    </>
  );
}
export default AboutPage;