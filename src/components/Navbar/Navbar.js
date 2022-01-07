import React, { Component } from 'react';
import { Button } from './Button';
import SearchBar from './SearchBar';
import LogInForm from '../Forms/LogInForm';
import SignUpForm from '../Forms/SignUpForm';
import './Navbar.css'

const Navbar = ({ loginModalShow, signupModalShow, setSignupModalShow, setLoginModalShow }) => {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">PostIT</h1>
            <SearchBar />
            <Button onClick={() => setSignupModalShow(true)}>
                Sign Up
            </Button>

            <SignUpForm
                show={signupModalShow}
                onHide={() => setSignupModalShow(false)}
            />

            <Button onClick={() => setLoginModalShow(true)}>
                Log In
            </Button>

            <LogInForm
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
            />

            <div className="nav-menu"></div>
        </nav>
    );
}

export default Navbar