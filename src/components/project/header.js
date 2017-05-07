import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        let data = props.data;
        this.state = {
            data: data,
            heading: data.heading,
            client: data.client,
            project: data.project,
            background: data.background,
        };
    }

    render() {
        const mainContainer = {
            background: `#fff url(${this.state.background}) no-repeat top center / cover`,
            margin: '0',
            width: 'inherit',
            minHeight: '550px',
            color: '#FFF',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }

        const container = {
            margin: '10px auto',
            padding: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }

        const row = {
            padding: '15px 0px',
            width: '90%',
        }

        const col = {
            padding: '15px',
        }

        const heading = {
            fontFamily: 'Texta Heavy',
            lineHeight: '1.1em',
            margin: '0',
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-5" style={col}>
                            <h1 style={heading}>{this.state.heading}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;
