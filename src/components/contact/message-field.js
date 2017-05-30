import React, { Component } from 'react';

class MessageField extends Component {
    constructor() {
        super();

        this.state = {
            valid: false,
            value: "",
        }

        this.onChange = this.onChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    onChange(e) {
        this.setState({
            valid: true,
            value: e.target.value,
        });
    }

    clear() {
        this.setState({
            valid: false,
            value: "",
        });
    }

    render() {
        const formCol = {
            padding: '20px 18px',
        }

        const input = {
            fontFamily: 'Texta Heavy',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '2px solid RGBA(255, 255, 255, 0.65)',
            borderRadius: '0px',
            padding: '10px 0px',
            color: '#FFFFFF'
        }

        return (
            <div className="col-md-12" style={formCol}>
                <textarea style={input} type="text" className="form-control contact-form-input" id="formGroupExampleInput" placeholder="what's up?" value={this.state.value} onChange={this.onChange}></textarea>
            </div>
        );
    }
};

export default MessageField;
