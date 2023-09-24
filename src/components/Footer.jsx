import React from 'react';
import '../components/Footer.css'; 

const Footer = () => {
    return (
        <div className="custom-footer">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Discover the beauty of art and writing, curated specially for you.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Links</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/art-gallery">Gallery</a></li>
                            <li><a href="/blog-posts">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>Email: endvr@gmail.com</p>
                        <p>Phone: +1 (234) 567-8901</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center py-3">
                        &copy; 2023 ENDVR. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
