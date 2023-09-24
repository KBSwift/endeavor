import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayBlogPostContent = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get('http://localhost:5000/fetchFromIPFS');
                setContent(response.data);
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };

        fetchContent();
    }, []);

    return (
        <div>
            <h3>Retrieved Content from IPFS:</h3>
            <p>{content}</p>
        </div>
    );
};

export default DisplayBlogPostContent;