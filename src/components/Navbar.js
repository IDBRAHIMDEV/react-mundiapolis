import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Mundiapolis</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home
                        <span className="visually-hidden">(current)</span>
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                   
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/articles">Blog</NavLink>
                    </li>
                </ul>
               
                </div>
            </div>
            </nav>
    )
}

export default Navbar
