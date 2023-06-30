import React from 'react';

const Footer = () => {
    return (
        <footer className="text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h6>My Portfolio</h6>
                    </div>
                    <div className="col-lg-4">
                        <h6>Contact</h6>
                        <ul className="list-unstyled">
                            <li><a href="https://t.me/username_oleksandr" target="_blank"
                                   rel="noopener noreferrer">username_oleksandr</a></li>
                            <li><a href="mailto:aavwork@ukr.net" target="_blank"
                                   rel="noopener noreferrer">aavwork@ukr.net</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h6>Follow Me</h6>
                        <ul className="list-unstyled">
                            <li><a href="https://www.linkedin.com/in/oleksandr-anastasiiev-374925259/" target="_blank"
                                   rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/user-oleksandr" target="_blank"
                                   rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
