import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS (if not added globally)

function HeaderBox() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col">
                    <div style={{textAlign:"center"}}>
                        <h1 className="display-4 text-center">
                            Discover a World of Digital Art & Stories 
                        </h1>
                        <p className="lead mt-3">
                            Dive into an ever-expanding universe of breathtaking digital artistry and captivating blog posts, all powered by the Pinata API.
                        </p>
                        <ul style={{listStyleType: "none"}}>
                            <li>Curated Collections: Explore hand-picked pieces and writings that inspire and resonate.</li>
                            <li>Decentralized & Secure: Experience the future with content stored on the decentralized web.</li>
                            <li>Fresh & Dynamic: New content added daily to keep your inspiration flowing.</li>
                        </ul>
                        <p className="mt-3">
                            💡 <i>Are you an artist or writer?</i> Join our community and showcase your talent to a global audience!
                        </p>
                        <div className="text-center mt-4">
                            <a href="#link-to-browse-section" className="btn btn-primary">
                                Start Exploring Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBox;
