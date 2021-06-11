import React from "react"
import './Nav.css';

function Nav() {
    return (
        <div className="navigation-bar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <a className="navbar-brand brand" href="/"><h3><b>Vaccination Center</b></h3></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-4">
                        <a className="btn btn-outline-dark start" href="/details">View Your Details</a>
                    </ul>
                    <ul className="navbar-nav ml-4">
                        <a className="btn btn-outline-dark start" href="/create">Submit Your Details</a>
                    </ul>
                    <ul className="navbar-nav ml-4">
                        <a className="btn btn-outline-dark start" href="/user">Create User</a>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <a className="btn btn-outline-dark start" href="/dashboard">Admin Dashboard</a>
                    </ul>
                </div>


            </div>
        </nav>
        </div>
    );
}

export default Nav;