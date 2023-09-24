import React from 'react';
import Marquee from '../../Marquee';

import '../App.css';

const AboutPage = () => {
      const technologies = "Technologies used: Vite, React, Pinata, Node, Express, Axios, Bootstrap, Open AI API, Pinata API"
        .toUpperCase() 
        .split(', ') 
        .join(' | '); 
    
      return (
        <div>
          <Marquee text={technologies} speed={2} />
        </div>
  );
}
export default AboutPage;