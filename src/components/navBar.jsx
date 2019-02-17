import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container collapse navbar-collapse" id="navbarNav">
                <div className="nav nav-pills">
                    <Link className="navbar-brand" to="/">Vidly</Link>
                    <NavLink className="nav-link nav-item" to="/movies">Movies <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link nav-item" to="/customers">Customers</NavLink>
                    <NavLink className="nav-link nav-item" to="/rentals">Rentals</NavLink>
                    {!user && (
                        <React.Fragment>
                        <NavLink className="nav-item nav-link" to="/login">
                            Login
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/register">
                            Register
                        </NavLink>
                        </React.Fragment>
                    )}
                    {user && (
                        <React.Fragment>
                        <NavLink className="nav-item nav-link" to="/profile">
                            {user.name}
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/logout">
                            Logout
                        </NavLink>
                        </React.Fragment>
                    )}
                </div>
                </div>
            </nav>;
}

export default NavBar;