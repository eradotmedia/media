import React, { Component } from 'react';

class FullWidthImage extends Component {
    render() {
        const container = {
            margin: '25px auto',
            background: `#fff url(${this.props.data}) no-repeat top center / cover`,
            height: '550px',
            width: '100%',
        };

        return (
            <div className="container" style={container}>

            </div>
        );
    }
}

export default FullWidthImage;
