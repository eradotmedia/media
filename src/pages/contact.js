import React, { Component } from 'react';
import ContactForm from '../components/contact/contact-form';
import Modal from '../components/contact/modal';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            modal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        const modalState = this.state.modal;
        const mainContainer = {
            margin: '0',
            padding: '0',
            backgroundColor: 'RGBA(10, 32, 55, 1.00)',
            height: '100%',
        }

        const container = {
            padding: '60px 30px',
        }

        const row = {
            padding: '20px 0px',
        }

        const col = {
            padding: '40px',
        }

        const heading = {
            fontFamily: 'Texta Heavy',
            color: '#FFFFFF',
            letterSpacing: '1px',
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                {!modalState ?
                    <div className="container" style={container}>
                        <div className="row" style={row}>
                            <div className="col" style={col}>
                                <div className="row" style={row}>
                                    <div className="col-xs-12 col-md-8 col-lg-6">
                                        <h1 className="contact-form-input" style={heading}>you've gotten this far, you must want to work with us.</h1>
                                    </div>
                                </div>
                                <div className="row" style={row}>
                                    <ContactForm modalHandler={this.toggleModal}/>
                                </div>
                            </div>
                        </div>
                    </div>
                     :
                     <Modal modalHandler={this.toggleModal}/>
                 }
            </div>
        );
    }
};

export default Contact;
