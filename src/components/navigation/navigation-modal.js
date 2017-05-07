import React, { Component } from 'react';
import NavLink from './nav-link.js';

class NavigationModal extends Component {

    render() {
        const overlay = {
            backgroundColor: 'RGBA(5, 5, 5, 0.90)',
        };

        const container = {
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            background: 'RGBA(10, 32, 55, 0.90)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '0',
            padding: '25px',
            margin: '0px',
            height: 'initial',
            width: 'initial',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            zIndex: '10000',
        };

        const row = {
            marginTop: '120px',
            marginLeft: '80px',
        };

        const col = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: '80px',
            color: 'white',
        };

        const paragraph = {
            fontFamily: 'Agaramond Regular',
            letterSpacing: '1px',
            textAlign: 'left',
            fontSize: '5.0em',
            lineHeight: '1.0em',
            fontStyle: 'normal',
            margin: '0',
        };

        return (
            <div className="container-fluid" style={overlay}>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col" style={col}>
                            <NavLink to="/" className="menu-link" onClick={this.props.clickHandler} ><h1 style={paragraph}>home.</h1></NavLink>
                            <NavLink to="work" className="menu-link" onClick={this.props.clickHandler} ><h1 style={paragraph}>work.</h1></NavLink>
                            <NavLink to="about-us" className="menu-link" onClick={this.props.clickHandler} ><h1 style={paragraph}>about us.</h1></NavLink>
                            <NavLink to="capabilities" className="menu-link" onClick={this.props.clickHandler} ><h1 style={paragraph}>capabilities.</h1></NavLink>
                            <NavLink to="careers" className="menu-link" onClick={this.props.clickHandler} ><h1 style={paragraph}>careers.</h1></NavLink>
                            <NavLink to="contact-us" className="menu-link" onClick={this.props.clickHandler} ><h1 style={paragraph}>contact us.</h1></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavigationModal;
