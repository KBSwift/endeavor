import React from 'react';
import '../App.css';
import PinFileComponent from './PinFileComponent';
import PinTextFileComponent from './PinTextFileComponent';

const CreateContentPage = () => {
  return (
    <> 
        <header className="bg-primary text-white text-center py-5">
            <h1>Create New Content</h1>
            <p>Welcome to our content creation page. Share your thoughts with the world!</p>
        </header>
        
        <div className="container mt-5">
            <PinFileComponent />
            <PinTextFileComponent />
        </div>
    </>
  );
}

export default CreateContentPage;

