import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const container = {
            color: '#FFFFFF',
            height: '93vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '60px 30px',
        }

        const row = {
            padding: '20px',
        }

        const button = {
            fontFamily: 'Texta Heavy',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ED1C7F',
            padding: '0',
        }

        const heading = {
            fontFamily: 'Texta Heavy',
            color: '#FFFFFF',
            letterSpacing: '1px',
        }

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col-xs-12 col-md-6">
                        <h1 className="contact-form-input" style={heading}>thanks for that! We’ll get back to you shortly.</h1>
                        <br />
                        <br />
                        <button style={button} type="submit" className="btn btn-primary contact-form-input" onClick={this.props.modalHandler}>okay.</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;
