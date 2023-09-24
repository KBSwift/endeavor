import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            {/* ALTERNATIVE FOR PADDING L/R */}
            {/* <div className="container"> */}
            <div className="container-fluid" style={{ padding: "0px 13% 0px 10%" }}>

                <a className="navbar-brand" href="/">
                    <img src="src\assets\logo.png" alt="Logo" style={{ height: '50px', maxWidth: '100%' }} />
                    <p style={{ fontFamily: 'cursive', color: "white" }}>Inspire your thoughts</p>
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
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                    </ul>
                </div>

                {/* ALTERNATIVE ml-auto to push the buttons to the right */}
                {/* <div className="ml-5"> */}
                <div className="ml-auto">
                    <button className="btn btn-primary rounded-pill mx-2" style={{ backgroundColor: 'white', borderColor: 'blue', color: 'blue' }}>Log In</button>
                    <a href="/ai-me" className="btn btn-success rounded-pill" id='ai-button'
                        style={{
                            backgroundColor: '#B118C8', border: "#B118C8", fontSize: "large"
                        }}>AI Me</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
