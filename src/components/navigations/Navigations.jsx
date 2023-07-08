import React from 'react';
import {NavLink} from 'react-router-dom';


function Navigation() {
    return (
        <nav className="navbar bg-secondary fixed-top navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand">My portfolio</a>
                <div className="offcanvas offcanvas-start bg-secondary rounded shadow" tabIndex="-1"
                     id="offcanvasNavbar"
                     aria-labelledby="offcanvasNavbarLabel" style={{width: '275px'}}>
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">My portfolio</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link">
                                    My Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
