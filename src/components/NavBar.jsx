import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"><img src="src\assets\logo.png"></img><p style={{fontFamily: "cursive"}}>Inspire your thoughts</p></a>
                <button
                    // Add "toggler" for hamburger menu toggle as below instead of just navbar
                    // className="navbar-toggler"
                    className="navbar"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* Use for creating responsive hamburger menu */}
                    {/* <span className="navbar-toggler-icon"></span>  */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create-content">Create Content</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog-posts">View Posts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
