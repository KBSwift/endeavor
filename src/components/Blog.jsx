import React, { useState } from 'react';
import axios from 'axios'; 

const Blog = () => {

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        const post = {
            title: event.target.title.value,
            content: event.target.content.value
        };
    
        try {
            const response = await axios.post('http://localhost:3001/addPost', post);
            if (response.data.success) {
                console.log("Blog post added with CID:", response.data.cid);
            } else {
                console.error("Failed to add post:", response.data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    return (
        <div className="App">
            <h2>This is a blog page</h2>

            {/* Adding the form */}
            <form onSubmit={handleFormSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <br />

                <label>
                    Content:
                    <textarea name="content"></textarea>
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default Blog;