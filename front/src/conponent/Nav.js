import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <Link to="/" className="navbar-brand">
                        <img className="logo" src="images/mern.png"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fw-bold">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Board" className="nav-link fw-bold">
                                    Board
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link fw-bold">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <hr/>
        </>
    );
}

export default Nav;