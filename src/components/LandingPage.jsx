import React from 'react';

import '../App.css';

import BlockList from './BlogList';
import CreateContentForm from './CreateContentForm';

const LandingPage = () => {
      return (
        <div className="App">
            <BlockList title="Featured Posts"/>
            <CreateContentForm />
        </div>
      );
    }
  export default LandingPage;