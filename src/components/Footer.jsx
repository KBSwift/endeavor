import React from 'react';

const Footer = () => {
    return (
        <footer className="custom-footer text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; {new Date().getFullYear()} TEST</p>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="/" className="text-light">Home</a></li>
                            <li className="list-inline-item"><a href="/about" className="text-light">About</a></li>
                            <li className="list-inline-item"><a href="/contact" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
