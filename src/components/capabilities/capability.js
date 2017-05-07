import React, { Component } from 'react';

class Capability extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;

        this.state = {
            icon: data.icon.white,
            title: data.title,
            text: data.text,
            project: data.project,
            link: data.link,
        }
    }
    render() {
        const col = {
            padding: '60px',
        }

        const row = {
            display: 'block',
            margin: 'auto',
            textAlign: 'center',
            padding: '20px',
        }

        const heading = {
            fontFamily: 'Texta Heavy',
            letterSpacing: '1px',
            width: '120px',
            color: '#FFFFFF',
        }

        const paragraph = {
            color: '#FFFFFF',
            fontFamily: 'Texta Light',
            fontSize: '1.1em',
        }

        const link = {
            fontFamily: 'Agaramond Regular',
            backgroundColor: '#ED1C7F',
            padding: '10px 15px',
            color: '#FFFFFF',
        }

        return (
            <div className="col-xs-12 col-md-6" style={col}>
                <div className="row" style={row}>
                    <img src={this.state.icon} height="100px" width="100px" alt="icon"/>
                </div>
                <br />
                <h4 style={heading}>{this.state.title}</h4>
                <br />
                <p style={paragraph}>{this.state.text}</p>
                <br />
                <p><span style={link}>Read more about the</span></p>
                <p><a href={this.state.link} style={link}><span>{this.state.project}</span></a></p>
            </div>
        );
    }
};

export default Capability;
