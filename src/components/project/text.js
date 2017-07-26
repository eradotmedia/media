import React, { Component } from 'react';

const paragraph = {
    fontFamily: 'Texta',
    fontSize: '1.1em',
    lineHeight: '1.2em',
    margin: '0',
};

class Text extends Component {
    constructor(props) {
        super(props);

        const data = props.data;

        this.state = {
            data: data,
        }
    }

    render() {
        const approach = this.props.data.approach;
        const container = {
            margin: '50px auto 20px',
            padding: '5px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }

        const row = {
            padding: '25px 0px',
            width: '80%',
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
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col-xs-12 col-md-4" style={col}>
                        <h1 style={heading}>{this.state.data.client} -</h1>
                        <h1 style={heading}>{this.state.data.project}</h1>
                    </div>
                    <div className="col-xs-12 col-md-8" style={col}>
                        <p style={paragraph}>{this.state.data.about}</p>
                        <br/>
                        <p style={paragraph}>{this.state.data.goal}</p>
                        <br/>
                        {this.renderApproach(approach)}
                    </div>
                </div>
            </div>
        );
    }

    renderApproach(approach) {
        let keys = Object.keys(approach).map(item => approach[item]);
        console.log(keys, approach);
        return (
            keys.map(function(element, index) {
                return (
                    <div key={index}>
                        <p style={paragraph}>{element}</p>
                        <br/>
                    </div>
                );
            })
        );
    };
};

export default Text;
