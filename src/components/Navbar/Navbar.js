import React, { Component } from 'react';
import { Button } from './Button';
import SearchBar from './SearchBar';
import LogInForm from '../Forms/LogInForm';
import SignUpForm from '../Forms/SignUpForm';
import './Navbar.css'

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
          showLogIn: false,
          showSignUp: false
        };
        this.showLogInModal = this.showModal.bind(this);
        this.hideLogInModal = this.hideModal.bind(this);
        this.showSignUpModal = this.showModal.bind(this);
        this.hideSignUpModal = this.hideModal.bind(this);
      }
    
      showLogInModal = () => {
        this.setState({ showLogIn: true });
      };
      hideLogInModal = () => {
        this.setState({ showLogIn: false });
      };
      showSignUpModal = () => {
        this.setState({ showSignUp: true });
      };
      hideSignUpModal = () => {
        this.setState({ showSignUp: false });
      };

    state = { colciked: false }

    render() {
        return(

            <nav className="NavbarItems">
                <h1 className="navbar-logo">PostIT</h1>
                <SearchBar />

                <div className="nav-menu"></div>
                {/* <Button type="button" onClick={SignUpForm.showModal} id="signup-btn">Sign Up</Button>
                <Button type="button" onClick={LogInForm.showModal} id="login-btn">Log In</Button> */}

                <SignUpForm show={this.state.show} handleClose={this.hideModal}>
                    <p>SignUpForm</p>
                </SignUpForm>
                <LogInForm show={this.state.show} handleClose={this.hideModal}>
                    <p>LogInForm</p>
                </LogInForm>
                <button type="button" onClick={this.showModal}>
                    Open
                </button>
                
                                
            </nav>
        )
    }
}

export default Navbar