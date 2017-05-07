import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import NavigationModal from './navigation-modal.js';

class Navigation extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: false,
        }
    }

    handleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    render() {
        const circle = {
            padding: '0px',
            position: 'fixed',
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            zIndex: '90000',
        }

        const modalVisibility = this.state.isOpen;

        return (
            <div>
                {
                    modalVisibility ? (
                        <NavigationModal clickHandler={this.handleClick} />
                    ) : (
                        <div></div>
                    )
                }
                <div className="App-header">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
                </div>
                <div className="Nav-circle" style={circle}>
                    <div className={modalVisibility ? 'open' : ''} id="nav-icon" onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navigation;
