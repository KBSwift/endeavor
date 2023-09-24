// src/components/BlogPosts.js

import React from 'react';
import blogData from '../data/fakeBlogPosts.json';

function FakeBlogPostsList() {
    return (
        <div className="container mt-5">
            {blogData.posts.map(post => (
                <div key={post.id} className="card mb-4">
                    <div className="card-header">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">By {post.author} on {post.date}</h5>
                        <p className="card-text">{post.content}</p>
                    </div>
                    <div className="card-footer">
                        Tags: {post.tags.join(', ')}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FakeBlogPostsList;
