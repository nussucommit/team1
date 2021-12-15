import React, { Component } from 'react';
import { Button } from './Button';
import SearchBar from './SearchBar';
import './Navbar.css'

class Navbar extends React.Component {
    state = { colciked: false }


    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">PostIT</h1>
                <SearchBar />

                <div className="nav-menu"></div>
                <Button>Sign Up</Button>
                <Button>Log In</Button>
            </nav>
        )
    }
}

export default Navbar