import React from 'react';

import '../App.css';

import BlogList from './BlogList';
import CreateContentForm from './CreateContentForm';

const LandingPage = () => {
  return (
    <div className="App">
        <BlogList title="Featured Posts"/>
        <CreateContentForm />
    </div>
  );
}

export default LandingPage;