import React, { Component } from 'react';
import { Button } from './Button';
import SearchBar from './SearchBar';
import { MenuItems } from "./MenuItems";
import './Navbar.css'

class Navbar extends React.Component {
    state = { colciked: false }


    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">PostIT</h1>
                <SearchBar />

                <div className="nav-menu"></div>
                {/* <ul className="nav-menu active">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}  
                </ul>  */}
                <Button className="btn">Sign Up</Button>
                <Button className="btn">Log In</Button>
            </nav>
        )
    }
}

export default Navbar