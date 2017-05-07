import React, { Component } from 'react';
import Qoute from '../../data/qoute.js';

class QouteColumn extends Component {
    constructor(props) {
        super(props);
        let data = Qoute.CEO;
        this.state = {
            data: data,
            text: data.text,
            name: data.name,
            position: data.position,
        };
    }

    render() {
        const container = {
            backgroundColor: '#ED1C7F',
            margin: '0',
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
        }

        const row = {
            padding: '20px',
        }

        const col = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignContent: 'center',
            margin: '15px auto',
            padding: '20px',
            color: '#fff',
            textAlign: 'left',
        }

        const qoute = {
            fontFamily: 'Texta Heavy',
            fontStyle: 'Italic',
            fontSize: '3.2em',
        }

        const name = {
            fontFamily: 'Texta Heavy',
            fontStyle: 'Italic',
            fontSize: '2.5em',
            color: '#0A2037',
        }

        const position = {
            fontFamily: 'Texta Light',
            fontStyle: 'Italic',
            color: '#0A2037',
            fontSize: '2.2em',
        }

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col" style={col}>
                        <h1 style={qoute}>"{this.state.text}"</h1>
                        <br />
                        <h2 style={name}>- {this.state.name}</h2>
                        <h3 style={position}>{this.state.position}</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default QouteColumn;
