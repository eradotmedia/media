import React, { Component } from 'react';

class Image extends Component {
    render() {
        const container = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'row',
            WebkitJustifyContent: 'center',
            padding: '20px',
        };

        const row = {
            margin: '0px',
            padding: '20px 0',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitJustifyContent: 'center',
        };

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <img className="img-fluid" src={this.props.data} alt="portfolio"/>
                </div>
            </div>
        );
    }
}

export default Image;
