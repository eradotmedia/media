import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import NavigationModal from './navigation-modal.js';

class Navigation extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isOpen: false,
            navBackgroundColor: 'transparent',
            navItemsTop: '50px',
            logoHeight: '35px'
        }
    }

    handleScroll() {
        if(window.pageYOffset >= 120) {
            this.setState({
                navBackgroundColor: 'rgba(10, 32, 55, 0.9)',
                navItemsTop: '30px',
                logoHeight: '25px',
            });
        } else {
            this.setState({
                navBackgroundColor: 'transparent',
                navItemsTop: '50px',
                logoHeight: '35px',
            });
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    render() {
        const modalVisibility = this.state.isOpen;

        return (
            <div ref="navbar" className="App-nav-bar" style={{backgroundColor: this.state.navBackgroundColor}}>
                {
                    modalVisibility ? (
                        <NavigationModal clickHandler={this.handleClick} />
                    ) : (
                        <div></div>
                    )
                }
                <div className="App-header" style={{top: this.state.navItemsTop}}>
                    <Link to="/"><img src={logo} style={{height: this.state.logoHeight}} className="App-logo" alt="logo"/></Link>
                </div>
                <div className="Nav-circle" style={{top: this.state.navItemsTop}}>
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
}

export default Navigation;
