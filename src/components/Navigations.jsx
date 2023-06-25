import React from 'react';
import {NavLink} from 'react-router-dom';


function Navigation() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">My portfolio</a>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-dark rounded" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">My portfolio</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <div className="container">
                                <NavLink exact to="/" className="nav-link text-light">
                                    About
                                </NavLink>
                                <NavLink to="/projects" className="nav-link text-light">
                                    My Projects
                                </NavLink>
                                <NavLink to="/contact" className="nav-link text-light">
                                    Contact
                                </NavLink>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navigation;
