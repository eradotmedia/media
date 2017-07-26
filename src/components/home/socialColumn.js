import React, { Component } from 'react';

class SocialColumn extends Component {
    constructor(props) {
        super(props);

        let data = props.data;
        this.state = {
            data: data,
            text: data.text,
            image: data.image,
            background: data.background,
        };

    }

    render() {
        const container = {
            background: `#fff url(${this.state.background}) no-repeat center center / cover`,
            margin: '0',
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'flex-start',
        }

        const row = {
            backgroundColor: 'RGBA(10, 32, 55, 0.70)',
        }

        const col = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-center',
            alignContent: 'space-between',
            padding: '25px',
            color: '#fff',
            textAlign: 'left',
        }

        const paragraph = {
            fontFamily: 'Texta Book',
            fontSize: '1.1em',
            lineHeight: '1.2em',
            fontStyle: 'normal',
            padding: '0',
            margin: '0px 10px',
        }

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col" style={col}>
                        <p style={paragraph}>{this.state.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialColumn;
