import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="src\assets\logo.png" alt="Logo" style={{ height: '50px', maxWidth: '100%' }} />
                    <p style={{ fontFamily: 'cursive' }}>Inspire your thoughts</p>
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create-content">Create Content</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog-posts">View Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/art-gallery">Art Gallery</a>
                        </li>
                    </ul>
                </div>

                <div className="ml-5">
                <button className="btn btn-primary rounded-pill mx-2" style={{ backgroundColor: 'white', borderColor: 'blue', color: 'blue' }}>Log In</button>
                <a href="/create-content" className="btn btn-success rounded-pill" style={{ backgroundColor: 'blue' }}>Start Writing</a>                </div>
            </div>
        </nav>
    );
};

export default Navbar;
