import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        return (
            <nav  className="navbar navbar-expand-lg fluid" style={{backgroundColor: "#FBBBBB"}}>
                <Link to="/" className="navbar-brand" style={{paddingLeft: "20px",paddingRight:"20px",color:"black"}}>Vaccination Center</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/details" className="nav-link" style={{paddingLeft: "20px",paddingRight:"20px",color:"red"}}> View Your Details</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link" style={{paddingLeft: "20px",paddingRight:"20px",color:"white",fantail:"Droid Sans"}}>Submit Your Details</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link" style={{paddingLeft: "20px",paddingRight:"20px",color:"white"}}>Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/dashboard" className="nav-link" style={{paddingLeft: "20px",paddingRight:"20px",color:"white"}}>Admin Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
