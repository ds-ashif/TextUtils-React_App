import React from "react"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// export default function Navbar({ title = "Set ur Title here", abouttxt = "set ur about here" }) {
//     return (...)};

// the above method is used to pass default props to function if no prop is set in our App.jsx then that default props will be shown

export default function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.abouttxt}
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary mx-1" type="submit">
                            Search
                        </button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable DarkMode':'Enable LightMode'}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttxt: PropTypes.string.isRequired
};


