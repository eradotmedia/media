import React, { Component } from 'react';
import * as firebase from 'firebase';
import NameField from './name-field';
import EmailField from './email-field';
import SubjectField from './subject-field';
import MessageField from './message-field';

class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            valid: false,
            valueName: "",
            valueEmail: "",
            valueSubject: "",
            valueMessage: "",
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.clear = this.clear.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const name = this.refs.fieldName.state.value;
        const email = this.refs.fieldEmail.state.value;
        const subject = this.refs.fieldSubject.state.value;
        const message = this.refs.fieldMessage.state.value;

        if (name.length === 0 || email.length === 0 || subject.length === 0 || message.length === 0) {
            alert('All form fields are required!');
        } else {
            this.pushToFirebase(name, email, subject, message);
            this.clear();
        }
    }

    pushToFirebase(name, email, subject, message) {
        const rootRef = firebase.database().ref().child('emails');;
        const newSubscriberRef = rootRef.push()
        newSubscriberRef.set({
            name: name,
            email: email,
            subject: subject,
            message: message,
        });
    }

    clear() {
        this.refs.fieldName.clear();
        this.refs.fieldEmail.clear();
        this.refs.fieldSubject.clear();
        this.refs.fieldMessage.clear();
        this.props.modalHandler();
    }

    render() {
        const row = {
            padding: '20px 0px',
        }

        const button = {
            fontFamily: 'Texta Heavy',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ED1C7F',
            padding: '0',
        }

        return (
            <div className="col">
                <form>
                    <div className="form-group row" style={row}>
                        <NameField ref="fieldName" />
                        <EmailField ref="fieldEmail" />
                        <SubjectField ref="fieldSubject" />
                        <MessageField ref="fieldMessage" />
                    </div>
                    <div className="form-group row" style={row}>
                        <div className="col">
                            <button style={button} type="submit" className="btn btn-primary contact-form-input" onClick={this.onSubmit}>submit.</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default ContactForm;
