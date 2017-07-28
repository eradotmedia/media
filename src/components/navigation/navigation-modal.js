import React, { Component } from 'react';
import NavLink from './nav-link.js';

class NavigationModal extends Component {

    render() {
        const overlay = {
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            zIndex: '10000',
            background: 'RGBA(10, 32, 55, 0.90)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'row',
            WebkitJustifyContent: 'center',
            WebkitAlignItems: 'center',
        };

        const container = {
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitJustifyContent: 'center',
            WebkitAlignItems: 'flex-start',
            padding: '50px 10px',
            margin: '5px',
            width: '90%',
        };

        const row = {
            margin: '5px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: '-webkit-flex',
            WebkitFlexDirection: 'row',
            WebkitJustifyContent: 'flex-start',
            WebkitAlignItems: 'flex-start',
            width: 'inherit',
        };

        const col = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitAlignItems: 'flex-start',
            color: 'white',
            width: 'inherit',
        };

        const paragraph = {
            fontFamily: 'Agaramond Regular',
            letterSpacing: '1px',
            textAlign: 'left',
            lineHeight: '1.0em',
            fontStyle: 'normal',
            margin: '0',
        };

        return (
            <div className="container-fluid" style={overlay}>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col" style={col}>
                            <NavLink to="/" className="menu-link" onClick={this.props.clickHandler} ><h1 className="Nav-link" style={paragraph}>home.</h1></NavLink>
                            <NavLink to="work" className="menu-link" onClick={this.props.clickHandler} ><h1 className="Nav-link" style={paragraph}>work.</h1></NavLink>
                            <NavLink to="about-us" className="menu-link" onClick={this.props.clickHandler} ><h1 className="Nav-link" style={paragraph}>about us.</h1></NavLink>
                            <NavLink to="capabilities" className="menu-link" onClick={this.props.clickHandler} ><h1 className="Nav-link" style={paragraph}>capabilities.</h1></NavLink>
                            {/* <NavLink to="careers" className="menu-link" onClick={this.props.clickHandler} ><h1 className="Nav-link" style={paragraph}>careers.</h1></NavLink> */}
                            <NavLink to="contact-us" className="menu-link" onClick={this.props.clickHandler} ><h1 className="Nav-link" style={paragraph}>contact us.</h1></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationModal;
