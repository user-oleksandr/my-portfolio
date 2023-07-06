import React from 'react';
import {NavLink} from 'react-router-dom';


function Navigation() {
    return (
        <nav className="navbar navbar-dark navigations bg-secondary fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <button
                    className="navbar-toggler text-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end bg-secondary navigations-menu"
                    tabIndex="-1"
                    id="navbarNav"
                    aria-labelledby="navbarNavLabel"
                    style={{width: '20em'}}
                >
                    <div className="offcanvas-header ">
                        <h5 className="offcanvas-title text-light" id="navbarNavLabel">
                            My Portfolio
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link text-light">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link text-light test">
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
