import React, { Component } from 'react';

class Quote extends Component {
    render() {
        const container = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitJustifyContent: 'center',
            WebkitAlignItems: 'center',
            overflow: 'hidden',
            margin: '50px auto',
        };

        const row = {
            width: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        const text = {
            fontFamily: 'Texta Heavy',
            textAlign: 'center',
        };

        const topLine = {
            width: '100px',
            height: '40px',
            padding: '30px 0',
            borderTop: '#000 solid 3px',
        };

        const bottomLine = {
            width: '100px',
            height: '40px',
            padding: '30px 0',
            borderBottom: '#000 solid 3px',
        };

        return (
            <div className="container" style={container}>
                <div className="row" style={topLine}></div>
                <div className="row" style={row}>
                    <h2 style={text}>"{this.props.data}"</h2>
                </div>
                <div className="row" style={bottomLine}></div>
            </div>
        );
    }
}

export default Quote;
